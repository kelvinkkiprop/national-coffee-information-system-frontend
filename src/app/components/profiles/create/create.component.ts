import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { RegisteredProfessionalService } from 'src/app/services/registered-professional.service';
import { AuthService } from '../../../services/auth.service';

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
    private mRegisteredProfessionalService: RegisteredProfessionalService,
    private router: Router,
    private mToastrService: ToastrService,
    private mAuthService: AuthService,
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
    this.mRegisteredProfessionalService.unpaginatedItems().subscribe({
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
    this.mRegisteredProfessionalService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          if(response.status==='success'){

            this.mToastrService.success((response as any).message);
              let user = JSON.parse(localStorage.getItem('currentUser') || '{}');
              user.profile = (response as any).data;
              localStorage.setItem('currentUser', JSON.stringify(user));

              // Update_instead_of_refresh
              this.mAuthService.updateUserProfile((response as any).data);


            this.item = (response as any).data;
            this.mProgress.set(false);
            this.router.navigateByUrl(`/profile/edit/${this.item.id}`);
          }else{
            this.mToastrService.error((response as any).message);
          }
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



