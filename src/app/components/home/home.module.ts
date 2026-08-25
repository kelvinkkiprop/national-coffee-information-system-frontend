

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from '@coreui/angular';
import { ProgressModule } from '../progress/progress.module';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,

    // import
    HomeRoutingModule,
    ProgressModule,

    // add
    GridModule,
  ]
})
export class HomeModule { }
