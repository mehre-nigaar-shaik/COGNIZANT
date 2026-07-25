import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';

export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {
  const router = inject(Router);

  return next(req).pipe(
    catchError((error) => {
      console.error('errorHandlerInterceptor caught error:', error);
      
      if (error.status === 401) {
        console.warn('Unauthorized. Navigating to login...');
        router.navigate(['/']);
      } else if (error.status === 500) {
        alert('Server Error (500): Something went wrong on the server.');
      }
      
      return throwError(() => error);
    })
  );
};
