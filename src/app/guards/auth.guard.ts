// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
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
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private mAuthService: AuthService
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;

    const currentUser = this.mAuthService.currentUser;
    if (currentUser) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    // this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url } });
    // this.router.navigate(['/auth/login']);
    // this.router.navigateByUrl(environment.sso_account_url);
    window.open(environment.sso_account_url+'/#/auth/login', '_self')
    return false;

  }

}
