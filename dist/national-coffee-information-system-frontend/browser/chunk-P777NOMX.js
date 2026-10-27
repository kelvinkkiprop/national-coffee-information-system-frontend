import{a as Qe}from"./chunk-HFDWTLTM.js";import{b as O,c as _,d as k,e as B,f as We,g as $e,h as D,i as Z,j,k as q,l as ee,m as te,n as ie,o as ne,p as Ue}from"./chunk-2F5K4AED.js";import{a as w,c as x,e as N}from"./chunk-UGIOW27Q.js";import{a as P}from"./chunk-MRDGL4XD.js";import{Ac as I,Bb as M,Bc as F,Ca as l,Cb as A,Da as i,Db as b,Dc as ke,Ea as n,Ec as Be,Fa as f,Fb as J,Ib as K,K as Ie,L as G,N as pe,Nb as Me,Nc as De,Oa as fe,Pc as T,Q as ce,Qa as C,Qc as R,R as ue,Sa as u,Sc as je,Ub as Q,Wb as X,Xb as E,Yc as qe,Z as y,Za as Te,bb as e,cb as g,cc as ve,db as Re,e as Ke,ea as Fe,fb as $,fd as Ve,gb as U,gd as Le,hb as z,hd as He,ia as a,ib as Y,jb as ge,lb as we,mb as v,md as Ge,nb as Pe,pa as c,pb as L,pc as Ae,qa as h,qb as H,ra as W,tb as Ne,ua as d,uc as Oe}from"./chunk-4MMI3YFF.js";var Ye=Ke(Qe());var S=class o{constructor(r,t){this.mAppContextService=r;this.http=t}allItems(){let r=`${w.base_url}/roles`;return this.http.get(r,this.mAppContextService.getHttpOptions())}createItem(r){let t=`${w.base_url}/roles`;return this.http.post(t,r,this.mAppContextService.getHttpOptions())}getOneItem(r){let t=`${w.base_url}/roles/${r}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(r){let t=`${w.base_url}/roles/${r.id}`;return this.http.put(t,r,this.mAppContextService.getHttpOptions())}deleteItem(r){let t=`${w.base_url}/roles/${r.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(r){return this.http.get(r,this.mAppContextService.getHttpOptions())}searchItems(r){let t=`${w.base_url}/search-roles`;return this.http.post(t,r,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let r=`${w.base_url}/unpaginated-items-roles`;return this.http.get(r,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(t){return new(t||o)(pe(x),pe(Me))}}static{this.\u0275prov=Ie({token:o,factory:o.\u0275fac,providedIn:"root"})}};var Xe=o=>({"is-invalid":o}),Ze=()=>[1],et=(o,r)=>({active:o,disabled:r});function tt(o,r){o&1&&f(0,"app-progress")}function it(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function nt(o,r){if(o&1&&(i(0,"div",16),e(1,`
                  `),d(2,it,2,0,"div",1),e(3,`
                `),n()),o&2){let t=u();a(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function rt(o,r){if(o&1){let t=fe();i(0,"button",29),C("click",function(){ce(t);let s=u().$implicit,p=u(2);return ue(p.onDelete(s))}),f(1,"i",30),n()}}function ot(o,r){if(o&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
                `),i(8,"td")(9,"span",22),e(10),n()(),e(11,`
                `),i(12,"td"),e(13),L(14,"date"),n(),e(15,`
                `),i(16,"td"),e(17,`
                  `),i(18,"div",23),e(19,`
                    `),i(20,"button",24),f(21,"i",25),n(),e(22,`
                    `),i(23,"button",26),e(24," "),f(25,"i",27),n(),e(26,`
                    `),d(27,rt,2,0,"button",28),e(28,`
                  `),n(),e(29,`
                `),n(),e(30,`
              `),n()),o&2){let t=r.$implicit,m=r.index,s=u(2);a(3),Re("",s.mPageFrom+m,"."),a(3),g(t.name),a(3),l("ngClass",(t==null?null:t.type_id)===1?"bg-success":"bg-warning"),a(),g(t==null||t.type==null?null:t.type.name),a(3),g(H(14,10,t.created_at)),a(7),l("routerLink",ge("/roles/show/",t.id)),a(3),l("routerLink",ge("/roles/edit/",t.id)),a(4),l("ngIf",s.mAppContextService.hasRoles(we(12,Ze)))}}function mt(o,r){if(o&1&&(i(0,"div",17),e(1,`
          `),i(2,"table",18),e(3,`
            `),i(4,"thead",19),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",20),e(9,"#"),n(),e(10,`
                `),i(11,"th",20),e(12,"Name"),n(),e(13,`
                `),i(14,"th",20),e(15,"Type"),n(),e(16,`
                `),i(17,"th",20),e(18,"Created"),n(),e(19,`
                `),i(20,"th",20),e(21,"Action"),n(),e(22,`
              `),n(),e(23,`
            `),n(),e(24,`
            `),i(25,"tbody"),e(26,`
              `),d(27,ot,31,13,"tr",21),e(28,`
            `),n(),e(29,`
          `),n(),e(30,`
        `),n()),o&2){let t=u();a(27),l("ngForOf",t.mRoles)}}function at(o,r){if(o&1){let t=fe();i(0,"li",33),e(1,`
              `),i(2,"a",34),C("click",function(){let s=ce(t).$implicit,p=u(2);return ue(p.onChangePage(s.url))}),n(),e(3,`
            `),n()}if(o&2){let t=r.$implicit;l("ngClass",Pe(2,et,t.active,!t.url)),a(2),l("innerHTML",t.label,Fe)}}function lt(o,r){if(o&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",31),e(3,`
            `),d(4,at,4,5,"li",32),e(5,`
          `),n(),e(6,`
        `),n()),o&2){let t=u();a(4),l("ngForOf",t.links)}}function st(o,r){o&1&&(e(0,`
          `),i(1,"p",35),e(2,"No items"),n(),e(3,`
        `))}var me=class o{constructor(r,t,m){this.mRoleService=r;this.mToastrService=t;this.mAppContextService=m;this.mRoles={};this.links=[];this.mProgress=y(!1)}ngOnInit(){this.index(),this.search_term=new $e("",_.required),this.itemForm=new We({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mRoleService.allItems().subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mRoles=r.data,this.links=r.links),this.mProgress.set(!1)},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onChangePage(r){this.mProgress.set(!0),this.mRoleService.paginateItems(r).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mRoles=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(r){Ye.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+r.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(m=>{m.isConfirmed&&(this.mProgress.set(!0),this.mRoleService.deleteItem(r).subscribe({next:s=>{s&&(this.mRoles=this.mRoles.filter(p=>p.id!==r.id),this.mToastrService.warning(s.message),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.warning(s.error.message),this.mProgress.set(!1)}}))})}onSubmit(r){this.mProgress.set(!0),this.mRoleService.searchItems(r).subscribe({next:t=>{t&&(this.mRoles=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(r){this.mProgress.set(!0),this.mRoleService.searchItems(r).subscribe({next:t=>{t&&(this.mRoles=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(S),c(P),c(x))}}static{this.\u0275cmp=h({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/roles/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,m){if(t&1&&(d(0,tt,1,0,"app-progress",1),i(1,"c-row"),e(2,`
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
            `),i(21,"form",8),C("ngSubmit",function(){return m.onSearch(m.itemForm.value)}),e(22,`
              `),i(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),i(27,"div",11),e(28,`
                  `),i(29,"button",12),e(30,`
                    `),f(31,"i",13),e(32,`
                  `),n(),e(33,`
                `),n(),e(34,`
                `),d(35,nt,4,1,"div",14),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
      `),i(42,"c-card-body"),e(43,`

        `),d(44,mt,31,1,"div",15),e(45,`

        `),d(46,lt,7,1,"div",1),e(47,`

        `),d(48,st,4,0,"ng-template",null,0,Ne),e(50,`

      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),t&2){let s=Te(49);l("ngIf",m.mProgress()),a(21),l("formGroup",m.itemForm),a(4),l("ngClass",v(7,Xe,m.search_term.invalid&&(m.search_term.dirty||m.search_term.touched))),a(10),l("ngIf",m.search_term.invalid&&(m.search_term.dirty||m.search_term.touched)),a(9),l("ngIf",m.mRoles.length>0)("ngIfElse",s),a(2),l("ngIf",m.links)}},dependencies:[M,A,b,E,N,I,F,ke,T,R,Le,Ve,D,O,k,B,q,j,J],encapsulation:2})}};var be=o=>({"is-invalid":o});function dt(o,r){o&1&&f(0,"app-progress")}function pt(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function ct(o,r){if(o&1&&(i(0,"div",19),e(1,`
                  `),d(2,pt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,m=u();a(2),l("ngIf",(t=m.itemForm.get("id").errors)==null?null:t.required)}}function ut(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function ft(o,r){if(o&1&&(i(0,"div",19),e(1,`
                  `),d(2,ut,2,0,"div",0),e(3,`
                `),n()),o&2){let t,m=u();a(2),l("ngIf",(t=m.itemForm.get("name").errors)==null?null:t.required)}}function gt(o,r){if(o&1&&(i(0,"option",20),e(1),n()),o&2){let t=r.$implicit;l("value",Y(t.id)),a(),g(t.name)}}function vt(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function xt(o,r){if(o&1&&(i(0,"div",19),e(1,`
                  `),d(2,vt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,m=u();a(2),l("ngIf",(t=m.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}var ae=class o{constructor(r,t,m,s,p){this.mRoleService=r;this.mToastrService=t;this.mAppContextService=m;this.router=s;this.fb=p;this.mProgress=y(!1);this.itemForm=this.fb.group({id:["",_.required],name:["",_.required],type_id:["",_.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(r){this.mProgress.set(!0),this.mRoleService.createItem(r).subscribe({next:t=>{t&&(this.mToastrService.success(t.message),this.router.navigateByUrl("/roles"),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mRoleService.unpaginatedItems().subscribe({next:r=>{r&&(this.mRoleTypes=r.data.role_types,this.mProgress.set(!1))},error:r=>{this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(S),c(P),c(x),c(X),c(ne))}}static{this.\u0275cmp=h({type:o,selectors:[["app-create"]],standalone:!1,decls:72,vars:16,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/roles","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(t,m){if(t&1&&(d(0,dt,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),C("ngSubmit",function(){return m.onSubmit(m.itemForm.value)}),e(10,`

          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Id:"),n(),e(19,`
                `),f(20,"input",8),e(21,`
                `),d(22,ct,4,1,"div",9),e(23,`
              `),n(),e(24,`
            `),n(),e(25,`
            `),i(26,"div",5),e(27,`
              `),i(28,"div",6),e(29,`
                `),i(30,"label",10),e(31,"Name:"),n(),e(32,`
                `),f(33,"input",11),e(34,`
                `),d(35,ft,4,1,"div",9),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
            `),i(39,"div",5),e(40,`
              `),i(41,"div",6),e(42,`
                `),i(43,"label",12),e(44,"Type:"),n(),e(45,`
                `),i(46,"select",13),e(47,`
                  `),i(48,"option",14),e(49,"--- Select type ---"),n(),e(50,`
                  `),d(51,gt,2,3,"option",15),e(52,`
                `),n(),e(53,`
                `),d(54,xt,4,1,"div",9),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
          `),n(),e(58,`

          `),i(59,"div",16),e(60,`
            `),i(61,"button",17),e(62,"Cancel"),n(),e(63,`
            `),i(64,"button",18),e(65,"Submit"),n(),e(66,`
          `),n(),e(67,`

        `),n(),e(68,`

      `),n(),e(69,`
    `),n(),e(70,`
  `),n(),e(71,`
`),n()),t&2){let s,p;l("ngIf",m.mProgress()),a(9),l("formGroup",m.itemForm),a(11),l("ngClass",v(10,be,m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched))),a(2),l("ngIf",m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched)),a(11),l("ngClass",v(12,be,m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched))),a(2),l("ngIf",m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched)),a(11),l("ngClass",v(14,be,((s=m.itemForm.get("type_id"))==null?null:s.invalid)&&(((s=m.itemForm.get("type_id"))==null?null:s.dirty)||((s=m.itemForm.get("type_id"))==null?null:s.touched)))),a(5),l("ngForOf",m.mRoleTypes),a(3),l("ngIf",((p=m.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=m.itemForm.get("type_id"))==null?null:p.dirty)||((p=m.itemForm.get("type_id"))==null?null:p.touched))),a(10),l("disabled",m.itemForm.invalid)}},dependencies:[M,A,b,E,N,I,F,T,R,D,te,ie,O,Z,ee,k,B,q,j],encapsulation:2})}};var Ee=o=>({"is-invalid":o});function _t(o,r){o&1&&f(0,"app-progress")}function St(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function yt(o,r){if(o&1&&(i(0,"div",19),e(1,`
                  `),d(2,St,2,0,"div",0),e(3,`
                `),n()),o&2){let t,m=u();a(2),l("ngIf",(t=m.itemForm.get("id").errors)==null?null:t.required)}}function ht(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function Ct(o,r){if(o&1&&(i(0,"div",19),e(1,`
                  `),d(2,ht,2,0,"div",0),e(3,`
                `),n()),o&2){let t,m=u();a(2),l("ngIf",(t=m.itemForm.get("name").errors)==null?null:t.required)}}function bt(o,r){if(o&1&&(i(0,"option",20),e(1),n()),o&2){let t=r.$implicit;l("value",Y(t.id)),a(),g(t.name)}}function Et(o,r){o&1&&(i(0,"div"),e(1,"This field is required."),n())}function It(o,r){if(o&1&&(i(0,"div",19),e(1,`
                  `),d(2,Et,2,0,"div",0),e(3,`
                `),n()),o&2){let t,m=u();a(2),l("ngIf",(t=m.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}var le=class o{constructor(r,t,m,s,p,Mt){this.mRoleService=r;this.mToastrService=t;this.mAppContextService=m;this.router=s;this.fb=p;this.route=Mt;this.mProgress=y(!1);this.item={};this.itemForm=this.fb.group({id:["",_.required],name:["",_.required],type_id:["",_.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mRoleService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onSubmit(r){let t={id:this.item.id,name:r.name,type_id:r.type_id};this.mProgress.set(!0),this.mRoleService.updateItem(t).subscribe({next:m=>{m&&(this.mToastrService.success(m.message),this.router.navigateByUrl("/roles"),this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mRoleService.unpaginatedItems().subscribe({next:r=>{r&&(this.mRoleTypes=r.data.role_types,this.mProgress.set(!1))},error:r=>{this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(S),c(P),c(x),c(X),c(ne),c(Q))}}static{this.\u0275cmp=h({type:o,selectors:[["app-edit"]],standalone:!1,decls:72,vars:19,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/roles","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(t,m){if(t&1&&(d(0,_t,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),C("ngSubmit",function(){return m.onSubmit(m.itemForm.value)}),e(10,`

          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Id:"),n(),e(19,`
                `),i(20,"input",8),z("ngModelChange",function(p){return U(m.item.id,p)||(m.item.id=p),p}),n(),e(21,`
                `),d(22,yt,4,1,"div",9),e(23,`
              `),n(),e(24,`
            `),n(),e(25,`
            `),i(26,"div",5),e(27,`
              `),i(28,"div",6),e(29,`
                `),i(30,"label",10),e(31,"Name:"),n(),e(32,`
                `),i(33,"input",11),z("ngModelChange",function(p){return U(m.item.name,p)||(m.item.name=p),p}),n(),e(34,`
                `),d(35,Ct,4,1,"div",9),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
            `),i(39,"div",5),e(40,`
              `),i(41,"div",6),e(42,`
                `),i(43,"label",12),e(44,"Type:"),n(),e(45,`
                `),i(46,"select",13),z("ngModelChange",function(p){return U(m.item.type_id,p)||(m.item.type_id=p),p}),e(47,`
                  `),i(48,"option",14),e(49,"--- Select type ---"),n(),e(50,`
                  `),d(51,bt,2,3,"option",15),e(52,`
                `),n(),e(53,`
                `),d(54,It,4,1,"div",9),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
          `),n(),e(58,`

          `),i(59,"div",16),e(60,`
            `),i(61,"button",17),e(62,"Cancel"),n(),e(63,`
            `),i(64,"button",18),e(65,"Submit"),n(),e(66,`
          `),n(),e(67,`

        `),n(),e(68,`

      `),n(),e(69,`
    `),n(),e(70,`
  `),n(),e(71,`
`),n()),t&2){let s,p;l("ngIf",m.mProgress()),a(9),l("formGroup",m.itemForm),a(11),$("ngModel",m.item.id),l("ngClass",v(13,Ee,m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched))),a(2),l("ngIf",m.itemForm.get("id").invalid&&(m.itemForm.get("id").dirty||m.itemForm.get("id").touched)),a(11),$("ngModel",m.item.name),l("ngClass",v(15,Ee,m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched))),a(2),l("ngIf",m.itemForm.get("name").invalid&&(m.itemForm.get("name").dirty||m.itemForm.get("name").touched)),a(11),$("ngModel",m.item.type_id),l("ngClass",v(17,Ee,((s=m.itemForm.get("type_id"))==null?null:s.invalid)&&(((s=m.itemForm.get("type_id"))==null?null:s.dirty)||((s=m.itemForm.get("type_id"))==null?null:s.touched)))),a(5),l("ngForOf",m.mRoleTypes),a(3),l("ngIf",((p=m.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=m.itemForm.get("type_id"))==null?null:p.dirty)||((p=m.itemForm.get("type_id"))==null?null:p.touched))),a(10),l("disabled",m.itemForm.invalid)}},dependencies:[M,A,b,E,N,I,F,T,R,D,te,ie,O,Z,ee,k,B,q,j],encapsulation:2})}};function Ft(o,r){o&1&&f(0,"app-progress")}function Tt(o,r){if(o&1&&(i(0,"div",10),e(1),n()),o&2){let t=u();a(),g(t.item.name)}}function Rt(o,r){if(o&1&&(i(0,"div",10),e(1),n()),o&2){let t=u();a(),g(t.item.type==null?null:t.item.type.name)}}function wt(o,r){if(o&1&&(i(0,"div",10),e(1),L(2,"date"),n()),o&2){let t=u();a(),g(H(2,1,t.item.created_at))}}function Pt(o,r){if(o&1&&(i(0,"div",10),e(1),L(2,"date"),n()),o&2){let t=u();a(),g(H(2,1,t.item.updated_at))}}var se=class o{constructor(r,t,m,s){this.mRoleService=r;this.mToastrService=t;this.mAppContextService=m;this.route=s;this.mProgress=y(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mRoleService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(c(S),c(P),c(x),c(Q))}}static{this.\u0275cmp=h({type:o,selectors:[["app-show"]],standalone:!1,decls:68,vars:5,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/roles","type","button",1,"btn","btn-light"],[1,"text-muted"]],template:function(t,m){t&1&&(d(0,Ft,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div"),e(10,`
          `),i(11,"div",3),e(12,`
            `),i(13,"div",4),e(14,`
              `),i(15,"div",5),e(16,`
                `),i(17,"label",6),e(18,"Name:"),n(),e(19,`
                `),d(20,Tt,2,1,"div",7),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),i(24,"div",4),e(25,`
              `),i(26,"div",5),e(27,`
                `),i(28,"label",6),e(29,"Type:"),n(),e(30,`
                `),d(31,Rt,2,1,"div",7),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),i(35,"div",4),e(36,`
              `),i(37,"div",5),e(38,`
                `),i(39,"label",6),e(40,"Created At:"),n(),e(41,`
                `),d(42,wt,3,3,"div",7),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),i(46,"div",4),e(47,`
              `),i(48,"div",5),e(49,`
                `),i(50,"label",6),e(51,"Updated At:"),n(),e(52,`
                `),d(53,Pt,3,3,"div",7),e(54,`
              `),n(),e(55,`
            `),n(),e(56,`
          `),n(),e(57,`
          `),i(58,"div",8),e(59,`
            `),i(60,"button",9),e(61,"Cancel"),n(),e(62,`
          `),n(),e(63,`
        `),n(),e(64,`

      `),n(),e(65,`
    `),n(),e(66,`
  `),n(),e(67,`
`),n()),t&2&&(l("ngIf",m.mProgress()),a(20),l("ngIf",m.item.name),a(11),l("ngIf",m.item.type),a(11),l("ngIf",m.item.created_at),a(11),l("ngIf",m.item.updated_at))},dependencies:[b,E,N,I,F,T,R,J],encapsulation:2})}};var Nt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:me,data:{title:"Roles"}},{path:"create",component:ae,data:{title:"Roles / Create"}},{path:"edit/:id",component:le,data:{title:"Roles / Edit"}},{path:"show/:id",component:se,data:{title:"Roles / Show"}}],de=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=W({type:o})}static{this.\u0275inj=G({imports:[K,ve.forChild(Nt),ve]})}};var Je=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=W({type:o})}static{this.\u0275inj=G({imports:[K,de,Ge,Oe,Be,De,je,qe,He,Ue,Ae]})}};export{Je as RoleModule};
