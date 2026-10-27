import{a as _t}from"./chunk-RWJQYMIB.js";import{a as R,b as he,c as S,e as P}from"./chunk-ZA7FNFH2.js";import{a as I}from"./chunk-35TDJECS.js";import{b as $,c as v,d as K,e as z,f as mt,g as at,h as Y,i as Ee,j as J,k as Q,l as ee,m as te,n as ie,o as ne,p as lt}from"./chunk-WNMX7QA7.js";import{Ab as D,Ac as G,Ba as l,Bb as L,Ca as r,Cb as E,Cc as Qe,Da as n,Dc as Xe,Ea as g,Eb as $e,Hb as Se,J as Be,K as fe,Lb as Ke,M as De,Mb as ze,Mc as Ze,Na as ye,Oc as H,P as ve,Pa as N,Pc as U,Q as ge,Ra as u,Rc as et,Tb as W,Vb as Z,Wb as F,Xc as tt,Y as x,Ya as Le,a as ae,ab as e,b as le,bb as f,bc as Re,cb as We,da as je,e as ct,eb as M,ed as it,fb as q,fd as nt,gb as k,gd as rt,ha as a,hb as A,ib as re,kb as j,lb as _,ld as ot,mb as Ve,nb as be,oa as c,ob as Ge,oc as Ye,pa as h,pb as He,qa as xe,sb as Ue,sc as Ce,ta as s,tc as Je,zc as V}from"./chunk-AGOFN3EQ.js";var st=ct(_t());var C=class o{constructor(m,i){this.mAppContextService=m;this.http=i}allItems(){let m=`${R.base_url}/permits`;return this.http.get(m,this.mAppContextService.getHttpOptions())}createItem(m){let i=`${R.base_url}/permits`;return this.http.post(i,m,this.mAppContextService.getHttpOptions())}getOneItem(m){let i=`${R.base_url}/permits/${m}`;return this.http.get(i,this.mAppContextService.getHttpOptions())}updateItem(m){let i=`${R.base_url}/permits/${m.id}`;return this.http.put(i,m,this.mAppContextService.getHttpOptions())}deleteItem(m){let i=`${R.base_url}/permits/${m.id}`;return this.http.delete(i,this.mAppContextService.getHttpOptions())}paginateItems(m){return this.http.get(m,this.mAppContextService.getHttpOptions())}searchItems(m){let i=`${R.base_url}/search-permits`;return this.http.post(i,m,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let m=`${R.base_url}/unpaginated-items-permits`;return this.http.get(m,this.mAppContextService.getHttpOptions())}nextPreviousStatusItem(m){let i=`${R.base_url}/next-previous-status-process-permits/${m}`;return this.http.get(i,this.mAppContextService.getHttpOptions())}reviewApplicationItem(m){let i=`${R.base_url}/review-process-permits/${m.id}`;return this.http.post(i,m,this.mAppContextService.getHttpOptions())}approvalApplicationItem(m){let i=`${R.base_url}/approve-process-permits/${m.id}`;return this.http.post(i,m,this.mAppContextService.getHttpOptions())}onDownloadPermit(m){let i=new Ke;i=i.set("Accept","application/pdf");let t=`${R.base_url}/permits-pdf/${m.id}`;return this.http.get(t,{headers:i,responseType:"blob"})}static{this.\u0275fac=function(i){return new(i||o)(De(S),De(ze))}}static{this.\u0275prov=Be({token:o,factory:o.\u0275fac,providedIn:"root"})}};var ft=o=>({"is-invalid":o}),Oe=()=>[1],vt=o=>["/permits/process",o],gt=(o,m,i,t,d,p,y)=>({"bg-secondary":o,"bg-warning":m,"bg-dark":i,"bg-info":t,"bg-success":d,"bg-primary":p,"bg-danger":y}),xt=(o,m)=>({active:o,disabled:m});function yt(o,m){o&1&&g(0,"app-progress")}function bt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function St(o,m){if(o&1&&(r(0,"div",16),e(1,`
                  `),s(2,bt,2,0,"div",1),e(3,`
                `),n()),o&2){let i=u();a(2),l("ngIf",i.search_term.errors==null?null:i.search_term.errors.required)}}function Ct(o,m){if(o&1){let i=ye();r(0,"span"),e(1,`
                    `),r(2,"button",30),N("click",function(){ve(i);let d=u().$implicit,p=u(2);return ge(p.onDownloadPermit(d))}),e(3,"Download"),n(),e(4,`
                  `),n()}}function ht(o,m){if(o&1&&(r(0,"button",31),e(1," "),g(2,"i",32),n()),o&2){let i=u().$implicit;l("routerLink",re("/permits/edit/",i.id))}}function Et(o,m){if(o&1){let i=ye();r(0,"button",33),N("click",function(){ve(i);let d=u().$implicit,p=u(2);return ge(p.onDelete(d))}),g(1,"i",34),n()}}function Ft(o,m){if(o&1&&(r(0,"tr"),e(1,`
                `),r(2,"td"),e(3),n(),e(4,`
                `),r(5,"td")(6,"a",22),e(7),n()(),e(8,`
                `),r(9,"td"),e(10),n(),e(11,`
                `),r(12,"td"),e(13),n(),e(14,`
                `),r(15,"td")(16,"span",23),e(17),n()(),e(18,`
                `),r(19,"td")(20,"span",24),e(21),n()(),e(22,`
                `),r(23,"td"),e(24,`
                  `),s(25,Ct,5,0,"span",1),e(26,`
                `),n(),e(27,`
                `),r(28,"td"),e(29),Ge(30,"date"),n(),e(31,`
                `),r(32,"td"),e(33,`
                  `),r(34,"div",25),e(35,`
                    `),r(36,"button",26),g(37,"i",27),n(),e(38,`
                    `),s(39,ht,3,2,"button",28),e(40,`
                    `),s(41,Et,2,0,"button",29),e(42,`
                  `),n(),e(43,`
                `),n(),e(44,`
              `),n()),o&2){let i=m.$implicit,t=m.index,d=u(2);a(3),We("",d.mPageFrom+t,"."),a(3),l("routerLink",re("/permits/show/",i.id)),a(),f(i.application_number),a(3),f(i.user==null?null:i.user.name),a(3),f(i.type==null?null:i.type.name),a(3),l("routerLink",d.mAppContextService.hasTypes(j(21,Oe))?_(22,vt,i.id):null)("ngClass",be(24,gt,i.status_id==1,i.status_id==2,i.status_id==3,i.status_id==4,i.status_id==5,i.status_id==6,i.status_id==7)),a(),f(i==null||i.status==null?null:i.status.name),a(3),l("routerLink",re("/payments/show/",i.payment_id))("ngClass",(i.payment==null?null:i.payment.status_id)===1?"chip-danger":"chip-success"),a(),f(i.payment==null?null:i.payment.status.name),a(4),l("ngIf",i.status_id==5||i.status_id===7),a(4),f(He(30,19,i.created_at)),a(7),l("routerLink",re("/permits/show/",i.id)),a(3),l("ngIf",d.mAppContextService.hasRoles(j(32,Oe))||i.status_id==1||i.status_id==2),a(2),l("ngIf",d.mAppContextService.hasRoles(j(33,Oe)))}}function It(o,m){if(o&1&&(r(0,"div",17),e(1,`
          `),r(2,"table",18),e(3,`
            `),r(4,"thead",19),e(5,`
              `),r(6,"tr"),e(7,`
                `),r(8,"th",20),e(9,"#"),n(),e(10,`
                `),r(11,"th",20),e(12,"Number"),n(),e(13,`
                `),r(14,"th",20),e(15,"Applicant"),n(),e(16,`
                `),r(17,"th",20),e(18,"Type"),n(),e(19,`
                `),r(20,"th",20),e(21,"Status"),n(),e(22,`
                `),r(23,"th",20),e(24,"Payment"),n(),e(25,`
                `),r(26,"th",20),e(27,"Permit"),n(),e(28,`
                `),r(29,"th",20),e(30,"Created"),n(),e(31,`
                `),r(32,"th",20),e(33,"Action"),n(),e(34,`
              `),n(),e(35,`
            `),n(),e(36,`
            `),r(37,"tbody"),e(38,`
              `),s(39,Ft,45,34,"tr",21),e(40,`
            `),n(),e(41,`
          `),n(),e(42,`
        `),n()),o&2){let i=u();a(39),l("ngForOf",i.mPermits)}}function Pt(o,m){if(o&1){let i=ye();r(0,"li",37),e(1,`
              `),r(2,"a",38),N("click",function(){let d=ve(i).$implicit,p=u(2);return ge(p.onChangePage(d.url))}),n(),e(3,`
            `),n()}if(o&2){let i=m.$implicit;l("ngClass",Ve(2,xt,i.active,!i.url)),a(2),l("innerHTML",i.label,je)}}function Tt(o,m){if(o&1&&(r(0,"div"),e(1,`
          `),r(2,"ul",35),e(3,`
            `),s(4,Pt,4,5,"li",36),e(5,`
          `),n(),e(6,`
        `),n()),o&2){let i=u();a(4),l("ngForOf",i.links)}}function wt(o,m){o&1&&(e(0,`
          `),r(1,"p",39),e(2,"No items"),n(),e(3,`
        `))}var Fe=class o{constructor(m,i,t){this.mPermitService=m;this.mToastrService=i;this.mAppContextService=t;this.mPermits={};this.links=[];this.mProgress=x(!1)}ngOnInit(){this.index(),this.search_term=new at("",v.required),this.itemForm=new mt({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mPermitService.allItems().subscribe({next:m=>{m&&(this.mPageFrom=m.from,this.mPermits=m.data,this.links=m.links),this.mProgress.set(!1)},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onChangePage(m){this.mProgress.set(!0),this.mPermitService.paginateItems(m).subscribe({next:i=>{i&&(this.mPageFrom=i.from,this.mPermits=i.data,this.links=i.links,this.mProgress.set(!1))},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}onDelete(m){st.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+m.application_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(t=>{t.isConfirmed&&(this.mProgress.set(!0),this.mPermitService.deleteItem(m).subscribe({next:d=>{d&&(this.mPermits=this.mPermits.filter(p=>p.id!==m.id),this.mToastrService.warning(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.warning(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(m){this.mProgress.set(!0),this.mPermitService.searchItems(m).subscribe({next:i=>{i&&(this.mPermits=i.salutations,this.mToastrService.success(i.message),this.mProgress.set(!1))},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}onSearch(m){this.mProgress.set(!0),this.mPermitService.searchItems(m).subscribe({next:i=>{i&&(this.mPermits=i.data,this.mToastrService.success(i.message),this.mProgress.set(!1))},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}onDownloadPermit(m){this.mProgress.set(!0),this.mPermitService.onDownloadPermit(m).subscribe({next:i=>{if(i){this.mToastrService.success(i.message);let d=i;var t=URL.createObjectURL(d);window.open(t,"_blank"),this.mProgress.set(!1)}},error:i=>{i.error.message&&this.mToastrService.error(i.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(C),c(I),c(S))}}static{this.\u0275cmp=h({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/permits/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"badge","rounded-pill",3,"routerLink","ngClass"],[1,"chip","chip-clickable",3,"routerLink","ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],["class","btn btn-dark btn-sm me-1",3,"routerLink",4,"ngIf"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-link","btn-sm",3,"click"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(i,t){if(i&1&&(s(0,yt,1,0,"app-progress",1),r(1,"c-row"),e(2,`
  `),r(3,"c-col",2),e(4,`
    `),r(5,"c-card",3),e(6,`
      `),r(7,"c-card-header"),e(8,`
        `),r(9,"div",4),e(10,`
          `),r(11,"div",5),e(12,`
            `),r(13,"a",6),e(14,`
              `),g(15,"i",7),e(16,` Add
            `),n(),e(17,`
          `),n(),e(18,`
          `),r(19,"div"),e(20,`
            `),r(21,"form",8),N("ngSubmit",function(){return t.onSearch(t.itemForm.value)}),e(22,`
              `),r(23,"div",9),e(24,`
                `),g(25,"input",10),e(26,`
                `),r(27,"div",11),e(28,`
                  `),r(29,"button",12),e(30,`
                    `),g(31,"i",13),e(32,`
                  `),n(),e(33,`
                `),n(),e(34,`
                `),s(35,St,4,1,"div",14),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
      `),r(42,"c-card-body"),e(43,`

        `),s(44,It,43,1,"div",15),e(45,`

        `),s(46,Tt,7,1,"div",1),e(47,`

        `),s(48,wt,4,0,"ng-template",null,0,Ue),e(50,`

      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),i&2){let d=Le(49);l("ngIf",t.mProgress()),a(21),l("formGroup",t.itemForm),a(4),l("ngClass",_(7,ft,t.search_term.invalid&&(t.search_term.dirty||t.search_term.touched))),a(10),l("ngIf",t.search_term.invalid&&(t.search_term.dirty||t.search_term.touched)),a(9),l("ngIf",t.mPermits.length>0)("ngIfElse",d),a(2),l("ngIf",t.links)}},dependencies:[D,L,E,F,P,V,G,Qe,H,U,nt,it,Y,$,K,z,Q,J,$e],encapsulation:2})}};var O=o=>({"is-invalid":o});function Nt(o,m){o&1&&g(0,"app-progress")}function Mt(o,m){if(o&1&&(r(0,"option",38),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.name)}}function qt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function kt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,qt,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("type_id"))==null||i.errors==null?null:i.errors.required)}}function At(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Dt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,At,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("mark").errors)==null?null:i.required)}}function Rt(o,m){if(o&1&&(r(0,"option",38),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.name)}}function Ot(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Bt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ot,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("coffee_species_id"))==null||i.errors==null?null:i.errors.required)}}function jt(o,m){if(o&1&&(r(0,"option",38),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.name)}}function Lt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Wt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Lt,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("coffee_form_id"))==null||i.errors==null?null:i.errors.required)}}function Vt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Gt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Vt,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("number_of_bags").errors)==null?null:i.required)}}function Ht(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ut(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ht,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("origin").errors)==null?null:i.required)}}function $t(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Kt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,$t,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("destination").errors)==null?null:i.required)}}function zt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Yt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,zt,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("distance").errors)==null?null:i.required)}}function Jt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Qt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Jt,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("vehicle_registration_number").errors)==null?null:i.required)}}function Xt(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Zt(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Xt,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("driver_name").errors)==null?null:i.required)}}function ei(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function ti(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,ei,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("driver_id_number").errors)==null?null:i.required)}}function ii(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function ni(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,ii,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("warehouse_receipt_number").errors)==null?null:i.required)}}var Pe=class o{constructor(m,i,t,d,p){this.mPermitService=m;this.mToastrService=i;this.mAppContextService=t;this.router=d;this.fb=p;this.mProgress=x(!1);this.itemForm=this.fb.group({type_id:["",v.required],mark:["",v.nullValidator],coffee_species_id:["",v.required],coffee_form_id:["",v.required],number_of_bags:["",v.required],origin:["",v.required],destination:["",v.required],distance:["",v.required],vehicle_registration_number:["",v.required],driver_name:["",v.required],driver_id_number:["",v.required],warehouse_receipt_number:["",v.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(m){this.mProgress.set(!0),this.mPermitService.createItem(m).subscribe({next:i=>{if(i){this.mToastrService.success(i.message);let t=i.data.payment.id;this.router.navigateByUrl("/payments/show/"+t),this.mProgress.set(!1)}},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mPermitService.unpaginatedItems().subscribe({next:m=>{m&&(this.mPermitTypes=m.data.permit_types,this.mCoffeeSpecies=m.data.coffee_species,this.mCoffeeForms=m.data.coffee_forms,this.mProgress.set(!1))},error:m=>{this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(C),c(I),c(S),c(Z),c(ne))}}static{this.\u0275cmp=h({type:o,selectors:[["app-create"]],standalone:!1,decls:201,vars:54,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","mark",1,"col-form-label","required1"],["formControlName","mark","type","text",1,"form-control",3,"ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngClass"],["for","coffee_form_id",1,"col-form-label","required"],["formControlName","coffee_form_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-12"],["for","number_of_bags",1,"col-form-label","required"],["formControlName","number_of_bags","type","number",1,"form-control",3,"ngClass"],["for","origin",1,"col-form-label","required"],["formControlName","origin","type","text",1,"form-control",3,"ngClass"],["for","destination",1,"col-form-label","required"],["formControlName","destination","type","text",1,"form-control",3,"ngClass"],["for","distance",1,"col-form-label","required"],["formControlName","distance","type","number",1,"form-control",3,"ngClass"],["for","vehicle_registration_number",1,"col-form-label","required"],["formControlName","vehicle_registration_number","type","text",1,"form-control",3,"ngClass"],["for","driver_name",1,"col-form-label","required"],["formControlName","driver_name","type","text",1,"form-control",3,"ngClass"],["for","driver_id_number",1,"col-form-label","required"],["formControlName","driver_id_number","type","text",1,"form-control",3,"ngClass"],["for","warehouse_receipt_number",1,"col-form-label","required"],["formControlName","warehouse_receipt_number","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/permits","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(i,t){if(i&1&&(s(0,Nt,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"form",3),N("ngSubmit",function(){return t.onSubmit(t.itemForm.value)}),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"div",6),e(16,`
                `),r(17,"label",7),e(18,"Permit Type:"),n(),e(19,`
                `),r(20,"select",8),e(21,`
                  `),r(22,"option",9),e(23,"--- Select type ---"),n(),e(24,`
                  `),s(25,Mt,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),s(28,kt,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),r(32,"div",5),e(33,`
              `),r(34,"div",6),e(35,`
                `),r(36,"label",12),e(37,"Mark:"),n(),e(38,`
                `),g(39,"input",13),e(40,`
                `),s(41,Dt,4,1,"div",11),e(42,`
              `),n(),e(43,`
            `),n(),e(44,`
            `),r(45,"div",5),e(46,`
              `),r(47,"div",6),e(48,`
                `),r(49,"label",14),e(50,"Coffee Species:"),n(),e(51,`
                `),r(52,"select",15),e(53,`
                  `),r(54,"option",9),e(55,"--- Select species ---"),n(),e(56,`
                  `),s(57,Rt,2,3,"option",10),e(58,`
                `),n(),e(59,`
                `),s(60,Bt,4,1,"div",11),e(61,`
              `),n(),e(62,`
            `),n(),e(63,`
            `),r(64,"div",5),e(65,`
              `),r(66,"div",6),e(67,`
                `),r(68,"label",16),e(69,"Coffee Form:"),n(),e(70,`
                `),r(71,"select",17),e(72,`
                  `),r(73,"option",9),e(74,"--- Select form ---"),n(),e(75,`
                  `),s(76,jt,2,3,"option",10),e(77,`
                `),n(),e(78,`
                `),s(79,Wt,4,1,"div",11),e(80,`
              `),n(),e(81,`
            `),n(),e(82,`
            `),r(83,"div",18),e(84,`
              `),r(85,"div",6),e(86,`
                `),r(87,"label",19),e(88,"Number of Bags (60 Kg Bags):"),n(),e(89,`
                `),g(90,"input",20),e(91,`
                `),s(92,Gt,4,1,"div",11),e(93,`
              `),n(),e(94,`
            `),n(),e(95,`
            `),r(96,"div",5),e(97,`
              `),r(98,"div",6),e(99,`
                `),r(100,"label",21),e(101,"Moving From (Origin):"),n(),e(102,`
                `),g(103,"input",22),e(104,`
                `),s(105,Ut,4,1,"div",11),e(106,`
              `),n(),e(107,`
            `),n(),e(108,`
            `),r(109,"div",5),e(110,`
              `),r(111,"div",6),e(112,`
                `),r(113,"label",23),e(114,"To (Destination):"),n(),e(115,`
                `),g(116,"input",24),e(117,`
                `),s(118,Kt,4,1,"div",11),e(119,`
              `),n(),e(120,`
            `),n(),e(121,`
            `),r(122,"div",18),e(123,`
              `),r(124,"div",6),e(125,`
                `),r(126,"label",25),e(127,"Distance (KM):"),n(),e(128,`
                `),g(129,"input",26),e(130,`
                `),s(131,Yt,4,1,"div",11),e(132,`
              `),n(),e(133,`
            `),n(),e(134,`
             `),r(135,"div",18),e(136,`
              `),r(137,"div",6),e(138,`
                `),r(139,"label",27),e(140,"Vehicle/Wagon Registration Number:"),n(),e(141,`
                `),g(142,"input",28),e(143,`
                `),s(144,Qt,4,1,"div",11),e(145,`
              `),n(),e(146,`
            `),n(),e(147,`
            `),r(148,"div",5),e(149,`
              `),r(150,"div",6),e(151,`
                `),r(152,"label",29),e(153,"Driver(s) Name:"),n(),e(154,`
                `),g(155,"input",30),e(156,`
                `),s(157,Zt,4,1,"div",11),e(158,`
              `),n(),e(159,`
            `),n(),e(160,`
            `),r(161,"div",5),e(162,`
              `),r(163,"div",6),e(164,`
                `),r(165,"label",31),e(166,"Driver(s) ID Number:"),n(),e(167,`
                `),g(168,"input",32),e(169,`
                `),s(170,ti,4,1,"div",11),e(171,`
              `),n(),e(172,`
            `),n(),e(173,`
             `),r(174,"div",18),e(175,`
              `),r(176,"div",6),e(177,`
                `),r(178,"label",33),e(179,"Warehouse Receipt Number:"),n(),e(180,`
                `),g(181,"input",34),e(182,`
                `),s(183,ni,4,1,"div",11),e(184,`
              `),n(),e(185,`
            `),n(),e(186,`
          `),n(),e(187,`
          `),r(188,"div",35),e(189,`
            `),r(190,"button",36),e(191,"Cancel"),n(),e(192,`
            `),r(193,"button",37),e(194,"Submit"),n(),e(195,`
          `),n(),e(196,`
        `),n(),e(197,`

      `),n(),e(198,`
    `),n(),e(199,`
  `),n(),e(200,`
`),n()),i&2){let d,p,y,b,T,w;l("ngIf",t.mProgress()),a(9),l("formGroup",t.itemForm),a(11),l("ngClass",_(30,O,((d=t.itemForm.get("type_id"))==null?null:d.invalid)&&(((d=t.itemForm.get("type_id"))==null?null:d.dirty)||((d=t.itemForm.get("type_id"))==null?null:d.touched)))),a(5),l("ngForOf",t.mPermitTypes),a(3),l("ngIf",((p=t.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=t.itemForm.get("type_id"))==null?null:p.dirty)||((p=t.itemForm.get("type_id"))==null?null:p.touched))),a(11),l("ngClass",_(32,O,t.itemForm.get("mark").invalid&&(t.itemForm.get("mark").dirty||t.itemForm.get("mark").touched))),a(2),l("ngIf",t.itemForm.get("mark").invalid&&(t.itemForm.get("mark").dirty||t.itemForm.get("mark").touched)),a(11),l("ngClass",_(34,O,((y=t.itemForm.get("coffee_species_id"))==null?null:y.invalid)&&(((y=t.itemForm.get("coffee_species_id"))==null?null:y.dirty)||((y=t.itemForm.get("coffee_species_id"))==null?null:y.touched)))),a(5),l("ngForOf",t.mCoffeeSpecies),a(3),l("ngIf",((b=t.itemForm.get("coffee_species_id"))==null?null:b.invalid)&&(((b=t.itemForm.get("coffee_species_id"))==null?null:b.dirty)||((b=t.itemForm.get("coffee_species_id"))==null?null:b.touched))),a(11),l("ngClass",_(36,O,((T=t.itemForm.get("coffee_form_id"))==null?null:T.invalid)&&(((T=t.itemForm.get("coffee_form_id"))==null?null:T.dirty)||((T=t.itemForm.get("coffee_form_id"))==null?null:T.touched)))),a(5),l("ngForOf",t.mCoffeeForms),a(3),l("ngIf",((w=t.itemForm.get("coffee_form_id"))==null?null:w.invalid)&&(((w=t.itemForm.get("coffee_form_id"))==null?null:w.dirty)||((w=t.itemForm.get("coffee_form_id"))==null?null:w.touched))),a(11),l("ngClass",_(38,O,t.itemForm.get("number_of_bags").invalid&&(t.itemForm.get("number_of_bags").dirty||t.itemForm.get("number_of_bags").touched))),a(2),l("ngIf",t.itemForm.get("number_of_bags").invalid&&(t.itemForm.get("number_of_bags").dirty||t.itemForm.get("number_of_bags").touched)),a(11),l("ngClass",_(40,O,t.itemForm.get("origin").invalid&&(t.itemForm.get("origin").dirty||t.itemForm.get("origin").touched))),a(2),l("ngIf",t.itemForm.get("origin").invalid&&(t.itemForm.get("origin").dirty||t.itemForm.get("origin").touched)),a(11),l("ngClass",_(42,O,t.itemForm.get("destination").invalid&&(t.itemForm.get("destination").dirty||t.itemForm.get("destination").touched))),a(2),l("ngIf",t.itemForm.get("destination").invalid&&(t.itemForm.get("destination").dirty||t.itemForm.get("destination").touched)),a(11),l("ngClass",_(44,O,t.itemForm.get("distance").invalid&&(t.itemForm.get("distance").dirty||t.itemForm.get("distance").touched))),a(2),l("ngIf",t.itemForm.get("distance").invalid&&(t.itemForm.get("distance").dirty||t.itemForm.get("distance").touched)),a(11),l("ngClass",_(46,O,t.itemForm.get("vehicle_registration_number").invalid&&(t.itemForm.get("vehicle_registration_number").dirty||t.itemForm.get("vehicle_registration_number").touched))),a(2),l("ngIf",t.itemForm.get("vehicle_registration_number").invalid&&(t.itemForm.get("vehicle_registration_number").dirty||t.itemForm.get("vehicle_registration_number").touched)),a(11),l("ngClass",_(48,O,t.itemForm.get("driver_name").invalid&&(t.itemForm.get("driver_name").dirty||t.itemForm.get("driver_name").touched))),a(2),l("ngIf",t.itemForm.get("driver_name").invalid&&(t.itemForm.get("driver_name").dirty||t.itemForm.get("driver_name").touched)),a(11),l("ngClass",_(50,O,t.itemForm.get("driver_id_number").invalid&&(t.itemForm.get("driver_id_number").dirty||t.itemForm.get("driver_id_number").touched))),a(2),l("ngIf",t.itemForm.get("driver_id_number").invalid&&(t.itemForm.get("driver_id_number").dirty||t.itemForm.get("driver_id_number").touched)),a(11),l("ngClass",_(52,O,t.itemForm.get("warehouse_receipt_number").invalid&&(t.itemForm.get("warehouse_receipt_number").dirty||t.itemForm.get("warehouse_receipt_number").touched))),a(2),l("ngIf",t.itemForm.get("warehouse_receipt_number").invalid&&(t.itemForm.get("warehouse_receipt_number").dirty||t.itemForm.get("warehouse_receipt_number").touched)),a(10),l("disabled",t.itemForm.invalid)}},dependencies:[D,L,E,F,P,V,G,H,U,Y,te,ie,$,Ee,ee,K,z,Q,J],encapsulation:2})}};var B=o=>({"is-invalid":o});function ri(o,m){o&1&&g(0,"app-progress")}function oi(o,m){if(o&1&&(r(0,"option",38),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.name)}}function mi(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function ai(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,mi,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("type_id"))==null||i.errors==null?null:i.errors.required)}}function li(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function si(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,li,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("mark").errors)==null?null:i.required)}}function di(o,m){if(o&1&&(r(0,"option",38),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.name)}}function pi(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function ui(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,pi,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("coffee_species_id"))==null||i.errors==null?null:i.errors.required)}}function ci(o,m){if(o&1&&(r(0,"option",38),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.name)}}function _i(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function fi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,_i,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("coffee_form_id"))==null||i.errors==null?null:i.errors.required)}}function vi(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function gi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,vi,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("number_of_bags").errors)==null?null:i.required)}}function xi(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function yi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,xi,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("origin").errors)==null?null:i.required)}}function bi(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Si(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,bi,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("destination").errors)==null?null:i.required)}}function Ci(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function hi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ci,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("distance").errors)==null?null:i.required)}}function Ei(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Fi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ei,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("vehicle_registration_number").errors)==null?null:i.required)}}function Ii(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Pi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ii,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("driver_name").errors)==null?null:i.required)}}function Ti(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function wi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ti,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("driver_id_number").errors)==null?null:i.required)}}function Ni(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Mi(o,m){if(o&1&&(r(0,"div",39),e(1,`
                  `),s(2,Ni,2,0,"div",0),e(3,`
                `),n()),o&2){let i,t=u();a(2),l("ngIf",(i=t.itemForm.get("warehouse_receipt_number").errors)==null?null:i.required)}}var Te=class o{constructor(m,i,t,d,p,y){this.mPermitService=m;this.mToastrService=i;this.mAppContextService=t;this.router=d;this.fb=p;this.route=y;this.mProgress=x(!1);this.item={};this.itemForm=this.fb.group({type_id:["",v.required],mark:["",v.nullValidator],coffee_species_id:["",v.required],coffee_form_id:["",v.required],number_of_bags:["",v.required],origin:["",v.required],destination:["",v.required],distance:["",v.required],vehicle_registration_number:["",v.required],driver_name:["",v.required],driver_id_number:["",v.required],warehouse_receipt_number:["",v.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mPermitService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onSubmit(m){let i=le(ae({},m),{id:this.item.id});this.mProgress.set(!0),this.mPermitService.updateItem(i).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let d=t.data.payment.id;this.router.navigateByUrl("/payments/show/"+d),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mPermitService.unpaginatedItems().subscribe({next:m=>{m&&(this.mPermitTypes=m.data.permit_types,this.mCoffeeSpecies=m.data.coffee_species,this.mCoffeeForms=m.data.coffee_forms,this.mProgress.set(!1))},error:m=>{this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(C),c(I),c(S),c(Z),c(ne),c(W))}}static{this.\u0275cmp=h({type:o,selectors:[["app-edit"]],standalone:!1,decls:201,vars:66,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","mark",1,"col-form-label","required1"],["formControlName","mark","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","coffee_form_id",1,"col-form-label","required"],["formControlName","coffee_form_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-md-12"],["for","number_of_bags",1,"col-form-label","required"],["formControlName","number_of_bags","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","origin",1,"col-form-label","required"],["formControlName","origin","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","destination",1,"col-form-label","required"],["formControlName","destination","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","distance",1,"col-form-label","required"],["formControlName","distance","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","vehicle_registration_number",1,"col-form-label","required"],["formControlName","vehicle_registration_number","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","driver_name",1,"col-form-label","required"],["formControlName","driver_name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","driver_id_number",1,"col-form-label","required"],["formControlName","driver_id_number","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","warehouse_receipt_number",1,"col-form-label","required"],["formControlName","warehouse_receipt_number","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"mt-3","text-end"],["routerLink","/permits","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(i,t){if(i&1&&(s(0,ri,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"form",3),N("ngSubmit",function(){return t.onSubmit(t.itemForm.value)}),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"div",6),e(16,`
                `),r(17,"label",7),e(18,"Permit Type:"),n(),e(19,`
                `),r(20,"select",8),k("ngModelChange",function(p){return q(t.item.type_id,p)||(t.item.type_id=p),p}),e(21,`
                  `),r(22,"option",9),e(23,"--- Select type ---"),n(),e(24,`
                  `),s(25,oi,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),s(28,ai,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),r(32,"div",5),e(33,`
              `),r(34,"div",6),e(35,`
                `),r(36,"label",12),e(37,"Mark:"),n(),e(38,`
                `),r(39,"input",13),k("ngModelChange",function(p){return q(t.item.mark,p)||(t.item.mark=p),p}),n(),e(40,`
                `),s(41,si,4,1,"div",11),e(42,`
              `),n(),e(43,`
            `),n(),e(44,`
            `),r(45,"div",5),e(46,`
              `),r(47,"div",6),e(48,`
                `),r(49,"label",14),e(50,"Coffee Species:"),n(),e(51,`
                `),r(52,"select",15),k("ngModelChange",function(p){return q(t.item.coffee_species_id,p)||(t.item.coffee_species_id=p),p}),e(53,`
                  `),r(54,"option",9),e(55,"--- Select species ---"),n(),e(56,`
                  `),s(57,di,2,3,"option",10),e(58,`
                `),n(),e(59,`
                `),s(60,ui,4,1,"div",11),e(61,`
              `),n(),e(62,`
            `),n(),e(63,`
            `),r(64,"div",5),e(65,`
              `),r(66,"div",6),e(67,`
                `),r(68,"label",16),e(69,"Coffee Form:"),n(),e(70,`
                `),r(71,"select",17),k("ngModelChange",function(p){return q(t.item.coffee_form_id,p)||(t.item.coffee_form_id=p),p}),e(72,`
                  `),r(73,"option",9),e(74,"--- Select form ---"),n(),e(75,`
                  `),s(76,ci,2,3,"option",10),e(77,`
                `),n(),e(78,`
                `),s(79,fi,4,1,"div",11),e(80,`
              `),n(),e(81,`
            `),n(),e(82,`
            `),r(83,"div",18),e(84,`
              `),r(85,"div",6),e(86,`
                `),r(87,"label",19),e(88,"Number of Bags (60 Kg Bags):"),n(),e(89,`
                `),r(90,"input",20),k("ngModelChange",function(p){return q(t.item.number_of_bags,p)||(t.item.number_of_bags=p),p}),n(),e(91,`
                `),s(92,gi,4,1,"div",11),e(93,`
              `),n(),e(94,`
            `),n(),e(95,`
            `),r(96,"div",5),e(97,`
              `),r(98,"div",6),e(99,`
                `),r(100,"label",21),e(101,"Moving From (Origin):"),n(),e(102,`
                `),r(103,"input",22),k("ngModelChange",function(p){return q(t.item.origin,p)||(t.item.origin=p),p}),n(),e(104,`
                `),s(105,yi,4,1,"div",11),e(106,`
              `),n(),e(107,`
            `),n(),e(108,`
            `),r(109,"div",5),e(110,`
              `),r(111,"div",6),e(112,`
                `),r(113,"label",23),e(114,"To (Destination):"),n(),e(115,`
                `),r(116,"input",24),k("ngModelChange",function(p){return q(t.item.destination,p)||(t.item.destination=p),p}),n(),e(117,`
                `),s(118,Si,4,1,"div",11),e(119,`
              `),n(),e(120,`
            `),n(),e(121,`
            `),r(122,"div",18),e(123,`
              `),r(124,"div",6),e(125,`
                `),r(126,"label",25),e(127,"Distance (KM):"),n(),e(128,`
                `),r(129,"input",26),k("ngModelChange",function(p){return q(t.item.distance,p)||(t.item.distance=p),p}),n(),e(130,`
                `),s(131,hi,4,1,"div",11),e(132,`
              `),n(),e(133,`
            `),n(),e(134,`
             `),r(135,"div",18),e(136,`
              `),r(137,"div",6),e(138,`
                `),r(139,"label",27),e(140,"Vehicle/Wagon Registration Number:"),n(),e(141,`
                `),r(142,"input",28),k("ngModelChange",function(p){return q(t.item.vehicle_registration_number,p)||(t.item.vehicle_registration_number=p),p}),n(),e(143,`
                `),s(144,Fi,4,1,"div",11),e(145,`
              `),n(),e(146,`
            `),n(),e(147,`
            `),r(148,"div",5),e(149,`
              `),r(150,"div",6),e(151,`
                `),r(152,"label",29),e(153,"Driver(s) Name:"),n(),e(154,`
                `),r(155,"input",30),k("ngModelChange",function(p){return q(t.item.driver_name,p)||(t.item.driver_name=p),p}),n(),e(156,`
                `),s(157,Pi,4,1,"div",11),e(158,`
              `),n(),e(159,`
            `),n(),e(160,`
            `),r(161,"div",5),e(162,`
              `),r(163,"div",6),e(164,`
                `),r(165,"label",31),e(166,"Driver(s) ID Number:"),n(),e(167,`
                `),r(168,"input",32),k("ngModelChange",function(p){return q(t.item.driver_id_number,p)||(t.item.driver_id_number=p),p}),n(),e(169,`
                `),s(170,wi,4,1,"div",11),e(171,`
              `),n(),e(172,`
            `),n(),e(173,`
             `),r(174,"div",18),e(175,`
              `),r(176,"div",6),e(177,`
                `),r(178,"label",33),e(179,"Warehouse Receipt Number:"),n(),e(180,`
                `),r(181,"input",34),k("ngModelChange",function(p){return q(t.item.warehouse_receipt_number,p)||(t.item.warehouse_receipt_number=p),p}),n(),e(182,`
                `),s(183,Mi,4,1,"div",11),e(184,`
              `),n(),e(185,`
            `),n(),e(186,`
          `),n(),e(187,`
          `),r(188,"div",35),e(189,`
            `),r(190,"button",36),e(191,"Cancel"),n(),e(192,`
            `),r(193,"button",37),e(194,"Submit"),n(),e(195,`
          `),n(),e(196,`
        `),n(),e(197,`

      `),n(),e(198,`
    `),n(),e(199,`
  `),n(),e(200,`
`),n()),i&2){let d,p,y,b,T,w;l("ngIf",t.mProgress()),a(9),l("formGroup",t.itemForm),a(11),M("ngModel",t.item.type_id),l("ngClass",_(42,B,((d=t.itemForm.get("type_id"))==null?null:d.invalid)&&(((d=t.itemForm.get("type_id"))==null?null:d.dirty)||((d=t.itemForm.get("type_id"))==null?null:d.touched)))),a(5),l("ngForOf",t.mPermitTypes),a(3),l("ngIf",((p=t.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=t.itemForm.get("type_id"))==null?null:p.dirty)||((p=t.itemForm.get("type_id"))==null?null:p.touched))),a(11),M("ngModel",t.item.mark),l("ngClass",_(44,B,t.itemForm.get("mark").invalid&&(t.itemForm.get("mark").dirty||t.itemForm.get("mark").touched))),a(2),l("ngIf",t.itemForm.get("mark").invalid&&(t.itemForm.get("mark").dirty||t.itemForm.get("mark").touched)),a(11),M("ngModel",t.item.coffee_species_id),l("ngClass",_(46,B,((y=t.itemForm.get("coffee_species_id"))==null?null:y.invalid)&&(((y=t.itemForm.get("coffee_species_id"))==null?null:y.dirty)||((y=t.itemForm.get("coffee_species_id"))==null?null:y.touched)))),a(5),l("ngForOf",t.mCoffeeSpecies),a(3),l("ngIf",((b=t.itemForm.get("coffee_species_id"))==null?null:b.invalid)&&(((b=t.itemForm.get("coffee_species_id"))==null?null:b.dirty)||((b=t.itemForm.get("coffee_species_id"))==null?null:b.touched))),a(11),M("ngModel",t.item.coffee_form_id),l("ngClass",_(48,B,((T=t.itemForm.get("coffee_form_id"))==null?null:T.invalid)&&(((T=t.itemForm.get("coffee_form_id"))==null?null:T.dirty)||((T=t.itemForm.get("coffee_form_id"))==null?null:T.touched)))),a(5),l("ngForOf",t.mCoffeeForms),a(3),l("ngIf",((w=t.itemForm.get("coffee_form_id"))==null?null:w.invalid)&&(((w=t.itemForm.get("coffee_form_id"))==null?null:w.dirty)||((w=t.itemForm.get("coffee_form_id"))==null?null:w.touched))),a(11),M("ngModel",t.item.number_of_bags),l("ngClass",_(50,B,t.itemForm.get("number_of_bags").invalid&&(t.itemForm.get("number_of_bags").dirty||t.itemForm.get("number_of_bags").touched))),a(2),l("ngIf",t.itemForm.get("number_of_bags").invalid&&(t.itemForm.get("number_of_bags").dirty||t.itemForm.get("number_of_bags").touched)),a(11),M("ngModel",t.item.origin),l("ngClass",_(52,B,t.itemForm.get("origin").invalid&&(t.itemForm.get("origin").dirty||t.itemForm.get("origin").touched))),a(2),l("ngIf",t.itemForm.get("origin").invalid&&(t.itemForm.get("origin").dirty||t.itemForm.get("origin").touched)),a(11),M("ngModel",t.item.destination),l("ngClass",_(54,B,t.itemForm.get("destination").invalid&&(t.itemForm.get("destination").dirty||t.itemForm.get("destination").touched))),a(2),l("ngIf",t.itemForm.get("destination").invalid&&(t.itemForm.get("destination").dirty||t.itemForm.get("destination").touched)),a(11),M("ngModel",t.item.distance),l("ngClass",_(56,B,t.itemForm.get("distance").invalid&&(t.itemForm.get("distance").dirty||t.itemForm.get("distance").touched))),a(2),l("ngIf",t.itemForm.get("distance").invalid&&(t.itemForm.get("distance").dirty||t.itemForm.get("distance").touched)),a(11),M("ngModel",t.item.vehicle_registration_number),l("ngClass",_(58,B,t.itemForm.get("vehicle_registration_number").invalid&&(t.itemForm.get("vehicle_registration_number").dirty||t.itemForm.get("vehicle_registration_number").touched))),a(2),l("ngIf",t.itemForm.get("vehicle_registration_number").invalid&&(t.itemForm.get("vehicle_registration_number").dirty||t.itemForm.get("vehicle_registration_number").touched)),a(11),M("ngModel",t.item.driver_name),l("ngClass",_(60,B,t.itemForm.get("driver_name").invalid&&(t.itemForm.get("driver_name").dirty||t.itemForm.get("driver_name").touched))),a(2),l("ngIf",t.itemForm.get("driver_name").invalid&&(t.itemForm.get("driver_name").dirty||t.itemForm.get("driver_name").touched)),a(11),M("ngModel",t.item.driver_id_number),l("ngClass",_(62,B,t.itemForm.get("driver_id_number").invalid&&(t.itemForm.get("driver_id_number").dirty||t.itemForm.get("driver_id_number").touched))),a(2),l("ngIf",t.itemForm.get("driver_id_number").invalid&&(t.itemForm.get("driver_id_number").dirty||t.itemForm.get("driver_id_number").touched)),a(11),M("ngModel",t.item.warehouse_receipt_number),l("ngClass",_(64,B,t.itemForm.get("warehouse_receipt_number").invalid&&(t.itemForm.get("warehouse_receipt_number").dirty||t.itemForm.get("warehouse_receipt_number").touched))),a(2),l("ngIf",t.itemForm.get("warehouse_receipt_number").invalid&&(t.itemForm.get("warehouse_receipt_number").dirty||t.itemForm.get("warehouse_receipt_number").touched)),a(10),l("disabled",t.itemForm.invalid)}},dependencies:[D,L,E,F,P,V,G,H,U,Y,te,ie,$,Ee,ee,K,z,Q,J],encapsulation:2})}};var qi=()=>[1],ki=o=>["/permits/process",o],Ai=(o,m,i,t,d,p,y)=>({"bg-secondary":o,"bg-warning":m,"bg-dark":i,"bg-info":t,"bg-success":d,"bg-primary":p,"bg-danger":y});function Di(o,m){o&1&&g(0,"app-progress")}function Ri(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.application_number)}}function Oi(o,m){if(o&1&&(r(0,"div",25),e(1,`
                  `),r(2,"span",26),e(3),n(),e(4,`
                `),n()),o&2){let i=u();a(2),l("ngClass",be(2,Ai,i.item.status_id==1,i.item.status_id==2,i.item.status_id==3,i.item.status_id==4,i.item.status_id==5,i.item.status_id==6,i.item.status_id==7)),a(),f(i.item==null||i.item.status==null?null:i.item.status.name)}}function Bi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.type==null?null:i.item.type.name)}}function ji(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.mark)}}function Li(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.coffee_species==null?null:i.item.coffee_species.name)}}function Wi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.coffee_form==null?null:i.item.coffee_form.name)}}function Vi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.number_of_bags)}}function Gi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.origin)}}function Hi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.destination)}}function Ui(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.distance)}}function $i(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.vehicle_registration_number)}}function Ki(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.driver_name)}}function zi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.driver_id_number)}}function Yi(o,m){if(o&1&&(r(0,"div",25),e(1),n()),o&2){let i=u();a(),f(i.item.driver_id_number)}}function Ji(o,m){if(o&1&&(r(0,"div",25),e(1,`
                  `),r(2,"span",26),e(3),n(),e(4,`
                `),n()),o&2){let i=u();a(2),l("ngClass",(i.item.payment==null?null:i.item.payment.status_id)===1?"bg-danger":"bg-success"),a(),f(i.item.payment==null?null:i.item.payment.status.name)}}var we=class o{constructor(m,i,t,d){this.mPermitService=m;this.mToastrService=i;this.mAppContextService=t;this.route=d;this.mProgress=x(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mPermitService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(C),c(I),c(S),c(W))}}static{this.\u0275cmp=h({type:o,selectors:[["app-show"]],standalone:!1,decls:192,vars:20,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","application_number"],["class","text-muted",4,"ngIf"],["for","type_id"],["for","mark",1,"col-form-label","required1"],["for","coffee_species_id"],["for","coffee_form_id"],[1,"col-md-12"],["for","number_of_bags"],["for","origin"],["for","destination"],["for","distance"],["for","vehicle_registration_number"],["for","driver_name"],["for","driver_id_number"],["for","warehouse_receipt_number"],["for","payment"],[1,"mt-3","text-end"],["routerLink","/permits",1,"btn","btn-light"],[1,"btn","btn-warning",3,"routerLink"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"]],template:function(i,t){i&1&&(s(0,Di,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"div"),e(10,`
          `),r(11,"div",3),e(12,`
            `),r(13,"div",4),e(14,`
              `),r(15,"div",5),e(16,`
                `),r(17,"label",6),e(18,"Application Number:"),n(),e(19,`
                `),s(20,Ri,2,1,"div",7),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),r(24,"div",4),e(25,`
              `),r(26,"div",5),e(27,`
                `),r(28,"label",6),e(29,"Status:"),n(),e(30,`
                `),s(31,Oi,5,10,"div",7),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),r(35,"div",4),e(36,`
              `),r(37,"div",5),e(38,`
                `),r(39,"label",8),e(40,"Permit Type:"),n(),e(41,`
                `),s(42,Bi,2,1,"div",7),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),r(46,"div",4),e(47,`
              `),r(48,"div",5),e(49,`
                `),r(50,"label",9),e(51,"Mark:"),n(),e(52,`
                `),s(53,ji,2,1,"div",7),e(54,`
              `),n(),e(55,`
            `),n(),e(56,`
            `),r(57,"div",4),e(58,`
              `),r(59,"div",5),e(60,`
                `),r(61,"label",10),e(62,"Coffee Species:"),n(),e(63,`
                `),s(64,Li,2,1,"div",7),e(65,`
              `),n(),e(66,`
            `),n(),e(67,`
            `),r(68,"div",4),e(69,`
              `),r(70,"div",5),e(71,`
                `),r(72,"label",11),e(73,"Coffee Form:"),n(),e(74,`
                `),s(75,Wi,2,1,"div",7),e(76,`
              `),n(),e(77,`
            `),n(),e(78,`
            `),r(79,"div",12),e(80,`
              `),r(81,"div",5),e(82,`
                `),r(83,"label",13),e(84,"Number of Bags (60 Kg Bags):"),n(),e(85,`
                `),s(86,Vi,2,1,"div",7),e(87,`
              `),n(),e(88,`
            `),n(),e(89,`
            `),r(90,"div",4),e(91,`
              `),r(92,"div",5),e(93,`
                `),r(94,"label",14),e(95,"Moving From (Origin):"),n(),e(96,`
                `),s(97,Gi,2,1,"div",7),e(98,`
              `),n(),e(99,`
            `),n(),e(100,`
            `),r(101,"div",4),e(102,`
              `),r(103,"div",5),e(104,`
                `),r(105,"label",15),e(106,"To (Destination):"),n(),e(107,`
                `),s(108,Hi,2,1,"div",7),e(109,`
              `),n(),e(110,`
            `),n(),e(111,`
            `),r(112,"div",12),e(113,`
              `),r(114,"div",5),e(115,`
                `),r(116,"label",16),e(117,"Distance (KM):"),n(),e(118,`
                `),s(119,Ui,2,1,"div",7),e(120,`
              `),n(),e(121,`
            `),n(),e(122,`
             `),r(123,"div",12),e(124,`
              `),r(125,"div",5),e(126,`
                `),r(127,"label",17),e(128,"Vehicle/Wagon Registration Number:"),n(),e(129,`
                `),s(130,$i,2,1,"div",7),e(131,`
              `),n(),e(132,`
            `),n(),e(133,`
            `),r(134,"div",4),e(135,`
              `),r(136,"div",5),e(137,`
                `),r(138,"label",18),e(139,"Driver(s) Name:"),n(),e(140,`
                `),s(141,Ki,2,1,"div",7),e(142,`
              `),n(),e(143,`
            `),n(),e(144,`
            `),r(145,"div",4),e(146,`
              `),r(147,"div",5),e(148,`
                `),r(149,"label",19),e(150,"Driver(s) ID Number:"),n(),e(151,`
                `),s(152,zi,2,1,"div",7),e(153,`
              `),n(),e(154,`
            `),n(),e(155,`
            `),r(156,"div",4),e(157,`
              `),r(158,"div",5),e(159,`
                `),r(160,"label",20),e(161,"Warehouse Receipt Number:"),n(),e(162,`
                `),s(163,Yi,2,1,"div",7),e(164,`
              `),n(),e(165,`
            `),n(),e(166,`
            `),r(167,"div",4),e(168,`
              `),r(169,"div",5),e(170,`
                `),r(171,"label",21),e(172,"Payment:"),n(),e(173,`
                `),s(174,Ji,5,2,"div",7),e(175,`
              `),n(),e(176,`
            `),n(),e(177,`
          `),n(),e(178,`
          `),r(179,"div",22),e(180,`
            `),r(181,"button",23),e(182,"Cancel"),n(),e(183,`
            `),r(184,"button",24),e(185,"Process"),n(),e(186,`
          `),n(),e(187,`
        `),n(),e(188,`

      `),n(),e(189,`
    `),n(),e(190,`
  `),n(),e(191,`
`),n()),i&2&&(l("ngIf",t.mProgress()),a(20),l("ngIf",t.item.application_number),a(11),l("ngIf",t.item.application_number),a(11),l("ngIf",t.item.type),a(11),l("ngIf",t.item.mark),a(11),l("ngIf",t.item.coffee_species),a(11),l("ngIf",t.item.coffee_form),a(11),l("ngIf",t.item.number_of_bags),a(11),l("ngIf",t.item.origin),a(11),l("ngIf",t.item.destination),a(11),l("ngIf",t.item.distance),a(11),l("ngIf",t.item.vehicle_registration_number),a(11),l("ngIf",t.item.driver_name),a(11),l("ngIf",t.item.driver_id_number),a(11),l("ngIf",t.item.warehouse_receipt_number),a(11),l("ngIf",t.item.payment),a(10),l("routerLink",t.mAppContextService.hasTypes(j(17,qi))?_(18,ki,t.item.id):null))},dependencies:[D,E,F,P,V,G,H,U],encapsulation:2})}};var dt=o=>({"is-invalid":o});function Qi(o,m){o&1&&g(0,"app-progress")}function Xi(o,m){if(o&1&&(r(0,"option",15),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.alias)}}function Zi(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function en(o,m){if(o&1&&(r(0,"div",16),s(1,Zi,2,0,"div",0),n()),o&2){let i,t=u();a(),l("ngIf",(i=t.itemForm.get("status_id"))==null||i.errors==null?null:i.errors.required)}}function tn(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function nn(o,m){if(o&1&&(r(0,"div",16),s(1,tn,2,0,"div",0),n()),o&2){let i,t=u();a(),l("ngIf",(i=t.itemForm.get("remarks").errors)==null?null:i.required)}}var Ne=class o{constructor(m,i,t,d,p,y){this.mToastrService=m;this.mPermitService=i;this.mAppContextService=t;this.router=d;this.fb=p;this.route=y;this.mProgress=x(!1);this.item={};this.mEditor=he;this.itemForm=this.fb.group({status_id:["",v.required],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=x(!0),this.mPermitService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.getNextPreviousStatus(),this.mProgress=x(!1))},error:m=>{m.error.message&&this.mToastrService.error(m.error.message),this.mProgress=x(!1)}})}onSubmit(m){let i=le(ae({},m),{id:this.id});this.mProgress=x(!0),this.mPermitService.reviewApplicationItem(i).subscribe({next:t=>{t.status==="success"&&(this.mToastrService.success(t.message),this.router.navigateByUrl("/permits"),this.mProgress=x(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress=x(!1)}})}getNextPreviousStatus(){this.mProgress=x(!0),this.mPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:m=>{m&&(this.mNextPreviousStatuses=m,this.mProgress=x(!1))},error:m=>{m.error.message&&this.mToastrService.error(m.error.message),this.mProgress=x(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(I),c(C),c(S),c(Z),c(ne),c(W))}}static{this.\u0275cmp=h({type:o,selectors:[["app-review"]],standalone:!1,decls:24,vars:12,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/permits","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(i,t){if(i&1&&(s(0,Qi,1,0,"app-progress",0),r(1,"div")(2,"form",1),N("ngSubmit",function(){return t.onSubmit(t.itemForm.value)}),r(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),n(),r(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),n(),s(11,Xi,2,3,"option",8),n(),s(12,en,2,1,"div",9),n()(),r(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),n(),g(17,"textarea",11),s(18,nn,2,1,"div",9),n()()(),r(19,"div",12)(20,"button",13),e(21,"Cancel"),n(),r(22,"button",14),e(23,"Submit"),n()()()()),i&2){let d,p;l("ngIf",t.mProgress()),a(2),l("formGroup",t.itemForm),a(6),l("ngClass",_(8,dt,((d=t.itemForm.get("status_id"))==null?null:d.invalid)&&(((d=t.itemForm.get("status_id"))==null?null:d.dirty)||((d=t.itemForm.get("status_id"))==null?null:d.touched)))),a(3),l("ngForOf",t.mNextPreviousStatuses),a(),l("ngIf",((p=t.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=t.itemForm.get("status_id"))==null?null:p.dirty)||((p=t.itemForm.get("status_id"))==null?null:p.touched))),a(5),l("ngClass",_(10,dt,t.itemForm.get("remarks").invalid&&(t.itemForm.get("remarks").dirty||t.itemForm.get("remarks").touched))),a(),l("ngIf",t.itemForm.get("remarks").invalid&&(t.itemForm.get("remarks").dirty||t.itemForm.get("remarks").touched)),a(4),l("disabled",t.itemForm.invalid)}},dependencies:[D,L,E,F,P,Ce,Y,te,ie,$,ee,K,z,Q,J],encapsulation:2})}};var Me=o=>({"is-invalid":o});function on(o,m){o&1&&g(0,"app-progress")}function mn(o,m){if(o&1&&(r(0,"option",16),e(1),n()),o&2){let i=m.$implicit;l("value",A(i.id)),a(),f(i.alias)}}function an(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function ln(o,m){if(o&1&&(r(0,"div",17),s(1,an,2,0,"div",0),n()),o&2){let i,t=u();a(),l("ngIf",(i=t.itemForm.get("status_id"))==null||i.errors==null?null:i.errors.required)}}function sn(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function dn(o,m){if(o&1&&(r(0,"div",17),s(1,sn,2,0,"div",0),n()),o&2){let i,t=u();a(),l("ngIf",(i=t.itemForm.get("remarks").errors)==null?null:i.required)}}function pn(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function un(o,m){if(o&1&&(r(0,"div",17),s(1,pn,2,0,"div",0),n()),o&2){let i,t=u(2);a(),l("ngIf",(i=t.itemForm.get("date_of_issue"))==null||i.errors==null?null:i.errors.required)}}function cn(o,m){if(o&1&&(r(0,"div",18)(1,"div",4)(2,"label",19),e(3,"Date of Issue:"),n(),g(4,"input",20),s(5,un,2,1,"div",9),n()()),o&2){let i,t,d=u();a(4),l("ngClass",_(2,Me,((i=d.itemForm.get("date_of_issue"))==null?null:i.invalid)&&(((i=d.itemForm.get("date_of_issue"))==null?null:i.dirty)||((i=d.itemForm.get("date_of_issue"))==null?null:i.touched)))),a(),l("ngIf",((t=d.itemForm.get("date_of_issue"))==null?null:t.invalid)&&(((t=d.itemForm.get("date_of_issue"))==null?null:t.dirty)||((t=d.itemForm.get("date_of_issue"))==null?null:t.touched)))}}function _n(o,m){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function fn(o,m){if(o&1&&(r(0,"div",17),s(1,_n,2,0,"div",0),n()),o&2){let i,t=u(2);a(),l("ngIf",(i=t.itemForm.get("effective_date"))==null||i.errors==null?null:i.errors.required)}}function vn(o,m){if(o&1&&(r(0,"div",18)(1,"div",4)(2,"label",21),e(3,"Effective Date:"),n(),g(4,"input",22),s(5,fn,2,1,"div",9),n()()),o&2){let i,t,d=u();a(4),l("ngClass",_(2,Me,((i=d.itemForm.get("effective_date"))==null?null:i.invalid)&&(((i=d.itemForm.get("effective_date"))==null?null:i.dirty)||((i=d.itemForm.get("effective_date"))==null?null:i.touched)))),a(),l("ngIf",((t=d.itemForm.get("effective_date"))==null?null:t.invalid)&&(((t=d.itemForm.get("effective_date"))==null?null:t.dirty)||((t=d.itemForm.get("effective_date"))==null?null:t.touched)))}}var qe=class o{constructor(m,i,t,d,p,y){this.mToastrService=m;this.mPermitService=i;this.mAppContextService=t;this.router=d;this.fb=p;this.route=y;this.mProgress=x(!1);this.item={};this.mEditor=he;this.itemForm=this.fb.group({status_id:["",v.required],date_of_issue:["",v.nullValidator],effective_date:["",v.nullValidator],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=x(!0),this.mPermitService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.getNextPreviousStatus(),this.mProgress=x(!1))},error:m=>{m.error.message&&this.mToastrService.error(m.error.message),this.mProgress=x(!1)}})}onSubmit(m){let i=le(ae({},m),{id:this.id});this.mProgress=x(!0),this.mPermitService.approvalApplicationItem(i).subscribe({next:t=>{t.status==="success"&&(this.mToastrService.success(t.message),this.router.navigateByUrl("/permits"),this.mProgress=x(!1))},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress=x(!1)}})}getNextPreviousStatus(){this.mProgress=x(!0),this.mPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:m=>{m&&(this.mNextPreviousStatuses=m,this.mProgress=x(!1))},error:m=>{m.error.message&&this.mToastrService.error(m.error.message),this.mProgress=x(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(I),c(C),c(S),c(Z),c(ne),c(W))}}static{this.\u0275cmp=h({type:o,selectors:[["app-approve"]],standalone:!1,decls:26,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],["class","col-md-6",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/permits","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-6"],["for","date_of_issue",1,"col-form-label","required"],["formControlName","date_of_issue","type","date",1,"form-control",3,"ngClass"],["for","effective_date",1,"col-form-label","required"],["formControlName","effective_date","type","date",1,"form-control",3,"ngClass"]],template:function(i,t){if(i&1&&(s(0,on,1,0,"app-progress",0),r(1,"div")(2,"form",1),N("ngSubmit",function(){return t.onSubmit(t.itemForm.value)}),r(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),n(),r(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),n(),s(11,mn,2,3,"option",8),n(),s(12,ln,2,1,"div",9),n()(),r(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),n(),g(17,"textarea",11),s(18,dn,2,1,"div",9),n()(),s(19,cn,6,4,"div",12)(20,vn,6,4,"div",12),n(),r(21,"div",13)(22,"button",14),e(23,"Cancel"),n(),r(24,"button",15),e(25,"Submit"),n()()()()),i&2){let d,p,y,b;l("ngIf",t.mProgress()),a(2),l("formGroup",t.itemForm),a(6),l("ngClass",_(10,Me,((d=t.itemForm.get("status_id"))==null?null:d.invalid)&&(((d=t.itemForm.get("status_id"))==null?null:d.dirty)||((d=t.itemForm.get("status_id"))==null?null:d.touched)))),a(3),l("ngForOf",t.mNextPreviousStatuses),a(),l("ngIf",((p=t.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=t.itemForm.get("status_id"))==null?null:p.dirty)||((p=t.itemForm.get("status_id"))==null?null:p.touched))),a(5),l("ngClass",_(12,Me,t.itemForm.get("remarks").invalid&&(t.itemForm.get("remarks").dirty||t.itemForm.get("remarks").touched))),a(),l("ngIf",t.itemForm.get("remarks").invalid&&(t.itemForm.get("remarks").dirty||t.itemForm.get("remarks").touched)),a(),l("ngIf",((y=t.itemForm.get("status_id"))==null?null:y.value)==5),a(),l("ngIf",((b=t.itemForm.get("status_id"))==null?null:b.value)==5),a(4),l("disabled",t.itemForm.invalid)}},dependencies:[D,L,E,F,P,Ce,Y,te,ie,$,ee,K,z,Q,J],encapsulation:2})}};var pt=()=>[1],xn=()=>[2,4],yn=()=>[5,7];function bn(o,m){o&1&&g(0,"app-progress")}function Sn(o,m){if(o&1&&(r(0,"div",12),e(1,`
                `),r(2,"a",13),e(3),n(),e(4,`
              `),n()),o&2){let i=u();a(2),l("routerLink",re("/permits/show/",i.item.id)),a(),f(i.item.application_number)}}function Cn(o,m){if(o&1&&(r(0,"div",12),e(1),n()),o&2){let i=u();a(),f(i.item.user==null?null:i.item.user.name)}}function hn(o,m){o&1&&(r(0,"div"),e(1,`
                  `),g(2,"app-review"),e(3,`
                `),n())}function En(o,m){o&1&&(r(0,"div"),e(1,`
                  `),g(2,"app-approve"),e(3,`
                `),n())}var ke=class o{constructor(m,i,t,d){this.mPermitService=m;this.mToastrService=i;this.mAppContextService=t;this.route=d;this.mProgress=x(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mPermitService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(i){return new(i||o)(c(C),c(I),c(S),c(W))}}static{this.\u0275cmp=h({type:o,selectors:[["app-process"]],standalone:!1,decls:56,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"fw-bold","text-muted"],[1,"text-muted"],[1,"text-sm",3,"routerLink"]],template:function(i,t){i&1&&(s(0,bn,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"div",3),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"label",6),e(16,"Number:"),n(),e(17,`
              `),s(18,Sn,5,3,"div",7),e(19,`
            `),n(),e(20,`
          `),n(),e(21,`
          `),r(22,"div",4),e(23,`
            `),r(24,"div",5),e(25,`
              `),r(26,"label",6),e(27,"Applicant:"),n(),e(28,`
              `),s(29,Cn,2,1,"div",7),e(30,`
            `),n(),e(31,`
          `),n(),e(32,`
          `),r(33,"div",8),e(34,`
            `),r(35,"div",5),e(36,`

              `),r(37,"fieldset",9),e(38,`
                `),r(39,"legend",10)(40,"h6",11),e(41,"Process"),n()(),e(42,`
                `),e(43,`
                `),s(44,hn,4,0,"div",0),e(45,`
                `),e(46,`
                `),s(47,En,4,0,"div",0),e(48,`
              `),n(),e(49,`

            `),n(),e(50,`
          `),n(),e(51,`
        `),n(),e(52,`

      `),n(),e(53,`
    `),n(),e(54,`
  `),n(),e(55,`
`),n()),i&2&&(l("ngIf",t.mProgress()),a(18),l("ngIf",t.item.application_number),a(11),l("ngIf",t.item.user),a(15),l("ngIf",(t.item==null?null:t.item.status_id)===3&&(t.mAppContextService.hasRoles(j(5,pt))||t.mAppContextService.hasRoles(j(6,xn)))),a(3),l("ngIf",(t.item==null?null:t.item.status_id)===4&&(t.mAppContextService.hasRoles(j(7,pt))||t.mAppContextService.hasRoles(j(8,yn)))))},dependencies:[E,F,P,V,G,H,U,Ne,qe],encapsulation:2})}};var Fn=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Fe,data:{title:"Movement Permits"}},{path:"create",component:Pe,data:{title:"Movement Permits / Create"}},{path:"edit/:id",component:Te,data:{title:"Movement Permits / Edit"}},{path:"show/:id",component:we,data:{title:"Movement Permits / Show"}},{path:"process/:id",component:ke,data:{title:"Movement Permits / Process"}}],Ae=class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=xe({type:o})}static{this.\u0275inj=fe({imports:[Se,Re.forChild(Fn),Re]})}};var ut=class o{static{this.\u0275fac=function(i){return new(i||o)}}static{this.\u0275mod=xe({type:o})}static{this.\u0275inj=fe({imports:[Se,Ae,ot,Je,Xe,Ze,et,tt,rt,lt,Ye]})}};export{ut as PermitModule};
