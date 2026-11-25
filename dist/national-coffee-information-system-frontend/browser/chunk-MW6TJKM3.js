import{a as ze}from"./chunk-D5MIKHAE.js";import{b as q,c as S,d as k,e as B,f as He,g as Le,h as O,i as re,j as D,k as R,l as $e,m as Ue,n as We,o as G,p as Ye}from"./chunk-WUV7VT53.js";import{a as A}from"./chunk-YFU6KPVP.js";import{a as C,c as b,e as M}from"./chunk-L5JZA47S.js";import{$ as De,Ca as ie,Da as ne,Ea as qe,G as ve,Ja as Ge,M as ke,R as Be,X as T,Y as w,_ as Oe,c as E,d as Q,e as I,g as X,ia as Re,j as Z,ka as P,la as N,na as je,o as Ae,ta as Ve,v as ee,x as te,y as F}from"./chunk-M56LXQJ4.js";import{Cb as s,Cc as j,Db as t,Dc as V,Eb as i,Fb as f,Gc as K,Na as we,Ob as U,S as Te,Sa as a,Sb as g,T as W,Ub as u,W as ce,aa as L,ab as c,ba as $,cc as z,fb as y,gb as Y,hc as e,ic as x,jc as J,lb as d,lc as ue,ma as _,mc as fe,nc as xe,rc as Pe,sc as ge,vc as Ne,wc as v,xc as Me}from"./chunk-4BW25U23.js";import{e as Fe}from"./chunk-2WH2EVR6.js";var h=class o{constructor(r,n){this.mAppContextService=r;this.http=n}allItems(){let r=`${C.base_url}/committees`;return this.http.get(r,this.mAppContextService.getHttpOptions())}createItem(r){let n=`${C.base_url}/committees`;return this.http.post(n,r,this.mAppContextService.getHttpOptions())}getOneItem(r){let n=`${C.base_url}/committees/${r}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}updateItem(r){let n=`${C.base_url}/committees/${r.id}`;return this.http.put(n,r,this.mAppContextService.getHttpOptions())}deleteItem(r){let n=`${C.base_url}/committees/${r.id}`;return this.http.delete(n,this.mAppContextService.getHttpOptions())}paginateItems(r){return this.http.get(r,this.mAppContextService.getHttpOptions())}searchItems(r){let n=`${C.base_url}/search-committees`;return this.http.post(n,r,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let r=`${C.base_url}/unpaginated-items-committees`;return this.http.get(r,this.mAppContextService.getHttpOptions())}addMemberItem(r){let n=`${C.base_url}/add-member-committees`;return this.http.post(n,r,this.mAppContextService.getHttpOptions())}deleteMemberItem(r){let n=`${C.base_url}/remove-member-committees/${r.id}`;return this.http.delete(n,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(n){return new(n||o)(ce(b),ce(Ae))}}static{this.\u0275prov=Te({token:o,factory:o.\u0275fac,providedIn:"root"})}};var Je=o=>({"is-invalid":o});function et(o,r){o&1&&f(0,"app-progress")}function tt(o,r){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function it(o,r){if(o&1&&(t(0,"div",15),e(1,`
                  `),d(2,tt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,m=u();a(2),s("ngIf",(n=m.itemForm.get("id").errors)==null?null:n.required)}}function nt(o,r){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function rt(o,r){if(o&1&&(t(0,"div",15),e(1,`
                  `),d(2,nt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,m=u();a(2),s("ngIf",(n=m.itemForm.get("name").errors)==null?null:n.required)}}var ae=class o{constructor(r,n,m,l,p){this.mCommitteeService=r;this.mToastrService=n;this.mAppContextService=m;this.router=l;this.fb=p;this.mProgress=_(!1);this.itemForm=this.fb.group({id:["",S.required],name:["",S.required]})}onSubmit(r){this.mProgress.set(!0),this.mCommitteeService.createItem(r).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/committees"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(h),c(M),c(b),c(te),c(G))}}static{this.\u0275cmp=y({type:o,selectors:[["app-create"]],standalone:!1,decls:53,vars:11,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/committees","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(n,m){n&1&&(d(0,et,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),g("ngSubmit",function(){return m.onSubmit(m.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Id:"),i(),e(19,`
                `),f(20,"input",8),e(21,`
                `),d(22,it,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",5),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",10),e(31,"Name:"),i(),e(32,`
                `),f(33,"input",11),e(34,`
                `),d(35,rt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`

          `),t(40,"div",12),e(41,`
            `),t(42,"button",13),e(43,"Cancel"),i(),e(44,`
            `),t(45,"button",14),e(46,"Submit"),i(),e(47,`
          `),i(),e(48,`

        `),i(),e(49,`

      `),i(),e(50,`
    `),i(),e(51,`
  `),i(),e(52,`
`),i()),n&2&&(s("ngIf",m.mProgress()),a(9),s("formGroup",m.itemForm),a(11),s("ngClass",v(7,Je,m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched))),a(2),s("ngIf",m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched)),a(11),s("ngClass",v(9,Je,m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched))),a(2),s("ngIf",m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched)),a(10),s("disabled",m.itemForm.invalid))},dependencies:[E,I,F,A,T,w,P,N,O,q,re,k,B,R,D],encapsulation:2})}};var Ke=o=>({"is-invalid":o});function mt(o,r){o&1&&f(0,"app-progress")}function ot(o,r){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function at(o,r){if(o&1&&(t(0,"div",15),e(1,`
                  `),d(2,ot,2,0,"div",0),e(3,`
                `),i()),o&2){let n,m=u();a(2),s("ngIf",(n=m.itemForm.get("id").errors)==null?null:n.required)}}function st(o,r){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function lt(o,r){if(o&1&&(t(0,"div",15),e(1,`
                  `),d(2,st,2,0,"div",0),e(3,`
                `),i()),o&2){let n,m=u();a(2),s("ngIf",(n=m.itemForm.get("name").errors)==null?null:n.required)}}var se=class o{constructor(r,n,m,l,p,Ie){this.mCommitteeService=r;this.mToastrService=n;this.mAppContextService=m;this.router=l;this.fb=p;this.route=Ie;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({id:["",S.required],name:["",S.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCommitteeService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onSubmit(r){let n={id:this.item.id,name:r.name};this.mProgress.set(!0),this.mCommitteeService.updateItem(n).subscribe({next:m=>{m&&(this.mToastrService.success(m.message),this.router.navigateByUrl("/committees"),this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(h),c(M),c(b),c(te),c(G),c(ee))}}static{this.\u0275cmp=y({type:o,selectors:[["app-edit"]],standalone:!1,decls:53,vars:13,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"mt-3","text-end"],["routerLink","/committees","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(n,m){n&1&&(d(0,mt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),g("ngSubmit",function(){return m.onSubmit(m.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Id:"),i(),e(19,`
                `),t(20,"input",8),xe("ngModelChange",function(p){return fe(m.item.id,p)||(m.item.id=p),p}),i(),e(21,`
                `),d(22,at,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",5),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",10),e(31,"Name:"),i(),e(32,`
                `),t(33,"input",11),xe("ngModelChange",function(p){return fe(m.item.name,p)||(m.item.name=p),p}),i(),e(34,`
                `),d(35,lt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`

          `),t(40,"div",12),e(41,`
            `),t(42,"button",13),e(43,"Cancel"),i(),e(44,`
            `),t(45,"button",14),e(46,"Submit"),i(),e(47,`
          `),i(),e(48,`

        `),i(),e(49,`

      `),i(),e(50,`
    `),i(),e(51,`
  `),i(),e(52,`
`),i()),n&2&&(s("ngIf",m.mProgress()),a(9),s("formGroup",m.itemForm),a(11),ue("ngModel",m.item.id),s("ngClass",v(9,Ke,m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched))),a(2),s("ngIf",m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched)),a(11),ue("ngModel",m.item.name),s("ngClass",v(11,Ke,m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched))),a(2),s("ngIf",m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched)),a(10),s("disabled",m.itemForm.invalid))},dependencies:[E,I,F,A,T,w,P,N,O,q,re,k,B,R,D],encapsulation:2})}};var Qe=Fe(ze());var dt=o=>({"is-invalid":o}),pt=()=>[1],ct=(o,r)=>({active:o,disabled:r});function ut(o,r){o&1&&f(0,"app-progress")}function ft(o,r){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function xt(o,r){if(o&1&&(t(0,"div",16),e(1,`
                  `),d(2,ft,2,0,"div",1),e(3,`
                `),i()),o&2){let n=u();a(2),s("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function gt(o,r){if(o&1){let n=U();t(0,"button",28),g("click",function(){L(n);let l=u().$implicit,p=u(2);return $(p.onDelete(l))}),f(1,"i",29),i()}}function vt(o,r){if(o&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td"),e(6),i(),e(7,`
                `),t(8,"td"),e(9),i(),e(10,`
                `),t(11,"td"),e(12),j(13,"date"),i(),e(14,`
                `),t(15,"td"),e(16,`
                  `),t(17,"div",22),e(18,`
                    `),t(19,"button",23),f(20,"i",24),i(),e(21,`
                    `),t(22,"button",25),e(23," "),f(24,"i",26),i(),e(25,`
                    `),d(26,gt,2,0,"button",27),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
              `),i()),o&2){let n=r.$implicit,m=r.index,l=u(2);a(3),J("",l.mPageFrom+m,"."),a(3),x(n.name),a(3),x(n.total_members),a(3),x(V(13,9,n.created_at)),a(7),s("routerLink",ge("/committees/show/",n.id)),a(3),s("routerLink",ge("/committees/edit/",n.id)),a(4),s("ngIf",l.mAppContextService.hasRoles(Ne(11,pt)))}}function Ct(o,r){if(o&1&&(t(0,"div",17),e(1,`
          `),t(2,"table",18),e(3,`
            `),t(4,"thead",19),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",20),e(9,"#"),i(),e(10,`
                `),t(11,"th",20),e(12,"Name"),i(),e(13,`
                `),t(14,"th",20),e(15,"Members"),i(),e(16,`
                `),t(17,"th",20),e(18,"Created"),i(),e(19,`
                `),t(20,"th",20),e(21,"Action"),i(),e(22,`
              `),i(),e(23,`
            `),i(),e(24,`
            `),t(25,"tbody"),e(26,`
              `),d(27,vt,30,12,"tr",21),e(28,`
            `),i(),e(29,`
          `),i(),e(30,`
        `),i()),o&2){let n=u();a(27),s("ngForOf",n.mCommittees)}}function bt(o,r){if(o&1){let n=U();t(0,"li",32),e(1,`
              `),t(2,"a",33),g("click",function(){let l=L(n).$implicit,p=u(2);return $(p.onChangePage(l.url))}),i(),e(3,`
            `),i()}if(o&2){let n=r.$implicit;s("ngClass",Me(2,ct,n.active,!n.url)),a(2),s("innerHTML",n.label,we)}}function St(o,r){if(o&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",30),e(3,`
            `),d(4,bt,4,5,"li",31),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let n=u();a(4),s("ngForOf",n.links)}}function ht(o,r){o&1&&(e(0,`
          `),t(1,"p",34),e(2,"No items"),i(),e(3,`
        `))}var le=class o{constructor(r,n,m){this.mCommitteeService=r;this.mToastrService=n;this.mAppContextService=m;this.mCommittees={};this.links=[];this.mProgress=_(!1)}ngOnInit(){this.index(),this.search_term=new Le("",S.required),this.itemForm=new He({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mCommitteeService.allItems().subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mCommittees=r.data,this.links=r.links),this.mProgress.set(!1)},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onChangePage(r){this.mProgress.set(!0),this.mCommitteeService.paginateItems(r).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mCommittees=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onDelete(r){Qe.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+r.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(m=>{m.isConfirmed&&(this.mProgress.set(!0),this.mCommitteeService.deleteItem(r).subscribe({next:l=>{l&&(this.mCommittees=this.mCommittees.filter(p=>p.id!==r.id),this.mToastrService.warning(l.message),this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}}))})}onSubmit(r){this.mProgress.set(!0),this.mCommitteeService.searchItems(r).subscribe({next:n=>{n&&(this.mCommittees=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onSearch(r){this.mProgress.set(!0),this.mCommitteeService.searchItems(r).subscribe({next:n=>{n&&(this.mCommittees=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(h),c(M),c(b))}}static{this.\u0275cmp=y({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/committees/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,m){if(n&1&&(d(0,ut,1,0,"app-progress",1),t(1,"c-row"),e(2,`
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
            `),t(21,"form",8),g("ngSubmit",function(){return m.onSearch(m.itemForm.value)}),e(22,`
              `),t(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),t(27,"div",11),e(28,`
                  `),t(29,"button",12),e(30,`
                    `),f(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),d(35,xt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),t(42,"c-card-body"),e(43,`

        `),d(44,Ct,31,1,"div",15),e(45,`

        `),d(46,St,7,1,"div",1),e(47,`

        `),d(48,ht,4,0,"ng-template",null,0,K),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),n&2){let l=z(49);s("ngIf",m.mProgress()),a(21),s("formGroup",m.itemForm),a(4),s("ngClass",v(7,dt,m.search_term.invalid&&(m.search_term.dirty||m.search_term.touched))),a(10),s("ngIf",m.search_term.invalid&&(m.search_term.dirty||m.search_term.touched)),a(9),s("ngIf",m.mCommittees.length>0)("ngIfElse",l),a(2),s("ngIf",m.links)}},dependencies:[E,Q,I,F,A,T,w,Oe,P,N,ne,ie,O,q,k,B,R,D,X],encapsulation:2})}};var Xe=Fe(ze());var _t=o=>({"is-invalid":o});function yt(o,r){o&1&&f(0,"app-progress")}function Et(o,r){if(o&1&&(t(0,"div",27),e(1),i()),o&2){let n=u();a(),x(n.item.name)}}function It(o,r){if(o&1&&(t(0,"div",27),e(1),i()),o&2){let n=u();a(),x(n.mMembers.length)}}function Ft(o,r){if(o&1&&(t(0,"div",27),e(1),j(2,"date"),i()),o&2){let n=u();a(),x(V(2,1,n.item.created_at))}}function Tt(o,r){if(o&1&&(t(0,"div",27),e(1),j(2,"date"),i()),o&2){let n=u();a(),x(V(2,1,n.item.updated_at))}}function wt(o,r){if(o&1&&(t(0,"option",28),e(1),i()),o&2){let n=r.$implicit;s("value",Pe(n.id)),a(),x(n.name)}}function Pt(o,r){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Nt(o,r){if(o&1&&(t(0,"div",29),e(1,`
                          `),d(2,Pt,2,0,"div",1),e(3,`
                        `),i()),o&2){let n,m=u();a(2),s("ngIf",(n=m.itemForm.get("user_id"))==null||n.errors==null?null:n.errors.required)}}function Mt(o,r){if(o&1){let n=U();t(0,"tr"),e(1,`
                        `),t(2,"td"),e(3),i(),e(4,`
                        `),t(5,"td"),e(6),i(),e(7,`
                        `),t(8,"td"),e(9),j(10,"date"),i(),e(11,`
                        `),t(12,"td"),e(13,`
                          `),t(14,"div",35),e(15,`
                            `),t(16,"button",36),g("click",function(){let l=L(n).$implicit,p=u(2);return $(p.onDelete(l))}),f(17,"i",37),i(),e(18,`
                          `),i(),e(19,`
                        `),i(),e(20,`
                      `),i()}if(o&2){let n=r.$implicit,m=r.index;a(3),J("",m+1,"."),a(3),x(n.user==null?null:n.user.name),a(3),x(V(10,3,n.created_at))}}function At(o,r){if(o&1&&(t(0,"div",30),e(1,`
                  `),t(2,"table",31),e(3,`
                    `),t(4,"thead",32),e(5,`
                      `),t(6,"tr"),e(7,`
                        `),t(8,"th",33),e(9,"#"),i(),e(10,`
                        `),t(11,"th",33),e(12,"Name"),i(),e(13,`
                        `),t(14,"th",33),e(15,"Joined"),i(),e(16,`
                        `),t(17,"th",33),e(18,"Action"),i(),e(19,`
                      `),i(),e(20,`
                    `),i(),e(21,`
                    `),t(22,"tbody"),e(23,`
                      `),d(24,Mt,21,5,"tr",34),e(25,`
                    `),i(),e(26,`
                  `),i(),e(27,`
                `),i()),o&2){let n=u();a(24),s("ngForOf",n.mMembers)}}function kt(o,r){o&1&&(e(0,`
                  `),t(1,"p",38),e(2,"No items"),i(),e(3,`
                `))}var de=class o{constructor(r,n,m,l,p){this.mCommitteeService=r;this.mToastrService=n;this.mAppContextService=m;this.route=l;this.fb=p;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({user_id:["",S.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCommitteeService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mMembers=this.item.members,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCommitteeService.unpaginatedItems().subscribe({next:r=>{if(r){this.mUsers=r.data.users;let n=this.mMembers.map(m=>m.user_id);this.mUsers=this.mUsers.filter(m=>!n.includes(m.id)),this.mProgress.set(!1)}},error:r=>{this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onDelete(r){Xe.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+r.user?.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(m=>{m.isConfirmed&&(this.mProgress.set(!0),this.mCommitteeService.deleteMemberItem(r).subscribe({next:l=>{l&&(this.getItem(),this.loadUnpaginatedItems(),this.mToastrService.warning(l.message),this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}}))})}onSubmit(r){let n={committee_id:this.id,user_id:r.user_id};this.mProgress.set(!0),this.mCommitteeService.addMemberItem(n).subscribe({next:m=>{if(m){this.mToastrService.success(m.message),this.mMembers=m.data.members;let l=this.mMembers.map(p=>p.user_id);this.mUsers=this.mUsers.filter(p=>!l.includes(p.id)),this.mProgress.set(!1)}},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(c(h),c(M),c(b),c(ee),c(G))}}static{this.\u0275cmp=y({type:o,selectors:[["app-show"]],standalone:!1,decls:114,vars:14,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],["for","created_at"],["for","updated_at"],[1,"col-md-12"],[1,"border","p-4","mb-4"],[1,"float-none","w-auto"],[1,"text-bold1"],[3,"ngSubmit","formGroup"],[1,"col-md-9"],[1,"form-group","mb-3"],["formControlName","user_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-3"],["type","submit",1,"btn","btn-warning","w-100",3,"disabled"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"mt-3","text-end"],["routerLink","/committees","type","button",1,"btn","btn-light"],[1,"text-muted"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"p-5","text-center","text-muted"]],template:function(n,m){if(n&1&&(d(0,yt,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Name:"),i(),e(19,`
                `),d(20,Et,2,1,"div",8),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",5),e(25,`
              `),t(26,"div",6),e(27,`
                `),t(28,"label",9),e(29,"Members:"),i(),e(30,`
                `),d(31,It,2,1,"div",8),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",5),e(36,`
              `),t(37,"div",6),e(38,`
                `),t(39,"label",9),e(40,"Created At:"),i(),e(41,`
                `),d(42,Ft,3,3,"div",8),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",5),e(47,`
              `),t(48,"div",6),e(49,`
                `),t(50,"label",10),e(51,"Updated At:"),i(),e(52,`
                `),d(53,Tt,3,3,"div",8),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
          `),i(),e(57,`
          `),t(58,"div",11),e(59,`
            `),t(60,"fieldset",12),e(61,`
              `),t(62,"legend",13)(63,"h6",14),e(64,"Members"),i()(),e(65,`
              `),t(66,"div"),e(67,`
                `),t(68,"form",15),g("ngSubmit",function(){return m.onSubmit(m.itemForm.value)}),e(69,`
                  `),t(70,"div",4),e(71,`
                    `),t(72,"div",16),e(73,`
                      `),t(74,"div",17),e(75,`
                        `),t(76,"select",18),e(77,`
                          `),t(78,"option",19),e(79,"--- Select member ---"),i(),e(80,`
                          `),d(81,wt,2,3,"option",20),e(82,`
                        `),i(),e(83,`
                        `),d(84,Nt,4,1,"div",21),e(85,`
                      `),i(),e(86,`
                    `),i(),e(87,`
                    `),t(88,"div",22),e(89,`
                      `),t(90,"button",23),e(91,"Add"),i(),e(92,`
                    `),i(),e(93,`
                  `),i(),e(94,`
                `),i(),e(95,`
                `),d(96,At,28,1,"div",24),e(97,`
                `),d(98,kt,4,0,"ng-template",null,0,K),e(100,`
              `),i(),e(101,`
            `),i(),e(102,`
          `),i(),e(103,`
          `),t(104,"div",25),e(105,`
            `),t(106,"button",26),e(107,"Cancel"),i(),e(108,`
          `),i(),e(109,`
        `),i(),e(110,`

      `),i(),e(111,`
    `),i(),e(112,`
  `),i(),e(113,`
`),i()),n&2){let l,p,Ie=z(99);s("ngIf",m.mProgress()),a(20),s("ngIf",m.item.name),a(11),s("ngIf",m.mMembers),a(11),s("ngIf",m.item.created_at),a(11),s("ngIf",m.item.updated_at),a(15),s("formGroup",m.itemForm),a(8),s("ngClass",v(12,_t,((l=m.itemForm.get("user_id"))==null?null:l.invalid)&&(((l=m.itemForm.get("user_id"))==null?null:l.dirty)||((l=m.itemForm.get("user_id"))==null?null:l.touched)))),a(5),s("ngForOf",m.mUsers),a(3),s("ngIf",((p=m.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=m.itemForm.get("user_id"))==null?null:p.dirty)||((p=m.itemForm.get("user_id"))==null?null:p.touched))),a(6),s("disabled",m.itemForm.invalid),a(6),s("ngIf",m.mMembers.length>0)("ngIfElse",Ie)}},dependencies:[E,Q,I,F,A,T,w,P,N,ne,ie,O,Ue,We,$e,k,B,R,D,X],encapsulation:2})}};var Bt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:le,data:{title:"Committees"}},{path:"create",component:ae,data:{title:"Committees / Create"}},{path:"edit/:id",component:se,data:{title:"Committees / Edit"}},{path:"show/:id",component:de,data:{title:"Committees / Show"}}],pe=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=Y({type:o})}static{this.\u0275inj=W({imports:[Z,ve.forChild(Bt),ve]})}};var Ze=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=Y({type:o})}static{this.\u0275inj=W({imports:[Z,pe,Ge,Be,De,Re,je,Ve,qe,Ye,ke]})}};export{Ze as CommitteeModule};
