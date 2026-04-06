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
        path: 'construction-permits',
        loadChildren: () =>
          import('./components/construction-permits/construction-permit.module').then((m) => m.ConstructionPermitModule)
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
