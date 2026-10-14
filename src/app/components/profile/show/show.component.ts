import { Component } from '@angular/core';
// import
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-show',
  // imports: [],
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
})
export class ShowComponent {

  // variables
  mCurrentUser:any

  constructor(
    private mAuthService: AuthService,
  ){}

  ngOnInit(): void {
    this.mCurrentUser = this.mAuthService.currentUser
  }

}
