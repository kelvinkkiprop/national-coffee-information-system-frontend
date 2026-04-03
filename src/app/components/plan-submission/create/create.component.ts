import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { PlanSubmissionService } from '../../../services/plan-submission.service';
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
  mInvestors:any;
  mProfessionalBodies:any;
  mPlanSubmissionTypes:any;
  mPlannedLandUses:any;
  mParcels:any;
  mGreenCertifications:any;

  itemForm:any
  mProgress = signal(false);

  mProfessionalStatus:any;
  mProfessionalGoodStanding:any;
  mProfessionalBalanceReason:any;

  mParcelInfo:any = {};
  public mEditor: any = ClassicEditor;

  context_analysis_file:any;
  site_plan_and_analysis_file:any;
  concept_plan_file:any;
  geotechnical_report_file:any;
  topographical_survey_file:any;
  parking_strategy_file:any;
  traffic_management_plan_file:any;
  estimated_utility_demand_requirements_file:any;
  sustainability_report_file:any;


  constructor(
    private mPlanSubmissionService: PlanSubmissionService,
    private mProfileService: ProfileService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      investor_id: ['', Validators.required],
      plan_submission_type_id: ['', Validators.required],

      professional_body_id: ['', Validators.nullValidator],
      membership_number: ['', [Validators.nullValidator, Validators.minLength(9)]],
      consultant_name: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      citizenship: ['', Validators.nullValidator],

      project_brief: ['', Validators.required],
      project_purpose: ['', Validators.required],

      parcel_id: ['', Validators.required],
      latitute: ['', Validators.nullValidator],
      longitude: ['', Validators.nullValidator],
      min_density: ['', Validators.nullValidator],
      max_density: ['', Validators.nullValidator],
      size: ['', Validators.required],
      min_floor_area: ['', Validators.nullValidator],
      max_floor_area: ['', Validators.nullValidator],
      min_far: ['', Validators.nullValidator],
      max_far: ['', Validators.nullValidator],
      minimum_setback: ['', Validators.nullValidator],
      min_floor_to_floor_height: ['', Validators.nullValidator],
      max_floor_to_floor_height: ['', Validators.nullValidator],
      min_number_of_floors: ['', Validators.nullValidator],
      max_number_of_floors: ['', Validators.nullValidator],
      percentage_of_site_covered_by_existing_building: ['', Validators.nullValidator],
      percentage_of_site_covered_by_proposed_building: ['', Validators.nullValidator],
      number_of_units_to_be_developed: ['', Validators.nullValidator],
      planned_land_use_id: ['', Validators.required],
      primary_secondary_and_preferred_ground_floor_use: ['', Validators.nullValidator],

      site_plan_and_analysis: ['', Validators.nullValidator],
      context_analysis: ['', Validators.nullValidator],
      concept_plan: ['', Validators.nullValidator],
      geotechnical_report: ['', Validators.nullValidator],
      topographical_survey: ['', Validators.nullValidator],
      parking_strategy: ['', Validators.nullValidator],
      traffic_management_plan: ['', Validators.nullValidator],
      estimated_utility_demand_requirements: ['', Validators.nullValidator],

      project_sustainability_brief: ['', Validators.required],
      green_certification_id: ['', Validators.required],
      other_green_certification: ['', Validators.nullValidator],
      sustainability_report: ['', Validators.nullValidator],

      require_variations: ['', Validators.required],
      estimated_project_duration: ['', Validators.required],
      estimated_project_construction_cost: ['', Validators.required],
      commitment_to_comply_with_development_codes_and_guidelines : [false, Validators.requiredTrue],
    });

   }

  ngOnInit(): void {
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
          this.mParcels = (response as any).data.parcels;
          this.mPlannedLandUses = (response as any).data.planned_land_uses;
          this.mGreenCertifications = (response as any).data.green_certifications;
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        // console.log(error.error);
        this.mToastrService.error(error.error.message);
        this.mProgress.set(false);
      }
    });

  }

  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData();
    formData.append('investor_id', formValues.investor_id);
    formData.append('plan_submission_type_id', formValues.plan_submission_type_id);
    formData.append('professional_body_id', formValues.professional_body_id);
    formData.append('membership_number', formValues.membership_number);
    formData.append('consultant_name', formValues.consultant_name);
    formData.append('address', formValues.address);
    formData.append('email', formValues.email);
    formData.append('citizenship', formValues.citizenship);
    formData.append('project_brief', formValues.project_brief);
    formData.append('project_purpose', formValues.project_purpose);
    formData.append('project_sustainability_brief', formValues.project_sustainability_brief);
    formData.append('green_certification_id', formValues.green_certification_id);
    formData.append('parcel_id', formValues.parcel_id);
    formData.append('latitute', formValues.latitute);
    formData.append('longitude', formValues.longitude);
    formData.append('min_density', formValues.min_density);
    formData.append('max_density', formValues.max_density);
    formData.append('size', formValues.size);
    formData.append('min_floor_area', formValues.min_floor_area);
    formData.append('max_floor_area', formValues.max_floor_area);
    formData.append('min_far', formValues.min_far);
    formData.append('max_far', formValues.max_far);
    formData.append('minimum_setback', formValues.minimum_setback);
    formData.append('min_floor_to_floor_height', formValues.min_floor_to_floor_height);
    formData.append('max_floor_to_floor_height', formValues.max_floor_to_floor_height);
    formData.append('min_number_of_floors', formValues.min_number_of_floors);
    formData.append('max_number_of_floors', formValues.max_number_of_floors);
    formData.append('percentage_of_site_covered_by_existing_building', formValues.percentage_of_site_covered_by_existing_building);
    formData.append('percentage_of_site_covered_by_proposed_building', formValues.percentage_of_site_covered_by_proposed_building);
    formData.append('number_of_units_to_be_developed', formValues.number_of_units_to_be_developed);
    formData.append('planned_land_use_id', formValues.planned_land_use_id);
    formData.append('primary_secondary_and_preferred_ground_floor_use', formValues.primary_secondary_and_preferred_ground_floor_use);

    formData.append('other_green_certification', formValues.other_green_certification);
    // formData.append('sustainability_report', formValues.project_purpose);
    formData.append('require_variations', formValues.require_variations);
    formData.append('estimated_project_duration',formValues.estimated_project_duration);
    formData.append('estimated_project_construction_cost', formValues.estimated_project_construction_cost);
    formData.append('commitment_to_comply_with_development_codes_and_guidelines', formValues.commitment_to_comply_with_development_codes_and_guidelines);

    // attachments
    formData.append('site_plan_and_analysis', this.site_plan_and_analysis_file, this.site_plan_and_analysis_file.name);
    formData.append('context_analysis', this.context_analysis_file, this.context_analysis_file.name);
    formData.append('concept_plan', this.concept_plan_file, this.concept_plan_file.name);
    formData.append('geotechnical_report', this.geotechnical_report_file, this.geotechnical_report_file.name);
    formData.append('topographical_survey', this.topographical_survey_file, this.topographical_survey_file.name);
    formData.append('parking_strategy', this.parking_strategy_file, this.parking_strategy_file.name);
    formData.append('traffic_management_plan', this.traffic_management_plan_file, this.traffic_management_plan_file.name);
    formData.append('estimated_utility_demand_requirements', this.estimated_utility_demand_requirements_file, this.estimated_utility_demand_requirements_file.name);
    formData.append('sustainability_report', this.sustainability_report_file, this.sustainability_report_file.name);

    formData.append('_method', 'POST')


    this.mProgress.set(true);
    this.mPlanSubmissionService.createItem(formData).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/plan-submissions');
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        console.log(error);
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
    if (!item.professional_body_id || !item.membership_number) {
      return;
    }

    this.mProgress.set(true);
    this.mProfileService.professionalSearch(item).subscribe({
      next: (response) => {
        if(response){
          if((response as any).status==="failed"){
            // this.router.navigateByUrl('/plan-submissions');
            this.mToastrService.error((response as any).message);
          }else{
            // this.mToastrService.success((response as any).message);
            const mResponse = response as any
            this.itemForm.get('consultant_name')?.setValue(mResponse.name);
            this.itemForm.get('address')?.setValue(mResponse.address);
            this.itemForm.get('email')?.setValue(mResponse.email);
            this.itemForm.get('citizenship')?.setValue(mResponse.nationality);
            if(mResponse.status == "Inactive"){
                let mResponse = (response as any)
                this.mToastrService.error(mResponse.good_standing+" "+mResponse.balance_reason);
                this.mProgress.set(false);
                this.router.navigateByUrl('/plan-submissions');
            }
          }
          this.mProgress.set(false);
        };
      },
      error: (error ) => {
        if(error.error.message){
        this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }


  // onContextAnalysisChange
  onContextAnalysisChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.context_analysis_file = file;
    }
  }
  // onSitePlanAndAnlysisChange
  onSitePlanAndAnlysisChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.site_plan_and_analysis_file = file;
    }
  }
  // onConceptPlanChange
  onConceptPlanChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.concept_plan_file = file;
    }
  }
  // onGeotechnicalReportChange
  onGeotechnicalReportChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.geotechnical_report_file = file;
    }
  }
  // onTopographicalSurveyChange
  onTopographicalSurveyChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.topographical_survey_file = file;
    }
  }
  // onParkingStrategyChange
  onParkingStrategyChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.parking_strategy_file = file;
    }
  }
  // onTrafficManagementPlanChange
  onTrafficManagementPlanChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.traffic_management_plan_file = file;
    }
  }
  // onEstimatedUtilityDemandRequirementsChange
  onEstimatedUtilityDemandRequirementsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.estimated_utility_demand_requirements_file = file;
    }
  }
  // onSustainabilityReportChange
  onSustainabilityReportChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.sustainability_report_file = file;
    }
  }



  // onInvestorChange
  onInvestorChange(event:any) {
    if (event.target.value) {
      const mInvestorId = event.target.value;
      this.mProgress.set(true);
      this.mPlanSubmissionService.getInvestorParcelsItems(mInvestorId).subscribe({
        next: (response) => {
          if(response){
            this.mParcels = response as any;
            this.mProgress.set(false);
          }
        },
        error: (error ) => {
          if(error.error.message){
            this.mToastrService.error(error.error.message)
          }
          this.mProgress.set(false);
        }
      });
    }
  }

  // onParcelChange
  onParcelChange(event:any) {
    if (event.target.value) {
      const mParcelNumber = event.target.value;
      this.mProgress.set(true);
      this.mPlanSubmissionService.getParcelItem(mParcelNumber).subscribe({
        next: (response) => {
          if(response){
            this.mParcelInfo = response as any;
            // console.log(this.mParcelInfo)
            this.mProgress.set(false);
          }
        },
        error: (error ) => {
          if(error.error.message){
            this.mToastrService.error(error.error.message)
          }
          this.mProgress.set(false);
        }
      });
    }
  }

}
