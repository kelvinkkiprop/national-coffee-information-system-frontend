import { Component, signal } from '@angular/core';
// Import
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { DashboardService } from '../../../services/dashboard.service';

@Component({
  selector: 'app-index',
  // imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {

  // variables
  mConstructionPermits:any;
  mAdvertisingApplications:any;
  mConstructionSiteBoards:any;
  mComplianceAndEnforcements:any;

  myConstructionPermits:any;
  myComplianceAndEnforcements:any;

  mProgress = signal(false);


  constructor(
    private mDownloadService: DashboardService,
    public mToastrService: ToastrService,
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
          this.mConstructionPermits =(response as any).data.construction_permits;
          this.mAdvertisingApplications =(response as any).data.advertising_applications;
          this.mConstructionSiteBoards =(response as any).data.construction_site_boards;
          this.mComplianceAndEnforcements =(response as any).data.compliance_and_enforcements;
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
