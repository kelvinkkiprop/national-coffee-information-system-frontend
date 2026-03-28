import { inject } from '@angular/core';
import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (request, next) => {

  const authService = inject(AuthService);
  const currentUser = authService.currentUser;
  const token = currentUser?.token || localStorage.getItem('sso_token');

  // AddAuthorizationHeaderWithTokenIfAvailable
  if (token) {
      request = request.clone({
          setHeaders: {
              Authorization: `Bearer ${token}`
          }
      });
  }

  // Proceed
  return next(request);
};
