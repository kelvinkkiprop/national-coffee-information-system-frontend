import{a as St}from"./chunk-7TRQY4EV.js";import{a as Rt}from"./chunk-QFVXVQCN.js";import{b as q,c as v,d as j,e as O,f as vt,g as xt,h as B,k as V,l as L,m as de,n as pe,o as ce,p as z,q as ht}from"./chunk-BNSFMGTD.js";import{a as I,b as ft}from"./chunk-OCIEZIGI.js";import{a as E,b as U,d as F}from"./chunk-EAW54KGY.js";import{$a as qe,$c as pt,Aa as i,Ab as Z,Ba as g,Bb as P,Cc as ee,Db as Je,Dc as W,Ec as rt,Fb as Ce,Fc as ot,I as Le,J as he,Jb as Ke,Jc as at,Ka as A,Kb as Qe,Kc as mt,L as ke,Lc as be,Ma as S,Mc as lt,O as w,Oa as p,Oc as st,P as M,Q as J,Qc as te,R as Se,Rb as T,Rc as ie,Tb as G,Tc as dt,Ub as N,Va as Ue,X as _,Za as e,_a as y,ac as je,ad as ct,bb as K,ca as Ge,cb as Q,da as C,db as X,e as Nt,ea as m,eb as x,fb as ve,hb as h,ib as f,jb as ze,kd as _t,la as u,ld as ut,ma as b,mc as Xe,md as gt,na as ye,nb as He,nc as Ze,ob as $e,pb as We,pc as et,qa as s,rb as Ye,tc as R,uc as tt,vc as it,ya as l,yc as nt,za as n,zb as k}from"./chunk-THDKPFAR.js";var Ct=Nt(Rt());var D=class o{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${E.base_url}/detailed-plan-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${E.base_url}/detailed-plan-construction-permits`;return this.http.post(t,a)}getOneItem(a){let t=`${E.base_url}/detailed-plan-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a,t){let r=`${E.base_url}/detailed-plan-construction-permits/${a}`;return this.http.post(r,t)}deleteItem(a){let t=`${E.base_url}/detailed-plan-construction-permits/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${E.base_url}/search-detailed-plan-construction-permits`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${E.base_url}/unpaginated-items-detailed-plan-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}getParcelItem(a){let t=`${E.base_url}/parcels-detailed-plan-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}getInvestorParcelsItems(a){let t=`${E.base_url}/investor-parcels-detailed-plan-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusDetailedPlanItem(a){let t=`${E.base_url}/next-previous-status-detailed-plan-construction-permits/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}unpaginatedDetailedPlanItems(){let a=`${E.base_url}/unpaginated-items-detailed-plan-construction-permits`;return this.http.get(a,this.mAppContextService.getHttpOptions())}detailedPlanItem(a,t){let r=`${E.base_url}/detailed-plan-construction-permits/${a}`;return this.http.post(r,t)}plannerDetailedPlanItem(a){let t=`${E.base_url}/planner-detailed-plan-construction-permits/${a.id}`;return this.http.post(t,a)}professionalRecommendationsDetailedPlanItem(a){let t=`${E.base_url}/professional-recommendations-detailed-plan-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}detailedDesignReportRecommendationsDetailedPlanItem(a){let t=`${E.base_url}/detailed-design-report-detailed-plan-construction-permits/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}committeeStageDetailedPlanItem(a,t){let r=`${E.base_url}/committee-stage-detailed-plan-construction-permits/${a}`;return this.http.post(r,t)}constructionPermitItem(a,t){let r=`${E.base_url}/construction-permit-detailed-plan-construction-permits/${a}`;return this.http.post(r,t)}onDownloadProfessionalReport(a){let t=new Ke;t=t.set("Accept","application/pdf");let r=`${E.base_url}/detailed-plan-construction-permits-generate-professional-report-pdf/${a.id}`;return this.http.get(r,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||o)(ke(U),ke(Qe))}}static{this.\u0275prov=Le({token:o,factory:o.\u0275fac,providedIn:"root"})}};var wt=o=>({"is-invalid":o}),Mt=(o,a,t,r,d,c,Ae,Dt,Tt)=>({"bg-secondary text-dark":o,"bg-primary text-dark":a,"bg-dark":t,"bg-warning text-dark":r,"bg-info":d,"bg-danger":c,"bg-light text-dark":Ae,"text-muted":Dt,"bg-success":Tt}),Oe=()=>[1],yt=()=>[2],At=(o,a)=>({active:o,disabled:a});function kt(o,a){o&1&&g(0,"app-progress")}function qt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function jt(o,a){if(o&1&&(n(0,"div",14),e(1,`
                  `),s(2,qt,2,0,"div",1),e(3,`
                `),i()),o&2){let t=p();m(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function Ot(o,a){if(o&1&&(n(0,"span"),e(1,`
                    `),n(2,"a",29),e(3,"Download"),i(),e(4,`
                `),i()),o&2){let t=p().$implicit;m(2),l("href",x(t.construction_permit_url),C)}}function Bt(o,a){if(o&1&&(n(0,"li")(1,"a",30),J(),g(2,"svg",31),e(3," Edit"),i()()),o&2){let t=p().$implicit;m(),l("routerLink",ve("/detailed-plans/edit/",t.id))}}function Vt(o,a){if(o&1&&(n(0,"li")(1,"a",30),J(),g(2,"svg",32),e(3," Detailed design"),i()()),o&2){let t=p().$implicit;m(),l("routerLink",ve("/detailed-plans/create/",t.id))}}function Lt(o,a){if(o&1&&(n(0,"li")(1,"a",30),J(),g(2,"svg",33),e(3," Process"),i()()),o&2){let t=p().$implicit;m(),l("routerLink",ve("/detailed-plans/process/",t.id))}}function Gt(o,a){if(o&1){let t=A();n(0,"button",34),S("click",function(){w(t);let d=p().$implicit,c=p(2);return M(c.onDelete(d))}),J(),g(1,"svg",35),i()}}function Ut(o,a){if(o&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3),i(),e(4,`
                `),n(5,"td"),e(6),i(),e(7,`
                `),n(8,"td"),e(9),i(),e(10,`
                `),e(11,`
                `),e(12,`
                `),n(13,"td"),e(14),i(),e(15,`
                `),n(16,"td"),e(17,`
                  `),n(18,"span",20),e(19),i(),e(20,`
                `),i(),e(21,`
                `),n(22,"td"),e(23),$e(24,"date"),i(),e(25,`
                `),n(26,"td"),e(27,`
                  `),s(28,Ot,5,2,"span",1),e(29,`
                `),i(),e(30,`
                `),n(31,"td"),e(32,`
                  `),n(33,"div",21),e(34,`
                    `),n(35,"a",22),J(),g(36,"svg",23),i(),e(37,`
                    `),e(38,`
                    `),Se(),n(39,"c-dropdown",24),e(40,`
                      `),n(41,"button",25),e(42,`
                        `),J(),g(43,"svg",26),e(44,`
                      `),i(),e(45,`
                      `),Se(),n(46,"ul",27),e(47,`
                        `),e(48,`
                        `),s(49,Bt,4,2,"li",1),e(50,`
                        `),s(51,Vt,4,2,"li",1),e(52,`
                        `),s(53,Lt,4,2,"li",1),e(54,`
                      `),i(),e(55,`
                    `),i(),e(56,`
                    `),s(57,Gt,2,0,"button",28),e(58,`
                  `),i(),e(59,`
                `),i(),e(60,`
              `),i()),o&2){let t=a.$implicit,r=a.index,d=p(2);m(3),qe("",d.mPageFrom+r,"."),m(3),y(t.project_brief),m(3),y(t.investor.name),m(5),y(t.consultant.name),m(4),l("ngClass",He(16,Mt,[t.detailed_plan_status_id==1,t.detailed_plan_status_id==2,t.detailed_plan_status_id==3,t.detailed_plan_status_id==4,t.detailed_plan_status_id==5,t.detailed_plan_status_id==6,t.detailed_plan_status_id==7,t.detailed_plan_status_id==8,t.detailed_plan_status_id==9])),m(),qe(`
                    `,t.detailed_plan_status==null?null:t.detailed_plan_status.name,`
                  `),m(4),y(We(24,14,t.created_at)),m(5),l("ngIf",t.construction_permit_url),m(7),l("routerLink",ve("/detailed-plans/show/",t.id)),m(14),l("ngIf",d.mAppContextService.hasRoles(h(26,Oe))||d.mAppContextService.hasRoles(h(27,yt))&&(t.status_id==1||t.status_id==2)),m(2),l("ngIf",d.mAppContextService.hasRoles(h(28,Oe))||t.status_id==5),m(2),l("ngIf",!d.mAppContextService.hasRoles(h(29,yt))),m(4),l("ngIf",d.mAppContextService.hasRoles(h(30,Oe)))}}function zt(o,a){if(o&1&&(n(0,"div",15),e(1,`
          `),n(2,"table",16),e(3,`
            `),n(4,"thead",17),e(5,`
              `),n(6,"tr"),e(7,`
                `),n(8,"th",18),e(9,"#"),i(),e(10,`
                `),n(11,"th",18),e(12,"Project"),i(),e(13,`
                `),n(14,"th",18),e(15,"Investor"),i(),e(16,`
                `),e(17,`
                `),e(18,`
                `),n(19,"th",18),e(20,"Consultant"),i(),e(21,`
                `),n(22,"th",18),e(23,"Status"),i(),e(24,`
                `),n(25,"th",18),e(26,"Created"),i(),e(27,`
                `),n(28,"th",18),e(29,"Construction Permit"),i(),e(30,`
                `),n(31,"th",18),e(32,"Action"),i(),e(33,`
              `),i(),e(34,`
            `),i(),e(35,`
            `),n(36,"tbody"),e(37,`
              `),s(38,Ut,61,31,"tr",19),e(39,`
            `),i(),e(40,`
          `),i(),e(41,`
        `),i()),o&2){let t=p();m(38),l("ngForOf",t.mConstructionPermits)}}function Ht(o,a){if(o&1){let t=A();n(0,"li",38),e(1,`
              `),n(2,"a",39),S("click",function(){let d=w(t).$implicit,c=p(2);return M(c.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(o&2){let t=a.$implicit;l("ngClass",ze(2,At,t.active,!t.url)),m(2),l("innerHTML",t.label,Ge)}}function $t(o,a){if(o&1&&(n(0,"div"),e(1,`
          `),n(2,"ul",36),e(3,`
            `),s(4,Ht,4,5,"li",37),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let t=p();m(4),l("ngForOf",t.links)}}function Wt(o,a){o&1&&(e(0,`
          `),n(1,"p",40),e(2,"No items"),i(),e(3,`
        `))}var Ee=class o{constructor(a,t,r){this.mDetailedPlanService=a;this.mToastrService=t;this.mAppContextService=r;this.mConstructionPermits={};this.links=[];this.mProgress=_(!1)}ngOnInit(){this.index(),this.search_term=new xt("",v.required),this.itemForm=new vt({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mDetailedPlanService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mDetailedPlanService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mConstructionPermits=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onDelete(a){Ct.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mDetailedPlanService.deleteItem(a).subscribe({next:d=>{d&&(this.mConstructionPermits=this.mConstructionPermits.filter(c=>c.id!==a.id),this.mToastrService.error(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.error(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mDetailedPlanService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mDetailedPlanService.searchItems(a).subscribe({next:t=>{t&&(this.mConstructionPermits=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(D),u(F),u(U))}}static{this.\u0275cmp=b({type:o,selectors:[["app-index"]],standalone:!1,decls:50,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilApplications",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,r){if(t&1&&(s(0,kt,1,0,"app-progress",1),n(1,"c-row"),e(2,`
  `),n(3,"c-col",2),e(4,`
    `),n(5,"c-card",3),e(6,`
      `),n(7,"c-card-header"),e(8,`
        `),n(9,"div",4),e(10,`
          `),n(11,"div",5),e(12,`
            `),e(13,`
          `),i(),e(14,`
          `),n(15,"div"),e(16,`
            `),n(17,"form",6),S("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(18,`
              `),n(19,"div",7),e(20,`
                `),g(21,"input",8),e(22,`
                `),n(23,"div",9),e(24,`
                  `),n(25,"button",10),e(26,`
                    `),J(),g(27,"svg",11),e(28,`
                  `),i(),e(29,`
                `),i(),e(30,`
                `),s(31,jt,4,1,"div",12),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
          `),i(),e(35,`
        `),i(),e(36,`
      `),i(),e(37,`
      `),Se(),n(38,"c-card-body"),e(39,`

        `),s(40,zt,42,1,"div",13),e(41,`

        `),s(42,$t,7,1,"div",1),e(43,`

        `),s(44,Wt,4,0,"ng-template",null,0,Ye),e(46,`

      `),i(),e(47,`
    `),i(),e(48,`
  `),i(),e(49,`
`),i()),t&2){let d=Ue(45);l("ngIf",r.mProgress()),m(17),l("formGroup",r.itemForm),m(4),l("ngClass",f(7,wt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),m(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),m(9),l("ngIf",r.mConstructionPermits.length>0)("ngIfElse",d),m(2),l("ngIf",r.links)}},dependencies:[k,Z,P,N,I,R,ee,W,rt,te,ie,ut,_t,B,q,j,O,L,V,Xe,be,lt,at,mt,Je],encapsulation:2})}};var $=o=>({"is-invalid":o});function Yt(o,a){o&1&&g(0,"app-progress")}function Jt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Kt(o,a){if(o&1&&(n(0,"div",37),e(1,`
                              `),s(2,Jt,2,0,"div",0),e(3,`
                              `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("indemnity_form").errors)==null?null:t.required)}}function Qt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xt(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Qt,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("architectural_design").errors)==null?null:t.required)}}function Zt(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ei(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,Zt,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("structural_design").errors)==null?null:t.required)}}function ti(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ii(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,ti,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("electrical_design").errors)==null?null:t.required)}}function ni(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ri(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,ni,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("ict_design").errors)==null?null:t.required)}}function oi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ai(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,oi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("mechanical_design").errors)==null?null:t.required)}}function mi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function li(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,mi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("landscaping_design").errors)==null?null:t.required)}}function si(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function di(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,si,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("signage_design").errors)==null?null:t.required)}}function pi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ci(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,pi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("other_necessary_drawings").errors)==null?null:t.required)}}function _i(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ui(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,_i,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("green_certification_registration").errors)==null?null:t.required)}}function gi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function fi(o,a){if(o&1&&(n(0,"div",37),e(1,`
                            `),s(2,gi,2,0,"div",0),e(3,`
                            `),i()),o&2){let t,r=p();m(2),l("ngIf",(t=r.itemForm.get("nema_project_report").errors)==null?null:t.required)}}var ue=class o{constructor(a,t,r,d,c,Ae){this.mDetailedPlanService=a;this.router=t;this.mToastrService=r;this.mAppContextService=d;this.fb=c;this.route=Ae;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({indemnity_form:["",v.required],architectural_design:["",v.required],structural_design:["",v.required],electrical_design:["",v.required],ict_design:["",v.required],mechanical_design:["",v.required],landscaping_design:["",v.required],signage_design:["",v.required],other_necessary_drawings:["",v.nullValidator],green_certification_registration:["",v.required],nema_project_report:["",v.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t=new FormData;t.append("id",this.id),t.append("indemnity_form",this.indemnity_form_file,this.indemnity_form_file.name),t.append("architectural_design",this.architectural_design_file,this.architectural_design_file.name),t.append("structural_design",this.structural_design_file,this.structural_design_file.name),t.append("electrical_design",this.electrical_design_file,this.electrical_design_file.name),t.append("ict_design",this.ict_design_file,this.ict_design_file.name),t.append("mechanical_design",this.mechanical_design_file,this.mechanical_design_file.name),t.append("landscaping_design",this.landscaping_design_file,this.landscaping_design_file.name),t.append("signage_design",this.signage_design_file,this.signage_design_file.name),t.append("other_necessary_drawings",this.other_necessary_drawings_file,this.other_necessary_drawings_file.name),t.append("green_certification_registration",this.green_certification_registration_file,this.green_certification_registration_file.name),t.append("nema_project_report",this.nema_project_report_file,this.nema_project_report_file.name),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedPlanService.createItem(t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onIndemnityFormChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_form_file=t}}onArchitecturalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.architectural_design_file=t}}onStructuralDesignChange(a){if(a.target.value){let t=a.target.files[0];this.structural_design_file=t}}onElectricalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.electrical_design_file=t}}onIctDesignChange(a){if(a.target.value){let t=a.target.files[0];this.ict_design_file=t}}onMechanicalDesignChange(a){if(a.target.value){let t=a.target.files[0];this.mechanical_design_file=t}}onLandscapingDesignChange(a){if(a.target.value){let t=a.target.files[0];this.landscaping_design_file=t}}onSignageDesignChange(a){if(a.target.value){let t=a.target.files[0];this.signage_design_file=t}}onOtherNecessaryDrawingsChange(a){if(a.target.value){let t=a.target.files[0];this.other_necessary_drawings_file=t}}onGreenCertificationRegistrationChange(a){if(a.target.value){let t=a.target.files[0];this.green_certification_registration_file=t}}onNemaProjectReportChange(a){if(a.target.value){let t=a.target.files[0];this.nema_project_report_file=t}}static{this.\u0275fac=function(t){return new(t||o)(u(D),u(G),u(F),u(U),u(z),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-create"]],standalone:!1,decls:180,vars:47,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","indemnity_form",1,"col-form-label","required"],["formControlName","indemnity_form","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","architectural_design",1,"col-form-label","required"],["formControlName","architectural_design","type","file",1,"form-control",3,"change","ngClass"],["for","structural_design",1,"col-form-label","required"],["formControlName","structural_design","type","file",1,"form-control",3,"change","ngClass"],["for","electrical_design",1,"col-form-label","required"],["formControlName","electrical_design","type","file",1,"form-control",3,"change","ngClass"],["for","ict_design",1,"col-form-label","required"],["formControlName","ict_design","type","file",1,"form-control",3,"change","ngClass"],["for","mechanical_design",1,"col-form-label","required"],["formControlName","mechanical_design","type","file",1,"form-control",3,"change","ngClass"],["for","landscaping_design",1,"col-form-label","required"],["formControlName","landscaping_design","type","file",1,"form-control",3,"change","ngClass"],["for","signage_design",1,"col-form-label","required"],["formControlName","signage_design","type","file",1,"form-control",3,"change","ngClass"],[1,"col-md-12"],["for","other_necessary_drawings",1,"col-form-label","required1"],["formControlName","other_necessary_drawings","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_registration",1,"col-form-label","required"],["formControlName","green_certification_registration","type","file",1,"form-control",3,"change","ngClass"],["for","nema_project_report",1,"col-form-label","required"],["formControlName","nema_project_report","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(s(0,Yt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

            `),n(9,"div"),e(10,`
                `),n(11,"form",3),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(12,`
                    `),n(13,"fieldset",4),e(14,`
                    `),n(15,"legend",5)(16,"h6",6),e(17,"DETAILED PLAN"),i()(),e(18,`
                    `),n(19,"div",7),e(20,`
                        `),n(21,"div",8),e(22,`
                          `),n(23,"div",9),e(24,`
                              `),n(25,"label",10),e(26,"Indemnity Form:"),i(),e(27,`
                              `),n(28,"input",11),S("change",function(c){return r.onIndemnityFormChange(c)}),i(),e(29,`
                              `),s(30,Kt,4,1,"div",12),e(31,`
                          `),i(),e(32,`
                        `),i(),e(33,`
                        `),n(34,"div",8),e(35,`
                        `),n(36,"div",9),e(37,`
                            `),n(38,"label",13),e(39,"Architectural Design:"),i(),e(40,`
                            `),n(41,"input",14),S("change",function(c){return r.onArchitecturalDesignChange(c)}),i(),e(42,`
                            `),s(43,Xt,4,1,"div",12),e(44,`
                        `),i(),e(45,`
                        `),i(),e(46,`
                        `),n(47,"div",8),e(48,`
                        `),n(49,"div",9),e(50,`
                            `),n(51,"label",15),e(52,"Structural Design:"),i(),e(53,`
                            `),n(54,"input",16),S("change",function(c){return r.onStructuralDesignChange(c)}),i(),e(55,`
                            `),s(56,ei,4,1,"div",12),e(57,`
                        `),i(),e(58,`
                        `),i(),e(59,`
                        `),n(60,"div",8),e(61,`
                        `),n(62,"div",9),e(63,`
                            `),n(64,"label",17),e(65,"Electrical Design:"),i(),e(66,`
                            `),n(67,"input",18),S("change",function(c){return r.onElectricalDesignChange(c)}),i(),e(68,`
                            `),s(69,ii,4,1,"div",12),e(70,`
                        `),i(),e(71,`
                        `),i(),e(72,`
                        `),n(73,"div",8),e(74,`
                        `),n(75,"div",9),e(76,`
                            `),n(77,"label",19),e(78,"ICT Design:"),i(),e(79,`
                            `),n(80,"input",20),S("change",function(c){return r.onIctDesignChange(c)}),i(),e(81,`
                            `),s(82,ri,4,1,"div",12),e(83,`
                        `),i(),e(84,`
                        `),i(),e(85,`
                        `),n(86,"div",8),e(87,`
                        `),n(88,"div",9),e(89,`
                            `),n(90,"label",21),e(91,"Mechanical Design:"),i(),e(92,`
                            `),n(93,"input",22),S("change",function(c){return r.onMechanicalDesignChange(c)}),i(),e(94,`
                            `),s(95,ai,4,1,"div",12),e(96,`
                        `),i(),e(97,`
                        `),i(),e(98,`
                        `),n(99,"div",8),e(100,`
                        `),n(101,"div",9),e(102,`
                            `),n(103,"label",23),e(104,"Landscaping Design:"),i(),e(105,`
                            `),n(106,"input",24),S("change",function(c){return r.onLandscapingDesignChange(c)}),i(),e(107,`
                            `),s(108,li,4,1,"div",12),e(109,`
                        `),i(),e(110,`
                        `),i(),e(111,`
                        `),n(112,"div",8),e(113,`
                        `),n(114,"div",9),e(115,`
                            `),n(116,"label",25),e(117,"Signage Design:"),i(),e(118,`
                            `),n(119,"input",26),S("change",function(c){return r.onSignageDesignChange(c)}),i(),e(120,`
                            `),s(121,di,4,1,"div",12),e(122,`
                        `),i(),e(123,`
                        `),i(),e(124,`
                        `),n(125,"div",27),e(126,`
                        `),n(127,"div",9),e(128,`
                            `),n(129,"label",28),e(130,"Other Necessary Drawings:"),i(),e(131,`
                            `),n(132,"input",29),S("change",function(c){return r.onOtherNecessaryDrawingsChange(c)}),i(),e(133,`
                            `),s(134,ci,4,1,"div",12),e(135,`
                        `),i(),e(136,`
                        `),i(),e(137,`
                        `),n(138,"div",8),e(139,`
                        `),n(140,"div",9),e(141,`
                            `),n(142,"label",30),e(143,"Green Certification Registration:"),i(),e(144,`
                            `),n(145,"input",31),S("change",function(c){return r.onGreenCertificationRegistrationChange(c)}),i(),e(146,`
                            `),s(147,ui,4,1,"div",12),e(148,`
                        `),i(),e(149,`
                        `),i(),e(150,`
                        `),n(151,"div",8),e(152,`
                        `),n(153,"div",9),e(154,`
                            `),n(155,"label",32),e(156,"NEMA Project Report:"),i(),e(157,`
                            `),n(158,"input",33),S("change",function(c){return r.onNemaProjectReportChange(c)}),i(),e(159,`
                            `),s(160,fi,4,1,"div",12),e(161,`
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
`),i()),t&2&&(l("ngIf",r.mProgress()),m(11),l("formGroup",r.itemForm),m(17),l("ngClass",f(25,$,r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched))),m(2),l("ngIf",r.itemForm.get("indemnity_form").invalid&&(r.itemForm.get("indemnity_form").dirty||r.itemForm.get("indemnity_form").touched)),m(11),l("ngClass",f(27,$,r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched))),m(2),l("ngIf",r.itemForm.get("architectural_design").invalid&&(r.itemForm.get("architectural_design").dirty||r.itemForm.get("architectural_design").touched)),m(11),l("ngClass",f(29,$,r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched))),m(2),l("ngIf",r.itemForm.get("structural_design").invalid&&(r.itemForm.get("structural_design").dirty||r.itemForm.get("structural_design").touched)),m(11),l("ngClass",f(31,$,r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched))),m(2),l("ngIf",r.itemForm.get("electrical_design").invalid&&(r.itemForm.get("electrical_design").dirty||r.itemForm.get("electrical_design").touched)),m(11),l("ngClass",f(33,$,r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched))),m(2),l("ngIf",r.itemForm.get("ict_design").invalid&&(r.itemForm.get("ict_design").dirty||r.itemForm.get("ict_design").touched)),m(11),l("ngClass",f(35,$,r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched))),m(2),l("ngIf",r.itemForm.get("mechanical_design").invalid&&(r.itemForm.get("mechanical_design").dirty||r.itemForm.get("mechanical_design").touched)),m(11),l("ngClass",f(37,$,r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched))),m(2),l("ngIf",r.itemForm.get("landscaping_design").invalid&&(r.itemForm.get("landscaping_design").dirty||r.itemForm.get("landscaping_design").touched)),m(11),l("ngClass",f(39,$,r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched))),m(2),l("ngIf",r.itemForm.get("signage_design").invalid&&(r.itemForm.get("signage_design").dirty||r.itemForm.get("signage_design").touched)),m(11),l("ngClass",f(41,$,r.itemForm.get("other_necessary_drawings").invalid&&(r.itemForm.get("other_necessary_drawings").dirty||r.itemForm.get("other_necessary_drawings").touched))),m(2),l("ngIf",r.itemForm.get("other_necessary_drawings").invalid&&(r.itemForm.get("other_necessary_drawings").dirty||r.itemForm.get("other_necessary_drawings").touched)),m(11),l("ngClass",f(43,$,r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched))),m(2),l("ngIf",r.itemForm.get("green_certification_registration").invalid&&(r.itemForm.get("green_certification_registration").dirty||r.itemForm.get("green_certification_registration").touched)),m(11),l("ngClass",f(45,$,r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched))),m(2),l("ngIf",r.itemForm.get("nema_project_report").invalid&&(r.itemForm.get("nema_project_report").dirty||r.itemForm.get("nema_project_report").touched)),m(11),l("disabled",r.itemForm.invalid))},dependencies:[k,P,N,I,R,ee,W,te,ie,B,q,j,O,L,V],encapsulation:2})}};var Pe=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275cmp=b({type:o,selectors:[["app-edit"]],standalone:!1,decls:2,vars:0,template:function(t,r){t&1&&(n(0,"p"),e(1,"edit works!"),i())},encapsulation:2})}};var xi=()=>[2];function hi(o,a){o&1&&g(0,"app-progress")}function Si(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=p();m(),y(t.item.investor==null?null:t.item.investor.name)}}function yi(o,a){if(o&1&&(n(0,"div",11),e(1),i()),o&2){let t=p();m(),y(t.item.type==null?null:t.item.type.name)}}function Ci(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.indemnity_form_url),C)}}function bi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.architectural_design_url),C)}}function Ei(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.structural_design_url),C)}}function Pi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.electrical_design_url),C)}}function Fi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.ict_design_url),C)}}function Ii(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.mechanical_design_url),C)}}function Di(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.landscaping_design_url),C)}}function Ti(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.signage_design_url),C)}}function Ni(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.other_necessary_drawings_url),C)}}function Ri(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.green_certification_registration_url),C)}}function wi(o,a){if(o&1&&(n(0,"div"),e(1,`
                    `),n(2,"a",17),e(3,"View File"),i(),e(4,`
                  `),i()),o&2){let t=p();m(2),l("href",x(t.item.nema_project_report_url),C)}}function Mi(o,a){if(o&1){let t=A();n(0,"fieldset",3),e(1,`
            `),n(2,"legend",4)(3,"h6",5),e(4,"PROFESSIONAL RECOMMENDATIONS"),i()(),e(5,`
            `),n(6,"div",6),e(7,`
              `),n(8,"div",10),e(9,`
                `),n(10,"div",2),e(11,`
                  `),n(12,"label",8),e(13,"Architect Report:"),i(),e(14,`
                  `),n(15,"div",18),e(16),i(),e(17,`
                `),i(),e(18,`
              `),i(),e(19,`
              `),n(20,"div",10),e(21,`
                `),n(22,"div",2),e(23,`
                  `),n(24,"label",19),e(25,"Structural Engineer Report:"),i(),e(26,`
                  `),n(27,"div",18),e(28),i(),e(29,`
                `),i(),e(30,`
              `),i(),e(31,`
              `),n(32,"div",10),e(33,`
                `),n(34,"div",2),e(35,`
                  `),n(36,"label",19),e(37,"Electrical Engineer Report:"),i(),e(38,`
                  `),n(39,"div",18),e(40),i(),e(41,`
                `),i(),e(42,`
              `),i(),e(43,`
              `),n(44,"div",10),e(45,`
                `),n(46,"div",2),e(47,`
                  `),n(48,"label",19),e(49,"ICT Engineer Report:"),i(),e(50,`
                  `),n(51,"div",18),e(52),i(),e(53,`
                `),i(),e(54,`
              `),i(),e(55,`
              `),n(56,"div",10),e(57,`
                `),n(58,"div",2),e(59,`
                  `),n(60,"label",19),e(61,"Mechanical Engineer Report:"),i(),e(62,`
                  `),n(63,"div",18),e(64),i(),e(65,`
                `),i(),e(66,`
              `),i(),e(67,`
              `),n(68,"div",10),e(69,`
                `),n(70,"div",2),e(71,`
                  `),n(72,"label",19),e(73,"Environment Health and Safety Report:"),i(),e(74,`
                  `),n(75,"div",18),e(76),i(),e(77,`
                `),i(),e(78,`
              `),i(),e(79,`
              `),n(80,"div",10),e(81,`
                `),n(82,"div",2),e(83,`
                  `),n(84,"label",19),e(85,"Professional Sustainability Report:"),i(),e(86,`
                  `),n(87,"div",18),e(88),i(),e(89,`
                `),i(),e(90,`
              `),i(),e(91,`
            `),i(),e(92,`
            `),n(93,"div",10),e(94,`
              `),n(95,"div",20),e(96,`
                `),n(97,"button",21),S("click",function(){w(t);let d=p();return M(d.onDownloadReport(d.item))}),e(98,"Print Report"),i(),e(99,`
              `),i(),e(100,`
            `),i(),e(101,`
          `),i()}if(o&2){let t=p();m(16),y(t.item.architect_report),m(12),y(t.item.structural_engineer_report),m(12),y(t.item.electrical_engineer_report),m(12),y(t.item.ict_engineer_report),m(12),y(t.item.mechanical_engineer_report),m(12),y(t.item.environment_health_and_safety_report),m(12),y(t.item.professional_sustainability_report)}}var Fe=class o{constructor(a,t,r,d){this.mDetailedPlanService=a;this.mAppContextService=t;this.mToastrService=r;this.route=d;this.mProgress=_(!1)}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onDownloadReport(a){this.mProgress.set(!0),this.mDetailedPlanService.onDownloadProfessionalReport(a).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let d=t;var r=URL.createObjectURL(d);window.open(r,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(D),u(U),u(F),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-show"]],standalone:!1,decls:199,vars:17,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"col-md-4"],["for","context_analysis"],["class","border p-2 mb-3",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],[1,"text-muted",2,"text-align","justify","font-style","normal"],["for","estimated_project_duration"],[1,"mt-3","text-end"],["cButton","","color","light",1,"text-dark","btn-sm",3,"click"]],template:function(t,r){t&1&&(s(0,hi,1,0,"app-progress",0),n(1,"c-row"),e(2,`
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
                  `),s(26,Si,2,1,"div",9),e(27,`
                `),i(),e(28,`
              `),i(),e(29,`
              `),n(30,"div",7),e(31,`
                `),n(32,"div",2),e(33,`
                  `),n(34,"label",8),e(35,"Nature of Application:"),i(),e(36,`
                  `),s(37,yi,2,1,"div",9),e(38,`
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
                  `),s(70,Ci,5,2,"div",0),e(71,`
                `),i(),e(72,`
              `),i(),e(73,`
              `),n(74,"div",12),e(75,`
                `),n(76,"div",2),e(77,`
                  `),n(78,"label",13),e(79,"Architectural Design:"),i(),e(80,`
                  `),s(81,bi,5,2,"div",0),e(82,`
                `),i(),e(83,`
              `),i(),e(84,`
              `),n(85,"div",12),e(86,`
                `),n(87,"div",2),e(88,`
                  `),n(89,"label",13),e(90,"Structural Design:"),i(),e(91,`
                  `),s(92,Ei,5,2,"div",0),e(93,`
                `),i(),e(94,`
              `),i(),e(95,`
              `),n(96,"div",12),e(97,`
                `),n(98,"div",2),e(99,`
                  `),n(100,"label",13),e(101,"Electrical Design:"),i(),e(102,`
                  `),s(103,Pi,5,2,"div",0),e(104,`
                `),i(),e(105,`
              `),i(),e(106,`
              `),n(107,"div",12),e(108,`
                `),n(109,"div",2),e(110,`
                  `),n(111,"label",13),e(112,"ICT Design:"),i(),e(113,`
                  `),s(114,Fi,5,2,"div",0),e(115,`
                `),i(),e(116,`
              `),i(),e(117,`
              `),n(118,"div",12),e(119,`
                `),n(120,"div",2),e(121,`
                  `),n(122,"label",13),e(123,"Mechanical Design:"),i(),e(124,`
                  `),s(125,Ii,5,2,"div",0),e(126,`
                `),i(),e(127,`
              `),i(),e(128,`
              `),n(129,"div",12),e(130,`
                `),n(131,"div",2),e(132,`
                  `),n(133,"label",13),e(134,"Landscaping Design:"),i(),e(135,`
                  `),s(136,Di,5,2,"div",0),e(137,`
                `),i(),e(138,`
              `),i(),e(139,`
              `),n(140,"div",12),e(141,`
                `),n(142,"div",2),e(143,`
                  `),n(144,"label",13),e(145,"Signage Design:"),i(),e(146,`
                  `),s(147,Ti,5,2,"div",0),e(148,`
                `),i(),e(149,`
              `),i(),e(150,`
              `),n(151,"div",12),e(152,`
                `),n(153,"div",2),e(154,`
                  `),n(155,"label",13),e(156,"Other Necessary Drawings:"),i(),e(157,`
                  `),s(158,Ni,5,2,"div",0),e(159,`
                `),i(),e(160,`
              `),i(),e(161,`
              `),n(162,"div",12),e(163,`
                `),n(164,"div",2),e(165,`
                  `),n(166,"label",13),e(167,"Green Certification Registration:"),i(),e(168,`
                  `),s(169,Ri,5,2,"div",0),e(170,`
                `),i(),e(171,`
              `),i(),e(172,`
              `),n(173,"div",12),e(174,`
                `),n(175,"div",2),e(176,`
                  `),n(177,"label",13),e(178,"NEMA Project Report:"),i(),e(179,`
                  `),s(180,wi,5,2,"div",0),e(181,`
                `),i(),e(182,`
              `),i(),e(183,`
            `),i(),e(184,`
          `),i(),e(185,`
          `),s(186,Mi,102,7,"fieldset",14),e(187,`

          `),n(188,"div",15),e(189,`
            `),n(190,"button",16),e(191,"Cancel"),i(),e(192,`
            `),e(193,`
          `),i(),e(194,`
        `),i(),e(195,`

      `),i(),e(196,`
    `),i(),e(197,`
  `),i(),e(198,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(26),l("ngIf",r.item.investor),m(11),l("ngIf",r.item.type),m(12),y(r.item.project_brief),m(21),l("ngIf",r.item.indemnity_form),m(11),l("ngIf",r.item.architectural_design),m(11),l("ngIf",r.item.structural_design),m(11),l("ngIf",r.item.electrical_design),m(11),l("ngIf",r.item.ict_design),m(11),l("ngIf",r.item.mechanical_design),m(11),l("ngIf",r.item.landscaping_design),m(11),l("ngIf",r.item.signage_design),m(11),l("ngIf",r.item.other_necessary_drawings),m(11),l("ngIf",r.item.green_certification_registration),m(11),l("ngIf",r.item.nema_project_report),m(6),l("ngIf",!r.mAppContextService.hasRoles(h(16,xi))))},dependencies:[P,N,I,R,ee,W,te,ie],encapsulation:2})}};var bt=o=>({"is-invalid":o});function Ai(o,a){o&1&&g(0,"app-progress")}function ki(o,a){if(o&1&&(n(0,"option",15),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),y(t.alias)}}function qi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ji(o,a){if(o&1&&(n(0,"div",16),s(1,qi,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function Oi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Bi(o,a){if(o&1&&(n(0,"div",16),s(1,Oi,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Ie=class o{constructor(a,t,r,d,c){this.mToastrService=a;this.mDetailedPlanService=t;this.router=r;this.fb=d;this.route=c;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({detailed_plan_status_id:["",v.required],remarks:["",v.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=_(!0),this.mDetailedPlanService.plannerDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress=_(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=_(!0),this.mDetailedPlanService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(F),u(D),u(G),u(z),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-planner-review"]],standalone:!1,decls:24,vars:12,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-plans","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,Ai,1,0,"app-progress",0),n(1,"div")(2,"form",1),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),s(11,ki,2,3,"option",8),i(),s(12,ji,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),i(),g(17,"textarea",11),s(18,Bi,2,1,"div",9),i()()(),n(19,"div",12)(20,"button",13),e(21,"Cancel"),i(),n(22,"button",14),e(23,"Submit"),i()()()()),t&2){let d,c;l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",f(8,bt,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched))),m(5),l("ngClass",f(10,bt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[k,Z,P,N,I,R,B,pe,ce,q,de,j,O,L,V],encapsulation:2})}};var ge=()=>[1],Li=()=>[11],Gi=()=>[12],Ui=()=>[13],zi=()=>[14],Hi=()=>[15],$i=()=>[16],se=o=>({"is-invalid":o});function Wi(o,a){o&1&&g(0,"app-progress")}function Yi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ji(o,a){if(o&1&&(n(0,"div",11),s(1,Yi,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("architect_report").errors)==null?null:t.required)}}function Ki(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",8),e(5,"Architect Report:"),i(),n(6,"textarea",9),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.architect_report,d)||(c.item.architect_report=d),M(d)}),i(),s(7,Ji,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),K("ngModel",t.item.architect_report),l("ngClass",f(3,se,t.itemForm.get("architect_report").invalid&&(t.itemForm.get("architect_report").dirty||t.itemForm.get("architect_report").touched))),m(),l("ngIf",t.itemForm.get("architect_report").invalid&&(t.itemForm.get("architect_report").dirty||t.itemForm.get("architect_report").touched))}}function Qi(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xi(o,a){if(o&1&&(n(0,"div",11),s(1,Qi,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("structural_engineer_report").errors)==null?null:t.required)}}function Zi(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",12),e(5,"Structural Engineer Report:"),i(),n(6,"textarea",13),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.structural_engineer_report,d)||(c.item.structural_engineer_report=d),M(d)}),i(),s(7,Xi,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),K("ngModel",t.item.structural_engineer_report),l("ngClass",f(3,se,t.itemForm.get("structural_engineer_report").invalid&&(t.itemForm.get("structural_engineer_report").dirty||t.itemForm.get("structural_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("structural_engineer_report").invalid&&(t.itemForm.get("structural_engineer_report").dirty||t.itemForm.get("structural_engineer_report").touched))}}function en(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function tn(o,a){if(o&1&&(n(0,"div",11),s(1,en,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("electrical_engineer_report").errors)==null?null:t.required)}}function nn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",14),e(5,"Electrical Engineer Report:"),i(),n(6,"textarea",15),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.electrical_engineer_report,d)||(c.item.electrical_engineer_report=d),M(d)}),i(),s(7,tn,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),K("ngModel",t.item.electrical_engineer_report),l("ngClass",f(3,se,t.itemForm.get("electrical_engineer_report").invalid&&(t.itemForm.get("electrical_engineer_report").dirty||t.itemForm.get("electrical_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("electrical_engineer_report").invalid&&(t.itemForm.get("electrical_engineer_report").dirty||t.itemForm.get("electrical_engineer_report").touched))}}function rn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function on(o,a){if(o&1&&(n(0,"div",11),s(1,rn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("ict_engineer_report").errors)==null?null:t.required)}}function an(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",16),e(5,"ICT Engineer Report:"),i(),n(6,"textarea",17),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.ict_engineer_report,d)||(c.item.ict_engineer_report=d),M(d)}),i(),s(7,on,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),K("ngModel",t.item.ict_engineer_report),l("ngClass",f(3,se,t.itemForm.get("ict_engineer_report").invalid&&(t.itemForm.get("ict_engineer_report").dirty||t.itemForm.get("ict_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("ict_engineer_report").invalid&&(t.itemForm.get("ict_engineer_report").dirty||t.itemForm.get("ict_engineer_report").touched))}}function mn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function ln(o,a){if(o&1&&(n(0,"div",11),s(1,mn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("mechanical_engineer_report").errors)==null?null:t.required)}}function sn(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",18),e(5,"Mechanical Engineer Report:"),i(),n(6,"textarea",19),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.mechanical_engineer_report,d)||(c.item.mechanical_engineer_report=d),M(d)}),i(),s(7,ln,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),K("ngModel",t.item.mechanical_engineer_report),l("ngClass",f(3,se,t.itemForm.get("mechanical_engineer_report").invalid&&(t.itemForm.get("mechanical_engineer_report").dirty||t.itemForm.get("mechanical_engineer_report").touched))),m(),l("ngIf",t.itemForm.get("mechanical_engineer_report").invalid&&(t.itemForm.get("mechanical_engineer_report").dirty||t.itemForm.get("mechanical_engineer_report").touched))}}function dn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function pn(o,a){if(o&1&&(n(0,"div",11),s(1,dn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("environment_health_and_safety_report").errors)==null?null:t.required)}}function cn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function _n(o,a){if(o&1&&(n(0,"div",11),s(1,cn,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("professional_sustainability_report").errors)==null?null:t.required)}}function un(o,a){if(o&1){let t=A();n(0,"div")(1,"div",5)(2,"div",6)(3,"div",7)(4,"label",20),e(5,"Environment Health and Safety Report:"),i(),n(6,"textarea",21),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.environment_health_and_safety_report,d)||(c.item.environment_health_and_safety_report=d),M(d)}),i(),s(7,pn,2,1,"div",10),i()(),n(8,"div",6)(9,"div",7)(10,"label",22),e(11,"Professional Sustainability Report:"),i(),n(12,"textarea",23),X("ngModelChange",function(d){w(t);let c=p();return Q(c.item.professional_sustainability_report,d)||(c.item.professional_sustainability_report=d),M(d)}),i(),s(13,_n,2,1,"div",10),i()()()()}if(o&2){let t=p();m(6),K("ngModel",t.item.environment_health_and_safety_report),l("ngClass",f(6,se,t.itemForm.get("environment_health_and_safety_report").invalid&&(t.itemForm.get("environment_health_and_safety_report").dirty||t.itemForm.get("environment_health_and_safety_report").touched))),m(),l("ngIf",t.itemForm.get("environment_health_and_safety_report").invalid&&(t.itemForm.get("environment_health_and_safety_report").dirty||t.itemForm.get("environment_health_and_safety_report").touched)),m(5),K("ngModel",t.item.professional_sustainability_report),l("ngClass",f(8,se,t.itemForm.get("professional_sustainability_report").invalid&&(t.itemForm.get("professional_sustainability_report").dirty||t.itemForm.get("professional_sustainability_report").touched))),m(),l("ngIf",t.itemForm.get("professional_sustainability_report").invalid&&(t.itemForm.get("professional_sustainability_report").dirty||t.itemForm.get("professional_sustainability_report").touched))}}var De=class o{constructor(a,t,r,d,c,Ae){this.mToastrService=a;this.mDetailedPlanService=t;this.mAppContextService=r;this.router=d;this.fb=c;this.route=Ae;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({architect_report:["",v.nullValidator],structural_engineer_report:["",v.nullValidator],electrical_engineer_report:["",v.nullValidator],ict_engineer_report:["",v.nullValidator],mechanical_engineer_report:["",v.nullValidator],environment_health_and_safety_report:["",v.nullValidator],professional_sustainability_report:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t={id:this.id,architect_report:a.architect_report,structural_engineer_report:a.structural_engineer_report,electrical_engineer_report:a.electrical_engineer_report,ict_engineer_report:a.ict_engineer_report,mechanical_engineer_report:a.mechanical_engineer_report,environment_health_and_safety_report:a.environment_health_and_safety_report,professional_sustainability_report:a.professional_sustainability_report};this.mProgress=_(!0),this.mDetailedPlanService.professionalRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress=_(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(F),u(D),u(U),u(G),u(z),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-professional-recommendation"]],standalone:!1,decls:14,vars:21,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"mt-3","text-right"],["routerLink","/detailed-plans","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","architect_report",1,"col-form-label","required"],["formControlName","architect_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["role","alert",1,"invalid-feedback"],["for","structural_engineer_report",1,"col-form-label","required"],["formControlName","structural_engineer_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","electrical_engineer_report",1,"col-form-label","required"],["formControlName","electrical_engineer_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","ict_engineer_report",1,"col-form-label","required"],["formControlName","ict_engineer_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","mechanical_engineer_report",1,"col-form-label","required"],["formControlName","mechanical_engineer_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","environment_health_and_safety_report",1,"col-form-label","required"],["formControlName","environment_health_and_safety_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","professional_sustainability_report",1,"col-form-label","required"],["formControlName","professional_sustainability_report","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"]],template:function(t,r){t&1&&(s(0,Wi,1,0,"app-progress",0),n(1,"div")(2,"form",1),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),s(3,Ki,8,5,"div",0)(4,Zi,8,5,"div",0)(5,nn,8,5,"div",0)(6,an,8,5,"div",0)(7,sn,8,5,"div",0)(8,un,14,10,"div",0),n(9,"div",2)(10,"button",3),e(11,"Cancel"),i(),n(12,"button",4),e(13,"Submit"),i()()()()),t&2&&(l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(),l("ngIf",r.mAppContextService.hasRoles(h(9,ge))||r.mAppContextService.hasRoles(h(10,Li))),m(),l("ngIf",r.mAppContextService.hasRoles(h(11,ge))||r.mAppContextService.hasRoles(h(12,Gi))),m(),l("ngIf",r.mAppContextService.hasRoles(h(13,ge))||r.mAppContextService.hasRoles(h(14,Ui))),m(),l("ngIf",r.mAppContextService.hasRoles(h(15,ge))||r.mAppContextService.hasRoles(h(16,zi))),m(),l("ngIf",r.mAppContextService.hasRoles(h(17,ge))||r.mAppContextService.hasRoles(h(18,Hi))),m(),l("ngIf",r.mAppContextService.hasRoles(h(19,ge))||r.mAppContextService.hasRoles(h(20,$i))),m(4),l("disabled",r.itemForm.invalid))},dependencies:[k,P,N,I,R,B,q,j,O,L,V],encapsulation:2})}};var Et=o=>({"is-invalid":o});function fn(o,a){o&1&&g(0,"app-progress")}function vn(o,a){if(o&1&&(n(0,"option",26),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),y(t.alias)}}function xn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function hn(o,a){if(o&1&&(n(0,"div",27),s(1,xn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function Sn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function yn(o,a){if(o&1&&(n(0,"div",27),s(1,Sn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Te=class o{constructor(a,t,r,d,c){this.mToastrService=a;this.mDetailedPlanService=t;this.router=r;this.fb=d;this.route=c;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({detailed_plan_status_id:["",v.required],remarks:["",v.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t={id:this.id,detailed_plan_status_id:a.detailed_plan_status_id,remarks:a.remarks};this.mProgress=_(!0),this.mDetailedPlanService.detailedDesignReportRecommendationsDetailedPlanItem(t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress=_(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=_(!0),this.mDetailedPlanService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(F),u(D),u(G),u(z),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-design-report"]],standalone:!1,decls:72,vars:19,consts:[[4,"ngIf"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"mb-3"],["for","architect_report"],[1,"text-muted"],["for","electrical_engineer_report"],["for","ict_engineer_report"],["for","mechanical_engineer_report"],["for","environment_health_and_safety_report"],["for","professional_sustainability_report"],[3,"ngSubmit","formGroup"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-plans","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,r){if(t&1&&(s(0,fn,1,0,"app-progress",0),n(1,"div")(2,"fieldset",1)(3,"legend",2)(4,"h6",3),e(5,"PROFEFESSIONAL RECOMMENDATIONS"),i()(),n(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e(10,"Architect Report:"),i(),n(11,"div",8),e(12),i()()(),n(13,"div",5)(14,"div",6)(15,"label",9),e(16,"Electrical Engineer Report:"),i(),n(17,"div",8),e(18),i()()(),n(19,"div",5)(20,"div",6)(21,"label",9),e(22,"Structural Engineer Report:"),i(),n(23,"div",8),e(24),i()()(),n(25,"div",5)(26,"div",6)(27,"label",10),e(28,"ICT Engineer Report:"),i(),n(29,"div",8),e(30),i()()(),n(31,"div",5)(32,"div",6)(33,"label",11),e(34,"Mechanical Engineer Report:"),i(),n(35,"div",8),e(36),i()()(),n(37,"div",5)(38,"div",6)(39,"label",12),e(40,"Environment Health and Safety Report:"),i(),n(41,"div",8),e(42),i()()(),n(43,"div",5)(44,"div",6)(45,"label",13),e(46,"Professional Sustainability Report:"),i(),n(47,"div",8),e(48),i()()()()()(),n(49,"div")(50,"form",14),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(51,"div",4)(52,"div",5)(53,"div",15)(54,"label",16),e(55,"Status:"),i(),n(56,"select",17)(57,"option",18),e(58,"--- Select status ---"),i(),s(59,vn,2,3,"option",19),i(),s(60,hn,2,1,"div",20),i()(),n(61,"div",5)(62,"div",15)(63,"label",21),e(64,"Remarks:"),i(),g(65,"textarea",22),s(66,yn,2,1,"div",20),i()()(),n(67,"div",23)(68,"button",24),e(69,"Cancel"),i(),n(70,"button",25),e(71,"Submit"),i()()()()),t&2){let d,c;l("ngIf",r.mProgress()),m(12),y(r.item.architect_report),m(6),y(r.item.electrical_engineer_report),m(6),y(r.item.structural_engineer_report),m(6),y(r.item.ict_engineer_report),m(6),y(r.item.mechanical_engineer_report),m(6),y(r.item.environment_health_and_safety_report),m(6),y(r.item.professional_sustainability_report),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",f(15,Et,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched))),m(5),l("ngClass",f(17,Et,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[k,Z,P,N,I,R,B,pe,ce,q,de,j,O,L,V],encapsulation:2})}};var Be=o=>({"is-invalid":o});function bn(o,a){o&1&&g(0,"app-progress")}function En(o,a){if(o&1&&(n(0,"option",16),e(1),i()),o&2){let t=a.$implicit;l("value",x(t.id)),m(),y(t.alias)}}function Pn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Fn(o,a){if(o&1&&(n(0,"div",17),s(1,Pn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("detailed_plan_status_id"))==null||t.errors==null?null:t.errors.required)}}function In(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Dn(o,a){if(o&1&&(n(0,"div",17),s(1,In,2,0,"div",0),i()),o&2){let t,r=p(2);m(),l("ngIf",(t=r.itemForm.get("letter_of_no_objection").errors)==null?null:t.required)}}function Tn(o,a){if(o&1){let t=A();n(0,"div",3)(1,"div",4)(2,"label",18),e(3,"Letter of No Objection:"),i(),n(4,"input",19),S("change",function(d){w(t);let c=p();return M(c.onLetterOfNoObjection(d))}),i(),s(5,Dn,2,1,"div",9),i()()}if(o&2){let t=p();m(4),l("ngClass",f(2,Be,t.itemForm.get("letter_of_no_objection").invalid&&(t.itemForm.get("letter_of_no_objection").dirty||t.itemForm.get("letter_of_no_objection").touched))),m(),l("ngIf",t.itemForm.get("letter_of_no_objection").invalid&&(t.itemForm.get("letter_of_no_objection").dirty||t.itemForm.get("letter_of_no_objection").touched))}}function Nn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Rn(o,a){if(o&1&&(n(0,"div",17),s(1,Nn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Ne=class o{constructor(a,t,r,d,c){this.mToastrService=a;this.mDetailedPlanService=t;this.router=r;this.fb=d;this.route=c;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({detailed_plan_status_id:["",v.required],letter_of_no_objection:["",v.nullValidator],remarks:["",v.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousDetailedPlanStatus(),this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t=new FormData;t.append("letter_of_no_objection",this.letter_of_no_objection_file||"",this.letter_of_no_objection_file?.name||""),t.append("detailed_plan_status_id",a.detailed_plan_status_id),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedPlanService.committeeStageDetailedPlanItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress=_(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}getNextPreviousDetailedPlanStatus(){this.mProgress=_(!0),this.mDetailedPlanService.nextPreviousStatusDetailedPlanItem(this.item.detailed_plan_status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onLetterOfNoObjection(a){if(a.target.value){let t=a.target.files[0];this.letter_of_no_objection_file=t}}static{this.\u0275fac=function(t){return new(t||o)(u(F),u(D),u(G),u(z),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-committee-stage"]],standalone:!1,decls:25,vars:13,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","detailed_plan_status_id",1,"col-form-label","required"],["formControlName","detailed_plan_status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-plans","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","letter_of_no_objection",1,"col-form-label","required"],["formControlName","letter_of_no_objection","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,r){if(t&1&&(s(0,bn,1,0,"app-progress",0),n(1,"div")(2,"form",1),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),s(11,En,2,3,"option",8),i(),s(12,Fn,2,1,"div",9),i()(),s(13,Tn,6,4,"div",10),n(14,"div",3)(15,"div",4)(16,"label",11),e(17,"Remarks:"),i(),g(18,"textarea",12),s(19,Rn,2,1,"div",9),i()()(),n(20,"div",13)(21,"button",14),e(22,"Cancel"),i(),n(23,"button",15),e(24,"Submit"),i()()()()),t&2){let d,c;l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngClass",f(9,Be,((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.dirty)||((d=r.itemForm.get("detailed_plan_status_id"))==null?null:d.touched)))),m(3),l("ngForOf",r.mNextPreviousStatuses),m(),l("ngIf",((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.invalid)&&(((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.dirty)||((c=r.itemForm.get("detailed_plan_status_id"))==null?null:c.touched))),m(),l("ngIf",r.itemForm.get("detailed_plan_status_id").value==9),m(5),l("ngClass",f(11,Be,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid)}},dependencies:[k,Z,P,N,I,R,B,pe,ce,q,de,j,O,L,V],encapsulation:2})}};var Ve=o=>({"is-invalid":o});function Mn(o,a){o&1&&g(0,"app-progress")}function An(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=p();m(),l("href",x(t.item.notice_of_approval_url),C)}}function kn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function qn(o,a){if(o&1&&(n(0,"div",16),s(1,kn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("notice_of_approval").errors)==null?null:t.required)}}function jn(o,a){if(o&1&&(n(0,"span")(1,"a",15),e(2,"File"),i()()),o&2){let t=p();m(),l("href",x(t.item.construction_permit_url),C)}}function On(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Bn(o,a){if(o&1&&(n(0,"div",16),s(1,On,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("construction_permit").errors)==null?null:t.required)}}function Vn(o,a){o&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ln(o,a){if(o&1&&(n(0,"div",16),s(1,Vn,2,0,"div",0),i()),o&2){let t,r=p();m(),l("ngIf",(t=r.itemForm.get("remarks").errors)==null?null:t.required)}}var Re=class o{constructor(a,t,r,d,c){this.mToastrService=a;this.mDetailedPlanService=t;this.router=r;this.fb=d;this.route=c;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({notice_of_approval:["",v.required],construction_permit:["",v.required],remarks:["",v.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDetailedPlanService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t=new FormData;t.append("notice_of_approval",this.notice_of_approval_file,this.notice_of_approval_file.name),t.append("construction_permit",this.construction_permit_file,this.construction_permit_file.name),t.append("remarks",a.remarks),t.append("_method","POST"),this.mProgress.set(!0),this.mDetailedPlanService.constructionPermitItem(this.id,t).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/detailed-plans"),this.mProgress=_(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}onConstructionPermitChange(a){if(a.target.value){let t=a.target.files[0];this.construction_permit_file=t}}onNoticeOfApprovalChange(a){if(a.target.value){let t=a.target.files[0];this.notice_of_approval_file=t}}static{this.\u0275fac=function(t){return new(t||o)(u(F),u(D),u(G),u(z),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-construction-permit"]],standalone:!1,decls:29,vars:17,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","notice_of_approval",1,"col-form-label","required"],["formControlName","notice_of_approval","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","construction_permit",1,"col-form-label","required"],["formControlName","construction_permit","type","file",1,"form-control",3,"change","ngClass"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-right"],["routerLink","/detailed-plans","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["role","alert",1,"invalid-feedback"]],template:function(t,r){t&1&&(s(0,Mn,1,0,"app-progress",0),n(1,"div")(2,"form",1),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Notice of Approval: "),s(8,An,3,2,"span",0),i(),n(9,"input",6),S("change",function(c){return r.onNoticeOfApprovalChange(c)}),i(),s(10,qn,2,1,"div",7),i()(),n(11,"div",3)(12,"div",4)(13,"label",8),e(14,"Construction Permit: "),s(15,jn,3,2,"span",0),i(),n(16,"input",9),S("change",function(c){return r.onConstructionPermitChange(c)}),i(),s(17,Bn,2,1,"div",7),i()(),n(18,"div",3)(19,"div",4)(20,"label",10),e(21,"Remarks:"),i(),g(22,"textarea",11),s(23,Ln,2,1,"div",7),i()()(),n(24,"div",12)(25,"button",13),e(26,"Cancel"),i(),n(27,"button",14),e(28,"Submit"),i()()()()),t&2&&(l("ngIf",r.mProgress()),m(2),l("formGroup",r.itemForm),m(6),l("ngIf",r.item.notice_of_approval_url),m(),l("ngClass",f(11,Ve,r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched))),m(),l("ngIf",r.itemForm.get("notice_of_approval").invalid&&(r.itemForm.get("notice_of_approval").dirty||r.itemForm.get("notice_of_approval").touched)),m(5),l("ngIf",r.item.construction_permit_url),m(),l("ngClass",f(13,Ve,r.itemForm.get("construction_permit").invalid&&(r.itemForm.get("construction_permit").dirty||r.itemForm.get("construction_permit").touched))),m(),l("ngIf",r.itemForm.get("construction_permit").invalid&&(r.itemForm.get("construction_permit").dirty||r.itemForm.get("construction_permit").touched)),m(5),l("ngClass",f(15,Ve,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),m(),l("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),m(4),l("disabled",r.itemForm.invalid))},dependencies:[k,P,N,I,R,B,q,j,O,L,V],encapsulation:2})}};var fe=()=>[1],Un=()=>[2],Pt=()=>[10,11],zn=()=>[9,12,13,14,15,16],Ft=()=>[10,11,17];function Hn(o,a){o&1&&g(0,"app-progress")}function $n(o,a){if(o&1&&(n(0,"div",6),e(1,`
              `),n(2,"label",24),e(3,"Company:"),i(),e(4,`
              `),n(5,"div",8),e(6),i(),e(7,`
            `),i()),o&2){let t=p();m(6),y(t.item.investor==null?null:t.item.investor.name)}}function Wn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.indemnity_form_url),C)}}function Yn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.architectural_design_url),C)}}function Jn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.structural_design_url),C)}}function Kn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.electrical_design_url),C)}}function Qn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.ict_design_url),C)}}function Xn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.mechanical_design_url),C)}}function Zn(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.landscaping_design_url),C)}}function er(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.signage_design_url),C)}}function tr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.other_necessary_drawings_url),C)}}function ir(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.green_certification_registration_url),C)}}function nr(o,a){if(o&1&&(n(0,"div"),e(1,`
                      `),n(2,"a",25),e(3,"File"),i(),e(4,`
                    `),i()),o&2){let t=p();m(2),l("href",x(t.item.nema_project_report_url),C)}}function rr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-create"),e(3,`
            `),i())}function or(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-planner-review"),e(3,`
            `),i())}function ar(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-professional-recommendation"),e(3,`
            `),i())}function mr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-design-report"),e(3,`
            `),i())}function lr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-committee-stage"),e(3,`
            `),i())}function sr(o,a){o&1&&(n(0,"div"),e(1,`
              `),g(2,"app-construction-permit"),e(3,`
            `),i())}var we=class o{constructor(a,t,r,d){this.mConstructionPermitService=a;this.mAppContextService=t;this.mToastrService=r;this.route=d;this.item={};this.mProgress=_(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(t){return new(t||o)(u(St),u(U),u(F),u(T))}}static{this.\u0275cmp=b({type:o,selectors:[["app-process"]],standalone:!1,decls:190,vars:32,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required1"],[1,"text-muted"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"col-md-6"],["for","indemnity_form",1,"col-form-label","required1"],["for","architectural_design",1,"col-form-label","required1"],["for","structural_design",1,"col-form-label","required1"],["for","electrical_design",1,"col-form-label","required1"],["for","ict_design",1,"col-form-label","required1"],["for","mechanical_design",1,"col-form-label","required1"],["for","landscaping_design",1,"col-form-label","required1"],["for","signage_design",1,"col-form-label","required1"],["for","other_necessary_drawings",1,"col-form-label","required1"],["for","green_certification_registration",1,"col-form-label","required1"],["for","nema_project_report",1,"col-form-label","required1"],["for","investor_id",1,"col-form-label","required1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(t,r){t&1&&(s(0,Hn,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div",3),e(10,`
          `),n(11,"div",4),e(12,`
            `),s(13,$n,8,1,"div",5),e(14,`
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
                    `),s(45,Wn,5,2,"div",0),e(46,`
                  `),i(),e(47,`
                `),i(),e(48,`
                `),n(49,"div",12),e(50,`
                  `),n(51,"div",6),e(52,`
                    `),n(53,"label",14),e(54,"Architectural Design:"),i(),e(55,`
                    `),s(56,Yn,5,2,"div",0),e(57,`
                  `),i(),e(58,`
                `),i(),e(59,`
                `),n(60,"div",12),e(61,`
                  `),n(62,"div",6),e(63,`
                    `),n(64,"label",15),e(65,"Structural Design:"),i(),e(66,`
                    `),s(67,Jn,5,2,"div",0),e(68,`
                  `),i(),e(69,`
                `),i(),e(70,`
                `),n(71,"div",12),e(72,`
                  `),n(73,"div",6),e(74,`
                    `),n(75,"label",16),e(76,"Electrical Design:"),i(),e(77,`
                    `),s(78,Kn,5,2,"div",0),e(79,`
                  `),i(),e(80,`
                `),i(),e(81,`
                `),n(82,"div",12),e(83,`
                  `),n(84,"div",6),e(85,`
                    `),n(86,"label",17),e(87,"ICT Design:"),i(),e(88,`
                    `),s(89,Qn,5,2,"div",0),e(90,`
                  `),i(),e(91,`
                `),i(),e(92,`
                `),n(93,"div",12),e(94,`
                  `),n(95,"div",6),e(96,`
                    `),n(97,"label",18),e(98,"Mechanical Design:"),i(),e(99,`
                    `),s(100,Xn,5,2,"div",0),e(101,`
                  `),i(),e(102,`
                `),i(),e(103,`
                `),n(104,"div",12),e(105,`
                  `),n(106,"div",6),e(107,`
                    `),n(108,"label",19),e(109,"Landscaping Design:"),i(),e(110,`
                    `),s(111,Zn,5,2,"div",0),e(112,`
                  `),i(),e(113,`
                `),i(),e(114,`
                `),n(115,"div",12),e(116,`
                  `),n(117,"div",6),e(118,`
                    `),n(119,"label",20),e(120,"Signage Design:"),i(),e(121,`
                    `),s(122,er,5,2,"div",0),e(123,`
                  `),i(),e(124,`
                `),i(),e(125,`
                `),n(126,"div",4),e(127,`
                  `),n(128,"div",6),e(129,`
                    `),n(130,"label",21),e(131,"Other Necessary Drawings:"),i(),e(132,`
                    `),s(133,tr,5,2,"div",0),e(134,`
                  `),i(),e(135,`
                `),i(),e(136,`
                `),n(137,"div",12),e(138,`
                  `),n(139,"div",6),e(140,`
                    `),n(141,"label",22),e(142,"Green Certification Registration:"),i(),e(143,`
                    `),s(144,ir,5,2,"div",0),e(145,`
                  `),i(),e(146,`
                `),i(),e(147,`
                `),n(148,"div",12),e(149,`
                  `),n(150,"div",6),e(151,`
                    `),n(152,"label",23),e(153,"NEMA Project Report:"),i(),e(154,`
                    `),s(155,nr,5,2,"div",0),e(156,`
                  `),i(),e(157,`
                `),i(),e(158,`
              `),i(),e(159,`
            `),i(),e(160,`
          `),i(),e(161,`
        `),i(),e(162,`

        `),n(163,"div",3),e(164,`
          `),n(165,"div",4),e(166,`
            `),e(167,`
            `),s(168,rr,4,0,"div",0),e(169,`
            `),e(170,`
            `),s(171,or,4,0,"div",0),e(172,`
            `),e(173,`
            `),s(174,ar,4,0,"div",0),e(175,`
            `),e(176,`
            `),s(177,mr,4,0,"div",0),e(178,`
            `),e(179,`
            `),s(180,lr,4,0,"div",0),e(181,`
            `),e(182,`
            `),s(183,sr,4,0,"div",0),e(184,`
          `),i(),e(185,`
        `),i(),e(186,`

      `),i(),e(187,`
    `),i(),e(188,`
  `),i(),e(189,`
`),i()),t&2&&(l("ngIf",r.mProgress()),m(13),l("ngIf",r.item.investor),m(11),y(r.item.project_brief),m(21),l("ngIf",r.item.indemnity_form),m(11),l("ngIf",r.item.architectural_design),m(11),l("ngIf",r.item.structural_design),m(11),l("ngIf",r.item.electrical_design),m(11),l("ngIf",r.item.ict_design),m(11),l("ngIf",r.item.mechanical_design),m(11),l("ngIf",r.item.landscaping_design),m(11),l("ngIf",r.item.signage_design),m(11),l("ngIf",r.item.other_necessary_drawings),m(11),l("ngIf",r.item.green_certification_registration),m(11),l("ngIf",r.item.nema_project_report),m(13),l("ngIf",r.item.detailed_plan_status_id==1&&(r.mAppContextService.hasRoles(h(20,fe))||r.mAppContextService.hasRoles(h(21,Un)))),m(3),l("ngIf",r.item.detailed_plan_status_id==3&&(r.mAppContextService.hasRoles(h(22,fe))||r.mAppContextService.hasRoles(h(23,Pt)))),m(3),l("ngIf",r.item.detailed_plan_status_id==4&&(r.mAppContextService.hasRoles(h(24,fe))||r.mAppContextService.hasRoles(h(25,zn)))),m(3),l("ngIf",r.item.detailed_plan_status_id==5&&(r.mAppContextService.hasRoles(h(26,fe))||r.mAppContextService.hasRoles(h(27,Pt)))),m(3),l("ngIf",r.item.detailed_plan_status_id==6&&(r.mAppContextService.hasRoles(h(28,fe))||r.mAppContextService.hasRoles(h(29,Ft)))),m(3),l("ngIf",r.item.detailed_plan_status_id==9&&(r.mAppContextService.hasRoles(h(30,fe))||r.mAppContextService.hasRoles(h(31,Ft)))))},dependencies:[P,I,ee,W,te,ie,ue,Ie,De,Te,Ne,Re],encapsulation:2})}};var dr=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Ee,data:{title:"Construction Permits / Detailed Plan"}},{path:"create/:id",component:ue,data:{title:"Construction Permits / Detailed Plan / Create"}},{path:"edit/:id",component:Pe,data:{title:"Construction Permits / Detailed Plan / Edit"}},{path:"show/:id",component:Fe,data:{title:"Construction Permits / Detailed Plan / Show"}},{path:"process/:id",component:we,data:{title:"Construction Permits / Detailed Plan / Process"}}],Me=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=ye({type:o})}static{this.\u0275inj=he({imports:[Ce,je.forChild(dr),je]})}};var It=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=ye({type:o})}static{this.\u0275inj=he({imports:[Ce,Me,ft,tt,ot,W,st,dt,ct,et,gt,pt,ht,Ze,it,be,nt]})}};export{It as DetailedPlanModule};
