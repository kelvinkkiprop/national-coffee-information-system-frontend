import { Component, signal } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { ConstructionPermitService } from '../../../services/construction-permit.service';
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
  mPermitTypes:any;
  mPlannedLandUses:any;
  mInvestorParcels:any = {};
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

  mVariations?:any=[]
  mItemForm?:any

  constructor(
   private mConstructionPermitService: ConstructionPermitService,
    private mProfileService: ProfileService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      investor_id: ['', Validators.required],
      type_id: ['', Validators.required],

      professional_body_id: ['', Validators.nullValidator],
      membership_number: ['', [Validators.nullValidator, Validators.minLength(9)]],
      consultant_name: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      citizenship: ['', Validators.nullValidator],

      project_brief: ['', Validators.required],
      project_purpose: ['', Validators.required],

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

      require_variations: ['no', Validators.required],
      estimated_project_duration: ['', Validators.required],
      estimated_project_construction_cost: ['', Validators.required],
      commitment_to_comply_with_development_codes_and_guidelines : [false, Validators.requiredTrue],
    });

    // mItemForm
    this.mItemForm = this.fb.group({
        parcel_number: ['', Validators.required],
        min_density: ['', Validators.nullValidator],
        max_density: ['', Validators.nullValidator],
        min_floor_area: ['', Validators.nullValidator],
        max_floor_area: ['', Validators.nullValidator],
        min_far: ['', Validators.nullValidator],
        max_far: ['', Validators.nullValidator],
        minimum_setback: ['', Validators.nullValidator],
        min_floor_to_floor_height: ['', Validators.nullValidator],
        max_floor_to_floor_height: ['', Validators.nullValidator],
        min_number_of_floors: ['', Validators.required],
        max_number_of_floors: ['', Validators.required],
        percentage_of_site_covered_by_existing_building: ['', Validators.required],
        percentage_of_site_covered_by_proposed_building: ['', Validators.nullValidator],
        number_of_units_to_be_developed: ['', Validators.required],
        planned_land_use_id: ['', Validators.required],
        primary_land_use_id: ['', Validators.required],
        secondary_land_use_id: ['', Validators.nullValidator],
        preferred_ground_floor_use_id: ['', Validators.nullValidator],
    });

   }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems();
  }

  //loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mConstructionPermitService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mInvestors = (response as any).data.investors;
          this.mProfessionalBodies = (response as any).data.professional_bodies;
          this.mPermitTypes = (response as any).data.permit_types;
          // this.mInvestorParcels = (response as any).data.investor_parcels;
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
    const mVariationsJsonArrayItems = JSON.stringify(Object.assign({}, this.mVariations))

    let formData:any = new FormData();
    formData.append('investor_id', formValues.investor_id);
    formData.append('type_id', formValues.type_id);
    formData.append('professional_body_id', formValues.professional_body_id);
    formData.append('membership_number', formValues.membership_number);
    formData.append('consultant_name', formValues.consultant_name);
    formData.append('address', formValues.address);
    formData.append('email', formValues.email);
    formData.append('citizenship', formValues.citizenship);
    formData.append('project_brief', formValues.project_brief);
    formData.append('project_purpose', formValues.project_purpose);
    formData.append('require_variations', formValues.require_variations);
    formData.append('variations', mVariationsJsonArrayItems)
    // formData.append('parcel_number', formValues.parcel_number);
    // formData.append('latitute', formValues.latitute);
    // formData.append('longitude', formValues.longitude);
    // formData.append('min_density', formValues.min_density);
    // formData.append('max_density', formValues.max_density);
    // formData.append('size', formValues.size);
    // formData.append('min_floor_area', formValues.min_floor_area);
    // formData.append('max_floor_area', formValues.max_floor_area);
    // formData.append('min_far', formValues.min_far);
    // formData.append('max_far', formValues.max_far);
    // formData.append('minimum_setback', formValues.minimum_setback);
    // formData.append('min_floor_to_floor_height', formValues.min_floor_to_floor_height);
    // formData.append('max_floor_to_floor_height', formValues.max_floor_to_floor_height);
    // formData.append('min_number_of_floors', formValues.min_number_of_floors);
    // formData.append('max_number_of_floors', formValues.max_number_of_floors);
    // formData.append('percentage_of_site_covered_by_existing_building', formValues.percentage_of_site_covered_by_existing_building);
    // formData.append('percentage_of_site_covered_by_proposed_building', formValues.percentage_of_site_covered_by_proposed_building);
    // formData.append('number_of_units_to_be_developed', formValues.number_of_units_to_be_developed);
    // formData.append('planned_land_use_id', formValues.planned_land_use_id);
    // formData.append('primary_secondary_and_preferred_ground_floor_use', formValues.primary_secondary_and_preferred_ground_floor_use);

    formData.append('project_sustainability_brief', formValues.project_sustainability_brief);
    formData.append('green_certification_id', formValues.green_certification_id);
    formData.append('other_green_certification', formValues.other_green_certification);
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
    this.mConstructionPermitService.createItem(formData).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/construction-permits');
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
    if (!item.professional_body_id || !item.membership_number) {
      return;
    }

    this.mProgress.set(true);
    this.mProfileService.professionalSearch(item).subscribe({
      next: (response) => {
        if(response){
          if((response as any).status==="failed"){
            // this.router.navigateByUrl('/construction-permits');
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
                this.router.navigateByUrl('/construction-permits');
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
      this.mConstructionPermitService.getInvestorParcelsItems(mInvestorId).subscribe({
        next: (response) => {
          if(response){
            this.mInvestorParcels = response as any;
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

  // onVariationsChange
  onVariationsChange() {
    const value = this.itemForm.get('require_variations')?.value;
    // console.log(value);
    if (value === 'no') {
      this.mVariations = []; //Empty
    }
  }


  // // onParcelChange
  // onParcelChange(event:any) {
  //   if (event.target.value) {
  //     const mParcelNumber = event.target.value;
  //     this.mProgress.set(true);
  //     this.mConstructionPermitService.getParcelItem(mParcelNumber).subscribe({
  //       next: (response) => {
  //         if(response){
  //           this.mParcelInfo = response as any;
  //           // console.log(this.mParcelInfo)
  //           this.mProgress.set(false);
  //         }
  //       },
  //       error: (error ) => {
  //         if(error.error.message){
  //           this.mToastrService.error(error.error.message)
  //         }
  //         this.mProgress.set(false);
  //       }
  //     });
  //   }
  // }




  // addItem
  addItem(){
    // this.mVariations.push(this.mItemForm.value)
    // this.mItemForm.reset();

    const newItem = this.mItemForm.value;
    console.log(newItem);
    const exists = this.mVariations.some((item: any) =>
      item.parcel_number === newItem.parcel_number
    );
    if (!exists) {
      this.mVariations.push(newItem);
      this.mItemForm.reset();
    } else {
      this.mToastrService.error('Item already exists');
    }
  }
  // resetItemsForm
  resetItemsForm(){
    this.mItemForm.reset();
  }
  // removeItem
  removeItem(element:any){
    this.mVariations.forEach((value:any, index:any)=>{
      if(value===element){
        this.mVariations.splice(index, 1)
      }
    });
  }

}
