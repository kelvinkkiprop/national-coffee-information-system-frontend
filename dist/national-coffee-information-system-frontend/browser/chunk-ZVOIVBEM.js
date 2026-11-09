import{a as it}from"./chunk-D5MIKHAE.js";import{b as G,c as g,d as $,e as W,f as Qe,g as Ye,h as U,i as ae,j as z,k as K,l as le,m as se,n as de,o as pe,p as Je}from"./chunk-JSR5FKFU.js";import{a as q}from"./chunk-4MT6PD6W.js";import{a as S,c as _,e as N}from"./chunk-PNAX2R2V.js";import{$ as He,Ca as We,Da as Ue,Ea as ze,G as be,Ja as Ke,M as je,R as Le,X as T,Y as D,_ as me,c as H,d as V,e as F,g as ie,ia as Ve,j as ne,ka as w,la as P,na as Ge,o as Be,ta as $e,v as re,x as oe,y as I}from"./chunk-JHTOCNXX.js";import{Bc as A,Cb as l,Cc as L,Db as t,Dc as Oe,Eb as i,Fb as u,Fc as Re,Na as qe,Ob as he,S as Ne,Sa as a,Sb as C,T as Y,Ub as c,W as ye,aa as Ce,ab as f,ba as Se,cc as Me,fb as E,gb as J,hc as e,ic as v,jc as k,lb as s,lc as X,ma as b,mc as Z,nc as ee,rc as j,sc as te,vc as ke,wc as x,xc as Ae}from"./chunk-MHSS2KTR.js";import{e as tt}from"./chunk-2WH2EVR6.js";var y=class o{constructor(m,n){this.mAppContextService=m;this.http=n}allItems(){let m=`${S.base_url}/coffee-deliveries`;return this.http.get(m,this.mAppContextService.getHttpOptions())}createItem(m){let n=`${S.base_url}/coffee-deliveries`;return this.http.post(n,m,this.mAppContextService.getHttpOptions())}getOneItem(m){let n=`${S.base_url}/coffee-deliveries/${m}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}updateItem(m){let n=`${S.base_url}/coffee-deliveries/${m.id}`;return this.http.put(n,m,this.mAppContextService.getHttpOptions())}deleteItem(m){let n=`${S.base_url}/coffee-deliveries/${m.id}`;return this.http.delete(n,this.mAppContextService.getHttpOptions())}paginateItems(m){return this.http.get(m,this.mAppContextService.getHttpOptions())}searchItems(m){let n=`${S.base_url}/search-coffee-deliveries`;return this.http.post(n,m,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let m=`${S.base_url}/unpaginated-items-coffee-deliveries`;return this.http.get(m,this.mAppContextService.getHttpOptions())}filterFarmerPlots(m){let n=`${S.base_url}/filter-farmer-plots-coffee-deliveries/${m}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(n){return new(n||o)(ye(_),ye(Be))}}static{this.\u0275prov=Ne({token:o,factory:o.\u0275fac,providedIn:"root"})}};var h=o=>({"is-invalid":o});function nt(o,m){o&1&&u(0,"app-progress")}function rt(o,m){if(o&1&&(t(0,"option",35),e(1),i()),o&2){let n=m.$implicit;l("value",j(n.id)),a(),v(n.name)}}function ot(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function mt(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,ot,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("farmer_id"))==null||n.errors==null?null:n.errors.required)}}function at(o,m){if(o&1&&(t(0,"option",35),e(1),i()),o&2){let n=m.$implicit;l("value",j(n.id)),a(),k("",n.size," ha")}}function lt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function st(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,lt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("plot_id"))==null||n.errors==null?null:n.errors.required)}}function dt(o,m){if(o&1&&(t(0,"option",35),e(1),i()),o&2){let n=m.$implicit;l("value",j(n.id)),a(),v(n.name)}}function pt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function ct(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,pt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("coffee_species_id"))==null||n.errors==null?null:n.errors.required)}}function ft(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function ut(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,ft,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("harvest_date").errors)==null?null:n.required)}}function vt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function xt(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,vt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("harvest_season").errors)==null?null:n.required)}}function gt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function _t(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,gt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("delivery_date").errors)==null?null:n.required)}}function yt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ct(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,yt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("number_of_bags").errors)==null?null:n.required)}}function St(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function ht(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,St,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("quantity").errors)==null?null:n.required)}}function bt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Et(o,m){if(o&1&&(t(0,"div",36),e(1,`
                  `),s(2,bt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("price_per_kg").errors)==null?null:n.required)}}var ue=class o{constructor(m,n,r,d,p){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.router=d;this.fb=p;this.mProgress=b(!1);this.itemForm=this.fb.group({farmer_id:["",g.required],plot_id:["",g.required],coffee_species_id:["",g.required],harvest_date:["",g.required],harvest_season:["",g.required],delivery_date:["",g.required],number_of_bags:["",g.required],quantity:["",g.required],price_per_kg:["",g.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.createItem(m).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/coffee-deliveries"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeeDeliveryService.unpaginatedItems().subscribe({next:m=>{m&&(this.mFarmers=m.data.farmers,this.mPlots=m.data.plots,this.mCoffeeSpecies=m.data.coffee_species,this.mProgress.set(!1))},error:m=>{this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onFarmerChange(m){let n=m.value;this.mProgress.set(!0),this.mCoffeeDeliveryService.filterFarmerPlots(n).subscribe({next:r=>{r&&(this.mPlots=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(N),f(_),f(oe),f(pe))}}static{this.\u0275cmp=E({type:o,selectors:[["app-create"]],standalone:!1,decls:174,vars:42,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],[1,"mb-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","farmer_id",1,"col-form-label","required"],["formControlName","farmer_id","type","text",1,"form-control",3,"change","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","plot_id",1,"col-form-label","required"],["formControlName","plot_id","type","text",1,"form-control",3,"ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngClass"],["for","harvest_date",1,"col-form-label","required"],["formControlName","harvest_date","type","date",1,"form-control",3,"ngClass"],["for","harvest_season",1,"col-form-label","required"],["formControlName","harvest_season","type","text",1,"form-control",3,"ngClass"],["for","delivery_date",1,"col-form-label","required"],["formControlName","delivery_date","type","date",1,"form-control",3,"ngClass"],["for","number_of_bags",1,"col-form-label","required"],["formControlName","number_of_bags","type","number",1,"form-control",3,"ngClass"],["for","quantity",1,"col-form-label","required"],["formControlName","quantity","type","number",1,"form-control",3,"ngClass"],["for","price_per_kg",1,"col-form-label","required"],["formControlName","price_per_kg","type","number","step","0.01",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-deliveries","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(n,r){if(n&1&&(s(0,nt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",3),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"h6",5),e(14,"Records coffee delivered by farmers to cooperatives, collection centres or factories here."),i(),e(15,`
          `),i(),e(16,`
        `),i(),e(17,`
      `),i(),e(18,`
      `),t(19,"c-card-body"),e(20,`

        `),t(21,"form",6),C("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(22,`

          `),t(23,"div",7),e(24,`
            `),t(25,"div",8),e(26,`
              `),t(27,"div",9),e(28,`
                `),t(29,"label",10),e(30,"Farmer:"),i(),e(31,`
                `),t(32,"select",11),C("change",function(p){return r.onFarmerChange(p.target)}),e(33,`
                  `),t(34,"option",12),e(35,"--- Select farmer ---"),i(),e(36,`
                  `),s(37,rt,2,3,"option",13),e(38,`
                `),i(),e(39,`
                `),s(40,mt,4,1,"div",14),e(41,`
              `),i(),e(42,`
            `),i(),e(43,`
            `),t(44,"div",15),e(45,`
              `),t(46,"div",9),e(47,`
                `),t(48,"label",16),e(49,"Plot:"),i(),e(50,`
                `),t(51,"select",17),e(52,`
                  `),t(53,"option",12),e(54,"--- Select plot ---"),i(),e(55,`
                  `),s(56,at,2,3,"option",13),e(57,`
                `),i(),e(58,`
                `),s(59,st,4,1,"div",14),e(60,`
              `),i(),e(61,`
            `),i(),e(62,`
            `),t(63,"div",15),e(64,`
              `),t(65,"div",9),e(66,`
                `),t(67,"label",18),e(68,"Coffee Species:"),i(),e(69,`
                `),t(70,"select",19),e(71,`
                  `),t(72,"option",12),e(73,"--- Select species ---"),i(),e(74,`
                  `),s(75,dt,2,3,"option",13),e(76,`
                `),i(),e(77,`
                `),s(78,ct,4,1,"div",14),e(79,`
              `),i(),e(80,`
            `),i(),e(81,`
            `),t(82,"div",15),e(83,`
              `),t(84,"div",9),e(85,`
                `),t(86,"label",20),e(87,"Harvest Date:"),i(),e(88,`
                `),u(89,"input",21),e(90,`
                `),s(91,ut,4,1,"div",14),e(92,`
              `),i(),e(93,`
            `),i(),e(94,`
            `),t(95,"div",15),e(96,`
              `),t(97,"div",9),e(98,`
                `),t(99,"label",22),e(100,"Harvest Season:"),i(),e(101,`
                `),u(102,"input",23),e(103,`
                `),s(104,xt,4,1,"div",14),e(105,`
              `),i(),e(106,`
            `),i(),e(107,`
            `),t(108,"div",15),e(109,`
              `),t(110,"div",9),e(111,`
                `),t(112,"label",24),e(113,"Delivery Date:"),i(),e(114,`
                `),u(115,"input",25),e(116,`
                `),s(117,_t,4,1,"div",14),e(118,`
              `),i(),e(119,`
            `),i(),e(120,`
            `),t(121,"div",15),e(122,`
              `),t(123,"div",9),e(124,`
                `),t(125,"label",26),e(126,"Number of Bags:"),i(),e(127,`
                `),u(128,"input",27),e(129,`
                `),s(130,Ct,4,1,"div",14),e(131,`
              `),i(),e(132,`
            `),i(),e(133,`
            `),t(134,"div",15),e(135,`
              `),t(136,"div",9),e(137,`
                `),t(138,"label",28),e(139,"Quantity (Kg):"),i(),e(140,`
                `),u(141,"input",29),e(142,`
                `),s(143,ht,4,1,"div",14),e(144,`
              `),i(),e(145,`
            `),i(),e(146,`
            `),t(147,"div",15),e(148,`
              `),t(149,"div",9),e(150,`
                `),t(151,"label",30),e(152,"Price (Per Kg):"),i(),e(153,`
                `),u(154,"input",31),e(155,`
                `),s(156,Et,4,1,"div",14),e(157,`
              `),i(),e(158,`
            `),i(),e(159,`
          `),i(),e(160,`

          `),t(161,"div",32),e(162,`
            `),t(163,"button",33),e(164,"Cancel"),i(),e(165,`
            `),t(166,"button",34),e(167,"Submit"),i(),e(168,`
          `),i(),e(169,`

        `),i(),e(170,`

      `),i(),e(171,`
    `),i(),e(172,`
  `),i(),e(173,`
`),i()),n&2){let d,p,M,O,R,B;l("ngIf",r.mProgress()),a(21),l("formGroup",r.itemForm),a(11),l("ngClass",x(24,h,((d=r.itemForm.get("farmer_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("farmer_id"))==null?null:d.dirty)||((d=r.itemForm.get("farmer_id"))==null?null:d.touched)))),a(5),l("ngForOf",r.mFarmers),a(3),l("ngIf",((p=r.itemForm.get("farmer_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("farmer_id"))==null?null:p.dirty)||((p=r.itemForm.get("farmer_id"))==null?null:p.touched))),a(11),l("ngClass",x(26,h,((M=r.itemForm.get("plot_id"))==null?null:M.invalid)&&(((M=r.itemForm.get("plot_id"))==null?null:M.dirty)||((M=r.itemForm.get("plot_id"))==null?null:M.touched)))),a(5),l("ngForOf",r.mPlots),a(3),l("ngIf",((O=r.itemForm.get("plot_id"))==null?null:O.invalid)&&(((O=r.itemForm.get("plot_id"))==null?null:O.dirty)||((O=r.itemForm.get("plot_id"))==null?null:O.touched))),a(11),l("ngClass",x(28,h,((R=r.itemForm.get("coffee_species_id"))==null?null:R.invalid)&&(((R=r.itemForm.get("coffee_species_id"))==null?null:R.dirty)||((R=r.itemForm.get("coffee_species_id"))==null?null:R.touched)))),a(5),l("ngForOf",r.mCoffeeSpecies),a(3),l("ngIf",((B=r.itemForm.get("coffee_species_id"))==null?null:B.invalid)&&(((B=r.itemForm.get("coffee_species_id"))==null?null:B.dirty)||((B=r.itemForm.get("coffee_species_id"))==null?null:B.touched))),a(11),l("ngClass",x(30,h,r.itemForm.get("harvest_date").invalid&&(r.itemForm.get("harvest_date").dirty||r.itemForm.get("harvest_date").touched))),a(2),l("ngIf",r.itemForm.get("harvest_date").invalid&&(r.itemForm.get("harvest_date").dirty||r.itemForm.get("harvest_date").touched)),a(11),l("ngClass",x(32,h,r.itemForm.get("harvest_season").invalid&&(r.itemForm.get("harvest_season").dirty||r.itemForm.get("harvest_season").touched))),a(2),l("ngIf",r.itemForm.get("harvest_season").invalid&&(r.itemForm.get("harvest_season").dirty||r.itemForm.get("harvest_season").touched)),a(11),l("ngClass",x(34,h,r.itemForm.get("delivery_date").invalid&&(r.itemForm.get("delivery_date").dirty||r.itemForm.get("delivery_date").touched))),a(2),l("ngIf",r.itemForm.get("delivery_date").invalid&&(r.itemForm.get("delivery_date").dirty||r.itemForm.get("delivery_date").touched)),a(11),l("ngClass",x(36,h,r.itemForm.get("number_of_bags").invalid&&(r.itemForm.get("number_of_bags").dirty||r.itemForm.get("number_of_bags").touched))),a(2),l("ngIf",r.itemForm.get("number_of_bags").invalid&&(r.itemForm.get("number_of_bags").dirty||r.itemForm.get("number_of_bags").touched)),a(11),l("ngClass",x(38,h,r.itemForm.get("quantity").invalid&&(r.itemForm.get("quantity").dirty||r.itemForm.get("quantity").touched))),a(2),l("ngIf",r.itemForm.get("quantity").invalid&&(r.itemForm.get("quantity").dirty||r.itemForm.get("quantity").touched)),a(11),l("ngClass",x(40,h,r.itemForm.get("price_per_kg").invalid&&(r.itemForm.get("price_per_kg").dirty||r.itemForm.get("price_per_kg").touched))),a(2),l("ngIf",r.itemForm.get("price_per_kg").invalid&&(r.itemForm.get("price_per_kg").dirty||r.itemForm.get("price_per_kg").touched)),a(10),l("disabled",r.itemForm.invalid)}},dependencies:[H,V,F,I,q,T,D,me,w,P,U,se,de,G,ae,le,$,W,K,z],encapsulation:2})}};var Pe=o=>({"is-invalid":o});function Ft(o,m){o&1&&u(0,"app-progress")}function It(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Tt(o,m){if(o&1&&(t(0,"div",19),e(1,`
                  `),s(2,It,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("id").errors)==null?null:n.required)}}function Dt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function wt(o,m){if(o&1&&(t(0,"div",19),e(1,`
                  `),s(2,Dt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("name").errors)==null?null:n.required)}}function Pt(o,m){if(o&1&&(t(0,"option",20),e(1),i()),o&2){let n=m.$implicit;l("value",j(n.id)),a(),v(n.name)}}function Nt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function qt(o,m){if(o&1&&(t(0,"div",19),e(1,`
                  `),s(2,Nt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("type_id"))==null||n.errors==null?null:n.errors.required)}}var ve=class o{constructor(m,n,r,d,p,M){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.router=d;this.fb=p;this.route=M;this.mProgress=b(!1);this.item={};this.itemForm=this.fb.group({id:["",g.required],name:["",g.required],type_id:["",g.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeeDeliveryService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onSubmit(m){let n={id:this.item.id,name:m.name,type_id:m.type_id};this.mProgress.set(!0),this.mCoffeeDeliveryService.updateItem(n).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/coffee-deliveries"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeeDeliveryService.unpaginatedItems().subscribe({next:m=>{m&&(this.mRoleTypes=m.data.role_types,this.mProgress.set(!1))},error:m=>{this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(N),f(_),f(oe),f(pe),f(re))}}static{this.\u0275cmp=E({type:o,selectors:[["app-edit"]],standalone:!1,decls:72,vars:19,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/coffee-deliveries","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(n,r){if(n&1&&(s(0,Ft,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),C("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Id:"),i(),e(19,`
                `),t(20,"input",8),ee("ngModelChange",function(p){return Z(r.item.id,p)||(r.item.id=p),p}),i(),e(21,`
                `),s(22,Tt,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",5),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",10),e(31,"Name:"),i(),e(32,`
                `),t(33,"input",11),ee("ngModelChange",function(p){return Z(r.item.name,p)||(r.item.name=p),p}),i(),e(34,`
                `),s(35,wt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",5),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",12),e(44,"Type:"),i(),e(45,`
                `),t(46,"select",13),ee("ngModelChange",function(p){return Z(r.item.type_id,p)||(r.item.type_id=p),p}),e(47,`
                  `),t(48,"option",14),e(49,"--- Select type ---"),i(),e(50,`
                  `),s(51,Pt,2,3,"option",15),e(52,`
                `),i(),e(53,`
                `),s(54,qt,4,1,"div",9),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
          `),i(),e(58,`

          `),t(59,"div",16),e(60,`
            `),t(61,"button",17),e(62,"Cancel"),i(),e(63,`
            `),t(64,"button",18),e(65,"Submit"),i(),e(66,`
          `),i(),e(67,`

        `),i(),e(68,`

      `),i(),e(69,`
    `),i(),e(70,`
  `),i(),e(71,`
`),i()),n&2){let d,p;l("ngIf",r.mProgress()),a(9),l("formGroup",r.itemForm),a(11),X("ngModel",r.item.id),l("ngClass",x(13,Pe,r.itemForm.get("id").invalid&&(r.itemForm.get("id").dirty||r.itemForm.get("id").touched))),a(2),l("ngIf",r.itemForm.get("id").invalid&&(r.itemForm.get("id").dirty||r.itemForm.get("id").touched)),a(11),X("ngModel",r.item.name),l("ngClass",x(15,Pe,r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched))),a(2),l("ngIf",r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched)),a(11),X("ngModel",r.item.type_id),l("ngClass",x(17,Pe,((d=r.itemForm.get("type_id"))==null?null:d.invalid)&&(((d=r.itemForm.get("type_id"))==null?null:d.dirty)||((d=r.itemForm.get("type_id"))==null?null:d.touched)))),a(5),l("ngForOf",r.mRoleTypes),a(3),l("ngIf",((p=r.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("type_id"))==null?null:p.dirty)||((p=r.itemForm.get("type_id"))==null?null:p.touched))),a(10),l("disabled",r.itemForm.invalid)}},dependencies:[H,V,F,I,q,T,D,w,P,U,se,de,G,ae,le,$,W,K,z],encapsulation:2})}};var Ze=tt(it());var Mt=o=>({"is-invalid":o}),kt=()=>[1],At=(o,m)=>({active:o,disabled:m});function Ot(o,m){o&1&&u(0,"app-progress")}function Rt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Bt(o,m){if(o&1&&(t(0,"div",16),e(1,`
                  `),s(2,Rt,2,0,"div",1),e(3,`
                `),i()),o&2){let n=c();a(2),l("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function jt(o,m){if(o&1){let n=he();t(0,"button",29),C("click",function(){Ce(n);let d=c().$implicit,p=c(2);return Se(p.onDelete(d))}),u(1,"i",30),i()}}function Lt(o,m){if(o&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td")(6,"a",22),e(7),i()(),e(8,`
                `),t(9,"td"),e(10),i(),e(11,`
                `),t(12,"td"),e(13),i(),e(14,`
                `),t(15,"td"),e(16),i(),e(17,`
                `),t(18,"td"),e(19),A(20,"date"),i(),e(21,`
                `),t(22,"td"),e(23),i(),e(24,`
                `),t(25,"td"),e(26),A(27,"date"),i(),e(28,`
                `),t(29,"td"),e(30,`
                  `),t(31,"div",23),e(32,`
                    `),t(33,"button",24),u(34,"i",25),i(),e(35,`
                    `),t(36,"button",26),e(37," "),u(38,"i",27),i(),e(39,`
                    `),s(40,jt,2,0,"button",28),e(41,`
                  `),i(),e(42,`
                `),i(),e(43,`
              `),i()),o&2){let n=m.$implicit,r=m.index,d=c(2);a(3),k("",d.mPageFrom+r,"."),a(3),l("routerLink",te("/coffee-deliveries/show/",n.id)),a(),v(n.delivery_number),a(3),v(n.user==null?null:n.user.name),a(3),v(n.quantity),a(3),v(n.coffee_species==null?null:n.coffee_species.name),a(3),v(Oe(20,15,n.delivery_date,"dd/MM/yyyy")),a(4),v(n.number_of_bags),a(3),v(L(27,18,n.created_at)),a(7),l("routerLink",te("/coffee-deliveries/show/",n.id)),a(3),l("routerLink",te("/coffee-deliveries/edit/",n.id)),a(4),l("ngIf",d.mAppContextService.hasRoles(ke(20,kt)))}}function Ht(o,m){if(o&1&&(t(0,"div",17),e(1,`
          `),t(2,"table",18),e(3,`
            `),t(4,"thead",19),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",20),e(9,"#"),i(),e(10,`
                `),t(11,"th",20),e(12,"Delivery No."),i(),e(13,`
                `),t(14,"th",20),e(15,"Delivered To"),i(),e(16,`
                `),t(17,"th",20),e(18,"Quantity (Kg)"),i(),e(19,`
                `),t(20,"th",20),e(21,"Species"),i(),e(22,`
                `),t(23,"th",20),e(24,"Delivery Date"),i(),e(25,`
                `),t(26,"th",20),e(27,"No. of Bags"),i(),e(28,`
                `),t(29,"th",20),e(30,"Created"),i(),e(31,`
                `),t(32,"th",20),e(33,"Action"),i(),e(34,`
              `),i(),e(35,`
            `),i(),e(36,`
            `),t(37,"tbody"),e(38,`
              `),s(39,Lt,44,21,"tr",21),e(40,`
            `),i(),e(41,`
          `),i(),e(42,`
        `),i()),o&2){let n=c();a(39),l("ngForOf",n.mDeliveries)}}function Vt(o,m){if(o&1){let n=he();t(0,"li",33),e(1,`
              `),t(2,"a",34),C("click",function(){let d=Ce(n).$implicit,p=c(2);return Se(p.onChangePage(d.url))}),i(),e(3,`
            `),i()}if(o&2){let n=m.$implicit;l("ngClass",Ae(2,At,n.active,!n.url)),a(2),l("innerHTML",n.label,qe)}}function Gt(o,m){if(o&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",31),e(3,`
            `),s(4,Vt,4,5,"li",32),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let n=c();a(4),l("ngForOf",n.links)}}function $t(o,m){o&1&&(e(0,`
          `),t(1,"p",35),e(2,"No items"),i(),e(3,`
        `))}var xe=class o{constructor(m,n,r){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.mDeliveries={};this.links=[];this.mProgress=b(!1)}ngOnInit(){this.index(),this.search_term=new Ye("",g.required),this.itemForm=new Qe({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mCoffeeDeliveryService.allItems().subscribe({next:m=>{m&&(this.mPageFrom=m.from,this.mDeliveries=m.data,this.links=m.links),this.mProgress.set(!1)},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onChangePage(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.paginateItems(m).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mDeliveries=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onDelete(m){Ze.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+m.delivery_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mCoffeeDeliveryService.deleteItem(m).subscribe({next:d=>{d&&(this.mDeliveries=this.mDeliveries.filter(p=>p.id!==m.id),this.mToastrService.warning(d.message),this.mProgress.set(!1))},error:d=>{d.error.message&&this.mToastrService.warning(d.error.message),this.mProgress.set(!1)}}))})}onSubmit(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.searchItems(m).subscribe({next:n=>{n&&(this.mDeliveries=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onSearch(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.searchItems(m).subscribe({next:n=>{n&&(this.mDeliveries=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(N),f(_))}}static{this.\u0275cmp=E({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/coffee-deliveries/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,r){if(n&1&&(s(0,Ot,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4),e(10,`
          `),t(11,"div",5),e(12,`
            `),t(13,"a",6),e(14,`
              `),u(15,"i",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),t(19,"div"),e(20,`
            `),t(21,"form",8),C("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),t(23,"div",9),e(24,`
                `),u(25,"input",10),e(26,`
                `),t(27,"div",11),e(28,`
                  `),t(29,"button",12),e(30,`
                    `),u(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),s(35,Bt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),t(42,"c-card-body"),e(43,`

        `),s(44,Ht,43,1,"div",15),e(45,`

        `),s(46,Gt,7,1,"div",1),e(47,`

        `),s(48,$t,4,0,"ng-template",null,0,Re),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),n&2){let d=Me(49);l("ngIf",r.mProgress()),a(21),l("formGroup",r.itemForm),a(4),l("ngClass",x(7,Mt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),a(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),a(9),l("ngIf",r.mDeliveries.length>0)("ngIfElse",d),a(2),l("ngIf",r.links)}},dependencies:[H,V,F,I,q,T,D,me,w,P,Ue,We,U,G,$,W,K,z,ie],encapsulation:2})}};function Wt(o,m){o&1&&u(0,"app-progress")}function Ut(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),v(n.item.user==null?null:n.item.user.name)}}function zt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),v(n.item.farmer==null?null:n.item.farmer.name)}}function Kt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),k("",n.item.plot==null?null:n.item.plot.size," ha")}}function Qt(o,m){if(o&1&&(t(0,"div",10),e(1),A(2,"date"),i()),o&2){let n=c();a(),v(L(2,1,n.item.delivery_date))}}function Yt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),k("",n.item.quantity," kg")}}function Jt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),v(n.item.lot==null?null:n.item.lot.lot_number)}}function Xt(o,m){if(o&1&&(t(0,"div",10),e(1),A(2,"date"),i()),o&2){let n=c();a(),v(L(2,1,n.item.created_at))}}function Zt(o,m){if(o&1&&(t(0,"div",10),e(1),A(2,"date"),i()),o&2){let n=c();a(),v(L(2,1,n.item.updated_at))}}var ge=class o{constructor(m,n,r,d){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.route=d;this.mProgress=b(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeeDeliveryService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(N),f(_),f(re))}}static{this.\u0275cmp=E({type:o,selectors:[["app-show"]],standalone:!1,decls:112,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/coffee-deliveries","type","button",1,"btn","btn-light"],[1,"text-muted"]],template:function(n,r){n&1&&(s(0,Wt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",5),e(16,`
                `),t(17,"label",6),e(18,"User:"),i(),e(19,`
                `),s(20,Ut,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",4),e(25,`
              `),t(26,"div",5),e(27,`
                `),t(28,"label",6),e(29,"Farmer:"),i(),e(30,`
                `),s(31,zt,2,1,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",4),e(36,`
              `),t(37,"div",5),e(38,`
                `),t(39,"label",6),e(40,"Plot:"),i(),e(41,`
                `),s(42,Kt,2,1,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",4),e(47,`
              `),t(48,"div",5),e(49,`
                `),t(50,"label",6),e(51,"Delivery Date:"),i(),e(52,`
                `),s(53,Qt,3,3,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),t(57,"div",4),e(58,`
              `),t(59,"div",5),e(60,`
                `),t(61,"label",6),e(62,"Quantity:"),i(),e(63,`
                `),s(64,Yt,2,1,"div",7),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),t(68,"div",4),e(69,`
              `),t(70,"div",5),e(71,`
                `),t(72,"label",6),e(73,"Lot:"),i(),e(74,`
                `),s(75,Jt,2,1,"div",7),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),t(79,"div",4),e(80,`
              `),t(81,"div",5),e(82,`
                `),t(83,"label",6),e(84,"Created At:"),i(),e(85,`
                `),s(86,Xt,3,3,"div",7),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",4),e(91,`
              `),t(92,"div",5),e(93,`
                `),t(94,"label",6),e(95,"Updated At:"),i(),e(96,`
                `),s(97,Zt,3,3,"div",7),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`
          `),i(),e(101,`
          `),t(102,"div",8),e(103,`
            `),t(104,"button",9),e(105,"Cancel"),i(),e(106,`
          `),i(),e(107,`
        `),i(),e(108,`

      `),i(),e(109,`
    `),i(),e(110,`
  `),i(),e(111,`
`),i()),n&2&&(l("ngIf",r.mProgress()),a(20),l("ngIf",r.item.user),a(11),l("ngIf",r.item.farmer),a(11),l("ngIf",r.item.plot),a(11),l("ngIf",r.item.delivery_date),a(11),l("ngIf",r.item.quantity),a(11),l("ngIf",r.item.lot),a(11),l("ngIf",r.item.created_at),a(11),l("ngIf",r.item.updated_at))},dependencies:[F,I,q,T,D,w,P,ie],encapsulation:2})}};var ei=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:xe,data:{title:"Coffee Deliveries"}},{path:"create",component:ue,data:{title:"Coffee Deliveries / Create"}},{path:"edit/:id",component:ve,data:{title:"Coffee Deliveries / Edit"}},{path:"show/:id",component:ge,data:{title:"Coffee Deliveries / Show"}}],_e=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=J({type:o})}static{this.\u0275inj=Y({imports:[ne,be.forChild(ei),be]})}};var et=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=J({type:o})}static{this.\u0275inj=Y({imports:[ne,_e,Ke,Le,He,Ve,Ge,$e,ze,Je,je]})}};export{et as CoffeeDeliveryModule};
