import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './inc/footer/footer.component';
import { HeaderComponent } from './inc/header/header.component';

@Component({
  selector: 'app-public-page',
  imports: [
    RouterOutlet,
    // ContainerComponent,
    HeaderComponent,
    FooterComponent,
  ],
  templateUrl: './public-page.component.html',
  styleUrl: './public-page.component.scss',
})
export class PublicPageComponent {

}
