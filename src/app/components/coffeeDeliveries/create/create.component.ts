import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { CoffeePlotService } from '../../../services/coffee-plot.service';
import { CoffeeDeliveryService } from '../../../services/coffee-delivery.service';


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

  mFarmers:any
  mPlots:any
  mCoffeeSpecies:any

  constructor(
    private mCoffeeDeliveryService: CoffeeDeliveryService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      farmer_id:['', Validators.required],
      plot_id:['', Validators.required],
      // cooperative_society_id:['', Validators.required],
      // collection_centre_id:['', Validators.required],
      coffee_species_id:['', Validators.required],
      delivery_date:['', Validators.required],
      quantity:['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mCoffeeDeliveryService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/coffee-deliveries')
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
    this.mCoffeeDeliveryService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mFarmers = (response as any).data.farmers
          this.mPlots = (response as any).data.plots
          this.mCoffeeSpecies = (response as any).data.coffee_species
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }


  // onFarmerChange
  onFarmerChange($event: any){
    let id = $event.value
    this.mProgress.set(true)
    this.mCoffeeDeliveryService.filterFarmerPlots(id).subscribe({
      next: (response) => {
        if(response){
          this.mPlots = response
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



