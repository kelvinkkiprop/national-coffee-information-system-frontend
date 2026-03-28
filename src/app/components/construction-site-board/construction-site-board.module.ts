import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConstructionSiteBoardRoutingModule } from './construction-site-board-routing.module';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { IndexComponent } from './index/index.component';
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
    ConstructionSiteBoardRoutingModule,

    // add
    AlertComponent,
    AlertLinkDirective,
  ]
})
export class ConstructionSiteBoardModule { }
