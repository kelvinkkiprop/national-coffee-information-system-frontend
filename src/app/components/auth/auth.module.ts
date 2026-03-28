import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import
import { AuthRoutingModule } from './auth-routing.module';
import { SsoComponent } from './sso/sso.component';
import { SharedModule } from '@coreui/angular';



@NgModule({
  declarations: [
    SsoComponent
  ],
  imports: [
    CommonModule,
    // Import
    AuthRoutingModule,
    SharedModule,
  ]
})
export class AuthModule { }
