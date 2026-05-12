import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { RegisteredProfessionalService } from 'src/app/services/registered-professional.service';

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
  private mRegisteredProfessionalService: RegisteredProfessionalService,
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
    this.mRegisteredProfessionalService.getOneItem(this.id).subscribe({
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
    this.mRegisteredProfessionalService.updateItem(this.id, formValues).subscribe({
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

