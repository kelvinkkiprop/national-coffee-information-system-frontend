import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ParcelAllocationWorksheet } from '../interfaces/parcel-allocation-worksheet';

@Injectable({
  providedIn: 'root',
})
export class ParcelAllocationWorksheetService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<ParcelAllocationWorksheet[]>{
    const url = `${environment.base_url}/parcel-allocation-worksheet`;
    return this.http.get<ParcelAllocationWorksheet[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: ParcelAllocationWorksheet): Observable<ParcelAllocationWorksheet>{
    const url = `${environment.base_url}/parcel-allocation-worksheet`;
    return this.http.post<ParcelAllocationWorksheet>(url, item, this.mAppContextService.getHttpOptions());
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/parcel-allocation-worksheet/${id}`;
    return this.http.get<ParcelAllocationWorksheet[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: ParcelAllocationWorksheet): Observable<ParcelAllocationWorksheet>{
    const url = `${environment.base_url}/parcel-allocation-worksheet/${id}`;
    return this.http.put<ParcelAllocationWorksheet>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: ParcelAllocationWorksheet): Observable<ParcelAllocationWorksheet>{
    const url = `${environment.base_url}/parcel-allocation-worksheet/${item.id}`;
    return this.http.delete<ParcelAllocationWorksheet>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<ParcelAllocationWorksheet[]>{
    return this.http.get<ParcelAllocationWorksheet[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: ParcelAllocationWorksheet): Observable<ParcelAllocationWorksheet>{
    const url = `${environment.base_url}/search-parcel-allocation-worksheet`;
    return this.http.post<ParcelAllocationWorksheet>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<ParcelAllocationWorksheet[]>{
    const url = `${environment.base_url}/unpaginated-items-parcel-allocation-worksheet`;
    return this.http.get<ParcelAllocationWorksheet[]>(url, this.mAppContextService.getHttpOptions());
  }

}
