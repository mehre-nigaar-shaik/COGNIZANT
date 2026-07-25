import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CourseService } from './course';
import { Course } from '../models/course.model';
import { Observable, BehaviorSubject, map, tap, switchMap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
  private enrolledCourseIdsSubject = new BehaviorSubject<number[]>([]);
  enrolledCourseIds$ = this.enrolledCourseIdsSubject.asObservable();

  constructor(private http: HttpClient, private courseService: CourseService) {
    // Initialize enrollment cache
    this.refreshEnrollments();
  }

  private refreshEnrollments(): void {
    this.http.get<Course[]>('http://localhost:3000/courses').subscribe({
      next: (courses) => {
        const enrolled = courses.filter(c => c.enrolled).map(c => c.id);
        this.enrolledCourseIdsSubject.next(enrolled);
      }
    });
  }

  enroll(courseId: number): Observable<Course> {
    return this.courseService.getCourseById(courseId).pipe(
      switchMap(course => {
        course.enrolled = true;
        return this.http.put<Course>(`http://localhost:3000/courses/${courseId}`, course);
      }),
      tap(() => {
        const current = this.enrolledCourseIdsSubject.value;
        if (!current.includes(courseId)) {
          this.enrolledCourseIdsSubject.next([...current, courseId]);
        }
      })
    );
  }

  unenroll(courseId: number): Observable<Course> {
    return this.courseService.getCourseById(courseId).pipe(
      switchMap(course => {
        course.enrolled = false;
        return this.http.put<Course>(`http://localhost:3000/courses/${courseId}`, course);
      }),
      tap(() => {
        const current = this.enrolledCourseIdsSubject.value;
        this.enrolledCourseIdsSubject.next(current.filter(id => id !== courseId));
      })
    );
  }

  isEnrolled(courseId: number): boolean {
    return this.enrolledCourseIdsSubject.value.includes(courseId);
  }

  getEnrolledCourses(): Observable<Course[]> {
    return this.http.get<Course[]>('http://localhost:3000/courses').pipe(
      map(courses => courses.filter(c => c.enrolled))
    );
  }

  getStudentsByCourse(courseId: number): Observable<any[]> {
    // Mock querying student list enrolled in a specific course
    return this.http.get<any[]>('http://localhost:3000/students').pipe(
      map(students => students.map(s => ({ ...s, courseId })))
    );
  }
}
