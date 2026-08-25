import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from '@coreui/angular';
import { HeaderComponent } from './inc/header/header.component';
import { FooterComponent } from './inc/footer/footer.component';

@Component({
  selector: 'app-public-page',
  imports: [
    RouterOutlet,
    // ContainerComponent,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './public-page.component.html',
  styleUrl: './public-page.component.scss',
})
export class PublicPageComponent {

}
