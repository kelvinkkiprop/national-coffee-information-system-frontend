import{a as q}from"./chunk-47CWYOGV.js";import{a as nt}from"./chunk-D5MIKHAE.js";import{b as j,c as S,d as G,e as $,f as Qe,g as Ye,h as U,i as le,j as W,k as H,l as de,m as se,n as pe,o as ce,p as Je}from"./chunk-JSR5FKFU.js";import{a as M}from"./chunk-4MT6PD6W.js";import{c as k,e as N}from"./chunk-CPWY5AIC.js";import{$ as je,Ca as We,Da as He,Ea as ze,G as Ce,Ja as Ke,M as Oe,R as Be,X as T,Y as F,_ as Ve,c as V,d as h,e as E,g as re,ia as Ge,j as ae,ka as w,la as P,na as $e,ta as Ue,v as oe,x as me,y as I}from"./chunk-JHTOCNXX.js";import{Bc as K,Cb as l,Cc as Q,Db as i,Eb as n,Fb as _,Fc as B,Na as Me,Ob as A,Sa as m,Sb as g,T as J,Ub as s,aa as L,ab as x,ba as R,cc as O,fb as b,gb as X,hc as e,ic as u,jc as Le,kc as C,lb as d,lc as ee,ma as y,mc as te,nc as ie,rc as z,sc as ne,vc as Se,wb as Z,wc as f,xb as qe,xc as Re,yb as De,yc as Ae}from"./chunk-MHSS2KTR.js";import{e as it}from"./chunk-2WH2EVR6.js";var ue=r=>({"is-invalid":r});function rt(r,a){r&1&&_(0,"app-progress")}function at(r,a){if(r&1&&(i(0,"option",23),e(1),n()),r&2){let t=a.$implicit;l("value",z(t.id)),m(),u(t.name)}}function ot(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function mt(r,a){if(r&1&&(i(0,"div",24),e(1,`
                  `),d(2,ot,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("user_id"))==null||t.errors==null?null:t.errors.required)}}function lt(r,a){if(r&1&&(i(0,"option",23),e(1),n()),r&2){let t=a.$implicit;l("value",z(t.id)),m(),u(t.name)}}function dt(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function st(r,a){if(r&1&&(i(0,"div",24),e(1,`
                  `),d(2,dt,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("stage_id"))==null||t.errors==null?null:t.errors.required)}}function pt(r,a){if(r&1){let t=A();i(0,"div",28),e(1,`
                    `),i(2,"input",29),g("change",function(p){let c=L(t).$implicit,v=s(2);return R(v.onDeliveryChange(c.id,p))}),n(),e(3,`
                    `),i(4,"label",30),e(5),n(),e(6,`
                  `),n()}if(r&2){let t=a.$implicit,o=s(2);m(2),l("id","delivery_"+t.id)("checked",o.mSelectedDeliveries.includes(t.id)),m(2),l("for","delivery_"+t.id),m(),u(t.delivery_number)}}function ct(r,a){if(r&1&&(i(0,"div",5),e(1,`
              `),i(2,"div",6),e(3,`
                `),i(4,"label",25),e(5,"Coffee Deliveries:"),n(),e(6,`
                `),i(7,"div",26),e(8,`
                  `),d(9,pt,7,4,"div",27),e(10,`
                `),n(),e(11,`
              `),n(),e(12,`
            `),n()),r&2){let t=s();m(9),l("ngForOf",t.mDeliveries)}}function ut(r,a){if(r&1){let t=A();i(0,"div",28),e(1,`
                    `),i(2,"input",29),g("change",function(p){let c=L(t).$implicit,v=s(2);return R(v.onLotChange(c.id,p))}),n(),e(3,`
                    `),i(4,"label",30),e(5),n(),e(6,`
                  `),n()}if(r&2){let t=a.$implicit,o=s(2);m(2),l("id","lot_"+t.id)("checked",o.mSelectedLots.includes(t.id)),m(2),l("for","lot_"+t.id),m(),u(t.lot_number)}}function xt(r,a){if(r&1&&(i(0,"div",5),e(1,`
              `),i(2,"div",6),e(3,`
                `),i(4,"label",25),e(5,"Coffee Lots:"),n(),e(6,`
                `),i(7,"div",26),e(8,`
                  `),d(9,ut,7,4,"div",27),e(10,`
                `),n(),e(11,`
              `),n(),e(12,`
            `),n()),r&2){let t=s();m(9),l("ngForOf",t.mLots)}}function _t(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function ft(r,a){if(r&1&&(i(0,"div",24),e(1,`
                  `),d(2,_t,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("grade").errors)==null?null:t.required)}}function vt(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function gt(r,a){if(r&1&&(i(0,"div",24),e(1,`
                  `),d(2,vt,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("quantity").errors)==null?null:t.required)}}var xe=class r{constructor(a,t,o,p,c){this.mCoffeeTransactionService=a;this.mToastrService=t;this.mAppContextService=o;this.router=p;this.fb=c;this.mProgress=y(!1);this.mSelectedDeliveries=[];this.mSelectedLots=[];this.itemForm=this.fb.group({user_id:["",S.required],stage_id:["",S.required],delivery_id:[[]],lot_id:[[]],grade:["",S.required],quantity:["",S.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(a){this.mProgress.set(!0),a.delivery_ids=this.mSelectedDeliveries,a.lot_ids=this.mSelectedLots,this.mCoffeeTransactionService.createItem(a).subscribe({next:t=>{t&&(this.mToastrService.success(t.message),this.router.navigateByUrl("/coffee-transactions"),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeeTransactionService.unpaginatedItems().subscribe({next:a=>{a&&(this.mUsers=a.data.users,this.mStages=a.data.stages,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onStageChange(a){let t=a.value;this.mProgress.set(!0),this.mCoffeeTransactionService.filterLotsAndDeliveries(t).subscribe({next:o=>{o&&(this.mDeliveries=o.data.coffee_deliveries,this.mLots=o.data.coffee_lots,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onDeliveryChange(a,t){t.target.checked?this.mSelectedDeliveries.includes(a)||this.mSelectedDeliveries.push(a):this.mSelectedDeliveries=this.mSelectedDeliveries.filter(p=>p!==a),this.itemForm.patchValue({delivery_id:this.mSelectedDeliveries})}onLotChange(a,t){t.target.checked?this.mSelectedLots.includes(a)||this.mSelectedLots.push(a):this.mSelectedLots=this.mSelectedLots.filter(p=>p!==a),this.itemForm.patchValue({delivery_id:this.mSelectedDeliveries})}static{this.\u0275fac=function(t){return new(t||r)(x(q),x(N),x(k),x(me),x(ce))}}static{this.\u0275cmp=b({type:r,selectors:[["app-create"]],standalone:!1,decls:95,vars:23,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","user_id",1,"col-form-label","required"],["formControlName","user_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","stage_id",1,"col-form-label","required"],["formControlName","stage_id","type","text",1,"form-control",3,"change","ngClass"],["class","col-md-12",4,"ngIf"],[1,"col-md-6"],["for","grade",1,"col-form-label","required"],["formControlName","grade","type","text",1,"form-control",3,"ngClass"],["for","quantity",1,"col-form-label","required"],["formControlName","quantity","type","number",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-transactions","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-form-label","required"],[1,"row","container"],["class","col-md-4 form-check",4,"ngFor","ngForOf"],[1,"col-md-4","form-check"],["type","checkbox",1,"form-check-input",3,"change","id","checked"],[1,"form-check-label",3,"for"]],template:function(t,o){if(t&1&&(d(0,rt,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),g("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`

          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"User:"),n(),e(19,`
                `),i(20,"select",8),e(21,`
                  `),i(22,"option",9),e(23,"--- Select user ---"),n(),e(24,`
                  `),d(25,at,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,mt,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),i(32,"div",5),e(33,`
              `),i(34,"div",6),e(35,`
                `),i(36,"label",12),e(37,"Stage:"),n(),e(38,`
                `),i(39,"select",13),g("change",function(c){return o.onStageChange(c.target)}),e(40,`
                  `),i(41,"option",9),e(42,"--- Select stage ---"),n(),e(43,`
                  `),d(44,lt,2,3,"option",10),e(45,`
                `),n(),e(46,`
                `),d(47,st,4,1,"div",11),e(48,`
              `),n(),e(49,`
            `),n(),e(50,`
            `),d(51,ct,13,1,"div",14),e(52,`
             `),d(53,xt,13,1,"div",14),e(54,`
            `),i(55,"div",15),e(56,`
              `),i(57,"div",6),e(58,`
                `),i(59,"label",16),e(60,"Grade:"),n(),e(61,`
                `),_(62,"input",17),e(63,`
                `),d(64,ft,4,1,"div",11),e(65,`
              `),n(),e(66,`
            `),n(),e(67,`
            `),i(68,"div",15),e(69,`
              `),i(70,"div",6),e(71,`
                `),i(72,"label",18),e(73,"Quantity (Kg):"),n(),e(74,`
                `),_(75,"input",19),e(76,`
                `),d(77,gt,4,1,"div",11),e(78,`
              `),n(),e(79,`
            `),n(),e(80,`
          `),n(),e(81,`

          `),i(82,"div",20),e(83,`
            `),i(84,"button",21),e(85,"Cancel"),n(),e(86,`
            `),i(87,"button",22),e(88,"Submit"),n(),e(89,`
          `),n(),e(90,`

        `),n(),e(91,`

      `),n(),e(92,`
    `),n(),e(93,`
  `),n(),e(94,`
`),n()),t&2){let p,c,v,D,ke,Ne;l("ngIf",o.mProgress()),m(9),l("formGroup",o.itemForm),m(11),l("ngClass",f(15,ue,((p=o.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("user_id"))==null?null:p.dirty)||((p=o.itemForm.get("user_id"))==null?null:p.touched)))),m(5),l("ngForOf",o.mUsers),m(3),l("ngIf",((c=o.itemForm.get("user_id"))==null?null:c.invalid)&&(((c=o.itemForm.get("user_id"))==null?null:c.dirty)||((c=o.itemForm.get("user_id"))==null?null:c.touched))),m(11),l("ngClass",f(17,ue,((v=o.itemForm.get("stage_id"))==null?null:v.invalid)&&(((v=o.itemForm.get("stage_id"))==null?null:v.dirty)||((v=o.itemForm.get("stage_id"))==null?null:v.touched)))),m(5),l("ngForOf",o.mStages),m(3),l("ngIf",((D=o.itemForm.get("stage_id"))==null?null:D.invalid)&&(((D=o.itemForm.get("stage_id"))==null?null:D.dirty)||((D=o.itemForm.get("stage_id"))==null?null:D.touched))),m(4),l("ngIf",((ke=o.itemForm.get("stage_id"))==null?null:ke.value)==1),m(2),l("ngIf",((Ne=o.itemForm.get("stage_id"))==null?null:Ne.value)!=1),m(9),l("ngClass",f(19,ue,o.itemForm.get("grade").invalid&&(o.itemForm.get("grade").dirty||o.itemForm.get("grade").touched))),m(2),l("ngIf",o.itemForm.get("grade").invalid&&(o.itemForm.get("grade").dirty||o.itemForm.get("grade").touched)),m(11),l("ngClass",f(21,ue,o.itemForm.get("quantity").invalid&&(o.itemForm.get("quantity").dirty||o.itemForm.get("quantity").touched))),m(2),l("ngIf",o.itemForm.get("quantity").invalid&&(o.itemForm.get("quantity").dirty||o.itemForm.get("quantity").touched)),m(10),l("disabled",o.itemForm.invalid)}},dependencies:[V,h,E,I,M,T,F,w,P,U,se,pe,j,le,de,G,$,H,W],encapsulation:2})}};var Pe=r=>({"is-invalid":r});function St(r,a){r&1&&_(0,"app-progress")}function Ct(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function yt(r,a){if(r&1&&(i(0,"div",19),e(1,`
                  `),d(2,Ct,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("id").errors)==null?null:t.required)}}function bt(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function ht(r,a){if(r&1&&(i(0,"div",19),e(1,`
                  `),d(2,bt,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("name").errors)==null?null:t.required)}}function Et(r,a){if(r&1&&(i(0,"option",20),e(1),n()),r&2){let t=a.$implicit;l("value",z(t.id)),m(),u(t.name)}}function It(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Tt(r,a){if(r&1&&(i(0,"div",19),e(1,`
                  `),d(2,It,2,0,"div",0),e(3,`
                `),n()),r&2){let t,o=s();m(2),l("ngIf",(t=o.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}var _e=class r{constructor(a,t,o,p,c,v){this.mCoffeeTransactionService=a;this.mToastrService=t;this.mAppContextService=o;this.router=p;this.fb=c;this.route=v;this.mProgress=y(!1);this.item={};this.itemForm=this.fb.group({id:["",S.required],name:["",S.required],type_id:["",S.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeeTransactionService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t={id:this.item.id,name:a.name,type_id:a.type_id};this.mProgress.set(!0),this.mCoffeeTransactionService.updateItem(t).subscribe({next:o=>{o&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/coffee-transactions"),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeeTransactionService.unpaginatedItems().subscribe({next:a=>{a&&(this.mRoleTypes=a.data.role_types,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(q),x(N),x(k),x(me),x(ce),x(oe))}}static{this.\u0275cmp=b({type:r,selectors:[["app-edit"]],standalone:!1,decls:72,vars:19,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/coffee-transactions","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(t,o){if(t&1&&(d(0,St,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),g("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`

          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Id:"),n(),e(19,`
                `),i(20,"input",8),ie("ngModelChange",function(c){return te(o.item.id,c)||(o.item.id=c),c}),n(),e(21,`
                `),d(22,yt,4,1,"div",9),e(23,`
              `),n(),e(24,`
            `),n(),e(25,`
            `),i(26,"div",5),e(27,`
              `),i(28,"div",6),e(29,`
                `),i(30,"label",10),e(31,"Name:"),n(),e(32,`
                `),i(33,"input",11),ie("ngModelChange",function(c){return te(o.item.name,c)||(o.item.name=c),c}),n(),e(34,`
                `),d(35,ht,4,1,"div",9),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
            `),i(39,"div",5),e(40,`
              `),i(41,"div",6),e(42,`
                `),i(43,"label",12),e(44,"Type:"),n(),e(45,`
                `),i(46,"select",13),ie("ngModelChange",function(c){return te(o.item.type_id,c)||(o.item.type_id=c),c}),e(47,`
                  `),i(48,"option",14),e(49,"--- Select type ---"),n(),e(50,`
                  `),d(51,Et,2,3,"option",15),e(52,`
                `),n(),e(53,`
                `),d(54,Tt,4,1,"div",9),e(55,`
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
`),n()),t&2){let p,c;l("ngIf",o.mProgress()),m(9),l("formGroup",o.itemForm),m(11),ee("ngModel",o.item.id),l("ngClass",f(13,Pe,o.itemForm.get("id").invalid&&(o.itemForm.get("id").dirty||o.itemForm.get("id").touched))),m(2),l("ngIf",o.itemForm.get("id").invalid&&(o.itemForm.get("id").dirty||o.itemForm.get("id").touched)),m(11),ee("ngModel",o.item.name),l("ngClass",f(15,Pe,o.itemForm.get("name").invalid&&(o.itemForm.get("name").dirty||o.itemForm.get("name").touched))),m(2),l("ngIf",o.itemForm.get("name").invalid&&(o.itemForm.get("name").dirty||o.itemForm.get("name").touched)),m(11),ee("ngModel",o.item.type_id),l("ngClass",f(17,Pe,((p=o.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("type_id"))==null?null:p.dirty)||((p=o.itemForm.get("type_id"))==null?null:p.touched)))),m(5),l("ngForOf",o.mRoleTypes),m(3),l("ngIf",((c=o.itemForm.get("type_id"))==null?null:c.invalid)&&(((c=o.itemForm.get("type_id"))==null?null:c.dirty)||((c=o.itemForm.get("type_id"))==null?null:c.touched))),m(10),l("disabled",o.itemForm.invalid)}},dependencies:[V,h,E,I,M,T,F,w,P,U,se,pe,j,le,de,G,$,H,W],encapsulation:2})}};var et=it(nt());var Ft=r=>({"is-invalid":r}),Ze=()=>[1],wt=r=>["/licenses/process",r],Pt=(r,a,t)=>({"bg-dark":r,"bg-warning":a,"bg-success":t}),kt=(r,a)=>({active:r,disabled:a});function Nt(r,a){r&1&&_(0,"app-progress")}function Mt(r,a){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function qt(r,a){if(r&1&&(i(0,"div",16),e(1,`
                  `),d(2,Mt,2,0,"div",1),e(3,`
                `),n()),r&2){let t=s();m(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function Dt(r,a){if(r&1){let t=A();i(0,"button",30),g("click",function(){L(t);let p=s().$implicit,c=s(2);return R(c.onDelete(p))}),_(1,"i",31),n()}}function Lt(r,a){if(r&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),n(),e(4,`
                `),i(5,"td")(6,"a",22),e(7),n()(),e(8,`
                `),i(9,"td"),e(10),n(),e(11,`
                `),i(12,"td"),e(13),n(),e(14,`
                `),i(15,"td")(16,"span",23),e(17),n()(),e(18,`
                `),i(19,"td"),e(20),K(21,"date"),n(),e(22,`
                `),i(23,"td"),e(24,`
                  `),i(25,"div",24),e(26,`
                    `),i(27,"button",25),_(28,"i",26),n(),e(29,`
                    `),i(30,"button",27),e(31," "),_(32,"i",28),n(),e(33,`
                    `),d(34,Dt,2,0,"button",29),e(35,`
                  `),n(),e(36,`
                `),n(),e(37,`
              `),n()),r&2){let t=a.$implicit,o=a.index,p=s(2);m(3),Le("",p.mPageFrom+o,"."),m(3),l("routerLink",ne("/coffee-transactions/show/",t.id)),m(),u(t.traceability_mark),m(3),u(t.transaction_number),m(3),u(t.user==null?null:t.user.name),m(3),l("routerLink",p.mAppContextService.hasTypes(Se(17,Ze))?f(18,wt,t.id):null)("ngClass",Ae(20,Pt,t.stage_id==1,t.stage_id==2,t.stage_id==3)),m(),u(t.stage==null?null:t.stage.alias),m(3),u(Q(21,15,t.created_at)),m(7),l("routerLink",ne("/coffee-transactions/show/",t.id)),m(3),l("routerLink",ne("/coffee-transactions/edit/",t.id)),m(4),l("ngIf",p.mAppContextService.hasRoles(Se(24,Ze)))}}function Rt(r,a){if(r&1&&(i(0,"div",17),e(1,`
          `),i(2,"table",18),e(3,`
            `),i(4,"thead",19),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",20),e(9,"#"),n(),e(10,`
                `),i(11,"th",20),e(12,"Traceability Mark"),n(),e(13,`
                `),i(14,"th",20),e(15,"Transaction No."),n(),e(16,`
                `),i(17,"th",20),e(18,"User"),n(),e(19,`
                `),i(20,"th",20),e(21,"Stage"),n(),e(22,`
                `),i(23,"th",20),e(24,"Created"),n(),e(25,`
                `),i(26,"th",20),e(27,"Action"),n(),e(28,`
              `),n(),e(29,`
            `),n(),e(30,`
            `),i(31,"tbody"),e(32,`
              `),d(33,Lt,38,25,"tr",21),e(34,`
            `),n(),e(35,`
          `),n(),e(36,`
        `),n()),r&2){let t=s();m(33),l("ngForOf",t.mTransactions)}}function At(r,a){if(r&1){let t=A();i(0,"li",34),e(1,`
              `),i(2,"a",35),g("click",function(){let p=L(t).$implicit,c=s(2);return R(c.onChangePage(p.url))}),n(),e(3,`
            `),n()}if(r&2){let t=a.$implicit;l("ngClass",Re(2,kt,t.active,!t.url)),m(2),l("innerHTML",t.label,Me)}}function Ot(r,a){if(r&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",32),e(3,`
            `),d(4,At,4,5,"li",33),e(5,`
          `),n(),e(6,`
        `),n()),r&2){let t=s();m(4),l("ngForOf",t.links)}}function Bt(r,a){r&1&&(e(0,`
          `),i(1,"p",36),e(2,"No items"),n(),e(3,`
        `))}var fe=class r{constructor(a,t,o){this.mCoffeeTransactionService=a;this.mToastrService=t;this.mAppContextService=o;this.mTransactions={};this.links=[];this.mProgress=y(!1)}ngOnInit(){this.index(),this.search_term=new Ye("",S.required),this.itemForm=new Qe({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mCoffeeTransactionService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mTransactions=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mCoffeeTransactionService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mTransactions=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(a){et.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.delivery_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(o=>{o.isConfirmed&&(this.mProgress.set(!0),this.mCoffeeTransactionService.deleteItem(a).subscribe({next:p=>{p&&(this.mTransactions=this.mTransactions.filter(c=>c.id!==a.id),this.mToastrService.warning(p.message),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.warning(p.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mCoffeeTransactionService.searchItems(a).subscribe({next:t=>{t&&(this.mTransactions=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mCoffeeTransactionService.searchItems(a).subscribe({next:t=>{t&&(this.mTransactions=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(q),x(N),x(k))}}static{this.\u0275cmp=b({type:r,selectors:[["app-index"]],standalone:!1,decls:54,vars:10,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/coffee-transactions/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm",3,"disabled"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"badge","rounded-pill",3,"routerLink","ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,o){if(t&1&&(d(0,Nt,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),_(15,"i",7),e(16,` Add
            `),n(),e(17,`
          `),n(),e(18,`
          `),i(19,"div"),e(20,`
            `),i(21,"form",8),g("ngSubmit",function(){return o.onSearch(o.itemForm.value)}),e(22,`
              `),i(23,"div",9),e(24,`
                `),_(25,"input",10),e(26,`
                `),i(27,"div",11),e(28,`
                  `),i(29,"button",12),e(30,`
                    `),_(31,"i",13),e(32,`
                  `),n(),e(33,`
                `),n(),e(34,`
                `),d(35,qt,4,1,"div",14),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
      `),i(42,"c-card-body"),e(43,`

        `),d(44,Rt,37,1,"div",15),e(45,`

        `),d(46,Ot,7,1,"div",1),e(47,`

        `),d(48,Bt,4,0,"ng-template",null,0,B),e(50,`

      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),t&2){let p=O(49);l("ngIf",o.mProgress()),m(21),l("formGroup",o.itemForm),m(4),l("ngClass",f(8,Ft,o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched))),m(4),l("disabled",o.itemForm.invalid),m(6),l("ngIf",o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched)),m(9),l("ngIf",o.mTransactions.length>0)("ngIfElse",p),m(2),l("ngIf",o.links)}},dependencies:[V,h,E,I,M,T,F,Ve,w,P,He,We,U,j,G,$,H,W,re],encapsulation:2})}};function Vt(r,a){r&1&&_(0,"app-progress")}function jt(r,a){if(r&1&&(i(0,"div",15),e(1),n()),r&2){let t=s();m(),u(t.item.traceability_mark)}}function Gt(r,a){if(r&1&&(i(0,"div",15),e(1),n()),r&2){let t=s();m(),u(t.item.user==null?null:t.item.user.name)}}function $t(r,a){if(r&1&&(i(0,"div",15),e(1),n()),r&2){let t=s();m(),u(t.item.stage==null?null:t.item.stage.name)}}function Ut(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s(3);m(),C("Grade: ",t.item.grade," (",t.item.quantity," kg)")}}function Wt(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s().$implicit;m(),C("Grade: ",t.grade," (",t.quantity,"kg)")}}function Ht(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s().$implicit;m(),C("Grade: ",t.grade," (",t.quantity,"kg)")}}function zt(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s().$implicit;m(),C("Plot: ",t.plot.size,"ha (",t.quantity," kg)")}}function Kt(r,a){if(r&1&&(i(0,"td"),e(1,`
                                              `),i(2,"div",19),e(3),n(),e(4,`
                                              `),i(5,"div",15),e(6,`
                                                `),d(7,zt,2,2,"small",1),e(8,`
                                              `),n(),e(9,`
                                            `),n()),r&2){let t=a.$implicit;m(3),u(t.delivery_number),m(4),l("ngIf",t.plot)}}function Qt(r,a){if(r&1&&(i(0,"table",22),e(1,`
                                        `),i(2,"tbody"),e(3,`
                                          `),i(4,"tr"),e(5,`
                                            `),d(6,Kt,10,2,"td",20),e(7,`
                                          `),n(),e(8,`
                                        `),n(),e(9,`
                                      `),n()),r&2){let t=s().$implicit;m(6),l("ngForOf",t==null?null:t.deliveries)}}function Yt(r,a){if(r&1&&(i(0,"td"),e(1,`
                                      `),i(2,"div",19),e(3),n(),e(4,`
                                      `),i(5,"div",15),e(6,`
                                        `),d(7,Ht,2,2,"small",1),e(8,`
                                      `),n(),e(9,`
                                      `),d(10,Qt,10,1,"table",21),e(11,`
                                    `),n()),r&2){let t=a.$implicit,o=s(2).$implicit;m(3),u(o.lot_number),m(4),l("ngIf",o.grade),m(3),l("ngIf",t==null?null:t.deliveries)}}function Jt(r,a){if(r&1&&(i(0,"table",22),e(1,`
                                `),i(2,"tbody"),e(3,`
                                  `),i(4,"tr"),e(5,`
                                    `),d(6,Yt,12,3,"td",20),e(7,`
                                  `),n(),e(8,`
                                `),n(),e(9,`
                              `),n()),r&2){let t=s().$implicit;m(6),l("ngForOf",t==null?null:t.parent_lots)}}function Xt(r,a){if(r&1&&(i(0,"td"),e(1,`
                              `),e(2,`
                              `),i(3,"div",19),e(4),n(),e(5,`
                              `),i(6,"div",15),e(7,`
                                `),d(8,Wt,2,2,"small",1),e(9,`
                              `),n(),e(10,`
                              `),d(11,Jt,10,1,"table",21),e(12,`
                            `),n()),r&2){let t=a.$implicit;m(4),u(t.lot_number),m(4),l("ngIf",t.grade),m(3),l("ngIf",t.parent_lots)}}function Zt(r,a){if(r&1&&(i(0,"div",17),e(1,`
                      `),i(2,"table",18),e(3,`
                        `),i(4,"tbody"),e(5,`
                          `),i(6,"tr"),e(7,`
                            `),i(8,"td"),e(9,`
                              `),i(10,"div",19),e(11),n(),e(12,`
                              `),i(13,"div",15),e(14,`
                                `),d(15,Ut,2,2,"small",1),e(16,`
                              `),n(),e(17,`
                            `),n(),e(18,`
                          `),n(),e(19,`
                          `),i(20,"tr"),e(21,`
                            `),d(22,Xt,13,3,"td",20),e(23,`
                          `),n(),e(24,`
                        `),n(),e(25,`
                      `),n(),e(26,`
                    `),n()),r&2){let t=s(2);m(8),Z("colspan",(t.item.lot==null||t.item.lot.parent_lots==null?null:t.item.lot.parent_lots.length)||2),m(3),u(t.item.lot.lot_number),m(4),l("ngIf",t.item.grade),m(7),l("ngForOf",t.item.lot==null?null:t.item.lot.parent_lots)}}function ei(r,a){r&1&&(e(0,`
                      `),i(1,"p",23),e(2,"No items"),n(),e(3,`
                    `))}function ti(r,a){if(r&1&&(e(0,`
                  `),e(1,`
                    `),d(2,Zt,27,4,"div",16),e(3,`
                    `),d(4,ei,4,0,"ng-template",null,0,B),e(6,`
                  `)),r&2){let t=O(5),o=s();m(2),l("ngIf",(o.item.lot==null||o.item.lot.parent_lots==null?null:o.item.lot.parent_lots.length)>0)("ngIfElse",t)}}function ii(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s(3);m(),C("Grade: ",t.item.grade," (",t.item.quantity," kg)")}}function ni(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s().$implicit;m(),C("Grade: ",t.grade," (",t.quantity,"kg)")}}function ri(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s().$implicit;m(),C("Plot: ",t.plot.size,"ha (",t.quantity," kg)")}}function ai(r,a){if(r&1&&(i(0,"td"),e(1,`
                                      `),i(2,"div",19),e(3),n(),e(4,`
                                        `),i(5,"div",15),e(6,`
                                          `),e(7,`
                                          `),d(8,ri,2,2,"small",1),e(9,`
                                        `),n(),e(10,`
                                    `),n()),r&2){let t=a.$implicit;m(3),u(t.delivery_number),m(5),l("ngIf",t.plot)}}function oi(r,a){if(r&1&&(i(0,"table",22),e(1,`
                                `),i(2,"tbody"),e(3,`
                                  `),i(4,"tr"),e(5,`
                                    `),d(6,ai,11,2,"td",20),e(7,`
                                  `),n(),e(8,`
                                `),n(),e(9,`
                              `),n()),r&2){let t=s().$implicit;m(6),l("ngForOf",t.deliveries)}}function mi(r,a){if(r&1&&(i(0,"td"),e(1,`
                              `),i(2,"div",19),e(3),n(),e(4,`
                              `),i(5,"div",15),e(6,`
                                `),d(7,ni,2,2,"small",1),e(8,`
                              `),n(),e(9,`
                              `),d(10,oi,10,1,"table",21),e(11,`
                            `),n()),r&2){let t=a.$implicit;m(3),u(t.lot_number),m(4),l("ngIf",t.grade),m(3),l("ngIf",t.deliveries)}}function li(r,a){if(r&1&&(i(0,"div",17),e(1,`
                      `),i(2,"table",18),e(3,`
                        `),i(4,"tbody"),e(5,`
                          `),i(6,"tr"),e(7,`
                            `),i(8,"td"),e(9,`
                              `),i(10,"div",19),e(11),n(),e(12,`
                              `),i(13,"div",15),e(14,`
                                `),d(15,ii,2,2,"small",1),e(16,`
                              `),n(),e(17,`
                            `),n(),e(18,`
                          `),n(),e(19,`
                          `),i(20,"tr"),e(21,`
                            `),d(22,mi,12,3,"td",20),e(23,`
                          `),n(),e(24,`
                        `),n(),e(25,`
                      `),n(),e(26,`
                    `),n()),r&2){let t=s(2);m(8),Z("colspan",(t.item.lot==null||t.item.lot.parent_lots==null?null:t.item.lot.parent_lots.length)||2),m(3),u(t.item.lot.lot_number),m(4),l("ngIf",t.item.grade),m(7),l("ngForOf",t.item.lot==null?null:t.item.lot.parent_lots)}}function di(r,a){r&1&&(e(0,`
                      `),i(1,"p",23),e(2,"No items"),n(),e(3,`
                    `))}function si(r,a){if(r&1&&(e(0,`
                  `),e(1,`
                    `),d(2,li,27,4,"div",16),e(3,`
                    `),d(4,di,4,0,"ng-template",null,0,B),e(6,`
                  `)),r&2){let t=O(5),o=s();m(2),l("ngIf",(o.item.lot==null||o.item.lot.parent_lots==null?null:o.item.lot.parent_lots.length)>0)("ngIfElse",t)}}function pi(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s(3);m(),C("Grade: ",t.item.grade," (",t.item.quantity," kg)")}}function ci(r,a){if(r&1&&(i(0,"small"),e(1),n()),r&2){let t=s().$implicit;m(),C("plot: ",t.plot.size," (",t.quantity,"kg)")}}function ui(r,a){if(r&1&&(i(0,"td"),e(1,`
                              `),i(2,"div",19),e(3),n(),e(4,`
                              `),i(5,"div",15),e(6,`
                                `),d(7,ci,2,2,"small",1),e(8,`
                              `),n(),e(9,`
                            `),n()),r&2){let t=a.$implicit;m(3),u(t.delivery_number),m(4),l("ngIf",t.plot)}}function xi(r,a){if(r&1&&(i(0,"div",17),e(1,`
                      `),i(2,"table",18),e(3,`
                        `),i(4,"tbody"),e(5,`
                          `),i(6,"tr"),e(7,`
                            `),i(8,"td"),e(9,`
                              `),i(10,"div",19),e(11),n(),e(12,`
                              `),i(13,"div",15),e(14,`
                                `),d(15,pi,2,2,"small",1),e(16,`
                              `),n(),e(17,`
                            `),n(),e(18,`
                          `),n(),e(19,`
                          `),i(20,"tr"),e(21,`
                            `),d(22,ui,10,2,"td",20),e(23,`
                          `),n(),e(24,`
                        `),n(),e(25,`
                      `),n(),e(26,`
                    `),n()),r&2){let t=s(2);m(8),Z("colspan",(t.item.lot==null?null:t.item.lot.deliveries.length)||2),m(3),u(t.item.lot.lot_number),m(4),l("ngIf",t.item.grade),m(7),l("ngForOf",t.item.lot==null?null:t.item.lot.deliveries)}}function _i(r,a){r&1&&(e(0,`
                      `),i(1,"p",23),e(2,"No items"),n(),e(3,`
                    `))}function fi(r,a){if(r&1&&(e(0,`
                    `),e(1,`
                     `),e(2,`
                    `),d(3,xi,27,4,"div",16),e(4,`
                    `),d(5,_i,4,0,"ng-template",null,0,B),e(7,`
                  `)),r&2){let t=O(6),o=s();m(3),l("ngIf",(o.item.lot==null||o.item.lot.deliveries==null?null:o.item.lot.deliveries.length)>0)("ngIfElse",t)}}function vi(r,a){if(r&1&&(i(0,"div",15),e(1),K(2,"date"),n()),r&2){let t=s();m(),u(Q(2,1,t.item.created_at))}}function gi(r,a){if(r&1&&(i(0,"div",15),e(1),K(2,"date"),n()),r&2){let t=s();m(),u(Q(2,1,t.item.updated_at))}}var ve=class r{constructor(a,t,o,p){this.mCoffeeTransactionService=a;this.mToastrService=t;this.mAppContextService=o;this.route=p;this.mProgress=y(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeeTransactionService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(q),x(N),x(k),x(oe))}}static{this.\u0275cmp=b({type:r,selectors:[["app-show"]],standalone:!1,decls:93,vars:8,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"border","p-4","mb-4"],[1,"float-none","w-auto"],[1,"text-bold1"],[1,"mt-3","text-end"],["routerLink","/coffee-transactions","type","button",1,"btn","btn-light"],[1,"text-muted"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"table-responsive"],[1,"table","table-bordered","table-striped","text-center"],[1,"text-success","fw-bold"],[4,"ngFor","ngForOf"],["class","table table-bordered text-center",4,"ngIf"],[1,"table","table-bordered","text-center"],[1,"p-5","text-center","text-muted"]],template:function(t,o){t&1&&(d(0,Vt,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div"),e(10,`
          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Traceability Mark:"),n(),e(19,`
                `),d(20,jt,2,1,"div",8),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),i(24,"div",5),e(25,`
              `),i(26,"div",6),e(27,`
                `),i(28,"label",7),e(29,"User:"),n(),e(30,`
                `),d(31,Gt,2,1,"div",8),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),i(35,"div",5),e(36,`
              `),i(37,"div",6),e(38,`
                `),i(39,"label",7),e(40,"Stage:"),n(),e(41,`
                `),d(42,$t,2,1,"div",8),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),i(46,"div",9),e(47,`
              `),i(48,"fieldset",10),e(49,`
                `),i(50,"legend",11)(51,"h6",12),e(52),n()(),e(53,`
                `),e(54,`
                  `),qe(55,ti,7,2)(56,si,7,2)(57,fi,8,2),n(),e(58,`
            `),n(),e(59,`
            `),i(60,"div",5),e(61,`
              `),i(62,"div",6),e(63,`
                `),i(64,"label",7),e(65,"Created At:"),n(),e(66,`
                `),d(67,vi,3,3,"div",8),e(68,`
              `),n(),e(69,`
            `),n(),e(70,`
            `),i(71,"div",5),e(72,`
              `),i(73,"div",6),e(74,`
                `),i(75,"label",7),e(76,"Updated At:"),n(),e(77,`
                `),d(78,gi,3,3,"div",8),e(79,`
              `),n(),e(80,`
            `),n(),e(81,`
          `),n(),e(82,`
          `),i(83,"div",13),e(84,`
            `),i(85,"button",14),e(86,"Cancel"),n(),e(87,`
          `),n(),e(88,`
        `),n(),e(89,`

      `),n(),e(90,`
    `),n(),e(91,`
  `),n(),e(92,`
`),n()),t&2&&(l("ngIf",o.mProgress()),m(20),l("ngIf",o.item.traceability_mark),m(11),l("ngIf",o.item.user),m(11),l("ngIf",o.item.stage),m(10),u(o.item.stage==null?null:o.item.stage.name),m(3),De(o.item.stage_id==3?55:o.item.stage_id==2?56:o.item.stage_id==1?57:-1),m(12),l("ngIf",o.item.created_at),m(11),l("ngIf",o.item.updated_at))},dependencies:[h,E,I,M,T,F,w,P,re],encapsulation:2})}};var Si=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:fe,data:{title:"Coffee Transactions"}},{path:"create",component:xe,data:{title:"Coffee Transactions / Create"}},{path:"edit/:id",component:_e,data:{title:"Coffee Transactions / Edit"}},{path:"show/:id",component:ve,data:{title:"Coffee Transactions / Show"}}],ge=class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=X({type:r})}static{this.\u0275inj=J({imports:[ae,Ce.forChild(Si),Ce]})}};var tt=class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=X({type:r})}static{this.\u0275inj=J({imports:[ae,ge,Ke,Be,je,Ge,$e,Ue,ze,Je,Oe]})}};export{tt as CoffeeTransactionModule};
