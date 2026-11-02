import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { startWith } from 'rxjs';
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
  mIssuingBodies:any
  mLicenseTypes:any
  mFinancialYears: string[] = []

  directors_details_file?:any
  years_of_technical_experience_file?:any
  growers_represented_and_signed_agreements_file?:any
  indemnity_against_professional_misconduct_file?:any
  coffee_tasting_expert_certificate_file?:any
  company_officials_file?:any
  comprehensive_insurance_policy_file?:any
  mill_certification_file?:any
  statutory_compliance_file?:any
  self_declaration_form_file?:any

  constructor(
    private mLicenseService: LicenseService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      category_id: ['', Validators.required],
      financial_year: ['', Validators.required],
      expiry_date: ['', Validators.required],
      type_id: ['', Validators.required],
      issuing_body_id: ['', Validators.required],
      // 1.AgentLicense
      paid_share_capital: ['', Validators.nullValidator],
      directors_details: ['', Validators.nullValidator],
      years_of_technical_experience: ['', Validators.nullValidator],
      growers_represented_and_signed_agreements : ['', Validators.nullValidator],
      indemnity_against_professional_misconduct: ['', Validators.nullValidator],
      liquorer_cupping_facility_engaged: ['', Validators.nullValidator],
      // 2.BuyerLicense
      license_purpose: ['', Validators.nullValidator],
      // 3.WarehouseOperatorLicense
      directors_name_address_and_occupations: ['', Validators.nullValidator],
      // 4.LiquoringLicense
      year_of_certification: ['', Validators.nullValidator],
      current_occupation: ['', Validators.nullValidator],
      coffee_tasting_expert_certificate: ['', Validators.nullValidator],
      // 5.CommercialMillersLicence
      milling_capacity: ['', Validators.nullValidator],
      comprehensive_insurance_policy: ['', Validators.nullValidator],
      mill_certification: ['', Validators.nullValidator],
      // 6.IndependentCuppingLabsLicence
      company_officials: ['', Validators.nullValidator],
      licensed_liquorers_engaged: ['', Validators.nullValidator],
      laboratory_facilities: ['', Validators.nullValidator],
      services_to_be_offered: ['', Validators.nullValidator],
      statutory_compliance: ['', Validators.nullValidator],

      self_declaration_form: ['', Validators.nullValidator],
      commitment_declaration: [false, Validators.requiredTrue],
    });
  }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
    this.loadFinancialYearsItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData()
    formData.append('category_id', formValues.category_id)
    formData.append('financial_year', formValues.financial_year)
    formData.append('expiry_date', formValues.expiry_date)
    formData.append('issuing_body_id', formValues.issuing_body_id)
    formData.append('type_id', formValues.type_id)
    let mType = formValues.type_id;
    // 1.AgentLicense
    formData.append('paid_share_capital',formValues.paid_share_capital)
    if (mType==1) {
      formData.append('directors_details', this.directors_details_file, this.directors_details_file.name)
      formData.append('years_of_technical_experience', this.years_of_technical_experience_file, this.years_of_technical_experience_file.name)
      formData.append('growers_represented_and_signed_agreements', this.growers_represented_and_signed_agreements_file, this.growers_represented_and_signed_agreements_file.name)
      formData.append('indemnity_against_professional_misconduct', this.indemnity_against_professional_misconduct_file, this.indemnity_against_professional_misconduct_file.name)
    } else {
      formData.append('directors_details', '');
      formData.append('years_of_technical_experience', '');
      formData.append('growers_represented_and_signed_agreements', '');
      formData.append('indemnity_against_professional_misconduct', '');
    }
    formData.append('liquorer_cupping_facility_engaged',formValues.liquorer_cupping_facility_engaged)
    // 2.BuyerLicense
    formData.append('license_purpose',formValues.license_purpose)
    // 3.WarehouseOperatorLicense
    formData.append('directors_name_address_and_occupations',formValues.directors_name_address_and_occupations)
    // 4.LiquoringLicense
    formData.append('year_of_certification',formValues.year_of_certification)
    formData.append('current_occupation',formValues.current_occupation)
    if (mType==4) {
      formData.append('coffee_tasting_expert_certificate', this.coffee_tasting_expert_certificate_file, this.coffee_tasting_expert_certificate_file.name)
    } else {
      formData.append('coffee_tasting_expert_certificate', '');
    }
    formData.append('milling_capacity',formValues.milling_capacity)
    // 5.CommercialMillersLicence
    if (mType==5) {
      formData.append('comprehensive_insurance_policy', this.comprehensive_insurance_policy_file, this.comprehensive_insurance_policy_file.name)
      formData.append('mill_certification', this.mill_certification_file, this.mill_certification_file.name)
    } else {
      formData.append('comprehensive_insurance_policy', '');
      formData.append('mill_certification', '');
    }
    // 6.IndependentCuppingLabsLicence
    if (mType==6) {
      formData.append('company_officials', this.company_officials_file, this.company_officials_file.name)
      formData.append('statutory_compliance', this.statutory_compliance_file, this.statutory_compliance_file.name)
    } else {
      formData.append('company_officials', '');
      formData.append('statutory_compliance', '');
    }
    formData.append('licensed_liquorers_engaged',formValues.licensed_liquorers_engaged)
    formData.append('laboratory_facilities',formValues.laboratory_facilities)
    formData.append('services_to_be_offered',formValues.services_to_be_offered)
    // Other:1|6
    if (mType==1 || mType==6) {
      formData.append('self_declaration_form', this.self_declaration_form_file, this.self_declaration_form_file.name)
    } else {
      formData.append('self_declaration_form', '');
    }
    formData.append('commitment_declaration',formValues.commitment_declaration)
    formData.append('_method', 'POST')

    this.mProgress.set(true)
    this.mLicenseService.createItem(formData).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          const paymentId = (response as any).data.payment?.id
          if(paymentId){
            this.router.navigateByUrl('/payments/show/'+paymentId)
          }else{
            this.router.navigateByUrl('/licenses')
          }
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
          this.mIssuingBodies = (response as any).data.issuing_bodies
          this.mLicenseCategories = (response as any).data.license_categories
          // this.mLicenseTypes = (response as any).data.license_types
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

  // loadFinancialYearsItems
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

  // onIssuingBodyChange
  onIssuingBodyChange($event: any){
    let id = $event.value
    this.mProgress.set(true)
    this.mLicenseService.filterLicenseTypes(id).subscribe({
      next: (response) => {
        if(response){
          this.mLicenseTypes = response
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

  // onDirectorsDetailsChange
  onDirectorsDetailsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.directors_details_file = file
    }
  }
  // onYearsOfTechnicalExperienceChange
  onYearsOfTechnicalExperienceChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.years_of_technical_experience_file = file
    }
  }
  // onGrowersRepresentedAndSignedAgreementsChange
  onGrowersRepresentedAndSignedAgreementsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.growers_represented_and_signed_agreements_file = file
    }
  }
  // onIndemnityAgainstProfessionalMisconductChange
  onIndemnityAgainstProfessionalMisconductChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.indemnity_against_professional_misconduct_file = file
    }
  }
  // onCoffeeTastingExpertCertificateChange
  onCoffeeTastingExpertCertificateChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.coffee_tasting_expert_certificate_file = file
    }
  }
  // onComprehensiveInsurancePolicyChange
  onComprehensiveInsurancePolicyChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.comprehensive_insurance_policy_file = file
    }
  }
  // onMillCertificationChange
  onMillCertificationChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.mill_certification_file = file
    }
  }
  // onCompanyOfficialsChange
  onCompanyOfficialsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.company_officials_file = file
    }
  }
  // onStatutoryComplianceChange
  onStatutoryComplianceChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.statutory_compliance_file = file
    }
  }
  // onSelfDeclarationFormChange
  onSelfDeclarationFormChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0]
      this.self_declaration_form_file = file
    }
  }

}

