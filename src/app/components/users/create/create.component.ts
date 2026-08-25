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
    });
  }


  ngOnInit(): void {
    // Call
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mRoleService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.info((response as any).message)
          this.router.navigateByUrl('/roles')
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



