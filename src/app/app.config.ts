import { ApplicationConfig } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withHashLocation,
  withInMemoryScrolling,
  withRouterConfig,
  withViewTransitions
} from '@angular/router';
import { IconSetService } from '@coreui/icons-angular';
import { routes } from './app.routes';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { serverErrorsInterceptor } from './interceptors/server-errors.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,
      // withRouterConfig({
      //   onSameUrlNavigation: 'reload'
      // }),
      // withInMemoryScrolling({
      //   scrollPositionRestoration: 'top',
      //   anchorScrolling: 'enabled'
      // }),
      // withEnabledBlockingInitialNavigation(),
      // withViewTransitions(),
      withHashLocation()
    ),
    provideAnimationsAsync(),


    // add
    // provideIcons(iconSubset),
    provideHttpClient(
      // Register_Interceptors
      withInterceptors([serverErrorsInterceptor, authInterceptor])
    ),


    provideToastr({
      positionClass: 'toast-bottom-right',
      timeOut: 3000,
      closeButton: true,
      progressBar: true,
    }),
  ]

};

