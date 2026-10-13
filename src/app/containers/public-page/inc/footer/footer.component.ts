import { Component } from '@angular/core';
import { AppInfoService } from '../../../../core/app-info.service';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  // imports: [],
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {


  constructor(
    public mAppInfoService: AppInfoService,
  ) { }

}
