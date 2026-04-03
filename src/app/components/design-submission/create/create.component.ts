import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { PlanSubmissionService } from '../../../services/plan-submission.service';
import { AppContextService } from '../../../core/app-context.service';
import { ToastrService } from '@iqx-limited/ngx-toastr';

@Component({
  selector: 'app-create',
  // imports: [],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss',
  standalone: false
})
export class CreateComponent {


  // variables
  vendor_id?: any
  customer_id?: any
  project_name?: any
  project_description?: any
  deal_value?: any
  partner_revenue_share?: any
  konza_revenue_share?: any
  expected_timelines?: any
  status_id?: any

  mCustomers:any
  mVendors:any
  mDealStatuses:any;

  public mEditor: any = ClassicEditor;

  itemForm:any
  mProgress:boolean = false

  constructor(
    private mPlanSubmissionService: PlanSubmissionService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
  ) { }

  ngOnInit(): void {

    // validation
    this.vendor_id = new FormControl('', Validators.required);
    this.customer_id = new FormControl('', Validators.required);
    this.project_name = new FormControl('', Validators.required);
    this.project_description = new FormControl('', Validators.required);
    this.deal_value = new FormControl('', Validators.required);
    this.partner_revenue_share = new FormControl('', Validators.required);
    this.konza_revenue_share = new FormControl('', Validators.required);
    this.expected_timelines = new FormControl('', Validators.required);
    this.status_id = new FormControl('', Validators.required);
    this.itemForm = new FormGroup({
      vendor_id: this.vendor_id,
      customer_id: this.customer_id,
      project_name: this.project_name,
      project_description: this.project_description,
      deal_value: this.deal_value,
      partner_revenue_share: this.partner_revenue_share,
      konza_revenue_share: this.konza_revenue_share,
      expected_timelines: this.expected_timelines,
      status_id: this.status_id,
    })
    // Call
    this.loadUnpaginatedItems();
  }

  //loadUnpaginatedItems
  loadUnpaginatedItems(){
    this.mProgress = true
    this.mPlanSubmissionService.unpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mCustomers = (response as any).data.customers;
          this.mVendors = (response as any).data.vendors;
          this.mDealStatuses = (response as any).data.deal_statuses;
          this.mProgress = false;
        }
      },
      error: (error ) => {
        // console.log(error.error);
        this.mToastrService.error(error.error.message);
        this.mProgress = false
      }
    });

  }

  //onSubmit
  onSubmit(formValues: any){
    // console.log(formValues);
    this.mProgress = true
    this.mPlanSubmissionService.createItem(formValues).subscribe({
      next: (response) => {
        if(response){
          // console.log(response)
          this.mToastrService.success((response as any).message);
          this.router.navigateByUrl('/deals');
          this.mProgress = false
        }
      },
      error: (error ) => {
        // console.log(error);
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress = false
      }
    });
  }

}
