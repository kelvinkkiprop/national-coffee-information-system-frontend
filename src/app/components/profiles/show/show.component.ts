import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-show',
  // imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
  standalone: false
})
export class ShowComponent {


  //variablesWS
  mCurrentUser:any
  mProgress:any

  constructor(
    private mAuthService: AuthService,
  ){}

  ngOnInit(): void {
    this.mCurrentUser = this.mAuthService.currentUser;
  }

}
