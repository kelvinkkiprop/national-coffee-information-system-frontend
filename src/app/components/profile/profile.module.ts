import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AccordionModule, ButtonModule, CalloutModule, CardModule, FormModule, GridModule, ListGroupDirective, ListGroupItemDirective, PaginationModule, SharedModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ShowComponent } from './show/show.component';
import { AnimationsDirective } from '../../directives/animations.directive';
import { CreateComponent } from './create/create.component';
import { UpdatePasswordComponent } from './edit/inc/update-password/update-password.component';



@NgModule({
  declarations: [
    IndexComponent,
    CreateComponent,
    EditComponent,
    ShowComponent,
    UpdatePasswordComponent
  ],
  imports: [
    CommonModule,

    // import
    ProfileRoutingModule,
    ProgressModule,
    AnimationsDirective,

    // add
    ButtonModule,
    CardModule,
    FormModule,
    GridModule,
    PaginationModule,
    SharedModule,
    TableModule,
    FormModule,
    ReactiveFormsModule,
    AccordionModule,
    CalloutModule,
    ListGroupDirective,
    ListGroupItemDirective,
    IconModule,
  ]
})
export class ProfileModule { }
