import { Injectable } from '@angular/core';
// import
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { DealerRegistration } from '../interfaces/dealer-registration';

@Injectable({
  providedIn: 'root',
})
export class DealerRegistrationService {



constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<DealerRegistration[]>{
    const url = `${environment.base_url}/dealer-registrations`;
    return this.http.get<DealerRegistration[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: DealerRegistration): Observable<DealerRegistration>{
    const url = `${environment.base_url}/dealer-registrations`;
    // return this.http.post<DealerRegistration>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DealerRegistration>(url, item);
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/dealer-registrations/${id}`;
    return this.http.get<DealerRegistration[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: DealerRegistration): Observable<DealerRegistration>{
    // const url = `${environment.base_url}/dealer-registrations/${item.id}`;
    const url = `${environment.base_url}/dealer-registrations/${id}`;
    // return this.http.put<DealerRegistration>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DealerRegistration>(url, item);
  }

  deleteItem(item: DealerRegistration): Observable<DealerRegistration>{
    const url = `${environment.base_url}/dealer-registrations/${item.id}`;
    return this.http.delete<DealerRegistration>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<DealerRegistration[]>{
    return this.http.get<DealerRegistration[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: DealerRegistration): Observable<DealerRegistration>{
    const url = `${environment.base_url}/search-dealer-registrations`;
    return this.http.post<DealerRegistration>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<DealerRegistration[]>{
    const url = `${environment.base_url}/unpaginated-items-dealer-registrations`;
    return this.http.get<DealerRegistration[]>(url, this.mAppContextService.getHttpOptions());
  }



  filterLicenseTypes(id:number){
    const url = `${environment.base_url}/filter-license-types/${id}`;
    return this.http.get<DealerRegistration[]>(url, this.mAppContextService.getHttpOptions());
  }


  nextPreviousStatusItem(id:any){
    const url = `${environment.base_url}/next-previous-status-process-dealer-registrations/${id}`;
    return this.http.get<DealerRegistration[]>(url, this.mAppContextService.getHttpOptions());
  }
  reviewApplicationItem(item: any): Observable<DealerRegistration>{
    const url = `${environment.base_url}/review-process-dealer-registrations/${item.id}`;
    return this.http.post<DealerRegistration>(url, item, this.mAppContextService.getHttpOptions());
  }


  onDownloadCertificate(item: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    const url = `${environment.base_url}/certificate-pdf/${item.id}`;
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }

}
