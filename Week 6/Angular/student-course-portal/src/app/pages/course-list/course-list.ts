import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseCard } from '../../components/course-card/course-card';
import { Course } from '../../models/course.model';
import { FormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadCourses } from '../../store/course/course.actions';
import { selectAllCourses, selectCoursesError, selectCoursesLoading } from '../../store/course/course.selectors';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCard, FormsModule],
  templateUrl: './course-list.html',
  styleUrl: './course-list.css',
})
export class CourseList implements OnInit {
  courses$: Observable<Course[]>;
  isLoading$: Observable<boolean>;
  errorMessage$: Observable<string | null>;
  selectedCourseId: number | null = null;
  searchTerm = '';

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.courses$ = this.store.select(selectAllCourses);
    this.isLoading$ = this.store.select(selectCoursesLoading);
    this.errorMessage$ = this.store.select(selectCoursesError);
  }

  ngOnInit(): void {
    // Read the query parameter search to sync search terms
    this.route.queryParamMap.subscribe(params => {
      this.searchTerm = params.get('search') || '';
    });

    // Dispatch NgRx action to load courses (triggering effect and reducer)
    this.store.dispatch(loadCourses());
  }

  onSearchChange(): void {
    this.router.navigate(['courses'], {
      queryParams: { search: this.searchTerm || null },
      queryParamsHandling: 'merge'
    });
  }

  onEnroll(courseId: number): void {
    console.log('Enroll action bubble from card for course ID:', courseId);
    this.selectedCourseId = courseId;
  }

  goToDetail(courseId: number): void {
    this.router.navigate(['courses', courseId]);
  }

  trackByCourseId(index: number, course: Course): number {
    return course.id;
  }
}
