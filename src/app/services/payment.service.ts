import { Injectable } from '@angular/core';
// import
import { Observable } from 'rxjs';
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Payment } from '../interfaces/payment';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<Payment[]>{
    const url = `${environment.base_url}/payments`;
    return this.http.get<Payment[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: Payment): Observable<Payment>{
    const url = `${environment.base_url}/payments`;
    return this.http.post<Payment>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/payments/${id}`;
    return this.http.get<Payment[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: Payment): Observable<Payment>{
    const url = `${environment.base_url}/payments/${item.id}`;
    return this.http.put<Payment>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: Payment): Observable<Payment>{
    const url = `${environment.base_url}/payments/${item.id}`;
    return this.http.delete<Payment>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<Payment[]>{
    return this.http.get<Payment[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: Payment): Observable<Payment>{
    const url = `${environment.base_url}/search-payments`;
    return this.http.post<Payment>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<Payment[]>{
    const url = `${environment.base_url}/unpaginated-items-payments`;
    return this.http.get<Payment[]>(url, this.mAppContextService.getHttpOptions());
  }





  // invoiceItem
  invoiceItem(id:any){
    const url = `${environment.base_url}/generate-invoice-payments/${id}`;
    return this.http.get<Payment>(url, this.mAppContextService.getHttpOptions());
  }

  // onReceipt
  onReceipt(item: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    const url = `${environment.base_url}/receipt-pdf/${item.id}`;
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }

  // settledItem
  settledItem(id:any){
    const url = `${environment.base_url}/settled-payments/${id}`;
    return this.http.get<Payment[]>(url, this.mAppContextService.getHttpOptions());
  }

}
