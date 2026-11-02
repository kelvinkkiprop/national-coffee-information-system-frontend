import { Injectable } from '@angular/core';
// import
import { Observable } from 'rxjs';
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Committee } from '../interfaces/committee';

@Injectable({
  providedIn: 'root',
})
export class CommitteeService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<Committee[]>{
    const url = `${environment.base_url}/committees`;
    return this.http.get<Committee[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: Committee): Observable<Committee>{
    const url = `${environment.base_url}/committees`;
    return this.http.post<Committee>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/committees/${id}`;
    return this.http.get<Committee[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: Committee): Observable<Committee>{
    const url = `${environment.base_url}/committees/${item.id}`;
    return this.http.put<Committee>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: Committee): Observable<Committee>{
    const url = `${environment.base_url}/committees/${item.id}`;
    return this.http.delete<Committee>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<Committee[]>{
    return this.http.get<Committee[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: Committee): Observable<Committee>{
    const url = `${environment.base_url}/search-committees`;
    return this.http.post<Committee>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<Committee[]>{
    const url = `${environment.base_url}/unpaginated-items-committees`;
    return this.http.get<Committee[]>(url, this.mAppContextService.getHttpOptions());
  }




  addMemberItem(item: Committee): Observable<Committee>{
    const url = `${environment.base_url}/add-member-committees`;
    return this.http.post<Committee>(url, item, this.mAppContextService.getHttpOptions());
  }
  deleteMemberItem(item: Committee): Observable<Committee>{
    const url = `${environment.base_url}/remove-member-committees/${item.id}`;
    return this.http.delete<Committee>(url, this.mAppContextService.getHttpOptions());
  }

}
