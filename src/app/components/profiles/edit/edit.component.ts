import { Component } from '@angular/core';
// import
import { Location } from '@angular/common';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-edit',
  // imports: [],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss',
  standalone: false
})
export class EditComponent {

  // variables
  id:any
  sso_account_url:any

  item:any = {}
  mProgress:boolean = false

constructor(
  private location: Location,
  private mAuthService: AuthService,
  ) { }

  ngOnInit(): void {
    // call
    this.sso_account_url = environment.sso_account_url
    this.id = this.mAuthService?.currentUser?.id
  }


  // goBack
  goBack(){
    // console.log(this.location.back());
    this.location.back();
  }

}

