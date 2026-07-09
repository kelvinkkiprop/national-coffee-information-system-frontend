import{a as H,b as ye,c as Gt}from"./chunk-5BMCX42T.js";import{a as Zt}from"./chunk-CLTJMYFA.js";import{b as Xe,c as he,d as f,e as ce,f as Q,g as Lt,h as Ut,i as Z,j as Qe,k as Le,l as ue,m as $,n as Ce,o as Ee,p as Fe,q as fe,s as Bt}from"./chunk-XXBTCVPJ.js";import{a as W,b as Ot}from"./chunk-EIN47PNU.js";import{a as be,b as ge,c as O,e as G}from"./chunk-IVFY5T4S.js";import{Ba as m,Bc as Je,Ca as i,Cb as ae,Da as t,Db as Y,Ea as u,Eb as B,Fc as se,Gb as bt,Gc as X,Hb as ze,Hc as Tt,Ib as Ye,Ic as Pt,L as ct,M as Ge,Mc as wt,Na as z,Nb as ht,Nc as qt,O as dt,Oc as Ke,Pa as S,Pc as Mt,R,Ra as _,Rc as Nt,S as D,T as L,Tc as pe,U as xe,Ub as me,Uc as _e,Wb as de,Wc as kt,Xb as J,Ya as ut,_ as I,ab as e,bb as v,cb as j,cd as jt,db as C,dc as st,dd as At,e as Qt,eb as M,fa as De,fb as N,ga as le,gb as k,ha as a,hb as F,ib as Te,kb as ve,lb as x,mb as ft,nb as xt,nd as Vt,oa as y,ob as vt,od as Rt,pa as U,pb as gt,pc as Oe,pd as Dt,qa as We,qc as Ct,rb as Be,sb as yt,sc as Et,ta as d,tb as He,ub as St,wc as K,xc as Ft,yc as It}from"./chunk-RGFIQOVY.js";var zt=Qt(Zt());var $t=o=>({"is-invalid":o}),ei=(o,l,n,r,p,s,h)=>({"chip-primary":o,"chip-secondary":l,"chip-success":n,"bg-danger":r,"chip-warning text-dark":p,"chip-info":s,"chip-dark":h}),ti=(o,l,n,r,p)=>({"bg-secondary text-dark":o,"bg-danger":l,"bg-dark":n,"bg-warning text-dark":r,"bg-success":p}),Wt=()=>[1],pt=()=>[2],ii=(o,l,n)=>({"bg-warning":o,"bg-success":l,"bg-danger":n}),ni=(o,l)=>({active:o,disabled:l});function ri(o,l){o&1&&u(0,"app-progress")}function oi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function li(o,l){if(o&1&&(i(0,"div",16),e(1,`
                  `),d(2,oi,2,0,"div",1),e(3,`
                `),t()),o&2){let n=_();a(2),m("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function ai(o,l){if(o&1&&(i(0,"c-badge",34),e(1,`
                      `),i(2,"small"),e(3),t(),e(4,`
                    `),t()),o&2){let n=_().$implicit;m("ngClass",xt(2,ii,n.variation_status_id==1,n.variation_status_id==2,n.variation_status_id==3)),a(3),v(n.variation_status==null?null:n.variation_status.name)}}function mi(o,l){if(o&1&&(i(0,"li")(1,"a",35),L(),u(2,"svg",36),e(3," Edit"),t()()),o&2){let n=_().$implicit;a(),m("routerLink",Te("/construction-permits/edit/",n.id))}}function di(o,l){if(o&1&&(i(0,"li")(1,"a",35),L(),u(2,"svg",37),e(3," Process"),t()()),o&2){let n=_().$implicit;a(),m("routerLink",Te("/construction-permits/process/",n.id))}}function si(o,l){if(o&1&&(i(0,"li")(1,"a",35),L(),u(2,"svg",38),e(3," Variations"),t()()),o&2){let n=_().$implicit;a(),m("routerLink",Te("/construction-permits/variations/",n.id))}}function pi(o,l){if(o&1){let n=z();i(0,"button",39),S("click",function(){R(n);let p=_().$implicit,s=_(2);return D(s.onDelete(p))}),L(),u(1,"svg",40),t()}}function _i(o,l){if(o&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),t(),e(4,`
                `),i(5,"td"),e(6),t(),e(7,`
                `),i(8,"td"),e(9),t(),e(10,`
                `),i(11,"td"),e(12,`
                  `),i(13,"small",22),e(14),t(),e(15,`
                `),t(),e(16,`
                `),i(17,"td"),e(18),t(),e(19,`
                `),i(20,"td"),e(21),Be(22,"currency"),t(),e(23,`
                `),i(24,"td"),e(25,`
                  `),i(26,"button",23),e(27),d(28,ai,5,6,"c-badge",24),e(29,`
                  `),t(),e(30,`
                `),t(),e(31,`
                `),i(32,"td"),e(33),t(),e(34,`
                `),i(35,"td"),e(36,`
                  `),i(37,"span",25),e(38),t(),e(39,`
                `),t(),e(40,`
                `),i(41,"td"),e(42),Be(43,"date"),t(),e(44,`
                `),i(45,"td"),e(46,`
                  `),i(47,"div",26),e(48,`
                    `),i(49,"a",27),L(),u(50,"svg",28),t(),e(51,`
                    `),e(52,`
                    `),xe(),i(53,"c-dropdown",29),e(54,`
                      `),i(55,"button",30),e(56,`
                        `),L(),u(57,"svg",31),e(58,`
                      `),t(),e(59,`
                      `),xe(),i(60,"ul",32),e(61,`
                        `),e(62,`
                        `),d(63,mi,4,2,"li",1),e(64,`
                        `),d(65,di,4,2,"li",1),e(66,`
                        `),d(67,si,4,2,"li",1),e(68,`
                      `),t(),e(69,`
                    `),t(),e(70,`
                    `),d(71,pi,2,0,"button",33),e(72,`
                  `),t(),e(73,`
                `),t(),e(74,`
              `),t()),o&2){let n=l.$implicit,r=l.index,p=_(2);a(3),j("",p.mPageFrom+r,"."),a(3),v(n.project_brief),a(3),v(n.investor.name),a(4),m("ngClass",gt(26,ei,n.type_id==1,n.type_id==2,n.type_id==3,n.type_id==4,n.type_id==5,n.type_id==6,n.type_id==7)),a(),j(`
                    `,n.type==null?null:n.type.name,`
                  `),a(4),v(n.estimated_project_duration),a(3),v(He(22,19,n.estimated_project_construction_cost,"USD","symbol","1.2-2")),a(6),j(`
                    `,n.has_variations,`
                    `),a(),m("ngIf",n.variation_status),a(5),v(n.consultant.name),a(4),m("ngClass",vt(34,ti,n.status_id==1,n.status_id==2,n.status_id==3,n.status_id==4,n.status_id==5)),a(),j(`
                    `,n.status==null?null:n.status.name,`
                  `),a(4),v(yt(43,24,n.created_at)),a(7),m("routerLink",Te("/construction-permits/show/",n.id)),a(14),m("ngIf",p.mAppContextService.hasRoles(ve(40,Wt))||p.mAppContextService.hasRoles(ve(41,pt))&&(n.status_id==1||n.status_id==2)),a(2),m("ngIf",!p.mAppContextService.hasRoles(ve(42,pt))),a(2),m("ngIf",!p.mAppContextService.hasRoles(ve(43,pt))&&n.has_variations=="yes"),a(4),m("ngIf",p.mAppContextService.hasRoles(ve(44,Wt)))}}function ci(o,l){if(o&1&&(i(0,"div",17),e(1,`
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
              `),d(45,_i,75,45,"tr",21),e(46,`
            `),t(),e(47,`
          `),t(),e(48,`
        `),t()),o&2){let n=_();a(45),m("ngForOf",n.mConstructionPermits)}}function ui(o,l){if(o&1){let n=z();i(0,"li",43),e(1,`
              `),i(2,"a",44),S("click",function(){let p=R(n).$implicit,s=_(2);return D(s.onChangePage(p.url))}),t(),e(3,`
            `),t()}if(o&2){let n=l.$implicit;m("ngClass",ft(2,ni,n.active,!n.url)),a(2),m("innerHTML",n.label,De)}}function fi(o,l){if(o&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",41),e(3,`
            `),d(4,ui,4,5,"li",42),e(5,`
          `),t(),e(6,`
        `),t()),o&2){let n=_();a(4),m("ngForOf",n.links)}}function xi(o,l){o&1&&(e(0,`
          `),i(1,"p",45),e(2,"No items"),t(),e(3,`
        `))}var Ze=class o{constructor(l,n,r){this.mConstructionPermitService=l;this.mToastrService=n;this.mAppContextService=r;this.mConstructionPermits={};this.links=[];this.mProgress=I(!1)}ngOnInit(){this.index(),this.search_term=new Ut("",f.required),this.itemForm=new Lt({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mConstructionPermitService.allItems().subscribe({next:l=>{l&&(this.mPageFrom=l.from,this.mConstructionPermits=l.data,this.links=l.links),this.mProgress.set(!1)},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}onChangePage(l){this.mProgress.set(!0),this.mConstructionPermitService.paginateItems(l).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mConstructionPermits=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}onDelete(l){zt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+l.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mConstructionPermitService.deleteItem(l).subscribe({next:p=>{p&&(this.mConstructionPermits=this.mConstructionPermits.filter(s=>s.id!==l.id),this.mToastrService.error(p.message),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.error(p.error.message),this.mProgress.set(!1)}}))})}onSubmit(l){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(l).subscribe({next:n=>{n&&(this.mConstructionPermits=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}onSearch(l){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(l).subscribe({next:n=>{n&&(this.mConstructionPermits=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(y(H),y(G),y(O))}}static{this.\u0275cmp=U({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/construction-permits/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"chip","chip-sm",3,"ngClass"],["type","button",1,"btn","btn-sm","btn-outline-link","position-relative"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass",4,"ngIf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["cIcon","","name","cilApplicationsSettings",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,r){if(n&1&&(d(0,ri,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),L(),u(15,"svg",7),e(16,` Add
            `),t(),e(17,`
          `),t(),e(18,`
          `),xe(),i(19,"div"),e(20,`
            `),i(21,"form",8),S("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
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
      `),xe(),i(42,"c-card-body"),e(43,`

        `),d(44,ci,49,1,"div",15),e(45,`

        `),d(46,fi,7,1,"div",1),e(47,`

        `),d(48,xi,4,0,"ng-template",null,0,St),e(50,`

      `),t(),e(51,`
    `),t(),e(52,`
  `),t(),e(53,`
`),t()),n&2){let p=ut(49);m("ngIf",r.mProgress()),a(21),m("formGroup",r.itemForm),a(4),m("ngClass",x(7,$t,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),a(10),m("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),a(9),m("ngIf",r.mConstructionPermits.length>0)("ngIfElse",p),a(2),m("ngIf",r.links)}},dependencies:[ae,Y,B,J,W,K,se,X,Tt,pe,_e,Rt,Vt,Z,he,ce,Q,$,ue,Oe,Ke,Mt,wt,qt,Je,ze,bt],encapsulation:2})}};var E=o=>({"is-invalid":o});function vi(o,l){o&1&&u(0,"app-progress")}function gi(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",n.user.id),a(),v(n.user.name)}}function yi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Si(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,yi,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("investor_id"))==null||n.errors==null?null:n.errors.required)}}function bi(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function hi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ci(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,hi,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("type_id"))==null||n.errors==null?null:n.errors.required)}}function Ei(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function Fi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ii(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Fi,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("professional_body_id"))==null||n.errors==null?null:n.errors.required)}}function Ti(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Pi(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Ti,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("membership_number"))==null||n.errors==null?null:n.errors.required)}}function wi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qi(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,wi,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("consultant_name"))==null||n.errors==null?null:n.errors.required)}}function Mi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ni(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Mi,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("address"))==null||n.errors==null?null:n.errors.required)}}function ki(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ji(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,ki,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("email"))==null||n.errors==null?null:n.errors.required)}}function Ai(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vi(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Ai,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("nationality"))==null||n.errors==null?null:n.errors.required)}}function Ri(o,l){if(o&1){let n=z();i(0,"fieldset",4),e(1,`
            `),i(2,"legend",5)(3,"h6",6),e(4,"CONSULTANT INFORMATION"),t()(),e(5,`
            `),i(6,"div",7),e(7,`
              `),i(8,"div",8),e(9,`
                `),i(10,"div",9),e(11,`
                  `),i(12,"label",108),e(13,"Professional Body:"),t(),e(14,`
                  `),i(15,"select",109),k("ngModelChange",function(p){R(n);let s=_();return N(s.mProfile.professional_body_id,p)||(s.mProfile.professional_body_id=p),D(p)}),e(16,`
                    `),i(17,"option",12),e(18,"--- Select professional body ---"),t(),e(19,`
                    `),d(20,Ei,2,3,"option",13),e(21,`
                  `),t(),e(22,`
                  `),d(23,Ii,4,1,"div",14),e(24,`
                `),t(),e(25,`
              `),t(),e(26,`
              `),i(27,"div",8),e(28,`
                `),i(29,"div",9),e(30,`
                  `),i(31,"label",110),e(32,"Membership Number:"),t(),e(33,`
                  `),i(34,"input",111),k("ngModelChange",function(p){R(n);let s=_();return N(s.mProfile.membership_number,p)||(s.mProfile.membership_number=p),D(p)}),t(),e(35,`
                  `),d(36,Pi,4,1,"div",14),e(37,`
                `),t(),e(38,`
              `),t(),e(39,`
              `),i(40,"div",40),e(41,`
                `),i(42,"div",9),e(43,`
                  `),i(44,"label",112),e(45,"Consultant Name:"),t(),e(46,`
                  `),i(47,"input",113),k("ngModelChange",function(p){R(n);let s=_();return N(s.mProfile.member_name,p)||(s.mProfile.member_name=p),D(p)}),t(),e(48,`
                  `),d(49,qi,4,1,"div",14),e(50,`
                `),t(),e(51,`
              `),t(),e(52,`
              `),i(53,"div",40),e(54,`
                `),i(55,"div",9),e(56,`
                  `),i(57,"label",114),e(58,"Address:"),t(),e(59,`
                  `),i(60,"input",115),k("ngModelChange",function(p){R(n);let s=_();return N(s.mProfile.address,p)||(s.mProfile.address=p),D(p)}),t(),e(61,`
                  `),d(62,Ni,4,1,"div",14),e(63,`
                `),t(),e(64,`
              `),t(),e(65,`
              `),i(66,"div",40),e(67,`
                `),i(68,"div",9),e(69,`
                  `),i(70,"label",116),e(71,"Email:"),t(),e(72,`
                  `),i(73,"input",117),k("ngModelChange",function(p){R(n);let s=_();return N(s.mProfile.email,p)||(s.mProfile.email=p),D(p)}),t(),e(74,`
                  `),d(75,ji,4,1,"div",14),e(76,`
                `),t(),e(77,`
              `),t(),e(78,`
              `),i(79,"div",40),e(80,`
                `),i(81,"div",9),e(82,`
                  `),i(83,"label",118),e(84,"Nationality:"),t(),e(85,`
                  `),i(86,"input",119),k("ngModelChange",function(p){R(n);let s=_();return N(s.mProfile.member_name,p)||(s.mProfile.member_name=p),D(p)}),t(),e(87,`
                  `),d(88,Vi,4,1,"div",14),e(89,`
                `),t(),e(90,`
              `),t(),e(91,`
            `),t(),e(92,`
          `),t()}if(o&2){let n,r,p,s,h,T,P,w,q,c,A,V,g=_();a(15),M("ngModel",g.mProfile.professional_body_id),m("ngClass",x(19,E,((n=g.itemForm.get("professional_body_id"))==null?null:n.invalid)&&(((n=g.itemForm.get("professional_body_id"))==null?null:n.dirty)||((n=g.itemForm.get("professional_body_id"))==null?null:n.touched)))),a(5),m("ngForOf",g.mProfessionalBodies),a(3),m("ngIf",((r=g.itemForm.get("professional_body_id"))==null?null:r.invalid)&&(((r=g.itemForm.get("professional_body_id"))==null?null:r.dirty)||((r=g.itemForm.get("professional_body_id"))==null?null:r.touched))),a(11),M("ngModel",g.mProfile.membership_number),m("ngClass",x(21,E,((p=g.itemForm.get("membership_number"))==null?null:p.invalid)&&(((p=g.itemForm.get("membership_number"))==null?null:p.dirty)||((p=g.itemForm.get("membership_number"))==null?null:p.touched)))),a(2),m("ngIf",((s=g.itemForm.get("membership_number"))==null?null:s.invalid)&&(((s=g.itemForm.get("membership_number"))==null?null:s.dirty)||((s=g.itemForm.get("membership_number"))==null?null:s.touched))),a(11),M("ngModel",g.mProfile.member_name),m("ngClass",x(23,E,((h=g.itemForm.get("consultant_name"))==null?null:h.invalid)&&(((h=g.itemForm.get("consultant_name"))==null?null:h.dirty)||((h=g.itemForm.get("consultant_name"))==null?null:h.touched)))),a(2),m("ngIf",((T=g.itemForm.get("consultant_name"))==null?null:T.invalid)&&(((T=g.itemForm.get("consultant_name"))==null?null:T.dirty)||((T=g.itemForm.get("consultant_name"))==null?null:T.touched))),a(11),M("ngModel",g.mProfile.address),m("ngClass",x(25,E,((P=g.itemForm.get("address"))==null?null:P.invalid)&&(((P=g.itemForm.get("address"))==null?null:P.dirty)||((P=g.itemForm.get("address"))==null?null:P.touched)))),a(2),m("ngIf",((w=g.itemForm.get("address"))==null?null:w.invalid)&&(((w=g.itemForm.get("address"))==null?null:w.dirty)||((w=g.itemForm.get("address"))==null?null:w.touched))),a(11),M("ngModel",g.mProfile.email),m("ngClass",x(27,E,((q=g.itemForm.get("email"))==null?null:q.invalid)&&(((q=g.itemForm.get("email"))==null?null:q.dirty)||((q=g.itemForm.get("email"))==null?null:q.touched)))),a(2),m("ngIf",((c=g.itemForm.get("email"))==null?null:c.invalid)&&(((c=g.itemForm.get("email"))==null?null:c.dirty)||((c=g.itemForm.get("email"))==null?null:c.touched))),a(11),M("ngModel",g.mProfile.member_name),m("ngClass",x(29,E,((A=g.itemForm.get("nationality"))==null?null:A.invalid)&&(((A=g.itemForm.get("nationality"))==null?null:A.dirty)||((A=g.itemForm.get("nationality"))==null?null:A.touched)))),a(2),m("ngIf",((V=g.itemForm.get("nationality"))==null?null:V.invalid)&&(((V=g.itemForm.get("nationality"))==null?null:V.dirty)||((V=g.itemForm.get("nationality"))==null?null:V.touched)))}}function Di(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Oi(o,l){if(o&1&&(i(0,"div",107),e(1,`
                      `),d(2,Di,2,0,"div",0),e(3,`
                    `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("project_brief"))==null||n.errors==null?null:n.errors.required)}}function Li(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ui(o,l){if(o&1&&(i(0,"div",107),e(1,`
                      `),d(2,Li,2,0,"div",0),e(3,`
                    `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("project_purpose"))==null||n.errors==null?null:n.errors.required)}}function Bi(o,l){if(o&1&&(i(0,"div",124),e(1,`
                      `),i(2,"div",125),e(3,`
                        `),i(4,"div",126),e(5,`
                          `),i(6,"div",127)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",128),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),u(15,"br"),e(16),u(17,"br"),e(18),u(19,"br"),e(20),u(21,"br"),e(22),u(23,"br"),e(24),u(25,"br"),e(26),u(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let n=l.$implicit;a(8),v(n.allocation_worksheet==null?null:n.allocation_worksheet.number),a(6),j(`
                              Acres: `,n.allocation_worksheet==null?null:n.allocation_worksheet.acres," "),a(2),C(`
                              Min/Max Floors: `,n.allocation_worksheet==null?null:n.allocation_worksheet.min_floors,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_floors),a(2),C(`
                              Min/Max FAR: `,n.allocation_worksheet==null?null:n.allocation_worksheet.far,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_far),a(2),C(`
                              Min/Max Floors: `,n.allocation_worksheet==null?null:n.allocation_worksheet.min_floors,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_floors),a(2),C(`
                              Min/Max Floor Area: `,n.allocation_worksheet==null?null:n.allocation_worksheet.floor_area,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_floor_area),a(2),j(`
                              Plot Coverage: `,n.allocation_worksheet==null?null:n.allocation_worksheet.plot_coverage,"% "),a(2),j(`
                              Use: `,n.allocation_worksheet==null?null:n.allocation_worksheet.description," ")}}function Gi(o,l){if(o&1&&(i(0,"div",120),e(1,`
                  `),i(2,"div",121),e(3,`
                    `),i(4,"small",122),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Bi,33,12,"div",123),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let n=_();a(10),m("ngForOf",n.mInvestorParcels)}}function Wi(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.allocation_worksheet==null?null:n.allocation_worksheet.number)),a(),v(n.allocation_worksheet==null?null:n.allocation_worksheet.number)}}function Hi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zi(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Hi,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("parcel_number").errors)==null?null:n.required)}}function Yi(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function Ji(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ki(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Ji,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("planned_land_use_id"))==null||n.errors==null?null:n.errors.required)}}function Xi(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function Qi(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Zi(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Qi,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("primary_land_use_id"))==null||n.errors==null?null:n.errors.required)}}function $i(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function en(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function tn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,en,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("secondary_land_use_id"))==null||n.errors==null?null:n.errors.required)}}function nn(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function rn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function on(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,rn,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("preferred_ground_floor_use_id"))==null||n.errors==null?null:n.errors.required)}}function ln(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function an(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,ln,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:n.required)}}function mn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function dn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,mn,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:n.required)}}function sn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function pn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,sn,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:n.required)}}function _n(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function cn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,_n,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("number_of_floors").errors)==null?null:n.required)}}function un(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,un,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("floor_to_floor_height").errors)==null?null:n.required)}}function xn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function vn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,xn,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("floor_area").errors)==null?null:n.required)}}function gn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function yn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,gn,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("far").errors)==null?null:n.required)}}function Sn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function bn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Sn,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.mItemForm.get("minimum_setback").errors)==null?null:n.required)}}function hn(o,l){if(o&1){let n=z();i(0,"tr"),e(1,`
                                  `),i(2,"td"),e(3),t(),e(4,`
                                  `),i(5,"td"),e(6),t(),e(7,`
                                  `),e(8,`
                                  `),i(9,"td"),e(10),t(),e(11,`
                                  `),i(12,"td"),e(13),t(),e(14,`
                                  `),i(15,"td"),e(16),t(),e(17,`
                                  `),i(18,"td"),e(19),t(),e(20,`
                                  `),i(21,"td"),e(22),t(),e(23,`
                                  `),i(24,"td"),e(25),t(),e(26,`
                                  `),i(27,"td"),e(28),t(),e(29,`
                                  `),i(30,"td",129),e(31,`
                                    `),i(32,"button",130),S("click",function(){let p=R(n).$implicit,s=_();return D(s.removeItem(p))}),L(),u(33,"svg",131),e(34,"Remove"),t(),e(35,`
                                  `),t(),e(36,`
                                `),t()}if(o&2){let n=l.$implicit,r=l.index;a(3),j("",r+1,"."),a(3),v(n.parcel_number),a(4),v(n.floor_area),a(3),v(n.floor_to_floor_height),a(3),v(n.number_of_floors),a(3),v(n.percentage_of_site_covered_by_existing_building),a(3),v(n.percentage_of_site_covered_by_proposed_building),a(3),v(n.number_of_units_to_be_developed),a(3),v(n.minimum_setback)}}function Cn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function En(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Cn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("has_variations").errors)==null?null:n.required)}}function Fn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function In(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Fn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("variation_justification_statement"))==null||n.errors==null?null:n.errors.required)}}function Tn(o,l){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",132),e(5,"Variation Justification Statement (State the variation e.g. Request to vary number of floors from 4 to 8):"),t(),e(6,`
                  `),u(7,"ckeditor",133),e(8,`
                  `),d(9,In,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()),o&2){let n,r,p=_();a(7),m("editor",p.mEditor)("config",p.mAppContextService.ckEditorConfig)("ngClass",x(4,E,((n=p.itemForm.get("variation_justification_statement"))==null?null:n.invalid)&&(((n=p.itemForm.get("variation_justification_statement"))==null?null:n.dirty)||((n=p.itemForm.get("variation_justification_statement"))==null?null:n.touched)))),a(2),m("ngIf",((r=p.itemForm.get("variation_justification_statement"))==null?null:r.invalid)&&(((r=p.itemForm.get("variation_justification_statement"))==null?null:r.dirty)||((r=p.itemForm.get("variation_justification_statement"))==null?null:r.touched)))}}function Pn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Pn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("site_plan_and_analysis").errors)==null?null:n.required)}}function qn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Mn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,qn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("context_analysis").errors)==null?null:n.required)}}function Nn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function kn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Nn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("concept_plan").errors)==null?null:n.required)}}function jn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function An(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,jn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("geotechnical_report").errors)==null?null:n.required)}}function Vn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Rn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Vn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("topographical_survey").errors)==null?null:n.required)}}function Dn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function On(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Dn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("topographical_survey_cad").errors)==null?null:n.required)}}function Ln(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Un(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Ln,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("parking_strategy").errors)==null?null:n.required)}}function Bn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Bn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("traffic_management_plan").errors)==null?null:n.required)}}function Wn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Hn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Wn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:n.required)}}function zn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,zn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("project_sustainability_brief").errors)==null?null:n.required)}}function Jn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Kn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Jn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("sustainability_report").errors)==null?null:n.required)}}function Xn(o,l){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function Qn(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Zn(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Qn,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("green_certification_id").errors)==null?null:n.required)}}function $n(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function er(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,$n,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("other_green_certification").errors)==null?null:n.required)}}function tr(o,l){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",134),e(5,"Specify Other:"),t(),e(6,`
                  `),u(7,"input",135),e(8,`
                  `),d(9,er,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()),o&2){let n=_();a(7),m("ngClass",x(2,E,n.itemForm.get("other_green_certification").invalid&&(n.itemForm.get("other_green_certification").dirty||n.itemForm.get("other_green_certification").touched))),a(2),m("ngIf",n.itemForm.get("other_green_certification").invalid&&(n.itemForm.get("other_green_certification").dirty||n.itemForm.get("other_green_certification").touched))}}function ir(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function nr(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,ir,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("estimated_project_duration").errors)==null?null:n.required)}}function rr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function or(o,l){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,rr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("estimated_project_construction_cost").errors)==null?null:n.required)}}function lr(o,l){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function ar(o,l){if(o&1&&(i(0,"div",107),e(1,`
                  `),d(2,lr,2,0,"div",0),e(3,`
                `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:n.requiredTrue)}}var $e=class o{constructor(l,n,r,p,s){this.mConstructionPermitService=l;this.router=n;this.mToastrService=r;this.mAppContextService=p;this.fb=s;this.mInvestorParcels={};this.mProfile={};this.mProgress=I(!1);this.mParcelInfo={};this.mEditor=ge;this.mLandUsePlans=[];this.mHasVariation="no";this.itemForm=this.fb.group({investor_id:["",f.required],type_id:["",f.required],professional_body_id:["",f.nullValidator],membership_number:["",f.nullValidator],consultant_name:["",f.nullValidator],address:["",f.nullValidator],email:["",f.nullValidator],nationality:["",f.nullValidator],project_brief:["",f.required],project_purpose:["",f.required],has_variations:["no",f.required],variation_justification_statement:["",f.nullValidator],site_plan_and_analysis:["",f.nullValidator],context_analysis:["",f.nullValidator],concept_plan:["",f.nullValidator],geotechnical_report:["",f.nullValidator],topographical_survey:["",f.nullValidator],topographical_survey_cad:["",f.nullValidator],parking_strategy:["",f.nullValidator],traffic_management_plan:["",f.nullValidator],estimated_utility_demand_requirements:["",f.nullValidator],project_sustainability_brief:["",f.required],green_certification_id:["",f.required],other_green_certification:["",f.nullValidator],sustainability_report:["",f.nullValidator],estimated_project_duration:["",f.required],estimated_project_construction_cost:["",f.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,f.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",f.required],planned_land_use_id:["",f.required],primary_land_use_id:["",f.required],secondary_land_use_id:["",f.nullValidator],preferred_ground_floor_use_id:["",f.nullValidator],number_of_units_to_be_developed:["",f.required],percentage_of_site_covered_by_existing_building:["",f.required],percentage_of_site_covered_by_proposed_building:["",f.nullValidator],density:["",f.nullValidator],floor_area:["",f.nullValidator],far:["",f.nullValidator],minimum_setback:["",f.nullValidator],floor_to_floor_height:["",f.nullValidator],number_of_floors:["",f.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:l=>{l&&(this.mInvestors=l.data.investors,this.mProfessionalBodies=l.data.professional_bodies,this.mPermitTypes=l.data.permit_types,this.mParcelLandUseGroups=l.data.parcel_land_use_groups,this.mGreenCertifications=l.data.green_certifications,this.mProfile=l.data.profile,console.log(this.mProfile),this.mProgress.set(!1))},error:l=>{this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}onSubmit(l){let n=JSON.stringify(Object.assign({},this.mLandUsePlans)),r=new FormData;r.append("investor_id",l.investor_id),r.append("type_id",l.type_id),r.append("professional_body_id",l.professional_body_id),r.append("membership_number",l.membership_number),r.append("consultant_name",l.consultant_name),r.append("address",l.address),r.append("email",l.email),r.append("nationality",l.nationality),r.append("project_brief",l.project_brief),r.append("project_purpose",l.project_purpose),r.append("has_variations",this.mHasVariation),r.append("variation_justification_statement",l.variation_justification_statement),r.append("land_use_plans",n),r.append("project_sustainability_brief",l.project_sustainability_brief),r.append("green_certification_id",l.green_certification_id),r.append("other_green_certification",l.other_green_certification),r.append("estimated_project_duration",l.estimated_project_duration),r.append("estimated_project_construction_cost",l.estimated_project_construction_cost),r.append("commitment_to_comply_with_development_codes_and_guidelines",l.commitment_to_comply_with_development_codes_and_guidelines),r.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),r.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),r.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),r.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),r.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),r.append("topographical_survey_cad",this.topographical_survey_cad_file,this.topographical_survey_cad_file.name),r.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),r.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),r.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),r.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),r.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.createItem(r).subscribe({next:p=>{p&&(this.mToastrService.success(p.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.error(p.error.message),this.mProgress.set(!1)}})}onContextAnalysisChange(l){if(l.target.value){let n=l.target.files[0];this.context_analysis_file=n}}onSitePlanAndAnlysisChange(l){if(l.target.value){let n=l.target.files[0];this.site_plan_and_analysis_file=n}}onConceptPlanChange(l){if(l.target.value){let n=l.target.files[0];this.concept_plan_file=n}}onGeotechnicalReportChange(l){if(l.target.value){let n=l.target.files[0];this.geotechnical_report_file=n}}onTopographicalSurveyChange(l){if(l.target.value){let n=l.target.files[0];this.topographical_survey_file=n}}onTopographicalSurveyCadChange(l){if(l.target.value){let n=l.target.files[0];this.topographical_survey_cad_file=n}}onParkingStrategyChange(l){if(l.target.value){let n=l.target.files[0];this.parking_strategy_file=n}}onTrafficManagementPlanChange(l){if(l.target.value){let n=l.target.files[0];this.traffic_management_plan_file=n}}onEstimatedUtilityDemandRequirementsChange(l){if(l.target.value){let n=l.target.files[0];this.estimated_utility_demand_requirements_file=n}}onSustainabilityReportChange(l){if(l.target.value){let n=l.target.files[0];this.sustainability_report_file=n}}onInvestorChange(l){if(l.target.value){let n=l.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(n).subscribe({next:r=>{r&&(this.mInvestorParcels=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}}onCheckVariations(l){this.mInvestorParcels.some(r=>{let p=r.allocation_worksheet.number,s=V=>Number(String(V).replace(/,/g,"")),h=r.allocation_worksheet,T=Number(h.min_floors),P=Number(h.max_floors),w=Number(h.min_floor_area),q=Number(h.max_floor_area),c=Number(h.min_far),A=Number(h.max_far);return console.log(this.mHasVariation),l.parcel_number===p&&(l.number_of_floors<=T||l.number_of_floors>=P||l.floor_area<=w&&l.floor_area>=q||l.far<=c&&l.far>=A)})==!0&&this.mHasVariation=="no"&&(this.mHasVariation="yes"),this.itemForm.get("has_variations")?.setValue(this.mHasVariation),console.log(this.mHasVariation)}addItem(){let l=this.mItemForm.value;this.mLandUsePlans.some(r=>r.parcel_number===l.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(l),this.onCheckVariations(l),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(l){this.mLandUsePlans.forEach((n,r)=>{n===l&&this.mLandUsePlans.splice(r,1)})}static{this.\u0275fac=function(n){return new(n||o)(y(H),y(de),y(G),y(O),y(fe))}}static{this.\u0275cmp=U({type:o,selectors:[["app-create"]],standalone:!1,decls:695,vars:148,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"change","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["class","border p-2 mb-3",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control",3,"ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"editor","config","ngClass"],["class","alert alert-success",4,"ngIf"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],[1,"col-md-6"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","number_of_floors",1,"col-form-label","required"],["formControlName","number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","floor_to_floor_height",1,"col-form-label","required"],["formControlName","floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","floor_area",1,"col-form-label","required"],["formControlName","floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no","readonly","",1,"form-check-input"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes","readonly","",1,"form-check-input"],["for","variation_yes",1,"form-check-label"],["class","col-md-12",4,"ngIf"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey_cad",1,"col-form-label","required"],["formControlName","topographical_survey_cad","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"editor","config","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngClass"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","variation_justification_statement",1,"col-form-label","required"],["formControlName","variation_justification_statement","type","text",1,"form-control1",3,"editor","config","ngClass"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngClass"]],template:function(n,r){if(n&1&&(d(0,vi,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`


        `),i(9,"form",3),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",9),e(22,`
                  `),i(23,"label",10),e(24,"Company:"),t(),e(25,`
                  `),i(26,"select",11),S("change",function(s){return r.onInvestorChange(s)}),e(27,`
                    `),i(28,"option",12),e(29,"--- Select investor ---"),t(),e(30,`
                    `),d(31,gi,2,2,"option",13),e(32,`
                  `),t(),e(33,`
                  `),d(34,Si,4,1,"div",14),e(35,`
                `),t(),e(36,`
              `),t(),e(37,`
              `),i(38,"div",8),e(39,`
                `),i(40,"div",9),e(41,`
                  `),i(42,"label",15),e(43,"Nature of Application:"),t(),e(44,`
                  `),i(45,"select",16),e(46,`
                    `),i(47,"option",12),e(48,"--- Select plan submission type ---"),t(),e(49,`
                    `),d(50,bi,2,3,"option",13),e(51,`
                  `),t(),e(52,`
                  `),d(53,Ci,4,1,"div",14),e(54,`
                `),t(),e(55,`
              `),t(),e(56,`
            `),t(),e(57,`
          `),t(),e(58,`
          `),d(59,Ri,93,31,"fieldset",17),e(60,`
          `),i(61,"fieldset",4),e(62,`
            `),i(63,"legend",5)(64,"h6",6),e(65,"PROJECT BRIEF AND PURPOSE"),t()(),e(66,`
              `),i(67,"div",7),e(68,`
                `),i(69,"div",8),e(70,`
                  `),i(71,"div",9),e(72,`
                    `),i(73,"label",18),e(74,"Project Brief (Description of the overall project concept and how it fits in the Technopolis Development Authority Vision):"),t(),e(75,`
                    `),u(76,"textarea",19),e(77,`
                    `),e(78,`
                    `),d(79,Oi,4,1,"div",14),e(80,`
                  `),t(),e(81,`
                `),t(),e(82,`
                `),i(83,"div",8),e(84,`
                  `),i(85,"div",9),e(86,`
                    `),i(87,"label",20),e(88,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(89,`
                    `),u(90,"ckeditor",21),e(91,`
                    `),d(92,Ui,4,1,"div",14),e(93,`
                  `),t(),e(94,`
                `),t(),e(95,`
              `),t(),e(96,`
          `),t(),e(97,`
          `),i(98,"fieldset",4),e(99,`
            `),i(100,"legend",5)(101,"h6",6),e(102,"PARCEL & CONTEXT ANALYSIS"),t()(),e(103,`
            `),i(104,"div",7),e(105,`
              `),i(106,"div",8),e(107,`
                `),d(108,Gi,13,1,"div",22),e(109,`
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
                            `),d(135,Wi,2,3,"option",13),e(136,`
                          `),t(),e(137,`
                          `),d(138,zi,4,1,"div",14),e(139,`
                        `),t(),e(140,`
                      `),t(),e(141,`
                      `),e(142,`
                      `),i(143,"div",8),e(144,`
                        `),i(145,"div",9),e(146,`
                          `),i(147,"label",29),e(148,"Planned Land Use:"),t(),e(149,`
                          `),i(150,"select",30),e(151,`
                            `),i(152,"option",12),e(153,"--- Select planned land use ---"),t(),e(154,`
                            `),d(155,Yi,2,3,"option",13),e(156,`
                          `),t(),e(157,`
                          `),d(158,Ki,4,1,"div",14),e(159,`
                        `),t(),e(160,`
                      `),t(),e(161,`
                      `),i(162,"div",31),e(163,`
                        `),i(164,"div",9),e(165,`
                          `),i(166,"label",32),e(167,"Primary Land Use:"),t(),e(168,`
                          `),i(169,"select",33),e(170,`
                            `),i(171,"option",12),e(172,"--- Select primary land use ---"),t(),e(173,`
                            `),d(174,Xi,2,3,"option",13),e(175,`
                          `),t(),e(176,`
                          `),d(177,Zi,4,1,"div",14),e(178,`
                        `),t(),e(179,`
                      `),t(),e(180,`
                      `),i(181,"div",31),e(182,`
                        `),i(183,"div",9),e(184,`
                          `),i(185,"label",34),e(186,"Secondary Land Use:"),t(),e(187,`
                          `),i(188,"select",35),e(189,`
                            `),i(190,"option",12),e(191,"--- Select secondary land use ---"),t(),e(192,`
                            `),d(193,$i,2,3,"option",13),e(194,`
                          `),t(),e(195,`
                          `),d(196,tn,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",31),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",36),e(205,"Preferred Ground Floor Use:"),t(),e(206,`
                          `),i(207,"select",37),e(208,`
                            `),i(209,"option",12),e(210,"--- Select ground floor use ---"),t(),e(211,`
                            `),d(212,nn,2,3,"option",13),e(213,`
                          `),t(),e(214,`
                          `),d(215,on,4,1,"div",14),e(216,`
                        `),t(),e(217,`
                      `),t(),e(218,`
                      `),i(219,"div",8),e(220,`
                        `),i(221,"div",9),e(222,`
                          `),i(223,"label",38),e(224,"Number of Units to be Developed:"),t(),e(225,`
                          `),u(226,"input",39),e(227,`
                          `),d(228,an,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",40),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",41),e(237,"Percentage of site covered by existing building(s):"),t(),e(238,`
                          `),u(239,"input",42),e(240,`
                          `),d(241,dn,4,1,"div",14),e(242,`
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
                          `),i(262,"label",45),e(263,"Number of Floors:"),t(),e(264,`
                          `),u(265,"input",46),e(266,`
                          `),d(267,cn,4,1,"div",14),e(268,`
                        `),t(),e(269,`
                      `),t(),e(270,`
                      `),i(271,"div",40),e(272,`
                        `),i(273,"div",9),e(274,`
                          `),i(275,"label",47),e(276,"Floor-to-Floor Height:"),t(),e(277,`
                          `),u(278,"input",48),e(279,`
                          `),d(280,fn,4,1,"div",14),e(281,`
                        `),t(),e(282,`
                      `),t(),e(283,`
                      `),i(284,"div",40),e(285,`
                        `),i(286,"div",9),e(287,`
                          `),i(288,"label",49),e(289,"Floor Area:"),t(),e(290,`
                          `),u(291,"input",50),e(292,`
                          `),d(293,vn,4,1,"div",14),e(294,`
                        `),t(),e(295,`
                      `),t(),e(296,`
                      `),i(297,"div",40),e(298,`
                        `),i(299,"div",9),e(300,`
                          `),i(301,"label",51),e(302,"Floor Area Ratio (FAR):"),t(),e(303,`
                          `),u(304,"input",52),e(305,`
                          `),d(306,yn,4,1,"div",14),e(307,`
                        `),t(),e(308,`
                      `),t(),e(309,`
                      `),i(310,"div",8),e(311,`
                        `),i(312,"div",9),e(313,`
                          `),i(314,"label",53),e(315,"Minimum Setback:"),t(),e(316,`
                          `),u(317,"input",54),e(318,`
                          `),d(319,bn,4,1,"div",14),e(320,`
                        `),t(),e(321,`
                      `),t(),e(322,`
                    `),t(),e(323,`
                  `),t(),e(324,`
                  `),i(325,"div"),e(326,`
                    `),i(327,"div",55),e(328,`
                      `),i(329,"button",56),S("click",function(){return r.resetItemsForm()}),L(),u(330,"svg",57),e(331,"Reset"),t(),e(332,`
                      `),xe(),i(333,"button",58),S("click",function(){return r.addItem()}),L(),u(334,"svg",59),e(335,"Add"),t(),e(336,`
                    `),t(),e(337,`
                    `),xe(),i(338,"div",60),e(339,`
                      `),i(340,"div",61),e(341,`
                          `),i(342,"table",62),e(343,`
                              `),i(344,"thead"),e(345,`
                                `),i(346,"tr"),e(347,`
                                  `),i(348,"th"),e(349,"#"),t(),e(350,`
                                  `),i(351,"th"),e(352,"Parcel"),t(),e(353,`
                                  `),e(354,`
                                  `),i(355,"th"),e(356,"Floor Area"),t(),e(357,`
                                  `),i(358,"th"),e(359,"Floor to Floor Height"),t(),e(360,`
                                  `),i(361,"th"),e(362,"No of Floors"),t(),e(363,`
                                  `),i(364,"th"),e(365,"Existing Plot Coverage"),t(),e(366,`
                                  `),i(367,"th"),e(368,"Proposed Plot Coverage"),t(),e(369,`
                                  `),i(370,"th"),e(371,"No. of Units to be Developed"),t(),e(372,`
                                  `),i(373,"th"),e(374,"Minimum Setback"),t(),e(375,`
                                  `),i(376,"th"),e(377,"Action"),t(),e(378,`
                                `),t(),e(379,`
                              `),t(),e(380,`
                              `),i(381,"tbody"),e(382,`
                                `),d(383,hn,37,9,"tr",63),e(384,`
                              `),t(),e(385,`
                          `),t(),e(386,`
                      `),t(),e(387,`
                    `),t(),e(388,`
                  `),t(),e(389,`
              `),t(),e(390,`
              `),t(),e(391,`
              `),i(392,"div",8),e(393,`
                `),i(394,"div",9),e(395,`
                  `),i(396,"label",64),e(397,"Variations (Does Your Project Require any Variation?):"),t(),e(398,`
                  `),i(399,"div",65),e(400,`
                    `),u(401,"input",66),e(402,`
                    `),i(403,"label",67),e(404," No"),t(),e(405,`
                  `),t(),e(406,`
                  `),i(407,"div",65),e(408,`
                    `),u(409,"input",68),e(410,`
                    `),i(411,"label",69),e(412," Yes"),t(),e(413,`
                  `),t(),e(414,`
                  `),d(415,En,4,1,"div",14),e(416,`
                `),t(),e(417,`
              `),t(),e(418,`
              `),d(419,Tn,12,6,"div",70),e(420,`
              `),i(421,"div",8),e(422,`
                `),i(423,"div",9),e(424,`
                  `),i(425,"label",71),e(426,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(427,`
                  `),i(428,"input",72),S("change",function(s){return r.onSitePlanAndAnlysisChange(s)}),t(),e(429,`
                  `),d(430,wn,4,1,"div",14),e(431,`
                `),t(),e(432,`
              `),t(),e(433,`
              `),i(434,"div",8),e(435,`
                `),i(436,"div",9),e(437,`
                  `),i(438,"label",73),e(439,"Context Analysis (500m radius context analysis):"),t(),e(440,`
                  `),i(441,"input",74),S("change",function(s){return r.onContextAnalysisChange(s)}),t(),e(442,`
                  `),d(443,Mn,4,1,"div",14),e(444,`
                `),t(),e(445,`
              `),t(),e(446,`
            `),t(),e(447,`
          `),t(),e(448,`
          `),i(449,"fieldset",4),e(450,`
            `),i(451,"legend",5)(452,"h6",6),e(453,"DEVELOPMENT DATA"),t()(),e(454,`
            `),i(455,"div",7),e(456,`
              `),i(457,"div",40),e(458,`
                `),i(459,"div",9),e(460,`
                  `),i(461,"label",75),e(462,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(463,`
                  `),i(464,"input",76),S("change",function(s){return r.onConceptPlanChange(s)}),t(),e(465,`
                  `),d(466,kn,4,1,"div",14),e(467,`
                `),t(),e(468,`
              `),t(),e(469,`
              `),i(470,"div",40),e(471,`
                `),i(472,"div",9),e(473,`
                  `),i(474,"label",77),e(475,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(476,`
                  `),i(477,"input",78),S("change",function(s){return r.onGeotechnicalReportChange(s)}),t(),e(478,`
                  `),d(479,An,4,1,"div",14),e(480,`
                `),t(),e(481,`
              `),t(),e(482,`
              `),i(483,"div",40),e(484,`
                `),i(485,"div",9),e(486,`
                  `),i(487,"label",79),e(488,"Topographical Survey (PDF):"),t(),e(489,`
                  `),i(490,"input",80),S("change",function(s){return r.onTopographicalSurveyChange(s)}),t(),e(491,`
                  `),d(492,Rn,4,1,"div",14),e(493,`
                `),t(),e(494,`
              `),t(),e(495,`
              `),i(496,"div",40),e(497,`
                `),i(498,"div",9),e(499,`
                  `),i(500,"label",81),e(501,"Topographical Survey (CAD):"),t(),e(502,`
                  `),i(503,"input",82),S("change",function(s){return r.onTopographicalSurveyCadChange(s)}),t(),e(504,`
                  `),d(505,On,4,1,"div",14),e(506,`
                `),t(),e(507,`
              `),t(),e(508,`
            `),t(),e(509,`
          `),t(),e(510,`
          `),i(511,"fieldset",4),e(512,`
            `),i(513,"legend",5)(514,"h6",6),e(515,"ACCESS ANALYSIS PLAN"),t()(),e(516,`
            `),i(517,"div",7),e(518,`
              `),i(519,"div",8),e(520,`
                `),i(521,"div",9),e(522,`
                  `),i(523,"label",83),e(524,"Parking Strategy (Using "),i(525,"a",84),e(526,"Reference Materials"),t(),e(527," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6), :"),t(),e(528,`
                  `),i(529,"input",85),S("change",function(s){return r.onParkingStrategyChange(s)}),t(),e(530,`
                  `),d(531,Un,4,1,"div",14),e(532,`
                `),t(),e(533,`
              `),t(),e(534,`
              `),i(535,"div",8),e(536,`
                `),i(537,"div",9),e(538,`
                  `),i(539,"label",86),e(540,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(541,`
                  `),i(542,"input",87),S("change",function(s){return r.onTrafficManagementPlanChange(s)}),t(),e(543,`
                  `),d(544,Gn,4,1,"div",14),e(545,`
                `),t(),e(546,`
              `),t(),e(547,`
            `),t(),e(548,`
          `),t(),e(549,`
          `),i(550,"fieldset",4),e(551,`
            `),i(552,"legend",5)(553,"h6",6),e(554,"ESTIMATED UTILITY DEMAND"),t()(),e(555,`
            `),i(556,"div",7),e(557,`
              `),i(558,"div",8),e(559,`
                `),i(560,"div",9),e(561,`
                  `),i(562,"label",88),e(563,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(564,`
                  `),i(565,"input",89),S("change",function(s){return r.onEstimatedUtilityDemandRequirementsChange(s)}),t(),e(566,`
                  `),d(567,Hn,4,1,"div",14),e(568,`
                `),t(),e(569,`
              `),t(),e(570,`
            `),t(),e(571,`
          `),t(),e(572,`
          `),i(573,"fieldset",4),e(574,`
            `),i(575,"legend",5)(576,"h6",6),e(577,"PROJECT SUSTAINABILITY"),t()(),e(578,`
            `),i(579,"div",7),e(580,`
              `),i(581,"div",8),e(582,`
                `),i(583,"div",9),e(584,`
                  `),i(585,"label",90),e(586,"Project Sustainability Brief (What sustainability rating tool and level do you plan to use):"),t(),e(587,`
                  `),u(588,"ckeditor",91),e(589,`
                  `),d(590,Yn,4,1,"div",14),e(591,`
                `),t(),e(592,`
              `),t(),e(593,`
              `),i(594,"div",8),e(595,`
                `),i(596,"div",9),e(597,`
                  `),i(598,"label",92),e(599,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(600,`
                  `),i(601,"input",93),S("change",function(s){return r.onSustainabilityReportChange(s)}),t(),e(602,`
                  `),d(603,Kn,4,1,"div",14),e(604,`
                `),t(),e(605,`
              `),t(),e(606,`
              `),i(607,"div",8),e(608,`
                `),i(609,"div",9),e(610,`
                  `),i(611,"label",94),e(612,"Green Certifications:"),t(),e(613,`
                  `),i(614,"select",95),e(615,`
                    `),i(616,"option",12),e(617,"--- Select certification ---"),t(),e(618,`
                    `),d(619,Xn,2,3,"option",13),e(620,`
                  `),t(),e(621,`
                  `),d(622,Zn,4,1,"div",14),e(623,`
                `),t(),e(624,`
              `),t(),e(625,`
              `),d(626,tr,12,4,"div",70),e(627,`
            `),t(),e(628,`
          `),t(),e(629,`
          `),i(630,"fieldset",4),e(631,`
            `),i(632,"legend",5)(633,"h6",6),e(634,"CONCLUSIONS"),t()(),e(635,`
            `),i(636,"div",7),e(637,`
              `),i(638,"div",8),e(639,`
                `),i(640,"div",9),e(641,`
                  `),i(642,"label",96),e(643,"Estimated Project Duration (In months):"),t(),e(644,`
                  `),u(645,"input",97),e(646,`
                  `),d(647,nr,4,1,"div",14),e(648,`
                `),t(),e(649,`
              `),t(),e(650,`
              `),i(651,"div",8),e(652,`
                `),i(653,"div",9),e(654,`
                  `),i(655,"label",98),e(656,"Estimated Project Construction Cost (In USD):"),t(),e(657,`
                  `),u(658,"input",99),e(659,`
                  `),d(660,or,4,1,"div",14),e(661,`
                `),t(),e(662,`
              `),t(),e(663,`
              `),i(664,"div",100),e(665,`
                `),i(666,"div",65),e(667,`
                  `),u(668,"input",101),e(669,`
                  `),i(670,"label",102),e(671,`
                    By checking this, confirms the investor's commitment to comply with the `),i(672,"a",84),e(673,"Technopolis Development Authority Development Codes and Guidelines"),t(),e(674,`
                  `),t(),e(675,`
                `),t(),e(676,`
                `),d(677,ar,4,1,"div",14),e(678,`
              `),t(),e(679,`
            `),t(),e(680,`
          `),t(),e(681,`

          `),i(682,"div",103),e(683,`
            `),i(684,"button",104),e(685,"Cancel"),t(),e(686,`
            `),i(687,"button",105),e(688,"Submit"),t(),e(689,`
          `),t(),e(690,`

        `),t(),e(691,`

      `),t(),e(692,`
    `),t(),e(693,`
  `),t(),e(694,`
`),t()),n&2){let p,s,h,T,P,w,q,c,A,V,g,ee,te,ie,ne,re,oe;m("ngIf",r.mProgress()),a(9),m("formGroup",r.itemForm),a(17),m("ngClass",x(86,E,((p=r.itemForm.get("investor_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("investor_id"))==null?null:p.dirty)||((p=r.itemForm.get("investor_id"))==null?null:p.touched)))),a(5),m("ngForOf",r.mInvestors),a(3),m("ngIf",((s=r.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=r.itemForm.get("investor_id"))==null?null:s.dirty)||((s=r.itemForm.get("investor_id"))==null?null:s.touched))),a(11),m("ngClass",x(88,E,((h=r.itemForm.get("type_id"))==null?null:h.invalid)&&(((h=r.itemForm.get("type_id"))==null?null:h.dirty)||((h=r.itemForm.get("type_id"))==null?null:h.touched)))),a(5),m("ngForOf",r.mPermitTypes),a(3),m("ngIf",((T=r.itemForm.get("type_id"))==null?null:T.invalid)&&(((T=r.itemForm.get("type_id"))==null?null:T.dirty)||((T=r.itemForm.get("type_id"))==null?null:T.touched))),a(6),m("ngIf",r.mProfile),a(17),m("ngClass",x(90,E,((P=r.itemForm.get("project_brief"))==null?null:P.invalid)&&(((P=r.itemForm.get("project_brief"))==null?null:P.dirty)||((P=r.itemForm.get("project_brief"))==null?null:P.touched)))),a(3),m("ngIf",((w=r.itemForm.get("project_brief"))==null?null:w.invalid)&&(((w=r.itemForm.get("project_brief"))==null?null:w.dirty)||((w=r.itemForm.get("project_brief"))==null?null:w.touched))),a(11),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",x(92,E,((q=r.itemForm.get("project_purpose"))==null?null:q.invalid)&&(((q=r.itemForm.get("project_purpose"))==null?null:q.dirty)||((q=r.itemForm.get("project_purpose"))==null?null:q.touched)))),a(2),m("ngIf",((c=r.itemForm.get("project_purpose"))==null?null:c.invalid)&&(((c=r.itemForm.get("project_purpose"))==null?null:c.dirty)||((c=r.itemForm.get("project_purpose"))==null?null:c.touched))),a(16),m("ngIf",r.mInvestorParcels.length>0),a(11),m("formGroup",r.mItemForm),a(11),m("ngClass",x(94,E,((A=r.mItemForm.get("parcel_number"))==null?null:A.invalid)&&(((A=r.mItemForm.get("parcel_number"))==null?null:A.dirty)||((A=r.mItemForm.get("parcel_number"))==null?null:A.touched)))),a(5),m("ngForOf",r.mInvestorParcels),a(3),m("ngIf",r.mItemForm.get("parcel_number").invalid&&(r.mItemForm.get("parcel_number").dirty||r.mItemForm.get("parcel_number").touched)),a(12),m("ngClass",x(96,E,((V=r.mItemForm.get("planned_land_use_id"))==null?null:V.invalid)&&(((V=r.mItemForm.get("planned_land_use_id"))==null?null:V.dirty)||((V=r.mItemForm.get("planned_land_use_id"))==null?null:V.touched)))),a(5),m("ngForOf",r.mParcelLandUseGroups),a(3),m("ngIf",((g=r.mItemForm.get("planned_land_use_id"))==null?null:g.invalid)&&(((g=r.mItemForm.get("planned_land_use_id"))==null?null:g.dirty)||((g=r.mItemForm.get("planned_land_use_id"))==null?null:g.touched))),a(11),m("ngClass",x(98,E,((ee=r.mItemForm.get("primary_land_use_id"))==null?null:ee.invalid)&&(((ee=r.mItemForm.get("primary_land_use_id"))==null?null:ee.dirty)||((ee=r.mItemForm.get("primary_land_use_id"))==null?null:ee.touched)))),a(5),m("ngForOf",r.mParcelLandUseGroups),a(3),m("ngIf",((te=r.mItemForm.get("primary_land_use_id"))==null?null:te.invalid)&&(((te=r.mItemForm.get("primary_land_use_id"))==null?null:te.dirty)||((te=r.mItemForm.get("primary_land_use_id"))==null?null:te.touched))),a(11),m("ngClass",x(100,E,((ie=r.mItemForm.get("secondary_land_use_id"))==null?null:ie.invalid)&&(((ie=r.mItemForm.get("secondary_land_use_id"))==null?null:ie.dirty)||((ie=r.mItemForm.get("secondary_land_use_id"))==null?null:ie.touched)))),a(5),m("ngForOf",r.mParcelLandUseGroups),a(3),m("ngIf",((ne=r.mItemForm.get("secondary_land_use_id"))==null?null:ne.invalid)&&(((ne=r.mItemForm.get("secondary_land_use_id"))==null?null:ne.dirty)||((ne=r.mItemForm.get("secondary_land_use_id"))==null?null:ne.touched))),a(11),m("ngClass",x(102,E,((re=r.mItemForm.get("preferred_ground_floor_use_id"))==null?null:re.invalid)&&(((re=r.mItemForm.get("preferred_ground_floor_use_id"))==null?null:re.dirty)||((re=r.mItemForm.get("preferred_ground_floor_use_id"))==null?null:re.touched)))),a(5),m("ngForOf",r.mParcelLandUseGroups),a(3),m("ngIf",((oe=r.mItemForm.get("preferred_ground_floor_use_id"))==null?null:oe.invalid)&&(((oe=r.mItemForm.get("preferred_ground_floor_use_id"))==null?null:oe.dirty)||((oe=r.mItemForm.get("preferred_ground_floor_use_id"))==null?null:oe.touched))),a(11),m("ngClass",x(104,E,r.mItemForm.get("number_of_units_to_be_developed").invalid&&(r.mItemForm.get("number_of_units_to_be_developed").dirty||r.mItemForm.get("number_of_units_to_be_developed").touched))),a(2),m("ngIf",r.mItemForm.get("number_of_units_to_be_developed").invalid&&(r.mItemForm.get("number_of_units_to_be_developed").dirty||r.mItemForm.get("number_of_units_to_be_developed").touched)),a(11),m("ngClass",x(106,E,r.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(r.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||r.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),a(2),m("ngIf",r.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(r.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||r.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),a(11),m("ngClass",x(108,E,r.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(r.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||r.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),a(2),m("ngIf",r.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(r.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||r.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),a(11),m("ngClass",x(110,E,r.mItemForm.get("number_of_floors").invalid&&(r.mItemForm.get("number_of_floors").dirty||r.mItemForm.get("number_of_floors").touched))),a(2),m("ngIf",r.mItemForm.get("number_of_floors").invalid&&(r.mItemForm.get("number_of_floors").dirty||r.mItemForm.get("number_of_floors").touched)),a(11),m("ngClass",x(112,E,r.mItemForm.get("floor_to_floor_height").invalid&&(r.mItemForm.get("floor_to_floor_height").dirty||r.mItemForm.get("floor_to_floor_height").touched))),a(2),m("ngIf",r.mItemForm.get("floor_to_floor_height").invalid&&(r.mItemForm.get("floor_to_floor_height").dirty||r.mItemForm.get("floor_to_floor_height").touched)),a(11),m("ngClass",x(114,E,r.mItemForm.get("floor_area").invalid&&(r.mItemForm.get("floor_area").dirty||r.mItemForm.get("floor_area").touched))),a(2),m("ngIf",r.mItemForm.get("floor_area").invalid&&(r.mItemForm.get("floor_area").dirty||r.mItemForm.get("floor_area").touched)),a(11),m("ngClass",x(116,E,r.mItemForm.get("far").invalid&&(r.mItemForm.get("far").dirty||r.mItemForm.get("far").touched))),a(2),m("ngIf",r.mItemForm.get("far").invalid&&(r.mItemForm.get("far").dirty||r.mItemForm.get("far").touched)),a(11),m("ngClass",x(118,E,r.mItemForm.get("minimum_setback").invalid&&(r.mItemForm.get("minimum_setback").dirty||r.mItemForm.get("minimum_setback").touched))),a(2),m("ngIf",r.mItemForm.get("minimum_setback").invalid&&(r.mItemForm.get("minimum_setback").dirty||r.mItemForm.get("minimum_setback").touched)),a(14),m("disabled",r.mItemForm.invalid),a(50),m("ngForOf",r.mLandUsePlans),a(32),m("ngIf",r.itemForm.get("has_variations").invalid&&(r.itemForm.get("has_variations").dirty||r.itemForm.get("has_variations").touched)),a(4),m("ngIf",r.itemForm.get("has_variations").value==="yes"),a(9),m("ngClass",x(120,E,r.itemForm.get("site_plan_and_analysis").invalid&&(r.itemForm.get("site_plan_and_analysis").dirty||r.itemForm.get("site_plan_and_analysis").touched))),a(2),m("ngIf",r.itemForm.get("site_plan_and_analysis").invalid&&(r.itemForm.get("site_plan_and_analysis").dirty||r.itemForm.get("site_plan_and_analysis").touched)),a(11),m("ngClass",x(122,E,r.itemForm.get("context_analysis").invalid&&(r.itemForm.get("context_analysis").dirty||r.itemForm.get("context_analysis").touched))),a(2),m("ngIf",r.itemForm.get("context_analysis").invalid&&(r.itemForm.get("context_analysis").dirty||r.itemForm.get("context_analysis").touched)),a(21),m("ngClass",x(124,E,r.itemForm.get("concept_plan").invalid&&(r.itemForm.get("concept_plan").dirty||r.itemForm.get("concept_plan").touched))),a(2),m("ngIf",r.itemForm.get("concept_plan").invalid&&(r.itemForm.get("concept_plan").dirty||r.itemForm.get("concept_plan").touched)),a(11),m("ngClass",x(126,E,r.itemForm.get("geotechnical_report").invalid&&(r.itemForm.get("geotechnical_report").dirty||r.itemForm.get("geotechnical_report").touched))),a(2),m("ngIf",r.itemForm.get("geotechnical_report").invalid&&(r.itemForm.get("geotechnical_report").dirty||r.itemForm.get("geotechnical_report").touched)),a(11),m("ngClass",x(128,E,r.itemForm.get("topographical_survey").invalid&&(r.itemForm.get("topographical_survey").dirty||r.itemForm.get("topographical_survey").touched))),a(2),m("ngIf",r.itemForm.get("topographical_survey").invalid&&(r.itemForm.get("topographical_survey").dirty||r.itemForm.get("topographical_survey").touched)),a(11),m("ngClass",x(130,E,r.itemForm.get("topographical_survey_cad").invalid&&(r.itemForm.get("topographical_survey_cad").dirty||r.itemForm.get("topographical_survey_cad").touched))),a(2),m("ngIf",r.itemForm.get("topographical_survey_cad").invalid&&(r.itemForm.get("topographical_survey_cad").dirty||r.itemForm.get("topographical_survey_cad").touched)),a(24),m("ngClass",x(132,E,r.itemForm.get("parking_strategy").invalid&&(r.itemForm.get("parking_strategy").dirty||r.itemForm.get("parking_strategy").touched))),a(2),m("ngIf",r.itemForm.get("parking_strategy").invalid&&(r.itemForm.get("parking_strategy").dirty||r.itemForm.get("parking_strategy").touched)),a(11),m("ngClass",x(134,E,r.itemForm.get("traffic_management_plan").invalid&&(r.itemForm.get("traffic_management_plan").dirty||r.itemForm.get("traffic_management_plan").touched))),a(2),m("ngIf",r.itemForm.get("traffic_management_plan").invalid&&(r.itemForm.get("traffic_management_plan").dirty||r.itemForm.get("traffic_management_plan").touched)),a(21),m("ngClass",x(136,E,r.itemForm.get("estimated_utility_demand_requirements").invalid&&(r.itemForm.get("estimated_utility_demand_requirements").dirty||r.itemForm.get("estimated_utility_demand_requirements").touched))),a(2),m("ngIf",r.itemForm.get("estimated_utility_demand_requirements").invalid&&(r.itemForm.get("estimated_utility_demand_requirements").dirty||r.itemForm.get("estimated_utility_demand_requirements").touched)),a(21),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",x(138,E,r.itemForm.get("project_sustainability_brief").invalid&&(r.itemForm.get("project_sustainability_brief").dirty||r.itemForm.get("project_sustainability_brief").touched))),a(2),m("ngIf",r.itemForm.get("project_sustainability_brief").invalid&&(r.itemForm.get("project_sustainability_brief").dirty||r.itemForm.get("project_sustainability_brief").touched)),a(11),m("ngClass",x(140,E,r.itemForm.get("sustainability_report").invalid&&(r.itemForm.get("sustainability_report").dirty||r.itemForm.get("sustainability_report").touched))),a(2),m("ngIf",r.itemForm.get("sustainability_report").invalid&&(r.itemForm.get("sustainability_report").dirty||r.itemForm.get("sustainability_report").touched)),a(11),m("ngClass",x(142,E,r.itemForm.get("green_certification_id").invalid&&(r.itemForm.get("green_certification_id").dirty||r.itemForm.get("green_certification_id").touched))),a(5),m("ngForOf",r.mGreenCertifications),a(3),m("ngIf",r.itemForm.get("green_certification_id").invalid&&(r.itemForm.get("green_certification_id").dirty||r.itemForm.get("green_certification_id").touched)),a(4),m("ngIf",r.itemForm.get("green_certification_id").value==="4"),a(19),m("ngClass",x(144,E,r.itemForm.get("estimated_project_duration").invalid&&(r.itemForm.get("estimated_project_duration").dirty||r.itemForm.get("estimated_project_duration").touched))),a(2),m("ngIf",r.itemForm.get("estimated_project_duration").invalid&&(r.itemForm.get("estimated_project_duration").dirty||r.itemForm.get("estimated_project_duration").touched)),a(11),m("ngClass",x(146,E,r.itemForm.get("estimated_project_construction_cost").invalid&&(r.itemForm.get("estimated_project_construction_cost").dirty||r.itemForm.get("estimated_project_construction_cost").touched))),a(2),m("ngIf",r.itemForm.get("estimated_project_construction_cost").invalid&&(r.itemForm.get("estimated_project_construction_cost").dirty||r.itemForm.get("estimated_project_construction_cost").touched)),a(17),m("ngIf",r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),a(10),m("disabled",r.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,se,X,pe,_e,Z,Ee,Fe,he,Qe,Xe,Ce,Le,ce,Q,$,ue,Oe,ye],encapsulation:2})}};var tt=class o{constructor(l,n){this.mAppContextService=l;this.http=n}allItems(){let l=`${be.base_url}/profiles`;return this.http.get(l,this.mAppContextService.getHttpOptions())}createItem(l){let n=`${be.base_url}/profiles`;return this.http.post(n,l,this.mAppContextService.getHttpOptions())}getOneItem(l){let n=`${be.base_url}/profiles/${l}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}updateItem(l){let n=`${be.base_url}/profiles/${l.id}`;return this.http.put(n,l,this.mAppContextService.getHttpOptions())}deleteItem(l){let n=`${be.base_url}/profiles/${l.id}`;return this.http.delete(n,this.mAppContextService.getHttpOptions())}paginateItems(l){return this.http.get(l,this.mAppContextService.getHttpOptions())}searchItems(l){let n=`${be.base_url}/search-profiles`;return this.http.post(n,l,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let l=`${be.base_url}/unpaginated-items-profiles`;return this.http.get(l,this.mAppContextService.getHttpOptions())}professionalSearch(l){let n=`${be.base_url}/professional-search`;return this.http.post(n,l,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(n){return new(n||o)(dt(O),dt(ht))}}static{this.\u0275prov=ct({token:o,factory:o.\u0275fac,providedIn:"root"})}};var b=o=>({"is-invalid":o});function dr(o,l){o&1&&u(0,"app-progress")}function sr(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.user.id)),a(),v(n.user.name)}}function pr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _r(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,pr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("investor_id"))==null||n.errors==null?null:n.errors.required)}}function cr(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function ur(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ur,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("type_id"))==null||n.errors==null?null:n.errors.required)}}function xr(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function vr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function gr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,vr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("professional_body_id"))==null||n.errors==null?null:n.errors.required)}}function yr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Sr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,yr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("membership_number"))==null||n.errors==null?null:n.errors.required)}}function br(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function hr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,br,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("consultant_name"))==null||n.errors==null?null:n.errors.required)}}function Cr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Er(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Cr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("address"))==null||n.errors==null?null:n.errors.required)}}function Fr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ir(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Fr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("email"))==null||n.errors==null?null:n.errors.required)}}function Tr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Pr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Tr,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("nationality"))==null||n.errors==null?null:n.errors.required)}}function wr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                      `),d(2,wr,2,0,"div",0),e(3,`
                    `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("project_brief"))==null||n.errors==null?null:n.errors.required)}}function Mr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Nr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                      `),d(2,Mr,2,0,"div",0),e(3,`
                    `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("project_purpose"))==null||n.errors==null?null:n.errors.required)}}function kr(o,l){if(o&1&&(i(0,"div",81),e(1,`
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
                    `),t()),o&2){let n=l.$implicit;a(8),v(n.allocation_worksheet==null?null:n.allocation_worksheet.number),a(6),j(`
                              Acres: `,n.allocation_worksheet==null?null:n.allocation_worksheet.acres," "),a(2),C(`
                              Min/Max Floors: `,n.allocation_worksheet==null?null:n.allocation_worksheet.min_floors,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_floors),a(2),C(`
                              Min/Max FAR: `,n.allocation_worksheet==null?null:n.allocation_worksheet.min_far,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_far),a(2),C(`
                              Min/Max Floors: `,n.allocation_worksheet==null?null:n.allocation_worksheet.min_floors,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_floors),a(2),C(`
                              Min/Max Floor Area: `,n.allocation_worksheet==null?null:n.allocation_worksheet.min_floor_area,"-",n.allocation_worksheet==null?null:n.allocation_worksheet.max_floor_area),a(2),j(`
                              Plot Coverage: `,n.allocation_worksheet==null?null:n.allocation_worksheet.plot_coverage,"% "),a(2),j(`
                              Use: `,n.allocation_worksheet==null?null:n.allocation_worksheet.description," ")}}function jr(o,l){if(o&1&&(i(0,"div",77),e(1,`
                  `),i(2,"div",78),e(3,`
                    `),i(4,"small",79),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,kr,33,12,"div",80),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let n=_();a(10),m("ngForOf",n.mInvestorParcels)}}function Ar(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ar,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("has_variations").errors)==null?null:n.required)}}function Rr(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.allocation_worksheet==null?null:n.allocation_worksheet.number)),a(),v(n.allocation_worksheet==null?null:n.allocation_worksheet.number)}}function Dr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Or(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Dr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("parcel_number").errors)==null?null:n.required)}}function Lr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ur(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Lr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("min_density").errors)==null?null:n.required)}}function Br(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Br,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("max_density").errors)==null?null:n.required)}}function Wr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Hr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Wr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("min_floor_area").errors)==null?null:n.required)}}function zr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,zr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("max_floor_area").errors)==null?null:n.required)}}function Jr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Kr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Jr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("min_far").errors)==null?null:n.required)}}function Xr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qr(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Xr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("max_far").errors)==null?null:n.required)}}function Zr(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $r(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Zr,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("minimum_setback").errors)==null?null:n.required)}}function eo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function to(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,eo,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("min_floor_to_floor_height").errors)==null?null:n.required)}}function io(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function no(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,io,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("max_floor_to_floor_height").errors)==null?null:n.required)}}function ro(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function oo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,ro,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("min_number_of_floors").errors)==null?null:n.required)}}function lo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ao(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,lo,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("max_number_of_floors").errors)==null?null:n.required)}}function mo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function so(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,mo,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:n.required)}}function po(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _o(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,po,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:n.required)}}function co(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function uo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,co,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:n.required)}}function fo(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function xo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function vo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,xo,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("planned_land_use_id"))==null||n.errors==null?null:n.errors.required)}}function go(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function yo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function So(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,yo,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("primary_land_use_id"))==null||n.errors==null?null:n.errors.required)}}function bo(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function ho(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Co(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,ho,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("secondary_land_use_id"))==null||n.errors==null?null:n.errors.required)}}function Eo(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function Fo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Io(o,l){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Fo,2,0,"div",0),e(3,`
                          `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.mItemForm.get("preferred_ground_floor_use_id"))==null||n.errors==null?null:n.errors.required)}}function To(o,l){if(o&1){let n=z();i(0,"tr"),e(1,`
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
                                    `),i(31,"button",141),S("click",function(){let p=R(n).$implicit,s=_(2);return D(s.removeItem(p))}),L(),u(32,"svg",142),e(33,"Remove"),t(),e(34,`
                                  `),t(),e(35,`
                                `),t()}if(o&2){let n=l.$implicit,r=l.index;a(3),j("",r+1,"."),a(3),v(n.parcel_number),a(3),C("",n.min_density,"/",n.max_density),a(3),C("",n.min_floor_area,"/",n.max_floor_area),a(3),v(n.minimum_setback),a(3),C("",n.min_floor_to_floor_height,"/",n.max_floor_to_floor_height),a(3),C("",n.min_number_of_floors,"/",n.max_number_of_floors),a(3),C("",n.percentage_of_site_covered_by_existing_building,"/",n.percentage_of_site_covered_by_proposed_building),a(3),v(n.number_of_units_to_be_developed)}}function Po(o,l){if(o&1){let n=z();i(0,"div",8),e(1,`
                `),i(2,"fieldset",86),e(3,`
                  `),i(4,"legend",5)(5,"h6",87),e(6,"Land Use Planning"),t()(),e(7,`
                  `),i(8,"div",88),e(9,`
                    `),i(10,"div",89),e(11,`
                      `),i(12,"div",8),e(13,`
                        `),i(14,"div",9),e(15,`
                          `),i(16,"label",90),e(17,"Parcel Number:"),t(),e(18,`
                          `),i(19,"select",91),e(20,`
                            `),i(21,"option",12),e(22,"--- Select Parcel ---"),t(),e(23,`
                            `),d(24,Rr,2,3,"option",13),e(25,`
                          `),t(),e(26,`
                          `),d(27,Or,4,1,"div",14),e(28,`
                        `),t(),e(29,`
                      `),t(),e(30,`
                      `),i(31,"div",92),e(32,`
                        `),i(33,"div",93),e(34,`
                          `),i(35,"label",94),e(36,"Min density:"),t(),e(37,`
                          `),u(38,"input",95),e(39,`
                          `),d(40,Ur,4,1,"div",14),e(41,`
                        `),t(),e(42,`
                      `),t(),e(43,`
                      `),i(44,"div",92),e(45,`
                        `),i(46,"div",9),e(47,`
                          `),i(48,"label",96),e(49,"Max density:"),t(),e(50,`
                          `),u(51,"input",97),e(52,`
                          `),d(53,Gr,4,1,"div",14),e(54,`
                        `),t(),e(55,`
                      `),t(),e(56,`
                      `),i(57,"div",92),e(58,`
                        `),i(59,"div",9),e(60,`
                          `),i(61,"label",98),e(62,"Min Floor Area:"),t(),e(63,`
                          `),u(64,"input",99),e(65,`
                          `),d(66,Hr,4,1,"div",14),e(67,`
                        `),t(),e(68,`
                      `),t(),e(69,`
                      `),i(70,"div",92),e(71,`
                        `),i(72,"div",9),e(73,`
                          `),i(74,"label",100),e(75,"Max Floor Area:"),t(),e(76,`
                          `),u(77,"input",101),e(78,`
                          `),d(79,Yr,4,1,"div",14),e(80,`
                        `),t(),e(81,`
                      `),t(),e(82,`
                      `),i(83,"div",21),e(84,`
                        `),i(85,"div",9),e(86,`
                          `),i(87,"label",102),e(88,"Min Floor Area Ratio (FAR):"),t(),e(89,`
                          `),u(90,"input",103),e(91,`
                          `),d(92,Kr,4,1,"div",14),e(93,`
                        `),t(),e(94,`
                      `),t(),e(95,`
                      `),i(96,"div",21),e(97,`
                        `),i(98,"div",9),e(99,`
                          `),i(100,"label",104),e(101,"Max Floor Area Ratio (FAR):"),t(),e(102,`
                          `),u(103,"input",105),e(104,`
                          `),d(105,Qr,4,1,"div",14),e(106,`
                        `),t(),e(107,`
                      `),t(),e(108,`
                      `),i(109,"div",8),e(110,`
                        `),i(111,"div",9),e(112,`
                          `),i(113,"label",106),e(114,"Minimum Setback:"),t(),e(115,`
                          `),u(116,"input",107),e(117,`
                          `),d(118,$r,4,1,"div",14),e(119,`
                        `),t(),e(120,`
                      `),t(),e(121,`
                      `),i(122,"div",21),e(123,`
                        `),i(124,"div",9),e(125,`
                          `),i(126,"label",108),e(127,"Min Floor-to-Floor Height:"),t(),e(128,`
                          `),u(129,"input",109),e(130,`
                          `),d(131,to,4,1,"div",14),e(132,`
                        `),t(),e(133,`
                      `),t(),e(134,`
                      `),i(135,"div",21),e(136,`
                        `),i(137,"div",9),e(138,`
                          `),i(139,"label",110),e(140,"Max Floor-to-Floor Height:"),t(),e(141,`
                          `),u(142,"input",111),e(143,`
                          `),d(144,no,4,1,"div",14),e(145,`
                        `),t(),e(146,`
                      `),t(),e(147,`
                      `),i(148,"div",21),e(149,`
                        `),i(150,"div",9),e(151,`
                          `),i(152,"label",112),e(153,"Min No. of Floors:"),t(),e(154,`
                          `),u(155,"input",113),e(156,`
                          `),d(157,oo,4,1,"div",14),e(158,`
                        `),t(),e(159,`
                      `),t(),e(160,`
                      `),i(161,"div",21),e(162,`
                        `),i(163,"div",9),e(164,`
                          `),i(165,"label",114),e(166,"Max No. of Floors:"),t(),e(167,`
                          `),u(168,"input",115),e(169,`
                          `),d(170,ao,4,1,"div",14),e(171,`
                        `),t(),e(172,`
                      `),t(),e(173,`
                      `),i(174,"div",21),e(175,`
                        `),i(176,"div",9),e(177,`
                          `),i(178,"label",116),e(179,"Percentage of site covered by existing building(s):"),t(),e(180,`
                          `),u(181,"input",117),e(182,`
                          `),d(183,so,4,1,"div",14),e(184,`
                        `),t(),e(185,`
                      `),t(),e(186,`
                      `),i(187,"div",21),e(188,`
                        `),i(189,"div",9),e(190,`
                          `),i(191,"label",118),e(192,"Percentage of site covered by proposed building(s):"),t(),e(193,`
                          `),u(194,"input",119),e(195,`
                          `),d(196,_o,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",8),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",120),e(205,"Number of Units to be Developed:"),t(),e(206,`
                          `),u(207,"input",121),e(208,`
                          `),d(209,uo,4,1,"div",14),e(210,`
                        `),t(),e(211,`
                      `),t(),e(212,`
                      `),i(213,"div",8),e(214,`
                        `),i(215,"div",9),e(216,`
                          `),i(217,"label",122),e(218,"Planned Land Use:"),t(),e(219,`
                          `),i(220,"select",123),e(221,`
                            `),i(222,"option",12),e(223,"--- Select planned land use ---"),t(),e(224,`
                            `),d(225,fo,2,3,"option",13),e(226,`
                          `),t(),e(227,`
                          `),d(228,vo,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",124),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",125),e(237,"Primary Land Use:"),t(),e(238,`
                          `),i(239,"select",126),e(240,`
                            `),i(241,"option",12),e(242,"--- Select primary land use ---"),t(),e(243,`
                            `),d(244,go,2,3,"option",13),e(245,`
                          `),t(),e(246,`
                          `),d(247,So,4,1,"div",14),e(248,`
                        `),t(),e(249,`
                      `),t(),e(250,`
                      `),i(251,"div",124),e(252,`
                        `),i(253,"div",9),e(254,`
                          `),i(255,"label",127),e(256,"Secondary Land Use:"),t(),e(257,`
                          `),i(258,"select",128),e(259,`
                            `),i(260,"option",12),e(261,"--- Select secondary land use ---"),t(),e(262,`
                            `),d(263,bo,2,3,"option",13),e(264,`
                          `),t(),e(265,`
                          `),d(266,Co,4,1,"div",14),e(267,`
                        `),t(),e(268,`
                      `),t(),e(269,`
                      `),i(270,"div",124),e(271,`
                        `),i(272,"div",9),e(273,`
                          `),i(274,"label",129),e(275,"Preferred Ground Floor Use:"),t(),e(276,`
                          `),i(277,"select",130),e(278,`
                            `),i(279,"option",12),e(280,"--- Select ground floor use ---"),t(),e(281,`
                            `),d(282,Eo,2,3,"option",13),e(283,`
                          `),t(),e(284,`
                          `),d(285,Io,4,1,"div",14),e(286,`
                        `),t(),e(287,`
                      `),t(),e(288,`
                    `),t(),e(289,`
                  `),t(),e(290,`
                  `),i(291,"div"),e(292,`
                    `),i(293,"div",131),e(294,`
                      `),i(295,"button",132),S("click",function(){R(n);let p=_();return D(p.resetItemsForm())}),L(),u(296,"svg",133),e(297,"Reset"),t(),e(298,`
                      `),xe(),i(299,"button",134),S("click",function(){R(n);let p=_();return D(p.addItem())}),L(),u(300,"svg",135),e(301,"Add"),t(),e(302,`
                    `),t(),e(303,`
                    `),xe(),i(304,"div",136),e(305,`
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
                                `),d(362,To,36,14,"tr",139),e(363,`
                              `),t(),e(364,`
                          `),t(),e(365,`
                      `),t(),e(366,`
                    `),t(),e(367,`
                  `),t(),e(368,`
              `),t(),e(369,`
              `),t()}if(o&2){let n,r,p,s,h,T,P,w,q,c=_();a(8),m("formGroup",c.mItemForm),a(11),m("ngClass",x(46,b,((n=c.mItemForm.get("parcel_number"))==null?null:n.invalid)&&(((n=c.mItemForm.get("parcel_number"))==null?null:n.dirty)||((n=c.mItemForm.get("parcel_number"))==null?null:n.touched)))),a(5),m("ngForOf",c.mInvestorParcels),a(3),m("ngIf",c.mItemForm.get("parcel_number").invalid&&(c.mItemForm.get("parcel_number").dirty||c.mItemForm.get("parcel_number").touched)),a(11),m("ngClass",x(48,b,c.mItemForm.get("min_density").invalid&&(c.mItemForm.get("min_density").dirty||c.mItemForm.get("min_density").touched))),a(2),m("ngIf",c.mItemForm.get("min_density").invalid&&(c.mItemForm.get("min_density").dirty||c.mItemForm.get("min_density").touched)),a(11),m("ngClass",x(50,b,c.mItemForm.get("max_density").invalid&&(c.mItemForm.get("max_density").dirty||c.mItemForm.get("max_density").touched))),a(2),m("ngIf",c.mItemForm.get("max_density").invalid&&(c.mItemForm.get("max_density").dirty||c.mItemForm.get("max_density").touched)),a(11),m("ngClass",x(52,b,c.mItemForm.get("min_floor_area").invalid&&(c.mItemForm.get("min_floor_area").dirty||c.mItemForm.get("min_floor_area").touched))),a(2),m("ngIf",c.mItemForm.get("min_floor_area").invalid&&(c.mItemForm.get("min_floor_area").dirty||c.mItemForm.get("min_floor_area").touched)),a(11),m("ngClass",x(54,b,c.mItemForm.get("max_floor_area").invalid&&(c.mItemForm.get("max_floor_area").dirty||c.mItemForm.get("max_floor_area").touched))),a(2),m("ngIf",c.mItemForm.get("max_floor_area").invalid&&(c.mItemForm.get("max_floor_area").dirty||c.mItemForm.get("max_floor_area").touched)),a(11),m("ngClass",x(56,b,c.mItemForm.get("min_far").invalid&&(c.mItemForm.get("min_far").dirty||c.mItemForm.get("min_far").touched))),a(2),m("ngIf",c.mItemForm.get("min_far").invalid&&(c.mItemForm.get("min_far").dirty||c.mItemForm.get("min_far").touched)),a(11),m("ngClass",x(58,b,c.mItemForm.get("max_far").invalid&&(c.mItemForm.get("max_far").dirty||c.mItemForm.get("max_far").touched))),a(2),m("ngIf",c.mItemForm.get("max_far").invalid&&(c.mItemForm.get("max_far").dirty||c.mItemForm.get("max_far").touched)),a(11),m("ngClass",x(60,b,c.mItemForm.get("minimum_setback").invalid&&(c.mItemForm.get("minimum_setback").dirty||c.mItemForm.get("minimum_setback").touched))),a(2),m("ngIf",c.mItemForm.get("minimum_setback").invalid&&(c.mItemForm.get("minimum_setback").dirty||c.mItemForm.get("minimum_setback").touched)),a(11),m("ngClass",x(62,b,c.mItemForm.get("min_floor_to_floor_height").invalid&&(c.mItemForm.get("min_floor_to_floor_height").dirty||c.mItemForm.get("min_floor_to_floor_height").touched))),a(2),m("ngIf",c.mItemForm.get("min_floor_to_floor_height").invalid&&(c.mItemForm.get("min_floor_to_floor_height").dirty||c.mItemForm.get("min_floor_to_floor_height").touched)),a(11),m("ngClass",x(64,b,c.mItemForm.get("max_floor_to_floor_height").invalid&&(c.mItemForm.get("max_floor_to_floor_height").dirty||c.mItemForm.get("max_floor_to_floor_height").touched))),a(2),m("ngIf",c.mItemForm.get("max_floor_to_floor_height").invalid&&(c.mItemForm.get("max_floor_to_floor_height").dirty||c.mItemForm.get("max_floor_to_floor_height").touched)),a(11),m("ngClass",x(66,b,c.mItemForm.get("min_number_of_floors").invalid&&(c.mItemForm.get("min_number_of_floors").dirty||c.mItemForm.get("min_number_of_floors").touched))),a(2),m("ngIf",c.mItemForm.get("min_number_of_floors").invalid&&(c.mItemForm.get("min_number_of_floors").dirty||c.mItemForm.get("min_number_of_floors").touched)),a(11),m("ngClass",x(68,b,c.mItemForm.get("max_number_of_floors").invalid&&(c.mItemForm.get("max_number_of_floors").dirty||c.mItemForm.get("max_number_of_floors").touched))),a(2),m("ngIf",c.mItemForm.get("max_number_of_floors").invalid&&(c.mItemForm.get("max_number_of_floors").dirty||c.mItemForm.get("max_number_of_floors").touched)),a(11),m("ngClass",x(70,b,c.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),a(2),m("ngIf",c.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),a(11),m("ngClass",x(72,b,c.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),a(2),m("ngIf",c.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(c.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||c.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),a(11),m("ngClass",x(74,b,c.mItemForm.get("number_of_units_to_be_developed").invalid&&(c.mItemForm.get("number_of_units_to_be_developed").dirty||c.mItemForm.get("number_of_units_to_be_developed").touched))),a(2),m("ngIf",c.mItemForm.get("number_of_units_to_be_developed").invalid&&(c.mItemForm.get("number_of_units_to_be_developed").dirty||c.mItemForm.get("number_of_units_to_be_developed").touched)),a(11),m("ngClass",x(76,b,((r=c.mItemForm.get("planned_land_use_id"))==null?null:r.invalid)&&(((r=c.mItemForm.get("planned_land_use_id"))==null?null:r.dirty)||((r=c.mItemForm.get("planned_land_use_id"))==null?null:r.touched)))),a(5),m("ngForOf",c.mParcelLandUseGroups),a(3),m("ngIf",((p=c.mItemForm.get("planned_land_use_id"))==null?null:p.invalid)&&(((p=c.mItemForm.get("planned_land_use_id"))==null?null:p.dirty)||((p=c.mItemForm.get("planned_land_use_id"))==null?null:p.touched))),a(11),m("ngClass",x(78,b,((s=c.mItemForm.get("primary_land_use_id"))==null?null:s.invalid)&&(((s=c.mItemForm.get("primary_land_use_id"))==null?null:s.dirty)||((s=c.mItemForm.get("primary_land_use_id"))==null?null:s.touched)))),a(5),m("ngForOf",c.mParcelLandUseGroups),a(3),m("ngIf",((h=c.mItemForm.get("primary_land_use_id"))==null?null:h.invalid)&&(((h=c.mItemForm.get("primary_land_use_id"))==null?null:h.dirty)||((h=c.mItemForm.get("primary_land_use_id"))==null?null:h.touched))),a(11),m("ngClass",x(80,b,((T=c.mItemForm.get("secondary_land_use_id"))==null?null:T.invalid)&&(((T=c.mItemForm.get("secondary_land_use_id"))==null?null:T.dirty)||((T=c.mItemForm.get("secondary_land_use_id"))==null?null:T.touched)))),a(5),m("ngForOf",c.mParcelLandUseGroups),a(3),m("ngIf",((P=c.mItemForm.get("secondary_land_use_id"))==null?null:P.invalid)&&(((P=c.mItemForm.get("secondary_land_use_id"))==null?null:P.dirty)||((P=c.mItemForm.get("secondary_land_use_id"))==null?null:P.touched))),a(11),m("ngClass",x(82,b,((w=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:w.invalid)&&(((w=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:w.dirty)||((w=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:w.touched)))),a(5),m("ngForOf",c.mParcelLandUseGroups),a(3),m("ngIf",((q=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:q.invalid)&&(((q=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:q.dirty)||((q=c.mItemForm.get("preferred_ground_floor_use_id"))==null?null:q.touched))),a(14),m("disabled",c.mItemForm.invalid),a(63),m("ngForOf",c.mLandUsePlans)}}function wo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,wo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("site_plan_and_analysis").errors)==null?null:n.required)}}function Mo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function No(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Mo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("context_analysis").errors)==null?null:n.required)}}function ko(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ko,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("concept_plan").errors)==null?null:n.required)}}function Ao(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ao,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("geotechnical_report").errors)==null?null:n.required)}}function Ro(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Do(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ro,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("topographical_survey").errors)==null?null:n.required)}}function Oo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Lo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Oo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("parking_strategy").errors)==null?null:n.required)}}function Uo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Bo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Uo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("traffic_management_plan").errors)==null?null:n.required)}}function Go(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Wo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Go,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:n.required)}}function Ho(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ho,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("project_sustainability_brief").errors)==null?null:n.required)}}function Yo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Jo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Yo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("sustainability_report").errors)==null?null:n.required)}}function Ko(o,l){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.name)}}function Xo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qo(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Xo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("green_certification_id").errors)==null?null:n.required)}}function Zo(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $o(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Zo,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("other_green_certification").errors)==null?null:n.required)}}function el(o,l){if(o&1){let n=z();i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",143),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"input",144),k("ngModelChange",function(p){R(n);let s=_();return N(s.item.other_green_certification,p)||(s.item.other_green_certification=p),D(p)}),t(),e(8,`
                  `),d(9,$o,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()}if(o&2){let n=_();a(7),M("ngModel",n.item.other_green_certification),m("ngClass",x(3,b,n.itemForm.get("other_green_certification").invalid&&(n.itemForm.get("other_green_certification").dirty||n.itemForm.get("other_green_certification").touched))),a(2),m("ngIf",n.itemForm.get("other_green_certification").invalid&&(n.itemForm.get("other_green_certification").dirty||n.itemForm.get("other_green_certification").touched))}}function tl(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function il(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,tl,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("estimated_project_duration").errors)==null?null:n.required)}}function nl(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function rl(o,l){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,nl,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("estimated_project_construction_cost").errors)==null?null:n.required)}}function ol(o,l){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function ll(o,l){if(o&1&&(i(0,"div",76),e(1,`
                  `),d(2,ol,2,0,"div",0),e(3,`
                `),t()),o&2){let n,r=_();a(2),m("ngIf",(n=r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:n.requiredTrue)}}var it=class o{constructor(l,n,r,p,s,h,T){this.mConstructionPermitService=l;this.mProfileService=n;this.router=r;this.mToastrService=p;this.mAppContextService=s;this.fb=h;this.route=T;this.mInvestorParcels={};this.mProgress=I(!1);this.mParcelInfo={};this.mEditor=ge;this.mLandUsePlans=[];this.itemForm=this.fb.group({investor_id:["",f.required],type_id:["",f.required],professional_body_id:["",f.nullValidator],membership_number:["",f.nullValidator],consultant_name:["",f.nullValidator],address:["",f.nullValidator],email:["",f.nullValidator],nationality:["",f.nullValidator],project_brief:["",f.required],project_purpose:["",f.required],site_plan_and_analysis:["",f.nullValidator],context_analysis:["",f.nullValidator],concept_plan:["",f.nullValidator],geotechnical_report:["",f.nullValidator],topographical_survey:["",f.nullValidator],parking_strategy:["",f.nullValidator],traffic_management_plan:["",f.nullValidator],estimated_utility_demand_requirements:["",f.nullValidator],project_sustainability_brief:["",f.required],green_certification_id:["",f.required],other_green_certification:["",f.nullValidator],sustainability_report:["",f.nullValidator],has_variations:["no",f.required],estimated_project_duration:["",f.required],estimated_project_construction_cost:["",f.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,f.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",f.required],planned_land_use_id:["",f.required],primary_land_use_id:["",f.required],secondary_land_use_id:["",f.nullValidator],preferred_ground_floor_use_id:["",f.nullValidator],number_of_units_to_be_developed:["",f.required],percentage_of_site_covered_by_existing_building:["",f.required],percentage_of_site_covered_by_proposed_building:["",f.nullValidator],min_number_of_floors:["",f.required],max_number_of_floors:["",f.required],min_floor_to_floor_height:["",f.nullValidator],max_floor_to_floor_height:["",f.nullValidator],min_floor_area:["",f.nullValidator],max_floor_area:["",f.nullValidator],min_far:["",f.nullValidator],max_far:["",f.nullValidator],minimum_setback:["",f.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mLandUsePlans=this.item.variations,this.mInvestorParcels=this.item.investor.parcels,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:l=>{l&&(this.mInvestors=l.data.investors,this.mProfessionalBodies=l.data.professional_bodies,this.mPermitTypes=l.data.permit_types,this.mParcelLandUseGroups=l.data.parcel_land_use_groups,this.mGreenCertifications=l.data.green_certifications,this.mProgress.set(!1))},error:l=>{this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}onSubmit(l){let n=JSON.stringify(Object.assign({},this.mLandUsePlans)),r=new FormData;r.append("investor_id",l.investor_id),r.append("type_id",l.type_id),r.append("professional_body_id",l.professional_body_id),r.append("membership_number",l.membership_number),r.append("consultant_name",l.consultant_name),r.append("address",l.address),r.append("email",l.email),r.append("nationality",l.nationality),r.append("project_brief",l.project_brief),r.append("project_purpose",l.project_purpose),r.append("has_variations",l.has_variations),r.append("land_use_plans",n),r.append("project_sustainability_brief",l.project_sustainability_brief),r.append("green_certification_id",l.green_certification_id),r.append("other_green_certification",l.other_green_certification),r.append("estimated_project_duration",l.estimated_project_duration),r.append("estimated_project_construction_cost",l.estimated_project_construction_cost),r.append("commitment_to_comply_with_development_codes_and_guidelines",l.commitment_to_comply_with_development_codes_and_guidelines),r.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),r.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),r.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),r.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),r.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),r.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),r.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),r.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),r.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),r.append("_method","PUT"),this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,r).subscribe({next:p=>{p&&(this.mToastrService.success(p.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.error(p.error.message),this.mProgress.set(!1)}})}verifyProfessional(){let l={professional_body_id:this.itemForm.get("professional_body_id")?.value,membership_number:this.itemForm.get("membership_number")?.value};!l.professional_body_id||!l.membership_number||(this.mProgress.set(!0),this.mProfileService.professionalSearch(l).subscribe({next:n=>{if(n){if(n.status==="failed")this.mToastrService.error(n.message);else{let r=n;if(this.itemForm.get("consultant_name")?.setValue(r.name),this.itemForm.get("address")?.setValue(r.address),this.itemForm.get("email")?.setValue(r.email),this.itemForm.get("nationality")?.setValue(r.nationality),r.status=="Inactive"){let p=n;this.mToastrService.error(p.good_standing+" "+p.balance_reason),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits")}}this.mProgress.set(!1)}},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}}))}onContextAnalysisChange(l){if(l.target.value){let n=l.target.files[0];this.context_analysis_file=n}}onSitePlanAndAnlysisChange(l){if(l.target.value){let n=l.target.files[0];this.site_plan_and_analysis_file=n}}onConceptPlanChange(l){if(l.target.value){let n=l.target.files[0];this.concept_plan_file=n}}onGeotechnicalReportChange(l){if(l.target.value){let n=l.target.files[0];this.geotechnical_report_file=n}}onTopographicalSurveyChange(l){if(l.target.value){let n=l.target.files[0];this.topographical_survey_file=n}}onParkingStrategyChange(l){if(l.target.value){let n=l.target.files[0];this.parking_strategy_file=n}}onTrafficManagementPlanChange(l){if(l.target.value){let n=l.target.files[0];this.traffic_management_plan_file=n}}onEstimatedUtilityDemandRequirementsChange(l){if(l.target.value){let n=l.target.files[0];this.estimated_utility_demand_requirements_file=n}}onSustainabilityReportChange(l){if(l.target.value){let n=l.target.files[0];this.sustainability_report_file=n}}onInvestorChange(l){if(l.target.value){let n=l.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(n).subscribe({next:r=>{r&&(this.mInvestorParcels=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}}onCheckVariations(l){let n=this.itemForm.get("has_variations")?.value;console.log(n)}getInvalidFields(){return Object.keys(this.itemForm.controls).filter(l=>this.itemForm.get(l)?.invalid)}addItem(){let l=this.mItemForm.value;this.mLandUsePlans.some(r=>r.parcel_number===l.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(l),this.onCheckVariations(l),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(l){this.mLandUsePlans.forEach((n,r)=>{n===l&&this.mLandUsePlans.splice(r,1)})}static{this.\u0275fac=function(n){return new(n||o)(y(H),y(tt),y(de),y(G),y(O),y(fe),y(me))}}static{this.\u0275cmp=U({type:o,selectors:[["app-edit"]],standalone:!1,decls:493,vars:127,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],[1,"col-md-6"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["class","alert alert-success",4,"ngIf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no",1,"form-check-input",3,"ngModelChange","ngModel"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes",1,"form-check-input",3,"ngModelChange","ngModel"],["for","variation_yes",1,"form-check-label"],["class","col-md-12",4,"ngIf"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads","target","_blank","rel","noopener noreferrer"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input",3,"ngModelChange","ngModel"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],[1,"col-md-3"],[1,"form-group"],["for","min_density",1,"col-form-label","required"],["formControlName","min_density","type","number",1,"form-control",3,"ngClass"],["for","max_density",1,"col-form-label","required"],["formControlName","max_density","type","number",1,"form-control",3,"ngClass"],["for","min_floor_area",1,"col-form-label","required"],["formControlName","min_floor_area","type","number",1,"form-control",3,"ngClass"],["for","max_floor_area",1,"col-form-label","required"],["formControlName","max_floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","min_far","type","number",1,"form-control",3,"ngClass"],["for","max_far",1,"col-form-label","required"],["formControlName","max_far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],["for","min_floor_to_floor_height",1,"col-form-label","required"],["formControlName","min_floor_to_floor_height","type","text",1,"form-control",3,"ngClass"],["for","max_floor_to_floor_height",1,"col-form-label","required"],["formControlName","max_floor_to_floor_height","type","text",1,"form-control",3,"ngClass"],["for","min_number_of_floors",1,"col-form-label","required"],["formControlName","min_number_of_floors","type","text",1,"form-control",3,"ngClass"],["for","max_number_of_floors",1,"col-form-label","required"],["formControlName","max_number_of_floors","type","text",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"]],template:function(n,r){if(n&1&&(d(0,dr,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),e(9,`

        `),i(10,"form",3),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(11,`

          `),i(12,"fieldset",4),e(13,`
            `),i(14,"legend",5)(15,"h6",6),e(16,"GENERAL INFORMATION"),t()(),e(17,`
            `),i(18,"div",7),e(19,`
              `),i(20,"div",8),e(21,`
                `),i(22,"div",9),e(23,`
                  `),i(24,"label",10),e(25,"Company:"),t(),e(26,`
                  `),i(27,"select",11),k("ngModelChange",function(s){return N(r.item.investor_id,s)||(r.item.investor_id=s),s}),S("change",function(s){return r.onInvestorChange(s)}),e(28,`
                    `),i(29,"option",12),e(30,"--- Select investor ---"),t(),e(31,`
                    `),d(32,sr,2,3,"option",13),e(33,`
                  `),t(),e(34,`
                  `),d(35,_r,4,1,"div",14),e(36,`
                `),t(),e(37,`
              `),t(),e(38,`
              `),i(39,"div",8),e(40,`
                `),i(41,"div",9),e(42,`
                  `),i(43,"label",15),e(44,"Nature of Application:"),t(),e(45,`
                  `),i(46,"select",16),k("ngModelChange",function(s){return N(r.item.type_id,s)||(r.item.type_id=s),s}),e(47,`
                    `),i(48,"option",12),e(49,"--- Select plan submission type ---"),t(),e(50,`
                    `),d(51,cr,2,3,"option",13),e(52,`
                  `),t(),e(53,`
                  `),d(54,fr,4,1,"div",14),e(55,`
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
                  `),i(75,"select",18),k("ngModelChange",function(s){return N(r.item.consultant_profile.professional_body_id,s)||(r.item.consultant_profile.professional_body_id=s),s}),S("change",function(){return r.verifyProfessional()}),e(76,`
                    `),i(77,"option",12),e(78,"--- Select professional body ---"),t(),e(79,`
                    `),d(80,xr,2,3,"option",13),e(81,`
                  `),t(),e(82,`
                  `),d(83,gr,4,1,"div",14),e(84,`
                `),t(),e(85,`
              `),t(),e(86,`
              `),i(87,"div",8),e(88,`
                `),i(89,"div",9),e(90,`
                  `),i(91,"label",19),e(92,"Membership Number:"),t(),e(93,`
                  `),i(94,"input",20),k("ngModelChange",function(s){return N(r.item.consultant_profile.membership_number,s)||(r.item.consultant_profile.membership_number=s),s}),S("change",function(){return r.verifyProfessional()}),t(),e(95,`
                  `),d(96,Sr,4,1,"div",14),e(97,`
                `),t(),e(98,`
              `),t(),e(99,`
              `),i(100,"div",21),e(101,`
                `),i(102,"div",9),e(103,`
                  `),i(104,"label",22),e(105,"Consultant Name:"),t(),e(106,`
                  `),i(107,"input",23),k("ngModelChange",function(s){return N(r.item.consultant.name,s)||(r.item.consultant.name=s),s}),t(),e(108,`
                  `),d(109,hr,4,1,"div",14),e(110,`
                `),t(),e(111,`
              `),t(),e(112,`
              `),i(113,"div",21),e(114,`
                `),i(115,"div",9),e(116,`
                  `),i(117,"label",24),e(118,"Address:"),t(),e(119,`
                  `),i(120,"input",25),k("ngModelChange",function(s){return N(r.item.consultant_profile.address,s)||(r.item.consultant_profile.address=s),s}),t(),e(121,`
                  `),d(122,Er,4,1,"div",14),e(123,`
                `),t(),e(124,`
              `),t(),e(125,`
              `),i(126,"div",21),e(127,`
                `),i(128,"div",9),e(129,`
                  `),i(130,"label",26),e(131,"Email:"),t(),e(132,`
                  `),i(133,"input",27),k("ngModelChange",function(s){return N(r.item.consultant.email,s)||(r.item.consultant.email=s),s}),t(),e(134,`
                  `),d(135,Ir,4,1,"div",14),e(136,`
                `),t(),e(137,`
              `),t(),e(138,`
              `),i(139,"div",21),e(140,`
                `),i(141,"div",9),e(142,`
                  `),i(143,"label",28),e(144,"Citizenship:"),t(),e(145,`
                  `),i(146,"input",29),k("ngModelChange",function(s){return N(r.item.consultant_profile.nationality,s)||(r.item.consultant_profile.nationality=s),s}),t(),e(147,`
                  `),d(148,Pr,4,1,"div",14),e(149,`
                `),t(),e(150,`
              `),t(),e(151,`
            `),t(),e(152,`
          `),t(),e(153,`
          `),i(154,"fieldset",4),e(155,`
            `),i(156,"legend",5)(157,"h6",6),e(158,"PROJECT BRIEF AND PURPOSE"),t()(),e(159,`
              `),i(160,"div",7),e(161,`
                `),i(162,"div",8),e(163,`
                  `),i(164,"div",9),e(165,`
                    `),i(166,"label",30),e(167,"Project Brief (Description of the overall project concept and how it fits in the Technopolis Development Authority Vision):"),t(),e(168,`
                    `),i(169,"ckeditor",31),k("ngModelChange",function(s){return N(r.item.project_brief,s)||(r.item.project_brief=s),s}),t(),e(170,`
                    `),d(171,qr,4,1,"div",14),e(172,`
                  `),t(),e(173,`
                `),t(),e(174,`
                `),i(175,"div",8),e(176,`
                  `),i(177,"div",9),e(178,`
                    `),i(179,"label",32),e(180,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(181,`
                    `),i(182,"ckeditor",33),k("ngModelChange",function(s){return N(r.item.project_purpose,s)||(r.item.project_purpose=s),s}),t(),e(183,`
                    `),d(184,Nr,4,1,"div",14),e(185,`
                  `),t(),e(186,`
                `),t(),e(187,`
              `),t(),e(188,`
          `),t(),e(189,`
          `),i(190,"fieldset",4),e(191,`
            `),i(192,"legend",5)(193,"h6",6),e(194,"PARCEL & CONTEXT ANALYSIS"),t()(),e(195,`
            `),i(196,"div",7),e(197,`
              `),i(198,"div",8),e(199,`
                `),d(200,jr,13,1,"div",34),e(201,`
              `),t(),e(202,`
              `),i(203,"div",8),e(204,`
                `),i(205,"div",9),e(206,`
                  `),i(207,"label",35),e(208,"Variations (Does Your Project Require any Variation?):"),t(),e(209,`
                  `),i(210,"div",36),e(211,`
                    `),i(212,"input",37),k("ngModelChange",function(s){return N(r.item.has_variations,s)||(r.item.has_variations=s),s}),t(),e(213,`
                    `),i(214,"label",38),e(215," No"),t(),e(216,`
                  `),t(),e(217,`
                  `),i(218,"div",36),e(219,`
                    `),i(220,"input",39),k("ngModelChange",function(s){return N(r.item.has_variations,s)||(r.item.has_variations=s),s}),t(),e(221,`
                    `),i(222,"label",40),e(223," Yes"),t(),e(224,`
                  `),t(),e(225,`
                  `),d(226,Vr,4,1,"div",14),e(227,`
                `),t(),e(228,`
              `),t(),e(229,`
              `),d(230,Po,370,84,"div",41),e(231,`
              `),i(232,"div",8),e(233,`
                `),i(234,"div",9),e(235,`
                  `),i(236,"label",42),e(237,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(238,`
                  `),i(239,"input",43),S("change",function(s){return r.onSitePlanAndAnlysisChange(s)}),t(),e(240,`
                  `),d(241,qo,4,1,"div",14),e(242,`
                `),t(),e(243,`
              `),t(),e(244,`
              `),i(245,"div",8),e(246,`
                `),i(247,"div",9),e(248,`
                  `),i(249,"label",44),e(250,"Context Analysis (500m radius context analysis):"),t(),e(251,`
                  `),i(252,"input",45),S("change",function(s){return r.onContextAnalysisChange(s)}),t(),e(253,`
                  `),d(254,No,4,1,"div",14),e(255,`
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
                  `),i(275,"input",47),S("change",function(s){return r.onConceptPlanChange(s)}),t(),e(276,`
                  `),d(277,jo,4,1,"div",14),e(278,`
                `),t(),e(279,`
              `),t(),e(280,`
              `),i(281,"div",21),e(282,`
                `),i(283,"div",9),e(284,`
                  `),i(285,"label",48),e(286,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(287,`
                  `),i(288,"input",49),S("change",function(s){return r.onGeotechnicalReportChange(s)}),t(),e(289,`
                  `),d(290,Vo,4,1,"div",14),e(291,`
                `),t(),e(292,`
              `),t(),e(293,`
              `),i(294,"div",8),e(295,`
                `),i(296,"div",9),e(297,`
                  `),i(298,"label",50),e(299,"Topographical Survey:"),t(),e(300,`
                  `),i(301,"input",51),S("change",function(s){return r.onTopographicalSurveyChange(s)}),t(),e(302,`
                  `),d(303,Do,4,1,"div",14),e(304,`
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
                  `),i(327,"input",54),S("change",function(s){return r.onParkingStrategyChange(s)}),t(),e(328,`
                  `),d(329,Lo,4,1,"div",14),e(330,`
                `),t(),e(331,`
              `),t(),e(332,`
              `),i(333,"div",8),e(334,`
                `),i(335,"div",9),e(336,`
                  `),i(337,"label",55),e(338,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(339,`
                  `),i(340,"input",56),S("change",function(s){return r.onTrafficManagementPlanChange(s)}),t(),e(341,`
                  `),d(342,Bo,4,1,"div",14),e(343,`
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
                  `),i(363,"input",58),S("change",function(s){return r.onEstimatedUtilityDemandRequirementsChange(s)}),t(),e(364,`
                  `),d(365,Wo,4,1,"div",14),e(366,`
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
                  `),i(386,"ckeditor",60),k("ngModelChange",function(s){return N(r.item.project_sustainability_brief,s)||(r.item.project_sustainability_brief=s),s}),t(),e(387,`
                  `),d(388,zo,4,1,"div",14),e(389,`
                `),t(),e(390,`
              `),t(),e(391,`
              `),i(392,"div",8),e(393,`
                `),i(394,"div",9),e(395,`
                  `),i(396,"label",61),e(397,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(398,`
                  `),i(399,"input",62),S("change",function(s){return r.onSustainabilityReportChange(s)}),t(),e(400,`
                  `),d(401,Jo,4,1,"div",14),e(402,`
                `),t(),e(403,`
              `),t(),e(404,`
              `),i(405,"div",8),e(406,`
                `),i(407,"div",9),e(408,`
                  `),i(409,"label",63),e(410,"Green Certifications:"),t(),e(411,`
                  `),i(412,"select",64),k("ngModelChange",function(s){return N(r.item.green_certification_id,s)||(r.item.green_certification_id=s),s}),e(413,`
                    `),i(414,"option",12),e(415,"--- Select certification ---"),t(),e(416,`
                    `),d(417,Ko,2,3,"option",13),e(418,`
                  `),t(),e(419,`
                  `),d(420,Qo,4,1,"div",14),e(421,`
                `),t(),e(422,`
              `),t(),e(423,`
              `),d(424,el,12,5,"div",41),e(425,`
            `),t(),e(426,`
          `),t(),e(427,`
          `),i(428,"fieldset",4),e(429,`
            `),i(430,"legend",5)(431,"h6",6),e(432,"CONCLUSIONS"),t()(),e(433,`
            `),i(434,"div",7),e(435,`
              `),i(436,"div",8),e(437,`
                `),i(438,"div",9),e(439,`
                  `),i(440,"label",65),e(441,"Estimated Project Duration (In months):"),t(),e(442,`
                  `),i(443,"input",66),k("ngModelChange",function(s){return N(r.item.estimated_project_duration,s)||(r.item.estimated_project_duration=s),s}),t(),e(444,`
                  `),d(445,il,4,1,"div",14),e(446,`
                `),t(),e(447,`
              `),t(),e(448,`
              `),i(449,"div",8),e(450,`
                `),i(451,"div",9),e(452,`
                  `),i(453,"label",67),e(454,"Estimated Project Construction Cost (In USD):"),t(),e(455,`
                  `),i(456,"input",68),k("ngModelChange",function(s){return N(r.item.estimated_project_construction_cost,s)||(r.item.estimated_project_construction_cost=s),s}),t(),e(457,`
                  `),d(458,rl,4,1,"div",14),e(459,`
                `),t(),e(460,`
              `),t(),e(461,`
              `),i(462,"div",69),e(463,`
                `),i(464,"div",36),e(465,`
                  `),i(466,"input",70),k("ngModelChange",function(s){return N(r.item.commitment_to_comply_with_development_codes_and_guidelines,s)||(r.item.commitment_to_comply_with_development_codes_and_guidelines=s),s}),t(),e(467,`
                  `),i(468,"label",71),e(469,`
                    By checking this, confirms the investor's commitment to comply with the `),i(470,"a",53),e(471,"Technopolis Development Authority Development Codes and Guidelines"),t(),e(472,`
                  `),t(),e(473,`
                `),t(),e(474,`
                `),d(475,ll,4,1,"div",14),e(476,`
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
`),t()),n&2){let p,s,h,T,P,w,q,c,A,V,g,ee,te,ie,ne,re,oe,Ae,Ve,Re;m("ngIf",r.mProgress()),a(10),m("formGroup",r.itemForm),a(17),M("ngModel",r.item.investor_id),m("ngClass",x(81,b,((p=r.itemForm.get("investor_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("investor_id"))==null?null:p.dirty)||((p=r.itemForm.get("investor_id"))==null?null:p.touched)))),a(5),m("ngForOf",r.mInvestors),a(3),m("ngIf",((s=r.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=r.itemForm.get("investor_id"))==null?null:s.dirty)||((s=r.itemForm.get("investor_id"))==null?null:s.touched))),a(11),M("ngModel",r.item.type_id),m("ngClass",x(83,b,((h=r.itemForm.get("type_id"))==null?null:h.invalid)&&(((h=r.itemForm.get("type_id"))==null?null:h.dirty)||((h=r.itemForm.get("type_id"))==null?null:h.touched)))),a(5),m("ngForOf",r.mPermitTypes),a(3),m("ngIf",((T=r.itemForm.get("type_id"))==null?null:T.invalid)&&(((T=r.itemForm.get("type_id"))==null?null:T.dirty)||((T=r.itemForm.get("type_id"))==null?null:T.touched))),a(21),M("ngModel",r.item.consultant_profile.professional_body_id),m("ngClass",x(85,b,((P=r.itemForm.get("professional_body_id"))==null?null:P.invalid)&&(((P=r.itemForm.get("professional_body_id"))==null?null:P.dirty)||((P=r.itemForm.get("professional_body_id"))==null?null:P.touched)))),a(5),m("ngForOf",r.mProfessionalBodies),a(3),m("ngIf",((w=r.itemForm.get("professional_body_id"))==null?null:w.invalid)&&(((w=r.itemForm.get("professional_body_id"))==null?null:w.dirty)||((w=r.itemForm.get("professional_body_id"))==null?null:w.touched))),a(11),M("ngModel",r.item.consultant_profile.membership_number),m("ngClass",x(87,b,((q=r.itemForm.get("membership_number"))==null?null:q.invalid)&&(((q=r.itemForm.get("membership_number"))==null?null:q.dirty)||((q=r.itemForm.get("membership_number"))==null?null:q.touched)))),a(2),m("ngIf",((c=r.itemForm.get("membership_number"))==null?null:c.invalid)&&(((c=r.itemForm.get("membership_number"))==null?null:c.dirty)||((c=r.itemForm.get("membership_number"))==null?null:c.touched))),a(11),M("ngModel",r.item.consultant.name),m("ngClass",x(89,b,((A=r.itemForm.get("consultant_name"))==null?null:A.invalid)&&(((A=r.itemForm.get("consultant_name"))==null?null:A.dirty)||((A=r.itemForm.get("consultant_name"))==null?null:A.touched)))),a(2),m("ngIf",((V=r.itemForm.get("consultant_name"))==null?null:V.invalid)&&(((V=r.itemForm.get("consultant_name"))==null?null:V.dirty)||((V=r.itemForm.get("consultant_name"))==null?null:V.touched))),a(11),M("ngModel",r.item.consultant_profile.address),m("ngClass",x(91,b,((g=r.itemForm.get("address"))==null?null:g.invalid)&&(((g=r.itemForm.get("address"))==null?null:g.dirty)||((g=r.itemForm.get("address"))==null?null:g.touched)))),a(2),m("ngIf",((ee=r.itemForm.get("address"))==null?null:ee.invalid)&&(((ee=r.itemForm.get("address"))==null?null:ee.dirty)||((ee=r.itemForm.get("address"))==null?null:ee.touched))),a(11),M("ngModel",r.item.consultant.email),m("ngClass",x(93,b,((te=r.itemForm.get("email"))==null?null:te.invalid)&&(((te=r.itemForm.get("email"))==null?null:te.dirty)||((te=r.itemForm.get("email"))==null?null:te.touched)))),a(2),m("ngIf",((ie=r.itemForm.get("email"))==null?null:ie.invalid)&&(((ie=r.itemForm.get("email"))==null?null:ie.dirty)||((ie=r.itemForm.get("email"))==null?null:ie.touched))),a(11),M("ngModel",r.item.consultant_profile.nationality),m("ngClass",x(95,b,((ne=r.itemForm.get("nationality"))==null?null:ne.invalid)&&(((ne=r.itemForm.get("nationality"))==null?null:ne.dirty)||((ne=r.itemForm.get("nationality"))==null?null:ne.touched)))),a(2),m("ngIf",((re=r.itemForm.get("nationality"))==null?null:re.invalid)&&(((re=r.itemForm.get("nationality"))==null?null:re.dirty)||((re=r.itemForm.get("nationality"))==null?null:re.touched))),a(21),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),M("ngModel",r.item.project_brief),m("ngClass",x(97,b,((oe=r.itemForm.get("project_brief"))==null?null:oe.invalid)&&(((oe=r.itemForm.get("project_brief"))==null?null:oe.dirty)||((oe=r.itemForm.get("project_brief"))==null?null:oe.touched)))),a(2),m("ngIf",((Ae=r.itemForm.get("project_brief"))==null?null:Ae.invalid)&&(((Ae=r.itemForm.get("project_brief"))==null?null:Ae.dirty)||((Ae=r.itemForm.get("project_brief"))==null?null:Ae.touched))),a(11),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),M("ngModel",r.item.project_purpose),m("ngClass",x(99,b,((Ve=r.itemForm.get("project_purpose"))==null?null:Ve.invalid)&&(((Ve=r.itemForm.get("project_purpose"))==null?null:Ve.dirty)||((Ve=r.itemForm.get("project_purpose"))==null?null:Ve.touched)))),a(2),m("ngIf",((Re=r.itemForm.get("project_purpose"))==null?null:Re.invalid)&&(((Re=r.itemForm.get("project_purpose"))==null?null:Re.dirty)||((Re=r.itemForm.get("project_purpose"))==null?null:Re.touched))),a(16),m("ngIf",r.mInvestorParcels.length>0),a(12),M("ngModel",r.item.has_variations),a(8),M("ngModel",r.item.has_variations),a(6),m("ngIf",r.itemForm.get("has_variations").invalid&&(r.itemForm.get("has_variations").dirty||r.itemForm.get("has_variations").touched)),a(4),m("ngIf",r.itemForm.get("has_variations").value=="yes"),a(9),m("ngClass",x(101,b,r.itemForm.get("site_plan_and_analysis").invalid&&(r.itemForm.get("site_plan_and_analysis").dirty||r.itemForm.get("site_plan_and_analysis").touched))),a(2),m("ngIf",r.itemForm.get("site_plan_and_analysis").invalid&&(r.itemForm.get("site_plan_and_analysis").dirty||r.itemForm.get("site_plan_and_analysis").touched)),a(11),m("ngClass",x(103,b,r.itemForm.get("context_analysis").invalid&&(r.itemForm.get("context_analysis").dirty||r.itemForm.get("context_analysis").touched))),a(2),m("ngIf",r.itemForm.get("context_analysis").invalid&&(r.itemForm.get("context_analysis").dirty||r.itemForm.get("context_analysis").touched)),a(21),m("ngClass",x(105,b,r.itemForm.get("concept_plan").invalid&&(r.itemForm.get("concept_plan").dirty||r.itemForm.get("concept_plan").touched))),a(2),m("ngIf",r.itemForm.get("concept_plan").invalid&&(r.itemForm.get("concept_plan").dirty||r.itemForm.get("concept_plan").touched)),a(11),m("ngClass",x(107,b,r.itemForm.get("geotechnical_report").invalid&&(r.itemForm.get("geotechnical_report").dirty||r.itemForm.get("geotechnical_report").touched))),a(2),m("ngIf",r.itemForm.get("geotechnical_report").invalid&&(r.itemForm.get("geotechnical_report").dirty||r.itemForm.get("geotechnical_report").touched)),a(11),m("ngClass",x(109,b,r.itemForm.get("topographical_survey").invalid&&(r.itemForm.get("topographical_survey").dirty||r.itemForm.get("topographical_survey").touched))),a(2),m("ngIf",r.itemForm.get("topographical_survey").invalid&&(r.itemForm.get("topographical_survey").dirty||r.itemForm.get("topographical_survey").touched)),a(24),m("ngClass",x(111,b,r.itemForm.get("parking_strategy").invalid&&(r.itemForm.get("parking_strategy").dirty||r.itemForm.get("parking_strategy").touched))),a(2),m("ngIf",r.itemForm.get("parking_strategy").invalid&&(r.itemForm.get("parking_strategy").dirty||r.itemForm.get("parking_strategy").touched)),a(11),m("ngClass",x(113,b,r.itemForm.get("traffic_management_plan").invalid&&(r.itemForm.get("traffic_management_plan").dirty||r.itemForm.get("traffic_management_plan").touched))),a(2),m("ngIf",r.itemForm.get("traffic_management_plan").invalid&&(r.itemForm.get("traffic_management_plan").dirty||r.itemForm.get("traffic_management_plan").touched)),a(21),m("ngClass",x(115,b,r.itemForm.get("estimated_utility_demand_requirements").invalid&&(r.itemForm.get("estimated_utility_demand_requirements").dirty||r.itemForm.get("estimated_utility_demand_requirements").touched))),a(2),m("ngIf",r.itemForm.get("estimated_utility_demand_requirements").invalid&&(r.itemForm.get("estimated_utility_demand_requirements").dirty||r.itemForm.get("estimated_utility_demand_requirements").touched)),a(21),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),M("ngModel",r.item.project_sustainability_brief),m("ngClass",x(117,b,r.itemForm.get("project_sustainability_brief").invalid&&(r.itemForm.get("project_sustainability_brief").dirty||r.itemForm.get("project_sustainability_brief").touched))),a(2),m("ngIf",r.itemForm.get("project_sustainability_brief").invalid&&(r.itemForm.get("project_sustainability_brief").dirty||r.itemForm.get("project_sustainability_brief").touched)),a(11),m("ngClass",x(119,b,r.itemForm.get("sustainability_report").invalid&&(r.itemForm.get("sustainability_report").dirty||r.itemForm.get("sustainability_report").touched))),a(2),m("ngIf",r.itemForm.get("sustainability_report").invalid&&(r.itemForm.get("sustainability_report").dirty||r.itemForm.get("sustainability_report").touched)),a(11),M("ngModel",r.item.green_certification_id),m("ngClass",x(121,b,r.itemForm.get("green_certification_id").invalid&&(r.itemForm.get("green_certification_id").dirty||r.itemForm.get("green_certification_id").touched))),a(5),m("ngForOf",r.mGreenCertifications),a(3),m("ngIf",r.itemForm.get("green_certification_id").invalid&&(r.itemForm.get("green_certification_id").dirty||r.itemForm.get("green_certification_id").touched)),a(4),m("ngIf",r.itemForm.get("green_certification_id").value==="4"),a(19),M("ngModel",r.item.estimated_project_duration),m("ngClass",x(123,b,r.itemForm.get("estimated_project_duration").invalid&&(r.itemForm.get("estimated_project_duration").dirty||r.itemForm.get("estimated_project_duration").touched))),a(2),m("ngIf",r.itemForm.get("estimated_project_duration").invalid&&(r.itemForm.get("estimated_project_duration").dirty||r.itemForm.get("estimated_project_duration").touched)),a(11),M("ngModel",r.item.estimated_project_construction_cost),m("ngClass",x(125,b,r.itemForm.get("estimated_project_construction_cost").invalid&&(r.itemForm.get("estimated_project_construction_cost").dirty||r.itemForm.get("estimated_project_construction_cost").touched))),a(2),m("ngIf",r.itemForm.get("estimated_project_construction_cost").invalid&&(r.itemForm.get("estimated_project_construction_cost").dirty||r.itemForm.get("estimated_project_construction_cost").touched)),a(8),M("ngModel",r.item.commitment_to_comply_with_development_codes_and_guidelines),a(9),m("ngIf",r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||r.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),a(10),m("disabled",r.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,se,X,pe,_e,Z,Ee,Fe,he,Qe,Xe,Ce,Le,ce,Q,$,ue,Oe,ye],encapsulation:2})}};function al(o,l){o&1&&u(0,"app-progress")}function ml(o,l){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let n=_();a(),v(n.item.investor==null?null:n.item.investor.name)}}function dl(o,l){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let n=_();a(),v(n.item.type==null?null:n.item.type.name)}}function sl(o,l){o&1&&(i(0,"span"),e(1,","),t())}function pl(o,l){if(o&1&&(i(0,"span",12),e(1),d(2,sl,2,0,"span",0),t()),o&2){let n=l.$implicit,r=l.last;a(),j(" ",n.allocation_worksheet==null?null:n.allocation_worksheet.number),a(),m("ngIf",!r)}}function _l(o,l){if(o&1&&(i(0,"span"),e(1,`
                        `),d(2,pl,3,2,"span",33),e(3,`
                      `),t()),o&2){let n=_(2);a(2),m("ngForOf",n.item.investor.parcels)}}function cl(o,l){if(o&1&&(i(0,"div",12),e(1,`
                    `),e(2,`
                      `),d(3,_l,4,1,"span",0),e(4,`
                  `),t()),o&2){let n=_();a(3),m("ngIf",n.item.investor.parcels)}}function ul(o,l){if(o&1&&(i(0,"div",34),e(1,`
                    `),i(2,"div",35),e(3,`
                      `),i(4,"div",36),e(5,`
                        `),i(6,"h6",37),e(7),t(),e(8,`
                        `),i(9,"table",38),e(10,`
                          `),i(11,"thead"),e(12,`
                            `),i(13,"tr"),e(14,`
                              `),i(15,"th",39),e(16,"#"),t(),e(17,`
                              `),i(18,"th",39),e(19,"Planned"),t(),e(20,`
                              `),i(21,"th",39),e(22,"Proposed"),t(),e(23,`
                              `),i(24,"th",39),e(25,"Variance"),t(),e(26,`
                            `),t(),e(27,`
                          `),t(),e(28,`
                          `),i(29,"tbody"),e(30,`
                            `),i(31,"tr"),e(32,`
                              `),i(33,"th",40),e(34,"Planned Land Use:"),t(),e(35,`
                              `),i(36,"td"),e(37),t(),e(38,`
                              `),i(39,"td",41),e(40),t(),e(41,`
                              `),i(42,"td",42),e(43,"-"),t(),e(44,`
                            `),t(),e(45,`
                            `),i(46,"tr"),e(47,`
                              `),i(48,"th",40),e(49,"Primary Land Use:"),t(),e(50,`
                              `),i(51,"td"),e(52),t(),e(53,`
                              `),i(54,"td",41),e(55),t(),e(56,`
                              `),i(57,"td",41),e(58,"-"),t(),e(59,`
                            `),t(),e(60,`
                            `),i(61,"tr"),e(62,`
                              `),i(63,"th",40),e(64,"Secondary Land Use:"),t(),e(65,`
                              `),i(66,"td"),e(67),t(),e(68,`
                              `),i(69,"td",41),e(70),t(),e(71,`
                              `),i(72,"td",42),e(73,"-"),t(),e(74,`
                            `),t(),e(75,`
                            `),i(76,"tr"),e(77,`
                              `),i(78,"th",40),e(79,"Preferred Ground Land Use:"),t(),e(80,`
                              `),i(81,"td"),e(82),t(),e(83,`
                              `),i(84,"td",41),e(85),t(),e(86,`
                              `),i(87,"td",42),e(88,"-"),t(),e(89,`
                            `),t(),e(90,`
                            `),i(91,"tr"),e(92,`
                              `),i(93,"th",40),e(94,"Number of Units to be Developed:"),t(),e(95,`
                              `),i(96,"td"),e(97),t(),e(98,`
                              `),i(99,"td",41),e(100),t(),e(101,`
                              `),i(102,"td",42),e(103,"-"),t(),e(104,`
                            `),t(),e(105,`
                            `),i(106,"tr"),e(107,`
                              `),i(108,"th",40),e(109,"Plot Coverage % (Proposed/Existing):"),t(),e(110,`
                              `),i(111,"td"),e(112),t(),e(113,`
                              `),i(114,"td",41),e(115),t(),e(116,`
                              `),i(117,"td",42),e(118,"-"),t(),e(119,`
                            `),t(),e(120,`
                            `),i(121,"tr"),e(122,`
                              `),i(123,"th",40),e(124,"Min/Max Floors:"),t(),e(125,`
                              `),i(126,"td"),e(127),t(),e(128,`
                              `),i(129,"td",41),e(130),t(),e(131,`
                              `),i(132,"td",42),e(133),t(),e(134,`
                            `),t(),e(135,`
                            `),i(136,"tr"),e(137,`
                              `),i(138,"th",40),e(139,"Min/Max Floor Area:"),t(),e(140,`
                              `),i(141,"td"),e(142),t(),e(143,`
                              `),i(144,"td",41),e(145),t(),e(146,`
                              `),i(147,"td",42),e(148,"-"),t(),e(149,`
                            `),t(),e(150,`
                            `),i(151,"tr"),e(152,`
                              `),i(153,"th",40),e(154,"Min/Max Floor-to-Floor Height:"),t(),e(155,`
                              `),i(156,"td"),e(157),t(),e(158,`
                              `),i(159,"td",41),e(160),t(),e(161,`
                              `),i(162,"td",42),e(163,"-"),t(),e(164,`
                            `),t(),e(165,`
                            `),i(166,"tr"),e(167,`
                              `),i(168,"th",40),e(169,"Min/Max FAR:"),t(),e(170,`
                              `),i(171,"td"),e(172),t(),e(173,`
                              `),i(174,"td",41),e(175),t(),e(176,`
                              `),i(177,"td",42),e(178,"-"),t(),e(179,`
                            `),t(),e(180,`
                            `),i(181,"tr"),e(182,`
                              `),i(183,"th",40),e(184,"Minimum Setback:"),t(),e(185,`
                              `),i(186,"td"),e(187),t(),e(188,`
                              `),i(189,"td",41),e(190),t(),e(191,`
                              `),i(192,"td",42),e(193),t(),e(194,`
                            `),t(),e(195,`
                          `),t(),e(196,`
                        `),t(),e(197,`
                      `),t(),e(198,`
                    `),t(),e(199,`
                  `),t()),o&2){let n=l.$implicit,r=l.index;a(7),C("",r+1,". ",n==null?null:n.parcel_number),a(30),v(n==null||n.parcel==null?null:n.parcel.name),a(3),v(n==null||n.planned_land_use==null?null:n.planned_land_use.name),a(12),v(n==null||n.parcel==null?null:n.parcel.predominant_land),a(3),v(n==null||n.primary_land_use==null?null:n.primary_land_use.name),a(12),v(n==null||n.parcel==null?null:n.parcel.secondary_use),a(3),v(n==null||n.secondary_land_use==null?null:n.secondary_land_use.name),a(12),v(n==null||n.parcel==null?null:n.parcel.preferred_ground_floor_use),a(3),v(n==null||n.preferred_ground_floor_use==null?null:n.preferred_ground_floor_use.name),a(12),v(n==null||n.parcel==null?null:n.parcel.number_of_units_to_be_developed),a(3),v(n.number_of_units_to_be_developed),a(12),C("",n==null||n.parcel==null?null:n.parcel.percentage_of_site_covered_by_proposed_building,"-",n==null||n.parcel==null?null:n.parcel.percentage_of_site_covered_by_existing_building),a(3),C("",n==null?null:n.percentage_of_site_covered_by_proposed_building,"-",n==null?null:n.percentage_of_site_covered_by_existing_building),a(12),C("",n==null||n.parcel==null?null:n.parcel.min_floors,"-",n==null||n.parcel==null?null:n.parcel.max_floors),a(3),C("",n==null?null:n.min_number_of_floors,"-",n==null?null:n.max_number_of_floors),a(3),C("",(n==null?null:n.min_number_of_floors)-(n==null||n.parcel==null?null:n.parcel.min_floors)," / ",(n==null?null:n.max_number_of_floors)-(n==null||n.parcel==null?null:n.parcel.max_floors)),a(9),C("",n==null||n.parcel==null?null:n.parcel.min_floor_area,"-",n==null||n.parcel==null?null:n.parcel.min_floor_area),a(3),C("",n==null?null:n.min_floor_area,"-",n==null?null:n.min_floor_area),a(12),C("",n==null||n.parcel==null?null:n.parcel.min_floor_to_floor_height,"-",n==null||n.parcel==null?null:n.parcel.max_floor_to_floor_height),a(3),C("",n==null?null:n.min_floor_to_floor_height,"-",n==null?null:n.max_floor_to_floor_height),a(12),C("",n==null||n.parcel==null?null:n.parcel.min_far,"-",n==null||n.parcel==null?null:n.parcel.max_far),a(3),C("",n==null?null:n.min_far,"-",n==null?null:n.max_far),a(12),v(n==null||n.parcel==null?null:n.parcel.minimum_setback),a(3),v(n==null?null:n.minimum_setback),a(3),v((n==null?null:n.minimum_setback)-(n==null||n.parcel==null?null:n.parcel.minimum_setback))}}function fl(o,l){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",2),e(3,`
                  `),i(4,"label",14),e(5,"Variation Justification Statement:"),t(),e(6,`
                  `),i(7,"div",12),e(8,`
                    `),u(9,"span",26),e(10,`
                  `),t(),e(11,`
                `),t(),e(12,`
              `),t()),o&2){let n=_();a(9),m("innerHTML",n.mAppContextService.safeHtml(n.item.variation_justification_statement),De)}}function xl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.context_analysis_url),le)}}function vl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.concept_plan_url),le)}}function gl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.geotechnical_report_url),le)}}function yl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.topographical_survey_url),le)}}function Sl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.topographical_survey_cad_url),le)}}function bl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.parking_strategy_url),le)}}function hl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.traffic_management_plan_url),le)}}function Cl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.estimated_utility_demand_requirements_url),le)}}function El(o,l){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",44),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"div",12),e(8),t(),e(9,`
                `),t(),e(10,`
              `),t()),o&2){let n=_();a(8),v(n.item.other_green_certification)}}function Fl(o,l){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let n=_();a(2),m("href",F(n.item.sustainability_report_url),le)}}var nt=class o{constructor(l,n,r,p,s,h){this.mConstructionPermitService=l;this.router=n;this.mToastrService=r;this.mAppContextService=p;this.fb=s;this.route=h;this.mProgress=I(!1);this.item={};this.itemForm=this.fb.group({investor_id:["",f.required],plan_submission_type_id:["",f.required],project_brief:["",f.required],project_purpose:["",f.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:l=>{l&&(this.mInvestors=l.data.investors,this.mProfessionalBodies=l.data.professional_bodies,this.mPlanSubmissionTypes=l.data.plan_submission_types,this.mGreenCertifications=l.data.green_certifications,this.mProgress.set(!1))},error:l=>{this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}onSubmit(l){this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,l).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(y(H),y(de),y(G),y(O),y(fe),y(me))}}static{this.\u0275cmp=U({type:o,selectors:[["app-show"]],standalone:!1,decls:365,vars:33,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],["for","investor_id"],["class","text-muted",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],[1,"text-muted",3,"innerHTML"],["for","context_analysis"],[1,"border","mb-3","p-3"],[1,"text-bold","text-muted"],["class","row mb-2",4,"ngFor","ngForOf"],["class","col-md-12",4,"ngIf"],[1,"col-md-6"],["for","concept_plan"],["for","topographical_survey"],["for","topographical_survey_cad"],["for","parking_strategy"],["routerLink","/reference-materials","target","_blank","rel","noopener noreferrer"],["for","traffic_management_plan"],[3,"innerHTML"],[1,"form-group","mb-3"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["for","estimated_project_duration"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["cButton","","color","success",1,"text-dark",3,"routerLink"],["class","text-muted",4,"ngFor","ngForOf"],[1,"row","mb-2"],[1,"col-12"],[1,"callout","callout-danger"],[1,"fw-bolder"],[1,"table","table-bordered","table-danger1"],["scope","col"],["scope","row"],[1,"text-success"],[1,"text-danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","other_green_certification"]],template:function(n,r){n&1&&(d(0,al,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,ml,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,dl,2,1,"div",10),e(38,`
                `),t(),e(39,`
              `),t(),e(40,`
            `),t(),e(41,`
          `),t(),e(42,`
          `),i(43,"fieldset",4),e(44,`
            `),i(45,"legend",5)(46,"h6",6),e(47,"PROJECT BRIEF AND PURPOSE"),t()(),e(48,`
            `),i(49,"div",7),e(50,`
              `),i(51,"div",8),e(52,`
                `),i(53,"div",2),e(54,`
                  `),i(55,"label",11),e(56,"Project Brief (Description of the overall project concept and how it fits in the Technopolis Development Authority Vision):"),t(),e(57,`
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
                  `),d(91,cl,5,1,"div",10),e(92,`
                `),t(),e(93,`
              `),t(),e(94,`
              `),i(95,"div",8),e(96,`
                `),i(97,"fieldset",15),e(98,`
                  `),i(99,"legend",5)(100,"h6",16),e(101,"Land Use Plan"),t()(),e(102,`
                  `),d(103,ul,200,37,"div",17),e(104,`
                `),t(),e(105,`
              `),t(),e(106,`
              `),i(107,"div",8),e(108,`
                `),i(109,"div",2),e(110,`
                  `),i(111,"label",14),e(112,"Require Variations:"),t(),e(113,`
                  `),i(114,"div",12),e(115),t(),e(116,`
                `),t(),e(117,`
              `),t(),e(118,`
              `),d(119,fl,13,1,"div",18),e(120,`
              `),i(121,"div",8),e(122,`
                `),i(123,"div",2),e(124,`
                  `),i(125,"label",14),e(126,"Context Analysis (500m radius context analysis):"),t(),e(127,`
                  `),d(128,xl,5,2,"div",0),e(129,`
                `),t(),e(130,`
              `),t(),e(131,`
            `),t(),e(132,`
          `),t(),e(133,`
          `),i(134,"fieldset",4),e(135,`
            `),i(136,"legend",5)(137,"h6",6),e(138,"DEVELOPMENT DATA"),t()(),e(139,`
            `),i(140,"div",7),e(141,`
              `),i(142,"div",19),e(143,`
                `),i(144,"div",2),e(145,`
                  `),i(146,"label",20),e(147,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(148,`
                  `),d(149,vl,5,2,"div",0),e(150,`
                `),t(),e(151,`
              `),t(),e(152,`
              `),i(153,"div",19),e(154,`
                `),i(155,"div",2),e(156,`
                  `),i(157,"label",20),e(158,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(159,`
                  `),d(160,gl,5,2,"div",0),e(161,`
                `),t(),e(162,`
              `),t(),e(163,`
              `),i(164,"div",19),e(165,`
                `),i(166,"div",2),e(167,`
                  `),i(168,"label",21),e(169,"Topographical Survey (PDF):"),t(),e(170,`
                  `),d(171,yl,5,2,"div",0),e(172,`
                `),t(),e(173,`
              `),t(),e(174,`
              `),i(175,"div",19),e(176,`
                `),i(177,"div",2),e(178,`
                  `),i(179,"label",22),e(180,"Topographical Survey (CAD):"),t(),e(181,`
                  `),d(182,Sl,5,2,"div",0),e(183,`
                `),t(),e(184,`
              `),t(),e(185,`
            `),t(),e(186,`
          `),t(),e(187,`
          `),i(188,"fieldset",4),e(189,`
            `),i(190,"legend",5)(191,"h6",6),e(192,"ACCESS ANALYSIS PLAN"),t()(),e(193,`
            `),i(194,"div",7),e(195,`
              `),i(196,"div",8),e(197,`
                `),i(198,"div",2),e(199,`
                  `),i(200,"label",23),e(201,"Parking Strategy (Using "),i(202,"a",24),e(203,"Reference Materials"),t(),e(204," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6):"),t(),e(205,`
                  `),d(206,bl,5,2,"div",0),e(207,`
                `),t(),e(208,`
              `),t(),e(209,`
              `),i(210,"div",8),e(211,`
                `),i(212,"div",2),e(213,`
                  `),i(214,"label",25),e(215,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(216,`
                  `),d(217,hl,5,2,"div",0),e(218,`
                `),t(),e(219,`
              `),t(),e(220,`
            `),t(),e(221,`
          `),t(),e(222,`
          `),i(223,"fieldset",4),e(224,`
            `),i(225,"legend",5)(226,"h6",6),e(227,"INFRASTRUCTURE"),t()(),e(228,`
            `),i(229,"div",7),e(230,`
              `),i(231,"div",8),e(232,`
                `),i(233,"div",2),e(234,`
                  `),i(235,"label",20),e(236,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(237,`
                  `),d(238,Cl,5,2,"div",0),e(239,`
                `),t(),e(240,`
              `),t(),e(241,`
            `),t(),e(242,`
          `),t(),e(243,`
          `),i(244,"fieldset",4),e(245,`
            `),i(246,"legend",5)(247,"h6",6),e(248,"PROJECT SUSTAINABILITY"),t()(),e(249,`
            `),i(250,"div",7),e(251,`
              `),i(252,"div",8),e(253,`
                `),i(254,"div",2),e(255,`
                  `),i(256,"label",20),e(257,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(258,`
                  `),i(259,"div",12),e(260,`
                    `),u(261,"span",26),e(262,`
                  `),t(),e(263,`
                `),t(),e(264,`
              `),t(),e(265,`
              `),i(266,"div",8),e(267,`
                  `),i(268,"div",2),e(269,`
                    `),i(270,"label",9),e(271,"Green Certification:"),t(),e(272,`
                    `),i(273,"div",12),e(274),t(),e(275,`
                  `),t(),e(276,`
              `),t(),e(277,`
              `),d(278,El,11,1,"div",18),e(279,`
              `),i(280,"div",8),e(281,`
                `),i(282,"div",27),e(283,`
                  `),i(284,"label",28),e(285,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(286,`
                  `),d(287,Fl,5,2,"div",0),e(288,`
                `),t(),e(289,`
              `),t(),e(290,`
            `),t(),e(291,`
          `),t(),e(292,`
          `),i(293,"fieldset",4),e(294,`
            `),i(295,"legend",5)(296,"h6",6),e(297,"CONCLUSIONS"),t()(),e(298,`
            `),i(299,"div",7),e(300,`
              `),i(301,"div",8),e(302,`
                `),i(303,"div",2),e(304,`
                  `),i(305,"label",9),e(306,"Variations (Does Your Project Require any Variation?):"),t(),e(307,`
                  `),i(308,"div",12),e(309),t(),e(310,`
                `),t(),e(311,`
              `),t(),e(312,`
              `),i(313,"div",8),e(314,`
                `),i(315,"div",2),e(316,`
                  `),i(317,"label",29),e(318,"Estimated Project Duration (In months):"),t(),e(319,`
                  `),i(320,"div",12),e(321),t(),e(322,`
                `),t(),e(323,`
              `),t(),e(324,`
              `),i(325,"div",8),e(326,`
                `),i(327,"div",2),e(328,`
                  `),i(329,"label",29),e(330,"Estimated Project Construction Cost (In USD):"),t(),e(331,`
                  `),i(332,"div",12),e(333),Be(334,"currency"),t(),e(335,`
                `),t(),e(336,`
              `),t(),e(337,`
              `),i(338,"div",8),e(339,`
                `),i(340,"div",2),e(341,`
                  `),i(342,"label",29),e(343,"Commitment to comply with development codes and guidelines:"),t(),e(344,`
                  `),i(345,"div",12),e(346),t(),e(347,`
                `),t(),e(348,`
              `),t(),e(349,`
            `),t(),e(350,`
          `),t(),e(351,`

          `),i(352,"div",30),e(353,`
            `),i(354,"button",31),e(355,"Cancel"),t(),e(356,`
            `),i(357,"a",32),e(358,"Process"),t(),e(359,`
          `),t(),e(360,`

        `),t(),e(361,`

      `),t(),e(362,`
    `),t(),e(363,`
  `),t(),e(364,`
`),t()),n&2&&(m("ngIf",r.mProgress()),a(9),m("formGroup",r.itemForm),a(17),m("ngIf",r.item.investor),a(11),m("ngIf",r.item.type),a(22),v(r.item.project_brief),a(11),m("innerHTML",r.item.project_purpose,De),a(21),m("ngIf",r.item.investor),a(12),m("ngForOf",r.item.land_use_plans),a(12),v(r.item.has_variations),a(4),m("ngIf",r.item.variation_justification_statement),a(9),m("ngIf",r.item.context_analysis),a(21),m("ngIf",r.item.concept_plan),a(11),m("ngIf",r.item.geotechnical_report),a(11),m("ngIf",r.item.topographical_survey),a(11),m("ngIf",r.item.topographical_survey_cad),a(24),m("ngIf",r.item.parking_strategy),a(11),m("ngIf",r.item.traffic_management_plan),a(21),m("ngIf",r.item.estimated_utility_demand_requirements),a(23),m("innerHTML",r.mAppContextService.safeHtml(r.item.project_sustainability_brief),De),a(13),v(r.item.green_certification==null?null:r.item.green_certification.name),a(4),m("ngIf",r.item.green_certification_id===4),a(9),m("ngIf",r.item.sustainability_report),a(22),v(r.item.require_variations),a(12),v(r.item.estimated_project_duration),a(12),v(He(334,28,r.item.estimated_project_construction_cost,"USD","symbol","1.2-2")),a(13),v(r.item.commitment_to_comply_with_development_codes_and_guidelines),a(11),m("routerLink",Te("/construction-permits/process/",r.item.id)))},dependencies:[Y,B,J,W,K,se,X,pe,_e,Z,Q,$,ze],encapsulation:2})}};var Yt=o=>({"is-invalid":o});function Il(o,l){o&1&&u(0,"app-progress")}function Tl(o,l){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.alias)}}function Pl(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wl(o,l){if(o&1&&(i(0,"div",16),d(1,Pl,2,0,"div",0),t()),o&2){let n,r=_();a(),m("ngIf",(n=r.itemForm.get("status_id"))==null||n.errors==null?null:n.errors.required)}}function ql(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ml(o,l){if(o&1&&(i(0,"div",16),d(1,ql,2,0,"div",0),t()),o&2){let n,r=_();a(),m("ngIf",(n=r.itemForm.get("remarks").errors)==null?null:n.required)}}var rt=class o{constructor(l,n,r,p,s,h){this.mToastrService=l;this.mConstructionPermitService=n;this.mAppContextService=r;this.router=p;this.fb=s;this.route=h;this.mProgress=I(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({status_id:["",f.required],remarks:["",f.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=I(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.getNextPreviousStatus(),this.mProgress=I(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress=I(!1)}})}onSubmit(l){let n={id:this.id,status_id:l.status_id,remarks:l.remarks};this.mProgress=I(!0),this.mConstructionPermitService.processItemPlanner(n).subscribe({next:r=>{r.status==="success"?(this.mToastrService.success(r.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=I(!1)):(this.mToastrService.error(r.message),this.router.navigateByUrl("/construction-permits/variations/"+this.id),this.mProgress=I(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=I(!1)}})}getNextPreviousStatus(){this.mProgress=I(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:l=>{l&&(this.mNextPreviousStatuses=l,this.mProgress=I(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress=I(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(y(G),y(H),y(O),y(de),y(fe),y(me))}}static{this.\u0275cmp=U({type:o,selectors:[["app-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(n,r){if(n&1&&(d(0,Il,1,0,"app-progress",0),i(1,"div")(2,"form",1),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,Tl,2,3,"option",8),t(),d(12,wl,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),t(),u(17,"ckeditor",11),d(18,Ml,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),n&2){let p,s;m("ngIf",r.mProgress()),a(2),m("formGroup",r.itemForm),a(6),m("ngClass",x(10,Yt,((p=r.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("status_id"))==null?null:p.dirty)||((p=r.itemForm.get("status_id"))==null?null:p.touched)))),a(3),m("ngForOf",r.mNextPreviousStatuses),a(),m("ngIf",((s=r.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=r.itemForm.get("status_id"))==null?null:s.dirty)||((s=r.itemForm.get("status_id"))==null?null:s.touched))),a(5),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",x(12,Yt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),a(),m("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),a(4),m("disabled",r.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,Z,Ee,Fe,Ce,ce,Q,$,ue,ye],encapsulation:2})}};var Jt=o=>({"is-invalid":o});function kl(o,l){o&1&&u(0,"app-progress")}function jl(o,l){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let n=l.$implicit;m("value",F(n.id)),a(),v(n.alias)}}function Al(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vl(o,l){if(o&1&&(i(0,"div",16),d(1,Al,2,0,"div",0),t()),o&2){let n,r=_();a(),m("ngIf",(n=r.itemForm.get("status_id"))==null||n.errors==null?null:n.errors.required)}}function Rl(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Dl(o,l){if(o&1&&(i(0,"div",16),d(1,Rl,2,0,"div",0),t()),o&2){let n,r=_();a(),m("ngIf",(n=r.itemForm.get("remarks").errors)==null?null:n.required)}}var ot=class o{constructor(l,n,r,p,s,h){this.mToastrService=l;this.mConstructionPermitService=n;this.mAppContextService=r;this.router=p;this.fb=s;this.route=h;this.mProgress=I(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({status_id:["",f.required],remarks:["",f.nullValidator]})}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getItem()}getItem(){this.mProgress=I(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.getNextPreviousStatus(),this.mProgress=I(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress=I(!1)}})}onSubmit(l){let n={id:this.id,status_id:l.status_id,remarks:l.remarks};this.mProgress=I(!0),this.mConstructionPermitService.cmItemPlanner(n).subscribe({next:r=>{this.mToastrService.success(r.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=I(!1)},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=I(!1)}})}getNextPreviousStatus(){this.mProgress=I(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:l=>{l&&(this.mNextPreviousStatuses=l,this.mProgress=I(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress=I(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(y(G),y(H),y(O),y(de),y(fe),y(me))}}static{this.\u0275cmp=U({type:o,selectors:[["app-cm-approval"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(n,r){if(n&1&&(d(0,kl,1,0,"app-progress",0),i(1,"div")(2,"form",1),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,jl,2,3,"option",8),t(),d(12,Vl,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),t(),u(17,"ckeditor",11),d(18,Dl,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),n&2){let p,s;m("ngIf",r.mProgress()),a(2),m("formGroup",r.itemForm),a(6),m("ngClass",x(10,Jt,((p=r.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("status_id"))==null?null:p.dirty)||((p=r.itemForm.get("status_id"))==null?null:p.touched)))),a(3),m("ngForOf",r.mNextPreviousStatuses),a(),m("ngIf",((s=r.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=r.itemForm.get("status_id"))==null?null:s.dirty)||((s=r.itemForm.get("status_id"))==null?null:s.touched))),a(5),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig)("ngClass",x(12,Jt,r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched))),a(),m("ngIf",r.itemForm.get("remarks").invalid&&(r.itemForm.get("remarks").dirty||r.itemForm.get("remarks").touched)),a(4),m("disabled",r.itemForm.invalid)}},dependencies:[ae,Y,B,J,W,K,Z,Ee,Fe,Ce,ce,Q,$,ue,ye],encapsulation:2})}};var Kt=()=>[1],Ll=()=>[10],Ul=()=>[17];function Bl(o,l){o&1&&u(0,"app-progress")}function Gl(o,l){if(o&1&&(i(0,"div",6),e(1,`
              `),i(2,"label",9),e(3,"Company:"),t(),e(4,`
              `),i(5,"div",8),e(6),t(),e(7,`
            `),t()),o&2){let n=_();a(6),v(n.item.investor==null?null:n.item.investor.name)}}function Wl(o,l){o&1&&(i(0,"div"),e(1,`
              `),u(2,"app-review"),e(3,`
            `),t())}function Hl(o,l){o&1&&(i(0,"div"),e(1,`
              `),u(2,"app-cm-approval"),e(3,`
            `),t())}var lt=class o{constructor(l,n,r,p){this.mConstructionPermitService=l;this.mAppContextService=n;this.mToastrService=r;this.route=p;this.item={};this.mProgress=I(!1)}ngOnInit(){this.route.paramMap.subscribe(l=>{this.id=l.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(n){return new(n||o)(y(H),y(O),y(G),y(me))}}static{this.\u0275cmp=U({type:o,selectors:[["app-process"]],standalone:!1,decls:44,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],["for","investor_id",1,"col-form-label","required"]],template:function(n,r){n&1&&(d(0,Bl,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div",3),e(10,`
          `),i(11,"div",4),e(12,`
            `),d(13,Gl,8,1,"div",5),e(14,`
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
            `),d(34,Wl,4,0,"div",0),e(35,`
            `),e(36,`
            `),d(37,Hl,4,0,"div",0),e(38,`
          `),t(),e(39,`
        `),t(),e(40,`

      `),t(),e(41,`
    `),t(),e(42,`
  `),t(),e(43,`
`),t()),n&2&&(m("ngIf",r.mProgress()),a(13),m("ngIf",r.item.investor),a(11),v(r.item.project_brief),a(10),m("ngIf",(r.item==null?null:r.item.status_id)==3&&(r.mAppContextService.hasRoles(ve(5,Kt))||r.mAppContextService.hasRoles(ve(6,Ll)))),a(3),m("ngIf",(r.item==null?null:r.item.status_id)==4&&(r.mAppContextService.hasRoles(ve(7,Kt))||r.mAppContextService.hasRoles(ve(8,Ul)))))},dependencies:[B,W,se,X,pe,_e,rt,ot],encapsulation:2})}};var _t=o=>({"is-invalid":o});function zl(o,l){o&1&&u(0,"app-progress")}function Yl(o,l){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let n=_();a(),v(n.item.investor==null?null:n.item.investor.name)}}function Jl(o,l){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let n=_();a(),v(n.item.type==null?null:n.item.type.name)}}function Kl(o,l){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let n=_(2);a(),v(n.item.variation_status==null?null:n.item.variation_status.name)}}function Xl(o,l){if(o&1&&(i(0,"div",7),e(1,`
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
                    `),d(72,Kl,2,1,"div",10),e(73,`
                  `),t(),e(74,`
                `),t(),e(75,`
              `),t()),o&2){let n=l.$implicit,r=l.index,p=_();a(5),C("",r+1,". ",n.parcel==null?null:n.parcel.number),a(12),j(`
                        Acres: `,n.parcel==null?null:n.parcel.acres," "),a(2),C(`
                        Min/Max Floors: `,n.parcel==null?null:n.parcel.min_floors,"-",n.parcel==null?null:n.parcel.max_floors),a(2),C(`
                        Min/Max FAR: `,n.parcel==null?null:n.parcel.min_far,"-",n.parcel==null?null:n.parcel.max_far),a(2),C(`
                        Min/Max Floors: `,n.parcel==null?null:n.parcel.min_floors,"-",n.parcel==null?null:n.parcel.max_floors),a(2),C(`
                        Min/Max Floor Area: `,n.parcel==null?null:n.parcel.min_floor_area,"-",n.parcel==null?null:n.parcel.max_floor_area),a(2),j(`
                        Plot Coverage: `,n.parcel==null?null:n.parcel.plot_coverage,"% "),a(2),j(`
                        Use: `,n.parcel==null?null:n.parcel.description," "),a(16),j(`
                        Acres: `,n.acres," "),a(2),C(`
                        Min/Max Floors: `,n.min_floors,"-",n.max_floors),a(2),C(`
                        Min/Max FAR: `,n.min_far,"-",n.max_far),a(2),C(`
                        Min/Max Floors: `,n.min_number_of_floors,"-",n.max_number_of_floors),a(2),C(`
                        Min/Max Floor Area: `,n.min_floor_area,"-",n.max_floor_area),a(2),C(`
                        Plot Coverage (Proposed/Existing): `,n.percentage_of_site_covered_by_proposed_building,"-",n.percentage_of_site_covered_by_existing_building,"% "),a(2),j(`
                        Number of Units to be Developed: `,n.number_of_units_to_be_developed," "),a(2),j(`
                        Use: `,n.description," "),a(13),m("ngIf",p.item.variation_status)}}function Ql(o,l){if(o&1){let n=z();i(0,"div",34),e(1,`
                    `),i(2,"input",35),k("ngModelChange",function(p){R(n);let s=_(2);return N(s.item.variation_status.id,p)||(s.item.variation_status.id=p),D(p)}),t(),e(3,`
                    `),i(4,"label",36),e(5),t(),e(6,`
                  `),t()}if(o&2){let n=l.$implicit,r=_(2);a(2),m("value",n.id),M("ngModel",r.item.variation_status.id),a(3),j(" ",n.alias," ")}}function Zl(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $l(o,l){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,Zl,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("variation_status_id").errors)==null?null:n.required)}}function ea(o,l){if(o&1&&(i(0,"span")(1,"a",40),e(2,"File"),t()()),o&2){let n=_(3);a(),m("href",F(n.item.conditions_of_approval_url),le)}}function ta(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ia(o,l){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,ta,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(3);a(2),m("ngIf",(n=r.itemForm.get("conditions_of_approval").errors)==null?null:n.required)}}function na(o,l){if(o&1){let n=z();i(0,"div",11),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",38),e(5,"Conditions of Approval (Evidence):"),t(),e(6,`
                  `),d(7,ea,3,2,"span",0),e(8,`
                  `),i(9,"input",39),S("change",function(p){R(n);let s=_(2);return D(s.onConditionsOfApprovalEvidenceChange(p))}),t(),e(10,`
                  `),d(11,ia,4,1,"div",30),e(12,`
                `),t(),e(13,`
              `),t()}if(o&2){let n=_(2);a(7),m("ngIf",n.item.conditions_of_approval),a(2),m("ngClass",x(3,_t,n.itemForm.get("conditions_of_approval").invalid&&(n.itemForm.get("conditions_of_approval").dirty||n.itemForm.get("conditions_of_approval").touched))),a(2),m("ngIf",n.itemForm.get("conditions_of_approval").invalid&&(n.itemForm.get("conditions_of_approval").dirty||n.itemForm.get("conditions_of_approval").touched))}}function ra(o,l){if(o&1&&(i(0,"span")(1,"a",40),e(2,"File"),t()()),o&2){let n=_(3);a(),m("href",F(n.item.reasons_for_rejection_url),le)}}function oa(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function la(o,l){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,oa,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(3);a(2),m("ngIf",(n=r.itemForm.get("reasons_for_rejection").errors)==null?null:n.required)}}function aa(o,l){if(o&1){let n=z();i(0,"div",11),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",41),e(5,"Reasons for Rejection (Evidence):"),t(),e(6,`
                  `),d(7,ra,3,2,"span",0),e(8,`
                  `),i(9,"input",42),S("change",function(p){R(n);let s=_(2);return D(s.onReasonsForRejectionEvidenceChange(p))}),t(),e(10,`
                  `),d(11,la,4,1,"div",30),e(12,`
                `),t(),e(13,`
              `),t()}if(o&2){let n=_(2);a(7),m("ngIf",n.item.reasons_for_rejection),a(2),m("ngClass",x(3,_t,n.itemForm.get("reasons_for_rejection").invalid&&(n.itemForm.get("reasons_for_rejection").dirty||n.itemForm.get("reasons_for_rejection").touched))),a(2),m("ngIf",n.itemForm.get("reasons_for_rejection").invalid&&(n.itemForm.get("reasons_for_rejection").dirty||n.itemForm.get("reasons_for_rejection").touched))}}function ma(o,l){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function da(o,l){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,ma,2,0,"div",0),e(3,`
                  `),t()),o&2){let n,r=_(2);a(2),m("ngIf",(n=r.itemForm.get("variation_comments").errors)==null?null:n.required)}}function sa(o,l){if(o&1){let n=z();i(0,"div",7),e(1,`
              `),i(2,"div",11),e(3,`
                `),i(4,"div",27),e(5,`
                  `),i(6,"label",28),e(7,"Variations status:"),t(),e(8,`
                  `),e(9,`
                  `),e(10,`
                  `),d(11,Ql,7,3,"div",29),e(12,`
                  `),d(13,$l,4,1,"div",30),e(14,`
                `),t(),e(15,`
              `),t(),e(16,`
              `),d(17,na,14,5,"div",31),e(18,`
              `),d(19,aa,14,5,"div",31),e(20,`
              `),i(21,"div",11),e(22,`
                `),i(23,"div",27),e(24,`
                  `),i(25,"label",32),e(26,"Variation Comments:"),t(),e(27,`
                  `),i(28,"ckeditor",33),k("ngModelChange",function(p){R(n);let s=_();return N(s.item.variation_comments,p)||(s.item.variation_comments=p),D(p)}),t(),e(29,`
                  `),d(30,da,4,1,"div",30),e(31,`
                `),t(),e(32,`
              `),t(),e(33,`
            `),t()}if(o&2){let n=_();a(11),m("ngForOf",n.mConstructionPermitVariationStatuses),a(2),m("ngIf",n.itemForm.get("variation_status_id").invalid&&(n.itemForm.get("variation_status_id").dirty||n.itemForm.get("variation_status_id").touched)),a(4),m("ngIf",n.itemForm.get("variation_status_id").value==2),a(2),m("ngIf",n.itemForm.get("variation_status_id").value==3),a(9),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),M("ngModel",n.item.variation_comments),m("ngClass",x(9,_t,n.itemForm.get("variation_comments").invalid&&(n.itemForm.get("variation_comments").dirty||n.itemForm.get("variation_comments").touched))),a(2),m("ngIf",n.itemForm.get("variation_comments").invalid&&(n.itemForm.get("variation_comments").dirty||n.itemForm.get("variation_comments").touched))}}var at=class o{constructor(l,n,r,p,s,h){this.mConstructionPermitService=l;this.router=n;this.mToastrService=r;this.mAppContextService=p;this.fb=s;this.route=h;this.mProgress=I(!1);this.mEditor=ge;this.item={};this.itemForm=this.fb.group({variation_status_id:["",f.required],conditions_of_approval:["",f.nullValidator],reasons_for_rejection:["",f.nullValidator],variation_comments:["",f.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}onSubmit(l){let n=new FormData;n.append("variation_status_id",l.variation_status_id),n.append("variation_comments",l.variation_comments),this.conditions_of_approval_file?n.append("conditions_of_approval",this.conditions_of_approval_file,this.conditions_of_approval_file.name):n.append("conditions_of_approval",""),this.reasons_for_rejection_file?n.append("reasons_for_rejection",this.reasons_for_rejection_file,this.reasons_for_rejection_file.name):n.append("reasons_for_rejection",""),n.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.processItemVariations(this.id,n).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.processUnpaginatedItems().subscribe({next:l=>{l&&(this.mConstructionPermitVariationStatuses=l.data.construction_permit_variation_statuses,this.mProgress.set(!1))},error:l=>{this.mToastrService.error(l.error.message),this.mProgress.set(!1)}})}onConditionsOfApprovalEvidenceChange(l){if(l.target.value){let n=l.target.files[0];this.conditions_of_approval_file=n}}onReasonsForRejectionEvidenceChange(l){if(l.target.value){let n=l.target.files[0];this.reasons_for_rejection_file=n}}static{this.\u0275fac=function(n){return new(n||o)(y(H),y(de),y(G),y(O),y(fe),y(me))}}static{this.\u0275cmp=U({type:o,selectors:[["app-variation"]],standalone:!1,decls:100,vars:7,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"pb-2"],["class","row",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",1,"text-dark"],[1,"fw-bolder"],[1,"col-md-6","mb-3"],[1,"callout","callout-success","h-100"],[1,"text-success","fw-bold"],[1,"callout","callout-danger","h-100"],[1,"text-danger","fw-bold"],[1,"col-md-12","mt-2"],["for","context_analysis"],[1,"form-group","mb-3"],["for","variation_status_id",1,"col-form-label","required"],["class","form-check",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","variation_comments",1,"col-form-label","required"],["formControlName","variation_comments","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],[1,"form-check"],["type","radio","formControlName","variation_status_id",1,"form-check-input",3,"ngModelChange","value","ngModel"],[1,"form-check-label"],["role","alert",1,"invalid-feedback"],["for","conditions_of_approval",1,"col-form-label","required"],["formControlName","conditions_of_approval","type","file",1,"form-control",3,"change","ngClass"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","reasons_for_rejection",1,"col-form-label","required"],["formControlName","reasons_for_rejection","type","file",1,"form-control",3,"change","ngClass"]],template:function(n,r){n&1&&(d(0,zl,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,Yl,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,Jl,2,1,"div",10),e(38,`
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
              `),d(74,Xl,76,27,"div",14),e(75,`
            `),t(),e(76,`
          `),t(),e(77,`

          `),i(78,"fieldset",4),e(79,`
            `),i(80,"legend",5)(81,"h6",6),e(82,"PROCESS"),t()(),e(83,`
            `),d(84,sa,34,11,"div",15),e(85,`
          `),t(),e(86,`

          `),i(87,"div",16),e(88,`
            `),i(89,"button",17),e(90,"Cancel"),t(),e(91,`
            `),i(92,"button",18),e(93,"Submit"),t(),e(94,`
          `),t(),e(95,`

        `),t(),e(96,`

      `),t(),e(97,`
    `),t(),e(98,`
  `),t(),e(99,`
`),t()),n&2&&(m("ngIf",r.mProgress()),a(9),m("formGroup",r.itemForm),a(17),m("ngIf",r.item.investor),a(11),m("ngIf",r.item.type),a(22),v(r.item.project_brief),a(15),m("ngForOf",r.item.variations),a(10),m("ngIf",r.mConstructionPermitVariationStatuses&&r.mConstructionPermitVariationStatuses.length>0))},dependencies:[ae,Y,B,J,W,K,se,X,pe,_e,Z,he,Le,ce,Q,$,ue,ye],encapsulation:2})}};var pa=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Ze,data:{title:"Construction Permits / Masterplan Submission"}},{path:"create",component:$e,data:{title:"Construction Permits / Masterplan Submission / Create"}},{path:"edit/:id",component:it,data:{title:"Construction Permits / Masterplan Submission / Edit"}},{path:"show/:id",component:nt,data:{title:"Construction Permits / Masterplan Submission / Show"}},{path:"process/:id",component:lt,data:{title:"Construction Permits / Process"}},{path:"variations/:id",component:at,data:{title:"Construction Permits / Variations"}}],mt=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=We({type:o})}static{this.\u0275inj=Ge({imports:[Ye,st.forChild(pa),st]})}};var Xt=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=We({type:o})}static{this.\u0275inj=Ge({imports:[Ye,mt,Ot,Ft,Pt,X,Nt,kt,At,Et,Dt,jt,Bt,Ct,It,Ke,Je,Gt]})}};export{Xt as ConstructionPermitModule};
