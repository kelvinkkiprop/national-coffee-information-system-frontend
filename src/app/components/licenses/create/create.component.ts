import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { LicenseService } from '../../../services/license.service';

@Component({
  selector: 'app-create',
  // imports: [],
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {


  // variables
  itemForm:any
  mProgress = signal(false)

  mLicenseCategories:any
  mLicenseTypes:any

  constructor(
    private mLicenseService: LicenseService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      type_id: ['', Validators.required],
      category_id: ['', Validators.required],
      coffee_tasting_expert_certificate: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true)
    this.mLicenseService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          const paymentId = (response as any).data.payment.id
          // this.router.navigateByUrl('/licenses')
          this.router.navigateByUrl('/payments/show/'+paymentId)
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


  // loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mLicenseService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mLicenseCategories = (response as any).data.license_categories
          this.mLicenseTypes = (response as any).data.license_types
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

}

