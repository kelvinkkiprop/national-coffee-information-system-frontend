import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { environment } from '../../../../environments/environment';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-sso',
  // imports: [],
  templateUrl: './sso.component.html',
  styleUrl: './sso.component.scss',
  standalone: false
})
export class SsoComponent {



  //--===================================User_Led_SSO===================================--//
  // variables
  token!: string
  name!: string

  mProgress:boolean = false

  constructor(
    private route: ActivatedRoute,
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
  ) {}

  ngOnInit(): void {
    this.token = this.route.snapshot.params['token'];
    this.name = this.route.snapshot.params['name'];

    // console.log(this.token)
    // console.log(this.name)
  }

  /**
   * confirmLogin
   */
  confirmLogin() {
    this.mProgress = true;
    if (!this.token) return;
    // store temporary token
    localStorage.setItem('sso_token', this.token);
    // call backend to get user
    this.mAuthService.getCurrentUser().subscribe({
      next: (response) => {
        // localStorage.removeItem('sso_token');
        this.mAuthService.saveUserLocally(response);
        // redirect to dashboard
        this.mProgress = false;
        window.location.replace('/#/dashboard');
      },
      error: (error) => {
        this.mToastrService.error(error.error.message)
        // localStorage.clear();
        this.mProgress = false;
        // window.location.href = environment.sso_account_url + '/#/auth/login';
        console.log(error.error)
      }
    });

  }

  /**
   * closePage
   */
  closePage() {
    localStorage.clear();
    window.location.href = environment.sso_account_url + '/#/account/dashboard';
  }

  /**
   * refresh
   */
  refreshPage() {
    // optional
    window.location.replace(window.location.href);
  }
  //--===================================./User_Led_SSO===================================--//

}
