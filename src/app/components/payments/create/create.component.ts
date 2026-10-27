import { Component, signal } from '@angular/core';
// import
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-create',
  // imports: [],
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  // variables
  mProgress = signal(false)

  item:any=[]
  id:any

  constructor(
    private mPaymentService: PaymentService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    // call
    this.getItem();
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mPaymentService.settledItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          if((response as any).status=='success'){
            this.router.navigateByUrl('/payments/show/'+this.id)
            this.mToastrService.success((response as any).message)
          }
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress.set(false);
      }
    });
  }

}
