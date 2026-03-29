import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanSubmissionRoutingModule } from './plan-submission-routing.module';
import { IndexComponent } from './index/index.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { ShowComponent } from './show/show.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent, AlertHeadingDirective, ButtonModule, CardBodyComponent, CardModule, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule } from '@coreui/angular';
import { IconDirective, IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';


@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent
  ],
  imports: [
    CommonModule,

    // import
    PlanSubmissionRoutingModule,
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
    AlertComponent
  ]
})
export class PlanSubmissionModule { }
