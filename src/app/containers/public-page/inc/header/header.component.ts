import { Component, HostListener, signal } from '@angular/core';
// import
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ProgressComponent } from '../../../../components/progress/progress/progress.component';
import { CommonModule } from '@angular/common';
import { ProgressModule } from '../../../../components/progress/progress.module';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, CommonModule, ProgressModule, RouterModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  // variables
  mCurrentUser:any = null
  mProgress = signal(false)

  // fixed_navbar
  mIsFixed = false;
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.mIsFixed = window.scrollY > 50;
  }

  constructor(
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
    private router: Router,
  ){}

  ngOnInit(): void {
    this.mCurrentUser = this.mAuthService.currentUser
  }

  // onLogout
  onLogout(){
    this.mProgress = signal(true)
    this.mAuthService.logout().subscribe({
      next: (response) => {
        if(response.status =='success'){
          this.mToastrService.success(response.message)
          this.router.navigateByUrl('/auth/login')
          this.mProgress = signal(false)
        }else{
          this.mToastrService.warning(response.message)
          this.mProgress = signal(false)
        }

      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.warning(error.error.message)
        }else{
          this.router.navigateByUrl('/auth/login')
        }
        this.mProgress = signal(false)
      }
    });
  }

}
