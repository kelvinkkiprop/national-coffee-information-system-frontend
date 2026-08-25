import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-auth-ui',
  imports: [
    RouterOutlet,
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  templateUrl: './auth-ui.component.html',
  styleUrl: './auth-ui.component.scss',
})
export class AuthUIComponent {
}
