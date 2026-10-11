import { Component } from '@angular/core';
import { AppInfoService } from '../../../../core/app-info.service';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {


  constructor(
    public mAppInfoService: AppInfoService,
  ) { }

}
