

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GridModule } from '@coreui/angular';
import { ProgressModule } from '../progress/progress.module';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { AnimationsDirective } from '../../directives/animations.directive';



@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,

    // import
    HomeRoutingModule,
    ProgressModule,
    AnimationsDirective,

    // add
    GridModule,
  ]
})
export class HomeModule { }
