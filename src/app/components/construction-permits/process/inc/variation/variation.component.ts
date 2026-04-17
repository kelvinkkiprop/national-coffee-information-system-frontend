import { Component, signal } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../../../core/app-context.service';
import { ConstructionPermitService } from '../../../../../services/construction-permit.service';

@Component({
  selector: 'app-variation',
  // imports: [],
  templateUrl: './variation.component.html',
  styleUrl: './variation.component.scss',
  standalone: false
})
export class VariationComponent {

  // variables
  itemForm:any
  mProgress = signal(false);

  public mEditor: any = ClassicEditor;

  item:any ={};
  id:any;

  mConstructionPermitVariationStatuses:any;
  variation_evidence_file:any;

  constructor(
   private mConstructionPermitService: ConstructionPermitService,
    private router: Router,
    private mToastrService: ToastrService,
    public mAppContextService: AppContextService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ){
    // validation
    this.itemForm = this.fb.group({
      variation_status_id: ['', Validators.required],
      variation_evidence: ['', Validators.nullValidator],
      variation_comments: ['', Validators.required],
    });
   }

  ngOnInit(): void {
    // Call
    this.getItem();
    this.loadUnpaginatedItems();
  }


  // onSubmit
  onSubmit(formValues: any){
    let formData:any = new FormData();
    formData.append('variation_status_id', formValues.variation_status_id);
    formData.append('variation_comments', formValues.variation_comments);
    // attachments
    if (this.variation_evidence_file) {
      formData.append('variation_evidence', this.variation_evidence_file, this.variation_evidence_file.name);
    } else {
      formData.append('variation_evidence', ''); // or_empty_string ''
    }
    formData.append('_method', 'POST')

    this.mProgress.set(true);
    this.mConstructionPermitService.processItemVariations(this.id, formData).subscribe({
      next: (response) => {
        if(response){
          this.mToastrService.success((response as any).message);
          this.mProgress.set(false);
          this.router.navigateByUrl('/construction-permits');
        }
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message);
        }
        this.mProgress.set(false);
      }
    });
  }

  // getItem
  getItem(): void{
    this.id = this.route.snapshot.paramMap.get('id')
    this.mProgress.set(true);
    this.mConstructionPermitService.getOneItem(this.id).subscribe({
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
    this.mConstructionPermitService.processUnpaginatedItems().subscribe({
      next: (response) => {
        if(response){
          this.mConstructionPermitVariationStatuses = (response as any).data.construction_permit_variation_statuses;
          this.mProgress.set(false);
        }
      },
      error: (error ) => {
        this.mToastrService.error(error.error.message);
        this.mProgress.set(false);
      }
    });

  }

  // onVariationEvidenceChange
  onVariationEvidenceChange(event:any) {
    if (event.target.value) {
      const file = event.target.files[0];
      this.variation_evidence_file = file;
    }
  }

}

