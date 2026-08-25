import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { RoleService } from '../../../services/role.service';
import { Role } from '../../../interfaces/role';

@Component({
  selector: 'app-edit',
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: false
})
export class EditComponent {

  // variables
  id:any
  name:any

  itemForm:any
  mProgress = signal(false)

  item:Role = {}

  constructor(
    private mRoleService: RoleService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.getItem()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mRoleService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
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

  // onSubmit
  onSubmit(formValues: any){
    const item: Role = {
      id: this.item.id,
      name: formValues.name,
    }

    this.mProgress.set(true);
    this.mRoleService.updateItem(item).subscribe({
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
