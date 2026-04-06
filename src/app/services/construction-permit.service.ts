import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { ConstructionPermit } from '../interfaces/construction-permit';

@Injectable({
  providedIn: 'root',
})
export class ConstructionPermitService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<ConstructionPermit[]>{
    const url = `${environment.base_url}/construction-permits`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: ConstructionPermit): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/construction-permits`;
    // return this.http.post<ConstructionPermit>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<ConstructionPermit>(url, item);
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/construction-permits/${id}`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: ConstructionPermit): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/construction-permits/${id}`;
    // return this.http.put<ConstructionPermit>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<ConstructionPermit>(url, item);
  }


  deleteItem(item: ConstructionPermit): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/construction-permits/${item.id}`;
    return this.http.delete<ConstructionPermit>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<ConstructionPermit[]>{
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: ConstructionPermit): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/search-construction-permits`;
    return this.http.post<ConstructionPermit>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<ConstructionPermit[]>{
    const url = `${environment.base_url}/unpaginated-items-construction-permits`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }




  getParcelItem(id:any){
    const url = `${environment.base_url}/parcels-construction-permits/${id}`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }
  getInvestorParcelsItems(id:any){
    const url = `${environment.base_url}/investor-parcels-construction-permits/${id}`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }



  nextPreviousStatusItem(id:any){
    const url = `${environment.base_url}/next-previous-status-process-construction-permits/${id}`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }
  processUnpaginatedItems():Observable<ConstructionPermit[]>{
    const url = `${environment.base_url}/unpaginated-items-process-construction-permits`;
    return this.http.get<ConstructionPermit[]>(url, this.mAppContextService.getHttpOptions());
  }
  processItemVariations(id:any, item: any): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/variations-process-construction-permits/${id}`;
    // return this.http.post<ConstructionPermit>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<ConstructionPermit>(url, item);
  }

  processItemPlanner(item: any): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/planner-process-construction-permits/${item.id}`;
    return this.http.post<ConstructionPermit>(url, item, this.mAppContextService.getHttpOptions());
  }
  cmItemPlanner(item: any): Observable<ConstructionPermit>{
    const url = `${environment.base_url}/cm-process-construction-permits/${item.id}`;
    return this.http.post<ConstructionPermit>(url, item, this.mAppContextService.getHttpOptions());
  }

}
