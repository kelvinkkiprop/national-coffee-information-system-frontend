import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { ConstructionPermit } from '../../../interfaces/construction-permit';
import { ConstructionPermitService } from '../../../services/construction-permit.service';

@Component({
  selector: 'app-detailed-plan',
  // imports: [],
  templateUrl: './detailed-plan.component.html',
  styleUrl: './detailed-plan.component.scss',
  standalone: false
})
export class DetailedPlanComponent {


  // variables
  item:ConstructionPermit = {};
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

