import { Component, signal } from '@angular/core';
// Import
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { DashboardService } from '../../../services/dashboard.service';
import { AppContextService } from '../../../core/app-context.service';

@Component({
  selector: 'app-index',
  // imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {

  // variables
  mMasterplanSubmissions:any;
  mPlanSubmissions:any;
  mAllocatedParcels:any;
  mConsultants:any;

  myConstructionPermits:any;
  myComplianceAndEnforcements:any;

  mProgress = signal(false);


  constructor(
    private mDownloadService: DashboardService,
    public mToastrService: ToastrService,
    public mAppContextService: AppContextService,
  ) { }

  ngOnInit(): void {
    // Call
    this.index();
  }

  // index
  index(){
    this.mProgress.set(true);
    this.mDownloadService.allItems().subscribe({
      next: (response) => {
          // console.log(response)
        if(response){
          this.mMasterplanSubmissions =(response as any).data.masterplan_submissions;
          this.mPlanSubmissions =(response as any).data.plan_submissions;
          this.mAllocatedParcels =(response as any).data.allocated_parcels;
          this.mConsultants =(response as any).data.consultants;
          this.myConstructionPermits =(response as any).data.my_construction_permits;
          this.myComplianceAndEnforcements =(response as any).data.my_compliance_and_enforcements;
        }
        this.mProgress.set(false);
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }


}
