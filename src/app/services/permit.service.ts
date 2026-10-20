import { Injectable } from '@angular/core';
// import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { Permit } from '../interfaces/permit';


@Injectable({
  providedIn: 'root',
})
export class PermitService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<Permit[]>{
    const url = `${environment.base_url}/permits`;
    return this.http.get<Permit[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: Permit): Observable<Permit>{
    const url = `${environment.base_url}/permits`;
    return this.http.post<Permit>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/permits/${id}`;
    return this.http.get<Permit[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: Permit): Observable<Permit>{
    const url = `${environment.base_url}/permits/${item.id}`;
    return this.http.put<Permit>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: Permit): Observable<Permit>{
    const url = `${environment.base_url}/permits/${item.id}`;
    return this.http.delete<Permit>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<Permit[]>{
    return this.http.get<Permit[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: Permit): Observable<Permit>{
    const url = `${environment.base_url}/search-permits`;
    return this.http.post<Permit>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<Permit[]>{
    const url = `${environment.base_url}/unpaginated-items-permits`;
    return this.http.get<Permit[]>(url, this.mAppContextService.getHttpOptions());
  }


  nextPreviousStatusItem(id:any){
    const url = `${environment.base_url}/next-previous-status-process-permits/${id}`;
    return this.http.get<Permit[]>(url, this.mAppContextService.getHttpOptions());
  }
  reviewApplicationItem(item: any): Observable<Permit>{
    const url = `${environment.base_url}/review-process-permits/${item.id}`;
    return this.http.post<Permit>(url, item, this.mAppContextService.getHttpOptions());
  }
  approvalApplicationItem(item: any): Observable<Permit>{
    const url = `${environment.base_url}/approve-process-permits/${item.id}`;
    return this.http.post<Permit>(url, item, this.mAppContextService.getHttpOptions());
  }


  onDownloadPermit(item: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    const url = `${environment.base_url}/permits-pdf/${item.id}`;
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }

}

