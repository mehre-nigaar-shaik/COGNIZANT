import { TestBed } from '@angular/core/testing';
import { CanDeactivateFn } from '@angular/router';
import { unsavedChangesGuard } from './unsaved-changes-guard';
import { ReactiveEnrollmentForm } from '../pages/reactive-enrollment-form/reactive-enrollment-form';

describe('unsavedChangesGuard', () => {
  const executeGuard: CanDeactivateFn<ReactiveEnrollmentForm> = (component, currentRoute, currentState, nextState) => 
      TestBed.runInInjectionContext(() => unsavedChangesGuard(component, currentRoute, currentState, nextState));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
