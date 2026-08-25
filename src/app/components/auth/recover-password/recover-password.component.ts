import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-recover-password',
  // imports: [],
  templateUrl: './recover-password.component.html',
  styleUrl: './recover-password.component.scss',
  standalone: false
})
export class RecoverPasswordComponent {

  // variables
  id:any
  password:any
  password_confirmation:any

  itemForm:any
  mProgress = signal(false)

  constructor(
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.id = this.route.snapshot.paramMap.get('id')
    // validation
    this.itemForm = this.fb.group({
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }


  // onSubmit
  onSubmit(formValues: any){
    const item: any = {
      id: this.id,
      password: formValues.password,
      password_confirmation: formValues.password_confirmation,
    }

    this.mProgress.set(true);
    this.mAuthService.recoverPassword(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.info((response as any).message)
          this.router.navigateByUrl('/dashboard')
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

