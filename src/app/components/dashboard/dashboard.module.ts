import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import {
  CardBodyComponent,
  CardComponent,
  ColComponent,
  ContainerComponent,
  GutterDirective,
  ProgressComponent,
  RowComponent,
  TableDirective,

  ButtonDirective,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  TemplateIdDirective,
  WidgetStatAComponent
} from '@coreui/angular';



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

      ButtonDirective,
      DropdownComponent,
      DropdownDividerDirective,
      DropdownItemDirective,
      DropdownMenuDirective,
      DropdownToggleDirective,
      TemplateIdDirective,
      WidgetStatAComponent
  ]
})
export class DashboardModule { }
