import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent, AlertHeadingDirective, BadgeComponent, ButtonDirective, ButtonModule, CardBodyComponent, CardModule, DropdownComponent, DropdownItemDirective, DropdownMenuDirective, DropdownToggleDirective, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule } from '@coreui/angular';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { ConstructionPermitRoutingModule } from './construction-permit-routing.module';
import { CreateComponent } from './create/create.component';
import { DetailedPlanComponent } from './detailed-plan/detailed-plan.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { CmApprovalComponent } from './process/inc/cm-approval/cm-approval.component';
import { ReviewComponent } from './process/inc/review/review.component';
import { ProcessComponent } from './process/process.component';
import { ShowComponent } from './show/show.component';
import { VariationComponent } from './variation/variation.component';
import { SubmissionComponent } from './detailed-plan/inc/submission/submission.component';
import { PlannerReviewComponent } from './detailed-plan/inc/planner-review/planner-review.component';
import { ProfessionalRecommendationComponent } from './detailed-plan/inc/professional-recommendation/professional-recommendation.component';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,

    ProcessComponent,
    VariationComponent,
    ReviewComponent,
    CmApprovalComponent,

    DetailedPlanComponent,
    SubmissionComponent,
    PlannerReviewComponent,
    ProfessionalRecommendationComponent,
  ],
  imports: [
    CommonModule,

    // import
    ConstructionPermitRoutingModule,
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
  ]
})
export class ConstructionPermitModule { }
