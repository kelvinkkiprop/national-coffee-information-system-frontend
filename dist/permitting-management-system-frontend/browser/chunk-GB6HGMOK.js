import{a as bt,b as J,c as Et}from"./chunk-N23QNFFO.js";import{a as At}from"./chunk-JYREPJ6U.js";import{c as ae,d as v,e as j,f as O,g as ht,h as Ct,i as V,l as B,m as L,n as me,o as le,p as se,q as G,s as yt}from"./chunk-HGRQUFQJ.js";import{a as P,b as St}from"./chunk-SJG5BJVG.js";import{a as F,b as Y,c as E,e as I}from"./chunk-FHELIIU2.js";import{Ba as l,Bc as at,Ca as n,Cb as k,Da as i,Db as W,Ea as g,Eb as D,Fc as ne,Gb as Xe,Gc as K,Hc as mt,Ib as De,Ic as lt,L as Ue,M as be,Mb as Ze,Mc as st,Na as A,Nb as et,Nc as dt,O as Ve,Oc as Ie,Pa as h,Pc as pt,R,Ra as p,Rc as ct,S as M,T as Z,Tc as re,U as ye,Ub as q,Uc as oe,Wb as H,Wc as ut,Xb as N,Ya as $e,_ as u,ab as e,bb as y,cb as Be,cd as _t,dc as Le,dd as gt,e as Mt,eb as ee,fa as $,fb as te,ga as C,gb as ie,ha as m,hb as x,ib as Fe,kb as S,lb as f,mb as We,nd as ft,oa as _,od as vt,pa as b,pc as tt,pd as xt,qa as Ee,qb as Ke,qc as it,rb as Ye,sb as Je,sc as nt,ta as s,ub as Qe,wc as w,xc as rt,yc as ot}from"./chunk-RYSGXS5Z.js";var It=Mt(At());var T=class o{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${F.base_url}/detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${F.base_url}/detailed-designs-construction-permits`;return this.http.post(t,a)}getOneItem(a){let t=`${F.base_url}/detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a,t){let r=`${F.base_url}/detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}deleteItem(a){let t=`${F.base_url}/detailed-designs-construction-permits/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${F.base_url}/search-detailed-designs-construction-permits`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${F.base_url}/unpaginated-items-detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}getParcelItem(a){let t=`${F.base_url}/parcels-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}getInvestorParcelsItems(a){let t=`${F.base_url}/investor-parcels-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusDetailedPlanItem(a){let t=`${F.base_url}/next-previous-status-detailed-designs-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}unpaginatedDetailedPlanItems(){let a=`${F.base_url}/unpaginated-items-detailed-designs-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}detailedPlanItem(a,t){let r=`${F.base_url}/detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}plannerDetailedPlanItem(a){let t=`${F.base_url}/planner-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a)}professionalRecommendationsDetailedPlanItem(a){let t=`${F.base_url}/professional-recommendations-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}detailedDesignReportRecommendationsDetailedPlanItem(a){let t=`${F.base_url}/detailed-design-report-detailed-designs-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}committeeStageDetailedPlanItem(a,t){let r=`${F.base_url}/committee-stage-detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}constructionPermitItem(a,t){let r=`${F.base_url}/construction-permit-detailed-designs-construction-permits/${a}`;return this.http.post(r,t)}onDownloadProfessionalReport(a){let t=new Ze;t=t.set("Accept","application/pdf");let r=`${F.base_url}/detailed-designs-construction-permits-generate-professional-report-pdf/${a.id}`;return this.http.get(r,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||o)(Ve(E),Ve(et))}}static{this.\u0275prov=Ue({token:o,factory:o.\u0275fac,providedIn:"root"})}};var kt=o=>({"is-invalid":o}),qt=(o,a,t,r,d,c,ve,wt,Rt)=>({"bg-secondary text-dark":o,"bg-primary text-dark":a,"bg-dark":t,"bg-warning text-dark":r,"bg-info":d,"bg-danger":c,"bg-light text-dark":ve,"text-muted":wt,"bg-success":Rt}),Ft=()=>[1],Dt=()=>[2],jt=(o,a)=>({active:o,disabled:a});function Ot(o,a){o&1&&g(0,"app-progress")}function Vt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Bt(o,a){if(o&1&&(n(0,"div",16),e(1,`
                  `),s(2,Vt,2,0,"div",1),e(3,`
                `),i()),o&2){let t=p();m(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function Lt(o,a){if(o&1&&(n(0,"span"),e(1,`
                    `),n(2,"a",31),e(3,"Download"),i(),e(4,`
                `),i()),o&2){let t=p().$implicit;m(2),l("href",x(t.construction_permit_url),C)}}function Ht(o,a){if(o&1&&(n(0,"li")(1,"a",32),Z(),g(2,"svg",33),e(3," Edit"),i()()),o&2){let t=p().$implicit;m(),l("routerLink",Fe("/detailed-designs/edit/",t.id))}}function Gt(o,a){if(o&1&&(n(0,"li")(1,"a",32),Z(),g(2,"svg",34),e(3," Process"),i()()),o&2){let t=p().$implicit;m(),l("routerLink",Fe("/detailed-designs/process/",t.id))}}function zt(o,a){if(o&1){let t=A();n(0,"button",35),h("click",function(){R(t);let d=p().$implicit,c=p(2);return M(c.onDelete(d))}),Z(),g(1,"svg",36),i()}}function Ut(o,a){if(o&1&&(n(0,"tr"),e(1,`
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
                `),n(25,"td"),e(26),Ye(27,"date"),i(),e(28,`
                `),n(29,"td"),e(30,`
                  `),s(31,Lt,5,2,"span",1),e(32,`
                `),i(),e(33,`
                `),n(34,"td"),e(35,`
                  `),n(36,"div",23),e(37,`
                    `),n(38,"a",24),Z(),g(39,"svg",25),i(),e(40,`
                    `),e(41,`
                    `),ye(),n(42,"c-dropdown",26),e(43,`
                      `),n(44,"button",27),e(45,`
                        `),Z(),g(46,"svg",28),e(47,`
                      `),i(),e(48,`
                      `),ye(),n(49,"ul",29),e(50,`
                        `),e(51,`
                        `),s(52,Ht,4,2,"li",1),e(53,`
                        `),e(54,`
                        `),s(55,Gt,4,2,"li",1),e(56,`
                      `),i(),e(57,`
                    `),i(),e(58,`
                    `),s(59,zt,2,0,"button",30),e(60,`
                  `),i(),e(61,`
                `),i(),e(62,`
              `),i()),o&2){let t=a.$implicit,r=a.index,d=p(2);m(3),Be("",d.mPageFrom+r,"."),m(3),y(t.application_number),m(3),y(t.project_brief),m(3),y(t.investor.name),m(5),y(t.consultant.name),m(4),l("ngClass",Ke(16,qt,[t.detailed_plan_status_id==1,t.detailed_plan_status_id==2,t.detailed_plan_status_id==3,t.detailed_plan_status_id==4,t.detailed_plan_status_id==5,t.detailed_plan_status_id==6,t.detailed_plan_status_id==7,t.detailed_plan_status_id==8,t.detailed_plan_status_id==9])),m(),Be(`
                    `,t.detailed_plan_status==null?null:t.detailed_plan_status.name,`
                  `),m(4),y(Je(27,14,t.created_at)),m(5),l("ngIf",t.construction_permit_url),m(7),l("routerLink",Fe("/detailed-designs/show/",t.id)),m(14),l("ngIf",d.mAppContextService.hasRoles(S(26,Ft))||d.mAppContextService.hasRoles(S(27,Dt))&&(t.status_id==1||t.status_id==2)),m(3),l("ngIf",!d.mAppContextService.hasRoles(S(28,Dt))),m(4),l("ngIf",d.mAppContextService.hasRoles(S(29,Ft)))}}function $t(o,a){if(o&1&&(n(0,"div",17),e(1,`
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
              `),s(41,Ut,63,30,"tr",21),e(42,`
            `),i(),e(43,`
          `),i(),e(44,`
        `),i()),o&2){let t=p();m(41),l("ngForOf",t.mConstructionPermits)}}function Wt(o,a){if(o&1){let t=A();n(0,"li",39),e(1,`
              `),n(2,"a",40),h("click",function(){let d=R(t).$implicit,c=p(2);return M(c.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(o&2){let t=a.$implicit;l("ngClass",We(2,jt,t.active,!t.url)),m(2),l("innerHTML",t.label,$)}}function Kt(o,a){if(o&1&&(n(0,"div"),e(1,`
          `),n(2,"ul",37),e(3,`
            `),s(4,Wt,4,5,"li",38),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let t=p();m(4),l("ngForOf",t.links)}}function Yt(o,a){o&1&&(e(0,`
          `),n(1,"p",41),e(2,"No items"),i(),e(3,`
        `))}var Pe=class o{constructor(a,t,r){this.mDetailedDesignService=a;this.mToastrService=t;this.mAppContextService=r;this.mConstructionPermits={};this.links=[];this.mProgress=u(!1)}ngOnInit(){this.index(),this.search_term=new Ct("",v.required),this.itemForm=new ht({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mDetailedDesignService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mDetailedDesignService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mConstructionPermits=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onDelete(a){It.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mDetailedDesignService.deleteItem(a).subscribe({next:d=>{d&&(this.mConstructionPermits=this.mConstructionPermits.filter(c=>c.id!==a.id),this.mToastrService.error(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.error(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mDetailedDesignService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mDetailedDesignService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(T),_(I),_(E))}}static{this.\u0275cmp=b({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/detailed-designs/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,r){if(t&1&&(s(0,Ot,1,0,"app-progress",1),n(1,"c-row"),e(2,`
  `),n(3,"c-col",2),e(4,`
    `),n(5,"c-card",3),e(6,`
      `),n(7,"c-card-header"),e(8,`
        `),n(9,"div",4),e(10,`
          `),n(11,"div",5),e(12,`
            `),n(13,"a",6),e(14,`
              `),Z(),g(15,"svg",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),ye(),n(19,"div"),e(20,`
            `),n(21,"form",8),h("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),n(23,"div",9),e(24,`
                `),g(25,"input",10),e(26,`
                `),n(27,"div",11),e(28,`
                  `),n(29,"button",12),e(30,`
                    `),Z(),g(31,"svg",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),s(35,Bt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),ye(),n(42,"c-card-body"),e(43,`

        `),s(44,$t,45,1,"div",15),e(45,`

        `),s(46,Kt,7,1,"div",1),e(47,`

        `),s(48,Yt,4,0,"ng-template",null,0,Qe),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),t&2){let d=$e(49);l("ngIf",r.mProgress()),m(21),l("formGroup",r.itemForm),m(4),l("ngClass",f(7,kt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),m(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),m(9),l("ngIf",r.mConstructionPermits.length>0)("ngIfElse",d),m(2),l("ngIf",r.links)}},dependencies:[k,W,D,N,P,w,ne,K,mt,re,oe,vt,ft,V,ae,j,O,L,B,tt,Ie,pt,st,dt,Xe],encapsulation:2})}};var U=o=>({"is-invalid":o});function Jt(o,a){o&1&&g(0,"app-progress")}function Qt(o,a){if(o&1&&(n(0,"option",41),e(1),i()),o&2){let t=a.$implicit;l("value",t.id),m(),y(t.application_number)}}function Xt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Zt(o,a){if(o&1&&(n(0,"div",42),e(1,`
                              `),s(2,Xt,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("id"))==null||t.errors==null?null:t.errors.required)}}function ei(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ti(o,a){if(o&1&&(n(0,"div",42),e(1,`
                              `),s(2,ei,2,0,"div",0),e(3,`
                              `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("indemnity_form").errors)==null?null:t.required)}}function ii(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ni(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,ii,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("architectural_design").errors)==null?null:t.required)}}function ri(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function oi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,ri,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("structural_design").errors)==null?null:t.required)}}function ai(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function mi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,ai,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("electrical_design").errors)==null?null:t.required)}}function li(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function si(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,li,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("ict_design").errors)==null?null:t.required)}}function di(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function pi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,di,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("mechanical_design").errors)==null?null:t.required)}}function ci(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ui(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,ci,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("landscaping_design").errors)==null?null:t.required)}}function _i(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function gi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,_i,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("signage_design").errors)==null?null:t.required)}}function fi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function vi(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,fi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("other_necessary_drawings").errors)==null?null:t.required)}}function xi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Si(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,xi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("green_certification_registration").errors)==null?null:t.required)}}function hi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ci(o,a){if(o&1&&(n(0,"div",42),e(1,`
                            `),s(2,hi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("nema_project_report").errors)==null?null:t.required)}}var Se=class o{constructor(a,t,r,d,c){this.mDetailedDesignService=a;this.router=t;this.mToastrService=r;this.mAppContextService=d;this.fb=c;this.mProgress=u(!1);this.itemForm=this.fb.group({id:["",v.required],indemnity_form:["",v.required],architectural_design:["",v.required],structural_design:["",v.required],electrical_design:["",v.required],ict_design:["",v.required],mechanical_design:["",v.required],landscaping_design:["",v.required],signage_design:["",v.required],other_necessary_drawings:["",v.nullValidator],green_certification_registration:["",v.required],nema_project_report:["",v.required]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDetailedDesignService.unpaginatedItems().subscribe({next:a=>{a&&(this.mMasterplanSubmissions=a.data.masterplan_submissions,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("id",a.id),t.append("indemnity_form",this.indemnity_form_file,this.indemnity_form_file.name),t.append("architectural_design",this.architectural_design_file,this.architectural_design_file.name),t.append("structural_design",this.structural_design_file,this.structural_design_file.name),t.append("electrical_design",this.electrical_design_file,this.electrical_design_file.name),t.append("ict_design",this.ict_design_file,this.ict_design_file.name),t.append("mechanical_design",this.mechanical_design_file,this.mechanical_design_file.name),t.append("landscaping_design",this.landscaping_design_file,this.landscaping_design_file.name),t.append("signage_design",this.signage_design_file,this.signage_design_file.name),t.append("other_necessary_drawings",this.other_necessary_drawings_file,this.other_necessary_drawings_file.name),t.append("green_certification_registration",this.green_certification_registration_file,this.green_certification_registration_file.name),t.append("nema_project_report",this.nema_project_report_file,this.nema_project_report_file.name),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.createItem(t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onIndemnityFormChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_form_file=t}}onArchitecturalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.architectural_design_file=t}}onStructuralDesignChange(a){if(a.target.value){let t=a.target.files[0];this.structural_design_file=t}}onElectricalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.electrical_design_file=t}}onIctDesignChange(a){if(a.target.value){let t=a.target.files[0];this.ict_design_file=t}}onMechanicalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.mechanical_design_file=t}}onLandscapingDesignChange(a){if(a.target.value){let t=a.target.files[0];this.landscaping_design_file=t}}onSignageDesignChange(a){if(a.target.value){let t=a.target.files[0];this.signage_design_file=t}}onOtherNecessaryDrawingsChange(a){if(a.target.value){let t=a.target.files[0];this.other_necessary_drawings_file=t}}onGreenCertificationRegistrationChange(a){if(a.target.value){let t=a.target.files[0];this.green_certification_registration_file=t}}onNemaProjectReportChange(a){if(a.target.value){let t=a.target.files[0];this.nema_project_report_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(T),_(H),_(I),_(E),_(G))}}static{this.\u0275cmp=b({type:o,selectors:[["app-create"]],standalone:!1,decls:199,vars:52,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required"],["formControlName","indemnity_form","type","file",1,"form-control",3,"change","ngClass"],["for","architectural_design",1,"col-form-label","required"],["formControlName","architectural_design","type","file",1,"form-control",3,"change","ngClass"],["for","structural_design",1,"col-form-label","required"],["formControlName","structural_design","type","file",1,"form-control",3,"change","ngClass"],["for","electrical_design",1,"col-form-label","required"],["formControlName","electrical_design","type","file",1,"form-control",3,"change","ngClass"],["for","ict_design",1,"col-form-label","required"],["formControlName","ict_design","type","file",1,"form-control",3,"change","ngClass"],["for","mechanical_design",1,"col-form-label","required"],["formControlName","mechanical_design","type","file",1,"form-control",3,"change","ngClass"],["for","landscaping_design",1,"col-form-label","required"],["formControlName","landscaping_design","type","file",1,"form-control",3,"change","ngClass"],["for","signage_design",1,"col-form-label","required"],["formControlName","signage_design","type","file",1,"form-control",3,"change","ngClass"],["for","other_necessary_drawings",1,"col-form-label","required1"],["formControlName","other_necessary_drawings","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_registration",1,"col-form-label","required"],["formControlName","green_certification_registration","type","file",1,"form-control",3,"change","ngClass"],["for","nema_project_report",1,"col-form-label","required"],["formControlName","nema_project_report","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,Jt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
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
                              `),s(33,Qt,2,2,"option",13),e(34,`
                            `),i(),e(35,`
                            `),s(36,Zt,4,1,"div",14),e(37,`
                          `),i(),e(38,`
                        `),i(),e(39,`
                        `),n(40,"div",15),e(41,`
                          `),n(42,"div",9),e(43,`
                              `),n(44,"label",16),e(45,"Indemnity Form:"),i(),e(46,`
                              `),n(47,"input",17),h("change",function(c){return r.onIndemnityFormChange(c)}),i(),e(48,`
                              `),s(49,ti,4,1,"div",14),e(50,`
                          `),i(),e(51,`
                        `),i(),e(52,`
                        `),n(53,"div",15),e(54,`
                        `),n(55,"div",9),e(56,`
                            `),n(57,"label",18),e(58,"Architectural Design:"),i(),e(59,`
                            `),n(60,"input",19),h("change",function(c){return r.onArchitecturalDesignChange(c)}),i(),e(61,`
                            `),s(62,ni,4,1,"div",14),e(63,`
                        `),i(),e(64,`
                        `),i(),e(65,`
                        `),n(66,"div",15),e(67,`
                        `),n(68,"div",9),e(69,`
                            `),n(70,"label",20),e(71,"Structural Design:"),i(),e(72,`
                            `),n(73,"input",21),h("change",function(c){return r.onStructuralDesignChange(c)}),i(),e(74,`
                            `),s(75,oi,4,1,"div",14),e(76,`
                        `),i(),e(77,`
                        `),i(),e(78,`
                        `),n(79,"div",15),e(80,`
                        `),n(81,"div",9),e(82,`
                            `),n(83,"label",22),e(84,"Electrical Design:"),i(),e(85,`
                            `),n(86,"input",23),h("change",function(c){return r.onElectricalDesignChange(c)}),i(),e(87,`
                            `),s(88,mi,4,1,"div",14),e(89,`
                        `),i(),e(90,`
                        `),i(),e(91,`
                        `),n(92,"div",15),e(93,`
                        `),n(94,"div",9),e(95,`
                            `),n(96,"label",24),e(97,"ICT Design:"),i(),e(98,`
                            `),n(99,"input",25),h("change",function(c){return r.onIctDesignChange(c)}),i(),e(100,`
                            `),s(101,si,4,1,"div",14),e(102,`
                        `),i(),e(103,`
                        `),i(),e(104,`
                        `),n(105,"div",15),e(106,`
                        `),n(107,"div",9),e(108,`
                            `),n(109,"label",26),e(110,"Mechanical Design:"),i(),e(111,`
                            `),n(112,"input",27),h("change",function(c){return r.onMechanicalDesignChange(c)}),i(),e(113,`
                            `),s(114,pi,4,1,"div",14),e(115,`
                        `),i(),e(116,`
                        `),i(),e(117,`
                        `),n(118,"div",15),e(119,`
                        `),n(120,"div",9),e(121,`
                            `),n(122,"label",28),e(123,"Landscaping Design:"),i(),e(124,`
                            `),n(125,"input",29),h("change",function(c){return r.onLandscapingDesignChange(c)}),i(),e(126,`
                            `),s(127,ui,4,1,"div",14),e(128,`
                        `),i(),e(129,`
                        `),i(),e(130,`
                        `),n(131,"div",15),e(132,`
                        `),n(133,"div",9),e(134,`
                            `),n(135,"label",30),e(136,"Signage Design:"),i(),e(137,`
                            `),n(138,"input",31),h("change",function(c){return r.onSignageDesignChange(c)}),i(),e(139,`
                            `),s(140,gi,4,1,"div",14),e(141,`
                        `),i(),e(142,`
                        `),i(),e(143,`
                        `),n(144,"div",8),e(145,`
                        `),n(146,"div",9),e(147,`
                            `),n(148,"label",32),e(149,"Other Necessary Drawings:"),i(),e(150,`
                            `),n(151,"input",33),h("change",function(c){return r.onOtherNecessaryDrawingsChange(c)}),i(),e(152,`
                            `),s(153,vi,4,1,"div",14),e(154,`
                        `),i(),e(155,`
                        `),i(),e(156,`
                        `),n(157,"div",15),e(158,`
                        `),n(159,"div",9),e(160,`
                            `),n(161,"label",34),e(162,"Green Certification Registration:"),i(),e(163,`
                            `),n(164,"input",35),h("change",function(c){return r.onGreenCertificationRegistrationChange(c)}),i(),e(165,`
                            `),s(166,Si,4,1,"div",14),e(167,`
                        `),i(),e(168,`
                        `),i(),e(169,`
                        `),n(170,"div",15),e(171,`
                        `),n(172,"div",9),e(173,`
                            `),n(174,"label",36),e(175,"NEMA Project Report:"),i(),e(176,`
                            `),n(177,"input",37),h("change",function(c){return r.onNemaProjectReportChange(c)}),i(),e(178,`
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
`),i()),t&2){let d,c;l("ngIf",r.mProgress()),m(11),l("formGroup",r.itemForm),m(17),l("ngClass",f(28,U,((d=r.itemForm.get("id"))==null?null:d.invalid)&&(((d=r.itemForm.get("id"))==null?null:d.dirty)||((d=r.itemForm.get("id"))==null?null:d.touched)))),m(5),l("ngForOf",r.mMasterplanSubmissions),m(3),l("ngIf",((c=r.itemForm.get("id"))==null?null:c.invalid)&&(((c=r.itemForm.get("id"))==null?null:c.dirty)||((c=r.itemForm.get("id"))==null?null:c.touched))),m(11),l("ngClass",f(30,U,r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched))),m(2),l("ngIf",r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched)),m(11),l("ngClass",f(32,U,r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched))),m(2),l("ngIf",r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched)),m(11),l("ngClass",f(34,U,r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched))),m(2),l("ngIf",r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched)),m(11),l("ngClass",f(36,U,r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched))),m(2),l("ngIf",r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched)),m(11),l("ngClass",f(38,U,r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched))),m(2),l("ngIf",r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched)),m(11),l("ngClass",f(40,U,r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched))),m(2),l("ngIf",r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched)),m(11),l("ngClass",f(42,U,r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched))),m(2),l("ngIf",r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched)),m(11),l("ngClass",f(44,U,r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched))),m(2),l("ngIf",r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched)),m(11),l("ngClass",f(46,U,r.itemForm.get("other_necessary_drawings").invalid&&(r.itemForm.get("other_necessary_drawings").dirty||r.itemForm.get("other_necessary_drawings").touched))),m(2),l("ngIf",r.itemForm.get("other_necessary_drawings").invalid&&(r.itemForm.get("other_necessary_drawings").dirty||r.itemForm.get("other_necessary_drawings").touched)),m(11),l("ngClass",f(48,U,r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched))),m(2),l("ngIf",r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched)),m(11),l("ngClass",f(50,U,r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched))),m(2),l("ngIf",r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched)),m(11),l("disabled",r.itemForm.invalid)}},dependencies:[k,W,D,N,P,w,ne,K,re,oe,V,le,se,ae,me,j,O,L,B],encapsulation:2})}};var Te=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["app-edit"]],standalone:!1,decls:2,vars:0,template:function(t,r){t&1&&(n(0,"p"),e(1,"edit works!"),i())},encapsulation:2})}};var bi=()=>[2];function Ei(o,a){o&1&&g(0,"app-progress")}function Fi(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=p();m(),y(t.item.investor==null?null:t.item.investor.name)}}function Di(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=p();m(),y(t.item.type==null?null:t.item.type.name)}}function Ii(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.indemnity_form_url),C)}}function Pi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.architectural_design_url),C)}}function Ti(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.structural_design_url),C)}}function Ni(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.electrical_design_url),C)}}function wi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.ict_design_url),C)}}function Ri(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.mechanical_design_url),C)}}function Mi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.landscaping_design_url),C)}}function Ai(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.signage_design_url),C)}}function ki(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.other_necessary_drawings_url),C)}}function qi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.green_certification_registration_url),C)}}function ji(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.nema_project_report_url),C)}}function Oi(o,a){if(o&1){let t=A();n(0,"fieldset",3),e(1,`
            `),n(2,"legend",4)(3,"h6",5),e(4,"PROFESSIONAL RECOMMENDATIONS"),i()(),e(5,`
            `),n(6,"div",6),e(7,`
              `),n(8,"div",10),e(9,`
                `),n(10,"div",2),e(11,`
                  `),n(12,"label",8),e(13,"Architect Report:"),i(),e(14,`
                  `),n(15,"div",18),e(16,`
                    `),g(17,"span",19),e(18,`
                  `),i(),e(19,`
                `),i(),e(20,`
              `),i(),e(21,`
              `),n(22,"div",10),e(23,`
                `),n(24,"div",2),e(25,`
                  `),n(26,"label",20),e(27,"Structural Engineer Report:"),i(),e(28,`
                  `),n(29,"div",18),e(30,`
                    `),g(31,"span",19),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
              `),i(),e(35,`
              `),n(36,"div",10),e(37,`
                `),n(38,"div",2),e(39,`
                  `),n(40,"label",20),e(41,"Electrical Engineer Report:"),i(),e(42,`
                  `),n(43,"div",18),e(44,`
                    `),g(45,"span",19),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
              `),i(),e(49,`
              `),n(50,"div",10),e(51,`
                `),n(52,"div",2),e(53,`
                  `),n(54,"label",20),e(55,"ICT Engineer Report:"),i(),e(56,`
                  `),n(57,"div",18),e(58,`
                    `),g(59,"span",19),e(60,`
                  `),i(),e(61,`
                `),i(),e(62,`
              `),i(),e(63,`
              `),n(64,"div",10),e(65,`
                `),n(66,"div",2),e(67,`
                  `),n(68,"label",20),e(69,"Mechanical Engineer Report:"),i(),e(70,`
                  `),n(71,"div",18),e(72,`
                    `),g(73,"span",19),e(74,`
                  `),i(),e(75,`
                `),i(),e(76,`
              `),i(),e(77,`
              `),n(78,"div",10),e(79,`
                `),n(80,"div",2),e(81,`
                  `),n(82,"label",20),e(83,"Environment Health and Safety Report:"),i(),e(84,`
                  `),n(85,"div",18),e(86,`
                    `),g(87,"span",19),e(88,`
                  `),i(),e(89,`
                `),i(),e(90,`
              `),i(),e(91,`
              `),n(92,"div",10),e(93,`
                `),n(94,"div",2),e(95,`
                  `),n(96,"label",20),e(97,"Professional Sustainability Report:"),i(),e(98,`
                  `),n(99,"div",18),e(100,`
                    `),g(101,"span",19),e(102,`
                  `),i(),e(103,`
                `),i(),e(104,`
              `),i(),e(105,`
            `),i(),e(106,`
            `),n(107,"div",10),e(108,`
              `),n(109,"div",21),e(110,`
                `),n(111,"button",22),h("click",function(){R(t);let d=p();return M(d.onDownloadReport(d.item))}),e(112,"Print Report"),i(),e(113,`
              `),i(),e(114,`
            `),i(),e(115,`
          `),i()}if(o&2){let t=p();m(17),l("innerHTML",t.mAppContextService.safeHtml(t.item.architect_report),$),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.structural_engineer_report),$),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.electrical_engineer_report),$),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.ict_engineer_report),$),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.mechanical_engineer_report),$),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.environment_health_and_safety_report),$),m(14),l("innerHTML",t.mAppContextService.safeHtml(t.item.professional_sustainability_report),$)}}var Ne=class o{constructor(a,t,r,d){this.mDetailedDesignService=a;this.mAppContextService=t;this.mToastrService=r;this.route=d;this.mProgress=u(!1)}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onDownloadReport(a){this.mProgress.set(!0),this.mDetailedDesignService.onDownloadProfessionalReport(a).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let d=t;var r=URL.createObjectURL(d);window.open(r,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(T),_(E),_(I),_(q))}}static{this.\u0275cmp=b({type:o,selectors:[["app-show"]],standalone:!1,decls:199,vars:17,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"col-md-4"],["for","context_analysis"],["class","border p-2 mb-3",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],[1,"text-muted",2,"text-align","justify","font-style","normal"],[3,"innerHTML"],["for","estimated_project_duration"],[1,"mt-3","text-end"],["cButton","","color","light",1,"text-dark","btn-sm",3,"click"]],template:function(t,r){t&1&&(s(0,Ei,1,0,"app-progress",0),n(1,"c-row"),e(2,`
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
                  `),s(26,Fi,2,1,"div",9),e(27,`
                `),i(),e(28,`
              `),i(),e(29,`
              `),n(30,"div",7),e(31,`
                `),n(32,"div",2),e(33,`
                  `),n(34,"label",8),e(35,"Nature of Application:"),i(),e(36,`
                  `),s(37,Di,2,1,"div",9),e(38,`
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
                  `),s(70,Ii,5,2,"div",0),e(71,`
                `),i(),e(72,`
              `),i(),e(73,`
              `),n(74,"div",12),e(75,`
                `),n(76,"div",2),e(77,`
                  `),n(78,"label",13),e(79,"Architectural Design:"),i(),e(80,`
                  `),s(81,Pi,5,2,"div",0),e(82,`
                `),i(),e(83,`
              `),i(),e(84,`
              `),n(85,"div",12),e(86,`
                `),n(87,"div",2),e(88,`
                  `),n(89,"label",13),e(90,"Structural Design:"),i(),e(91,`
                  `),s(92,Ti,5,2,"div",0),e(93,`
                `),i(),e(94,`
              `),i(),e(95,`
              `),n(96,"div",12),e(97,`
                `),n(98,"div",2),e(99,`
                  `),n(100,"label",13),e(101,"Electrical Design:"),i(),e(102,`
                  `),s(103,Ni,5,2,"div",0),e(104,`
                `),i(),e(105,`
              `),i(),e(106,`
              `),n(107,"div",12),e(108,`
                `),n(109,"div",2),e(110,`
                  `),n(111,"label",13),e(112,"ICT Design:"),i(),e(113,`
                  `),s(114,wi,5,2,"div",0),e(115,`
                `),i(),e(116,`
              `),i(),e(117,`
              `),n(118,"div",12),e(119,`
                `),n(120,"div",2),e(121,`
                  `),n(122,"label",13),e(123,"Mechanical Design:"),i(),e(124,`
                  `),s(125,Ri,5,2,"div",0),e(126,`
                `),i(),e(127,`
              `),i(),e(128,`
              `),n(129,"div",12),e(130,`
                `),n(131,"div",2),e(132,`
                  `),n(133,"label",13),e(134,"Landscaping Design:"),i(),e(135,`
                  `),s(136,Mi,5,2,"div",0),e(137,`
                `),i(),e(138,`
              `),i(),e(139,`
              `),n(140,"div",12),e(141,`
                `),n(142,"div",2),e(143,`
                  `),n(144,"label",13),e(145,"Signage Design:"),i(),e(146,`
                  `),s(147,Ai,5,2,"div",0),e(148,`
                `),i(),e(149,`
              `),i(),e(150,`
              `),n(151,"div",12),e(152,`
                `),n(153,"div",2),e(154,`
                  `),n(155,"label",13),e(156,"Other Necessary Drawings:"),i(),e(157,`
                  `),s(158,ki,5,2,"div",0),e(159,`
                `),i(),e(160,`
              `),i(),e(161,`
              `),n(162,"div",12),e(163,`
                `),n(164,"div",2),e(165,`
                  `),n(166,"label",13),e(167,"Green Certification Registration:"),i(),e(168,`
                  `),s(169,qi,5,2,"div",0),e(170,`
                `),i(),e(171,`
              `),i(),e(172,`
              `),n(173,"div",12),e(174,`
                `),n(175,"div",2),e(176,`
                  `),n(177,"label",13),e(178,"NEMA Project Report:"),i(),e(179,`
                  `),s(180,ji,5,2,"div",0),e(181,`
                `),i(),e(182,`
              `),i(),e(183,`
            `),i(),e(184,`
          `),i(),e(185,`
          `),s(186,Oi,116,7,"fieldset",14),e(187,`

          `),n(188,"div",15),e(189,`
            `),n(190,"button",16),e(191,"Cancel"),i(),e(192,`
            `),e(193,`
          `),i(),e(194,`
        `),i(),e(195,`

      `),i(),e(196,`
    `),i(),e(197,`
  `),i(),e(198,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(26),l("ngIf",r.item.investor),m(11),l("ngIf",r.item.type),m(12),y(r.item.project_brief),m(21),l("ngIf",r.item.indemnity_form),m(11),l("ngIf",r.item.architectural_design),m(11),l("ngIf",r.item.structural_design),m(11),l("ngIf",r.item.electrical_design),m(11),l("ngIf",r.item.ict_design),m(11),l("ngIf",r.item.mechanical_design),m(11),l("ngIf",r.item.landscaping_design),m(11),l("ngIf",r.item.signage_design),m(11),l("ngIf",r.item.other_necessary_drawings),m(11),l("ngIf",r.item.green_certification_registration),m(11),l("ngIf",r.item.nema_project_report),m(6),l("ngIf",!r.mAppContextService.hasRoles(S(16,bi))))},dependencies:[D,N,P,w,ne,K,re,oe],encapsulation:2})}};var Pt=o=>({"is-invalid":o});function Vi(o,a){o&1&&g(0,"app-progress")}function Bi(o,a){if(o&1&&(n(0,"option",15),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),y(t.alias)}}function Li(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Hi(o,a){if(o&1&&(n(0,"div",16),s(1,Li,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function Gi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function zi(o,a){if(o&1&&(n(0,"div",16),s(1,Gi,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var we=class o{constructor(a,t,r,d,c,ve){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=c;this.route=ve;this.mProgress=u(!1);this.item={};this.mEditor=Y;this.itemForm=this.fb.group({detailed_plan_status_id:["",v.required],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=u(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=u(!0),this.mDetailedDesignService.plannerDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=u(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=u(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=u(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(I),_(T),_(E),_(H),_(G),_(q))}}static{this.\u0275cmp=b({type:o,selectors:[["app-planner-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,Vi,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),s(11,Bi,2,3,"option",8),i(),s(12,Hi,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),i(),g(17,"ckeditor",11),s(18,zi,2,1,"div",9),i()()(),n(19,"div",12)(20,"button",13),e(21,"Cancel"),i(),n(22,"button",14),e(23,"Submit"),i()()()()),t&2){let d,c;l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",f(10,Pt,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched))),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",f(12,Pt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[k,W,D,N,P,w,V,le,se,me,j,O,L,B,J],encapsulation:2})}};var he=()=>[1],$i=()=>[11],Wi=()=>[12],Ki=()=>[13],Yi=()=>[14],Ji=()=>[15],Qi=()=>[16],fe=o=>({"is-invalid":o});function Xi(o,a){o&1&&g(0,"app-progress")}function Zi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function en(o,a){if(o&1&&(n(0,"div",11),s(1,Zi,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("architect_report").errors)==null?null:t.required)}}function tn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",8),e(5,"Architect Report:"),i(),n(6,"ckeditor",9),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.architect_report,d)||(c.item.architect_report=d),M(d)}),i(),s(7,en,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.architect_report),l("ngClass",f(5,fe,t.itemForm.get("architect_report").invalid&&(t.itemForm.get("architect_report").dirty||t.itemForm.get("architect_report").touched))),m(),l("ngIf",t.itemForm.get("architect_report").invalid&&(t.itemForm.get("architect_report").dirty||t.itemForm.get("architect_report").touched))}}function nn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function rn(o,a){if(o&1&&(n(0,"div",11),s(1,nn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("structural_engineer_report").errors)==null?null:t.required)}}function on(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",12),e(5,"Structural Engineer Report:"),i(),n(6,"ckeditor",13),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.structural_engineer_report,d)||(c.item.structural_engineer_report=d),M(d)}),i(),s(7,rn,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.structural_engineer_report),l("ngClass",f(5,fe,t.itemForm.get("structural_engineer_report").invalid&&(t.itemForm.get("structural_engineer_report").dirty||t.itemForm.get("structural_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("structural_engineer_report").invalid&&(t.itemForm.get("structural_engineer_report").dirty||t.itemForm.get("structural_engineer_report").touched))}}function an(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function mn(o,a){if(o&1&&(n(0,"div",11),s(1,an,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("electrical_engineer_report").errors)==null?null:t.required)}}function ln(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",14),e(5,"Electrical Engineer Report:"),i(),n(6,"ckeditor",15),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.electrical_engineer_report,d)||(c.item.electrical_engineer_report=d),M(d)}),i(),s(7,mn,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.electrical_engineer_report),l("ngClass",f(5,fe,t.itemForm.get("electrical_engineer_report").invalid&&(t.itemForm.get("electrical_engineer_report").dirty||t.itemForm.get("electrical_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("electrical_engineer_report").invalid&&(t.itemForm.get("electrical_engineer_report").dirty||t.itemForm.get("electrical_engineer_report").touched))}}function sn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function dn(o,a){if(o&1&&(n(0,"div",11),s(1,sn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("ict_engineer_report").errors)==null?null:t.required)}}function pn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",16),e(5,"ICT Engineer Report:"),i(),n(6,"ckeditor",17),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.ict_engineer_report,d)||(c.item.ict_engineer_report=d),M(d)}),i(),s(7,dn,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.ict_engineer_report),l("ngClass",f(5,fe,t.itemForm.get("ict_engineer_report").invalid&&(t.itemForm.get("ict_engineer_report").dirty||t.itemForm.get("ict_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("ict_engineer_report").invalid&&(t.itemForm.get("ict_engineer_report").dirty||t.itemForm.get("ict_engineer_report").touched))}}function cn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function un(o,a){if(o&1&&(n(0,"div",11),s(1,cn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("mechanical_engineer_report").errors)==null?null:t.required)}}function _n(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",18),e(5,"Mechanical Engineer Report:"),i(),n(6,"ckeditor",19),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.mechanical_engineer_report,d)||(c.item.mechanical_engineer_report=d),M(d)}),i(),s(7,un,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.mechanical_engineer_report),l("ngClass",f(5,fe,t.itemForm.get("mechanical_engineer_report").invalid&&(t.itemForm.get("mechanical_engineer_report").dirty||t.itemForm.get("mechanical_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("mechanical_engineer_report").invalid&&(t.itemForm.get("mechanical_engineer_report").dirty||t.itemForm.get("mechanical_engineer_report").touched))}}function gn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function fn(o,a){if(o&1&&(n(0,"div",11),s(1,gn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("environment_health_and_safety_report").errors)==null?null:t.required)}}function vn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function xn(o,a){if(o&1&&(n(0,"div",11),s(1,vn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("professional_sustainability_report").errors)==null?null:t.required)}}function Sn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",20),e(5,"Environment Health and Safety Report:"),i(),n(6,"ckeditor",21),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.environment_health_and_safety_report,d)||(c.item.environment_health_and_safety_report=d),M(d)}),i(),s(7,fn,2,1,"div",10),i()(),n(8,"div",6)(9,"div",7)(10,"label",22),e(11,"Professional Sustainability Report:"),i(),n(12,"ckeditor",23),ie("ngModelChange",function(d){R(t);let c=p();return te(c.item.professional_sustainability_report,d)||(c.item.professional_sustainability_report=d),M(d)}),i(),s(13,xn,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.environment_health_and_safety_report),l("ngClass",f(10,fe,t.itemForm.get("environment_health_and_safety_report").invalid&&(t.itemForm.get("environment_health_and_safety_report").dirty||t.itemForm.get("environment_health_and_safety_report").touched))),m(),l("ngIf",t.itemForm.get("environment_health_and_safety_report").invalid&&(t.itemForm.get("environment_health_and_safety_report").dirty||t.itemForm.get("environment_health_and_safety_report").touched)),m(5),l("editor",t.mEditor)("config",t.mAppContextService.ckEditorConfig),ee("ngModel",t.item.professional_sustainability_report),l("ngClass",f(12,fe,t.itemForm.get("professional_sustainability_report").invalid&&(t.itemForm.get("professional_sustainability_report").dirty||t.itemForm.get("professional_sustainability_report").touched))),m(),l("ngIf",t.itemForm.get("professional_sustainability_report").invalid&&(t.itemForm.get("professional_sustainability_report").dirty||t.itemForm.get("professional_sustainability_report").touched))}}var Me=class o{constructor(a,t,r,d,c,ve){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=c;this.route=ve;this.mProgress=u(!1);this.item={};this.mEditor=Y;this.itemForm=this.fb.group({architect_report:["",v.nullValidator],structural_engineer_report:["",v.nullValidator],electrical_engineer_report:["",v.nullValidator],ict_engineer_report:["",v.nullValidator],mechanical_engineer_report:["",v.nullValidator],environment_health_and_safety_report:["",v.nullValidator],professional_sustainability_report:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=u(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}onSubmit(a){let t={id:this.id,architect_report:a.architect_report,structural_engineer_report:a.structural_engineer_report,electrical_engineer_report:a.electrical_engineer_report,ict_engineer_report:a.ict_engineer_report,mechanical_engineer_report:a.mechanical_engineer_report,environment_health_and_safety_report:a.environment_health_and_safety_report,professional_sustainability_report:a.professional_sustainability_report};this.mProgress=u(!0),this.mDetailedDesignService.professionalRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=u(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=u(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(I),_(T),_(E),_(H),_(G),_(q))}}static{this.\u0275cmp=b({type:o,selectors:[["app-professional-recommendation"]],standalone:!1,decls:14,vars:21,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","architect_report",1,"col-form-label","required"],["formControlName","architect_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["role","alert",1,"invalid-feedback"],["for","structural_engineer_report",1,"col-form-label","required"],["formControlName","structural_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","electrical_engineer_report",1,"col-form-label","required"],["formControlName","electrical_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","ict_engineer_report",1,"col-form-label","required"],["formControlName","ict_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","mechanical_engineer_report",1,"col-form-label","required"],["formControlName","mechanical_engineer_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","environment_health_and_safety_report",1,"col-form-label","required"],["formControlName","environment_health_and_safety_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","professional_sustainability_report",1,"col-form-label","required"],["formControlName","professional_sustainability_report","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"]],template:function(t,r){t&1&&(s(0,Xi,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),s(3,tn,8,7,"div",0)(4,on,8,7,"div",0)(5,ln,8,7,"div",0)(6,pn,8,7,"div",0)(7,_n,8,7,"div",0)(8,Sn,14,14,"div",0),n(9,"div",2)(10,"button",3),e(11,"Cancel"),i(),n(12,"button",4),e(13,"Submit"),i()()()()),t&2&&(l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(),l("ngIf",r.mAppContextService.hasRoles(S(9,he))||r.mAppContextService.hasRoles(S(10,$i))),m(),l("ngIf",r.mAppContextService.hasRoles(S(11,he))||r.mAppContextService.hasRoles(S(12,Wi))),m(),l("ngIf",r.mAppContextService.hasRoles(S(13,he))||r.mAppContextService.hasRoles(S(14,Ki))),m(),l("ngIf",r.mAppContextService.hasRoles(S(15,he))||r.mAppContextService.hasRoles(S(16,Yi))),m(),l("ngIf",r.mAppContextService.hasRoles(S(17,he))||r.mAppContextService.hasRoles(S(18,Ji))),m(),l("ngIf",r.mAppContextService.hasRoles(S(19,he))||r.mAppContextService.hasRoles(S(20,Qi))),m(4),l("disabled",r.itemForm.invalid))},dependencies:[k,D,N,P,w,V,j,O,L,B,J],encapsulation:2})}};var Tt=o=>({"is-invalid":o});function Cn(o,a){o&1&&g(0,"app-progress")}function yn(o,a){if(o&1&&(n(0,"option",26),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),y(t.alias)}}function bn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function En(o,a){if(o&1&&(n(0,"div",27),s(1,bn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function Fn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Dn(o,a){if(o&1&&(n(0,"div",27),s(1,Fn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Ae=class o{constructor(a,t,r,d,c,ve){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=c;this.route=ve;this.mProgress=u(!1);this.item={};this.mEditor=Y;this.itemForm=this.fb.group({detailed_plan_status_id:["",v.required],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=u(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=u(!0),this.mDetailedDesignService.detailedDesignReportRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=u(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=u(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=u(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(_(I),_(T),_(E),_(H),_(G),_(q))}}static{this.\u0275cmp=b({type:o,selectors:[["app-design-report"]],standalone:!1,decls:72,vars:21,consts:[[4,"ngIf"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"mb-3"],["for","architect_report"],[1,"text-muted"],["for","electrical_engineer_report"],["for","ict_engineer_report"],["for","mechanical_engineer_report"],["for","environment_health_and_safety_report"],["for","professional_sustainability_report"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,Cn,1,0,"app-progress",0),n(1,"div")(2,"fieldset",1)(3,"legend",2)(4,"h6",3),e(5,"PROFEFESSIONAL RECOMMENDATIONS"),i()(),n(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e(10,"Architect Report:"),i(),n(11,"div",8),e(12),i()()(),n(13,"div",5)(14,"div",6)(15,"label",9),e(16,"Electrical Engineer Report:"),i(),n(17,"div",8),e(18),i()()(),n(19,"div",5)(20,"div",6)(21,"label",9),e(22,"Structural Engineer Report:"),i(),n(23,"div",8),e(24),i()()(),n(25,"div",5)(26,"div",6)(27,"label",10),e(28,"ICT Engineer Report:"),i(),n(29,"div",8),e(30),i()()(),n(31,"div",5)(32,"div",6)(33,"label",11),e(34,"Mechanical Engineer Report:"),i(),n(35,"div",8),e(36),i()()(),n(37,"div",5)(38,"div",6)(39,"label",12),e(40,"Environment Health and Safety Report:"),i(),n(41,"div",8),e(42),i()()(),n(43,"div",5)(44,"div",6)(45,"label",13),e(46,"Professional Sustainability Report:"),i(),n(47,"div",8),e(48),i()()()()()(),n(49,"div")(50,"form",14),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(51,"div",4)(52,"div",5)(53,"div",15)(54,"label",16),e(55,"Status:"),i(),n(56,"select",17)(57,"option",18),e(58,"--- Select status ---"),i(),s(59,yn,2,3,"option",19),i(),s(60,En,2,1,"div",20),i()(),n(61,"div",5)(62,"div",15)(63,"label",21),e(64,"Additional Remarks:"),i(),g(65,"ckeditor",22),s(66,Dn,2,1,"div",20),i()()(),n(67,"div",23)(68,"button",24),e(69,"Cancel"),i(),n(70,"button",25),e(71,"Submit"),i()()()()),t&2){let d,c;l("ngIf",r.mProgress()),m(12),y(r.item.architect_report),m(6),y(r.item.electrical_engineer_report),m(6),y(r.item.structural_engineer_report),m(6),y(r.item.ict_engineer_report),m(6),y(r.item.mechanical_engineer_report),m(6),y(r.item.environment_health_and_safety_report),m(6),y(r.item.professional_sustainability_report),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",f(17,Tt,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched))),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",f(19,Tt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[k,W,D,N,P,w,V,le,se,me,j,O,L,B,J],encapsulation:2})}};var He=o=>({"is-invalid":o});function Pn(o,a){o&1&&g(0,"app-progress")}function Tn(o,a){if(o&1&&(n(0,"option",16),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),y(t.alias)}}function Nn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function wn(o,a){if(o&1&&(n(0,"div",17),s(1,Nn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function Rn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Mn(o,a){if(o&1&&(n(0,"div",17),s(1,Rn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("letter_of_no_objection").errors)==null?null:t.required)}}function An(o,a){if(o&1){let t=A();n(0,"div",3)(1,"div",4)(2,"label",18),e(3,"Letter of No Objection:"),i(),n(4,"input",19),h("change",function(d){R(t);let c=p();return M(c.onLetterOfNoObjection(d))}),i(),s(5,Mn,2,1,"div",9),i()()}if(o&2){let t=p();m(4),l("ngClass",f(2,He,t.itemForm.get("letter_of_no_objection").invalid&&(t.itemForm.get("letter_of_no_objection").dirty||t.itemForm.get("letter_of_no_objection").touched))),m(),l("ngIf",t.itemForm.get("letter_of_no_objection").invalid&&(t.itemForm.get("letter_of_no_objection").dirty||t.itemForm.get("letter_of_no_objection").touched))}}function kn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function qn(o,a){if(o&1&&(n(0,"div",17),s(1,kn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var ke=class o{constructor(a,t,r,d,c,ve){this.mToastrService=a;this.mDetailedDesignService=t;this.mAppContextService=r;this.router=d;this.fb=c;this.route=ve;this.mProgress=u(!1);this.item={};this.mEditor=Y;this.itemForm=this.fb.group({detailed_plan_status_id:["",v.required],letter_of_no_objection:["",v.nullValidator],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=u(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}onSubmit(a){let t=new FormData;t.append("detailed_plan_status_id",a.detailed_plan_status_id),this.letter_of_no_objection_file?t.append("letter_of_no_objection",this.letter_of_no_objection_file,this.letter_of_no_objection_file.name):t.append("letter_of_no_objection",""),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.committeeStageDetailedPlanItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=u(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=u(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=u(!0),this.mDetailedDesignService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}onLetterOfNoObjection(a){if(a.target.value){let t=a.target.files[0];this.letter_of_no_objection_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(I),_(T),_(E),_(H),_(G),_(q))}}static{this.\u0275cmp=b({type:o,selectors:[["app-committee-stage"]],standalone:!1,decls:25,vars:15,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","letter_of_no_objection",1,"col-form-label","required"],["formControlName","letter_of_no_objection","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,r){if(t&1&&(s(0,Pn,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),s(11,Tn,2,3,"option",8),i(),s(12,wn,2,1,"div",9),i()(),s(13,An,6,4,"div",10),n(14,"div",3)(15,"div",4)(16,"label",11),e(17,"Additional Remarks:"),i(),g(18,"ckeditor",12),s(19,qn,2,1,"div",9),i()()(),n(20,"div",13)(21,"button",14),e(22,"Cancel"),i(),n(23,"button",15),e(24,"Submit"),i()()()()),t&2){let d,c;l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",f(11,He,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched))),m(),l("ngIf",r.itemForm.get("detailed_plan_status_id").value==9),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",f(13,He,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[k,W,D,N,P,w,V,le,se,ae,me,j,O,L,B,J],encapsulation:2})}};var Ge=o=>({"is-invalid":o});function On(o,a){o&1&&g(0,"app-progress")}function Vn(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=p();m(),l("href",x(t.item.notice_of_approval_url),C)}}function Bn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ln(o,a){if(o&1&&(n(0,"div",16),s(1,Bn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("notice_of_approval").errors)==null?null:t.required)}}function Hn(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=p();m(),l("href",x(t.item.construction_permit_url),C)}}function Gn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function zn(o,a){if(o&1&&(n(0,"div",16),s(1,Gn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("construction_permit").errors)==null?null:t.required)}}function Un(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function $n(o,a){if(o&1&&(n(0,"div",16),s(1,Un,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var qe=class o{constructor(a,t,r,d,c,ve){this.mToastrService=a;this.mDetailedDesignService=t;this.router=r;this.fb=d;this.route=c;this.mAppContextService=ve;this.mProgress=u(!1);this.item={};this.mEditor=Y;this.itemForm=this.fb.group({notice_of_approval:["",v.required],construction_permit:["",v.required],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=u(!0),this.mDetailedDesignService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=u(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=u(!1)}})}onSubmit(a){let t=new FormData;t.append("notice_of_approval",this.notice_of_approval_file||"",this.notice_of_approval_file?.name||""),t.append("construction_permit",this.construction_permit_file||"",this.construction_permit_file?.name||""),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedDesignService.constructionPermitItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-designs"),this.mProgress=u(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=u(!1)}})}onConstructionPermitChange(a){if(a.target.value){let t=a.target.files[0];this.construction_permit_file=t}}onNoticeOfApprovalChange(a){if(a.target.value){let t=a.target.files[0];this.notice_of_approval_file=t}}static{this.\u0275fac=function(t){return new(t||o)(_(I),_(T),_(H),_(G),_(q),_(E))}}static{this.\u0275cmp=b({type:o,selectors:[["app-construction-permit"]],standalone:!1,decls:29,vars:19,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","notice_of_approval",1,"col-form-label","required"],["formControlName","notice_of_approval","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","construction_permit",1,"col-form-label","required"],["formControlName","construction_permit","type","file",1,"form-control",3,"change","ngClass"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-designs","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(s(0,On,1,0,"app-progress",0),n(1,"div")(2,"form",1),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Notice of Approval: "),s(8,Vn,3,2,"span",0),i(),n(9,"input",6),h("change",function(c){return r.onNoticeOfApprovalChange(c)}),i(),s(10,Ln,2,1,"div",7),i()(),n(11,"div",3)(12,"div",4)(13,"label",8),e(14,"Construction Permit: "),s(15,Hn,3,2,"span",0),i(),n(16,"input",9),h("change",function(c){return r.onConstructionPermitChange(c)}),i(),s(17,zn,2,1,"div",7),i()(),n(18,"div",3)(19,"div",4)(20,"label",10),e(21,"Additional Remarks:"),i(),g(22,"ckeditor",11),s(23,$n,2,1,"div",7),i()()(),n(24,"div",12)(25,"button",13),e(26,"Cancel"),i(),n(27,"button",14),e(28,"Submit"),i()()()()),t&2&&(l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngIf",r.item.notice_of_approval_url),m(),l("ngClass",f(13,Ge,r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched))),m(),l("ngIf",r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched)),m(5),l("ngIf",r.item.construction_permit_url),m(),l("ngClass",f(15,Ge,r.itemForm.get("construction_permit").invalid&&(r.itemForm.get("construction_permit").dirty||r.itemForm.get("construction_permit").touched))),m(),l("ngIf",r.itemForm.get("construction_permit").invalid&&(r.itemForm.get("construction_permit").dirty||r.itemForm.get("construction_permit").touched)),m(5),l("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",f(17,Ge,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid))},dependencies:[k,D,N,P,w,V,ae,j,O,L,B,J],encapsulation:2})}};var Ce=()=>[1],Kn=()=>[2],Yn=()=>[10,11],Jn=()=>[9,12,13,14,15,16],ze=()=>[10,11,12,17];function Qn(o,a){o&1&&g(0,"app-progress")}function Xn(o,a){if(o&1&&(n(0,"div",6),e(1,`
              `),n(2,"label",24),e(3,"Company:"),i(),e(4,`
              `),n(5,"div",8),e(6),i(),e(7,`
            `),i()),o&2){let t=p();m(6),y(t.item.investor==null?null:t.item.investor.name)}}function Zn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.indemnity_form_url),C)}}function er(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.architectural_design_url),C)}}function tr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.structural_design_url),C)}}function ir(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.electrical_design_url),C)}}function nr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.ict_design_url),C)}}function rr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.mechanical_design_url),C)}}function or(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.landscaping_design_url),C)}}function ar(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.signage_design_url),C)}}function mr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.other_necessary_drawings_url),C)}}function lr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.green_certification_registration_url),C)}}function sr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.nema_project_report_url),C)}}function dr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-create"),e(3,`
            `),i())}function pr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-planner-review"),e(3,`
            `),i())}function cr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-professional-recommendation"),e(3,`
            `),i())}function ur(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-design-report"),e(3,`
            `),i())}function _r(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-committee-stage"),e(3,`
            `),i())}function gr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-construction-permit"),e(3,`
            `),i())}var je=class o{constructor(a,t,r,d){this.mConstructionPermitService=a;this.mAppContextService=t;this.mToastrService=r;this.route=d;this.item={};this.mProgress=u(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(t){return new(t||o)(_(bt),_(E),_(I),_(q))}}static{this.\u0275cmp=b({type:o,selectors:[["app-process"]],standalone:!1,decls:190,vars:32,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required1"],[1,"text-muted"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required1"],["for","architectural_design",1,"col-form-label","required1"],["for","structural_design",1,"col-form-label","required1"],["for","electrical_design",1,"col-form-label","required1"],["for","ict_design",1,"col-form-label","required1"],["for","mechanical_design",1,"col-form-label","required1"],["for","landscaping_design",1,"col-form-label","required1"],["for","signage_design",1,"col-form-label","required1"],["for","other_necessary_drawings",1,"col-form-label","required1"],["for","green_certification_registration",1,"col-form-label","required1"],["for","nema_project_report",1,"col-form-label","required1"],["for","investor_id",1,"col-form-label","required1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(t,r){t&1&&(s(0,Qn,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div",3),e(10,`
          `),n(11,"div",4),e(12,`
            `),s(13,Xn,8,1,"div",5),e(14,`
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
                    `),s(45,Zn,5,2,"div",0),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
                `),n(49,"div",12),e(50,`
                  `),n(51,"div",6),e(52,`
                    `),n(53,"label",14),e(54,"Architectural Design:"),i(),e(55,`
                    `),s(56,er,5,2,"div",0),e(57,`
                  `),i(),e(58,`
                `),i(),e(59,`
                `),n(60,"div",12),e(61,`
                  `),n(62,"div",6),e(63,`
                    `),n(64,"label",15),e(65,"Structural Design:"),i(),e(66,`
                    `),s(67,tr,5,2,"div",0),e(68,`
                  `),i(),e(69,`
                `),i(),e(70,`
                `),n(71,"div",12),e(72,`
                  `),n(73,"div",6),e(74,`
                    `),n(75,"label",16),e(76,"Electrical Design:"),i(),e(77,`
                    `),s(78,ir,5,2,"div",0),e(79,`
                  `),i(),e(80,`
                `),i(),e(81,`
                `),n(82,"div",12),e(83,`
                  `),n(84,"div",6),e(85,`
                    `),n(86,"label",17),e(87,"ICT Design:"),i(),e(88,`
                    `),s(89,nr,5,2,"div",0),e(90,`
                  `),i(),e(91,`
                `),i(),e(92,`
                `),n(93,"div",12),e(94,`
                  `),n(95,"div",6),e(96,`
                    `),n(97,"label",18),e(98,"Mechanical Design:"),i(),e(99,`
                    `),s(100,rr,5,2,"div",0),e(101,`
                  `),i(),e(102,`
                `),i(),e(103,`
                `),n(104,"div",12),e(105,`
                  `),n(106,"div",6),e(107,`
                    `),n(108,"label",19),e(109,"Landscaping Design:"),i(),e(110,`
                    `),s(111,or,5,2,"div",0),e(112,`
                  `),i(),e(113,`
                `),i(),e(114,`
                `),n(115,"div",12),e(116,`
                  `),n(117,"div",6),e(118,`
                    `),n(119,"label",20),e(120,"Signage Design:"),i(),e(121,`
                    `),s(122,ar,5,2,"div",0),e(123,`
                  `),i(),e(124,`
                `),i(),e(125,`
                `),n(126,"div",4),e(127,`
                  `),n(128,"div",6),e(129,`
                    `),n(130,"label",21),e(131,"Other Necessary Drawings:"),i(),e(132,`
                    `),s(133,mr,5,2,"div",0),e(134,`
                  `),i(),e(135,`
                `),i(),e(136,`
                `),n(137,"div",12),e(138,`
                  `),n(139,"div",6),e(140,`
                    `),n(141,"label",22),e(142,"Green Certification Registration:"),i(),e(143,`
                    `),s(144,lr,5,2,"div",0),e(145,`
                  `),i(),e(146,`
                `),i(),e(147,`
                `),n(148,"div",12),e(149,`
                  `),n(150,"div",6),e(151,`
                    `),n(152,"label",23),e(153,"NEMA Project Report:"),i(),e(154,`
                    `),s(155,sr,5,2,"div",0),e(156,`
                  `),i(),e(157,`
                `),i(),e(158,`
              `),i(),e(159,`
            `),i(),e(160,`
          `),i(),e(161,`
        `),i(),e(162,`

        `),n(163,"div",3),e(164,`
          `),n(165,"div",4),e(166,`
            `),e(167,`
            `),s(168,dr,4,0,"div",0),e(169,`
            `),e(170,`
            `),s(171,pr,4,0,"div",0),e(172,`
            `),e(173,`
            `),s(174,cr,4,0,"div",0),e(175,`
            `),e(176,`
            `),s(177,ur,4,0,"div",0),e(178,`
            `),e(179,`
            `),s(180,_r,4,0,"div",0),e(181,`
            `),e(182,`
            `),s(183,gr,4,0,"div",0),e(184,`
          `),i(),e(185,`
        `),i(),e(186,`

      `),i(),e(187,`
    `),i(),e(188,`
  `),i(),e(189,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(13),l("ngIf",r.item.investor),m(11),y(r.item.project_brief),m(21),l("ngIf",r.item.indemnity_form),m(11),l("ngIf",r.item.architectural_design),m(11),l("ngIf",r.item.structural_design),m(11),l("ngIf",r.item.electrical_design),m(11),l("ngIf",r.item.ict_design),m(11),l("ngIf",r.item.mechanical_design),m(11),l("ngIf",r.item.landscaping_design),m(11),l("ngIf",r.item.signage_design),m(11),l("ngIf",r.item.other_necessary_drawings),m(11),l("ngIf",r.item.green_certification_registration),m(11),l("ngIf",r.item.nema_project_report),m(13),l("ngIf",r.item.detailed_plan_status_id==1&&(r.mAppContextService.hasRoles(S(20,Ce))||r.mAppContextService.hasRoles(S(21,Kn)))),m(3),l("ngIf",r.item.detailed_plan_status_id==3&&(r.mAppContextService.hasRoles(S(22,Ce))||r.mAppContextService.hasRoles(S(23,Yn)))),m(3),l("ngIf",r.item.detailed_plan_status_id==4&&(r.mAppContextService.hasRoles(S(24,Ce))||r.mAppContextService.hasRoles(S(25,Jn)))),m(3),l("ngIf",r.item.detailed_plan_status_id==5&&(r.mAppContextService.hasRoles(S(26,Ce))||r.mAppContextService.hasRoles(S(27,ze)))),m(3),l("ngIf",(r.item.detailed_plan_status_id==6||r.item.detailed_plan_status_id==8)&&(r.mAppContextService.hasRoles(S(28,Ce))||r.mAppContextService.hasRoles(S(29,ze)))),m(3),l("ngIf",r.item.detailed_plan_status_id==9&&(r.mAppContextService.hasRoles(S(30,Ce))||r.mAppContextService.hasRoles(S(31,ze)))))},dependencies:[D,P,ne,K,re,oe,Se,we,Me,Ae,ke,qe],encapsulation:2})}};var fr=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Pe,data:{title:"Construction Permits / Detailed Designs"}},{path:"create",component:Se,data:{title:"Construction Permits / Detailed Designs / Create"}},{path:"edit/:id",component:Te,data:{title:"Construction Permits / Detailed Designs / Edit"}},{path:"show/:id",component:Ne,data:{title:"Construction Permits / Detailed Designs / Show"}},{path:"process/:id",component:je,data:{title:"Construction Permits / Detailed Designs / Process"}}],Oe=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Ee({type:o})}static{this.\u0275inj=be({imports:[De,Le.forChild(fr),Le]})}};var Nt=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Ee({type:o})}static{this.\u0275inj=be({imports:[De,Oe,St,rt,lt,K,ct,ut,gt,nt,xt,_t,yt,it,ot,Ie,at,Et]})}};export{Nt as DetailedDesignModule};
