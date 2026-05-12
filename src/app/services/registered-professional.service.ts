import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegisteredProfessional } from '../interfaces/registered-professional';


@Injectable({
  providedIn: 'root',
})
export class RegisteredProfessionalService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<RegisteredProfessional[]>{
    const url = `${environment.base_url}/registered-professionals`;
    return this.http.get<RegisteredProfessional[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: RegisteredProfessional): Observable<RegisteredProfessional>{
    const url = `${environment.base_url}/registered-professionals`;
    return this.http.post<RegisteredProfessional>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/registered-professionals/${id}`;
    return this.http.get<RegisteredProfessional[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: RegisteredProfessional): Observable<RegisteredProfessional>{
    const url = `${environment.base_url}/registered-professionals/${id}`;
    return this.http.put<RegisteredProfessional>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: RegisteredProfessional): Observable<RegisteredProfessional>{
    const url = `${environment.base_url}/registered-professionals/${item.id}`;
    return this.http.delete<RegisteredProfessional>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<RegisteredProfessional[]>{
    return this.http.get<RegisteredProfessional[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: RegisteredProfessional): Observable<RegisteredProfessional>{
    const url = `${environment.base_url}/search-registered-professionals`;
    return this.http.post<RegisteredProfessional>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<RegisteredProfessional[]>{
    const url = `${environment.base_url}/unpaginated-items-registered-professionals`;
    return this.http.get<RegisteredProfessional[]>(url, this.mAppContextService.getHttpOptions());
  }


  importRegisteredProfessionalsItems(item: any): Observable<RegisteredProfessional>{
    const url = `${environment.base_url}/import-items-registered-professionals`;
    // return this.http.post<RegisteredProfessional>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<RegisteredProfessional>(url, item);
  }

}
