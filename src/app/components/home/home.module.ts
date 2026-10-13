

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormModule, GridModule } from '@coreui/angular';
import { ProgressModule } from '../progress/progress.module';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { AnimationsDirective } from '../../directives/animations.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ShowComponent } from './show/show.component';
import { SupportComponent } from './show/inc/support/support.component';
import { HowItWorksComponent } from './show/inc/how-it-works/how-it-works.component';
import { StandardsComponent } from './show/inc/standards/standards.component';



@NgModule({
  declarations: [
    IndexComponent,
    ShowComponent,
    SupportComponent,
    HowItWorksComponent,
    StandardsComponent,
  ],
  imports: [
    CommonModule,

    // import
    HomeRoutingModule,
    ProgressModule,
    AnimationsDirective,

    // add
    GridModule,
    RouterOutlet,
    FormModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
