import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { DealerRegistration } from '../../../interfaces/dealer-registration';
import { DealerRegistrationService } from '../../../services/dealer-registration.service';

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
  item:any

  mUsers:any
  mDealershipCategories:any
  mSelectedCategories:number[] = []

  engaged_persons_professional_skills_file?:any

  constructor(
    private mDealerRegistrationService: DealerRegistrationService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      user_id: ['', Validators.required],
      brief_company_profile: ['', Validators.required],
      directors_of_dealership: ['', Validators.required],
      category_id: [[]],
      engaged_persons_professional_skills: ['', Validators.required],
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
    this.mDealerRegistrationService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
            // set
            this.mSelectedCategories = (this.item as any).dealership_services?.map(
              (item: any) => Number(item.category_id)
            ) ?? [];
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
    let formData:any = new FormData()
    formData.append('user_id', formValues.user_id)
    formData.append('brief_company_profile', formValues.brief_company_profile)
    formData.append('directors_of_dealership', formValues.directors_of_dealership)
    formData.append('category_id', this.mSelectedCategories)
    // attachments
    if(this.engaged_persons_professional_skills_file){
      formData.append('engaged_persons_professional_skills', this.engaged_persons_professional_skills_file, this.engaged_persons_professional_skills_file.name);
    }else{
      formData.append('engaged_persons_professional_skills', '')
    }
    formData.append('_method', 'PUT')

    this.mProgress.set(true)
    this.mDealerRegistrationService.updateItem(this.id, formData).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/dealer-registrations')
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
    this.mDealerRegistrationService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mDealershipCategories = (response as any).data.dealership_categories
          this.mUsers = (response as any).data.users
          this.mProgress.set(false)
        }
      },
      error: (error) => {
        this.mToastrService.warning(error.error.message)
        this.mProgress.set(false)
      }
    });
  }


  // onCategoryChange
  onCategoryChange(id: number, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;
    if (checked) {
      if (!this.mSelectedCategories.includes(id)) {
        this.mSelectedCategories.push(id)
      }
    } else {
      this.mSelectedCategories = this.mSelectedCategories.filter(item => item !== id);
    }
    this.itemForm.patchValue({
      category_id: this.mSelectedCategories
    })
  }

  // onEngagedPersonsProfessionalSkillsChange
  onEngagedPersonsProfessionalSkillsChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.engaged_persons_professional_skills_file = file;
    }
  }

}
