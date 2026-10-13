import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AppInfoService } from '../../../../core/app-info.service';

@Component({
  selector: 'app-footer',
  // imports: [],
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {


  constructor(
    public mAppInfoService: AppInfoService,
  ) { }

}
