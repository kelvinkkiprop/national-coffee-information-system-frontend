import { Component } from '@angular/core';
// import
import { Location } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-show',
  // imports: [],
  templateUrl: './show.component.html',
  styleUrl: './show.component.scss',
  standalone: false
})
export class ShowComponent {

  // variables
  mCurrentUser:any

  id:any
  sso_account_url:any

  item:any = {}
  mProgress:boolean = false

  constructor(
    private mAuthService: AuthService,
    private location: Location,
  ){}

  ngOnInit(): void {
    this.mCurrentUser = this.mAuthService.currentUser;
    this.sso_account_url = environment.sso_account_url
    this.id = this.mAuthService?.currentUser?.id
  }


  // goBack
  goBack(){
    // console.log(this.location.back());
    this.location.back();
  }
}
