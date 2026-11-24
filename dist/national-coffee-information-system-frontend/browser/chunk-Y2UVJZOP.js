import{a as xt}from"./chunk-YLIRXORT.js";import{a as yt}from"./chunk-D5MIKHAE.js";import{b as Y,c as g,d as K,e as X,f as ct,g as ut,h as Z,i as fe,j as ee,k as te,l as _e,m as ge,n as ve,o as xe,p as ft}from"./chunk-WUV7VT53.js";import{a as G}from"./chunk-YFU6KPVP.js";import{a as H,c as q,e as V}from"./chunk-D2DXKTVY.js";import{$ as tt,Ca as at,Da as dt,Ea as st,G as je,Ja as pt,M as Ke,Q as Xe,R as Ze,X as B,Y as R,_ as et,c as J,ca as it,d as $,da as nt,e as A,ea as ue,fa as ot,g as de,ia as rt,j as se,ka as W,la as z,na as lt,o as Ye,ta as mt,v as pe,x as ce,y as L}from"./chunk-M56LXQJ4.js";import{Cb as a,Cc as ne,Db as t,Dc as oe,Eb as i,Fb as v,Gc as $e,Na as Be,Ob as ke,S as Le,Sa as m,Sb as I,T as me,Ub as c,W as qe,Yb as We,Zb as ze,_b as Ve,aa as Ne,ab as u,ba as Oe,cc as Ge,dc as He,fb as j,gb as ae,hc as e,ic as f,jc as U,lb as d,lc as T,ma as D,mc as P,nc as w,rc as M,sc as De,vc as Ue,wb as Re,wc as _,xc as Qe,yc as Je}from"./chunk-4BW25U23.js";import{e as Ae}from"./chunk-2WH2EVR6.js";var N=class r{constructor(l,o){this.mAppContextService=l;this.http=o}allItems(){let l=`${H.base_url}/coffee-plots`;return this.http.get(l,this.mAppContextService.getHttpOptions())}createItem(l){let o=`${H.base_url}/coffee-plots`;return this.http.post(o,l,this.mAppContextService.getHttpOptions())}getOneItem(l){let o=`${H.base_url}/coffee-plots/${l}`;return this.http.get(o,this.mAppContextService.getHttpOptions())}updateItem(l){let o=`${H.base_url}/coffee-plots/${l.id}`;return this.http.put(o,l,this.mAppContextService.getHttpOptions())}deleteItem(l){let o=`${H.base_url}/coffee-plots/${l.id}`;return this.http.delete(o,this.mAppContextService.getHttpOptions())}paginateItems(l){return this.http.get(l,this.mAppContextService.getHttpOptions())}searchItems(l){let o=`${H.base_url}/search-coffee-plots`;return this.http.post(o,l,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let l=`${H.base_url}/unpaginated-items-coffee-plots`;return this.http.get(l,this.mAppContextService.getHttpOptions())}syncPlotItems(l){let o=`${H.base_url}/sync-gis-coffee-plots`;return this.http.post(o,l,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(o){return new(o||r)(qe(q),qe(Ye))}}static{this.\u0275prov=Le({token:r,factory:r.\u0275fac,providedIn:"root"})}};var O=r=>({"is-invalid":r});function Ct(r,l){r&1&&v(0,"app-progress")}function St(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function bt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function ht(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,bt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("owner_id"))==null||o.errors==null?null:o.errors.required)}}function Et(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ft(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Et,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("size").errors)==null?null:o.required)}}function It(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Tt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,It,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("soil_profile").errors)==null?null:o.required)}}function Pt(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function wt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Mt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,wt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("coffee_species_id"))==null||o.errors==null?null:o.errors.required)}}function qt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Nt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,qt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("number_of_coffee_trees").errors)==null?null:o.required)}}function Ot(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function kt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Dt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,kt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("cooperative_society_id"))==null||o.errors==null?null:o.errors.required)}}function jt(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function At(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Lt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,At,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("country_id"))==null||o.errors==null?null:o.errors.required)}}function Bt(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function Rt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Wt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Rt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("county_id"))==null||o.errors==null?null:o.errors.required)}}function zt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Vt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,zt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("latitude").errors)==null?null:o.required)}}function Gt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ht(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Gt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("longitude").errors)==null?null:o.required)}}function Ut(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Qt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Ut,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("geo_json_geometry").errors)==null?null:o.required)}}var ye=class r{constructor(l,o,n,p,s){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=n;this.router=p;this.fb=s;this.mProgress=D(!1);this.itemForm=this.fb.group({owner_id:["",g.required],size:["",g.required],soil_profile:["",g.nullValidator],coffee_species_id:["",g.required],number_of_coffee_trees:["",g.nullValidator],cooperative_society_id:["",g.nullValidator],country_id:["",g.required],county_id:["",g.required],latitude:["",g.required],longitude:["",g.required],geo_json_geometry:["",g.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(l){this.mProgress.set(!0),this.mCoffeePlotService.createItem(l).subscribe({next:o=>{o&&(o.status==="success"?(this.mToastrService.success(o.message),this.router.navigateByUrl("/coffee-plots")):this.mToastrService.warning(o.message),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeePlotService.unpaginatedItems().subscribe({next:l=>{l&&(this.mUsers=l.data.users,this.mCoffeeSpecies=l.data.coffee_species,this.mCounties=l.data.counties,this.mCooperativeSocieties=l.data.cooperative_societies,this.mCountries=l.data.countries,this.mProgress.set(!1))},error:l=>{this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(N),u(V),u(q),u(ce),u(xe))}}static{this.\u0275cmp=j({type:r,selectors:[["app-create"]],standalone:!1,decls:200,vars:52,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","owner_id",1,"col-form-label","required"],["formControlName","owner_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","size",1,"col-form-label","required"],["formControlName","size","type","number","step","0.01",1,"form-control",3,"ngClass"],["for","soil_profile",1,"col-form-label","required1"],["formControlName","soil_profile","type","text",1,"form-control",3,"ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_coffee_trees",1,"col-form-label","required1"],["formControlName","number_of_coffee_trees","type","number",1,"form-control",3,"ngClass"],["for","cooperative_society_id",1,"col-form-label","required1"],["formControlName","cooperative_society_id","type","text",1,"form-control",3,"ngClass"],["for","country_id",1,"col-form-label","required"],["formControlName","country_id","type","text",1,"form-control",3,"ngClass"],["for","county_id",1,"col-form-label","required"],["formControlName","county_id","type","text",1,"form-control",3,"ngClass"],["for","latitude",1,"col-form-label","required"],["formControlName","latitude","type","number","step","0.01",1,"form-control",3,"ngClass"],["for","longitude",1,"col-form-label","required"],["formControlName","longitude","type","number","step","0.01",1,"form-control",3,"ngClass"],["for","geo_json_geometry",1,"col-form-label","required"],["formControlName","geo_json_geometry",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(o,n){if(o&1&&(d(0,Ct,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),I("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Owner:"),i(),e(19,`
                `),t(20,"select",8),e(21,`
                  `),t(22,"option",9),e(23,"--- Select owner ---"),i(),e(24,`
                  `),d(25,St,2,3,"option",10),e(26,`
                `),i(),e(27,`
                `),d(28,ht,4,1,"div",11),e(29,`
              `),i(),e(30,`
            `),i(),e(31,`
            `),t(32,"div",12),e(33,`
              `),t(34,"div",6),e(35,`
                `),t(36,"label",13),e(37,"Size (Hectares):"),i(),e(38,`
                `),v(39,"input",14),e(40,`
                `),d(41,Ft,4,1,"div",11),e(42,`
              `),i(),e(43,`
            `),i(),e(44,`
            `),t(45,"div",12),e(46,`
              `),t(47,"div",6),e(48,`
                `),t(49,"label",15),e(50,"Soil Profile:"),i(),e(51,`
                `),v(52,"input",16),e(53,`
                `),d(54,Tt,4,1,"div",11),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),t(58,"div",12),e(59,`
              `),t(60,"div",6),e(61,`
                `),t(62,"label",17),e(63,"Coffee Species:"),i(),e(64,`
                `),t(65,"select",18),e(66,`
                  `),t(67,"option",9),e(68,"--- Select species ---"),i(),e(69,`
                  `),d(70,Pt,2,3,"option",10),e(71,`
                `),i(),e(72,`
                `),d(73,Mt,4,1,"div",11),e(74,`
              `),i(),e(75,`
            `),i(),e(76,`
            `),t(77,"div",12),e(78,`
              `),t(79,"div",6),e(80,`
                `),t(81,"label",19),e(82,"Number of Coffee Trees:"),i(),e(83,`
                `),v(84,"input",20),e(85,`
                `),d(86,Nt,4,1,"div",11),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",5),e(91,`
              `),t(92,"div",6),e(93,`
                `),t(94,"label",21),e(95,"Cooperative Society:"),i(),e(96,`
                `),t(97,"select",22),e(98,`
                  `),t(99,"option",9),e(100,"--- Select society ---"),i(),e(101,`
                  `),d(102,Ot,2,3,"option",10),e(103,`
                `),i(),e(104,`
                `),d(105,Dt,4,1,"div",11),e(106,`
              `),i(),e(107,`
            `),i(),e(108,`
            `),t(109,"div",12),e(110,`
              `),t(111,"div",6),e(112,`
                `),t(113,"label",23),e(114,"Country:"),i(),e(115,`
                `),t(116,"select",24),e(117,`
                  `),t(118,"option",9),e(119,"--- Select country ---"),i(),e(120,`
                  `),d(121,jt,2,3,"option",10),e(122,`
                `),i(),e(123,`
                `),d(124,Lt,4,1,"div",11),e(125,`
              `),i(),e(126,`
            `),i(),e(127,`
            `),t(128,"div",12),e(129,`
              `),t(130,"div",6),e(131,`
                `),t(132,"label",25),e(133,"County:"),i(),e(134,`
                `),t(135,"select",26),e(136,`
                  `),t(137,"option",9),e(138,"--- Select county ---"),i(),e(139,`
                  `),d(140,Bt,2,3,"option",10),e(141,`
                `),i(),e(142,`
                `),d(143,Wt,4,1,"div",11),e(144,`
              `),i(),e(145,`
            `),i(),e(146,`
            `),t(147,"div",12),e(148,`
              `),t(149,"div",6),e(150,`
                `),t(151,"label",27),e(152,"Latitude:"),i(),e(153,`
                `),v(154,"input",28),e(155,`
                `),d(156,Vt,4,1,"div",11),e(157,`
              `),i(),e(158,`
            `),i(),e(159,`
            `),t(160,"div",12),e(161,`
              `),t(162,"div",6),e(163,`
                `),t(164,"label",29),e(165,"Longitude:"),i(),e(166,`
                `),v(167,"input",30),e(168,`
                `),d(169,Ht,4,1,"div",11),e(170,`
              `),i(),e(171,`
            `),i(),e(172,`
            `),t(173,"div",5),e(174,`
              `),t(175,"div",6),e(176,`
                `),t(177,"label",31),e(178,"Geo Geometry/Polygons:"),i(),e(179,`
                `),v(180,"textarea",32),e(181,`
                `),d(182,Qt,4,1,"div",11),e(183,`
              `),i(),e(184,`
            `),i(),e(185,`
          `),i(),e(186,`

          `),t(187,"div",33),e(188,`
            `),t(189,"button",34),e(190,"Cancel"),i(),e(191,`
            `),t(192,"button",35),e(193,"Submit"),i(),e(194,`
          `),i(),e(195,`

        `),i(),e(196,`

      `),i(),e(197,`
    `),i(),e(198,`
  `),i(),e(199,`
`),i()),o&2){let p,s,x,y,C,S,b,h,E,F;a("ngIf",n.mProgress()),m(9),a("formGroup",n.itemForm),m(11),a("ngClass",_(30,O,((p=n.itemForm.get("owner_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("owner_id"))==null?null:p.dirty)||((p=n.itemForm.get("owner_id"))==null?null:p.touched)))),m(5),a("ngForOf",n.mUsers),m(3),a("ngIf",((s=n.itemForm.get("owner_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("owner_id"))==null?null:s.dirty)||((s=n.itemForm.get("owner_id"))==null?null:s.touched))),m(11),a("ngClass",_(32,O,n.itemForm.get("size").invalid&&(n.itemForm.get("size").dirty||n.itemForm.get("size").touched))),m(2),a("ngIf",n.itemForm.get("size").invalid&&(n.itemForm.get("size").dirty||n.itemForm.get("size").touched)),m(11),a("ngClass",_(34,O,n.itemForm.get("soil_profile").invalid&&(n.itemForm.get("soil_profile").dirty||n.itemForm.get("soil_profile").touched))),m(2),a("ngIf",n.itemForm.get("soil_profile").invalid&&(n.itemForm.get("soil_profile").dirty||n.itemForm.get("soil_profile").touched)),m(11),a("ngClass",_(36,O,((x=n.itemForm.get("coffee_species_id"))==null?null:x.invalid)&&(((x=n.itemForm.get("coffee_species_id"))==null?null:x.dirty)||((x=n.itemForm.get("coffee_species_id"))==null?null:x.touched)))),m(5),a("ngForOf",n.mCoffeeSpecies),m(3),a("ngIf",((y=n.itemForm.get("coffee_species_id"))==null?null:y.invalid)&&(((y=n.itemForm.get("coffee_species_id"))==null?null:y.dirty)||((y=n.itemForm.get("coffee_species_id"))==null?null:y.touched))),m(11),a("ngClass",_(38,O,n.itemForm.get("number_of_coffee_trees").invalid&&(n.itemForm.get("number_of_coffee_trees").dirty||n.itemForm.get("number_of_coffee_trees").touched))),m(2),a("ngIf",n.itemForm.get("number_of_coffee_trees").invalid&&(n.itemForm.get("number_of_coffee_trees").dirty||n.itemForm.get("number_of_coffee_trees").touched)),m(11),a("ngClass",_(40,O,((C=n.itemForm.get("cooperative_society_id"))==null?null:C.invalid)&&(((C=n.itemForm.get("cooperative_society_id"))==null?null:C.dirty)||((C=n.itemForm.get("cooperative_society_id"))==null?null:C.touched)))),m(5),a("ngForOf",n.mCooperativeSocieties),m(3),a("ngIf",((S=n.itemForm.get("cooperative_society_id"))==null?null:S.invalid)&&(((S=n.itemForm.get("cooperative_society_id"))==null?null:S.dirty)||((S=n.itemForm.get("cooperative_society_id"))==null?null:S.touched))),m(11),a("ngClass",_(42,O,((b=n.itemForm.get("country_id"))==null?null:b.invalid)&&(((b=n.itemForm.get("country_id"))==null?null:b.dirty)||((b=n.itemForm.get("country_id"))==null?null:b.touched)))),m(5),a("ngForOf",n.mCountries),m(3),a("ngIf",((h=n.itemForm.get("country_id"))==null?null:h.invalid)&&(((h=n.itemForm.get("country_id"))==null?null:h.dirty)||((h=n.itemForm.get("country_id"))==null?null:h.touched))),m(11),a("ngClass",_(44,O,((E=n.itemForm.get("county_id"))==null?null:E.invalid)&&(((E=n.itemForm.get("county_id"))==null?null:E.dirty)||((E=n.itemForm.get("county_id"))==null?null:E.touched)))),m(5),a("ngForOf",n.mCounties),m(3),a("ngIf",((F=n.itemForm.get("county_id"))==null?null:F.invalid)&&(((F=n.itemForm.get("county_id"))==null?null:F.dirty)||((F=n.itemForm.get("county_id"))==null?null:F.touched))),m(11),a("ngClass",_(46,O,n.itemForm.get("latitude").invalid&&(n.itemForm.get("latitude").dirty||n.itemForm.get("latitude").touched))),m(2),a("ngIf",n.itemForm.get("latitude").invalid&&(n.itemForm.get("latitude").dirty||n.itemForm.get("latitude").touched)),m(11),a("ngClass",_(48,O,n.itemForm.get("longitude").invalid&&(n.itemForm.get("longitude").dirty||n.itemForm.get("longitude").touched))),m(2),a("ngIf",n.itemForm.get("longitude").invalid&&(n.itemForm.get("longitude").dirty||n.itemForm.get("longitude").touched)),m(11),a("ngClass",_(50,O,n.itemForm.get("geo_json_geometry").invalid&&(n.itemForm.get("geo_json_geometry").dirty||n.itemForm.get("geo_json_geometry").touched))),m(2),a("ngIf",n.itemForm.get("geo_json_geometry").invalid&&(n.itemForm.get("geo_json_geometry").dirty||n.itemForm.get("geo_json_geometry").touched)),m(10),a("disabled",n.itemForm.invalid)}},dependencies:[J,$,A,L,G,B,R,W,z,Z,ge,ve,Y,fe,_e,K,X,te,ee],encapsulation:2})}};var k=r=>({"is-invalid":r});function Jt(r,l){r&1&&v(0,"app-progress")}function $t(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function Yt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Kt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Yt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("owner_id"))==null||o.errors==null?null:o.errors.required)}}function Xt(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Zt(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Xt,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("size").errors)==null?null:o.required)}}function ei(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function ti(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,ei,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("soil_profile").errors)==null?null:o.required)}}function ii(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function ni(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function oi(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,ni,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("coffee_species_id"))==null||o.errors==null?null:o.errors.required)}}function ri(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function li(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,ri,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("number_of_coffee_trees").errors)==null?null:o.required)}}function mi(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function ai(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function di(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,ai,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("cooperative_society_id"))==null||o.errors==null?null:o.errors.required)}}function si(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function pi(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function ci(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,pi,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("country_id"))==null||o.errors==null?null:o.errors.required)}}function ui(r,l){if(r&1&&(t(0,"option",36),e(1),i()),r&2){let o=l.$implicit;a("value",M(o.id)),m(),f(o.name)}}function fi(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function _i(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,fi,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("county_id"))==null||o.errors==null?null:o.errors.required)}}function gi(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function vi(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,gi,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("latitude").errors)==null?null:o.required)}}function xi(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function yi(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,xi,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("longitude").errors)==null?null:o.required)}}function Ci(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Si(r,l){if(r&1&&(t(0,"div",37),e(1,`
                  `),d(2,Ci,2,0,"div",0),e(3,`
                `),i()),r&2){let o,n=c();m(2),a("ngIf",(o=n.itemForm.get("geo_json_geometry").errors)==null?null:o.required)}}var Ie=class r{constructor(l,o,n,p,s,x){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=n;this.router=p;this.fb=s;this.route=x;this.mProgress=D(!1);this.item={};this.itemForm=this.fb.group({owner_id:["",g.required],size:["",g.required],soil_profile:["",g.nullValidator],coffee_species_id:["",g.required],number_of_coffee_trees:["",g.nullValidator],cooperative_society_id:["",g.nullValidator],country_id:["",g.required],county_id:["",g.required],latitude:["",g.required],longitude:["",g.required],geo_json_geometry:["",g.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeePlotService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}onSubmit(l){l.id=this.item.id,this.mProgress.set(!0),this.mCoffeePlotService.updateItem(l).subscribe({next:o=>{o&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/coffee-plots"),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeePlotService.unpaginatedItems().subscribe({next:l=>{l&&(this.mUsers=l.data.users,this.mCoffeeSpecies=l.data.coffee_species,this.mCounties=l.data.counties,this.mCooperativeSocieties=l.data.cooperative_societies,this.mCountries=l.data.countries,this.mProgress.set(!1))},error:l=>{this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(N),u(V),u(q),u(ce),u(xe),u(pe))}}static{this.\u0275cmp=j({type:r,selectors:[["app-edit"]],standalone:!1,decls:200,vars:63,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","owner_id",1,"col-form-label","required"],["formControlName","owner_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","size",1,"col-form-label","required"],["formControlName","size","type","number","step","0.01",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","soil_profile",1,"col-form-label","required1"],["formControlName","soil_profile","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","number_of_coffee_trees",1,"col-form-label","required1"],["formControlName","number_of_coffee_trees","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","cooperative_society_id",1,"col-form-label","required1"],["formControlName","cooperative_society_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","country_id",1,"col-form-label","required"],["formControlName","country_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","county_id",1,"col-form-label","required"],["formControlName","county_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","latitude",1,"col-form-label","required"],["formControlName","latitude","type","number","step","0.01",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","longitude",1,"col-form-label","required"],["formControlName","longitude","type","number","step","0.01",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","geo_json_geometry",1,"col-form-label","required"],["formControlName","geo_json_geometry",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(o,n){if(o&1&&(d(0,Jt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),I("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"Owner:"),i(),e(19,`
                `),t(20,"select",8),w("ngModelChange",function(s){return P(n.item.owner_id,s)||(n.item.owner_id=s),s}),e(21,`
                  `),t(22,"option",9),e(23,"--- Select owner ---"),i(),e(24,`
                  `),d(25,$t,2,3,"option",10),e(26,`
                `),i(),e(27,`
                `),d(28,Kt,4,1,"div",11),e(29,`
              `),i(),e(30,`
            `),i(),e(31,`
            `),t(32,"div",12),e(33,`
              `),t(34,"div",6),e(35,`
                `),t(36,"label",13),e(37,"Size (Hectares):"),i(),e(38,`
                `),t(39,"input",14),w("ngModelChange",function(s){return P(n.item.size,s)||(n.item.size=s),s}),i(),e(40,`
                `),d(41,Zt,4,1,"div",11),e(42,`
              `),i(),e(43,`
            `),i(),e(44,`
            `),t(45,"div",12),e(46,`
              `),t(47,"div",6),e(48,`
                `),t(49,"label",15),e(50,"Soil Profile:"),i(),e(51,`
                `),t(52,"input",16),w("ngModelChange",function(s){return P(n.item.soil_profile,s)||(n.item.soil_profile=s),s}),i(),e(53,`
                `),d(54,ti,4,1,"div",11),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),t(58,"div",12),e(59,`
              `),t(60,"div",6),e(61,`
                `),t(62,"label",17),e(63,"Coffee Species:"),i(),e(64,`
                `),t(65,"select",18),w("ngModelChange",function(s){return P(n.item.coffee_species_id,s)||(n.item.coffee_species_id=s),s}),e(66,`
                  `),t(67,"option",9),e(68,"--- Select species ---"),i(),e(69,`
                  `),d(70,ii,2,3,"option",10),e(71,`
                `),i(),e(72,`
                `),d(73,oi,4,1,"div",11),e(74,`
              `),i(),e(75,`
            `),i(),e(76,`
            `),t(77,"div",12),e(78,`
              `),t(79,"div",6),e(80,`
                `),t(81,"label",19),e(82,"Number of Coffee Trees:"),i(),e(83,`
                `),t(84,"input",20),w("ngModelChange",function(s){return P(n.item.number_of_coffee_trees,s)||(n.item.number_of_coffee_trees=s),s}),i(),e(85,`
                `),d(86,li,4,1,"div",11),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",5),e(91,`
              `),t(92,"div",6),e(93,`
                `),t(94,"label",21),e(95,"Cooperative Society:"),i(),e(96,`
                `),t(97,"select",22),w("ngModelChange",function(s){return P(n.item.cooperative_society_id,s)||(n.item.cooperative_society_id=s),s}),e(98,`
                  `),t(99,"option",9),e(100,"--- Select society ---"),i(),e(101,`
                  `),d(102,mi,2,3,"option",10),e(103,`
                `),i(),e(104,`
                `),d(105,di,4,1,"div",11),e(106,`
              `),i(),e(107,`
            `),i(),e(108,`
            `),t(109,"div",12),e(110,`
              `),t(111,"div",6),e(112,`
                `),t(113,"label",23),e(114,"Country:"),i(),e(115,`
                `),t(116,"select",24),w("ngModelChange",function(s){return P(n.item.country_id,s)||(n.item.country_id=s),s}),e(117,`
                  `),t(118,"option",9),e(119,"--- Select country ---"),i(),e(120,`
                  `),d(121,si,2,3,"option",10),e(122,`
                `),i(),e(123,`
                `),d(124,ci,4,1,"div",11),e(125,`
              `),i(),e(126,`
            `),i(),e(127,`
            `),t(128,"div",12),e(129,`
              `),t(130,"div",6),e(131,`
                `),t(132,"label",25),e(133,"County:"),i(),e(134,`
                `),t(135,"select",26),w("ngModelChange",function(s){return P(n.item.county_id,s)||(n.item.county_id=s),s}),e(136,`
                  `),t(137,"option",9),e(138,"--- Select county ---"),i(),e(139,`
                  `),d(140,ui,2,3,"option",10),e(141,`
                `),i(),e(142,`
                `),d(143,_i,4,1,"div",11),e(144,`
              `),i(),e(145,`
            `),i(),e(146,`
            `),t(147,"div",12),e(148,`
              `),t(149,"div",6),e(150,`
                `),t(151,"label",27),e(152,"Latitude:"),i(),e(153,`
                `),t(154,"input",28),w("ngModelChange",function(s){return P(n.item.latitude,s)||(n.item.latitude=s),s}),i(),e(155,`
                `),d(156,vi,4,1,"div",11),e(157,`
              `),i(),e(158,`
            `),i(),e(159,`
            `),t(160,"div",12),e(161,`
              `),t(162,"div",6),e(163,`
                `),t(164,"label",29),e(165,"Longitude:"),i(),e(166,`
                `),t(167,"input",30),w("ngModelChange",function(s){return P(n.item.longitude,s)||(n.item.longitude=s),s}),i(),e(168,`
                `),d(169,yi,4,1,"div",11),e(170,`
              `),i(),e(171,`
            `),i(),e(172,`
            `),t(173,"div",5),e(174,`
              `),t(175,"div",6),e(176,`
                `),t(177,"label",31),e(178,"Geo Geometry/Polygons:"),i(),e(179,`
                `),t(180,"textarea",32),w("ngModelChange",function(s){return P(n.item.geo_json_geometry,s)||(n.item.geo_json_geometry=s),s}),i(),e(181,`
                `),d(182,Si,4,1,"div",11),e(183,`
              `),i(),e(184,`
            `),i(),e(185,`
          `),i(),e(186,`

          `),t(187,"div",33),e(188,`
            `),t(189,"button",34),e(190,"Cancel"),i(),e(191,`
            `),t(192,"button",35),e(193,"Submit"),i(),e(194,`
          `),i(),e(195,`

        `),i(),e(196,`

      `),i(),e(197,`
    `),i(),e(198,`
  `),i(),e(199,`
`),i()),o&2){let p,s,x,y,C,S,b,h,E,F;a("ngIf",n.mProgress()),m(9),a("formGroup",n.itemForm),m(11),T("ngModel",n.item.owner_id),a("ngClass",_(41,k,((p=n.itemForm.get("owner_id"))==null?null:p.invalid)&&(((p=n.itemForm.get("owner_id"))==null?null:p.dirty)||((p=n.itemForm.get("owner_id"))==null?null:p.touched)))),m(5),a("ngForOf",n.mUsers),m(3),a("ngIf",((s=n.itemForm.get("owner_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("owner_id"))==null?null:s.dirty)||((s=n.itemForm.get("owner_id"))==null?null:s.touched))),m(11),T("ngModel",n.item.size),a("ngClass",_(43,k,n.itemForm.get("size").invalid&&(n.itemForm.get("size").dirty||n.itemForm.get("size").touched))),m(2),a("ngIf",n.itemForm.get("size").invalid&&(n.itemForm.get("size").dirty||n.itemForm.get("size").touched)),m(11),T("ngModel",n.item.soil_profile),a("ngClass",_(45,k,n.itemForm.get("soil_profile").invalid&&(n.itemForm.get("soil_profile").dirty||n.itemForm.get("soil_profile").touched))),m(2),a("ngIf",n.itemForm.get("soil_profile").invalid&&(n.itemForm.get("soil_profile").dirty||n.itemForm.get("soil_profile").touched)),m(11),T("ngModel",n.item.coffee_species_id),a("ngClass",_(47,k,((x=n.itemForm.get("coffee_species_id"))==null?null:x.invalid)&&(((x=n.itemForm.get("coffee_species_id"))==null?null:x.dirty)||((x=n.itemForm.get("coffee_species_id"))==null?null:x.touched)))),m(5),a("ngForOf",n.mCoffeeSpecies),m(3),a("ngIf",((y=n.itemForm.get("coffee_species_id"))==null?null:y.invalid)&&(((y=n.itemForm.get("coffee_species_id"))==null?null:y.dirty)||((y=n.itemForm.get("coffee_species_id"))==null?null:y.touched))),m(11),T("ngModel",n.item.number_of_coffee_trees),a("ngClass",_(49,k,n.itemForm.get("number_of_coffee_trees").invalid&&(n.itemForm.get("number_of_coffee_trees").dirty||n.itemForm.get("number_of_coffee_trees").touched))),m(2),a("ngIf",n.itemForm.get("number_of_coffee_trees").invalid&&(n.itemForm.get("number_of_coffee_trees").dirty||n.itemForm.get("number_of_coffee_trees").touched)),m(11),T("ngModel",n.item.cooperative_society_id),a("ngClass",_(51,k,((C=n.itemForm.get("cooperative_society_id"))==null?null:C.invalid)&&(((C=n.itemForm.get("cooperative_society_id"))==null?null:C.dirty)||((C=n.itemForm.get("cooperative_society_id"))==null?null:C.touched)))),m(5),a("ngForOf",n.mCooperativeSocieties),m(3),a("ngIf",((S=n.itemForm.get("cooperative_society_id"))==null?null:S.invalid)&&(((S=n.itemForm.get("cooperative_society_id"))==null?null:S.dirty)||((S=n.itemForm.get("cooperative_society_id"))==null?null:S.touched))),m(11),T("ngModel",n.item.country_id),a("ngClass",_(53,k,((b=n.itemForm.get("country_id"))==null?null:b.invalid)&&(((b=n.itemForm.get("country_id"))==null?null:b.dirty)||((b=n.itemForm.get("country_id"))==null?null:b.touched)))),m(5),a("ngForOf",n.mCountries),m(3),a("ngIf",((h=n.itemForm.get("country_id"))==null?null:h.invalid)&&(((h=n.itemForm.get("country_id"))==null?null:h.dirty)||((h=n.itemForm.get("country_id"))==null?null:h.touched))),m(11),T("ngModel",n.item.county_id),a("ngClass",_(55,k,((E=n.itemForm.get("county_id"))==null?null:E.invalid)&&(((E=n.itemForm.get("county_id"))==null?null:E.dirty)||((E=n.itemForm.get("county_id"))==null?null:E.touched)))),m(5),a("ngForOf",n.mCounties),m(3),a("ngIf",((F=n.itemForm.get("county_id"))==null?null:F.invalid)&&(((F=n.itemForm.get("county_id"))==null?null:F.dirty)||((F=n.itemForm.get("county_id"))==null?null:F.touched))),m(11),T("ngModel",n.item.latitude),a("ngClass",_(57,k,n.itemForm.get("latitude").invalid&&(n.itemForm.get("latitude").dirty||n.itemForm.get("latitude").touched))),m(2),a("ngIf",n.itemForm.get("latitude").invalid&&(n.itemForm.get("latitude").dirty||n.itemForm.get("latitude").touched)),m(11),T("ngModel",n.item.longitude),a("ngClass",_(59,k,n.itemForm.get("longitude").invalid&&(n.itemForm.get("longitude").dirty||n.itemForm.get("longitude").touched))),m(2),a("ngIf",n.itemForm.get("longitude").invalid&&(n.itemForm.get("longitude").dirty||n.itemForm.get("longitude").touched)),m(11),T("ngModel",n.item.geo_json_geometry),a("ngClass",_(61,k,n.itemForm.get("geo_json_geometry").invalid&&(n.itemForm.get("geo_json_geometry").dirty||n.itemForm.get("geo_json_geometry").touched))),m(2),a("ngIf",n.itemForm.get("geo_json_geometry").invalid&&(n.itemForm.get("geo_json_geometry").dirty||n.itemForm.get("geo_json_geometry").touched)),m(10),a("disabled",n.itemForm.invalid)}},dependencies:[J,$,A,L,G,B,R,W,z,Z,ge,ve,Y,fe,_e,K,X,te,ee],encapsulation:2})}};var gt=Ae(yt());var bi=r=>({"is-invalid":r}),hi=(r,l,o)=>({"bg-success":r,"bg-warning":l,"bg-danger":o}),Ei=()=>[1],Fi=(r,l)=>({active:r,disabled:l});function Ii(r,l){r&1&&v(0,"app-progress")}function Ti(r,l){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Pi(r,l){if(r&1&&(t(0,"div",24),e(1,`
                  `),d(2,Ti,2,0,"div",1),e(3,`
                `),i()),r&2){let o=c();m(2),a("ngIf",o.search_term.errors==null?null:o.search_term.errors.required)}}function wi(r,l){if(r&1){let o=ke();t(0,"button",38),I("click",function(){Ne(o);let p=c().$implicit,s=c(2);return Oe(s.onDelete(p))}),v(1,"i",39),i()}}function Mi(r,l){if(r&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td"),e(6),i(),e(7,`
                `),t(8,"td"),e(9),i(),e(10,`
                `),e(11,`
                `),t(12,"td"),e(13,`
                  `),t(14,"div",30),e(15,`
                    `),t(16,"div",31),e(17),i(),e(18,`
                  `),i(),e(19,`
                `),i(),e(20,`
                `),t(21,"td"),e(22),i(),e(23,`
                `),t(24,"td"),e(25),ne(26,"date"),i(),t(27,"td"),e(28,`
                  `),t(29,"div",32),e(30,`
                    `),t(31,"button",33),v(32,"i",34),i(),e(33,`
                    `),t(34,"button",35),e(35," "),v(36,"i",36),i(),e(37,`
                    `),d(38,wi,2,0,"button",37),e(39,`
                  `),i(),e(40,`
                `),i(),e(41,`
              `),i()),r&2){let o=l.$implicit,n=l.index,p=c(2);m(3),U("",p.mPageFrom+n,"."),m(3),f(o.farmer==null?null:o.farmer.name),m(3),U("",o.size," ha"),m(7),He("width",o.risk_level_percentage,"%"),a("ngClass",Je(17,hi,o.risk_level_id<=2,o.risk_level_id===3,o.risk_level_id>=4)),Re("aria-valuenow",o.risk_level_percentage),m(),U("",o.risk_level_percentage,"%"),m(5),f(o.tree_count),m(3),U("",oe(26,15,o.created_at),`
                `),m(6),a("routerLink",De("/coffee-plots/show/",o.id)),m(3),a("routerLink",De("/coffee-plots/edit/",o.id)),m(4),a("ngIf",p.mAppContextService.hasRoles(Ue(21,Ei)))}}function qi(r,l){if(r&1&&(t(0,"div",25),e(1,`
          `),t(2,"table",26),e(3,`
            `),t(4,"thead",27),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",28),e(9,"#"),i(),e(10,`
                `),t(11,"th",28),e(12,"Farmer"),i(),e(13,`
                `),t(14,"th",28),e(15,"Size"),i(),e(16,`
                `),t(17,"th",28),e(18,"Risk Level"),i(),e(19,`
                `),t(20,"th",28),e(21,"Tree Count"),i(),e(22,`
                `),t(23,"th",28),e(24,"Created"),i(),e(25,`
                `),t(26,"th",28),e(27,"Action"),i(),e(28,`
              `),i(),e(29,`
            `),i(),e(30,`
            `),t(31,"tbody"),e(32,`
              `),d(33,Mi,42,22,"tr",29),e(34,`
            `),i(),e(35,`
          `),i(),e(36,`
        `),i()),r&2){let o=c();m(33),a("ngForOf",o.mPlots)}}function Ni(r,l){if(r&1){let o=ke();t(0,"li",42),e(1,`
              `),t(2,"a",43),I("click",function(){let p=Ne(o).$implicit,s=c(2);return Oe(s.onChangePage(p.url))}),i(),e(3,`
            `),i()}if(r&2){let o=l.$implicit;a("ngClass",Qe(2,Fi,o.active,!o.url)),m(2),a("innerHTML",o.label,Be)}}function Oi(r,l){if(r&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",40),e(3,`
            `),d(4,Ni,4,5,"li",41),e(5,`
          `),i(),e(6,`
        `),i()),r&2){let o=c();m(4),a("ngForOf",o.links)}}function ki(r,l){r&1&&(e(0,`
          `),t(1,"p",44),e(2,"No items"),i(),e(3,`
        `))}var Te=class r{constructor(l,o,n){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=n;this.mPlots={};this.links=[];this.mProgress=D(!1)}ngOnInit(){this.index(),this.search_term=new ut("",g.required),this.itemForm=new ct({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mCoffeePlotService.allItems().subscribe({next:l=>{l&&(this.mPageFrom=l.from,this.mPlots=l.data,this.links=l.links),this.mProgress.set(!1)},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}onChangePage(l){this.mProgress.set(!0),this.mCoffeePlotService.paginateItems(l).subscribe({next:o=>{o&&(this.mPageFrom=o.from,this.mPlots=o.data,this.links=o.links,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onDelete(l){gt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+l.size+' ha"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&(this.mProgress.set(!0),this.mCoffeePlotService.deleteItem(l).subscribe({next:p=>{p&&(this.mPlots=this.mPlots.filter(s=>s.id!==l.id),this.mToastrService.warning(p.message),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.warning(p.error.message),this.mProgress.set(!1)}}))})}onSubmit(l){this.mProgress.set(!0),this.mCoffeePlotService.searchItems(l).subscribe({next:o=>{o&&(this.mPlots=o.salutations,this.mToastrService.success(o.message),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onSearch(l){this.mProgress.set(!0),this.mCoffeePlotService.searchItems(l).subscribe({next:o=>{o&&(this.mPlots=o.data,this.mToastrService.success(o.message),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onSyncPlotItems(l,o){let n={category_id:l,data_source_id:o};this.mProgress.set(!0),this.mCoffeePlotService.syncPlotItems(n).subscribe({next:p=>{p&&(console.log(p),this.mToastrService.success(p.message),this.index(),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.error(p.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(N),u(V),u(q))}}static{this.\u0275cmp=j({type:r,selectors:[["app-index"]],standalone:!1,decls:87,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/coffee-plots/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],["role","group","aria-label","Basic example",1,"btn-group"],[2,"display","inline"],["cButton","","cDropdownToggle","",1,"btn","btn-light","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-sync"],["cDropdownMenu","",1,"border-0"],["cDropdownItem","",1,"btn-icon",3,"click"],["routerLink","/coffee-plots/locations",1,"btn","btn-dark","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-map-pin"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"progress"],["role","progressbar","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped",3,"ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(o,n){if(o&1&&(d(0,Ii,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4),e(10,`
          `),t(11,"div",5),e(12,`
            `),t(13,"a",6),e(14,`
              `),v(15,"i",7),e(16,` Add
            `),i(),e(17,`
            `),t(18,"div",8),e(19,`
              `),t(20,"c-dropdown",9),e(21,`
                `),t(22,"button",10),e(23,`
                  `),v(24,"i",11),e(25,` Plots/Forests
                `),i(),e(26,`
                `),t(27,"ul",12),e(28,`
                  `),e(29,`
                    `),t(30,"li",13),I("click",function(){return n.onSyncPlotItems("1","1")}),e(31,"GPS Surveys < 4ha"),i(),e(32,`
                    `),t(33,"li",13),I("click",function(){return n.onSyncPlotItems("0","1")}),e(34,"GPS Surveys > 4ha"),i(),e(35,`
                    `),t(36,"li",13),I("click",function(){return n.onSyncPlotItems("1","2")}),e(37,"Remote Sensing < 4ha"),i(),e(38,`
                    `),t(39,"li",13),I("click",function(){return n.onSyncPlotItems("0","2")}),e(40,"Remote Sensing > 4ha"),i(),e(41,`
                `),i(),e(42,`
                `),e(43,`
              `),i(),e(44,`
              `),t(45,"a",14),e(46,`
                `),v(47,"i",15),e(48,` Map
              `),i(),e(49,`
            `),i(),e(50,`
          `),i(),e(51,`
          `),t(52,"div"),e(53,`
            `),t(54,"form",16),I("ngSubmit",function(){return n.onSearch(n.itemForm.value)}),e(55,`
              `),t(56,"div",17),e(57,`
                `),v(58,"input",18),e(59,`
                `),t(60,"div",19),e(61,`
                  `),t(62,"button",20),e(63,`
                    `),v(64,"i",21),e(65,`
                  `),i(),e(66,`
                `),i(),e(67,`
                `),d(68,Pi,4,1,"div",22),e(69,`
              `),i(),e(70,`
            `),i(),e(71,`
          `),i(),e(72,`
        `),i(),e(73,`
      `),i(),e(74,`
      `),t(75,"c-card-body"),e(76,`

        `),d(77,qi,37,1,"div",23),e(78,`

        `),d(79,Oi,7,1,"div",1),e(80,`

        `),d(81,ki,4,0,"ng-template",null,0,$e),e(83,`

      `),i(),e(84,`
    `),i(),e(85,`
  `),i(),e(86,`
`),i()),o&2){let p=Ge(82);a("ngIf",n.mProgress()),m(54),a("formGroup",n.itemForm),m(4),a("ngClass",_(7,bi,n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched))),m(10),a("ngIf",n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched)),m(9),a("ngIf",n.mPlots.length>0)("ngIfElse",p),m(2),a("ngIf",n.links)}},dependencies:[J,$,A,L,G,Xe,B,R,et,W,z,dt,at,Z,Y,K,X,te,ee,ue,ot,it,nt,de],styles:[".dropdown-submenu[_ngcontent-%COMP%]{position:relative}.dropdown-submenu[_ngcontent-%COMP%] > .dropdown-menu[_ngcontent-%COMP%]{top:0;left:100%;margin-top:-1px;display:none}.dropdown-submenu[_ngcontent-%COMP%]:hover > .dropdown-menu[_ngcontent-%COMP%]{display:block}.dropdown-submenu[_ngcontent-%COMP%] > .dropdown-item[_ngcontent-%COMP%]{cursor:pointer}"]})}};function Di(r,l){r&1&&v(0,"app-progress")}function ji(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.farmer==null?null:o.item.farmer.name)}}function Ai(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),U("",o.item.size," ha")}}function Li(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.soil_profile)}}function Bi(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.coffee_species==null?null:o.item.coffee_species.name)}}function Ri(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.cooperative_society==null?null:o.item.cooperative_society.name)}}function Wi(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.country==null?null:o.item.country.name)}}function zi(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.county==null?null:o.item.county.name)}}function Vi(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.latitude)}}function Gi(r,l){if(r&1&&(t(0,"div",11),e(1),i()),r&2){let o=c();m(),f(o.item.longitude)}}function Hi(r,l){if(r&1&&(t(0,"div",11),e(1),ne(2,"date"),i()),r&2){let o=c();m(),f(oe(2,1,o.item.created_at))}}function Ui(r,l){if(r&1&&(t(0,"div",11),e(1),ne(2,"date"),i()),r&2){let o=c();m(),f(oe(2,1,o.item.updated_at))}}var Pe=class r{constructor(l,o,n,p){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=n;this.route=p;this.mProgress=D(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeePlotService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(N),u(V),u(q),u(pe))}}static{this.\u0275cmp=j({type:r,selectors:[["app-show"]],standalone:!1,decls:145,vars:12,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"],[1,"text-muted"]],template:function(o,n){o&1&&(d(0,Di,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",5),e(16,`
                `),t(17,"label",6),e(18,"Owner:"),i(),e(19,`
                `),d(20,ji,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",4),e(25,`
              `),t(26,"div",5),e(27,`
                `),t(28,"label",6),e(29,"Size:"),i(),e(30,`
                `),d(31,Ai,2,1,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",4),e(36,`
              `),t(37,"div",5),e(38,`
                `),t(39,"label",6),e(40,"Soil Profile:"),i(),e(41,`
                `),d(42,Li,2,1,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",4),e(47,`
              `),t(48,"div",5),e(49,`
                `),t(50,"label",6),e(51,"Coffee Species:"),i(),e(52,`
                `),d(53,Bi,2,1,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),t(57,"div",8),e(58,`
              `),t(59,"div",5),e(60,`
                `),t(61,"label",6),e(62,"Cooperative Society:"),i(),e(63,`
                `),d(64,Ri,2,1,"div",7),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),t(68,"div",4),e(69,`
              `),t(70,"div",5),e(71,`
                `),t(72,"label",6),e(73,"Country:"),i(),e(74,`
                `),d(75,Wi,2,1,"div",7),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),t(79,"div",4),e(80,`
              `),t(81,"div",5),e(82,`
                `),t(83,"label",6),e(84,"County:"),i(),e(85,`
                `),d(86,zi,2,1,"div",7),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",4),e(91,`
              `),t(92,"div",5),e(93,`
                `),t(94,"label",6),e(95,"Latitude:"),i(),e(96,`
                `),d(97,Vi,2,1,"div",7),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`
            `),t(101,"div",4),e(102,`
              `),t(103,"div",5),e(104,`
                `),t(105,"label",6),e(106,"Longitude:"),i(),e(107,`
                `),d(108,Gi,2,1,"div",7),e(109,`
              `),i(),e(110,`
            `),i(),e(111,`
            `),t(112,"div",4),e(113,`
              `),t(114,"div",5),e(115,`
                `),t(116,"label",6),e(117,"Created At:"),i(),e(118,`
                `),d(119,Hi,3,3,"div",7),e(120,`
              `),i(),e(121,`
            `),i(),e(122,`
            `),t(123,"div",4),e(124,`
              `),t(125,"div",5),e(126,`
                `),t(127,"label",6),e(128,"Updated At:"),i(),e(129,`
                `),d(130,Ui,3,3,"div",7),e(131,`
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
`),i()),o&2&&(a("ngIf",n.mProgress()),m(20),a("ngIf",n.item.owner),m(11),a("ngIf",n.item.size),m(11),a("ngIf",n.item.soil_profile),m(11),a("ngIf",n.item.coffee_species_id),m(11),a("ngIf",n.item.cooperative_society_id),m(11),a("ngIf",n.item.country),m(11),a("ngIf",n.item.county),m(11),a("ngIf",n.item.latitude),m(11),a("ngIf",n.item.longitude),m(11),a("ngIf",n.item.created_at),m(11),a("ngIf",n.item.updated_at))},dependencies:[A,L,G,B,R,W,z,de],encapsulation:2})}};var ie=Ae(xt());var Qi=["mapContainer"];function Ji(r,l){r&1&&v(0,"app-progress")}var we=class r{constructor(l,o,n){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=n;this.mProgress=D(!1);this.mPlots={}}ngOnInit(){}ngAfterViewInit(){this.map=ie.map(this.mapContainer.nativeElement,{preferCanvas:!0}),ie.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(this.map),this.mProgress.set(!0),this.mCoffeePlotService.unpaginatedItems().subscribe({next:l=>{if(l){this.mPlots=l.data.coffee_plots,console.log("mPlots",this.mPlots);let n={type:"FeatureCollection",features:l.data.coffee_plots.map(s=>({type:"Feature",properties:{id:s.id,owner_id:s.owner_id,area_ha:s.size,coffee_species:s.coffee_species?.name??"N/A",risk_level_id:s.risk_level_id,status_id:s.status_id},geometry:JSON.parse(s.geo_json_geometry)}))},p=ie.geoJSON(n,{style:s=>({color:s?.properties?.risk_level_id<=4?"#224326":"#E2251D",weight:2,fillColor:s?.properties?.risk_level_id<=4?"#62a66b":"#F5B6B3",fillOpacity:.5})}).addTo(this.map);p.getBounds().isValid()&&this.map.fitBounds(p.getBounds()),this.mProgress.set(!1)}},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}ngOnDestroy(){this.map?.remove()}static{this.\u0275fac=function(o){return new(o||r)(u(N),u(V),u(q))}}static{this.\u0275cmp=j({type:r,selectors:[["app-locations"]],viewQuery:function(o,n){if(o&1&&We(Qi,5),o&2){let p;ze(p=Ve())&&(n.mapContainer=p.first)}},standalone:!1,decls:30,vars:1,consts:[["mapContainer",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-12"],["id","map"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"]],template:function(o,n){o&1&&(d(0,Ji,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`
          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),v(15,"div",6,0),e(17,`
            `),i(),e(18,`
          `),i(),e(19,`
          `),t(20,"div",7),e(21,`
            `),t(22,"button",8),e(23,"Cancel"),i(),e(24,`
          `),i(),e(25,`
        `),i(),e(26,`

      `),i(),e(27,`
    `),i(),e(28,`
  `),i(),e(29,`
`),i()),o&2&&a("ngIf",n.mProgress())},dependencies:[A,L,G,B,R,W,z],styles:["#map[_ngcontent-%COMP%]{width:100%;height:600px}"]})}};var $i=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Te,data:{title:"Coffee Plots"}},{path:"create",component:ye,data:{title:"Coffee Plots / Create"}},{path:"edit/:id",component:Ie,data:{title:"Coffee Plots / Edit"}},{path:"show/:id",component:Pe,data:{title:"Coffee Plots / Show"}},{path:"locations",component:we,data:{title:"Coffee Plots / Locations"}}],Me=class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=ae({type:r})}static{this.\u0275inj=me({imports:[se,je.forChild($i),je]})}};var vt=class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=ae({type:r})}static{this.\u0275inj=me({imports:[se,Me,pt,Ze,tt,rt,lt,mt,st,ft,Ke,ue]})}};export{vt as CoffeePlotModule};
