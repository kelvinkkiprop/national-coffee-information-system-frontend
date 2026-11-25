import{a as U}from"./chunk-MB3X2QZT.js";import{a as nt}from"./chunk-D5MIKHAE.js";import{a as Qe,b as R,c as x,d as q,e as D,f as Xe,g as Ze,h as A,j as B,k as j,l as ne,m as re,n as oe,o as Y,p as $e}from"./chunk-WUV7VT53.js";import{a as M}from"./chunk-YFU6KPVP.js";import{c as k,e as N}from"./chunk-L5JZA47S.js";import{$ as Le,Ca as ze,Da as Ye,Ea as Je,G as Ee,Ja as Ke,M as je,R as Ve,X as w,Y as I,_ as Oe,c as b,d as H,e as E,g as Be,ia as Ge,j as te,ka as T,la as P,na as We,ta as He,v as ie,x as z,y as F}from"./chunk-M56LXQJ4.js";import{Cb as l,Cc as qe,Db as t,Dc as De,Eb as i,Fb as f,Gc as Ae,Na as Pe,Ob as ye,Sa as m,Sb as h,T as X,Ub as c,aa as he,ab as u,ba as Ce,cc as Ne,fb as y,gb as Z,gc as ee,hc as e,ic as g,jc as Me,lb as s,lc as L,ma as C,mc as G,nc as W,rc as Q,sc as be,vc as Ue,wb as $,wc as v,xc as ke,yc as Re}from"./chunk-4BW25U23.js";import{a as Ie,b as Te,e as it}from"./chunk-2WH2EVR6.js";var et=it(nt());var rt=o=>({"is-invalid":o}),ot=(o,a,r)=>({"bg-warning":o,"bg-success":a,"bg-danger":r}),at=()=>[1],mt=(o,a)=>({active:o,disabled:a});function lt(o,a){o&1&&f(0,"app-progress")}function st(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function dt(o,a){if(o&1&&(t(0,"div",19),e(1,`
                  `),s(2,st,2,0,"div",1),e(3,`
                `),i()),o&2){let r=c();m(2),l("ngIf",r.search_term.errors==null?null:r.search_term.errors.required)}}function pt(o,a){if(o&1){let r=ye();t(0,"button",32),h("click",function(){he(r);let d=c().$implicit,p=c(2);return Ce(p.onDelete(d))}),f(1,"i",33),i()}}function ut(o,a){if(o&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td"),e(6),i(),e(7,`
                `),t(8,"td"),e(9),i(),e(10,`
                `),t(11,"td"),e(12),i(),e(13,`
                `),t(14,"td"),e(15),i(),e(16,`
                `),t(17,"td")(18,"span",25),e(19),i()(),e(20,`
                `),t(21,"td"),e(22),qe(23,"date"),i(),e(24,`
                `),t(25,"td"),e(26,`
                  `),t(27,"div",26),e(28,`
                    `),t(29,"button",27),f(30,"i",28),i(),e(31,`
                    `),t(32,"button",29),e(33," "),f(34,"i",30),i(),e(35,`
                    `),s(36,pt,2,0,"button",31),e(37,`
                  `),i(),e(38,`
                `),i(),e(39,`
              `),i()),o&2){let r=a.$implicit,n=a.index,d=c(2);m(3),Me("",d.mPageFrom+n,"."),m(3),g(r.name),m(3),g(r.email),m(3),g(r.role==null?null:r.role.name),m(3),g(r.phone),m(3),l("ngClass",Re(15,ot,r.status_id==1,r.status_id==2,r.status_id==3)),m(),g(r==null||r.status==null?null:r.status.name),m(3),g(De(23,13,r.created_at)),m(7),l("routerLink",be("/users/show/",r.id)),m(3),l("routerLink",be("/users/edit/",r.id)),m(4),l("ngIf",d.mAppContextService.hasRoles(Ue(19,at)))}}function ct(o,a){if(o&1&&(t(0,"div",20),e(1,`
          `),t(2,"table",21),e(3,`
            `),t(4,"thead",22),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",23),e(9,"#"),i(),e(10,`
                `),t(11,"th",23),e(12,"Name"),i(),e(13,`
                `),t(14,"th",23),e(15,"Email"),i(),e(16,`
                `),t(17,"th",23),e(18,"Role"),i(),e(19,`
                `),t(20,"th",23),e(21,"Phone"),i(),e(22,`
                `),t(23,"th",23),e(24,"Status"),i(),e(25,`
                `),t(26,"th",23),e(27,"Created"),i(),e(28,`
                `),t(29,"th",23),e(30,"Action"),i(),e(31,`
              `),i(),e(32,`
            `),i(),e(33,`
            `),t(34,"tbody"),e(35,`
              `),s(36,ut,40,20,"tr",24),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i()),o&2){let r=c();m(36),l("ngForOf",r.mUsers)}}function ft(o,a){if(o&1){let r=ye();t(0,"li",36),e(1,`
              `),t(2,"a",37),h("click",function(){let d=he(r).$implicit,p=c(2);return Ce(p.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(o&2){let r=a.$implicit;l("ngClass",ke(2,mt,r.active,!r.url)),m(2),l("innerHTML",r.label,Pe)}}function gt(o,a){if(o&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",34),e(3,`
            `),s(4,ft,4,5,"li",35),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let r=c();m(4),l("ngForOf",r.links)}}function vt(o,a){o&1&&(e(0,`
          `),t(1,"p",38),e(2,"No items"),i(),e(3,`
        `))}var ae=class o{constructor(a,r,n){this.mUserService=a;this.mToastrService=r;this.mAppContextService=n;this.mUsers={};this.links=[];this.mProgress=C(!1)}ngOnInit(){this.index(),this.search_term=new Ze("",x.required),this.itemForm=new Xe({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mUserService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mUsers=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mUserService.paginateItems(a).subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mUsers=r.data,this.links=r.links,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onDelete(a){et.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&(this.mProgress.set(!0),this.mUserService.deleteItem(a).subscribe({next:d=>{d&&(this.mUsers=this.mUsers.filter(p=>p.id!==a.id),this.mToastrService.warning(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.warning(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mUserService.searchItems(a).subscribe({next:r=>{r&&(this.mUsers=r.salutations,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mUserService.searchItems(a).subscribe({next:r=>{r&&(this.mUsers=r.data,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(u(U),u(N),u(k))}}static{this.\u0275cmp=y({type:o,selectors:[["app-index"]],standalone:!1,decls:62,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["role","group","aria-label","Basic example",1,"btn-group"],["routerLink","/coffee-plots/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],["routerLink","/users/import",1,"btn","btn-light","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-upload"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(r,n){if(r&1&&(s(0,lt,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4),e(10,`
          `),t(11,"div",5),e(12,`
            `),t(13,"div",6),e(14,`
              `),t(15,"a",7),e(16,`
                `),f(17,"i",8),e(18,` Add
              `),i(),e(19,`
              `),t(20,"a",9),e(21,`
                `),f(22,"i",10),e(23,` Import
              `),i(),e(24,`
            `),i(),e(25,`
          `),i(),e(26,`
          `),t(27,"div"),e(28,`
            `),t(29,"form",11),h("ngSubmit",function(){return n.onSearch(n.itemForm.value)}),e(30,`
              `),t(31,"div",12),e(32,`
                `),f(33,"input",13),e(34,`
                `),t(35,"div",14),e(36,`
                  `),t(37,"button",15),e(38,`
                    `),f(39,"i",16),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
                `),s(43,dt,4,1,"div",17),e(44,`
              `),i(),e(45,`
            `),i(),e(46,`
          `),i(),e(47,`
        `),i(),e(48,`
      `),i(),e(49,`
      `),t(50,"c-card-body"),e(51,`

        `),s(52,ct,40,1,"div",18),e(53,`

        `),s(54,gt,7,1,"div",1),e(55,`

        `),s(56,vt,4,0,"ng-template",null,0,Ae),e(58,`

      `),i(),e(59,`
    `),i(),e(60,`
  `),i(),e(61,`
`),i()),r&2){let d=Ne(57);l("ngIf",n.mProgress()),m(29),l("formGroup",n.itemForm),m(4),l("ngClass",v(7,rt,n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched))),m(10),l("ngIf",n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched)),m(9),l("ngIf",n.mUsers.length>0)("ngIfElse",d),m(2),l("ngIf",n.links)}},dependencies:[b,H,E,F,M,w,I,Oe,T,P,Ye,ze,A,R,q,D,j,B,Be],encapsulation:2})}};var fe=o=>({"is-invalid":o});function xt(o,a){o&1&&f(0,"app-progress")}function _t(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function St(o,a){if(o&1&&(t(0,"div",24),e(1,`
                  `),s(2,_t,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("name").errors)==null?null:r.required)}}function ht(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ct(o,a){if(o&1&&(t(0,"div",24),e(1,`
                  `),s(2,ht,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("email").errors)==null?null:r.required)}}function yt(o,a){if(o&1&&(t(0,"option",25),e(1),i()),o&2){let r=a.$implicit;l("value",Q(r.id)),m(),g(r.name)}}function bt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Et(o,a){if(o&1&&(t(0,"div",24),e(1,`
                  `),s(2,bt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("role_id"))==null||r.errors==null?null:r.errors.required)}}function Ft(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function wt(o,a){if(o&1&&(t(0,"div",24),e(1,`
                    `),s(2,Ft,2,0,"div",0),e(3,`
                  `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("password"))==null||r.errors==null?null:r.errors.required)}}var ge=class o{constructor(a,r,n,d,p){this.mUserService=a;this.mToastrService=r;this.mAppContextService=n;this.router=d;this.fb=p;this.mProgress=C(!1);this.mShowPassword=!1;this.itemForm=this.fb.group({email:["",x.required],name:["",x.required],role_id:["",x.required],password:["",x.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(a){this.mProgress.set(!0),this.mUserService.createItem(a).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mUserService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoles=a.data.roles,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(u(U),u(N),u(k),u(z),u(Y))}}static{this.\u0275cmp=y({type:o,selectors:[["app-create"]],standalone:!1,decls:92,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","email",1,"col-form-label","required"],["formControlName","email","type","email",1,"form-control",3,"ngClass"],["for","role_id",1,"col-form-label","required"],["formControlName","role_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(r,n){if(r&1&&(s(0,xt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),h("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Name:"),i(),e(19,`
                `),f(20,"input",8),e(21,`
                `),s(22,St,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",10),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",11),e(31,"Email:"),i(),e(32,`
                `),f(33,"input",12),e(34,`
                `),s(35,Ct,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",10),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",13),e(44,"Role:"),i(),e(45,`
                `),t(46,"select",14),e(47,`
                  `),t(48,"option",15),e(49,"--- Select role ---"),i(),e(50,`
                  `),s(51,yt,2,3,"option",16),e(52,`
                `),i(),e(53,`
                `),s(54,Et,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),t(58,"div",5),e(59,`
              `),t(60,"div",6),e(61,`
                `),t(62,"label",17),e(63,"Password:"),i(),e(64,`
                `),t(65,"div",18),e(66,`
                  `),f(67,"input",19),e(68,`
                  `),t(69,"span",20),h("click",function(){return n.mShowPassword=!n.mShowPassword}),e(70," "),f(71,"i"),i(),e(72,`
                  `),s(73,wt,4,1,"div",9),e(74,`
                `),i(),e(75,`
              `),i(),e(76,`
            `),i(),e(77,`
          `),i(),e(78,`
          `),t(79,"div",21),e(80,`
            `),t(81,"button",22),e(82,"Cancel"),i(),e(83,`
            `),t(84,"button",23),e(85,"Submit"),i(),e(86,`
          `),i(),e(87,`
        `),i(),e(88,`

      `),i(),e(89,`
    `),i(),e(90,`
  `),i(),e(91,`
`),i()),r&2){let d,p,_,S;l("ngIf",n.mProgress()),m(9),l("formGroup",n.itemForm),m(11),l("ngClass",v(16,fe,n.itemForm.get("name").invalid&&(n.itemForm.get("name").dirty||n.itemForm.get("name").touched))),m(2),l("ngIf",n.itemForm.get("name").invalid&&(n.itemForm.get("name").dirty||n.itemForm.get("name").touched)),m(11),l("ngClass",v(18,fe,n.itemForm.get("email").invalid&&(n.itemForm.get("email").dirty||n.itemForm.get("email").touched))),m(2),l("ngIf",n.itemForm.get("email").invalid&&(n.itemForm.get("email").dirty||n.itemForm.get("email").touched)),m(11),l("ngClass",v(20,fe,((d=n.itemForm.get("role_id"))==null?null:d.invalid)&&(((d=n.itemForm.get("role_id"))==null?null:d.dirty)||((d=n.itemForm.get("role_id"))==null?null:d.touched)))),m(5),l("ngForOf",n.mRoles),m(3),l("ngIf",((p=n.itemForm.get("role_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("role_id"))==null?null:p.dirty)||((p=n.itemForm.get("role_id"))==null?null:p.touched))),m(13),l("ngClass",v(22,fe,((_=n.itemForm.get("password"))==null?null:_.invalid)&&(((_=n.itemForm.get("password"))==null?null:_.dirty)||((_=n.itemForm.get("password"))==null?null:_.touched))))("type",n.mShowPassword?"text":"password"),m(2),$("aria-label",n.mShowPassword?"Hide password":"Show password"),m(2),ee(n.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),m(2),l("ngIf",((S=n.itemForm.get("password"))==null?null:S.invalid)&&(((S=n.itemForm.get("password"))==null?null:S.dirty)||((S=n.itemForm.get("password"))==null?null:S.touched))),m(11),l("disabled",n.itemForm.invalid)}},dependencies:[b,H,E,F,M,w,I,T,P,A,re,oe,R,ne,q,D,j,B],encapsulation:2})}};var K=o=>({"is-invalid":o});function It(o,a){o&1&&f(0,"app-progress")}function Tt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Pt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Tt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("name").errors)==null?null:r.required)}}function Nt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Mt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Nt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("email").errors)==null?null:r.required)}}function Ut(o,a){if(o&1&&(t(0,"option",30),e(1),i()),o&2){let r=a.$implicit;l("value",Q(r.id)),m(),g(r.name)}}function kt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Rt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,kt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("role_id"))==null||r.errors==null?null:r.errors.required)}}function qt(o,a){if(o&1&&(t(0,"option",30),e(1),i()),o&2){let r=a.$implicit;l("value",Q(r.id)),m(),g(r.name)}}function Dt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function At(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Dt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function Bt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function jt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                    `),s(2,Bt,2,0,"div",0),e(3,`
                  `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("password"))==null||r.errors==null?null:r.errors.required)}}function Vt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ot(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Vt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("reset_password").errors)==null?null:r.required)}}var ve=class o{constructor(a,r,n,d,p,_){this.mUserService=a;this.mToastrService=r;this.mAppContextService=n;this.router=d;this.fb=p;this.route=_;this.mProgress=C(!1);this.item={};this.mShowPassword=!1;this.itemForm=this.fb.group({email:["",x.required],name:["",x.required],role_id:["",x.required],status_id:["",x.required],password:["",x.nullValidator],reset_password:[!1,x.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mUserService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=Te(Ie({},a),{id:this.item.id});this.mProgress.set(!0),this.mUserService.updateItem(r).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mUserService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoles=a.data.roles,this.mUserStatuses=a.data.user_statuses,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(u(U),u(N),u(k),u(z),u(Y),u(ie))}}static{this.\u0275cmp=y({type:o,selectors:[["app-edit"]],standalone:!1,decls:124,vars:38,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","email",1,"col-form-label","required"],["formControlName","email","type","email",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","role_id",1,"col-form-label","required"],["formControlName","role_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngModelChange","ngModel","ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"icheck-success","text-end","mb-3"],["formControlName","reset_password","type","checkbox",3,"ngClass"],["for","reset_password"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(r,n){if(r&1&&(s(0,It,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),h("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Name:"),i(),e(19,`
                `),t(20,"input",8),W("ngModelChange",function(p){return G(n.item.name,p)||(n.item.name=p),p}),i(),e(21,`
                `),s(22,Pt,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",10),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",11),e(31,"Email:"),i(),e(32,`
                `),t(33,"input",12),W("ngModelChange",function(p){return G(n.item.email,p)||(n.item.email=p),p}),i(),e(34,`
                `),s(35,Mt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",10),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",13),e(44,"Role:"),i(),e(45,`
                `),t(46,"select",14),W("ngModelChange",function(p){return G(n.item.role_id,p)||(n.item.role_id=p),p}),e(47,`
                  `),t(48,"option",15),e(49,"--- Select role ---"),i(),e(50,`
                  `),s(51,Ut,2,3,"option",16),e(52,`
                `),i(),e(53,`
                `),s(54,Rt,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),t(58,"div",5),e(59,`
              `),t(60,"div",6),e(61,`
                `),t(62,"label",17),e(63,"Status:"),i(),e(64,`
                `),t(65,"select",18),W("ngModelChange",function(p){return G(n.item.status_id,p)||(n.item.status_id=p),p}),e(66,`
                  `),t(67,"option",15),e(68,"--- Select status ---"),i(),e(69,`
                  `),s(70,qt,2,3,"option",16),e(71,`
                `),i(),e(72,`
                `),s(73,At,4,1,"div",9),e(74,`
              `),i(),e(75,`
            `),i(),e(76,`
            `),t(77,"div",5),e(78,`
              `),t(79,"div",6),e(80,`
                `),t(81,"label",19),e(82,"Password:"),i(),e(83,`
                `),t(84,"div",20),e(85,`
                  `),t(86,"input",21),W("ngModelChange",function(p){return G(n.item.password,p)||(n.item.password=p),p}),i(),e(87,`
                  `),t(88,"span",22),h("click",function(){return n.mShowPassword=!n.mShowPassword}),e(89," "),f(90,"i"),i(),e(91,`
                  `),s(92,jt,4,1,"div",9),e(93,`
                `),i(),e(94,`
              `),i(),e(95,`
            `),i(),e(96,`
            `),t(97,"div",5),e(98,`
              `),t(99,"div",23),e(100,`
                `),f(101,"input",24),e(102,`\xA0
                `),t(103,"label",25),e(104,"Reset password?"),i(),e(105,`
                `),s(106,Ot,4,1,"div",9),e(107,`
              `),i(),e(108,`
            `),i(),e(109,`
          `),i(),e(110,`
          `),t(111,"div",26),e(112,`
            `),t(113,"button",27),e(114,"Cancel"),i(),e(115,`
            `),t(116,"button",28),e(117,"Submit"),i(),e(118,`
          `),i(),e(119,`
        `),i(),e(120,`

      `),i(),e(121,`
    `),i(),e(122,`
  `),i(),e(123,`
`),i()),r&2){let d,p,_,S,V,O;l("ngIf",n.mProgress()),m(9),l("formGroup",n.itemForm),m(11),L("ngModel",n.item.name),l("ngClass",v(26,K,n.itemForm.get("name").invalid&&(n.itemForm.get("name").dirty||n.itemForm.get("name").touched))),m(2),l("ngIf",n.itemForm.get("name").invalid&&(n.itemForm.get("name").dirty||n.itemForm.get("name").touched)),m(11),L("ngModel",n.item.email),l("ngClass",v(28,K,n.itemForm.get("email").invalid&&(n.itemForm.get("email").dirty||n.itemForm.get("email").touched))),m(2),l("ngIf",n.itemForm.get("email").invalid&&(n.itemForm.get("email").dirty||n.itemForm.get("email").touched)),m(11),L("ngModel",n.item.role_id),l("ngClass",v(30,K,((d=n.itemForm.get("role_id"))==null?null:d.invalid)&&(((d=n.itemForm.get("role_id"))==null?null:d.dirty)||((d=n.itemForm.get("role_id"))==null?null:d.touched)))),m(5),l("ngForOf",n.mRoles),m(3),l("ngIf",((p=n.itemForm.get("role_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("role_id"))==null?null:p.dirty)||((p=n.itemForm.get("role_id"))==null?null:p.touched))),m(11),L("ngModel",n.item.status_id),l("ngClass",v(32,K,((_=n.itemForm.get("status_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("status_id"))==null?null:_.dirty)||((_=n.itemForm.get("status_id"))==null?null:_.touched)))),m(5),l("ngForOf",n.mUserStatuses),m(3),l("ngIf",((S=n.itemForm.get("status_id"))==null?null:S.invalid)&&(((S=n.itemForm.get("status_id"))==null?null:S.dirty)||((S=n.itemForm.get("status_id"))==null?null:S.touched))),m(13),L("ngModel",n.item.password),l("ngClass",v(34,K,((V=n.itemForm.get("password"))==null?null:V.invalid)&&(((V=n.itemForm.get("password"))==null?null:V.dirty)||((V=n.itemForm.get("password"))==null?null:V.touched))))("type",n.mShowPassword?"text":"password"),m(2),$("aria-label",n.mShowPassword?"Hide password":"Show password"),m(2),ee(n.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),m(2),l("ngIf",((O=n.itemForm.get("password"))==null?null:O.invalid)&&(((O=n.itemForm.get("password"))==null?null:O.dirty)||((O=n.itemForm.get("password"))==null?null:O.touched))),m(9),l("ngClass",v(36,K,n.itemForm.get("reset_password").invalid&&(n.itemForm.get("reset_password").dirty||n.itemForm.get("reset_password").touched))),m(5),l("ngIf",n.itemForm.get("reset_password").invalid&&(n.itemForm.get("reset_password").dirty||n.itemForm.get("reset_password").touched)),m(10),l("disabled",n.itemForm.invalid)}},dependencies:[b,H,E,F,M,w,I,T,P,A,re,oe,R,Qe,ne,q,D,j,B],encapsulation:2})}};function Lt(o,a){o&1&&f(0,"app-progress")}function Gt(o,a){if(o&1&&(t(0,"div",13),e(1),i()),o&2){let r=c();m(),g(r.item.name)}}function Wt(o,a){if(o&1&&(t(0,"div",13),e(1),i()),o&2){let r=c();m(),g(r.item.email)}}function Ht(o,a){if(o&1&&(t(0,"div",13),e(1),i()),o&2){let r=c();m(),g(r.item.role==null?null:r.item.role.name)}}function zt(o,a){if(o&1&&(t(0,"div",13),e(1,`
                  `),t(2,"span",14),e(3),i(),e(4,`
                `),i()),o&2){let r=c();m(2),l("ngClass",(r.item==null?null:r.item.status_id)===1?"bg-success":"bg-warning"),m(),g(r.item==null||r.item.status==null?null:r.item.status.name)}}var xe=class o{constructor(a,r,n,d){this.mUserService=a;this.mToastrService=r;this.mAppContextService=n;this.route=d;this.mProgress=C(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mUserService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(u(U),u(N),u(k),u(ie))}}static{this.\u0275cmp=y({type:o,selectors:[["app-show"]],standalone:!1,decls:68,vars:5,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-12"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-6"],["for","role_id"],["for","investor_id"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"]],template:function(r,n){r&1&&(s(0,Lt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",5),e(16,`
                `),t(17,"label",6),e(18,"Name:"),i(),e(19,`
                `),s(20,Gt,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",8),e(25,`
              `),t(26,"div",5),e(27,`
                `),t(28,"label",6),e(29,"Email:"),i(),e(30,`
                `),s(31,Wt,2,1,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",8),e(36,`
              `),t(37,"div",5),e(38,`
                `),t(39,"label",9),e(40,"Role:"),i(),e(41,`
                `),s(42,Ht,2,1,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",4),e(47,`
              `),t(48,"div",5),e(49,`
                `),t(50,"label",10),e(51,"Status:"),i(),e(52,`
                `),s(53,zt,5,2,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
          `),i(),e(57,`
          `),t(58,"div",11),e(59,`
            `),t(60,"button",12),e(61,"Cancel"),i(),e(62,`
          `),i(),e(63,`
        `),i(),e(64,`

      `),i(),e(65,`
    `),i(),e(66,`
  `),i(),e(67,`
`),i()),r&2&&(l("ngIf",n.mProgress()),m(20),l("ngIf",n.item.name),m(11),l("ngIf",n.item.email),m(11),l("ngIf",n.item.role),m(11),l("ngIf",n.item.status))},dependencies:[b,E,F,M,w,I,T,P],encapsulation:2})}};var Yt=o=>({"is-invalid":o});function Jt(o,a){o&1&&f(0,"app-progress")}function Kt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Qt(o,a){if(o&1&&(t(0,"div",14),e(1,`
                  `),s(2,Kt,2,0,"div",0),e(3,`
                `),i()),o&2){let r,n=c();m(2),l("ngIf",(r=n.itemForm.get("attachment").errors)==null?null:r.required)}}var _e=class o{constructor(a,r,n,d){this.mUserService=a;this.mToastrService=r;this.router=n;this.fb=d;this.mProgress=C(!1);this.itemForm=this.fb.group({attachment:["",x.required]})}onSubmit(a){let r=new FormData;r.append("attachment",this.attachment_file,this.attachment_file.name),r.append("_method","POST"),this.mProgress.set(!0),this.mUserService.importRegisteredFarmersItems(r).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onAttachmentChange(a){if(a.target.value){let r=a.target.files[0];this.attachment_file=r,console.log(this.attachment_file)}}static{this.\u0275fac=function(r){return new(r||o)(u(U),u(N),u(z),u(Y))}}static{this.\u0275cmp=y({type:o,selectors:[["app-import"]],standalone:!1,decls:42,vars:7,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","attachment",1,"col-form-label","required"],["href","assets/Registered-Farmers-Template.xlsx",1,"btn","btn-link","btn-sm"],["formControlName","attachment","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(r,n){r&1&&(s(0,Jt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),h("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Registered Farmers File:"),t(19,"a",8),e(20,"Download Template"),i()(),e(21,`
                `),t(22,"input",9),h("change",function(p){return n.onAttachmentChange(p)}),i(),e(23,`
                `),s(24,Qt,4,1,"div",10),e(25,`
              `),i(),e(26,`
            `),i(),e(27,`
          `),i(),e(28,`
          `),t(29,"div",11),e(30,`
            `),t(31,"button",12),e(32,"Cancel"),i(),e(33,`
            `),t(34,"button",13),e(35,"Submit"),i(),e(36,`
          `),i(),e(37,`
        `),i(),e(38,`

      `),i(),e(39,`
    `),i(),e(40,`
  `),i(),e(41,`
`),i()),r&2&&(l("ngIf",n.mProgress()),m(9),l("formGroup",n.itemForm),m(13),l("ngClass",v(5,Yt,n.itemForm.get("attachment").invalid&&(n.itemForm.get("attachment").dirty||n.itemForm.get("attachment").touched))),m(2),l("ngIf",n.itemForm.get("attachment").invalid&&(n.itemForm.get("attachment").dirty||n.itemForm.get("attachment").touched)),m(10),l("disabled",n.itemForm.invalid))},dependencies:[b,E,F,M,w,I,T,P,A,R,q,D,j,B],encapsulation:2})}};var Xt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:ae,data:{title:"Users"}},{path:"create",component:ge,data:{title:"Users / Create"}},{path:"edit/:id",component:ve,data:{title:"Users / Edit"}},{path:"show/:id",component:xe,data:{title:"Users / Show"}},{path:"import",component:_e,data:{title:"Users / Import"}}],Se=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=Z({type:o})}static{this.\u0275inj=X({imports:[te,Ee.forChild(Xt),Ee]})}};var tt=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=Z({type:o})}static{this.\u0275inj=X({imports:[te,Se,Ke,Ve,Le,Ge,We,He,Je,$e,je]})}};export{tt as UserModule};
