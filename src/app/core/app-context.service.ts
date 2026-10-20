// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppContextService {

//   constructor() { }
// }

// src/app/core/app-context.service.ts
import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';
import { DomSanitizer, SafeHtml, SafeResourceUrl } from '@angular/platform-browser';
import { AuthService } from '../services/auth.service';
import {
  Bold,
  Essentials,
  Heading,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  Paragraph,
  Table,
  Undo,
} from 'ckeditor5';


@Injectable({
  providedIn: 'root'
})
export class AppContextService {

  // CommonHTTPheaders
  private readonly defaultHttpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(
    private sanitizer: DomSanitizer,
    private injector: Injector
  ) {}

  // sanitizeVideoUrl
  sanitizeVideoUrl(videoId: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  safeHtml(content: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }

  // getHttpOptions
  getHttpOptions() {
    return this.defaultHttpOptions;
  }

  // getVideoId
  getVideoId(link: string): string {
    // link might be just "youtu.be/dXX4zFmay9A" or "youtube.com/watch?v=..."
    let cleanLink = link.trim();
    if (cleanLink.includes('youtu.be/')) {
      return cleanLink.split('youtu.be/')[1];
    }
    if (cleanLink.includes('watch?v=')) {
      return cleanLink.split('watch?v=')[1].split('&')[0];
    }
    return cleanLink;
  }

  // getYoutubeLinks
  getYoutubeLinks(rawLinks: string): string[] {
    return rawLinks
      .split('https://')
      .filter(x => x)
      .map(x => 'https://' + x);
  }

  // getSafeUrl
  getSafeUrl(videoId: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}`
    );
  }

  // stripHtml
  stripHtml(value: string): string {
    return value ? value.replace(/<[^>]+>/g, '') : '';
  }

  // getInitials
  getInitials(name: string): string {
    if (!name) return '';
    // split_by_whitespace
    const parts = name.trim().split(/\s+/);
    let initials = parts[0].charAt(0).toUpperCase();
    if (parts.length > 1) {
      initials += parts[parts.length - 1].charAt(0).toUpperCase();
    }
    return initials;
  }

  // // usernameAvailabilityValidator
  // usernameAvailabilityValidator(mAuthService: AuthService): AsyncValidatorFn {
  //   return (control: AbstractControl): Observable<ValidationErrors | null> => {
  //     if (!control.value) {
  //       return of(null);
  //     }
  //     return of(control.value).pipe(
  //       debounceTime(300),
  //       switchMap(username =>
  //         mAuthService.isUsernameTaken(username).pipe(
  //           map(isTaken => (isTaken ? { usernameTaken: true } : null)),
  //           catchError(() => of(null)) // optional: suppress backend errors
  //         )
  //       ),
  //       first()
  //     );
  //   };
  // }



  // noSpaceValidator
  noSpaceValidator(control: AbstractControl): ValidationErrors | null {
    return control.value && /\s/.test(control.value) ? { hasSpace: true } : null;
  }

  // hasRoles
  hasRoles(roles: any[]): boolean {
    // const { role_id } = this.injector.get(AuthService).currentUser;
    // // console.log(roles)
    // return roles.includes(role_id);

    const role_id = this.injector.get(AuthService).currentUser?.role_id;
    return roles.includes(role_id ?? -1); // or return false if role_id is null
  }

  // hasTypes
  hasTypes(types: any[]): boolean {
    const type_id = this.injector.get(AuthService).currentUser?.role?.type_id;
    return types.includes(type_id ?? -1);
  }


 // getColorClass
  getColorClass(mStatusId: number): string {
    switch (mStatusId) {
      case 1:  return 'primary';
      case 2:  return 'secondary';
      case 3:  return 'info';
      case 4:  return 'warning';
      case 5:  return 'dark';
      case 6:  return 'light';
      case 7:  return 'primary';
      case 8:  return 'warning';
      case 9:  return 'success';   // Active
      case 10: return 'danger';    // Expired
      default: return 'secondary';
    }
  }


  // ckEditorConfig
  ckEditorConfig = {
    licenseKey: 'GPL',   // use 'GPL' for the open-source version
    plugins: [
      Bold, Essentials, Heading,
      Indent, IndentBlock, Italic,
      Link, List, Paragraph, Table, Undo,
    ],
    toolbar: [
      'undo', 'redo', '|',
      'heading', '|',
      'bold', 'italic', '|',
      'link', 'insertTable', '|',
      'bulletedList', 'numberedList',
      'indent', 'outdent',
    ],
  };

}
