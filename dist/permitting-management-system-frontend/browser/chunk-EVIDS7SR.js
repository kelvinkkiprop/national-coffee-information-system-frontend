import{a as Et,b as se,c as Ft}from"./chunk-N23QNFFO.js";import{a as At}from"./chunk-JYREPJ6U.js";import{c as oe,d as g,e as j,f as V,g as St,h as Ct,i as L,l as H,m as G,n as ae,o as le,p as me,q as z,s as bt}from"./chunk-HGRQUFQJ.js";import{a as R,b as ht}from"./chunk-SJG5BJVG.js";import{a as q,b as re,c as F,e as w}from"./chunk-FHELIIU2.js";import{Ba as l,Bc as lt,Ca as n,Cb as B,Da as i,Db as J,Ea as y,Eb as T,Fc as te,Gb as Ze,Gc as Q,Hc as mt,Ib as De,Ic as st,L as Ue,M as Fe,Mb as et,Mc as dt,Na as k,Nb as tt,Nc as ct,O as Ve,Oc as Te,Pa as h,Pc as pt,R as P,Ra as _,Rc as _t,S as I,T as xe,Tc as ie,U as Ee,Ub as O,Uc as ne,Wb as W,Wc as ut,Xb as M,Ya as $e,_ as f,ab as e,bb as S,cb as Le,cd as gt,dc as He,dd as vt,e as Mt,eb as $,fa as U,fb as K,ga as b,gb as Y,ha as m,hb as x,ib as Ie,kb as C,lb as u,mb as Ke,nd as ft,oa as v,od as xt,pa as D,pc as it,pd as yt,qa as Pe,qb as Ye,qc as nt,rb as Je,sb as Qe,sc as rt,ta as d,ub as Xe,wc as A,xc as ot,yc as at}from"./chunk-RYSGXS5Z.js";var Dt=Mt(At());var N=class o{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${q.base_url}/detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${q.base_url}/detailed-designs-construction-permits`;return this.http.post(t,a)}getOneItem(a){let t=`${q.base_url}/detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a,t){let r=`${q.base_url}/detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}deleteItem(a){let t=`${q.base_url}/detailed-designs-construction-permits/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${q.base_url}/search-detailed-designs-construction-permits`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${q.base_url}/unpaginated-items-detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}getParcelItem(a){let t=`${q.base_url}/parcels-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}getInvestorParcelsItems(a){let t=`${q.base_url}/investor-parcels-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusDetailedPlanItem(a){let t=`${q.base_url}/next-previous-status-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}unpaginatedDetailedPlanItems(){let a=`${q.base_url}/unpaginated-items-detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}detailedPlanItem(a,t){let r=`${q.base_url}/detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}plannerDetailedPlanItem(a){let t=`${q.base_url}/planner-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a)}professionalRecommendationsDetailedPlanItem(a){let t=`${q.base_url}/professional-recommendations-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}detailedDesignReportRecommendationsDetailedPlanItem(a){let t=`${q.base_url}/detailed-design-report-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}boardReviewDetailedPlanItem(a,t){let r=`${q.base_url}/board-review-detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}permitItem(a,t){let r=`${q.base_url}/permit-detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}onDownloadProfessionalReport(a){let t=new et;t=t.set("Accept","application/pdf");let r=`${q.base_url}/detailed-designs-construction-permits-generate-professional-report-pdf/${a.id}`;return this.http.get(r,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||o)(Ve(F),Ve(tt))}}static{this.\u0275prov=Ue({token:o,factory:o.\u0275fac,providedIn:"root"})}};var kt=o=>({"is-invalid":o}),Bt=(o,a,t,r,c,p,s,Nt,qt)=>({"bg-secondary text-dark":o,"bg-primary text-dark":a,"bg-dark":t,"bg-warning text-dark":r,"bg-info":c,"bg-danger":p,"bg-light text-dark":s,"text-muted":Nt,"bg-success":qt}),Pt=()=>[1],It=()=>[2],Ot=(o,a)=>({active:o,disabled:a});function jt(o,a){o&1&&y(0,"app-progress")}function Vt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Lt(o,a){if(o&1&&(n(0,"div",16),e(1,`
                  `),d(2,Vt,2,0,"div",1),e(3,`
                `),i()),o&2){let t=_();m(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function Ht(o,a){if(o&1&&(n(0,"span"),e(1,`
                    `),n(2,"a",31),e(3,"Download"),i(),e(4,`
                `),i()),o&2){let t=_().$implicit;m(2),l("href",x(t.permit_url),b)}}function Gt(o,a){if(o&1&&(n(0,"li")(1,"a",32),xe(),y(2,"svg",33),e(3," Edit"),i()()),o&2){let t=_().$implicit;m(),l("routerLink",Ie("/detailed-designs/edit/",t.id))}}function Wt(o,a){if(o&1&&(n(0,"li")(1,"a",32),xe(),y(2,"svg",34),e(3," Process"),i()()),o&2){let t=_().$implicit;m(),l("routerLink",Ie("/detailed-designs/process/",t.id))}}function zt(o,a){if(o&1){let t=k();n(0,"button",35),h("click",function(){P(t);let c=_().$implicit,p=_(2);return I(p.onDelete(c))}),xe(),y(1,"svg",36),i()}}function Ut(o,a){if(o&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3),i(),e(4,`
                `),n(5,"td"),e(6),i(),e(7,`
                `),n(8,"td"),e(9),i(),e(10,`
                `),n(11,"td"),e(12),i(),e(13,`
                `),e(14,`
                `),e(15,`
                `),n(16,"td"),e(17),i(),e(18,`
                `),n(19,"td"),e(20,`
                  `),n(21,"span",22),e(22),i(),e(23,`
                `),i(),e(24,`
                `),n(25,"td"),e(26),Je(27,"date"),i(),e(28,`
                `),n(29,"td"),e(30,`
                  `),d(31,Ht,5,2,"span",1),e(32,`
                `),i(),e(33,`
                `),n(34,"td"),e(35,`
                  `),n(36,"div",23),e(37,`
                    `),n(38,"a",24),xe(),y(39,"svg",25),i(),e(40,`
                    `),e(41,`
                    `),Ee(),n(42,"c-dropdown",26),e(43,`
                      `),n(44,"button",27),e(45,`
                        `),xe(),y(46,"svg",28),e(47,`
                      `),i(),e(48,`
                      `),Ee(),n(49,"ul",29),e(50,`
                        `),e(51,`
                        `),d(52,Gt,4,2,"li",1),e(53,`
                        `),e(54,`
                        `),d(55,Wt,4,2,"li",1),e(56,`
                      `),i(),e(57,`
                    `),i(),e(58,`
                    `),d(59,zt,2,0,"button",30),e(60,`
                  `),i(),e(61,`
                `),i(),e(62,`
              `),i()),o&2){let t=a.$implicit,r=a.index,c=_(2);m(3),Le("",c.mPageFrom+r,"."),m(3),S(t.application_number),m(3),S(t.project_brief),m(3),S(t.investor.name),m(5),S(t.consultant.name),m(4),l("ngClass",Ye(16,Bt,[t.detailed_plan_status_id==1,t.detailed_plan_status_id==2,t.detailed_plan_status_id==3,t.detailed_plan_status_id==4,t.detailed_plan_status_id==5,t.detailed_plan_status_id==6,t.detailed_plan_status_id==7,t.detailed_plan_status_id==8,t.detailed_plan_status_id==9])),m(),Le(`
                    `,t.detailed_plan_status==null?null:t.detailed_plan_status.name,`
                  `),m(4),S(Qe(27,14,t.created_at)),m(5),l("ngIf",t.permit),m(7),l("routerLink",Ie("/detailed-designs/show/",t.id)),m(14),l("ngIf",c.mAppContextService.hasRoles(C(26,Pt))||c.mAppContextService.hasRoles(C(27,It))&&(t.status_id==1||t.status_id==2)),m(3),l("ngIf",!c.mAppContextService.hasRoles(C(28,It))),m(4),l("ngIf",c.mAppContextService.hasRoles(C(29,Pt)))}}function $t(o,a){if(o&1&&(n(0,"div",17),e(1,`
          `),n(2,"table",18),e(3,`
            `),n(4,"thead",19),e(5,`
              `),n(6,"tr"),e(7,`
                `),n(8,"th",20),e(9,"#"),i(),e(10,`
                `),n(11,"th",20),e(12,"Application No."),i(),e(13,`
                `),n(14,"th",20),e(15,"Project"),i(),e(16,`
                `),n(17,"th",20),e(18,"Investor"),i(),e(19,`
                `),e(20,`
                `),e(21,`
                `),n(22,"th",20),e(23,"Consultant"),i(),e(24,`
                `),n(25,"th",20),e(26,"Status"),i(),e(27,`
                `),n(28,"th",20),e(29,"Created"),i(),e(30,`
                `),n(31,"th",20),e(32,"Permit"),i(),e(33,`
                `),n(34,"th",20),e(35,"Action"),i(),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),n(39,"tbody"),e(40,`
              `),d(41,Ut,63,30,"tr",21),e(42,`
            `),i(),e(43,`
          `),i(),e(44,`
        `),i()),o&2){let t=_();m(41),l("ngForOf",t.mConstructionPermits)}}function Kt(o,a){if(o&1){let t=k();n(0,"li",39),e(1,`
              `),n(2,"a",40),h("click",function(){let c=P(t).$implicit,p=_(2);return I(p.onChangePage(c.url))}),i(),e(3,`
            `),i()}if(o&2){let t=a.$implicit;l("ngClass",Ke(2,Ot,t.active,!t.url)),m(2),l("innerHTML",t.label,U)}}function Yt(o,a){if(o&1&&(n(0,"div"),e(1,`
          `),n(2,"ul",37),e(3,`
            `),d(4,Kt,4,5,"li",38),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let t=_();m(4),l("ngForOf",t.links)}}function Jt(o,a){o&1&&(e(0,`
          `),n(1,"p",41),e(2,"No items"),i(),e(3,`
        `))}var we=class o{constructor(a,t,r){this.mDetailedDesignService=a;this.mToastrService=t;this.mAppContextService=r;this.mConstructionPermits={};this.links=[];this.mProgress=f(!1)}ngOnInit(){this.index(),this.search_term=new Ct("",g.required),this.itemForm=new St({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mDetailedDesignService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mDetailedDesignService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mConstructionPermits=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onDelete(a){Dt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.application_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mDetailedDesignService.deleteItem(a).subscribe({next:c=>{c&&(this.mConstructionPermits=this.mConstructionPermits.filter(p=>p.id!==a.id),this.mToastrService.error(c.message),this.mProgress.set(!1))},error:c=>{c.error.message&&this.mToastrService.error(c.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mDetailedDesignService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mDetailedDesignService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(v(N),v(w),v(F))}}static{this.\u0275cmp=D({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/detailed-designs/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,r){if(t&1&&(d(0,jt,1,0,"app-progress",1),n(1,"c-row"),e(2,`
  `),n(3,"c-col",2),e(4,`
    `),n(5,"c-card",3),e(6,`
      `),n(7,"c-card-header"),e(8,`
        `),n(9,"div",4),e(10,`
          `),n(11,"div",5),e(12,`
            `),n(13,"a",6),e(14,`
              `),xe(),y(15,"svg",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),Ee(),n(19,"div"),e(20,`
            `),n(21,"form",8),h("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),n(23,"div",9),e(24,`
                `),y(25,"input",10),e(26,`
                `),n(27,"div",11),e(28,`
                  `),n(29,"button",12),e(30,`
                    `),xe(),y(31,"svg",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),d(35,Lt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),Ee(),n(42,"c-card-body"),e(43,`

        `),d(44,$t,45,1,"div",15),e(45,`

        `),d(46,Yt,7,1,"div",1),e(47,`

        `),d(48,Jt,4,0,"ng-template",null,0,Xe),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),t&2){let c=$e(49);l("ngIf",r.mProgress()),m(21),l("formGroup",r.itemForm),m(4),l("ngClass",u(7,kt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),m(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),m(9),l("ngIf",r.mConstructionPermits.length>0)("ngIfElse",c),m(2),l("ngIf",r.links)}},dependencies:[B,J,T,M,R,A,te,Q,mt,ie,ne,xt,ft,L,oe,j,V,G,H,it,Te,pt,dt,ct,Ze],encapsulation:2})}};var Z=o=>({"is-invalid":o});function Qt(o,a){o&1&&y(0,"app-progress")}function Xt(o,a){if(o&1&&(n(0,"option",41),e(1),i()),o&2){let t=a.$implicit;l("value",t.id),m(),S(t.application_number)}}function Zt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ei(o,a){if(o&1&&(n(0,"div",42),e(1,`
                        `),d(2,Zt,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("id"))==null||t.errors==null?null:t.errors.required)}}function ti(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ii(o,a){if(o&1&&(n(0,"div",42),e(1,`
                        `),d(2,ti,2,0,"div",0),e(3,`
                        `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("indemnity_form").errors)==null?null:t.required)}}function ni(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ri(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,ni,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("architectural_design").errors)==null?null:t.required)}}function oi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ai(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,oi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("structural_design").errors)==null?null:t.required)}}function li(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function mi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,li,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("electrical_design").errors)==null?null:t.required)}}function si(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function di(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,si,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("ict_design").errors)==null?null:t.required)}}function ci(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function pi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,ci,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("mechanical_design").errors)==null?null:t.required)}}function _i(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ui(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,_i,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("landscaping_design").errors)==null?null:t.required)}}function gi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function vi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,gi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("site_access_plan").errors)==null?null:t.required)}}function fi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function xi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,fi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("other_relevant_documents").errors)==null?null:t.required)}}function yi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function hi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,yi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("green_certification_registration").errors)==null?null:t.required)}}function Si(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ci(o,a){if(o&1&&(n(0,"div",42),e(1,`
                      `),d(2,Si,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("nema_project_report").errors)==null?null:t.required)}}var Se=class o{constructor(a,t,r,c,p){this.mDetailedDesignService=a;this.router=t;this.mToastrService=r;this.mAppContextService=c;this.fb=p;this.mProgress=f(!1);this.itemForm=this.fb.group({id:["",g.required],indemnity_form:["",g.required],architectural_design:["",g.required],structural_design:["",g.required],electrical_design:["",g.required],ict_design:["",g.required],mechanical_design:["",g.required],landscaping_design:["",g.required],site_access_plan:["",g.required],other_relevant_documents:["",g.nullValidator],green_certification_registration:["",g.required],nema_project_report:["",g.required]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDetailedDesignService.unpaginatedItems().subscribe({next:a=>{a&&(this.mMasterplanSubmissions=a.data.masterplan_submissions,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("id",a.id),t.append("indemnity_form",this.indemnity_form_file,this.indemnity_form_file.name),t.append("architectural_design",this.architectural_design_file,this.architectural_design_file.name),t.append("structural_design",this.structural_design_file,this.structural_design_file.name),t.append("electrical_design",this.electrical_design_file,this.electrical_design_file.name),t.append("ict_design",this.ict_design_file,this.ict_design_file.name),t.append("mechanical_design",this.mechanical_design_file,this.mechanical_design_file.name),t.append("landscaping_design",this.landscaping_design_file,this.landscaping_design_file.name),t.append("site_access_plan",this.site_access_plan_file,this.site_access_plan_file.name),t.append("other_relevant_documents",this.other_relevant_documents_file,this.other_relevant_documents_file.name),t.append("green_certification_registration",this.green_certification_registration_file,this.green_certification_registration_file.name),t.append("nema_project_report",this.nema_project_report_file,this.nema_project_report_file.name),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.createItem(t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onIndemnityFormChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_form_file=t}}onArchitecturalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.architectural_design_file=t}}onStructuralDesignChange(a){if(a.target.value){let t=a.target.files[0];this.structural_design_file=t}}onElectricalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.electrical_design_file=t}}onIctDesignChange(a){if(a.target.value){let t=a.target.files[0];this.ict_design_file=t}}onMechanicalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.mechanical_design_file=t}}onLandscapingDesignChange(a){if(a.target.value){let t=a.target.files[0];this.landscaping_design_file=t}}onSignageDesignChange(a){if(a.target.value){let t=a.target.files[0];this.site_access_plan_file=t}}onOtherRelevantDocumentsChange(a){if(a.target.value){let t=a.target.files[0];this.other_relevant_documents_file=t}}onGreenCertificationRegistrationChange(a){if(a.target.value){let t=a.target.files[0];this.green_certification_registration_file=t}}onNemaProjectReportChange(a){if(a.target.value){let t=a.target.files[0];this.nema_project_report_file=t}}static{this.\u0275fac=function(t){return new(t||o)(v(N),v(W),v(w),v(F),v(z))}}static{this.\u0275cmp=D({type:o,selectors:[["app-create"]],standalone:!1,decls:199,vars:52,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required"],["formControlName","indemnity_form","type","file",1,"form-control",3,"change","ngClass"],["for","architectural_design",1,"col-form-label","required"],["formControlName","architectural_design","type","file",1,"form-control",3,"change","ngClass"],["for","structural_design",1,"col-form-label","required"],["formControlName","structural_design","type","file",1,"form-control",3,"change","ngClass"],["for","electrical_design",1,"col-form-label","required"],["formControlName","electrical_design","type","file",1,"form-control",3,"change","ngClass"],["for","ict_design",1,"col-form-label","required"],["formControlName","ict_design","type","file",1,"form-control",3,"change","ngClass"],["for","mechanical_design",1,"col-form-label","required"],["formControlName","mechanical_design","type","file",1,"form-control",3,"change","ngClass"],["for","landscaping_design",1,"col-form-label","required"],["formControlName","landscaping_design","type","file",1,"form-control",3,"change","ngClass"],["for","site_access_plan",1,"col-form-label","required"],["formControlName","site_access_plan","type","file",1,"form-control",3,"change","ngClass"],["for","other_relevant_documents",1,"col-form-label","required"],["formControlName","other_relevant_documents","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_registration",1,"col-form-label","required"],["formControlName","green_certification_registration","type","file",1,"form-control",3,"change","ngClass"],["for","nema_project_report",1,"col-form-label","required"],["formControlName","nema_project_report","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(d(0,Qt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div"),e(10,`
          `),n(11,"form",3),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(12,`
            `),n(13,"fieldset",4),e(14,`
              `),n(15,"legend",5)(16,"h6",6),e(17,"DETAILED PLAN"),i()(),e(18,`
              `),n(19,"div",7),e(20,`
                  `),n(21,"div",8),e(22,`
                    `),n(23,"div",9),e(24,`
                      `),n(25,"label",10),e(26,"Application Number:"),i(),e(27,`
                      `),n(28,"select",11),e(29,`
                        `),n(30,"option",12),e(31,"--- Select application ---"),i(),e(32,`
                        `),d(33,Xt,2,2,"option",13),e(34,`
                      `),i(),e(35,`
                      `),d(36,ei,4,1,"div",14),e(37,`
                    `),i(),e(38,`
                  `),i(),e(39,`
                  `),n(40,"div",15),e(41,`
                    `),n(42,"div",9),e(43,`
                        `),n(44,"label",16),e(45,"Indemnity Form:"),i(),e(46,`
                        `),n(47,"input",17),h("change",function(p){return r.onIndemnityFormChange(p)}),i(),e(48,`
                        `),d(49,ii,4,1,"div",14),e(50,`
                    `),i(),e(51,`
                  `),i(),e(52,`
                  `),n(53,"div",15),e(54,`
                  `),n(55,"div",9),e(56,`
                      `),n(57,"label",18),e(58,"Architectural Design:"),i(),e(59,`
                      `),n(60,"input",19),h("change",function(p){return r.onArchitecturalDesignChange(p)}),i(),e(61,`
                      `),d(62,ri,4,1,"div",14),e(63,`
                  `),i(),e(64,`
                  `),i(),e(65,`
                  `),n(66,"div",15),e(67,`
                  `),n(68,"div",9),e(69,`
                      `),n(70,"label",20),e(71,"Structural Design:"),i(),e(72,`
                      `),n(73,"input",21),h("change",function(p){return r.onStructuralDesignChange(p)}),i(),e(74,`
                      `),d(75,ai,4,1,"div",14),e(76,`
                  `),i(),e(77,`
                  `),i(),e(78,`
                  `),n(79,"div",15),e(80,`
                  `),n(81,"div",9),e(82,`
                      `),n(83,"label",22),e(84,"Electrical Design:"),i(),e(85,`
                      `),n(86,"input",23),h("change",function(p){return r.onElectricalDesignChange(p)}),i(),e(87,`
                      `),d(88,mi,4,1,"div",14),e(89,`
                  `),i(),e(90,`
                  `),i(),e(91,`
                  `),n(92,"div",15),e(93,`
                  `),n(94,"div",9),e(95,`
                      `),n(96,"label",24),e(97,"ICT Design:"),i(),e(98,`
                      `),n(99,"input",25),h("change",function(p){return r.onIctDesignChange(p)}),i(),e(100,`
                      `),d(101,di,4,1,"div",14),e(102,`
                  `),i(),e(103,`
                  `),i(),e(104,`
                  `),n(105,"div",15),e(106,`
                  `),n(107,"div",9),e(108,`
                      `),n(109,"label",26),e(110,"Mechanical Design:"),i(),e(111,`
                      `),n(112,"input",27),h("change",function(p){return r.onMechanicalDesignChange(p)}),i(),e(113,`
                      `),d(114,pi,4,1,"div",14),e(115,`
                  `),i(),e(116,`
                  `),i(),e(117,`
                  `),n(118,"div",15),e(119,`
                  `),n(120,"div",9),e(121,`
                      `),n(122,"label",28),e(123,"Landscaping Design:"),i(),e(124,`
                      `),n(125,"input",29),h("change",function(p){return r.onLandscapingDesignChange(p)}),i(),e(126,`
                      `),d(127,ui,4,1,"div",14),e(128,`
                  `),i(),e(129,`
                  `),i(),e(130,`
                  `),n(131,"div",15),e(132,`
                  `),n(133,"div",9),e(134,`
                      `),n(135,"label",30),e(136,"Site Access Plan:"),i(),e(137,`
                      `),n(138,"input",31),h("change",function(p){return r.onSignageDesignChange(p)}),i(),e(139,`
                      `),d(140,vi,4,1,"div",14),e(141,`
                  `),i(),e(142,`
                  `),i(),e(143,`
                  `),n(144,"div",8),e(145,`
                  `),n(146,"div",9),e(147,`
                      `),n(148,"label",32),e(149,"Other Relevant Documents:"),i(),e(150,`
                      `),n(151,"input",33),h("change",function(p){return r.onOtherRelevantDocumentsChange(p)}),i(),e(152,`
                      `),d(153,xi,4,1,"div",14),e(154,`
                  `),i(),e(155,`
                  `),i(),e(156,`
                  `),n(157,"div",15),e(158,`
                  `),n(159,"div",9),e(160,`
                      `),n(161,"label",34),e(162,"Green Certification Registration:"),i(),e(163,`
                      `),n(164,"input",35),h("change",function(p){return r.onGreenCertificationRegistrationChange(p)}),i(),e(165,`
                      `),d(166,hi,4,1,"div",14),e(167,`
                  `),i(),e(168,`
                  `),i(),e(169,`
                  `),n(170,"div",15),e(171,`
                  `),n(172,"div",9),e(173,`
                      `),n(174,"label",36),e(175,"NEMA Project Report:"),i(),e(176,`
                      `),n(177,"input",37),h("change",function(p){return r.onNemaProjectReportChange(p)}),i(),e(178,`
                      `),d(179,Ci,4,1,"div",14),e(180,`
                  `),i(),e(181,`
                  `),i(),e(182,`
              `),i(),e(183,`
            `),i(),e(184,`
            `),n(185,"div",38),e(186,`
              `),n(187,"button",39),e(188,"Cancel"),i(),e(189,`
              `),n(190,"button",40),e(191,"Submit"),i(),e(192,`
            `),i(),e(193,`
          `),i(),e(194,`
        `),i(),e(195,`

      `),i(),e(196,`
    `),i(),e(197,`
  `),i(),e(198,`
`),i()),t&2){let c,p;l("ngIf",r.mProgress()),m(11),l("formGroup",r.itemForm),m(17),l("ngClass",u(28,Z,((c=r.itemForm.get("id"))==null?null:c.invalid)&&(((c=r.itemForm.get("id"))==null?null:c.dirty)||((c=r.itemForm.get("id"))==null?null:c.touched)))),m(5),l("ngForOf",r.mMasterplanSubmissions),m(3),l("ngIf",((p=r.itemForm.get("id"))==null?null:p.invalid)&&(((p=r.itemForm.get("id"))==null?null:p.dirty)||((p=r.itemForm.get("id"))==null?null:p.touched))),m(11),l("ngClass",u(30,Z,r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched))),m(2),l("ngIf",r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched)),m(11),l("ngClass",u(32,Z,r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched))),m(2),l("ngIf",r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched)),m(11),l("ngClass",u(34,Z,r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched))),m(2),l("ngIf",r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched)),m(11),l("ngClass",u(36,Z,r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched))),m(2),l("ngIf",r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched)),m(11),l("ngClass",u(38,Z,r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched))),m(2),l("ngIf",r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched)),m(11),l("ngClass",u(40,Z,r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched))),m(2),l("ngIf",r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched)),m(11),l("ngClass",u(42,Z,r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched))),m(2),l("ngIf",r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched)),m(11),l("ngClass",u(44,Z,r.itemForm.get("site_access_plan").invalid&&(r.itemForm.get("site_access_plan").dirty||r.itemForm.get("site_access_plan").touched))),m(2),l("ngIf",r.itemForm.get("site_access_plan").invalid&&(r.itemForm.get("site_access_plan").dirty||r.itemForm.get("site_access_plan").touched)),m(11),l("ngClass",u(46,Z,r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched))),m(2),l("ngIf",r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched)),m(11),l("ngClass",u(48,Z,r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched))),m(2),l("ngIf",r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched)),m(11),l("ngClass",u(50,Z,r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched))),m(2),l("ngIf",r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched)),m(11),l("disabled",r.itemForm.invalid)}},dependencies:[B,J,T,M,R,A,te,Q,ie,ne,L,le,me,oe,ae,j,V,G,H],encapsulation:2})}};var ee=o=>({"is-invalid":o});function Ei(o,a){o&1&&y(0,"app-progress")}function Fi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Pi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                        `),d(2,Fi,2,0,"div",0),e(3,`
                        `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("indemnity_form").errors)==null?null:t.required)}}function Ii(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Di(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Ii,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("architectural_design").errors)==null?null:t.required)}}function Ti(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function wi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Ti,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("structural_design").errors)==null?null:t.required)}}function Ri(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ni(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Ri,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("electrical_design").errors)==null?null:t.required)}}function qi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Mi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,qi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("ict_design").errors)==null?null:t.required)}}function Ai(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ki(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Ai,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("mechanical_design").errors)==null?null:t.required)}}function Bi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Oi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Bi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("landscaping_design").errors)==null?null:t.required)}}function ji(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Vi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,ji,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("site_access_plan").errors)==null?null:t.required)}}function Li(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Hi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Li,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("other_relevant_documents").errors)==null?null:t.required)}}function Gi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Wi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,Gi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("green_certification_registration").errors)==null?null:t.required)}}function zi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ui(o,a){if(o&1&&(n(0,"div",37),e(1,`
                      `),d(2,zi,2,0,"div",0),e(3,`
                      `),i()),o&2){let t,r=_();m(2),l("ngIf",(t=r.itemForm.get("nema_project_report").errors)==null?null:t.required)}}var Re=class o{constructor(a,t,r,c,p,s){this.mDetailedDesignService=a;this.router=t;this.mToastrService=r;this.mAppContextService=c;this.fb=p;this.route=s;this.mProgress=f(!1);this.itemForm=this.fb.group({indemnity_form:["",g.required],architectural_design:["",g.required],structural_design:["",g.required],electrical_design:["",g.required],ict_design:["",g.required],mechanical_design:["",g.required],landscaping_design:["",g.required],site_access_plan:["",g.required],other_relevant_documents:["",g.nullValidator],green_certification_registration:["",g.required],nema_project_report:["",g.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDetailedDesignService.unpaginatedItems().subscribe({next:a=>{a&&(this.mMasterplanSubmissions=a.data.masterplan_submissions,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("id",this.id),t.append("indemnity_form",this.indemnity_form_file,this.indemnity_form_file.name),t.append("architectural_design",this.architectural_design_file,this.architectural_design_file.name),t.append("structural_design",this.structural_design_file,this.structural_design_file.name),t.append("electrical_design",this.electrical_design_file,this.electrical_design_file.name),t.append("ict_design",this.ict_design_file,this.ict_design_file.name),t.append("mechanical_design",this.mechanical_design_file,this.mechanical_design_file.name),t.append("landscaping_design",this.landscaping_design_file,this.landscaping_design_file.name),t.append("site_access_plan",this.site_access_plan_file,this.site_access_plan_file.name),t.append("other_relevant_documents",this.other_relevant_documents_file,this.other_relevant_documents_file.name),t.append("green_certification_registration",this.green_certification_registration_file,this.green_certification_registration_file.name),t.append("nema_project_report",this.nema_project_report_file,this.nema_project_report_file.name),t.append("_method","PUT"),this.mProgress.set(!0),this.mDetailedDesignService.updateItem(this.id,t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onIndemnityFormChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_form_file=t}}onArchitecturalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.architectural_design_file=t}}onStructuralDesignChange(a){if(a.target.value){let t=a.target.files[0];this.structural_design_file=t}}onElectricalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.electrical_design_file=t}}onIctDesignChange(a){if(a.target.value){let t=a.target.files[0];this.ict_design_file=t}}onMechanicalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.mechanical_design_file=t}}onLandscapingDesignChange(a){if(a.target.value){let t=a.target.files[0];this.landscaping_design_file=t}}onSignageDesignChange(a){if(a.target.value){let t=a.target.files[0];this.site_access_plan_file=t}}onOtherRelevantDocumentsChange(a){if(a.target.value){let t=a.target.files[0];this.other_relevant_documents_file=t}}onGreenCertificationRegistrationChange(a){if(a.target.value){let t=a.target.files[0];this.green_certification_registration_file=t}}onNemaProjectReportChange(a){if(a.target.value){let t=a.target.files[0];this.nema_project_report_file=t}}static{this.\u0275fac=function(t){return new(t||o)(v(N),v(W),v(w),v(F),v(z),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-edit"]],standalone:!1,decls:180,vars:47,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","indemnity_form",1,"col-form-label","required"],["formControlName","indemnity_form","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","architectural_design",1,"col-form-label","required"],["formControlName","architectural_design","type","file",1,"form-control",3,"change","ngClass"],["for","structural_design",1,"col-form-label","required"],["formControlName","structural_design","type","file",1,"form-control",3,"change","ngClass"],["for","electrical_design",1,"col-form-label","required"],["formControlName","electrical_design","type","file",1,"form-control",3,"change","ngClass"],["for","ict_design",1,"col-form-label","required"],["formControlName","ict_design","type","file",1,"form-control",3,"change","ngClass"],["for","mechanical_design",1,"col-form-label","required"],["formControlName","mechanical_design","type","file",1,"form-control",3,"change","ngClass"],["for","landscaping_design",1,"col-form-label","required"],["formControlName","landscaping_design","type","file",1,"form-control",3,"change","ngClass"],["for","site_access_plan",1,"col-form-label","required"],["formControlName","site_access_plan","type","file",1,"form-control",3,"change","ngClass"],[1,"col-md-12"],["for","other_relevant_documents",1,"col-form-label","required"],["formControlName","other_relevant_documents","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_registration",1,"col-form-label","required"],["formControlName","green_certification_registration","type","file",1,"form-control",3,"change","ngClass"],["for","nema_project_report",1,"col-form-label","required"],["formControlName","nema_project_report","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(d(0,Ei,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div"),e(10,`
          `),n(11,"form",3),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(12,`
              `),n(13,"fieldset",4),e(14,`
              `),n(15,"legend",5)(16,"h6",6),e(17,"DETAILED PLAN"),i()(),e(18,`
              `),n(19,"div",7),e(20,`
                  `),n(21,"div",8),e(22,`
                    `),n(23,"div",9),e(24,`
                        `),n(25,"label",10),e(26,"Indemnity Form:"),i(),e(27,`
                        `),n(28,"input",11),h("change",function(p){return r.onIndemnityFormChange(p)}),i(),e(29,`
                        `),d(30,Pi,4,1,"div",12),e(31,`
                    `),i(),e(32,`
                  `),i(),e(33,`
                  `),n(34,"div",8),e(35,`
                  `),n(36,"div",9),e(37,`
                      `),n(38,"label",13),e(39,"Architectural Design:"),i(),e(40,`
                      `),n(41,"input",14),h("change",function(p){return r.onArchitecturalDesignChange(p)}),i(),e(42,`
                      `),d(43,Di,4,1,"div",12),e(44,`
                  `),i(),e(45,`
                  `),i(),e(46,`
                  `),n(47,"div",8),e(48,`
                  `),n(49,"div",9),e(50,`
                      `),n(51,"label",15),e(52,"Structural Design:"),i(),e(53,`
                      `),n(54,"input",16),h("change",function(p){return r.onStructuralDesignChange(p)}),i(),e(55,`
                      `),d(56,wi,4,1,"div",12),e(57,`
                  `),i(),e(58,`
                  `),i(),e(59,`
                  `),n(60,"div",8),e(61,`
                  `),n(62,"div",9),e(63,`
                      `),n(64,"label",17),e(65,"Electrical Design:"),i(),e(66,`
                      `),n(67,"input",18),h("change",function(p){return r.onElectricalDesignChange(p)}),i(),e(68,`
                      `),d(69,Ni,4,1,"div",12),e(70,`
                  `),i(),e(71,`
                  `),i(),e(72,`
                  `),n(73,"div",8),e(74,`
                  `),n(75,"div",9),e(76,`
                      `),n(77,"label",19),e(78,"ICT Design:"),i(),e(79,`
                      `),n(80,"input",20),h("change",function(p){return r.onIctDesignChange(p)}),i(),e(81,`
                      `),d(82,Mi,4,1,"div",12),e(83,`
                  `),i(),e(84,`
                  `),i(),e(85,`
                  `),n(86,"div",8),e(87,`
                  `),n(88,"div",9),e(89,`
                      `),n(90,"label",21),e(91,"Mechanical Design:"),i(),e(92,`
                      `),n(93,"input",22),h("change",function(p){return r.onMechanicalDesignChange(p)}),i(),e(94,`
                      `),d(95,ki,4,1,"div",12),e(96,`
                  `),i(),e(97,`
                  `),i(),e(98,`
                  `),n(99,"div",8),e(100,`
                  `),n(101,"div",9),e(102,`
                      `),n(103,"label",23),e(104,"Landscaping Design:"),i(),e(105,`
                      `),n(106,"input",24),h("change",function(p){return r.onLandscapingDesignChange(p)}),i(),e(107,`
                      `),d(108,Oi,4,1,"div",12),e(109,`
                  `),i(),e(110,`
                  `),i(),e(111,`
                  `),n(112,"div",8),e(113,`
                  `),n(114,"div",9),e(115,`
                      `),n(116,"label",25),e(117,"Site Access Plan:"),i(),e(118,`
                      `),n(119,"input",26),h("change",function(p){return r.onSignageDesignChange(p)}),i(),e(120,`
                      `),d(121,Vi,4,1,"div",12),e(122,`
                  `),i(),e(123,`
                  `),i(),e(124,`
                  `),n(125,"div",27),e(126,`
                  `),n(127,"div",9),e(128,`
                      `),n(129,"label",28),e(130,"Other Relevant Documents:"),i(),e(131,`
                      `),n(132,"input",29),h("change",function(p){return r.onOtherRelevantDocumentsChange(p)}),i(),e(133,`
                      `),d(134,Hi,4,1,"div",12),e(135,`
                  `),i(),e(136,`
                  `),i(),e(137,`
                  `),n(138,"div",8),e(139,`
                  `),n(140,"div",9),e(141,`
                      `),n(142,"label",30),e(143,"Green Certification Registration:"),i(),e(144,`
                      `),n(145,"input",31),h("change",function(p){return r.onGreenCertificationRegistrationChange(p)}),i(),e(146,`
                      `),d(147,Wi,4,1,"div",12),e(148,`
                  `),i(),e(149,`
                  `),i(),e(150,`
                  `),n(151,"div",8),e(152,`
                  `),n(153,"div",9),e(154,`
                      `),n(155,"label",32),e(156,"NEMA Project Report:"),i(),e(157,`
                      `),n(158,"input",33),h("change",function(p){return r.onNemaProjectReportChange(p)}),i(),e(159,`
                      `),d(160,Ui,4,1,"div",12),e(161,`
                  `),i(),e(162,`
                  `),i(),e(163,`
              `),i(),e(164,`
              `),i(),e(165,`
              `),n(166,"div",34),e(167,`
                `),n(168,"button",35),e(169,"Cancel"),i(),e(170,`
                `),n(171,"button",36),e(172,"Submit"),i(),e(173,`
              `),i(),e(174,`
          `),i(),e(175,`
        `),i(),e(176,`

      `),i(),e(177,`
    `),i(),e(178,`
  `),i(),e(179,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(11),l("formGroup",r.itemForm),m(17),l("ngClass",u(25,ee,r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched))),m(2),l("ngIf",r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched)),m(11),l("ngClass",u(27,ee,r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched))),m(2),l("ngIf",r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched)),m(11),l("ngClass",u(29,ee,r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched))),m(2),l("ngIf",r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched)),m(11),l("ngClass",u(31,ee,r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched))),m(2),l("ngIf",r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched)),m(11),l("ngClass",u(33,ee,r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched))),m(2),l("ngIf",r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched)),m(11),l("ngClass",u(35,ee,r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched))),m(2),l("ngIf",r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched)),m(11),l("ngClass",u(37,ee,r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched))),m(2),l("ngIf",r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched)),m(11),l("ngClass",u(39,ee,r.itemForm.get("site_access_plan").invalid&&(r.itemForm.get("site_access_plan").dirty||r.itemForm.get("site_access_plan").touched))),m(2),l("ngIf",r.itemForm.get("site_access_plan").invalid&&(r.itemForm.get("site_access_plan").dirty||r.itemForm.get("site_access_plan").touched)),m(11),l("ngClass",u(41,ee,r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched))),m(2),l("ngIf",r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched)),m(11),l("ngClass",u(43,ee,r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched))),m(2),l("ngIf",r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched)),m(11),l("ngClass",u(45,ee,r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched))),m(2),l("ngIf",r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched)),m(11),l("disabled",r.itemForm.invalid))},dependencies:[B,T,M,R,A,te,Q,ie,ne,L,oe,j,V,G,H],encapsulation:2})}};var $i=()=>[2];function Ki(o,a){o&1&&y(0,"app-progress")}function Yi(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=_();m(),S(t.item.investor==null?null:t.item.investor.name)}}function Ji(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=_();m(),S(t.item.type==null?null:t.item.type.name)}}function Qi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.indemnity_form_url),b)}}function Xi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.architectural_design_url),b)}}function Zi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.structural_design_url),b)}}function en(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.electrical_design_url),b)}}function tn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.ict_design_url),b)}}function nn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.mechanical_design_url),b)}}function rn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.landscaping_design_url),b)}}function on(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.site_access_plan_url),b)}}function an(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.other_relevant_documents_url),b)}}function ln(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.green_certification_registration_url),b)}}function mn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=_();m(2),l("href",x(t.item.nema_project_report_url),b)}}function sn(o,a){if(o&1){let t=k();n(0,"fieldset",3),e(1,`
            `),n(2,"legend",4)(3,"h6",5),e(4,"PROFESSIONAL RECOMMENDATIONS"),i()(),e(5,`
            `),n(6,"div",6),e(7,`
              `),n(8,"div",10),e(9,`
                `),n(10,"div",2),e(11,`
                  `),n(12,"label",8),e(13,"Architect Report:"),i(),e(14,`
                  `),n(15,"div",18),e(16,`
                    `),y(17,"span",19),e(18,`
                  `),i(),e(19,`
                `),i(),e(20,`
              `),i(),e(21,`
              `),n(22,"div",10),e(23,`
                `),n(24,"div",2),e(25,`
                  `),n(26,"label",20),e(27,"Structural Engineer Report:"),i(),e(28,`
                  `),n(29,"div",18),e(30,`
                    `),y(31,"span",19),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
              `),i(),e(35,`
              `),n(36,"div",10),e(37,`
                `),n(38,"div",2),e(39,`
                  `),n(40,"label",20),e(41,"Electrical Engineer Report:"),i(),e(42,`
                  `),n(43,"div",18),e(44,`
                    `),y(45,"span",19),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
              `),i(),e(49,`
              `),n(50,"div",10),e(51,`
                `),n(52,"div",2),e(53,`
                  `),n(54,"label",20),e(55,"ICT Engineer Report:"),i(),e(56,`
                  `),n(57,"div",18),e(58,`
                    `),y(59,"span",19),e(60,`
                  `),i(),e(61,`
                `),i(),e(62,`
              `),i(),e(63,`
              `),n(64,"div",10),e(65,`
                `),n(66,"div",2),e(67,`
                  `),n(68,"label",20),e(69,"Mechanical Engineer Report:"),i(),e(70,`
                  `),n(71,"div",18),e(72,`
                    `),y(73,"span",19),e(74,`
                  `),i(),e(75,`
                `),i(),e(76,`
              `),i(),e(77,`
              `),n(78,"div",10),e(79,`
                `),n(80,"div",2),e(81,`
                  `),n(82,"label",20),e(83,"Environment Health and Safety Report:"),i(),e(84,`
                  `),n(85,"div",18),e(86,`
                    `),y(87,"span",19),e(88,`
                  `),i(),e(89,`
                `),i(),e(90,`
              `),i(),e(91,`
              `),n(92,"div",10),e(93,`
                `),n(94,"div",2),e(95,`
                  `),n(96,"label",20),e(97,"Professional Sustainability Report:"),i(),e(98,`
                  `),n(99,"div",18),e(100,`
                    `),y(101,"span",19),e(102,`
                  `),i(),e(103,`
                `),i(),e(104,`
              `),i(),e(105,`
              `),n(106,"div",10),e(107,`
                `),n(108,"div",2),e(109,`
                  `),n(110,"label",20),e(111,"Landscaping Report:"),i(),e(112,`
                  `),n(113,"div",18),e(114,`
                    `),y(115,"span",19),e(116,`
                  `),i(),e(117,`
                `),i(),e(118,`
              `),i(),e(119,`
              `),n(120,"div",10),e(121,`
                `),n(122,"div",2),e(123,`
                  `),n(124,"label",20),e(125,"Civil Works Design Report:"),i(),e(126,`
                  `),n(127,"div",18),e(128,`
                    `),y(129,"span",19),e(130,`
                  `),i(),e(131,`
                `),i(),e(132,`
              `),i(),e(133,`
              `),n(134,"div",10),e(135,`
                `),n(136,"div",2),e(137,`
                  `),n(138,"label",20),e(139,"Water and Sanitation Designs Design Report:"),i(),e(140,`
                  `),n(141,"div",18),e(142,`
                    `),y(143,"span",19),e(144,`
                  `),i(),e(145,`
                `),i(),e(146,`
              `),i(),e(147,`
            `),i(),e(148,`
            `),n(149,"div",10),e(150,`
              `),n(151,"div",21),e(152,`
                `),n(153,"button",22),h("click",function(){P(t);let c=_();return I(c.onDownloadReport(c.item))}),e(154,"Print Report"),i(),e(155,`
              `),i(),e(156,`
            `),i(),e(157,`
          `),i()}if(o&2){let t=_();m(17),l("innerHTML",t.mAppContextService.safeHtml(t.item.architect_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.structural_engineer_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.electrical_engineer_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.ict_engineer_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.mechanical_engineer_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.environment_health_and_safety_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.professional_sustainability_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.landscaping_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.civil_works_design_report),U),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.water_and_sanitation_designs_report),U)}}var Ce=class o{constructor(a,t,r,c){this.mDetailedDesignService=a;this.mAppContextService=t;this.mToastrService=r;this.route=c;this.mProgress=f(!1)}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onDownloadReport(a){this.mProgress.set(!0),this.mDetailedDesignService.onDownloadProfessionalReport(a).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let c=t;var r=URL.createObjectURL(c);window.open(r,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(v(N),v(F),v(w),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-show"]],standalone:!1,decls:199,vars:17,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"col-md-4"],["for","context_analysis"],["class","border p-2 mb-3",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],[1,"text-muted",2,"text-align","justify","font-style","normal"],[3,"innerHTML"],["for","estimated_project_duration"],[1,"mt-3","text-end"],["cButton","","color","light",1,"text-dark","btn-sm",3,"click"]],template:function(t,r){t&1&&(d(0,Ki,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div"),e(10,`

          `),n(11,"fieldset",3),e(12,`
            `),n(13,"legend",4)(14,"h6",5),e(15,"GENERAL INFORMATION"),i()(),e(16,`
            `),n(17,"div",6),e(18,`
              `),n(19,"div",7),e(20,`
                `),n(21,"div",2),e(22,`
                  `),n(23,"label",8),e(24,"Company:"),i(),e(25,`
                  `),d(26,Yi,2,1,"div",9),e(27,`
                `),i(),e(28,`
              `),i(),e(29,`
              `),n(30,"div",7),e(31,`
                `),n(32,"div",2),e(33,`
                  `),n(34,"label",8),e(35,"Nature of Application:"),i(),e(36,`
                  `),d(37,Ji,2,1,"div",9),e(38,`
                `),i(),e(39,`
              `),i(),e(40,`
              `),n(41,"div",10),e(42,`
                `),n(43,"div",2),e(44,`
                  `),n(45,"label",8),e(46,"Project Brief:"),i(),e(47,`
                  `),n(48,"div",11),e(49),i(),e(50,`
                `),i(),e(51,`
              `),i(),e(52,`
            `),i(),e(53,`
          `),i(),e(54,`
          `),n(55,"fieldset",3),e(56,`
            `),n(57,"legend",4)(58,"h6",5),e(59,"DETAILED PLAN"),i()(),e(60,`
            `),n(61,"div",6),e(62,`
              `),n(63,"div",12),e(64,`
                `),n(65,"div",2),e(66,`
                  `),n(67,"label",13),e(68,"Indemnity Form:"),i(),e(69,`
                  `),d(70,Qi,5,2,"div",0),e(71,`
                `),i(),e(72,`
              `),i(),e(73,`
              `),n(74,"div",12),e(75,`
                `),n(76,"div",2),e(77,`
                  `),n(78,"label",13),e(79,"Architectural Design:"),i(),e(80,`
                  `),d(81,Xi,5,2,"div",0),e(82,`
                `),i(),e(83,`
              `),i(),e(84,`
              `),n(85,"div",12),e(86,`
                `),n(87,"div",2),e(88,`
                  `),n(89,"label",13),e(90,"Structural Design:"),i(),e(91,`
                  `),d(92,Zi,5,2,"div",0),e(93,`
                `),i(),e(94,`
              `),i(),e(95,`
              `),n(96,"div",12),e(97,`
                `),n(98,"div",2),e(99,`
                  `),n(100,"label",13),e(101,"Electrical Design:"),i(),e(102,`
                  `),d(103,en,5,2,"div",0),e(104,`
                `),i(),e(105,`
              `),i(),e(106,`
              `),n(107,"div",12),e(108,`
                `),n(109,"div",2),e(110,`
                  `),n(111,"label",13),e(112,"ICT Design:"),i(),e(113,`
                  `),d(114,tn,5,2,"div",0),e(115,`
                `),i(),e(116,`
              `),i(),e(117,`
              `),n(118,"div",12),e(119,`
                `),n(120,"div",2),e(121,`
                  `),n(122,"label",13),e(123,"Mechanical Design:"),i(),e(124,`
                  `),d(125,nn,5,2,"div",0),e(126,`
                `),i(),e(127,`
              `),i(),e(128,`
              `),n(129,"div",12),e(130,`
                `),n(131,"div",2),e(132,`
                  `),n(133,"label",13),e(134,"Landscaping Design:"),i(),e(135,`
                  `),d(136,rn,5,2,"div",0),e(137,`
                `),i(),e(138,`
              `),i(),e(139,`
              `),n(140,"div",12),e(141,`
                `),n(142,"div",2),e(143,`
                  `),n(144,"label",13),e(145,"Site Access Plan:"),i(),e(146,`
                  `),d(147,on,5,2,"div",0),e(148,`
                `),i(),e(149,`
              `),i(),e(150,`
              `),n(151,"div",12),e(152,`
                `),n(153,"div",2),e(154,`
                  `),n(155,"label",13),e(156,"Other Relevant Documents:"),i(),e(157,`
                  `),d(158,an,5,2,"div",0),e(159,`
                `),i(),e(160,`
              `),i(),e(161,`
              `),n(162,"div",12),e(163,`
                `),n(164,"div",2),e(165,`
                  `),n(166,"label",13),e(167,"Green Certification Registration:"),i(),e(168,`
                  `),d(169,ln,5,2,"div",0),e(170,`
                `),i(),e(171,`
              `),i(),e(172,`
              `),n(173,"div",12),e(174,`
                `),n(175,"div",2),e(176,`
                  `),n(177,"label",13),e(178,"NEMA Project Report:"),i(),e(179,`
                  `),d(180,mn,5,2,"div",0),e(181,`
                `),i(),e(182,`
              `),i(),e(183,`
            `),i(),e(184,`
          `),i(),e(185,`
          `),d(186,sn,158,10,"fieldset",14),e(187,`

          `),n(188,"div",15),e(189,`
            `),n(190,"button",16),e(191,"Cancel"),i(),e(192,`
            `),e(193,`
          `),i(),e(194,`
        `),i(),e(195,`

      `),i(),e(196,`
    `),i(),e(197,`
  `),i(),e(198,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(26),l("ngIf",r.item.investor),m(11),l("ngIf",r.item.type),m(12),S(r.item.project_brief),m(21),l("ngIf",r.item.indemnity_form),m(11),l("ngIf",r.item.architectural_design),m(11),l("ngIf",r.item.structural_design),m(11),l("ngIf",r.item.electrical_design),m(11),l("ngIf",r.item.ict_design),m(11),l("ngIf",r.item.mechanical_design),m(11),l("ngIf",r.item.landscaping_design),m(11),l("ngIf",r.item.site_access_plan),m(11),l("ngIf",r.item.other_relevant_documents),m(11),l("ngIf",r.item.green_certification_registration),m(11),l("ngIf",r.item.nema_project_report),m(6),l("ngIf",!r.mAppContextService.hasRoles(C(16,$i))))},dependencies:[T,M,R,A,te,Q,ie,ne],encapsulation:2})}};var Tt=o=>({"is-invalid":o});function cn(o,a){o&1&&y(0,"app-progress")}function pn(o,a){if(o&1&&(n(0,"option",15),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function _n(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function un(o,a){if(o&1&&(n(0,"div",16),d(1,_n,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function gn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function vn(o,a){if(o&1&&(n(0,"div",16),d(1,gn,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Ne=class o{constructor(a,t,r,c,p,s){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=c;this.fb=p;this.route=s;this.mProgress=f(!1);this.item={};this.mEditor=re;this.itemForm=this.fb.group({detailed_plan_status_id:["",g.required],remarks:["",g.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=f(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=f(!0),this.mDetailedDesignService.plannerDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=f(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=f(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=f(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(v(w),v(N),v(F),v(W),v(z),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-planner-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(d(0,cn,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),d(11,pn,2,3,"option",8),i(),d(12,un,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),i(),y(17,"ckeditor",11),d(18,vn,2,1,"div",9),i()()(),n(19,"div",12)(20,"button",13),e(21,"Cancel"),i(),n(22,"button",14),e(23,"Submit"),i()()()()),t&2){let c,p;l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",u(10,Tt,((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.dirty)||((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.touched))),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(12,Tt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[B,J,T,M,R,A,L,le,me,ae,j,V,G,H,se],encapsulation:2})}};var ye=()=>[1],xn=()=>[12],yn=()=>[13],hn=()=>[14],Sn=()=>[9],Cn=()=>[15],bn=()=>[16],En=()=>[18],Fn=()=>[19],E=o=>({"is-invalid":o});function Pn(o,a){o&1&&y(0,"app-progress")}function In(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function Dn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Tn(o,a){if(o&1&&(n(0,"div",23),d(1,Dn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("architect_status_id"))==null||t.errors==null?null:t.errors.required)}}function wn(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function Rn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Nn(o,a){if(o&1&&(n(0,"div",23),d(1,Rn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("architect_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function qn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Mn(o,a){if(o&1&&(n(0,"div",23),d(1,qn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("architect_report").errors)==null?null:t.required)}}function An(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Architect"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",13),e(9,"Status:"),i(),n(10,"select",14)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,In,2,3,"option",16),i(),d(14,Tn,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",18),e(18,"Reviewed By:"),i(),n(19,"select",19)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,wn,2,3,"option",16),i(),d(23,Nn,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",20),e(27,"Comments:"),i(),n(28,"ckeditor",21),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.architect_report,c)||(p.item.architect_report=c),I(c)}),i(),d(29,Mn,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("architect_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("architect_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("architect_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("architect_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("architect_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("architect_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("architect_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("architect_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("architect_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("architect_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("architect_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("architect_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.architect_report),l("ngClass",u(15,E,s.itemForm.get("architect_report").invalid&&(s.itemForm.get("architect_report").dirty||s.itemForm.get("architect_report").touched))),m(),l("ngIf",s.itemForm.get("architect_report").invalid&&(s.itemForm.get("architect_report").dirty||s.itemForm.get("architect_report").touched))}}function kn(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function Bn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function On(o,a){if(o&1&&(n(0,"div",23),d(1,Bn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("structural_engineer_status_id"))==null||t.errors==null?null:t.errors.required)}}function jn(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function Vn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ln(o,a){if(o&1&&(n(0,"div",23),d(1,Vn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("structural_engineer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function Hn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Gn(o,a){if(o&1&&(n(0,"div",23),d(1,Hn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("structural_engineer_report").errors)==null?null:t.required)}}function Wn(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Structural Engineer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",24),e(9,"Status:"),i(),n(10,"select",25)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,kn,2,3,"option",16),i(),d(14,On,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",26),e(18,"Reviewed By:"),i(),n(19,"select",27)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,jn,2,3,"option",16),i(),d(23,Ln,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",28),e(27,"Comments:"),i(),n(28,"ckeditor",29),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.structural_engineer_report,c)||(p.item.structural_engineer_report=c),I(c)}),i(),d(29,Gn,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("structural_engineer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("structural_engineer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("structural_engineer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("structural_engineer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("structural_engineer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("structural_engineer_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("structural_engineer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("structural_engineer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("structural_engineer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("structural_engineer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("structural_engineer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("structural_engineer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.structural_engineer_report),l("ngClass",u(15,E,s.itemForm.get("structural_engineer_report").invalid&&(s.itemForm.get("structural_engineer_report").dirty||s.itemForm.get("structural_engineer_report").touched))),m(),l("ngIf",s.itemForm.get("structural_engineer_report").invalid&&(s.itemForm.get("structural_engineer_report").dirty||s.itemForm.get("structural_engineer_report").touched))}}function zn(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function Un(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function $n(o,a){if(o&1&&(n(0,"div",23),d(1,Un,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("electrical_engineer_status_id"))==null||t.errors==null?null:t.errors.required)}}function Kn(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function Yn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Jn(o,a){if(o&1&&(n(0,"div",23),d(1,Yn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("electrical_engineer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function Qn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xn(o,a){if(o&1&&(n(0,"div",23),d(1,Qn,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("electrical_engineer_report").errors)==null?null:t.required)}}function Zn(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Electrical Engineer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",30),e(9,"Status:"),i(),n(10,"select",31)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,zn,2,3,"option",16),i(),d(14,$n,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",32),e(18,"Reviewed By:"),i(),n(19,"select",33)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,Kn,2,3,"option",16),i(),d(23,Jn,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",34),e(27,"Comments:"),i(),n(28,"ckeditor",35),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.electrical_engineer_report,c)||(p.item.electrical_engineer_report=c),I(c)}),i(),d(29,Xn,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("electrical_engineer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("electrical_engineer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("electrical_engineer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("electrical_engineer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("electrical_engineer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("electrical_engineer_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("electrical_engineer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("electrical_engineer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("electrical_engineer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("electrical_engineer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("electrical_engineer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("electrical_engineer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.electrical_engineer_report),l("ngClass",u(15,E,s.itemForm.get("electrical_engineer_report").invalid&&(s.itemForm.get("electrical_engineer_report").dirty||s.itemForm.get("electrical_engineer_report").touched))),m(),l("ngIf",s.itemForm.get("electrical_engineer_report").invalid&&(s.itemForm.get("electrical_engineer_report").dirty||s.itemForm.get("electrical_engineer_report").touched))}}function er(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function tr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ir(o,a){if(o&1&&(n(0,"div",23),d(1,tr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("ict_engineer_status_id"))==null||t.errors==null?null:t.errors.required)}}function nr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function rr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function or(o,a){if(o&1&&(n(0,"div",23),d(1,rr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("ict_engineer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function ar(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function lr(o,a){if(o&1&&(n(0,"div",23),d(1,ar,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("ict_engineer_report").errors)==null?null:t.required)}}function mr(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"ICT Engineer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",36),e(9,"Status:"),i(),n(10,"select",37)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,er,2,3,"option",16),i(),d(14,ir,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",38),e(18,"Reviewed By:"),i(),n(19,"select",39)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,nr,2,3,"option",16),i(),d(23,or,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",40),e(27,"Comments:"),i(),n(28,"ckeditor",41),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.ict_engineer_report,c)||(p.item.ict_engineer_report=c),I(c)}),i(),d(29,lr,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("ict_engineer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("ict_engineer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("ict_engineer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("ict_engineer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("ict_engineer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("ict_engineer_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("ict_engineer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("ict_engineer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("ict_engineer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("ict_engineer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("ict_engineer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("ict_engineer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.ict_engineer_report),l("ngClass",u(15,E,s.itemForm.get("ict_engineer_report").invalid&&(s.itemForm.get("ict_engineer_report").dirty||s.itemForm.get("ict_engineer_report").touched))),m(),l("ngIf",s.itemForm.get("ict_engineer_report").invalid&&(s.itemForm.get("ict_engineer_report").dirty||s.itemForm.get("ict_engineer_report").touched))}}function sr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function dr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function cr(o,a){if(o&1&&(n(0,"div",23),d(1,dr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("mechanical_engineer_status_id"))==null||t.errors==null?null:t.errors.required)}}function pr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function _r(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ur(o,a){if(o&1&&(n(0,"div",23),d(1,_r,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("mechanical_engineer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function gr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function vr(o,a){if(o&1&&(n(0,"div",23),d(1,gr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("mechanical_engineer_report").errors)==null?null:t.required)}}function fr(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Mechanical Engineer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",42),e(9,"Status:"),i(),n(10,"select",43)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,sr,2,3,"option",16),i(),d(14,cr,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",44),e(18,"Reviewed By:"),i(),n(19,"select",45)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,pr,2,3,"option",16),i(),d(23,ur,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",46),e(27,"Comments:"),i(),n(28,"ckeditor",47),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.mechanical_engineer_report,c)||(p.item.mechanical_engineer_report=c),I(c)}),i(),d(29,vr,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("mechanical_engineer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("mechanical_engineer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("mechanical_engineer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("mechanical_engineer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("mechanical_engineer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("mechanical_engineer_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("mechanical_engineer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("mechanical_engineer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("mechanical_engineer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("mechanical_engineer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("mechanical_engineer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("mechanical_engineer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.mechanical_engineer_report),l("ngClass",u(15,E,s.itemForm.get("mechanical_engineer_report").invalid&&(s.itemForm.get("mechanical_engineer_report").dirty||s.itemForm.get("mechanical_engineer_report").touched))),m(),l("ngIf",s.itemForm.get("mechanical_engineer_report").invalid&&(s.itemForm.get("mechanical_engineer_report").dirty||s.itemForm.get("mechanical_engineer_report").touched))}}function xr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function yr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function hr(o,a){if(o&1&&(n(0,"div",23),d(1,yr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("environment_officer_status_id"))==null||t.errors==null?null:t.errors.required)}}function Sr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function Cr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function br(o,a){if(o&1&&(n(0,"div",23),d(1,Cr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("environment_officer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function Er(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Fr(o,a){if(o&1&&(n(0,"div",23),d(1,Er,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("environment_health_and_safety_report").errors)==null?null:t.required)}}function Pr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ir(o,a){if(o&1&&(n(0,"div",23),d(1,Pr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("professional_sustainability_report").errors)==null?null:t.required)}}function Dr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Tr(o,a){if(o&1&&(n(0,"div",23),d(1,Dr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("landscaping_report").errors)==null?null:t.required)}}function wr(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Environment Health & SafetyOfficer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",48),e(9,"Status:"),i(),n(10,"select",49),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.environment_officer_status_id,c)||(p.item.environment_officer_status_id=c),I(c)}),n(11,"option",15),e(12,"--- Select status ---"),i(),d(13,xr,2,3,"option",16),i(),d(14,hr,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",50),e(18,"Reviewed By:"),i(),n(19,"select",51),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.environment_officer_reviewer_id,c)||(p.item.environment_officer_reviewer_id=c),I(c)}),n(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,Sr,2,3,"option",16),i(),d(23,br,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",52),e(27,"Environment Health and Safety Comments:"),i(),n(28,"ckeditor",53),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.environment_health_and_safety_report,c)||(p.item.environment_health_and_safety_report=c),I(c)}),i(),d(29,Fr,2,1,"div",17),i()(),n(30,"div",10)(31,"div",12)(32,"label",54),e(33,"Professional Sustainability Comments:"),i(),n(34,"ckeditor",55),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.professional_sustainability_report,c)||(p.item.professional_sustainability_report=c),I(c)}),i(),d(35,Ir,2,1,"div",17),i()(),n(36,"div",10)(37,"div",12)(38,"label",56),e(39,"Landscaping Comments:"),i(),n(40,"ckeditor",57),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.landscaping_report,c)||(p.item.landscaping_report=c),I(c)}),i(),d(41,Tr,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),$("ngModel",s.item.environment_officer_status_id),l("ngClass",u(23,E,((t=s.itemForm.get("environment_officer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("environment_officer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("environment_officer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("environment_officer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("environment_officer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("environment_officer_status_id"))==null?null:r.touched))),m(5),$("ngModel",s.item.environment_officer_reviewer_id),l("ngClass",u(25,E,((c=s.itemForm.get("environment_officer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("environment_officer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("environment_officer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("environment_officer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("environment_officer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("environment_officer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.environment_health_and_safety_report),l("ngClass",u(27,E,s.itemForm.get("environment_health_and_safety_report").invalid&&(s.itemForm.get("environment_health_and_safety_report").dirty||s.itemForm.get("environment_health_and_safety_report").touched))),m(),l("ngIf",s.itemForm.get("environment_health_and_safety_report").invalid&&(s.itemForm.get("environment_health_and_safety_report").dirty||s.itemForm.get("environment_health_and_safety_report").touched)),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.professional_sustainability_report),l("ngClass",u(29,E,s.itemForm.get("professional_sustainability_report").invalid&&(s.itemForm.get("professional_sustainability_report").dirty||s.itemForm.get("professional_sustainability_report").touched))),m(),l("ngIf",s.itemForm.get("professional_sustainability_report").invalid&&(s.itemForm.get("professional_sustainability_report").dirty||s.itemForm.get("professional_sustainability_report").touched)),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.landscaping_report),l("ngClass",u(31,E,s.itemForm.get("landscaping_report").invalid&&(s.itemForm.get("landscaping_report").dirty||s.itemForm.get("landscaping_report").touched))),m(),l("ngIf",s.itemForm.get("landscaping_report").invalid&&(s.itemForm.get("landscaping_report").dirty||s.itemForm.get("landscaping_report").touched))}}function Rr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function Nr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function qr(o,a){if(o&1&&(n(0,"div",23),d(1,Nr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("streetscape_engineer_status_id"))==null||t.errors==null?null:t.errors.required)}}function Mr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function Ar(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function kr(o,a){if(o&1&&(n(0,"div",23),d(1,Ar,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("streetscape_engineer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function Br(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Or(o,a){if(o&1&&(n(0,"div",23),d(1,Br,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("civil_works_design_report").errors)==null?null:t.required)}}function jr(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Streetscape Engineer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",58),e(9,"Status:"),i(),n(10,"select",59)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,Rr,2,3,"option",16),i(),d(14,qr,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",60),e(18,"Reviewed By:"),i(),n(19,"select",61)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,Mr,2,3,"option",16),i(),d(23,kr,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",62),e(27,"Comments:"),i(),n(28,"ckeditor",63),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.civil_works_design_report,c)||(p.item.civil_works_design_report=c),I(c)}),i(),d(29,Or,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("streetscape_engineer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("streetscape_engineer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("streetscape_engineer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("streetscape_engineer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("streetscape_engineer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("streetscape_engineer_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("streetscape_engineer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("streetscape_engineer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("streetscape_engineer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("streetscape_engineer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("streetscape_engineer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("streetscape_engineer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.civil_works_design_report),l("ngClass",u(15,E,s.itemForm.get("civil_works_design_report").invalid&&(s.itemForm.get("civil_works_design_report").dirty||s.itemForm.get("civil_works_design_report").touched))),m(),l("ngIf",s.itemForm.get("civil_works_design_report").invalid&&(s.itemForm.get("civil_works_design_report").dirty||s.itemForm.get("civil_works_design_report").touched))}}function Vr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function Lr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Hr(o,a){if(o&1&&(n(0,"div",23),d(1,Lr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("water_engineer_status_id"))==null||t.errors==null?null:t.errors.required)}}function Gr(o,a){if(o&1&&(n(0,"option",22),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.name)}}function Wr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function zr(o,a){if(o&1&&(n(0,"div",23),d(1,Wr,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("water_engineer_reviewer_id"))==null||t.errors==null?null:t.errors.required)}}function Ur(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function $r(o,a){if(o&1&&(n(0,"div",23),d(1,Ur,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("water_and_sanitation_designs_report").errors)==null?null:t.required)}}function Kr(o,a){if(o&1){let t=k();n(0,"div",10)(1,"fieldset",2)(2,"legend",3)(3,"h6",4),e(4,"Water & Sanitation Engineer"),i()(),n(5,"div",5)(6,"div",11)(7,"div",12)(8,"label",64),e(9,"Status:"),i(),n(10,"select",65)(11,"option",15),e(12,"--- Select status ---"),i(),d(13,Vr,2,3,"option",16),i(),d(14,Hr,2,1,"div",17),i()(),n(15,"div",11)(16,"div",12)(17,"label",66),e(18,"Reviewed By:"),i(),n(19,"select",67)(20,"option",15),e(21,"--- Select reviewer ---"),i(),d(22,Gr,2,3,"option",16),i(),d(23,zr,2,1,"div",17),i()(),n(24,"div",10)(25,"div",12)(26,"label",68),e(27,"Comments:"),i(),n(28,"ckeditor",69),Y("ngModelChange",function(c){P(t);let p=_();return K(p.item.water_and_sanitation_designs_report,c)||(p.item.water_and_sanitation_designs_report=c),I(c)}),i(),d(29,$r,2,1,"div",17),i()()()()()}if(o&2){let t,r,c,p,s=_();m(10),l("ngClass",u(11,E,((t=s.itemForm.get("water_engineer_status_id"))==null?null:t.invalid)&&(((t=s.itemForm.get("water_engineer_status_id"))==null?null:t.dirty)||((t=s.itemForm.get("water_engineer_status_id"))==null?null:t.touched)))),m(3),l("ngForOf",s.mProfessionalReviewStatuses),m(),l("ngIf",((r=s.itemForm.get("water_engineer_status_id"))==null?null:r.invalid)&&(((r=s.itemForm.get("water_engineer_status_id"))==null?null:r.dirty)||((r=s.itemForm.get("water_engineer_status_id"))==null?null:r.touched))),m(5),l("ngClass",u(13,E,((c=s.itemForm.get("water_engineer_reviewer_id"))==null?null:c.invalid)&&(((c=s.itemForm.get("water_engineer_reviewer_id"))==null?null:c.dirty)||((c=s.itemForm.get("water_engineer_reviewer_id"))==null?null:c.touched)))),m(3),l("ngForOf",s.mProfessionals),m(),l("ngIf",((p=s.itemForm.get("water_engineer_reviewer_id"))==null?null:p.invalid)&&(((p=s.itemForm.get("water_engineer_reviewer_id"))==null?null:p.dirty)||((p=s.itemForm.get("water_engineer_reviewer_id"))==null?null:p.touched))),m(5),l("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig),$("ngModel",s.item.water_and_sanitation_designs_report),l("ngClass",u(15,E,s.itemForm.get("water_and_sanitation_designs_report").invalid&&(s.itemForm.get("water_and_sanitation_designs_report").dirty||s.itemForm.get("water_and_sanitation_designs_report").touched))),m(),l("ngIf",s.itemForm.get("water_and_sanitation_designs_report").invalid&&(s.itemForm.get("water_and_sanitation_designs_report").dirty||s.itemForm.get("water_and_sanitation_designs_report").touched))}}var Me=class o{constructor(a,t,r,c,p,s){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=c;this.fb=p;this.route=s;this.mProgress=f(!1);this.item={};this.mEditor=re;this.itemForm=this.fb.group({architect_report:["",g.nullValidator],architect_reviewer_id:["",g.nullValidator],architect_status_id:["",g.nullValidator],structural_engineer_report:["",g.nullValidator],structural_engineer_reviewer_id:["",g.nullValidator],structural_engineer_status_id:["",g.nullValidator],electrical_engineer_report:["",g.nullValidator],electrical_engineer_reviewer_id:["",g.nullValidator],electrical_engineer_status_id:["",g.nullValidator],ict_engineer_report:["",g.nullValidator],ict_engineer_reviewer_id:["",g.nullValidator],ict_engineer_status_id:["",g.nullValidator],mechanical_engineer_report:["",g.nullValidator],mechanical_engineer_reviewer_id:["",g.nullValidator],mechanical_engineer_status_id:["",g.nullValidator],environment_health_and_safety_report:["",g.nullValidator],professional_sustainability_report:["",g.nullValidator],landscaping_report:["",g.nullValidator],environment_officer_reviewer_id:["",g.nullValidator],environment_officer_status_id:["",g.nullValidator],civil_works_design_report:["",g.nullValidator],streetscape_engineer_reviewer_id:["",g.nullValidator],streetscape_engineer_status_id:["",g.nullValidator],water_and_sanitation_designs_report:["",g.nullValidator],water_engineer_reviewer_id:["",g.nullValidator],water_engineer_status_id:["",g.nullValidator]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=f(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDetailedDesignService.unpaginatedItems().subscribe({next:a=>{a&&(this.mProfessionalReviewStatuses=a.data.professional_review_statuses,this.mProfessionals=a.data.professionals,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t={id:this.id,architect_report:a.architect_report,architect_reviewer_id:a.architect_reviewer_id,architect_status_id:a.architect_status_id,structural_engineer_report:a.structural_engineer_report,structural_engineer_reviewer_id:a.structural_engineer_reviewer_id,structural_engineer_status_id:a.structural_engineer_status_id,electrical_engineer_report:a.electrical_engineer_report,electrical_engineer_reviewer_id:a.electrical_engineer_reviewer_id,electrical_engineer_status_id:a.electrical_engineer_status_id,ict_engineer_report:a.ict_engineer_report,ict_engineer_reviewer_id:a.ict_engineer_reviewer_id,ict_engineer_status_id:a.ict_engineer_status_id,mechanical_engineer_report:a.mechanical_engineer_report,mechanical_engineer_reviewer_id:a.mechanical_engineer_reviewer_id,mechanical_engineer_status_id:a.mechanical_engineer_status_id,environment_health_and_safety_report:a.environment_health_and_safety_report,professional_sustainability_report:a.professional_sustainability_report,landscaping_report:a.landscaping_report,environment_officer_reviewer_id:a.environment_officer_reviewer_id,environment_officer_status_id:a.environment_officer_status_id,civil_works_design_report:a.civil_works_design_report,streetscape_engineer_reviewer_id:a.streetscape_engineer_reviewer_id,streetscape_engineer_status_id:a.streetscape_engineer_status_id,water_and_sanitation_designs_report:a.water_and_sanitation_designs_report,water_engineer_reviewer_id:a.water_engineer_reviewer_id,water_engineer_status_id:a.water_engineer_status_id};this.mProgress=f(!0),this.mDetailedDesignService.professionalRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=f(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=f(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(v(w),v(N),v(F),v(W),v(z),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-professional-recommendation"]],standalone:!1,decls:22,vars:27,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],["class","col-md-12",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[1,"col-md-12"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","architect_status_id",1,"col-form-label","required"],["formControlName","architect_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","architect_reviewer_id",1,"col-form-label","required"],["formControlName","architect_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","architect_report",1,"col-form-label","required"],["formControlName","architect_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","structural_engineer_status_id",1,"col-form-label","required"],["formControlName","structural_engineer_status_id","type","text",1,"form-control",3,"ngClass"],["for","structural_engineer_reviewer_id",1,"col-form-label","required"],["formControlName","structural_engineer_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","structural_engineer_report",1,"col-form-label","required"],["formControlName","structural_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","electrical_engineer_status_id",1,"col-form-label","required"],["formControlName","electrical_engineer_status_id","type","text",1,"form-control",3,"ngClass"],["for","electrical_engineer_reviewer_id",1,"col-form-label","required"],["formControlName","electrical_engineer_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","electrical_engineer_report",1,"col-form-label","required"],["formControlName","electrical_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","ict_engineer_status_id",1,"col-form-label","required"],["formControlName","ict_engineer_status_id","type","text",1,"form-control",3,"ngClass"],["for","ict_engineer_reviewer_id",1,"col-form-label","required"],["formControlName","ict_engineer_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","ict_engineer_report",1,"col-form-label","required"],["formControlName","ict_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","mechanical_engineer_status_id",1,"col-form-label","required"],["formControlName","mechanical_engineer_status_id","type","text",1,"form-control",3,"ngClass"],["for","mechanical_engineer_reviewer_id",1,"col-form-label","required"],["formControlName","mechanical_engineer_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","mechanical_engineer_report",1,"col-form-label","required"],["formControlName","mechanical_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","environment_officer_status_id",1,"col-form-label","required"],["formControlName","environment_officer_status_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","environment_officer_reviewer_id",1,"col-form-label","required"],["formControlName","environment_officer_reviewer_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","environment_health_and_safety_report",1,"col-form-label","required"],["formControlName","environment_health_and_safety_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","professional_sustainability_report",1,"col-form-label","required"],["formControlName","professional_sustainability_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","landscaping_report",1,"col-form-label","required"],["formControlName","landscaping_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","streetscape_engineer_status_id",1,"col-form-label","required"],["formControlName","streetscape_engineer_status_id","type","text",1,"form-control",3,"ngClass"],["for","streetscape_engineer_reviewer_id",1,"col-form-label","required"],["formControlName","streetscape_engineer_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","civil_works_design_report",1,"col-form-label","required"],["formControlName","civil_works_design_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","water_engineer_status_id",1,"col-form-label","required"],["formControlName","water_engineer_status_id","type","text",1,"form-control",3,"ngClass"],["for","water_engineer_reviewer_id",1,"col-form-label","required"],["formControlName","water_engineer_reviewer_id","type","text",1,"form-control",3,"ngClass"],["for","water_and_sanitation_designs_report",1,"col-form-label","required"],["formControlName","water_and_sanitation_designs_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"]],template:function(t,r){t&1&&(d(0,Pn,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),y(3,"hr"),n(4,"fieldset",2)(5,"legend",3)(6,"h6",4),e(7,"PROFESSIONAL REVIEWS"),i()(),n(8,"div",5),d(9,An,30,17,"div",6)(10,Wn,30,17,"div",6)(11,Zn,30,17,"div",6)(12,mr,30,17,"div",6)(13,fr,30,17,"div",6)(14,wr,42,33,"div",6)(15,jr,30,17,"div",6)(16,Kr,30,17,"div",6),i()(),n(17,"div",7)(18,"button",8),e(19,"Cancel"),i(),n(20,"button",9),e(21,"Submit"),i()()()()),t&2&&(l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(7),l("ngIf",r.mAppContextService.hasRoles(C(11,ye))||r.mAppContextService.hasRoles(C(12,xn))),m(),l("ngIf",r.mAppContextService.hasRoles(C(13,ye))||r.mAppContextService.hasRoles(C(14,yn))),m(),l("ngIf",r.mAppContextService.hasRoles(C(15,ye))||r.mAppContextService.hasRoles(C(16,hn))),m(),l("ngIf",r.mAppContextService.hasRoles(C(17,ye))||r.mAppContextService.hasRoles(C(18,Sn))),m(),l("ngIf",r.mAppContextService.hasRoles(C(19,ye))||r.mAppContextService.hasRoles(C(20,Cn))),m(),l("ngIf",r.mAppContextService.hasRoles(C(21,ye))||r.mAppContextService.hasRoles(C(22,bn))),m(),l("ngIf",r.mAppContextService.hasRoles(C(23,ye))||r.mAppContextService.hasRoles(C(24,En))),m(),l("ngIf",r.mAppContextService.hasRoles(C(25,ye))||r.mAppContextService.hasRoles(C(26,Fn))),m(4),l("disabled",r.itemForm.invalid))},dependencies:[B,J,T,M,R,A,L,le,me,ae,j,V,G,H,se],encapsulation:2})}};var wt=o=>({"is-invalid":o});function Jr(o,a){o&1&&y(0,"app-progress")}function Qr(o,a){if(o&1&&(n(0,"option",15),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function Xr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Zr(o,a){if(o&1&&(n(0,"div",16),d(1,Xr,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function eo(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function to(o,a){if(o&1&&(n(0,"div",16),d(1,eo,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Ae=class o{constructor(a,t,r,c,p,s){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=c;this.fb=p;this.route=s;this.mProgress=f(!1);this.item={};this.mEditor=re;this.itemForm=this.fb.group({detailed_plan_status_id:["",g.required],remarks:["",g.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=f(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=f(!0),this.mDetailedDesignService.detailedDesignReportRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=f(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=f(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=f(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(v(w),v(N),v(F),v(W),v(z),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-design-report"]],standalone:!1,decls:26,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(d(0,Jr,1,0,"app-progress",0),n(1,"div"),y(2,"app-show"),i(),n(3,"div")(4,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(5,"div",2)(6,"div",3)(7,"div",4)(8,"label",5),e(9,"Status:"),i(),n(10,"select",6)(11,"option",7),e(12,"--- Select status ---"),i(),d(13,Qr,2,3,"option",8),i(),d(14,Zr,2,1,"div",9),i()(),n(15,"div",3)(16,"div",4)(17,"label",10),e(18,"Additional Remarks:"),i(),y(19,"ckeditor",11),d(20,to,2,1,"div",9),i()()(),n(21,"div",12)(22,"button",13),e(23,"Cancel"),i(),n(24,"button",14),e(25,"Submit"),i()()()()),t&2){let c,p;l("ngIf",r.mProgress()),m(4),l("formGroup",r.itemForm),m(6),l("ngClass",u(10,wt,((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.dirty)||((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.touched))),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(12,wt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[B,J,T,M,R,A,L,le,me,ae,j,V,G,H,se,Ce],encapsulation:2})}};var Ge=o=>({"is-invalid":o});function no(o,a){o&1&&y(0,"app-progress")}function ro(o,a){if(o&1&&(n(0,"option",16),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),S(t.alias)}}function oo(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ao(o,a){if(o&1&&(n(0,"div",17),d(1,oo,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function lo(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function mo(o,a){if(o&1&&(n(0,"div",17),d(1,lo,2,0,"div",0),i()),o&2){let t,r=_(2);m(),l("ngIf",(t=r.itemForm.get("board_resolutions").errors)==null?null:t.required)}}function so(o,a){if(o&1){let t=k();n(0,"div",3)(1,"div",4)(2,"label",18),e(3,"Board Resolutions:"),i(),n(4,"input",19),h("change",function(c){P(t);let p=_();return I(p.onBoardResolution(c))}),i(),d(5,mo,2,1,"div",9),i()()}if(o&2){let t=_();m(4),l("ngClass",u(2,Ge,t.itemForm.get("board_resolutions").invalid&&(t.itemForm.get("board_resolutions").dirty||t.itemForm.get("board_resolutions").touched))),m(),l("ngIf",t.itemForm.get("board_resolutions").invalid&&(t.itemForm.get("board_resolutions").dirty||t.itemForm.get("board_resolutions").touched))}}function co(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function po(o,a){if(o&1&&(n(0,"div",17),d(1,co,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var ke=class o{constructor(a,t,r,c,p,s){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=c;this.fb=p;this.route=s;this.mProgress=f(!1);this.item={};this.mEditor=re;this.itemForm=this.fb.group({detailed_plan_status_id:["",g.required],board_resolutions:["",g.nullValidator],remarks:["",g.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=f(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}onSubmit(a){let t=new FormData;t.append("detailed_plan_status_id",a.detailed_plan_status_id),this.board_resolution_file?t.append("board_resolutions",this.board_resolution_file,this.board_resolution_file.name):t.append("board_resolutions",""),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.boardReviewDetailedPlanItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=f(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=f(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=f(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}onBoardResolution(a){if(a.target.value){let t=a.target.files[0];this.board_resolution_file=t}}static{this.\u0275fac=function(t){return new(t||o)(v(w),v(N),v(F),v(W),v(z),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-board-review"]],standalone:!1,decls:25,vars:15,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","board_resolutions",1,"col-form-label","required"],["formControlName","board_resolutions","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,r){if(t&1&&(d(0,no,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),d(11,ro,2,3,"option",8),i(),d(12,ao,2,1,"div",9),i()(),d(13,so,6,4,"div",10),n(14,"div",3)(15,"div",4)(16,"label",11),e(17,"Additional Remarks:"),i(),y(18,"ckeditor",12),d(19,po,2,1,"div",9),i()()(),n(20,"div",13)(21,"button",14),e(22,"Cancel"),i(),n(23,"button",15),e(24,"Submit"),i()()()()),t&2){let c,p;l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",u(11,Ge,((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.dirty)||((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.touched))),m(),l("ngIf",r.itemForm.get("detailed_plan_status_id").value==9),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(13,Ge,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[B,J,T,M,R,A,L,le,me,oe,ae,j,V,G,H,se],encapsulation:2})}};var We=o=>({"is-invalid":o});function uo(o,a){o&1&&y(0,"app-progress")}function go(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=_();m(),l("href",x(t.item.notice_of_approval_url),b)}}function vo(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function fo(o,a){if(o&1&&(n(0,"div",16),d(1,vo,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("notice_of_approval").errors)==null?null:t.required)}}function xo(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=_();m(),l("href",x(t.item.permit_url),b)}}function yo(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ho(o,a){if(o&1&&(n(0,"div",16),d(1,yo,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("permit").errors)==null?null:t.required)}}function So(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Co(o,a){if(o&1&&(n(0,"div",16),d(1,So,2,0,"div",0),i()),o&2){let t,r=_();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Be=class o{constructor(a,t,r,c,p,s){this.mToastrService=a;this.mDetailedDesignService=t;this.router=r;this.fb=c;this.route=p;this.mAppContextService=s;this.mProgress=f(!1);this.item={};this.mEditor=re;this.itemForm=this.fb.group({notice_of_approval:["",g.required],permit:["",g.required],remarks:["",g.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=f(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=f(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=f(!1)}})}onSubmit(a){let t=new FormData;t.append("notice_of_approval",this.notice_of_approval_file||"",this.notice_of_approval_file?.name||""),t.append("permit",this.permit_file||"",this.permit_file?.name||""),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.permitItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=f(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=f(!1)}})}onConstructionPermitChange(a){if(a.target.value){let t=a.target.files[0];this.permit_file=t}}onNoticeOfApprovalChange(a){if(a.target.value){let t=a.target.files[0];this.notice_of_approval_file=t}}static{this.\u0275fac=function(t){return new(t||o)(v(w),v(N),v(W),v(z),v(O),v(F))}}static{this.\u0275cmp=D({type:o,selectors:[["app-permit"]],standalone:!1,decls:29,vars:19,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","notice_of_approval",1,"col-form-label","required"],["formControlName","notice_of_approval","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","permit",1,"col-form-label","required"],["formControlName","permit","type","file",1,"form-control",3,"change","ngClass"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(d(0,uo,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Notice of Approval: "),d(8,go,3,2,"span",0),i(),n(9,"input",6),h("change",function(p){return r.onNoticeOfApprovalChange(p)}),i(),d(10,fo,2,1,"div",7),i()(),n(11,"div",3)(12,"div",4)(13,"label",8),e(14,"Permit: "),d(15,xo,3,2,"span",0),i(),n(16,"input",9),h("change",function(p){return r.onConstructionPermitChange(p)}),i(),d(17,ho,2,1,"div",7),i()(),n(18,"div",3)(19,"div",4)(20,"label",10),e(21,"Additional Remarks:"),i(),y(22,"ckeditor",11),d(23,Co,2,1,"div",7),i()()(),n(24,"div",12)(25,"button",13),e(26,"Cancel"),i(),n(27,"button",14),e(28,"Submit"),i()()()()),t&2&&(l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngIf",r.item.notice_of_approval_url),m(),l("ngClass",u(13,We,r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched))),m(),l("ngIf",r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched)),m(5),l("ngIf",r.item.permit_url),m(),l("ngClass",u(15,We,r.itemForm.get("permit").invalid&&(r.itemForm.get("permit").dirty||r.itemForm.get("permit").touched))),m(),l("ngIf",r.itemForm.get("permit").invalid&&(r.itemForm.get("permit").dirty||r.itemForm.get("permit").touched)),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(17,We,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid))},dependencies:[B,T,M,R,A,L,oe,j,V,G,H,se],encapsulation:2})}};var be=()=>[1],Eo=()=>[2],Fo=()=>[10,11],Po=()=>[9,11,12,13,14,15,16,18,19],ze=()=>[10,11,12,17];function Io(o,a){o&1&&y(0,"app-progress")}function Do(o,a){if(o&1&&(n(0,"div",6),e(1,`
              `),n(2,"label",24),e(3,"Company:"),i(),e(4,`
              `),n(5,"div",8),e(6),i(),e(7,`
            `),i()),o&2){let t=_();m(6),S(t.item.investor==null?null:t.item.investor.name)}}function To(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.indemnity_form_url),b)}}function wo(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.architectural_design_url),b)}}function Ro(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.structural_design_url),b)}}function No(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.electrical_design_url),b)}}function qo(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.ict_design_url),b)}}function Mo(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.mechanical_design_url),b)}}function Ao(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.landscaping_design_url),b)}}function ko(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.site_access_plan_url),b)}}function Bo(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.other_relevant_documents_url),b)}}function Oo(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.green_certification_registration_url),b)}}function jo(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=_();m(2),l("href",x(t.item.nema_project_report_url),b)}}function Vo(o,a){o&1&&(n(0,"div"),e(1,`
              `),y(2,"app-create"),e(3,`
            `),i())}function Lo(o,a){o&1&&(n(0,"div"),e(1,`
              `),y(2,"app-planner-review"),e(3,`
            `),i())}function Ho(o,a){o&1&&(n(0,"div"),e(1,`
              `),y(2,"app-professional-recommendation"),e(3,`
            `),i())}function Go(o,a){o&1&&(n(0,"div"),e(1,`
              `),y(2,"app-design-report"),e(3,`
            `),i())}function Wo(o,a){o&1&&(n(0,"div"),e(1,`
              `),y(2,"app-board-review"),e(3,`
            `),i())}function zo(o,a){o&1&&(n(0,"div"),e(1,`
              `),y(2,"app-permit"),e(3,`
            `),i())}var Oe=class o{constructor(a,t,r,c){this.mConstructionPermitService=a;this.mAppContextService=t;this.mToastrService=r;this.route=c;this.item={};this.mProgress=f(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(t){return new(t||o)(v(Et),v(F),v(w),v(O))}}static{this.\u0275cmp=D({type:o,selectors:[["app-process"]],standalone:!1,decls:190,vars:32,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required1"],[1,"text-muted"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required1"],["for","architectural_design",1,"col-form-label","required1"],["for","structural_design",1,"col-form-label","required1"],["for","electrical_design",1,"col-form-label","required1"],["for","ict_design",1,"col-form-label","required1"],["for","mechanical_design",1,"col-form-label","required1"],["for","landscaping_design",1,"col-form-label","required1"],["for","signage_design",1,"col-form-label","required1"],["for","other_relevant_documents",1,"col-form-label","required1"],["for","green_certification_registration",1,"col-form-label","required1"],["for","nema_project_report",1,"col-form-label","required1"],["for","investor_id",1,"col-form-label","required1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(t,r){t&1&&(d(0,Io,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div",3),e(10,`
          `),n(11,"div",4),e(12,`
            `),d(13,Do,8,1,"div",5),e(14,`
          `),i(),e(15,`
          `),n(16,"div",4),e(17,`
            `),n(18,"div",6),e(19,`
              `),n(20,"label",7),e(21,"Project Brief:"),i(),e(22,`
              `),n(23,"div",8),e(24),i(),e(25,`
            `),i(),e(26,`
          `),i(),e(27,`
          `),n(28,"div",4),e(29,`
            `),n(30,"fieldset",9),e(31,`
              `),n(32,"legend",10)(33,"h6",11),e(34,"DETAILED PLAN"),i()(),e(35,`
              `),n(36,"div",3),e(37,`
                `),n(38,"div",12),e(39,`
                  `),n(40,"div",2),e(41,`
                    `),n(42,"label",13),e(43,"Indemnity Form:"),i(),e(44,`
                    `),d(45,To,5,2,"div",0),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
                `),n(49,"div",12),e(50,`
                  `),n(51,"div",6),e(52,`
                    `),n(53,"label",14),e(54,"Architectural Design:"),i(),e(55,`
                    `),d(56,wo,5,2,"div",0),e(57,`
                  `),i(),e(58,`
                `),i(),e(59,`
                `),n(60,"div",12),e(61,`
                  `),n(62,"div",6),e(63,`
                    `),n(64,"label",15),e(65,"Structural Design:"),i(),e(66,`
                    `),d(67,Ro,5,2,"div",0),e(68,`
                  `),i(),e(69,`
                `),i(),e(70,`
                `),n(71,"div",12),e(72,`
                  `),n(73,"div",6),e(74,`
                    `),n(75,"label",16),e(76,"Electrical Design:"),i(),e(77,`
                    `),d(78,No,5,2,"div",0),e(79,`
                  `),i(),e(80,`
                `),i(),e(81,`
                `),n(82,"div",12),e(83,`
                  `),n(84,"div",6),e(85,`
                    `),n(86,"label",17),e(87,"ICT Design:"),i(),e(88,`
                    `),d(89,qo,5,2,"div",0),e(90,`
                  `),i(),e(91,`
                `),i(),e(92,`
                `),n(93,"div",12),e(94,`
                  `),n(95,"div",6),e(96,`
                    `),n(97,"label",18),e(98,"Mechanical Design:"),i(),e(99,`
                    `),d(100,Mo,5,2,"div",0),e(101,`
                  `),i(),e(102,`
                `),i(),e(103,`
                `),n(104,"div",12),e(105,`
                  `),n(106,"div",6),e(107,`
                    `),n(108,"label",19),e(109,"Landscaping Design:"),i(),e(110,`
                    `),d(111,Ao,5,2,"div",0),e(112,`
                  `),i(),e(113,`
                `),i(),e(114,`
                `),n(115,"div",12),e(116,`
                  `),n(117,"div",6),e(118,`
                    `),n(119,"label",20),e(120,"Site Access Plan:"),i(),e(121,`
                    `),d(122,ko,5,2,"div",0),e(123,`
                  `),i(),e(124,`
                `),i(),e(125,`
                `),n(126,"div",4),e(127,`
                  `),n(128,"div",6),e(129,`
                    `),n(130,"label",21),e(131,"Other Relevant Documents:"),i(),e(132,`
                    `),d(133,Bo,5,2,"div",0),e(134,`
                  `),i(),e(135,`
                `),i(),e(136,`
                `),n(137,"div",12),e(138,`
                  `),n(139,"div",6),e(140,`
                    `),n(141,"label",22),e(142,"Green Certification Registration:"),i(),e(143,`
                    `),d(144,Oo,5,2,"div",0),e(145,`
                  `),i(),e(146,`
                `),i(),e(147,`
                `),n(148,"div",12),e(149,`
                  `),n(150,"div",6),e(151,`
                    `),n(152,"label",23),e(153,"NEMA Project Report:"),i(),e(154,`
                    `),d(155,jo,5,2,"div",0),e(156,`
                  `),i(),e(157,`
                `),i(),e(158,`
              `),i(),e(159,`
            `),i(),e(160,`
          `),i(),e(161,`
        `),i(),e(162,`

        `),n(163,"div",3),e(164,`
          `),n(165,"div",4),e(166,`
            `),e(167,`
            `),d(168,Vo,4,0,"div",0),e(169,`
            `),e(170,`
            `),d(171,Lo,4,0,"div",0),e(172,`
            `),e(173,`
            `),d(174,Ho,4,0,"div",0),e(175,`
            `),e(176,`
            `),d(177,Go,4,0,"div",0),e(178,`
            `),e(179,`
            `),d(180,Wo,4,0,"div",0),e(181,`
            `),e(182,`
            `),d(183,zo,4,0,"div",0),e(184,`
          `),i(),e(185,`
        `),i(),e(186,`

      `),i(),e(187,`
    `),i(),e(188,`
  `),i(),e(189,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(13),l("ngIf",r.item.investor),m(11),S(r.item.project_brief),m(21),l("ngIf",r.item.indemnity_form),m(11),l("ngIf",r.item.architectural_design),m(11),l("ngIf",r.item.structural_design),m(11),l("ngIf",r.item.electrical_design),m(11),l("ngIf",r.item.ict_design),m(11),l("ngIf",r.item.mechanical_design),m(11),l("ngIf",r.item.landscaping_design),m(11),l("ngIf",r.item.site_access_plan),m(11),l("ngIf",r.item.other_relevant_documents),m(11),l("ngIf",r.item.green_certification_registration),m(11),l("ngIf",r.item.nema_project_report),m(13),l("ngIf",r.item.detailed_plan_status_id==1&&(r.mAppContextService.hasRoles(C(20,be))||r.mAppContextService.hasRoles(C(21,Eo)))),m(3),l("ngIf",r.item.detailed_plan_status_id==3&&(r.mAppContextService.hasRoles(C(22,be))||r.mAppContextService.hasRoles(C(23,Fo)))),m(3),l("ngIf",r.item.detailed_plan_status_id==4&&(r.mAppContextService.hasRoles(C(24,be))||r.mAppContextService.hasRoles(C(25,Po)))),m(3),l("ngIf",r.item.detailed_plan_status_id==5&&(r.mAppContextService.hasRoles(C(26,be))||r.mAppContextService.hasRoles(C(27,ze)))),m(3),l("ngIf",(r.item.detailed_plan_status_id==6||r.item.detailed_plan_status_id==8)&&(r.mAppContextService.hasRoles(C(28,be))||r.mAppContextService.hasRoles(C(29,ze)))),m(3),l("ngIf",r.item.detailed_plan_status_id==9&&(r.mAppContextService.hasRoles(C(30,be))||r.mAppContextService.hasRoles(C(31,ze)))))},dependencies:[T,R,te,Q,ie,ne,Se,Ne,Me,Ae,ke,Be],encapsulation:2})}};var Uo=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:we,data:{title:"Construction Permits / Detailed Designs"}},{path:"create",component:Se,data:{title:"Construction Permits / Detailed Designs / Create"}},{path:"edit/:id",component:Re,data:{title:"Construction Permits / Detailed Designs / Edit"}},{path:"show/:id",component:Ce,data:{title:"Construction Permits / Detailed Designs / Show"}},{path:"process/:id",component:Oe,data:{title:"Construction Permits / Detailed Designs / Process"}}],je=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Pe({type:o})}static{this.\u0275inj=Fe({imports:[De,He.forChild(Uo),He]})}};var Rt=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Pe({type:o})}static{this.\u0275inj=Fe({imports:[De,je,ht,ot,st,Q,_t,ut,vt,rt,yt,gt,bt,nt,at,Te,lt,Ft]})}};export{Rt as DetailedDesignModule};
