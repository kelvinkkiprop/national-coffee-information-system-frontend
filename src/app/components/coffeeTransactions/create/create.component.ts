import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { CoffeeTransactionService } from '../../../services/coffee-transaction.service';


@Component({
  selector: 'app-create',
  // imports: [],
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  // variables
  itemForm:any
  mProgress = signal(false)

  mStages:any
  mDeliveries:any
  mLots:any

  mSelectedDeliveries:any[] = []
  mSelectedLots:any[] = []

  constructor(
    private mCoffeeTransactionService: CoffeeTransactionService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      stage_id:['', Validators.required],
      delivery_id: [[]],
      lot_id: [[]],
      grade:['', Validators.required],
      quantity:['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true)
    // Patch
    formValues.delivery_ids = this.mSelectedDeliveries
    formValues.lot_ids = this.mSelectedLots
    this.mCoffeeTransactionService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/coffee-transactions')
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

  // loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mCoffeeTransactionService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mStages = (response as any).data.stages
          // this.mDeliveries = (response as any).data.coffee_deliveries
          // this.mLots = (response as any).data.coffee_lots
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }


  // onStageChange
  onStageChange($event: any){
    let id = $event.value
    this.mProgress.set(true)
    this.mCoffeeTransactionService.filterLotsAndDeliveries(id).subscribe({
      next: (response) => {
        if(response){
          this.mDeliveries = (response as any).data.coffee_deliveries
          this.mLots = (response as any).data.coffee_lots
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


  // onDeliveryChange
  onDeliveryChange(id: number, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      // console.log('Checked:', id);
      if (!this.mSelectedDeliveries.includes(id)) {
        this.mSelectedDeliveries.push(id)
      }
    } else {
      this.mSelectedDeliveries = this.mSelectedDeliveries.filter(item => item !== id);
    }
    this.itemForm.patchValue({
      delivery_id: this.mSelectedDeliveries
    })
  }

   // onLotChange
  onLotChange(id: number, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      // console.log('Checked:', id);
      if (!this.mSelectedLots.includes(id)) {
        this.mSelectedLots.push(id)
      }
    } else {
      this.mSelectedLots = this.mSelectedLots.filter(item => item !== id);
    }
    this.itemForm.patchValue({
      delivery_id: this.mSelectedDeliveries
    })
  }

}



