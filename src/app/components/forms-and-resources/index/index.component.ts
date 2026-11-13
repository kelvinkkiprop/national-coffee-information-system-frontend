import { Component, signal } from '@angular/core';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { DashboardService } from '../../../services/dashboard.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-index',
  // imports: [],
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {

  // variables
  mProgress = signal(false)
  mForms: any = {}
  mOtherResources: any = {}

  constructor(
    private mDashboardService: DashboardService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
  ) {  }

  ngOnInit(): void {
    // Call
    this.index()
  }

  // index
  index(){
    this.mProgress.set(true)
    this.mDashboardService.formsAndResourceItems().subscribe({
      next: (response) => {
        if(response){
          this.mForms = (response as any).data.forms
          this.mOtherResources = (response as any).data.other_resources
        }
        this.mProgress.set(false)
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    })
  }

  // onDownload(){
  onDownload(type_id:any, filename:any){
    const mUrl = `${environment.base_url}/forms-and-resources/${type_id}/${filename}`;
    window.open(mUrl, '_blank')
  }


}
