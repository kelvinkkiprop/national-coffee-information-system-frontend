import { Component, signal } from '@angular/core';
// Import
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { DashboardService } from '../../../services/dashboard.service';
import { AppContextService } from '../../../core/app-context.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-index',
  // imports: [],
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {

  // variables
  mUsers:any
  mLicenses:any
  mPermits:any
  mRevenues:any
  mRecentUsers?:any[] = []

  myLicenses:any
  myPermits:any
  myRecentLicenses?:any[] = []

  mCurrentUser:any
  mProgress = signal(false);

  constructor(
    private mDownloadService: DashboardService,
    private mAuthService: AuthService,
    public mToastrService: ToastrService,
    public mAppContextService: AppContextService,
  ) { }

  ngOnInit(): void {
    // Call
    this.index();
    // set
    this.mCurrentUser = this.mAuthService?.currentUser
  }

  // index
  index(){
    this.mProgress.set(true);
    this.mDownloadService.allItems().subscribe({
      next: (response) => {
          // console.log(response)
        if(response){
          this.mUsers =(response as any).data.users
          this.mLicenses =(response as any).data.licenses
          this.mPermits =(response as any).data.permits
          this.mRevenues =(response as any).data.revenues
          this.mRecentUsers =(response as any).data.recent_users

          this.myLicenses =(response as any).data.my_licenses
          this.myPermits =(response as any).data.my_permits
          this.myRecentLicenses =(response as any).data.my_recent_licenses
        }
        this.mProgress.set(false);
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }


  // getDate
  getDate(){
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    return today.toLocaleDateString('en-US', options)
  }

}
