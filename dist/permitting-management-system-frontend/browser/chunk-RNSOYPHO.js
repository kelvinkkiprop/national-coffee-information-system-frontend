import{a as H,b as ye,c as Bt}from"./chunk-GYMA6AIJ.js";import{a as $t}from"./chunk-CLTJMYFA.js";import{b as Qe,c as he,d as f,e as pe,f as Q,g as Ot,h as Lt,i as Z,j as Ze,k as Oe,l as ce,m as $,n as Ce,o as Ee,p as Fe,q as ue,s as Ut}from"./chunk-XXBTCVPJ.js";import{a as W,b as Dt}from"./chunk-EIN47PNU.js";import{a as Se,b as ge,c as O,e as G}from"./chunk-N6MGH46E.js";import{Ba as m,Bc as Ke,Ca as i,Cb as ae,Da as t,Db as Y,Ea as u,Eb as B,Fc as de,Gb as bt,Gc as X,Hb as Ye,Hc as It,Ib as Je,Ic as Tt,L as pt,M as We,Mc as Pt,Na as z,Nb as St,Nc as qt,O as dt,Oc as Xe,Pa as b,Pc as wt,R,Ra as p,Rc as Mt,S as D,T as L,Tc as se,U as fe,Ub as le,Uc as _e,Wb as me,Wc as Nt,Xb as J,Ya as ct,_ as F,ab as e,bb as v,cb as A,cd as kt,db as S,dc as st,dd as At,e as Zt,eb as T,fa as Be,fb as P,ga as xe,gb as q,ha as l,hb as I,ib as Te,kb as ve,lb as x,mb as ut,nb as ft,nd as jt,oa as y,ob as xt,od as Vt,pa as U,pb as vt,pc as De,pd as Rt,qa as He,qc as ht,rb as Ge,sb as gt,sc as Ct,ta as d,tb as ze,ub as yt,wc as K,xc as Et,yc as Ft}from"./chunk-RGFIQOVY.js";var Ht=Zt($t());var ei=o=>({"is-invalid":o}),ti=(o,a,r,n,_,s,E)=>({"chip-primary":o,"chip-secondary":a,"chip-success":r,"bg-danger":n,"chip-warning text-dark":_,"chip-info":s,"chip-dark":E}),ii=(o,a,r,n,_)=>({"bg-secondary text-dark":o,"bg-danger":a,"bg-dark":r,"bg-warning text-dark":n,"bg-success":_}),Gt=()=>[1],_t=()=>[2],ni=(o,a,r)=>({"bg-warning":o,"bg-success":a,"bg-danger":r}),ri=(o,a)=>({active:o,disabled:a});function oi(o,a){o&1&&u(0,"app-progress")}function ai(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function li(o,a){if(o&1&&(i(0,"div",16),e(1,`
                  `),d(2,ai,2,0,"div",1),e(3,`
                `),t()),o&2){let r=p();l(2),m("ngIf",r.search_term.errors==null?null:r.search_term.errors.required)}}function mi(o,a){if(o&1&&(i(0,"c-badge",34),e(1,`
                      `),i(2,"small"),e(3),t(),e(4,`
                    `),t()),o&2){let r=p().$implicit;m("ngClass",ft(2,ni,r.variation_status_id==1,r.variation_status_id==2,r.variation_status_id==3)),l(3),v(r.variation_status==null?null:r.variation_status.name)}}function di(o,a){if(o&1&&(i(0,"li")(1,"a",35),L(),u(2,"svg",36),e(3," Edit"),t()()),o&2){let r=p().$implicit;l(),m("routerLink",Te("/construction-permits/edit/",r.id))}}function si(o,a){if(o&1&&(i(0,"li")(1,"a",35),L(),u(2,"svg",37),e(3," Process"),t()()),o&2){let r=p().$implicit;l(),m("routerLink",Te("/construction-permits/process/",r.id))}}function _i(o,a){if(o&1&&(i(0,"li")(1,"a",35),L(),u(2,"svg",38),e(3," Variations"),t()()),o&2){let r=p().$implicit;l(),m("routerLink",Te("/construction-permits/variations/",r.id))}}function pi(o,a){if(o&1){let r=z();i(0,"button",39),b("click",function(){R(r);let _=p().$implicit,s=p(2);return D(s.onDelete(_))}),L(),u(1,"svg",40),t()}}function ci(o,a){if(o&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),t(),e(4,`
                `),i(5,"td"),e(6),t(),e(7,`
                `),i(8,"td"),e(9),t(),e(10,`
                `),i(11,"td"),e(12,`
                  `),i(13,"small",22),e(14),t(),e(15,`
                `),t(),e(16,`
                `),i(17,"td"),e(18),t(),e(19,`
                `),i(20,"td"),e(21),Ge(22,"currency"),t(),e(23,`
                `),i(24,"td"),e(25,`
                  `),i(26,"button",23),e(27),d(28,mi,5,6,"c-badge",24),e(29,`
                  `),t(),e(30,`
                `),t(),e(31,`
                `),i(32,"td"),e(33),t(),e(34,`
                `),i(35,"td"),e(36,`
                  `),i(37,"span",25),e(38),t(),e(39,`
                `),t(),e(40,`
                `),i(41,"td"),e(42),Ge(43,"date"),t(),e(44,`
                `),i(45,"td"),e(46,`
                  `),i(47,"div",26),e(48,`
                    `),i(49,"a",27),L(),u(50,"svg",28),t(),e(51,`
                    `),e(52,`
                    `),fe(),i(53,"c-dropdown",29),e(54,`
                      `),i(55,"button",30),e(56,`
                        `),L(),u(57,"svg",31),e(58,`
                      `),t(),e(59,`
                      `),fe(),i(60,"ul",32),e(61,`
                        `),e(62,`
                        `),d(63,di,4,2,"li",1),e(64,`
                        `),d(65,si,4,2,"li",1),e(66,`
                        `),d(67,_i,4,2,"li",1),e(68,`
                      `),t(),e(69,`
                    `),t(),e(70,`
                    `),d(71,pi,2,0,"button",33),e(72,`
                  `),t(),e(73,`
                `),t(),e(74,`
              `),t()),o&2){let r=a.$implicit,n=a.index,_=p(2);l(3),A("",_.mPageFrom+n,"."),l(3),v(r.project_brief),l(3),v(r.investor.name),l(4),m("ngClass",vt(26,ti,r.type_id==1,r.type_id==2,r.type_id==3,r.type_id==4,r.type_id==5,r.type_id==6,r.type_id==7)),l(),A(`
                    `,r.type==null?null:r.type.name,`
                  `),l(4),v(r.estimated_project_duration),l(3),v(ze(22,19,r.estimated_project_construction_cost,"USD","symbol","1.2-2")),l(6),A(`
                    `,r.has_variations,`
                    `),l(),m("ngIf",r.variation_status),l(5),v(r.consultant.name),l(4),m("ngClass",xt(34,ii,r.status_id==1,r.status_id==2,r.status_id==3,r.status_id==4,r.status_id==5)),l(),A(`
                    `,r.status==null?null:r.status.name,`
                  `),l(4),v(gt(43,24,r.created_at)),l(7),m("routerLink",Te("/construction-permits/show/",r.id)),l(14),m("ngIf",_.mAppContextService.hasRoles(ve(40,Gt))||_.mAppContextService.hasRoles(ve(41,_t))&&(r.status_id==1||r.status_id==2)),l(2),m("ngIf",!_.mAppContextService.hasRoles(ve(42,_t))),l(2),m("ngIf",!_.mAppContextService.hasRoles(ve(43,_t))&&r.has_variations=="yes"),l(4),m("ngIf",_.mAppContextService.hasRoles(ve(44,Gt)))}}function ui(o,a){if(o&1&&(i(0,"div",17),e(1,`
          `),i(2,"table",18),e(3,`
            `),i(4,"thead",19),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",20),e(9,"#"),t(),e(10,`
                `),i(11,"th",20),e(12,"Project"),t(),e(13,`
                `),i(14,"th",20),e(15,"Investor"),t(),e(16,`
                `),i(17,"th",20),e(18,"Type"),t(),e(19,`
                `),i(20,"th",20),e(21,"Duration (Months)"),t(),e(22,`
                `),i(23,"th",20),e(24,"Estimated Cost"),t(),e(25,`
                `),i(26,"th",20),e(27,"Has Variations"),t(),e(28,`
                `),i(29,"th",20),e(30,"Consultant"),t(),e(31,`
                `),i(32,"th",20),e(33,"Status"),t(),e(34,`
                `),i(35,"th",20),e(36,"Created"),t(),e(37,`
                `),i(38,"th",20),e(39,"Action"),t(),e(40,`
              `),t(),e(41,`
            `),t(),e(42,`
            `),i(43,"tbody"),e(44,`
              `),d(45,ci,75,45,"tr",21),e(46,`
            `),t(),e(47,`
          `),t(),e(48,`
        `),t()),o&2){let r=p();l(45),m("ngForOf",r.mConstructionPermits)}}function fi(o,a){if(o&1){let r=z();i(0,"li",43),e(1,`
              `),i(2,"a",44),b("click",function(){let _=R(r).$implicit,s=p(2);return D(s.onChangePage(_.url))}),t(),e(3,`
            `),t()}if(o&2){let r=a.$implicit;m("ngClass",ut(2,ri,r.active,!r.url)),l(2),m("innerHTML",r.label,Be)}}function xi(o,a){if(o&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",41),e(3,`
            `),d(4,fi,4,5,"li",42),e(5,`
          `),t(),e(6,`
        `),t()),o&2){let r=p();l(4),m("ngForOf",r.links)}}function vi(o,a){o&1&&(e(0,`
          `),i(1,"p",45),e(2,"No items"),t(),e(3,`
        `))}var $e=class o{constructor(a,r,n){this.mConstructionPermitService=a;this.mToastrService=r;this.mAppContextService=n;this.mConstructionPermits={};this.links=[];this.mProgress=F(!1)}ngOnInit(){this.index(),this.search_term=new Lt("",f.required),this.itemForm=new Ot({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mConstructionPermitService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mConstructionPermitService.paginateItems(a).subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mConstructionPermits=r.data,this.links=r.links,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onDelete(a){Ht.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&(this.mProgress.set(!0),this.mConstructionPermitService.deleteItem(a).subscribe({next:_=>{_&&(this.mConstructionPermits=this.mConstructionPermits.filter(s=>s.id!==a.id),this.mToastrService.error(_.message),this.mProgress.set(!1))},error:_=>{_.error.message&&this.mToastrService.error(_.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(a).subscribe({next:r=>{r&&(this.mConstructionPermits=r.salutations,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(a).subscribe({next:r=>{r&&(this.mConstructionPermits=r.data,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(y(H),y(G),y(O))}}static{this.\u0275cmp=U({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/construction-permits/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"chip","chip-sm",3,"ngClass"],["type","button",1,"btn","btn-sm","btn-outline-link","position-relative"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass",4,"ngIf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["cIcon","","name","cilApplicationsSettings",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(r,n){if(r&1&&(d(0,oi,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),L(),u(15,"svg",7),e(16,` Add
            `),t(),e(17,`
          `),t(),e(18,`
          `),fe(),i(19,"div"),e(20,`
            `),i(21,"form",8),b("ngSubmit",function(){return n.onSearch(n.itemForm.value)}),e(22,`
              `),i(23,"div",9),e(24,`
                `),u(25,"input",10),e(26,`
                `),i(27,"div",11),e(28,`
                  `),i(29,"button",12),e(30,`
                    `),L(),u(31,"svg",13),e(32,`
                  `),t(),e(33,`
                `),t(),e(34,`
                `),d(35,li,4,1,"div",14),e(36,`
              `),t(),e(37,`
            `),t(),e(38,`
          `),t(),e(39,`
        `),t(),e(40,`
      `),t(),e(41,`
      `),fe(),i(42,"c-card-body"),e(43,`

        `),d(44,ui,49,1,"div",15),e(45,`

        `),d(46,xi,7,1,"div",1),e(47,`

        `),d(48,vi,4,0,"ng-template",null,0,yt),e(50,`

      `),t(),e(51,`
    `),t(),e(52,`
  `),t(),e(53,`
`),t()),r&2){let _=ct(49);m("ngIf",n.mProgress()),l(21),m("formGroup",n.itemForm),l(4),m("ngClass",x(7,ei,n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched))),l(10),m("ngIf",n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched)),l(9),m("ngIf",n.mConstructionPermits.length>0)("ngIfElse",_),l(2),m("ngIf",n.links)}},dependencies:[ae,Y,B,J,W,K,de,X,It,se,_e,Vt,jt,Z,he,pe,Q,$,ce,De,Xe,wt,Pt,qt,Ke,Ye,bt],encapsulation:2})}};var Ue=class o{constructor(a,r){this.mAppContextService=a;this.http=r}allItems(){let a=`${Se.base_url}/profiles`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let r=`${Se.base_url}/profiles`;return this.http.post(r,a,this.mAppContextService.getHttpOptions())}getOneItem(a){let r=`${Se.base_url}/profiles/${a}`;return this.http.get(r,this.mAppContextService.getHttpOptions())}updateItem(a){let r=`${Se.base_url}/profiles/${a.id}`;return this.http.put(r,a,this.mAppContextService.getHttpOptions())}deleteItem(a){let r=`${Se.base_url}/profiles/${a.id}`;return this.http.delete(r,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let r=`${Se.base_url}/search-profiles`;return this.http.post(r,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${Se.base_url}/unpaginated-items-profiles`;return this.http.get(a,this.mAppContextService.getHttpOptions())}professionalSearch(a){let r=`${Se.base_url}/professional-search`;return this.http.post(r,a,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(r){return new(r||o)(dt(O),dt(St))}}static{this.\u0275prov=pt({token:o,factory:o.\u0275fac,providedIn:"root"})}};var C=o=>({"is-invalid":o});function gi(o,a){o&1&&u(0,"app-progress")}function yi(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",r.user.id),l(),v(r.user.name)}}function bi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Si(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,bi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("investor_id"))==null||r.errors==null?null:r.errors.required)}}function hi(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function Ci(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ei(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Ci,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("type_id"))==null||r.errors==null?null:r.errors.required)}}function Fi(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function Ii(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ti(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Ii,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("professional_body_id"))==null||r.errors==null?null:r.errors.required)}}function Pi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qi(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Pi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("membership_number"))==null||r.errors==null?null:r.errors.required)}}function wi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Mi(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,wi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("consultant_name"))==null||r.errors==null?null:r.errors.required)}}function Ni(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ki(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Ni,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("address"))==null||r.errors==null?null:r.errors.required)}}function Ai(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ji(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Ai,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("email"))==null||r.errors==null?null:r.errors.required)}}function Vi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ri(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Vi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("nationality"))==null||r.errors==null?null:r.errors.required)}}function Di(o,a){if(o&1){let r=z();i(0,"fieldset",4),e(1,`
            `),i(2,"legend",5)(3,"h6",6),e(4,"CONSULTANT INFORMATION"),t()(),e(5,`
            `),i(6,"div",7),e(7,`
              `),i(8,"div",8),e(9,`
                `),i(10,"div",9),e(11,`
                  `),i(12,"label",114),e(13,"Professional Body:"),t(),e(14,`
                  `),i(15,"select",115),q("ngModelChange",function(_){R(r);let s=p();return P(s.mProfile.professional_body_id,_)||(s.mProfile.professional_body_id=_),D(_)}),e(16,`
                    `),i(17,"option",12),e(18,"--- Select professional body ---"),t(),e(19,`
                    `),d(20,Fi,2,3,"option",13),e(21,`
                  `),t(),e(22,`
                  `),d(23,Ti,4,1,"div",14),e(24,`
                `),t(),e(25,`
              `),t(),e(26,`
              `),i(27,"div",8),e(28,`
                `),i(29,"div",9),e(30,`
                  `),i(31,"label",116),e(32,"Membership Number:"),t(),e(33,`
                  `),i(34,"input",117),q("ngModelChange",function(_){R(r);let s=p();return P(s.mProfile.membership_number,_)||(s.mProfile.membership_number=_),D(_)}),t(),e(35,`
                  `),d(36,qi,4,1,"div",14),e(37,`
                `),t(),e(38,`
              `),t(),e(39,`
              `),i(40,"div",40),e(41,`
                `),i(42,"div",9),e(43,`
                  `),i(44,"label",118),e(45,"Consultant Name:"),t(),e(46,`
                  `),i(47,"input",119),q("ngModelChange",function(_){R(r);let s=p();return P(s.mProfile.member_name,_)||(s.mProfile.member_name=_),D(_)}),t(),e(48,`
                  `),d(49,Mi,4,1,"div",14),e(50,`
                `),t(),e(51,`
              `),t(),e(52,`
              `),i(53,"div",40),e(54,`
                `),i(55,"div",9),e(56,`
                  `),i(57,"label",120),e(58,"Address:"),t(),e(59,`
                  `),i(60,"input",121),q("ngModelChange",function(_){R(r);let s=p();return P(s.mProfile.address,_)||(s.mProfile.address=_),D(_)}),t(),e(61,`
                  `),d(62,ki,4,1,"div",14),e(63,`
                `),t(),e(64,`
              `),t(),e(65,`
              `),i(66,"div",40),e(67,`
                `),i(68,"div",9),e(69,`
                  `),i(70,"label",122),e(71,"Email:"),t(),e(72,`
                  `),i(73,"input",123),q("ngModelChange",function(_){R(r);let s=p();return P(s.mProfile.email,_)||(s.mProfile.email=_),D(_)}),t(),e(74,`
                  `),d(75,ji,4,1,"div",14),e(76,`
                `),t(),e(77,`
              `),t(),e(78,`
              `),i(79,"div",40),e(80,`
                `),i(81,"div",9),e(82,`
                  `),i(83,"label",124),e(84,"Nationality:"),t(),e(85,`
                  `),i(86,"input",125),q("ngModelChange",function(_){R(r);let s=p();return P(s.mProfile.member_name,_)||(s.mProfile.member_name=_),D(_)}),t(),e(87,`
                  `),d(88,Ri,4,1,"div",14),e(89,`
                `),t(),e(90,`
              `),t(),e(91,`
            `),t(),e(92,`
          `),t()}if(o&2){let r,n,_,s,E,w,M,N,k,c,j,V,g=p();l(15),T("ngModel",g.mProfile.professional_body_id),m("ngClass",x(19,C,((r=g.itemForm.get("professional_body_id"))==null?null:r.invalid)&&(((r=g.itemForm.get("professional_body_id"))==null?null:r.dirty)||((r=g.itemForm.get("professional_body_id"))==null?null:r.touched)))),l(5),m("ngForOf",g.mProfessionalBodies),l(3),m("ngIf",((n=g.itemForm.get("professional_body_id"))==null?null:n.invalid)&&(((n=g.itemForm.get("professional_body_id"))==null?null:n.dirty)||((n=g.itemForm.get("professional_body_id"))==null?null:n.touched))),l(11),T("ngModel",g.mProfile.membership_number),m("ngClass",x(21,C,((_=g.itemForm.get("membership_number"))==null?null:_.invalid)&&(((_=g.itemForm.get("membership_number"))==null?null:_.dirty)||((_=g.itemForm.get("membership_number"))==null?null:_.touched)))),l(2),m("ngIf",((s=g.itemForm.get("membership_number"))==null?null:s.invalid)&&(((s=g.itemForm.get("membership_number"))==null?null:s.dirty)||((s=g.itemForm.get("membership_number"))==null?null:s.touched))),l(11),T("ngModel",g.mProfile.member_name),m("ngClass",x(23,C,((E=g.itemForm.get("consultant_name"))==null?null:E.invalid)&&(((E=g.itemForm.get("consultant_name"))==null?null:E.dirty)||((E=g.itemForm.get("consultant_name"))==null?null:E.touched)))),l(2),m("ngIf",((w=g.itemForm.get("consultant_name"))==null?null:w.invalid)&&(((w=g.itemForm.get("consultant_name"))==null?null:w.dirty)||((w=g.itemForm.get("consultant_name"))==null?null:w.touched))),l(11),T("ngModel",g.mProfile.address),m("ngClass",x(25,C,((M=g.itemForm.get("address"))==null?null:M.invalid)&&(((M=g.itemForm.get("address"))==null?null:M.dirty)||((M=g.itemForm.get("address"))==null?null:M.touched)))),l(2),m("ngIf",((N=g.itemForm.get("address"))==null?null:N.invalid)&&(((N=g.itemForm.get("address"))==null?null:N.dirty)||((N=g.itemForm.get("address"))==null?null:N.touched))),l(11),T("ngModel",g.mProfile.email),m("ngClass",x(27,C,((k=g.itemForm.get("email"))==null?null:k.invalid)&&(((k=g.itemForm.get("email"))==null?null:k.dirty)||((k=g.itemForm.get("email"))==null?null:k.touched)))),l(2),m("ngIf",((c=g.itemForm.get("email"))==null?null:c.invalid)&&(((c=g.itemForm.get("email"))==null?null:c.dirty)||((c=g.itemForm.get("email"))==null?null:c.touched))),l(11),T("ngModel",g.mProfile.member_name),m("ngClass",x(29,C,((j=g.itemForm.get("nationality"))==null?null:j.invalid)&&(((j=g.itemForm.get("nationality"))==null?null:j.dirty)||((j=g.itemForm.get("nationality"))==null?null:j.touched)))),l(2),m("ngIf",((V=g.itemForm.get("nationality"))==null?null:V.invalid)&&(((V=g.itemForm.get("nationality"))==null?null:V.dirty)||((V=g.itemForm.get("nationality"))==null?null:V.touched)))}}function Oi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Li(o,a){if(o&1&&(i(0,"div",113),e(1,`
                      `),d(2,Oi,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_brief"))==null||r.errors==null?null:r.errors.required)}}function Ui(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Bi(o,a){if(o&1&&(i(0,"div",113),e(1,`
                      `),d(2,Ui,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_purpose"))==null||r.errors==null?null:r.errors.required)}}function Gi(o,a){if(o&1&&(i(0,"div",130),e(1,`
                      `),i(2,"div",131),e(3,`
                        `),i(4,"div",132),e(5,`
                          `),i(6,"div",133)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",134),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),u(15,"br"),e(16),u(17,"br"),e(18),u(19,"br"),e(20),u(21,"br"),e(22),u(23,"br"),e(24),u(25,"br"),e(26),u(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let r=a.$implicit;l(8),v(r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(6),A(`
                              Acres: `,r.allocation_worksheet==null?null:r.allocation_worksheet.acres," "),l(2),S(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),S(`
                              Min/Max FAR: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_far,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_far),l(2),S(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),S(`
                              Min/Max Floor Area: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floor_area,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floor_area),l(2),A(`
                              Plot Coverage: `,r.allocation_worksheet==null?null:r.allocation_worksheet.plot_coverage,"% "),l(2),A(`
                              Use: `,r.allocation_worksheet==null?null:r.allocation_worksheet.description," ")}}function Wi(o,a){if(o&1&&(i(0,"div",126),e(1,`
                  `),i(2,"div",127),e(3,`
                    `),i(4,"small",128),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Gi,33,12,"div",129),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let r=p();l(10),m("ngForOf",r.mInvestorParcels)}}function Hi(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.allocation_worksheet==null?null:r.allocation_worksheet.number)),l(),v(r.allocation_worksheet==null?null:r.allocation_worksheet.number)}}function zi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yi(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,zi,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("parcel_number").errors)==null?null:r.required)}}function Ji(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function Ki(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Xi(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,Ki,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("planned_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Qi(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function Zi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $i(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,Zi,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("primary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function en(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function tn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function nn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,tn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("secondary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function rn(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function on(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function an(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,on,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("preferred_ground_floor_use_id"))==null||r.errors==null?null:r.errors.required)}}function ln(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function mn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,ln,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:r.required)}}function dn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function sn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,dn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:r.required)}}function _n(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function pn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,_n,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:r.required)}}function cn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function un(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,cn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_number_of_floors").errors)==null?null:r.required)}}function fn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function xn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,fn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_number_of_floors").errors)==null?null:r.required)}}function vn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function gn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,vn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_floor_to_floor_height").errors)==null?null:r.required)}}function yn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function bn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,yn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_floor_to_floor_height").errors)==null?null:r.required)}}function Sn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function hn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,Sn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_floor_area").errors)==null?null:r.required)}}function Cn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function En(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,Cn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_floor_area").errors)==null?null:r.required)}}function Fn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function In(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,Fn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_far").errors)==null?null:r.required)}}function Tn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Pn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,Tn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_far").errors)==null?null:r.required)}}function qn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                            `),d(2,qn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("minimum_setback").errors)==null?null:r.required)}}function Mn(o,a){if(o&1){let r=z();i(0,"tr"),e(1,`
                                  `),i(2,"td"),e(3),t(),e(4,`
                                  `),i(5,"td"),e(6),t(),e(7,`
                                  `),e(8,`
                                  `),i(9,"td"),e(10),t(),e(11,`
                                  `),i(12,"td"),e(13),t(),e(14,`
                                  `),i(15,"td"),e(16),t(),e(17,`
                                  `),i(18,"td"),e(19),t(),e(20,`
                                  `),i(21,"td"),e(22),t(),e(23,`
                                  `),i(24,"td"),e(25),t(),e(26,`
                                  `),i(27,"td",135),e(28,`
                                    `),i(29,"button",136),b("click",function(){let _=R(r).$implicit,s=p();return D(s.removeItem(_))}),L(),u(30,"svg",137),e(31,"Remove"),t(),e(32,`
                                  `),t(),e(33,`
                                `),t()}if(o&2){let r=a.$implicit,n=a.index;l(3),A("",n+1,"."),l(3),v(r.parcel_number),l(4),S("",r.min_floor_area,"/",r.max_floor_area),l(3),v(r.minimum_setback),l(3),S("",r.min_floor_to_floor_height,"/",r.max_floor_to_floor_height),l(3),S("",r.min_number_of_floors,"/",r.max_number_of_floors),l(3),S("",r.percentage_of_site_covered_by_existing_building,"/",r.percentage_of_site_covered_by_proposed_building),l(3),v(r.number_of_units_to_be_developed)}}function Nn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function kn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Nn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("has_variations").errors)==null?null:r.required)}}function An(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,An,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("site_plan_and_analysis").errors)==null?null:r.required)}}function Vn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Rn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Vn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("context_analysis").errors)==null?null:r.required)}}function Dn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function On(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Dn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("concept_plan").errors)==null?null:r.required)}}function Ln(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Un(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Ln,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("geotechnical_report").errors)==null?null:r.required)}}function Bn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Bn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey").errors)==null?null:r.required)}}function Wn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Hn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Wn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("parking_strategy").errors)==null?null:r.required)}}function zn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,zn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("traffic_management_plan").errors)==null?null:r.required)}}function Jn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Kn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Jn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:r.required)}}function Xn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qn(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Xn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_sustainability_brief").errors)==null?null:r.required)}}function Zn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $n(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,Zn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("sustainability_report").errors)==null?null:r.required)}}function er(o,a){if(o&1&&(i(0,"option",112),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function tr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ir(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,tr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("green_certification_id").errors)==null?null:r.required)}}function nr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function rr(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,nr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("other_green_certification").errors)==null?null:r.required)}}function or(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",138),e(5,"Specify Other:"),t(),e(6,`
                  `),u(7,"input",139),e(8,`
                  `),d(9,rr,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()),o&2){let r=p();l(7),m("ngClass",x(2,C,r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))),l(2),m("ngIf",r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))}}function ar(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function lr(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,ar,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_duration").errors)==null?null:r.required)}}function mr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function dr(o,a){if(o&1&&(i(0,"div",113),e(1,`
                    `),d(2,mr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_construction_cost").errors)==null?null:r.required)}}function sr(o,a){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function _r(o,a){if(o&1&&(i(0,"div",113),e(1,`
                  `),d(2,sr,2,0,"div",0),e(3,`
                `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:r.requiredTrue)}}var et=class o{constructor(a,r,n,_,s,E){this.mConstructionPermitService=a;this.mProfileService=r;this.router=n;this.mToastrService=_;this.mAppContextService=s;this.fb=E;this.mInvestorParcels={};this.mProfile={};this.mProgress=F(!1);this.mParcelInfo={};this.mEditor=ge;this.mLandUsePlans=[];this.mHasVariation="no";this.itemForm=this.fb.group({investor_id:["",f.required],type_id:["",f.required],professional_body_id:["",f.nullValidator],membership_number:["",f.nullValidator],consultant_name:["",f.nullValidator],address:["",f.nullValidator],email:["",f.nullValidator],nationality:["",f.nullValidator],project_brief:["",f.required],project_purpose:["",f.required],has_variations:["no",f.required],site_plan_and_analysis:["",f.nullValidator],context_analysis:["",f.nullValidator],concept_plan:["",f.nullValidator],geotechnical_report:["",f.nullValidator],topographical_survey:["",f.nullValidator],parking_strategy:["",f.nullValidator],traffic_management_plan:["",f.nullValidator],estimated_utility_demand_requirements:["",f.nullValidator],project_sustainability_brief:["",f.required],green_certification_id:["",f.required],other_green_certification:["",f.nullValidator],sustainability_report:["",f.nullValidator],estimated_project_duration:["",f.required],estimated_project_construction_cost:["",f.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,f.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",f.required],planned_land_use_id:["",f.required],primary_land_use_id:["",f.required],secondary_land_use_id:["",f.nullValidator],preferred_ground_floor_use_id:["",f.nullValidator],number_of_units_to_be_developed:["",f.required],percentage_of_site_covered_by_existing_building:["",f.required],percentage_of_site_covered_by_proposed_building:["",f.nullValidator],min_number_of_floors:["",f.required],max_number_of_floors:["",f.required],min_floor_to_floor_height:["",f.nullValidator],max_floor_to_floor_height:["",f.nullValidator],min_floor_area:["",f.nullValidator],max_floor_area:["",f.nullValidator],min_far:["",f.nullValidator],max_far:["",f.nullValidator],minimum_setback:["",f.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPermitTypes=a.data.permit_types,this.mParcelLandUseGroups=a.data.parcel_land_use_groups,this.mGreenCertifications=a.data.green_certifications,this.mProfile=a.data.profile,console.log(this.mProfile),this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=JSON.stringify(Object.assign({},this.mLandUsePlans)),n=new FormData;n.append("investor_id",a.investor_id),n.append("type_id",a.type_id),n.append("professional_body_id",a.professional_body_id),n.append("membership_number",a.membership_number),n.append("consultant_name",a.consultant_name),n.append("address",a.address),n.append("email",a.email),n.append("nationality",a.nationality),n.append("project_brief",a.project_brief),n.append("project_purpose",a.project_purpose),n.append("has_variations",this.mHasVariation),n.append("land_use_plans",r),n.append("project_sustainability_brief",a.project_sustainability_brief),n.append("green_certification_id",a.green_certification_id),n.append("other_green_certification",a.other_green_certification),n.append("estimated_project_duration",a.estimated_project_duration),n.append("estimated_project_construction_cost",a.estimated_project_construction_cost),n.append("commitment_to_comply_with_development_codes_and_guidelines",a.commitment_to_comply_with_development_codes_and_guidelines),n.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),n.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),n.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),n.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),n.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),n.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),n.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),n.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),n.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),n.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.createItem(n).subscribe({next:_=>{_&&(this.mToastrService.success(_.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:_=>{_.error.message&&this.mToastrService.error(_.error.message),this.mProgress.set(!1)}})}onContextAnalysisChange(a){if(a.target.value){let r=a.target.files[0];this.context_analysis_file=r}}onSitePlanAndAnlysisChange(a){if(a.target.value){let r=a.target.files[0];this.site_plan_and_analysis_file=r}}onConceptPlanChange(a){if(a.target.value){let r=a.target.files[0];this.concept_plan_file=r}}onGeotechnicalReportChange(a){if(a.target.value){let r=a.target.files[0];this.geotechnical_report_file=r}}onTopographicalSurveyChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_file=r}}onParkingStrategyChange(a){if(a.target.value){let r=a.target.files[0];this.parking_strategy_file=r}}onTrafficManagementPlanChange(a){if(a.target.value){let r=a.target.files[0];this.traffic_management_plan_file=r}}onEstimatedUtilityDemandRequirementsChange(a){if(a.target.value){let r=a.target.files[0];this.estimated_utility_demand_requirements_file=r}}onSustainabilityReportChange(a){if(a.target.value){let r=a.target.files[0];this.sustainability_report_file=r}}onInvestorChange(a){if(a.target.value){let r=a.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(r).subscribe({next:n=>{n&&(this.mInvestorParcels=n,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}}onCheckVariations(a){this.mInvestorParcels.some(n=>{let _=n.allocation_worksheet.number,s=Number(n.allocation_worksheet.min_floors),E=Number(n.allocation_worksheet.max_floors);return console.log(this.mHasVariation),a.parcel_number===_&&(a.min_number_of_floors<s||a.max_number_of_floors>E)})==!0&&this.mHasVariation=="no"&&(this.mHasVariation="yes"),this.itemForm.get("has_variations")?.setValue(this.mHasVariation),console.log(this.mHasVariation)}addItem(){let a=this.mItemForm.value;this.mLandUsePlans.some(n=>n.parcel_number===a.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(a),this.onCheckVariations(a),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(a){this.mLandUsePlans.forEach((r,n)=>{r===a&&this.mLandUsePlans.splice(n,1)})}static{this.\u0275fac=function(r){return new(r||o)(y(H),y(Ue),y(me),y(G),y(O),y(ue))}}static{this.\u0275cmp=U({type:o,selectors:[["app-create"]],standalone:!1,decls:741,vars:159,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"change","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["class","border p-2 mb-3",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control",3,"ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"editor","config","ngClass"],["class","alert alert-success",4,"ngIf"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],[1,"col-md-6"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","min_number_of_floors",1,"col-form-label","required"],["formControlName","min_number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","max_number_of_floors",1,"col-form-label","required"],["formControlName","max_number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","min_floor_to_floor_height",1,"col-form-label","required"],["formControlName","min_floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","max_floor_to_floor_height",1,"col-form-label","required"],["formControlName","max_floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","min_floor_area",1,"col-form-label","required"],["formControlName","min_floor_area","type","number",1,"form-control",3,"ngClass"],["for","max_floor_area",1,"col-form-label","required"],["formControlName","max_floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","min_far","type","number",1,"form-control",3,"ngClass"],["for","max_far",1,"col-form-label","required"],["formControlName","max_far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no","readonly","",1,"form-check-input"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes","readonly","",1,"form-check-input"],["for","variation_yes",1,"form-check-label"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"editor","config","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngClass"],["class","col-md-12",4,"ngIf"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngClass"]],template:function(r,n){if(r&1&&(d(0,gi,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`


        `),i(9,"form",3),b("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",9),e(22,`
                  `),i(23,"label",10),e(24,"Company:"),t(),e(25,`
                  `),i(26,"select",11),b("change",function(s){return n.onInvestorChange(s)}),e(27,`
                    `),i(28,"option",12),e(29,"--- Select investor ---"),t(),e(30,`
                    `),d(31,yi,2,2,"option",13),e(32,`
                  `),t(),e(33,`
                  `),d(34,Si,4,1,"div",14),e(35,`
                `),t(),e(36,`
              `),t(),e(37,`
              `),i(38,"div",8),e(39,`
                `),i(40,"div",9),e(41,`
                  `),i(42,"label",15),e(43,"Nature of Application:"),t(),e(44,`
                  `),i(45,"select",16),e(46,`
                    `),i(47,"option",12),e(48,"--- Select plan submission type ---"),t(),e(49,`
                    `),d(50,hi,2,3,"option",13),e(51,`
                  `),t(),e(52,`
                  `),d(53,Ei,4,1,"div",14),e(54,`
                `),t(),e(55,`
              `),t(),e(56,`
            `),t(),e(57,`
          `),t(),e(58,`
          `),d(59,Di,93,31,"fieldset",17),e(60,`
          `),i(61,"fieldset",4),e(62,`
            `),i(63,"legend",5)(64,"h6",6),e(65,"PROJECT BRIEF AND PURPOSE"),t()(),e(66,`
              `),i(67,"div",7),e(68,`
                `),i(69,"div",8),e(70,`
                  `),i(71,"div",9),e(72,`
                    `),i(73,"label",18),e(74,"Project Brief (Description of the overall project concept and how it fits in the Konza Technopolis Vision):"),t(),e(75,`
                    `),u(76,"textarea",19),e(77,`
                    `),e(78,`
                    `),d(79,Li,4,1,"div",14),e(80,`
                  `),t(),e(81,`
                `),t(),e(82,`
                `),i(83,"div",8),e(84,`
                  `),i(85,"div",9),e(86,`
                    `),i(87,"label",20),e(88,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(89,`
                    `),u(90,"ckeditor",21),e(91,`
                    `),d(92,Bi,4,1,"div",14),e(93,`
                  `),t(),e(94,`
                `),t(),e(95,`
              `),t(),e(96,`
          `),t(),e(97,`
          `),i(98,"fieldset",4),e(99,`
            `),i(100,"legend",5)(101,"h6",6),e(102,"PARCEL & CONTEXT ANALYSIS"),t()(),e(103,`
            `),i(104,"div",7),e(105,`
              `),i(106,"div",8),e(107,`
                `),d(108,Wi,13,1,"div",22),e(109,`
              `),t(),e(110,`
              `),i(111,"div",8),e(112,`
                `),i(113,"fieldset",23),e(114,`
                  `),i(115,"legend",5)(116,"h6",24),e(117,"Land Use Planning"),t()(),e(118,`
                  `),i(119,"div",25),e(120,`
                    `),i(121,"div",26),e(122,`
                      `),i(123,"div",8),e(124,`
                        `),i(125,"div",9),e(126,`
                          `),i(127,"label",27),e(128,"Parcel Number:"),t(),e(129,`
                          `),i(130,"select",28),e(131,`
                            `),i(132,"option",12),e(133,"--- Select Parcel ---"),t(),e(134,`
                            `),d(135,Hi,2,3,"option",13),e(136,`
                          `),t(),e(137,`
                          `),d(138,Yi,4,1,"div",14),e(139,`
                        `),t(),e(140,`
                      `),t(),e(141,`
                      `),e(142,`
                      `),i(143,"div",8),e(144,`
                        `),i(145,"div",9),e(146,`
                          `),i(147,"label",29),e(148,"Planned Land Use:"),t(),e(149,`
                          `),i(150,"select",30),e(151,`
                            `),i(152,"option",12),e(153,"--- Select planned land use ---"),t(),e(154,`
                            `),d(155,Ji,2,3,"option",13),e(156,`
                          `),t(),e(157,`
                          `),d(158,Xi,4,1,"div",14),e(159,`
                        `),t(),e(160,`
                      `),t(),e(161,`
                      `),i(162,"div",31),e(163,`
                        `),i(164,"div",9),e(165,`
                          `),i(166,"label",32),e(167,"Primary Land Use:"),t(),e(168,`
                          `),i(169,"select",33),e(170,`
                            `),i(171,"option",12),e(172,"--- Select primary land use ---"),t(),e(173,`
                            `),d(174,Qi,2,3,"option",13),e(175,`
                          `),t(),e(176,`
                          `),d(177,$i,4,1,"div",14),e(178,`
                        `),t(),e(179,`
                      `),t(),e(180,`
                      `),i(181,"div",31),e(182,`
                        `),i(183,"div",9),e(184,`
                          `),i(185,"label",34),e(186,"Secondary Land Use:"),t(),e(187,`
                          `),i(188,"select",35),e(189,`
                            `),i(190,"option",12),e(191,"--- Select secondary land use ---"),t(),e(192,`
                            `),d(193,en,2,3,"option",13),e(194,`
                          `),t(),e(195,`
                          `),d(196,nn,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",31),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",36),e(205,"Preferred Ground Floor Use:"),t(),e(206,`
                          `),i(207,"select",37),e(208,`
                            `),i(209,"option",12),e(210,"--- Select ground floor use ---"),t(),e(211,`
                            `),d(212,rn,2,3,"option",13),e(213,`
                          `),t(),e(214,`
                          `),d(215,an,4,1,"div",14),e(216,`
                        `),t(),e(217,`
                      `),t(),e(218,`
                      `),i(219,"div",8),e(220,`
                        `),i(221,"div",9),e(222,`
                          `),i(223,"label",38),e(224,"Number of Units to be Developed:"),t(),e(225,`
                          `),u(226,"input",39),e(227,`
                          `),d(228,mn,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",40),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",41),e(237,"Percentage of site covered by existing building(s):"),t(),e(238,`
                          `),u(239,"input",42),e(240,`
                          `),d(241,sn,4,1,"div",14),e(242,`
                        `),t(),e(243,`
                      `),t(),e(244,`
                      `),i(245,"div",40),e(246,`
                        `),i(247,"div",9),e(248,`
                          `),i(249,"label",43),e(250,"Percentage of site covered by proposed building(s):"),t(),e(251,`
                          `),u(252,"input",44),e(253,`
                          `),d(254,pn,4,1,"div",14),e(255,`
                        `),t(),e(256,`
                      `),t(),e(257,`
                      `),i(258,"div",40),e(259,`
                        `),i(260,"div",9),e(261,`
                          `),i(262,"label",45),e(263,"Min No. of Floors:"),t(),e(264,`
                          `),u(265,"input",46),e(266,`
                          `),d(267,un,4,1,"div",14),e(268,`
                        `),t(),e(269,`
                      `),t(),e(270,`
                      `),i(271,"div",40),e(272,`
                        `),i(273,"div",9),e(274,`
                          `),i(275,"label",47),e(276,"Max No. of Floors:"),t(),e(277,`
                          `),u(278,"input",48),e(279,`
                          `),d(280,xn,4,1,"div",14),e(281,`
                        `),t(),e(282,`
                      `),t(),e(283,`
                      `),i(284,"div",40),e(285,`
                        `),i(286,"div",9),e(287,`
                          `),i(288,"label",49),e(289,"Min Floor-to-Floor Height:"),t(),e(290,`
                          `),u(291,"input",50),e(292,`
                          `),d(293,gn,4,1,"div",14),e(294,`
                        `),t(),e(295,`
                      `),t(),e(296,`
                      `),i(297,"div",40),e(298,`
                        `),i(299,"div",9),e(300,`
                          `),i(301,"label",51),e(302,"Max Floor-to-Floor Height:"),t(),e(303,`
                          `),u(304,"input",52),e(305,`
                          `),d(306,bn,4,1,"div",14),e(307,`
                        `),t(),e(308,`
                      `),t(),e(309,`
                      `),i(310,"div",40),e(311,`
                        `),i(312,"div",9),e(313,`
                          `),i(314,"label",53),e(315,"Min Floor Area:"),t(),e(316,`
                          `),u(317,"input",54),e(318,`
                          `),d(319,hn,4,1,"div",14),e(320,`
                        `),t(),e(321,`
                      `),t(),e(322,`
                      `),i(323,"div",40),e(324,`
                        `),i(325,"div",9),e(326,`
                          `),i(327,"label",55),e(328,"Max Floor Area:"),t(),e(329,`
                          `),u(330,"input",56),e(331,`
                          `),d(332,En,4,1,"div",14),e(333,`
                        `),t(),e(334,`
                      `),t(),e(335,`
                      `),i(336,"div",40),e(337,`
                        `),i(338,"div",9),e(339,`
                          `),i(340,"label",57),e(341,"Min Floor Area Ratio (FAR):"),t(),e(342,`
                          `),u(343,"input",58),e(344,`
                          `),d(345,In,4,1,"div",14),e(346,`
                        `),t(),e(347,`
                      `),t(),e(348,`
                      `),i(349,"div",40),e(350,`
                        `),i(351,"div",9),e(352,`
                          `),i(353,"label",59),e(354,"Max Floor Area Ratio (FAR):"),t(),e(355,`
                          `),u(356,"input",60),e(357,`
                          `),d(358,Pn,4,1,"div",14),e(359,`
                        `),t(),e(360,`
                      `),t(),e(361,`
                      `),i(362,"div",8),e(363,`
                        `),i(364,"div",9),e(365,`
                          `),i(366,"label",61),e(367,"Minimum Setback:"),t(),e(368,`
                          `),u(369,"input",62),e(370,`
                          `),d(371,wn,4,1,"div",14),e(372,`
                        `),t(),e(373,`
                      `),t(),e(374,`
                    `),t(),e(375,`
                  `),t(),e(376,`
                  `),i(377,"div"),e(378,`
                    `),i(379,"div",63),e(380,`
                      `),i(381,"button",64),b("click",function(){return n.resetItemsForm()}),L(),u(382,"svg",65),e(383,"Reset"),t(),e(384,`
                      `),fe(),i(385,"button",66),b("click",function(){return n.addItem()}),L(),u(386,"svg",67),e(387,"Add"),t(),e(388,`
                    `),t(),e(389,`
                    `),fe(),i(390,"div",68),e(391,`
                      `),i(392,"div",69),e(393,`
                          `),i(394,"table",70),e(395,`
                              `),i(396,"thead"),e(397,`
                                `),i(398,"tr"),e(399,`
                                  `),i(400,"th"),e(401,"#"),t(),e(402,`
                                  `),i(403,"th"),e(404,"Parcel"),t(),e(405,`
                                  `),e(406,`
                                  `),i(407,"th"),e(408,"Min/Max "),u(409,"br"),e(410," Floor Area"),t(),e(411,`
                                  `),i(412,"th"),e(413,"Minimum "),u(414,"br"),e(415," Setback"),t(),e(416,`
                                  `),i(417,"th"),e(418,"Min/Max Floor "),u(419,"br"),e(420," to Floor Height"),t(),e(421,`
                                  `),i(422,"th"),e(423,"Min/Max "),u(424,"br"),e(425," No of Floors"),t(),e(426,`
                                  `),i(427,"th"),e(428,"Plot Coverage "),u(429,"br"),e(430," (Existing/Proposed)"),t(),e(431,`
                                  `),i(432,"th"),e(433,"No. of Units to "),u(434,"br"),e(435," be Developed"),t(),e(436,`
                                  `),i(437,"th"),e(438,"Action"),t(),e(439,`
                                `),t(),e(440,`
                              `),t(),e(441,`
                              `),i(442,"tbody"),e(443,`
                                `),d(444,Mn,34,12,"tr",71),e(445,`
                              `),t(),e(446,`
                          `),t(),e(447,`
                      `),t(),e(448,`
                    `),t(),e(449,`
                  `),t(),e(450,`
              `),t(),e(451,`
              `),t(),e(452,`
              `),i(453,"div",8),e(454,`
                `),i(455,"div",9),e(456,`
                  `),i(457,"label",72),e(458,"Variations (Does Your Project Require any Variation?):"),t(),e(459,`
                  `),i(460,"div",73),e(461,`
                    `),u(462,"input",74),e(463,`
                    `),i(464,"label",75),e(465," No"),t(),e(466,`
                  `),t(),e(467,`
                  `),i(468,"div",73),e(469,`
                    `),u(470,"input",76),e(471,`
                    `),i(472,"label",77),e(473," Yes"),t(),e(474,`
                  `),t(),e(475,`
                  `),d(476,kn,4,1,"div",14),e(477,`
                `),t(),e(478,`
              `),t(),e(479,`
              `),i(480,"div",8),e(481,`
                `),i(482,"div",9),e(483,`
                  `),i(484,"label",78),e(485,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(486,`
                  `),i(487,"input",79),b("change",function(s){return n.onSitePlanAndAnlysisChange(s)}),t(),e(488,`
                  `),d(489,jn,4,1,"div",14),e(490,`
                `),t(),e(491,`
              `),t(),e(492,`
              `),i(493,"div",8),e(494,`
                `),i(495,"div",9),e(496,`
                  `),i(497,"label",80),e(498,"Context Analysis (500m radius context analysis):"),t(),e(499,`
                  `),i(500,"input",81),b("change",function(s){return n.onContextAnalysisChange(s)}),t(),e(501,`
                  `),d(502,Rn,4,1,"div",14),e(503,`
                `),t(),e(504,`
              `),t(),e(505,`
            `),t(),e(506,`
          `),t(),e(507,`
          `),i(508,"fieldset",4),e(509,`
            `),i(510,"legend",5)(511,"h6",6),e(512,"DEVELOPMENT DATA"),t()(),e(513,`
            `),i(514,"div",7),e(515,`
              `),i(516,"div",40),e(517,`
                `),i(518,"div",9),e(519,`
                  `),i(520,"label",82),e(521,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(522,`
                  `),i(523,"input",83),b("change",function(s){return n.onConceptPlanChange(s)}),t(),e(524,`
                  `),d(525,On,4,1,"div",14),e(526,`
                `),t(),e(527,`
              `),t(),e(528,`
              `),i(529,"div",40),e(530,`
                `),i(531,"div",9),e(532,`
                  `),i(533,"label",84),e(534,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(535,`
                  `),i(536,"input",85),b("change",function(s){return n.onGeotechnicalReportChange(s)}),t(),e(537,`
                  `),d(538,Un,4,1,"div",14),e(539,`
                `),t(),e(540,`
              `),t(),e(541,`
              `),i(542,"div",8),e(543,`
                `),i(544,"div",9),e(545,`
                  `),i(546,"label",86),e(547,"Topographical Survey:"),t(),e(548,`
                  `),i(549,"input",87),b("change",function(s){return n.onTopographicalSurveyChange(s)}),t(),e(550,`
                  `),d(551,Gn,4,1,"div",14),e(552,`
                `),t(),e(553,`
              `),t(),e(554,`
            `),t(),e(555,`
          `),t(),e(556,`
          `),i(557,"fieldset",4),e(558,`
            `),i(559,"legend",5)(560,"h6",6),e(561,"ACCESS ANALYSIS PLAN"),t()(),e(562,`
            `),i(563,"div",7),e(564,`
              `),i(565,"div",8),e(566,`
                `),i(567,"div",9),e(568,`
                  `),i(569,"label",88),e(570,"Parking Strategy (Using "),i(571,"a",89),e(572,"Reference Materials"),t(),e(573," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6), :"),t(),e(574,`
                  `),i(575,"input",90),b("change",function(s){return n.onParkingStrategyChange(s)}),t(),e(576,`
                  `),d(577,Hn,4,1,"div",14),e(578,`
                `),t(),e(579,`
              `),t(),e(580,`
              `),i(581,"div",8),e(582,`
                `),i(583,"div",9),e(584,`
                  `),i(585,"label",91),e(586,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(587,`
                  `),i(588,"input",92),b("change",function(s){return n.onTrafficManagementPlanChange(s)}),t(),e(589,`
                  `),d(590,Yn,4,1,"div",14),e(591,`
                `),t(),e(592,`
              `),t(),e(593,`
            `),t(),e(594,`
          `),t(),e(595,`
          `),i(596,"fieldset",4),e(597,`
            `),i(598,"legend",5)(599,"h6",6),e(600,"ESTIMATED UTILITY DEMAND"),t()(),e(601,`
            `),i(602,"div",7),e(603,`
              `),i(604,"div",8),e(605,`
                `),i(606,"div",9),e(607,`
                  `),i(608,"label",93),e(609,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(610,`
                  `),i(611,"input",94),b("change",function(s){return n.onEstimatedUtilityDemandRequirementsChange(s)}),t(),e(612,`
                  `),d(613,Kn,4,1,"div",14),e(614,`
                `),t(),e(615,`
              `),t(),e(616,`
            `),t(),e(617,`
          `),t(),e(618,`
          `),i(619,"fieldset",4),e(620,`
            `),i(621,"legend",5)(622,"h6",6),e(623,"PROJECT SUSTAINABILITY"),t()(),e(624,`
            `),i(625,"div",7),e(626,`
              `),i(627,"div",8),e(628,`
                `),i(629,"div",9),e(630,`
                  `),i(631,"label",95),e(632,"Project Sustainability Brief (What sustainability rating tool and level do you plan to use):"),t(),e(633,`
                  `),u(634,"ckeditor",96),e(635,`
                  `),d(636,Qn,4,1,"div",14),e(637,`
                `),t(),e(638,`
              `),t(),e(639,`
              `),i(640,"div",8),e(641,`
                `),i(642,"div",9),e(643,`
                  `),i(644,"label",97),e(645,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(646,`
                  `),i(647,"input",98),b("change",function(s){return n.onSustainabilityReportChange(s)}),t(),e(648,`
                  `),d(649,$n,4,1,"div",14),e(650,`
                `),t(),e(651,`
              `),t(),e(652,`
              `),i(653,"div",8),e(654,`
                `),i(655,"div",9),e(656,`
                  `),i(657,"label",99),e(658,"Green Certifications:"),t(),e(659,`
                  `),i(660,"select",100),e(661,`
                    `),i(662,"option",12),e(663,"--- Select certification ---"),t(),e(664,`
                    `),d(665,er,2,3,"option",13),e(666,`
                  `),t(),e(667,`
                  `),d(668,ir,4,1,"div",14),e(669,`
                `),t(),e(670,`
              `),t(),e(671,`
              `),d(672,or,12,4,"div",101),e(673,`
            `),t(),e(674,`
          `),t(),e(675,`
          `),i(676,"fieldset",4),e(677,`
            `),i(678,"legend",5)(679,"h6",6),e(680,"CONCLUSIONS"),t()(),e(681,`
            `),i(682,"div",7),e(683,`
              `),i(684,"div",8),e(685,`
                `),i(686,"div",9),e(687,`
                  `),i(688,"label",102),e(689,"Estimated Project Duration (In months):"),t(),e(690,`
                  `),u(691,"input",103),e(692,`
                  `),d(693,lr,4,1,"div",14),e(694,`
                `),t(),e(695,`
              `),t(),e(696,`
              `),i(697,"div",8),e(698,`
                `),i(699,"div",9),e(700,`
                  `),i(701,"label",104),e(702,"Estimated Project Construction Cost (In USD):"),t(),e(703,`
                  `),u(704,"input",105),e(705,`
                  `),d(706,dr,4,1,"div",14),e(707,`
                `),t(),e(708,`
              `),t(),e(709,`
              `),i(710,"div",106),e(711,`
                `),i(712,"div",73),e(713,`
                  `),u(714,"input",107),e(715,`
                  `),i(716,"label",108),e(717,`
                    By checking this, confirms the investor's commitment to comply with the `),i(718,"a",89),e(719,"Konza Technopolis Development Codes and Guidelines"),t(),e(720,`
                  `),t(),e(721,`
                `),t(),e(722,`
                `),d(723,_r,4,1,"div",14),e(724,`
              `),t(),e(725,`
            `),t(),e(726,`
          `),t(),e(727,`

          `),i(728,"div",109),e(729,`
            `),i(730,"button",110),e(731,"Cancel"),t(),e(732,`
            `),i(733,"button",111),e(734,"Submit"),t(),e(735,`
          `),t(),e(736,`

        `),t(),e(737,`

      `),t(),e(738,`
    `),t(),e(739,`
  `),t(),e(740,`
`),t()),r&2){let _,s,E,w,M,N,k,c,j,V,g,ee,te,ie,ne,re,oe;m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngClass",x(91,C,((_=n.itemForm.get("investor_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("investor_id"))==null?null:_.dirty)||((_=n.itemForm.get("investor_id"))==null?null:_.touched)))),l(5),m("ngForOf",n.mInvestors),l(3),m("ngIf",((s=n.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("investor_id"))==null?null:s.dirty)||((s=n.itemForm.get("investor_id"))==null?null:s.touched))),l(11),m("ngClass",x(93,C,((E=n.itemForm.get("type_id"))==null?null:E.invalid)&&(((E=n.itemForm.get("type_id"))==null?null:E.dirty)||((E=n.itemForm.get("type_id"))==null?null:E.touched)))),l(5),m("ngForOf",n.mPermitTypes),l(3),m("ngIf",((w=n.itemForm.get("type_id"))==null?null:w.invalid)&&(((w=n.itemForm.get("type_id"))==null?null:w.dirty)||((w=n.itemForm.get("type_id"))==null?null:w.touched))),l(6),m("ngIf",n.mProfile),l(17),m("ngClass",x(95,C,((M=n.itemForm.get("project_brief"))==null?null:M.invalid)&&(((M=n.itemForm.get("project_brief"))==null?null:M.dirty)||((M=n.itemForm.get("project_brief"))==null?null:M.touched)))),l(3),m("ngIf",((N=n.itemForm.get("project_brief"))==null?null:N.invalid)&&(((N=n.itemForm.get("project_brief"))==null?null:N.dirty)||((N=n.itemForm.get("project_brief"))==null?null:N.touched))),l(11),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(97,C,((k=n.itemForm.get("project_purpose"))==null?null:k.invalid)&&(((k=n.itemForm.get("project_purpose"))==null?null:k.dirty)||((k=n.itemForm.get("project_purpose"))==null?null:k.touched)))),l(2),m("ngIf",((c=n.itemForm.get("project_purpose"))==null?null:c.invalid)&&(((c=n.itemForm.get("project_purpose"))==null?null:c.dirty)||((c=n.itemForm.get("project_purpose"))==null?null:c.touched))),l(16),m("ngIf",n.mInvestorParcels.length>0),l(11),m("formGroup",n.mItemForm),l(11),m("ngClass",x(99,C,((j=n.mItemForm.get("parcel_number"))==null?null:j.invalid)&&(((j=n.mItemForm.get("parcel_number"))==null?null:j.dirty)||((j=n.mItemForm.get("parcel_number"))==null?null:j.touched)))),l(5),m("ngForOf",n.mInvestorParcels),l(3),m("ngIf",n.mItemForm.get("parcel_number").invalid&&(n.mItemForm.get("parcel_number").dirty||n.mItemForm.get("parcel_number").touched)),l(12),m("ngClass",x(101,C,((V=n.mItemForm.get("planned_land_use_id"))==null?null:V.invalid)&&(((V=n.mItemForm.get("planned_land_use_id"))==null?null:V.dirty)||((V=n.mItemForm.get("planned_land_use_id"))==null?null:V.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((g=n.mItemForm.get("planned_land_use_id"))==null?null:g.invalid)&&(((g=n.mItemForm.get("planned_land_use_id"))==null?null:g.dirty)||((g=n.mItemForm.get("planned_land_use_id"))==null?null:g.touched))),l(11),m("ngClass",x(103,C,((ee=n.mItemForm.get("primary_land_use_id"))==null?null:ee.invalid)&&(((ee=n.mItemForm.get("primary_land_use_id"))==null?null:ee.dirty)||((ee=n.mItemForm.get("primary_land_use_id"))==null?null:ee.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((te=n.mItemForm.get("primary_land_use_id"))==null?null:te.invalid)&&(((te=n.mItemForm.get("primary_land_use_id"))==null?null:te.dirty)||((te=n.mItemForm.get("primary_land_use_id"))==null?null:te.touched))),l(11),m("ngClass",x(105,C,((ie=n.mItemForm.get("secondary_land_use_id"))==null?null:ie.invalid)&&(((ie=n.mItemForm.get("secondary_land_use_id"))==null?null:ie.dirty)||((ie=n.mItemForm.get("secondary_land_use_id"))==null?null:ie.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((ne=n.mItemForm.get("secondary_land_use_id"))==null?null:ne.invalid)&&(((ne=n.mItemForm.get("secondary_land_use_id"))==null?null:ne.dirty)||((ne=n.mItemForm.get("secondary_land_use_id"))==null?null:ne.touched))),l(11),m("ngClass",x(107,C,((re=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:re.invalid)&&(((re=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:re.dirty)||((re=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:re.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((oe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:oe.invalid)&&(((oe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:oe.dirty)||((oe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:oe.touched))),l(11),m("ngClass",x(109,C,n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched))),l(2),m("ngIf",n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched)),l(11),m("ngClass",x(111,C,n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),l(11),m("ngClass",x(113,C,n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),l(11),m("ngClass",x(115,C,n.mItemForm.get("min_number_of_floors").invalid&&(n.mItemForm.get("min_number_of_floors").dirty||n.mItemForm.get("min_number_of_floors").touched))),l(2),m("ngIf",n.mItemForm.get("min_number_of_floors").invalid&&(n.mItemForm.get("min_number_of_floors").dirty||n.mItemForm.get("min_number_of_floors").touched)),l(11),m("ngClass",x(117,C,n.mItemForm.get("max_number_of_floors").invalid&&(n.mItemForm.get("max_number_of_floors").dirty||n.mItemForm.get("max_number_of_floors").touched))),l(2),m("ngIf",n.mItemForm.get("max_number_of_floors").invalid&&(n.mItemForm.get("max_number_of_floors").dirty||n.mItemForm.get("max_number_of_floors").touched)),l(11),m("ngClass",x(119,C,n.mItemForm.get("min_floor_to_floor_height").invalid&&(n.mItemForm.get("min_floor_to_floor_height").dirty||n.mItemForm.get("min_floor_to_floor_height").touched))),l(2),m("ngIf",n.mItemForm.get("min_floor_to_floor_height").invalid&&(n.mItemForm.get("min_floor_to_floor_height").dirty||n.mItemForm.get("min_floor_to_floor_height").touched)),l(11),m("ngClass",x(121,C,n.mItemForm.get("max_floor_to_floor_height").invalid&&(n.mItemForm.get("max_floor_to_floor_height").dirty||n.mItemForm.get("max_floor_to_floor_height").touched))),l(2),m("ngIf",n.mItemForm.get("max_floor_to_floor_height").invalid&&(n.mItemForm.get("max_floor_to_floor_height").dirty||n.mItemForm.get("max_floor_to_floor_height").touched)),l(11),m("ngClass",x(123,C,n.mItemForm.get("min_floor_area").invalid&&(n.mItemForm.get("min_floor_area").dirty||n.mItemForm.get("min_floor_area").touched))),l(2),m("ngIf",n.mItemForm.get("min_floor_area").invalid&&(n.mItemForm.get("min_floor_area").dirty||n.mItemForm.get("min_floor_area").touched)),l(11),m("ngClass",x(125,C,n.mItemForm.get("max_floor_area").invalid&&(n.mItemForm.get("max_floor_area").dirty||n.mItemForm.get("max_floor_area").touched))),l(2),m("ngIf",n.mItemForm.get("max_floor_area").invalid&&(n.mItemForm.get("max_floor_area").dirty||n.mItemForm.get("max_floor_area").touched)),l(11),m("ngClass",x(127,C,n.mItemForm.get("min_far").invalid&&(n.mItemForm.get("min_far").dirty||n.mItemForm.get("min_far").touched))),l(2),m("ngIf",n.mItemForm.get("min_far").invalid&&(n.mItemForm.get("min_far").dirty||n.mItemForm.get("min_far").touched)),l(11),m("ngClass",x(129,C,n.mItemForm.get("max_far").invalid&&(n.mItemForm.get("max_far").dirty||n.mItemForm.get("max_far").touched))),l(2),m("ngIf",n.mItemForm.get("max_far").invalid&&(n.mItemForm.get("max_far").dirty||n.mItemForm.get("max_far").touched)),l(11),m("ngClass",x(131,C,n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched))),l(2),m("ngIf",n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched)),l(14),m("disabled",n.mItemForm.invalid),l(59),m("ngForOf",n.mLandUsePlans),l(32),m("ngIf",n.itemForm.get("has_variations").invalid&&(n.itemForm.get("has_variations").dirty||n.itemForm.get("has_variations").touched)),l(11),m("ngClass",x(133,C,n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched))),l(2),m("ngIf",n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched)),l(11),m("ngClass",x(135,C,n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched))),l(2),m("ngIf",n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched)),l(21),m("ngClass",x(137,C,n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched))),l(2),m("ngIf",n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched)),l(11),m("ngClass",x(139,C,n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched))),l(2),m("ngIf",n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched)),l(11),m("ngClass",x(141,C,n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched)),l(24),m("ngClass",x(143,C,n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched))),l(2),m("ngIf",n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched)),l(11),m("ngClass",x(145,C,n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched))),l(2),m("ngIf",n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched)),l(21),m("ngClass",x(147,C,n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched))),l(2),m("ngIf",n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched)),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(149,C,n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched))),l(2),m("ngIf",n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched)),l(11),m("ngClass",x(151,C,n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched))),l(2),m("ngIf",n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched)),l(11),m("ngClass",x(153,C,n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched))),l(5),m("ngForOf",n.mGreenCertifications),l(3),m("ngIf",n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched)),l(4),m("ngIf",n.itemForm.get("green_certification_id").value==="4"),l(19),m("ngClass",x(155,C,n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched)),l(11),m("ngClass",x(157,C,n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched)),l(17),m("ngIf",n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),l(10),m("disabled",n.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,de,X,se,_e,Z,Ee,Fe,he,Ze,Qe,Ce,Oe,pe,Q,$,ce,De,ye],encapsulation:2})}};var h=o=>({"is-invalid":o});function pr(o,a){o&1&&u(0,"app-progress")}function cr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.user.id)),l(),v(r.user.name)}}function ur(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ur,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("investor_id"))==null||r.errors==null?null:r.errors.required)}}function xr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function vr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function gr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,vr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("type_id"))==null||r.errors==null?null:r.errors.required)}}function yr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function br(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Sr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,br,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("professional_body_id"))==null||r.errors==null?null:r.errors.required)}}function hr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Cr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,hr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("membership_number"))==null||r.errors==null?null:r.errors.required)}}function Er(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Fr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Er,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("consultant_name"))==null||r.errors==null?null:r.errors.required)}}function Ir(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Tr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ir,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("address"))==null||r.errors==null?null:r.errors.required)}}function Pr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Pr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("email"))==null||r.errors==null?null:r.errors.required)}}function wr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Mr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,wr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("nationality"))==null||r.errors==null?null:r.errors.required)}}function Nr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function kr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                      `),d(2,Nr,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_brief"))==null||r.errors==null?null:r.errors.required)}}function Ar(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                      `),d(2,Ar,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_purpose"))==null||r.errors==null?null:r.errors.required)}}function Vr(o,a){if(o&1&&(i(0,"div",81),e(1,`
                      `),i(2,"div",82),e(3,`
                        `),i(4,"div",83),e(5,`
                          `),i(6,"div",84)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",85),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),u(15,"br"),e(16),u(17,"br"),e(18),u(19,"br"),e(20),u(21,"br"),e(22),u(23,"br"),e(24),u(25,"br"),e(26),u(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let r=a.$implicit;l(8),v(r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(6),A(`
                              Acres: `,r.allocation_worksheet==null?null:r.allocation_worksheet.acres," "),l(2),S(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),S(`
                              Min/Max FAR: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_far,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_far),l(2),S(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),S(`
                              Min/Max Floor Area: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floor_area,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floor_area),l(2),A(`
                              Plot Coverage: `,r.allocation_worksheet==null?null:r.allocation_worksheet.plot_coverage,"% "),l(2),A(`
                              Use: `,r.allocation_worksheet==null?null:r.allocation_worksheet.description," ")}}function Rr(o,a){if(o&1&&(i(0,"div",77),e(1,`
                  `),i(2,"div",78),e(3,`
                    `),i(4,"small",79),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Vr,33,12,"div",80),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let r=p();l(10),m("ngForOf",r.mInvestorParcels)}}function Dr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Or(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Dr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("has_variations").errors)==null?null:r.required)}}function Lr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.allocation_worksheet==null?null:r.allocation_worksheet.number)),l(),v(r.allocation_worksheet==null?null:r.allocation_worksheet.number)}}function Ur(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Br(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Ur,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("parcel_number").errors)==null?null:r.required)}}function Gr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Wr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Gr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_density").errors)==null?null:r.required)}}function Hr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Hr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_density").errors)==null?null:r.required)}}function Yr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Jr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Yr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_floor_area").errors)==null?null:r.required)}}function Kr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Xr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Kr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_floor_area").errors)==null?null:r.required)}}function Qr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Zr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Qr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_far").errors)==null?null:r.required)}}function $r(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function eo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,$r,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_far").errors)==null?null:r.required)}}function to(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function io(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,to,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("minimum_setback").errors)==null?null:r.required)}}function no(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ro(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,no,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_floor_to_floor_height").errors)==null?null:r.required)}}function oo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ao(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,oo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_floor_to_floor_height").errors)==null?null:r.required)}}function lo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function mo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,lo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_number_of_floors").errors)==null?null:r.required)}}function so(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _o(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,so,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_number_of_floors").errors)==null?null:r.required)}}function po(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function co(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,po,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:r.required)}}function uo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,uo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:r.required)}}function xo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function vo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,xo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:r.required)}}function go(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function yo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function bo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,yo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("planned_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function So(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function ho(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Co(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,ho,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("primary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Eo(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function Fo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Io(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Fo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("secondary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function To(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function Po(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Po,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("preferred_ground_floor_use_id"))==null||r.errors==null?null:r.errors.required)}}function wo(o,a){if(o&1){let r=z();i(0,"tr"),e(1,`
                                  `),i(2,"td"),e(3),t(),e(4,`
                                  `),i(5,"td"),e(6),t(),e(7,`
                                  `),i(8,"td"),e(9),t(),e(10,`
                                  `),i(11,"td"),e(12),t(),e(13,`
                                  `),i(14,"td"),e(15),t(),e(16,`
                                  `),i(17,"td"),e(18),t(),e(19,`
                                  `),i(20,"td"),e(21),t(),e(22,`
                                  `),i(23,"td"),e(24),t(),e(25,`
                                  `),i(26,"td"),e(27),t(),e(28,`
                                  `),i(29,"td",140),e(30,`
                                    `),i(31,"button",141),b("click",function(){let _=R(r).$implicit,s=p(2);return D(s.removeItem(_))}),L(),u(32,"svg",142),e(33,"Remove"),t(),e(34,`
                                  `),t(),e(35,`
                                `),t()}if(o&2){let r=a.$implicit,n=a.index;l(3),A("",n+1,"."),l(3),v(r.parcel_number),l(3),S("",r.min_density,"/",r.max_density),l(3),S("",r.min_floor_area,"/",r.max_floor_area),l(3),v(r.minimum_setback),l(3),S("",r.min_floor_to_floor_height,"/",r.max_floor_to_floor_height),l(3),S("",r.min_number_of_floors,"/",r.max_number_of_floors),l(3),S("",r.percentage_of_site_covered_by_existing_building,"/",r.percentage_of_site_covered_by_proposed_building),l(3),v(r.number_of_units_to_be_developed)}}function Mo(o,a){if(o&1){let r=z();i(0,"div",8),e(1,`
                `),i(2,"fieldset",86),e(3,`
                  `),i(4,"legend",5)(5,"h6",87),e(6,"Land Use Planning"),t()(),e(7,`
                  `),i(8,"div",88),e(9,`
                    `),i(10,"div",89),e(11,`
                      `),i(12,"div",8),e(13,`
                        `),i(14,"div",9),e(15,`
                          `),i(16,"label",90),e(17,"Parcel Number:"),t(),e(18,`
                          `),i(19,"select",91),e(20,`
                            `),i(21,"option",12),e(22,"--- Select Parcel ---"),t(),e(23,`
                            `),d(24,Lr,2,3,"option",13),e(25,`
                          `),t(),e(26,`
                          `),d(27,Br,4,1,"div",14),e(28,`
                        `),t(),e(29,`
                      `),t(),e(30,`
                      `),i(31,"div",92),e(32,`
                        `),i(33,"div",93),e(34,`
                          `),i(35,"label",94),e(36,"Min density:"),t(),e(37,`
                          `),u(38,"input",95),e(39,`
                          `),d(40,Wr,4,1,"div",14),e(41,`
                        `),t(),e(42,`
                      `),t(),e(43,`
                      `),i(44,"div",92),e(45,`
                        `),i(46,"div",9),e(47,`
                          `),i(48,"label",96),e(49,"Max density:"),t(),e(50,`
                          `),u(51,"input",97),e(52,`
                          `),d(53,zr,4,1,"div",14),e(54,`
                        `),t(),e(55,`
                      `),t(),e(56,`
                      `),i(57,"div",92),e(58,`
                        `),i(59,"div",9),e(60,`
                          `),i(61,"label",98),e(62,"Min Floor Area:"),t(),e(63,`
                          `),u(64,"input",99),e(65,`
                          `),d(66,Jr,4,1,"div",14),e(67,`
                        `),t(),e(68,`
                      `),t(),e(69,`
                      `),i(70,"div",92),e(71,`
                        `),i(72,"div",9),e(73,`
                          `),i(74,"label",100),e(75,"Max Floor Area:"),t(),e(76,`
                          `),u(77,"input",101),e(78,`
                          `),d(79,Xr,4,1,"div",14),e(80,`
                        `),t(),e(81,`
                      `),t(),e(82,`
                      `),i(83,"div",21),e(84,`
                        `),i(85,"div",9),e(86,`
                          `),i(87,"label",102),e(88,"Min Floor Area Ratio (FAR):"),t(),e(89,`
                          `),u(90,"input",103),e(91,`
                          `),d(92,Zr,4,1,"div",14),e(93,`
                        `),t(),e(94,`
                      `),t(),e(95,`
                      `),i(96,"div",21),e(97,`
                        `),i(98,"div",9),e(99,`
                          `),i(100,"label",104),e(101,"Max Floor Area Ratio (FAR):"),t(),e(102,`
                          `),u(103,"input",105),e(104,`
                          `),d(105,eo,4,1,"div",14),e(106,`
                        `),t(),e(107,`
                      `),t(),e(108,`
                      `),i(109,"div",8),e(110,`
                        `),i(111,"div",9),e(112,`
                          `),i(113,"label",106),e(114,"Minimum Setback:"),t(),e(115,`
                          `),u(116,"input",107),e(117,`
                          `),d(118,io,4,1,"div",14),e(119,`
                        `),t(),e(120,`
                      `),t(),e(121,`
                      `),i(122,"div",21),e(123,`
                        `),i(124,"div",9),e(125,`
                          `),i(126,"label",108),e(127,"Min Floor-to-Floor Height:"),t(),e(128,`
                          `),u(129,"input",109),e(130,`
                          `),d(131,ro,4,1,"div",14),e(132,`
                        `),t(),e(133,`
                      `),t(),e(134,`
                      `),i(135,"div",21),e(136,`
                        `),i(137,"div",9),e(138,`
                          `),i(139,"label",110),e(140,"Max Floor-to-Floor Height:"),t(),e(141,`
                          `),u(142,"input",111),e(143,`
                          `),d(144,ao,4,1,"div",14),e(145,`
                        `),t(),e(146,`
                      `),t(),e(147,`
                      `),i(148,"div",21),e(149,`
                        `),i(150,"div",9),e(151,`
                          `),i(152,"label",112),e(153,"Min No. of Floors:"),t(),e(154,`
                          `),u(155,"input",113),e(156,`
                          `),d(157,mo,4,1,"div",14),e(158,`
                        `),t(),e(159,`
                      `),t(),e(160,`
                      `),i(161,"div",21),e(162,`
                        `),i(163,"div",9),e(164,`
                          `),i(165,"label",114),e(166,"Max No. of Floors:"),t(),e(167,`
                          `),u(168,"input",115),e(169,`
                          `),d(170,_o,4,1,"div",14),e(171,`
                        `),t(),e(172,`
                      `),t(),e(173,`
                      `),i(174,"div",21),e(175,`
                        `),i(176,"div",9),e(177,`
                          `),i(178,"label",116),e(179,"Percentage of site covered by existing building(s):"),t(),e(180,`
                          `),u(181,"input",117),e(182,`
                          `),d(183,co,4,1,"div",14),e(184,`
                        `),t(),e(185,`
                      `),t(),e(186,`
                      `),i(187,"div",21),e(188,`
                        `),i(189,"div",9),e(190,`
                          `),i(191,"label",118),e(192,"Percentage of site covered by proposed building(s):"),t(),e(193,`
                          `),u(194,"input",119),e(195,`
                          `),d(196,fo,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",8),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",120),e(205,"Number of Units to be Developed:"),t(),e(206,`
                          `),u(207,"input",121),e(208,`
                          `),d(209,vo,4,1,"div",14),e(210,`
                        `),t(),e(211,`
                      `),t(),e(212,`
                      `),i(213,"div",8),e(214,`
                        `),i(215,"div",9),e(216,`
                          `),i(217,"label",122),e(218,"Planned Land Use:"),t(),e(219,`
                          `),i(220,"select",123),e(221,`
                            `),i(222,"option",12),e(223,"--- Select planned land use ---"),t(),e(224,`
                            `),d(225,go,2,3,"option",13),e(226,`
                          `),t(),e(227,`
                          `),d(228,bo,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",124),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",125),e(237,"Primary Land Use:"),t(),e(238,`
                          `),i(239,"select",126),e(240,`
                            `),i(241,"option",12),e(242,"--- Select primary land use ---"),t(),e(243,`
                            `),d(244,So,2,3,"option",13),e(245,`
                          `),t(),e(246,`
                          `),d(247,Co,4,1,"div",14),e(248,`
                        `),t(),e(249,`
                      `),t(),e(250,`
                      `),i(251,"div",124),e(252,`
                        `),i(253,"div",9),e(254,`
                          `),i(255,"label",127),e(256,"Secondary Land Use:"),t(),e(257,`
                          `),i(258,"select",128),e(259,`
                            `),i(260,"option",12),e(261,"--- Select secondary land use ---"),t(),e(262,`
                            `),d(263,Eo,2,3,"option",13),e(264,`
                          `),t(),e(265,`
                          `),d(266,Io,4,1,"div",14),e(267,`
                        `),t(),e(268,`
                      `),t(),e(269,`
                      `),i(270,"div",124),e(271,`
                        `),i(272,"div",9),e(273,`
                          `),i(274,"label",129),e(275,"Preferred Ground Floor Use:"),t(),e(276,`
                          `),i(277,"select",130),e(278,`
                            `),i(279,"option",12),e(280,"--- Select ground floor use ---"),t(),e(281,`
                            `),d(282,To,2,3,"option",13),e(283,`
                          `),t(),e(284,`
                          `),d(285,qo,4,1,"div",14),e(286,`
                        `),t(),e(287,`
                      `),t(),e(288,`
                    `),t(),e(289,`
                  `),t(),e(290,`
                  `),i(291,"div"),e(292,`
                    `),i(293,"div",131),e(294,`
                      `),i(295,"button",132),b("click",function(){R(r);let _=p();return D(_.resetItemsForm())}),L(),u(296,"svg",133),e(297,"Reset"),t(),e(298,`
                      `),fe(),i(299,"button",134),b("click",function(){R(r);let _=p();return D(_.addItem())}),L(),u(300,"svg",135),e(301,"Add"),t(),e(302,`
                    `),t(),e(303,`
                    `),fe(),i(304,"div",136),e(305,`
                      `),i(306,"div",137),e(307,`
                          `),i(308,"table",138),e(309,`
                              `),i(310,"thead"),e(311,`
                                `),i(312,"tr"),e(313,`
                                  `),i(314,"th"),e(315,"#"),t(),e(316,`
                                  `),i(317,"th"),e(318,"Parcel"),t(),e(319,`
                                  `),i(320,"th"),e(321,"Min/Max "),u(322,"br"),e(323," Density"),t(),e(324,`
                                  `),i(325,"th"),e(326,"Min/Max "),u(327,"br"),e(328," Floor Area"),t(),e(329,`
                                  `),i(330,"th"),e(331,"Minimum "),u(332,"br"),e(333," Setback"),t(),e(334,`
                                  `),i(335,"th"),e(336,"Min/Max Floor "),u(337,"br"),e(338," to Floor Height"),t(),e(339,`
                                  `),i(340,"th"),e(341,"Min/Max "),u(342,"br"),e(343," No of Floors"),t(),e(344,`
                                  `),i(345,"th"),e(346,"Plot Coverage "),u(347,"br"),e(348," (Existing/Proposed)"),t(),e(349,`
                                  `),i(350,"th"),e(351,"No. of Units to "),u(352,"br"),e(353," be Developed"),t(),e(354,`
                                  `),i(355,"th"),e(356,"Action"),t(),e(357,`
                                `),t(),e(358,`
                              `),t(),e(359,`
                              `),i(360,"tbody"),e(361,`
                                `),d(362,wo,36,14,"tr",139),e(363,`
                              `),t(),e(364,`
                          `),t(),e(365,`
                      `),t(),e(366,`
                    `),t(),e(367,`
                  `),t(),e(368,`
              `),t(),e(369,`
              `),t()}if(o&2){let r,n,_,s,E,w,M,N,k,c=p();l(8),m("formGroup",c.mItemForm),l(11),m("ngClass",x(46,h,((r=c.mItemForm.get("parcel_number"))==null?null:r.invalid)&&(((r=c.mItemForm.get("parcel_number"))==null?null:r.dirty)||((r=c.mItemForm.get("parcel_number"))==null?null:r.touched)))),l(5),m("ngForOf",c.mInvestorParcels),l(3),m("ngIf",c.mItemForm.get("parcel_number").invalid&&(c.mItemForm.get("parcel_number").dirty||c.mItemForm.get("parcel_number").touched)),l(11),m("ngClass",x(48,h,c.mItemForm.get("min_density").invalid&&(c.mItemForm.get("min_density").dirty||c.mItemForm.get("min_density").touched))),l(2),m("ngIf",c.mItemForm.get("min_density").invalid&&(c.mItemForm.get("min_density").dirty||c.mItemForm.get("min_density").touched)),l(11),m("ngClass",x(50,h,c.mItemForm.get("max_density").invalid&&(c.mItemForm.get("max_density").dirty||c.mItemForm.get("max_density").touched))),l(2),m("ngIf",c.mItemForm.get("max_density").invalid&&(c.mItemForm.get("max_density").dirty||c.mItemForm.get("max_density").touched)),l(11),m("ngClass",x(52,h,c.mItemForm.get("min_floor_area").invalid&&(c.mItemForm.get("min_floor_area").dirty||c.mItemForm.get("min_floor_area").touched))),l(2),m("ngIf",c.mItemForm.get("min_floor_area").invalid&&(c.mItemForm.get("min_floor_area").dirty||c.mItemForm.get("min_floor_area").touched)),l(11),m("ngClass",x(54,h,c.mItemForm.get("max_floor_area").invalid&&(c.mItemForm.get("max_floor_area").dirty||c.mItemForm.get("max_floor_area").touched))),l(2),m("ngIf",c.mItemForm.get("max_floor_area").invalid&&(c.mItemForm.get("max_floor_area").dirty||c.mItemForm.get("max_floor_area").touched)),l(11),m("ngClass",x(56,h,c.mItemForm.get("min_far").invalid&&(c.mItemForm.get("min_far").dirty||c.mItemForm.get("min_far").touched))),l(2),m("ngIf",c.mItemForm.get("min_far").invalid&&(c.mItemForm.get("min_far").dirty||c.mItemForm.get("min_far").touched)),l(11),m("ngClass",x(58,h,c.mItemForm.get("max_far").invalid&&(c.mItemForm.get("max_far").dirty||c.mItemForm.get("max_far").touched))),l(2),m("ngIf",c.mItemForm.get("max_far").invalid&&(c.mItemForm.get("max_far").dirty||c.mItemForm.get("max_far").touched)),l(11),m("ngClass",x(60,h,c.mItemForm.get("minimum_setback").invalid&&(c.mItemForm.get("minimum_setback").dirty||c.mItemForm.get("minimum_setback").touched))),l(2),m("ngIf",c.mItemForm.get("minimum_setback").invalid&&(c.mItemForm.get("minimum_setback").dirty||c.mItemForm.get("minimum_setback").touched)),l(11),m("ngClass",x(62,h,c.mItemForm.get("min_floor_to_floor_height").invalid&&(c.mItemForm.get("min_floor_to_floor_height").dirty||c.mItemForm.get("min_floor_to_floor_height").touched))),l(2),m("ngIf",c.mItemForm.get("min_floor_to_floor_height").invalid&&(c.mItemForm.get("min_floor_to_floor_height").dirty||c.mItemForm.get("min_floor_to_floor_height").touched)),l(11),m("ngClass",x(64,h,c.mItemForm.get("max_floor_to_floor_height").invalid&&(c.mItemForm.get("max_floor_to_floor_height").dirty||c.mItemForm.get("max_floor_to_floor_height").touched))),l(2),m("ngIf",c.mItemForm.get("max_floor_to_floor_height").invalid&&(c.mItemForm.get("max_floor_to_floor_height").dirty||c.mItemForm.get("max_floor_to_floor_height").touched)),l(11),m("ngClass",x(66,h,c.mItemForm.get("min_number_of_floors").invalid&&(c.mItemForm.get("min_number_of_floors").dirty||c.mItemForm.get("min_number_of_floors").touched))),l(2),m("ngIf",c.mItemForm.get("min_number_of_floors").invalid&&(c.mItemForm.get("min_number_of_floors").dirty||c.mItemForm.get("min_number_of_floors").touched)),l(11),m("ngClass",x(68,h,c.mItemForm.get("max_number_of_floors").invalid&&(c.mItemForm.get("max_number_of_floors").dirty||c.mItemForm.get("max_number_of_floors").touched))),l(2),m("ngIf",c.mItemForm.get("max_number_of_floors").invalid&&(c.mItemForm.get("max_number_of_floors").dirty||c.mItemForm.get("max_number_of_floors").touched)),l(11),m("ngClass",x(70,h,c.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),l(2),m("ngIf",c.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),l(11),m("ngClass",x(72,h,c.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),l(2),m("ngIf",c.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),l(11),m("ngClass",x(74,h,c.mItemForm.get("number_of_units_to_be_developed").invalid&&(c.mItemForm.get("number_of_units_to_be_developed").dirty||c.mItemForm.get("number_of_units_to_be_developed").touched))),l(2),m("ngIf",c.mItemForm.get("number_of_units_to_be_developed").invalid&&(c.mItemForm.get("number_of_units_to_be_developed").dirty||c.mItemForm.get("number_of_units_to_be_developed").touched)),l(11),m("ngClass",x(76,h,((n=c.mItemForm.get("planned_land_use_id"))==null?null:n.invalid)&&(((n=c.mItemForm.get("planned_land_use_id"))==null?null:n.dirty)||((n=c.mItemForm.get("planned_land_use_id"))==null?null:n.touched)))),l(5),m("ngForOf",c.mParcelLandUseGroups),l(3),m("ngIf",((_=c.mItemForm.get("planned_land_use_id"))==null?null:_.invalid)&&(((_=c.mItemForm.get("planned_land_use_id"))==null?null:_.dirty)||((_=c.mItemForm.get("planned_land_use_id"))==null?null:_.touched))),l(11),m("ngClass",x(78,h,((s=c.mItemForm.get("primary_land_use_id"))==null?null:s.invalid)&&(((s=c.mItemForm.get("primary_land_use_id"))==null?null:s.dirty)||((s=c.mItemForm.get("primary_land_use_id"))==null?null:s.touched)))),l(5),m("ngForOf",c.mParcelLandUseGroups),l(3),m("ngIf",((E=c.mItemForm.get("primary_land_use_id"))==null?null:E.invalid)&&(((E=c.mItemForm.get("primary_land_use_id"))==null?null:E.dirty)||((E=c.mItemForm.get("primary_land_use_id"))==null?null:E.touched))),l(11),m("ngClass",x(80,h,((w=c.mItemForm.get("secondary_land_use_id"))==null?null:w.invalid)&&(((w=c.mItemForm.get("secondary_land_use_id"))==null?null:w.dirty)||((w=c.mItemForm.get("secondary_land_use_id"))==null?null:w.touched)))),l(5),m("ngForOf",c.mParcelLandUseGroups),l(3),m("ngIf",((M=c.mItemForm.get("secondary_land_use_id"))==null?null:M.invalid)&&(((M=c.mItemForm.get("secondary_land_use_id"))==null?null:M.dirty)||((M=c.mItemForm.get("secondary_land_use_id"))==null?null:M.touched))),l(11),m("ngClass",x(82,h,((N=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:N.invalid)&&(((N=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:N.dirty)||((N=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:N.touched)))),l(5),m("ngForOf",c.mParcelLandUseGroups),l(3),m("ngIf",((k=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:k.invalid)&&(((k=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:k.dirty)||((k=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:k.touched))),l(14),m("disabled",c.mItemForm.invalid),l(63),m("ngForOf",c.mLandUsePlans)}}function No(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ko(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,No,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("site_plan_and_analysis").errors)==null?null:r.required)}}function Ao(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ao,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("context_analysis").errors)==null?null:r.required)}}function Vo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ro(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Vo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("concept_plan").errors)==null?null:r.required)}}function Do(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Oo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Do,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("geotechnical_report").errors)==null?null:r.required)}}function Lo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Uo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Lo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey").errors)==null?null:r.required)}}function Bo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Go(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Bo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("parking_strategy").errors)==null?null:r.required)}}function Wo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ho(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Wo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("traffic_management_plan").errors)==null?null:r.required)}}function zo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,zo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:r.required)}}function Jo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ko(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Jo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_sustainability_brief").errors)==null?null:r.required)}}function Xo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Xo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("sustainability_report").errors)==null?null:r.required)}}function Zo(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.name)}}function $o(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ea(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,$o,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("green_certification_id").errors)==null?null:r.required)}}function ta(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ia(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ta,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("other_green_certification").errors)==null?null:r.required)}}function na(o,a){if(o&1){let r=z();i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",143),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"input",144),q("ngModelChange",function(_){R(r);let s=p();return P(s.item.other_green_certification,_)||(s.item.other_green_certification=_),D(_)}),t(),e(8,`
                  `),d(9,ia,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()}if(o&2){let r=p();l(7),T("ngModel",r.item.other_green_certification),m("ngClass",x(3,h,r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))),l(2),m("ngIf",r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))}}function ra(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function oa(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ra,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_duration").errors)==null?null:r.required)}}function aa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function la(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,aa,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_construction_cost").errors)==null?null:r.required)}}function ma(o,a){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function da(o,a){if(o&1&&(i(0,"div",76),e(1,`
                  `),d(2,ma,2,0,"div",0),e(3,`
                `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:r.requiredTrue)}}var it=class o{constructor(a,r,n,_,s,E,w){this.mConstructionPermitService=a;this.mProfileService=r;this.router=n;this.mToastrService=_;this.mAppContextService=s;this.fb=E;this.route=w;this.mInvestorParcels={};this.mProgress=F(!1);this.mParcelInfo={};this.mEditor=ge;this.mLandUsePlans=[];this.itemForm=this.fb.group({investor_id:["",f.required],type_id:["",f.required],professional_body_id:["",f.nullValidator],membership_number:["",f.nullValidator],consultant_name:["",f.nullValidator],address:["",f.nullValidator],email:["",f.nullValidator],nationality:["",f.nullValidator],project_brief:["",f.required],project_purpose:["",f.required],site_plan_and_analysis:["",f.nullValidator],context_analysis:["",f.nullValidator],concept_plan:["",f.nullValidator],geotechnical_report:["",f.nullValidator],topographical_survey:["",f.nullValidator],parking_strategy:["",f.nullValidator],traffic_management_plan:["",f.nullValidator],estimated_utility_demand_requirements:["",f.nullValidator],project_sustainability_brief:["",f.required],green_certification_id:["",f.required],other_green_certification:["",f.nullValidator],sustainability_report:["",f.nullValidator],has_variations:["no",f.required],estimated_project_duration:["",f.required],estimated_project_construction_cost:["",f.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,f.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",f.required],planned_land_use_id:["",f.required],primary_land_use_id:["",f.required],secondary_land_use_id:["",f.nullValidator],preferred_ground_floor_use_id:["",f.nullValidator],number_of_units_to_be_developed:["",f.required],percentage_of_site_covered_by_existing_building:["",f.required],percentage_of_site_covered_by_proposed_building:["",f.nullValidator],min_number_of_floors:["",f.required],max_number_of_floors:["",f.required],min_floor_to_floor_height:["",f.nullValidator],max_floor_to_floor_height:["",f.nullValidator],min_floor_area:["",f.nullValidator],max_floor_area:["",f.nullValidator],min_far:["",f.nullValidator],max_far:["",f.nullValidator],minimum_setback:["",f.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mLandUsePlans=this.item.variations,this.mInvestorParcels=this.item.investor.parcels,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPermitTypes=a.data.permit_types,this.mParcelLandUseGroups=a.data.parcel_land_use_groups,this.mGreenCertifications=a.data.green_certifications,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=JSON.stringify(Object.assign({},this.mLandUsePlans)),n=new FormData;n.append("investor_id",a.investor_id),n.append("type_id",a.type_id),n.append("professional_body_id",a.professional_body_id),n.append("membership_number",a.membership_number),n.append("consultant_name",a.consultant_name),n.append("address",a.address),n.append("email",a.email),n.append("nationality",a.nationality),n.append("project_brief",a.project_brief),n.append("project_purpose",a.project_purpose),n.append("has_variations",a.has_variations),n.append("land_use_plans",r),n.append("project_sustainability_brief",a.project_sustainability_brief),n.append("green_certification_id",a.green_certification_id),n.append("other_green_certification",a.other_green_certification),n.append("estimated_project_duration",a.estimated_project_duration),n.append("estimated_project_construction_cost",a.estimated_project_construction_cost),n.append("commitment_to_comply_with_development_codes_and_guidelines",a.commitment_to_comply_with_development_codes_and_guidelines),n.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),n.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),n.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),n.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),n.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),n.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),n.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),n.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),n.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),n.append("_method","PUT"),this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,n).subscribe({next:_=>{_&&(this.mToastrService.success(_.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:_=>{_.error.message&&this.mToastrService.error(_.error.message),this.mProgress.set(!1)}})}verifyProfessional(){let a={professional_body_id:this.itemForm.get("professional_body_id")?.value,membership_number:this.itemForm.get("membership_number")?.value};!a.professional_body_id||!a.membership_number||(this.mProgress.set(!0),this.mProfileService.professionalSearch(a).subscribe({next:r=>{if(r){if(r.status==="failed")this.mToastrService.error(r.message);else{let n=r;if(this.itemForm.get("consultant_name")?.setValue(n.name),this.itemForm.get("address")?.setValue(n.address),this.itemForm.get("email")?.setValue(n.email),this.itemForm.get("nationality")?.setValue(n.nationality),n.status=="Inactive"){let _=r;this.mToastrService.error(_.good_standing+" "+_.balance_reason),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits")}}this.mProgress.set(!1)}},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}}))}onContextAnalysisChange(a){if(a.target.value){let r=a.target.files[0];this.context_analysis_file=r}}onSitePlanAndAnlysisChange(a){if(a.target.value){let r=a.target.files[0];this.site_plan_and_analysis_file=r}}onConceptPlanChange(a){if(a.target.value){let r=a.target.files[0];this.concept_plan_file=r}}onGeotechnicalReportChange(a){if(a.target.value){let r=a.target.files[0];this.geotechnical_report_file=r}}onTopographicalSurveyChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_file=r}}onParkingStrategyChange(a){if(a.target.value){let r=a.target.files[0];this.parking_strategy_file=r}}onTrafficManagementPlanChange(a){if(a.target.value){let r=a.target.files[0];this.traffic_management_plan_file=r}}onEstimatedUtilityDemandRequirementsChange(a){if(a.target.value){let r=a.target.files[0];this.estimated_utility_demand_requirements_file=r}}onSustainabilityReportChange(a){if(a.target.value){let r=a.target.files[0];this.sustainability_report_file=r}}onInvestorChange(a){if(a.target.value){let r=a.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(r).subscribe({next:n=>{n&&(this.mInvestorParcels=n,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}}onCheckVariations(a){let r=this.itemForm.get("has_variations")?.value;console.log(r)}getInvalidFields(){return Object.keys(this.itemForm.controls).filter(a=>this.itemForm.get(a)?.invalid)}addItem(){let a=this.mItemForm.value;this.mLandUsePlans.some(n=>n.parcel_number===a.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(a),this.onCheckVariations(a),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(a){this.mLandUsePlans.forEach((r,n)=>{r===a&&this.mLandUsePlans.splice(n,1)})}static{this.\u0275fac=function(r){return new(r||o)(y(H),y(Ue),y(me),y(G),y(O),y(ue),y(le))}}static{this.\u0275cmp=U({type:o,selectors:[["app-edit"]],standalone:!1,decls:493,vars:127,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],[1,"col-md-6"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["class","alert alert-success",4,"ngIf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no",1,"form-check-input",3,"ngModelChange","ngModel"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes",1,"form-check-input",3,"ngModelChange","ngModel"],["for","variation_yes",1,"form-check-label"],["class","col-md-12",4,"ngIf"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads","target","_blank","rel","noopener noreferrer"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input",3,"ngModelChange","ngModel"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],[1,"col-md-3"],[1,"form-group"],["for","min_density",1,"col-form-label","required"],["formControlName","min_density","type","number",1,"form-control",3,"ngClass"],["for","max_density",1,"col-form-label","required"],["formControlName","max_density","type","number",1,"form-control",3,"ngClass"],["for","min_floor_area",1,"col-form-label","required"],["formControlName","min_floor_area","type","number",1,"form-control",3,"ngClass"],["for","max_floor_area",1,"col-form-label","required"],["formControlName","max_floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","min_far","type","number",1,"form-control",3,"ngClass"],["for","max_far",1,"col-form-label","required"],["formControlName","max_far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],["for","min_floor_to_floor_height",1,"col-form-label","required"],["formControlName","min_floor_to_floor_height","type","text",1,"form-control",3,"ngClass"],["for","max_floor_to_floor_height",1,"col-form-label","required"],["formControlName","max_floor_to_floor_height","type","text",1,"form-control",3,"ngClass"],["for","min_number_of_floors",1,"col-form-label","required"],["formControlName","min_number_of_floors","type","text",1,"form-control",3,"ngClass"],["for","max_number_of_floors",1,"col-form-label","required"],["formControlName","max_number_of_floors","type","text",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"]],template:function(r,n){if(r&1&&(d(0,pr,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),e(9,`

        `),i(10,"form",3),b("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(11,`

          `),i(12,"fieldset",4),e(13,`
            `),i(14,"legend",5)(15,"h6",6),e(16,"GENERAL INFORMATION"),t()(),e(17,`
            `),i(18,"div",7),e(19,`
              `),i(20,"div",8),e(21,`
                `),i(22,"div",9),e(23,`
                  `),i(24,"label",10),e(25,"Company:"),t(),e(26,`
                  `),i(27,"select",11),q("ngModelChange",function(s){return P(n.item.investor_id,s)||(n.item.investor_id=s),s}),b("change",function(s){return n.onInvestorChange(s)}),e(28,`
                    `),i(29,"option",12),e(30,"--- Select investor ---"),t(),e(31,`
                    `),d(32,cr,2,3,"option",13),e(33,`
                  `),t(),e(34,`
                  `),d(35,fr,4,1,"div",14),e(36,`
                `),t(),e(37,`
              `),t(),e(38,`
              `),i(39,"div",8),e(40,`
                `),i(41,"div",9),e(42,`
                  `),i(43,"label",15),e(44,"Nature of Application:"),t(),e(45,`
                  `),i(46,"select",16),q("ngModelChange",function(s){return P(n.item.type_id,s)||(n.item.type_id=s),s}),e(47,`
                    `),i(48,"option",12),e(49,"--- Select plan submission type ---"),t(),e(50,`
                    `),d(51,xr,2,3,"option",13),e(52,`
                  `),t(),e(53,`
                  `),d(54,gr,4,1,"div",14),e(55,`
                `),t(),e(56,`
              `),t(),e(57,`
            `),t(),e(58,`
          `),t(),e(59,`
          `),i(60,"fieldset",4),e(61,`
            `),i(62,"legend",5)(63,"h6",6),e(64,"CONSULTANT INFORMATION"),t()(),e(65,`
            `),i(66,"div",7),e(67,`
              `),i(68,"div",8),e(69,`
                `),i(70,"div",9),e(71,`
                  `),i(72,"label",17),e(73,"Professional Body:"),t(),e(74,`
                  `),i(75,"select",18),q("ngModelChange",function(s){return P(n.item.consultant_profile.professional_body_id,s)||(n.item.consultant_profile.professional_body_id=s),s}),b("change",function(){return n.verifyProfessional()}),e(76,`
                    `),i(77,"option",12),e(78,"--- Select professional body ---"),t(),e(79,`
                    `),d(80,yr,2,3,"option",13),e(81,`
                  `),t(),e(82,`
                  `),d(83,Sr,4,1,"div",14),e(84,`
                `),t(),e(85,`
              `),t(),e(86,`
              `),i(87,"div",8),e(88,`
                `),i(89,"div",9),e(90,`
                  `),i(91,"label",19),e(92,"Membership Number:"),t(),e(93,`
                  `),i(94,"input",20),q("ngModelChange",function(s){return P(n.item.consultant_profile.membership_number,s)||(n.item.consultant_profile.membership_number=s),s}),b("change",function(){return n.verifyProfessional()}),t(),e(95,`
                  `),d(96,Cr,4,1,"div",14),e(97,`
                `),t(),e(98,`
              `),t(),e(99,`
              `),i(100,"div",21),e(101,`
                `),i(102,"div",9),e(103,`
                  `),i(104,"label",22),e(105,"Consultant Name:"),t(),e(106,`
                  `),i(107,"input",23),q("ngModelChange",function(s){return P(n.item.consultant.name,s)||(n.item.consultant.name=s),s}),t(),e(108,`
                  `),d(109,Fr,4,1,"div",14),e(110,`
                `),t(),e(111,`
              `),t(),e(112,`
              `),i(113,"div",21),e(114,`
                `),i(115,"div",9),e(116,`
                  `),i(117,"label",24),e(118,"Address:"),t(),e(119,`
                  `),i(120,"input",25),q("ngModelChange",function(s){return P(n.item.consultant_profile.address,s)||(n.item.consultant_profile.address=s),s}),t(),e(121,`
                  `),d(122,Tr,4,1,"div",14),e(123,`
                `),t(),e(124,`
              `),t(),e(125,`
              `),i(126,"div",21),e(127,`
                `),i(128,"div",9),e(129,`
                  `),i(130,"label",26),e(131,"Email:"),t(),e(132,`
                  `),i(133,"input",27),q("ngModelChange",function(s){return P(n.item.consultant.email,s)||(n.item.consultant.email=s),s}),t(),e(134,`
                  `),d(135,qr,4,1,"div",14),e(136,`
                `),t(),e(137,`
              `),t(),e(138,`
              `),i(139,"div",21),e(140,`
                `),i(141,"div",9),e(142,`
                  `),i(143,"label",28),e(144,"Citizenship:"),t(),e(145,`
                  `),i(146,"input",29),q("ngModelChange",function(s){return P(n.item.consultant_profile.nationality,s)||(n.item.consultant_profile.nationality=s),s}),t(),e(147,`
                  `),d(148,Mr,4,1,"div",14),e(149,`
                `),t(),e(150,`
              `),t(),e(151,`
            `),t(),e(152,`
          `),t(),e(153,`
          `),i(154,"fieldset",4),e(155,`
            `),i(156,"legend",5)(157,"h6",6),e(158,"PROJECT BRIEF AND PURPOSE"),t()(),e(159,`
              `),i(160,"div",7),e(161,`
                `),i(162,"div",8),e(163,`
                  `),i(164,"div",9),e(165,`
                    `),i(166,"label",30),e(167,"Project Brief (Description of the overall project concept and how it fits in the Konza Technopolis Vision):"),t(),e(168,`
                    `),i(169,"ckeditor",31),q("ngModelChange",function(s){return P(n.item.project_brief,s)||(n.item.project_brief=s),s}),t(),e(170,`
                    `),d(171,kr,4,1,"div",14),e(172,`
                  `),t(),e(173,`
                `),t(),e(174,`
                `),i(175,"div",8),e(176,`
                  `),i(177,"div",9),e(178,`
                    `),i(179,"label",32),e(180,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(181,`
                    `),i(182,"ckeditor",33),q("ngModelChange",function(s){return P(n.item.project_purpose,s)||(n.item.project_purpose=s),s}),t(),e(183,`
                    `),d(184,jr,4,1,"div",14),e(185,`
                  `),t(),e(186,`
                `),t(),e(187,`
              `),t(),e(188,`
          `),t(),e(189,`
          `),i(190,"fieldset",4),e(191,`
            `),i(192,"legend",5)(193,"h6",6),e(194,"PARCEL & CONTEXT ANALYSIS"),t()(),e(195,`
            `),i(196,"div",7),e(197,`
              `),i(198,"div",8),e(199,`
                `),d(200,Rr,13,1,"div",34),e(201,`
              `),t(),e(202,`
              `),i(203,"div",8),e(204,`
                `),i(205,"div",9),e(206,`
                  `),i(207,"label",35),e(208,"Variations (Does Your Project Require any Variation?):"),t(),e(209,`
                  `),i(210,"div",36),e(211,`
                    `),i(212,"input",37),q("ngModelChange",function(s){return P(n.item.has_variations,s)||(n.item.has_variations=s),s}),t(),e(213,`
                    `),i(214,"label",38),e(215," No"),t(),e(216,`
                  `),t(),e(217,`
                  `),i(218,"div",36),e(219,`
                    `),i(220,"input",39),q("ngModelChange",function(s){return P(n.item.has_variations,s)||(n.item.has_variations=s),s}),t(),e(221,`
                    `),i(222,"label",40),e(223," Yes"),t(),e(224,`
                  `),t(),e(225,`
                  `),d(226,Or,4,1,"div",14),e(227,`
                `),t(),e(228,`
              `),t(),e(229,`
              `),d(230,Mo,370,84,"div",41),e(231,`
              `),i(232,"div",8),e(233,`
                `),i(234,"div",9),e(235,`
                  `),i(236,"label",42),e(237,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(238,`
                  `),i(239,"input",43),b("change",function(s){return n.onSitePlanAndAnlysisChange(s)}),t(),e(240,`
                  `),d(241,ko,4,1,"div",14),e(242,`
                `),t(),e(243,`
              `),t(),e(244,`
              `),i(245,"div",8),e(246,`
                `),i(247,"div",9),e(248,`
                  `),i(249,"label",44),e(250,"Context Analysis (500m radius context analysis):"),t(),e(251,`
                  `),i(252,"input",45),b("change",function(s){return n.onContextAnalysisChange(s)}),t(),e(253,`
                  `),d(254,jo,4,1,"div",14),e(255,`
                `),t(),e(256,`
              `),t(),e(257,`
            `),t(),e(258,`
          `),t(),e(259,`
          `),i(260,"fieldset",4),e(261,`
            `),i(262,"legend",5)(263,"h6",6),e(264,"DEVELOPMENT DATA"),t()(),e(265,`
            `),i(266,"div",7),e(267,`
              `),i(268,"div",21),e(269,`
                `),i(270,"div",9),e(271,`
                  `),i(272,"label",46),e(273,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(274,`
                  `),i(275,"input",47),b("change",function(s){return n.onConceptPlanChange(s)}),t(),e(276,`
                  `),d(277,Ro,4,1,"div",14),e(278,`
                `),t(),e(279,`
              `),t(),e(280,`
              `),i(281,"div",21),e(282,`
                `),i(283,"div",9),e(284,`
                  `),i(285,"label",48),e(286,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(287,`
                  `),i(288,"input",49),b("change",function(s){return n.onGeotechnicalReportChange(s)}),t(),e(289,`
                  `),d(290,Oo,4,1,"div",14),e(291,`
                `),t(),e(292,`
              `),t(),e(293,`
              `),i(294,"div",8),e(295,`
                `),i(296,"div",9),e(297,`
                  `),i(298,"label",50),e(299,"Topographical Survey:"),t(),e(300,`
                  `),i(301,"input",51),b("change",function(s){return n.onTopographicalSurveyChange(s)}),t(),e(302,`
                  `),d(303,Uo,4,1,"div",14),e(304,`
                `),t(),e(305,`
              `),t(),e(306,`
            `),t(),e(307,`
          `),t(),e(308,`
          `),i(309,"fieldset",4),e(310,`
            `),i(311,"legend",5)(312,"h6",6),e(313,"ACCESS ANALYSIS PLAN"),t()(),e(314,`
            `),i(315,"div",7),e(316,`
              `),i(317,"div",8),e(318,`
                `),i(319,"div",9),e(320,`
                  `),i(321,"label",52),e(322,"Parking Strategy (Using "),i(323,"a",53),e(324,"Reference Materials"),t(),e(325," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6), :"),t(),e(326,`
                  `),i(327,"input",54),b("change",function(s){return n.onParkingStrategyChange(s)}),t(),e(328,`
                  `),d(329,Go,4,1,"div",14),e(330,`
                `),t(),e(331,`
              `),t(),e(332,`
              `),i(333,"div",8),e(334,`
                `),i(335,"div",9),e(336,`
                  `),i(337,"label",55),e(338,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(339,`
                  `),i(340,"input",56),b("change",function(s){return n.onTrafficManagementPlanChange(s)}),t(),e(341,`
                  `),d(342,Ho,4,1,"div",14),e(343,`
                `),t(),e(344,`
              `),t(),e(345,`
            `),t(),e(346,`
          `),t(),e(347,`
          `),i(348,"fieldset",4),e(349,`
            `),i(350,"legend",5)(351,"h6",6),e(352,"ESTIMATED UTILITY DEMAND"),t()(),e(353,`
            `),i(354,"div",7),e(355,`
              `),i(356,"div",8),e(357,`
                `),i(358,"div",9),e(359,`
                  `),i(360,"label",57),e(361,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(362,`
                  `),i(363,"input",58),b("change",function(s){return n.onEstimatedUtilityDemandRequirementsChange(s)}),t(),e(364,`
                  `),d(365,Yo,4,1,"div",14),e(366,`
                `),t(),e(367,`
              `),t(),e(368,`
            `),t(),e(369,`
          `),t(),e(370,`
          `),i(371,"fieldset",4),e(372,`
            `),i(373,"legend",5)(374,"h6",6),e(375,"PROJECT SUSTAINABILITY"),t()(),e(376,`
            `),i(377,"div",7),e(378,`
              `),i(379,"div",8),e(380,`
                `),i(381,"div",9),e(382,`
                  `),i(383,"label",59),e(384,"Project Sustainability Brief (What sustainability rating tool and level do you plan to use):"),t(),e(385,`
                  `),i(386,"ckeditor",60),q("ngModelChange",function(s){return P(n.item.project_sustainability_brief,s)||(n.item.project_sustainability_brief=s),s}),t(),e(387,`
                  `),d(388,Ko,4,1,"div",14),e(389,`
                `),t(),e(390,`
              `),t(),e(391,`
              `),i(392,"div",8),e(393,`
                `),i(394,"div",9),e(395,`
                  `),i(396,"label",61),e(397,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(398,`
                  `),i(399,"input",62),b("change",function(s){return n.onSustainabilityReportChange(s)}),t(),e(400,`
                  `),d(401,Qo,4,1,"div",14),e(402,`
                `),t(),e(403,`
              `),t(),e(404,`
              `),i(405,"div",8),e(406,`
                `),i(407,"div",9),e(408,`
                  `),i(409,"label",63),e(410,"Green Certifications:"),t(),e(411,`
                  `),i(412,"select",64),q("ngModelChange",function(s){return P(n.item.green_certification_id,s)||(n.item.green_certification_id=s),s}),e(413,`
                    `),i(414,"option",12),e(415,"--- Select certification ---"),t(),e(416,`
                    `),d(417,Zo,2,3,"option",13),e(418,`
                  `),t(),e(419,`
                  `),d(420,ea,4,1,"div",14),e(421,`
                `),t(),e(422,`
              `),t(),e(423,`
              `),d(424,na,12,5,"div",41),e(425,`
            `),t(),e(426,`
          `),t(),e(427,`
          `),i(428,"fieldset",4),e(429,`
            `),i(430,"legend",5)(431,"h6",6),e(432,"CONCLUSIONS"),t()(),e(433,`
            `),i(434,"div",7),e(435,`
              `),i(436,"div",8),e(437,`
                `),i(438,"div",9),e(439,`
                  `),i(440,"label",65),e(441,"Estimated Project Duration (In months):"),t(),e(442,`
                  `),i(443,"input",66),q("ngModelChange",function(s){return P(n.item.estimated_project_duration,s)||(n.item.estimated_project_duration=s),s}),t(),e(444,`
                  `),d(445,oa,4,1,"div",14),e(446,`
                `),t(),e(447,`
              `),t(),e(448,`
              `),i(449,"div",8),e(450,`
                `),i(451,"div",9),e(452,`
                  `),i(453,"label",67),e(454,"Estimated Project Construction Cost (In USD):"),t(),e(455,`
                  `),i(456,"input",68),q("ngModelChange",function(s){return P(n.item.estimated_project_construction_cost,s)||(n.item.estimated_project_construction_cost=s),s}),t(),e(457,`
                  `),d(458,la,4,1,"div",14),e(459,`
                `),t(),e(460,`
              `),t(),e(461,`
              `),i(462,"div",69),e(463,`
                `),i(464,"div",36),e(465,`
                  `),i(466,"input",70),q("ngModelChange",function(s){return P(n.item.commitment_to_comply_with_development_codes_and_guidelines,s)||(n.item.commitment_to_comply_with_development_codes_and_guidelines=s),s}),t(),e(467,`
                  `),i(468,"label",71),e(469,`
                    By checking this, confirms the investor's commitment to comply with the `),i(470,"a",53),e(471,"Konza Technopolis Development Codes and Guidelines"),t(),e(472,`
                  `),t(),e(473,`
                `),t(),e(474,`
                `),d(475,da,4,1,"div",14),e(476,`
              `),t(),e(477,`
            `),t(),e(478,`
          `),t(),e(479,`

          `),i(480,"div",72),e(481,`
            `),i(482,"button",73),e(483,"Cancel"),t(),e(484,`
            `),i(485,"button",74),e(486,"Submit"),t(),e(487,`
          `),t(),e(488,`

        `),t(),e(489,`

      `),t(),e(490,`
    `),t(),e(491,`
  `),t(),e(492,`
`),t()),r&2){let _,s,E,w,M,N,k,c,j,V,g,ee,te,ie,ne,re,oe,je,Ve,Re;m("ngIf",n.mProgress()),l(10),m("formGroup",n.itemForm),l(17),T("ngModel",n.item.investor_id),m("ngClass",x(81,h,((_=n.itemForm.get("investor_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("investor_id"))==null?null:_.dirty)||((_=n.itemForm.get("investor_id"))==null?null:_.touched)))),l(5),m("ngForOf",n.mInvestors),l(3),m("ngIf",((s=n.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("investor_id"))==null?null:s.dirty)||((s=n.itemForm.get("investor_id"))==null?null:s.touched))),l(11),T("ngModel",n.item.type_id),m("ngClass",x(83,h,((E=n.itemForm.get("type_id"))==null?null:E.invalid)&&(((E=n.itemForm.get("type_id"))==null?null:E.dirty)||((E=n.itemForm.get("type_id"))==null?null:E.touched)))),l(5),m("ngForOf",n.mPermitTypes),l(3),m("ngIf",((w=n.itemForm.get("type_id"))==null?null:w.invalid)&&(((w=n.itemForm.get("type_id"))==null?null:w.dirty)||((w=n.itemForm.get("type_id"))==null?null:w.touched))),l(21),T("ngModel",n.item.consultant_profile.professional_body_id),m("ngClass",x(85,h,((M=n.itemForm.get("professional_body_id"))==null?null:M.invalid)&&(((M=n.itemForm.get("professional_body_id"))==null?null:M.dirty)||((M=n.itemForm.get("professional_body_id"))==null?null:M.touched)))),l(5),m("ngForOf",n.mProfessionalBodies),l(3),m("ngIf",((N=n.itemForm.get("professional_body_id"))==null?null:N.invalid)&&(((N=n.itemForm.get("professional_body_id"))==null?null:N.dirty)||((N=n.itemForm.get("professional_body_id"))==null?null:N.touched))),l(11),T("ngModel",n.item.consultant_profile.membership_number),m("ngClass",x(87,h,((k=n.itemForm.get("membership_number"))==null?null:k.invalid)&&(((k=n.itemForm.get("membership_number"))==null?null:k.dirty)||((k=n.itemForm.get("membership_number"))==null?null:k.touched)))),l(2),m("ngIf",((c=n.itemForm.get("membership_number"))==null?null:c.invalid)&&(((c=n.itemForm.get("membership_number"))==null?null:c.dirty)||((c=n.itemForm.get("membership_number"))==null?null:c.touched))),l(11),T("ngModel",n.item.consultant.name),m("ngClass",x(89,h,((j=n.itemForm.get("consultant_name"))==null?null:j.invalid)&&(((j=n.itemForm.get("consultant_name"))==null?null:j.dirty)||((j=n.itemForm.get("consultant_name"))==null?null:j.touched)))),l(2),m("ngIf",((V=n.itemForm.get("consultant_name"))==null?null:V.invalid)&&(((V=n.itemForm.get("consultant_name"))==null?null:V.dirty)||((V=n.itemForm.get("consultant_name"))==null?null:V.touched))),l(11),T("ngModel",n.item.consultant_profile.address),m("ngClass",x(91,h,((g=n.itemForm.get("address"))==null?null:g.invalid)&&(((g=n.itemForm.get("address"))==null?null:g.dirty)||((g=n.itemForm.get("address"))==null?null:g.touched)))),l(2),m("ngIf",((ee=n.itemForm.get("address"))==null?null:ee.invalid)&&(((ee=n.itemForm.get("address"))==null?null:ee.dirty)||((ee=n.itemForm.get("address"))==null?null:ee.touched))),l(11),T("ngModel",n.item.consultant.email),m("ngClass",x(93,h,((te=n.itemForm.get("email"))==null?null:te.invalid)&&(((te=n.itemForm.get("email"))==null?null:te.dirty)||((te=n.itemForm.get("email"))==null?null:te.touched)))),l(2),m("ngIf",((ie=n.itemForm.get("email"))==null?null:ie.invalid)&&(((ie=n.itemForm.get("email"))==null?null:ie.dirty)||((ie=n.itemForm.get("email"))==null?null:ie.touched))),l(11),T("ngModel",n.item.consultant_profile.nationality),m("ngClass",x(95,h,((ne=n.itemForm.get("nationality"))==null?null:ne.invalid)&&(((ne=n.itemForm.get("nationality"))==null?null:ne.dirty)||((ne=n.itemForm.get("nationality"))==null?null:ne.touched)))),l(2),m("ngIf",((re=n.itemForm.get("nationality"))==null?null:re.invalid)&&(((re=n.itemForm.get("nationality"))==null?null:re.dirty)||((re=n.itemForm.get("nationality"))==null?null:re.touched))),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),T("ngModel",n.item.project_brief),m("ngClass",x(97,h,((oe=n.itemForm.get("project_brief"))==null?null:oe.invalid)&&(((oe=n.itemForm.get("project_brief"))==null?null:oe.dirty)||((oe=n.itemForm.get("project_brief"))==null?null:oe.touched)))),l(2),m("ngIf",((je=n.itemForm.get("project_brief"))==null?null:je.invalid)&&(((je=n.itemForm.get("project_brief"))==null?null:je.dirty)||((je=n.itemForm.get("project_brief"))==null?null:je.touched))),l(11),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),T("ngModel",n.item.project_purpose),m("ngClass",x(99,h,((Ve=n.itemForm.get("project_purpose"))==null?null:Ve.invalid)&&(((Ve=n.itemForm.get("project_purpose"))==null?null:Ve.dirty)||((Ve=n.itemForm.get("project_purpose"))==null?null:Ve.touched)))),l(2),m("ngIf",((Re=n.itemForm.get("project_purpose"))==null?null:Re.invalid)&&(((Re=n.itemForm.get("project_purpose"))==null?null:Re.dirty)||((Re=n.itemForm.get("project_purpose"))==null?null:Re.touched))),l(16),m("ngIf",n.mInvestorParcels.length>0),l(12),T("ngModel",n.item.has_variations),l(8),T("ngModel",n.item.has_variations),l(6),m("ngIf",n.itemForm.get("has_variations").invalid&&(n.itemForm.get("has_variations").dirty||n.itemForm.get("has_variations").touched)),l(4),m("ngIf",n.itemForm.get("has_variations").value=="yes"),l(9),m("ngClass",x(101,h,n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched))),l(2),m("ngIf",n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched)),l(11),m("ngClass",x(103,h,n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched))),l(2),m("ngIf",n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched)),l(21),m("ngClass",x(105,h,n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched))),l(2),m("ngIf",n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched)),l(11),m("ngClass",x(107,h,n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched))),l(2),m("ngIf",n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched)),l(11),m("ngClass",x(109,h,n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched)),l(24),m("ngClass",x(111,h,n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched))),l(2),m("ngIf",n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched)),l(11),m("ngClass",x(113,h,n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched))),l(2),m("ngIf",n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched)),l(21),m("ngClass",x(115,h,n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched))),l(2),m("ngIf",n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched)),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),T("ngModel",n.item.project_sustainability_brief),m("ngClass",x(117,h,n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched))),l(2),m("ngIf",n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched)),l(11),m("ngClass",x(119,h,n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched))),l(2),m("ngIf",n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched)),l(11),T("ngModel",n.item.green_certification_id),m("ngClass",x(121,h,n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched))),l(5),m("ngForOf",n.mGreenCertifications),l(3),m("ngIf",n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched)),l(4),m("ngIf",n.itemForm.get("green_certification_id").value==="4"),l(19),T("ngModel",n.item.estimated_project_duration),m("ngClass",x(123,h,n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched)),l(11),T("ngModel",n.item.estimated_project_construction_cost),m("ngClass",x(125,h,n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched)),l(8),T("ngModel",n.item.commitment_to_comply_with_development_codes_and_guidelines),l(9),m("ngIf",n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),l(10),m("disabled",n.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,de,X,se,_e,Z,Ee,Fe,he,Ze,Qe,Ce,Oe,pe,Q,$,ce,De,ye],encapsulation:2})}};function sa(o,a){o&1&&u(0,"app-progress")}function _a(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p();l(),v(r.item.investor==null?null:r.item.investor.name)}}function pa(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p();l(),v(r.item.type==null?null:r.item.type.name)}}function ca(o,a){o&1&&(i(0,"span"),e(1,","),t())}function ua(o,a){if(o&1&&(i(0,"span",12),e(1),d(2,ca,2,0,"span",0),t()),o&2){let r=a.$implicit,n=a.last;l(),A(" ",r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(),m("ngIf",!n)}}function fa(o,a){if(o&1&&(i(0,"span"),e(1,`
                        `),d(2,ua,3,2,"span",31),e(3,`
                      `),t()),o&2){let r=p(2);l(2),m("ngForOf",r.item.investor.parcels)}}function xa(o,a){if(o&1&&(i(0,"div",12),e(1,`
                    `),e(2,`
                      `),d(3,fa,4,1,"span",0),e(4,`
                  `),t()),o&2){let r=p();l(3),m("ngIf",r.item.investor.parcels)}}function va(o,a){if(o&1&&(i(0,"div",32),e(1,`
                    `),i(2,"div",33),e(3,`
                      `),i(4,"div",34),e(5,`
                        `),i(6,"h6",35),e(7),t(),e(8,`
                        `),i(9,"table",36),e(10,`
                          `),i(11,"thead"),e(12,`
                            `),i(13,"tr"),e(14,`
                              `),i(15,"th",37),e(16,"#"),t(),e(17,`
                              `),i(18,"th",37),e(19,"Planned"),t(),e(20,`
                              `),i(21,"th",37),e(22,"Proposed"),t(),e(23,`
                              `),i(24,"th",37),e(25,"Variance"),t(),e(26,`
                            `),t(),e(27,`
                          `),t(),e(28,`
                          `),i(29,"tbody"),e(30,`
                            `),i(31,"tr"),e(32,`
                              `),i(33,"th",38),e(34,"Planned Land Use:"),t(),e(35,`
                              `),i(36,"td"),e(37),t(),e(38,`
                              `),i(39,"td",39),e(40),t(),e(41,`
                              `),i(42,"td",40),e(43,"-"),t(),e(44,`
                            `),t(),e(45,`
                            `),i(46,"tr"),e(47,`
                              `),i(48,"th",38),e(49,"Primary Land Use:"),t(),e(50,`
                              `),i(51,"td"),e(52),t(),e(53,`
                              `),i(54,"td",39),e(55),t(),e(56,`
                              `),i(57,"td",39),e(58,"-"),t(),e(59,`
                            `),t(),e(60,`
                            `),i(61,"tr"),e(62,`
                              `),i(63,"th",38),e(64,"Secondary Land Use:"),t(),e(65,`
                              `),i(66,"td"),e(67),t(),e(68,`
                              `),i(69,"td",39),e(70),t(),e(71,`
                              `),i(72,"td",40),e(73,"-"),t(),e(74,`
                            `),t(),e(75,`
                            `),i(76,"tr"),e(77,`
                              `),i(78,"th",38),e(79,"Preferred Ground Land Use:"),t(),e(80,`
                              `),i(81,"td"),e(82),t(),e(83,`
                              `),i(84,"td",39),e(85),t(),e(86,`
                              `),i(87,"td",40),e(88,"-"),t(),e(89,`
                            `),t(),e(90,`
                            `),i(91,"tr"),e(92,`
                              `),i(93,"th",38),e(94,"Number of Units to be Developed:"),t(),e(95,`
                              `),i(96,"td"),e(97),t(),e(98,`
                              `),i(99,"td",39),e(100),t(),e(101,`
                              `),i(102,"td",40),e(103,"-"),t(),e(104,`
                            `),t(),e(105,`
                            `),i(106,"tr"),e(107,`
                              `),i(108,"th",38),e(109,"Plot Coverage % (Proposed/Existing):"),t(),e(110,`
                              `),i(111,"td"),e(112),t(),e(113,`
                              `),i(114,"td",39),e(115),t(),e(116,`
                              `),i(117,"td",40),e(118,"-"),t(),e(119,`
                            `),t(),e(120,`
                            `),i(121,"tr"),e(122,`
                              `),i(123,"th",38),e(124,"Min/Max Floors:"),t(),e(125,`
                              `),i(126,"td"),e(127),t(),e(128,`
                              `),i(129,"td",39),e(130),t(),e(131,`
                              `),i(132,"td",40),e(133),t(),e(134,`
                            `),t(),e(135,`
                            `),i(136,"tr"),e(137,`
                              `),i(138,"th",38),e(139,"Min/Max Floor Area:"),t(),e(140,`
                              `),i(141,"td"),e(142),t(),e(143,`
                              `),i(144,"td",39),e(145),t(),e(146,`
                              `),i(147,"td",40),e(148,"-"),t(),e(149,`
                            `),t(),e(150,`
                            `),i(151,"tr"),e(152,`
                              `),i(153,"th",38),e(154,"Min/Max Floor-to-Floor Height:"),t(),e(155,`
                              `),i(156,"td"),e(157),t(),e(158,`
                              `),i(159,"td",39),e(160),t(),e(161,`
                              `),i(162,"td",40),e(163,"-"),t(),e(164,`
                            `),t(),e(165,`
                            `),i(166,"tr"),e(167,`
                              `),i(168,"th",38),e(169,"Min/Max FAR:"),t(),e(170,`
                              `),i(171,"td"),e(172),t(),e(173,`
                              `),i(174,"td",39),e(175),t(),e(176,`
                              `),i(177,"td",40),e(178,"-"),t(),e(179,`
                            `),t(),e(180,`
                            `),i(181,"tr"),e(182,`
                              `),i(183,"th",38),e(184,"Minimum Setback:"),t(),e(185,`
                              `),i(186,"td"),e(187),t(),e(188,`
                              `),i(189,"td",39),e(190),t(),e(191,`
                              `),i(192,"td",40),e(193),t(),e(194,`
                            `),t(),e(195,`
                          `),t(),e(196,`
                        `),t(),e(197,`
                      `),t(),e(198,`
                    `),t(),e(199,`
                  `),t()),o&2){let r=a.$implicit,n=a.index;l(7),S("",n+1,". ",r.parcel_number),l(30),v(r.parcel==null?null:r.parcel.name),l(3),v(r.planned_land_use==null?null:r.planned_land_use.name),l(12),v(r.parcel==null?null:r.parcel.predominant_land),l(3),v(r.primary_land_use.name),l(12),v(r.parcel==null?null:r.parcel.secondary_use),l(3),v(r.secondary_land_use.name),l(12),v(r.parcel==null?null:r.parcel.preferred_ground_floor_use),l(3),v(r.preferred_ground_floor_use.name),l(12),v(r.parcel==null?null:r.parcel.number_of_units_to_be_developed),l(3),v(r.number_of_units_to_be_developed),l(12),S("",r.parcel==null?null:r.parcel.percentage_of_site_covered_by_proposed_building,"-",r.parcel==null?null:r.parcel.percentage_of_site_covered_by_existing_building),l(3),S("",r.percentage_of_site_covered_by_proposed_building,"-",r.percentage_of_site_covered_by_existing_building),l(12),S("",r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(3),S("",r.min_number_of_floors,"-",r.max_number_of_floors),l(3),S("",r.min_number_of_floors-(r.parcel==null?null:r.parcel.min_floors)," / ",r.max_number_of_floors-(r.parcel==null?null:r.parcel.max_floors)),l(9),S("",r.parcel==null?null:r.parcel.min_floor_area,"-",r.parcel==null?null:r.parcel.min_floor_area),l(3),S("",r.min_floor_area,"-",r.min_floor_area),l(12),S("",r.parcel==null?null:r.parcel.min_floor_to_floor_height,"-",r.parcel==null?null:r.parcel.max_floor_to_floor_height),l(3),S("",r.min_floor_to_floor_height,"-",r.max_floor_to_floor_height),l(12),S("",r.parcel==null?null:r.parcel.min_far,"-",r.parcel==null?null:r.parcel.max_far),l(3),S("",r.min_far,"-",r.max_far),l(12),v(r.parcel==null?null:r.parcel.minimum_setback),l(3),v(r.minimum_setback),l(3),v(r.minimum_setback-(r.parcel==null?null:r.parcel.minimum_setback))}}function ga(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.context_analysis_url),xe)}}function ya(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.concept_plan_url),xe)}}function ba(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.geotechnical_report_url),xe)}}function Sa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.topographical_survey_url),xe)}}function ha(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.parking_strategy_url),xe)}}function Ca(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.traffic_management_plan_url),xe)}}function Ea(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.estimated_utility_demand_requirements_url),xe)}}function Fa(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",25),e(3,`
                  `),i(4,"label",42),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"div",12),e(8),t(),e(9,`
                `),t(),e(10,`
              `),t()),o&2){let r=p();l(8),v(r.item.other_green_certification)}}function Ia(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",41),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",I(r.item.sustainability_report_url),xe)}}var nt=class o{constructor(a,r,n,_,s,E){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=_;this.fb=s;this.route=E;this.mProgress=F(!1);this.item={};this.itemForm=this.fb.group({investor_id:["",f.required],plan_submission_type_id:["",f.required],project_brief:["",f.required],project_purpose:["",f.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPlanSubmissionTypes=a.data.plan_submission_types,this.mGreenCertifications=a.data.green_certifications,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,a).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(y(H),y(me),y(G),y(O),y(ue),y(le))}}static{this.\u0275cmp=U({type:o,selectors:[["app-show"]],standalone:!1,decls:349,vars:31,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],["for","investor_id"],["class","text-muted",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],[1,"text-muted",3,"innerHTML"],["for","context_analysis"],[1,"border","mb-3","p-3"],[1,"text-bold","text-muted"],["class","row mb-2",4,"ngFor","ngForOf"],[1,"col-md-6"],["for","concept_plan"],["for","topographical_survey"],["for","parking_strategy"],["routerLink","/reference-materials","target","_blank","rel","noopener noreferrer"],["for","traffic_management_plan"],["class","col-md-12",4,"ngIf"],[1,"form-group","mb-3"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["for","estimated_project_duration"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["cButton","","color","success",1,"text-dark",3,"routerLink"],["class","text-muted",4,"ngFor","ngForOf"],[1,"row","mb-2"],[1,"col-12"],[1,"callout","callout-danger"],[1,"fw-bolder"],[1,"table","table-bordered","table-danger1"],["scope","col"],["scope","row"],[1,"text-success"],[1,"text-danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","other_green_certification"]],template:function(r,n){r&1&&(d(0,sa,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),b("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,_a,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,pa,2,1,"div",10),e(38,`
                `),t(),e(39,`
              `),t(),e(40,`
            `),t(),e(41,`
          `),t(),e(42,`
          `),i(43,"fieldset",4),e(44,`
            `),i(45,"legend",5)(46,"h6",6),e(47,"PROJECT BRIEF AND PURPOSE"),t()(),e(48,`
            `),i(49,"div",7),e(50,`
              `),i(51,"div",8),e(52,`
                `),i(53,"div",2),e(54,`
                  `),i(55,"label",11),e(56,"Project Brief (Description of the overall project concept and how it fits in the Konza Technopolis Vision):"),t(),e(57,`
                  `),i(58,"div",12),e(59),t(),e(60,`
                `),t(),e(61,`
              `),t(),e(62,`
              `),i(63,"div",8),e(64,`
                `),i(65,"div",2),e(66,`
                  `),i(67,"label",9),e(68,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(69,`
                  `),u(70,"div",13),e(71,`
                `),t(),e(72,`
              `),t(),e(73,`
            `),t(),e(74,`
          `),t(),e(75,`
          `),i(76,"fieldset",4),e(77,`
            `),i(78,"legend",5)(79,"h6",6),e(80,"PARCEL & CONTEXT ANALYSIS"),t()(),e(81,`
            `),i(82,"div",7),e(83,`
              `),i(84,"div",8),e(85,`
                `),i(86,"div",2),e(87,`
                  `),i(88,"label",14),e(89,"Parcels:"),t(),e(90,`
                  `),d(91,xa,5,1,"div",10),e(92,`
                `),t(),e(93,`
              `),t(),e(94,`
              `),i(95,"div",8),e(96,`
                `),i(97,"fieldset",15),e(98,`
                  `),i(99,"legend",5)(100,"h6",16),e(101,"Land Use Plan"),t()(),e(102,`
                  `),d(103,va,200,37,"div",17),e(104,`
                `),t(),e(105,`
              `),t(),e(106,`
              `),i(107,"div",8),e(108,`
                `),i(109,"div",2),e(110,`
                  `),i(111,"label",14),e(112,"Require Variations:"),t(),e(113,`
                  `),i(114,"div",12),e(115),t(),e(116,`
                `),t(),e(117,`
              `),t(),e(118,`
              `),i(119,"div",8),e(120,`
                `),i(121,"div",2),e(122,`
                  `),i(123,"label",14),e(124,"Context Analysis (500m radius context analysis):"),t(),e(125,`
                  `),d(126,ga,5,2,"div",0),e(127,`
                `),t(),e(128,`
              `),t(),e(129,`
            `),t(),e(130,`
          `),t(),e(131,`
          `),i(132,"fieldset",4),e(133,`
            `),i(134,"legend",5)(135,"h6",6),e(136,"DEVELOPMENT DATA"),t()(),e(137,`
            `),i(138,"div",7),e(139,`
              `),i(140,"div",18),e(141,`
                `),i(142,"div",2),e(143,`
                  `),i(144,"label",19),e(145,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(146,`
                  `),d(147,ya,5,2,"div",0),e(148,`
                `),t(),e(149,`
              `),t(),e(150,`
              `),i(151,"div",18),e(152,`
                `),i(153,"div",2),e(154,`
                  `),i(155,"label",19),e(156,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(157,`
                  `),d(158,ba,5,2,"div",0),e(159,`
                `),t(),e(160,`
              `),t(),e(161,`
              `),i(162,"div",8),e(163,`
                `),i(164,"div",2),e(165,`
                  `),i(166,"label",20),e(167,"Topographical Survey:"),t(),e(168,`
                  `),d(169,Sa,5,2,"div",0),e(170,`
                `),t(),e(171,`
              `),t(),e(172,`
            `),t(),e(173,`
          `),t(),e(174,`
          `),i(175,"fieldset",4),e(176,`
            `),i(177,"legend",5)(178,"h6",6),e(179,"ACCESS ANALYSIS PLAN"),t()(),e(180,`
            `),i(181,"div",7),e(182,`
              `),i(183,"div",8),e(184,`
                `),i(185,"div",2),e(186,`
                  `),i(187,"label",21),e(188,"Parking Strategy (Using "),i(189,"a",22),e(190,"Reference Materials"),t(),e(191," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6):"),t(),e(192,`
                  `),d(193,ha,5,2,"div",0),e(194,`
                `),t(),e(195,`
              `),t(),e(196,`
              `),i(197,"div",8),e(198,`
                `),i(199,"div",2),e(200,`
                  `),i(201,"label",23),e(202,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(203,`
                  `),d(204,Ca,5,2,"div",0),e(205,`
                `),t(),e(206,`
              `),t(),e(207,`
            `),t(),e(208,`
          `),t(),e(209,`
          `),i(210,"fieldset",4),e(211,`
            `),i(212,"legend",5)(213,"h6",6),e(214,"INFRASTRUCTURE"),t()(),e(215,`
            `),i(216,"div",7),e(217,`
              `),i(218,"div",8),e(219,`
                `),i(220,"div",2),e(221,`
                  `),i(222,"label",19),e(223,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(224,`
                  `),d(225,Ea,5,2,"div",0),e(226,`
                `),t(),e(227,`
              `),t(),e(228,`
            `),t(),e(229,`
          `),t(),e(230,`
          `),i(231,"fieldset",4),e(232,`
            `),i(233,"legend",5)(234,"h6",6),e(235,"PROJECT SUSTAINABILITY"),t()(),e(236,`
            `),i(237,"div",7),e(238,`
              `),i(239,"div",8),e(240,`
                `),i(241,"div",2),e(242,`
                  `),i(243,"label",19),e(244,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(245,`
                  `),u(246,"div",13),e(247,`
                `),t(),e(248,`
              `),t(),e(249,`
              `),i(250,"div",8),e(251,`
                  `),i(252,"div",2),e(253,`
                    `),i(254,"label",9),e(255,"Green Certification:"),t(),e(256,`
                    `),i(257,"div",12),e(258),t(),e(259,`
                  `),t(),e(260,`
              `),t(),e(261,`
              `),d(262,Fa,11,1,"div",24),e(263,`
              `),i(264,"div",8),e(265,`
                `),i(266,"div",25),e(267,`
                  `),i(268,"label",26),e(269,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(270,`
                  `),d(271,Ia,5,2,"div",0),e(272,`
                `),t(),e(273,`
              `),t(),e(274,`
            `),t(),e(275,`
          `),t(),e(276,`
          `),i(277,"fieldset",4),e(278,`
            `),i(279,"legend",5)(280,"h6",6),e(281,"CONCLUSIONS"),t()(),e(282,`
            `),i(283,"div",7),e(284,`
              `),i(285,"div",8),e(286,`
                `),i(287,"div",2),e(288,`
                  `),i(289,"label",9),e(290,"Variations (Does Your Project Require any Variation?):"),t(),e(291,`
                  `),i(292,"div",12),e(293),t(),e(294,`
                `),t(),e(295,`
              `),t(),e(296,`
              `),i(297,"div",8),e(298,`
                `),i(299,"div",2),e(300,`
                  `),i(301,"label",27),e(302,"Estimated Project Duration (In months):"),t(),e(303,`
                  `),i(304,"div",12),e(305),t(),e(306,`
                `),t(),e(307,`
              `),t(),e(308,`
              `),i(309,"div",8),e(310,`
                `),i(311,"div",2),e(312,`
                  `),i(313,"label",27),e(314,"Estimated Project Construction Cost (In USD):"),t(),e(315,`
                  `),i(316,"div",12),e(317),Ge(318,"currency"),t(),e(319,`
                `),t(),e(320,`
              `),t(),e(321,`
              `),i(322,"div",8),e(323,`
                `),i(324,"div",2),e(325,`
                  `),i(326,"label",27),e(327,"Commitment to comply with development codes and guidelines:"),t(),e(328,`
                  `),i(329,"div",12),e(330),t(),e(331,`
                `),t(),e(332,`
              `),t(),e(333,`
            `),t(),e(334,`
          `),t(),e(335,`

          `),i(336,"div",28),e(337,`
            `),i(338,"button",29),e(339,"Cancel"),t(),e(340,`
            `),i(341,"a",30),e(342,"Process"),t(),e(343,`
          `),t(),e(344,`

        `),t(),e(345,`

      `),t(),e(346,`
    `),t(),e(347,`
  `),t(),e(348,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngIf",n.item.investor),l(11),m("ngIf",n.item.type),l(22),v(n.item.project_brief),l(11),m("innerHTML",n.item.project_purpose,Be),l(21),m("ngIf",n.item.investor),l(12),m("ngForOf",n.item.land_use_plans),l(12),v(n.item.has_variations),l(11),m("ngIf",n.item.context_analysis),l(21),m("ngIf",n.item.concept_plan),l(11),m("ngIf",n.item.geotechnical_report),l(11),m("ngIf",n.item.topographical_survey),l(24),m("ngIf",n.item.parking_strategy),l(11),m("ngIf",n.item.traffic_management_plan),l(21),m("ngIf",n.item.estimated_utility_demand_requirements),l(21),m("innerHTML",n.item.project_sustainability_brief,Be),l(12),v(n.item.green_certification==null?null:n.item.green_certification.name),l(4),m("ngIf",n.item.green_certification_id===4),l(9),m("ngIf",n.item.sustainability_report),l(22),v(n.item.require_variations),l(12),v(n.item.estimated_project_duration),l(12),v(ze(318,26,n.item.estimated_project_construction_cost,"USD","symbol","1.2-2")),l(13),v(n.item.commitment_to_comply_with_development_codes_and_guidelines),l(11),m("routerLink",Te("/construction-permits/process/",n.item.id)))},dependencies:[Y,B,J,W,K,de,X,se,_e,Z,Q,$,Ye],encapsulation:2})}};var Yt=o=>({"is-invalid":o});function Ta(o,a){o&1&&u(0,"app-progress")}function Pa(o,a){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.alias)}}function qa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wa(o,a){if(o&1&&(i(0,"div",16),d(1,qa,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function Ma(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Na(o,a){if(o&1&&(i(0,"div",16),d(1,Ma,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("remarks").errors)==null?null:r.required)}}var rt=class o{constructor(a,r,n,_,s,E){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=_;this.fb=s;this.route=E;this.mProgress=F(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({status_id:["",f.required],remarks:["",f.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=F(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=F(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=F(!1)}})}onSubmit(a){let r={id:this.id,status_id:a.status_id,remarks:a.remarks};this.mProgress=F(!0),this.mConstructionPermitService.processItemPlanner(r).subscribe({next:n=>{n.status==="success"?(this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=F(!1)):(this.mToastrService.error(n.message),this.router.navigateByUrl("/construction-permits/variations/"+this.id),this.mProgress=F(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=F(!1)}})}getNextPreviousStatus(){this.mProgress=F(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=F(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=F(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(y(G),y(H),y(O),y(me),y(ue),y(le))}}static{this.\u0275cmp=U({type:o,selectors:[["app-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(d(0,Ta,1,0,"app-progress",0),i(1,"div")(2,"form",1),b("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,Pa,2,3,"option",8),t(),d(12,wa,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),t(),u(17,"ckeditor",11),d(18,Na,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),r&2){let _,s;m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(6),m("ngClass",x(10,Yt,((_=n.itemForm.get("status_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("status_id"))==null?null:_.dirty)||((_=n.itemForm.get("status_id"))==null?null:_.touched)))),l(3),m("ngForOf",n.mNextPreviousStatuses),l(),m("ngIf",((s=n.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("status_id"))==null?null:s.dirty)||((s=n.itemForm.get("status_id"))==null?null:s.touched))),l(5),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(12,Yt,n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched))),l(),m("ngIf",n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched)),l(4),m("disabled",n.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,Z,Ee,Fe,Ce,pe,Q,$,ce,ye],encapsulation:2})}};var Jt=o=>({"is-invalid":o});function Aa(o,a){o&1&&u(0,"app-progress")}function ja(o,a){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let r=a.$implicit;m("value",I(r.id)),l(),v(r.alias)}}function Va(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ra(o,a){if(o&1&&(i(0,"div",16),d(1,Va,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function Da(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Oa(o,a){if(o&1&&(i(0,"div",16),d(1,Da,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("remarks").errors)==null?null:r.required)}}var ot=class o{constructor(a,r,n,_,s,E){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=_;this.fb=s;this.route=E;this.mProgress=F(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({status_id:["",f.required],remarks:["",f.required]})}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getItem()}getItem(){this.mProgress=F(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=F(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=F(!1)}})}onSubmit(a){let r={id:this.id,status_id:a.status_id,remarks:a.remarks};this.mProgress=F(!0),this.mConstructionPermitService.cmItemPlanner(r).subscribe({next:n=>{this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=F(!1)},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=F(!1)}})}getNextPreviousStatus(){this.mProgress=F(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=F(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=F(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(y(G),y(H),y(O),y(me),y(ue),y(le))}}static{this.\u0275cmp=U({type:o,selectors:[["app-cm-approval"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(d(0,Aa,1,0,"app-progress",0),i(1,"div")(2,"form",1),b("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,ja,2,3,"option",8),t(),d(12,Ra,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),t(),u(17,"ckeditor",11),d(18,Oa,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),r&2){let _,s;m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(6),m("ngClass",x(10,Jt,((_=n.itemForm.get("status_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("status_id"))==null?null:_.dirty)||((_=n.itemForm.get("status_id"))==null?null:_.touched)))),l(3),m("ngForOf",n.mNextPreviousStatuses),l(),m("ngIf",((s=n.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("status_id"))==null?null:s.dirty)||((s=n.itemForm.get("status_id"))==null?null:s.touched))),l(5),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(12,Jt,n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched))),l(),m("ngIf",n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched)),l(4),m("disabled",n.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,Z,Ee,Fe,Ce,pe,Q,$,ce,ye],encapsulation:2})}};var Kt=()=>[1],Ua=()=>[10],Ba=()=>[17];function Ga(o,a){o&1&&u(0,"app-progress")}function Wa(o,a){if(o&1&&(i(0,"div",6),e(1,`
              `),i(2,"label",9),e(3,"Company:"),t(),e(4,`
              `),i(5,"div",8),e(6),t(),e(7,`
            `),t()),o&2){let r=p();l(6),v(r.item.investor==null?null:r.item.investor.name)}}function Ha(o,a){o&1&&(i(0,"div"),e(1,`
              `),u(2,"app-review"),e(3,`
            `),t())}function za(o,a){o&1&&(i(0,"div"),e(1,`
              `),u(2,"app-cm-approval"),e(3,`
            `),t())}var at=class o{constructor(a,r,n,_){this.mConstructionPermitService=a;this.mAppContextService=r;this.mToastrService=n;this.route=_;this.item={};this.mProgress=F(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(r){return new(r||o)(y(H),y(O),y(G),y(le))}}static{this.\u0275cmp=U({type:o,selectors:[["app-process"]],standalone:!1,decls:44,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],["for","investor_id",1,"col-form-label","required"]],template:function(r,n){r&1&&(d(0,Ga,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div",3),e(10,`
          `),i(11,"div",4),e(12,`
            `),d(13,Wa,8,1,"div",5),e(14,`
          `),t(),e(15,`
          `),i(16,"div",4),e(17,`
            `),i(18,"div",6),e(19,`
              `),i(20,"label",7),e(21,"Project Brief:"),t(),e(22,`
              `),i(23,"div",8),e(24),t(),e(25,`
            `),t(),e(26,`
          `),t(),e(27,`
        `),t(),e(28,`

        `),i(29,"div",3),e(30,`
          `),i(31,"div",4),e(32,`
            `),e(33,`
            `),d(34,Ha,4,0,"div",0),e(35,`
            `),e(36,`
            `),d(37,za,4,0,"div",0),e(38,`
          `),t(),e(39,`
        `),t(),e(40,`

      `),t(),e(41,`
    `),t(),e(42,`
  `),t(),e(43,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(13),m("ngIf",n.item.investor),l(11),v(n.item.project_brief),l(10),m("ngIf",(n.item==null?null:n.item.status_id)==3&&(n.mAppContextService.hasRoles(ve(5,Kt))||n.mAppContextService.hasRoles(ve(6,Ua)))),l(3),m("ngIf",(n.item==null?null:n.item.status_id)==4&&(n.mAppContextService.hasRoles(ve(7,Kt))||n.mAppContextService.hasRoles(ve(8,Ba)))))},dependencies:[B,W,de,X,se,_e,rt,ot],encapsulation:2})}};var Xt=o=>({"is-invalid":o});function Ya(o,a){o&1&&u(0,"app-progress")}function Ja(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p();l(),v(r.item.investor==null?null:r.item.investor.name)}}function Ka(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p();l(),v(r.item.type==null?null:r.item.type.name)}}function Xa(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p(2);l(),v(r.item.variation_status==null?null:r.item.variation_status.name)}}function Qa(o,a){if(o&1&&(i(0,"div",7),e(1,`
                `),i(2,"div",11),e(3,`
                  `),i(4,"h6",19),e(5),t(),e(6,`
                `),t(),e(7,`
                `),i(8,"div",20),e(9,`
                  `),i(10,"div",21),e(11,`
                      `),i(12,"h6",22),e(13,"Initial"),t(),e(14,`
                      `),e(15,`
                      `),i(16,"small"),e(17),u(18,"br"),e(19),u(20,"br"),e(21),u(22,"br"),e(23),u(24,"br"),e(25),u(26,"br"),e(27),u(28,"br"),e(29),u(30,"br"),e(31,`
                      `),t(),e(32,`
                  `),t(),e(33,`
                `),t(),e(34,`
                `),i(35,"div",20),e(36,`
                  `),i(37,"div",23),e(38,`
                      `),i(39,"h6",24),e(40,"Proposed"),t(),e(41,`
                      `),e(42,`
                      `),e(43,`
                      `),i(44,"small"),e(45),u(46,"br"),e(47),u(48,"br"),e(49),u(50,"br"),e(51),u(52,"br"),e(53),u(54,"br"),e(55),u(56,"br"),e(57),u(58,"br"),e(59),u(60,"br"),e(61,`
                      `),t(),e(62,`
                  `),t(),e(63,`
                `),t(),e(64,`
                `),i(65,"div",25),e(66,`
                  `),i(67,"div",2),e(68,`
                    `),i(69,"label",26),e(70,"Variations Status:"),t(),e(71,`
                    `),d(72,Xa,2,1,"div",10),e(73,`
                  `),t(),e(74,`
                `),t(),e(75,`
              `),t()),o&2){let r=a.$implicit,n=a.index,_=p();l(5),S("",n+1,". ",r.parcel==null?null:r.parcel.number),l(12),A(`
                        Acres: `,r.parcel==null?null:r.parcel.acres," "),l(2),S(`
                        Min/Max Floors: `,r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(2),S(`
                        Min/Max FAR: `,r.parcel==null?null:r.parcel.min_far,"-",r.parcel==null?null:r.parcel.max_far),l(2),S(`
                        Min/Max Floors: `,r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(2),S(`
                        Min/Max Floor Area: `,r.parcel==null?null:r.parcel.min_floor_area,"-",r.parcel==null?null:r.parcel.max_floor_area),l(2),A(`
                        Plot Coverage: `,r.parcel==null?null:r.parcel.plot_coverage,"% "),l(2),A(`
                        Use: `,r.parcel==null?null:r.parcel.description," "),l(16),A(`
                        Acres: `,r.acres," "),l(2),S(`
                        Min/Max Floors: `,r.min_floors,"-",r.max_floors),l(2),S(`
                        Min/Max FAR: `,r.min_far,"-",r.max_far),l(2),S(`
                        Min/Max Floors: `,r.min_number_of_floors,"-",r.max_number_of_floors),l(2),S(`
                        Min/Max Floor Area: `,r.min_floor_area,"-",r.max_floor_area),l(2),S(`
                        Plot Coverage (Proposed/Existing): `,r.percentage_of_site_covered_by_proposed_building,"-",r.percentage_of_site_covered_by_existing_building,"% "),l(2),A(`
                        Number of Units to be Developed: `,r.number_of_units_to_be_developed," "),l(2),A(`
                        Use: `,r.description," "),l(13),m("ngIf",_.item.variation_status)}}function Za(o,a){if(o&1){let r=z();i(0,"div",34),e(1,`
                    `),i(2,"input",35),q("ngModelChange",function(_){R(r);let s=p(2);return P(s.item.variation_status.id,_)||(s.item.variation_status.id=_),D(_)}),t(),e(3,`
                    `),i(4,"label",36),e(5),t(),e(6,`
                  `),t()}if(o&2){let r=a.$implicit,n=p(2);l(2),m("value",r.id),T("ngModel",n.item.variation_status.id),l(3),A(" ",r.alias," ")}}function $a(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function el(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,$a,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("variation_status_id").errors)==null?null:r.required)}}function tl(o,a){if(o&1&&(i(0,"span")(1,"a",40),e(2,"File"),t()()),o&2){let r=p(3);l(),m("href",I(r.item.variation_evidence_url),xe)}}function il(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function nl(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,il,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(3);l(2),m("ngIf",(r=n.itemForm.get("variation_evidence").errors)==null?null:r.required)}}function rl(o,a){if(o&1){let r=z();i(0,"div",11),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",38),e(5,"Variation (Approval) Evidence:"),t(),e(6,`
                  `),d(7,tl,3,2,"span",0),e(8,`
                  `),i(9,"input",39),b("change",function(_){R(r);let s=p(2);return D(s.onVariationEvidenceChange(_))}),t(),e(10,`
                  `),d(11,nl,4,1,"div",30),e(12,`
                `),t(),e(13,`
              `),t()}if(o&2){let r=p(2);l(7),m("ngIf",r.item.variation_evidence),l(2),m("ngClass",x(3,Xt,r.itemForm.get("variation_evidence").invalid&&(r.itemForm.get("variation_evidence").dirty||r.itemForm.get("variation_evidence").touched))),l(2),m("ngIf",r.itemForm.get("variation_evidence").invalid&&(r.itemForm.get("variation_evidence").dirty||r.itemForm.get("variation_evidence").touched))}}function ol(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function al(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,ol,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("variation_comments").errors)==null?null:r.required)}}function ll(o,a){if(o&1){let r=z();i(0,"div",7),e(1,`
              `),i(2,"div",11),e(3,`
                `),i(4,"div",27),e(5,`
                  `),i(6,"label",28),e(7,"Variations status:"),t(),e(8,`
                  `),e(9,`
                  `),e(10,`
                  `),d(11,Za,7,3,"div",29),e(12,`
                  `),d(13,el,4,1,"div",30),e(14,`
                `),t(),e(15,`
              `),t(),e(16,`
              `),d(17,rl,14,5,"div",31),e(18,`
              `),i(19,"div",11),e(20,`
                `),i(21,"div",27),e(22,`
                  `),i(23,"label",32),e(24,"Variation Comments:"),t(),e(25,`
                  `),i(26,"ckeditor",33),q("ngModelChange",function(_){R(r);let s=p();return P(s.item.variation_comments,_)||(s.item.variation_comments=_),D(_)}),t(),e(27,`
                  `),d(28,al,4,1,"div",30),e(29,`
                `),t(),e(30,`
              `),t(),e(31,`
            `),t()}if(o&2){let r=p();l(11),m("ngForOf",r.mConstructionPermitVariationStatuses),l(2),m("ngIf",r.itemForm.get("variation_status_id").invalid&&(r.itemForm.get("variation_status_id").dirty||r.itemForm.get("variation_status_id").touched)),l(4),m("ngIf",r.itemForm.get("variation_status_id").value==2),l(9),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),T("ngModel",r.item.variation_comments),m("ngClass",x(8,Xt,r.itemForm.get("variation_comments").invalid&&(r.itemForm.get("variation_comments").dirty||r.itemForm.get("variation_comments").touched))),l(2),m("ngIf",r.itemForm.get("variation_comments").invalid&&(r.itemForm.get("variation_comments").dirty||r.itemForm.get("variation_comments").touched))}}var lt=class o{constructor(a,r,n,_,s,E){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=_;this.fb=s;this.route=E;this.mProgress=F(!1);this.mEditor=ge;this.item={};this.itemForm=this.fb.group({variation_status_id:["",f.required],variation_evidence:["",f.nullValidator],variation_comments:["",f.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}onSubmit(a){let r=new FormData;r.append("variation_status_id",a.variation_status_id),r.append("variation_comments",a.variation_comments),this.variation_evidence_file?r.append("variation_evidence",this.variation_evidence_file,this.variation_evidence_file.name):r.append("variation_evidence",""),r.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.processItemVariations(this.id,r).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.processUnpaginatedItems().subscribe({next:a=>{a&&(this.mConstructionPermitVariationStatuses=a.data.construction_permit_variation_statuses,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onVariationEvidenceChange(a){if(a.target.value){let r=a.target.files[0];this.variation_evidence_file=r}}static{this.\u0275fac=function(r){return new(r||o)(y(H),y(me),y(G),y(O),y(ue),y(le))}}static{this.\u0275cmp=U({type:o,selectors:[["app-variation"]],standalone:!1,decls:100,vars:7,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"pb-2"],["class","row",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",1,"text-dark"],[1,"fw-bolder"],[1,"col-md-6","mb-3"],[1,"callout","callout-success","h-100"],[1,"text-success","fw-bold"],[1,"callout","callout-danger","h-100"],[1,"text-danger","fw-bold"],[1,"col-md-12","mt-2"],["for","context_analysis"],[1,"form-group","mb-3"],["for","variation_status_id",1,"col-form-label","required"],["class","form-check",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","variation_comments",1,"col-form-label","required"],["formControlName","variation_comments","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],[1,"form-check"],["type","radio","formControlName","variation_status_id",1,"form-check-input",3,"ngModelChange","value","ngModel"],[1,"form-check-label"],["role","alert",1,"invalid-feedback"],["for","variation_evidence",1,"col-form-label","required"],["formControlName","variation_evidence","type","file",1,"form-control",3,"change","ngClass"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(r,n){r&1&&(d(0,Ya,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),b("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,Ja,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,Ka,2,1,"div",10),e(38,`
                `),t(),e(39,`
              `),t(),e(40,`
            `),t(),e(41,`
          `),t(),e(42,`
          `),i(43,"fieldset",4),e(44,`
            `),i(45,"legend",5)(46,"h6",6),e(47,"PROJECT BRIEF AND PURPOSE"),t()(),e(48,`
            `),i(49,"div",7),e(50,`
              `),i(51,"div",11),e(52,`
                `),i(53,"div",2),e(54,`
                  `),i(55,"label",9),e(56,"Project Brief:"),t(),e(57,`
                  `),i(58,"div",12),e(59),t(),e(60,`
                `),t(),e(61,`
              `),t(),e(62,`
              `),e(63,`
            `),t(),e(64,`
          `),t(),e(65,`
          `),i(66,"fieldset",4),e(67,`
            `),i(68,"legend",5)(69,"h6",6),e(70,"PARCEL & LAND USE VARIATIONS"),t()(),e(71,`
            `),i(72,"div",13),e(73,`
              `),d(74,Qa,76,27,"div",14),e(75,`
            `),t(),e(76,`
          `),t(),e(77,`

          `),i(78,"fieldset",4),e(79,`
            `),i(80,"legend",5)(81,"h6",6),e(82,"PROCESS"),t()(),e(83,`
            `),d(84,ll,32,10,"div",15),e(85,`
          `),t(),e(86,`

          `),i(87,"div",16),e(88,`
            `),i(89,"button",17),e(90,"Cancel"),t(),e(91,`
            `),i(92,"button",18),e(93,"Submit"),t(),e(94,`
          `),t(),e(95,`

        `),t(),e(96,`

      `),t(),e(97,`
    `),t(),e(98,`
  `),t(),e(99,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngIf",n.item.investor),l(11),m("ngIf",n.item.type),l(22),v(n.item.project_brief),l(15),m("ngForOf",n.item.variations),l(10),m("ngIf",n.mConstructionPermitVariationStatuses&&n.mConstructionPermitVariationStatuses.length>0))},dependencies:[ae,Y,B,J,W,K,de,X,se,_e,Z,he,Oe,pe,Q,$,ce,ye],encapsulation:2})}};var ml=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:$e,data:{title:"Construction Permits / Masterplan Submission"}},{path:"create",component:et,data:{title:"Construction Permits / Masterplan Submission / Create"}},{path:"edit/:id",component:it,data:{title:"Construction Permits / Masterplan Submission / Edit"}},{path:"show/:id",component:nt,data:{title:"Construction Permits / Masterplan Submission / Show"}},{path:"process/:id",component:at,data:{title:"Construction Permits / Process"}},{path:"variations/:id",component:lt,data:{title:"Construction Permits / Variations"}}],mt=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=He({type:o})}static{this.\u0275inj=We({imports:[Je,st.forChild(ml),st]})}};var Qt=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=He({type:o})}static{this.\u0275inj=We({imports:[Je,mt,Dt,Et,Tt,X,Mt,Nt,At,Ct,Rt,kt,Ut,ht,Ft,Xe,Ke,Bt]})}};export{Qt as ConstructionPermitModule};
