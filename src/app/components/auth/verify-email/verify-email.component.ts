import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-verify-email',
  // imports: [],
  standalone: false,
  templateUrl: './verify-email.component.html',
  styleUrl: './verify-email.component.scss',
})
export class VerifyEmailComponent {

  // variables
  verification_code:any

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
      verification_code: ['', Validators.required],
    });
  }


  // onSubmit
  onSubmit(formValues: any){

    this.mProgress.set(true);
    this.mAuthService.verifyEmail(formValues).subscribe({
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
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });

  }


  // onResendVerificationCode
  onResendVerificationCode(){
    this.mProgress.set(true);
    this.mAuthService.resendVerificationCode().subscribe({
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
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });
  }


}
