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


  // getColorClass
  getColorClass(views: number): string {
    if (views > 87.5) return 'secondary';
    if (views > 75) return ' bg-primary text-dark';
    if (views > 62.5) return 'primary danger';
    if (views > 50) return 'light text-dark';
    if (views > 37.5) return 'dark';
    if (views > 25) return 'success';
    if (views > 12.5) return 'bg-warning text-dark';
    return 'danger';
    //  ["id"=>1, "name"=>"Draft", "alias"=>"Send Back"],
    //  ["id"=>2, "name"=>"Fowarded to HoD", "alias"=>"Send to HoD"],
    //  ["id"=>3, "name"=>"Under Review", "alias"=>"Send to Legal"],
    //  ["id"=>4, "name"=>"With Client", "alias"=>"Send to Client"],
    //  ["id"=>5, "name"=>"Reviewed by Client", "alias"=>"Send to KoTDA with Final Comments"],
    //  ["id"=>6, "name"=>"Active", "alias"=>"Active"],
    //  ["id"=>7, "name"=>"Expired", "alias"=>"Expired"],
    //  ["id"=>8, "name"=>"Terminated", "alias"=>"Terminate"],
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
