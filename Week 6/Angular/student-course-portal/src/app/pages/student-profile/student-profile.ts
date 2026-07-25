import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';
import { Notification } from '../../components/notification/notification';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectEnrolledCourses } from '../../store/enrollment/enrollment.selectors';
import { loadCourses } from '../../store/course/course.actions';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, Notification],
  templateUrl: './student-profile.html',
  styleUrl: './student-profile.css',
})
export class StudentProfile implements OnInit {
  student = {
    name: 'Amit Tiwari',
    email: 'amit@example.com',
    regNo: 'REG2026FSE43',
    gpa: 3.8,
    major: 'Computer Science & Engineering'
  };

  enrolledCourses$!: Observable<Course[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // Dispatch course loading action to ensure course list cache is populated in store
    this.store.dispatch(loadCourses());
    
    // Select enrolled courses reactively using cross-slice selector
    this.enrolledCourses$ = this.store.select(selectEnrolledCourses);
  }
}
