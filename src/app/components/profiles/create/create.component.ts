import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ParcelAllocationWorksheetService } from '../../../services/parcel-allocation-worksheet.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {

  // variables
  mProfessionalBodies:any;

  itemForm:any;
  mProgress = signal(false);

  item:any;

  constructor(
    private mProfileService: ProfileService,
    private router: Router,
    private mToastrService: ToastrService,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      professional_body_id: ['', Validators.required],
      membership_number: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    // Call
    this.loadUnpaginatedItems();
  }


  //loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress.set(true);
    this.mProfileService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mProfessionalBodies = (response as any).data.professional_bodies;
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        // console.log(error.error);
        this.mToastrService.error(error.error.message);
        this.mProgress.set(false);
      }
    });

  }

  // onSubmit
  onSubmit(formValues: any){
    this.mProgress.set(true);
    this.mProfileService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);

            let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
            user.profile = (response as any).data;
            localStorage.setItem('currentUser', JSON.stringify(user));

          this.item = (response as any).data;
          this.mProgress.set(false);
          this.router.navigateByUrl(`/profile/edit/${this.item.id}`);
        }
      },
      error: (error ) => {
        // console.log(error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }

}



