import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import
import { RouterModule, Routes } from '@angular/router';
import { SsoComponent } from './sso/sso.component';

//Routes
const routes: Routes = [
  {
    path: '',
    redirectTo: ':token/:name',
    pathMatch: 'full'
  },
  {
    path: ':token/:name',
    component: SsoComponent,
    data: {
      title: 'Single-Sign On (SSO)'
    }
  },
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // Add
    RouterModule.forChild(routes)
  ],
  // Add
  exports: [RouterModule]
})
export class AuthRoutingModule { }
