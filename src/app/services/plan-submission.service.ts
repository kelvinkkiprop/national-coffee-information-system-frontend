import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppContextService } from '../core/app-context.service';
import { environment } from '../../environments/environment';
import { PlanSubmission } from '../interfaces/plan-submission';


@Injectable({
  providedIn: 'root',
})
export class PlanSubmissionService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  //FUNCTIONS
  allItems():Observable<PlanSubmission[]>{
    const url = `${environment.base_url}/plan-submissions`;
    return this.http.get<PlanSubmission[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: PlanSubmission): Observable<PlanSubmission>{
    const url = `${environment.base_url}/plan-submissions`;
    // return this.http.post<PlanSubmission>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<PlanSubmission>(url, item);
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/plan-submissions/${id}`;
    return this.http.get<PlanSubmission[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: PlanSubmission): Observable<PlanSubmission>{
    const url = `${environment.base_url}/plan-submissions/${id}`;
    return this.http.put<PlanSubmission>(url, item, this.mAppContextService.getHttpOptions());
  }

  deleteItem(item: PlanSubmission): Observable<PlanSubmission>{
    const url = `${environment.base_url}/plan-submissions/${item.id}`;
    return this.http.delete<PlanSubmission>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<PlanSubmission[]>{
    return this.http.get<PlanSubmission[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: PlanSubmission): Observable<PlanSubmission>{
    const url = `${environment.base_url}/search-plan-submissions`;
    return this.http.post<PlanSubmission>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<PlanSubmission[]>{
    const url = `${environment.base_url}/unpaginated-items-plan-submissions`;
    return this.http.get<PlanSubmission[]>(url, this.mAppContextService.getHttpOptions());
  }

}
