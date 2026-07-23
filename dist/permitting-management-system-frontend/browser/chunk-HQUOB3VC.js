import{a as Et,b as re,c as Ft}from"./chunk-N23QNFFO.js";import{a as kt}from"./chunk-JYREPJ6U.js";import{c as ne,d as f,e as j,f as O,g as yt,h as Ct,i as V,l as B,m as L,n as ue,o as fe,p as ve,q as G,s as bt}from"./chunk-HGRQUFQJ.js";import{a as I,b as St}from"./chunk-SJG5BJVG.js";import{a as T,b as ie,c as b,e as D}from"./chunk-FHELIIU2.js";import{Ba as m,Bc as mt,Ca as n,Cb as k,Da as i,Db as X,Ea as v,Eb as F,Fc as Z,Gb as Ze,Gc as U,Hc as lt,Ib as Ie,Ic as st,L as We,M as Ee,Mb as et,Mc as dt,Na as A,Nb as tt,Nc as pt,O as Be,Oc as Pe,Pa as x,Pc as ct,R,Ra as c,Rc as _t,S as N,T as ge,Tc as ee,U as be,Ub as q,Uc as te,Wb as H,Wc as gt,Xb as w,Ya as $e,_ as g,ab as e,bb as C,cb as Le,cd as ut,dc as He,dd as ft,e as At,eb as K,fa as z,fb as Y,ga as y,gb as J,ha as l,hb as S,ib as De,kb as h,lb as u,mb as Ke,nd as vt,oa as _,od as xt,pa as E,pc as it,pd as ht,qa as Fe,qb as Ye,qc as nt,rb as Je,sb as Qe,sc as rt,ta as s,ub as Xe,wc as M,xc as ot,yc as at}from"./chunk-RYSGXS5Z.js";var Pt=At(kt());var P=class o{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${T.base_url}/detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${T.base_url}/detailed-designs-construction-permits`;return this.http.post(t,a)}getOneItem(a){let t=`${T.base_url}/detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a,t){let r=`${T.base_url}/detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}deleteItem(a){let t=`${T.base_url}/detailed-designs-construction-permits/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${T.base_url}/search-detailed-designs-construction-permits`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${T.base_url}/unpaginated-items-detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}getParcelItem(a){let t=`${T.base_url}/parcels-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}getInvestorParcelsItems(a){let t=`${T.base_url}/investor-parcels-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusDetailedPlanItem(a){let t=`${T.base_url}/next-previous-status-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}unpaginatedDetailedPlanItems(){let a=`${T.base_url}/unpaginated-items-detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}detailedPlanItem(a,t){let r=`${T.base_url}/detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}plannerDetailedPlanItem(a){let t=`${T.base_url}/planner-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a)}professionalRecommendationsDetailedPlanItem(a){let t=`${T.base_url}/professional-recommendations-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}detailedDesignReportRecommendationsDetailedPlanItem(a){let t=`${T.base_url}/detailed-design-report-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}committeeStageDetailedPlanItem(a,t){let r=`${T.base_url}/committee-stage-detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}constructionPermitItem(a,t){let r=`${T.base_url}/construction-permit-detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}onDownloadProfessionalReport(a){let t=new et;t=t.set("Accept","application/pdf");let r=`${T.base_url}/detailed-designs-construction-permits-generate-professional-report-pdf/${a.id}`;return this.http.get(r,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||o)(Be(b),Be(tt))}}static{this.\u0275prov=We({token:o,factory:o.\u0275fac,providedIn:"root"})}};var qt=o=>({"is-invalid":o}),jt=(o,a,t,r,d,p,he,wt,Mt)=>({"bg-secondary text-dark":o,"bg-primary text-dark":a,"bg-dark":t,"bg-warning text-dark":r,"bg-info":d,"bg-danger":p,"bg-light text-dark":he,"text-muted":wt,"bg-success":Mt}),Dt=()=>[1],It=()=>[2],Ot=(o,a)=>({active:o,disabled:a});function Vt(o,a){o&1&&v(0,"app-progress")}function Bt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Lt(o,a){if(o&1&&(n(0,"div",16),e(1,`
                  `),s(2,Bt,2,0,"div",1),e(3,`
                `),i()),o&2){let t=c();l(2),m("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function Ht(o,a){if(o&1&&(n(0,"span"),e(1,`
                    `),n(2,"a",31),e(3,"Download"),i(),e(4,`
                `),i()),o&2){let t=c().$implicit;l(2),m("href",S(t.construction_permit_url),y)}}function Gt(o,a){if(o&1&&(n(0,"li")(1,"a",32),ge(),v(2,"svg",33),e(3," Edit"),i()()),o&2){let t=c().$implicit;l(),m("routerLink",De("/detailed-designs/edit/",t.id))}}function zt(o,a){if(o&1&&(n(0,"li")(1,"a",32),ge(),v(2,"svg",34),e(3," Process"),i()()),o&2){let t=c().$implicit;l(),m("routerLink",De("/detailed-designs/process/",t.id))}}function Ut(o,a){if(o&1){let t=A();n(0,"button",35),x("click",function(){R(t);let d=c().$implicit,p=c(2);return N(p.onDelete(d))}),ge(),v(1,"svg",36),i()}}function Wt(o,a){if(o&1&&(n(0,"tr"),e(1,`
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
                  `),s(31,Ht,5,2,"span",1),e(32,`
                `),i(),e(33,`
                `),n(34,"td"),e(35,`
                  `),n(36,"div",23),e(37,`
                    `),n(38,"a",24),ge(),v(39,"svg",25),i(),e(40,`
                    `),e(41,`
                    `),be(),n(42,"c-dropdown",26),e(43,`
                      `),n(44,"button",27),e(45,`
                        `),ge(),v(46,"svg",28),e(47,`
                      `),i(),e(48,`
                      `),be(),n(49,"ul",29),e(50,`
                        `),e(51,`
                        `),s(52,Gt,4,2,"li",1),e(53,`
                        `),e(54,`
                        `),s(55,zt,4,2,"li",1),e(56,`
                      `),i(),e(57,`
                    `),i(),e(58,`
                    `),s(59,Ut,2,0,"button",30),e(60,`
                  `),i(),e(61,`
                `),i(),e(62,`
              `),i()),o&2){let t=a.$implicit,r=a.index,d=c(2);l(3),Le("",d.mPageFrom+r,"."),l(3),C(t.application_number),l(3),C(t.project_brief),l(3),C(t.investor.name),l(5),C(t.consultant.name),l(4),m("ngClass",Ye(16,jt,[t.detailed_plan_status_id==1,t.detailed_plan_status_id==2,t.detailed_plan_status_id==3,t.detailed_plan_status_id==4,t.detailed_plan_status_id==5,t.detailed_plan_status_id==6,t.detailed_plan_status_id==7,t.detailed_plan_status_id==8,t.detailed_plan_status_id==9])),l(),Le(`
                    `,t.detailed_plan_status==null?null:t.detailed_plan_status.name,`
                  `),l(4),C(Qe(27,14,t.created_at)),l(5),m("ngIf",t.construction_permit_url),l(7),m("routerLink",De("/detailed-designs/show/",t.id)),l(14),m("ngIf",d.mAppContextService.hasRoles(h(26,Dt))||d.mAppContextService.hasRoles(h(27,It))&&(t.status_id==1||t.status_id==2)),l(3),m("ngIf",!d.mAppContextService.hasRoles(h(28,It))),l(4),m("ngIf",d.mAppContextService.hasRoles(h(29,Dt)))}}function $t(o,a){if(o&1&&(n(0,"div",17),e(1,`
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
                `),n(31,"th",20),e(32,"Construction Permit"),i(),e(33,`
                `),n(34,"th",20),e(35,"Action"),i(),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),n(39,"tbody"),e(40,`
              `),s(41,Wt,63,30,"tr",21),e(42,`
            `),i(),e(43,`
          `),i(),e(44,`
        `),i()),o&2){let t=c();l(41),m("ngForOf",t.mConstructionPermits)}}function Kt(o,a){if(o&1){let t=A();n(0,"li",39),e(1,`
              `),n(2,"a",40),x("click",function(){let d=R(t).$implicit,p=c(2);return N(p.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(o&2){let t=a.$implicit;m("ngClass",Ke(2,Ot,t.active,!t.url)),l(2),m("innerHTML",t.label,z)}}function Yt(o,a){if(o&1&&(n(0,"div"),e(1,`
          `),n(2,"ul",37),e(3,`
            `),s(4,Kt,4,5,"li",38),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let t=c();l(4),m("ngForOf",t.links)}}function Jt(o,a){o&1&&(e(0,`
          `),n(1,"p",41),e(2,"No items"),i(),e(3,`
        `))}var Te=class o{constructor(a,t,r){this.mDetailedDesignService=a;this.mToastrService=t;this.mAppContextService=r;this.mConstructionPermits={};this.links=[];this.mProgress=g(!1)}ngOnInit(){this.index(),this.search_term=new Ct("",f.required),this.itemForm=new yt({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mDetailedDesignService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mDetailedDesignService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mConstructionPermits=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onDelete(a){Pt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mDetailedDesignService.deleteItem(a).subscribe({next:d=>{d&&(this.mConstructionPermits=this.mConstructionPermits.filter(p=>p.id!==a.id),this.mToastrService.error(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.error(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mDetailedDesignService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mDetailedDesignService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(P),_(D),_(b))}}static{this.\u0275cmp=E({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/detailed-designs/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,r){if(t&1&&(s(0,Vt,1,0,"app-progress",1),n(1,"c-row"),e(2,`
  `),n(3,"c-col",2),e(4,`
    `),n(5,"c-card",3),e(6,`
      `),n(7,"c-card-header"),e(8,`
        `),n(9,"div",4),e(10,`
          `),n(11,"div",5),e(12,`
            `),n(13,"a",6),e(14,`
              `),ge(),v(15,"svg",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),be(),n(19,"div"),e(20,`
            `),n(21,"form",8),x("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),n(23,"div",9),e(24,`
                `),v(25,"input",10),e(26,`
                `),n(27,"div",11),e(28,`
                  `),n(29,"button",12),e(30,`
                    `),ge(),v(31,"svg",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),s(35,Lt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),be(),n(42,"c-card-body"),e(43,`

        `),s(44,$t,45,1,"div",15),e(45,`

        `),s(46,Yt,7,1,"div",1),e(47,`

        `),s(48,Jt,4,0,"ng-template",null,0,Xe),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),t&2){let d=$e(49);m("ngIf",r.mProgress()),l(21),m("formGroup",r.itemForm),l(4),m("ngClass",u(7,qt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),l(10),m("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),l(9),m("ngIf",r.mConstructionPermits.length>0)("ngIfElse",d),l(2),m("ngIf",r.links)}},dependencies:[k,X,F,w,I,M,Z,U,lt,ee,te,xt,vt,V,ne,j,O,L,B,it,Pe,ct,dt,pt,Ze],encapsulation:2})}};var $=o=>({"is-invalid":o});function Qt(o,a){o&1&&v(0,"app-progress")}function Xt(o,a){if(o&1&&(n(0,"option",41),e(1),i()),o&2){let t=a.$implicit;m("value",t.id),l(),C(t.application_number)}}function Zt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ei(o,a){if(o&1&&(n(0,"div",42),e(1,`
                              `),s(2,Zt,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("id"))==null||t.errors==null?null:t.errors.required)}}function ti(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ii(o,a){if(o&1&&(n(0,"div",42),e(1,`
                              `),s(2,ti,2,0,"div",0),e(3,`
                              `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("indemnity_form").errors)==null?null:t.required)}}function ni(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ri(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,ni,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("architectural_design").errors)==null?null:t.required)}}function oi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ai(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,oi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("structural_design").errors)==null?null:t.required)}}function mi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function li(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,mi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("electrical_design").errors)==null?null:t.required)}}function si(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function di(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,si,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("ict_design").errors)==null?null:t.required)}}function pi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ci(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,pi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("mechanical_design").errors)==null?null:t.required)}}function _i(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function gi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,_i,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("landscaping_design").errors)==null?null:t.required)}}function ui(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function fi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,ui,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("signage_design").errors)==null?null:t.required)}}function vi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function xi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,vi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("other_relevant_documents").errors)==null?null:t.required)}}function hi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Si(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,hi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("green_certification_registration").errors)==null?null:t.required)}}function yi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ci(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,yi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("nema_project_report").errors)==null?null:t.required)}}var ye=class o{constructor(a,t,r,d,p){this.mDetailedDesignService=a;this.router=t;this.mToastrService=r;this.mAppContextService=d;this.fb=p;this.mProgress=g(!1);this.itemForm=this.fb.group({id:["",f.required],indemnity_form:["",f.required],architectural_design:["",f.required],structural_design:["",f.required],electrical_design:["",f.required],ict_design:["",f.required],mechanical_design:["",f.required],landscaping_design:["",f.required],signage_design:["",f.required],other_relevant_documents:["",f.nullValidator],green_certification_registration:["",f.required],nema_project_report:["",f.required]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDetailedDesignService.unpaginatedItems().subscribe({next:a=>{a&&(this.mMasterplanSubmissions=a.data.masterplan_submissions,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("id",a.id),t.append("indemnity_form",this.indemnity_form_file,this.indemnity_form_file.name),t.append("architectural_design",this.architectural_design_file,this.architectural_design_file.name),t.append("structural_design",this.structural_design_file,this.structural_design_file.name),t.append("electrical_design",this.electrical_design_file,this.electrical_design_file.name),t.append("ict_design",this.ict_design_file,this.ict_design_file.name),t.append("mechanical_design",this.mechanical_design_file,this.mechanical_design_file.name),t.append("landscaping_design",this.landscaping_design_file,this.landscaping_design_file.name),t.append("signage_design",this.signage_design_file,this.signage_design_file.name),t.append("other_relevant_documents",this.other_relevant_documents_file,this.other_relevant_documents_file.name),t.append("green_certification_registration",this.green_certification_registration_file,this.green_certification_registration_file.name),t.append("nema_project_report",this.nema_project_report_file,this.nema_project_report_file.name),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.createItem(t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onIndemnityFormChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_form_file=t}}onArchitecturalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.architectural_design_file=t}}onStructuralDesignChange(a){if(a.target.value){let t=a.target.files[0];this.structural_design_file=t}}onElectricalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.electrical_design_file=t}}onIctDesignChange(a){if(a.target.value){let t=a.target.files[0];this.ict_design_file=t}}onMechanicalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.mechanical_design_file=t}}onLandscapingDesignChange(a){if(a.target.value){let t=a.target.files[0];this.landscaping_design_file=t}}onSignageDesignChange(a){if(a.target.value){let t=a.target.files[0];this.signage_design_file=t}}onOtherRelevantDocumentsChange(a){if(a.target.value){let t=a.target.files[0];this.other_relevant_documents_file=t}}onGreenCertificationRegistrationChange(a){if(a.target.value){let t=a.target.files[0];this.green_certification_registration_file=t}}onNemaProjectReportChange(a){if(a.target.value){let t=a.target.files[0];this.nema_project_report_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(P),_(H),_(D),_(b),_(G))}}static{this.\u0275cmp=E({type:o,selectors:[["app-create"]],standalone:!1,decls:199,vars:52,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required"],["formControlName","indemnity_form","type","file",1,"form-control",3,"change","ngClass"],["for","architectural_design",1,"col-form-label","required"],["formControlName","architectural_design","type","file",1,"form-control",3,"change","ngClass"],["for","structural_design",1,"col-form-label","required"],["formControlName","structural_design","type","file",1,"form-control",3,"change","ngClass"],["for","electrical_design",1,"col-form-label","required"],["formControlName","electrical_design","type","file",1,"form-control",3,"change","ngClass"],["for","ict_design",1,"col-form-label","required"],["formControlName","ict_design","type","file",1,"form-control",3,"change","ngClass"],["for","mechanical_design",1,"col-form-label","required"],["formControlName","mechanical_design","type","file",1,"form-control",3,"change","ngClass"],["for","landscaping_design",1,"col-form-label","required"],["formControlName","landscaping_design","type","file",1,"form-control",3,"change","ngClass"],["for","signage_design",1,"col-form-label","required"],["formControlName","signage_design","type","file",1,"form-control",3,"change","ngClass"],["for","other_relevant_documents",1,"col-form-label","required1"],["formControlName","other_relevant_documents","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_registration",1,"col-form-label","required"],["formControlName","green_certification_registration","type","file",1,"form-control",3,"change","ngClass"],["for","nema_project_report",1,"col-form-label","required"],["formControlName","nema_project_report","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,Qt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

            `),n(9,"div"),e(10,`
                `),n(11,"form",3),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(12,`
                    `),n(13,"fieldset",4),e(14,`
                    `),n(15,"legend",5)(16,"h6",6),e(17,"DETAILED PLAN"),i()(),e(18,`
                    `),n(19,"div",7),e(20,`
                        `),n(21,"div",8),e(22,`
                          `),n(23,"div",9),e(24,`
                            `),n(25,"label",10),e(26,"Application Number:"),i(),e(27,`
                            `),n(28,"select",11),e(29,`
                              `),n(30,"option",12),e(31,"--- Select application ---"),i(),e(32,`
                              `),s(33,Xt,2,2,"option",13),e(34,`
                            `),i(),e(35,`
                            `),s(36,ei,4,1,"div",14),e(37,`
                          `),i(),e(38,`
                        `),i(),e(39,`
                        `),n(40,"div",15),e(41,`
                          `),n(42,"div",9),e(43,`
                              `),n(44,"label",16),e(45,"Indemnity Form:"),i(),e(46,`
                              `),n(47,"input",17),x("change",function(p){return r.onIndemnityFormChange(p)}),i(),e(48,`
                              `),s(49,ii,4,1,"div",14),e(50,`
                          `),i(),e(51,`
                        `),i(),e(52,`
                        `),n(53,"div",15),e(54,`
                        `),n(55,"div",9),e(56,`
                            `),n(57,"label",18),e(58,"Architectural Design:"),i(),e(59,`
                            `),n(60,"input",19),x("change",function(p){return r.onArchitecturalDesignChange(p)}),i(),e(61,`
                            `),s(62,ri,4,1,"div",14),e(63,`
                        `),i(),e(64,`
                        `),i(),e(65,`
                        `),n(66,"div",15),e(67,`
                        `),n(68,"div",9),e(69,`
                            `),n(70,"label",20),e(71,"Structural Design:"),i(),e(72,`
                            `),n(73,"input",21),x("change",function(p){return r.onStructuralDesignChange(p)}),i(),e(74,`
                            `),s(75,ai,4,1,"div",14),e(76,`
                        `),i(),e(77,`
                        `),i(),e(78,`
                        `),n(79,"div",15),e(80,`
                        `),n(81,"div",9),e(82,`
                            `),n(83,"label",22),e(84,"Electrical Design:"),i(),e(85,`
                            `),n(86,"input",23),x("change",function(p){return r.onElectricalDesignChange(p)}),i(),e(87,`
                            `),s(88,li,4,1,"div",14),e(89,`
                        `),i(),e(90,`
                        `),i(),e(91,`
                        `),n(92,"div",15),e(93,`
                        `),n(94,"div",9),e(95,`
                            `),n(96,"label",24),e(97,"ICT Design:"),i(),e(98,`
                            `),n(99,"input",25),x("change",function(p){return r.onIctDesignChange(p)}),i(),e(100,`
                            `),s(101,di,4,1,"div",14),e(102,`
                        `),i(),e(103,`
                        `),i(),e(104,`
                        `),n(105,"div",15),e(106,`
                        `),n(107,"div",9),e(108,`
                            `),n(109,"label",26),e(110,"Mechanical Design:"),i(),e(111,`
                            `),n(112,"input",27),x("change",function(p){return r.onMechanicalDesignChange(p)}),i(),e(113,`
                            `),s(114,ci,4,1,"div",14),e(115,`
                        `),i(),e(116,`
                        `),i(),e(117,`
                        `),n(118,"div",15),e(119,`
                        `),n(120,"div",9),e(121,`
                            `),n(122,"label",28),e(123,"Landscaping Design:"),i(),e(124,`
                            `),n(125,"input",29),x("change",function(p){return r.onLandscapingDesignChange(p)}),i(),e(126,`
                            `),s(127,gi,4,1,"div",14),e(128,`
                        `),i(),e(129,`
                        `),i(),e(130,`
                        `),n(131,"div",15),e(132,`
                        `),n(133,"div",9),e(134,`
                            `),n(135,"label",30),e(136,"Signage Design:"),i(),e(137,`
                            `),n(138,"input",31),x("change",function(p){return r.onSignageDesignChange(p)}),i(),e(139,`
                            `),s(140,fi,4,1,"div",14),e(141,`
                        `),i(),e(142,`
                        `),i(),e(143,`
                        `),n(144,"div",8),e(145,`
                        `),n(146,"div",9),e(147,`
                            `),n(148,"label",32),e(149,"Other Relevant Documents:"),i(),e(150,`
                            `),n(151,"input",33),x("change",function(p){return r.onOtherRelevantDocumentsChange(p)}),i(),e(152,`
                            `),s(153,xi,4,1,"div",14),e(154,`
                        `),i(),e(155,`
                        `),i(),e(156,`
                        `),n(157,"div",15),e(158,`
                        `),n(159,"div",9),e(160,`
                            `),n(161,"label",34),e(162,"Green Certification Registration:"),i(),e(163,`
                            `),n(164,"input",35),x("change",function(p){return r.onGreenCertificationRegistrationChange(p)}),i(),e(165,`
                            `),s(166,Si,4,1,"div",14),e(167,`
                        `),i(),e(168,`
                        `),i(),e(169,`
                        `),n(170,"div",15),e(171,`
                        `),n(172,"div",9),e(173,`
                            `),n(174,"label",36),e(175,"NEMA Project Report:"),i(),e(176,`
                            `),n(177,"input",37),x("change",function(p){return r.onNemaProjectReportChange(p)}),i(),e(178,`
                            `),s(179,Ci,4,1,"div",14),e(180,`
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
`),i()),t&2){let d,p;m("ngIf",r.mProgress()),l(11),m("formGroup",r.itemForm),l(17),m("ngClass",u(28,$,((d=r.itemForm.get("id"))==null?null:d.invalid)&&(((d=r.itemForm.get("id"))==null?null:d.dirty)||((d=r.itemForm.get("id"))==null?null:d.touched)))),l(5),m("ngForOf",r.mMasterplanSubmissions),l(3),m("ngIf",((p=r.itemForm.get("id"))==null?null:p.invalid)&&(((p=r.itemForm.get("id"))==null?null:p.dirty)||((p=r.itemForm.get("id"))==null?null:p.touched))),l(11),m("ngClass",u(30,$,r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched))),l(2),m("ngIf",r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched)),l(11),m("ngClass",u(32,$,r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched))),l(2),m("ngIf",r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched)),l(11),m("ngClass",u(34,$,r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched))),l(2),m("ngIf",r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched)),l(11),m("ngClass",u(36,$,r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched))),l(2),m("ngIf",r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched)),l(11),m("ngClass",u(38,$,r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched))),l(2),m("ngIf",r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched)),l(11),m("ngClass",u(40,$,r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched))),l(2),m("ngIf",r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched)),l(11),m("ngClass",u(42,$,r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched))),l(2),m("ngIf",r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched)),l(11),m("ngClass",u(44,$,r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched))),l(2),m("ngIf",r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched)),l(11),m("ngClass",u(46,$,r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched))),l(2),m("ngIf",r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched)),l(11),m("ngClass",u(48,$,r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched))),l(2),m("ngIf",r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched)),l(11),m("ngClass",u(50,$,r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched))),l(2),m("ngIf",r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched)),l(11),m("disabled",r.itemForm.invalid)}},dependencies:[k,X,F,w,I,M,Z,U,ee,te,V,fe,ve,ne,ue,j,O,L,B],encapsulation:2})}};var Q=o=>({"is-invalid":o});function Ei(o,a){o&1&&v(0,"app-progress")}function Fi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Di(o,a){if(o&1&&(n(0,"div",37),e(1,`
                              `),s(2,Fi,2,0,"div",0),e(3,`
                              `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("indemnity_form").errors)==null?null:t.required)}}function Ii(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Pi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Ii,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("architectural_design").errors)==null?null:t.required)}}function Ti(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ri(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Ti,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("structural_design").errors)==null?null:t.required)}}function Ni(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function wi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Ni,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("electrical_design").errors)==null?null:t.required)}}function Mi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ai(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Mi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("ict_design").errors)==null?null:t.required)}}function ki(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function qi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,ki,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("mechanical_design").errors)==null?null:t.required)}}function ji(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Oi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,ji,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("landscaping_design").errors)==null?null:t.required)}}function Vi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Bi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Vi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("signage_design").errors)==null?null:t.required)}}function Li(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Hi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Li,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("other_relevant_documents").errors)==null?null:t.required)}}function Gi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function zi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Gi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("green_certification_registration").errors)==null?null:t.required)}}function Ui(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Wi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Ui,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=c();l(2),m("ngIf",(t=r.itemForm.get("nema_project_report").errors)==null?null:t.required)}}var Re=class o{constructor(a,t,r,d,p,he){this.mDetailedDesignService=a;this.router=t;this.mToastrService=r;this.mAppContextService=d;this.fb=p;this.route=he;this.mProgress=g(!1);this.itemForm=this.fb.group({indemnity_form:["",f.required],architectural_design:["",f.required],structural_design:["",f.required],electrical_design:["",f.required],ict_design:["",f.required],mechanical_design:["",f.required],landscaping_design:["",f.required],signage_design:["",f.required],other_relevant_documents:["",f.nullValidator],green_certification_registration:["",f.required],nema_project_report:["",f.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDetailedDesignService.unpaginatedItems().subscribe({next:a=>{a&&(this.mMasterplanSubmissions=a.data.masterplan_submissions,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("id",this.id),t.append("indemnity_form",this.indemnity_form_file,this.indemnity_form_file.name),t.append("architectural_design",this.architectural_design_file,this.architectural_design_file.name),t.append("structural_design",this.structural_design_file,this.structural_design_file.name),t.append("electrical_design",this.electrical_design_file,this.electrical_design_file.name),t.append("ict_design",this.ict_design_file,this.ict_design_file.name),t.append("mechanical_design",this.mechanical_design_file,this.mechanical_design_file.name),t.append("landscaping_design",this.landscaping_design_file,this.landscaping_design_file.name),t.append("signage_design",this.signage_design_file,this.signage_design_file.name),t.append("other_relevant_documents",this.other_relevant_documents_file,this.other_relevant_documents_file.name),t.append("green_certification_registration",this.green_certification_registration_file,this.green_certification_registration_file.name),t.append("nema_project_report",this.nema_project_report_file,this.nema_project_report_file.name),t.append("_method","PUT"),this.mProgress.set(!0),this.mDetailedDesignService.updateItem(this.id,t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onIndemnityFormChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_form_file=t}}onArchitecturalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.architectural_design_file=t}}onStructuralDesignChange(a){if(a.target.value){let t=a.target.files[0];this.structural_design_file=t}}onElectricalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.electrical_design_file=t}}onIctDesignChange(a){if(a.target.value){let t=a.target.files[0];this.ict_design_file=t}}onMechanicalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.mechanical_design_file=t}}onLandscapingDesignChange(a){if(a.target.value){let t=a.target.files[0];this.landscaping_design_file=t}}onSignageDesignChange(a){if(a.target.value){let t=a.target.files[0];this.signage_design_file=t}}onOtherRelevantDocumentsChange(a){if(a.target.value){let t=a.target.files[0];this.other_relevant_documents_file=t}}onGreenCertificationRegistrationChange(a){if(a.target.value){let t=a.target.files[0];this.green_certification_registration_file=t}}onNemaProjectReportChange(a){if(a.target.value){let t=a.target.files[0];this.nema_project_report_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(P),_(H),_(D),_(b),_(G),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-edit"]],standalone:!1,decls:180,vars:47,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","indemnity_form",1,"col-form-label","required"],["formControlName","indemnity_form","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","architectural_design",1,"col-form-label","required"],["formControlName","architectural_design","type","file",1,"form-control",3,"change","ngClass"],["for","structural_design",1,"col-form-label","required"],["formControlName","structural_design","type","file",1,"form-control",3,"change","ngClass"],["for","electrical_design",1,"col-form-label","required"],["formControlName","electrical_design","type","file",1,"form-control",3,"change","ngClass"],["for","ict_design",1,"col-form-label","required"],["formControlName","ict_design","type","file",1,"form-control",3,"change","ngClass"],["for","mechanical_design",1,"col-form-label","required"],["formControlName","mechanical_design","type","file",1,"form-control",3,"change","ngClass"],["for","landscaping_design",1,"col-form-label","required"],["formControlName","landscaping_design","type","file",1,"form-control",3,"change","ngClass"],["for","signage_design",1,"col-form-label","required"],["formControlName","signage_design","type","file",1,"form-control",3,"change","ngClass"],[1,"col-md-12"],["for","other_relevant_documents",1,"col-form-label","required1"],["formControlName","other_relevant_documents","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_registration",1,"col-form-label","required"],["formControlName","green_certification_registration","type","file",1,"form-control",3,"change","ngClass"],["for","nema_project_report",1,"col-form-label","required"],["formControlName","nema_project_report","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(s(0,Ei,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

            `),n(9,"div"),e(10,`
                `),n(11,"form",3),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(12,`
                    `),n(13,"fieldset",4),e(14,`
                    `),n(15,"legend",5)(16,"h6",6),e(17,"DETAILED PLAN"),i()(),e(18,`
                    `),n(19,"div",7),e(20,`
                        `),n(21,"div",8),e(22,`
                          `),n(23,"div",9),e(24,`
                              `),n(25,"label",10),e(26,"Indemnity Form:"),i(),e(27,`
                              `),n(28,"input",11),x("change",function(p){return r.onIndemnityFormChange(p)}),i(),e(29,`
                              `),s(30,Di,4,1,"div",12),e(31,`
                          `),i(),e(32,`
                        `),i(),e(33,`
                        `),n(34,"div",8),e(35,`
                        `),n(36,"div",9),e(37,`
                            `),n(38,"label",13),e(39,"Architectural Design:"),i(),e(40,`
                            `),n(41,"input",14),x("change",function(p){return r.onArchitecturalDesignChange(p)}),i(),e(42,`
                            `),s(43,Pi,4,1,"div",12),e(44,`
                        `),i(),e(45,`
                        `),i(),e(46,`
                        `),n(47,"div",8),e(48,`
                        `),n(49,"div",9),e(50,`
                            `),n(51,"label",15),e(52,"Structural Design:"),i(),e(53,`
                            `),n(54,"input",16),x("change",function(p){return r.onStructuralDesignChange(p)}),i(),e(55,`
                            `),s(56,Ri,4,1,"div",12),e(57,`
                        `),i(),e(58,`
                        `),i(),e(59,`
                        `),n(60,"div",8),e(61,`
                        `),n(62,"div",9),e(63,`
                            `),n(64,"label",17),e(65,"Electrical Design:"),i(),e(66,`
                            `),n(67,"input",18),x("change",function(p){return r.onElectricalDesignChange(p)}),i(),e(68,`
                            `),s(69,wi,4,1,"div",12),e(70,`
                        `),i(),e(71,`
                        `),i(),e(72,`
                        `),n(73,"div",8),e(74,`
                        `),n(75,"div",9),e(76,`
                            `),n(77,"label",19),e(78,"ICT Design:"),i(),e(79,`
                            `),n(80,"input",20),x("change",function(p){return r.onIctDesignChange(p)}),i(),e(81,`
                            `),s(82,Ai,4,1,"div",12),e(83,`
                        `),i(),e(84,`
                        `),i(),e(85,`
                        `),n(86,"div",8),e(87,`
                        `),n(88,"div",9),e(89,`
                            `),n(90,"label",21),e(91,"Mechanical Design:"),i(),e(92,`
                            `),n(93,"input",22),x("change",function(p){return r.onMechanicalDesignChange(p)}),i(),e(94,`
                            `),s(95,qi,4,1,"div",12),e(96,`
                        `),i(),e(97,`
                        `),i(),e(98,`
                        `),n(99,"div",8),e(100,`
                        `),n(101,"div",9),e(102,`
                            `),n(103,"label",23),e(104,"Landscaping Design:"),i(),e(105,`
                            `),n(106,"input",24),x("change",function(p){return r.onLandscapingDesignChange(p)}),i(),e(107,`
                            `),s(108,Oi,4,1,"div",12),e(109,`
                        `),i(),e(110,`
                        `),i(),e(111,`
                        `),n(112,"div",8),e(113,`
                        `),n(114,"div",9),e(115,`
                            `),n(116,"label",25),e(117,"Signage Design:"),i(),e(118,`
                            `),n(119,"input",26),x("change",function(p){return r.onSignageDesignChange(p)}),i(),e(120,`
                            `),s(121,Bi,4,1,"div",12),e(122,`
                        `),i(),e(123,`
                        `),i(),e(124,`
                        `),n(125,"div",27),e(126,`
                        `),n(127,"div",9),e(128,`
                            `),n(129,"label",28),e(130,"Other Relevant Documents:"),i(),e(131,`
                            `),n(132,"input",29),x("change",function(p){return r.onOtherRelevantDocumentsChange(p)}),i(),e(133,`
                            `),s(134,Hi,4,1,"div",12),e(135,`
                        `),i(),e(136,`
                        `),i(),e(137,`
                        `),n(138,"div",8),e(139,`
                        `),n(140,"div",9),e(141,`
                            `),n(142,"label",30),e(143,"Green Certification Registration:"),i(),e(144,`
                            `),n(145,"input",31),x("change",function(p){return r.onGreenCertificationRegistrationChange(p)}),i(),e(146,`
                            `),s(147,zi,4,1,"div",12),e(148,`
                        `),i(),e(149,`
                        `),i(),e(150,`
                        `),n(151,"div",8),e(152,`
                        `),n(153,"div",9),e(154,`
                            `),n(155,"label",32),e(156,"NEMA Project Report:"),i(),e(157,`
                            `),n(158,"input",33),x("change",function(p){return r.onNemaProjectReportChange(p)}),i(),e(159,`
                            `),s(160,Wi,4,1,"div",12),e(161,`
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
`),i()),t&2&&(m("ngIf",r.mProgress()),l(11),m("formGroup",r.itemForm),l(17),m("ngClass",u(25,Q,r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched))),l(2),m("ngIf",r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched)),l(11),m("ngClass",u(27,Q,r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched))),l(2),m("ngIf",r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched)),l(11),m("ngClass",u(29,Q,r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched))),l(2),m("ngIf",r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched)),l(11),m("ngClass",u(31,Q,r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched))),l(2),m("ngIf",r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched)),l(11),m("ngClass",u(33,Q,r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched))),l(2),m("ngIf",r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched)),l(11),m("ngClass",u(35,Q,r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched))),l(2),m("ngIf",r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched)),l(11),m("ngClass",u(37,Q,r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched))),l(2),m("ngIf",r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched)),l(11),m("ngClass",u(39,Q,r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched))),l(2),m("ngIf",r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched)),l(11),m("ngClass",u(41,Q,r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched))),l(2),m("ngIf",r.itemForm.get("other_relevant_documents").invalid&&(r.itemForm.get("other_relevant_documents").dirty||r.itemForm.get("other_relevant_documents").touched)),l(11),m("ngClass",u(43,Q,r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched))),l(2),m("ngIf",r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched)),l(11),m("ngClass",u(45,Q,r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched))),l(2),m("ngIf",r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched)),l(11),m("disabled",r.itemForm.invalid))},dependencies:[k,F,w,I,M,Z,U,ee,te,V,ne,j,O,L,B],encapsulation:2})}};var $i=()=>[2];function Ki(o,a){o&1&&v(0,"app-progress")}function Yi(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=c();l(),C(t.item.investor==null?null:t.item.investor.name)}}function Ji(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=c();l(),C(t.item.type==null?null:t.item.type.name)}}function Qi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.indemnity_form_url),y)}}function Xi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.architectural_design_url),y)}}function Zi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.structural_design_url),y)}}function en(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.electrical_design_url),y)}}function tn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.ict_design_url),y)}}function nn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.mechanical_design_url),y)}}function rn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.landscaping_design_url),y)}}function on(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.signage_design_url),y)}}function an(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.other_relevant_documents_url),y)}}function mn(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.green_certification_registration_url),y)}}function ln(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=c();l(2),m("href",S(t.item.nema_project_report_url),y)}}function sn(o,a){if(o&1){let t=A();n(0,"fieldset",3),e(1,`
            `),n(2,"legend",4)(3,"h6",5),e(4,"PROFESSIONAL RECOMMENDATIONS"),i()(),e(5,`
            `),n(6,"div",6),e(7,`
              `),n(8,"div",10),e(9,`
                `),n(10,"div",2),e(11,`
                  `),n(12,"label",8),e(13,"Architect Report:"),i(),e(14,`
                  `),n(15,"div",18),e(16,`
                    `),v(17,"span",19),e(18,`
                  `),i(),e(19,`
                `),i(),e(20,`
              `),i(),e(21,`
              `),n(22,"div",10),e(23,`
                `),n(24,"div",2),e(25,`
                  `),n(26,"label",20),e(27,"Structural Engineer Report:"),i(),e(28,`
                  `),n(29,"div",18),e(30,`
                    `),v(31,"span",19),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
              `),i(),e(35,`
              `),n(36,"div",10),e(37,`
                `),n(38,"div",2),e(39,`
                  `),n(40,"label",20),e(41,"Electrical Engineer Report:"),i(),e(42,`
                  `),n(43,"div",18),e(44,`
                    `),v(45,"span",19),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
              `),i(),e(49,`
              `),n(50,"div",10),e(51,`
                `),n(52,"div",2),e(53,`
                  `),n(54,"label",20),e(55,"ICT Engineer Report:"),i(),e(56,`
                  `),n(57,"div",18),e(58,`
                    `),v(59,"span",19),e(60,`
                  `),i(),e(61,`
                `),i(),e(62,`
              `),i(),e(63,`
              `),n(64,"div",10),e(65,`
                `),n(66,"div",2),e(67,`
                  `),n(68,"label",20),e(69,"Mechanical Engineer Report:"),i(),e(70,`
                  `),n(71,"div",18),e(72,`
                    `),v(73,"span",19),e(74,`
                  `),i(),e(75,`
                `),i(),e(76,`
              `),i(),e(77,`
              `),n(78,"div",10),e(79,`
                `),n(80,"div",2),e(81,`
                  `),n(82,"label",20),e(83,"Environment Health and Safety Report:"),i(),e(84,`
                  `),n(85,"div",18),e(86,`
                    `),v(87,"span",19),e(88,`
                  `),i(),e(89,`
                `),i(),e(90,`
              `),i(),e(91,`
              `),n(92,"div",10),e(93,`
                `),n(94,"div",2),e(95,`
                  `),n(96,"label",20),e(97,"Professional Sustainability Report:"),i(),e(98,`
                  `),n(99,"div",18),e(100,`
                    `),v(101,"span",19),e(102,`
                  `),i(),e(103,`
                `),i(),e(104,`
              `),i(),e(105,`
              `),n(106,"div",10),e(107,`
                `),n(108,"div",2),e(109,`
                  `),n(110,"label",20),e(111,"Landscaping Report:"),i(),e(112,`
                  `),n(113,"div",18),e(114,`
                    `),v(115,"span",19),e(116,`
                  `),i(),e(117,`
                `),i(),e(118,`
              `),i(),e(119,`
              `),n(120,"div",10),e(121,`
                `),n(122,"div",2),e(123,`
                  `),n(124,"label",20),e(125,"Civil Works Design Report:"),i(),e(126,`
                  `),n(127,"div",18),e(128,`
                    `),v(129,"span",19),e(130,`
                  `),i(),e(131,`
                `),i(),e(132,`
              `),i(),e(133,`
              `),n(134,"div",10),e(135,`
                `),n(136,"div",2),e(137,`
                  `),n(138,"label",20),e(139,"Water and Sanitation Designs Design Report:"),i(),e(140,`
                  `),n(141,"div",18),e(142,`
                    `),v(143,"span",19),e(144,`
                  `),i(),e(145,`
                `),i(),e(146,`
              `),i(),e(147,`
            `),i(),e(148,`
            `),n(149,"div",10),e(150,`
              `),n(151,"div",21),e(152,`
                `),n(153,"button",22),x("click",function(){R(t);let d=c();return N(d.onDownloadReport(d.item))}),e(154,"Print Report"),i(),e(155,`
              `),i(),e(156,`
            `),i(),e(157,`
          `),i()}if(o&2){let t=c();l(17),m("innerHTML",t.mAppContextService.safeHtml(t.item.architect_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.structural_engineer_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.electrical_engineer_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.ict_engineer_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.mechanical_engineer_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.environment_health_and_safety_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.professional_sustainability_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.landscaping_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.civil_works_design_report),z),l(14),m("innerHTML",t.mAppContextService.safeHtml(t.item.water_and_sanitation_designs_report),z)}}var Ne=class o{constructor(a,t,r,d){this.mDetailedDesignService=a;this.mAppContextService=t;this.mToastrService=r;this.route=d;this.mProgress=g(!1)}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onDownloadReport(a){this.mProgress.set(!0),this.mDetailedDesignService.onDownloadProfessionalReport(a).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let d=t;var r=URL.createObjectURL(d);window.open(r,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(P),_(b),_(D),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-show"]],standalone:!1,decls:199,vars:17,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"col-md-4"],["for","context_analysis"],["class","border p-2 mb-3",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],[1,"text-muted",2,"text-align","justify","font-style","normal"],[3,"innerHTML"],["for","estimated_project_duration"],[1,"mt-3","text-end"],["cButton","","color","light",1,"text-dark","btn-sm",3,"click"]],template:function(t,r){t&1&&(s(0,Ki,1,0,"app-progress",0),n(1,"c-row"),e(2,`
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
                  `),s(26,Yi,2,1,"div",9),e(27,`
                `),i(),e(28,`
              `),i(),e(29,`
              `),n(30,"div",7),e(31,`
                `),n(32,"div",2),e(33,`
                  `),n(34,"label",8),e(35,"Nature of Application:"),i(),e(36,`
                  `),s(37,Ji,2,1,"div",9),e(38,`
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
                  `),s(70,Qi,5,2,"div",0),e(71,`
                `),i(),e(72,`
              `),i(),e(73,`
              `),n(74,"div",12),e(75,`
                `),n(76,"div",2),e(77,`
                  `),n(78,"label",13),e(79,"Architectural Design:"),i(),e(80,`
                  `),s(81,Xi,5,2,"div",0),e(82,`
                `),i(),e(83,`
              `),i(),e(84,`
              `),n(85,"div",12),e(86,`
                `),n(87,"div",2),e(88,`
                  `),n(89,"label",13),e(90,"Structural Design:"),i(),e(91,`
                  `),s(92,Zi,5,2,"div",0),e(93,`
                `),i(),e(94,`
              `),i(),e(95,`
              `),n(96,"div",12),e(97,`
                `),n(98,"div",2),e(99,`
                  `),n(100,"label",13),e(101,"Electrical Design:"),i(),e(102,`
                  `),s(103,en,5,2,"div",0),e(104,`
                `),i(),e(105,`
              `),i(),e(106,`
              `),n(107,"div",12),e(108,`
                `),n(109,"div",2),e(110,`
                  `),n(111,"label",13),e(112,"ICT Design:"),i(),e(113,`
                  `),s(114,tn,5,2,"div",0),e(115,`
                `),i(),e(116,`
              `),i(),e(117,`
              `),n(118,"div",12),e(119,`
                `),n(120,"div",2),e(121,`
                  `),n(122,"label",13),e(123,"Mechanical Design:"),i(),e(124,`
                  `),s(125,nn,5,2,"div",0),e(126,`
                `),i(),e(127,`
              `),i(),e(128,`
              `),n(129,"div",12),e(130,`
                `),n(131,"div",2),e(132,`
                  `),n(133,"label",13),e(134,"Landscaping Design:"),i(),e(135,`
                  `),s(136,rn,5,2,"div",0),e(137,`
                `),i(),e(138,`
              `),i(),e(139,`
              `),n(140,"div",12),e(141,`
                `),n(142,"div",2),e(143,`
                  `),n(144,"label",13),e(145,"Signage Design:"),i(),e(146,`
                  `),s(147,on,5,2,"div",0),e(148,`
                `),i(),e(149,`
              `),i(),e(150,`
              `),n(151,"div",12),e(152,`
                `),n(153,"div",2),e(154,`
                  `),n(155,"label",13),e(156,"Other Relevant Documents:"),i(),e(157,`
                  `),s(158,an,5,2,"div",0),e(159,`
                `),i(),e(160,`
              `),i(),e(161,`
              `),n(162,"div",12),e(163,`
                `),n(164,"div",2),e(165,`
                  `),n(166,"label",13),e(167,"Green Certification Registration:"),i(),e(168,`
                  `),s(169,mn,5,2,"div",0),e(170,`
                `),i(),e(171,`
              `),i(),e(172,`
              `),n(173,"div",12),e(174,`
                `),n(175,"div",2),e(176,`
                  `),n(177,"label",13),e(178,"NEMA Project Report:"),i(),e(179,`
                  `),s(180,ln,5,2,"div",0),e(181,`
                `),i(),e(182,`
              `),i(),e(183,`
            `),i(),e(184,`
          `),i(),e(185,`
          `),s(186,sn,158,10,"fieldset",14),e(187,`

          `),n(188,"div",15),e(189,`
            `),n(190,"button",16),e(191,"Cancel"),i(),e(192,`
            `),e(193,`
          `),i(),e(194,`
        `),i(),e(195,`

      `),i(),e(196,`
    `),i(),e(197,`
  `),i(),e(198,`
`),i()),t&2&&(m("ngIf",r.mProgress()),l(26),m("ngIf",r.item.investor),l(11),m("ngIf",r.item.type),l(12),C(r.item.project_brief),l(21),m("ngIf",r.item.indemnity_form),l(11),m("ngIf",r.item.architectural_design),l(11),m("ngIf",r.item.structural_design),l(11),m("ngIf",r.item.electrical_design),l(11),m("ngIf",r.item.ict_design),l(11),m("ngIf",r.item.mechanical_design),l(11),m("ngIf",r.item.landscaping_design),l(11),m("ngIf",r.item.signage_design),l(11),m("ngIf",r.item.other_relevant_documents),l(11),m("ngIf",r.item.green_certification_registration),l(11),m("ngIf",r.item.nema_project_report),l(6),m("ngIf",!r.mAppContextService.hasRoles(h(16,$i))))},dependencies:[F,w,I,M,Z,U,ee,te],encapsulation:2})}};var Tt=o=>({"is-invalid":o});function dn(o,a){o&1&&v(0,"app-progress")}function pn(o,a){if(o&1&&(n(0,"option",15),e(1),i()),o&2){let t=a.$implicit;m("value",S(t.id)),l(),C(t.alias)}}function cn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function _n(o,a){if(o&1&&(n(0,"div",16),s(1,cn,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function gn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function un(o,a){if(o&1&&(n(0,"div",16),s(1,gn,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var we=class o{constructor(a,t,r,d,p,he){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=p;this.route=he;this.mProgress=g(!1);this.item={};this.mEditor=ie;this.itemForm=this.fb.group({detailed_plan_status_id:["",f.required],remarks:["",f.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=g(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=g(!0),this.mDetailedDesignService.plannerDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=g(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=g(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=g(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(D),_(P),_(b),_(H),_(G),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-planner-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,dn,1,0,"app-progress",0),n(1,"div")(2,"form",1),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),s(11,pn,2,3,"option",8),i(),s(12,_n,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),i(),v(17,"ckeditor",11),s(18,un,2,1,"div",9),i()()(),n(19,"div",12)(20,"button",13),e(21,"Cancel"),i(),n(22,"button",14),e(23,"Submit"),i()()()()),t&2){let d,p;m("ngIf",r.mProgress()),l(2),m("formGroup",r.itemForm),l(6),m("ngClass",u(10,Tt,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),l(3),m("ngForOf",r.mNextPreviousStatuses),l(),m("ngIf",((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.dirty)||((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.touched))),l(5),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(12,Tt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),l(),m("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),l(4),m("disabled",r.itemForm.invalid)}},dependencies:[k,X,F,w,I,M,V,fe,ve,ue,j,O,L,B,re],encapsulation:2})}};var xe=()=>[1],vn=()=>[12],xn=()=>[13],hn=()=>[14],Sn=()=>[9],yn=()=>[15],Cn=()=>[16],bn=()=>[18],En=()=>[19],ae=o=>({"is-invalid":o});function Fn(o,a){o&1&&v(0,"app-progress")}function Dn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function In(o,a){if(o&1&&(n(0,"div",11),s(1,Dn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("architect_report").errors)==null?null:t.required)}}function Pn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",8),e(5,"Architect Report:"),i(),n(6,"ckeditor",9),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.architect_report,d)||(p.item.architect_report=d),N(d)}),i(),s(7,In,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.architect_report),m("ngClass",u(5,ae,t.itemForm.get("architect_report").invalid&&(t.itemForm.get("architect_report").dirty||t.itemForm.get("architect_report").touched))),l(),m("ngIf",t.itemForm.get("architect_report").invalid&&(t.itemForm.get("architect_report").dirty||t.itemForm.get("architect_report").touched))}}function Tn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Rn(o,a){if(o&1&&(n(0,"div",11),s(1,Tn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("structural_engineer_report").errors)==null?null:t.required)}}function Nn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",12),e(5,"Structural Engineer Report:"),i(),n(6,"ckeditor",13),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.structural_engineer_report,d)||(p.item.structural_engineer_report=d),N(d)}),i(),s(7,Rn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.structural_engineer_report),m("ngClass",u(5,ae,t.itemForm.get("structural_engineer_report").invalid&&(t.itemForm.get("structural_engineer_report").dirty||t.itemForm.get("structural_engineer_report").touched))),l(),m("ngIf",t.itemForm.get("structural_engineer_report").invalid&&(t.itemForm.get("structural_engineer_report").dirty||t.itemForm.get("structural_engineer_report").touched))}}function wn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Mn(o,a){if(o&1&&(n(0,"div",11),s(1,wn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("electrical_engineer_report").errors)==null?null:t.required)}}function An(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",14),e(5,"Electrical Engineer Report:"),i(),n(6,"ckeditor",15),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.electrical_engineer_report,d)||(p.item.electrical_engineer_report=d),N(d)}),i(),s(7,Mn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.electrical_engineer_report),m("ngClass",u(5,ae,t.itemForm.get("electrical_engineer_report").invalid&&(t.itemForm.get("electrical_engineer_report").dirty||t.itemForm.get("electrical_engineer_report").touched))),l(),m("ngIf",t.itemForm.get("electrical_engineer_report").invalid&&(t.itemForm.get("electrical_engineer_report").dirty||t.itemForm.get("electrical_engineer_report").touched))}}function kn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function qn(o,a){if(o&1&&(n(0,"div",11),s(1,kn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("ict_engineer_report").errors)==null?null:t.required)}}function jn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",16),e(5,"ICT Engineer Report:"),i(),n(6,"ckeditor",17),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.ict_engineer_report,d)||(p.item.ict_engineer_report=d),N(d)}),i(),s(7,qn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.ict_engineer_report),m("ngClass",u(5,ae,t.itemForm.get("ict_engineer_report").invalid&&(t.itemForm.get("ict_engineer_report").dirty||t.itemForm.get("ict_engineer_report").touched))),l(),m("ngIf",t.itemForm.get("ict_engineer_report").invalid&&(t.itemForm.get("ict_engineer_report").dirty||t.itemForm.get("ict_engineer_report").touched))}}function On(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Vn(o,a){if(o&1&&(n(0,"div",11),s(1,On,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("mechanical_engineer_report").errors)==null?null:t.required)}}function Bn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",18),e(5,"Mechanical Engineer Report:"),i(),n(6,"ckeditor",19),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.mechanical_engineer_report,d)||(p.item.mechanical_engineer_report=d),N(d)}),i(),s(7,Vn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.mechanical_engineer_report),m("ngClass",u(5,ae,t.itemForm.get("mechanical_engineer_report").invalid&&(t.itemForm.get("mechanical_engineer_report").dirty||t.itemForm.get("mechanical_engineer_report").touched))),l(),m("ngIf",t.itemForm.get("mechanical_engineer_report").invalid&&(t.itemForm.get("mechanical_engineer_report").dirty||t.itemForm.get("mechanical_engineer_report").touched))}}function Ln(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Hn(o,a){if(o&1&&(n(0,"div",11),s(1,Ln,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("environment_health_and_safety_report").errors)==null?null:t.required)}}function Gn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function zn(o,a){if(o&1&&(n(0,"div",11),s(1,Gn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("professional_sustainability_report").errors)==null?null:t.required)}}function Un(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Wn(o,a){if(o&1&&(n(0,"div",11),s(1,Un,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("landscaping_report").errors)==null?null:t.required)}}function $n(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",20),e(5,"Environment Health and Safety Report:"),i(),n(6,"ckeditor",21),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.environment_health_and_safety_report,d)||(p.item.environment_health_and_safety_report=d),N(d)}),i(),s(7,Hn,2,1,"div",10),i()(),n(8,"div",6)(9,"div",7)(10,"label",22),e(11,"Professional Sustainability Report:"),i(),n(12,"ckeditor",23),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.professional_sustainability_report,d)||(p.item.professional_sustainability_report=d),N(d)}),i(),s(13,zn,2,1,"div",10),i()(),n(14,"div",6)(15,"div",7)(16,"label",24),e(17,"Landscaping Report:"),i(),n(18,"ckeditor",25),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.landscaping_report,d)||(p.item.landscaping_report=d),N(d)}),i(),s(19,Wn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.environment_health_and_safety_report),m("ngClass",u(15,ae,t.itemForm.get("environment_health_and_safety_report").invalid&&(t.itemForm.get("environment_health_and_safety_report").dirty||t.itemForm.get("environment_health_and_safety_report").touched))),l(),m("ngIf",t.itemForm.get("environment_health_and_safety_report").invalid&&(t.itemForm.get("environment_health_and_safety_report").dirty||t.itemForm.get("environment_health_and_safety_report").touched)),l(5),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.professional_sustainability_report),m("ngClass",u(17,ae,t.itemForm.get("professional_sustainability_report").invalid&&(t.itemForm.get("professional_sustainability_report").dirty||t.itemForm.get("professional_sustainability_report").touched))),l(),m("ngIf",t.itemForm.get("professional_sustainability_report").invalid&&(t.itemForm.get("professional_sustainability_report").dirty||t.itemForm.get("professional_sustainability_report").touched)),l(5),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.landscaping_report),m("ngClass",u(19,ae,t.itemForm.get("landscaping_report").invalid&&(t.itemForm.get("landscaping_report").dirty||t.itemForm.get("landscaping_report").touched))),l(),m("ngIf",t.itemForm.get("landscaping_report").invalid&&(t.itemForm.get("landscaping_report").dirty||t.itemForm.get("landscaping_report").touched))}}function Kn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Yn(o,a){if(o&1&&(n(0,"div",11),s(1,Kn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("civil_works_design_report").errors)==null?null:t.required)}}function Jn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",26),e(5,"Civil Works Design Report:"),i(),n(6,"ckeditor",27),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.civil_works_design_report,d)||(p.item.civil_works_design_report=d),N(d)}),i(),s(7,Yn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.civil_works_design_report),m("ngClass",u(5,ae,t.itemForm.get("civil_works_design_report").invalid&&(t.itemForm.get("civil_works_design_report").dirty||t.itemForm.get("civil_works_design_report").touched))),l(),m("ngIf",t.itemForm.get("civil_works_design_report").invalid&&(t.itemForm.get("civil_works_design_report").dirty||t.itemForm.get("civil_works_design_report").touched))}}function Qn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xn(o,a){if(o&1&&(n(0,"div",11),s(1,Qn,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("water_and_sanitation_designs_report").errors)==null?null:t.required)}}function Zn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",28),e(5,"Water and Sanitation Designs Report:"),i(),n(6,"ckeditor",29),J("ngModelChange",function(d){R(t);let p=c();return Y(p.item.water_and_sanitation_designs_report,d)||(p.item.water_and_sanitation_designs_report=d),N(d)}),i(),s(7,Xn,2,1,"div",10),i()()()()}if(o&2){let t=c();l(6),m("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),K("ngModel",t.item.water_and_sanitation_designs_report),m("ngClass",u(5,ae,t.itemForm.get("water_and_sanitation_designs_report").invalid&&(t.itemForm.get("water_and_sanitation_designs_report").dirty||t.itemForm.get("water_and_sanitation_designs_report").touched))),l(),m("ngIf",t.itemForm.get("water_and_sanitation_designs_report").invalid&&(t.itemForm.get("water_and_sanitation_designs_report").dirty||t.itemForm.get("water_and_sanitation_designs_report").touched))}}var Ae=class o{constructor(a,t,r,d,p,he){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=p;this.route=he;this.mProgress=g(!1);this.item={};this.mEditor=ie;this.itemForm=this.fb.group({architect_report:["",f.nullValidator],structural_engineer_report:["",f.nullValidator],electrical_engineer_report:["",f.nullValidator],ict_engineer_report:["",f.nullValidator],mechanical_engineer_report:["",f.nullValidator],environment_health_and_safety_report:["",f.nullValidator],professional_sustainability_report:["",f.nullValidator],landscaping_report:["",f.nullValidator],civil_works_design_report:["",f.nullValidator],water_and_sanitation_designs_report:["",f.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=g(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}onSubmit(a){let t={id:this.id,architect_report:a.architect_report,structural_engineer_report:a.structural_engineer_report,electrical_engineer_report:a.electrical_engineer_report,ict_engineer_report:a.ict_engineer_report,mechanical_engineer_report:a.mechanical_engineer_report,environment_health_and_safety_report:a.environment_health_and_safety_report,professional_sustainability_report:a.professional_sustainability_report,landscaping_report:a.landscaping_report,civil_works_design_report:a.civil_works_design_report,water_and_sanitation_designs_report:a.water_and_sanitation_designs_report};this.mProgress=g(!0),this.mDetailedDesignService.professionalRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=g(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=g(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(D),_(P),_(b),_(H),_(G),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-professional-recommendation"]],standalone:!1,decls:16,vars:27,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","architect_report",1,"col-form-label","required"],["formControlName","architect_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["role","alert",1,"invalid-feedback"],["for","structural_engineer_report",1,"col-form-label","required"],["formControlName","structural_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","electrical_engineer_report",1,"col-form-label","required"],["formControlName","electrical_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","ict_engineer_report",1,"col-form-label","required"],["formControlName","ict_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","mechanical_engineer_report",1,"col-form-label","required"],["formControlName","mechanical_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","environment_health_and_safety_report",1,"col-form-label","required"],["formControlName","environment_health_and_safety_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","professional_sustainability_report",1,"col-form-label","required"],["formControlName","professional_sustainability_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","landscaping_report",1,"col-form-label","required"],["formControlName","landscaping_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","civil_works_design_report",1,"col-form-label","required"],["formControlName","civil_works_design_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","water_and_sanitation_designs_report",1,"col-form-label","required"],["formControlName","water_and_sanitation_designs_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"]],template:function(t,r){t&1&&(s(0,Fn,1,0,"app-progress",0),n(1,"div")(2,"form",1),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),s(3,Pn,8,7,"div",0)(4,Nn,8,7,"div",0)(5,An,8,7,"div",0)(6,jn,8,7,"div",0)(7,Bn,8,7,"div",0)(8,$n,20,21,"div",0)(9,Jn,8,7,"div",0)(10,Zn,8,7,"div",0),n(11,"div",2)(12,"button",3),e(13,"Cancel"),i(),n(14,"button",4),e(15,"Submit"),i()()()()),t&2&&(m("ngIf",r.mProgress()),l(2),m("formGroup",r.itemForm),l(),m("ngIf",r.mAppContextService.hasRoles(h(11,xe))||r.mAppContextService.hasRoles(h(12,vn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(13,xe))||r.mAppContextService.hasRoles(h(14,xn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(15,xe))||r.mAppContextService.hasRoles(h(16,hn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(17,xe))||r.mAppContextService.hasRoles(h(18,Sn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(19,xe))||r.mAppContextService.hasRoles(h(20,yn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(21,xe))||r.mAppContextService.hasRoles(h(22,Cn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(23,xe))||r.mAppContextService.hasRoles(h(24,bn))),l(),m("ngIf",r.mAppContextService.hasRoles(h(25,xe))||r.mAppContextService.hasRoles(h(26,En))),l(4),m("disabled",r.itemForm.invalid))},dependencies:[k,F,w,I,M,V,j,O,L,B,re],encapsulation:2})}};var Rt=o=>({"is-invalid":o});function tr(o,a){o&1&&v(0,"app-progress")}function ir(o,a){if(o&1&&(n(0,"option",26),e(1),i()),o&2){let t=a.$implicit;m("value",S(t.id)),l(),C(t.alias)}}function nr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function rr(o,a){if(o&1&&(n(0,"div",27),s(1,nr,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function or(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ar(o,a){if(o&1&&(n(0,"div",27),s(1,or,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var ke=class o{constructor(a,t,r,d,p,he){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=p;this.route=he;this.mProgress=g(!1);this.item={};this.mEditor=ie;this.itemForm=this.fb.group({detailed_plan_status_id:["",f.required],remarks:["",f.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=g(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=g(!0),this.mDetailedDesignService.detailedDesignReportRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=g(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=g(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=g(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(D),_(P),_(b),_(H),_(G),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-design-report"]],standalone:!1,decls:72,vars:21,consts:[[4,"ngIf"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"mb-3"],["for","architect_report"],[1,"text-muted"],["for","electrical_engineer_report"],["for","ict_engineer_report"],["for","mechanical_engineer_report"],["for","environment_health_and_safety_report"],["for","professional_sustainability_report"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,tr,1,0,"app-progress",0),n(1,"div")(2,"fieldset",1)(3,"legend",2)(4,"h6",3),e(5,"PROFEFESSIONAL RECOMMENDATIONS"),i()(),n(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e(10,"Architect Report:"),i(),n(11,"div",8),e(12),i()()(),n(13,"div",5)(14,"div",6)(15,"label",9),e(16,"Electrical Engineer Report:"),i(),n(17,"div",8),e(18),i()()(),n(19,"div",5)(20,"div",6)(21,"label",9),e(22,"Structural Engineer Report:"),i(),n(23,"div",8),e(24),i()()(),n(25,"div",5)(26,"div",6)(27,"label",10),e(28,"ICT Engineer Report:"),i(),n(29,"div",8),e(30),i()()(),n(31,"div",5)(32,"div",6)(33,"label",11),e(34,"Mechanical Engineer Report:"),i(),n(35,"div",8),e(36),i()()(),n(37,"div",5)(38,"div",6)(39,"label",12),e(40,"Environment Health and Safety Report:"),i(),n(41,"div",8),e(42),i()()(),n(43,"div",5)(44,"div",6)(45,"label",13),e(46,"Professional Sustainability Report:"),i(),n(47,"div",8),e(48),i()()()()()(),n(49,"div")(50,"form",14),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(51,"div",4)(52,"div",5)(53,"div",15)(54,"label",16),e(55,"Status:"),i(),n(56,"select",17)(57,"option",18),e(58,"--- Select status ---"),i(),s(59,ir,2,3,"option",19),i(),s(60,rr,2,1,"div",20),i()(),n(61,"div",5)(62,"div",15)(63,"label",21),e(64,"Additional Remarks:"),i(),v(65,"ckeditor",22),s(66,ar,2,1,"div",20),i()()(),n(67,"div",23)(68,"button",24),e(69,"Cancel"),i(),n(70,"button",25),e(71,"Submit"),i()()()()),t&2){let d,p;m("ngIf",r.mProgress()),l(12),C(r.item.architect_report),l(6),C(r.item.electrical_engineer_report),l(6),C(r.item.structural_engineer_report),l(6),C(r.item.ict_engineer_report),l(6),C(r.item.mechanical_engineer_report),l(6),C(r.item.environment_health_and_safety_report),l(6),C(r.item.professional_sustainability_report),l(2),m("formGroup",r.itemForm),l(6),m("ngClass",u(17,Rt,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),l(3),m("ngForOf",r.mNextPreviousStatuses),l(),m("ngIf",((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.dirty)||((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.touched))),l(5),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(19,Rt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),l(),m("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),l(4),m("disabled",r.itemForm.invalid)}},dependencies:[k,X,F,w,I,M,V,fe,ve,ue,j,O,L,B,re],encapsulation:2})}};var Ge=o=>({"is-invalid":o});function lr(o,a){o&1&&v(0,"app-progress")}function sr(o,a){if(o&1&&(n(0,"option",16),e(1),i()),o&2){let t=a.$implicit;m("value",S(t.id)),l(),C(t.alias)}}function dr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function pr(o,a){if(o&1&&(n(0,"div",17),s(1,dr,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function cr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function _r(o,a){if(o&1&&(n(0,"div",17),s(1,cr,2,0,"div",0),i()),o&2){let t,r=c(2);l(),m("ngIf",(t=r.itemForm.get("letter_of_no_objection").errors)==null?null:t.required)}}function gr(o,a){if(o&1){let t=A();n(0,"div",3)(1,"div",4)(2,"label",18),e(3,"Letter of No Objection:"),i(),n(4,"input",19),x("change",function(d){R(t);let p=c();return N(p.onLetterOfNoObjection(d))}),i(),s(5,_r,2,1,"div",9),i()()}if(o&2){let t=c();l(4),m("ngClass",u(2,Ge,t.itemForm.get("letter_of_no_objection").invalid&&(t.itemForm.get("letter_of_no_objection").dirty||t.itemForm.get("letter_of_no_objection").touched))),l(),m("ngIf",t.itemForm.get("letter_of_no_objection").invalid&&(t.itemForm.get("letter_of_no_objection").dirty||t.itemForm.get("letter_of_no_objection").touched))}}function ur(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function fr(o,a){if(o&1&&(n(0,"div",17),s(1,ur,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var qe=class o{constructor(a,t,r,d,p,he){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=p;this.route=he;this.mProgress=g(!1);this.item={};this.mEditor=ie;this.itemForm=this.fb.group({detailed_plan_status_id:["",f.required],letter_of_no_objection:["",f.nullValidator],remarks:["",f.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=g(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}onSubmit(a){let t=new FormData;t.append("detailed_plan_status_id",a.detailed_plan_status_id),this.letter_of_no_objection_file?t.append("letter_of_no_objection",this.letter_of_no_objection_file,this.letter_of_no_objection_file.name):t.append("letter_of_no_objection",""),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.committeeStageDetailedPlanItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=g(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=g(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=g(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}onLetterOfNoObjection(a){if(a.target.value){let t=a.target.files[0];this.letter_of_no_objection_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(D),_(P),_(b),_(H),_(G),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-committee-stage"]],standalone:!1,decls:25,vars:15,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","letter_of_no_objection",1,"col-form-label","required"],["formControlName","letter_of_no_objection","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,r){if(t&1&&(s(0,lr,1,0,"app-progress",0),n(1,"div")(2,"form",1),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),s(11,sr,2,3,"option",8),i(),s(12,pr,2,1,"div",9),i()(),s(13,gr,6,4,"div",10),n(14,"div",3)(15,"div",4)(16,"label",11),e(17,"Additional Remarks:"),i(),v(18,"ckeditor",12),s(19,fr,2,1,"div",9),i()()(),n(20,"div",13)(21,"button",14),e(22,"Cancel"),i(),n(23,"button",15),e(24,"Submit"),i()()()()),t&2){let d,p;m("ngIf",r.mProgress()),l(2),m("formGroup",r.itemForm),l(6),m("ngClass",u(11,Ge,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),l(3),m("ngForOf",r.mNextPreviousStatuses),l(),m("ngIf",((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.dirty)||((p=r.itemForm.get("detailed_plan_status_id"))==null?null:p.touched))),l(),m("ngIf",r.itemForm.get("detailed_plan_status_id").value==9),l(5),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(13,Ge,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),l(),m("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),l(4),m("disabled",r.itemForm.invalid)}},dependencies:[k,X,F,w,I,M,V,fe,ve,ne,ue,j,O,L,B,re],encapsulation:2})}};var ze=o=>({"is-invalid":o});function xr(o,a){o&1&&v(0,"app-progress")}function hr(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=c();l(),m("href",S(t.item.notice_of_approval_url),y)}}function Sr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function yr(o,a){if(o&1&&(n(0,"div",16),s(1,Sr,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("notice_of_approval").errors)==null?null:t.required)}}function Cr(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=c();l(),m("href",S(t.item.construction_permit_url),y)}}function br(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Er(o,a){if(o&1&&(n(0,"div",16),s(1,br,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("construction_permit").errors)==null?null:t.required)}}function Fr(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Dr(o,a){if(o&1&&(n(0,"div",16),s(1,Fr,2,0,"div",0),i()),o&2){let t,r=c();l(),m("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var je=class o{constructor(a,t,r,d,p,he){this.mToastrService=a;this.mDetailedDesignService=t;this.router=r;this.fb=d;this.route=p;this.mAppContextService=he;this.mProgress=g(!1);this.item={};this.mEditor=ie;this.itemForm=this.fb.group({notice_of_approval:["",f.required],construction_permit:["",f.required],remarks:["",f.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=g(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=g(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=g(!1)}})}onSubmit(a){let t=new FormData;t.append("notice_of_approval",this.notice_of_approval_file||"",this.notice_of_approval_file?.name||""),t.append("construction_permit",this.construction_permit_file||"",this.construction_permit_file?.name||""),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.constructionPermitItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=g(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=g(!1)}})}onConstructionPermitChange(a){if(a.target.value){let t=a.target.files[0];this.construction_permit_file=t}}onNoticeOfApprovalChange(a){if(a.target.value){let t=a.target.files[0];this.notice_of_approval_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(D),_(P),_(H),_(G),_(q),_(b))}}static{this.\u0275cmp=E({type:o,selectors:[["app-construction-permit"]],standalone:!1,decls:29,vars:19,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","notice_of_approval",1,"col-form-label","required"],["formControlName","notice_of_approval","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","construction_permit",1,"col-form-label","required"],["formControlName","construction_permit","type","file",1,"form-control",3,"change","ngClass"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(s(0,xr,1,0,"app-progress",0),n(1,"div")(2,"form",1),x("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Notice of Approval: "),s(8,hr,3,2,"span",0),i(),n(9,"input",6),x("change",function(p){return r.onNoticeOfApprovalChange(p)}),i(),s(10,yr,2,1,"div",7),i()(),n(11,"div",3)(12,"div",4)(13,"label",8),e(14,"Construction Permit: "),s(15,Cr,3,2,"span",0),i(),n(16,"input",9),x("change",function(p){return r.onConstructionPermitChange(p)}),i(),s(17,Er,2,1,"div",7),i()(),n(18,"div",3)(19,"div",4)(20,"label",10),e(21,"Additional Remarks:"),i(),v(22,"ckeditor",11),s(23,Dr,2,1,"div",7),i()()(),n(24,"div",12)(25,"button",13),e(26,"Cancel"),i(),n(27,"button",14),e(28,"Submit"),i()()()()),t&2&&(m("ngIf",r.mProgress()),l(2),m("formGroup",r.itemForm),l(6),m("ngIf",r.item.notice_of_approval_url),l(),m("ngClass",u(13,ze,r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched))),l(),m("ngIf",r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched)),l(5),m("ngIf",r.item.construction_permit_url),l(),m("ngClass",u(15,ze,r.itemForm.get("construction_permit").invalid&&(r.itemForm.get("construction_permit").dirty||r.itemForm.get("construction_permit").touched))),l(),m("ngIf",r.itemForm.get("construction_permit").invalid&&(r.itemForm.get("construction_permit").dirty||r.itemForm.get("construction_permit").touched)),l(5),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",u(17,ze,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),l(),m("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),l(4),m("disabled",r.itemForm.invalid))},dependencies:[k,F,w,I,M,V,ne,j,O,L,B,re],encapsulation:2})}};var Ce=()=>[1],Pr=()=>[2],Tr=()=>[10,11],Rr=()=>[9,12,13,14,15,16,18,19],Ue=()=>[10,11,12,17];function Nr(o,a){o&1&&v(0,"app-progress")}function wr(o,a){if(o&1&&(n(0,"div",6),e(1,`
              `),n(2,"label",24),e(3,"Company:"),i(),e(4,`
              `),n(5,"div",8),e(6),i(),e(7,`
            `),i()),o&2){let t=c();l(6),C(t.item.investor==null?null:t.item.investor.name)}}function Mr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.indemnity_form_url),y)}}function Ar(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.architectural_design_url),y)}}function kr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.structural_design_url),y)}}function qr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.electrical_design_url),y)}}function jr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.ict_design_url),y)}}function Or(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.mechanical_design_url),y)}}function Vr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.landscaping_design_url),y)}}function Br(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.signage_design_url),y)}}function Lr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.other_relevant_documents_url),y)}}function Hr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.green_certification_registration_url),y)}}function Gr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=c();l(2),m("href",S(t.item.nema_project_report_url),y)}}function zr(o,a){o&1&&(n(0,"div"),e(1,`
              `),v(2,"app-create"),e(3,`
            `),i())}function Ur(o,a){o&1&&(n(0,"div"),e(1,`
              `),v(2,"app-planner-review"),e(3,`
            `),i())}function Wr(o,a){o&1&&(n(0,"div"),e(1,`
              `),v(2,"app-professional-recommendation"),e(3,`
            `),i())}function $r(o,a){o&1&&(n(0,"div"),e(1,`
              `),v(2,"app-design-report"),e(3,`
            `),i())}function Kr(o,a){o&1&&(n(0,"div"),e(1,`
              `),v(2,"app-committee-stage"),e(3,`
            `),i())}function Yr(o,a){o&1&&(n(0,"div"),e(1,`
              `),v(2,"app-construction-permit"),e(3,`
            `),i())}var Oe=class o{constructor(a,t,r,d){this.mConstructionPermitService=a;this.mAppContextService=t;this.mToastrService=r;this.route=d;this.item={};this.mProgress=g(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(t){return new(t||o)(_(Et),_(b),_(D),_(q))}}static{this.\u0275cmp=E({type:o,selectors:[["app-process"]],standalone:!1,decls:190,vars:32,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required1"],[1,"text-muted"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required1"],["for","architectural_design",1,"col-form-label","required1"],["for","structural_design",1,"col-form-label","required1"],["for","electrical_design",1,"col-form-label","required1"],["for","ict_design",1,"col-form-label","required1"],["for","mechanical_design",1,"col-form-label","required1"],["for","landscaping_design",1,"col-form-label","required1"],["for","signage_design",1,"col-form-label","required1"],["for","other_relevant_documents",1,"col-form-label","required1"],["for","green_certification_registration",1,"col-form-label","required1"],["for","nema_project_report",1,"col-form-label","required1"],["for","investor_id",1,"col-form-label","required1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(t,r){t&1&&(s(0,Nr,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div",3),e(10,`
          `),n(11,"div",4),e(12,`
            `),s(13,wr,8,1,"div",5),e(14,`
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
                    `),s(45,Mr,5,2,"div",0),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
                `),n(49,"div",12),e(50,`
                  `),n(51,"div",6),e(52,`
                    `),n(53,"label",14),e(54,"Architectural Design:"),i(),e(55,`
                    `),s(56,Ar,5,2,"div",0),e(57,`
                  `),i(),e(58,`
                `),i(),e(59,`
                `),n(60,"div",12),e(61,`
                  `),n(62,"div",6),e(63,`
                    `),n(64,"label",15),e(65,"Structural Design:"),i(),e(66,`
                    `),s(67,kr,5,2,"div",0),e(68,`
                  `),i(),e(69,`
                `),i(),e(70,`
                `),n(71,"div",12),e(72,`
                  `),n(73,"div",6),e(74,`
                    `),n(75,"label",16),e(76,"Electrical Design:"),i(),e(77,`
                    `),s(78,qr,5,2,"div",0),e(79,`
                  `),i(),e(80,`
                `),i(),e(81,`
                `),n(82,"div",12),e(83,`
                  `),n(84,"div",6),e(85,`
                    `),n(86,"label",17),e(87,"ICT Design:"),i(),e(88,`
                    `),s(89,jr,5,2,"div",0),e(90,`
                  `),i(),e(91,`
                `),i(),e(92,`
                `),n(93,"div",12),e(94,`
                  `),n(95,"div",6),e(96,`
                    `),n(97,"label",18),e(98,"Mechanical Design:"),i(),e(99,`
                    `),s(100,Or,5,2,"div",0),e(101,`
                  `),i(),e(102,`
                `),i(),e(103,`
                `),n(104,"div",12),e(105,`
                  `),n(106,"div",6),e(107,`
                    `),n(108,"label",19),e(109,"Landscaping Design:"),i(),e(110,`
                    `),s(111,Vr,5,2,"div",0),e(112,`
                  `),i(),e(113,`
                `),i(),e(114,`
                `),n(115,"div",12),e(116,`
                  `),n(117,"div",6),e(118,`
                    `),n(119,"label",20),e(120,"Signage Design:"),i(),e(121,`
                    `),s(122,Br,5,2,"div",0),e(123,`
                  `),i(),e(124,`
                `),i(),e(125,`
                `),n(126,"div",4),e(127,`
                  `),n(128,"div",6),e(129,`
                    `),n(130,"label",21),e(131,"Other Relevant Documents:"),i(),e(132,`
                    `),s(133,Lr,5,2,"div",0),e(134,`
                  `),i(),e(135,`
                `),i(),e(136,`
                `),n(137,"div",12),e(138,`
                  `),n(139,"div",6),e(140,`
                    `),n(141,"label",22),e(142,"Green Certification Registration:"),i(),e(143,`
                    `),s(144,Hr,5,2,"div",0),e(145,`
                  `),i(),e(146,`
                `),i(),e(147,`
                `),n(148,"div",12),e(149,`
                  `),n(150,"div",6),e(151,`
                    `),n(152,"label",23),e(153,"NEMA Project Report:"),i(),e(154,`
                    `),s(155,Gr,5,2,"div",0),e(156,`
                  `),i(),e(157,`
                `),i(),e(158,`
              `),i(),e(159,`
            `),i(),e(160,`
          `),i(),e(161,`
        `),i(),e(162,`

        `),n(163,"div",3),e(164,`
          `),n(165,"div",4),e(166,`
            `),e(167,`
            `),s(168,zr,4,0,"div",0),e(169,`
            `),e(170,`
            `),s(171,Ur,4,0,"div",0),e(172,`
            `),e(173,`
            `),s(174,Wr,4,0,"div",0),e(175,`
            `),e(176,`
            `),s(177,$r,4,0,"div",0),e(178,`
            `),e(179,`
            `),s(180,Kr,4,0,"div",0),e(181,`
            `),e(182,`
            `),s(183,Yr,4,0,"div",0),e(184,`
          `),i(),e(185,`
        `),i(),e(186,`

      `),i(),e(187,`
    `),i(),e(188,`
  `),i(),e(189,`
`),i()),t&2&&(m("ngIf",r.mProgress()),l(13),m("ngIf",r.item.investor),l(11),C(r.item.project_brief),l(21),m("ngIf",r.item.indemnity_form),l(11),m("ngIf",r.item.architectural_design),l(11),m("ngIf",r.item.structural_design),l(11),m("ngIf",r.item.electrical_design),l(11),m("ngIf",r.item.ict_design),l(11),m("ngIf",r.item.mechanical_design),l(11),m("ngIf",r.item.landscaping_design),l(11),m("ngIf",r.item.signage_design),l(11),m("ngIf",r.item.other_relevant_documents),l(11),m("ngIf",r.item.green_certification_registration),l(11),m("ngIf",r.item.nema_project_report),l(13),m("ngIf",r.item.detailed_plan_status_id==1&&(r.mAppContextService.hasRoles(h(20,Ce))||r.mAppContextService.hasRoles(h(21,Pr)))),l(3),m("ngIf",r.item.detailed_plan_status_id==3&&(r.mAppContextService.hasRoles(h(22,Ce))||r.mAppContextService.hasRoles(h(23,Tr)))),l(3),m("ngIf",r.item.detailed_plan_status_id==4&&(r.mAppContextService.hasRoles(h(24,Ce))||r.mAppContextService.hasRoles(h(25,Rr)))),l(3),m("ngIf",r.item.detailed_plan_status_id==5&&(r.mAppContextService.hasRoles(h(26,Ce))||r.mAppContextService.hasRoles(h(27,Ue)))),l(3),m("ngIf",(r.item.detailed_plan_status_id==6||r.item.detailed_plan_status_id==8)&&(r.mAppContextService.hasRoles(h(28,Ce))||r.mAppContextService.hasRoles(h(29,Ue)))),l(3),m("ngIf",r.item.detailed_plan_status_id==9&&(r.mAppContextService.hasRoles(h(30,Ce))||r.mAppContextService.hasRoles(h(31,Ue)))))},dependencies:[F,I,Z,U,ee,te,ye,we,Ae,ke,qe,je],encapsulation:2})}};var Jr=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Te,data:{title:"Construction Permits / Detailed Designs"}},{path:"create",component:ye,data:{title:"Construction Permits / Detailed Designs / Create"}},{path:"edit/:id",component:Re,data:{title:"Construction Permits / Detailed Designs / Edit"}},{path:"show/:id",component:Ne,data:{title:"Construction Permits / Detailed Designs / Show"}},{path:"process/:id",component:Oe,data:{title:"Construction Permits / Detailed Designs / Process"}}],Ve=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Fe({type:o})}static{this.\u0275inj=Ee({imports:[Ie,He.forChild(Jr),He]})}};var Nt=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Fe({type:o})}static{this.\u0275inj=Ee({imports:[Ie,Ve,St,ot,st,U,_t,gt,ft,rt,ht,ut,bt,nt,at,Pe,mt,Ft]})}};export{Nt as DetailedDesignModule};
