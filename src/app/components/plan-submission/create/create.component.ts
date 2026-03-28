import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PlanSubmissionService } from '../../../services/plan-submission.service';
import { AppContextService } from '../../../core/app-context.service';
import { ToastrService } from 'ngx-toastr';
import { ProfileService } from '../../../services/profile.service';


@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {

  // variables
  investor_id?: any
  plan_submission_type_id?: any

  professional_body_id?: any
  membership_number?: any
  consultant_name?: any
  address?: any
  email?: any
  citizenship?: any
  project_brief?: any

  context_analysis?: any

  concept_plan?: any
  geotechnical_report?: any
  topographical_survey?: any

  parking_strategy?: any
  traffic_management_plan?: any

  estimated_utility_demand_requirements?: any

  project_sustainability_brief?: any
  green_certification_id?: any
  other_green_certification?: any
  sustainability_report?: any

  require_variations?: any
  estimated_project_duration?: any
  estimated_project_construction_cost?: any
  commitment_to_comply_with_development_codes_and_guidelines?: any


  status_id?: any


  mInvestors:any
  mProfessionalBodies:any;
  mPlanSubmissionTypes:any;
  mGreenCertifications:any;

  public mEditor: any = ClassicEditor;

  itemForm:any
  mProgress = signal(false);

  mProfessionalStatus:any
  mProfessionalGoodStanding:any
  mProfessionalBalanceReason:any

  constructor(
    private mPlanSubmissionService: PlanSubmissionService,
    private mProfileService: ProfileService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
  ) { }

  ngOnInit(): void {

    // validation
    this.investor_id = new FormControl('', Validators.required);
    this.plan_submission_type_id = new FormControl('', Validators.required);

    this.professional_body_id = new FormControl('', Validators.required);
    this.membership_number = new FormControl('', Validators.required);
    this.consultant_name = new FormControl('', Validators.required);
    this.address = new FormControl('', Validators.required);
    this.email = new FormControl('', Validators.required);
    this.citizenship = new FormControl('', Validators.required);
    this.project_brief = new FormControl('', Validators.required);

    this.context_analysis = new FormControl('', Validators.nullValidator);

    this.concept_plan = new FormControl('', Validators.nullValidator);
    this.geotechnical_report = new FormControl('', Validators.nullValidator);
    this.topographical_survey = new FormControl('', Validators.nullValidator);

    this.parking_strategy = new FormControl('', Validators.nullValidator);
    this.traffic_management_plan = new FormControl('', Validators.nullValidator);

    this.project_sustainability_brief = new FormControl('', Validators.nullValidator);
    this.green_certification_id = new FormControl('', Validators.required);
    this.other_green_certification = new FormControl('', Validators.nullValidator);
    this.sustainability_report = new FormControl('', Validators.nullValidator);

    this.estimated_utility_demand_requirements = new FormControl('', Validators.nullValidator);

    this.require_variations = new FormControl('', Validators.required);
    this.estimated_project_duration = new FormControl('', Validators.required);
    this.estimated_project_construction_cost = new FormControl('', Validators.required);
    this.commitment_to_comply_with_development_codes_and_guidelines = new FormControl( false, Validators.requiredTrue);

    this.itemForm = new FormGroup({
      investor_id: this.investor_id,
      plan_submission_type_id: this.plan_submission_type_id,


      professional_body_id: this.professional_body_id,
      membership_number: this.membership_number,
      consultant_name: this.consultant_name,
      address: this.address,
      email: this.email,
      citizenship: this.citizenship,
      project_brief: this.project_brief,


      context_analysis: this.context_analysis,

      concept_plan: this.concept_plan,
      geotechnical_report: this.geotechnical_report,
      topographical_survey: this.topographical_survey,

      parking_strategy: this.parking_strategy,
      traffic_management_plan: this.traffic_management_plan,

      estimated_utility_demand_requirements: this.estimated_utility_demand_requirements,

      project_sustainability_brief: this.project_sustainability_brief,
      green_certification_id: this.green_certification_id,
      other_green_certification: this.other_green_certification,
      sustainability_report: this.sustainability_report,

      require_variations: this.require_variations,
      estimated_project_duration: this.estimated_project_duration,
      estimated_project_construction_cost: this.estimated_project_construction_cost,
      commitment_to_comply_with_development_codes_and_guidelines: this.commitment_to_comply_with_development_codes_and_guidelines,

    })
    // Call
    this.loadUnpaginatedItems();
  }

  //loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mPlanSubmissionService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mInvestors = (response as any).data.investors;
          this.mProfessionalBodies = (response as any).data.professional_bodies;
          this.mPlanSubmissionTypes = (response as any).data.plan_submission_types;
          this.mGreenCertifications = (response as any).data.green_certifications;
          this.mProgress.set(false);;
        }
      },
      error: (error ) => {
        // console.log(error.error);
        this.mToastrService.error(error.error.message);
        this.mProgress.set(false);
      }
    });

  }

  //onSubmit
  onSubmit(formValues: any){
    // console.log(formValues);
    this.mProgress.set(true);
    this.mPlanSubmissionService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/deals');
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        // console.log(error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }



  // verifyProfessional
  verifyProfessional(){
    const item: any = {
      professional_body_id: this.itemForm.get('professional_body_id')?.value,
      membership_number: this.itemForm.get('membership_number')?.value,
    }

    this.mProgress.set(true);
    this.mProfileService.professionalSearch(item).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          if((response as any).status==="failed"){
            // this.router.navigateByUrl('/deals');
            this.mToastrService.error((response as any).message);
          }else{
            // this.mToastrService.success((response as any).message);
            const mProfessional = response as any
            this.itemForm.get('consultant_name')?.setValue(mProfessional.name);
            this.itemForm.get('address')?.setValue(mProfessional.address);
            this.itemForm.get('email')?.setValue(mProfessional.email);
            this.itemForm.get('citizenship')?.setValue(mProfessional.nationality);

            this.mProfessionalStatus = mProfessional.status
            this.mProfessionalGoodStanding = mProfessional.good_standing
            this.mProfessionalBalanceReason = mProfessional.balance_reason

            if(this.mProfessionalStatus == "Inactive")
              // Disappear
              setTimeout(() => {
                this.mToastrService.error(this.mProfessionalGoodStanding+' '+this.mProfessionalBalanceReason);
                this.router.navigateByUrl('/dashboard');
              }, 5000); // 5000ms = 5 seconds
            }
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        console.log(error);
        // if(error.error.message){
        // this.mToastrService.error(error.error.message);
        // }
        this.mProgress.set(false);
      }
    });
  }


}
