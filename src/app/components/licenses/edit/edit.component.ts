import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { startWith } from 'rxjs';
import { AppContextService } from '../../../core/app-context.service';
import { LicenseService } from '../../../services/license.service';

@Component({
  selector: 'app-edit',
  // imports: [],
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {


  // variables
  itemForm:any
  mProgress = signal(false)

  id:any
  item:any = {}

  mLicenseCategories:any
  mLicenseTypes:any
  mFinancialYears: string[] = []

  coffee_tasting_expert_certificate_file?:any

  constructor(
    private mLicenseService: LicenseService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      category_id: ['', Validators.required],
      financial_year: ['', Validators.required],
      expiry_date: ['', Validators.required],
      type_id: ['', Validators.required],
      coffee_tasting_expert_certificate: ['', Validators.nullValidator],
      commitment_declaration: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
    this.getItem()
    this.loadFinancialYearsItems()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mLicenseService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
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


  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData()
    formData.append('category_id', formValues.category_id)
    formData.append('financial_year', formValues.financial_year)
    formData.append('expiry_date', formValues.expiry_date)
    formData.append('type_id', formValues.type_id)
    // attachments
    if(this.coffee_tasting_expert_certificate_file){
      formData.append('coffee_tasting_expert_certificate', this.coffee_tasting_expert_certificate_file, this.coffee_tasting_expert_certificate_file.name);
    }else{
      formData.append('coffee_tasting_expert_certificate', '')
    }
    formData.append('commitment_declaration',formValues.commitment_declaration)
    formData.append('_method', 'PUT')

    this.mProgress.set(true)
    this.mLicenseService.updateItem(this.id, formData).subscribe({
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


  loadFinancialYearsItems(){
    const today = new Date();
    const year = today.getFullYear();
    // Kenyan_financial_ year_July_to_June.
    const startYear = today.getMonth() >= 6 ? year : year - 1;
    for (let i = 0; i < 5; i++) {
      const start = startYear - i;
      this.mFinancialYears.push(`${start}/${start + 1}`);
    }

    this.itemForm.get('financial_year')?.valueChanges.pipe(startWith(this.itemForm.get('financial_year')?.value)).subscribe((financialYear: string) => {
      if (financialYear) {
        const nextYear = financialYear.split('/')[1];
        this.itemForm.patchValue({
          expiry_date: `${nextYear}-06-30`
        }, { emitEvent: false });
      }
    });

  }

  // onCoffeeTastingExpertCertificateChange
  onCoffeeTastingExpertCertificateChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.coffee_tasting_expert_certificate_file = file;
    }
  }

}
