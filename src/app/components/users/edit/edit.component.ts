import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { User } from '../../../interfaces/user';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-edit',
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: false
})
export class EditComponent {

  // variables
  itemForm:any
  mProgress = signal(false)

  id:any
  item:User = {}

  mShowPassword = false

  mRoles:any
  mUserStatuses:any

  constructor(
    private mUserService: UserService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      email: ['', Validators.required],
      name: ['', Validators.required],
      role_id: ['', Validators.required],
      status_id: ['', Validators.required],
      password: ['', Validators.nullValidator],
      reset_password: [false, Validators.nullValidator],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
    this.getItem()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mUserService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
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

  // onSubmit
  onSubmit(formValues: any){
    const item: User = {
      ...formValues,
      id: this.item.id,
    }

    this.mProgress.set(true);
    this.mUserService.updateItem(item).subscribe({
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
          this.mUserStatuses = (response as any).data.user_statuses
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
