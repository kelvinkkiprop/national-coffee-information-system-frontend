import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent, AlertLinkDirective, ButtonModule, CardModule, FormModule, GridModule, ModalModule, PaginationModule, SharedModule, TableModule } from '@coreui/angular';
import { CreateComponent } from './create/create.component';
import { DesignSubmissionRoutingModule } from './design-submission-routing.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { IconModule } from '@coreui/icons-angular';
import { IconDirective } from '@coreui/icons-angular';



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
    DesignSubmissionRoutingModule,

    // add
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    PaginationModule,
    SharedModule,
    TableModule,
    ModalModule,
    ReactiveFormsModule,
    IconModule,
    IconDirective,

    // add
    AlertComponent,
    AlertLinkDirective,
  ]
})
export class DesignSubmissionModule { }
