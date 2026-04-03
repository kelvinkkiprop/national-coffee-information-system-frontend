import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { PlanSubmissionService } from 'src/app/services/plan-submission.service';


@Component({
  selector: 'app-review',
  // imports: [],
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss',
  standalone: false
})
export class ReviewComponent {

  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  mNextPreviousStatuses:any;

  constructor(
    public mToastrService: ToastrService,
    public mPlanSubmissionService: PlanSubmissionService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      status_id: ['', Validators.required],
      remarks: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getItem();
  }

  // getItem
  getItem(){
    this.mProgress = signal(true);
    this.mPlanSubmissionService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          // call
          this.getNextPreviousStatus();
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
      status_id: formValues.status_id,
      remarks: formValues.remarks,
    }
    this.mProgress = signal(true);
    this.mPlanSubmissionService.processItemPlanner(item).subscribe({
      next: (response) => {
        if((response as any).status === 'success'){
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/plan-submissions');
          this.mProgress = signal(false);
        }else{
          this.mToastrService.error((response as any).message);
          this.mProgress = signal(false);
        }
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

  // getNextPreviousStatus
  getNextPreviousStatus() {
    this.mProgress = signal(true);
    this.mPlanSubmissionService.nextPreviousStatusItem(this.item.status_id).subscribe({
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
