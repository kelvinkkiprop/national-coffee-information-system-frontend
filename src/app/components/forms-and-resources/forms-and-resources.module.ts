import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule, PaginationModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { FormsAndResourcesRoutingModule } from './forms-and-resources-routing.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,

    // import
    FormsAndResourcesRoutingModule,
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
export class FormsAndResourcesModule { }
