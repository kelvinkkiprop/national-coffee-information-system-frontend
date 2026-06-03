import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ConstructionPermitService } from '../../../../../services/construction-permit.service';
import { AppContextService } from '../../../../../core/app-context.service';
import { ClassicEditor } from 'ckeditor5';

@Component({
  selector: 'app-cm-approval',
  // imports: [],
  templateUrl: './cm-approval.component.html',
  styleUrl: './cm-approval.component.scss',
  standalone: false
})
export class CmApprovalComponent {

  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  mNextPreviousStatuses:any;
  public mEditor: any = ClassicEditor;

  constructor(
    public mToastrService: ToastrService,
    public mConstructionPermitService: ConstructionPermitService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      status_id: ['', Validators.required],
      remarks: ['', Validators.nullValidator],
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getItem();
  }

  // getItem
  getItem(){
    this.mProgress = signal(true);
    this.mConstructionPermitService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          // call
          this.getNextPreviousStatus();
          this.mProgress = signal(false);
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = signal(false);
      }
    });
  }


  // onSubmit
  onSubmit(formValues: any){
    const item: any = {
      id: this.id,
      status_id: formValues.status_id,
      remarks: formValues.remarks,
    }
    this.mProgress = signal(true);
    this.mConstructionPermitService.cmItemPlanner(item).subscribe({
      next: (response) => {
        this.mToastrService.success((response as any).message);
        this.router.navigateByUrl('/construction-permits');
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

  // getNextPreviousStatus
  getNextPreviousStatus() {
    this.mProgress = signal(true);
    this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({
      next: (response) => {
        if(response){
          this.mNextPreviousStatuses = response;
          this.mProgress = signal(false);
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
        this.mProgress = signal(false);
      }
    });
  }



}

