// import { CanActivateFn } from '@angular/router';

// export const verifyConsultantGuard: CanActivateFn = (route, state) => {
//   return true;
// };





import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
//import
import { AuthService } from '../services/auth.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class verifyConsultantGuard implements CanActivate {

  constructor(
    private router: Router,
    private mAuthService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    const mCurrentUser = this.mAuthService.currentUser;
    if (mCurrentUser.role_id === 1 || mCurrentUser.profile?.professional_body_status_id === 2) {
    // console.log(mCurrentUser.profile?.professional_body_status_id === 2)
    // if (mCurrentUser.profile?.professional_body_status_id == 2) {
        // verified
        return true;
    }
    this.router.navigateByUrl('profile/create');
    return false;

  }

}
