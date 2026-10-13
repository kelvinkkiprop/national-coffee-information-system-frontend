import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-verify-otp',
  // imports: [],
  standalone: false,
  templateUrl: './verify-otp.component.html',
  styleUrl: './verify-otp.component.scss',
})
export class VerifyOtpComponent {

  // variables
  otp_code:any

  itemForm:any
  mProgress = signal(false)

  constructor(
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      otp_code: ['', Validators.required],
    });
  }


  // onSubmit
  onSubmit(formValues: any){

    this.mProgress.set(true);
    this.mAuthService.verifyOtp(formValues).subscribe({
      next: (response) => {
        if(response){
          if(response.status =='success'){
            this.router.navigateByUrl('/dashboard')
            this.mToastrService.success(response.message);
          }else{
            this.mToastrService.warning(response.message);
          }
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });

  }


  // onResendOTP
  onResendOTP(){
    this.mProgress.set(true);
    this.mAuthService.resendOTP().subscribe({
      next: (response) => {
        if(response){
          if(response.status =='success'){
            this.mToastrService.success(response.message);
          }else{
            this.mToastrService.warning(response.message);
          }
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });
  }


}
