import{a as Qe,b as P}from"./chunk-2AD7MAUK.js";import{a as k,b as g,c as A,d as B,e as Le,f as Ge,g as q,h as J,i as D,j,k as K,l as X,m as Z,n as $,o as We}from"./chunk-RB2TDSF7.js";import{b as F,d as w,f as R}from"./chunk-2JWXX3AJ.js";import{$a as Ee,Aa as i,Ba as f,Ec as Ae,Gc as I,Hc as T,J as V,Jc as Be,Ka as ae,Lb as z,Ma as y,Nb as Q,O as oe,Oa as c,Ob as b,P as me,Pc as qe,Va as he,Vb as pe,X as _,Yc as De,Za as e,Zc as je,_a as x,_c as Oe,bb as G,ca as be,cb as W,db as U,dd as Ve,e as ze,ea as a,eb as H,fb as le,gc as Re,hb as Ie,ib as v,jb as Te,kb as se,kc as Pe,la as u,lb as de,lc as Ne,ma as S,mb as Fe,na as L,qa as s,rc as h,sc as E,ub as N,uc as Me,vb as M,vc as ke,wb as C,ya as l,yb as we,za as t,zb as Y}from"./chunk-NKO5GFD6.js";var He=ze(Qe());var Je=r=>({"is-invalid":r}),Ke=()=>[1],Xe=(r,m)=>({active:r,disabled:m});function Ze(r,m){r&1&&f(0,"app-progress")}function $e(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function et(r,m){if(r&1&&(t(0,"div",16),e(1,`
                  `),s(2,$e,2,0,"div",1),e(3,`
                `),i()),r&2){let n=c();a(2),l("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function tt(r,m){if(r&1){let n=ae();t(0,"button",29),y("click",function(){oe(n);let d=c().$implicit,p=c(2);return me(p.onDelete(d))}),f(1,"i",30),i()}}function it(r,m){if(r&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td"),e(6),i(),e(7,`
                `),t(8,"td")(9,"span",22),e(10),i()(),e(11,`
                `),t(12,"td"),e(13),se(14,"date"),i(),e(15,`
                `),t(16,"td"),e(17),se(18,"date"),i(),e(19,`
                `),t(20,"td"),e(21,`
                  `),t(22,"div",23),e(23,`
                    `),t(24,"a",24),f(25,"i",25),i(),e(26,`
                    `),t(27,"a",26),e(28," "),f(29,"i",27),i(),e(30,`
                    `),s(31,tt,2,0,"button",28),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
              `),i()),r&2){let n=m.$implicit,o=m.index,d=c(2);a(3),Ee("",d.mPageFrom+o,"."),a(3),x(n.name),a(3),l("ngClass",(n==null?null:n.type_id)===1?"bg-success":"bg-warning"),a(),x(n==null||n.type==null?null:n.type.name),a(3),x(de(14,11,n.created_at)),a(4),x(de(18,13,n.updated_at)),a(7),l("routerLink",le("/roles/show/",n.id)),a(3),l("routerLink",le("/roles/edit/",n.id)),a(4),l("ngIf",d.mAppContextService.hasRoles(Ie(15,Ke)))}}function nt(r,m){if(r&1&&(t(0,"div",17),e(1,`
          `),t(2,"table",18),e(3,`
            `),t(4,"thead",19),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",20),e(9,"#"),i(),e(10,`
                `),t(11,"th",20),e(12,"Name"),i(),e(13,`
                `),t(14,"th",20),e(15,"Type"),i(),e(16,`
                `),t(17,"th",20),e(18,"Created"),i(),e(19,`
                `),t(20,"th",20),e(21,"Updated"),i(),e(22,`
                `),t(23,"th",20),e(24,"Action"),i(),e(25,`
              `),i(),e(26,`
            `),i(),e(27,`
            `),t(28,"tbody"),e(29,`
              `),s(30,it,35,16,"tr",21),e(31,`
            `),i(),e(32,`
          `),i(),e(33,`
        `),i()),r&2){let n=c();a(30),l("ngForOf",n.mRoles)}}function rt(r,m){if(r&1){let n=ae();t(0,"li",33),e(1,`
              `),t(2,"a",34),y("click",function(){let d=oe(n).$implicit,p=c(2);return me(p.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(r&2){let n=m.$implicit;l("ngClass",Te(2,Xe,n.active,!n.url)),a(2),l("innerHTML",n.label,be)}}function ot(r,m){if(r&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",31),e(3,`
            `),s(4,rt,4,5,"li",32),e(5,`
          `),i(),e(6,`
        `),i()),r&2){let n=c();a(4),l("ngForOf",n.links)}}function mt(r,m){r&1&&(e(0,`
          `),t(1,"p",35),e(2,"No items"),i(),e(3,`
        `))}var ee=class r{constructor(m,n,o){this.mRoleService=m;this.mToastrService=n;this.mAppContextService=o;this.mRoles={};this.links=[];this.mProgress=_(!1)}ngOnInit(){this.index(),this.search_term=new Ge("",g.required),this.itemForm=new Le({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mRoleService.allItems().subscribe({next:m=>{m&&(this.mPageFrom=m.from,this.mRoles=m.data,this.links=m.links),this.mProgress.set(!1)},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onChangePage(m){this.mProgress.set(!0),this.mRoleService.paginateItems(m).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mRoles=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onDelete(m){He.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+m.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(o=>{o.isConfirmed&&(this.mProgress.set(!0),this.mRoleService.deleteItem(m).subscribe({next:d=>{d&&(this.mRoles=this.mRoles.filter(p=>p.id!==m.id),this.mToastrService.warning(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.warning(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(m){this.mProgress.set(!0),this.mRoleService.searchItems(m).subscribe({next:n=>{n&&(this.mRoles=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onSearch(m){this.mProgress.set(!0),this.mRoleService.searchItems(m).subscribe({next:n=>{n&&(this.mRoles=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||r)(u(P),u(w),u(F))}}static{this.\u0275cmp=S({type:r,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/roles/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,o){if(n&1&&(s(0,Ze,1,0,"app-progress",1),t(1,"c-row"),e(2,`
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
            `),t(21,"form",8),y("ngSubmit",function(){return o.onSearch(o.itemForm.value)}),e(22,`
              `),t(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),t(27,"div",11),e(28,`
                  `),t(29,"button",12),e(30,`
                    `),f(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),s(35,et,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),t(42,"c-card-body"),e(43,`

        `),s(44,nt,34,1,"div",15),e(45,`

        `),s(46,ot,7,1,"div",1),e(47,`

        `),s(48,mt,4,0,"ng-template",null,0,Fe),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),n&2){let d=he(49);l("ngIf",o.mProgress()),a(21),l("formGroup",o.itemForm),a(4),l("ngClass",v(7,Je,o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched))),a(10),l("ngIf",o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched)),a(9),l("ngIf",o.mRoles.length>0)("ngIfElse",d),a(2),l("ngIf",o.links)}},dependencies:[N,M,C,b,R,h,E,Me,I,T,je,De,q,k,A,B,j,D,we],encapsulation:2})}};var ye=r=>({"is-invalid":r});function at(r,m){r&1&&f(0,"app-progress")}function lt(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function st(r,m){if(r&1&&(t(0,"div",19),e(1,`
                  `),s(2,lt,2,0,"div",0),e(3,`
                `),i()),r&2){let n,o=c();a(2),l("ngIf",(n=o.itemForm.get("id").errors)==null?null:n.required)}}function dt(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function pt(r,m){if(r&1&&(t(0,"div",19),e(1,`
                  `),s(2,dt,2,0,"div",0),e(3,`
                `),i()),r&2){let n,o=c();a(2),l("ngIf",(n=o.itemForm.get("name").errors)==null?null:n.required)}}function ct(r,m){if(r&1&&(t(0,"option",20),e(1),i()),r&2){let n=m.$implicit;l("value",H(n.id)),a(),x(n.name)}}function ut(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function xt(r,m){if(r&1&&(t(0,"div",19),e(1,`
                  `),s(2,ut,2,0,"div",0),e(3,`
                `),i()),r&2){let n,o=c();a(2),l("ngIf",(n=o.itemForm.get("type_id"))==null||n.errors==null?null:n.errors.required)}}var te=class r{constructor(m,n,o,d,p){this.mRoleService=m;this.mToastrService=n;this.mAppContextService=o;this.router=d;this.fb=p;this.mProgress=_(!1);this.itemForm=this.fb.group({id:["",g.required],name:["",g.required],type_id:["",g.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(m){this.mProgress.set(!0),this.mRoleService.createItem(m).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/roles"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mRoleService.unpaginatedItems().subscribe({next:m=>{m&&(this.mRoleTypes=m.data.role_types,this.mProgress.set(!1))},error:m=>{this.mToastrService.error(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||r)(u(P),u(w),u(F),u(Q),u($))}}static{this.\u0275cmp=S({type:r,selectors:[["app-create"]],standalone:!1,decls:72,vars:16,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/roles",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(n,o){if(n&1&&(s(0,at,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),y("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Id:"),i(),e(19,`
                `),f(20,"input",8),e(21,`
                `),s(22,st,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",5),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",10),e(31,"Name:"),i(),e(32,`
                `),f(33,"input",11),e(34,`
                `),s(35,pt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",5),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",12),e(44,"Type:"),i(),e(45,`
                `),t(46,"select",13),e(47,`
                  `),t(48,"option",14),e(49,"--- Select type ---"),i(),e(50,`
                  `),s(51,ct,2,3,"option",15),e(52,`
                `),i(),e(53,`
                `),s(54,xt,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
          `),i(),e(58,`

          `),t(59,"div",16),e(60,`
            `),t(61,"a",17),e(62,"Cancel"),i(),e(63,`
            `),t(64,"button",18),e(65,"Submit"),i(),e(66,`
          `),i(),e(67,`

        `),i(),e(68,`

      `),i(),e(69,`
    `),i(),e(70,`
  `),i(),e(71,`
`),i()),n&2){let d,p;l("ngIf",o.mProgress()),a(9),l("formGroup",o.itemForm),a(11),l("ngClass",v(10,ye,o.itemForm.get("id").invalid&&(o.itemForm.get("id").dirty||o.itemForm.get("id").touched))),a(2),l("ngIf",o.itemForm.get("id").invalid&&(o.itemForm.get("id").dirty||o.itemForm.get("id").touched)),a(11),l("ngClass",v(12,ye,o.itemForm.get("name").invalid&&(o.itemForm.get("name").dirty||o.itemForm.get("name").touched))),a(2),l("ngIf",o.itemForm.get("name").invalid&&(o.itemForm.get("name").dirty||o.itemForm.get("name").touched)),a(11),l("ngClass",v(14,ye,((d=o.itemForm.get("type_id"))==null?null:d.invalid)&&(((d=o.itemForm.get("type_id"))==null?null:d.dirty)||((d=o.itemForm.get("type_id"))==null?null:d.touched)))),a(5),l("ngForOf",o.mRoleTypes),a(3),l("ngIf",((p=o.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("type_id"))==null?null:p.dirty)||((p=o.itemForm.get("type_id"))==null?null:p.touched))),a(10),l("disabled",o.itemForm.invalid)}},dependencies:[N,M,C,b,R,h,E,I,T,q,X,Z,k,J,K,A,B,j,D],encapsulation:2})}};var Ce=r=>({"is-invalid":r});function ft(r,m){r&1&&f(0,"app-progress")}function vt(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function gt(r,m){if(r&1&&(t(0,"div",19),e(1,`
                  `),s(2,vt,2,0,"div",0),e(3,`
                `),i()),r&2){let n,o=c();a(2),l("ngIf",(n=o.itemForm.get("id").errors)==null?null:n.required)}}function _t(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function St(r,m){if(r&1&&(t(0,"div",19),e(1,`
                  `),s(2,_t,2,0,"div",0),e(3,`
                `),i()),r&2){let n,o=c();a(2),l("ngIf",(n=o.itemForm.get("name").errors)==null?null:n.required)}}function yt(r,m){if(r&1&&(t(0,"option",20),e(1),i()),r&2){let n=m.$implicit;l("value",H(n.id)),a(),x(n.name)}}function Ct(r,m){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function bt(r,m){if(r&1&&(t(0,"div",19),e(1,`
                  `),s(2,Ct,2,0,"div",0),e(3,`
                `),i()),r&2){let n,o=c();a(2),l("ngIf",(n=o.itemForm.get("type_id"))==null||n.errors==null?null:n.errors.required)}}var ie=class r{constructor(m,n,o,d,p,qt){this.mRoleService=m;this.mToastrService=n;this.mAppContextService=o;this.router=d;this.fb=p;this.route=qt;this.mProgress=_(!1);this.item={};this.itemForm=this.fb.group({id:["",g.required],name:["",g.required],type_id:["",g.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mRoleService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onSubmit(m){let n={id:this.item.id,name:m.name,type_id:m.type_id};this.mProgress.set(!0),this.mRoleService.updateItem(n).subscribe({next:o=>{o&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/roles"),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mRoleService.unpaginatedItems().subscribe({next:m=>{m&&(this.mRoleTypes=m.data.role_types,this.mProgress.set(!1))},error:m=>{this.mToastrService.error(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||r)(u(P),u(w),u(F),u(Q),u($),u(z))}}static{this.\u0275cmp=S({type:r,selectors:[["app-edit"]],standalone:!1,decls:72,vars:19,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/roles",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(n,o){if(n&1&&(s(0,ft,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),y("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Id:"),i(),e(19,`
                `),t(20,"input",8),U("ngModelChange",function(p){return W(o.item.id,p)||(o.item.id=p),p}),i(),e(21,`
                `),s(22,gt,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",5),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",10),e(31,"Name:"),i(),e(32,`
                `),t(33,"input",11),U("ngModelChange",function(p){return W(o.item.name,p)||(o.item.name=p),p}),i(),e(34,`
                `),s(35,St,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",5),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",12),e(44,"Type:"),i(),e(45,`
                `),t(46,"select",13),U("ngModelChange",function(p){return W(o.item.type_id,p)||(o.item.type_id=p),p}),e(47,`
                  `),t(48,"option",14),e(49,"--- Select type ---"),i(),e(50,`
                  `),s(51,yt,2,3,"option",15),e(52,`
                `),i(),e(53,`
                `),s(54,bt,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
          `),i(),e(58,`

          `),t(59,"div",16),e(60,`
            `),t(61,"a",17),e(62,"Cancel"),i(),e(63,`
            `),t(64,"button",18),e(65,"Submit"),i(),e(66,`
          `),i(),e(67,`

        `),i(),e(68,`

      `),i(),e(69,`
    `),i(),e(70,`
  `),i(),e(71,`
`),i()),n&2){let d,p;l("ngIf",o.mProgress()),a(9),l("formGroup",o.itemForm),a(11),G("ngModel",o.item.id),l("ngClass",v(13,Ce,o.itemForm.get("id").invalid&&(o.itemForm.get("id").dirty||o.itemForm.get("id").touched))),a(2),l("ngIf",o.itemForm.get("id").invalid&&(o.itemForm.get("id").dirty||o.itemForm.get("id").touched)),a(11),G("ngModel",o.item.name),l("ngClass",v(15,Ce,o.itemForm.get("name").invalid&&(o.itemForm.get("name").dirty||o.itemForm.get("name").touched))),a(2),l("ngIf",o.itemForm.get("name").invalid&&(o.itemForm.get("name").dirty||o.itemForm.get("name").touched)),a(11),G("ngModel",o.item.type_id),l("ngClass",v(17,Ce,((d=o.itemForm.get("type_id"))==null?null:d.invalid)&&(((d=o.itemForm.get("type_id"))==null?null:d.dirty)||((d=o.itemForm.get("type_id"))==null?null:d.touched)))),a(5),l("ngForOf",o.mRoleTypes),a(3),l("ngIf",((p=o.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("type_id"))==null?null:p.dirty)||((p=o.itemForm.get("type_id"))==null?null:p.touched))),a(10),l("disabled",o.itemForm.invalid)}},dependencies:[N,M,C,b,R,h,E,I,T,q,X,Z,k,J,K,A,B,j,D],encapsulation:2})}};function ht(r,m){r&1&&f(0,"app-progress")}function Et(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.consultant_name)}}function It(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.professional_body==null?null:n.item.professional_body.name)}}function Tt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.membership_number)}}function Ft(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.email)}}function wt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.status)}}function Rt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.postal_address)}}function Pt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.qualification)}}function Nt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.business_name)}}function Mt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.nationality)}}function kt(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.subscription_year)}}function At(r,m){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let n=c();a(),x(n.item.good_standing)}}var ne=class r{constructor(m,n,o,d){this.mRoleService=m;this.mToastrService=n;this.mAppContextService=o;this.route=d;this.mProgress=_(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mRoleService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||r)(u(P),u(w),u(F),u(z))}}static{this.\u0275cmp=S({type:r,selectors:[["app-show"]],standalone:!1,decls:145,vars:12,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"mt-3","text-end"],["routerLink","/roles","cButton","","color","danger"],[1,"text-muted"]],template:function(n,o){n&1&&(s(0,ht,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`

          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",5),e(16,`
                `),t(17,"label",6),e(18,"Name:"),i(),e(19,`
                `),s(20,Et,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",4),e(25,`
              `),t(26,"div",5),e(27,`
                `),t(28,"label",6),e(29,"Professional Body:"),i(),e(30,`
                `),s(31,It,2,1,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",4),e(36,`
              `),t(37,"div",5),e(38,`
                `),t(39,"label",6),e(40,"Membership Number:"),i(),e(41,`
                `),s(42,Tt,2,1,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",4),e(47,`
              `),t(48,"div",5),e(49,`
                `),t(50,"label",6),e(51,"Email:"),i(),e(52,`
                `),s(53,Ft,2,1,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),t(57,"div",4),e(58,`
              `),t(59,"div",5),e(60,`
                `),t(61,"label",6),e(62,"Status:"),i(),e(63,`
                `),s(64,wt,2,1,"div",7),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),t(68,"div",4),e(69,`
              `),t(70,"div",5),e(71,`
                `),t(72,"label",6),e(73,"Postal Address:"),i(),e(74,`
                `),s(75,Rt,2,1,"div",7),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),t(79,"div",4),e(80,`
              `),t(81,"div",5),e(82,`
                `),t(83,"label",6),e(84,"Qualification:"),i(),e(85,`
                `),s(86,Pt,2,1,"div",7),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",4),e(91,`
              `),t(92,"div",5),e(93,`
                `),t(94,"label",6),e(95,"Business Name:"),i(),e(96,`
                `),s(97,Nt,2,1,"div",7),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`
            `),t(101,"div",4),e(102,`
              `),t(103,"div",5),e(104,`
                `),t(105,"label",6),e(106,"Nationality:"),i(),e(107,`
                `),s(108,Mt,2,1,"div",7),e(109,`
              `),i(),e(110,`
            `),i(),e(111,`
            `),t(112,"div",4),e(113,`
              `),t(114,"div",5),e(115,`
                `),t(116,"label",6),e(117,"Subscription Year:"),i(),e(118,`
                `),s(119,kt,2,1,"div",7),e(120,`
              `),i(),e(121,`
            `),i(),e(122,`
            `),t(123,"div",8),e(124,`
              `),t(125,"div",5),e(126,`
                `),t(127,"label",6),e(128,"Good Standing:"),i(),e(129,`
                `),s(130,At,2,1,"div",7),e(131,`
              `),i(),e(132,`
            `),i(),e(133,`
          `),i(),e(134,`

          `),t(135,"div",9),e(136,`
            `),t(137,"button",10),e(138,"Cancel"),i(),e(139,`
          `),i(),e(140,`

        `),i(),e(141,`

      `),i(),e(142,`
    `),i(),e(143,`
  `),i(),e(144,`
`),i()),n&2&&(l("ngIf",o.mProgress()),a(20),l("ngIf",o.item.consultant_name),a(11),l("ngIf",o.item.professional_body),a(11),l("ngIf",o.item.membership_number),a(11),l("ngIf",o.item.email),a(11),l("ngIf",o.item.status),a(11),l("ngIf",o.item.postal_address),a(11),l("ngIf",o.item.qualification),a(11),l("ngIf",o.item.business_name),a(11),l("ngIf",o.item.nationality),a(11),l("ngIf",o.item.subscription_year),a(11),l("ngIf",o.item.good_standing))},dependencies:[C,b,R,Pe,h,E,I,T],encapsulation:2})}};var Bt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:ee,data:{title:"Roles"}},{path:"create",component:te,data:{title:"Roles / Create"}},{path:"edit/:id",component:ie,data:{title:"Roles / Edit"}},{path:"show/:id",component:ne,data:{title:"Roles / Show"}}],re=class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=L({type:r})}static{this.\u0275inj=V({imports:[Y,pe.forChild(Bt),pe]})}};var Ye=class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=L({type:r})}static{this.\u0275inj=V({imports:[Y,re,Ve,Ne,ke,Ae,Be,qe,Oe,We,Re]})}};export{Ye as RoleModule};
