import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations'
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
// import { provideToastr } from 'ngx-toastr';
import { provideToastr } from '@iqx-limited/ngx-toastr';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth.interceptor';
import { serverErrorsInterceptor } from './interceptors/server-errors.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withRouterConfig({
        onSameUrlNavigation: 'reload'
      }),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled'
      }),
      withEnabledBlockingInitialNavigation(),
      withViewTransitions(),
      withHashLocation()
    ),
    // provideAnimationsAsync(),
    provideAnimations(),


    // add
    // provideIcons(iconSubset),
    provideHttpClient(
      // Register_Interceptors
      withInterceptors([authInterceptor, serverErrorsInterceptor])
    ),

    // provideToastr({
    //   positionClass: 'toast-bottom-right',
    //   timeOut: 3000,
    //   closeButton: true,
    //   progressBar: true,
    // }),
    provideToastr({
      timeOut: 5000,
      // positionClass: 'toast-top-right',
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      closeButton: true,
      progressBar: true,
    }),
  ]

};

