import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-index',
  // imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
  standalone: false
})
export class IndexComponent {

  isVisible = signal(true);

  toggle(): void {
    this.isVisible.update(value => !value);
  }

}
