import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ConstructionPermitService } from '../../../../../services/construction-permit.service';


@Component({
  selector: 'app-planner-review',
  // imports: [],
  templateUrl: './planner-review.component.html',
  styleUrl: './planner-review.component.scss',
  standalone: false
})
export class PlannerReviewComponent {


  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  mNextPreviousStatuses:any;

  constructor(
    public mToastrService: ToastrService,
    public mConstructionPermitService: ConstructionPermitService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      detailed_plan_status_id: ['', Validators.required],
      remarks: ['', Validators.required],
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
          // call
          this.getNextPreviousDetailedPlanStatus();
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
      detailed_plan_status_id: formValues.detailed_plan_status_id,
      remarks: formValues.remarks,
    }
    this.mProgress = signal(true);
    this.mConstructionPermitService.plannerDetailedPlanItem(item).subscribe({
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

  // getNextPreviousDetailedPlanStatus
  getNextPreviousDetailedPlanStatus() {
    this.mProgress = signal(true);
    this.mConstructionPermitService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({
      next: (response) => {
        if(response){
          this.mNextPreviousStatuses = response;
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


}
