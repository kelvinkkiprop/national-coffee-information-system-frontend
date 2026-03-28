import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ShowComponent } from './show/show.component';
import { AlertComponent, AlertLinkDirective } from '@coreui/angular';



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
    ProfileRoutingModule,

    // add
    AlertComponent,
    AlertLinkDirective,
  ]
})
export class ProfileModule { }
