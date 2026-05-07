import { Component, signal } from '@angular/core';
// import
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';
import { ProfileService } from '../../../services/profile.service';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: false
})
export class EditComponent {

  // variables
  item:any;
  id:any;

  mProfessionalBodies:any;

  itemForm:any;
  mProgress = signal(false);

constructor(
  private mProfileService: ProfileService,
  private mToastrService: ToastrService,
  private route: ActivatedRoute,
  private fb: FormBuilder,
  private router: Router,
  ) {
    // validation
    this.itemForm = this.fb.group({
      professional_body_id: ['', Validators.required],
      membership_number: ['', Validators.required],
      consultant_name: ['', Validators.required],
      email: ['', Validators.required],
      membership_type: ['', Validators.required],
      status: ['', Validators.required],
      address: ['', Validators.required],
      nationality: ['', Validators.required],
      subscription_year: ['', Validators.required],
      good_standing: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    // call
    this.getItem();
    this.loadUnpaginatedItems();
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mProfileService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress.set(false);
      }
    });
  }

  // loadUnpaginatedItems
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
    this.mProfileService.updateItem(formValues).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.item = (response as any).data;
          this.router.navigateByUrl(`/profile`);
          this.mProgress.set(false);
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

