import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

import {
  AvatarComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  SidebarToggleDirective
} from '@coreui/angular';
import { IconDirective } from '@coreui/icons-angular';
import { ToastrService } from '@iqx-limited/ngx-toastr';
import { ProgressModule } from '../../../../components/progress/progress.module';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  imports: [
    ContainerComponent,
    HeaderTogglerDirective,
    SidebarToggleDirective,
    IconDirective,
    HeaderNavComponent,
    NavItemComponent,
    NavLinkDirective,
    RouterLink,
    RouterLinkActive,
    NgTemplateOutlet,
    BreadcrumbRouterComponent,
    DropdownComponent,
    DropdownToggleDirective,
    AvatarComponent,
    DropdownMenuDirective,
    DropdownHeaderDirective,
    DropdownItemDirective,
    // HeaderComponent,

    ProgressModule,
    CommonModule
  ]
})
export class DefaultHeaderComponent extends HeaderComponent {

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

 // variables
  mInitials:any
  mCurrentUser:any

  mProgress = signal(false)

  constructor(
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
    private router: Router,
  ) {
    super();
  }

  sidebarId = input('sidebar1');
  ngOnInit(): void {
    this.mCurrentUser = this.mAuthService.currentUser;
    this.mInitials = this.mCurrentUser.name.match(/(\b\S)?/g).join("").match(/(^\S|\S$)?/g).join("").toUpperCase()
    this.mCurrentUser = this.mAuthService.currentUser;
  }

  // onLogout
  onLogout(){
    this.mProgress = signal(true)
    this.mAuthService.logout().subscribe({
      next: (response) => {
        if(response.status =='success'){
          this.mToastrService.error(response.message);
          this.router.navigateByUrl('/auth/login');
        }else{
          this.mToastrService.error(response.message);
        }
        this.mProgress = signal(false)
      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
          this.mProgress = signal(false)
        }
      }
    });
  }

}
