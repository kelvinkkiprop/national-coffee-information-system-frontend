

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { FormModule, GridModule } from '@coreui/angular';
import { AnimationsDirective } from '../../directives/animations.directive';
import { ProgressModule } from '../progress/progress.module';
import { HomeRoutingModule } from './home-routing.module';
import { IndexComponent } from './index/index.component';
import { HowItWorksComponent } from './show/inc/how-it-works/how-it-works.component';
import { PrivacyPolicyComponent } from './show/inc/others/privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './show/inc/others/terms-and-conditions/terms-and-conditions.component';
import { StandardsComponent } from './show/inc/standards/standards.component';
import { SupportComponent } from './show/inc/support/support.component';
import { ShowComponent } from './show/show.component';



@NgModule({
  declarations: [
    IndexComponent,
    ShowComponent,
    // Others
    SupportComponent,
    HowItWorksComponent,
    StandardsComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
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
