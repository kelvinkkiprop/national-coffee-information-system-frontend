import { Component, signal, ViewEncapsulation } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ClassicEditor } from 'ckeditor5';
import { AppContextService } from '../../../../../core/app-context.service';
import { DetailedDesignService } from '../../../../../services/detailed-design.service';

@Component({
  selector: 'app-permit',
  // imports: [],
  templateUrl: './permit.component.html',
  styleUrl: './permit.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None, // For_CKEditor_styles
})
export class PermitComponent {

  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  mNextPreviousStatuses:any;
  public mEditor: any = ClassicEditor;

  permit_file:any;
  notice_of_approval_file:any;

  constructor(
    public mToastrService: ToastrService,
    public mDetailedDesignService: DetailedDesignService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public mAppContextService: AppContextService,
  ) {
    // validation
    this.itemForm = this.fb.group({
      notice_of_approval: ['', Validators.required],
      permit: ['', Validators.required],
      remarks: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
    this.getItem();
  }

  // getItem
  getItem(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress = signal(true);
    this.mDetailedDesignService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          // call
          this.mProgress = signal(false);
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = signal(false);
      }
    });
  }

  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData();
    // attachments
    // formData.append('permit', this.permit_file || '', this.permit_file?.name || '' );
    formData.append('notice_of_approval', this.notice_of_approval_file || '', this.notice_of_approval_file?.name || '' );
    formData.append('permit', this.permit_file || '', this.permit_file?.name || '' );
    formData.append('remarks', formValues.remarks);
    formData.append('_method', 'POST')

    this.mProgress.set(true);
    this.mDetailedDesignService.permitItem(this.id, formData).subscribe({
      next: (response) => {
        this.mToastrService.success((response as any).message);
        this.router.navigateByUrl('/detailed-designs');
        this.mProgress = signal(false);
      },
      error: (error ) => {
        // console.log(error.error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = signal(false);
      }
    });

  }

  // onConstructionPermitChange
  onConstructionPermitChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.permit_file = file;
    }
  }

  // onNoticeOfApprovalChange
  onNoticeOfApprovalChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.notice_of_approval_file = file;
    }
  }

}
