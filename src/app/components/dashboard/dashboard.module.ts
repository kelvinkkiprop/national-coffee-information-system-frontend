import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CalloutComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  GutterDirective,
  RowComponent
} from '@coreui/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    // import
    DashboardRoutingModule,
    // add
    ColComponent,
    ContainerComponent,
    GutterDirective,
    RowComponent,
    CardComponent,
    CardBodyComponent,
    CalloutComponent
  ]
})
export class DashboardModule { }
