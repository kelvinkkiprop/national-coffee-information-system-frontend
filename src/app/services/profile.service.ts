import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { Profile } from '../interfaces/profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  // FUNCTIONS
  allItems():Observable<Profile[]>{
    const url = `${environment.base_url}/profile`;
    return this.http.get<Profile[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: Profile): Observable<Profile>{
    const url = `${environment.base_url}/profile`;
    return this.http.post<Profile>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:any){
    const url = `${environment.base_url}/profile/${id}`;
    return this.http.get<Profile[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: Profile): Observable<Profile>{
    const url = `${environment.base_url}/profile/${item.id}`;
    return this.http.put<Profile>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: Profile): Observable<Profile>{
    const url = `${environment.base_url}/profile/${item.id}`;
    return this.http.delete<Profile>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<Profile[]>{
    return this.http.get<Profile[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: Profile): Observable<Profile>{
    const url = `${environment.base_url}/search-profile`;
    return this.http.post<Profile>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<Profile[]>{
    const url = `${environment.base_url}/unpaginated-items-profile`;
    return this.http.get<Profile[]>(url, this.mAppContextService.getHttpOptions());
  }




  filterSubCounties(id:number){
    const url = `${environment.base_url}/filter-sub-counties/${id}`;
    return this.http.get<Profile[]>(url, this.mAppContextService.getHttpOptions());
  }

  filterWards(id:number){
    const url = `${environment.base_url}/filter-wards/${id}`;
    return this.http.get<Profile[]>(url, this.mAppContextService.getHttpOptions());
  }

}
