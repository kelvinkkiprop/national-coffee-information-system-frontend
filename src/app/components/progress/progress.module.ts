import { NgModule } from '@angular/core';
import { ProgressComponent } from './progress/progress.component';
import { ProgressBarComponent, ProgressBarDirective } from '@coreui/angular';

@NgModule({
  declarations: [
    ProgressComponent
  ],
  imports: [
    ProgressBarComponent,

  ],
  exports: [
    ProgressComponent // ExportForReuse
  ]
})
export class ProgressModule { }
