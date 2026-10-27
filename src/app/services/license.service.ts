import { Injectable } from '@angular/core';
// import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { License } from '../interfaces/license';


@Injectable({
  providedIn: 'root',
})
export class LicenseService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<License[]>{
    const url = `${environment.base_url}/licenses`;
    return this.http.get<License[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: License): Observable<License>{
    const url = `${environment.base_url}/licenses`;
    // return this.http.post<License>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<License>(url, item);
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/licenses/${id}`;
    return this.http.get<License[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: License): Observable<License>{
    // const url = `${environment.base_url}/licenses/${item.id}`;
    const url = `${environment.base_url}/licenses/${id}`;
    // return this.http.put<License>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<License>(url, item);
  }

  deleteItem(item: License): Observable<License>{
    const url = `${environment.base_url}/licenses/${item.id}`;
    return this.http.delete<License>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<License[]>{
    return this.http.get<License[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: License): Observable<License>{
    const url = `${environment.base_url}/search-licenses`;
    return this.http.post<License>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<License[]>{
    const url = `${environment.base_url}/unpaginated-items-licenses`;
    return this.http.get<License[]>(url, this.mAppContextService.getHttpOptions());
  }


  nextPreviousStatusItem(id:any){
    const url = `${environment.base_url}/next-previous-status-process-licenses/${id}`;
    return this.http.get<License[]>(url, this.mAppContextService.getHttpOptions());
  }
  reviewApplicationItem(item: any): Observable<License>{
    const url = `${environment.base_url}/review-process-licenses/${item.id}`;
    return this.http.post<License>(url, item, this.mAppContextService.getHttpOptions());
  }
  approvalApplicationItem(item: any): Observable<License>{
    const url = `${environment.base_url}/approve-process-licenses/${item.id}`;
    return this.http.post<License>(url, item, this.mAppContextService.getHttpOptions());
  }


  onDownloadPermit(item: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    const url = `${environment.base_url}/licenses-pdf/${item.id}`;
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }

}
