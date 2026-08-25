import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  ButtonDirective,
  ColComponent,
  ContainerComponent,
  InputGroupComponent,
  RowComponent
} from '@coreui/angular';

import { IndexComponent } from '../errors/index/index.component';
import { ProgressModule } from '../progress/progress.module';
import { ErrorRoutingModule } from './error-routing.module';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,

    // import
    ErrorRoutingModule,
    ProgressModule,

    // add
    ButtonDirective,
    ColComponent,
    ContainerComponent,
    RowComponent,
    InputGroupComponent
  ]
})
export class ErrorModule { }
