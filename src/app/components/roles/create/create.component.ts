import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { RoleService } from '../../../services/role.service';


@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {

  // variables
  id:any
  name:any

  itemForm:any
  mProgress = signal(false)

  mRoleTypes:any

  constructor(
    private mRoleService: RoleService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      type_id: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mRoleService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/roles')
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
    this.mRoleService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mRoleTypes = (response as any).data.role_types
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
        this.mToastrService.error(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

}



