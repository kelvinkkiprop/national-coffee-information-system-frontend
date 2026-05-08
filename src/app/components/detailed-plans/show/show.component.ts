import { Component, signal } from '@angular/core';
// import
import { ActivatedRoute, Router } from '@angular/router';
import { DetailedPlanService } from '../../../services/detailed-plan.service';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';

@Component({
  selector: 'app-show',
  // imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
  standalone: false
})
export class ShowComponent {

  // variables
  itemForm:any
  mProgress = signal(false);

  item:any;
  id:any;

  constructor(
   private mDetailedPlanService: DetailedPlanService,
   public mAppContextService: AppContextService,
   private mToastrService: ToastrService,
   private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Call
    this.getItem();
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mDetailedPlanService.getOneItem(this.id).subscribe({
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


  // onDownloadReport
  onDownloadReport(item: any){
    this.mProgress.set(true);
    this.mDetailedPlanService.onDownloadProfessionalReport(item).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          const file = response;
          var fileURL = URL.createObjectURL(file);
          window.open(fileURL, "_blank");
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        // console.log(error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }

}
