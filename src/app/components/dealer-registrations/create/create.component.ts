import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { DealerRegistrationService } from '../../../services/dealer-registration.service';

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

  mUsers:any
  mDealershipCategories:any
  mCooperativeSocieties:any
  mSelectedCategories:number[] = []

  certificate_of_incorporation_or_registration_file?:any
  directors_details_id_passport_and_kra_pins_file?:any
  tax_compliance_certificate_file?:any
  premises_ownership_or_lease_document_file?:any
  training_equipment_inventory_file?:any
  course_outline_and_training_curriculum_file?:any
  names_qualifications_and_certificates_of_trainers_file?:any
  education_or_training_accreditation_certificate_file?:any
  public_health_certificate_file?:any
  project_document_file?:any
  county_government_support_letters_and_mou_file?:any
  implementation_plan_monitoring_and_evaluation_framework_file?:any
  company_profile_file?:any

  constructor(
    private mDealerRegistrationService: DealerRegistrationService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      user_id: ['', Validators.required],
      category_id: [[]],
      // 2_Grower
      cooperative_society_id: ['', Validators.nullValidator],
      // ATTACHMENTS
      // 20_Coffee_Training_School
      certificate_of_incorporation_or_registration: ['', Validators.nullValidator],
      directors_details_id_passport_and_kra_pins: ['', Validators.nullValidator],
      tax_compliance_certificate: ['', Validators.nullValidator],
      premises_ownership_or_lease_document: ['', Validators.nullValidator],
      training_equipment_inventory: ['', Validators.nullValidator],
      course_outline_and_training_curriculum: ['', Validators.nullValidator],
      names_qualifications_and_certificates_of_trainers: ['', Validators.nullValidator],
      education_or_training_accreditation_certificate: ['', Validators.nullValidator],
      public_health_certificate: ['', Validators.nullValidator],
      // 21_Event_Organisers
      company_profile: ['', Validators.nullValidator],
      // 22_Coffee_Projects
      project_document: ['', Validators.nullValidator],
      county_government_support_letters_and_mou: ['', Validators.nullValidator],
      implementation_plan_monitoring_and_evaluation_framework: ['', Validators.nullValidator],

      // certificate_of_incorporation_or_registration: ['', Validators.required],
      // 0_Common
      self_declaration_form: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData()
    formData.append('user_id', formValues.user_id)
    formData.append('category_id', this.mSelectedCategories)
    // attachments
    // Common
    formData.append('certificate_of_incorporation_or_registration', this.certificate_of_incorporation_or_registration_file ? formData.append('certificate_of_incorporation_or_registration', this.certificate_of_incorporation_or_registration_file, this.certificate_of_incorporation_or_registration_file.name) : formData.append('certificate_of_incorporation_or_registration', ''))
    formData.append('directors_details_id_passport_and_kra_pins', this.directors_details_id_passport_and_kra_pins_file ? formData.append('directors_details_id_passport_and_kra_pins', this.directors_details_id_passport_and_kra_pins_file, this.directors_details_id_passport_and_kra_pins_file.name) : formData.append('directors_details_id_passport_and_kra_pins', ''))
    formData.append('tax_compliance_certificate', this.tax_compliance_certificate_file ? formData.append('tax_compliance_certificate', this.tax_compliance_certificate_file, this.tax_compliance_certificate_file.name) : formData.append('tax_compliance_certificate', ''))
    // 20_Coffee_Training_School
    formData.append('premises_ownership_or_lease_document', this.premises_ownership_or_lease_document_file ? formData.append('premises_ownership_or_lease_document', this.premises_ownership_or_lease_document_file, this.premises_ownership_or_lease_document_file.name) : formData.append('premises_ownership_or_lease_document', ''))
    formData.append('training_equipment_inventory', this.training_equipment_inventory_file ? formData.append('training_equipment_inventory', this.training_equipment_inventory_file, this.training_equipment_inventory_file.name) : formData.append('training_equipment_inventory', ''))
    formData.append('course_outline_and_training_curriculum', this.course_outline_and_training_curriculum_file ? formData.append('course_outline_and_training_curriculum', this.course_outline_and_training_curriculum_file, this.course_outline_and_training_curriculum_file.name) : formData.append('course_outline_and_training_curriculum', ''))
    formData.append('names_qualifications_and_certificates_of_trainers', this.names_qualifications_and_certificates_of_trainers_file ? formData.append('names_qualifications_and_certificates_of_trainers', this.names_qualifications_and_certificates_of_trainers_file, this.names_qualifications_and_certificates_of_trainers_file.name) : formData.append('names_qualifications_and_certificates_of_trainers', ''))
    formData.append('education_or_training_accreditation_certificate', this.education_or_training_accreditation_certificate_file ? formData.append('education_or_training_accreditation_certificate', this.education_or_training_accreditation_certificate_file, this.education_or_training_accreditation_certificate_file.name) : formData.append('education_or_training_accreditation_certificate', ''))
    formData.append('public_health_certificate', this.public_health_certificate_file ? formData.append('public_health_certificate', this.public_health_certificate_file, this.public_health_certificate_file.name) : formData.append('public_health_certificate', ''))
    // 21_Event_Organisers
    formData.append('company_profile', this.company_profile_file ? formData.append('company_profile', this.company_profile_file, this.company_profile_file.name) : formData.append('company_profile', ''))
    // 22_Coffee_Projects
    formData.append('project_document', this.project_document_file ? formData.append('project_document', this.project_document_file, this.project_document_file.name) : formData.append('project_document', ''))
    formData.append('county_government_support_letters_and_mou', this.county_government_support_letters_and_mou_file ? formData.append('county_government_support_letters_and_mou', this.county_government_support_letters_and_mou_file, this.county_government_support_letters_and_mou_file.name) : formData.append('county_government_support_letters_and_mou', ''))
    formData.append('implementation_plan_monitoring_and_evaluation_framework', this.implementation_plan_monitoring_and_evaluation_framework_file ? formData.append('implementation_plan_monitoring_and_evaluation_framework', this.implementation_plan_monitoring_and_evaluation_framework_file, this.implementation_plan_monitoring_and_evaluation_framework_file.name) : formData.append('implementation_plan_monitoring_and_evaluation_framework', ''))

    formData.append('cooperative_society_id', formValues.cooperative_society_id)
    formData.append('_method', 'POST')
    this.mProgress.set(true)
    this.mDealerRegistrationService.createItem(formData).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/dealer-registrations')
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
    this.mDealerRegistrationService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mDealershipCategories = (response as any).data.dealership_categories
          this.mCooperativeSocieties = (response as any).data.cooperative_societies
          this.mUsers = (response as any).data.users
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }


  // onCategoryChange
  onCategoryChange(id: number, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if(checked) {
      if(!this.mSelectedCategories.includes(id)) {
        this.mSelectedCategories.push(id)
      }
    }else {
      this.mSelectedCategories = this.mSelectedCategories.filter(item => item !== id);
    }
    this.itemForm.patchValue({
      category_id: this.mSelectedCategories
    });
    console.log(this.mSelectedCategories)
  }

  // hasID
  hasID(id: any[]): boolean {
    return id.some(item => this.mSelectedCategories.includes(item));
  }


  // onCertificateOfIncorporationOrRegistrationChange
  onCertificateOfIncorporationOrRegistrationChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.certificate_of_incorporation_or_registration_file = file;
    }
  }
  // onDirectorsDetailsIdPassportAndKraPinsChange
  onDirectorsDetailsIdPassportAndKraPinsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.directors_details_id_passport_and_kra_pins_file = file;
    }
  }
  // onTaxComplianceCertificateChange
  onTaxComplianceCertificateChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.tax_compliance_certificate_file = file;
    }
  }
  // onProjectDocumentChange
  onProjectDocumentChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.project_document_file = file;
    }
  }
  // onCountyGovernmentSupportLettersAndMouChange
  onCountyGovernmentSupportLettersAndMouChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.county_government_support_letters_and_mou_file = file;
    }
  }
  // onImplementationPlanMonitoringAndEvaluationFrameworkChange
  onImplementationPlanMonitoringAndEvaluationFrameworkChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.implementation_plan_monitoring_and_evaluation_framework_file = file;
    }
  }
  // onCompanyProfileChange
  onCompanyProfileChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.company_profile_file = file;
    }
  }
  // onPremisesOwnershipOrLeaseDocumentChange
  onPremisesOwnershipOrLeaseDocumentChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.premises_ownership_or_lease_document_file = file;
    }
  }
  // onTrainingEquipmentInventoryChange
  onTrainingEquipmentInventoryChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.training_equipment_inventory_file = file;
    }
  }
  // onCourseOutlineAndTrainingCurriculumChange
  onCourseOutlineAndTrainingCurriculumChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.course_outline_and_training_curriculum_file = file;
    }
  }
  // onNamesQualificationsAndCertificatesOfTrainersChange
  onNamesQualificationsAndCertificatesOfTrainersChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.names_qualifications_and_certificates_of_trainers_file = file;
    }
  }
  // onEducationOrTrainingAccreditationCertificateChange
  onEducationOrTrainingAccreditationCertificateChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.education_or_training_accreditation_certificate_file = file;
    }
  }
  // onpublicHealthCertificateChange
  onpublicHealthCertificateChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.public_health_certificate_file = file;
    }
  }

}
