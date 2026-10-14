import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { Role } from '../../../interfaces/role';
import { ProfileService } from '../../../services/profile.service';
import { Profile } from '../../../interfaces/profile';

@Component({
  selector: 'app-edit',
  // imports: [],
  standalone: false,
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
})
export class EditComponent {

  // variables
  id:any
  role_id:any
  id_number:any
  phone_number:any
  country_id:any
  // Location
  county_id:any
  sub_county_id:any
  ward_id:any
  postal_address:any
  physical_address:any

  itemForm:any
  mProgress = signal(false)

  mRoles:any
  mCountries:any
  mCounties:any
  mSubCounties:any
  mWards:any

  item:any

  constructor(
    private mProfileService: ProfileService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      // Basic
      role_id: ['', Validators.required],
      id_number: ['', Validators.nullValidator],
      phone_number: ['', Validators.required],
      country_id: ['', Validators.required],
      // Location
      county_id: ['', Validators.nullValidator],
      sub_county_id: ['', Validators.nullValidator],
      ward_id: ['', Validators.nullValidator],
      postal_address: ['', Validators.required],
      physical_address: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
    this.getItem()
    this.loadUnpaginatedItems()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true)
    this.mProfileService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
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
      id: this.item.id,
      role_id: formValues.role_id,
      id_number: formValues.id_number,
      phone_number: formValues.phone_number,
      country_id: formValues.country_id,
      // Location
      county_id: formValues.county_id,
      sub_county_id: formValues.sub_county_id,
      ward_id: formValues.ward_id,
      postal_address: formValues.postal_address,
      physical_address: formValues.physical_address,
    }

    this.mProgress.set(true);
    this.mProfileService.updateItem(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/profile')
          this.mProgress.set(false)
        }
      },
      error: (error ) => {
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
          this.mCountries = (response as any).data.countries
          this.mCounties = (response as any).data.counties
          this.mSubCounties = (response as any).data.sub_counties
          this.mWards = (response as any).data.wards

          this.mProgress.set(false)
        }
      },
      error: (error ) => {
        this.mToastrService.error(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

  // onCountyChange
  onCountyChange($event: any){
    let id = $event.value
    this.mWards = []
    // filterSubCounties
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
      error: (error ) => {
        this.mProgress.set(false)
      }
    })
  }

}
