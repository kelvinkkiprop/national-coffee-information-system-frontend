import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CalloutComponent,
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  GutterDirective,
  RowComponent,
  ProgressComponent,
  WidgetStatBComponent,
  WidgetStatCComponent,
  TemplateIdDirective,
  WidgetStatFComponent,
  WidgetStatEComponent,
} from '@coreui/angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { IconDirective } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';



@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,

    // import
    DashboardRoutingModule,
    ProgressModule,

    // add
    ColComponent,
    ContainerComponent,
    GutterDirective,
    RowComponent,
    CardComponent,
    CardBodyComponent,
    CalloutComponent,

    ProgressComponent,
    WidgetStatBComponent,
    WidgetStatCComponent,
    TemplateIdDirective,
    WidgetStatFComponent,
    IconDirective,
    WidgetStatEComponent
  ]
})
export class DashboardModule { }
