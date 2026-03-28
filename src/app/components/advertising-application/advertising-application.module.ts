import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent, AlertLinkDirective } from '@coreui/angular';
import { AdvertisingApplicationRoutingModule } from './advertising-application-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
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
    AdvertisingApplicationRoutingModule,

    // add
    AlertComponent,
    AlertLinkDirective,
  ]
})
export class AdvertisingApplicationModule { }
