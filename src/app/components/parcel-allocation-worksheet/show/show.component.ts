import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ParcelAllocationWorksheetService } from '../../../services/parcel-allocation-worksheet.service';

@Component({
  selector: 'app-show',
  // imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
  standalone: false
})
export class ShowComponent {

  // variables
  item:any;
  id:any;

  mProgress = signal(false);

  constructor(
    private mParcelAllocationWorksheetService: ParcelAllocationWorksheetService,
    private mToastrService: ToastrService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    // Call
    this.getItem();
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mParcelAllocationWorksheetService.getOneItem(this.id).subscribe({
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


