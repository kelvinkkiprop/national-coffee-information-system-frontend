import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { UserService } from '../../../../../services/user.service';


@Component({
  selector: 'app-import',
  // imports: [],
  standalone: false,
  templateUrl: './import.component.html',
  styleUrl: './import.component.scss',
})
export class ImportComponent {

  // variables
  itemForm:any
  mProgress = signal(false)

  attachment_file:any

  constructor(
    private mUserService: UserService,
    private mToastrService: ToastrService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // validation
    this.itemForm = this.fb.group({
      attachment: ['', Validators.required],
    });
  }

  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData()
    formData.append('attachment', this.attachment_file, this.attachment_file.name)
    formData.append('_method', 'POST')

    this.mProgress.set(true)
    this.mUserService.importRegisteredFarmersItems(formData).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/users')
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

  // onAttachmentChange
  onAttachmentChange(event:any) {
    if (event.target.value) {
      const attachment = event.target.files[0]
      this.attachment_file = attachment
      console.log(this.attachment_file)
    }
  }

}
