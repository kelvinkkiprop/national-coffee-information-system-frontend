import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, PaginationModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { PermitRoutingModule } from './permit-routing.module';
import { ShowComponent } from './show/show.component';
import { ProcessComponent } from './process/process.component';
import { ReviewComponent } from './process/inc/review/review.component';
import { ApproveComponent } from './process/inc/approve/approve.component';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,

    ProcessComponent,
    ReviewComponent,
    ApproveComponent,
  ],
  imports: [
    CommonModule,

    // import
    PermitRoutingModule,
    ProgressModule,

    // add
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    PaginationModule,
    TableModule,
    ReactiveFormsModule,
    IconModule,
  ]
})
export class PermitModule { }
