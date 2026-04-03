import { Routes } from '@angular/router';
// import { DefaultLayoutComponent } from './layout/default-layout';
import { AuthUIComponent } from './containers/auth-ui/auth-ui.component';
import { AuthGuard } from './guards/auth.guard';
import { DefaultLayoutComponent } from './containers/layout';

export const routes: Routes = [

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
      // {
      //   path: 'proposal-response',
      //   loadChildren: () =>
      //     import('./components/proposalResponse/proposal-response.module').then((m) => m.ProposalResponseModule)
      // },
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
        // canActivate: [withProfileOnlyGuard],
        path: 'dashboard',
        loadChildren: () =>
          import('./components/dashboard/dashboard.module').then((m) => m.DashboardModule)
      },
      {
        // canActivate: [withProfileOnlyGuard],
        path: 'plan-submissions',
        loadChildren: () =>
          import('./components/plan-submission/plan-submission.module').then((m) => m.PlanSubmissionModule)
      },
      {
        path: 'variations',
        loadChildren: () =>
          import('./components/variations/variation.module').then((m) => m.VariationModule)
      },
      {
        path: 'design-submissions',
        loadChildren: () =>
          import('./components/design-submission/design-submission.module').then((m) => m.DesignSubmissionModule)
      },
      {
        path: 'construction-site-board',
        loadChildren: () =>
          import('./components/construction-site-board/construction-site-board.module').then((m) => m.ConstructionSiteBoardModule)
      },
      {
        path: 'advertising-application',
        loadChildren: () =>
          import('./components/advertising-application/advertising-application.module').then((m) => m.AdvertisingApplicationModule)
      },
      {
        path: 'compliance-and-enforcement',
        loadChildren: () =>
          import('./components/compliance-and-enforcement/compliance-and-enforcement.module').then((m) => m.ComplianceAndEnforcementModule)
      },
      {
        path: 'parcel-allocation-worksheet',
        loadChildren: () =>
          import('./components/parcel-allocation-worksheet/parcel-allocation-worksheet.module').then((m) => m.ParcelAllocationWorksheetModule)
      },
      {
        path: 'downloads',
        loadChildren: () =>
          import('./components/downloads/download.module').then((m) => m.DownloadModule)
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./components/profiles/profile.module').then((m) => m.ProfileModule)
      },
    ]
  },




  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '',
  //   loadComponent: () => import('./layout').then(m => m.DefaultLayoutComponent),
  //   data: {
  //     title: 'Home'
  //   },
  //   children: [
  //     {
  //       path: 'dashboard',
  //       loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'theme',
  //       loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'base',
  //       loadChildren: () => import('./views/base/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'buttons',
  //       loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'forms',
  //       loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'icons',
  //       loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'notifications',
  //       loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'widgets',
  //       loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'charts',
  //       loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
  //     },
  //     {
  //       path: 'pages',
  //       loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
  //     }
  //   ]
  // },
  // {
  //   path: '404',
  //   loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
  //   data: {
  //     title: 'Page 404'
  //   }
  // },
  // {
  //   path: '500',
  //   loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
  //   data: {
  //     title: 'Page 500'
  //   }
  // },
  // {
  //   path: 'login',
  //   loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
  //   data: {
  //     title: 'Login Page'
  //   }
  // },
  // {
  //   path: 'register',
  //   loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
  //   data: {
  //     title: 'Register Page'
  //   }
  // },


  // { path: '**', redirectTo: 'dashboard' }


];
