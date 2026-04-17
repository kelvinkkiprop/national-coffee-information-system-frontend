import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ConstructionPermitService } from '../../../services/construction-permit.service';
import { ProfileService } from '../../../services/profile.service';
import { AppContextService } from '../../../core/app-context.service';

@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {


  // variables
  itemForm:any
  mProgress = signal(false);

  id:any;
  item:any = {};

  indemnity_form_file:any;
  architectural_design_file:any;
  structural_design_file:any;
  electrical_design_file:any;
  ict_design_file:any;
  mechanical_design_file:any;
  landscaping_design_file:any;
  signage_design_file:any;
  other_necessary_drawings_file:any;
  green_certification_registration_file:any;
  nema_project_report_file:any;

  constructor(
    private mConstructionPermitService: ConstructionPermitService,
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
      signage_design: ['', Validators.required],
      other_necessary_drawings: ['', Validators.nullValidator],
      green_certification_registration: ['', Validators.required],
      nema_project_report: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Call
    this.getItem();
  }


  // getItem
  getItem(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress = signal(true);
    this.mConstructionPermitService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          // call
          this.mProgress = signal(false);
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = signal(false);
      }
    });
  }


  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData();
    // attachments
    formData.append('indemnity_form', this.indemnity_form_file, this.indemnity_form_file.name);
    formData.append('architectural_design', this.architectural_design_file, this.architectural_design_file.name);
    formData.append('structural_design', this.structural_design_file, this.structural_design_file.name);
    formData.append('electrical_design', this.electrical_design_file, this.electrical_design_file.name);
    formData.append('ict_design', this.ict_design_file, this.ict_design_file.name);
    formData.append('mechanical_design', this.mechanical_design_file, this.mechanical_design_file.name);
    formData.append('landscaping_design', this.landscaping_design_file, this.landscaping_design_file.name);
    formData.append('signage_design', this.signage_design_file, this.signage_design_file.name);
    formData.append('other_necessary_drawings', this.other_necessary_drawings_file, this.other_necessary_drawings_file.name);
    formData.append('green_certification_registration', this.green_certification_registration_file, this.green_certification_registration_file.name);
    formData.append('nema_project_report', this.nema_project_report_file, this.nema_project_report_file.name);
    formData.append('_method', 'POST')

    this.mProgress.set(true);
    this.mConstructionPermitService.detailedPlanItem(this.id, formData).subscribe({
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
      this.signage_design_file = file;
    }
  }
  // onOtherNecessaryDrawingsChange
  onOtherNecessaryDrawingsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.other_necessary_drawings_file = file;
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
