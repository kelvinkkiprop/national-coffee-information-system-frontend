import{a as st}from"./chunk-YLIRXORT.js";import{a as pt}from"./chunk-D5MIKHAE.js";import{b as Y,c as g,d as K,e as X,f as ot,g as rt,h as Z,i as ue,j as ee,k as te,l as fe,m as _e,n as ge,o as ve,p as lt}from"./chunk-JSR5FKFU.js";import{a as V}from"./chunk-4MT6PD6W.js";import{a as H,c as M,e as R}from"./chunk-UBHKEOV2.js";import{$ as Ye,Ca as et,Da as tt,Ea as it,G as Ae,Ja as nt,M as $e,R as Qe,X as k,Y as D,_ as Je,c as Q,d as J,e as L,g as de,ia as Ke,j as se,ka as W,la as z,na as Xe,o as Ue,ta as Ze,v as pe,x as ce,y as B}from"./chunk-JHTOCNXX.js";import{Bc as ne,Cb as a,Cc as oe,Db as i,Eb as n,Fb as v,Fc as He,Na as ke,Ob as Oe,S as Be,Sa as m,Sb as G,T as me,Ub as c,W as Me,Yb as De,Zb as We,_b as ze,aa as qe,ab as u,ba as Ne,cc as Re,fb as A,gb as ae,hc as e,ic as f,jc as $,lb as d,lc as I,ma as j,mc as T,nc as P,rc as w,sc as je,vc as Ve,wc as _,xc as Ge}from"./chunk-MHSS2KTR.js";import{e as Le}from"./chunk-2WH2EVR6.js";var q=class r{constructor(l,o){this.mAppContextService=l;this.http=o}allItems(){let l=`${H.base_url}/coffee-plots`;return this.http.get(l,this.mAppContextService.getHttpOptions())}createItem(l){let o=`${H.base_url}/coffee-plots`;return this.http.post(o,l,this.mAppContextService.getHttpOptions())}getOneItem(l){let o=`${H.base_url}/coffee-plots/${l}`;return this.http.get(o,this.mAppContextService.getHttpOptions())}updateItem(l){let o=`${H.base_url}/coffee-plots/${l.id}`;return this.http.put(o,l,this.mAppContextService.getHttpOptions())}deleteItem(l){let o=`${H.base_url}/coffee-plots/${l.id}`;return this.http.delete(o,this.mAppContextService.getHttpOptions())}paginateItems(l){return this.http.get(l,this.mAppContextService.getHttpOptions())}searchItems(l){let o=`${H.base_url}/search-coffee-plots`;return this.http.post(o,l,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let l=`${H.base_url}/unpaginated-items-coffee-plots`;return this.http.get(l,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(o){return new(o||r)(Me(M),Me(Ue))}}static{this.\u0275prov=Be({token:r,factory:r.\u0275fac,providedIn:"root"})}};var N=r=>({"is-invalid":r});function ct(r,l){r&1&&v(0,"app-progress")}function ut(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function ft(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function _t(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,ft,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("owner_id"))==null||o.errors==null?null:o.errors.required)}}function gt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function vt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,gt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("size").errors)==null?null:o.required)}}function xt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function yt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,xt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("soil_profile").errors)==null?null:o.required)}}function Ct(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function St(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function bt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,St,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("coffee_species_id"))==null||o.errors==null?null:o.errors.required)}}function ht(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Et(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,ht,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("number_of_coffee_trees").errors)==null?null:o.required)}}function Ft(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function It(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Tt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,It,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("cooperative_society_id"))==null||o.errors==null?null:o.errors.required)}}function Pt(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function wt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Mt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,wt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("country_id"))==null||o.errors==null?null:o.errors.required)}}function qt(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function Nt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Ot(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Nt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("county_id"))==null||o.errors==null?null:o.errors.required)}}function jt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function At(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,jt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("latitude").errors)==null?null:o.required)}}function Lt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Bt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Lt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("longitude").errors)==null?null:o.required)}}function kt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Dt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,kt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("geo_json_geometry").errors)==null?null:o.required)}}var xe=class r{constructor(l,o,t,p,s){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=t;this.router=p;this.fb=s;this.mProgress=j(!1);this.itemForm=this.fb.group({owner_id:["",g.required],size:["",g.required],soil_profile:["",g.nullValidator],coffee_species_id:["",g.required],number_of_coffee_trees:["",g.nullValidator],cooperative_society_id:["",g.nullValidator],country_id:["",g.required],county_id:["",g.required],latitude:["",g.required],longitude:["",g.required],geo_json_geometry:["",g.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(l){this.mProgress.set(!0),this.mCoffeePlotService.createItem(l).subscribe({next:o=>{o&&(o.status==="success"?(this.mToastrService.success(o.message),this.router.navigateByUrl("/coffee-plots")):this.mToastrService.warning(o.message),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeePlotService.unpaginatedItems().subscribe({next:l=>{l&&(this.mUsers=l.data.users,this.mCoffeeSpecies=l.data.coffee_species,this.mCounties=l.data.counties,this.mCooperativeSocieties=l.data.cooperative_societies,this.mCountries=l.data.countries,this.mProgress.set(!1))},error:l=>{this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(q),u(R),u(M),u(ce),u(ve))}}static{this.\u0275cmp=A({type:r,selectors:[["app-create"]],standalone:!1,decls:200,vars:52,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","owner_id",1,"col-form-label","required"],["formControlName","owner_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","size",1,"col-form-label","required"],["formControlName","size","type","number","step","0.01",1,"form-control",3,"ngClass"],["for","soil_profile",1,"col-form-label","required1"],["formControlName","soil_profile","type","text",1,"form-control",3,"ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_coffee_trees",1,"col-form-label","required1"],["formControlName","number_of_coffee_trees","type","number",1,"form-control",3,"ngClass"],["for","cooperative_society_id",1,"col-form-label","required1"],["formControlName","cooperative_society_id","type","text",1,"form-control",3,"ngClass"],["for","country_id",1,"col-form-label","required"],["formControlName","country_id","type","text",1,"form-control",3,"ngClass"],["for","county_id",1,"col-form-label","required"],["formControlName","county_id","type","text",1,"form-control",3,"ngClass"],["for","latitude",1,"col-form-label","required"],["formControlName","latitude","type","number","step","0.01",1,"form-control",3,"ngClass"],["for","longitude",1,"col-form-label","required"],["formControlName","longitude","type","number","step","0.01",1,"form-control",3,"ngClass"],["for","geo_json_geometry",1,"col-form-label","required"],["formControlName","geo_json_geometry",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(o,t){if(o&1&&(d(0,ct,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),G("ngSubmit",function(){return t.onSubmit(t.itemForm.value)}),e(10,`

          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Owner:"),n(),e(19,`
                `),i(20,"select",8),e(21,`
                  `),i(22,"option",9),e(23,"--- Select owner ---"),n(),e(24,`
                  `),d(25,ut,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,_t,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),i(32,"div",12),e(33,`
              `),i(34,"div",6),e(35,`
                `),i(36,"label",13),e(37,"Size (Hectares):"),n(),e(38,`
                `),v(39,"input",14),e(40,`
                `),d(41,vt,4,1,"div",11),e(42,`
              `),n(),e(43,`
            `),n(),e(44,`
            `),i(45,"div",12),e(46,`
              `),i(47,"div",6),e(48,`
                `),i(49,"label",15),e(50,"Soil Profile:"),n(),e(51,`
                `),v(52,"input",16),e(53,`
                `),d(54,yt,4,1,"div",11),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
            `),i(58,"div",12),e(59,`
              `),i(60,"div",6),e(61,`
                `),i(62,"label",17),e(63,"Coffee Species:"),n(),e(64,`
                `),i(65,"select",18),e(66,`
                  `),i(67,"option",9),e(68,"--- Select species ---"),n(),e(69,`
                  `),d(70,Ct,2,3,"option",10),e(71,`
                `),n(),e(72,`
                `),d(73,bt,4,1,"div",11),e(74,`
              `),n(),e(75,`
            `),n(),e(76,`
            `),i(77,"div",12),e(78,`
              `),i(79,"div",6),e(80,`
                `),i(81,"label",19),e(82,"Number of Coffee Trees:"),n(),e(83,`
                `),v(84,"input",20),e(85,`
                `),d(86,Et,4,1,"div",11),e(87,`
              `),n(),e(88,`
            `),n(),e(89,`
            `),i(90,"div",5),e(91,`
              `),i(92,"div",6),e(93,`
                `),i(94,"label",21),e(95,"Cooperative Society:"),n(),e(96,`
                `),i(97,"select",22),e(98,`
                  `),i(99,"option",9),e(100,"--- Select society ---"),n(),e(101,`
                  `),d(102,Ft,2,3,"option",10),e(103,`
                `),n(),e(104,`
                `),d(105,Tt,4,1,"div",11),e(106,`
              `),n(),e(107,`
            `),n(),e(108,`
            `),i(109,"div",12),e(110,`
              `),i(111,"div",6),e(112,`
                `),i(113,"label",23),e(114,"Country:"),n(),e(115,`
                `),i(116,"select",24),e(117,`
                  `),i(118,"option",9),e(119,"--- Select country ---"),n(),e(120,`
                  `),d(121,Pt,2,3,"option",10),e(122,`
                `),n(),e(123,`
                `),d(124,Mt,4,1,"div",11),e(125,`
              `),n(),e(126,`
            `),n(),e(127,`
            `),i(128,"div",12),e(129,`
              `),i(130,"div",6),e(131,`
                `),i(132,"label",25),e(133,"County:"),n(),e(134,`
                `),i(135,"select",26),e(136,`
                  `),i(137,"option",9),e(138,"--- Select county ---"),n(),e(139,`
                  `),d(140,qt,2,3,"option",10),e(141,`
                `),n(),e(142,`
                `),d(143,Ot,4,1,"div",11),e(144,`
              `),n(),e(145,`
            `),n(),e(146,`
            `),i(147,"div",12),e(148,`
              `),i(149,"div",6),e(150,`
                `),i(151,"label",27),e(152,"Latitude:"),n(),e(153,`
                `),v(154,"input",28),e(155,`
                `),d(156,At,4,1,"div",11),e(157,`
              `),n(),e(158,`
            `),n(),e(159,`
            `),i(160,"div",12),e(161,`
              `),i(162,"div",6),e(163,`
                `),i(164,"label",29),e(165,"Longitude:"),n(),e(166,`
                `),v(167,"input",30),e(168,`
                `),d(169,Bt,4,1,"div",11),e(170,`
              `),n(),e(171,`
            `),n(),e(172,`
            `),i(173,"div",5),e(174,`
              `),i(175,"div",6),e(176,`
                `),i(177,"label",31),e(178,"Geo Geometry/Polygons:"),n(),e(179,`
                `),v(180,"textarea",32),e(181,`
                `),d(182,Dt,4,1,"div",11),e(183,`
              `),n(),e(184,`
            `),n(),e(185,`
          `),n(),e(186,`

          `),i(187,"div",33),e(188,`
            `),i(189,"button",34),e(190,"Cancel"),n(),e(191,`
            `),i(192,"button",35),e(193,"Submit"),n(),e(194,`
          `),n(),e(195,`

        `),n(),e(196,`

      `),n(),e(197,`
    `),n(),e(198,`
  `),n(),e(199,`
`),n()),o&2){let p,s,x,y,C,S,b,h,E,F;a("ngIf",t.mProgress()),m(9),a("formGroup",t.itemForm),m(11),a("ngClass",_(30,N,((p=t.itemForm.get("owner_id"))==null?null:p.invalid)&&(((p=t.itemForm.get("owner_id"))==null?null:p.dirty)||((p=t.itemForm.get("owner_id"))==null?null:p.touched)))),m(5),a("ngForOf",t.mUsers),m(3),a("ngIf",((s=t.itemForm.get("owner_id"))==null?null:s.invalid)&&(((s=t.itemForm.get("owner_id"))==null?null:s.dirty)||((s=t.itemForm.get("owner_id"))==null?null:s.touched))),m(11),a("ngClass",_(32,N,t.itemForm.get("size").invalid&&(t.itemForm.get("size").dirty||t.itemForm.get("size").touched))),m(2),a("ngIf",t.itemForm.get("size").invalid&&(t.itemForm.get("size").dirty||t.itemForm.get("size").touched)),m(11),a("ngClass",_(34,N,t.itemForm.get("soil_profile").invalid&&(t.itemForm.get("soil_profile").dirty||t.itemForm.get("soil_profile").touched))),m(2),a("ngIf",t.itemForm.get("soil_profile").invalid&&(t.itemForm.get("soil_profile").dirty||t.itemForm.get("soil_profile").touched)),m(11),a("ngClass",_(36,N,((x=t.itemForm.get("coffee_species_id"))==null?null:x.invalid)&&(((x=t.itemForm.get("coffee_species_id"))==null?null:x.dirty)||((x=t.itemForm.get("coffee_species_id"))==null?null:x.touched)))),m(5),a("ngForOf",t.mCoffeeSpecies),m(3),a("ngIf",((y=t.itemForm.get("coffee_species_id"))==null?null:y.invalid)&&(((y=t.itemForm.get("coffee_species_id"))==null?null:y.dirty)||((y=t.itemForm.get("coffee_species_id"))==null?null:y.touched))),m(11),a("ngClass",_(38,N,t.itemForm.get("number_of_coffee_trees").invalid&&(t.itemForm.get("number_of_coffee_trees").dirty||t.itemForm.get("number_of_coffee_trees").touched))),m(2),a("ngIf",t.itemForm.get("number_of_coffee_trees").invalid&&(t.itemForm.get("number_of_coffee_trees").dirty||t.itemForm.get("number_of_coffee_trees").touched)),m(11),a("ngClass",_(40,N,((C=t.itemForm.get("cooperative_society_id"))==null?null:C.invalid)&&(((C=t.itemForm.get("cooperative_society_id"))==null?null:C.dirty)||((C=t.itemForm.get("cooperative_society_id"))==null?null:C.touched)))),m(5),a("ngForOf",t.mCooperativeSocieties),m(3),a("ngIf",((S=t.itemForm.get("cooperative_society_id"))==null?null:S.invalid)&&(((S=t.itemForm.get("cooperative_society_id"))==null?null:S.dirty)||((S=t.itemForm.get("cooperative_society_id"))==null?null:S.touched))),m(11),a("ngClass",_(42,N,((b=t.itemForm.get("country_id"))==null?null:b.invalid)&&(((b=t.itemForm.get("country_id"))==null?null:b.dirty)||((b=t.itemForm.get("country_id"))==null?null:b.touched)))),m(5),a("ngForOf",t.mCountries),m(3),a("ngIf",((h=t.itemForm.get("country_id"))==null?null:h.invalid)&&(((h=t.itemForm.get("country_id"))==null?null:h.dirty)||((h=t.itemForm.get("country_id"))==null?null:h.touched))),m(11),a("ngClass",_(44,N,((E=t.itemForm.get("county_id"))==null?null:E.invalid)&&(((E=t.itemForm.get("county_id"))==null?null:E.dirty)||((E=t.itemForm.get("county_id"))==null?null:E.touched)))),m(5),a("ngForOf",t.mCounties),m(3),a("ngIf",((F=t.itemForm.get("county_id"))==null?null:F.invalid)&&(((F=t.itemForm.get("county_id"))==null?null:F.dirty)||((F=t.itemForm.get("county_id"))==null?null:F.touched))),m(11),a("ngClass",_(46,N,t.itemForm.get("latitude").invalid&&(t.itemForm.get("latitude").dirty||t.itemForm.get("latitude").touched))),m(2),a("ngIf",t.itemForm.get("latitude").invalid&&(t.itemForm.get("latitude").dirty||t.itemForm.get("latitude").touched)),m(11),a("ngClass",_(48,N,t.itemForm.get("longitude").invalid&&(t.itemForm.get("longitude").dirty||t.itemForm.get("longitude").touched))),m(2),a("ngIf",t.itemForm.get("longitude").invalid&&(t.itemForm.get("longitude").dirty||t.itemForm.get("longitude").touched)),m(11),a("ngClass",_(50,N,t.itemForm.get("geo_json_geometry").invalid&&(t.itemForm.get("geo_json_geometry").dirty||t.itemForm.get("geo_json_geometry").touched))),m(2),a("ngIf",t.itemForm.get("geo_json_geometry").invalid&&(t.itemForm.get("geo_json_geometry").dirty||t.itemForm.get("geo_json_geometry").touched)),m(10),a("disabled",t.itemForm.invalid)}},dependencies:[Q,J,L,B,V,k,D,W,z,Z,_e,ge,Y,ue,fe,K,X,te,ee],encapsulation:2})}};var O=r=>({"is-invalid":r});function Wt(r,l){r&1&&v(0,"app-progress")}function zt(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function Rt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Vt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Rt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("owner_id"))==null||o.errors==null?null:o.errors.required)}}function Gt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Ht(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Gt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("size").errors)==null?null:o.required)}}function Ut(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function $t(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Ut,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("soil_profile").errors)==null?null:o.required)}}function Qt(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function Jt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Yt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Jt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("coffee_species_id"))==null||o.errors==null?null:o.errors.required)}}function Kt(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function Xt(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,Kt,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("number_of_coffee_trees").errors)==null?null:o.required)}}function Zt(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function ei(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function ti(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,ei,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("cooperative_society_id"))==null||o.errors==null?null:o.errors.required)}}function ii(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function ni(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function oi(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,ni,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("country_id"))==null||o.errors==null?null:o.errors.required)}}function ri(r,l){if(r&1&&(i(0,"option",36),e(1),n()),r&2){let o=l.$implicit;a("value",w(o.id)),m(),f(o.name)}}function li(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function mi(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,li,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("county_id"))==null||o.errors==null?null:o.errors.required)}}function ai(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function di(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,ai,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("latitude").errors)==null?null:o.required)}}function si(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function pi(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,si,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("longitude").errors)==null?null:o.required)}}function ci(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function ui(r,l){if(r&1&&(i(0,"div",37),e(1,`
                  `),d(2,ci,2,0,"div",0),e(3,`
                `),n()),r&2){let o,t=c();m(2),a("ngIf",(o=t.itemForm.get("geo_json_geometry").errors)==null?null:o.required)}}var Fe=class r{constructor(l,o,t,p,s,x){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=t;this.router=p;this.fb=s;this.route=x;this.mProgress=j(!1);this.item={};this.itemForm=this.fb.group({owner_id:["",g.required],size:["",g.required],soil_profile:["",g.nullValidator],coffee_species_id:["",g.required],number_of_coffee_trees:["",g.nullValidator],cooperative_society_id:["",g.nullValidator],country_id:["",g.required],county_id:["",g.required],latitude:["",g.required],longitude:["",g.required],geo_json_geometry:["",g.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeePlotService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}onSubmit(l){l.id=this.item.id,this.mProgress.set(!0),this.mCoffeePlotService.updateItem(l).subscribe({next:o=>{o&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/coffee-plots"),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mCoffeePlotService.unpaginatedItems().subscribe({next:l=>{l&&(this.mUsers=l.data.users,this.mCoffeeSpecies=l.data.coffee_species,this.mCounties=l.data.counties,this.mCooperativeSocieties=l.data.cooperative_societies,this.mCountries=l.data.countries,this.mProgress.set(!1))},error:l=>{this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(q),u(R),u(M),u(ce),u(ve),u(pe))}}static{this.\u0275cmp=A({type:r,selectors:[["app-edit"]],standalone:!1,decls:200,vars:63,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","owner_id",1,"col-form-label","required"],["formControlName","owner_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","size",1,"col-form-label","required"],["formControlName","size","type","number","step","0.01",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","soil_profile",1,"col-form-label","required1"],["formControlName","soil_profile","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","coffee_species_id",1,"col-form-label","required"],["formControlName","coffee_species_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","number_of_coffee_trees",1,"col-form-label","required1"],["formControlName","number_of_coffee_trees","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","cooperative_society_id",1,"col-form-label","required1"],["formControlName","cooperative_society_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","country_id",1,"col-form-label","required"],["formControlName","country_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","county_id",1,"col-form-label","required"],["formControlName","county_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","latitude",1,"col-form-label","required"],["formControlName","latitude","type","number","step","0.01",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","longitude",1,"col-form-label","required"],["formControlName","longitude","type","number","step","0.01",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","geo_json_geometry",1,"col-form-label","required"],["formControlName","geo_json_geometry",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(o,t){if(o&1&&(d(0,Wt,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),G("ngSubmit",function(){return t.onSubmit(t.itemForm.value)}),e(10,`

          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),i(15,"div",6),e(16,`
                `),i(17,"label",7),e(18,"Owner:"),n(),e(19,`
                `),i(20,"select",8),P("ngModelChange",function(s){return T(t.item.owner_id,s)||(t.item.owner_id=s),s}),e(21,`
                  `),i(22,"option",9),e(23,"--- Select owner ---"),n(),e(24,`
                  `),d(25,zt,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,Vt,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),i(32,"div",12),e(33,`
              `),i(34,"div",6),e(35,`
                `),i(36,"label",13),e(37,"Size (Hectares):"),n(),e(38,`
                `),i(39,"input",14),P("ngModelChange",function(s){return T(t.item.size,s)||(t.item.size=s),s}),n(),e(40,`
                `),d(41,Ht,4,1,"div",11),e(42,`
              `),n(),e(43,`
            `),n(),e(44,`
            `),i(45,"div",12),e(46,`
              `),i(47,"div",6),e(48,`
                `),i(49,"label",15),e(50,"Soil Profile:"),n(),e(51,`
                `),i(52,"input",16),P("ngModelChange",function(s){return T(t.item.soil_profile,s)||(t.item.soil_profile=s),s}),n(),e(53,`
                `),d(54,$t,4,1,"div",11),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
            `),i(58,"div",12),e(59,`
              `),i(60,"div",6),e(61,`
                `),i(62,"label",17),e(63,"Coffee Species:"),n(),e(64,`
                `),i(65,"select",18),P("ngModelChange",function(s){return T(t.item.coffee_species_id,s)||(t.item.coffee_species_id=s),s}),e(66,`
                  `),i(67,"option",9),e(68,"--- Select species ---"),n(),e(69,`
                  `),d(70,Qt,2,3,"option",10),e(71,`
                `),n(),e(72,`
                `),d(73,Yt,4,1,"div",11),e(74,`
              `),n(),e(75,`
            `),n(),e(76,`
            `),i(77,"div",12),e(78,`
              `),i(79,"div",6),e(80,`
                `),i(81,"label",19),e(82,"Number of Coffee Trees:"),n(),e(83,`
                `),i(84,"input",20),P("ngModelChange",function(s){return T(t.item.number_of_coffee_trees,s)||(t.item.number_of_coffee_trees=s),s}),n(),e(85,`
                `),d(86,Xt,4,1,"div",11),e(87,`
              `),n(),e(88,`
            `),n(),e(89,`
            `),i(90,"div",5),e(91,`
              `),i(92,"div",6),e(93,`
                `),i(94,"label",21),e(95,"Cooperative Society:"),n(),e(96,`
                `),i(97,"select",22),P("ngModelChange",function(s){return T(t.item.cooperative_society_id,s)||(t.item.cooperative_society_id=s),s}),e(98,`
                  `),i(99,"option",9),e(100,"--- Select society ---"),n(),e(101,`
                  `),d(102,Zt,2,3,"option",10),e(103,`
                `),n(),e(104,`
                `),d(105,ti,4,1,"div",11),e(106,`
              `),n(),e(107,`
            `),n(),e(108,`
            `),i(109,"div",12),e(110,`
              `),i(111,"div",6),e(112,`
                `),i(113,"label",23),e(114,"Country:"),n(),e(115,`
                `),i(116,"select",24),P("ngModelChange",function(s){return T(t.item.country_id,s)||(t.item.country_id=s),s}),e(117,`
                  `),i(118,"option",9),e(119,"--- Select country ---"),n(),e(120,`
                  `),d(121,ii,2,3,"option",10),e(122,`
                `),n(),e(123,`
                `),d(124,oi,4,1,"div",11),e(125,`
              `),n(),e(126,`
            `),n(),e(127,`
            `),i(128,"div",12),e(129,`
              `),i(130,"div",6),e(131,`
                `),i(132,"label",25),e(133,"County:"),n(),e(134,`
                `),i(135,"select",26),P("ngModelChange",function(s){return T(t.item.county_id,s)||(t.item.county_id=s),s}),e(136,`
                  `),i(137,"option",9),e(138,"--- Select county ---"),n(),e(139,`
                  `),d(140,ri,2,3,"option",10),e(141,`
                `),n(),e(142,`
                `),d(143,mi,4,1,"div",11),e(144,`
              `),n(),e(145,`
            `),n(),e(146,`
            `),i(147,"div",12),e(148,`
              `),i(149,"div",6),e(150,`
                `),i(151,"label",27),e(152,"Latitude:"),n(),e(153,`
                `),i(154,"input",28),P("ngModelChange",function(s){return T(t.item.latitude,s)||(t.item.latitude=s),s}),n(),e(155,`
                `),d(156,di,4,1,"div",11),e(157,`
              `),n(),e(158,`
            `),n(),e(159,`
            `),i(160,"div",12),e(161,`
              `),i(162,"div",6),e(163,`
                `),i(164,"label",29),e(165,"Longitude:"),n(),e(166,`
                `),i(167,"input",30),P("ngModelChange",function(s){return T(t.item.longitude,s)||(t.item.longitude=s),s}),n(),e(168,`
                `),d(169,pi,4,1,"div",11),e(170,`
              `),n(),e(171,`
            `),n(),e(172,`
            `),i(173,"div",5),e(174,`
              `),i(175,"div",6),e(176,`
                `),i(177,"label",31),e(178,"Geo Geometry/Polygons:"),n(),e(179,`
                `),i(180,"textarea",32),P("ngModelChange",function(s){return T(t.item.geo_json_geometry,s)||(t.item.geo_json_geometry=s),s}),n(),e(181,`
                `),d(182,ui,4,1,"div",11),e(183,`
              `),n(),e(184,`
            `),n(),e(185,`
          `),n(),e(186,`

          `),i(187,"div",33),e(188,`
            `),i(189,"button",34),e(190,"Cancel"),n(),e(191,`
            `),i(192,"button",35),e(193,"Submit"),n(),e(194,`
          `),n(),e(195,`

        `),n(),e(196,`

      `),n(),e(197,`
    `),n(),e(198,`
  `),n(),e(199,`
`),n()),o&2){let p,s,x,y,C,S,b,h,E,F;a("ngIf",t.mProgress()),m(9),a("formGroup",t.itemForm),m(11),I("ngModel",t.item.owner_id),a("ngClass",_(41,O,((p=t.itemForm.get("owner_id"))==null?null:p.invalid)&&(((p=t.itemForm.get("owner_id"))==null?null:p.dirty)||((p=t.itemForm.get("owner_id"))==null?null:p.touched)))),m(5),a("ngForOf",t.mUsers),m(3),a("ngIf",((s=t.itemForm.get("owner_id"))==null?null:s.invalid)&&(((s=t.itemForm.get("owner_id"))==null?null:s.dirty)||((s=t.itemForm.get("owner_id"))==null?null:s.touched))),m(11),I("ngModel",t.item.size),a("ngClass",_(43,O,t.itemForm.get("size").invalid&&(t.itemForm.get("size").dirty||t.itemForm.get("size").touched))),m(2),a("ngIf",t.itemForm.get("size").invalid&&(t.itemForm.get("size").dirty||t.itemForm.get("size").touched)),m(11),I("ngModel",t.item.soil_profile),a("ngClass",_(45,O,t.itemForm.get("soil_profile").invalid&&(t.itemForm.get("soil_profile").dirty||t.itemForm.get("soil_profile").touched))),m(2),a("ngIf",t.itemForm.get("soil_profile").invalid&&(t.itemForm.get("soil_profile").dirty||t.itemForm.get("soil_profile").touched)),m(11),I("ngModel",t.item.coffee_species_id),a("ngClass",_(47,O,((x=t.itemForm.get("coffee_species_id"))==null?null:x.invalid)&&(((x=t.itemForm.get("coffee_species_id"))==null?null:x.dirty)||((x=t.itemForm.get("coffee_species_id"))==null?null:x.touched)))),m(5),a("ngForOf",t.mCoffeeSpecies),m(3),a("ngIf",((y=t.itemForm.get("coffee_species_id"))==null?null:y.invalid)&&(((y=t.itemForm.get("coffee_species_id"))==null?null:y.dirty)||((y=t.itemForm.get("coffee_species_id"))==null?null:y.touched))),m(11),I("ngModel",t.item.number_of_coffee_trees),a("ngClass",_(49,O,t.itemForm.get("number_of_coffee_trees").invalid&&(t.itemForm.get("number_of_coffee_trees").dirty||t.itemForm.get("number_of_coffee_trees").touched))),m(2),a("ngIf",t.itemForm.get("number_of_coffee_trees").invalid&&(t.itemForm.get("number_of_coffee_trees").dirty||t.itemForm.get("number_of_coffee_trees").touched)),m(11),I("ngModel",t.item.cooperative_society_id),a("ngClass",_(51,O,((C=t.itemForm.get("cooperative_society_id"))==null?null:C.invalid)&&(((C=t.itemForm.get("cooperative_society_id"))==null?null:C.dirty)||((C=t.itemForm.get("cooperative_society_id"))==null?null:C.touched)))),m(5),a("ngForOf",t.mCooperativeSocieties),m(3),a("ngIf",((S=t.itemForm.get("cooperative_society_id"))==null?null:S.invalid)&&(((S=t.itemForm.get("cooperative_society_id"))==null?null:S.dirty)||((S=t.itemForm.get("cooperative_society_id"))==null?null:S.touched))),m(11),I("ngModel",t.item.country_id),a("ngClass",_(53,O,((b=t.itemForm.get("country_id"))==null?null:b.invalid)&&(((b=t.itemForm.get("country_id"))==null?null:b.dirty)||((b=t.itemForm.get("country_id"))==null?null:b.touched)))),m(5),a("ngForOf",t.mCountries),m(3),a("ngIf",((h=t.itemForm.get("country_id"))==null?null:h.invalid)&&(((h=t.itemForm.get("country_id"))==null?null:h.dirty)||((h=t.itemForm.get("country_id"))==null?null:h.touched))),m(11),I("ngModel",t.item.county_id),a("ngClass",_(55,O,((E=t.itemForm.get("county_id"))==null?null:E.invalid)&&(((E=t.itemForm.get("county_id"))==null?null:E.dirty)||((E=t.itemForm.get("county_id"))==null?null:E.touched)))),m(5),a("ngForOf",t.mCounties),m(3),a("ngIf",((F=t.itemForm.get("county_id"))==null?null:F.invalid)&&(((F=t.itemForm.get("county_id"))==null?null:F.dirty)||((F=t.itemForm.get("county_id"))==null?null:F.touched))),m(11),I("ngModel",t.item.latitude),a("ngClass",_(57,O,t.itemForm.get("latitude").invalid&&(t.itemForm.get("latitude").dirty||t.itemForm.get("latitude").touched))),m(2),a("ngIf",t.itemForm.get("latitude").invalid&&(t.itemForm.get("latitude").dirty||t.itemForm.get("latitude").touched)),m(11),I("ngModel",t.item.longitude),a("ngClass",_(59,O,t.itemForm.get("longitude").invalid&&(t.itemForm.get("longitude").dirty||t.itemForm.get("longitude").touched))),m(2),a("ngIf",t.itemForm.get("longitude").invalid&&(t.itemForm.get("longitude").dirty||t.itemForm.get("longitude").touched)),m(11),I("ngModel",t.item.geo_json_geometry),a("ngClass",_(61,O,t.itemForm.get("geo_json_geometry").invalid&&(t.itemForm.get("geo_json_geometry").dirty||t.itemForm.get("geo_json_geometry").touched))),m(2),a("ngIf",t.itemForm.get("geo_json_geometry").invalid&&(t.itemForm.get("geo_json_geometry").dirty||t.itemForm.get("geo_json_geometry").touched)),m(10),a("disabled",t.itemForm.invalid)}},dependencies:[Q,J,L,B,V,k,D,W,z,Z,_e,ge,Y,ue,fe,K,X,te,ee],encapsulation:2})}};var at=Le(pt());var fi=r=>({"is-invalid":r}),_i=()=>[1],gi=(r,l)=>({active:r,disabled:l});function vi(r,l){r&1&&v(0,"app-progress")}function xi(r,l){r&1&&(i(0,"div"),e(1,"This field is required."),n())}function yi(r,l){if(r&1&&(i(0,"div",18),e(1,`
                  `),d(2,xi,2,0,"div",1),e(3,`
                `),n()),r&2){let o=c();m(2),a("ngIf",o.search_term.errors==null?null:o.search_term.errors.required)}}function Ci(r,l){if(r&1){let o=Oe();i(0,"button",30),G("click",function(){qe(o);let p=c().$implicit,s=c(2);return Ne(s.onDelete(p))}),v(1,"i",31),n()}}function Si(r,l){if(r&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),n(),e(4,`
                `),i(5,"td"),e(6),n(),e(7,`
                `),i(8,"td"),e(9),n(),e(10,`
                `),e(11,`
                `),i(12,"td"),e(13),n(),e(14,`
                `),i(15,"td"),e(16),ne(17,"date"),n(),i(18,"td"),e(19,`
                  `),i(20,"div",24),e(21,`
                    `),i(22,"button",25),v(23,"i",26),n(),e(24,`
                    `),i(25,"button",27),e(26," "),v(27,"i",28),n(),e(28,`
                    `),d(29,Ci,2,0,"button",29),e(30,`
                  `),n(),e(31,`
                `),n(),e(32,`
              `),n()),r&2){let o=l.$implicit,t=l.index,p=c(2);m(3),$("",p.mPageFrom+t,"."),m(3),f(o.owner==null?null:o.owner.name),m(3),$("",o.size," ha"),m(4),f(o.coffee_species==null?null:o.coffee_species.name),m(3),$("",oe(17,10,o.created_at),`
                `),m(6),a("routerLink",je("/coffee-plots/show/",o.id)),m(3),a("routerLink",je("/coffee-plots/edit/",o.id)),m(4),a("ngIf",p.mAppContextService.hasRoles(Ve(12,_i)))}}function bi(r,l){if(r&1&&(i(0,"div",19),e(1,`
          `),i(2,"table",20),e(3,`
            `),i(4,"thead",21),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",22),e(9,"#"),n(),e(10,`
                `),i(11,"th",22),e(12,"Owner"),n(),e(13,`
                `),i(14,"th",22),e(15,"Size"),n(),e(16,`
                `),e(17,`
                `),i(18,"th",22),e(19,"Species"),n(),e(20,`
                `),i(21,"th",22),e(22,"Created"),n(),e(23,`
                `),i(24,"th",22),e(25,"Action"),n(),e(26,`
              `),n(),e(27,`
            `),n(),e(28,`
            `),i(29,"tbody"),e(30,`
              `),d(31,Si,33,13,"tr",23),e(32,`
            `),n(),e(33,`
          `),n(),e(34,`
        `),n()),r&2){let o=c();m(31),a("ngForOf",o.mPlots)}}function hi(r,l){if(r&1){let o=Oe();i(0,"li",34),e(1,`
              `),i(2,"a",35),G("click",function(){let p=qe(o).$implicit,s=c(2);return Ne(s.onChangePage(p.url))}),n(),e(3,`
            `),n()}if(r&2){let o=l.$implicit;a("ngClass",Ge(2,gi,o.active,!o.url)),m(2),a("innerHTML",o.label,ke)}}function Ei(r,l){if(r&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",32),e(3,`
            `),d(4,hi,4,5,"li",33),e(5,`
          `),n(),e(6,`
        `),n()),r&2){let o=c();m(4),a("ngForOf",o.links)}}function Fi(r,l){r&1&&(e(0,`
          `),i(1,"p",36),e(2,"No items"),n(),e(3,`
        `))}var Ie=class r{constructor(l,o,t){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=t;this.mPlots={};this.links=[];this.mProgress=j(!1)}ngOnInit(){this.index(),this.search_term=new rt("",g.required),this.itemForm=new ot({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mCoffeePlotService.allItems().subscribe({next:l=>{l&&(this.mPageFrom=l.from,this.mPlots=l.data,this.links=l.links),this.mProgress.set(!1)},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}onChangePage(l){this.mProgress.set(!0),this.mCoffeePlotService.paginateItems(l).subscribe({next:o=>{o&&(this.mPageFrom=o.from,this.mPlots=o.data,this.links=o.links,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onDelete(l){at.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+l.size+' ha"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(t=>{t.isConfirmed&&(this.mProgress.set(!0),this.mCoffeePlotService.deleteItem(l).subscribe({next:p=>{p&&(this.mPlots=this.mPlots.filter(s=>s.id!==l.id),this.mToastrService.warning(p.message),this.mProgress.set(!1))},error:p=>{p.error.message&&this.mToastrService.warning(p.error.message),this.mProgress.set(!1)}}))})}onSubmit(l){this.mProgress.set(!0),this.mCoffeePlotService.searchItems(l).subscribe({next:o=>{o&&(this.mPlots=o.salutations,this.mToastrService.success(o.message),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onSearch(l){this.mProgress.set(!0),this.mCoffeePlotService.searchItems(l).subscribe({next:o=>{o&&(this.mPlots=o.data,this.mToastrService.success(o.message),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(q),u(R),u(M))}}static{this.\u0275cmp=A({type:r,selectors:[["app-index"]],standalone:!1,decls:59,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/coffee-plots/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],["routerLink","/coffee-plots/locations",1,"btn","btn-light","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-map-pin"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(o,t){if(o&1&&(d(0,vi,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),v(15,"i",7),e(16,` Add
            `),n(),e(17,`
            `),i(18,"a",8),e(19,`
              `),v(20,"i",9),e(21,` Locations
            `),n(),e(22,`
          `),n(),e(23,`
          `),i(24,"div"),e(25,`
            `),i(26,"form",10),G("ngSubmit",function(){return t.onSearch(t.itemForm.value)}),e(27,`
              `),i(28,"div",11),e(29,`
                `),v(30,"input",12),e(31,`
                `),i(32,"div",13),e(33,`
                  `),i(34,"button",14),e(35,`
                    `),v(36,"i",15),e(37,`
                  `),n(),e(38,`
                `),n(),e(39,`
                `),d(40,yi,4,1,"div",16),e(41,`
              `),n(),e(42,`
            `),n(),e(43,`
          `),n(),e(44,`
        `),n(),e(45,`
      `),n(),e(46,`
      `),i(47,"c-card-body"),e(48,`

        `),d(49,bi,35,1,"div",17),e(50,`

        `),d(51,Ei,7,1,"div",1),e(52,`

        `),d(53,Fi,4,0,"ng-template",null,0,He),e(55,`

      `),n(),e(56,`
    `),n(),e(57,`
  `),n(),e(58,`
`),n()),o&2){let p=Re(54);a("ngIf",t.mProgress()),m(26),a("formGroup",t.itemForm),m(4),a("ngClass",_(7,fi,t.search_term.invalid&&(t.search_term.dirty||t.search_term.touched))),m(10),a("ngIf",t.search_term.invalid&&(t.search_term.dirty||t.search_term.touched)),m(9),a("ngIf",t.mPlots.length>0)("ngIfElse",p),m(2),a("ngIf",t.links)}},dependencies:[Q,J,L,B,V,k,D,Je,W,z,tt,et,Z,Y,K,X,te,ee,de],encapsulation:2})}};function Ii(r,l){r&1&&v(0,"app-progress")}function Ti(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.owner==null?null:o.item.owner.name)}}function Pi(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),$("",o.item.size," ha")}}function wi(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.soil_profile)}}function Mi(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.coffee_species==null?null:o.item.coffee_species.name)}}function qi(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.cooperative_society==null?null:o.item.cooperative_society.name)}}function Ni(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.country==null?null:o.item.country.name)}}function Oi(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.county==null?null:o.item.county.name)}}function ji(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.latitude)}}function Ai(r,l){if(r&1&&(i(0,"div",11),e(1),n()),r&2){let o=c();m(),f(o.item.longitude)}}function Li(r,l){if(r&1&&(i(0,"div",11),e(1),ne(2,"date"),n()),r&2){let o=c();m(),f(oe(2,1,o.item.created_at))}}function Bi(r,l){if(r&1&&(i(0,"div",11),e(1),ne(2,"date"),n()),r&2){let o=c();m(),f(oe(2,1,o.item.updated_at))}}var Te=class r{constructor(l,o,t,p){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=t;this.route=p;this.mProgress=j(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mCoffeePlotService.getOneItem(this.id).subscribe({next:l=>{l&&(this.item=l,this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(o){return new(o||r)(u(q),u(R),u(M),u(pe))}}static{this.\u0275cmp=A({type:r,selectors:[["app-show"]],standalone:!1,decls:145,vars:12,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"],[1,"text-muted"]],template:function(o,t){o&1&&(d(0,Ii,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div"),e(10,`
          `),i(11,"div",3),e(12,`
            `),i(13,"div",4),e(14,`
              `),i(15,"div",5),e(16,`
                `),i(17,"label",6),e(18,"Owner:"),n(),e(19,`
                `),d(20,Ti,2,1,"div",7),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),i(24,"div",4),e(25,`
              `),i(26,"div",5),e(27,`
                `),i(28,"label",6),e(29,"Size:"),n(),e(30,`
                `),d(31,Pi,2,1,"div",7),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),i(35,"div",4),e(36,`
              `),i(37,"div",5),e(38,`
                `),i(39,"label",6),e(40,"Soil Profile:"),n(),e(41,`
                `),d(42,wi,2,1,"div",7),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),i(46,"div",4),e(47,`
              `),i(48,"div",5),e(49,`
                `),i(50,"label",6),e(51,"Coffee Species:"),n(),e(52,`
                `),d(53,Mi,2,1,"div",7),e(54,`
              `),n(),e(55,`
            `),n(),e(56,`
            `),i(57,"div",8),e(58,`
              `),i(59,"div",5),e(60,`
                `),i(61,"label",6),e(62,"Cooperative Society:"),n(),e(63,`
                `),d(64,qi,2,1,"div",7),e(65,`
              `),n(),e(66,`
            `),n(),e(67,`
            `),i(68,"div",4),e(69,`
              `),i(70,"div",5),e(71,`
                `),i(72,"label",6),e(73,"Country:"),n(),e(74,`
                `),d(75,Ni,2,1,"div",7),e(76,`
              `),n(),e(77,`
            `),n(),e(78,`
            `),i(79,"div",4),e(80,`
              `),i(81,"div",5),e(82,`
                `),i(83,"label",6),e(84,"County:"),n(),e(85,`
                `),d(86,Oi,2,1,"div",7),e(87,`
              `),n(),e(88,`
            `),n(),e(89,`
            `),i(90,"div",4),e(91,`
              `),i(92,"div",5),e(93,`
                `),i(94,"label",6),e(95,"Latitude:"),n(),e(96,`
                `),d(97,ji,2,1,"div",7),e(98,`
              `),n(),e(99,`
            `),n(),e(100,`
            `),i(101,"div",4),e(102,`
              `),i(103,"div",5),e(104,`
                `),i(105,"label",6),e(106,"Longitude:"),n(),e(107,`
                `),d(108,Ai,2,1,"div",7),e(109,`
              `),n(),e(110,`
            `),n(),e(111,`
            `),i(112,"div",4),e(113,`
              `),i(114,"div",5),e(115,`
                `),i(116,"label",6),e(117,"Created At:"),n(),e(118,`
                `),d(119,Li,3,3,"div",7),e(120,`
              `),n(),e(121,`
            `),n(),e(122,`
            `),i(123,"div",4),e(124,`
              `),i(125,"div",5),e(126,`
                `),i(127,"label",6),e(128,"Updated At:"),n(),e(129,`
                `),d(130,Bi,3,3,"div",7),e(131,`
              `),n(),e(132,`
            `),n(),e(133,`
          `),n(),e(134,`
          `),i(135,"div",9),e(136,`
            `),i(137,"button",10),e(138,"Cancel"),n(),e(139,`
          `),n(),e(140,`
        `),n(),e(141,`

      `),n(),e(142,`
    `),n(),e(143,`
  `),n(),e(144,`
`),n()),o&2&&(a("ngIf",t.mProgress()),m(20),a("ngIf",t.item.owner),m(11),a("ngIf",t.item.size),m(11),a("ngIf",t.item.soil_profile),m(11),a("ngIf",t.item.coffee_species_id),m(11),a("ngIf",t.item.cooperative_society_id),m(11),a("ngIf",t.item.country),m(11),a("ngIf",t.item.county),m(11),a("ngIf",t.item.latitude),m(11),a("ngIf",t.item.longitude),m(11),a("ngIf",t.item.created_at),m(11),a("ngIf",t.item.updated_at))},dependencies:[L,B,V,k,D,W,z,de],encapsulation:2})}};var ie=Le(st());var ki=["mapContainer"];function Di(r,l){r&1&&v(0,"app-progress")}var Pe=class r{constructor(l,o,t){this.mCoffeePlotService=l;this.mToastrService=o;this.mAppContextService=t;this.mProgress=j(!1);this.mPlots={}}ngOnInit(){}ngAfterViewInit(){this.map=ie.map(this.mapContainer.nativeElement,{preferCanvas:!0}),ie.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(this.map),this.mProgress.set(!0),this.mCoffeePlotService.unpaginatedItems().subscribe({next:l=>{if(l){this.mPlots=l.data.coffee_plots,console.log("mPlots",this.mPlots);let t={type:"FeatureCollection",features:l.data.coffee_plots.map(s=>({type:"Feature",properties:{id:s.id,owner_id:s.owner_id,area_ha:s.size,coffee_species:s.coffee_species?.name??"N/A",deforestation_status_id:s.deforestation_status_id,status_id:s.status_id},geometry:JSON.parse(s.geo_json_geometry)}))},p=ie.geoJSON(t,{style:s=>({color:s?.properties?.deforestation_status_id===2?"#224326":"#E2251D",weight:2,fillColor:s?.properties?.deforestation_status_id===2?"#62a66b":"#F5B6B3",fillOpacity:.5}),onEachFeature:(s,x)=>{let y=s.properties;x.bindTooltip(`${y.area_ha} ha`,{permanent:!0,direction:"center",className:"parcel-label"}),x.bindPopup(`
                <strong>Coffee Plot</strong><br>
                Area: ${y.area_ha} ha<br>
                Species: ${y.coffee_species}
              `)}}).addTo(this.map);p.getBounds().isValid()&&this.map.fitBounds(p.getBounds()),this.mProgress.set(!1)}},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}})}ngOnDestroy(){this.map?.remove()}static{this.\u0275fac=function(o){return new(o||r)(u(q),u(R),u(M))}}static{this.\u0275cmp=A({type:r,selectors:[["app-locations"]],viewQuery:function(o,t){if(o&1&&De(ki,5),o&2){let p;We(p=ze())&&(t.mapContainer=p.first)}},standalone:!1,decls:30,vars:1,consts:[["mapContainer",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-12"],["id","map"],[1,"mt-3","text-end"],["routerLink","/coffee-plots","type","button",1,"btn","btn-light"]],template:function(o,t){o&1&&(d(0,Di,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div"),e(10,`
          `),i(11,"div",4),e(12,`
            `),i(13,"div",5),e(14,`
              `),v(15,"div",6,0),e(17,`
            `),n(),e(18,`
          `),n(),e(19,`
          `),i(20,"div",7),e(21,`
            `),i(22,"button",8),e(23,"Cancel"),n(),e(24,`
          `),n(),e(25,`
        `),n(),e(26,`

      `),n(),e(27,`
    `),n(),e(28,`
  `),n(),e(29,`
`),n()),o&2&&a("ngIf",t.mProgress())},dependencies:[L,B,V,k,D,W,z],styles:["#map[_ngcontent-%COMP%]{width:100%;height:600px}"]})}};var Wi=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Ie,data:{title:"Coffee Plots"}},{path:"create",component:xe,data:{title:"Coffee Plots / Create"}},{path:"edit/:id",component:Fe,data:{title:"Coffee Plots / Edit"}},{path:"show/:id",component:Te,data:{title:"Coffee Plots / Show"}},{path:"locations",component:Pe,data:{title:"Coffee Plots / Locations"}}],we=class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=ae({type:r})}static{this.\u0275inj=me({imports:[se,Ae.forChild(Wi),Ae]})}};var dt=class r{static{this.\u0275fac=function(o){return new(o||r)}}static{this.\u0275mod=ae({type:r})}static{this.\u0275inj=me({imports:[se,we,nt,Qe,Ye,Ke,Xe,Ze,it,lt,$e]})}};export{dt as CoffeePlotModule};
