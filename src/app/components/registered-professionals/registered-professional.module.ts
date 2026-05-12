import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, PaginationModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { RegisteredProfessionalRoutingModule } from './registered-professional-routing.module';
import { ShowComponent } from './show/show.component';



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
    RegisteredProfessionalRoutingModule,
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
export class RegisteredProfessionalModule { }
