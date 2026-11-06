import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { CoffeeTransactionService } from '../../../services/coffee-transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  // imports: [],
  standalone: false,
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class IndexComponent {

  // variables
  mProgress = signal(false)

  item:any

  traceability_mark:any
  itemForm:any

  constructor(
    private mCoffeeTransactionService: CoffeeTransactionService,
    public mToastrService: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    // validation
    this.traceability_mark = new FormControl('', Validators.required)
    this.itemForm = new FormGroup({
      traceability_mark: this.traceability_mark,
    })
  }

  // onChange
  onSearch(formValues: any){
    this.mProgress.set(true)
    this.mCoffeeTransactionService.traceItem(formValues).subscribe({
      next: (response) => {
        if(response){
          if((response as any).status === 'success'){
            this.item = (response as any).data
            this.mToastrService.success((response as any).message)
            this.router.navigateByUrl(`/home/details/trace/${encodeURIComponent(formValues.traceability_mark)}`)
          }else{
            this.mToastrService.warning((response as any).message)
          }
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }
        this.mProgress.set(false)
      }
    })
  }

}
