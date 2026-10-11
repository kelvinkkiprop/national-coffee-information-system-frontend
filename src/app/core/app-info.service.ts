// src/app/core/app-info.service.ts
import { Injectable } from '@angular/core';
import packageInfo from '../../../package.json';

@Injectable({
  providedIn: 'root'
})
export class AppInfoService {

  // variables
  private readonly appInfo = {
    name: 'National Coffee Information System',
    abbreviation: 'NCIS',
    year: new Date().getFullYear(),
    version: packageInfo.version
  };

  get primary(): { name: string; year: number; version: string } {
    return this.appInfo;
  }
  get name(): string {
    return this.appInfo.name;
  }
  get abbreviation(): string {
    return this.appInfo.abbreviation;
  }
  get version(): string {
    return this.appInfo.version;
  }
  get year(): number {
    return this.appInfo.year;
  }

}
