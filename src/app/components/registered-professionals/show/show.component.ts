import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { RegisteredProfessionalService } from '../../../services/registered-professional.service';

@Component({
  selector: 'app-show',
  // imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
  standalone: false
})
export class ShowComponent {

  // variables
  mProgress = signal(false);

  item:any ={};
  id:any;

  constructor(
   private mRegisteredProfessionalService: RegisteredProfessionalService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
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
    this.mRegisteredProfessionalService.getOneItem(this.id).subscribe({
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


