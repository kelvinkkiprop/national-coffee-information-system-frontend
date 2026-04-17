import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { DetailedPlan } from '../interfaces/detailed-plan';

@Injectable({
  providedIn: 'root',
})
export class DetailedPlanService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<DetailedPlan[]>{
    const url = `${environment.base_url}/detailed-plan-construction-permits`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: DetailedPlan): Observable<DetailedPlan>{
    const url = `${environment.base_url}/detailed-plan-construction-permits`;
    // return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedPlan>(url, item);
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/detailed-plan-construction-permits/${id}`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: DetailedPlan): Observable<DetailedPlan>{
    const url = `${environment.base_url}/detailed-plan-construction-permits/${id}`;
    // return this.http.put<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedPlan>(url, item);
  }


  deleteItem(item: DetailedPlan): Observable<DetailedPlan>{
    const url = `${environment.base_url}/detailed-plan-construction-permits/${item.id}`;
    return this.http.delete<DetailedPlan>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<DetailedPlan[]>{
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: DetailedPlan): Observable<DetailedPlan>{
    const url = `${environment.base_url}/search-detailed-plan-construction-permits`;
    return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<DetailedPlan[]>{
    const url = `${environment.base_url}/unpaginated-items-detailed-plan-construction-permits`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }




  getParcelItem(id:any){
    const url = `${environment.base_url}/parcels-detailed-plan-construction-permits/${id}`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }
  getInvestorParcelsItems(id:any){
    const url = `${environment.base_url}/investor-parcels-detailed-plan-construction-permits/${id}`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }





 
  nextPreviousStatusDetailedPlanItem(id:any){
    const url = `${environment.base_url}/next-previous-status-detailed-plan-detailed-plan-construction-permits/${id}`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }

  // DetailedPlan
  unpaginatedDetailedPlanItems():Observable<DetailedPlan[]>{
    const url = `${environment.base_url}/unpaginated-items-detailed-plan-detailed-plan-construction-permits`;
    return this.http.get<DetailedPlan[]>(url, this.mAppContextService.getHttpOptions());
  }
  detailedPlanItem(id:any, item: any): Observable<DetailedPlan>{
    const url = `${environment.base_url}/detailed-plan-detailed-plan-construction-permits/${id}`;
    // return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedPlan>(url, item);
  }
  plannerDetailedPlanItem(item: any): Observable<DetailedPlan>{
    const url = `${environment.base_url}/planner-detailed-plan-detailed-plan-construction-permits/${item.id}`;
    // return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedPlan>(url, item);
  }
  professionalRecommendationsDetailedPlanItem(item: any): Observable<DetailedPlan>{
    const url = `${environment.base_url}/professional-recommendations-detailed-plan-detailed-plan-construction-permits/${item.id}`;
    return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    // return this.http.post<DetailedPlan>(url, item);
  }
  detailedDesignReportRecommendationsDetailedPlanItem(item: any): Observable<DetailedPlan>{
    const url = `${environment.base_url}/detailed-design-report-detailed-plan-detailed-plan-construction-permits/${item.id}`;
    return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    // return this.http.post<DetailedPlan>(url, item);
  }
  committeeStageDetailedPlanItem(id:any, item: any): Observable<DetailedPlan>{
    const url = `${environment.base_url}/committee-stage-detailed-plan-detailed-plan-construction-permits/${id}`;
    // return this.http.post<DetailedPlan>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedPlan>(url, item);
  }

}
