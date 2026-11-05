import { Injectable } from '@angular/core';
// import
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { CoffeeTransaction } from '../interfaces/coffee-transaction';


@Injectable({
  providedIn: 'root',
})
export class CoffeeTransactionService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<CoffeeTransaction[]>{
    const url = `${environment.base_url}/coffee-transactions`;
    return this.http.get<CoffeeTransaction[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: CoffeeTransaction): Observable<CoffeeTransaction>{
    const url = `${environment.base_url}/coffee-transactions`;
    return this.http.post<CoffeeTransaction>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/coffee-transactions/${id}`;
    return this.http.get<CoffeeTransaction[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: CoffeeTransaction): Observable<CoffeeTransaction>{
    const url = `${environment.base_url}/coffee-transactions/${item.id}`;
    return this.http.put<CoffeeTransaction>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: CoffeeTransaction): Observable<CoffeeTransaction>{
    const url = `${environment.base_url}/coffee-transactions/${item.id}`;
    return this.http.delete<CoffeeTransaction>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<CoffeeTransaction[]>{
    return this.http.get<CoffeeTransaction[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: CoffeeTransaction): Observable<CoffeeTransaction>{
    const url = `${environment.base_url}/search-coffee-transactions`;
    return this.http.post<CoffeeTransaction>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<CoffeeTransaction[]>{
    const url = `${environment.base_url}/unpaginated-items-coffee-transactions`;
    return this.http.get<CoffeeTransaction[]>(url, this.mAppContextService.getHttpOptions());
  }


   filterLotsAndDeliveries(id:any){
    const url = `${environment.base_url}/filter-lots-and-deliveries-coffee-transactions/${id}`;
    return this.http.get<CoffeeTransaction[]>(url, this.mAppContextService.getHttpOptions());
  }


  traceItem(item: any){
    const url = `${environment.base_url}/trace-coffee-transactions`;
    return this.http.post<any[]>(url, item, this.mAppContextService.getHttpOptions());
  }

}
