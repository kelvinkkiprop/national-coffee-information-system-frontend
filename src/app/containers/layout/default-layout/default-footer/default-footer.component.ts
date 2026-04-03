import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
// import
import { AppInfoService } from '../../../../core/app-info.service';

@Component({
  selector: 'app-default-footer',
  templateUrl: './default-footer.component.html',
  styleUrls: ['./default-footer.component.scss']
})
export class DefaultFooterComponent extends FooterComponent {

  constructor(
    public mAppInfoService: AppInfoService,
  ) {
    super();
  }
}
