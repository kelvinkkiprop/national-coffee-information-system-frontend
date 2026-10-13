import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { VerifyOtpComponent } from './verify-otp/verify-otp.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

//Routes
const routes: Routes = [
    {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register'
    }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: {
      title: 'Forgot Password'
    }
  },
  {
    path: 'recover-password/:id',
    component: RecoverPasswordComponent,
    data: {
      title: 'Recover Password'
    }
  },
  {
    path: 'verify-otp',
    component: VerifyOtpComponent,
    data: {
      title: 'Verify OTP'
    }
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent,
    data: {
      title: 'Verify Email'
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
