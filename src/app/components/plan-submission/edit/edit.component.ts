import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { PlanSubmissionService } from '../../../services/plan-submission.service';

@Component({
  selector: 'app-edit',
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: false
})
export class EditComponent {

  // variables
  mInvestors:any
  mProfessionalBodies:any;
  mPlanSubmissionTypes:any;
  mGreenCertifications:any;

  itemForm:any
  mProgress = signal(false);

  mProfessionalStatus:any;
  mProfessionalGoodStanding:any;
  mProfessionalBalanceReason:any;

  public mEditor: any = ClassicEditor;

  item:any;
  id:any;


  constructor(
    private mPlanSubmissionService: PlanSubmissionService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      investor_id: ['', Validators.required],
      plan_submission_type_id: ['', Validators.required],

      // professional_body_id: ['', Validators.nullValidator],
      // membership_number: ['', [Validators.nullValidator, Validators.minLength(9)]],
      // consultant_name: ['', Validators.nullValidator],
      // address: ['', Validators.nullValidator],
      // email: ['', Validators.nullValidator],
      // citizenship: ['', Validators.nullValidator],

      project_brief: ['', Validators.required],
      project_purpose: ['', Validators.required],
    });

   }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems();
    this.getItem();
  }

  //loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mPlanSubmissionService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mInvestors = (response as any).data.investors;
          this.mProfessionalBodies = (response as any).data.professional_bodies;
          this.mPlanSubmissionTypes = (response as any).data.plan_submission_types;
          this.mGreenCertifications = (response as any).data.green_certifications;
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        this.mToastrService.error(error.error.message);
        this.mProgress.set(false);
      }
    });

  }

  // onSubmit
  onSubmit(formValues: any){
    // const item: PlanSubmission = {
    //   id: this.item.id,
    //   name: formValues.name,
    //   alias: formValues.alias,
    //   description: formValues.description,
    // }

    this.mProgress.set(true);
    this.mPlanSubmissionService.updateItem(this.id, formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message);
          this.mProgress.set(false);
          this.router.navigateByUrl('/plan-submissions');
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mPlanSubmissionService.getOneItem(this.id).subscribe({
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


}
