import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  // imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  standalone: false
})
export class LoginComponent {

  // variables
  email:any
  password:any

  itemForm:any
  mProgress = signal(false)

  constructor(
    private route: ActivatedRoute,
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      // type_id: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      // remember_me : [false, Validators.requiredTrue],
    });
  }


  // onSubmit
  onSubmit(formValues: any){

    this.mProgress.set(true);
    this.mAuthService.login(formValues).subscribe({
      next: (response) => {
        if(response){
          if(response.status =='success'){
            this.mToastrService.error(response.message);
            this.router.navigateByUrl('/dashboard')
          }else{
            this.mToastrService.error(response.message);
          }
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress.set(false)
      }
    });

  }


}
