import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent, AlertHeadingDirective, BadgeComponent, ButtonDirective, ButtonModule, CardBodyComponent, CardModule, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule } from '@coreui/angular';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProcessComponent } from './process/process.component';
import { ShowComponent } from './show/show.component';
import { DetailedPlanRoutingModule } from './detailed-plan-routing.module';
import { PlannerReviewComponent } from './process/inc/planner-review/planner-review.component';
import { ProfessionalRecommendationComponent } from './process/inc/professional-recommendation/professional-recommendation.component';
import { DesignReportComponent } from './process/inc/design-report/design-report.component';
import { CommitteeStageComponent } from './process/inc/committee-stage/committee-stage.component';
import { ConstructionPermitComponent } from './process/inc/construction-permit/construction-permit.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,

    ProcessComponent,
    PlannerReviewComponent,
    ProfessionalRecommendationComponent,
    DesignReportComponent,
    CommitteeStageComponent,
    ConstructionPermitComponent
  ],
  imports: [
    CommonModule,

    // import
    DetailedPlanRoutingModule,
    ProgressModule,

    // add
    ButtonModule,
    CardModule,
    CardBodyComponent,
    FormModule,
    GridModule,
    PaginationModule,
    SharedModule,
    TableModule,
    ModalModule,
    ReactiveFormsModule,
    IconModule,
    IconDirective,
    AlertHeadingDirective,
    AlertComponent,
    ButtonDirective,
    DropdownComponent,
    DropdownItemDirective,
    DropdownMenuDirective,
    DropdownToggleDirective,
    BadgeComponent,

    // CKEditor
    CKEditorModule
  ]
})

export class DetailedPlanModule { }
