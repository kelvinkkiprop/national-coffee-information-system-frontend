import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';


@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  // FUNCTIONS
  allItems():Observable<any[]>{
    const url = `${environment.base_url}/dashboard`;
    return this.http.get<any[]>(url, this.mAppContextService.getHttpOptions());
  }

}
