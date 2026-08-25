import { Component, signal } from '@angular/core';
// import
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ProgressComponent } from '../../../../components/progress/progress/progress.component';
import { CommonModule } from '@angular/common';
import { ProgressModule } from '../../../../components/progress/progress.module';

@Component({
  selector: 'app-header',
  imports: [ RouterLink, CommonModule, ProgressModule ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  // variables
  mCurrentUser:any
  mProgress = signal(false)

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
          this.mToastrService.error(error.error.message)
        }else{
          this.router.navigateByUrl('/auth/login')
        }
        this.mProgress = signal(false)
      }
    });
  }

}
