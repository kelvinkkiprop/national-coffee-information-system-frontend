import { NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  AvatarComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
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
import { AuthService } from '../../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  imports: [ContainerComponent, HeaderTogglerDirective, SidebarToggleDirective, IconDirective, HeaderNavComponent, NavItemComponent, NavLinkDirective, RouterLink, RouterLinkActive, NgTemplateOutlet, BreadcrumbRouterComponent, DropdownComponent, DropdownToggleDirective, AvatarComponent, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective, DropdownDividerDirective]
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

  constructor(
    private mAuthService: AuthService,
    private mToastrService: ToastrService,
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
    this.mAuthService.logout().subscribe({
      next: (response) => {
        if(response.status =='success'){
          this.mToastrService.success(response.message);
          window.location.href = window.location.href = environment.sso_account_url+"/#/auth/login";
        }else{
          this.mToastrService.error(response.message);
        }

      },
      error: (error ) => {
        if(error.error.message){
          this.mToastrService.error(error.error.message)
        }
      }
    });
  }

}
