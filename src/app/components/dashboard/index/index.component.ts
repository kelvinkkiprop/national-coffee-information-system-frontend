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
  mUsers:any;
  mInstitutions:any;
  mSelections:any;
  mPlacements:any;

  myLearners:any;
  mySelections:any;

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
          this.mUsers =(response as any).data.users
          this.mInstitutions =(response as any).data.institutions
          this.mSelections =(response as any).data.selections
          this.mPlacements =(response as any).data.placements
          this.myLearners =(response as any).data.my_learners
          this.mySelections =(response as any).data.my_selections
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
