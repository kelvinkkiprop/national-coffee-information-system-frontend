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
