import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { ProfileService } from '../../../services/profile.service';


@Component({
  selector: 'app-create',
  // imports: [],
  standalone: false,
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
})
export class CreateComponent {

  // variables
  id_number:any
  phone_number:any
  country_id:any

  itemForm:any
  mProgress = signal(false)

  mCountries:any
  mCounties:any
  mSubCounties:any
  mWards:any

  constructor(
    private mProfileService: ProfileService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      // Basic
      id_number: ['', Validators.nullValidator],
      phone_number: ['', Validators.required],
      country_id: ['', Validators.required],
      // Location
      county_id: ['', Validators.nullValidator],
      sub_county_id: ['', Validators.nullValidator],
      ward_id: ['', Validators.nullValidator],
    });
  }


  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems()
  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mProfileService.createItem(formValues).subscribe({
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

}
