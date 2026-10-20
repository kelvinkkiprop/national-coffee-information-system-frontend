// import { HttpInterceptorFn } from '@angular/common/http';

// export const serverErrorsInterceptor: HttpInterceptorFn = (req, next) => {
//   return next(req);
// };


// server-errors.interceptor.ts
import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { tap } from 'rxjs';
// import
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { ToastrService } from '@iqx-limited/ngx-toastr';

export const serverErrorsInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn) => {

  const authService = inject(AuthService);
  const router = inject(Router);
  const toastr = inject(ToastrService);

  return next(req).pipe(
    tap({
      next: () => {},
      error: (error: HttpErrorResponse) => {
        switch (error.status) {
          case 0:
            router.navigateByUrl(`/error/${500}/${'Internal server error'}`);
            break;
          case 400:
            toastr.warning('Bad request');
            break;
          case 401:
            toastr.warning('Unauthorized');
            authService.localSignOut();
            router.navigate(['/#/auth/login']);
            break;
          case 403:
            toastr.warning('Forbidden');
            authService.localSignOut();
            router.navigate(['/#/auth/login']);
            break;
          case 404:
            toastr.warning('Not found');
            break;
          case 408:
            toastr.warning('Time out');
            break;
          case 422:
            toastr.warning('Unprocessed content');
            break;
          case 500:
            router.navigateByUrl(`/error/${500}/${'Internal server error'}`);
            break;
          default:
            router.navigateByUrl(`/error/${error.status}/${error.statusText}`);
            break;
        }
      },
    })
  );

};
