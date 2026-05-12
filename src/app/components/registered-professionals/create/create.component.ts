import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../core/app-context.service';
import { RegisteredProfessionalService } from '../../../services/registered-professional.service';


@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {


  // variables
  itemForm:any
  mProgress = signal(false);

  attachment_file:any;

  constructor(
   private mRegisteredProfessionalService: RegisteredProfessionalService,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      attachment: ['', Validators.required],
    });
  }


  ngOnInit(): void {
    // Call
  }

  // onSubmit
  onSubmit(formValues: any){

    let formData:any = new FormData();
    // formData.append('professional_body_id', formValues.professional_body_id);
    // attachments
    formData.append('attachment', this.attachment_file, this.attachment_file.name);
    formData.append('_method', 'POST')


    this.mProgress.set(true);
    this.mRegisteredProfessionalService.importRegisteredProfessionalsItems(formData).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/registered-professionals');
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

  // onAttachmentChange
  onAttachmentChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.attachment_file = file;
    }
  }


}



