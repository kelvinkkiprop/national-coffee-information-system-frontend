import { Routes } from '@angular/router';
// import
import { AuthUIComponent } from './containers/auth-ui/auth-ui.component';
import { ErrPageComponent } from './containers/err-page/err-page.component';
import { DefaultLayoutComponent } from './containers/layout';
import { PublicPageComponent } from './containers/public-page/public-page.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // PublicPage
  {
    path: '',
    component: PublicPageComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./components/home/home.module').then((m) => m.HomeModule)
      },
    ]
  },

  // AuthUI
  {
    path: '',
    component: AuthUIComponent,
    data: {
      title: 'Auth'
    },
    children: [
      {
        path: 'auth',
        loadChildren: () =>
          import('./components/auth/auth.module').then((m) => m.AuthModule)
      },
    ]
  },

  // CoreUI
  {
    path: '',
    component: DefaultLayoutComponent,
    canActivate: [AuthGuard],
    data: {
      title: 'Dashboard',
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () =>
          import('./components/users/user.module').then((m) => m.UserModule)
      },
      {
        path: 'roles',
        loadChildren: () =>
          import('./components/roles/role.module').then((m) => m.RoleModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/profile/profile.module').then((m) => m.ProfileModule)
      }
    ]
  },

  // ErrorLayout
  {
    path: '',
    component: ErrPageComponent,
    data: {
      title: 'Error'
    },
    children: [
      {
        path: 'error',
        loadChildren: () =>
          import('./components/errors/error.module').then((m) => m.ErrorModule)
      },
    ]
  },

  // Other
  { path: '**', redirectTo: '/home' }

];
