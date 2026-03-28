import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<User[]>{
    const url = `${environment.base_url}/profiles`;
    return this.http.get<User[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: User): Observable<User>{
    const url = `${environment.base_url}/profiles`;
    return this.http.post<User>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/profiles/${id}`;
    return this.http.get<User[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: User): Observable<User>{
    const url = `${environment.base_url}/profiles/${item.id}`;
    return this.http.put<User>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: User): Observable<User>{
    const url = `${environment.base_url}/profiles/${item.id}`;
    return this.http.delete<User>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<User[]>{
    return this.http.get<User[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: User): Observable<User>{
    const url = `${environment.base_url}/search-profiles`;
    return this.http.post<User>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<User[]>{
    const url = `${environment.base_url}/unpaginated-items-profiles`;
    return this.http.get<User[]>(url, this.mAppContextService.getHttpOptions());
  }




  professionalSearch(item: User): Observable<User>{
    const url = `${environment.base_url}/professional-search`;
    return this.http.post<User>(url, item, this.mAppContextService.getHttpOptions());
  }

}
