import{a as Y,b as xe,c as Dt}from"./chunk-N23QNFFO.js";import{a as zt}from"./chunk-JYREPJ6U.js";import{b as He,c as he,d as c,e as ae,f as Z,g as At,h as Rt,i as $,j as ze,k as Ve,l as le,m as ee,n as Ce,o as Ee,p as Fe,q as me,s as Vt}from"./chunk-HGRQUFQJ.js";import{a as z,b as jt}from"./chunk-SJG5BJVG.js";import{b as ge,c as W,e as H}from"./chunk-FHELIIU2.js";import{Ba as m,Bc as Ge,Ca as i,Cb as te,Da as t,Db as ie,Ea as f,Eb as G,Fc as ue,Gb as vt,Gc as oe,Hb as gt,Hc as ht,Ib as Ue,Ic as Ct,M as Le,Mc as Et,Na as U,Nc as Ft,Oc as We,Pa as y,Pc as It,R,Ra as _,Rc as Tt,S as V,T as J,Tc as fe,U as ye,Ub as ne,Uc as ve,Wb as re,Wc as Pt,Xb as X,Ya as mt,_ as S,ab as e,bb as g,cb as D,cd as wt,db as T,dc as rt,dd as qt,e as Ht,eb as P,fa as Se,fb as w,ga as ce,gb as q,ha as l,hb as E,ib as je,kb as K,lb as v,mb as dt,nb as st,nd as Mt,oa as x,ob as pt,od as Nt,pa as O,pb as _t,pc as Re,pd as kt,qa as Be,qc as xt,rb as Oe,sb as ct,sc as yt,ta as d,tb as ut,ub as ft,wc as Q,xc as St,yc as bt}from"./chunk-RYSGXS5Z.js";var Ot=Ht(zt());var Yt=o=>({"is-invalid":o}),Jt=(o,a,r,n,s,p,b)=>({"chip-primary":o,"chip-secondary":a,"chip-success":r,"bg-danger":n,"chip-warning text-dark":s,"chip-info":p,"chip-dark":b}),Kt=(o,a,r,n,s,p)=>({"bg-secondary text-dark":o,"bg-danger":a,"bg-dark":r,"bg-info":n,"bg-primary text-dark":s,"bg-success":p}),Lt=()=>[1],ot=()=>[2],Xt=(o,a,r)=>({"bg-warning":o,"bg-success":a,"bg-danger":r}),Qt=(o,a)=>({active:o,disabled:a});function Zt(o,a){o&1&&f(0,"app-progress")}function $t(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ei(o,a){if(o&1&&(i(0,"div",16),e(1,`
                  `),d(2,$t,2,0,"div",1),e(3,`
                `),t()),o&2){let r=_();l(2),m("ngIf",r.search_term.errors==null?null:r.search_term.errors.required)}}function ti(o,a){if(o&1&&(i(0,"c-badge",34),e(1,`
                      `),i(2,"small"),e(3),t(),e(4,`
                    `),t()),o&2){let r=_().$implicit;m("ngClass",st(2,Xt,r.variation_status_id==1,r.variation_status_id==2,r.variation_status_id==3)),l(3),g(r.variation_status==null?null:r.variation_status.name)}}function ii(o,a){if(o&1&&(i(0,"li")(1,"a",35),J(),f(2,"svg",36),e(3," Edit"),t()()),o&2){let r=_().$implicit;l(),m("routerLink",je("/construction-permits/edit/",r.id))}}function ni(o,a){if(o&1&&(i(0,"li")(1,"a",35),J(),f(2,"svg",37),e(3," Process"),t()()),o&2){let r=_().$implicit;l(),m("routerLink",je("/construction-permits/process/",r.id))}}function ri(o,a){if(o&1&&(i(0,"li")(1,"a",35),J(),f(2,"svg",38),e(3," Variations"),t()()),o&2){let r=_().$implicit;l(),m("routerLink",je("/construction-permits/variations/",r.id))}}function oi(o,a){if(o&1){let r=U();i(0,"button",39),y("click",function(){R(r);let s=_().$implicit,p=_(2);return V(p.onDelete(s))}),J(),f(1,"svg",40),t()}}function ai(o,a){if(o&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),t(),e(4,`
                `),i(5,"td"),e(6),t(),e(7,`
                `),i(8,"td"),e(9),t(),e(10,`
                `),i(11,"td"),e(12),t(),e(13,`
                `),i(14,"td"),e(15,`
                  `),i(16,"small",22),e(17),t(),e(18,`
                `),t(),e(19,`
                `),i(20,"td"),e(21),t(),e(22,`
                `),e(23,`
                `),i(24,"td"),e(25,`
                  `),i(26,"button",23),e(27),d(28,ti,5,6,"c-badge",24),e(29,`
                  `),t(),e(30,`
                `),t(),e(31,`
                `),i(32,"td"),e(33),t(),e(34,`
                `),i(35,"td"),e(36,`
                  `),i(37,"span",25),e(38),t(),e(39,`
                `),t(),e(40,`
                `),i(41,"td"),e(42),Oe(43,"date"),t(),e(44,`
                `),i(45,"td"),e(46,`
                  `),i(47,"div",26),e(48,`
                    `),i(49,"a",27),J(),f(50,"svg",28),t(),e(51,`
                    `),e(52,`
                    `),ye(),i(53,"c-dropdown",29),e(54,`
                      `),i(55,"button",30),e(56,`
                        `),J(),f(57,"svg",31),e(58,`
                      `),t(),e(59,`
                      `),ye(),i(60,"ul",32),e(61,`
                        `),e(62,`
                        `),d(63,ii,4,2,"li",1),e(64,`
                        `),d(65,ni,4,2,"li",1),e(66,`
                        `),d(67,ri,4,2,"li",1),e(68,`
                      `),t(),e(69,`
                    `),t(),e(70,`
                    `),d(71,oi,2,0,"button",33),e(72,`
                  `),t(),e(73,`
                `),t(),e(74,`
              `),t()),o&2){let r=a.$implicit,n=a.index,s=_(2);l(3),D("",s.mPageFrom+n,"."),l(3),g(r.application_number),l(3),g(r.project_brief),l(3),g(r.investor.name),l(4),m("ngClass",_t(21,Jt,r.type_id==1,r.type_id==2,r.type_id==3,r.type_id==4,r.type_id==5,r.type_id==6,r.type_id==7)),l(),D(`
                    `,r.type==null?null:r.type.name,`
                  `),l(4),D("",r.estimated_project_duration," months"),l(6),D(`
                    `,r.has_variations,`
                    `),l(),m("ngIf",r.variation_status),l(5),g(r.consultant.name),l(4),m("ngClass",pt(29,Kt,r.status_id==1,r.status_id==2,r.status_id==3,r.status_id==4,r.status_id==5,r.status_id==6)),l(),D(`
                    `,r.status==null?null:r.status.name,`
                  `),l(4),g(ct(43,19,r.created_at)),l(7),m("routerLink",je("/construction-permits/show/",r.id)),l(14),m("ngIf",s.mAppContextService.hasRoles(K(36,Lt))||s.mAppContextService.hasRoles(K(37,ot))&&(r.status_id==1||r.status_id==2)),l(2),m("ngIf",!s.mAppContextService.hasRoles(K(38,ot))),l(2),m("ngIf",!s.mAppContextService.hasRoles(K(39,ot))&&r.has_variations=="yes"),l(4),m("ngIf",s.mAppContextService.hasRoles(K(40,Lt)))}}function li(o,a){if(o&1&&(i(0,"div",17),e(1,`
          `),i(2,"table",18),e(3,`
            `),i(4,"thead",19),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",20),e(9,"#"),t(),e(10,`
                `),i(11,"th",20),e(12,"Application No."),t(),e(13,`
                `),i(14,"th",20),e(15,"Project"),t(),e(16,`
                `),i(17,"th",20),e(18,"Investor"),t(),e(19,`
                `),i(20,"th",20),e(21,"Type"),t(),e(22,`
                `),i(23,"th",20),e(24,"Duration"),t(),e(25,`
                `),e(26,`
                `),i(27,"th",20),e(28,"Variations"),t(),e(29,`
                `),i(30,"th",20),e(31,"Consultant"),t(),e(32,`
                `),i(33,"th",20),e(34,"Status"),t(),e(35,`
                `),i(36,"th",20),e(37,"Created"),t(),e(38,`
                `),i(39,"th",20),e(40,"Action"),t(),e(41,`
              `),t(),e(42,`
            `),t(),e(43,`
            `),i(44,"tbody"),e(45,`
              `),d(46,ai,75,41,"tr",21),e(47,`
            `),t(),e(48,`
          `),t(),e(49,`
        `),t()),o&2){let r=_();l(46),m("ngForOf",r.mConstructionPermits)}}function mi(o,a){if(o&1){let r=U();i(0,"li",43),e(1,`
              `),i(2,"a",44),y("click",function(){let s=R(r).$implicit,p=_(2);return V(p.onChangePage(s.url))}),t(),e(3,`
            `),t()}if(o&2){let r=a.$implicit;m("ngClass",dt(2,Qt,r.active,!r.url)),l(2),m("innerHTML",r.label,Se)}}function di(o,a){if(o&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",41),e(3,`
            `),d(4,mi,4,5,"li",42),e(5,`
          `),t(),e(6,`
        `),t()),o&2){let r=_();l(4),m("ngForOf",r.links)}}function si(o,a){o&1&&(e(0,`
          `),i(1,"p",45),e(2,"No items"),t(),e(3,`
        `))}var Ye=class o{constructor(a,r,n){this.mConstructionPermitService=a;this.mToastrService=r;this.mAppContextService=n;this.mConstructionPermits={};this.links=[];this.mProgress=S(!1)}ngOnInit(){this.index(),this.search_term=new Rt("",c.required),this.itemForm=new At({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mConstructionPermitService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mConstructionPermitService.paginateItems(a).subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mConstructionPermits=r.data,this.links=r.links,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onDelete(a){Ot.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.application_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&(this.mProgress.set(!0),this.mConstructionPermitService.deleteItem(a).subscribe({next:s=>{s&&(this.mConstructionPermits=this.mConstructionPermits.filter(p=>p.id!==a.id),this.mToastrService.error(s.message),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.error(s.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(a).subscribe({next:r=>{r&&(this.mConstructionPermits=r.salutations,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(a).subscribe({next:r=>{r&&(this.mConstructionPermits=r.data,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(x(Y),x(H),x(W))}}static{this.\u0275cmp=O({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/construction-permits/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"chip","chip-sm",3,"ngClass"],["type","button",1,"btn","btn-sm","btn-outline-link","position-relative"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass",4,"ngIf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["cIcon","","name","cilApplicationsSettings",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(r,n){if(r&1&&(d(0,Zt,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),J(),f(15,"svg",7),e(16,` Add
            `),t(),e(17,`
          `),t(),e(18,`
          `),ye(),i(19,"div"),e(20,`
            `),i(21,"form",8),y("ngSubmit",function(){return n.onSearch(n.itemForm.value)}),e(22,`
              `),i(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),i(27,"div",11),e(28,`
                  `),i(29,"button",12),e(30,`
                    `),J(),f(31,"svg",13),e(32,`
                  `),t(),e(33,`
                `),t(),e(34,`
                `),d(35,ei,4,1,"div",14),e(36,`
              `),t(),e(37,`
            `),t(),e(38,`
          `),t(),e(39,`
        `),t(),e(40,`
      `),t(),e(41,`
      `),ye(),i(42,"c-card-body"),e(43,`

        `),d(44,li,50,1,"div",15),e(45,`

        `),d(46,di,7,1,"div",1),e(47,`

        `),d(48,si,4,0,"ng-template",null,0,ft),e(50,`

      `),t(),e(51,`
    `),t(),e(52,`
  `),t(),e(53,`
`),t()),r&2){let s=mt(49);m("ngIf",n.mProgress()),l(21),m("formGroup",n.itemForm),l(4),m("ngClass",v(7,Yt,n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched))),l(10),m("ngIf",n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched)),l(9),m("ngIf",n.mConstructionPermits.length>0)("ngIfElse",s),l(2),m("ngIf",n.links)}},dependencies:[te,ie,G,X,z,Q,ue,oe,ht,fe,ve,Nt,Mt,$,he,ae,Z,ee,le,Re,We,It,Et,Ft,Ge,vt],encapsulation:2})}};var h=o=>({"is-invalid":o});function pi(o,a){o&1&&f(0,"app-progress")}function _i(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",r.user.id),l(),g(r.user.name)}}function ci(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ui(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,ci,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("investor_id"))==null||r.errors==null?null:r.errors.required)}}function fi(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function vi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function gi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,vi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("type_id"))==null||r.errors==null?null:r.errors.required)}}function xi(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function yi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Si(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,yi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("professional_body_id"))==null||r.errors==null?null:r.errors.required)}}function bi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function hi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,bi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("membership_number"))==null||r.errors==null?null:r.errors.required)}}function Ci(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ei(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Ci,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("consultant_name"))==null||r.errors==null?null:r.errors.required)}}function Fi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ii(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Fi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("address"))==null||r.errors==null?null:r.errors.required)}}function Ti(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Pi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Ti,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("email"))==null||r.errors==null?null:r.errors.required)}}function wi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,wi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("nationality"))==null||r.errors==null?null:r.errors.required)}}function Mi(o,a){if(o&1){let r=U();i(0,"fieldset",4),e(1,`
            `),i(2,"legend",5)(3,"h6",6),e(4,"CONSULTANT INFORMATION"),t()(),e(5,`
            `),i(6,"div",7),e(7,`
              `),i(8,"div",8),e(9,`
                `),i(10,"div",9),e(11,`
                  `),i(12,"label",108),e(13,"Professional Body:"),t(),e(14,`
                  `),i(15,"select",109),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.professional_body_id,s)||(p.mProfile.professional_body_id=s),V(s)}),e(16,`
                    `),i(17,"option",12),e(18,"--- Select professional body ---"),t(),e(19,`
                    `),d(20,xi,2,3,"option",13),e(21,`
                  `),t(),e(22,`
                  `),d(23,Si,4,1,"div",14),e(24,`
                `),t(),e(25,`
              `),t(),e(26,`
              `),i(27,"div",8),e(28,`
                `),i(29,"div",9),e(30,`
                  `),i(31,"label",110),e(32,"Membership Number:"),t(),e(33,`
                  `),i(34,"input",111),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.membership_number,s)||(p.mProfile.membership_number=s),V(s)}),t(),e(35,`
                  `),d(36,hi,4,1,"div",14),e(37,`
                `),t(),e(38,`
              `),t(),e(39,`
              `),i(40,"div",40),e(41,`
                `),i(42,"div",9),e(43,`
                  `),i(44,"label",112),e(45,"Consultant Name:"),t(),e(46,`
                  `),i(47,"input",113),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.member_name,s)||(p.mProfile.member_name=s),V(s)}),t(),e(48,`
                  `),d(49,Ei,4,1,"div",14),e(50,`
                `),t(),e(51,`
              `),t(),e(52,`
              `),i(53,"div",40),e(54,`
                `),i(55,"div",9),e(56,`
                  `),i(57,"label",114),e(58,"Address:"),t(),e(59,`
                  `),i(60,"input",115),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.address,s)||(p.mProfile.address=s),V(s)}),t(),e(61,`
                  `),d(62,Ii,4,1,"div",14),e(63,`
                `),t(),e(64,`
              `),t(),e(65,`
              `),i(66,"div",40),e(67,`
                `),i(68,"div",9),e(69,`
                  `),i(70,"label",116),e(71,"Email:"),t(),e(72,`
                  `),i(73,"input",117),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.email,s)||(p.mProfile.email=s),V(s)}),t(),e(74,`
                  `),d(75,Pi,4,1,"div",14),e(76,`
                `),t(),e(77,`
              `),t(),e(78,`
              `),i(79,"div",40),e(80,`
                `),i(81,"div",9),e(82,`
                  `),i(83,"label",118),e(84,"Nationality:"),t(),e(85,`
                  `),i(86,"input",119),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.member_name,s)||(p.mProfile.member_name=s),V(s)}),t(),e(87,`
                  `),d(88,qi,4,1,"div",14),e(89,`
                `),t(),e(90,`
              `),t(),e(91,`
            `),t(),e(92,`
          `),t()}if(o&2){let r,n,s,p,b,M,F,N,k,I,j,A,u=_();l(15),P("ngModel",u.mProfile.professional_body_id),m("ngClass",v(19,h,((r=u.itemForm.get("professional_body_id"))==null?null:r.invalid)&&(((r=u.itemForm.get("professional_body_id"))==null?null:r.dirty)||((r=u.itemForm.get("professional_body_id"))==null?null:r.touched)))),l(5),m("ngForOf",u.mProfessionalBodies),l(3),m("ngIf",((n=u.itemForm.get("professional_body_id"))==null?null:n.invalid)&&(((n=u.itemForm.get("professional_body_id"))==null?null:n.dirty)||((n=u.itemForm.get("professional_body_id"))==null?null:n.touched))),l(11),P("ngModel",u.mProfile.membership_number),m("ngClass",v(21,h,((s=u.itemForm.get("membership_number"))==null?null:s.invalid)&&(((s=u.itemForm.get("membership_number"))==null?null:s.dirty)||((s=u.itemForm.get("membership_number"))==null?null:s.touched)))),l(2),m("ngIf",((p=u.itemForm.get("membership_number"))==null?null:p.invalid)&&(((p=u.itemForm.get("membership_number"))==null?null:p.dirty)||((p=u.itemForm.get("membership_number"))==null?null:p.touched))),l(11),P("ngModel",u.mProfile.member_name),m("ngClass",v(23,h,((b=u.itemForm.get("consultant_name"))==null?null:b.invalid)&&(((b=u.itemForm.get("consultant_name"))==null?null:b.dirty)||((b=u.itemForm.get("consultant_name"))==null?null:b.touched)))),l(2),m("ngIf",((M=u.itemForm.get("consultant_name"))==null?null:M.invalid)&&(((M=u.itemForm.get("consultant_name"))==null?null:M.dirty)||((M=u.itemForm.get("consultant_name"))==null?null:M.touched))),l(11),P("ngModel",u.mProfile.address),m("ngClass",v(25,h,((F=u.itemForm.get("address"))==null?null:F.invalid)&&(((F=u.itemForm.get("address"))==null?null:F.dirty)||((F=u.itemForm.get("address"))==null?null:F.touched)))),l(2),m("ngIf",((N=u.itemForm.get("address"))==null?null:N.invalid)&&(((N=u.itemForm.get("address"))==null?null:N.dirty)||((N=u.itemForm.get("address"))==null?null:N.touched))),l(11),P("ngModel",u.mProfile.email),m("ngClass",v(27,h,((k=u.itemForm.get("email"))==null?null:k.invalid)&&(((k=u.itemForm.get("email"))==null?null:k.dirty)||((k=u.itemForm.get("email"))==null?null:k.touched)))),l(2),m("ngIf",((I=u.itemForm.get("email"))==null?null:I.invalid)&&(((I=u.itemForm.get("email"))==null?null:I.dirty)||((I=u.itemForm.get("email"))==null?null:I.touched))),l(11),P("ngModel",u.mProfile.member_name),m("ngClass",v(29,h,((j=u.itemForm.get("nationality"))==null?null:j.invalid)&&(((j=u.itemForm.get("nationality"))==null?null:j.dirty)||((j=u.itemForm.get("nationality"))==null?null:j.touched)))),l(2),m("ngIf",((A=u.itemForm.get("nationality"))==null?null:A.invalid)&&(((A=u.itemForm.get("nationality"))==null?null:A.dirty)||((A=u.itemForm.get("nationality"))==null?null:A.touched)))}}function Ni(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ki(o,a){if(o&1&&(i(0,"div",107),e(1,`
                      `),d(2,Ni,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("project_brief"))==null||r.errors==null?null:r.errors.required)}}function ji(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ai(o,a){if(o&1&&(i(0,"div",107),e(1,`
                      `),d(2,ji,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("project_purpose"))==null||r.errors==null?null:r.errors.required)}}function Ri(o,a){if(o&1&&(i(0,"div",124),e(1,`
                      `),i(2,"div",125),e(3,`
                        `),i(4,"div",126),e(5,`
                          `),i(6,"div",127)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",128),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),f(15,"br"),e(16),f(17,"br"),e(18),f(19,"br"),e(20),f(21,"br"),e(22),f(23,"br"),e(24),f(25,"br"),e(26),f(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let r=a.$implicit;l(8),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(6),D(`
                              Acres: `,r.allocation_worksheet==null?null:r.allocation_worksheet.acres," "),l(2),T(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),T(`
                              Min/Max FAR: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_far,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_far),l(2),T(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),T(`
                              Min/Max Floor Area: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floor_area,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floor_area),l(2),D(`
                              Plot Coverage: `,r.allocation_worksheet==null?null:r.allocation_worksheet.plot_coverage,"% "),l(2),D(`
                              Use: `,r.allocation_worksheet==null?null:r.allocation_worksheet.description," ")}}function Vi(o,a){if(o&1&&(i(0,"div",120),e(1,`
                  `),i(2,"div",121),e(3,`
                    `),i(4,"small",122),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Ri,33,12,"div",123),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let r=_();l(10),m("ngForOf",r.mInvestorParcels)}}function Di(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.allocation_worksheet==null?null:r.allocation_worksheet.number)),l(),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number)}}function Li(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Bi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Li,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("parcel_number").errors)==null?null:r.required)}}function Oi(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Ui(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Ui,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("planned_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Wi(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Hi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Hi,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("primary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Yi(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Ji(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ki(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Ji,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("secondary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Xi(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Qi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Zi(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Qi,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("preferred_ground_floor_use_id"))==null||r.errors==null?null:r.errors.required)}}function $i(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function en(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,$i,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:r.required)}}function tn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function nn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,tn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:r.required)}}function rn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function on(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,rn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:r.required)}}function an(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ln(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,an,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("number_of_floors").errors)==null?null:r.required)}}function mn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function dn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,mn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("floor_to_floor_height").errors)==null?null:r.required)}}function sn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function pn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,sn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("floor_area").errors)==null?null:r.required)}}function _n(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function cn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,_n,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("far").errors)==null?null:r.required)}}function un(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,un,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("minimum_setback").errors)==null?null:r.required)}}function vn(o,a){if(o&1){let r=U();i(0,"tr"),e(1,`
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
                                    `),i(32,"button",130),y("click",function(){let s=R(r).$implicit,p=_();return V(p.removeItem(s))}),J(),f(33,"svg",131),e(34,"Remove"),t(),e(35,`
                                  `),t(),e(36,`
                                `),t()}if(o&2){let r=a.$implicit,n=a.index;l(3),D("",n+1,"."),l(3),g(r.parcel_number),l(4),g(r.floor_area),l(3),g(r.floor_to_floor_height),l(3),g(r.number_of_floors),l(3),g(r.percentage_of_site_covered_by_existing_building),l(3),g(r.percentage_of_site_covered_by_proposed_building),l(3),g(r.number_of_units_to_be_developed),l(3),g(r.minimum_setback)}}function gn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function xn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,gn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("has_variations").errors)==null?null:r.required)}}function yn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Sn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,yn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("variation_justification_statement"))==null||r.errors==null?null:r.errors.required)}}function bn(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",132),e(5,"Variation Justification Statement (State the variation e.g. Request to vary number of floors from 4 to 8):"),t(),e(6,`
                  `),f(7,"ckeditor",133),e(8,`
                  `),d(9,Sn,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()),o&2){let r,n,s=_();l(7),m("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig)("ngClass",v(4,h,((r=s.itemForm.get("variation_justification_statement"))==null?null:r.invalid)&&(((r=s.itemForm.get("variation_justification_statement"))==null?null:r.dirty)||((r=s.itemForm.get("variation_justification_statement"))==null?null:r.touched)))),l(2),m("ngIf",((n=s.itemForm.get("variation_justification_statement"))==null?null:n.invalid)&&(((n=s.itemForm.get("variation_justification_statement"))==null?null:n.dirty)||((n=s.itemForm.get("variation_justification_statement"))==null?null:n.touched)))}}function hn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Cn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,hn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("site_plan_and_analysis").errors)==null?null:r.required)}}function En(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Fn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,En,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("context_analysis").errors)==null?null:r.required)}}function In(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Tn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,In,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("concept_plan").errors)==null?null:r.required)}}function Pn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Pn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("geotechnical_report").errors)==null?null:r.required)}}function qn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Mn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,qn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey").errors)==null?null:r.required)}}function Nn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function kn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Nn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey_cad").errors)==null?null:r.required)}}function jn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function An(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,jn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("parking_strategy").errors)==null?null:r.required)}}function Rn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Rn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("traffic_management_plan").errors)==null?null:r.required)}}function Dn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ln(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Dn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:r.required)}}function Bn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function On(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Bn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("project_sustainability_brief").errors)==null?null:r.required)}}function Un(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Un,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("sustainability_report").errors)==null?null:r.required)}}function Wn(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Hn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Hn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("green_certification_id").errors)==null?null:r.required)}}function Yn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Jn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Yn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("other_green_certification").errors)==null?null:r.required)}}function Kn(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",134),e(5,"Specify Other:"),t(),e(6,`
                  `),f(7,"input",135),e(8,`
                  `),d(9,Jn,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()),o&2){let r=_();l(7),m("ngClass",v(2,h,r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))),l(2),m("ngIf",r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))}}function Xn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qn(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Xn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_duration").errors)==null?null:r.required)}}function Zn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $n(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Zn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_construction_cost").errors)==null?null:r.required)}}function er(o,a){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function tr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                  `),d(2,er,2,0,"div",0),e(3,`
                `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:r.requiredTrue)}}var Je=class o{constructor(a,r,n,s,p){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=s;this.fb=p;this.mInvestorParcels={};this.mProfile={};this.mProgress=S(!1);this.mParcelInfo={};this.mEditor=ge;this.mLandUsePlans=[];this.mHasVariation="no";this.itemForm=this.fb.group({investor_id:["",c.required],type_id:["",c.required],professional_body_id:["",c.nullValidator],membership_number:["",c.nullValidator],consultant_name:["",c.nullValidator],address:["",c.nullValidator],email:["",c.nullValidator],nationality:["",c.nullValidator],project_brief:["",c.required],project_purpose:["",c.required],has_variations:["no",c.required],variation_justification_statement:["",c.nullValidator],site_plan_and_analysis:["",c.nullValidator],context_analysis:["",c.nullValidator],concept_plan:["",c.nullValidator],geotechnical_report:["",c.nullValidator],topographical_survey:["",c.nullValidator],topographical_survey_cad:["",c.nullValidator],parking_strategy:["",c.nullValidator],traffic_management_plan:["",c.nullValidator],estimated_utility_demand_requirements:["",c.nullValidator],project_sustainability_brief:["",c.required],green_certification_id:["",c.required],other_green_certification:["",c.nullValidator],sustainability_report:["",c.nullValidator],estimated_project_duration:["",c.required],estimated_project_construction_cost:["",c.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,c.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",c.required],planned_land_use_id:["",c.required],primary_land_use_id:["",c.required],secondary_land_use_id:["",c.nullValidator],preferred_ground_floor_use_id:["",c.nullValidator],number_of_units_to_be_developed:["",c.required],percentage_of_site_covered_by_existing_building:["",c.required],percentage_of_site_covered_by_proposed_building:["",c.nullValidator],density:["",c.nullValidator],floor_area:["",c.nullValidator],far:["",c.nullValidator],minimum_setback:["",c.nullValidator],floor_to_floor_height:["",c.nullValidator],number_of_floors:["",c.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPermitTypes=a.data.permit_types,this.mParcelLandUseGroups=a.data.parcel_land_use_groups,this.mGreenCertifications=a.data.green_certifications,this.mProfile=a.data.profile,console.log(this.mProfile),this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=JSON.stringify(Object.assign({},this.mLandUsePlans)),n=new FormData;n.append("investor_id",a.investor_id),n.append("type_id",a.type_id),n.append("professional_body_id",a.professional_body_id),n.append("membership_number",a.membership_number),n.append("consultant_name",a.consultant_name),n.append("address",a.address),n.append("email",a.email),n.append("nationality",a.nationality),n.append("project_brief",a.project_brief),n.append("project_purpose",a.project_purpose),n.append("has_variations",this.mHasVariation),n.append("variation_justification_statement",a.variation_justification_statement),n.append("land_use_plans",r),n.append("project_sustainability_brief",a.project_sustainability_brief),n.append("green_certification_id",a.green_certification_id),n.append("other_green_certification",a.other_green_certification),n.append("estimated_project_duration",a.estimated_project_duration),n.append("estimated_project_construction_cost",a.estimated_project_construction_cost),n.append("commitment_to_comply_with_development_codes_and_guidelines",a.commitment_to_comply_with_development_codes_and_guidelines),n.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),n.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),n.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),n.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),n.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),n.append("topographical_survey_cad",this.topographical_survey_cad_file,this.topographical_survey_cad_file.name),n.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),n.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),n.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),n.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),n.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.createItem(n).subscribe({next:s=>{s&&(this.mToastrService.success(s.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.error(s.error.message),this.mProgress.set(!1)}})}onContextAnalysisChange(a){if(a.target.value){let r=a.target.files[0];this.context_analysis_file=r}}onSitePlanAndAnlysisChange(a){if(a.target.value){let r=a.target.files[0];this.site_plan_and_analysis_file=r}}onConceptPlanChange(a){if(a.target.value){let r=a.target.files[0];this.concept_plan_file=r}}onGeotechnicalReportChange(a){if(a.target.value){let r=a.target.files[0];this.geotechnical_report_file=r}}onTopographicalSurveyChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_file=r}}onTopographicalSurveyCadChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_cad_file=r}}onParkingStrategyChange(a){if(a.target.value){let r=a.target.files[0];this.parking_strategy_file=r}}onTrafficManagementPlanChange(a){if(a.target.value){let r=a.target.files[0];this.traffic_management_plan_file=r}}onEstimatedUtilityDemandRequirementsChange(a){if(a.target.value){let r=a.target.files[0];this.estimated_utility_demand_requirements_file=r}}onSustainabilityReportChange(a){if(a.target.value){let r=a.target.files[0];this.sustainability_report_file=r}}onInvestorChange(a){if(a.target.value){let r=a.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(r).subscribe({next:n=>{n&&(this.mInvestorParcels=n,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}}onCheckVariations(a){let r;this.mInvestorParcels.some(L=>{r=L.allocation_worksheet});let n=L=>Number(String(L).replace(/,/g,"")),s=Number(r.plot_coverage),p=Number(a.percentage_of_site_covered_by_existing_building)+Number(a.percentage_of_site_covered_by_proposed_building),b=Number(r.min_floors),M=Number(r.max_floors),F=Number(a.number_of_floors),N=n(r.min_floor_area),k=n(r.max_floor_area),I=Number(a.floor_area),j=Number(r.min_far),A=Number(r.max_far),u=Number(a.far),B=F>=b&&F<=M&&I>=N&&I<=k&&u>=j&&u<=A&&p<=s;console.log(B),B===!1&&this.mHasVariation==="no"?this.mHasVariation="yes":this.mHasVariation="no",this.itemForm.get("has_variations")?.setValue(this.mHasVariation)}addItem(){let a=this.mItemForm.value;this.mLandUsePlans.some(n=>n.parcel_number===a.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(a),this.onCheckVariations(a),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(a){this.mLandUsePlans.forEach((r,n)=>{r===a&&this.mLandUsePlans.splice(n,1)})}static{this.\u0275fac=function(r){return new(r||o)(x(Y),x(re),x(H),x(W),x(me))}}static{this.\u0275cmp=O({type:o,selectors:[["app-create"]],standalone:!1,decls:695,vars:148,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"change","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["class","border p-2 mb-3",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control",3,"ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"editor","config","ngClass"],["class","alert alert-success",4,"ngIf"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],[1,"col-md-6"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","number_of_floors",1,"col-form-label","required"],["formControlName","number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","floor_to_floor_height",1,"col-form-label","required"],["formControlName","floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","floor_area",1,"col-form-label","required"],["formControlName","floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no","readonly","",1,"form-check-input"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes","readonly","",1,"form-check-input"],["for","variation_yes",1,"form-check-label"],["class","col-md-12",4,"ngIf"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey_cad",1,"col-form-label","required"],["formControlName","topographical_survey_cad","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"editor","config","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngClass"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","variation_justification_statement",1,"col-form-label","required"],["formControlName","variation_justification_statement","type","text",1,"form-control1",3,"editor","config","ngClass"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngClass"]],template:function(r,n){if(r&1&&(d(0,pi,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`


        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",9),e(22,`
                  `),i(23,"label",10),e(24,"Company:"),t(),e(25,`
                  `),i(26,"select",11),y("change",function(p){return n.onInvestorChange(p)}),e(27,`
                    `),i(28,"option",12),e(29,"--- Select investor ---"),t(),e(30,`
                    `),d(31,_i,2,2,"option",13),e(32,`
                  `),t(),e(33,`
                  `),d(34,ui,4,1,"div",14),e(35,`
                `),t(),e(36,`
              `),t(),e(37,`
              `),i(38,"div",8),e(39,`
                `),i(40,"div",9),e(41,`
                  `),i(42,"label",15),e(43,"Nature of Application:"),t(),e(44,`
                  `),i(45,"select",16),e(46,`
                    `),i(47,"option",12),e(48,"--- Select plan submission type ---"),t(),e(49,`
                    `),d(50,fi,2,3,"option",13),e(51,`
                  `),t(),e(52,`
                  `),d(53,gi,4,1,"div",14),e(54,`
                `),t(),e(55,`
              `),t(),e(56,`
            `),t(),e(57,`
          `),t(),e(58,`
          `),d(59,Mi,93,31,"fieldset",17),e(60,`
          `),i(61,"fieldset",4),e(62,`
            `),i(63,"legend",5)(64,"h6",6),e(65,"PROJECT BRIEF AND PURPOSE"),t()(),e(66,`
              `),i(67,"div",7),e(68,`
                `),i(69,"div",8),e(70,`
                  `),i(71,"div",9),e(72,`
                    `),i(73,"label",18),e(74,"Project Brief (Description of the overall project concept and how it fits in the Technopolis Development Authority Vision):"),t(),e(75,`
                    `),f(76,"textarea",19),e(77,`
                    `),e(78,`
                    `),d(79,ki,4,1,"div",14),e(80,`
                  `),t(),e(81,`
                `),t(),e(82,`
                `),i(83,"div",8),e(84,`
                  `),i(85,"div",9),e(86,`
                    `),i(87,"label",20),e(88,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(89,`
                    `),f(90,"ckeditor",21),e(91,`
                    `),d(92,Ai,4,1,"div",14),e(93,`
                  `),t(),e(94,`
                `),t(),e(95,`
              `),t(),e(96,`
          `),t(),e(97,`
          `),i(98,"fieldset",4),e(99,`
            `),i(100,"legend",5)(101,"h6",6),e(102,"PARCEL & CONTEXT ANALYSIS"),t()(),e(103,`
            `),i(104,"div",7),e(105,`
              `),i(106,"div",8),e(107,`
                `),d(108,Vi,13,1,"div",22),e(109,`
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
                            `),d(135,Di,2,3,"option",13),e(136,`
                          `),t(),e(137,`
                          `),d(138,Bi,4,1,"div",14),e(139,`
                        `),t(),e(140,`
                      `),t(),e(141,`
                      `),e(142,`
                      `),i(143,"div",8),e(144,`
                        `),i(145,"div",9),e(146,`
                          `),i(147,"label",29),e(148,"Planned Land Use:"),t(),e(149,`
                          `),i(150,"select",30),e(151,`
                            `),i(152,"option",12),e(153,"--- Select planned land use ---"),t(),e(154,`
                            `),d(155,Oi,2,3,"option",13),e(156,`
                          `),t(),e(157,`
                          `),d(158,Gi,4,1,"div",14),e(159,`
                        `),t(),e(160,`
                      `),t(),e(161,`
                      `),i(162,"div",31),e(163,`
                        `),i(164,"div",9),e(165,`
                          `),i(166,"label",32),e(167,"Primary Land Use:"),t(),e(168,`
                          `),i(169,"select",33),e(170,`
                            `),i(171,"option",12),e(172,"--- Select primary land use ---"),t(),e(173,`
                            `),d(174,Wi,2,3,"option",13),e(175,`
                          `),t(),e(176,`
                          `),d(177,zi,4,1,"div",14),e(178,`
                        `),t(),e(179,`
                      `),t(),e(180,`
                      `),i(181,"div",31),e(182,`
                        `),i(183,"div",9),e(184,`
                          `),i(185,"label",34),e(186,"Secondary Land Use:"),t(),e(187,`
                          `),i(188,"select",35),e(189,`
                            `),i(190,"option",12),e(191,"--- Select secondary land use ---"),t(),e(192,`
                            `),d(193,Yi,2,3,"option",13),e(194,`
                          `),t(),e(195,`
                          `),d(196,Ki,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",31),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",36),e(205,"Preferred Ground Floor Use:"),t(),e(206,`
                          `),i(207,"select",37),e(208,`
                            `),i(209,"option",12),e(210,"--- Select ground floor use ---"),t(),e(211,`
                            `),d(212,Xi,2,3,"option",13),e(213,`
                          `),t(),e(214,`
                          `),d(215,Zi,4,1,"div",14),e(216,`
                        `),t(),e(217,`
                      `),t(),e(218,`
                      `),i(219,"div",8),e(220,`
                        `),i(221,"div",9),e(222,`
                          `),i(223,"label",38),e(224,"Number of Units to be Developed:"),t(),e(225,`
                          `),f(226,"input",39),e(227,`
                          `),d(228,en,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",40),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",41),e(237,"Percentage of site covered by existing building(s):"),t(),e(238,`
                          `),f(239,"input",42),e(240,`
                          `),d(241,nn,4,1,"div",14),e(242,`
                        `),t(),e(243,`
                      `),t(),e(244,`
                      `),i(245,"div",40),e(246,`
                        `),i(247,"div",9),e(248,`
                          `),i(249,"label",43),e(250,"Percentage of site covered by proposed building(s):"),t(),e(251,`
                          `),f(252,"input",44),e(253,`
                          `),d(254,on,4,1,"div",14),e(255,`
                        `),t(),e(256,`
                      `),t(),e(257,`
                      `),i(258,"div",40),e(259,`
                        `),i(260,"div",9),e(261,`
                          `),i(262,"label",45),e(263,"Number of Floors:"),t(),e(264,`
                          `),f(265,"input",46),e(266,`
                          `),d(267,ln,4,1,"div",14),e(268,`
                        `),t(),e(269,`
                      `),t(),e(270,`
                      `),i(271,"div",40),e(272,`
                        `),i(273,"div",9),e(274,`
                          `),i(275,"label",47),e(276,"Floor-to-Floor Height:"),t(),e(277,`
                          `),f(278,"input",48),e(279,`
                          `),d(280,dn,4,1,"div",14),e(281,`
                        `),t(),e(282,`
                      `),t(),e(283,`
                      `),i(284,"div",40),e(285,`
                        `),i(286,"div",9),e(287,`
                          `),i(288,"label",49),e(289,"Floor Area:"),t(),e(290,`
                          `),f(291,"input",50),e(292,`
                          `),d(293,pn,4,1,"div",14),e(294,`
                        `),t(),e(295,`
                      `),t(),e(296,`
                      `),i(297,"div",40),e(298,`
                        `),i(299,"div",9),e(300,`
                          `),i(301,"label",51),e(302,"Floor Area Ratio (FAR):"),t(),e(303,`
                          `),f(304,"input",52),e(305,`
                          `),d(306,cn,4,1,"div",14),e(307,`
                        `),t(),e(308,`
                      `),t(),e(309,`
                      `),i(310,"div",8),e(311,`
                        `),i(312,"div",9),e(313,`
                          `),i(314,"label",53),e(315,"Minimum Setback:"),t(),e(316,`
                          `),f(317,"input",54),e(318,`
                          `),d(319,fn,4,1,"div",14),e(320,`
                        `),t(),e(321,`
                      `),t(),e(322,`
                    `),t(),e(323,`
                  `),t(),e(324,`
                  `),i(325,"div"),e(326,`
                    `),i(327,"div",55),e(328,`
                      `),i(329,"button",56),y("click",function(){return n.resetItemsForm()}),J(),f(330,"svg",57),e(331,"Reset"),t(),e(332,`
                      `),ye(),i(333,"button",58),y("click",function(){return n.addItem()}),J(),f(334,"svg",59),e(335,"Add"),t(),e(336,`
                    `),t(),e(337,`
                    `),ye(),i(338,"div",60),e(339,`
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
                                `),d(383,vn,37,9,"tr",63),e(384,`
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
                    `),f(401,"input",66),e(402,`
                    `),i(403,"label",67),e(404," No"),t(),e(405,`
                  `),t(),e(406,`
                  `),i(407,"div",65),e(408,`
                    `),f(409,"input",68),e(410,`
                    `),i(411,"label",69),e(412," Yes"),t(),e(413,`
                  `),t(),e(414,`
                  `),d(415,xn,4,1,"div",14),e(416,`
                `),t(),e(417,`
              `),t(),e(418,`
              `),d(419,bn,12,6,"div",70),e(420,`
              `),i(421,"div",8),e(422,`
                `),i(423,"div",9),e(424,`
                  `),i(425,"label",71),e(426,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(427,`
                  `),i(428,"input",72),y("change",function(p){return n.onSitePlanAndAnlysisChange(p)}),t(),e(429,`
                  `),d(430,Cn,4,1,"div",14),e(431,`
                `),t(),e(432,`
              `),t(),e(433,`
              `),i(434,"div",8),e(435,`
                `),i(436,"div",9),e(437,`
                  `),i(438,"label",73),e(439,"Context Analysis (500m radius context analysis):"),t(),e(440,`
                  `),i(441,"input",74),y("change",function(p){return n.onContextAnalysisChange(p)}),t(),e(442,`
                  `),d(443,Fn,4,1,"div",14),e(444,`
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
                  `),i(464,"input",76),y("change",function(p){return n.onConceptPlanChange(p)}),t(),e(465,`
                  `),d(466,Tn,4,1,"div",14),e(467,`
                `),t(),e(468,`
              `),t(),e(469,`
              `),i(470,"div",40),e(471,`
                `),i(472,"div",9),e(473,`
                  `),i(474,"label",77),e(475,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(476,`
                  `),i(477,"input",78),y("change",function(p){return n.onGeotechnicalReportChange(p)}),t(),e(478,`
                  `),d(479,wn,4,1,"div",14),e(480,`
                `),t(),e(481,`
              `),t(),e(482,`
              `),i(483,"div",40),e(484,`
                `),i(485,"div",9),e(486,`
                  `),i(487,"label",79),e(488,"Topographical Survey (PDF):"),t(),e(489,`
                  `),i(490,"input",80),y("change",function(p){return n.onTopographicalSurveyChange(p)}),t(),e(491,`
                  `),d(492,Mn,4,1,"div",14),e(493,`
                `),t(),e(494,`
              `),t(),e(495,`
              `),i(496,"div",40),e(497,`
                `),i(498,"div",9),e(499,`
                  `),i(500,"label",81),e(501,"Topographical Survey (CAD):"),t(),e(502,`
                  `),i(503,"input",82),y("change",function(p){return n.onTopographicalSurveyCadChange(p)}),t(),e(504,`
                  `),d(505,kn,4,1,"div",14),e(506,`
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
                  `),i(529,"input",85),y("change",function(p){return n.onParkingStrategyChange(p)}),t(),e(530,`
                  `),d(531,An,4,1,"div",14),e(532,`
                `),t(),e(533,`
              `),t(),e(534,`
              `),i(535,"div",8),e(536,`
                `),i(537,"div",9),e(538,`
                  `),i(539,"label",86),e(540,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(541,`
                  `),i(542,"input",87),y("change",function(p){return n.onTrafficManagementPlanChange(p)}),t(),e(543,`
                  `),d(544,Vn,4,1,"div",14),e(545,`
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
                  `),i(565,"input",89),y("change",function(p){return n.onEstimatedUtilityDemandRequirementsChange(p)}),t(),e(566,`
                  `),d(567,Ln,4,1,"div",14),e(568,`
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
                  `),f(588,"ckeditor",91),e(589,`
                  `),d(590,On,4,1,"div",14),e(591,`
                `),t(),e(592,`
              `),t(),e(593,`
              `),i(594,"div",8),e(595,`
                `),i(596,"div",9),e(597,`
                  `),i(598,"label",92),e(599,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(600,`
                  `),i(601,"input",93),y("change",function(p){return n.onSustainabilityReportChange(p)}),t(),e(602,`
                  `),d(603,Gn,4,1,"div",14),e(604,`
                `),t(),e(605,`
              `),t(),e(606,`
              `),i(607,"div",8),e(608,`
                `),i(609,"div",9),e(610,`
                  `),i(611,"label",94),e(612,"Green Certifications:"),t(),e(613,`
                  `),i(614,"select",95),e(615,`
                    `),i(616,"option",12),e(617,"--- Select certification ---"),t(),e(618,`
                    `),d(619,Wn,2,3,"option",13),e(620,`
                  `),t(),e(621,`
                  `),d(622,zn,4,1,"div",14),e(623,`
                `),t(),e(624,`
              `),t(),e(625,`
              `),d(626,Kn,12,4,"div",70),e(627,`
            `),t(),e(628,`
          `),t(),e(629,`
          `),i(630,"fieldset",4),e(631,`
            `),i(632,"legend",5)(633,"h6",6),e(634,"CONCLUSIONS"),t()(),e(635,`
            `),i(636,"div",7),e(637,`
              `),i(638,"div",8),e(639,`
                `),i(640,"div",9),e(641,`
                  `),i(642,"label",96),e(643,"Estimated Project Duration (In months):"),t(),e(644,`
                  `),f(645,"input",97),e(646,`
                  `),d(647,Qn,4,1,"div",14),e(648,`
                `),t(),e(649,`
              `),t(),e(650,`
              `),i(651,"div",8),e(652,`
                `),i(653,"div",9),e(654,`
                  `),i(655,"label",98),e(656,"Estimated Project Construction Cost (In USD):"),t(),e(657,`
                  `),f(658,"input",99),e(659,`
                  `),d(660,$n,4,1,"div",14),e(661,`
                `),t(),e(662,`
              `),t(),e(663,`
              `),i(664,"div",100),e(665,`
                `),i(666,"div",65),e(667,`
                  `),f(668,"input",101),e(669,`
                  `),i(670,"label",102),e(671,`
                    By checking this, confirms the investor's commitment to comply with the `),i(672,"a",84),e(673,"Technopolis Development Authority Development Codes and Guidelines"),t(),e(674,`
                  `),t(),e(675,`
                `),t(),e(676,`
                `),d(677,tr,4,1,"div",14),e(678,`
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
`),t()),r&2){let s,p,b,M,F,N,k,I,j,A,u,B,L,de,se,pe,_e;m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngClass",v(86,h,((s=n.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("investor_id"))==null?null:s.dirty)||((s=n.itemForm.get("investor_id"))==null?null:s.touched)))),l(5),m("ngForOf",n.mInvestors),l(3),m("ngIf",((p=n.itemForm.get("investor_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("investor_id"))==null?null:p.dirty)||((p=n.itemForm.get("investor_id"))==null?null:p.touched))),l(11),m("ngClass",v(88,h,((b=n.itemForm.get("type_id"))==null?null:b.invalid)&&(((b=n.itemForm.get("type_id"))==null?null:b.dirty)||((b=n.itemForm.get("type_id"))==null?null:b.touched)))),l(5),m("ngForOf",n.mPermitTypes),l(3),m("ngIf",((M=n.itemForm.get("type_id"))==null?null:M.invalid)&&(((M=n.itemForm.get("type_id"))==null?null:M.dirty)||((M=n.itemForm.get("type_id"))==null?null:M.touched))),l(6),m("ngIf",n.mProfile),l(17),m("ngClass",v(90,h,((F=n.itemForm.get("project_brief"))==null?null:F.invalid)&&(((F=n.itemForm.get("project_brief"))==null?null:F.dirty)||((F=n.itemForm.get("project_brief"))==null?null:F.touched)))),l(3),m("ngIf",((N=n.itemForm.get("project_brief"))==null?null:N.invalid)&&(((N=n.itemForm.get("project_brief"))==null?null:N.dirty)||((N=n.itemForm.get("project_brief"))==null?null:N.touched))),l(11),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",v(92,h,((k=n.itemForm.get("project_purpose"))==null?null:k.invalid)&&(((k=n.itemForm.get("project_purpose"))==null?null:k.dirty)||((k=n.itemForm.get("project_purpose"))==null?null:k.touched)))),l(2),m("ngIf",((I=n.itemForm.get("project_purpose"))==null?null:I.invalid)&&(((I=n.itemForm.get("project_purpose"))==null?null:I.dirty)||((I=n.itemForm.get("project_purpose"))==null?null:I.touched))),l(16),m("ngIf",n.mInvestorParcels.length>0),l(11),m("formGroup",n.mItemForm),l(11),m("ngClass",v(94,h,((j=n.mItemForm.get("parcel_number"))==null?null:j.invalid)&&(((j=n.mItemForm.get("parcel_number"))==null?null:j.dirty)||((j=n.mItemForm.get("parcel_number"))==null?null:j.touched)))),l(5),m("ngForOf",n.mInvestorParcels),l(3),m("ngIf",n.mItemForm.get("parcel_number").invalid&&(n.mItemForm.get("parcel_number").dirty||n.mItemForm.get("parcel_number").touched)),l(12),m("ngClass",v(96,h,((A=n.mItemForm.get("planned_land_use_id"))==null?null:A.invalid)&&(((A=n.mItemForm.get("planned_land_use_id"))==null?null:A.dirty)||((A=n.mItemForm.get("planned_land_use_id"))==null?null:A.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((u=n.mItemForm.get("planned_land_use_id"))==null?null:u.invalid)&&(((u=n.mItemForm.get("planned_land_use_id"))==null?null:u.dirty)||((u=n.mItemForm.get("planned_land_use_id"))==null?null:u.touched))),l(11),m("ngClass",v(98,h,((B=n.mItemForm.get("primary_land_use_id"))==null?null:B.invalid)&&(((B=n.mItemForm.get("primary_land_use_id"))==null?null:B.dirty)||((B=n.mItemForm.get("primary_land_use_id"))==null?null:B.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((L=n.mItemForm.get("primary_land_use_id"))==null?null:L.invalid)&&(((L=n.mItemForm.get("primary_land_use_id"))==null?null:L.dirty)||((L=n.mItemForm.get("primary_land_use_id"))==null?null:L.touched))),l(11),m("ngClass",v(100,h,((de=n.mItemForm.get("secondary_land_use_id"))==null?null:de.invalid)&&(((de=n.mItemForm.get("secondary_land_use_id"))==null?null:de.dirty)||((de=n.mItemForm.get("secondary_land_use_id"))==null?null:de.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((se=n.mItemForm.get("secondary_land_use_id"))==null?null:se.invalid)&&(((se=n.mItemForm.get("secondary_land_use_id"))==null?null:se.dirty)||((se=n.mItemForm.get("secondary_land_use_id"))==null?null:se.touched))),l(11),m("ngClass",v(102,h,((pe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:pe.invalid)&&(((pe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:pe.dirty)||((pe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:pe.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((_e=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:_e.invalid)&&(((_e=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:_e.dirty)||((_e=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:_e.touched))),l(11),m("ngClass",v(104,h,n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched))),l(2),m("ngIf",n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched)),l(11),m("ngClass",v(106,h,n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),l(11),m("ngClass",v(108,h,n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),l(11),m("ngClass",v(110,h,n.mItemForm.get("number_of_floors").invalid&&(n.mItemForm.get("number_of_floors").dirty||n.mItemForm.get("number_of_floors").touched))),l(2),m("ngIf",n.mItemForm.get("number_of_floors").invalid&&(n.mItemForm.get("number_of_floors").dirty||n.mItemForm.get("number_of_floors").touched)),l(11),m("ngClass",v(112,h,n.mItemForm.get("floor_to_floor_height").invalid&&(n.mItemForm.get("floor_to_floor_height").dirty||n.mItemForm.get("floor_to_floor_height").touched))),l(2),m("ngIf",n.mItemForm.get("floor_to_floor_height").invalid&&(n.mItemForm.get("floor_to_floor_height").dirty||n.mItemForm.get("floor_to_floor_height").touched)),l(11),m("ngClass",v(114,h,n.mItemForm.get("floor_area").invalid&&(n.mItemForm.get("floor_area").dirty||n.mItemForm.get("floor_area").touched))),l(2),m("ngIf",n.mItemForm.get("floor_area").invalid&&(n.mItemForm.get("floor_area").dirty||n.mItemForm.get("floor_area").touched)),l(11),m("ngClass",v(116,h,n.mItemForm.get("far").invalid&&(n.mItemForm.get("far").dirty||n.mItemForm.get("far").touched))),l(2),m("ngIf",n.mItemForm.get("far").invalid&&(n.mItemForm.get("far").dirty||n.mItemForm.get("far").touched)),l(11),m("ngClass",v(118,h,n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched))),l(2),m("ngIf",n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched)),l(14),m("disabled",n.mItemForm.invalid),l(50),m("ngForOf",n.mLandUsePlans),l(32),m("ngIf",n.itemForm.get("has_variations").invalid&&(n.itemForm.get("has_variations").dirty||n.itemForm.get("has_variations").touched)),l(4),m("ngIf",n.itemForm.get("has_variations").value==="yes"),l(9),m("ngClass",v(120,h,n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched))),l(2),m("ngIf",n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched)),l(11),m("ngClass",v(122,h,n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched))),l(2),m("ngIf",n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched)),l(21),m("ngClass",v(124,h,n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched))),l(2),m("ngIf",n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched)),l(11),m("ngClass",v(126,h,n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched))),l(2),m("ngIf",n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched)),l(11),m("ngClass",v(128,h,n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched)),l(11),m("ngClass",v(130,h,n.itemForm.get("topographical_survey_cad").invalid&&(n.itemForm.get("topographical_survey_cad").dirty||n.itemForm.get("topographical_survey_cad").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey_cad").invalid&&(n.itemForm.get("topographical_survey_cad").dirty||n.itemForm.get("topographical_survey_cad").touched)),l(24),m("ngClass",v(132,h,n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched))),l(2),m("ngIf",n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched)),l(11),m("ngClass",v(134,h,n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched))),l(2),m("ngIf",n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched)),l(21),m("ngClass",v(136,h,n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched))),l(2),m("ngIf",n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched)),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",v(138,h,n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched))),l(2),m("ngIf",n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched)),l(11),m("ngClass",v(140,h,n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched))),l(2),m("ngIf",n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched)),l(11),m("ngClass",v(142,h,n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched))),l(5),m("ngForOf",n.mGreenCertifications),l(3),m("ngIf",n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched)),l(4),m("ngIf",n.itemForm.get("green_certification_id").value==="4"),l(19),m("ngClass",v(144,h,n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched)),l(11),m("ngClass",v(146,h,n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched)),l(17),m("ngIf",n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),l(10),m("disabled",n.itemForm.invalid)}},dependencies:[te,ie,G,X,z,Q,ue,oe,fe,ve,$,Ee,Fe,he,ze,He,Ce,Ve,ae,Z,ee,le,Re,xe],encapsulation:2})}};var C=o=>({"is-invalid":o});function ir(o,a){o&1&&f(0,"app-progress")}function nr(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",r.user.id),l(),g(r.user.name)}}function rr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function or(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,rr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("investor_id"))==null||r.errors==null?null:r.errors.required)}}function ar(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function lr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function mr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,lr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("type_id"))==null||r.errors==null?null:r.errors.required)}}function dr(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function sr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function pr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,sr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("professional_body_id"))==null||r.errors==null?null:r.errors.required)}}function _r(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function cr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,_r,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("membership_number"))==null||r.errors==null?null:r.errors.required)}}function ur(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,ur,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("consultant_name"))==null||r.errors==null?null:r.errors.required)}}function vr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function gr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,vr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("address"))==null||r.errors==null?null:r.errors.required)}}function xr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function yr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,xr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("email"))==null||r.errors==null?null:r.errors.required)}}function Sr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function br(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Sr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("nationality"))==null||r.errors==null?null:r.errors.required)}}function hr(o,a){if(o&1){let r=U();i(0,"fieldset",4),e(1,`
            `),i(2,"legend",5)(3,"h6",6),e(4,"CONSULTANT INFORMATION"),t()(),e(5,`
            `),i(6,"div",7),e(7,`
              `),i(8,"div",8),e(9,`
                `),i(10,"div",9),e(11,`
                  `),i(12,"label",108),e(13,"Professional Body:"),t(),e(14,`
                  `),i(15,"select",109),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.professional_body_id,s)||(p.mProfile.professional_body_id=s),V(s)}),e(16,`
                    `),i(17,"option",12),e(18,"--- Select professional body ---"),t(),e(19,`
                    `),d(20,dr,2,3,"option",13),e(21,`
                  `),t(),e(22,`
                  `),d(23,pr,4,1,"div",14),e(24,`
                `),t(),e(25,`
              `),t(),e(26,`
              `),i(27,"div",8),e(28,`
                `),i(29,"div",9),e(30,`
                  `),i(31,"label",110),e(32,"Membership Number:"),t(),e(33,`
                  `),i(34,"input",111),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.membership_number,s)||(p.mProfile.membership_number=s),V(s)}),t(),e(35,`
                  `),d(36,cr,4,1,"div",14),e(37,`
                `),t(),e(38,`
              `),t(),e(39,`
              `),i(40,"div",40),e(41,`
                `),i(42,"div",9),e(43,`
                  `),i(44,"label",112),e(45,"Consultant Name:"),t(),e(46,`
                  `),i(47,"input",113),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.member_name,s)||(p.mProfile.member_name=s),V(s)}),t(),e(48,`
                  `),d(49,fr,4,1,"div",14),e(50,`
                `),t(),e(51,`
              `),t(),e(52,`
              `),i(53,"div",40),e(54,`
                `),i(55,"div",9),e(56,`
                  `),i(57,"label",114),e(58,"Address:"),t(),e(59,`
                  `),i(60,"input",115),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.address,s)||(p.mProfile.address=s),V(s)}),t(),e(61,`
                  `),d(62,gr,4,1,"div",14),e(63,`
                `),t(),e(64,`
              `),t(),e(65,`
              `),i(66,"div",40),e(67,`
                `),i(68,"div",9),e(69,`
                  `),i(70,"label",116),e(71,"Email:"),t(),e(72,`
                  `),i(73,"input",117),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.email,s)||(p.mProfile.email=s),V(s)}),t(),e(74,`
                  `),d(75,yr,4,1,"div",14),e(76,`
                `),t(),e(77,`
              `),t(),e(78,`
              `),i(79,"div",40),e(80,`
                `),i(81,"div",9),e(82,`
                  `),i(83,"label",118),e(84,"Nationality:"),t(),e(85,`
                  `),i(86,"input",119),q("ngModelChange",function(s){R(r);let p=_();return w(p.mProfile.member_name,s)||(p.mProfile.member_name=s),V(s)}),t(),e(87,`
                  `),d(88,br,4,1,"div",14),e(89,`
                `),t(),e(90,`
              `),t(),e(91,`
            `),t(),e(92,`
          `),t()}if(o&2){let r,n,s,p,b,M,F,N,k,I,j,A,u=_();l(15),P("ngModel",u.mProfile.professional_body_id),m("ngClass",v(19,C,((r=u.itemForm.get("professional_body_id"))==null?null:r.invalid)&&(((r=u.itemForm.get("professional_body_id"))==null?null:r.dirty)||((r=u.itemForm.get("professional_body_id"))==null?null:r.touched)))),l(5),m("ngForOf",u.mProfessionalBodies),l(3),m("ngIf",((n=u.itemForm.get("professional_body_id"))==null?null:n.invalid)&&(((n=u.itemForm.get("professional_body_id"))==null?null:n.dirty)||((n=u.itemForm.get("professional_body_id"))==null?null:n.touched))),l(11),P("ngModel",u.mProfile.membership_number),m("ngClass",v(21,C,((s=u.itemForm.get("membership_number"))==null?null:s.invalid)&&(((s=u.itemForm.get("membership_number"))==null?null:s.dirty)||((s=u.itemForm.get("membership_number"))==null?null:s.touched)))),l(2),m("ngIf",((p=u.itemForm.get("membership_number"))==null?null:p.invalid)&&(((p=u.itemForm.get("membership_number"))==null?null:p.dirty)||((p=u.itemForm.get("membership_number"))==null?null:p.touched))),l(11),P("ngModel",u.mProfile.member_name),m("ngClass",v(23,C,((b=u.itemForm.get("consultant_name"))==null?null:b.invalid)&&(((b=u.itemForm.get("consultant_name"))==null?null:b.dirty)||((b=u.itemForm.get("consultant_name"))==null?null:b.touched)))),l(2),m("ngIf",((M=u.itemForm.get("consultant_name"))==null?null:M.invalid)&&(((M=u.itemForm.get("consultant_name"))==null?null:M.dirty)||((M=u.itemForm.get("consultant_name"))==null?null:M.touched))),l(11),P("ngModel",u.mProfile.address),m("ngClass",v(25,C,((F=u.itemForm.get("address"))==null?null:F.invalid)&&(((F=u.itemForm.get("address"))==null?null:F.dirty)||((F=u.itemForm.get("address"))==null?null:F.touched)))),l(2),m("ngIf",((N=u.itemForm.get("address"))==null?null:N.invalid)&&(((N=u.itemForm.get("address"))==null?null:N.dirty)||((N=u.itemForm.get("address"))==null?null:N.touched))),l(11),P("ngModel",u.mProfile.email),m("ngClass",v(27,C,((k=u.itemForm.get("email"))==null?null:k.invalid)&&(((k=u.itemForm.get("email"))==null?null:k.dirty)||((k=u.itemForm.get("email"))==null?null:k.touched)))),l(2),m("ngIf",((I=u.itemForm.get("email"))==null?null:I.invalid)&&(((I=u.itemForm.get("email"))==null?null:I.dirty)||((I=u.itemForm.get("email"))==null?null:I.touched))),l(11),P("ngModel",u.mProfile.member_name),m("ngClass",v(29,C,((j=u.itemForm.get("nationality"))==null?null:j.invalid)&&(((j=u.itemForm.get("nationality"))==null?null:j.dirty)||((j=u.itemForm.get("nationality"))==null?null:j.touched)))),l(2),m("ngIf",((A=u.itemForm.get("nationality"))==null?null:A.invalid)&&(((A=u.itemForm.get("nationality"))==null?null:A.dirty)||((A=u.itemForm.get("nationality"))==null?null:A.touched)))}}function Cr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Er(o,a){if(o&1&&(i(0,"div",107),e(1,`
                      `),d(2,Cr,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("project_brief"))==null||r.errors==null?null:r.errors.required)}}function Fr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ir(o,a){if(o&1&&(i(0,"div",107),e(1,`
                      `),d(2,Fr,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("project_purpose"))==null||r.errors==null?null:r.errors.required)}}function Tr(o,a){if(o&1&&(i(0,"div",124),e(1,`
                      `),i(2,"div",125),e(3,`
                        `),i(4,"div",126),e(5,`
                          `),i(6,"div",127)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",128),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),f(15,"br"),e(16),f(17,"br"),e(18),f(19,"br"),e(20),f(21,"br"),e(22),f(23,"br"),e(24),f(25,"br"),e(26),f(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let r=a.$implicit;l(8),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(6),D(`
                              Acres: `,r.allocation_worksheet==null?null:r.allocation_worksheet.acres," "),l(2),T(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),T(`
                              Min/Max FAR: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_far,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_far),l(2),T(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),T(`
                              Min/Max Floor Area: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floor_area,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floor_area),l(2),D(`
                              Plot Coverage: `,r.allocation_worksheet==null?null:r.allocation_worksheet.plot_coverage,"% "),l(2),D(`
                              Use: `,r.allocation_worksheet==null?null:r.allocation_worksheet.description," ")}}function Pr(o,a){if(o&1&&(i(0,"div",120),e(1,`
                  `),i(2,"div",121),e(3,`
                    `),i(4,"small",122),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Tr,33,12,"div",123),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let r=_();l(10),m("ngForOf",r.mInvestorParcels)}}function wr(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.allocation_worksheet==null?null:r.allocation_worksheet.number)),l(),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number)}}function qr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Mr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,qr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("parcel_number").errors)==null?null:r.required)}}function Nr(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function kr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,kr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("planned_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Ar(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Rr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Rr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("primary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Dr(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Lr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Br(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Lr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("secondary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Or(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Ur(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Ur,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("preferred_ground_floor_use_id"))==null||r.errors==null?null:r.errors.required)}}function Wr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Hr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Wr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:r.required)}}function zr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,zr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:r.required)}}function Jr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Kr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Jr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:r.required)}}function Xr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qr(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Xr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("number_of_floors").errors)==null?null:r.required)}}function Zr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $r(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,Zr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("floor_to_floor_height").errors)==null?null:r.required)}}function eo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function to(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,eo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("floor_area").errors)==null?null:r.required)}}function io(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function no(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,io,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("far").errors)==null?null:r.required)}}function ro(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function oo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                            `),d(2,ro,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.mItemForm.get("minimum_setback").errors)==null?null:r.required)}}function ao(o,a){if(o&1){let r=U();i(0,"tr"),e(1,`
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
                                    `),i(32,"button",130),y("click",function(){let s=R(r).$implicit,p=_();return V(p.removeItem(s))}),J(),f(33,"svg",131),e(34,"Remove"),t(),e(35,`
                                  `),t(),e(36,`
                                `),t()}if(o&2){let r=a.$implicit,n=a.index;l(3),D("",n+1,"."),l(3),g(r.parcel_number),l(4),g(r.floor_area),l(3),g(r.floor_to_floor_height),l(3),g(r.number_of_floors),l(3),g(r.percentage_of_site_covered_by_existing_building),l(3),g(r.percentage_of_site_covered_by_proposed_building),l(3),g(r.number_of_units_to_be_developed),l(3),g(r.minimum_setback)}}function lo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function mo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,lo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("has_variations").errors)==null?null:r.required)}}function so(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function po(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,so,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("variation_justification_statement"))==null||r.errors==null?null:r.errors.required)}}function _o(o,a){if(o&1){let r=U();i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",132),e(5,"Variation Justification Statement (State the variation e.g. Request to vary number of floors from 4 to 8):"),t(),e(6,`
                  `),i(7,"ckeditor",133),q("ngModelChange",function(s){R(r);let p=_();return w(p.item.has_variations,s)||(p.item.has_variations=s),V(s)}),t(),e(8,`
                  `),d(9,po,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()}if(o&2){let r,n,s=_();l(7),P("ngModel",s.item.has_variations),m("editor",s.mEditor)("config",s.mAppContextService.ckEditorConfig)("ngClass",v(5,C,((r=s.itemForm.get("variation_justification_statement"))==null?null:r.invalid)&&(((r=s.itemForm.get("variation_justification_statement"))==null?null:r.dirty)||((r=s.itemForm.get("variation_justification_statement"))==null?null:r.touched)))),l(2),m("ngIf",((n=s.itemForm.get("variation_justification_statement"))==null?null:n.invalid)&&(((n=s.itemForm.get("variation_justification_statement"))==null?null:n.dirty)||((n=s.itemForm.get("variation_justification_statement"))==null?null:n.touched)))}}function co(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function uo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,co,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("site_plan_and_analysis").errors)==null?null:r.required)}}function fo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function vo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,fo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("context_analysis").errors)==null?null:r.required)}}function go(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function xo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,go,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("concept_plan").errors)==null?null:r.required)}}function yo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function So(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,yo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("geotechnical_report").errors)==null?null:r.required)}}function bo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ho(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,bo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey").errors)==null?null:r.required)}}function Co(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Eo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Co,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey_cad").errors)==null?null:r.required)}}function Fo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Io(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Fo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("parking_strategy").errors)==null?null:r.required)}}function To(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Po(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,To,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("traffic_management_plan").errors)==null?null:r.required)}}function wo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,wo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:r.required)}}function Mo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function No(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Mo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("project_sustainability_brief").errors)==null?null:r.required)}}function ko(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,ko,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("sustainability_report").errors)==null?null:r.required)}}function Ao(o,a){if(o&1&&(i(0,"option",106),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Ro(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Ro,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("green_certification_id").errors)==null?null:r.required)}}function Do(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Lo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Do,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("other_green_certification").errors)==null?null:r.required)}}function Bo(o,a){if(o&1){let r=U();i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",134),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"input",135),q("ngModelChange",function(s){R(r);let p=_();return w(p.item.other_green_certification,s)||(p.item.other_green_certification=s),V(s)}),t(),e(8,`
                  `),d(9,Lo,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()}if(o&2){let r=_();l(7),P("ngModel",r.item.other_green_certification),m("ngClass",v(3,C,r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))),l(2),m("ngIf",r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))}}function Oo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Uo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Oo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_duration").errors)==null?null:r.required)}}function Go(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Wo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                    `),d(2,Go,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_construction_cost").errors)==null?null:r.required)}}function Ho(o,a){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function zo(o,a){if(o&1&&(i(0,"div",107),e(1,`
                  `),d(2,Ho,2,0,"div",0),e(3,`
                `),t()),o&2){let r,n=_();l(2),m("ngIf",(r=n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:r.requiredTrue)}}var Ke=class o{constructor(a,r,n,s,p,b){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=s;this.fb=p;this.route=b;this.mInvestorParcels={};this.mProfile={};this.mProgress=S(!1);this.mParcelInfo={};this.mEditor=ge;this.mLandUsePlans=[];this.mHasVariation="no";this.itemForm=this.fb.group({investor_id:["",c.required],type_id:["",c.required],professional_body_id:["",c.nullValidator],membership_number:["",c.nullValidator],consultant_name:["",c.nullValidator],address:["",c.nullValidator],email:["",c.nullValidator],nationality:["",c.nullValidator],project_brief:["",c.required],project_purpose:["",c.required],has_variations:["no",c.required],variation_justification_statement:["",c.nullValidator],site_plan_and_analysis:["",c.nullValidator],context_analysis:["",c.nullValidator],concept_plan:["",c.nullValidator],geotechnical_report:["",c.nullValidator],topographical_survey:["",c.nullValidator],topographical_survey_cad:["",c.nullValidator],parking_strategy:["",c.nullValidator],traffic_management_plan:["",c.nullValidator],estimated_utility_demand_requirements:["",c.nullValidator],project_sustainability_brief:["",c.required],green_certification_id:["",c.required],other_green_certification:["",c.nullValidator],sustainability_report:["",c.nullValidator],estimated_project_duration:["",c.required],estimated_project_construction_cost:["",c.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,c.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",c.required],planned_land_use_id:["",c.required],primary_land_use_id:["",c.required],secondary_land_use_id:["",c.nullValidator],preferred_ground_floor_use_id:["",c.nullValidator],number_of_units_to_be_developed:["",c.required],percentage_of_site_covered_by_existing_building:["",c.required],percentage_of_site_covered_by_proposed_building:["",c.nullValidator],density:["",c.nullValidator],floor_area:["",c.nullValidator],far:["",c.nullValidator],minimum_setback:["",c.nullValidator],floor_to_floor_height:["",c.nullValidator],number_of_floors:["",c.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mLandUsePlans=this.item.land_use_plans,this.mInvestorParcels=this.item.investor.parcels,this.itemForm.get("has_variations")?.setValue(this.item.has_variations),this.mHasVariation=this.item.has_variations,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPermitTypes=a.data.permit_types,this.mParcelLandUseGroups=a.data.parcel_land_use_groups,this.mGreenCertifications=a.data.green_certifications,this.mProfile=a.data.profile,console.log(this.mProfile),this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=JSON.stringify(Object.assign({},this.mLandUsePlans)),n=new FormData;n.append("id",this.id),n.append("investor_id",a.investor_id),n.append("type_id",a.type_id),n.append("professional_body_id",a.professional_body_id),n.append("membership_number",a.membership_number),n.append("consultant_name",a.consultant_name),n.append("address",a.address),n.append("email",a.email),n.append("nationality",a.nationality),n.append("project_brief",a.project_brief),n.append("project_purpose",a.project_purpose),n.append("has_variations",this.mHasVariation),n.append("variation_justification_statement",a.variation_justification_statement),n.append("land_use_plans",r),n.append("project_sustainability_brief",a.project_sustainability_brief),n.append("green_certification_id",a.green_certification_id),n.append("other_green_certification",a.other_green_certification),n.append("estimated_project_duration",a.estimated_project_duration),n.append("estimated_project_construction_cost",a.estimated_project_construction_cost),n.append("commitment_to_comply_with_development_codes_and_guidelines",a.commitment_to_comply_with_development_codes_and_guidelines),n.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),n.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),n.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),n.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),n.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),n.append("topographical_survey_cad",this.topographical_survey_cad_file,this.topographical_survey_cad_file.name),n.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),n.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),n.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),n.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),n.append("_method","PUT"),this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,n).subscribe({next:s=>{s&&(this.mToastrService.success(s.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.error(s.error.message),this.mProgress.set(!1)}})}onContextAnalysisChange(a){if(a.target.value){let r=a.target.files[0];this.context_analysis_file=r}}onSitePlanAndAnlysisChange(a){if(a.target.value){let r=a.target.files[0];this.site_plan_and_analysis_file=r}}onConceptPlanChange(a){if(a.target.value){let r=a.target.files[0];this.concept_plan_file=r}}onGeotechnicalReportChange(a){if(a.target.value){let r=a.target.files[0];this.geotechnical_report_file=r}}onTopographicalSurveyChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_file=r}}onTopographicalSurveyCadChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_cad_file=r}}onParkingStrategyChange(a){if(a.target.value){let r=a.target.files[0];this.parking_strategy_file=r}}onTrafficManagementPlanChange(a){if(a.target.value){let r=a.target.files[0];this.traffic_management_plan_file=r}}onEstimatedUtilityDemandRequirementsChange(a){if(a.target.value){let r=a.target.files[0];this.estimated_utility_demand_requirements_file=r}}onSustainabilityReportChange(a){if(a.target.value){let r=a.target.files[0];this.sustainability_report_file=r}}onInvestorChange(a){if(a.target.value){let r=a.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(r).subscribe({next:n=>{n&&(this.mInvestorParcels=n,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}}onCheckVariations(a){let r;this.mInvestorParcels.some(L=>{r=L.allocation_worksheet});let n=L=>Number(String(L).replace(/,/g,"")),s=Number(r.plot_coverage),p=Number(a.percentage_of_site_covered_by_existing_building)+Number(a.percentage_of_site_covered_by_proposed_building),b=Number(r.min_floors),M=Number(r.max_floors),F=Number(a.number_of_floors),N=n(r.min_floor_area),k=n(r.max_floor_area),I=Number(a.floor_area),j=Number(r.min_far),A=Number(r.max_far),u=Number(a.far),B=F>=b&&F<=M&&I>=N&&I<=k&&u>=j&&u<=A&&p<=s;console.log(B),B===!1&&this.mHasVariation==="no"?this.mHasVariation="yes":this.mHasVariation="no",this.itemForm.get("has_variations")?.setValue(this.mHasVariation)}addItem(){let a=this.mItemForm.value;this.mLandUsePlans.some(n=>n.parcel_number===a.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(a),this.onCheckVariations(a),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(a){this.mLandUsePlans.forEach((r,n)=>{r===a&&this.mLandUsePlans.splice(n,1)})}static{this.\u0275fac=function(r){return new(r||o)(x(Y),x(re),x(H),x(W),x(me),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-edit"]],standalone:!1,decls:695,vars:156,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","border p-2 mb-3",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"ngModelChange","ngModel","editor","config","ngClass"],["class","alert alert-success",4,"ngIf"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],[1,"col-md-6"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","number_of_floors",1,"col-form-label","required"],["formControlName","number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","floor_to_floor_height",1,"col-form-label","required"],["formControlName","floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","floor_area",1,"col-form-label","required"],["formControlName","floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no","readonly","",1,"form-check-input"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes","readonly","",1,"form-check-input"],["for","variation_yes",1,"form-check-label"],["class","col-md-12",4,"ngIf"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey_cad",1,"col-form-label","required"],["formControlName","topographical_survey_cad","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"ngModelChange","ngModel","editor","config","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","variation_justification_statement",1,"col-form-label","required"],["formControlName","variation_justification_statement","type","text",1,"form-control1",3,"ngModelChange","ngModel","editor","config","ngClass"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"]],template:function(r,n){if(r&1&&(d(0,ir,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`


        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",9),e(22,`
                  `),i(23,"label",10),e(24,"Company:"),t(),e(25,`
                  `),i(26,"select",11),q("ngModelChange",function(p){return w(n.item.investor_id,p)||(n.item.investor_id=p),p}),y("change",function(p){return n.onInvestorChange(p)}),e(27,`
                    `),i(28,"option",12),e(29,"--- Select investor ---"),t(),e(30,`
                    `),d(31,nr,2,2,"option",13),e(32,`
                  `),t(),e(33,`
                  `),d(34,or,4,1,"div",14),e(35,`
                `),t(),e(36,`
              `),t(),e(37,`
              `),i(38,"div",8),e(39,`
                `),i(40,"div",9),e(41,`
                  `),i(42,"label",15),e(43,"Nature of Application:"),t(),e(44,`
                  `),i(45,"select",16),q("ngModelChange",function(p){return w(n.item.type_id,p)||(n.item.type_id=p),p}),e(46,`
                    `),i(47,"option",12),e(48,"--- Select plan submission type ---"),t(),e(49,`
                    `),d(50,ar,2,3,"option",13),e(51,`
                  `),t(),e(52,`
                  `),d(53,mr,4,1,"div",14),e(54,`
                `),t(),e(55,`
              `),t(),e(56,`
            `),t(),e(57,`
          `),t(),e(58,`
          `),d(59,hr,93,31,"fieldset",17),e(60,`
          `),i(61,"fieldset",4),e(62,`
            `),i(63,"legend",5)(64,"h6",6),e(65,"PROJECT BRIEF AND PURPOSE"),t()(),e(66,`
              `),i(67,"div",7),e(68,`
                `),i(69,"div",8),e(70,`
                  `),i(71,"div",9),e(72,`
                    `),i(73,"label",18),e(74,"Project Brief (Description of the overall project concept and how it fits in the Technopolis Development Authority Vision):"),t(),e(75,`
                    `),i(76,"textarea",19),q("ngModelChange",function(p){return w(n.item.project_brief,p)||(n.item.project_brief=p),p}),t(),e(77,`
                    `),e(78,`
                    `),d(79,Er,4,1,"div",14),e(80,`
                  `),t(),e(81,`
                `),t(),e(82,`
                `),i(83,"div",8),e(84,`
                  `),i(85,"div",9),e(86,`
                    `),i(87,"label",20),e(88,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(89,`
                    `),i(90,"ckeditor",21),q("ngModelChange",function(p){return w(n.item.project_purpose,p)||(n.item.project_purpose=p),p}),t(),e(91,`
                    `),d(92,Ir,4,1,"div",14),e(93,`
                  `),t(),e(94,`
                `),t(),e(95,`
              `),t(),e(96,`
          `),t(),e(97,`
          `),i(98,"fieldset",4),e(99,`
            `),i(100,"legend",5)(101,"h6",6),e(102,"PARCEL & CONTEXT ANALYSIS"),t()(),e(103,`
            `),i(104,"div",7),e(105,`
              `),i(106,"div",8),e(107,`
                `),d(108,Pr,13,1,"div",22),e(109,`
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
                            `),d(135,wr,2,3,"option",13),e(136,`
                          `),t(),e(137,`
                          `),d(138,Mr,4,1,"div",14),e(139,`
                        `),t(),e(140,`
                      `),t(),e(141,`
                      `),e(142,`
                      `),i(143,"div",8),e(144,`
                        `),i(145,"div",9),e(146,`
                          `),i(147,"label",29),e(148,"Planned Land Use:"),t(),e(149,`
                          `),i(150,"select",30),e(151,`
                            `),i(152,"option",12),e(153,"--- Select planned land use ---"),t(),e(154,`
                            `),d(155,Nr,2,3,"option",13),e(156,`
                          `),t(),e(157,`
                          `),d(158,jr,4,1,"div",14),e(159,`
                        `),t(),e(160,`
                      `),t(),e(161,`
                      `),i(162,"div",31),e(163,`
                        `),i(164,"div",9),e(165,`
                          `),i(166,"label",32),e(167,"Primary Land Use:"),t(),e(168,`
                          `),i(169,"select",33),e(170,`
                            `),i(171,"option",12),e(172,"--- Select primary land use ---"),t(),e(173,`
                            `),d(174,Ar,2,3,"option",13),e(175,`
                          `),t(),e(176,`
                          `),d(177,Vr,4,1,"div",14),e(178,`
                        `),t(),e(179,`
                      `),t(),e(180,`
                      `),i(181,"div",31),e(182,`
                        `),i(183,"div",9),e(184,`
                          `),i(185,"label",34),e(186,"Secondary Land Use:"),t(),e(187,`
                          `),i(188,"select",35),e(189,`
                            `),i(190,"option",12),e(191,"--- Select secondary land use ---"),t(),e(192,`
                            `),d(193,Dr,2,3,"option",13),e(194,`
                          `),t(),e(195,`
                          `),d(196,Br,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",31),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",36),e(205,"Preferred Ground Floor Use:"),t(),e(206,`
                          `),i(207,"select",37),e(208,`
                            `),i(209,"option",12),e(210,"--- Select ground floor use ---"),t(),e(211,`
                            `),d(212,Or,2,3,"option",13),e(213,`
                          `),t(),e(214,`
                          `),d(215,Gr,4,1,"div",14),e(216,`
                        `),t(),e(217,`
                      `),t(),e(218,`
                      `),i(219,"div",8),e(220,`
                        `),i(221,"div",9),e(222,`
                          `),i(223,"label",38),e(224,"Number of Units to be Developed:"),t(),e(225,`
                          `),f(226,"input",39),e(227,`
                          `),d(228,Hr,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",40),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",41),e(237,"Percentage of site covered by existing building(s):"),t(),e(238,`
                          `),f(239,"input",42),e(240,`
                          `),d(241,Yr,4,1,"div",14),e(242,`
                        `),t(),e(243,`
                      `),t(),e(244,`
                      `),i(245,"div",40),e(246,`
                        `),i(247,"div",9),e(248,`
                          `),i(249,"label",43),e(250,"Percentage of site covered by proposed building(s):"),t(),e(251,`
                          `),f(252,"input",44),e(253,`
                          `),d(254,Kr,4,1,"div",14),e(255,`
                        `),t(),e(256,`
                      `),t(),e(257,`
                      `),i(258,"div",40),e(259,`
                        `),i(260,"div",9),e(261,`
                          `),i(262,"label",45),e(263,"Number of Floors:"),t(),e(264,`
                          `),f(265,"input",46),e(266,`
                          `),d(267,Qr,4,1,"div",14),e(268,`
                        `),t(),e(269,`
                      `),t(),e(270,`
                      `),i(271,"div",40),e(272,`
                        `),i(273,"div",9),e(274,`
                          `),i(275,"label",47),e(276,"Floor-to-Floor Height:"),t(),e(277,`
                          `),f(278,"input",48),e(279,`
                          `),d(280,$r,4,1,"div",14),e(281,`
                        `),t(),e(282,`
                      `),t(),e(283,`
                      `),i(284,"div",40),e(285,`
                        `),i(286,"div",9),e(287,`
                          `),i(288,"label",49),e(289,"Floor Area:"),t(),e(290,`
                          `),f(291,"input",50),e(292,`
                          `),d(293,to,4,1,"div",14),e(294,`
                        `),t(),e(295,`
                      `),t(),e(296,`
                      `),i(297,"div",40),e(298,`
                        `),i(299,"div",9),e(300,`
                          `),i(301,"label",51),e(302,"Floor Area Ratio (FAR):"),t(),e(303,`
                          `),f(304,"input",52),e(305,`
                          `),d(306,no,4,1,"div",14),e(307,`
                        `),t(),e(308,`
                      `),t(),e(309,`
                      `),i(310,"div",8),e(311,`
                        `),i(312,"div",9),e(313,`
                          `),i(314,"label",53),e(315,"Minimum Setback:"),t(),e(316,`
                          `),f(317,"input",54),e(318,`
                          `),d(319,oo,4,1,"div",14),e(320,`
                        `),t(),e(321,`
                      `),t(),e(322,`
                    `),t(),e(323,`
                  `),t(),e(324,`
                  `),i(325,"div"),e(326,`
                    `),i(327,"div",55),e(328,`
                      `),i(329,"button",56),y("click",function(){return n.resetItemsForm()}),J(),f(330,"svg",57),e(331,"Reset"),t(),e(332,`
                      `),ye(),i(333,"button",58),y("click",function(){return n.addItem()}),J(),f(334,"svg",59),e(335,"Add"),t(),e(336,`
                    `),t(),e(337,`
                    `),ye(),i(338,"div",60),e(339,`
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
                                `),d(383,ao,37,9,"tr",63),e(384,`
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
                    `),f(401,"input",66),e(402,`
                    `),i(403,"label",67),e(404," No"),t(),e(405,`
                  `),t(),e(406,`
                  `),i(407,"div",65),e(408,`
                    `),f(409,"input",68),e(410,`
                    `),i(411,"label",69),e(412," Yes"),t(),e(413,`
                  `),t(),e(414,`
                  `),d(415,mo,4,1,"div",14),e(416,`
                `),t(),e(417,`
              `),t(),e(418,`
              `),d(419,_o,12,7,"div",70),e(420,`
              `),i(421,"div",8),e(422,`
                `),i(423,"div",9),e(424,`
                  `),i(425,"label",71),e(426,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(427,`
                  `),i(428,"input",72),y("change",function(p){return n.onSitePlanAndAnlysisChange(p)}),t(),e(429,`
                  `),d(430,uo,4,1,"div",14),e(431,`
                `),t(),e(432,`
              `),t(),e(433,`
              `),i(434,"div",8),e(435,`
                `),i(436,"div",9),e(437,`
                  `),i(438,"label",73),e(439,"Context Analysis (500m radius context analysis):"),t(),e(440,`
                  `),i(441,"input",74),y("change",function(p){return n.onContextAnalysisChange(p)}),t(),e(442,`
                  `),d(443,vo,4,1,"div",14),e(444,`
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
                  `),i(464,"input",76),y("change",function(p){return n.onConceptPlanChange(p)}),t(),e(465,`
                  `),d(466,xo,4,1,"div",14),e(467,`
                `),t(),e(468,`
              `),t(),e(469,`
              `),i(470,"div",40),e(471,`
                `),i(472,"div",9),e(473,`
                  `),i(474,"label",77),e(475,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(476,`
                  `),i(477,"input",78),y("change",function(p){return n.onGeotechnicalReportChange(p)}),t(),e(478,`
                  `),d(479,So,4,1,"div",14),e(480,`
                `),t(),e(481,`
              `),t(),e(482,`
              `),i(483,"div",40),e(484,`
                `),i(485,"div",9),e(486,`
                  `),i(487,"label",79),e(488,"Topographical Survey (PDF):"),t(),e(489,`
                  `),i(490,"input",80),y("change",function(p){return n.onTopographicalSurveyChange(p)}),t(),e(491,`
                  `),d(492,ho,4,1,"div",14),e(493,`
                `),t(),e(494,`
              `),t(),e(495,`
              `),i(496,"div",40),e(497,`
                `),i(498,"div",9),e(499,`
                  `),i(500,"label",81),e(501,"Topographical Survey (CAD):"),t(),e(502,`
                  `),i(503,"input",82),y("change",function(p){return n.onTopographicalSurveyCadChange(p)}),t(),e(504,`
                  `),d(505,Eo,4,1,"div",14),e(506,`
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
                  `),i(529,"input",85),y("change",function(p){return n.onParkingStrategyChange(p)}),t(),e(530,`
                  `),d(531,Io,4,1,"div",14),e(532,`
                `),t(),e(533,`
              `),t(),e(534,`
              `),i(535,"div",8),e(536,`
                `),i(537,"div",9),e(538,`
                  `),i(539,"label",86),e(540,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(541,`
                  `),i(542,"input",87),y("change",function(p){return n.onTrafficManagementPlanChange(p)}),t(),e(543,`
                  `),d(544,Po,4,1,"div",14),e(545,`
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
                  `),i(565,"input",89),y("change",function(p){return n.onEstimatedUtilityDemandRequirementsChange(p)}),t(),e(566,`
                  `),d(567,qo,4,1,"div",14),e(568,`
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
                  `),i(588,"ckeditor",91),q("ngModelChange",function(p){return w(n.item.project_sustainability_brief,p)||(n.item.project_sustainability_brief=p),p}),t(),e(589,`
                  `),d(590,No,4,1,"div",14),e(591,`
                `),t(),e(592,`
              `),t(),e(593,`
              `),i(594,"div",8),e(595,`
                `),i(596,"div",9),e(597,`
                  `),i(598,"label",92),e(599,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(600,`
                  `),i(601,"input",93),y("change",function(p){return n.onSustainabilityReportChange(p)}),t(),e(602,`
                  `),d(603,jo,4,1,"div",14),e(604,`
                `),t(),e(605,`
              `),t(),e(606,`
              `),i(607,"div",8),e(608,`
                `),i(609,"div",9),e(610,`
                  `),i(611,"label",94),e(612,"Green Certifications:"),t(),e(613,`
                  `),i(614,"select",95),q("ngModelChange",function(p){return w(n.item.green_certification_id,p)||(n.item.green_certification_id=p),p}),e(615,`
                    `),i(616,"option",12),e(617,"--- Select certification ---"),t(),e(618,`
                    `),d(619,Ao,2,3,"option",13),e(620,`
                  `),t(),e(621,`
                  `),d(622,Vo,4,1,"div",14),e(623,`
                `),t(),e(624,`
              `),t(),e(625,`
              `),d(626,Bo,12,5,"div",70),e(627,`
            `),t(),e(628,`
          `),t(),e(629,`
          `),i(630,"fieldset",4),e(631,`
            `),i(632,"legend",5)(633,"h6",6),e(634,"CONCLUSIONS"),t()(),e(635,`
            `),i(636,"div",7),e(637,`
              `),i(638,"div",8),e(639,`
                `),i(640,"div",9),e(641,`
                  `),i(642,"label",96),e(643,"Estimated Project Duration (In months):"),t(),e(644,`
                  `),i(645,"input",97),q("ngModelChange",function(p){return w(n.item.estimated_project_duration,p)||(n.item.estimated_project_duration=p),p}),t(),e(646,`
                  `),d(647,Uo,4,1,"div",14),e(648,`
                `),t(),e(649,`
              `),t(),e(650,`
              `),i(651,"div",8),e(652,`
                `),i(653,"div",9),e(654,`
                  `),i(655,"label",98),e(656,"Estimated Project Construction Cost (In USD):"),t(),e(657,`
                  `),i(658,"input",99),q("ngModelChange",function(p){return w(n.item.estimated_project_construction_cost,p)||(n.item.estimated_project_construction_cost=p),p}),t(),e(659,`
                  `),d(660,Wo,4,1,"div",14),e(661,`
                `),t(),e(662,`
              `),t(),e(663,`
              `),i(664,"div",100),e(665,`
                `),i(666,"div",65),e(667,`
                  `),f(668,"input",101),e(669,`
                  `),i(670,"label",102),e(671,`
                    By checking this, confirms the investor's commitment to comply with the `),i(672,"a",84),e(673,"Technopolis Development Authority Development Codes and Guidelines"),t(),e(674,`
                  `),t(),e(675,`
                `),t(),e(676,`
                `),d(677,zo,4,1,"div",14),e(678,`
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
`),t()),r&2){let s,p,b,M,F,N,k,I,j,A,u,B,L,de,se,pe,_e;m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),P("ngModel",n.item.investor_id),m("ngClass",v(94,C,((s=n.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("investor_id"))==null?null:s.dirty)||((s=n.itemForm.get("investor_id"))==null?null:s.touched)))),l(5),m("ngForOf",n.mInvestors),l(3),m("ngIf",((p=n.itemForm.get("investor_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("investor_id"))==null?null:p.dirty)||((p=n.itemForm.get("investor_id"))==null?null:p.touched))),l(11),P("ngModel",n.item.type_id),m("ngClass",v(96,C,((b=n.itemForm.get("type_id"))==null?null:b.invalid)&&(((b=n.itemForm.get("type_id"))==null?null:b.dirty)||((b=n.itemForm.get("type_id"))==null?null:b.touched)))),l(5),m("ngForOf",n.mPermitTypes),l(3),m("ngIf",((M=n.itemForm.get("type_id"))==null?null:M.invalid)&&(((M=n.itemForm.get("type_id"))==null?null:M.dirty)||((M=n.itemForm.get("type_id"))==null?null:M.touched))),l(6),m("ngIf",n.mProfile),l(17),P("ngModel",n.item.project_brief),m("ngClass",v(98,C,((F=n.itemForm.get("project_brief"))==null?null:F.invalid)&&(((F=n.itemForm.get("project_brief"))==null?null:F.dirty)||((F=n.itemForm.get("project_brief"))==null?null:F.touched)))),l(3),m("ngIf",((N=n.itemForm.get("project_brief"))==null?null:N.invalid)&&(((N=n.itemForm.get("project_brief"))==null?null:N.dirty)||((N=n.itemForm.get("project_brief"))==null?null:N.touched))),l(11),P("ngModel",n.item.project_purpose),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",v(100,C,((k=n.itemForm.get("project_purpose"))==null?null:k.invalid)&&(((k=n.itemForm.get("project_purpose"))==null?null:k.dirty)||((k=n.itemForm.get("project_purpose"))==null?null:k.touched)))),l(2),m("ngIf",((I=n.itemForm.get("project_purpose"))==null?null:I.invalid)&&(((I=n.itemForm.get("project_purpose"))==null?null:I.dirty)||((I=n.itemForm.get("project_purpose"))==null?null:I.touched))),l(16),m("ngIf",n.mInvestorParcels.length>0),l(11),m("formGroup",n.mItemForm),l(11),m("ngClass",v(102,C,((j=n.mItemForm.get("parcel_number"))==null?null:j.invalid)&&(((j=n.mItemForm.get("parcel_number"))==null?null:j.dirty)||((j=n.mItemForm.get("parcel_number"))==null?null:j.touched)))),l(5),m("ngForOf",n.mInvestorParcels),l(3),m("ngIf",n.mItemForm.get("parcel_number").invalid&&(n.mItemForm.get("parcel_number").dirty||n.mItemForm.get("parcel_number").touched)),l(12),m("ngClass",v(104,C,((A=n.mItemForm.get("planned_land_use_id"))==null?null:A.invalid)&&(((A=n.mItemForm.get("planned_land_use_id"))==null?null:A.dirty)||((A=n.mItemForm.get("planned_land_use_id"))==null?null:A.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((u=n.mItemForm.get("planned_land_use_id"))==null?null:u.invalid)&&(((u=n.mItemForm.get("planned_land_use_id"))==null?null:u.dirty)||((u=n.mItemForm.get("planned_land_use_id"))==null?null:u.touched))),l(11),m("ngClass",v(106,C,((B=n.mItemForm.get("primary_land_use_id"))==null?null:B.invalid)&&(((B=n.mItemForm.get("primary_land_use_id"))==null?null:B.dirty)||((B=n.mItemForm.get("primary_land_use_id"))==null?null:B.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((L=n.mItemForm.get("primary_land_use_id"))==null?null:L.invalid)&&(((L=n.mItemForm.get("primary_land_use_id"))==null?null:L.dirty)||((L=n.mItemForm.get("primary_land_use_id"))==null?null:L.touched))),l(11),m("ngClass",v(108,C,((de=n.mItemForm.get("secondary_land_use_id"))==null?null:de.invalid)&&(((de=n.mItemForm.get("secondary_land_use_id"))==null?null:de.dirty)||((de=n.mItemForm.get("secondary_land_use_id"))==null?null:de.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((se=n.mItemForm.get("secondary_land_use_id"))==null?null:se.invalid)&&(((se=n.mItemForm.get("secondary_land_use_id"))==null?null:se.dirty)||((se=n.mItemForm.get("secondary_land_use_id"))==null?null:se.touched))),l(11),m("ngClass",v(110,C,((pe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:pe.invalid)&&(((pe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:pe.dirty)||((pe=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:pe.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((_e=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:_e.invalid)&&(((_e=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:_e.dirty)||((_e=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:_e.touched))),l(11),m("ngClass",v(112,C,n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched))),l(2),m("ngIf",n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched)),l(11),m("ngClass",v(114,C,n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),l(11),m("ngClass",v(116,C,n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),l(11),m("ngClass",v(118,C,n.mItemForm.get("number_of_floors").invalid&&(n.mItemForm.get("number_of_floors").dirty||n.mItemForm.get("number_of_floors").touched))),l(2),m("ngIf",n.mItemForm.get("number_of_floors").invalid&&(n.mItemForm.get("number_of_floors").dirty||n.mItemForm.get("number_of_floors").touched)),l(11),m("ngClass",v(120,C,n.mItemForm.get("floor_to_floor_height").invalid&&(n.mItemForm.get("floor_to_floor_height").dirty||n.mItemForm.get("floor_to_floor_height").touched))),l(2),m("ngIf",n.mItemForm.get("floor_to_floor_height").invalid&&(n.mItemForm.get("floor_to_floor_height").dirty||n.mItemForm.get("floor_to_floor_height").touched)),l(11),m("ngClass",v(122,C,n.mItemForm.get("floor_area").invalid&&(n.mItemForm.get("floor_area").dirty||n.mItemForm.get("floor_area").touched))),l(2),m("ngIf",n.mItemForm.get("floor_area").invalid&&(n.mItemForm.get("floor_area").dirty||n.mItemForm.get("floor_area").touched)),l(11),m("ngClass",v(124,C,n.mItemForm.get("far").invalid&&(n.mItemForm.get("far").dirty||n.mItemForm.get("far").touched))),l(2),m("ngIf",n.mItemForm.get("far").invalid&&(n.mItemForm.get("far").dirty||n.mItemForm.get("far").touched)),l(11),m("ngClass",v(126,C,n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched))),l(2),m("ngIf",n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched)),l(14),m("disabled",n.mItemForm.invalid),l(50),m("ngForOf",n.mLandUsePlans),l(32),m("ngIf",n.itemForm.get("has_variations").invalid&&(n.itemForm.get("has_variations").dirty||n.itemForm.get("has_variations").touched)),l(4),m("ngIf",n.itemForm.get("has_variations").value==="yes"),l(9),m("ngClass",v(128,C,n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched))),l(2),m("ngIf",n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched)),l(11),m("ngClass",v(130,C,n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched))),l(2),m("ngIf",n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched)),l(21),m("ngClass",v(132,C,n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched))),l(2),m("ngIf",n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched)),l(11),m("ngClass",v(134,C,n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched))),l(2),m("ngIf",n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched)),l(11),m("ngClass",v(136,C,n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched)),l(11),m("ngClass",v(138,C,n.itemForm.get("topographical_survey_cad").invalid&&(n.itemForm.get("topographical_survey_cad").dirty||n.itemForm.get("topographical_survey_cad").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey_cad").invalid&&(n.itemForm.get("topographical_survey_cad").dirty||n.itemForm.get("topographical_survey_cad").touched)),l(24),m("ngClass",v(140,C,n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched))),l(2),m("ngIf",n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched)),l(11),m("ngClass",v(142,C,n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched))),l(2),m("ngIf",n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched)),l(21),m("ngClass",v(144,C,n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched))),l(2),m("ngIf",n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched)),l(21),P("ngModel",n.item.project_sustainability_brief),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",v(146,C,n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched))),l(2),m("ngIf",n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched)),l(11),m("ngClass",v(148,C,n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched))),l(2),m("ngIf",n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched)),l(11),P("ngModel",n.item.green_certification_id),m("ngClass",v(150,C,n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched))),l(5),m("ngForOf",n.mGreenCertifications),l(3),m("ngIf",n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched)),l(4),m("ngIf",n.itemForm.get("green_certification_id").value==="4"),l(19),P("ngModel",n.item.estimated_project_duration),m("ngClass",v(152,C,n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched)),l(11),P("ngModel",n.item.estimated_project_construction_cost),m("ngClass",v(154,C,n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched)),l(17),m("ngIf",n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),l(10),m("disabled",n.itemForm.invalid)}},dependencies:[te,ie,G,X,z,Q,ue,oe,fe,ve,$,Ee,Fe,he,ze,He,Ce,Ve,ae,Z,ee,le,Re,xe],encapsulation:2})}};function Yo(o,a){o&1&&f(0,"app-progress")}function Jo(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=_();l(),g(r.item.investor==null?null:r.item.investor.name)}}function Ko(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=_();l(),g(r.item.type==null?null:r.item.type.name)}}function Xo(o,a){o&1&&(i(0,"span"),e(1,","),t())}function Qo(o,a){if(o&1&&(i(0,"span",12),e(1),d(2,Xo,2,0,"span",0),t()),o&2){let r=a.$implicit,n=a.last;l(),D(" ",r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(),m("ngIf",!n)}}function Zo(o,a){if(o&1&&(i(0,"span"),e(1,`
                        `),d(2,Qo,3,2,"span",33),e(3,`
                      `),t()),o&2){let r=_(2);l(2),m("ngForOf",r.item.investor.parcels)}}function $o(o,a){if(o&1&&(i(0,"div",12),e(1,`
                    `),e(2,`
                      `),d(3,Zo,4,1,"span",0),e(4,`
                  `),t()),o&2){let r=_();l(3),m("ngIf",r.item.investor.parcels)}}function ea(o,a){if(o&1&&(i(0,"div",34),e(1,`
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
                              `),e(129,`
                              `),i(130,"td",41),e(131),t(),e(132,`
                              `),e(133,`
                              `),e(134,`
                              `),e(135,`
                              `),i(136,"td",42),e(137),t(),e(138,`
                            `),t(),e(139,`
                            `),i(140,"tr"),e(141,`
                              `),i(142,"th",40),e(143,"Min/Max Floor Area:"),t(),e(144,`
                              `),i(145,"td"),e(146),t(),e(147,`
                              `),i(148,"td",41),e(149),t(),e(150,`
                              `),i(151,"td",42),e(152,"-"),t(),e(153,`
                            `),t(),e(154,`
                            `),i(155,"tr"),e(156,`
                              `),i(157,"th",40),e(158,"Min/Max Floor-to-Floor Height:"),t(),e(159,`
                              `),i(160,"td"),e(161),t(),e(162,`
                              `),i(163,"td",41),e(164),t(),e(165,`
                              `),i(166,"td",42),e(167,"-"),t(),e(168,`
                            `),t(),e(169,`
                            `),i(170,"tr"),e(171,`
                              `),i(172,"th",40),e(173,"Min/Max FAR:"),t(),e(174,`
                              `),i(175,"td"),e(176),t(),e(177,`
                              `),i(178,"td",41),e(179),t(),e(180,`
                              `),i(181,"td",42),e(182,"-"),t(),e(183,`
                            `),t(),e(184,`
                            `),i(185,"tr"),e(186,`
                              `),i(187,"th",40),e(188,"Minimum Setback:"),t(),e(189,`
                              `),i(190,"td"),e(191),t(),e(192,`
                              `),i(193,"td",41),e(194),t(),e(195,`
                              `),i(196,"td",42),e(197),t(),e(198,`
                            `),t(),e(199,`
                          `),t(),e(200,`
                        `),t(),e(201,`
                      `),t(),e(202,`
                    `),t(),e(203,`
                  `),t()),o&2){let r=a.$implicit,n=a.index;l(7),T("",n+1,". ",r==null?null:r.parcel_number),l(30),g(r==null||r.parcel==null?null:r.parcel.name),l(3),g(r==null||r.planned_land_use==null?null:r.planned_land_use.name),l(12),g(r==null||r.parcel==null?null:r.parcel.predominant_land),l(3),g(r==null||r.primary_land_use==null?null:r.primary_land_use.name),l(12),g(r==null||r.parcel==null?null:r.parcel.secondary_use),l(3),g(r==null||r.secondary_land_use==null?null:r.secondary_land_use.name),l(12),g(r==null||r.parcel==null?null:r.parcel.preferred_ground_floor_use),l(3),g(r==null||r.preferred_ground_floor_use==null?null:r.preferred_ground_floor_use.name),l(12),g(r==null||r.parcel==null?null:r.parcel.number_of_units_to_be_developed),l(3),g(r.number_of_units_to_be_developed),l(12),T("",r==null||r.parcel==null?null:r.parcel.percentage_of_site_covered_by_proposed_building,"-",r==null||r.parcel==null?null:r.parcel.percentage_of_site_covered_by_existing_building),l(3),T("",r==null?null:r.percentage_of_site_covered_by_proposed_building,"-",r==null?null:r.percentage_of_site_covered_by_existing_building),l(12),T("",r==null||r.parcel==null?null:r.parcel.min_floors,"-",r==null||r.parcel==null?null:r.parcel.max_floors),l(4),g(r==null?null:r.number_of_floors),l(6),T("",(r==null?null:r.number_of_floors)-(r==null||r.parcel==null?null:r.parcel.min_floors)," | ",(r==null?null:r.number_of_floors)-(r==null||r.parcel==null?null:r.parcel.max_floors)),l(9),T("",r==null||r.parcel==null?null:r.parcel.min_floor_area,"-",r==null||r.parcel==null?null:r.parcel.min_floor_area),l(3),T("",r==null?null:r.min_floor_area,"-",r==null?null:r.min_floor_area),l(12),T("",r==null||r.parcel==null?null:r.parcel.min_floor_to_floor_height,"-",r==null||r.parcel==null?null:r.parcel.max_floor_to_floor_height),l(3),T("",r==null?null:r.min_floor_to_floor_height,"-",r==null?null:r.max_floor_to_floor_height),l(12),T("",r==null||r.parcel==null?null:r.parcel.min_far,"-",r==null||r.parcel==null?null:r.parcel.max_far),l(3),T("",r==null?null:r.min_far,"-",r==null?null:r.max_far),l(12),g(r==null||r.parcel==null?null:r.parcel.minimum_setback),l(3),g(r==null?null:r.minimum_setback),l(3),g((+(r==null?null:r.minimum_setback)||0)-(+(r==null||r.parcel==null?null:r.parcel.minimum_setback)||0))}}function ta(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",2),e(3,`
                  `),i(4,"label",14),e(5,"Variation Justification Statement:"),t(),e(6,`
                  `),i(7,"div",12),e(8,`
                    `),f(9,"span",26),e(10,`
                  `),t(),e(11,`
                `),t(),e(12,`
              `),t()),o&2){let r=_();l(9),m("innerHTML",r.mAppContextService.safeHtml(r.item.variation_justification_statement),Se)}}function ia(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.context_analysis_url),ce)}}function na(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.concept_plan_url),ce)}}function ra(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.geotechnical_report_url),ce)}}function oa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.topographical_survey_url),ce)}}function aa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.topographical_survey_cad_url),ce)}}function la(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.parking_strategy_url),ce)}}function ma(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.traffic_management_plan_url),ce)}}function da(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.estimated_utility_demand_requirements_url),ce)}}function sa(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",44),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"div",12),e(8),t(),e(9,`
                `),t(),e(10,`
              `),t()),o&2){let r=_();l(8),g(r.item.other_green_certification)}}function pa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",43),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=_();l(2),m("href",E(r.item.sustainability_report_url),ce)}}var Xe=class o{constructor(a,r,n,s,p,b){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=s;this.fb=p;this.route=b;this.mProgress=S(!1);this.item={};this.itemForm=this.fb.group({investor_id:["",c.required],plan_submission_type_id:["",c.required],project_brief:["",c.required],project_purpose:["",c.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPlanSubmissionTypes=a.data.plan_submission_types,this.mGreenCertifications=a.data.green_certifications,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,a).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(x(Y),x(re),x(H),x(W),x(me),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-show"]],standalone:!1,decls:365,vars:33,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],["for","investor_id"],["class","text-muted",4,"ngIf"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],[1,"text-muted",3,"innerHTML"],["for","context_analysis"],[1,"border","mb-3","p-3"],[1,"text-bold","text-muted"],["class","row mb-2",4,"ngFor","ngForOf"],["class","col-md-12",4,"ngIf"],[1,"col-md-6"],["for","concept_plan"],["for","topographical_survey"],["for","topographical_survey_cad"],["for","parking_strategy"],["routerLink","/downloads"],["for","traffic_management_plan"],[3,"innerHTML"],[1,"form-group","mb-3"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["for","estimated_project_duration"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["cButton","","color","success",1,"text-dark",3,"routerLink"],["class","text-muted",4,"ngFor","ngForOf"],[1,"row","mb-2"],[1,"col-12"],[1,"callout","callout-danger"],[1,"fw-bolder"],[1,"table","table-bordered","table-danger1"],["scope","col"],["scope","row"],[1,"text-success"],[1,"text-danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","other_green_certification"]],template:function(r,n){r&1&&(d(0,Yo,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,Jo,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,Ko,2,1,"div",10),e(38,`
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
                  `),f(70,"div",13),e(71,`
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
                  `),d(91,$o,5,1,"div",10),e(92,`
                `),t(),e(93,`
              `),t(),e(94,`
              `),i(95,"div",8),e(96,`
                `),i(97,"fieldset",15),e(98,`
                  `),i(99,"legend",5)(100,"h6",16),e(101,"Land Use Plan"),t()(),e(102,`
                  `),d(103,ea,204,36,"div",17),e(104,`
                `),t(),e(105,`
              `),t(),e(106,`
              `),i(107,"div",8),e(108,`
                `),i(109,"div",2),e(110,`
                  `),i(111,"label",14),e(112,"Require Variations:"),t(),e(113,`
                  `),i(114,"div",12),e(115),t(),e(116,`
                `),t(),e(117,`
              `),t(),e(118,`
              `),d(119,ta,13,1,"div",18),e(120,`
              `),i(121,"div",8),e(122,`
                `),i(123,"div",2),e(124,`
                  `),i(125,"label",14),e(126,"Context Analysis (500m radius context analysis):"),t(),e(127,`
                  `),d(128,ia,5,2,"div",0),e(129,`
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
                  `),d(149,na,5,2,"div",0),e(150,`
                `),t(),e(151,`
              `),t(),e(152,`
              `),i(153,"div",19),e(154,`
                `),i(155,"div",2),e(156,`
                  `),i(157,"label",20),e(158,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(159,`
                  `),d(160,ra,5,2,"div",0),e(161,`
                `),t(),e(162,`
              `),t(),e(163,`
              `),i(164,"div",19),e(165,`
                `),i(166,"div",2),e(167,`
                  `),i(168,"label",21),e(169,"Topographical Survey (PDF):"),t(),e(170,`
                  `),d(171,oa,5,2,"div",0),e(172,`
                `),t(),e(173,`
              `),t(),e(174,`
              `),i(175,"div",19),e(176,`
                `),i(177,"div",2),e(178,`
                  `),i(179,"label",22),e(180,"Topographical Survey (CAD):"),t(),e(181,`
                  `),d(182,aa,5,2,"div",0),e(183,`
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
                  `),d(206,la,5,2,"div",0),e(207,`
                `),t(),e(208,`
              `),t(),e(209,`
              `),i(210,"div",8),e(211,`
                `),i(212,"div",2),e(213,`
                  `),i(214,"label",25),e(215,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(216,`
                  `),d(217,ma,5,2,"div",0),e(218,`
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
                  `),d(238,da,5,2,"div",0),e(239,`
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
                    `),f(261,"span",26),e(262,`
                  `),t(),e(263,`
                `),t(),e(264,`
              `),t(),e(265,`
              `),i(266,"div",8),e(267,`
                  `),i(268,"div",2),e(269,`
                    `),i(270,"label",9),e(271,"Green Certification:"),t(),e(272,`
                    `),i(273,"div",12),e(274),t(),e(275,`
                  `),t(),e(276,`
              `),t(),e(277,`
              `),d(278,sa,11,1,"div",18),e(279,`
              `),i(280,"div",8),e(281,`
                `),i(282,"div",27),e(283,`
                  `),i(284,"label",28),e(285,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(286,`
                  `),d(287,pa,5,2,"div",0),e(288,`
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
                  `),i(332,"div",12),e(333),Oe(334,"currency"),t(),e(335,`
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
`),t()),r&2&&(m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngIf",n.item.investor),l(11),m("ngIf",n.item.type),l(22),g(n.item.project_brief),l(11),m("innerHTML",n.item.project_purpose,Se),l(21),m("ngIf",n.item.investor),l(12),m("ngForOf",n.item.land_use_plans),l(12),g(n.item.has_variations),l(4),m("ngIf",n.item.variation_justification_statement),l(9),m("ngIf",n.item.context_analysis),l(21),m("ngIf",n.item.concept_plan),l(11),m("ngIf",n.item.geotechnical_report),l(11),m("ngIf",n.item.topographical_survey),l(11),m("ngIf",n.item.topographical_survey_cad),l(24),m("ngIf",n.item.parking_strategy),l(11),m("ngIf",n.item.traffic_management_plan),l(21),m("ngIf",n.item.estimated_utility_demand_requirements),l(23),m("innerHTML",n.mAppContextService.safeHtml(n.item.project_sustainability_brief),Se),l(13),g(n.item.green_certification==null?null:n.item.green_certification.name),l(4),m("ngIf",n.item.green_certification_id===4),l(9),m("ngIf",n.item.sustainability_report),l(22),g(n.item.require_variations),l(12),g(n.item.estimated_project_duration),l(12),g(ut(334,28,n.item.estimated_project_construction_cost,"USD","symbol","1.2-2")),l(13),g(n.item.commitment_to_comply_with_development_codes_and_guidelines),l(11),m("routerLink",je("/construction-permits/process/",n.item.id)))},dependencies:[ie,G,X,z,Q,ue,oe,fe,ve,$,Z,ee,gt],encapsulation:2})}};var Ut=o=>({"is-invalid":o});function _a(o,a){o&1&&f(0,"app-progress")}function ca(o,a){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.alias)}}function ua(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fa(o,a){if(o&1&&(i(0,"div",16),d(1,ua,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function va(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ga(o,a){if(o&1&&(i(0,"div",16),d(1,va,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("remarks").errors)==null?null:r.required)}}var Qe=class o{constructor(a,r,n,s,p,b){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=s;this.fb=p;this.route=b;this.mProgress=S(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({status_id:["",c.required],remarks:["",c.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=S(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=S(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=S(!1)}})}onSubmit(a){let r={id:this.id,status_id:a.status_id,remarks:a.remarks};this.mProgress=S(!0),this.mConstructionPermitService.processItemPlanner(r).subscribe({next:n=>{n.status==="success"?(this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=S(!1)):(this.mToastrService.error(n.message),this.router.navigateByUrl("/construction-permits/variations/"+this.id),this.mProgress=S(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=S(!1)}})}getNextPreviousStatus(){this.mProgress=S(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=S(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=S(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(x(H),x(Y),x(W),x(re),x(me),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(d(0,_a,1,0,"app-progress",0),i(1,"div")(2,"form",1),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,ca,2,3,"option",8),t(),d(12,fa,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),t(),f(17,"ckeditor",11),d(18,ga,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),r&2){let s,p;m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(6),m("ngClass",v(10,Ut,((s=n.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("status_id"))==null?null:s.dirty)||((s=n.itemForm.get("status_id"))==null?null:s.touched)))),l(3),m("ngForOf",n.mNextPreviousStatuses),l(),m("ngIf",((p=n.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("status_id"))==null?null:p.dirty)||((p=n.itemForm.get("status_id"))==null?null:p.touched))),l(5),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",v(12,Ut,n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched))),l(),m("ngIf",n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched)),l(4),m("disabled",n.itemForm.invalid)}},dependencies:[te,ie,G,X,z,Q,$,Ee,Fe,Ce,ae,Z,ee,le,xe],encapsulation:2})}};var ya=()=>[1],Sa=()=>[11],Ze=o=>({"is-invalid":o});function ba(o,a){o&1&&f(0,"app-progress")}function ha(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ca(o,a){if(o&1&&(i(0,"div",17),d(1,ha,2,0,"div",0),t()),o&2){let r,n=_(2);l(),m("ngIf",(r=n.itemForm.get("topographical_survey_review").errors)==null?null:r.required)}}function Ea(o,a){if(o&1){let r=U();i(0,"div")(1,"div",2)(2,"div",3)(3,"div",4)(4,"label",15),e(5,"Topographical Survey Review:"),t(),i(6,"ckeditor",16),q("ngModelChange",function(s){R(r);let p=_();return w(p.item.topographical_survey_review,s)||(p.item.topographical_survey_review=s),V(s)}),t(),d(7,Ca,2,1,"div",7),t()()()()}if(o&2){let r=_();l(6),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),P("ngModel",r.item.topographical_survey_review),m("ngClass",v(5,Ze,r.itemForm.get("topographical_survey_review").invalid&&(r.itemForm.get("topographical_survey_review").dirty||r.itemForm.get("topographical_survey_review").touched))),l(),m("ngIf",r.itemForm.get("topographical_survey_review").invalid&&(r.itemForm.get("topographical_survey_review").dirty||r.itemForm.get("topographical_survey_review").touched))}}function Fa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ia(o,a){if(o&1&&(i(0,"div",17),d(1,Fa,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("geotechnical_survey_review").errors)==null?null:r.required)}}function Ta(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Pa(o,a){if(o&1&&(i(0,"div",17),d(1,Ta,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("traffic_management_plan_and_parking_strategy_review").errors)==null?null:r.required)}}function wa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qa(o,a){if(o&1&&(i(0,"div",17),d(1,wa,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("utility_demand").errors)==null?null:r.required)}}var $e=class o{constructor(a,r,n,s,p,b){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=s;this.fb=p;this.route=b;this.mProgress=S(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({topographical_survey_review:["",c.nullValidator],geotechnical_survey_review:["",c.nullValidator],traffic_management_plan_and_parking_strategy_review:["",c.nullValidator],utility_demand:["",c.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=S(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress=S(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=S(!1)}})}onSubmit(a){let r={id:this.id,topographical_survey_review:a.topographical_survey_review,geotechnical_survey_review:a.geotechnical_survey_review,traffic_management_plan_and_parking_strategy_review:a.traffic_management_plan_and_parking_strategy_review,utility_demand:a.utility_demand};this.mProgress=S(!0),this.mConstructionPermitService.professionalReviewItem(r).subscribe({next:n=>{this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=S(!1)},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=S(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(x(H),x(Y),x(W),x(re),x(me),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-professional-review"]],standalone:!1,decls:33,vars:27,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","geotechnical_survey_review",1,"col-form-label","required"],["formControlName","geotechnical_survey_review","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","traffic_management_plan_and_parking_strategy_review",1,"col-form-label","required"],["formControlName","traffic_management_plan_and_parking_strategy_review","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","utility_demand",1,"col-form-label","required"],["formControlName","utility_demand","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],["for","topographical_survey_review",1,"col-form-label","required"],["formControlName","topographical_survey_review","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["role","alert",1,"invalid-feedback"]],template:function(r,n){r&1&&(d(0,ba,1,0,"app-progress",0),i(1,"div")(2,"form",1),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),d(3,Ea,8,7,"div",0),i(4,"div")(5,"div",2)(6,"div",3)(7,"div",4)(8,"label",5),e(9,"Geotechnical Survey Review:"),t(),i(10,"ckeditor",6),q("ngModelChange",function(p){return w(n.item.geotechnical_survey_review,p)||(n.item.geotechnical_survey_review=p),p}),t(),d(11,Ia,2,1,"div",7),t()()()(),i(12,"div")(13,"div",2)(14,"div",3)(15,"div",4)(16,"label",8),e(17,"Traffic Management Plan and Parking Strategy Review:"),t(),i(18,"ckeditor",9),q("ngModelChange",function(p){return w(n.item.traffic_management_plan_and_parking_strategy_review,p)||(n.item.traffic_management_plan_and_parking_strategy_review=p),p}),t(),d(19,Pa,2,1,"div",7),t()()()(),i(20,"div")(21,"div",2)(22,"div",3)(23,"div",4)(24,"label",10),e(25,"Utility Demand:"),t(),i(26,"ckeditor",11),q("ngModelChange",function(p){return w(n.item.utility_demand,p)||(n.item.utility_demand=p),p}),t(),d(27,qa,2,1,"div",7),t()()()(),i(28,"div",12)(29,"button",13),e(30,"Cancel"),t(),i(31,"button",14),e(32,"Submit"),t()()()()),r&2&&(m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(),m("ngIf",n.mAppContextService.hasRoles(K(19,ya))||n.mAppContextService.hasRoles(K(20,Sa))),l(7),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),P("ngModel",n.item.geotechnical_survey_review),m("ngClass",v(21,Ze,n.itemForm.get("geotechnical_survey_review").invalid&&(n.itemForm.get("geotechnical_survey_review").dirty||n.itemForm.get("geotechnical_survey_review").touched))),l(),m("ngIf",n.itemForm.get("geotechnical_survey_review").invalid&&(n.itemForm.get("geotechnical_survey_review").dirty||n.itemForm.get("geotechnical_survey_review").touched)),l(7),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),P("ngModel",n.item.traffic_management_plan_and_parking_strategy_review),m("ngClass",v(23,Ze,n.itemForm.get("traffic_management_plan_and_parking_strategy_review").invalid&&(n.itemForm.get("traffic_management_plan_and_parking_strategy_review").dirty||n.itemForm.get("traffic_management_plan_and_parking_strategy_review").touched))),l(),m("ngIf",n.itemForm.get("traffic_management_plan_and_parking_strategy_review").invalid&&(n.itemForm.get("traffic_management_plan_and_parking_strategy_review").dirty||n.itemForm.get("traffic_management_plan_and_parking_strategy_review").touched)),l(7),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),P("ngModel",n.item.utility_demand),m("ngClass",v(25,Ze,n.itemForm.get("utility_demand").invalid&&(n.itemForm.get("utility_demand").dirty||n.itemForm.get("utility_demand").touched))),l(),m("ngIf",n.itemForm.get("utility_demand").invalid&&(n.itemForm.get("utility_demand").dirty||n.itemForm.get("utility_demand").touched)),l(4),m("disabled",n.itemForm.invalid))},dependencies:[te,G,X,z,Q,$,ae,Z,ee,le,xe],encapsulation:2})}};var Gt=o=>({"is-invalid":o});function Na(o,a){o&1&&f(0,"app-progress")}function ka(o,a){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.alias)}}function ja(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Aa(o,a){if(o&1&&(i(0,"div",16),d(1,ja,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function Ra(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Va(o,a){if(o&1&&(i(0,"div",16),d(1,Ra,2,0,"div",0),t()),o&2){let r,n=_();l(),m("ngIf",(r=n.itemForm.get("remarks").errors)==null?null:r.required)}}var et=class o{constructor(a,r,n,s,p,b){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=s;this.fb=p;this.route=b;this.mProgress=S(!1);this.item={};this.mEditor=ge;this.itemForm=this.fb.group({status_id:["",c.required],remarks:["",c.nullValidator]})}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getItem()}getItem(){this.mProgress=S(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=S(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=S(!1)}})}onSubmit(a){let r={id:this.id,status_id:a.status_id,remarks:a.remarks};this.mProgress=S(!0),this.mConstructionPermitService.cmItemPlanner(r).subscribe({next:n=>{this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=S(!1)},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=S(!1)}})}getNextPreviousStatus(){this.mProgress=S(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=S(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=S(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(x(H),x(Y),x(W),x(re),x(me),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-cm-approval"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(d(0,Na,1,0,"app-progress",0),i(1,"div")(2,"form",1),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,ka,2,3,"option",8),t(),d(12,Aa,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Additional Remarks:"),t(),f(17,"ckeditor",11),d(18,Va,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),r&2){let s,p;m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(6),m("ngClass",v(10,Gt,((s=n.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("status_id"))==null?null:s.dirty)||((s=n.itemForm.get("status_id"))==null?null:s.touched)))),l(3),m("ngForOf",n.mNextPreviousStatuses),l(),m("ngIf",((p=n.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("status_id"))==null?null:p.dirty)||((p=n.itemForm.get("status_id"))==null?null:p.touched))),l(5),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",v(12,Gt,n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched))),l(),m("ngIf",n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched)),l(4),m("disabled",n.itemForm.invalid)}},dependencies:[te,ie,G,X,z,Q,$,Ee,Fe,Ce,ae,Z,ee,le,xe],encapsulation:2})}};var at=()=>[1],La=()=>[10,11],Ba=()=>[11,13,14,18],Oa=()=>[17,10,11];function Ua(o,a){o&1&&f(0,"app-progress")}function Ga(o,a){if(o&1&&(i(0,"div",6),e(1,`
              `),i(2,"label",15),e(3,"Company:"),t(),e(4,`
              `),i(5,"div",8),e(6),t(),e(7,`
            `),t()),o&2){let r=_();l(6),g(r.item.investor==null?null:r.item.investor.name)}}function Wa(o,a){if(o&1&&(i(0,"div"),e(1,`
                      `),f(2,"span",16),e(3,`
                    `),t()),o&2){let r=_();l(2),m("innerHTML",r.mAppContextService.safeHtml(r.item.topographical_survey_review),Se)}}function Ha(o,a){if(o&1&&(i(0,"div"),e(1,`
                      `),f(2,"span",16),e(3,`
                    `),t()),o&2){let r=_();l(2),m("innerHTML",r.mAppContextService.safeHtml(r.item.geotechnical_survey_review),Se)}}function za(o,a){if(o&1&&(i(0,"div"),e(1,`
                      `),f(2,"span",16),e(3,`
                    `),t()),o&2){let r=_();l(2),m("innerHTML",r.mAppContextService.safeHtml(r.item.traffic_management_plan_and_parking_strategy_review),Se)}}function Ya(o,a){if(o&1&&(i(0,"div"),e(1,`
                      `),f(2,"span",16),e(3,`
                    `),t()),o&2){let r=_();l(2),m("innerHTML",r.mAppContextService.safeHtml(r.item.utility_demand),Se)}}function Ja(o,a){o&1&&(i(0,"div"),e(1,`
              `),f(2,"app-review"),e(3,`
            `),t())}function Ka(o,a){o&1&&(i(0,"div"),e(1,`
              `),f(2,"app-professional-review"),e(3,`
            `),t())}function Xa(o,a){o&1&&(i(0,"div"),e(1,`
              `),f(2,"app-cm-approval"),e(3,`
            `),t())}var tt=class o{constructor(a,r,n,s){this.mConstructionPermitService=a;this.mAppContextService=r;this.mToastrService=n;this.route=s;this.item={};this.mProgress=S(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(r){return new(r||o)(x(Y),x(W),x(H),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-process"]],standalone:!1,decls:104,vars:16,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],["for","topographical_survey_review",1,"col-form-label","required1"],["for","traffic_management_plan_and_parking_strategy_review",1,"col-form-label","required1"],["for","utility_demand",1,"col-form-label","required1"],["for","investor_id",1,"col-form-label","required"],[3,"innerHTML"]],template:function(r,n){r&1&&(d(0,Ua,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div",3),e(10,`
          `),i(11,"div",4),e(12,`
            `),d(13,Ga,8,1,"div",5),e(14,`
          `),t(),e(15,`
          `),i(16,"div",4),e(17,`
            `),i(18,"div",6),e(19,`
              `),i(20,"label",7),e(21,"Project Brief:"),t(),e(22,`
              `),i(23,"div",8),e(24),t(),e(25,`
            `),t(),e(26,`
          `),t(),e(27,`
          `),i(28,"div",4),e(29,`
            `),i(30,"fieldset",9),e(31,`
              `),i(32,"legend",10)(33,"h6",11),e(34,"Professional Reviews"),t()(),e(35,`
              `),i(36,"div",3),e(37,`
                `),i(38,"div",4),e(39,`
                  `),i(40,"div",6),e(41,`
                    `),i(42,"label",12),e(43,"Topographical Survey Review:"),t(),e(44,`
                    `),d(45,Wa,4,1,"div",0),e(46,`
                  `),t(),e(47,`
                `),t(),e(48,`
                `),i(49,"div",4),e(50,`
                  `),i(51,"div",6),e(52,`
                    `),i(53,"label",12),e(54,"Geotechnical Survey Review:"),t(),e(55,`
                    `),d(56,Ha,4,1,"div",0),e(57,`
                  `),t(),e(58,`
                `),t(),e(59,`
                `),i(60,"div",4),e(61,`
                  `),i(62,"div",6),e(63,`
                    `),i(64,"label",13),e(65,"Traffic Management Plan and Parking Strategy Review:"),t(),e(66,`
                    `),d(67,za,4,1,"div",0),e(68,`
                  `),t(),e(69,`
                `),t(),e(70,`
                `),i(71,"div",4),e(72,`
                  `),i(73,"div",6),e(74,`
                    `),i(75,"label",14),e(76,"Utility Demand:"),t(),e(77,`
                    `),d(78,Ya,4,1,"div",0),e(79,`
                  `),t(),e(80,`
                `),t(),e(81,`
              `),t(),e(82,`
            `),t(),e(83,`
          `),t(),e(84,`
        `),t(),e(85,`

        `),i(86,"div",3),e(87,`
          `),i(88,"div",4),e(89,`
            `),e(90,`
            `),d(91,Ja,4,0,"div",0),e(92,`
            `),e(93,`
            `),d(94,Ka,4,0,"div",0),e(95,`
            `),e(96,`
            `),d(97,Xa,4,0,"div",0),e(98,`
          `),t(),e(99,`
        `),t(),e(100,`

      `),t(),e(101,`
    `),t(),e(102,`
  `),t(),e(103,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(13),m("ngIf",n.item.investor),l(11),g(n.item.project_brief),l(21),m("ngIf",n.item.topographical_survey_review),l(11),m("ngIf",n.item.geotechnical_survey_review),l(11),m("ngIf",n.item.traffic_management_plan_and_parking_strategy_review),l(11),m("ngIf",n.item.utility_demand),l(13),m("ngIf",(n.item==null?null:n.item.status_id)==3&&(n.mAppContextService.hasRoles(K(10,at))||n.mAppContextService.hasRoles(K(11,La)))),l(3),m("ngIf",(n.item==null?null:n.item.status_id)==4&&(n.mAppContextService.hasRoles(K(12,at))||n.mAppContextService.hasRoles(K(13,Ba)))),l(3),m("ngIf",(n.item==null?null:n.item.status_id)==5&&(n.mAppContextService.hasRoles(K(14,at))||n.mAppContextService.hasRoles(K(15,Oa)))))},dependencies:[G,z,ue,oe,fe,ve,Qe,$e,et],encapsulation:2})}};var lt=o=>({"is-invalid":o});function Qa(o,a){o&1&&f(0,"app-progress")}function Za(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=_();l(),g(r.item.investor==null?null:r.item.investor.name)}}function $a(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=_();l(),g(r.item.type==null?null:r.item.type.name)}}function el(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=_(2);l(),g(r.item.variation_status==null?null:r.item.variation_status.name)}}function tl(o,a){if(o&1&&(i(0,"div",7),e(1,`
                `),i(2,"div",11),e(3,`
                  `),i(4,"h6",19),e(5),t(),e(6,`
                `),t(),e(7,`
                `),i(8,"div",20),e(9,`
                  `),i(10,"div",21),e(11,`
                      `),i(12,"h6",22),e(13,"Initial"),t(),e(14,`
                      `),e(15,`
                      `),i(16,"small"),e(17),f(18,"br"),e(19),f(20,"br"),e(21),f(22,"br"),e(23),f(24,"br"),e(25),f(26,"br"),e(27),f(28,"br"),e(29),f(30,"br"),e(31,`
                      `),t(),e(32,`
                  `),t(),e(33,`
                `),t(),e(34,`
                `),i(35,"div",20),e(36,`
                  `),i(37,"div",23),e(38,`
                      `),i(39,"h6",24),e(40,"Proposed"),t(),e(41,`
                      `),e(42,`
                      `),e(43,`
                      `),i(44,"small"),e(45),f(46,"br"),e(47),f(48,"br"),e(49),f(50,"br"),e(51),f(52,"br"),e(53),f(54,"br"),e(55),f(56,"br"),e(57),f(58,"br"),e(59),f(60,"br"),e(61,`
                      `),t(),e(62,`
                  `),t(),e(63,`
                `),t(),e(64,`
                `),i(65,"div",25),e(66,`
                  `),i(67,"div",2),e(68,`
                    `),i(69,"label",26),e(70,"Variations Status:"),t(),e(71,`
                    `),d(72,el,2,1,"div",10),e(73,`
                  `),t(),e(74,`
                `),t(),e(75,`
              `),t()),o&2){let r=a.$implicit,n=a.index,s=_();l(5),T("",n+1,". ",r.parcel==null?null:r.parcel.number),l(12),D(`
                        Acres: `,r.parcel==null?null:r.parcel.acres," "),l(2),T(`
                        Min/Max Floors: `,r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(2),T(`
                        Min/Max FAR: `,r.parcel==null?null:r.parcel.min_far,"-",r.parcel==null?null:r.parcel.max_far),l(2),T(`
                        Min/Max Floors: `,r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(2),T(`
                        Min/Max Floor Area: `,r.parcel==null?null:r.parcel.min_floor_area,"-",r.parcel==null?null:r.parcel.max_floor_area),l(2),D(`
                        Plot Coverage: `,r.parcel==null?null:r.parcel.plot_coverage,"% "),l(2),D(`
                        Use: `,r.parcel==null?null:r.parcel.description," "),l(16),D(`
                        Acres: `,r.acres," "),l(2),T(`
                        Min/Max Floors: `,r.min_floors,"-",r.max_floors),l(2),T(`
                        Min/Max FAR: `,r.min_far,"-",r.max_far),l(2),T(`
                        Min/Max Floors: `,r.min_number_of_floors,"-",r.max_number_of_floors),l(2),T(`
                        Min/Max Floor Area: `,r.min_floor_area,"-",r.max_floor_area),l(2),T(`
                        Plot Coverage (Proposed/Existing): `,r.percentage_of_site_covered_by_proposed_building,"-",r.percentage_of_site_covered_by_existing_building,"% "),l(2),D(`
                        Number of Units to be Developed: `,r.number_of_units_to_be_developed," "),l(2),D(`
                        Use: `,r.description," "),l(13),m("ngIf",s.item.variation_status)}}function il(o,a){if(o&1){let r=U();i(0,"div",34),e(1,`
                    `),i(2,"input",35),q("ngModelChange",function(s){R(r);let p=_(2);return w(p.item.variation_status.id,s)||(p.item.variation_status.id=s),V(s)}),t(),e(3,`
                    `),i(4,"label",36),e(5),t(),e(6,`
                  `),t()}if(o&2){let r=a.$implicit,n=_(2);l(2),m("value",r.id),P("ngModel",n.item.variation_status.id),l(3),D(" ",r.alias," ")}}function nl(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function rl(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,nl,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("variation_status_id").errors)==null?null:r.required)}}function ol(o,a){if(o&1&&(i(0,"span")(1,"a",40),e(2,"File"),t()()),o&2){let r=_(3);l(),m("href",E(r.item.conditions_of_approval_url),ce)}}function al(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ll(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,al,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(3);l(2),m("ngIf",(r=n.itemForm.get("conditions_of_approval").errors)==null?null:r.required)}}function ml(o,a){if(o&1){let r=U();i(0,"div",11),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",38),e(5,"Conditions of Approval (Evidence):"),t(),e(6,`
                  `),d(7,ol,3,2,"span",0),e(8,`
                  `),i(9,"input",39),y("change",function(s){R(r);let p=_(2);return V(p.onConditionsOfApprovalEvidenceChange(s))}),t(),e(10,`
                  `),d(11,ll,4,1,"div",30),e(12,`
                `),t(),e(13,`
              `),t()}if(o&2){let r=_(2);l(7),m("ngIf",r.item.conditions_of_approval),l(2),m("ngClass",v(3,lt,r.itemForm.get("conditions_of_approval").invalid&&(r.itemForm.get("conditions_of_approval").dirty||r.itemForm.get("conditions_of_approval").touched))),l(2),m("ngIf",r.itemForm.get("conditions_of_approval").invalid&&(r.itemForm.get("conditions_of_approval").dirty||r.itemForm.get("conditions_of_approval").touched))}}function dl(o,a){if(o&1&&(i(0,"span")(1,"a",40),e(2,"File"),t()()),o&2){let r=_(3);l(),m("href",E(r.item.reasons_for_rejection_url),ce)}}function sl(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function pl(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,sl,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(3);l(2),m("ngIf",(r=n.itemForm.get("reasons_for_rejection").errors)==null?null:r.required)}}function _l(o,a){if(o&1){let r=U();i(0,"div",11),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",41),e(5,"Reasons for Rejection (Evidence):"),t(),e(6,`
                  `),d(7,dl,3,2,"span",0),e(8,`
                  `),i(9,"input",42),y("change",function(s){R(r);let p=_(2);return V(p.onReasonsForRejectionEvidenceChange(s))}),t(),e(10,`
                  `),d(11,pl,4,1,"div",30),e(12,`
                `),t(),e(13,`
              `),t()}if(o&2){let r=_(2);l(7),m("ngIf",r.item.reasons_for_rejection),l(2),m("ngClass",v(3,lt,r.itemForm.get("reasons_for_rejection").invalid&&(r.itemForm.get("reasons_for_rejection").dirty||r.itemForm.get("reasons_for_rejection").touched))),l(2),m("ngIf",r.itemForm.get("reasons_for_rejection").invalid&&(r.itemForm.get("reasons_for_rejection").dirty||r.itemForm.get("reasons_for_rejection").touched))}}function cl(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ul(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,cl,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=_(2);l(2),m("ngIf",(r=n.itemForm.get("variation_comments").errors)==null?null:r.required)}}function fl(o,a){if(o&1){let r=U();i(0,"div",7),e(1,`
              `),i(2,"div",11),e(3,`
                `),i(4,"div",27),e(5,`
                  `),i(6,"label",28),e(7,"Variations status:"),t(),e(8,`
                  `),e(9,`
                  `),e(10,`
                  `),d(11,il,7,3,"div",29),e(12,`
                  `),d(13,rl,4,1,"div",30),e(14,`
                `),t(),e(15,`
              `),t(),e(16,`
              `),d(17,ml,14,5,"div",31),e(18,`
              `),d(19,_l,14,5,"div",31),e(20,`
              `),i(21,"div",11),e(22,`
                `),i(23,"div",27),e(24,`
                  `),i(25,"label",32),e(26,"Variation Comments:"),t(),e(27,`
                  `),i(28,"ckeditor",33),q("ngModelChange",function(s){R(r);let p=_();return w(p.item.variation_comments,s)||(p.item.variation_comments=s),V(s)}),t(),e(29,`
                  `),d(30,ul,4,1,"div",30),e(31,`
                `),t(),e(32,`
              `),t(),e(33,`
            `),t()}if(o&2){let r=_();l(11),m("ngForOf",r.mConstructionPermitVariationStatuses),l(2),m("ngIf",r.itemForm.get("variation_status_id").invalid&&(r.itemForm.get("variation_status_id").dirty||r.itemForm.get("variation_status_id").touched)),l(4),m("ngIf",r.itemForm.get("variation_status_id").value==2),l(2),m("ngIf",r.itemForm.get("variation_status_id").value==3),l(9),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),P("ngModel",r.item.variation_comments),m("ngClass",v(9,lt,r.itemForm.get("variation_comments").invalid&&(r.itemForm.get("variation_comments").dirty||r.itemForm.get("variation_comments").touched))),l(2),m("ngIf",r.itemForm.get("variation_comments").invalid&&(r.itemForm.get("variation_comments").dirty||r.itemForm.get("variation_comments").touched))}}var it=class o{constructor(a,r,n,s,p,b){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=s;this.fb=p;this.route=b;this.mProgress=S(!1);this.mEditor=ge;this.item={};this.itemForm=this.fb.group({variation_status_id:["",c.required],conditions_of_approval:["",c.nullValidator],reasons_for_rejection:["",c.nullValidator],variation_comments:["",c.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}onSubmit(a){let r=new FormData;r.append("variation_status_id",a.variation_status_id),r.append("variation_comments",a.variation_comments),this.conditions_of_approval_file?r.append("conditions_of_approval",this.conditions_of_approval_file,this.conditions_of_approval_file.name):r.append("conditions_of_approval",""),this.reasons_for_rejection_file?r.append("reasons_for_rejection",this.reasons_for_rejection_file,this.reasons_for_rejection_file.name):r.append("reasons_for_rejection",""),r.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.processItemVariations(this.id,r).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.processUnpaginatedItems().subscribe({next:a=>{a&&(this.mConstructionPermitVariationStatuses=a.data.construction_permit_variation_statuses,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onConditionsOfApprovalEvidenceChange(a){if(a.target.value){let r=a.target.files[0];this.conditions_of_approval_file=r}}onReasonsForRejectionEvidenceChange(a){if(a.target.value){let r=a.target.files[0];this.reasons_for_rejection_file=r}}static{this.\u0275fac=function(r){return new(r||o)(x(Y),x(re),x(H),x(W),x(me),x(ne))}}static{this.\u0275cmp=O({type:o,selectors:[["app-variation"]],standalone:!1,decls:100,vars:7,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"pb-2"],["class","row",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",1,"text-dark"],[1,"fw-bolder"],[1,"col-md-6","mb-3"],[1,"callout","callout-success","h-100"],[1,"text-success","fw-bold"],[1,"callout","callout-danger","h-100"],[1,"text-danger","fw-bold"],[1,"col-md-12","mt-2"],["for","context_analysis"],[1,"form-group","mb-3"],["for","variation_status_id",1,"col-form-label","required"],["class","form-check",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","variation_comments",1,"col-form-label","required"],["formControlName","variation_comments","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],[1,"form-check"],["type","radio","formControlName","variation_status_id",1,"form-check-input",3,"ngModelChange","value","ngModel"],[1,"form-check-label"],["role","alert",1,"invalid-feedback"],["for","conditions_of_approval",1,"col-form-label","required"],["formControlName","conditions_of_approval","type","file",1,"form-control",3,"change","ngClass"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","reasons_for_rejection",1,"col-form-label","required"],["formControlName","reasons_for_rejection","type","file",1,"form-control",3,"change","ngClass"]],template:function(r,n){r&1&&(d(0,Qa,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,Za,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,$a,2,1,"div",10),e(38,`
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
              `),d(74,tl,76,27,"div",14),e(75,`
            `),t(),e(76,`
          `),t(),e(77,`

          `),i(78,"fieldset",4),e(79,`
            `),i(80,"legend",5)(81,"h6",6),e(82,"PROCESS"),t()(),e(83,`
            `),d(84,fl,34,11,"div",15),e(85,`
          `),t(),e(86,`

          `),i(87,"div",16),e(88,`
            `),i(89,"button",17),e(90,"Cancel"),t(),e(91,`
            `),i(92,"button",18),e(93,"Submit"),t(),e(94,`
          `),t(),e(95,`

        `),t(),e(96,`

      `),t(),e(97,`
    `),t(),e(98,`
  `),t(),e(99,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngIf",n.item.investor),l(11),m("ngIf",n.item.type),l(22),g(n.item.project_brief),l(15),m("ngForOf",n.item.variations),l(10),m("ngIf",n.mConstructionPermitVariationStatuses&&n.mConstructionPermitVariationStatuses.length>0))},dependencies:[te,ie,G,X,z,Q,ue,oe,fe,ve,$,he,Ve,ae,Z,ee,le,xe],encapsulation:2})}};var vl=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Ye,data:{title:"Construction Permits / Masterplan Submission"}},{path:"create",component:Je,data:{title:"Construction Permits / Masterplan Submission / Create"}},{path:"edit/:id",component:Ke,data:{title:"Construction Permits / Masterplan Submission / Edit"}},{path:"show/:id",component:Xe,data:{title:"Construction Permits / Masterplan Submission / Show"}},{path:"process/:id",component:tt,data:{title:"Construction Permits / Process"}},{path:"variations/:id",component:it,data:{title:"Construction Permits / Variations"}}],nt=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=Be({type:o})}static{this.\u0275inj=Le({imports:[Ue,rt.forChild(vl),rt]})}};var Wt=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=Be({type:o})}static{this.\u0275inj=Le({imports:[Ue,nt,jt,St,Ct,oe,Tt,Pt,qt,yt,kt,wt,Vt,xt,bt,We,Ge,Dt]})}};export{Wt as ConstructionPermitModule};
