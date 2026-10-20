import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { UserService } from '../../../services/user.service';


@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {

  // variables
  itemForm:any
  mProgress = signal(false)

  mShowPassword = false

  mRoles:any

  constructor(
    private mUserService: UserService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      role_id: ['', Validators.required],
      password: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mUserService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/users')
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


  // loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mUserService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mRoles = (response as any).data.roles
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

}



