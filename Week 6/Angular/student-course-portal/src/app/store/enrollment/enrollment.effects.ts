import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EnrollmentService } from '../../services/enrollment';
import * as EnrollmentActions from './enrollment.actions';
import * as CourseActions from '../course/course.actions';
import { catchError, map, mergeMap, of, switchMap } from 'rxjs';

@Injectable()
export class EnrollmentEffects {
  enrollInCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.enrollInCourse),
      mergeMap(({ courseId }) =>
        this.enrollmentService.enroll(courseId).pipe(
          map(() => EnrollmentActions.enrollInCourseSuccess({ courseId })),
          catchError(() => of({ type: 'NOOP' })) // Fallback or handle error
        )
      )
    )
  );

  unenrollFromCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EnrollmentActions.unenrollFromCourse),
      mergeMap(({ courseId }) =>
        this.enrollmentService.unenroll(courseId).pipe(
          map(() => EnrollmentActions.unenrollFromCourseSuccess({ courseId })),
          catchError(() => of({ type: 'NOOP' }))
        )
      )
    )
  );

  initEnrollments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CourseActions.loadCoursesSuccess),
      map(({ courses }) => {
        const enrolledIds = courses.filter((c) => c.enrolled).map((c) => c.id);
        return EnrollmentActions.setEnrolledCourses({ courseIds: enrolledIds });
      })
    )
  );

  constructor(
    private actions$: Actions,
    private enrollmentService: EnrollmentService
  ) {}
}
