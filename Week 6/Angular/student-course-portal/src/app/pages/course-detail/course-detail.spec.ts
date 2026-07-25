import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseDetail } from './course-detail';
import { CourseService } from '../../services/course';
import { provideRouter } from '@angular/router';
import { of } from 'rxjs';

describe('CourseDetail', () => {
  let component: CourseDetail;
  let fixture: ComponentFixture<CourseDetail>;
  let mockCourseService: jasmine.SpyObj<CourseService>;

  beforeEach(async () => {
    mockCourseService = jasmine.createSpyObj('CourseService', ['getCourseById']);
    mockCourseService.getCourseById.and.returnValue(of({
      id: 1, name: 'Angular Test', code: 'TS101', credits: 3, gradeStatus: 'pending', enrolled: false
    }));

    await TestBed.configureTestingModule({
      imports: [CourseDetail],
      providers: [
        { provide: CourseService, useValue: mockCourseService },
        provideRouter([])
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
