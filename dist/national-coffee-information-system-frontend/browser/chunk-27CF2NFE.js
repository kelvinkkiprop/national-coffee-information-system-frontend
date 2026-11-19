import{a as at}from"./chunk-D5MIKHAE.js";import{a as Xe,b as V,c as _,d as L,e as H,f as Ze,g as et,h as W,j as G,k as $,l as ne,m as re,n as oe,o as ae,p as tt}from"./chunk-JSR5FKFU.js";import{a as A}from"./chunk-4MT6PD6W.js";import{a as N,c as C,e as k}from"./chunk-CPWY5AIC.js";import{$ as We,Ca as Ye,Da as Je,Ea as Ke,G as he,Ja as Qe,M as Ve,R as Le,X as T,Y as P,_ as He,c as w,d as j,e as F,g as De,ia as Ge,j as ee,ka as U,la as M,na as $e,o as je,ta as ze,v as te,x as ie,y as I}from"./chunk-JHTOCNXX.js";import{Bc as Oe,Cb as l,Cc as Re,Db as i,Eb as n,Fb as f,Fc as Be,Na as Ue,Ob as _e,S as Pe,Sa as m,Sb as h,T as K,Ub as u,W as ge,aa as ve,ab as c,ba as xe,cc as Me,fb as E,gb as Q,gc as Z,hc as e,ic as g,jc as Ne,lb as s,lc as R,ma as b,mc as B,nc as D,rc as J,sc as Se,vc as ke,wb as X,wc as x,xc as Ae,yc as qe}from"./chunk-MHSS2KTR.js";import{a as Ie,b as Te,e as ot}from"./chunk-2WH2EVR6.js";var nt=ot(at());var y=class o{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${N.base_url}/users`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${N.base_url}/users`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}getOneItem(a){let t=`${N.base_url}/users/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a){let t=`${N.base_url}/users/${a.id}`;return this.http.put(t,a,this.mAppContextService.getHttpOptions())}deleteItem(a){let t=`${N.base_url}/users/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${N.base_url}/search-users`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${N.base_url}/unpaginated-items-users`;return this.http.get(a,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(t){return new(t||o)(ge(C),ge(je))}}static{this.\u0275prov=Pe({token:o,factory:o.\u0275fac,providedIn:"root"})}};var mt=o=>({"is-invalid":o}),lt=(o,a,t)=>({"bg-warning":o,"bg-success":a,"bg-danger":t}),st=()=>[1],dt=(o,a)=>({active:o,disabled:a});function pt(o,a){o&1&&f(0,"app-progress")}function ut(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function ct(o,a){if(o&1&&(i(0,"div",16),e(1,`
                  `),s(2,ut,2,0,"div",1),e(3,`
                `),n()),o&2){let t=u();m(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function ft(o,a){if(o&1){let t=_e();i(0,"button",29),h("click",function(){ve(t);let d=u().$implicit,p=u(2);return xe(p.onDelete(d))}),f(1,"i",30),n()}}function gt(o,a){if(o&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
                `),i(8,"td"),e(9),n(),e(10,`
                `),i(11,"td"),e(12),n(),e(13,`
                `),i(14,"td"),e(15),n(),e(16,`
                `),i(17,"td")(18,"span",22),e(19),n()(),e(20,`
                `),i(21,"td"),e(22),Oe(23,"date"),n(),e(24,`
                `),i(25,"td"),e(26,`
                  `),i(27,"div",23),e(28,`
                    `),i(29,"button",24),f(30,"i",25),n(),e(31,`
                    `),i(32,"button",26),e(33," "),f(34,"i",27),n(),e(35,`
                    `),s(36,ft,2,0,"button",28),e(37,`
                  `),n(),e(38,`
                `),n(),e(39,`
              `),n()),o&2){let t=a.$implicit,r=a.index,d=u(2);m(3),Ne("",d.mPageFrom+r,"."),m(3),g(t.name),m(3),g(t.email),m(3),g(t.role==null?null:t.role.name),m(3),g(t.phone),m(3),l("ngClass",qe(15,lt,t.status_id==1,t.status_id==2,t.status_id==3)),m(),g(t==null||t.status==null?null:t.status.name),m(3),g(Re(23,13,t.created_at)),m(7),l("routerLink",Se("/users/show/",t.id)),m(3),l("routerLink",Se("/users/edit/",t.id)),m(4),l("ngIf",d.mAppContextService.hasRoles(ke(19,st)))}}function vt(o,a){if(o&1&&(i(0,"div",17),e(1,`
          `),i(2,"table",18),e(3,`
            `),i(4,"thead",19),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",20),e(9,"#"),n(),e(10,`
                `),i(11,"th",20),e(12,"Name"),n(),e(13,`
                `),i(14,"th",20),e(15,"Email"),n(),e(16,`
                `),i(17,"th",20),e(18,"Role"),n(),e(19,`
                `),i(20,"th",20),e(21,"Phone"),n(),e(22,`
                `),i(23,"th",20),e(24,"Status"),n(),e(25,`
                `),i(26,"th",20),e(27,"Created"),n(),e(28,`
                `),i(29,"th",20),e(30,"Action"),n(),e(31,`
              `),n(),e(32,`
            `),n(),e(33,`
            `),i(34,"tbody"),e(35,`
              `),s(36,gt,40,20,"tr",21),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n()),o&2){let t=u();m(36),l("ngForOf",t.mUsers)}}function xt(o,a){if(o&1){let t=_e();i(0,"li",33),e(1,`
              `),i(2,"a",34),h("click",function(){let d=ve(t).$implicit,p=u(2);return xe(p.onChangePage(d.url))}),n(),e(3,`
            `),n()}if(o&2){let t=a.$implicit;l("ngClass",Ae(2,dt,t.active,!t.url)),m(2),l("innerHTML",t.label,Ue)}}function _t(o,a){if(o&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",31),e(3,`
            `),s(4,xt,4,5,"li",32),e(5,`
          `),n(),e(6,`
        `),n()),o&2){let t=u();m(4),l("ngForOf",t.links)}}function St(o,a){o&1&&(e(0,`
          `),i(1,"p",35),e(2,"No items"),n(),e(3,`
        `))}var se=class o{constructor(a,t,r){this.mUserService=a;this.mToastrService=t;this.mAppContextService=r;this.mUsers={};this.links=[];this.mProgress=b(!1)}ngOnInit(){this.index(),this.search_term=new et("",_.required),this.itemForm=new Ze({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mUserService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mUsers=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mUserService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mUsers=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(a){nt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mUserService.deleteItem(a).subscribe({next:d=>{d&&(this.mUsers=this.mUsers.filter(p=>p.id!==a.id),this.mToastrService.warning(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.warning(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mUserService.searchItems(a).subscribe({next:t=>{t&&(this.mUsers=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mUserService.searchItems(a).subscribe({next:t=>{t&&(this.mUsers=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(y),c(k),c(C))}}static{this.\u0275cmp=E({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/users/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,r){if(t&1&&(s(0,pt,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),f(15,"i",7),e(16,` Add
            `),n(),e(17,`
          `),n(),e(18,`
          `),i(19,"div"),e(20,`
            `),i(21,"form",8),h("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),i(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),i(27,"div",11),e(28,`
                  `),i(29,"button",12),e(30,`
                    `),f(31,"i",13),e(32,`
                  `),n(),e(33,`
                `),n(),e(34,`
                `),s(35,ct,4,1,"div",14),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
      `),i(42,"c-card-body"),e(43,`

        `),s(44,vt,40,1,"div",15),e(45,`

        `),s(46,_t,7,1,"div",1),e(47,`

        `),s(48,St,4,0,"ng-template",null,0,Be),e(50,`

      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),t&2){let d=Me(49);l("ngIf",r.mProgress()),m(21),l("formGroup",r.itemForm),m(4),l("ngClass",x(7,mt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),m(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),m(9),l("ngIf",r.mUsers.length>0)("ngIfElse",d),m(2),l("ngIf",r.links)}},dependencies:[w,j,F,I,A,T,P,He,U,M,Je,Ye,W,V,L,H,$,G,De],encapsulation:2})}};var de=o=>({"is-invalid":o});function ht(o,a){o&1&&f(0,"app-progress")}function Ct(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function yt(o,a){if(o&1&&(i(0,"div",24),e(1,`
                  `),s(2,Ct,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("name").errors)==null?null:t.required)}}function bt(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Et(o,a){if(o&1&&(i(0,"div",24),e(1,`
                  `),s(2,bt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("email").errors)==null?null:t.required)}}function wt(o,a){if(o&1&&(i(0,"option",25),e(1),n()),o&2){let t=a.$implicit;l("value",J(t.id)),m(),g(t.name)}}function Ft(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function It(o,a){if(o&1&&(i(0,"div",24),e(1,`
                  `),s(2,Ft,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("role_id"))==null||t.errors==null?null:t.errors.required)}}function Tt(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Pt(o,a){if(o&1&&(i(0,"div",24),e(1,`
                    `),s(2,Tt,2,0,"div",0),e(3,`
                  `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("password"))==null||t.errors==null?null:t.errors.required)}}var pe=class o{constructor(a,t,r,d,p){this.mUserService=a;this.mToastrService=t;this.mAppContextService=r;this.router=d;this.fb=p;this.mProgress=b(!1);this.mShowPassword=!1;this.itemForm=this.fb.group({email:["",_.required],name:["",_.required],role_id:["",_.required],password:["",_.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(a){this.mProgress.set(!0),this.mUserService.createItem(a).subscribe({next:t=>{t&&(this.mToastrService.success(t.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mUserService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoles=a.data.roles,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(y),c(k),c(C),c(ie),c(ae))}}static{this.\u0275cmp=E({type:o,selectors:[["app-create"]],standalone:!1,decls:92,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","email",1,"col-form-label","required"],["formControlName","email","type","email",1,"form-control",3,"ngClass"],["for","role_id",1,"col-form-label","required"],["formControlName","role_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(t,r){if(t&1&&(s(0,ht,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`
          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Name:"),n(),e(19,`
                `),f(20,"input",8),e(21,`
                `),s(22,yt,4,1,"div",9),e(23,`
              `),n(),e(24,`
            `),n(),e(25,`
            `),i(26,"div",10),e(27,`
              `),i(28,"div",6),e(29,`
                `),i(30,"label",11),e(31,"Email:"),n(),e(32,`
                `),f(33,"input",12),e(34,`
                `),s(35,Et,4,1,"div",9),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
            `),i(39,"div",10),e(40,`
              `),i(41,"div",6),e(42,`
                `),i(43,"label",13),e(44,"Role:"),n(),e(45,`
                `),i(46,"select",14),e(47,`
                  `),i(48,"option",15),e(49,"--- Select role ---"),n(),e(50,`
                  `),s(51,wt,2,3,"option",16),e(52,`
                `),n(),e(53,`
                `),s(54,It,4,1,"div",9),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
            `),i(58,"div",5),e(59,`
              `),i(60,"div",6),e(61,`
                `),i(62,"label",17),e(63,"Password:"),n(),e(64,`
                `),i(65,"div",18),e(66,`
                  `),f(67,"input",19),e(68,`
                  `),i(69,"span",20),h("click",function(){return r.mShowPassword=!r.mShowPassword}),e(70," "),f(71,"i"),n(),e(72,`
                  `),s(73,Pt,4,1,"div",9),e(74,`
                `),n(),e(75,`
              `),n(),e(76,`
            `),n(),e(77,`
          `),n(),e(78,`
          `),i(79,"div",21),e(80,`
            `),i(81,"button",22),e(82,"Cancel"),n(),e(83,`
            `),i(84,"button",23),e(85,"Submit"),n(),e(86,`
          `),n(),e(87,`
        `),n(),e(88,`

      `),n(),e(89,`
    `),n(),e(90,`
  `),n(),e(91,`
`),n()),t&2){let d,p,v,S;l("ngIf",r.mProgress()),m(9),l("formGroup",r.itemForm),m(11),l("ngClass",x(16,de,r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched))),m(2),l("ngIf",r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched)),m(11),l("ngClass",x(18,de,r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched))),m(2),l("ngIf",r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched)),m(11),l("ngClass",x(20,de,((d=r.itemForm.get("role_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("role_id"))==null?null:d.dirty)||((d=r.itemForm.get("role_id"))==null?null:d.touched)))),m(5),l("ngForOf",r.mRoles),m(3),l("ngIf",((p=r.itemForm.get("role_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("role_id"))==null?null:p.dirty)||((p=r.itemForm.get("role_id"))==null?null:p.touched))),m(13),l("ngClass",x(22,de,((v=r.itemForm.get("password"))==null?null:v.invalid)&&(((v=r.itemForm.get("password"))==null?null:v.dirty)||((v=r.itemForm.get("password"))==null?null:v.touched))))("type",r.mShowPassword?"text":"password"),m(2),X("aria-label",r.mShowPassword?"Hide password":"Show password"),m(2),Z(r.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),m(2),l("ngIf",((S=r.itemForm.get("password"))==null?null:S.invalid)&&(((S=r.itemForm.get("password"))==null?null:S.dirty)||((S=r.itemForm.get("password"))==null?null:S.touched))),m(11),l("disabled",r.itemForm.invalid)}},dependencies:[w,j,F,I,A,T,P,U,M,W,re,oe,V,ne,L,H,$,G],encapsulation:2})}};var Y=o=>({"is-invalid":o});function Ut(o,a){o&1&&f(0,"app-progress")}function Mt(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Nt(o,a){if(o&1&&(i(0,"div",29),e(1,`
                  `),s(2,Mt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("name").errors)==null?null:t.required)}}function kt(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function At(o,a){if(o&1&&(i(0,"div",29),e(1,`
                  `),s(2,kt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("email").errors)==null?null:t.required)}}function qt(o,a){if(o&1&&(i(0,"option",30),e(1),n()),o&2){let t=a.$implicit;l("value",J(t.id)),m(),g(t.name)}}function Ot(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Rt(o,a){if(o&1&&(i(0,"div",29),e(1,`
                  `),s(2,Ot,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("role_id"))==null||t.errors==null?null:t.errors.required)}}function Bt(o,a){if(o&1&&(i(0,"option",30),e(1),n()),o&2){let t=a.$implicit;l("value",J(t.id)),m(),g(t.name)}}function Dt(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function jt(o,a){if(o&1&&(i(0,"div",29),e(1,`
                  `),s(2,Dt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function Vt(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Lt(o,a){if(o&1&&(i(0,"div",29),e(1,`
                    `),s(2,Vt,2,0,"div",0),e(3,`
                  `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("password"))==null||t.errors==null?null:t.errors.required)}}function Ht(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Wt(o,a){if(o&1&&(i(0,"div",29),e(1,`
                  `),s(2,Ht,2,0,"div",0),e(3,`
                `),n()),o&2){let t,r=u();m(2),l("ngIf",(t=r.itemForm.get("reset_password").errors)==null?null:t.required)}}var ue=class o{constructor(a,t,r,d,p,v){this.mUserService=a;this.mToastrService=t;this.mAppContextService=r;this.router=d;this.fb=p;this.route=v;this.mProgress=b(!1);this.item={};this.mShowPassword=!1;this.itemForm=this.fb.group({email:["",_.required],name:["",_.required],role_id:["",_.required],status_id:["",_.required],password:["",_.nullValidator],reset_password:[!1,_.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mUserService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=Te(Ie({},a),{id:this.item.id});this.mProgress.set(!0),this.mUserService.updateItem(t).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/users"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mUserService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoles=a.data.roles,this.mUserStatuses=a.data.user_statuses,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(y),c(k),c(C),c(ie),c(ae),c(te))}}static{this.\u0275cmp=E({type:o,selectors:[["app-edit"]],standalone:!1,decls:124,vars:38,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","email",1,"col-form-label","required"],["formControlName","email","type","email",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","role_id",1,"col-form-label","required"],["formControlName","role_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngModelChange","ngModel","ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],[1,"icheck-success","text-end","mb-3"],["formControlName","reset_password","type","checkbox",3,"ngClass"],["for","reset_password"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(t,r){if(t&1&&(s(0,Ut,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),h("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`
          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Name:"),n(),e(19,`
                `),i(20,"input",8),D("ngModelChange",function(p){return B(r.item.name,p)||(r.item.name=p),p}),n(),e(21,`
                `),s(22,Nt,4,1,"div",9),e(23,`
              `),n(),e(24,`
            `),n(),e(25,`
            `),i(26,"div",10),e(27,`
              `),i(28,"div",6),e(29,`
                `),i(30,"label",11),e(31,"Email:"),n(),e(32,`
                `),i(33,"input",12),D("ngModelChange",function(p){return B(r.item.email,p)||(r.item.email=p),p}),n(),e(34,`
                `),s(35,At,4,1,"div",9),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
            `),i(39,"div",10),e(40,`
              `),i(41,"div",6),e(42,`
                `),i(43,"label",13),e(44,"Role:"),n(),e(45,`
                `),i(46,"select",14),D("ngModelChange",function(p){return B(r.item.role_id,p)||(r.item.role_id=p),p}),e(47,`
                  `),i(48,"option",15),e(49,"--- Select role ---"),n(),e(50,`
                  `),s(51,qt,2,3,"option",16),e(52,`
                `),n(),e(53,`
                `),s(54,Rt,4,1,"div",9),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
            `),i(58,"div",5),e(59,`
              `),i(60,"div",6),e(61,`
                `),i(62,"label",17),e(63,"Status:"),n(),e(64,`
                `),i(65,"select",18),D("ngModelChange",function(p){return B(r.item.status_id,p)||(r.item.status_id=p),p}),e(66,`
                  `),i(67,"option",15),e(68,"--- Select status ---"),n(),e(69,`
                  `),s(70,Bt,2,3,"option",16),e(71,`
                `),n(),e(72,`
                `),s(73,jt,4,1,"div",9),e(74,`
              `),n(),e(75,`
            `),n(),e(76,`
            `),i(77,"div",5),e(78,`
              `),i(79,"div",6),e(80,`
                `),i(81,"label",19),e(82,"Password:"),n(),e(83,`
                `),i(84,"div",20),e(85,`
                  `),i(86,"input",21),D("ngModelChange",function(p){return B(r.item.password,p)||(r.item.password=p),p}),n(),e(87,`
                  `),i(88,"span",22),h("click",function(){return r.mShowPassword=!r.mShowPassword}),e(89," "),f(90,"i"),n(),e(91,`
                  `),s(92,Lt,4,1,"div",9),e(93,`
                `),n(),e(94,`
              `),n(),e(95,`
            `),n(),e(96,`
            `),i(97,"div",5),e(98,`
              `),i(99,"div",23),e(100,`
                `),f(101,"input",24),e(102,`\xA0
                `),i(103,"label",25),e(104,"Reset password?"),n(),e(105,`
                `),s(106,Wt,4,1,"div",9),e(107,`
              `),n(),e(108,`
            `),n(),e(109,`
          `),n(),e(110,`
          `),i(111,"div",26),e(112,`
            `),i(113,"button",27),e(114,"Cancel"),n(),e(115,`
            `),i(116,"button",28),e(117,"Submit"),n(),e(118,`
          `),n(),e(119,`
        `),n(),e(120,`

      `),n(),e(121,`
    `),n(),e(122,`
  `),n(),e(123,`
`),n()),t&2){let d,p,v,S,q,O;l("ngIf",r.mProgress()),m(9),l("formGroup",r.itemForm),m(11),R("ngModel",r.item.name),l("ngClass",x(26,Y,r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched))),m(2),l("ngIf",r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched)),m(11),R("ngModel",r.item.email),l("ngClass",x(28,Y,r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched))),m(2),l("ngIf",r.itemForm.get("email").invalid&&(r.itemForm.get("email").dirty||r.itemForm.get("email").touched)),m(11),R("ngModel",r.item.role_id),l("ngClass",x(30,Y,((d=r.itemForm.get("role_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("role_id"))==null?null:d.dirty)||((d=r.itemForm.get("role_id"))==null?null:d.touched)))),m(5),l("ngForOf",r.mRoles),m(3),l("ngIf",((p=r.itemForm.get("role_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("role_id"))==null?null:p.dirty)||((p=r.itemForm.get("role_id"))==null?null:p.touched))),m(11),R("ngModel",r.item.status_id),l("ngClass",x(32,Y,((v=r.itemForm.get("status_id"))==null?null:v.invalid)&&(((v=r.itemForm.get("status_id"))==null?null:v.dirty)||((v=r.itemForm.get("status_id"))==null?null:v.touched)))),m(5),l("ngForOf",r.mUserStatuses),m(3),l("ngIf",((S=r.itemForm.get("status_id"))==null?null:S.invalid)&&(((S=r.itemForm.get("status_id"))==null?null:S.dirty)||((S=r.itemForm.get("status_id"))==null?null:S.touched))),m(13),R("ngModel",r.item.password),l("ngClass",x(34,Y,((q=r.itemForm.get("password"))==null?null:q.invalid)&&(((q=r.itemForm.get("password"))==null?null:q.dirty)||((q=r.itemForm.get("password"))==null?null:q.touched))))("type",r.mShowPassword?"text":"password"),m(2),X("aria-label",r.mShowPassword?"Hide password":"Show password"),m(2),Z(r.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),m(2),l("ngIf",((O=r.itemForm.get("password"))==null?null:O.invalid)&&(((O=r.itemForm.get("password"))==null?null:O.dirty)||((O=r.itemForm.get("password"))==null?null:O.touched))),m(9),l("ngClass",x(36,Y,r.itemForm.get("reset_password").invalid&&(r.itemForm.get("reset_password").dirty||r.itemForm.get("reset_password").touched))),m(5),l("ngIf",r.itemForm.get("reset_password").invalid&&(r.itemForm.get("reset_password").dirty||r.itemForm.get("reset_password").touched)),m(10),l("disabled",r.itemForm.invalid)}},dependencies:[w,j,F,I,A,T,P,U,M,W,re,oe,V,Xe,ne,L,H,$,G],encapsulation:2})}};function Gt(o,a){o&1&&f(0,"app-progress")}function $t(o,a){if(o&1&&(i(0,"div",13),e(1),n()),o&2){let t=u();m(),g(t.item.name)}}function zt(o,a){if(o&1&&(i(0,"div",13),e(1),n()),o&2){let t=u();m(),g(t.item.email)}}function Yt(o,a){if(o&1&&(i(0,"div",13),e(1),n()),o&2){let t=u();m(),g(t.item.role==null?null:t.item.role.name)}}function Jt(o,a){if(o&1&&(i(0,"div",13),e(1,`
                  `),i(2,"span",14),e(3),n(),e(4,`
                `),n()),o&2){let t=u();m(2),l("ngClass",(t.item==null?null:t.item.status_id)===1?"bg-success":"bg-warning"),m(),g(t.item==null||t.item.status==null?null:t.item.status.name)}}var ce=class o{constructor(a,t,r,d){this.mUserService=a;this.mToastrService=t;this.mAppContextService=r;this.route=d;this.mProgress=b(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mUserService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(y),c(k),c(C),c(te))}}static{this.\u0275cmp=E({type:o,selectors:[["app-show"]],standalone:!1,decls:68,vars:5,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-12"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-6"],["for","role_id"],["for","investor_id"],[1,"mt-3","text-end"],["routerLink","/users","type","button",1,"btn","btn-light"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"]],template:function(t,r){t&1&&(s(0,Gt,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div"),e(10,`
          `),i(11,"div",3),e(12,`
            `),i(13,"div",4),e(14,`
              `),i(15,"div",5),e(16,`
                `),i(17,"label",6),e(18,"Name:"),n(),e(19,`
                `),s(20,$t,2,1,"div",7),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),i(24,"div",8),e(25,`
              `),i(26,"div",5),e(27,`
                `),i(28,"label",6),e(29,"Email:"),n(),e(30,`
                `),s(31,zt,2,1,"div",7),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),i(35,"div",8),e(36,`
              `),i(37,"div",5),e(38,`
                `),i(39,"label",9),e(40,"Role:"),n(),e(41,`
                `),s(42,Yt,2,1,"div",7),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),i(46,"div",4),e(47,`
              `),i(48,"div",5),e(49,`
                `),i(50,"label",10),e(51,"Status:"),n(),e(52,`
                `),s(53,Jt,5,2,"div",7),e(54,`
              `),n(),e(55,`
            `),n(),e(56,`
          `),n(),e(57,`
          `),i(58,"div",11),e(59,`
            `),i(60,"button",12),e(61,"Cancel"),n(),e(62,`
          `),n(),e(63,`
        `),n(),e(64,`

      `),n(),e(65,`
    `),n(),e(66,`
  `),n(),e(67,`
`),n()),t&2&&(l("ngIf",r.mProgress()),m(20),l("ngIf",r.item.name),m(11),l("ngIf",r.item.email),m(11),l("ngIf",r.item.role),m(11),l("ngIf",r.item.status))},dependencies:[w,F,I,A,T,P,U,M],encapsulation:2})}};var Kt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:se,data:{title:"Users"}},{path:"create",component:pe,data:{title:"Users / Create"}},{path:"edit/:id",component:ue,data:{title:"Users / Edit"}},{path:"show/:id",component:ce,data:{title:"Users / Show"}}],fe=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Q({type:o})}static{this.\u0275inj=K({imports:[ee,he.forChild(Kt),he]})}};var rt=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=Q({type:o})}static{this.\u0275inj=K({imports:[ee,fe,Qe,Le,We,Ge,$e,ze,Ke,tt,Ve]})}};export{rt as UserModule};
