import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { PaymentService } from '../../../services/payment.service';

@Component({
  selector: 'app-show',
  // imports: [],
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent {


  // variables
  mProgress = signal(false)

  item:any ={}
  id:any

  constructor(
    private mPaymentService: PaymentService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private route: ActivatedRoute,
    private router: Router,
  ) {  }

  ngOnInit(): void {
    // Call
    this.getItem();
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mPaymentService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          this.mProgress.set(false);
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false);
      }
    });
  }

  // invoiceItem
  onInvoice(item: any){
    this.mProgress.set(true)
    this.mPaymentService.invoiceItem(item.id).subscribe({
      next: (response) => {
        if(response){
          if((response as any).status=='success'){
            this.router.navigateByUrl('/payments/edit/'+item.id)
            this.mToastrService.success((response as any).message)
          }else{
            this.mToastrService.warning((response as any).message)
          }
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress.set(false)
      }
    })
  }


  // onReceipt
  onReceipt(item: any){
    this.mProgress.set(true);
    this.mPaymentService.onReceipt(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message);
          const file = response
          var fileURL = URL.createObjectURL(file)
          window.open(fileURL, "_blank")
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress.set(false)
      }
    });
  }


}


