import { Component, signal } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ConstructionPermitService } from '../../../../../services/construction-permit.service';

@Component({
  selector: 'app-committee-stage',
  // imports: [],
  templateUrl: './committee-stage.component.html',
  styleUrl: './committee-stage.component.scss',
  standalone: false
})
export class CommitteeStageComponent {


  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  mNextPreviousStatuses:any;
  construction_permit_file:any;

  constructor(
    public mToastrService: ToastrService,
    public mConstructionPermitService: ConstructionPermitService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      detailed_plan_status_id: ['', Validators.required],
      construction_permit: ['', Validators.nullValidator],
      remarks: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getItem();
  }

  // getItem
  getItem(){
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress = signal(true);
    this.mConstructionPermitService.getOneItem(this.id).subscribe({
      next: (response) => {
        if(response){
          this.item = response as any;
          // call
          this.getNextPreviousDetailedPlanStatus();
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
    let formData:any = new FormData();
    // attachments
    formData.append('detailed_plan_status_id', formValues.detailed_plan_status_id);
    // formData.append('construction_permit', this.construction_permit_file, this.construction_permit_file.name);
    formData.append('construction_permit', this.construction_permit_file || '', this.construction_permit_file?.name || '' );
    formData.append('remarks', formValues.remarks);
    formData.append('_method', 'POST')

    this.mProgress.set(true);
    this.mConstructionPermitService.committeeStageDetailedPlanItem(this.id, formData).subscribe({
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

  // getNextPreviousDetailedPlanStatus
  getNextPreviousDetailedPlanStatus() {
    this.mProgress = signal(true);
    this.mConstructionPermitService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({
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


  // onConstructionPermitChange
  onConstructionPermitChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.construction_permit_file = file;
    }
  }

}


