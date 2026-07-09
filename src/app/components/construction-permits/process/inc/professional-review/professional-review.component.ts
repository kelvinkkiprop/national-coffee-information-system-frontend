import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ConstructionPermitService } from '../../../../../services/construction-permit.service';
import { AppContextService } from '../../../../../core/app-context.service';
import { ClassicEditor } from 'ckeditor5';

@Component({
  selector: 'app-professional-review',
  // imports: [],
  templateUrl: './professional-review.component.html',
  styleUrl: './professional-review.component.scss',
  standalone: false
})
export class ProfessionalReviewComponent {


  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  public mEditor: any = ClassicEditor;
  mNextPreviousStatuses:any;

  constructor(
    public mToastrService: ToastrService,
    public mConstructionPermitService: ConstructionPermitService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      topographical_survey_review: ['', Validators.nullValidator],
      geotechnical_survey_review: ['', Validators.nullValidator],
      traffic_management_plan_and_parking_strategy_review: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
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
    const item: any = {
      id: this.id,
      topographical_survey_review: formValues.topographical_survey_review,
      geotechnical_survey_review: formValues.geotechnical_survey_review,
      traffic_management_plan_and_parking_strategy_review: formValues.traffic_management_plan_and_parking_strategy_review,
    }
    this.mProgress = signal(true);
    this.mConstructionPermitService.professionalReviewItem(item).subscribe({
      next: (response) => {
        this.mToastrService.success((response as any).message);
        this.router.navigateByUrl('/construction-permits');
        this.mProgress = signal(false);
      },
      error: (error ) => {
        // console.log(error.error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = signal(false);
      }
    });

  }

}
