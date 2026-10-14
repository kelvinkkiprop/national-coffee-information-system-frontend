// import { CanActivateFn } from '@angular/router';

// export const withProfileGuard: CanActivateFn = (route, state) => {
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
export class WithProfileGuard implements CanActivate {

  constructor(
    private router: Router,
    private mAuthService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    const mCurrentUser = this.mAuthService.currentUser;
    // if (mCurrentUser.role?.type_id===2 && mCurrentUser.profile) {
    if (mCurrentUser.profile) {
      return true;
    }
    this.router.navigateByUrl('profile/create');
    return false;

  }

}
