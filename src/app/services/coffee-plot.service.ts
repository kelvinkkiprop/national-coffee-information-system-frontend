import { Injectable } from '@angular/core';
// import
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { CoffeePlot } from '../interfaces/coffee-plot';


@Injectable({
  providedIn: 'root',
})
export class CoffeePlotService {


constructor(
  private mAppContextService: AppContextService,
  private http: HttpClient
) { }

  allItems():Observable<CoffeePlot[]>{
    const url = `${environment.base_url}/coffee-plots`;
    return this.http.get<CoffeePlot[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: CoffeePlot): Observable<CoffeePlot>{
    const url = `${environment.base_url}/coffee-plots`;
    return this.http.post<CoffeePlot>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/coffee-plots/${id}`;
    return this.http.get<CoffeePlot[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(item: CoffeePlot): Observable<CoffeePlot>{
    const url = `${environment.base_url}/coffee-plots/${item.id}`;
    return this.http.put<CoffeePlot>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: CoffeePlot): Observable<CoffeePlot>{
    const url = `${environment.base_url}/coffee-plots/${item.id}`;
    return this.http.delete<CoffeePlot>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<CoffeePlot[]>{
    return this.http.get<CoffeePlot[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: CoffeePlot): Observable<CoffeePlot>{
    const url = `${environment.base_url}/search-coffee-plots`;
    return this.http.post<CoffeePlot>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<CoffeePlot[]>{
    const url = `${environment.base_url}/unpaginated-items-coffee-plots`;
    return this.http.get<CoffeePlot[]>(url, this.mAppContextService.getHttpOptions());
  }

}
