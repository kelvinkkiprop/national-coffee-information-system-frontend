import { Component, ElementRef, signal, ViewChild } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { AuthService } from '../../../services/auth.service';
import { UserService } from '../../../services/user.service';
import intlTelInput from 'intl-tel-input';
import { User } from '../../../interfaces/user';

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

  mRoles:any
  mLegalStatuses:any
  mCountries:any
  mRegions:any
  mCounties:any
  mSubCounties:any
  mWards:any

  id:any
  item:Partial<User>={}

  @ViewChild('phoneInput') phoneInput!: ElementRef;
  iti: any;
  phoneNumber: string = '';

  constructor(
    private mUserService: UserService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    public mAuthService: AuthService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      // Basic
      id_number: ['', Validators.nullValidator],
      phone: ['', Validators.required],
      country_id: ['', Validators.required],
      // General
      legal_status_id: ['', Validators.required],
      company_registration_number: ['', Validators.nullValidator],
      company_establishment_date: ['', Validators.nullValidator],
      kra_pin: ['', Validators.nullValidator],
      postal_address: ['', Validators.required],
      postal_code: ['', Validators.required],
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

    // Conditionally_Remove_FormControl
    this.itemForm.get('legal_status_id')?.valueChanges.subscribe((mLegalStatusId: any) => {
      const idNumber = this.itemForm.get('id_number')
      const companyRegistrationNumber = this.itemForm.get('company_registration_number')
      const companyEstablishmentDate = this.itemForm.get('company_establishment_date')
      if (Number(mLegalStatusId)===1) {
        idNumber?.setValidators([Validators.required])
        companyRegistrationNumber?.clearValidators()
        companyRegistrationNumber?.reset()
        companyEstablishmentDate?.clearValidators()
        companyEstablishmentDate?.reset()
      } else {
        companyRegistrationNumber?.setValidators([Validators.required])
        companyEstablishmentDate?.setValidators([Validators.required])
        idNumber?.clearValidators()
        idNumber?.reset()
      }
      idNumber?.updateValueAndValidity()
      companyRegistrationNumber?.updateValueAndValidity()
      companyEstablishmentDate?.updateValueAndValidity()
    });

  }

  // ngOnInit
  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
    this.getItem()
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true)
    this.mUserService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
          // console.log(this.item)
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
    this.mUserService.updateProfileItem(item).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
              let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
              // user.profile = (response as any).data;
              user = (response as any).data;
              localStorage.setItem('currentUser', JSON.stringify(user));
              // Update_instead_of_refresh
              this.mAuthService.updateUserProfile((response as any).data);
          this.router.navigateByUrl('/profile')
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
    this.mUserService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mRoles = (response as any).data.roles
          this.mLegalStatuses = (response as any).data.legal_statuses
          this.mRegions = (response as any).data.regions
          this.mCountries = (response as any).data.countries
          this.mCounties = (response as any).data.counties
          this.mSubCounties = (response as any).data.sub_counties
          this.mWards = (response as any).data.wards

          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }

  ngAfterViewInit(): void {
    this.iti = intlTelInput(this.phoneInput.nativeElement, {
      initialCountry: 'ke',
      separateDialCode: true,
      // preferredCountries: ['ke', 'ug', 'tz', 'us', 'gb'],
      loadUtils: () => import('intl-tel-input/utils')
    });
    // Set_existing_phone
    const phone = this.itemForm.get('phone')?.value;
    if (phone) {
      this.iti.setNumber(phone);
    }
  }

  onPhoneInput(): void {
    this.phoneNumber = this.iti.getNumber();
    this.itemForm.patchValue({
      phone: this.phoneNumber
    });
  }

  // onRegionChange
  onRegionChange($event: any){
    let id = $event.value
    this.mSubCounties = []
    // filterCounties
    this.mProgress.set(true)
    this.mUserService.filterCounties(id).subscribe({
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
    // filterSubCounties
    this.mProgress.set(true)
    this.mUserService.filterSubCounties(id).subscribe({
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
    this.mUserService.filterWards(id).subscribe({
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
