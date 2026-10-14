import { Component, signal } from '@angular/core';
// import
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AuthService } from '../../../../../services/auth.service';

@Component({
  selector: 'app-update-password',
  // imports: [],
  standalone: false,
  templateUrl: './update-password.component.html',
  styleUrl: './update-password.component.scss',
})
export class UpdatePasswordComponent {


  // variables
  item:any
  id:any

  itemForm:any
  mProgress = signal(false)

  mShowPassword = false
  mShowPasswordConfirmation = false

constructor(
  private mProfileService: AuthService,
  private mToastrService: ToastrService,
  private location: Location,
  private fb: FormBuilder,
  ) {
    // validation
    this.itemForm = this.fb.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
   }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mProfileService.changePassword(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message);
          this.item = (response as any).data;
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }

  // goBack
  goBack(){
    this.location.back();
  }

}


