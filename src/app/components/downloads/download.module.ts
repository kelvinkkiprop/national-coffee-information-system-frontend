

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule, GridModule, SharedModule, TableModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';
import { ProgressModule } from '../progress/progress.module';
import { DownloadRoutingModule } from './download-routing.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,

    // import
    DownloadRoutingModule,
    ProgressModule,

    // add
    CardModule,
    GridModule,
    SharedModule,
    TableModule,
    IconModule,
  ]
})

export class DownloadModule { }
