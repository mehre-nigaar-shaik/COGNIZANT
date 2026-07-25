import { createReducer, on } from '@ngrx/store';
import * as EnrollmentActions from './enrollment.actions';

export interface EnrollmentState {
  enrolledCourseIds: number[];
}

export const initialEnrollmentState: EnrollmentState = {
  enrolledCourseIds: []
};

export const enrollmentReducer = createReducer(
  initialEnrollmentState,
  on(EnrollmentActions.enrollInCourseSuccess, (state, { courseId }) => {
    if (state.enrolledCourseIds.includes(courseId)) return state;
    return {
      ...state,
      enrolledCourseIds: [...state.enrolledCourseIds, courseId]
    };
  }),
  on(EnrollmentActions.unenrollFromCourseSuccess, (state, { courseId }) => ({
    ...state,
    enrolledCourseIds: state.enrolledCourseIds.filter(id => id !== courseId)
  })),
  on(EnrollmentActions.setEnrolledCourses, (state, { courseIds }) => ({
    ...state,
    enrolledCourseIds: courseIds
  }))
);
