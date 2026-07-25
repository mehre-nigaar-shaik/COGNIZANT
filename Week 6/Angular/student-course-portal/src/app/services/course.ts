import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl).pipe(
      // Chain map operator to filter out courses with credits <= 0
      map(courses => courses.filter(c => c.credits > 0)),
      // Side effect logging using tap operator
      tap(courses => console.log('Courses loaded from API:', courses.length)),
      // Retry strategy (attempts request up to 2 times on failure)
      retry(2),
      // Catch error block to propagate user-friendly errors
      catchError(err => {
        console.error('Error in CourseService.getCourses:', err);
        return throwError(() => new Error('Failed to load courses. Please try again later.'));
      })
    );
  }

  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/${id}`).pipe(
      retry(2),
      catchError(err => {
        console.error(`Error loading course ID ${id}:`, err);
        return throwError(() => new Error(`Failed to load course details. Please try again.`));
      })
    );
  }

  createCourse(course: Omit<Course, 'id' | 'enrolled'>): Observable<Course> {
    const newCourse = { ...course, enrolled: false };
    return this.http.post<Course>(this.apiUrl, newCourse).pipe(
      catchError(err => {
        console.error('Error creating course:', err);
        return throwError(() => new Error('Failed to submit enrollment request course.'));
      })
    );
  }

  updateCourse(id: number, course: Partial<Course>): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/${id}`, course).pipe(
      catchError(err => {
        console.error(`Error updating course ${id}:`, err);
        return throwError(() => new Error('Failed to update course.'));
      })
    );
  }

  deleteCourse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(err => {
        console.error(`Error deleting course ${id}:`, err);
        return throwError(() => new Error('Failed to delete course.'));
      })
    );
  }

  /*
   * Why tap is preferred over side effects inside map:
   * tap is designed specifically for side effects (like logging, analytics, debugging)
   * because it does not modify the data stream. map is intended for data transformation
   * and must return the transformed data. Using map for side effects is bad practice.
   */
}
