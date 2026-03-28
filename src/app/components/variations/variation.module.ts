import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent, AlertLinkDirective } from '@coreui/angular';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
import { ShowComponent } from './show/show.component';
import { VariationRoutingModule } from './variation-routing.module';



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
    VariationRoutingModule,

    // add
    AlertComponent,
    AlertLinkDirective,
  ]
})
export class VariationModule { }
