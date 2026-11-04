import { Injectable } from '@angular/core';
// import
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { CoffeeDelivery } from '../interfaces/coffee-delivery';


@Injectable({
  providedIn: 'root',
})
export class CoffeeDeliveryService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<CoffeeDelivery[]>{
    const url = `${environment.base_url}/coffee-deliveries`;
    return this.http.get<CoffeeDelivery[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: CoffeeDelivery): Observable<CoffeeDelivery>{
    const url = `${environment.base_url}/coffee-deliveries`;
    return this.http.post<CoffeeDelivery>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/coffee-deliveries/${id}`;
    return this.http.get<CoffeeDelivery[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: CoffeeDelivery): Observable<CoffeeDelivery>{
    const url = `${environment.base_url}/coffee-deliveries/${item.id}`;
    return this.http.put<CoffeeDelivery>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: CoffeeDelivery): Observable<CoffeeDelivery>{
    const url = `${environment.base_url}/coffee-deliveries/${item.id}`;
    return this.http.delete<CoffeeDelivery>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<CoffeeDelivery[]>{
    return this.http.get<CoffeeDelivery[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: CoffeeDelivery): Observable<CoffeeDelivery>{
    const url = `${environment.base_url}/search-coffee-deliveries`;
    return this.http.post<CoffeeDelivery>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<CoffeeDelivery[]>{
    const url = `${environment.base_url}/unpaginated-items-coffee-deliveries`;
    return this.http.get<CoffeeDelivery[]>(url, this.mAppContextService.getHttpOptions());
  }



  filterFarmerPlots(id:any){
    const url = `${environment.base_url}/filter-farmer-plots-coffee-deliveries/${id}`;
    return this.http.get<CoffeeDelivery[]>(url, this.mAppContextService.getHttpOptions());
  }


}
