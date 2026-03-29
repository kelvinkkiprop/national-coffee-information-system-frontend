import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule } from '@coreui/angular';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ParcelAllocationWorksheetRoutingModule } from './parcel-allocation-worksheet-routing.module';
import { ShowComponent } from './show/show.component';
import { ProgressModule } from '../progress/progress.module';
import { IconModule } from '@coreui/icons-angular';



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
    ParcelAllocationWorksheetRoutingModule,
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
export class ParcelAllocationWorksheetModule { }
