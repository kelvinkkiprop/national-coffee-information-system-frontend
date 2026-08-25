import { Injectable } from '@angular/core';
// import
import { Observable } from 'rxjs';
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Role } from '../interfaces/role';

@Injectable({
  providedIn: 'root',
})
export class RoleService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<Role[]>{
    const url = `${environment.base_url}/roles`;
    return this.http.get<Role[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: Role): Observable<Role>{
    const url = `${environment.base_url}/roles`;
    return this.http.post<Role>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/roles/${id}`;
    return this.http.get<Role[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: Role): Observable<Role>{
    const url = `${environment.base_url}/roles/${item.id}`;
    return this.http.put<Role>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: Role): Observable<Role>{
    const url = `${environment.base_url}/roles/${item.id}`;
    return this.http.delete<Role>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<Role[]>{
    return this.http.get<Role[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: Role): Observable<Role>{
    const url = `${environment.base_url}/search-roles`;
    return this.http.post<Role>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<Role[]>{
    const url = `${environment.base_url}/unpaginated-items-roles`;
    return this.http.get<Role[]>(url, this.mAppContextService.getHttpOptions());
  }

}
