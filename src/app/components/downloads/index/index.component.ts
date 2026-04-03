import { Component, signal } from '@angular/core';
// Import
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import swal from 'sweetalert2';
import { DownloadService } from '../../../services/download.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-index',
  // imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {

  // variables
  mDevelopmentCodes: any = {}
  mDevelopmentGuidelines: any = {}
  mTemplates: any = {}

  mProgress = signal(false);

  constructor(
    private mDownloadService: DownloadService,
    public mToastrService: ToastrService,
    private router: Router
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
          this.mDevelopmentCodes =(response as any).data.development_codes;
          this.mDevelopmentGuidelines =(response as any).data.development_guidelines;
          this.mTemplates =(response as any).data.templates;
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


  // onDownload(){
  onDownload(type_id:any, filename:any){
    // const mUrl = "https://api.jitume.konza.go.ke/api/downloads"
    const mUrl = `${environment.base_url}/downloads/${type_id}/${filename}`;
    window.open(mUrl, '_blank')
  }



}
