import{a as rt}from"./chunk-D5MIKHAE.js";import{b as U,c as _,d as W,e as z,f as Je,g as Xe,h as K,i as de,j as Q,k as Y,l as se,m as pe,n as ce,o as fe,p as Ze}from"./chunk-WUV7VT53.js";import{a as N}from"./chunk-YFU6KPVP.js";import{a as h,c as g,e as q}from"./chunk-D2DXKTVY.js";import{$ as Ge,Ca as ze,Da as Ke,Ea as Qe,G as Fe,Ja as Ye,M as He,R as Ve,X as T,Y as D,_ as le,c as G,d as $,e as F,g as re,ia as $e,j as oe,ka as w,la as P,na as Ue,o as Le,ta as We,v as me,x as ae,y as I}from"./chunk-M56LXQJ4.js";import{Cb as l,Cc as O,Db as t,Dc as V,Eb as i,Ec as Be,Fb as v,Gc as je,Na as ke,Ob as Ee,S as Me,Sa as a,Sb as S,T as X,Ub as c,W as Se,aa as he,ab as f,ba as be,cc as Ae,fb as E,gb as Z,hc as e,ic as u,jc as k,lb as d,lc as ee,ma as b,mc as te,nc as ie,rc as A,sc as ne,vc as Oe,wc as x,xc as Re}from"./chunk-4BW25U23.js";import{e as nt}from"./chunk-2WH2EVR6.js";var y=class o{constructor(m,n){this.mAppContextService=m;this.http=n}allItems(){let m=`${h.base_url}/coffee-deliveries`;return this.http.get(m,this.mAppContextService.getHttpOptions())}createItem(m){let n=`${h.base_url}/coffee-deliveries`;return this.http.post(n,m,this.mAppContextService.getHttpOptions())}getOneItem(m){let n=`${h.base_url}/coffee-deliveries/${m}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}updateItem(m){let n=`${h.base_url}/coffee-deliveries/${m.id}`;return this.http.put(n,m,this.mAppContextService.getHttpOptions())}deleteItem(m){let n=`${h.base_url}/coffee-deliveries/${m.id}`;return this.http.delete(n,this.mAppContextService.getHttpOptions())}paginateItems(m){return this.http.get(m,this.mAppContextService.getHttpOptions())}searchItems(m){let n=`${h.base_url}/search-coffee-deliveries`;return this.http.post(n,m,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let m=`${h.base_url}/unpaginated-items-coffee-deliveries`;return this.http.get(m,this.mAppContextService.getHttpOptions())}filterFarmerPlots(m){let n=`${h.base_url}/filter-farmer-plots-coffee-deliveries/${m}`;return this.http.get(n,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(n){return new(n||o)(Se(g),Se(Le))}}static{this.\u0275prov=Me({token:o,factory:o.\u0275fac,providedIn:"root"})}};var C=o=>({"is-invalid":o});function ot(o,m){o&1&&v(0,"app-progress")}function mt(o,m){if(o&1&&(t(0,"option",37),e(1),i()),o&2){let n=m.$implicit;l("value",A(n.id)),a(),u(n.name)}}function at(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function lt(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,at,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("user_id"))==null||n.errors==null?null:n.errors.required)}}function dt(o,m){if(o&1&&(t(0,"option",37),e(1),i()),o&2){let n=m.$implicit;l("value",A(n.id)),a(),u(n.name)}}function st(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function pt(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,st,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("farmer_id"))==null||n.errors==null?null:n.errors.required)}}function ct(o,m){if(o&1&&(t(0,"option",37),e(1),i()),o&2){let n=m.$implicit;l("value",A(n.id)),a(),k("",n.size," ha")}}function ft(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function ut(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,ft,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("plot_id"))==null||n.errors==null?null:n.errors.required)}}function vt(o,m){if(o&1&&(t(0,"option",37),e(1),i()),o&2){let n=m.$implicit;l("value",A(n.id)),a(),u(n.name)}}function xt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function _t(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,xt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("coffee_species_id"))==null||n.errors==null?null:n.errors.required)}}function gt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function yt(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,gt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("harvest_date").errors)==null?null:n.required)}}function Ct(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function St(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,Ct,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("harvest_season").errors)==null?null:n.required)}}function ht(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function bt(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,ht,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("delivery_date").errors)==null?null:n.required)}}function Et(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ft(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,Et,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("number_of_bags").errors)==null?null:n.required)}}function It(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Tt(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,It,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("quantity").errors)==null?null:n.required)}}function Dt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function wt(o,m){if(o&1&&(t(0,"div",38),e(1,`
                  `),d(2,Dt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("price_per_kg").errors)==null?null:n.required)}}var xe=class o{constructor(m,n,r,s,p){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.router=s;this.fb=p;this.mProgress=b(!1);this.itemForm=this.fb.group({user_id:["",_.required],farmer_id:["",_.required],plot_id:["",_.required],coffee_species_id:["",_.required],harvest_date:["",_.required],harvest_season:["",_.required],delivery_date:["",_.required],number_of_bags:["",_.required],quantity:["",_.required],price_per_kg:["",_.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.createItem(m).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.router.navigateByUrl("/coffee-deliveries"),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeeDeliveryService.unpaginatedItems().subscribe({next:m=>{m&&(this.mUsers=m.data.users,this.mGrowers=m.data.growers,this.mPlots=m.data.plots,this.mCoffeeSpecies=m.data.coffee_species,this.mProgress.set(!1))},error:m=>{this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onFarmerChange(m){let n=m.value;this.mProgress.set(!0),this.mCoffeeDeliveryService.filterFarmerPlots(n).subscribe({next:r=>{r&&(this.mPlots=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(q),f(g),f(ae),f(fe))}}static{this.\u0275cmp=E({type:o,selectors:[["app-create"]],standalone:!1,decls:193,vars:47,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],[1,"mb-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","user_id",1,"col-form-label","required"],["formControlName","user_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","farmer_id",1,"col-form-label","required"],["formControlName","farmer_id","type","text",1,"form-control",3,"change","ngClass"],[1,"col-md-6"],["for","plot_id",1,"col-form-label","required"],["formControlName","plot_id","type","text",1,"form-control",3,"ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngClass"],["for","harvest_date",1,"col-form-label","required"],["formControlName","harvest_date","type","date",1,"form-control",3,"ngClass"],["for","harvest_season",1,"col-form-label","required"],["formControlName","harvest_season","type","text",1,"form-control",3,"ngClass"],["for","delivery_date",1,"col-form-label","required"],["formControlName","delivery_date","type","date",1,"form-control",3,"ngClass"],["for","number_of_bags",1,"col-form-label","required"],["formControlName","number_of_bags","type","number",1,"form-control",3,"ngClass"],["for","quantity",1,"col-form-label","required"],["formControlName","quantity","type","number",1,"form-control",3,"ngClass"],["for","price_per_kg",1,"col-form-label","required"],["formControlName","price_per_kg","type","number","step","0.01",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-deliveries","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(n,r){if(n&1&&(d(0,ot,1,0,"app-progress",0),t(1,"c-row"),e(2,`
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

        `),t(21,"form",6),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(22,`

          `),t(23,"div",7),e(24,`
            `),t(25,"div",8),e(26,`
              `),t(27,"div",9),e(28,`
                `),t(29,"label",10),e(30,"User:"),i(),e(31,`
                `),t(32,"select",11),e(33,`
                  `),t(34,"option",12),e(35,"--- Select user ---"),i(),e(36,`
                  `),d(37,mt,2,3,"option",13),e(38,`
                `),i(),e(39,`
                `),d(40,lt,4,1,"div",14),e(41,`
              `),i(),e(42,`
            `),i(),e(43,`
            `),t(44,"div",8),e(45,`
              `),t(46,"div",9),e(47,`
                `),t(48,"label",15),e(49,"Farmer:"),i(),e(50,`
                `),t(51,"select",16),S("change",function(p){return r.onFarmerChange(p.target)}),e(52,`
                  `),t(53,"option",12),e(54,"--- Select farmer ---"),i(),e(55,`
                  `),d(56,dt,2,3,"option",13),e(57,`
                `),i(),e(58,`
                `),d(59,pt,4,1,"div",14),e(60,`
              `),i(),e(61,`
            `),i(),e(62,`
            `),t(63,"div",17),e(64,`
              `),t(65,"div",9),e(66,`
                `),t(67,"label",18),e(68,"Plot:"),i(),e(69,`
                `),t(70,"select",19),e(71,`
                  `),t(72,"option",12),e(73,"--- Select plot ---"),i(),e(74,`
                  `),d(75,ct,2,3,"option",13),e(76,`
                `),i(),e(77,`
                `),d(78,ut,4,1,"div",14),e(79,`
              `),i(),e(80,`
            `),i(),e(81,`
            `),t(82,"div",17),e(83,`
              `),t(84,"div",9),e(85,`
                `),t(86,"label",20),e(87,"Coffee Species:"),i(),e(88,`
                `),t(89,"select",21),e(90,`
                  `),t(91,"option",12),e(92,"--- Select species ---"),i(),e(93,`
                  `),d(94,vt,2,3,"option",13),e(95,`
                `),i(),e(96,`
                `),d(97,_t,4,1,"div",14),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`
            `),t(101,"div",17),e(102,`
              `),t(103,"div",9),e(104,`
                `),t(105,"label",22),e(106,"Harvest Date:"),i(),e(107,`
                `),v(108,"input",23),e(109,`
                `),d(110,yt,4,1,"div",14),e(111,`
              `),i(),e(112,`
            `),i(),e(113,`
            `),t(114,"div",17),e(115,`
              `),t(116,"div",9),e(117,`
                `),t(118,"label",24),e(119,"Harvest Season:"),i(),e(120,`
                `),v(121,"input",25),e(122,`
                `),d(123,St,4,1,"div",14),e(124,`
              `),i(),e(125,`
            `),i(),e(126,`
            `),t(127,"div",17),e(128,`
              `),t(129,"div",9),e(130,`
                `),t(131,"label",26),e(132,"Delivery Date:"),i(),e(133,`
                `),v(134,"input",27),e(135,`
                `),d(136,bt,4,1,"div",14),e(137,`
              `),i(),e(138,`
            `),i(),e(139,`
            `),t(140,"div",17),e(141,`
              `),t(142,"div",9),e(143,`
                `),t(144,"label",28),e(145,"Number of Bags:"),i(),e(146,`
                `),v(147,"input",29),e(148,`
                `),d(149,Ft,4,1,"div",14),e(150,`
              `),i(),e(151,`
            `),i(),e(152,`
            `),t(153,"div",17),e(154,`
              `),t(155,"div",9),e(156,`
                `),t(157,"label",30),e(158,"Quantity (Kg):"),i(),e(159,`
                `),v(160,"input",31),e(161,`
                `),d(162,Tt,4,1,"div",14),e(163,`
              `),i(),e(164,`
            `),i(),e(165,`
            `),t(166,"div",17),e(167,`
              `),t(168,"div",9),e(169,`
                `),t(170,"label",32),e(171,"Price (Per Kg):"),i(),e(172,`
                `),v(173,"input",33),e(174,`
                `),d(175,wt,4,1,"div",14),e(176,`
              `),i(),e(177,`
            `),i(),e(178,`
          `),i(),e(179,`

          `),t(180,"div",34),e(181,`
            `),t(182,"button",35),e(183,"Cancel"),i(),e(184,`
            `),t(185,"button",36),e(186,"Submit"),i(),e(187,`
          `),i(),e(188,`

        `),i(),e(189,`

      `),i(),e(190,`
    `),i(),e(191,`
  `),i(),e(192,`
`),i()),n&2){let s,p,M,R,B,j,L,H;l("ngIf",r.mProgress()),a(21),l("formGroup",r.itemForm),a(11),l("ngClass",x(27,C,((s=r.itemForm.get("user_id"))==null?null:s.invalid)&&(((s=r.itemForm.get("user_id"))==null?null:s.dirty)||((s=r.itemForm.get("user_id"))==null?null:s.touched)))),a(5),l("ngForOf",r.mUsers),a(3),l("ngIf",((p=r.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("user_id"))==null?null:p.dirty)||((p=r.itemForm.get("user_id"))==null?null:p.touched))),a(11),l("ngClass",x(29,C,((M=r.itemForm.get("farmer_id"))==null?null:M.invalid)&&(((M=r.itemForm.get("farmer_id"))==null?null:M.dirty)||((M=r.itemForm.get("farmer_id"))==null?null:M.touched)))),a(5),l("ngForOf",r.mGrowers),a(3),l("ngIf",((R=r.itemForm.get("farmer_id"))==null?null:R.invalid)&&(((R=r.itemForm.get("farmer_id"))==null?null:R.dirty)||((R=r.itemForm.get("farmer_id"))==null?null:R.touched))),a(11),l("ngClass",x(31,C,((B=r.itemForm.get("plot_id"))==null?null:B.invalid)&&(((B=r.itemForm.get("plot_id"))==null?null:B.dirty)||((B=r.itemForm.get("plot_id"))==null?null:B.touched)))),a(5),l("ngForOf",r.mPlots),a(3),l("ngIf",((j=r.itemForm.get("plot_id"))==null?null:j.invalid)&&(((j=r.itemForm.get("plot_id"))==null?null:j.dirty)||((j=r.itemForm.get("plot_id"))==null?null:j.touched))),a(11),l("ngClass",x(33,C,((L=r.itemForm.get("coffee_species_id"))==null?null:L.invalid)&&(((L=r.itemForm.get("coffee_species_id"))==null?null:L.dirty)||((L=r.itemForm.get("coffee_species_id"))==null?null:L.touched)))),a(5),l("ngForOf",r.mCoffeeSpecies),a(3),l("ngIf",((H=r.itemForm.get("coffee_species_id"))==null?null:H.invalid)&&(((H=r.itemForm.get("coffee_species_id"))==null?null:H.dirty)||((H=r.itemForm.get("coffee_species_id"))==null?null:H.touched))),a(11),l("ngClass",x(35,C,r.itemForm.get("harvest_date").invalid&&(r.itemForm.get("harvest_date").dirty||r.itemForm.get("harvest_date").touched))),a(2),l("ngIf",r.itemForm.get("harvest_date").invalid&&(r.itemForm.get("harvest_date").dirty||r.itemForm.get("harvest_date").touched)),a(11),l("ngClass",x(37,C,r.itemForm.get("harvest_season").invalid&&(r.itemForm.get("harvest_season").dirty||r.itemForm.get("harvest_season").touched))),a(2),l("ngIf",r.itemForm.get("harvest_season").invalid&&(r.itemForm.get("harvest_season").dirty||r.itemForm.get("harvest_season").touched)),a(11),l("ngClass",x(39,C,r.itemForm.get("delivery_date").invalid&&(r.itemForm.get("delivery_date").dirty||r.itemForm.get("delivery_date").touched))),a(2),l("ngIf",r.itemForm.get("delivery_date").invalid&&(r.itemForm.get("delivery_date").dirty||r.itemForm.get("delivery_date").touched)),a(11),l("ngClass",x(41,C,r.itemForm.get("number_of_bags").invalid&&(r.itemForm.get("number_of_bags").dirty||r.itemForm.get("number_of_bags").touched))),a(2),l("ngIf",r.itemForm.get("number_of_bags").invalid&&(r.itemForm.get("number_of_bags").dirty||r.itemForm.get("number_of_bags").touched)),a(11),l("ngClass",x(43,C,r.itemForm.get("quantity").invalid&&(r.itemForm.get("quantity").dirty||r.itemForm.get("quantity").touched))),a(2),l("ngIf",r.itemForm.get("quantity").invalid&&(r.itemForm.get("quantity").dirty||r.itemForm.get("quantity").touched)),a(11),l("ngClass",x(45,C,r.itemForm.get("price_per_kg").invalid&&(r.itemForm.get("price_per_kg").dirty||r.itemForm.get("price_per_kg").touched))),a(2),l("ngIf",r.itemForm.get("price_per_kg").invalid&&(r.itemForm.get("price_per_kg").dirty||r.itemForm.get("price_per_kg").touched)),a(10),l("disabled",r.itemForm.invalid)}},dependencies:[G,$,F,I,N,T,D,le,w,P,K,pe,ce,U,de,se,W,z,Y,Q],encapsulation:2})}};var Ne=o=>({"is-invalid":o});function Pt(o,m){o&1&&v(0,"app-progress")}function qt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Nt(o,m){if(o&1&&(t(0,"div",19),e(1,`
                  `),d(2,qt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("id").errors)==null?null:n.required)}}function Mt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function kt(o,m){if(o&1&&(t(0,"div",19),e(1,`
                  `),d(2,Mt,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("name").errors)==null?null:n.required)}}function At(o,m){if(o&1&&(t(0,"option",20),e(1),i()),o&2){let n=m.$implicit;l("value",A(n.id)),a(),u(n.name)}}function Ot(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Rt(o,m){if(o&1&&(t(0,"div",19),e(1,`
                  `),d(2,Ot,2,0,"div",0),e(3,`
                `),i()),o&2){let n,r=c();a(2),l("ngIf",(n=r.itemForm.get("type_id"))==null||n.errors==null?null:n.errors.required)}}var _e=class o{constructor(m,n,r,s,p,M){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.router=s;this.fb=p;this.route=M;this.mProgress=b(!1);this.item={};this.itemForm=this.fb.group({id:["",_.required],name:["",_.required],type_id:["",_.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeeDeliveryService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onSubmit(m){let n={id:this.item.id,name:m.name,type_id:m.type_id};this.mProgress.set(!0),this.mCoffeeDeliveryService.updateItem(n).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.router.navigateByUrl("/coffee-deliveries"),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeeDeliveryService.unpaginatedItems().subscribe({next:m=>{m&&(this.mRoleTypes=m.data.role_types,this.mProgress.set(!1))},error:m=>{this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(q),f(g),f(ae),f(fe),f(me))}}static{this.\u0275cmp=E({type:o,selectors:[["app-edit"]],standalone:!1,decls:72,vars:19,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","id",1,"col-form-label","required"],["formControlName","id","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","name",1,"col-form-label","required"],["formControlName","name","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],[1,"mt-3","text-end"],["routerLink","/coffee-deliveries","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"],[3,"value"]],template:function(n,r){if(n&1&&(d(0,Pt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),S("ngSubmit",function(){return r.onSubmit(r.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Id:"),i(),e(19,`
                `),t(20,"input",8),ie("ngModelChange",function(p){return te(r.item.id,p)||(r.item.id=p),p}),i(),e(21,`
                `),d(22,Nt,4,1,"div",9),e(23,`
              `),i(),e(24,`
            `),i(),e(25,`
            `),t(26,"div",5),e(27,`
              `),t(28,"div",6),e(29,`
                `),t(30,"label",10),e(31,"Name:"),i(),e(32,`
                `),t(33,"input",11),ie("ngModelChange",function(p){return te(r.item.name,p)||(r.item.name=p),p}),i(),e(34,`
                `),d(35,kt,4,1,"div",9),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
            `),t(39,"div",5),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"label",12),e(44,"Type:"),i(),e(45,`
                `),t(46,"select",13),ie("ngModelChange",function(p){return te(r.item.type_id,p)||(r.item.type_id=p),p}),e(47,`
                  `),t(48,"option",14),e(49,"--- Select type ---"),i(),e(50,`
                  `),d(51,At,2,3,"option",15),e(52,`
                `),i(),e(53,`
                `),d(54,Rt,4,1,"div",9),e(55,`
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
`),i()),n&2){let s,p;l("ngIf",r.mProgress()),a(9),l("formGroup",r.itemForm),a(11),ee("ngModel",r.item.id),l("ngClass",x(13,Ne,r.itemForm.get("id").invalid&&(r.itemForm.get("id").dirty||r.itemForm.get("id").touched))),a(2),l("ngIf",r.itemForm.get("id").invalid&&(r.itemForm.get("id").dirty||r.itemForm.get("id").touched)),a(11),ee("ngModel",r.item.name),l("ngClass",x(15,Ne,r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched))),a(2),l("ngIf",r.itemForm.get("name").invalid&&(r.itemForm.get("name").dirty||r.itemForm.get("name").touched)),a(11),ee("ngModel",r.item.type_id),l("ngClass",x(17,Ne,((s=r.itemForm.get("type_id"))==null?null:s.invalid)&&(((s=r.itemForm.get("type_id"))==null?null:s.dirty)||((s=r.itemForm.get("type_id"))==null?null:s.touched)))),a(5),l("ngForOf",r.mRoleTypes),a(3),l("ngIf",((p=r.itemForm.get("type_id"))==null?null:p.invalid)&&(((p=r.itemForm.get("type_id"))==null?null:p.dirty)||((p=r.itemForm.get("type_id"))==null?null:p.touched))),a(10),l("disabled",r.itemForm.invalid)}},dependencies:[G,$,F,I,N,T,D,w,P,K,pe,ce,U,de,se,W,z,Y,Q],encapsulation:2})}};var tt=nt(rt());var Bt=o=>({"is-invalid":o}),jt=()=>[1],Lt=(o,m)=>({active:o,disabled:m});function Ht(o,m){o&1&&v(0,"app-progress")}function Vt(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Gt(o,m){if(o&1&&(t(0,"div",16),e(1,`
                  `),d(2,Vt,2,0,"div",1),e(3,`
                `),i()),o&2){let n=c();a(2),l("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function $t(o,m){if(o&1){let n=Ee();t(0,"button",29),S("click",function(){he(n);let s=c().$implicit,p=c(2);return be(p.onDelete(s))}),v(1,"i",30),i()}}function Ut(o,m){if(o&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td")(6,"a",22),e(7),i()(),e(8,`
                `),t(9,"td"),e(10),i(),e(11,`
                `),t(12,"td"),e(13),i(),e(14,`
                `),t(15,"td"),e(16),i(),e(17,`
                `),t(18,"td"),e(19),O(20,"date"),i(),e(21,`
                `),t(22,"td"),e(23),i(),e(24,`
                `),t(25,"td"),e(26),O(27,"date"),i(),e(28,`
                `),t(29,"td"),e(30,`
                  `),t(31,"div",23),e(32,`
                    `),t(33,"button",24),v(34,"i",25),i(),e(35,`
                    `),t(36,"button",26),e(37," "),v(38,"i",27),i(),e(39,`
                    `),d(40,$t,2,0,"button",28),e(41,`
                  `),i(),e(42,`
                `),i(),e(43,`
              `),i()),o&2){let n=m.$implicit,r=m.index,s=c(2);a(3),k("",s.mPageFrom+r,"."),a(3),l("routerLink",ne("/coffee-deliveries/show/",n.id)),a(),u(n.delivery_number),a(3),u(n.user==null?null:n.user.name),a(3),u(n.quantity),a(3),u(n.coffee_species==null?null:n.coffee_species.name),a(3),u(Be(20,15,n.delivery_date,"dd/MM/yyyy")),a(4),u(n.number_of_bags),a(3),u(V(27,18,n.created_at)),a(7),l("routerLink",ne("/coffee-deliveries/show/",n.id)),a(3),l("routerLink",ne("/coffee-deliveries/edit/",n.id)),a(4),l("ngIf",s.mAppContextService.hasRoles(Oe(20,jt)))}}function Wt(o,m){if(o&1&&(t(0,"div",17),e(1,`
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
              `),d(39,Ut,44,21,"tr",21),e(40,`
            `),i(),e(41,`
          `),i(),e(42,`
        `),i()),o&2){let n=c();a(39),l("ngForOf",n.mDeliveries)}}function zt(o,m){if(o&1){let n=Ee();t(0,"li",33),e(1,`
              `),t(2,"a",34),S("click",function(){let s=he(n).$implicit,p=c(2);return be(p.onChangePage(s.url))}),i(),e(3,`
            `),i()}if(o&2){let n=m.$implicit;l("ngClass",Re(2,Lt,n.active,!n.url)),a(2),l("innerHTML",n.label,ke)}}function Kt(o,m){if(o&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",31),e(3,`
            `),d(4,zt,4,5,"li",32),e(5,`
          `),i(),e(6,`
        `),i()),o&2){let n=c();a(4),l("ngForOf",n.links)}}function Qt(o,m){o&1&&(e(0,`
          `),t(1,"p",35),e(2,"No items"),i(),e(3,`
        `))}var ge=class o{constructor(m,n,r){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.mDeliveries={};this.links=[];this.mProgress=b(!1)}ngOnInit(){this.index(),this.search_term=new Xe("",_.required),this.itemForm=new Je({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mCoffeeDeliveryService.allItems().subscribe({next:m=>{m&&(this.mPageFrom=m.from,this.mDeliveries=m.data,this.links=m.links),this.mProgress.set(!1)},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}onChangePage(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.paginateItems(m).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mDeliveries=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onDelete(m){tt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+m.delivery_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(r=>{r.isConfirmed&&(this.mProgress.set(!0),this.mCoffeeDeliveryService.deleteItem(m).subscribe({next:s=>{s&&(this.mDeliveries=this.mDeliveries.filter(p=>p.id!==m.id),this.mToastrService.warning(s.message),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.warning(s.error.message),this.mProgress.set(!1)}}))})}onSubmit(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.searchItems(m).subscribe({next:n=>{n&&(this.mDeliveries=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}onSearch(m){this.mProgress.set(!0),this.mCoffeeDeliveryService.searchItems(m).subscribe({next:n=>{n&&(this.mDeliveries=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(q),f(g))}}static{this.\u0275cmp=E({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/coffee-deliveries/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,r){if(n&1&&(d(0,Ht,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4),e(10,`
          `),t(11,"div",5),e(12,`
            `),t(13,"a",6),e(14,`
              `),v(15,"i",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),t(19,"div"),e(20,`
            `),t(21,"form",8),S("ngSubmit",function(){return r.onSearch(r.itemForm.value)}),e(22,`
              `),t(23,"div",9),e(24,`
                `),v(25,"input",10),e(26,`
                `),t(27,"div",11),e(28,`
                  `),t(29,"button",12),e(30,`
                    `),v(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),d(35,Gt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),t(42,"c-card-body"),e(43,`

        `),d(44,Wt,43,1,"div",15),e(45,`

        `),d(46,Kt,7,1,"div",1),e(47,`

        `),d(48,Qt,4,0,"ng-template",null,0,je),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),n&2){let s=Ae(49);l("ngIf",r.mProgress()),a(21),l("formGroup",r.itemForm),a(4),l("ngClass",x(7,Bt,r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched))),a(10),l("ngIf",r.search_term.invalid&&(r.search_term.dirty||r.search_term.touched)),a(9),l("ngIf",r.mDeliveries.length>0)("ngIfElse",s),a(2),l("ngIf",r.links)}},dependencies:[G,$,F,I,N,T,D,le,w,P,Ke,ze,K,U,W,z,Y,Q,re],encapsulation:2})}};function Yt(o,m){o&1&&v(0,"app-progress")}function Jt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),u(n.item.user==null?null:n.item.user.name)}}function Xt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),u(n.item.farmer==null?null:n.item.farmer.name)}}function Zt(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),k("",n.item.plot==null?null:n.item.plot.size," ha")}}function ei(o,m){if(o&1&&(t(0,"div",10),e(1),O(2,"date"),i()),o&2){let n=c();a(),u(V(2,1,n.item.delivery_date))}}function ti(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),k("",n.item.quantity," kg")}}function ii(o,m){if(o&1&&(t(0,"div",10),e(1),i()),o&2){let n=c();a(),u(n.item.lot==null?null:n.item.lot.lot_number)}}function ni(o,m){if(o&1&&(t(0,"div",10),e(1),O(2,"date"),i()),o&2){let n=c();a(),u(V(2,1,n.item.created_at))}}function ri(o,m){if(o&1&&(t(0,"div",10),e(1),O(2,"date"),i()),o&2){let n=c();a(),u(V(2,1,n.item.updated_at))}}var ye=class o{constructor(m,n,r,s){this.mCoffeeDeliveryService=m;this.mToastrService=n;this.mAppContextService=r;this.route=s;this.mProgress=b(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeeDeliveryService.getOneItem(this.id).subscribe({next:m=>{m&&(this.item=m,this.mProgress.set(!1))},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||o)(f(y),f(q),f(g),f(me))}}static{this.\u0275cmp=E({type:o,selectors:[["app-show"]],standalone:!1,decls:112,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/coffee-deliveries","type","button",1,"btn","btn-light"],[1,"text-muted"]],template:function(n,r){n&1&&(d(0,Yt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",5),e(16,`
                `),t(17,"label",6),e(18,"User:"),i(),e(19,`
                `),d(20,Jt,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",4),e(25,`
              `),t(26,"div",5),e(27,`
                `),t(28,"label",6),e(29,"Farmer:"),i(),e(30,`
                `),d(31,Xt,2,1,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",4),e(36,`
              `),t(37,"div",5),e(38,`
                `),t(39,"label",6),e(40,"Plot:"),i(),e(41,`
                `),d(42,Zt,2,1,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",4),e(47,`
              `),t(48,"div",5),e(49,`
                `),t(50,"label",6),e(51,"Delivery Date:"),i(),e(52,`
                `),d(53,ei,3,3,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),t(57,"div",4),e(58,`
              `),t(59,"div",5),e(60,`
                `),t(61,"label",6),e(62,"Quantity:"),i(),e(63,`
                `),d(64,ti,2,1,"div",7),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),t(68,"div",4),e(69,`
              `),t(70,"div",5),e(71,`
                `),t(72,"label",6),e(73,"Lot:"),i(),e(74,`
                `),d(75,ii,2,1,"div",7),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),t(79,"div",4),e(80,`
              `),t(81,"div",5),e(82,`
                `),t(83,"label",6),e(84,"Created At:"),i(),e(85,`
                `),d(86,ni,3,3,"div",7),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",4),e(91,`
              `),t(92,"div",5),e(93,`
                `),t(94,"label",6),e(95,"Updated At:"),i(),e(96,`
                `),d(97,ri,3,3,"div",7),e(98,`
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
`),i()),n&2&&(l("ngIf",r.mProgress()),a(20),l("ngIf",r.item.user),a(11),l("ngIf",r.item.farmer),a(11),l("ngIf",r.item.plot),a(11),l("ngIf",r.item.delivery_date),a(11),l("ngIf",r.item.quantity),a(11),l("ngIf",r.item.lot),a(11),l("ngIf",r.item.created_at),a(11),l("ngIf",r.item.updated_at))},dependencies:[F,I,N,T,D,w,P,re],encapsulation:2})}};var oi=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:ge,data:{title:"Coffee Deliveries"}},{path:"create",component:xe,data:{title:"Coffee Deliveries / Create"}},{path:"edit/:id",component:_e,data:{title:"Coffee Deliveries / Edit"}},{path:"show/:id",component:ye,data:{title:"Coffee Deliveries / Show"}}],Ce=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=Z({type:o})}static{this.\u0275inj=X({imports:[oe,Fe.forChild(oi),Fe]})}};var it=class o{static{this.\u0275fac=function(n){return new(n||o)}}static{this.\u0275mod=Z({type:o})}static{this.\u0275inj=X({imports:[oe,Ce,Ye,Ve,Ge,$e,Ue,We,Qe,Ze,He]})}};export{it as CoffeeDeliveryModule};
