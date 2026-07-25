import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseCard } from './course-card';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { SimpleChange } from '@angular/core';

describe('CourseCard', () => {
  let component: CourseCard;
  let fixture: ComponentFixture<CourseCard>;
  let store: MockStore;
  
  const initialState = {
    enrollment: {
      enrolledCourseIds: []
    }
  };

  const mockCourse = {
    id: 1,
    name: 'Data Structures',
    code: 'CS101',
    credits: 4,
    gradeStatus: 'passed' as const,
    enrolled: false
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseCard],
      providers: [
        provideMockStore({ initialState })
      ]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(CourseCard);
    component = fixture.componentInstance;
    component.course = mockCourse;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the course name in template', () => {
    const titleElement = fixture.debugElement.query(By.css('h3')).nativeElement;
    expect(titleElement.textContent).toContain('Data Structures');
  });

  it('should emit enrollRequested on button click', () => {
    spyOn(component.enrollRequested, 'emit');
    
    const enrollButton = fixture.debugElement.query(By.css('button.btn-enroll')).nativeElement;
    enrollButton.click();
    fixture.detectChanges();

    expect(component.enrollRequested.emit).toHaveBeenCalledWith(1);
  });

  it('should log changes on ngOnChanges', () => {
    spyOn(console, 'log');
    
    component.ngOnChanges({
      course: new SimpleChange(null, mockCourse, true)
    });
    
    expect(console.log).toHaveBeenCalled();
  });
});
