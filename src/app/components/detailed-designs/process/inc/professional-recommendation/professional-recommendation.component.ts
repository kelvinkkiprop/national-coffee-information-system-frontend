import { Component, signal, ViewEncapsulation } from '@angular/core';
// import
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { AppContextService } from '../../../../../core/app-context.service';
import { ClassicEditor } from 'ckeditor5';
import { DetailedDesignService } from '../../../../../services/detailed-design.service';


@Component({
  selector: 'app-professional-recommendation',
  // imports: [],
  templateUrl: './professional-recommendation.component.html',
  styleUrl: './professional-recommendation.component.scss',
  standalone: false,
  encapsulation: ViewEncapsulation.None, // For_CKEditor_styles
})
export class ProfessionalRecommendationComponent {


  // variables
  itemForm: any;
  mProgress = signal(false);

  id:any;
  item:any = {};

  public mEditor: any = ClassicEditor;
  mNextPreviousStatuses:any;

  constructor(
    public mToastrService: ToastrService,
    public mDetailedDesignService: DetailedDesignService,
    public mAppContextService: AppContextService,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    // validation
    this.itemForm = this.fb.group({
      architect_report: ['', Validators.nullValidator],
      structural_engineer_report: ['', Validators.nullValidator],
      electrical_engineer_report: ['', Validators.nullValidator],
      ict_engineer_report: ['', Validators.nullValidator],
      mechanical_engineer_report: ['', Validators.nullValidator],
      environment_health_and_safety_report: ['', Validators.nullValidator],
      professional_sustainability_report: ['', Validators.nullValidator],
      landscaping_report: ['', Validators.nullValidator],
      civil_works_design_report: ['', Validators.nullValidator],
      water_and_sanitation_designs_report: ['', Validators.nullValidator],
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
      architect_report: formValues.architect_report,
      structural_engineer_report: formValues.structural_engineer_report,
      electrical_engineer_report: formValues.electrical_engineer_report,
      ict_engineer_report: formValues.ict_engineer_report,
      mechanical_engineer_report: formValues.mechanical_engineer_report,
      environment_health_and_safety_report: formValues.environment_health_and_safety_report,
      professional_sustainability_report: formValues.professional_sustainability_report,
      landscaping_report: formValues.landscaping_report,
      civil_works_design_report: formValues.civil_works_design_report,
      water_and_sanitation_designs_report: formValues.water_and_sanitation_designs_report,
    }
    this.mProgress = signal(true);
    this.mDetailedDesignService.professionalRecommendationsDetailedPlanItem(item).subscribe({
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

}
