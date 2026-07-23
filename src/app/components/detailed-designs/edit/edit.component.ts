import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { DetailedDesignService } from '../../../services/detailed-design.service';

@Component({
  selector: 'app-edit',
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: false
})
export class EditComponent {


  // variables
  itemForm:any
  mProgress = signal(false);

  indemnity_form_file:any;
  architectural_design_file:any;
  structural_design_file:any;
  electrical_design_file:any;
  ict_design_file:any;
  mechanical_design_file:any;
  landscaping_design_file:any;
  site_access_plan_file:any;
  other_relevant_documents_file:any;
  green_certification_registration_file:any;
  nema_project_report_file:any;

  mMasterplanSubmissions:any;

  item:any;
  id:any;

  constructor(
    private mDetailedDesignService: DetailedDesignService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      indemnity_form: ['', Validators.required],
      architectural_design: ['', Validators.required],
      structural_design: ['', Validators.required],
      electrical_design: ['', Validators.required],
      ict_design: ['', Validators.required],
      mechanical_design: ['', Validators.required],
      landscaping_design: ['', Validators.required],
      site_access_plan: ['', Validators.required],
      other_relevant_documents: ['', Validators.nullValidator],
      green_certification_registration: ['', Validators.required],
      nema_project_report: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Call
    this.getItem();
    this.loadUnpaginatedItems();
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mDetailedDesignService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
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

  // loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mDetailedDesignService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mMasterplanSubmissions = (response as any).data.masterplan_submissions;
          // console.log(this.mProfile)
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
    // attachments
    formData.append('id', this.id);
    formData.append('indemnity_form', this.indemnity_form_file, this.indemnity_form_file.name);
    formData.append('architectural_design', this.architectural_design_file, this.architectural_design_file.name);
    formData.append('structural_design', this.structural_design_file, this.structural_design_file.name);
    formData.append('electrical_design', this.electrical_design_file, this.electrical_design_file.name);
    formData.append('ict_design', this.ict_design_file, this.ict_design_file.name);
    formData.append('mechanical_design', this.mechanical_design_file, this.mechanical_design_file.name);
    formData.append('landscaping_design', this.landscaping_design_file, this.landscaping_design_file.name);
    formData.append('site_access_plan', this.site_access_plan_file, this.site_access_plan_file.name);
    formData.append('other_relevant_documents', this.other_relevant_documents_file, this.other_relevant_documents_file.name);
    formData.append('green_certification_registration', this.green_certification_registration_file, this.green_certification_registration_file.name);
    formData.append('nema_project_report', this.nema_project_report_file, this.nema_project_report_file.name);
    // formData.append('_method', 'POST')
    formData.append('_method', 'PUT')


    this.mProgress.set(true);
    this.mDetailedDesignService.updateItem(this.id,formData).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/detailed-plans');
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


  // onIndemnityFormChange
  onIndemnityFormChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.indemnity_form_file = file;
    }
  }
  // onArchitecturalDesignChange
  onArchitecturalDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.architectural_design_file = file;
    }
  }
  // onStructuralDesignChange
  onStructuralDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.structural_design_file = file;
    }
  }
  // onElectricalDesignChange
  onElectricalDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.electrical_design_file = file;
    }
  }
  // onIctDesignChange
  onIctDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.ict_design_file = file;
    }
  }
  // onMechanicalDesignChange
  onMechanicalDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.mechanical_design_file = file;
    }
  }
  // onLandscapingDesignChange
  onLandscapingDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.landscaping_design_file = file;
    }
  }
  // onSignageDesignChange
  onSignageDesignChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.site_access_plan_file = file;
    }
  }
  // onOtherRelevantDocumentsChange
  onOtherRelevantDocumentsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.other_relevant_documents_file = file;
    }
  }
  // onGreenCertificationRegistrationChange
  onGreenCertificationRegistrationChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.green_certification_registration_file = file;
    }
  }
  // onNemaProjectReportChange
  onNemaProjectReportChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.nema_project_report_file = file;
    }
  }

}
