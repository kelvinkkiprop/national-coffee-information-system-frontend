import { Component, signal, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { ConstructionPermitService } from '../../../services/construction-permit.service';
import { ProfileService } from '../../../services/profile.service';
import { ClassicEditor } from 'ckeditor5';

@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None, // For_CKEditor_styles
})
export class CreateComponent {

  // variables
  mInvestors:any;
  mProfessionalBodies:any;
  mPermitTypes:any;
  mParcelLandUseGroups:any;
  mInvestorParcels:any = {};
  mGreenCertifications:any;
  mProfile: any = {};

  itemForm:any
  mProgress = signal(false);

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

  mLandUsePlans?:any=[];
  mHasVariation?:any= 'no';
  mItemForm?:any;

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
      membership_number: ['', Validators.nullValidator],
      consultant_name: ['', Validators.nullValidator],
      address: ['', Validators.nullValidator],
      email: ['', Validators.nullValidator],
      nationality: ['', Validators.nullValidator],

      project_brief: ['', Validators.required],
      project_purpose: ['', Validators.required],
      has_variations: ['no', Validators.required],

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

      estimated_project_duration: ['', Validators.required],
      estimated_project_construction_cost: ['', Validators.required],
      commitment_to_comply_with_development_codes_and_guidelines : [false, Validators.requiredTrue],
    });

    // mItemForm
    this.mItemForm = this.fb.group({
        parcel_number: ['', Validators.required],
        planned_land_use_id: ['', Validators.required],
        primary_land_use_id: ['', Validators.required],
        secondary_land_use_id: ['', Validators.nullValidator],
        preferred_ground_floor_use_id: ['', Validators.nullValidator],
        // min_density: ['', Validators.nullValidator],
        // max_density: ['', Validators.nullValidator],
        number_of_units_to_be_developed: ['', Validators.required],
        percentage_of_site_covered_by_existing_building: ['', Validators.required],
        percentage_of_site_covered_by_proposed_building: ['', Validators.nullValidator],
        min_number_of_floors: ['', Validators.required],
        max_number_of_floors: ['', Validators.required],
        min_floor_to_floor_height: ['', Validators.nullValidator],
        max_floor_to_floor_height: ['', Validators.nullValidator],
        min_floor_area: ['', Validators.nullValidator],
        max_floor_area: ['', Validators.nullValidator],
        min_far: ['', Validators.nullValidator],
        max_far: ['', Validators.nullValidator],
        minimum_setback: ['', Validators.nullValidator],
    });

   }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems();
  }


  // loadUnpaginatedItems
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
          this.mParcelLandUseGroups = (response as any).data.parcel_land_use_groups;
          this.mGreenCertifications = (response as any).data.green_certifications;
          this.mProfile = (response as any).data.profile;
          console.log(this.mProfile)
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
    const mLandUsePlansJsonArrayItems = JSON.stringify(Object.assign({}, this.mLandUsePlans))

    let formData:any = new FormData();
    formData.append('investor_id', formValues.investor_id);
    formData.append('type_id', formValues.type_id);
    formData.append('professional_body_id', formValues.professional_body_id);
    formData.append('membership_number', formValues.membership_number);
    formData.append('consultant_name', formValues.consultant_name);
    formData.append('address', formValues.address);
    formData.append('email', formValues.email);
    formData.append('nationality', formValues.nationality);
    formData.append('project_brief', formValues.project_brief);
    formData.append('project_purpose', formValues.project_purpose);
    // formData.append('has_variations', formValues.has_variations);
    formData.append('has_variations', this.mHasVariation);
    formData.append('land_use_plans', mLandUsePlansJsonArrayItems)

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


  // // verifyProfessional
  // verifyProfessional(){
  //   const item: any = {
  //     professional_body_id: this.itemForm.get('professional_body_id')?.value,
  //     membership_number: this.itemForm.get('membership_number')?.value,
  //   }
  //   if (!item.professional_body_id || !item.membership_number) {
  //     return;
  //   }

  //   this.mProgress.set(true);
  //   this.mProfileService.professionalSearch(item).subscribe({
  //     next: (response) => {
  //       if(response){
  //         if((response as any).status==="failed"){
  //           // this.router.navigateByUrl('/construction-permits');
  //           this.mToastrService.error((response as any).message);
  //         }else{
  //           // this.mToastrService.success((response as any).message);
  //           const mResponse = response as any
  //           this.itemForm.get('consultant_name')?.setValue(mResponse.name);
  //           this.itemForm.get('address')?.setValue(mResponse.address);
  //           this.itemForm.get('email')?.setValue(mResponse.email);
  //           this.itemForm.get('nationality')?.setValue(mResponse.nationality);
  //           if(mResponse.status == "Inactive"){
  //               let mResponse = (response as any)
  //               this.mToastrService.error(mResponse.good_standing+" "+mResponse.balance_reason);
  //               this.mProgress.set(false);
  //               this.router.navigateByUrl('/construction-permits');
  //           }
  //         }
  //         this.mProgress.set(false);
  //       };
  //     },
  //     error: (error ) => {
  //       if(error.error.message){
  //       this.mToastrService.error(error.error.message);
  //       }
  //       this.mProgress.set(false);
  //     }
  //   });
  // }


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

  // onCheckVariations
  onCheckVariations(item:any) {

    const hasVariation = this.mInvestorParcels.some((mInvestorParcel: any) => {
    const parcel_number = mInvestorParcel.allocation_worksheet.number;
    const min_floors = Number(mInvestorParcel.allocation_worksheet.min_floors);
    const max_floors = Number(mInvestorParcel.allocation_worksheet.max_floors);

    // console.log("mInvestorParcel "+JSON.stringify(mInvestorParcel));
    // console.log("mItem "+JSON.stringify(item));
    // console.log("min_number_of_floors "+item.min_number_of_floors+"min_number_of_floors "+mInvestorParcel.allocation_worksheet.min_floors);

    // console.log(item.min_number_of_floors < min_floors)
    console.log(this.mHasVariation);
    return (
      item.parcel_number === parcel_number &&
      (
        item.min_number_of_floors < min_floors ||
        item.max_number_of_floors > max_floors
      )
    );
  });

  if(hasVariation==true && this.mHasVariation == 'no'){
    this.mHasVariation = 'yes'; // AnySlightVariation
  }
  this.itemForm.get('has_variations')?.setValue(this.mHasVariation);
  console.log(this.mHasVariation);



            // "id": "4d927a3c-a3b2-44a5-a8b4-3070856e219f",
            // "phase": 1,
            // "number": "AN-005",
            // "acres": "1.53",
            // "parcel_land_use_group_id": 4,
            // "predominant_land": null,
            // "preferred_ground_floor_use": null,
            // "secondary_use": null,
            // "min_floors": "2",
            // "max_floors": "6",
            // "stand_premium": 10370000,
            // "annual_ground_rent": 830000,
            // "service_charge": 68827.5,
            // "status_id": 4,
            // "code": null,
            // "description": null,
            // "min_floor_area": null,
            // "max_floor_area": null,
            // "min_far": null,
            // "max_far": null,
            // "plot_coverage": null,
            // "rings": null,
            // "created_by": null,
            // "updated_by": null,
            // "created_at": null,
            // "updated_at": "2026-04-15T15:19:39.000000Z",
            // "deleted_at": null            "id": "4d927a3c-a3b2-44a5-a8b4-3070856e219f",
            // "phase": 1,
            // "number": "AN-005",
            // "acres": "1.53",
            // "parcel_land_use_group_id": 4,
            // "predominant_land": null,
            // "preferred_ground_floor_use": null,
            // "secondary_use": null,
            // "min_floors": "2",
            // "max_floors": "6",
            // "stand_premium": 10370000,
            // "annual_ground_rent": 830000,
            // "service_charge": 68827.5,
            // "status_id": 4,
            // "code": null,
            // "description": null,
            // "min_floor_area": null,
            // "max_floor_area": null,
            // "min_far": null,
            // "max_far": null,
            // "plot_coverage": null,
            // "rings": null,
            // "created_by": null,
            // "updated_by": null,
            // "created_at": null,
            // "updated_at": "2026-04-15T15:19:39.000000Z",
            // "deleted_at": null

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
    // this.mLandUsePlans.push(this.mItemForm.value)
    // this.mItemForm.reset();

    const newItem = this.mItemForm.value;
    // console.log(newItem);
    const exists = this.mLandUsePlans.some((item: any) =>
      item.parcel_number === newItem.parcel_number
    );
    if (!exists) {
      this.mLandUsePlans.push(newItem);
      // call
      this.onCheckVariations(newItem);
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
    this.mLandUsePlans.forEach((value:any, index:any)=>{
      if(value===element){
        this.mLandUsePlans.splice(index, 1)
      }
    });
  }

}
