import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ContainerComponent
} from '@coreui/angular';

@Component({
  selector: 'app-err-page',
  imports: [
    ContainerComponent,
    RouterOutlet
  ],
  templateUrl: './err-page.component.html',
  styleUrl: './err-page.component.scss',
})
export class ErrPageComponent {

}
