import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { CoffeePlotService } from '../../../services/coffee-plot.service';


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

  mUsers:any
  mCoffeeSpecies:any
  mCounties:any
  mCooperativeSocieties:any
  mCountries:any

  constructor(
    private mCoffeePlotService: CoffeePlotService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      owner_id: ['', Validators.required],
      size: ['', Validators.required],
      soil_profile: ['', Validators.nullValidator],
      coffee_species_id: ['', Validators.required],
      number_of_coffee_trees: ['', Validators.nullValidator],
      cooperative_society_id: ['', Validators.nullValidator],
      country_id: ['', Validators.required],
      county_id: ['', Validators.required],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      geo_json_geometry: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mCoffeePlotService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/coffee-plots')
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
    this.mCoffeePlotService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mUsers = (response as any).data.users
          this.mCoffeeSpecies = (response as any).data.coffee_species
          this.mCounties = (response as any).data.counties
          this.mCooperativeSocieties = (response as any).data.cooperative_societies
          this.mCountries = (response as any).data.countries
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



