import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { PermitService } from 'src/app/services/permit.service';

@Component({
  selector: 'app-process',
  // imports: [],
  standalone: false,
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
})
export class ProcessComponent {

  // variables
  mProgress = signal(false)

  item:any ={}
  id:any

  constructor(
    private mPermitService: PermitService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private route: ActivatedRoute,
  ) {  }

  ngOnInit(): void {
    // Call
    this.getItem()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mPermitService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    });
  }


}

