import{a as ot}from"./chunk-RWJQYMIB.js";import{a as N,c as h,e as A}from"./chunk-ZA7FNFH2.js";import{a as k}from"./chunk-35TDJECS.js";import{a as Qe,b as V,c as _,d as L,e as H,f as Xe,g as Ze,h as W,j as G,k as $,l as ne,m as re,n as oe,o as ae,p as et}from"./chunk-WNMX7QA7.js";import{$a as Z,Ab as w,Ac as P,Ba as l,Bb as j,Ca as t,Cb as F,Cc as Le,Da as i,Dc as He,Ea as f,Eb as Be,Hb as ee,J as Pe,K,M as ge,Mb as De,Mc as We,Na as _e,Oc as U,P as ve,Pa as C,Pc as M,Q as xe,Ra as u,Rc as Ge,Tb as te,Vb as ie,Wb as I,Xc as $e,Y as b,Ya as Me,a as Ie,ab as e,b as Te,bb as g,bc as Ce,cb as Ne,da as Ue,e as rt,eb as O,ed as ze,fb as B,fd as Ye,gb as D,gd as Je,ha as m,hb as J,ib as Se,kb as ke,lb as x,ld as Ke,mb as Ae,oa as c,ob as qe,oc as je,pa as E,pb as Re,qa as Q,sb as Oe,ta as s,tc as Ve,wa as X,zc as T}from"./chunk-AGOFN3EQ.js";var it=rt(ot());var y=class o{constructor(a,n){this.mAppContextService=a;this.http=n}allItems(){let a=`${N.base_url}/users`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let n=`${N.base_url}/users`;return this.http.post(n,a,this.mAppContextService.getHttpOptions())}getOneItem(a){let n=`${N.base_url}/users/${a}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}updateItem(a){let n=`${N.base_url}/users/${a.id}`;return this.http.put(n,a,this.mAppContextService.getHttpOptions())}deleteItem(a){let n=`${N.base_url}/users/${a.id}`;return this.http.delete(n,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let n=`${N.base_url}/search-users`;return this.http.post(n,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${N.base_url}/unpaginated-items-users`;return this.http.get(a,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(n){return new(n||o)(ge(h),ge(De))}}static{this.\u0275prov=Pe({token:o,factory:o.\u0275fac,providedIn:"root"})}};var at=o=>({"is-invalid":o}),mt=()=>[1],lt=(o,a)=>({active:o,disabled:a});function st(o,a){o&1&&f(0,"app-progress")}function dt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function pt(o,a){if(o&1&&(t(0,"div",16),e(1,`
                  `),s(2,dt,2,0,"div",1),e(3,`
                `),i()),o&2){let n=u();m(2),l("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function ut(o,a){if(o&1){let n=_e();t(0,"button",29),C("click",function(){ve(n);let d=u().$implicit,p=u(2);return xe(p.onDelete(d))}),f(1,"i",30),i()}}function ct(o,a){if(o&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td"),e(6),i(),e(7,`
                `),t(8,"td"),e(9),i(),e(10,`
                `),t(11,"td"),e(12),i(),e(13,`
                `),t(14,"td")(15,"span",22),e(16),i()(),e(17,`
                `),t(18,"td"),e(19),qe(20,"date"),i(),e(21,`
                `),t(22,"td"),e(23,`
                  `),t(24,"div",23),e(25,`
                    `),t(26,"button",24),f(27,"i",25),i(),e(28,`
                    `),t(29,"button",26),e(30," "),f(31,"i",27),i(),e(32,`
                    `),s(33,ut,2,0,"button",28),e(34,`
                  `),i(),e(35,`
                `),i(),e(36,`
              `),i()),o&2){let n=a.$implicit,r=a.index,d=u(2);m(3),Ne("",d.mPageFrom+r,"."),m(3),g(n.name),m(3),g(n.email),m(3),g(n.role==null?null:n.role.name),m(3),l("ngClass",(n==null?null:n.status_id)===1?"bg-success":"bg-warning"),m(),g(n==null||n.status==null?null:n.status.name),m(3),g(Re(20,12,n.created_at)),m(7),l("routerLink",Se("/users/show/",n.id)),m(3),l("routerLink",Se("/users/edit/",n.id)),m(4),l("ngIf",d.mAppContextService.hasRoles(ke(14,mt)))}}function ft(o,a){if(o&1&&(t(0,"div",17),e(1,`
          `),t(2,"table",18),e(3,`
            `),t(4,"thead",19),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",20),e(9,"#"),i(),e(10,`
                `),t(11,"th",20),e(12,"Name"),i(),e(13,`
                `),t(14,"th",20),e(15,"Email"),i(),e(16,`
                `),t(17,"th",20),e(18,"Role"),i(),e(19,`
                `),t(20,"th",20),e(21,"Status"),i(),e(22,`
                `),t(23,"th",20),e(24,"Created"),i(),e(25,`
                `),t(26,"th",20),e(27,"Action"),i(),e(28,`
              `),i(),e(29,`
            `),i(),e(30,`
            `),t(31,"tbody"),e(32,`
              `),s(33,ct,37,15,"tr",21),e(34,`
            `),i(),e(35,`
          `),i(),e(36,`
        `),i()),o&2){let n=u();m(33),l("ngForOf",n.mUsers)}}function gt(o,a){if(o&1){let n=_e();t(0,"li",33),e(1,`
              `),t(2,"a",34),C("click",function(){let d=ve(n).$implicit,p=u(2);return xe(p.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(o&2){let n=a.$implicit;l("ngClass",Ae(2,lt,n.active,!n.url)),m(2),l("innerHTML",n.label,Ue)}}function vt(o,a){if(o&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",31),e(3,`
            `),s(4,gt,4,5,"li",32),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let n=u();m(4),l("ngForOf",n.links)}}function xt(o,a){o&1&&(e(0,`
          `),t(1,"p",35),e(2,"No items"),i(),e(3,`
        `))}var se=class o{constructor(a,n,r){this.mUserService=a;this.mToastrService=n;this.mAppContextService=r;this.mUsers={};this.links=[];this.mProgress=b(!1)}ngOnInit(){this.index(),this.search_term=new Ze("",_.required),this.itemForm=new Xe({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mUserService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mUsers=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mUserService.paginateItems(a).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mUsers=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onDelete(a){it.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mUserService.deleteItem(a).subscribe({next:d=>{d&&(this.mUsers=this.mUsers.filter(p=>p.id!==a.id),this.mToastrService.warning(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.warning(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mUserService.searchItems(a).subscribe({next:n=>{n&&(this.mUsers=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mUserService.searchItems(a).subscribe({next:n=>{n&&(this.mUsers=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(y),c(k),c(h))}}static{this.\u0275cmp=E({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/users/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,r){if(n&1&&(s(0,st,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4),e(10,`
          `),t(11,"div",5),e(12,`
            `),t(13,"a",6),e(14,`
              `),f(15,"i",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),t(19,"div"),e(20,`
            `),t(21,"form",8),C("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),t(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),t(27,"div",11),e(28,`
                  `),t(29,"button",12),e(30,`
                    `),f(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),s(35,pt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),t(42,"c-card-body"),e(43,`

        `),s(44,ft,37,1,"div",15),e(45,`

        `),s(46,vt,7,1,"div",1),e(47,`

        `),s(48,xt,4,0,"ng-template",null,0,Oe),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),n&2){let d=Me(49);l("ngIf",r.mProgress()),m(21),l("formGroup",r.itemForm),m(4),l("ngClass",x(7,at,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),m(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),m(9),l("ngIf",r.mUsers.length>0)("ngIfElse",d),m(2),l("ngIf",r.links)}},dependencies:[w,j,F,I,A,T,P,Le,U,M,Ye,ze,W,V,L,H,$,G,Be],encapsulation:2})}};var de=o=>({"is-invalid":o});function _t(o,a){o&1&&f(0,"app-progress")}function St(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ct(o,a){if(o&1&&(t(0,"div",24),e(1,`
                  `),s(2,St,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("name").errors)==null?null:n.required)}}function ht(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function yt(o,a){if(o&1&&(t(0,"div",24),e(1,`
                  `),s(2,ht,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("email").errors)==null?null:n.required)}}function bt(o,a){if(o&1&&(t(0,"option",25),e(1),i()),o&2){let n=a.$implicit;l("value",J(n.id)),m(),g(n.name)}}function Et(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function wt(o,a){if(o&1&&(t(0,"div",24),e(1,`
                  `),s(2,Et,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("role_id"))==null||n.errors==null?null:n.errors.required)}}function Ft(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function It(o,a){if(o&1&&(t(0,"div",24),e(1,`
                    `),s(2,Ft,2,0,"div",0),e(3,`
                  `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("password"))==null||n.errors==null?null:n.errors.required)}}var pe=class o{constructor(a,n,r,d,p){this.mUserService=a;this.mToastrService=n;this.mAppContextService=r;this.router=d;this.fb=p;this.mProgress=b(!1);this.mShowPassword=!1;this.itemForm=this.fb.group({email:["",_.required],name:["",_.required],role_id:["",_.required],password:["",_.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(a){this.mProgress.set(!0),this.mUserService.createItem(a).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mUserService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoles=a.data.roles,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(y),c(k),c(h),c(ie),c(ae))}}static{this.\u0275cmp=E({type:o,selectors:[["app-create"]],standalone:!1,decls:92,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","email",1,"col-form-label","required"],["formControlName","email","type","email",1,"form-control",3,"ngClass"],["for","role_id",1,"col-form-label","required"],["formControlName","role_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(n,r){if(n&1&&(s(0,_t,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),C("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Name:"),i(),e(19,`
                `),f(20,"input",8),e(21,`
                `),s(22,Ct,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",10),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",11),e(31,"Email:"),i(),e(32,`
                `),f(33,"input",12),e(34,`
                `),s(35,yt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",10),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",13),e(44,"Role:"),i(),e(45,`
                `),t(46,"select",14),e(47,`
                  `),t(48,"option",15),e(49,"--- Select role ---"),i(),e(50,`
                  `),s(51,bt,2,3,"option",16),e(52,`
                `),i(),e(53,`
                `),s(54,wt,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),t(58,"div",5),e(59,`
              `),t(60,"div",6),e(61,`
                `),t(62,"label",17),e(63,"Password:"),i(),e(64,`
                `),t(65,"div",18),e(66,`
                  `),f(67,"input",19),e(68,`
                  `),t(69,"span",20),C("click",function(){return r.mShowPassword=!r.mShowPassword}),e(70," "),f(71,"i"),i(),e(72,`
                  `),s(73,It,4,1,"div",9),e(74,`
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
`),i()),n&2){let d,p,v,S;l("ngIf",r.mProgress()),m(9),l("formGroup",r.itemForm),m(11),l("ngClass",x(16,de,r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched))),m(2),l("ngIf",r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched)),m(11),l("ngClass",x(18,de,r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched))),m(2),l("ngIf",r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched)),m(11),l("ngClass",x(20,de,((d=r.itemForm.get("role_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("role_id"))==null?null:d.dirty)||((d=r.itemForm.get("role_id"))==null?null:d.touched)))),m(5),l("ngForOf",r.mRoles),m(3),l("ngIf",((p=r.itemForm.get("role_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("role_id"))==null?null:p.dirty)||((p=r.itemForm.get("role_id"))==null?null:p.touched))),m(13),l("ngClass",x(22,de,((v=r.itemForm.get("password"))==null?null:v.invalid)&&(((v=r.itemForm.get("password"))==null?null:v.dirty)||((v=r.itemForm.get("password"))==null?null:v.touched))))("type",r.mShowPassword?"text":"password"),m(2),X("aria-label",r.mShowPassword?"Hide password":"Show password"),m(2),Z(r.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),m(2),l("ngIf",((S=r.itemForm.get("password"))==null?null:S.invalid)&&(((S=r.itemForm.get("password"))==null?null:S.dirty)||((S=r.itemForm.get("password"))==null?null:S.touched))),m(11),l("disabled",r.itemForm.invalid)}},dependencies:[w,j,F,I,A,T,P,U,M,W,re,oe,V,ne,L,H,$,G],encapsulation:2})}};var Y=o=>({"is-invalid":o});function Tt(o,a){o&1&&f(0,"app-progress")}function Pt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ut(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Pt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("name").errors)==null?null:n.required)}}function Mt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Nt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Mt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("email").errors)==null?null:n.required)}}function kt(o,a){if(o&1&&(t(0,"option",30),e(1),i()),o&2){let n=a.$implicit;l("value",J(n.id)),m(),g(n.name)}}function At(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function qt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,At,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("role_id"))==null||n.errors==null?null:n.errors.required)}}function Rt(o,a){if(o&1&&(t(0,"option",30),e(1),i()),o&2){let n=a.$implicit;l("value",J(n.id)),m(),g(n.name)}}function Ot(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Bt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Ot,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("status_id"))==null||n.errors==null?null:n.errors.required)}}function Dt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function jt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                    `),s(2,Dt,2,0,"div",0),e(3,`
                  `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("password"))==null||n.errors==null?null:n.errors.required)}}function Vt(o,a){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Lt(o,a){if(o&1&&(t(0,"div",29),e(1,`
                  `),s(2,Vt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=u();m(2),l("ngIf",(n=r.itemForm.get("reset_password").errors)==null?null:n.required)}}var ue=class o{constructor(a,n,r,d,p,v){this.mUserService=a;this.mToastrService=n;this.mAppContextService=r;this.router=d;this.fb=p;this.route=v;this.mProgress=b(!1);this.item={};this.mShowPassword=!1;this.itemForm=this.fb.group({email:["",_.required],name:["",_.required],role_id:["",_.required],status_id:["",_.required],password:["",_.nullValidator],reset_password:[!1,_.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mUserService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let n=Te(Ie({},a),{id:this.item.id});this.mProgress.set(!0),this.mUserService.updateItem(n).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mUserService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoles=a.data.roles,this.mUserStatuses=a.data.user_statuses,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(y),c(k),c(h),c(ie),c(ae),c(te))}}static{this.\u0275cmp=E({type:o,selectors:[["app-edit"]],standalone:!1,decls:124,vars:38,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","email",1,"col-form-label","required"],["formControlName","email","type","email",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","role_id",1,"col-form-label","required"],["formControlName","role_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngModelChange","ngModel","ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"icheck-success","text-end","mb-3"],["formControlName","reset_password","type","checkbox",3,"ngClass"],["for","reset_password"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(n,r){if(n&1&&(s(0,Tt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),C("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Name:"),i(),e(19,`
                `),t(20,"input",8),D("ngModelChange",function(p){return B(r.item.name,p)||(r.item.name=p),p}),i(),e(21,`
                `),s(22,Ut,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",10),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",11),e(31,"Email:"),i(),e(32,`
                `),t(33,"input",12),D("ngModelChange",function(p){return B(r.item.email,p)||(r.item.email=p),p}),i(),e(34,`
                `),s(35,Nt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",10),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",13),e(44,"Role:"),i(),e(45,`
                `),t(46,"select",14),D("ngModelChange",function(p){return B(r.item.role_id,p)||(r.item.role_id=p),p}),e(47,`
                  `),t(48,"option",15),e(49,"--- Select role ---"),i(),e(50,`
                  `),s(51,kt,2,3,"option",16),e(52,`
                `),i(),e(53,`
                `),s(54,qt,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),t(58,"div",5),e(59,`
              `),t(60,"div",6),e(61,`
                `),t(62,"label",17),e(63,"Status:"),i(),e(64,`
                `),t(65,"select",18),D("ngModelChange",function(p){return B(r.item.status_id,p)||(r.item.status_id=p),p}),e(66,`
                  `),t(67,"option",15),e(68,"--- Select status ---"),i(),e(69,`
                  `),s(70,Rt,2,3,"option",16),e(71,`
                `),i(),e(72,`
                `),s(73,Bt,4,1,"div",9),e(74,`
              `),i(),e(75,`
            `),i(),e(76,`
            `),t(77,"div",5),e(78,`
              `),t(79,"div",6),e(80,`
                `),t(81,"label",19),e(82,"Password:"),i(),e(83,`
                `),t(84,"div",20),e(85,`
                  `),t(86,"input",21),D("ngModelChange",function(p){return B(r.item.password,p)||(r.item.password=p),p}),i(),e(87,`
                  `),t(88,"span",22),C("click",function(){return r.mShowPassword=!r.mShowPassword}),e(89," "),f(90,"i"),i(),e(91,`
                  `),s(92,jt,4,1,"div",9),e(93,`
                `),i(),e(94,`
              `),i(),e(95,`
            `),i(),e(96,`
            `),t(97,"div",5),e(98,`
              `),t(99,"div",23),e(100,`
                `),f(101,"input",24),e(102,`\xA0
                `),t(103,"label",25),e(104,"Reset password?"),i(),e(105,`
                `),s(106,Lt,4,1,"div",9),e(107,`
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
`),i()),n&2){let d,p,v,S,q,R;l("ngIf",r.mProgress()),m(9),l("formGroup",r.itemForm),m(11),O("ngModel",r.item.name),l("ngClass",x(26,Y,r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched))),m(2),l("ngIf",r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched)),m(11),O("ngModel",r.item.email),l("ngClass",x(28,Y,r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched))),m(2),l("ngIf",r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched)),m(11),O("ngModel",r.item.role_id),l("ngClass",x(30,Y,((d=r.itemForm.get("role_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("role_id"))==null?null:d.dirty)||((d=r.itemForm.get("role_id"))==null?null:d.touched)))),m(5),l("ngForOf",r.mRoles),m(3),l("ngIf",((p=r.itemForm.get("role_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("role_id"))==null?null:p.dirty)||((p=r.itemForm.get("role_id"))==null?null:p.touched))),m(11),O("ngModel",r.item.status_id),l("ngClass",x(32,Y,((v=r.itemForm.get("status_id"))==null?null:v.invalid)&&(((v=r.itemForm.get("status_id"))==null?null:v.dirty)||((v=r.itemForm.get("status_id"))==null?null:v.touched)))),m(5),l("ngForOf",r.mRoles),m(3),l("ngIf",((S=r.itemForm.get("status_id"))==null?null:S.invalid)&&(((S=r.itemForm.get("status_id"))==null?null:S.dirty)||((S=r.itemForm.get("status_id"))==null?null:S.touched))),m(13),O("ngModel",r.item.password),l("ngClass",x(34,Y,((q=r.itemForm.get("password"))==null?null:q.invalid)&&(((q=r.itemForm.get("password"))==null?null:q.dirty)||((q=r.itemForm.get("password"))==null?null:q.touched))))("type",r.mShowPassword?"text":"password"),m(2),X("aria-label",r.mShowPassword?"Hide password":"Show password"),m(2),Z(r.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),m(2),l("ngIf",((R=r.itemForm.get("password"))==null?null:R.invalid)&&(((R=r.itemForm.get("password"))==null?null:R.dirty)||((R=r.itemForm.get("password"))==null?null:R.touched))),m(9),l("ngClass",x(36,Y,r.itemForm.get("reset_password").invalid&&(r.itemForm.get("reset_password").dirty||r.itemForm.get("reset_password").touched))),m(5),l("ngIf",r.itemForm.get("reset_password").invalid&&(r.itemForm.get("reset_password").dirty||r.itemForm.get("reset_password").touched)),m(10),l("disabled",r.itemForm.invalid)}},dependencies:[w,j,F,I,A,T,P,U,M,W,re,oe,V,Qe,ne,L,H,$,G],encapsulation:2})}};function Ht(o,a){o&1&&f(0,"app-progress")}function Wt(o,a){if(o&1&&(t(0,"div",13),e(1),i()),o&2){let n=u();m(),g(n.item.name)}}function Gt(o,a){if(o&1&&(t(0,"div",13),e(1),i()),o&2){let n=u();m(),g(n.item.email)}}function $t(o,a){if(o&1&&(t(0,"div",13),e(1),i()),o&2){let n=u();m(),g(n.item.role==null?null:n.item.role.name)}}function zt(o,a){if(o&1&&(t(0,"div",13),e(1,`
                  `),t(2,"span",14),e(3),i(),e(4,`
                `),i()),o&2){let n=u();m(2),l("ngClass",(n.item==null?null:n.item.status_id)===1?"bg-success":"bg-warning"),m(),g(n.item==null||n.item.status==null?null:n.item.status.name)}}var ce=class o{constructor(a,n,r,d){this.mUserService=a;this.mToastrService=n;this.mAppContextService=r;this.route=d;this.mProgress=b(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mUserService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(y),c(k),c(h),c(te))}}static{this.\u0275cmp=E({type:o,selectors:[["app-show"]],standalone:!1,decls:68,vars:5,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-12"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-6"],["for","role_id"],["for","investor_id"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"]],template:function(n,r){n&1&&(s(0,Ht,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",5),e(16,`
                `),t(17,"label",6),e(18,"Name:"),i(),e(19,`
                `),s(20,Wt,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",8),e(25,`
              `),t(26,"div",5),e(27,`
                `),t(28,"label",6),e(29,"Email:"),i(),e(30,`
                `),s(31,Gt,2,1,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",8),e(36,`
              `),t(37,"div",5),e(38,`
                `),t(39,"label",9),e(40,"Role:"),i(),e(41,`
                `),s(42,$t,2,1,"div",7),e(43,`
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
`),i()),n&2&&(l("ngIf",r.mProgress()),m(20),l("ngIf",r.item.name),m(11),l("ngIf",r.item.email),m(11),l("ngIf",r.item.role),m(11),l("ngIf",r.item.status))},dependencies:[w,F,I,A,T,P,U,M],encapsulation:2})}};var Yt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:se,data:{title:"Users"}},{path:"create",component:pe,data:{title:"Users / Create"}},{path:"edit/:id",component:ue,data:{title:"Users / Edit"}},{path:"show/:id",component:ce,data:{title:"Users / Show"}}],fe=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=Q({type:o})}static{this.\u0275inj=K({imports:[ee,Ce.forChild(Yt),Ce]})}};var nt=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=Q({type:o})}static{this.\u0275inj=K({imports:[ee,fe,Ke,Ve,He,We,Ge,$e,Je,et,je]})}};export{nt as UserModule};
