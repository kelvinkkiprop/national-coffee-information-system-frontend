// import { CanActivateFn } from '@angular/router';

// export const emailVerifiedGuard: CanActivateFn = (route, state) => {
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
export class EmailVerifiedGuard implements CanActivate {

  constructor(
    private router: Router,
    private mAuthService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    const currentUser = this.mAuthService.currentUser;
    if (currentUser.email_verified_at===null && currentUser.role?.type_id===2) {//External
    // if (currentUser.email_verified_at===null){
      // Email_not_verified
      this.router.navigate(['/auth/verify-email']);
      return false;
    }

    // Email_is_verified
    return true;

  }

}
