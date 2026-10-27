import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { PermitService } from 'src/app/services/permit.service';


@Component({
  selector: 'app-edit',
  // imports: [],
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {


  // variables
  itemForm:any
  mProgress = signal(false)

  id:any
  item:any = {}

  mPermitTypes:any
  mCoffeeSpecies:any
  mCoffeeForms:any

  constructor(
    private mPermitService: PermitService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      type_id: ['', Validators.required],
      mark: ['', Validators.nullValidator],
      coffee_species_id: ['', Validators.required],
      coffee_form_id: ['', Validators.required],
      number_of_bags: ['', Validators.required],
      origin: ['', Validators.required],
      destination: ['', Validators.required],
      distance: ['', Validators.required],
      vehicle_registration_number: ['', Validators.required],
      driver_name: ['', Validators.required],
      driver_id_number: ['', Validators.required],
      warehouse_receipt_number: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
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

  // onSubmit
  onSubmit(formValues: any){
    const item: any = {
      ...formValues,
      id: this.item.id,
    }

    this.mProgress.set(true);
    this.mPermitService.updateItem(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          // this.router.navigateByUrl('/permits')
          const paymentId = (response as any).data.payment.id
          // this.router.navigateByUrl('/permits')
          this.router.navigateByUrl('/payments/show/'+paymentId)
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
    this.mPermitService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mPermitTypes = (response as any).data.permit_types
          this.mCoffeeSpecies = (response as any).data.coffee_species
          this.mCoffeeForms = (response as any).data.coffee_forms
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

}
