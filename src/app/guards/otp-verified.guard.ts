// import { CanActivateFn } from '@angular/router';

// export const otpVerifiedGuard: CanActivateFn = (route, state) => {
//   return true;
// };






import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
// import
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OtpVerifiedGuard implements CanActivate {

  constructor(
    private router: Router,
    private mAuthService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    const currentUser = this.mAuthService.currentUser;
    if (currentUser.otp_verified===0) {
      // OTP_not_verified
      this.router.navigate(['/auth/verify-otp']);
      return false;
    }

    // OTP_is_verified
    return true;

  }

}
