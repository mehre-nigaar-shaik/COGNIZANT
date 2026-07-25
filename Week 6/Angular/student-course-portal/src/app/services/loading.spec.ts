import { TestBed } from '@angular/core/testing';
import { LoadingService } from './loading';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingService]
    });
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should toggle loading state', (done) => {
    service.isLoading$.subscribe(state => {
      // Initially false, then should be true when shown
      if (state) {
        expect(state).toBeTrue();
        done();
      }
    });
    service.show();
  });
});
