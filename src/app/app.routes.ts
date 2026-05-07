import { Routes } from '@angular/router';
// import { DefaultLayoutComponent } from './layout/default-layout';
import { AuthUIComponent } from './containers/auth-ui/auth-ui.component';
import { AuthGuard } from './guards/auth.guard';
import { DefaultLayoutComponent } from './containers/layout';
import { verifyConsultantGuard } from './guards/verify-consultant.guard';

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
        canActivate: [verifyConsultantGuard],
        path: 'construction-permits',
        loadChildren: () =>
          import('./components/construction-permits/construction-permit.module').then((m) => m.ConstructionPermitModule)
      },
      {
        canActivate: [verifyConsultantGuard],
        path: 'detailed-plans',
        loadChildren: () =>
          import('./components/detailed-plans/detailed-plan.module').then((m) => m.DetailedPlanModule)
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

  // Other
  { path: '**', redirectTo: 'dashboard' }

];
