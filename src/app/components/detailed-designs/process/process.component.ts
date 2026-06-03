import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { ConstructionPermitService } from '../../../services/construction-permit.service';

@Component({
  selector: 'app-process',
  // imports: [],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  standalone: false
})
export class ProcessComponent {


  // variables
  item:any = {};
  id:any;

  itemForm:any
  mProgress = signal(false);

  constructor(
   private mConstructionPermitService: ConstructionPermitService,
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
    this.mConstructionPermitService.getOneItem(this.id).subscribe({
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

