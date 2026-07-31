import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
// import
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // variables
  public mCurrentUserSubject: BehaviorSubject<User>;
  public mCurrentUser: Observable<User>;

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
  ) {
    this.mCurrentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') as any));
    this.mCurrentUser = this.mCurrentUserSubject.asObservable();
  }

  // currentUser
  public get currentUser(): User {
    return this.mCurrentUserSubject.value;
  }

  // getCurrentUser
  getCurrentUser() {
    const url = `${environment.base_url}/sso`;
    // console.log(url);
    return this.http.get<any>(url, this.mAppContextService.getHttpOptions())
    // .pipe(map(response => {
    //   // console.log(response);
    //   // call
    //   this.saveUserLocally(response);
    //   return response;
    // }));
  }

  // register
  register(formValues: any) {
    const url = `${environment.base_url}/register`;
    return this.http.post<any>(url, formValues, this.mAppContextService.getHttpOptions())
    .pipe(map(response => {
        return response;
    }));
  }

  // login
  login(formValues: any) {
    const url = `${environment.base_url}/login`;
    return this.http.post<any>(url, formValues, this.mAppContextService.getHttpOptions())
    .pipe(map(response => {
      // call
      this.saveUserLocally(response);
      return response;
    }));
  }

  // logout
  logout() {
    const url = `${environment.base_url}/logout`;
    return this.http.post<any>(url, null, this.mAppContextService.getHttpOptions())
    .pipe(map(response => {
      // Remove
      localStorage.removeItem('currentUser');
      localStorage.clear();
      // sessionStorage.removeItem('currentUser')
      this.mCurrentUserSubject.next(null as any);
      return response;
    }));
  }

  // localSignOut
  localSignOut(){
    localStorage.removeItem('currentUser');
    localStorage.clear();
  }

  // saveUserLocally
  saveUserLocally(response: any){
    // console.log(response);
      if(response.status=='success'){
        const user: User = {
          id: response.data.user.id,
          name: response.data.user.name,
          email: response.data.user.email,
          phone: response.data.user.phone,
          status_id: response.data.user.status_id,
          role_id: response.data.user.role_id,
          token: response.data.token,
          member_of_a_committee: response.data.user.member_of_a_committee,

          status: response.data.user.status,
          role: response.data.user.role,
          profile: response.data.user.profile,
          committees: response.data.user.committees,
        }
        // store
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.mCurrentUserSubject.next(user);
      }
  }

  // changePassword
  changePassword(formValues: any) {
    const url = `${environment.base_url}/change-password`;
    return this.http.post<any>(url, formValues, this.mAppContextService.getHttpOptions())
    .pipe(map(response => {
      // console.log(response);
        return response;
    }));

  }

  // updateUserProfile
  updateUserProfile(profileData: any) {
    const currentUser = this.currentUser;
    if (currentUser) {
      currentUser.profile = profileData;
      // Update localStorage
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      // Update BehaviorSubject
      this.mCurrentUserSubject.next(currentUser);
    }
  }

  // unpaginatedItems
  unpaginatedItems():Observable<any[]>{
    const url = `${environment.base_url}/unpaginated-items-register`;
    return this.http.get<any[]>(url, this.mAppContextService.getHttpOptions());
  }

  // isUsernameTaken
  isUsernameTaken(username: string): Observable<boolean> {
    const url = `${environment.base_url}/check-username/${username}`;
    return this.http.get<boolean>(url);
  }

  // verifyEmail
  verifyEmail(formValues: any) {
    const url = `${environment.base_url}/verify-email`;
    return this.http.post<any>(url, formValues, this.mAppContextService.getHttpOptions())
    .pipe(map(response => {
      if(response.status==='success'){
          //Call
          this.saveUserLocally(response);
        }
        // console.log(response);
        return response;
    }));
  }

  // resendVerificationCode
  resendVerificationCode() {
    const url = `${environment.base_url}/resend-verification-code`;
    return this.http.get<any>(url, this.mAppContextService.getHttpOptions());
  }

  // resetPassword
  resetPassword(formValues: any) {
    const url = `${environment.base_url}/reset-password`;
    return this.http.post<any>(url, formValues, this.mAppContextService.getHttpOptions());
  }

  // recoverPassword
  recoverPassword(formValues: any) {
    const url = `${environment.base_url}/recover-password`;
    return this.http.post<any>(url, formValues, this.mAppContextService.getHttpOptions());
  }

}
