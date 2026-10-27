import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ClassicEditor } from 'ckeditor5';
import { AppContextService } from '../../../../../core/app-context.service';
import { LicenseService } from '../../../../../services/license.service';

@Component({
  selector: 'app-approve',
  // imports: [],
  standalone: false,
  templateUrl: './approve.component.html',
  styleUrl: './approve.component.scss',
})
export class ApproveComponent {

  // variables
  itemForm:any
  mProgress = signal(false)

  id:any
  item:any = {}

  mNextPreviousStatuses:any
  public mEditor:any = ClassicEditor

  constructor(
    public mToastrService: ToastrService,
    private mLicenseService: LicenseService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      status_id: ['', Validators.required],
      date_of_issue: ['', Validators.nullValidator],
      effective_date: ['', Validators.nullValidator],
      remarks: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
    this.getItem()
  }

  // getItem
  getItem(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress = signal(true);
    this.mLicenseService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any
          // call
          this.getNextPreviousStatus()
          this.mProgress = signal(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = signal(false)
      }
    });
  }


  // onSubmit
  onSubmit(formValues: any){
    const item: any = {
      ...formValues,
      id: this.id,
    }
    this.mProgress = signal(true);
    this.mLicenseService.approvalApplicationItem(item).subscribe({
      next: (response) => {
        if((response as any).status==='success'){
          this.mToastrService.success((response as any).message)
          this.router.navigateByUrl('/licenses')
          this.mProgress = signal(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = signal(false)
      }
    });

  }

  // getNextPreviousStatus
  getNextPreviousStatus() {
    this.mProgress = signal(true);
    this.mLicenseService.nextPreviousStatusItem(this.item.status_id).subscribe({
      next: (response) => {
        if(response){
          this.mNextPreviousStatuses = response
          this.mProgress = signal(false)
        }
      },
      error: (error) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = signal(false)
      }
    });
  }

}
