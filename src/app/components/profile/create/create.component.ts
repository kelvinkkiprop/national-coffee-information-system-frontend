import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { ProfileService } from '../../../services/profile.service';
import { AuthService } from '../../../services/auth.service';


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

  mRoles:any
  mLegalStatuses:any
  mCountries:any
  mRegions:any
  mCounties:any
  mSubCounties:any
  mWards:any

  constructor(
    private mProfileService: ProfileService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    public mAuthService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      // Basic
      role_id: ['', Validators.required],
      country_code: ['', Validators.required],
      phone_number: ['', Validators.required],
      country_id: ['', Validators.required],
      // General
      legal_status_id: ['', Validators.required],
      id_number: ['', Validators.nullValidator],
      company_registration_number: ['', Validators.nullValidator],
      company_establishment_date: ['', Validators.nullValidator],
      kra_pin: ['', Validators.nullValidator],
      postal_address: ['', Validators.required],
      physical_address: ['', Validators.required],
      // Location
      region_id: ['', Validators.nullValidator],
      county_id: ['', Validators.nullValidator],
      sub_county_id: ['', Validators.nullValidator],
      ward_id: ['', Validators.nullValidator],
      location: ['', Validators.nullValidator],
      sub_location: ['', Validators.nullValidator],
      village: ['', Validators.nullValidator],
      town: ['', Validators.nullValidator],
      street_name: ['', Validators.nullValidator],
      building_name: ['', Validators.nullValidator],
      plot_number: ['', Validators.nullValidator],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true)
    this.mProfileService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          if((response as any).status==='success'){
            this.mToastrService.success((response as any).message)
            let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
              user.profile = (response as any).data;
              localStorage.setItem('currentUser', JSON.stringify(user));
              // Update_instead_of_refresh
              this.mAuthService.updateUserProfile((response as any).data);
              this.router.navigateByUrl('/profile')
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
    });
  }

  // loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mProfileService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mRoles = (response as any).data.roles
          this.mLegalStatuses = (response as any).data.legal_statuses
          this.mCountries = (response as any).data.countries
          this.mRegions = (response as any).data.regions
          // this.mCounties = (response as any).data.counties
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

  // onRegionChange
  onRegionChange($event: any){
    let id = $event.value
    this.mSubCounties = []
    // filterSubCounties
    this.mProgress.set(true)
    this.mProfileService.filterCounties(id).subscribe({
      next: (response) => {
        if(response){
          this.mCounties = response
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

  // onCountyChange
  onCountyChange($event: any){
    let id = $event.value
    this.mWards = []
    // filterCounties
    this.mProgress.set(true)
    this.mProfileService.filterSubCounties(id).subscribe({
      next: (response) => {
        if(response){
          this.mSubCounties = response
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

  // onSubCountyChange
  onSubCountyChange($event: any){
    let id = $event.value
    this.mProgress.set(true)
    this.mProfileService.filterWards(id).subscribe({
      next: (response) => {
        if(response){
          this.mWards = response
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mProgress.set(false)
      }
    })
  }

}
