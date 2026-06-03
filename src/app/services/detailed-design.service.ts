import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { AppContextService } from '../core/app-context.service';
import { DetailedDesign } from '../interfaces/detailed-design';

@Injectable({
  providedIn: 'root',
})
export class DetailedDesignService {

  constructor(
    private mAppContextService: AppContextService,
    private http: HttpClient
) { }

  // FUNCTIONS
  allItems():Observable<DetailedDesign[]>{
    const url = `${environment.base_url}/detailed-designs-construction-permits`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }

  createItem(item: DetailedDesign): Observable<DetailedDesign>{
    const url = `${environment.base_url}/detailed-designs-construction-permits`;
    // return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedDesign>(url, item);
  }

  getOneItem(id:number){
    const url = `${environment.base_url}/detailed-designs-construction-permits/${id}`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }

  updateItem(id:any, item: DetailedDesign): Observable<DetailedDesign>{
    const url = `${environment.base_url}/detailed-designs-construction-permits/${id}`;
    // return this.http.put<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedDesign>(url, item);
  }


  deleteItem(item: DetailedDesign): Observable<DetailedDesign>{
    const url = `${environment.base_url}/detailed-designs-construction-permits/${item.id}`;
    return this.http.delete<DetailedDesign>(url, this.mAppContextService.getHttpOptions());
  }

  paginateItems(url:any):Observable<DetailedDesign[]>{
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }

  searchItems(item: DetailedDesign): Observable<DetailedDesign>{
    const url = `${environment.base_url}/search-detailed-designs-construction-permits`;
    return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
  }

  unpaginatedItems():Observable<DetailedDesign[]>{
    const url = `${environment.base_url}/unpaginated-items-detailed-designs-construction-permits`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }




  getParcelItem(id:any){
    const url = `${environment.base_url}/parcels-detailed-designs-construction-permits/${id}`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }
  getInvestorParcelsItems(id:any){
    const url = `${environment.base_url}/investor-parcels-detailed-designs-construction-permits/${id}`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }






  nextPreviousStatusDetailedPlanItem(id:any){
    const url = `${environment.base_url}/next-previous-status-detailed-designs-construction-permits/${id}`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }

  // DetailedDesign
  unpaginatedDetailedPlanItems():Observable<DetailedDesign[]>{
    const url = `${environment.base_url}/unpaginated-items-detailed-designs-construction-permits`;
    return this.http.get<DetailedDesign[]>(url, this.mAppContextService.getHttpOptions());
  }
  detailedPlanItem(id:any, item: any): Observable<DetailedDesign>{
    const url = `${environment.base_url}/detailed-designs-construction-permits/${id}`;
    // return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedDesign>(url, item);
  }
  plannerDetailedPlanItem(item: any): Observable<DetailedDesign>{
    const url = `${environment.base_url}/planner-detailed-designs-construction-permits/${item.id}`;
    // return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedDesign>(url, item);
  }
  professionalRecommendationsDetailedPlanItem(item: any): Observable<DetailedDesign>{
    const url = `${environment.base_url}/professional-recommendations-detailed-designs-construction-permits/${item.id}`;
    return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    // return this.http.post<DetailedDesign>(url, item);
  }
  detailedDesignReportRecommendationsDetailedPlanItem(item: any): Observable<DetailedDesign>{
    const url = `${environment.base_url}/detailed-design-report-detailed-designs-construction-permits/${item.id}`;
    return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    // return this.http.post<DetailedDesign>(url, item);
  }
  committeeStageDetailedPlanItem(id:any, item: any): Observable<DetailedDesign>{
    const url = `${environment.base_url}/committee-stage-detailed-designs-construction-permits/${id}`;
    // return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedDesign>(url, item);
  }
  constructionPermitItem(id:any, item: any): Observable<DetailedDesign>{
    const url = `${environment.base_url}/construction-permit-detailed-designs-construction-permits/${id}`;
    // return this.http.post<DetailedDesign>(url, item, this.mAppContextService.getHttpOptions());
    return this.http.post<DetailedDesign>(url, item);
  }



  // onDownloadReport
  onDownloadProfessionalReport(item: any): Observable<any>{
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/pdf');
    const url = `${environment.base_url}/detailed-designs-construction-permits-generate-professional-report-pdf/${item.id}`;
    return this.http.get(url, { headers: headers, responseType: 'blob' });
  }


}
