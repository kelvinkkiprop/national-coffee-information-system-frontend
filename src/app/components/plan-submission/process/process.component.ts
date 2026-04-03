import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { PlanSubmission } from '../../../interfaces/plan-submission';
import { PlanSubmissionService } from '../../../services/plan-submission.service';
import { AppContextService } from 'src/app/core/app-context.service';

@Component({
  selector: 'app-process',
  // imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  standalone: false
})
export class ProcessComponent {

  // variables
  item:PlanSubmission = {};
  id:any;

  itemForm:any
  mProgress = signal(false);

  constructor(
    private mPlanSubmissionService: PlanSubmissionService,
    public mAppContextService: AppContextService,
    private mToastrService: ToastrService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Call
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.getItem();
    });
  }


  // getItem
  getItem(): void{
    if (!this.id) return;
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

