import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ColComponent, ContainerComponent, RowComponent } from '@coreui/angular';

@Component({
  selector: 'app-auth-ui',
  imports: [
    RouterOutlet,
    RouterModule,
    ContainerComponent,
    RowComponent,
    ColComponent
  ],
  templateUrl: './auth-ui.component.html',
  styleUrl: './auth-ui.component.scss',
})
export class AuthUIComponent {
}
