import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from './home';
import { CourseService } from '../../services/course';
import { of } from 'rxjs';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let mockCourseService: jasmine.SpyObj<CourseService>;

  beforeEach(async () => {
    mockCourseService = jasmine.createSpyObj('CourseService', ['getCourses']);
    mockCourseService.getCourses.and.returnValue(of([]));

    await TestBed.configureTestingModule({
      imports: [Home],
      providers: [
        { provide: CourseService, useValue: mockCourseService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
