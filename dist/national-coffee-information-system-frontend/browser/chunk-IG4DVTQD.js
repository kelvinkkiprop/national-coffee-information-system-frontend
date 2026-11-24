import{a as It}from"./chunk-D5MIKHAE.js";import{a as Be,b as X,c as u,d as Z,e as ee,f as Ct,g as ht,h as te,i as Re,j as ie,k as ne,l as me,m as de,n as se,o as ce,p as St}from"./chunk-WUV7VT53.js";import{a as k}from"./chunk-YFU6KPVP.js";import{a as j,b as Oe,c as N,e as D}from"./chunk-D2DXKTVY.js";import{$ as pt,Ca as gt,Da as xt,Ea as vt,G as Xe,Ja as yt,M as dt,Q as ke,R as st,X as K,Y as $,_ as ct,c as U,d as H,e as A,g as Ve,ia as _t,j as De,ka as J,la as Q,n as lt,na as ut,o as mt,ta as ft,v as z,x as le,y as V}from"./chunk-M56LXQJ4.js";import{Bc as Ae,Cb as m,Cc as ue,Db as n,Dc as fe,Eb as i,Fb as g,Gc as ot,K as Pe,Na as it,Oa as G,Ob as T,S as tt,Sa as l,Sb as C,T as Ne,Ub as c,W as Qe,aa as v,ab as x,ba as y,cc as nt,fb as M,gb as Le,hc as e,ic as f,jc as rt,kc as Me,lb as d,lc as I,ma as h,mc as w,nc as q,rc as S,sc as ae,vc as Y,wc as _,xc as at}from"./chunk-4BW25U23.js";import{a as we,b as qe,e as Tt}from"./chunk-2WH2EVR6.js";var L=class r{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${j.base_url}/licenses`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${j.base_url}/licenses`;return this.http.post(t,a)}getOneItem(a){let t=`${j.base_url}/licenses/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a,t){let o=`${j.base_url}/licenses/${a}`;return this.http.post(o,t)}deleteItem(a){let t=`${j.base_url}/licenses/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${j.base_url}/search-licenses`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${j.base_url}/unpaginated-items-licenses`;return this.http.get(a,this.mAppContextService.getHttpOptions())}filterLicenseTypes(a){let t=`${j.base_url}/filter-license-types/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusItem(a){let t=`${j.base_url}/next-previous-status-process-licenses/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}reviewApplicationItem(a){let t=`${j.base_url}/review-process-licenses/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}approvalApplicationItem(a){let t=`${j.base_url}/approve-process-licenses/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}onDownloadPermit(a){let t=new lt;t=t.set("Accept","application/pdf");let o=`${j.base_url}/licenses-pdf/${a.id}`;return this.http.get(o,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||r)(Qe(N),Qe(mt))}}static{this.\u0275prov=tt({token:r,factory:r.\u0275fac,providedIn:"root"})}};var b=r=>({"is-invalid":r});function wt(r,a){r&1&&g(0,"app-progress")}function qt(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),f(t.name)}}function Pt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Nt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Pt,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("category_id"))==null||t.errors==null?null:t.errors.required)}}function Lt(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t)),l(),f(t)}}function Mt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function At(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Mt,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("financial_year"))==null||t.errors==null?null:t.errors.required)}}function Vt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Dt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Vt,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("expiry_date").errors)==null?null:t.required)}}function kt(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),Me("",t.name," (",t.alias,")")}}function Ot(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Bt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Ot,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("issuing_body_id"))==null||t.errors==null?null:t.errors.required)}}function Rt(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),f(t.name)}}function Wt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function jt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Wt,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}function Gt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Yt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Gt,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("paid_share_capital").errors)==null?null:t.required)}}function Ut(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ht(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Ut,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("directors_details").errors)==null?null:t.required)}}function zt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Kt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,zt,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("years_of_technical_experience").errors)==null?null:t.required)}}function $t(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Jt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,$t,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("growers_represented_and_signed_agreements").errors)==null?null:t.required)}}function Qt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xt(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Qt,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("indemnity_against_professional_misconduct").errors)==null?null:t.required)}}function Zt(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function ei(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Zt,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("liquorer_cupping_facility_engaged").errors)==null?null:t.required)}}function ti(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",30),e(9,"Paid-up share capital (KES)(not less than 100,000):"),i(),e(10,`
                    `),g(11,"input",31),e(12,`
                    `),d(13,Yt,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",12),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",32),e(22,"Directors' Names (ID/Passport, KRA Clearance and Certificate of Good Conduct for Each Director):"),i(),e(23,`
                    `),n(24,"input",33),C("change",function(s){v(t);let p=c();return y(p.onDirectorsDetailsChange(s))}),i(),e(25,`
                    `),d(26,Ht,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",12),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",34),e(35,"Years of Technical Experience in the Coffee Business (CVs and Company Profile):"),i(),e(36,`
                    `),n(37,"input",35),C("change",function(s){v(t);let p=c();return y(p.onYearsOfTechnicalExperienceChange(s))}),i(),e(38,`
                    `),d(39,Kt,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
                `),n(43,"div",12),e(44,`
                  `),n(45,"div",6),e(46,`
                    `),n(47,"label",36),e(48,"Growers represented and signed agreements (Renewal):"),i(),e(49,`
                    `),n(50,"input",37),C("change",function(s){v(t);let p=c();return y(p.onGrowersRepresentedAndSignedAgreementsChange(s))}),i(),e(51,`
                    `),d(52,Jt,4,1,"div",11),e(53,`
                  `),i(),e(54,`
                `),i(),e(55,`
                `),n(56,"div",12),e(57,`
                  `),n(58,"div",6),e(59,`
                    `),n(60,"label",38),e(61,"Indemnity Against Professional Misconduct:"),i(),e(62,`
                    `),n(63,"input",39),C("change",function(s){v(t);let p=c();return y(p.onIndemnityAgainstProfessionalMisconductChange(s))}),i(),e(64,`
                    `),d(65,Xt,4,1,"div",11),e(66,`
                  `),i(),e(67,`
                `),i(),e(68,`
                 `),n(69,"div",5),e(70,`
                  `),n(71,"div",6),e(72,`
                    `),n(73,"label",40),e(74,"Liquorer/Cupping Facility Engaged (Where Applicable):"),i(),e(75,`
                    `),g(76,"textarea",41),e(77,`
                    `),d(78,ei,4,1,"div",11),e(79,`
                  `),i(),e(80,`
                `),i(),e(81,`
              `),i(),e(82,`
            `),i()}if(r&2){let t=c();l(11),m("ngClass",_(12,b,t.itemForm.get("paid_share_capital").invalid&&(t.itemForm.get("paid_share_capital").dirty||t.itemForm.get("paid_share_capital").touched))),l(2),m("ngIf",t.itemForm.get("paid_share_capital").invalid&&(t.itemForm.get("paid_share_capital").dirty||t.itemForm.get("paid_share_capital").touched)),l(11),m("ngClass",_(14,b,t.itemForm.get("directors_details").invalid&&(t.itemForm.get("directors_details").dirty||t.itemForm.get("directors_details").touched))),l(2),m("ngIf",t.itemForm.get("directors_details").invalid&&(t.itemForm.get("directors_details").dirty||t.itemForm.get("directors_details").touched)),l(11),m("ngClass",_(16,b,t.itemForm.get("years_of_technical_experience").invalid&&(t.itemForm.get("years_of_technical_experience").dirty||t.itemForm.get("years_of_technical_experience").touched))),l(2),m("ngIf",t.itemForm.get("years_of_technical_experience").invalid&&(t.itemForm.get("years_of_technical_experience").dirty||t.itemForm.get("years_of_technical_experience").touched)),l(11),m("ngClass",_(18,b,t.itemForm.get("growers_represented_and_signed_agreements").invalid&&(t.itemForm.get("growers_represented_and_signed_agreements").dirty||t.itemForm.get("growers_represented_and_signed_agreements").touched))),l(2),m("ngIf",t.itemForm.get("growers_represented_and_signed_agreements").invalid&&(t.itemForm.get("growers_represented_and_signed_agreements").dirty||t.itemForm.get("growers_represented_and_signed_agreements").touched)),l(11),m("ngClass",_(20,b,t.itemForm.get("indemnity_against_professional_misconduct").invalid&&(t.itemForm.get("indemnity_against_professional_misconduct").dirty||t.itemForm.get("indemnity_against_professional_misconduct").touched))),l(2),m("ngIf",t.itemForm.get("indemnity_against_professional_misconduct").invalid&&(t.itemForm.get("indemnity_against_professional_misconduct").dirty||t.itemForm.get("indemnity_against_professional_misconduct").touched)),l(11),m("ngClass",_(22,b,t.itemForm.get("liquorer_cupping_facility_engaged").invalid&&(t.itemForm.get("liquorer_cupping_facility_engaged").dirty||t.itemForm.get("liquorer_cupping_facility_engaged").touched))),l(2),m("ngIf",t.itemForm.get("liquorer_cupping_facility_engaged").invalid&&(t.itemForm.get("liquorer_cupping_facility_engaged").dirty||t.itemForm.get("liquorer_cupping_facility_engaged").touched))}}function ii(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function ni(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,ii,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("license_purpose").errors)==null?null:t.required)}}function ri(r,a){if(r&1&&(n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",42),e(9,"License Purpose (choose (i)or(ii)): "),g(10,"br"),e(11,"(i) Buy clean coffee at the exchange for (a)export,(b)local sale, (c)local value addition, OR "),g(12,"br"),e(13,"(ii) Import clean coffee for secondary processing in Kenya"),i(),e(14,`
                    `),g(15,"input",43),e(16,`
                    `),d(17,ni,4,1,"div",11),e(18,`
                  `),i(),e(19,`
                `),i(),e(20,`
              `),i(),e(21,`
            `),i()),r&2){let t=c();l(15),m("ngClass",_(2,b,t.itemForm.get("license_purpose").invalid&&(t.itemForm.get("license_purpose").dirty||t.itemForm.get("license_purpose").touched))),l(2),m("ngIf",t.itemForm.get("license_purpose").invalid&&(t.itemForm.get("license_purpose").dirty||t.itemForm.get("license_purpose").touched))}}function ai(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function oi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,ai,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("directors_name_address_and_occupations").errors)==null?null:t.required)}}function li(r,a){if(r&1&&(n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",44),e(9,"Full Names, Address and Occupations of the Directors:"),i(),e(10,`
                    `),g(11,"textarea",45),e(12,`
                    `),d(13,oi,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
              `),i(),e(17,`
            `),i()),r&2){let t=c();l(11),m("ngClass",_(2,b,t.itemForm.get("directors_name_address_and_occupations").invalid&&(t.itemForm.get("directors_name_address_and_occupations").dirty||t.itemForm.get("directors_name_address_and_occupations").touched))),l(2),m("ngIf",t.itemForm.get("directors_name_address_and_occupations").invalid&&(t.itemForm.get("directors_name_address_and_occupations").dirty||t.itemForm.get("directors_name_address_and_occupations").touched))}}function mi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function di(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,mi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("year_of_certification").errors)==null?null:t.required)}}function si(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function ci(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,si,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("current_occupation").errors)==null?null:t.required)}}function pi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function _i(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,pi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("coffee_tasting_expert_certificate").errors)==null?null:t.required)}}function ui(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",12),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",46),e(9,"Year of Certification (By Coffee Board of Kenya):"),i(),e(10,`
                    `),g(11,"input",47),e(12,`
                    `),d(13,di,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",12),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",48),e(22,"Current Occupation:"),i(),e(23,`
                    `),g(24,"input",49),e(25,`
                    `),d(26,ci,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",5),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",50),e(35,"Coffee Tasting Expert Certificate:"),i(),e(36,`
                    `),n(37,"input",51),C("change",function(s){v(t);let p=c();return y(p.onCoffeeTastingExpertCertificateChange(s))}),i(),e(38,`
                    `),d(39,_i,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
              `),i(),e(43,`
            `),i()}if(r&2){let t=c();l(11),m("ngClass",_(6,b,t.itemForm.get("year_of_certification").invalid&&(t.itemForm.get("year_of_certification").dirty||t.itemForm.get("year_of_certification").touched))),l(2),m("ngIf",t.itemForm.get("year_of_certification").invalid&&(t.itemForm.get("year_of_certification").dirty||t.itemForm.get("year_of_certification").touched)),l(11),m("ngClass",_(8,b,t.itemForm.get("current_occupation").invalid&&(t.itemForm.get("current_occupation").dirty||t.itemForm.get("current_occupation").touched))),l(2),m("ngIf",t.itemForm.get("current_occupation").invalid&&(t.itemForm.get("current_occupation").dirty||t.itemForm.get("current_occupation").touched)),l(11),m("ngClass",_(10,b,t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))),l(2),m("ngIf",t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))}}function fi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function gi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,fi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("milling_capacity").errors)==null?null:t.required)}}function xi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function vi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,xi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("comprehensive_insurance_policy").errors)==null?null:t.required)}}function yi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ci(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,yi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("mill_certification").errors)==null?null:t.required)}}function hi(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",52),e(9,"Milling Capacity for Parchment and	Buni (Tonnes per hour):"),i(),e(10,`
                    `),g(11,"textarea",53),e(12,`
                    `),d(13,gi,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",12),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",54),e(22,"Comprehensive Insurance Policy:"),i(),e(23,`
                    `),n(24,"input",55),C("change",function(s){v(t);let p=c();return y(p.onComprehensiveInsurancePolicyChange(s))}),i(),e(25,`
                    `),d(26,vi,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",12),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",56),e(35,"Mill Certification (If Any):"),i(),e(36,`
                    `),n(37,"input",57),C("change",function(s){v(t);let p=c();return y(p.onMillCertificationChange(s))}),i(),e(38,`
                    `),d(39,Ci,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
              `),i(),e(43,`
            `),i()}if(r&2){let t=c();l(11),m("ngClass",_(6,b,t.itemForm.get("milling_capacity").invalid&&(t.itemForm.get("milling_capacity").dirty||t.itemForm.get("milling_capacity").touched))),l(2),m("ngIf",t.itemForm.get("milling_capacity").invalid&&(t.itemForm.get("milling_capacity").dirty||t.itemForm.get("milling_capacity").touched)),l(11),m("ngClass",_(8,b,t.itemForm.get("comprehensive_insurance_policy").invalid&&(t.itemForm.get("comprehensive_insurance_policy").dirty||t.itemForm.get("comprehensive_insurance_policy").touched))),l(2),m("ngIf",t.itemForm.get("comprehensive_insurance_policy").invalid&&(t.itemForm.get("comprehensive_insurance_policy").dirty||t.itemForm.get("comprehensive_insurance_policy").touched)),l(11),m("ngClass",_(10,b,t.itemForm.get("mill_certification").invalid&&(t.itemForm.get("mill_certification").dirty||t.itemForm.get("mill_certification").touched))),l(2),m("ngIf",t.itemForm.get("mill_certification").invalid&&(t.itemForm.get("mill_certification").dirty||t.itemForm.get("mill_certification").touched))}}function Si(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function bi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Si,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("company_officials").errors)==null?null:t.required)}}function Ei(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Fi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Ei,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("licensed_liquorers_engaged").errors)==null?null:t.required)}}function Ti(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ii(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Ti,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("laboratory_facilities").errors)==null?null:t.required)}}function wi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function qi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,wi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("services_to_be_offered").errors)==null?null:t.required)}}function Pi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ni(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Pi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("statutory_compliance").errors)==null?null:t.required)}}function Li(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",58),e(9,"Company Officials (Names and ID/Passport No):"),i(),e(10,`
                    `),n(11,"input",59),C("change",function(s){v(t);let p=c();return y(p.onCompanyOfficialsChange(s))}),i(),e(12,`
                    `),d(13,bi,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",5),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",60),e(22,"Licensed Liquorers Engaged (Names and Practising Licence No):"),i(),e(23,`
                    `),g(24,"textarea",61),e(25,`
                    `),d(26,Fi,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",12),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",62),e(35,"Laboratory Facilities (Roasting, grinding, cupping, moisture analysis and other equipment):"),i(),e(36,`
                    `),g(37,"textarea",63),e(38,`
                    `),d(39,Ii,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
                `),n(43,"div",12),e(44,`
                  `),n(45,"div",6),e(46,`
                    `),n(47,"label",64),e(48,"Services to be Offered (Liquoring and quality analysis, Training on coffee quality, Other-specify):"),i(),e(49,`
                    `),g(50,"textarea",65),e(51,`
                    `),d(52,qi,4,1,"div",11),e(53,`
                  `),i(),e(54,`
                `),i(),e(55,`
                 `),n(56,"div",5),e(57,`
                  `),n(58,"div",6),e(59,`
                    `),n(60,"label",66),e(61,"Statutory Compliance (Combine NEMA certificate, OHSA certificate, Public health certificate,Tax compliance certificate):"),i(),e(62,`
                    `),n(63,"input",67),C("change",function(s){v(t);let p=c();return y(p.onStatutoryComplianceChange(s))}),i(),e(64,`
                    `),d(65,Ni,4,1,"div",11),e(66,`
                  `),i(),e(67,`
                `),i(),e(68,`
              `),i(),e(69,`
            `),i()}if(r&2){let t=c();l(11),m("ngClass",_(10,b,t.itemForm.get("company_officials").invalid&&(t.itemForm.get("company_officials").dirty||t.itemForm.get("company_officials").touched))),l(2),m("ngIf",t.itemForm.get("company_officials").invalid&&(t.itemForm.get("company_officials").dirty||t.itemForm.get("company_officials").touched)),l(11),m("ngClass",_(12,b,t.itemForm.get("licensed_liquorers_engaged").invalid&&(t.itemForm.get("licensed_liquorers_engaged").dirty||t.itemForm.get("licensed_liquorers_engaged").touched))),l(2),m("ngIf",t.itemForm.get("licensed_liquorers_engaged").invalid&&(t.itemForm.get("licensed_liquorers_engaged").dirty||t.itemForm.get("licensed_liquorers_engaged").touched)),l(11),m("ngClass",_(14,b,t.itemForm.get("laboratory_facilities").invalid&&(t.itemForm.get("laboratory_facilities").dirty||t.itemForm.get("laboratory_facilities").touched))),l(2),m("ngIf",t.itemForm.get("laboratory_facilities").invalid&&(t.itemForm.get("laboratory_facilities").dirty||t.itemForm.get("laboratory_facilities").touched)),l(11),m("ngClass",_(16,b,t.itemForm.get("services_to_be_offered").invalid&&(t.itemForm.get("services_to_be_offered").dirty||t.itemForm.get("services_to_be_offered").touched))),l(2),m("ngIf",t.itemForm.get("services_to_be_offered").invalid&&(t.itemForm.get("services_to_be_offered").dirty||t.itemForm.get("services_to_be_offered").touched)),l(11),m("ngClass",_(18,b,t.itemForm.get("statutory_compliance").invalid&&(t.itemForm.get("statutory_compliance").dirty||t.itemForm.get("statutory_compliance").touched))),l(2),m("ngIf",t.itemForm.get("statutory_compliance").invalid&&(t.itemForm.get("statutory_compliance").dirty||t.itemForm.get("statutory_compliance").touched))}}function Mi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ai(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Mi,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("self_declaration_form").errors)==null?null:t.required)}}function Vi(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",6),e(3,`
                `),n(4,"label",68),e(5,"Self-declaration (Form M):"),i(),e(6,`
                `),n(7,"input",69),C("change",function(s){v(t);let p=c();return y(p.onSelfDeclarationFormChange(s))}),i(),e(8,`
                `),d(9,Ai,4,1,"div",11),e(10,`
              `),i(),e(11,`
            `),i()}if(r&2){let t=c();l(7),m("ngClass",_(2,b,t.itemForm.get("self_declaration_form").invalid&&(t.itemForm.get("self_declaration_form").dirty||t.itemForm.get("self_declaration_form").touched))),l(2),m("ngIf",t.itemForm.get("self_declaration_form").invalid&&(t.itemForm.get("self_declaration_form").dirty||t.itemForm.get("self_declaration_form").touched))}}function Di(r,a){r&1&&(n(0,"div"),e(1,"You must accept to proceed."),i())}function ki(r,a){if(r&1&&(n(0,"div",29),e(1,`
                `),d(2,Di,2,0,"div",0),e(3,`
              `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("commitment_declaration").errors)==null?null:t.requiredTrue)}}var We=class r{constructor(a,t,o,s,p){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=o;this.router=s;this.fb=p;this.mProgress=h(!1);this.mFinancialYears=[];this.itemForm=this.fb.group({category_id:["",u.required],financial_year:["",u.required],expiry_date:["",u.required],type_id:["",u.required],issuing_body_id:["",u.required],paid_share_capital:["",u.nullValidator],directors_details:["",u.nullValidator],years_of_technical_experience:["",u.nullValidator],growers_represented_and_signed_agreements:["",u.nullValidator],indemnity_against_professional_misconduct:["",u.nullValidator],liquorer_cupping_facility_engaged:["",u.nullValidator],license_purpose:["",u.nullValidator],directors_name_address_and_occupations:["",u.nullValidator],year_of_certification:["",u.nullValidator],current_occupation:["",u.nullValidator],coffee_tasting_expert_certificate:["",u.nullValidator],milling_capacity:["",u.nullValidator],comprehensive_insurance_policy:["",u.nullValidator],mill_certification:["",u.nullValidator],company_officials:["",u.nullValidator],licensed_liquorers_engaged:["",u.nullValidator],laboratory_facilities:["",u.nullValidator],services_to_be_offered:["",u.nullValidator],statutory_compliance:["",u.nullValidator],self_declaration_form:["",u.nullValidator],commitment_declaration:[!1,u.requiredTrue]})}ngOnInit(){this.loadUnpaginatedItems(),this.loadFinancialYearsItems()}onSubmit(a){let t=new FormData;t.append("category_id",a.category_id),t.append("financial_year",a.financial_year),t.append("expiry_date",a.expiry_date),t.append("issuing_body_id",a.issuing_body_id),t.append("type_id",a.type_id);let o=a.type_id;t.append("paid_share_capital",a.paid_share_capital),o==1?(t.append("directors_details",this.directors_details_file,this.directors_details_file.name),t.append("years_of_technical_experience",this.years_of_technical_experience_file,this.years_of_technical_experience_file.name),t.append("growers_represented_and_signed_agreements",this.growers_represented_and_signed_agreements_file,this.growers_represented_and_signed_agreements_file.name),t.append("indemnity_against_professional_misconduct",this.indemnity_against_professional_misconduct_file,this.indemnity_against_professional_misconduct_file.name)):(t.append("directors_details",""),t.append("years_of_technical_experience",""),t.append("growers_represented_and_signed_agreements",""),t.append("indemnity_against_professional_misconduct","")),t.append("liquorer_cupping_facility_engaged",a.liquorer_cupping_facility_engaged),t.append("license_purpose",a.license_purpose),t.append("directors_name_address_and_occupations",a.directors_name_address_and_occupations),t.append("year_of_certification",a.year_of_certification),t.append("current_occupation",a.current_occupation),o==4?t.append("coffee_tasting_expert_certificate",this.coffee_tasting_expert_certificate_file,this.coffee_tasting_expert_certificate_file.name):t.append("coffee_tasting_expert_certificate",""),t.append("milling_capacity",a.milling_capacity),o==5?(t.append("comprehensive_insurance_policy",this.comprehensive_insurance_policy_file,this.comprehensive_insurance_policy_file.name),t.append("mill_certification",this.mill_certification_file,this.mill_certification_file.name)):(t.append("comprehensive_insurance_policy",""),t.append("mill_certification","")),o==6?(t.append("company_officials",this.company_officials_file,this.company_officials_file.name),t.append("statutory_compliance",this.statutory_compliance_file,this.statutory_compliance_file.name)):(t.append("company_officials",""),t.append("statutory_compliance","")),t.append("licensed_liquorers_engaged",a.licensed_liquorers_engaged),t.append("laboratory_facilities",a.laboratory_facilities),t.append("services_to_be_offered",a.services_to_be_offered),o==1||o==6?t.append("self_declaration_form",this.self_declaration_form_file,this.self_declaration_form_file.name):t.append("self_declaration_form",""),t.append("commitment_declaration",a.commitment_declaration),t.append("_method","POST"),this.mProgress.set(!0),this.mLicenseService.createItem(t).subscribe({next:s=>{if(s){if(s.status=="success"){this.mToastrService.success(s.message);let p=s.data.payment?.id;p?this.router.navigateByUrl("/payments/show/"+p):this.router.navigateByUrl("/licenses")}else this.mToastrService.warning(s.message);this.mProgress.set(!1)}},error:s=>{s.error.message&&this.mToastrService.warning(s.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mLicenseService.unpaginatedItems().subscribe({next:a=>{a&&(this.mIssuingBodies=a.data.issuing_bodies,this.mLicenseCategories=a.data.license_categories,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}loadFinancialYearsItems(){let a=new Date,t=a.getFullYear(),o=a.getMonth()>=6?t:t-1;for(let s=0;s<5;s++){let p=o-s;this.mFinancialYears.push(`${p}/${p+1}`)}this.itemForm.get("financial_year")?.valueChanges.pipe(Pe(this.itemForm.get("financial_year")?.value)).subscribe(s=>{if(s){let p=s.split("/")[1];this.itemForm.patchValue({expiry_date:`${p}-06-30`},{emitEvent:!1})}})}onIssuingBodyChange(a){let t=a.value;this.mProgress.set(!0),this.mLicenseService.filterLicenseTypes(t).subscribe({next:o=>{o&&(this.mLicenseTypes=o,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onDirectorsDetailsChange(a){if(a.target.value){let t=a.target.files[0];this.directors_details_file=t}}onYearsOfTechnicalExperienceChange(a){if(a.target.value){let t=a.target.files[0];this.years_of_technical_experience_file=t}}onGrowersRepresentedAndSignedAgreementsChange(a){if(a.target.value){let t=a.target.files[0];this.growers_represented_and_signed_agreements_file=t}}onIndemnityAgainstProfessionalMisconductChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_against_professional_misconduct_file=t}}onCoffeeTastingExpertCertificateChange(a){if(a.target.value){let t=a.target.files[0];this.coffee_tasting_expert_certificate_file=t}}onComprehensiveInsurancePolicyChange(a){if(a.target.value){let t=a.target.files[0];this.comprehensive_insurance_policy_file=t}}onMillCertificationChange(a){if(a.target.value){let t=a.target.files[0];this.mill_certification_file=t}}onCompanyOfficialsChange(a){if(a.target.value){let t=a.target.files[0];this.company_officials_file=t}}onStatutoryComplianceChange(a){if(a.target.value){let t=a.target.files[0];this.statutory_compliance_file=t}}onSelfDeclarationFormChange(a){if(a.target.value){let t=a.target.files[0];this.self_declaration_form_file=t}}static{this.\u0275fac=function(t){return new(t||r)(x(L),x(D),x(N),x(le),x(ce))}}static{this.\u0275cmp=M({type:r,selectors:[["app-create"]],standalone:!1,decls:150,vars:35,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","category_id",1,"col-form-label","required"],["formControlName","category_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","financial_year",1,"col-form-label","required"],["formControlName","financial_year","type","text",1,"form-control",3,"ngClass"],["for","expiry_date",1,"col-form-label","required"],["formControlName","expiry_date","type","date","readonly","",1,"form-control",3,"ngClass"],["for","issuing_body_id",1,"col-form-label","required1"],["formControlName","issuing_body_id","type","text",1,"form-control",3,"change","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["class","col-md-12",4,"ngIf"],[1,"form-check"],["type","checkbox","formControlName","commitment_declaration",1,"form-check-input"],["for","commitment_declaration",1,"form-check-label"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","paid_share_capital",1,"col-form-label","required"],["formControlName","paid_share_capital","type","number",1,"form-control",3,"ngClass"],["for","directors_details",1,"col-form-label","required"],["formControlName","directors_details","type","file",1,"form-control",3,"change","ngClass"],["for","years_of_technical_experience",1,"col-form-label","required"],["formControlName","years_of_technical_experience","type","file",1,"form-control",3,"change","ngClass"],["for","growers_represented_and_signed_agreements",1,"col-form-label","required"],["formControlName","growers_represented_and_signed_agreements","type","file",1,"form-control",3,"change","ngClass"],["for","indemnity_against_professional_misconduct",1,"col-form-label","required"],["formControlName","indemnity_against_professional_misconduct","type","file",1,"form-control",3,"change","ngClass"],["for","liquorer_cupping_facility_engaged",1,"col-form-label","required1"],["formControlName","liquorer_cupping_facility_engaged","type","text",1,"form-control",3,"ngClass"],["for","license_purpose",1,"col-form-label","required"],["formControlName","license_purpose","type","text",1,"form-control",3,"ngClass"],["for","directors_name_address_and_occupations",1,"col-form-label","required"],["formControlName","directors_name_address_and_occupations","type","text",1,"form-control",3,"ngClass"],["for","year_of_certification",1,"col-form-label","required"],["formControlName","year_of_certification","type","number",1,"form-control",3,"ngClass"],["for","current_occupation",1,"col-form-label","required"],["formControlName","current_occupation","type","text",1,"form-control",3,"ngClass"],["for","coffee_tasting_expert_certificate",1,"col-form-label","required"],["formControlName","coffee_tasting_expert_certificate","type","file",1,"form-control",3,"change","ngClass"],["for","milling_capacity",1,"col-form-label","required"],["formControlName","milling_capacity","type","text",1,"form-control",3,"ngClass"],["for","comprehensive_insurance_policy",1,"col-form-label","required1"],["formControlName","comprehensive_insurance_policy","type","file",1,"form-control",3,"change","ngClass"],["for","mill_certification",1,"col-form-label","required1"],["formControlName","mill_certification","type","file",1,"form-control",3,"change","ngClass"],["for","company_officials",1,"col-form-label","required"],["formControlName","company_officials","type","file",1,"form-control",3,"change","ngClass"],["for","licensed_liquorers_engaged",1,"col-form-label","required"],["formControlName","licensed_liquorers_engaged","type","text",1,"form-control",3,"ngClass"],["for","laboratory_facilities",1,"col-form-label","required"],["formControlName","laboratory_facilities","type","text",1,"form-control",3,"ngClass"],["for","services_to_be_offered",1,"col-form-label","required"],["formControlName","services_to_be_offered","type","text",1,"form-control",3,"ngClass"],["for","statutory_compliance",1,"col-form-label","required"],["formControlName","statutory_compliance","type","file",1,"form-control",3,"change","ngClass"],["for","self_declaration_form",1,"col-form-label","required"],["formControlName","self_declaration_form","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,o){if(t&1&&(d(0,wt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"form",3),C("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`
          `),n(11,"div",4),e(12,`
            `),n(13,"div",5),e(14,`
              `),n(15,"div",6),e(16,`
                `),n(17,"label",7),e(18,"Application Category:"),i(),e(19,`
                `),n(20,"select",8),e(21,`
                  `),n(22,"option",9),e(23,"--- Select category ---"),i(),e(24,`
                  `),d(25,qt,2,3,"option",10),e(26,`
                `),i(),e(27,`
                `),d(28,Nt,4,1,"div",11),e(29,`
              `),i(),e(30,`
            `),i(),e(31,`
            `),n(32,"div",12),e(33,`
              `),n(34,"div",6),e(35,`
                `),n(36,"label",13),e(37,"Year/Period:"),i(),e(38,`
                `),n(39,"select",14),e(40,`
                  `),n(41,"option",9),e(42,"--- Select year ---"),i(),e(43,`
                  `),d(44,Lt,2,3,"option",10),e(45,`
                `),i(),e(46,`
                `),d(47,At,4,1,"div",11),e(48,`
              `),i(),e(49,`
            `),i(),e(50,`
            `),n(51,"div",12),e(52,`
              `),n(53,"div",6),e(54,`
                `),n(55,"label",15),e(56,"Expiry Date:"),i(),e(57,`
                `),g(58,"input",16),e(59,`
                `),d(60,Dt,4,1,"div",11),e(61,`
              `),i(),e(62,`
            `),i(),e(63,`
            `),n(64,"div",5),e(65,`
              `),n(66,"div",6),e(67,`
                `),n(68,"label",17),e(69,"Issuing Body:"),i(),e(70,`
                `),n(71,"select",18),C("change",function(p){return o.onIssuingBodyChange(p.target)}),e(72,`
                  `),n(73,"option",9),e(74,"--- Select body ---"),i(),e(75,`
                  `),d(76,kt,2,4,"option",10),e(77,`
                `),i(),e(78,`
                `),d(79,Bt,4,1,"div",11),e(80,`
              `),i(),e(81,`
            `),i(),e(82,`
            `),n(83,"div",5),e(84,`
              `),n(85,"div",6),e(86,`
                `),n(87,"label",19),e(88,"License Type:"),i(),e(89,`
                `),n(90,"select",20),e(91,`
                  `),n(92,"option",9),e(93,"--- Select type ---"),i(),e(94,`
                  `),d(95,Rt,2,3,"option",10),e(96,`
                `),i(),e(97,`
                `),d(98,jt,4,1,"div",11),e(99,`
              `),i(),e(100,`
            `),i(),e(101,`
            `),e(102,`
            `),d(103,ti,83,24,"div",21),e(104,`
            `),e(105,`
            `),d(106,ri,22,4,"div",21),e(107,`
            `),e(108,`
            `),d(109,li,18,4,"div",21),e(110,`
            `),e(111,`
            `),d(112,ui,44,12,"div",21),e(113,`
            `),e(114,`
            `),d(115,hi,44,12,"div",21),e(116,`
            `),e(117,`
            `),d(118,Li,70,20,"div",21),e(119,`
             `),e(120,`
            `),d(121,Vi,12,4,"div",21),e(122,`
            `),n(123,"div",5),e(124,`
              `),n(125,"div",22),e(126,`
                `),g(127,"input",23),e(128,`
                `),n(129,"label",24),e(130,`
                  By checking this, the applicant certifies that the information provided is accurate and commits to comply with the terms and conditions of the licence.
                `),i(),e(131,`
              `),i(),e(132,`
              `),d(133,ki,4,1,"div",11),e(134,`
            `),i(),e(135,`
          `),i(),e(136,`
          `),n(137,"div",25),e(138,`
            `),n(139,"button",26),e(140,"Cancel"),i(),e(141,`
            `),n(142,"button",27),e(143,"Submit"),i(),e(144,`
          `),i(),e(145,`
        `),i(),e(146,`

      `),i(),e(147,`
    `),i(),e(148,`
  `),i(),e(149,`
`),i()),t&2){let s,p,F,P,O,B,R,W,Se,be,Ee,Fe,Te,Ie,re;m("ngIf",o.mProgress()),l(9),m("formGroup",o.itemForm),l(11),m("ngClass",_(25,b,((s=o.itemForm.get("category_id"))==null?null:s.invalid)&&(((s=o.itemForm.get("category_id"))==null?null:s.dirty)||((s=o.itemForm.get("category_id"))==null?null:s.touched)))),l(5),m("ngForOf",o.mLicenseCategories),l(3),m("ngIf",((p=o.itemForm.get("category_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("category_id"))==null?null:p.dirty)||((p=o.itemForm.get("category_id"))==null?null:p.touched))),l(11),m("ngClass",_(27,b,((F=o.itemForm.get("financial_year"))==null?null:F.invalid)&&(((F=o.itemForm.get("financial_year"))==null?null:F.dirty)||((F=o.itemForm.get("financial_year"))==null?null:F.touched)))),l(5),m("ngForOf",o.mFinancialYears),l(3),m("ngIf",((P=o.itemForm.get("financial_year"))==null?null:P.invalid)&&(((P=o.itemForm.get("financial_year"))==null?null:P.dirty)||((P=o.itemForm.get("financial_year"))==null?null:P.touched))),l(11),m("ngClass",_(29,b,o.itemForm.get("expiry_date").invalid&&(o.itemForm.get("expiry_date").dirty||o.itemForm.get("expiry_date").touched))),l(2),m("ngIf",o.itemForm.get("expiry_date").invalid&&(o.itemForm.get("expiry_date").dirty||o.itemForm.get("expiry_date").touched)),l(11),m("ngClass",_(31,b,((O=o.itemForm.get("issuing_body_id"))==null?null:O.invalid)&&(((O=o.itemForm.get("issuing_body_id"))==null?null:O.dirty)||((O=o.itemForm.get("issuing_body_id"))==null?null:O.touched)))),l(5),m("ngForOf",o.mIssuingBodies),l(3),m("ngIf",((B=o.itemForm.get("issuing_body_id"))==null?null:B.invalid)&&(((B=o.itemForm.get("issuing_body_id"))==null?null:B.dirty)||((B=o.itemForm.get("issuing_body_id"))==null?null:B.touched))),l(11),m("ngClass",_(33,b,((R=o.itemForm.get("type_id"))==null?null:R.invalid)&&(((R=o.itemForm.get("type_id"))==null?null:R.dirty)||((R=o.itemForm.get("type_id"))==null?null:R.touched)))),l(5),m("ngForOf",o.mLicenseTypes),l(3),m("ngIf",((W=o.itemForm.get("type_id"))==null?null:W.invalid)&&(((W=o.itemForm.get("type_id"))==null?null:W.dirty)||((W=o.itemForm.get("type_id"))==null?null:W.touched))),l(5),m("ngIf",((Se=o.itemForm.get("type_id"))==null?null:Se.value)==1),l(3),m("ngIf",((be=o.itemForm.get("type_id"))==null?null:be.value)==2),l(3),m("ngIf",((Ee=o.itemForm.get("type_id"))==null?null:Ee.value)==3),l(3),m("ngIf",((Fe=o.itemForm.get("type_id"))==null?null:Fe.value)==4),l(3),m("ngIf",((Te=o.itemForm.get("type_id"))==null?null:Te.value)==5),l(3),m("ngIf",((Ie=o.itemForm.get("type_id"))==null?null:Ie.value)==6),l(3),m("ngIf",((re=o.itemForm.get("type_id"))==null?null:re.value)==1||((re=o.itemForm.get("type_id"))==null?null:re.value)==6),l(12),m("ngIf",o.itemForm.get("commitment_declaration").invalid&&(o.itemForm.get("commitment_declaration").dirty||o.itemForm.get("commitment_declaration").touched)),l(9),m("disabled",o.itemForm.invalid)}},dependencies:[U,H,A,V,k,K,$,J,Q,te,de,se,X,Re,Be,me,Z,ee,ne,ie],encapsulation:2})}};var E=r=>({"is-invalid":r});function Oi(r,a){r&1&&g(0,"app-progress")}function Bi(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),f(t.name)}}function Ri(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Wi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Ri,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("category_id"))==null||t.errors==null?null:t.errors.required)}}function ji(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t)),l(),f(t)}}function Gi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Yi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Gi,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("financial_year"))==null||t.errors==null?null:t.errors.required)}}function Ui(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Hi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Ui,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("expiry_date").errors)==null?null:t.required)}}function zi(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),Me("",t.name," (",t.alias,")")}}function Ki(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function $i(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Ki,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("issuing_body_id"))==null||t.errors==null?null:t.errors.required)}}function Ji(r,a){if(r&1&&(n(0,"option",28),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),f(t.name)}}function Qi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xi(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Qi,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}function Zi(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function en(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Zi,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("paid_share_capital").errors)==null?null:t.required)}}function tn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function nn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,tn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("directors_details").errors)==null?null:t.required)}}function rn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function an(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,rn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("years_of_technical_experience").errors)==null?null:t.required)}}function on(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function ln(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,on,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("growers_represented_and_signed_agreements").errors)==null?null:t.required)}}function mn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function dn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,mn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("indemnity_against_professional_misconduct").errors)==null?null:t.required)}}function sn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function cn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,sn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("liquorer_cupping_facility_engaged").errors)==null?null:t.required)}}function pn(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",30),e(9,"Paid-up share capital (KES)(not less than 100,000):"),i(),e(10,`
                    `),n(11,"input",31),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.paid_share_capital,s)||(p.item.paid_share_capital=s),y(s)}),i(),e(12,`
                    `),d(13,en,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",12),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",32),e(22,"Directors' Names (ID/Passport, KRA Clearance and Certificate of Good Conduct for Each Director):"),i(),e(23,`
                    `),n(24,"input",33),C("change",function(s){v(t);let p=c();return y(p.onDirectorsDetailsChange(s))}),i(),e(25,`
                    `),d(26,nn,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",12),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",34),e(35,"Years of Technical Experience in the Coffee Business (CVs and Company Profile):"),i(),e(36,`
                    `),n(37,"input",35),C("change",function(s){v(t);let p=c();return y(p.onYearsOfTechnicalExperienceChange(s))}),i(),e(38,`
                    `),d(39,an,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
                `),n(43,"div",12),e(44,`
                  `),n(45,"div",6),e(46,`
                    `),n(47,"label",36),e(48,"Growers represented and signed agreements (Renewal):"),i(),e(49,`
                    `),n(50,"input",37),C("change",function(s){v(t);let p=c();return y(p.onGrowersRepresentedAndSignedAgreementsChange(s))}),i(),e(51,`
                    `),d(52,ln,4,1,"div",11),e(53,`
                  `),i(),e(54,`
                `),i(),e(55,`
                `),n(56,"div",12),e(57,`
                  `),n(58,"div",6),e(59,`
                    `),n(60,"label",38),e(61,"Indemnity Against Professional Misconduct:"),i(),e(62,`
                    `),n(63,"input",39),C("change",function(s){v(t);let p=c();return y(p.onIndemnityAgainstProfessionalMisconductChange(s))}),i(),e(64,`
                    `),d(65,dn,4,1,"div",11),e(66,`
                  `),i(),e(67,`
                `),i(),e(68,`
                 `),n(69,"div",5),e(70,`
                  `),n(71,"div",6),e(72,`
                    `),n(73,"label",40),e(74,"Liquorer/Cupping Facility Engaged (Where Applicable):"),i(),e(75,`
                    `),n(76,"textarea",41),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.liquorer_cupping_facility_engaged,s)||(p.item.liquorer_cupping_facility_engaged=s),y(s)}),i(),e(77,`
                    `),d(78,cn,4,1,"div",11),e(79,`
                  `),i(),e(80,`
                `),i(),e(81,`
              `),i(),e(82,`
            `),i()}if(r&2){let t=c();l(11),I("ngModel",t.item.paid_share_capital),m("ngClass",_(14,E,t.itemForm.get("paid_share_capital").invalid&&(t.itemForm.get("paid_share_capital").dirty||t.itemForm.get("paid_share_capital").touched))),l(2),m("ngIf",t.itemForm.get("paid_share_capital").invalid&&(t.itemForm.get("paid_share_capital").dirty||t.itemForm.get("paid_share_capital").touched)),l(11),m("ngClass",_(16,E,t.itemForm.get("directors_details").invalid&&(t.itemForm.get("directors_details").dirty||t.itemForm.get("directors_details").touched))),l(2),m("ngIf",t.itemForm.get("directors_details").invalid&&(t.itemForm.get("directors_details").dirty||t.itemForm.get("directors_details").touched)),l(11),m("ngClass",_(18,E,t.itemForm.get("years_of_technical_experience").invalid&&(t.itemForm.get("years_of_technical_experience").dirty||t.itemForm.get("years_of_technical_experience").touched))),l(2),m("ngIf",t.itemForm.get("years_of_technical_experience").invalid&&(t.itemForm.get("years_of_technical_experience").dirty||t.itemForm.get("years_of_technical_experience").touched)),l(11),m("ngClass",_(20,E,t.itemForm.get("growers_represented_and_signed_agreements").invalid&&(t.itemForm.get("growers_represented_and_signed_agreements").dirty||t.itemForm.get("growers_represented_and_signed_agreements").touched))),l(2),m("ngIf",t.itemForm.get("growers_represented_and_signed_agreements").invalid&&(t.itemForm.get("growers_represented_and_signed_agreements").dirty||t.itemForm.get("growers_represented_and_signed_agreements").touched)),l(11),m("ngClass",_(22,E,t.itemForm.get("indemnity_against_professional_misconduct").invalid&&(t.itemForm.get("indemnity_against_professional_misconduct").dirty||t.itemForm.get("indemnity_against_professional_misconduct").touched))),l(2),m("ngIf",t.itemForm.get("indemnity_against_professional_misconduct").invalid&&(t.itemForm.get("indemnity_against_professional_misconduct").dirty||t.itemForm.get("indemnity_against_professional_misconduct").touched)),l(11),I("ngModel",t.item.liquorer_cupping_facility_engaged),m("ngClass",_(24,E,t.itemForm.get("liquorer_cupping_facility_engaged").invalid&&(t.itemForm.get("liquorer_cupping_facility_engaged").dirty||t.itemForm.get("liquorer_cupping_facility_engaged").touched))),l(2),m("ngIf",t.itemForm.get("liquorer_cupping_facility_engaged").invalid&&(t.itemForm.get("liquorer_cupping_facility_engaged").dirty||t.itemForm.get("liquorer_cupping_facility_engaged").touched))}}function _n(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function un(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,_n,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("license_purpose").errors)==null?null:t.required)}}function fn(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",42),e(9,"License Purpose (choose (i)or(ii)): "),g(10,"br"),e(11,"(i) Buy clean coffee at the exchange for (a)export,(b)local sale, (c)local value addition, OR "),g(12,"br"),e(13,"(ii) Import clean coffee for secondary processing in Kenya"),i(),e(14,`
                    `),n(15,"input",43),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.license_purpose,s)||(p.item.license_purpose=s),y(s)}),i(),e(16,`
                    `),d(17,un,4,1,"div",11),e(18,`
                  `),i(),e(19,`
                `),i(),e(20,`
              `),i(),e(21,`
            `),i()}if(r&2){let t=c();l(15),I("ngModel",t.item.license_purpose),m("ngClass",_(3,E,t.itemForm.get("license_purpose").invalid&&(t.itemForm.get("license_purpose").dirty||t.itemForm.get("license_purpose").touched))),l(2),m("ngIf",t.itemForm.get("license_purpose").invalid&&(t.itemForm.get("license_purpose").dirty||t.itemForm.get("license_purpose").touched))}}function gn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function xn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,gn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("directors_name_address_and_occupations").errors)==null?null:t.required)}}function vn(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",44),e(9,"Full Names, Address and Occupations of the Directors:"),i(),e(10,`
                    `),n(11,"textarea",45),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.directors_name_address_and_occupations,s)||(p.item.directors_name_address_and_occupations=s),y(s)}),i(),e(12,`
                    `),d(13,xn,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
              `),i(),e(17,`
            `),i()}if(r&2){let t=c();l(11),I("ngModel",t.item.directors_name_address_and_occupations),m("ngClass",_(3,E,t.itemForm.get("directors_name_address_and_occupations").invalid&&(t.itemForm.get("directors_name_address_and_occupations").dirty||t.itemForm.get("directors_name_address_and_occupations").touched))),l(2),m("ngIf",t.itemForm.get("directors_name_address_and_occupations").invalid&&(t.itemForm.get("directors_name_address_and_occupations").dirty||t.itemForm.get("directors_name_address_and_occupations").touched))}}function yn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Cn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,yn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("year_of_certification").errors)==null?null:t.required)}}function hn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Sn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,hn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("current_occupation").errors)==null?null:t.required)}}function bn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function En(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,bn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("coffee_tasting_expert_certificate").errors)==null?null:t.required)}}function Fn(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",12),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",46),e(9,"Year of Certification (By Coffee Board of Kenya):"),i(),e(10,`
                    `),n(11,"input",47),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.year_of_certification,s)||(p.item.year_of_certification=s),y(s)}),i(),e(12,`
                    `),d(13,Cn,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",12),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",48),e(22,"Current Occupation:"),i(),e(23,`
                    `),n(24,"input",49),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.current_occupation,s)||(p.item.current_occupation=s),y(s)}),i(),e(25,`
                    `),d(26,Sn,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",5),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",50),e(35,"Coffee Tasting Expert Certificate:"),i(),e(36,`
                    `),n(37,"input",51),C("change",function(s){v(t);let p=c();return y(p.onCoffeeTastingExpertCertificateChange(s))}),i(),e(38,`
                    `),d(39,En,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
              `),i(),e(43,`
            `),i()}if(r&2){let t=c();l(11),I("ngModel",t.item.year_of_certification),m("ngClass",_(8,E,t.itemForm.get("year_of_certification").invalid&&(t.itemForm.get("year_of_certification").dirty||t.itemForm.get("year_of_certification").touched))),l(2),m("ngIf",t.itemForm.get("year_of_certification").invalid&&(t.itemForm.get("year_of_certification").dirty||t.itemForm.get("year_of_certification").touched)),l(11),I("ngModel",t.item.current_occupation),m("ngClass",_(10,E,t.itemForm.get("current_occupation").invalid&&(t.itemForm.get("current_occupation").dirty||t.itemForm.get("current_occupation").touched))),l(2),m("ngIf",t.itemForm.get("current_occupation").invalid&&(t.itemForm.get("current_occupation").dirty||t.itemForm.get("current_occupation").touched)),l(11),m("ngClass",_(12,E,t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))),l(2),m("ngIf",t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))}}function Tn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function In(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Tn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("milling_capacity").errors)==null?null:t.required)}}function wn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function qn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,wn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("comprehensive_insurance_policy").errors)==null?null:t.required)}}function Pn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Nn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Pn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("mill_certification").errors)==null?null:t.required)}}function Ln(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",52),e(9,"Milling Capacity for Parchment and	Buni (Tonnes per hour):"),i(),e(10,`
                    `),n(11,"textarea",53),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.milling_capacity,s)||(p.item.milling_capacity=s),y(s)}),i(),e(12,`
                    `),d(13,In,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",12),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",54),e(22,"Comprehensive Insurance Policy:"),i(),e(23,`
                    `),n(24,"input",55),C("change",function(s){v(t);let p=c();return y(p.onComprehensiveInsurancePolicyChange(s))}),i(),e(25,`
                    `),d(26,qn,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",12),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",56),e(35,"Mill Certification (If Any):"),i(),e(36,`
                    `),n(37,"input",57),C("change",function(s){v(t);let p=c();return y(p.onMillCertificationChange(s))}),i(),e(38,`
                    `),d(39,Nn,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
              `),i(),e(43,`
            `),i()}if(r&2){let t=c();l(11),I("ngModel",t.item.milling_capacity),m("ngClass",_(7,E,t.itemForm.get("milling_capacity").invalid&&(t.itemForm.get("milling_capacity").dirty||t.itemForm.get("milling_capacity").touched))),l(2),m("ngIf",t.itemForm.get("milling_capacity").invalid&&(t.itemForm.get("milling_capacity").dirty||t.itemForm.get("milling_capacity").touched)),l(11),m("ngClass",_(9,E,t.itemForm.get("comprehensive_insurance_policy").invalid&&(t.itemForm.get("comprehensive_insurance_policy").dirty||t.itemForm.get("comprehensive_insurance_policy").touched))),l(2),m("ngIf",t.itemForm.get("comprehensive_insurance_policy").invalid&&(t.itemForm.get("comprehensive_insurance_policy").dirty||t.itemForm.get("comprehensive_insurance_policy").touched)),l(11),m("ngClass",_(11,E,t.itemForm.get("mill_certification").invalid&&(t.itemForm.get("mill_certification").dirty||t.itemForm.get("mill_certification").touched))),l(2),m("ngIf",t.itemForm.get("mill_certification").invalid&&(t.itemForm.get("mill_certification").dirty||t.itemForm.get("mill_certification").touched))}}function Mn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function An(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Mn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("company_officials").errors)==null?null:t.required)}}function Vn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Dn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Vn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("licensed_liquorers_engaged").errors)==null?null:t.required)}}function kn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function On(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,kn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("laboratory_facilities").errors)==null?null:t.required)}}function Bn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Rn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Bn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("services_to_be_offered").errors)==null?null:t.required)}}function Wn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function jn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                      `),d(2,Wn,2,0,"div",0),e(3,`
                    `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("statutory_compliance").errors)==null?null:t.required)}}function Gn(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",4),e(3,`
                `),n(4,"div",5),e(5,`
                  `),n(6,"div",6),e(7,`
                    `),n(8,"label",58),e(9,"Company Officials (Names and ID/Passport No):"),i(),e(10,`
                    `),n(11,"input",59),C("change",function(s){v(t);let p=c();return y(p.onCompanyOfficialsChange(s))}),i(),e(12,`
                    `),d(13,An,4,1,"div",11),e(14,`
                  `),i(),e(15,`
                `),i(),e(16,`
                `),n(17,"div",5),e(18,`
                  `),n(19,"div",6),e(20,`
                    `),n(21,"label",60),e(22,"Licensed Liquorers Engaged (Names and Practising Licence No):"),i(),e(23,`
                    `),n(24,"textarea",61),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.licensed_liquorers_engaged,s)||(p.item.licensed_liquorers_engaged=s),y(s)}),i(),e(25,`
                    `),d(26,Dn,4,1,"div",11),e(27,`
                  `),i(),e(28,`
                `),i(),e(29,`
                `),n(30,"div",12),e(31,`
                  `),n(32,"div",6),e(33,`
                    `),n(34,"label",62),e(35,"Laboratory Facilities (Roasting, grinding, cupping, moisture analysis and other equipment):"),i(),e(36,`
                    `),n(37,"textarea",63),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.laboratory_facilities,s)||(p.item.laboratory_facilities=s),y(s)}),i(),e(38,`
                    `),d(39,On,4,1,"div",11),e(40,`
                  `),i(),e(41,`
                `),i(),e(42,`
                `),n(43,"div",12),e(44,`
                  `),n(45,"div",6),e(46,`
                    `),n(47,"label",64),e(48,"Services to be Offered (Liquoring and quality analysis, Training on coffee quality, Other-specify):"),i(),e(49,`
                    `),n(50,"textarea",65),q("ngModelChange",function(s){v(t);let p=c();return w(p.item.services_to_be_offered,s)||(p.item.services_to_be_offered=s),y(s)}),i(),e(51,`
                    `),d(52,Rn,4,1,"div",11),e(53,`
                  `),i(),e(54,`
                `),i(),e(55,`
                 `),n(56,"div",5),e(57,`
                  `),n(58,"div",6),e(59,`
                    `),n(60,"label",66),e(61,"Statutory Compliance (Combine NEMA certificate, OHSA certificate, Public health certificate,Tax compliance certificate):"),i(),e(62,`
                    `),n(63,"input",67),C("change",function(s){v(t);let p=c();return y(p.onStatutoryComplianceChange(s))}),i(),e(64,`
                    `),d(65,jn,4,1,"div",11),e(66,`
                  `),i(),e(67,`
                `),i(),e(68,`
              `),i(),e(69,`
            `),i()}if(r&2){let t=c();l(11),m("ngClass",_(13,E,t.itemForm.get("company_officials").invalid&&(t.itemForm.get("company_officials").dirty||t.itemForm.get("company_officials").touched))),l(2),m("ngIf",t.itemForm.get("company_officials").invalid&&(t.itemForm.get("company_officials").dirty||t.itemForm.get("company_officials").touched)),l(11),I("ngModel",t.item.licensed_liquorers_engaged),m("ngClass",_(15,E,t.itemForm.get("licensed_liquorers_engaged").invalid&&(t.itemForm.get("licensed_liquorers_engaged").dirty||t.itemForm.get("licensed_liquorers_engaged").touched))),l(2),m("ngIf",t.itemForm.get("licensed_liquorers_engaged").invalid&&(t.itemForm.get("licensed_liquorers_engaged").dirty||t.itemForm.get("licensed_liquorers_engaged").touched)),l(11),I("ngModel",t.item.laboratory_facilities),m("ngClass",_(17,E,t.itemForm.get("laboratory_facilities").invalid&&(t.itemForm.get("laboratory_facilities").dirty||t.itemForm.get("laboratory_facilities").touched))),l(2),m("ngIf",t.itemForm.get("laboratory_facilities").invalid&&(t.itemForm.get("laboratory_facilities").dirty||t.itemForm.get("laboratory_facilities").touched)),l(11),I("ngModel",t.item.services_to_be_offered),m("ngClass",_(19,E,t.itemForm.get("services_to_be_offered").invalid&&(t.itemForm.get("services_to_be_offered").dirty||t.itemForm.get("services_to_be_offered").touched))),l(2),m("ngIf",t.itemForm.get("services_to_be_offered").invalid&&(t.itemForm.get("services_to_be_offered").dirty||t.itemForm.get("services_to_be_offered").touched)),l(11),m("ngClass",_(21,E,t.itemForm.get("statutory_compliance").invalid&&(t.itemForm.get("statutory_compliance").dirty||t.itemForm.get("statutory_compliance").touched))),l(2),m("ngIf",t.itemForm.get("statutory_compliance").invalid&&(t.itemForm.get("statutory_compliance").dirty||t.itemForm.get("statutory_compliance").touched))}}function Yn(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Un(r,a){if(r&1&&(n(0,"div",29),e(1,`
                  `),d(2,Yn,2,0,"div",0),e(3,`
                `),i()),r&2){let t,o=c(2);l(2),m("ngIf",(t=o.itemForm.get("self_declaration_form").errors)==null?null:t.required)}}function Hn(r,a){if(r&1){let t=T();n(0,"div",5),e(1,`
              `),n(2,"div",6),e(3,`
                `),n(4,"label",68),e(5,"Self-declaration (Form M):"),i(),e(6,`
                `),n(7,"input",69),C("change",function(s){v(t);let p=c();return y(p.onSelfDeclarationFormChange(s))}),i(),e(8,`
                `),d(9,Un,4,1,"div",11),e(10,`
              `),i(),e(11,`
            `),i()}if(r&2){let t=c();l(7),m("ngClass",_(2,E,t.itemForm.get("self_declaration_form").invalid&&(t.itemForm.get("self_declaration_form").dirty||t.itemForm.get("self_declaration_form").touched))),l(2),m("ngIf",t.itemForm.get("self_declaration_form").invalid&&(t.itemForm.get("self_declaration_form").dirty||t.itemForm.get("self_declaration_form").touched))}}function zn(r,a){r&1&&(n(0,"div"),e(1,"You must accept to proceed."),i())}function Kn(r,a){if(r&1&&(n(0,"div",29),e(1,`
                `),d(2,zn,2,0,"div",0),e(3,`
              `),i()),r&2){let t,o=c();l(2),m("ngIf",(t=o.itemForm.get("commitment_declaration").errors)==null?null:t.requiredTrue)}}var Ge=class r{constructor(a,t,o,s,p,F){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=o;this.router=s;this.fb=p;this.route=F;this.mProgress=h(!1);this.item={};this.mFinancialYears=[];this.itemForm=this.fb.group({category_id:["",u.required],financial_year:["",u.required],expiry_date:["",u.required],type_id:["",u.required],issuing_body_id:["",u.required],paid_share_capital:["",u.nullValidator],directors_details:["",u.nullValidator],years_of_technical_experience:["",u.nullValidator],growers_represented_and_signed_agreements:["",u.nullValidator],indemnity_against_professional_misconduct:["",u.nullValidator],liquorer_cupping_facility_engaged:["",u.nullValidator],license_purpose:["",u.nullValidator],directors_name_address_and_occupations:["",u.nullValidator],year_of_certification:["",u.nullValidator],current_occupation:["",u.nullValidator],coffee_tasting_expert_certificate:["",u.nullValidator],milling_capacity:["",u.nullValidator],comprehensive_insurance_policy:["",u.nullValidator],mill_certification:["",u.nullValidator],company_officials:["",u.nullValidator],licensed_liquorers_engaged:["",u.nullValidator],laboratory_facilities:["",u.nullValidator],services_to_be_offered:["",u.nullValidator],statutory_compliance:["",u.nullValidator],self_declaration_form:["",u.nullValidator],commitment_declaration:[!1,u.requiredTrue]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem(),this.loadFinancialYearsItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("category_id",a.category_id),t.append("financial_year",a.financial_year),t.append("expiry_date",a.expiry_date),t.append("issuing_body_id",a.issuing_body_id),t.append("type_id",a.type_id);let o=a.type_id;t.append("paid_share_capital",a.paid_share_capital),o==1?(t.append("directors_details",this.directors_details_file,this.directors_details_file.name),t.append("years_of_technical_experience",this.years_of_technical_experience_file,this.years_of_technical_experience_file.name),t.append("growers_represented_and_signed_agreements",this.growers_represented_and_signed_agreements_file,this.growers_represented_and_signed_agreements_file.name),t.append("indemnity_against_professional_misconduct",this.indemnity_against_professional_misconduct_file,this.indemnity_against_professional_misconduct_file.name)):(t.append("directors_details",""),t.append("years_of_technical_experience",""),t.append("growers_represented_and_signed_agreements",""),t.append("indemnity_against_professional_misconduct","")),t.append("liquorer_cupping_facility_engaged",a.liquorer_cupping_facility_engaged),t.append("license_purpose",a.license_purpose),t.append("directors_name_address_and_occupations",a.directors_name_address_and_occupations),t.append("year_of_certification",a.year_of_certification),t.append("current_occupation",a.current_occupation),o==4?t.append("coffee_tasting_expert_certificate",this.coffee_tasting_expert_certificate_file,this.coffee_tasting_expert_certificate_file.name):t.append("coffee_tasting_expert_certificate",""),t.append("milling_capacity",a.milling_capacity),o==5?(t.append("comprehensive_insurance_policy",this.comprehensive_insurance_policy_file,this.comprehensive_insurance_policy_file.name),t.append("mill_certification",this.mill_certification_file,this.mill_certification_file.name)):(t.append("comprehensive_insurance_policy",""),t.append("mill_certification","")),o==6?(t.append("company_officials",this.company_officials_file,this.company_officials_file.name),t.append("statutory_compliance",this.statutory_compliance_file,this.statutory_compliance_file.name)):(t.append("company_officials",""),t.append("statutory_compliance","")),t.append("licensed_liquorers_engaged",a.licensed_liquorers_engaged),t.append("laboratory_facilities",a.laboratory_facilities),t.append("services_to_be_offered",a.services_to_be_offered),o==1||o==6?t.append("self_declaration_form",this.self_declaration_form_file,this.self_declaration_form_file.name):t.append("self_declaration_form",""),t.append("commitment_declaration",a.commitment_declaration),t.append("_method","PUT"),this.mProgress.set(!0),this.mLicenseService.updateItem(this.id,t).subscribe({next:s=>{if(s){this.mToastrService.success(s.message);let p=s.data.payment?.id;p?this.router.navigateByUrl("/payments/show/"+p):this.router.navigateByUrl("/licenses"),this.mProgress.set(!1)}},error:s=>{s.error.message&&this.mToastrService.warning(s.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mLicenseService.unpaginatedItems().subscribe({next:a=>{a&&(this.mIssuingBodies=a.data.issuing_bodies,this.mLicenseCategories=a.data.license_categories,this.mLicenseTypes=a.data.license_types,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}loadFinancialYearsItems(){let a=new Date,t=a.getFullYear(),o=a.getMonth()>=6?t:t-1;for(let s=0;s<5;s++){let p=o-s;this.mFinancialYears.push(`${p}/${p+1}`)}this.itemForm.get("financial_year")?.valueChanges.pipe(Pe(this.itemForm.get("financial_year")?.value)).subscribe(s=>{if(s){let p=s.split("/")[1];this.itemForm.patchValue({expiry_date:`${p}-06-30`},{emitEvent:!1})}})}onIssuingBodyChange(a){let t=a.value;this.mProgress.set(!0),this.mLicenseService.filterLicenseTypes(t).subscribe({next:o=>{o&&(this.mLicenseTypes=o,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onDirectorsDetailsChange(a){if(a.target.value){let t=a.target.files[0];this.directors_details_file=t}}onYearsOfTechnicalExperienceChange(a){if(a.target.value){let t=a.target.files[0];this.years_of_technical_experience_file=t}}onGrowersRepresentedAndSignedAgreementsChange(a){if(a.target.value){let t=a.target.files[0];this.growers_represented_and_signed_agreements_file=t}}onIndemnityAgainstProfessionalMisconductChange(a){if(a.target.value){let t=a.target.files[0];this.indemnity_against_professional_misconduct_file=t}}onCoffeeTastingExpertCertificateChange(a){if(a.target.value){let t=a.target.files[0];this.coffee_tasting_expert_certificate_file=t}}onComprehensiveInsurancePolicyChange(a){if(a.target.value){let t=a.target.files[0];this.comprehensive_insurance_policy_file=t}}onMillCertificationChange(a){if(a.target.value){let t=a.target.files[0];this.mill_certification_file=t}}onCompanyOfficialsChange(a){if(a.target.value){let t=a.target.files[0];this.company_officials_file=t}}onStatutoryComplianceChange(a){if(a.target.value){let t=a.target.files[0];this.statutory_compliance_file=t}}onSelfDeclarationFormChange(a){if(a.target.value){let t=a.target.files[0];this.self_declaration_form_file=t}}static{this.\u0275fac=function(t){return new(t||r)(x(L),x(D),x(N),x(le),x(ce),x(z))}}static{this.\u0275cmp=M({type:r,selectors:[["app-edit"]],standalone:!1,decls:150,vars:41,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","category_id",1,"col-form-label","required"],["formControlName","category_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","financial_year",1,"col-form-label","required"],["formControlName","financial_year","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","expiry_date",1,"col-form-label","required"],["formControlName","expiry_date","type","date","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","issuing_body_id",1,"col-form-label","required1"],["formControlName","issuing_body_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","col-md-12",4,"ngIf"],[1,"form-check"],["type","checkbox","formControlName","commitment_declaration",1,"form-check-input",3,"ngModelChange","ngModel"],["for","commitment_declaration",1,"form-check-label"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","paid_share_capital",1,"col-form-label","required"],["formControlName","paid_share_capital","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","directors_details",1,"col-form-label","required"],["formControlName","directors_details","type","file",1,"form-control",3,"change","ngClass"],["for","years_of_technical_experience",1,"col-form-label","required"],["formControlName","years_of_technical_experience","type","file",1,"form-control",3,"change","ngClass"],["for","growers_represented_and_signed_agreements",1,"col-form-label","required"],["formControlName","growers_represented_and_signed_agreements","type","file",1,"form-control",3,"change","ngClass"],["for","indemnity_against_professional_misconduct",1,"col-form-label","required"],["formControlName","indemnity_against_professional_misconduct","type","file",1,"form-control",3,"change","ngClass"],["for","liquorer_cupping_facility_engaged",1,"col-form-label","required1"],["formControlName","liquorer_cupping_facility_engaged","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","license_purpose",1,"col-form-label","required"],["formControlName","license_purpose","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","directors_name_address_and_occupations",1,"col-form-label","required"],["formControlName","directors_name_address_and_occupations","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","year_of_certification",1,"col-form-label","required"],["formControlName","year_of_certification","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","current_occupation",1,"col-form-label","required"],["formControlName","current_occupation","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","coffee_tasting_expert_certificate",1,"col-form-label","required"],["formControlName","coffee_tasting_expert_certificate","type","file",1,"form-control",3,"change","ngClass"],["for","milling_capacity",1,"col-form-label","required"],["formControlName","milling_capacity","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","comprehensive_insurance_policy",1,"col-form-label","required1"],["formControlName","comprehensive_insurance_policy","type","file",1,"form-control",3,"change","ngClass"],["for","mill_certification",1,"col-form-label","required1"],["formControlName","mill_certification","type","file",1,"form-control",3,"change","ngClass"],["for","company_officials",1,"col-form-label","required"],["formControlName","company_officials","type","file",1,"form-control",3,"change","ngClass"],["for","licensed_liquorers_engaged",1,"col-form-label","required"],["formControlName","licensed_liquorers_engaged","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","laboratory_facilities",1,"col-form-label","required"],["formControlName","laboratory_facilities","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","services_to_be_offered",1,"col-form-label","required"],["formControlName","services_to_be_offered","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","statutory_compliance",1,"col-form-label","required"],["formControlName","statutory_compliance","type","file",1,"form-control",3,"change","ngClass"],["for","self_declaration_form",1,"col-form-label","required"],["formControlName","self_declaration_form","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,o){if(t&1&&(d(0,Oi,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"form",3),C("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`
          `),n(11,"div",4),e(12,`
            `),n(13,"div",5),e(14,`
              `),n(15,"div",6),e(16,`
                `),n(17,"label",7),e(18,"Application Category:"),i(),e(19,`
                `),n(20,"select",8),q("ngModelChange",function(p){return w(o.item.category_id,p)||(o.item.category_id=p),p}),e(21,`
                  `),n(22,"option",9),e(23,"--- Select category ---"),i(),e(24,`
                  `),d(25,Bi,2,3,"option",10),e(26,`
                `),i(),e(27,`
                `),d(28,Wi,4,1,"div",11),e(29,`
              `),i(),e(30,`
            `),i(),e(31,`
            `),n(32,"div",12),e(33,`
              `),n(34,"div",6),e(35,`
                `),n(36,"label",13),e(37,"Year/Period:"),i(),e(38,`
                `),n(39,"select",14),q("ngModelChange",function(p){return w(o.item.financial_year,p)||(o.item.financial_year=p),p}),e(40,`
                  `),n(41,"option",9),e(42,"--- Select year ---"),i(),e(43,`
                  `),d(44,ji,2,3,"option",10),e(45,`
                `),i(),e(46,`
                `),d(47,Yi,4,1,"div",11),e(48,`
              `),i(),e(49,`
            `),i(),e(50,`
            `),n(51,"div",12),e(52,`
              `),n(53,"div",6),e(54,`
                `),n(55,"label",15),e(56,"Expiry Date:"),i(),e(57,`
                `),n(58,"input",16),q("ngModelChange",function(p){return w(o.item.expiry_date,p)||(o.item.expiry_date=p),p}),i(),e(59,`
                `),d(60,Hi,4,1,"div",11),e(61,`
              `),i(),e(62,`
            `),i(),e(63,`
            `),n(64,"div",5),e(65,`
              `),n(66,"div",6),e(67,`
                `),n(68,"label",17),e(69,"Issuing Body:"),i(),e(70,`
                `),n(71,"select",18),q("ngModelChange",function(p){return w(o.item.issuing_body_id,p)||(o.item.issuing_body_id=p),p}),C("change",function(p){return o.onIssuingBodyChange(p.target)}),e(72,`
                  `),n(73,"option",9),e(74,"--- Select body ---"),i(),e(75,`
                  `),d(76,zi,2,4,"option",10),e(77,`
                `),i(),e(78,`
                `),d(79,$i,4,1,"div",11),e(80,`
              `),i(),e(81,`
            `),i(),e(82,`
            `),n(83,"div",5),e(84,`
              `),n(85,"div",6),e(86,`
                `),n(87,"label",19),e(88,"License Type:"),i(),e(89,`
                `),n(90,"select",20),q("ngModelChange",function(p){return w(o.item.type_id,p)||(o.item.type_id=p),p}),e(91,`
                  `),n(92,"option",9),e(93,"--- Select type ---"),i(),e(94,`
                  `),d(95,Ji,2,3,"option",10),e(96,`
                `),i(),e(97,`
                `),d(98,Xi,4,1,"div",11),e(99,`
              `),i(),e(100,`
            `),i(),e(101,`
            `),e(102,`
            `),d(103,pn,83,26,"div",21),e(104,`
            `),e(105,`
            `),d(106,fn,22,5,"div",21),e(107,`
            `),e(108,`
            `),d(109,vn,18,5,"div",21),e(110,`
            `),e(111,`
            `),d(112,Fn,44,14,"div",21),e(113,`
            `),e(114,`
            `),d(115,Ln,44,13,"div",21),e(116,`
            `),e(117,`
            `),d(118,Gn,70,23,"div",21),e(119,`
             `),e(120,`
            `),d(121,Hn,12,4,"div",21),e(122,`
            `),n(123,"div",5),e(124,`
              `),n(125,"div",22),e(126,`
                `),n(127,"input",23),q("ngModelChange",function(p){return w(o.item.commitment_declaration,p)||(o.item.commitment_declaration=p),p}),i(),e(128,`
                `),n(129,"label",24),e(130,`
                  By checking this, the applicant certifies that the information provided is accurate and commits to comply with the terms and conditions of the licence.
                `),i(),e(131,`
              `),i(),e(132,`
              `),d(133,Kn,4,1,"div",11),e(134,`
            `),i(),e(135,`
          `),i(),e(136,`
          `),n(137,"div",25),e(138,`
            `),n(139,"button",26),e(140,"Cancel"),i(),e(141,`
            `),n(142,"button",27),e(143,"Submit"),i(),e(144,`
          `),i(),e(145,`
        `),i(),e(146,`

      `),i(),e(147,`
    `),i(),e(148,`
  `),i(),e(149,`
`),i()),t&2){let s,p,F,P,O,B,R,W,Se,be,Ee,Fe,Te,Ie,re;m("ngIf",o.mProgress()),l(9),m("formGroup",o.itemForm),l(11),I("ngModel",o.item.category_id),m("ngClass",_(31,E,((s=o.itemForm.get("category_id"))==null?null:s.invalid)&&(((s=o.itemForm.get("category_id"))==null?null:s.dirty)||((s=o.itemForm.get("category_id"))==null?null:s.touched)))),l(5),m("ngForOf",o.mLicenseCategories),l(3),m("ngIf",((p=o.itemForm.get("category_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("category_id"))==null?null:p.dirty)||((p=o.itemForm.get("category_id"))==null?null:p.touched))),l(11),I("ngModel",o.item.financial_year),m("ngClass",_(33,E,((F=o.itemForm.get("financial_year"))==null?null:F.invalid)&&(((F=o.itemForm.get("financial_year"))==null?null:F.dirty)||((F=o.itemForm.get("financial_year"))==null?null:F.touched)))),l(5),m("ngForOf",o.mFinancialYears),l(3),m("ngIf",((P=o.itemForm.get("financial_year"))==null?null:P.invalid)&&(((P=o.itemForm.get("financial_year"))==null?null:P.dirty)||((P=o.itemForm.get("financial_year"))==null?null:P.touched))),l(11),I("ngModel",o.item.expiry_date),m("ngClass",_(35,E,o.itemForm.get("expiry_date").invalid&&(o.itemForm.get("expiry_date").dirty||o.itemForm.get("expiry_date").touched))),l(2),m("ngIf",o.itemForm.get("expiry_date").invalid&&(o.itemForm.get("expiry_date").dirty||o.itemForm.get("expiry_date").touched)),l(11),I("ngModel",o.item.issuing_body_id),m("ngClass",_(37,E,((O=o.itemForm.get("issuing_body_id"))==null?null:O.invalid)&&(((O=o.itemForm.get("issuing_body_id"))==null?null:O.dirty)||((O=o.itemForm.get("issuing_body_id"))==null?null:O.touched)))),l(5),m("ngForOf",o.mIssuingBodies),l(3),m("ngIf",((B=o.itemForm.get("issuing_body_id"))==null?null:B.invalid)&&(((B=o.itemForm.get("issuing_body_id"))==null?null:B.dirty)||((B=o.itemForm.get("issuing_body_id"))==null?null:B.touched))),l(11),I("ngModel",o.item.type_id),m("ngClass",_(39,E,((R=o.itemForm.get("type_id"))==null?null:R.invalid)&&(((R=o.itemForm.get("type_id"))==null?null:R.dirty)||((R=o.itemForm.get("type_id"))==null?null:R.touched)))),l(5),m("ngForOf",o.mLicenseTypes),l(3),m("ngIf",((W=o.itemForm.get("type_id"))==null?null:W.invalid)&&(((W=o.itemForm.get("type_id"))==null?null:W.dirty)||((W=o.itemForm.get("type_id"))==null?null:W.touched))),l(5),m("ngIf",((Se=o.itemForm.get("type_id"))==null?null:Se.value)==1),l(3),m("ngIf",((be=o.itemForm.get("type_id"))==null?null:be.value)==2),l(3),m("ngIf",((Ee=o.itemForm.get("type_id"))==null?null:Ee.value)==3),l(3),m("ngIf",((Fe=o.itemForm.get("type_id"))==null?null:Fe.value)==4),l(3),m("ngIf",((Te=o.itemForm.get("type_id"))==null?null:Te.value)==5),l(3),m("ngIf",((Ie=o.itemForm.get("type_id"))==null?null:Ie.value)==6),l(3),m("ngIf",((re=o.itemForm.get("type_id"))==null?null:re.value)==1||((re=o.itemForm.get("type_id"))==null?null:re.value)==6),l(6),I("ngModel",o.item.commitment_declaration),l(6),m("ngIf",o.itemForm.get("commitment_declaration").invalid&&(o.itemForm.get("commitment_declaration").dirty||o.itemForm.get("commitment_declaration").touched)),l(9),m("disabled",o.itemForm.invalid)}},dependencies:[U,H,A,V,k,K,$,J,Q,te,de,se,X,Re,Be,me,Z,ee,ne,ie],encapsulation:2})}};var bt=Tt(It());var $n=r=>({"is-invalid":r}),Ze=()=>[1],Jn=r=>["/licenses/process",r],Qn=(r,a,t,o,s,p,F)=>({"bg-secondary":r,"bg-warning":a,"bg-dark":t,"bg-info":o,"bg-success":s,"bg-primary":p,"bg-danger":F}),Xn=()=>[2],Zn=(r,a)=>({active:r,disabled:a});function er(r,a){r&1&&g(0,"app-progress")}function tr(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function ir(r,a){if(r&1&&(n(0,"div",16),e(1,`
                  `),d(2,tr,2,0,"div",1),e(3,`
                `),i()),r&2){let t=c();l(2),m("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function nr(r,a){if(r&1){let t=T();n(0,"span"),e(1,`
                    `),n(2,"button",31),C("click",function(){v(t);let s=c().$implicit,p=c(2);return y(p.onDownloadPermit(s))}),e(3,"Download"),i(),e(4,`
                  `),i()}}function rr(r,a){if(r&1&&(n(0,"button",32),e(1," "),g(2,"i",33),i()),r&2){let t=c().$implicit;m("routerLink",ae("/licenses/edit/",t.id))}}function ar(r,a){if(r&1){let t=T();n(0,"button",34),C("click",function(){v(t);let s=c().$implicit,p=c(2);return y(p.onDelete(s))}),g(1,"i",35),i()}}function or(r,a){if(r&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3),i(),e(4,`
                `),n(5,"td")(6,"a",22),e(7),i()(),e(8,`
                `),n(9,"td"),e(10),i(),e(11,`
                `),n(12,"td")(13,"span",23),e(14),i()(),e(15,`
                `),n(16,"td"),e(17),i(),e(18,`
                `),n(19,"td")(20,"span",24),e(21),i()(),e(22,`
                `),n(23,"td"),e(24),i(),e(25,`
                `),n(26,"td")(27,"span",25),e(28),i()(),e(29,`
                `),n(30,"td"),e(31,`
                  `),d(32,nr,5,0,"span",1),e(33,`
                `),i(),e(34,`
                `),n(35,"td"),e(36),ue(37,"date"),i(),e(38,`
                `),n(39,"td"),e(40,`
                  `),n(41,"div",26),e(42,`
                    `),n(43,"button",27),g(44,"i",28),i(),e(45,`
                    `),d(46,rr,3,2,"button",29),e(47,`
                    `),d(48,ar,2,0,"button",30),e(49,`
                  `),i(),e(50,`
                `),i(),e(51,`
              `),i()),r&2){let t=a.$implicit,o=a.index,s=c(2);l(3),rt("",s.mPageFrom+o,"."),l(3),m("routerLink",ae("/licenses/show/",t.id)),l(),f(t.application_number),l(3),f(t.user==null?null:t.user.name),l(3),m("ngClass",t.category_id===1?"bg-success":"bg-warning"),l(),f(t.category==null?null:t.category.name),l(3),f(t.type==null?null:t.type.name),l(3),m("routerLink",s.mAppContextService.hasTypes(Y(24,Ze))?_(25,Jn,t.id):null)("ngClass",Ae(27,Qn,t.status_id==1,t.status_id==2,t.status_id==3,t.status_id==4,t.status_id==5,t.status_id==6,t.status_id==7)),l(),f(t==null||t.status==null?null:t.status.name),l(3),f(t.issuing_body==null?null:t.issuing_body.alias),l(3),m("routerLink",ae("/payments/show/",t.payment_id))("ngClass",(t.payment==null?null:t.payment.status_id)===1?"chip-danger":"chip-success"),l(),f(t.payment==null?null:t.payment.status.name),l(4),m("ngIf",t.status_id===5),l(4),f(fe(37,22,t.created_at)),l(7),m("routerLink",ae("/licenses/show/",t.id)),l(3),m("ngIf",s.mAppContextService.hasRoles(Y(35,Ze))||s.mAppContextService.hasTypes(Y(36,Xn))&&(t.status_id==1||t.status_id==2)),l(2),m("ngIf",s.mAppContextService.hasRoles(Y(37,Ze)))}}function lr(r,a){if(r&1&&(n(0,"div",17),e(1,`
          `),n(2,"table",18),e(3,`
            `),n(4,"thead",19),e(5,`
              `),n(6,"tr"),e(7,`
                `),n(8,"th",20),e(9,"#"),i(),e(10,`
                `),n(11,"th",20),e(12,"Number"),i(),e(13,`
                `),n(14,"th",20),e(15,"Applicant"),i(),e(16,`
                `),n(17,"th",20),e(18,"Category"),i(),e(19,`
                `),n(20,"th",20),e(21,"Type"),i(),e(22,`
                `),n(23,"th",20),e(24,"Status"),i(),e(25,`
                `),n(26,"th",20),e(27,"Issuing Body"),i(),e(28,`
                `),n(29,"th",20),e(30,"Payment"),i(),e(31,`
                `),n(32,"th",20),e(33,"License"),i(),e(34,`
                `),n(35,"th",20),e(36,"Created"),i(),e(37,`
                `),n(38,"th",20),e(39,"Action"),i(),e(40,`
              `),i(),e(41,`
            `),i(),e(42,`
            `),n(43,"tbody"),e(44,`
              `),d(45,or,52,38,"tr",21),e(46,`
            `),i(),e(47,`
          `),i(),e(48,`
        `),i()),r&2){let t=c();l(45),m("ngForOf",t.mLicenses)}}function mr(r,a){if(r&1){let t=T();n(0,"li",38),e(1,`
              `),n(2,"a",39),C("click",function(){let s=v(t).$implicit,p=c(2);return y(p.onChangePage(s.url))}),i(),e(3,`
            `),i()}if(r&2){let t=a.$implicit;m("ngClass",at(2,Zn,t.active,!t.url)),l(2),m("innerHTML",t.label,it)}}function dr(r,a){if(r&1&&(n(0,"div"),e(1,`
          `),n(2,"ul",36),e(3,`
            `),d(4,mr,4,5,"li",37),e(5,`
          `),i(),e(6,`
        `),i()),r&2){let t=c();l(4),m("ngForOf",t.links)}}function sr(r,a){r&1&&(e(0,`
          `),n(1,"p",40),e(2,"No items"),i(),e(3,`
        `))}var Ye=class r{constructor(a,t,o){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=o;this.mLicenses={};this.links=[];this.mProgress=h(!1)}ngOnInit(){this.index(),this.search_term=new ht("",u.required),this.itemForm=new Ct({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mLicenseService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mLicenses=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mLicenseService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mLicenses=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(a){bt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.application_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(o=>{o.isConfirmed&&(this.mProgress.set(!0),this.mLicenseService.deleteItem(a).subscribe({next:s=>{s&&(this.mLicenses=this.mLicenses.filter(p=>p.id!==a.id),this.mToastrService.warning(s.message),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.warning(s.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mLicenseService.searchItems(a).subscribe({next:t=>{t&&(this.mLicenses=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mLicenseService.searchItems(a).subscribe({next:t=>{t&&(this.mLicenses=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDownloadPermit(a){this.mProgress.set(!0),this.mLicenseService.onDownloadPermit(a).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let s=t;var o=URL.createObjectURL(s);window.open(o,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(L),x(D),x(N))}}static{this.\u0275cmp=M({type:r,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/licenses/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"badge",3,"ngClass"],[1,"badge","rounded-pill",3,"routerLink","ngClass"],[1,"chip","chip-clickable",3,"routerLink","ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],["class","btn btn-dark btn-sm me-1",3,"routerLink",4,"ngIf"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-link","btn-sm",3,"click"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,o){if(t&1&&(d(0,er,1,0,"app-progress",1),n(1,"c-row"),e(2,`
  `),n(3,"c-col",2),e(4,`
    `),n(5,"c-card",3),e(6,`
      `),n(7,"c-card-header"),e(8,`
        `),n(9,"div",4),e(10,`
          `),n(11,"div",5),e(12,`
            `),n(13,"a",6),e(14,`
              `),g(15,"i",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),n(19,"div"),e(20,`
            `),n(21,"form",8),C("ngSubmit",function(){return o.onSearch(o.itemForm.value)}),e(22,`
              `),n(23,"div",9),e(24,`
                `),g(25,"input",10),e(26,`
                `),n(27,"div",11),e(28,`
                  `),n(29,"button",12),e(30,`
                    `),g(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),d(35,ir,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),n(42,"c-card-body"),e(43,`

        `),d(44,lr,49,1,"div",15),e(45,`

        `),d(46,dr,7,1,"div",1),e(47,`

        `),d(48,sr,4,0,"ng-template",null,0,ot),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),t&2){let s=nt(49);m("ngIf",o.mProgress()),l(21),m("formGroup",o.itemForm),l(4),m("ngClass",_(7,$n,o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched))),l(10),m("ngIf",o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched)),l(9),m("ngIf",o.mLicenses.length>0)("ngIfElse",s),l(2),m("ngIf",o.links)}},dependencies:[U,H,A,V,k,K,$,ct,J,Q,xt,gt,te,X,Z,ee,ne,ie,Ve],encapsulation:2})}};var Et=r=>({"is-invalid":r});function cr(r,a){r&1&&g(0,"app-progress")}function pr(r,a){if(r&1&&(n(0,"option",15),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),f(t.alias)}}function _r(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function ur(r,a){if(r&1&&(n(0,"div",16),d(1,_r,2,0,"div",0),i()),r&2){let t,o=c();l(),m("ngIf",(t=o.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function fr(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function gr(r,a){if(r&1&&(n(0,"div",16),d(1,fr,2,0,"div",0),i()),r&2){let t,o=c();l(),m("ngIf",(t=o.itemForm.get("remarks").errors)==null?null:t.required)}}var Ue=class r{constructor(a,t,o,s,p,F){this.mToastrService=a;this.mLicenseService=t;this.mAppContextService=o;this.router=s;this.fb=p;this.route=F;this.mProgress=h(!1);this.item={};this.mEditor=Oe;this.itemForm=this.fb.group({status_id:["",u.required],remarks:["",u.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=h(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=h(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=h(!1)}})}onSubmit(a){let t=qe(we({},a),{id:this.id});this.mProgress=h(!0),this.mLicenseService.reviewApplicationItem(t).subscribe({next:o=>{o.status==="success"&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/licenses"),this.mProgress=h(!1))},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress=h(!1)}})}getNextPreviousStatus(){this.mProgress=h(!0),this.mLicenseService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=h(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=h(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(D),x(L),x(N),x(le),x(ce),x(z))}}static{this.\u0275cmp=M({type:r,selectors:[["app-review"]],standalone:!1,decls:24,vars:12,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,o){if(t&1&&(d(0,cr,1,0,"app-progress",0),n(1,"div")(2,"form",1),C("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),d(11,pr,2,3,"option",8),i(),d(12,ur,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),i(),g(17,"textarea",11),d(18,gr,2,1,"div",9),i()()(),n(19,"div",12)(20,"button",13),e(21,"Cancel"),i(),n(22,"button",14),e(23,"Submit"),i()()()()),t&2){let s,p;m("ngIf",o.mProgress()),l(2),m("formGroup",o.itemForm),l(6),m("ngClass",_(8,Et,((s=o.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=o.itemForm.get("status_id"))==null?null:s.dirty)||((s=o.itemForm.get("status_id"))==null?null:s.touched)))),l(3),m("ngForOf",o.mNextPreviousStatuses),l(),m("ngIf",((p=o.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("status_id"))==null?null:p.dirty)||((p=o.itemForm.get("status_id"))==null?null:p.touched))),l(5),m("ngClass",_(10,Et,o.itemForm.get("remarks").invalid&&(o.itemForm.get("remarks").dirty||o.itemForm.get("remarks").touched))),l(),m("ngIf",o.itemForm.get("remarks").invalid&&(o.itemForm.get("remarks").dirty||o.itemForm.get("remarks").touched)),l(4),m("disabled",o.itemForm.invalid)}},dependencies:[U,H,A,V,k,ke,te,de,se,X,me,Z,ee,ne,ie],encapsulation:2})}};var He=r=>({"is-invalid":r});function vr(r,a){r&1&&g(0,"app-progress")}function yr(r,a){if(r&1&&(n(0,"option",16),e(1),i()),r&2){let t=a.$implicit;m("value",S(t.id)),l(),f(t.alias)}}function Cr(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function hr(r,a){if(r&1&&(n(0,"div",17),d(1,Cr,2,0,"div",0),i()),r&2){let t,o=c();l(),m("ngIf",(t=o.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function Sr(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function br(r,a){if(r&1&&(n(0,"div",17),d(1,Sr,2,0,"div",0),i()),r&2){let t,o=c();l(),m("ngIf",(t=o.itemForm.get("remarks").errors)==null?null:t.required)}}function Er(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function Fr(r,a){if(r&1&&(n(0,"div",17),d(1,Er,2,0,"div",0),i()),r&2){let t,o=c(2);l(),m("ngIf",(t=o.itemForm.get("date_of_issue"))==null||t.errors==null?null:t.errors.required)}}function Tr(r,a){if(r&1&&(n(0,"div",18)(1,"div",4)(2,"label",19),e(3,"Date of Issue:"),i(),g(4,"input",20),d(5,Fr,2,1,"div",9),i()()),r&2){let t,o,s=c();l(4),m("ngClass",_(2,He,((t=s.itemForm.get("date_of_issue"))==null?null:t.invalid)&&(((t=s.itemForm.get("date_of_issue"))==null?null:t.dirty)||((t=s.itemForm.get("date_of_issue"))==null?null:t.touched)))),l(),m("ngIf",((o=s.itemForm.get("date_of_issue"))==null?null:o.invalid)&&(((o=s.itemForm.get("date_of_issue"))==null?null:o.dirty)||((o=s.itemForm.get("date_of_issue"))==null?null:o.touched)))}}function Ir(r,a){r&1&&(n(0,"div"),e(1,"This field is required."),i())}function wr(r,a){if(r&1&&(n(0,"div",17),d(1,Ir,2,0,"div",0),i()),r&2){let t,o=c(2);l(),m("ngIf",(t=o.itemForm.get("effective_date"))==null||t.errors==null?null:t.errors.required)}}function qr(r,a){if(r&1&&(n(0,"div",18)(1,"div",4)(2,"label",21),e(3,"Effective Date:"),i(),g(4,"input",22),d(5,wr,2,1,"div",9),i()()),r&2){let t,o,s=c();l(4),m("ngClass",_(2,He,((t=s.itemForm.get("effective_date"))==null?null:t.invalid)&&(((t=s.itemForm.get("effective_date"))==null?null:t.dirty)||((t=s.itemForm.get("effective_date"))==null?null:t.touched)))),l(),m("ngIf",((o=s.itemForm.get("effective_date"))==null?null:o.invalid)&&(((o=s.itemForm.get("effective_date"))==null?null:o.dirty)||((o=s.itemForm.get("effective_date"))==null?null:o.touched)))}}var ze=class r{constructor(a,t,o,s,p,F){this.mToastrService=a;this.mLicenseService=t;this.mAppContextService=o;this.router=s;this.fb=p;this.route=F;this.mProgress=h(!1);this.item={};this.mEditor=Oe;this.itemForm=this.fb.group({status_id:["",u.required],date_of_issue:["",u.nullValidator],effective_date:["",u.nullValidator],remarks:["",u.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=h(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=h(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=h(!1)}})}onSubmit(a){let t=qe(we({},a),{id:this.id});this.mProgress=h(!0),this.mLicenseService.approvalApplicationItem(t).subscribe({next:o=>{o.status==="success"&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/licenses"),this.mProgress=h(!1))},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress=h(!1)}})}getNextPreviousStatus(){this.mProgress=h(!0),this.mLicenseService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=h(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=h(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(D),x(L),x(N),x(le),x(ce),x(z))}}static{this.\u0275cmp=M({type:r,selectors:[["app-approve"]],standalone:!1,decls:26,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],["class","col-md-6",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-6"],["for","date_of_issue",1,"col-form-label","required"],["formControlName","date_of_issue","type","date",1,"form-control",3,"ngClass"],["for","effective_date",1,"col-form-label","required"],["formControlName","effective_date","type","date",1,"form-control",3,"ngClass"]],template:function(t,o){if(t&1&&(d(0,vr,1,0,"app-progress",0),n(1,"div")(2,"form",1),C("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),d(11,yr,2,3,"option",8),i(),d(12,hr,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),i(),g(17,"textarea",11),d(18,br,2,1,"div",9),i()(),d(19,Tr,6,4,"div",12)(20,qr,6,4,"div",12),i(),n(21,"div",13)(22,"button",14),e(23,"Cancel"),i(),n(24,"button",15),e(25,"Submit"),i()()()()),t&2){let s,p,F,P;m("ngIf",o.mProgress()),l(2),m("formGroup",o.itemForm),l(6),m("ngClass",_(10,He,((s=o.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=o.itemForm.get("status_id"))==null?null:s.dirty)||((s=o.itemForm.get("status_id"))==null?null:s.touched)))),l(3),m("ngForOf",o.mNextPreviousStatuses),l(),m("ngIf",((p=o.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("status_id"))==null?null:p.dirty)||((p=o.itemForm.get("status_id"))==null?null:p.touched))),l(5),m("ngClass",_(12,He,o.itemForm.get("remarks").invalid&&(o.itemForm.get("remarks").dirty||o.itemForm.get("remarks").touched))),l(),m("ngIf",o.itemForm.get("remarks").invalid&&(o.itemForm.get("remarks").dirty||o.itemForm.get("remarks").touched)),l(),m("ngIf",((F=o.itemForm.get("status_id"))==null?null:F.value)==5),l(),m("ngIf",((P=o.itemForm.get("status_id"))==null?null:P.value)==5),l(4),m("disabled",o.itemForm.invalid)}},dependencies:[U,H,A,V,k,ke,te,de,se,X,me,Z,ee,ne,ie],encapsulation:2})}};var et=()=>[1],Nr=()=>[2];function Lr(r,a){r&1&&g(0,"app-progress")}function Mr(r,a){if(r&1&&(n(0,"div",12),e(1,`
                `),n(2,"a",13),e(3),i(),e(4,`
              `),i()),r&2){let t=c();l(2),m("routerLink",ae("/licenses/show/",t.item.id)),l(),f(t.item.application_number)}}function Ar(r,a){if(r&1&&(n(0,"div",12),e(1),i()),r&2){let t=c();l(),f(t.item.user==null?null:t.item.user.name)}}function Vr(r,a){r&1&&(n(0,"div"),e(1,`
                  `),g(2,"app-review"),e(3,`
                `),i())}function Dr(r,a){r&1&&(n(0,"div"),e(1,`
                  `),g(2,"app-approve"),e(3,`
                `),i())}var Ke=class r{constructor(a,t,o,s){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=o;this.route=s;this.mProgress=h(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(L),x(D),x(N),x(z))}}static{this.\u0275cmp=M({type:r,selectors:[["app-process"]],standalone:!1,decls:56,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"fw-bold","text-muted"],[1,"text-muted"],[1,"text-sm",3,"routerLink"]],template:function(t,o){t&1&&(d(0,Lr,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div",3),e(10,`
          `),n(11,"div",4),e(12,`
            `),n(13,"div",5),e(14,`
              `),n(15,"label",6),e(16,"Number:"),i(),e(17,`
              `),d(18,Mr,5,3,"div",7),e(19,`
            `),i(),e(20,`
          `),i(),e(21,`
          `),n(22,"div",4),e(23,`
            `),n(24,"div",5),e(25,`
              `),n(26,"label",6),e(27,"Applicant:"),i(),e(28,`
              `),d(29,Ar,2,1,"div",7),e(30,`
            `),i(),e(31,`
          `),i(),e(32,`
          `),n(33,"div",8),e(34,`
            `),n(35,"div",5),e(36,`

              `),n(37,"fieldset",9),e(38,`
                `),n(39,"legend",10)(40,"h6",11),e(41,"Process"),i()(),e(42,`
                `),e(43,`
                `),d(44,Vr,4,0,"div",0),e(45,`
                `),e(46,`
                `),d(47,Dr,4,0,"div",0),e(48,`
              `),i(),e(49,`

            `),i(),e(50,`
          `),i(),e(51,`
        `),i(),e(52,`

      `),i(),e(53,`
    `),i(),e(54,`
  `),i(),e(55,`
`),i()),t&2&&(m("ngIf",o.mProgress()),l(18),m("ngIf",o.item.application_number),l(11),m("ngIf",o.item.user),l(15),m("ngIf",(o.item==null?null:o.item.status_id)===3&&(o.mAppContextService.hasRoles(Y(5,et))||o.mAppContextService.hasRoles(Y(6,Nr)))),l(3),m("ngIf",(o.item==null?null:o.item.status_id)===4&&(o.mAppContextService.hasRoles(Y(7,et))||o.mAppContextService.hasCommittees(Y(8,et)))))},dependencies:[A,V,k,K,$,J,Q,Ue,ze],encapsulation:2})}};var kr=()=>[1],Or=r=>["/licenses/process",r],Br=(r,a,t,o,s,p,F)=>({"bg-secondary":r,"bg-warning":a,"bg-dark":t,"bg-info":o,"bg-success":s,"bg-primary":p,"bg-danger":F});function Rr(r,a){r&1&&g(0,"app-progress")}function Wr(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c();l(),f(t.item.application_number)}}function jr(r,a){if(r&1&&(n(0,"div",23),e(1,`
                  `),n(2,"a",24),e(3),i(),e(4,`
                `),i()),r&2){let t=c();l(2),m("routerLink",ae("/users/show/",t.item.user==null?null:t.item.user.id)),l(),f(t.item.user==null?null:t.item.user.name)}}function Gr(r,a){if(r&1&&(n(0,"div",23),e(1,`
                  `),n(2,"span",25),e(3),i(),e(4,`
                `),i()),r&2){let t=c();l(2),m("ngClass",Ae(2,Br,t.item.status_id==1,t.item.status_id==2,t.item.status_id==3,t.item.status_id==4,t.item.status_id==5,t.item.status_id==6,t.item.status_id==7)),l(),f(t.item==null||t.item.status==null?null:t.item.status.name)}}function Yr(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c();l(),f(t.item.category==null?null:t.item.category.name)}}function Ur(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c();l(),f(t.item.financial_year)}}function Hr(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c();l(),f(t.item.issuing_body==null?null:t.item.issuing_body.name)}}function zr(r,a){if(r&1&&(n(0,"div",23),e(1),ue(2,"date"),i()),r&2){let t=c();l(),f(fe(2,1,t.item.expiry_date))}}function Kr(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c();l(),f(t.item.type==null?null:t.item.type.name)}}function $r(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.paid_share_capital)}}function Jr(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.directors_details_url),G)}}function Qr(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.years_of_technical_experience_url),G)}}function Xr(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.growers_represented_and_signed_agreements_url),G)}}function Zr(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.indemnity_against_professional_misconduct_url),G)}}function ea(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.liquorer_cupping_facility_engaged)}}function ta(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.self_declaration_form_url),G)}}function ia(r,a){if(r&1&&(n(0,"div",3),e(1,`
                  `),n(2,"div",4),e(3,`
                    `),n(4,"div",5),e(5,`
                      `),n(6,"label",26),e(7,"Paid-up share capital (KES)(not less than 100,000):"),i(),e(8,`
                      `),d(9,$r,2,1,"div",7),e(10,`
                    `),i(),e(11,`
                  `),i(),e(12,`
                  `),n(13,"div",4),e(14,`
                    `),n(15,"div",5),e(16,`
                      `),n(17,"label",27),e(18,"Directors' Names (ID/Passport, KRA Clearance and Certificate of Good Conduct for Each Director):"),i(),e(19,`
                      `),d(20,Jr,5,2,"div",28),e(21,`
                    `),i(),e(22,`
                  `),i(),e(23,`
                  `),n(24,"div",4),e(25,`
                    `),n(26,"div",5),e(27,`
                      `),n(28,"label",29),e(29,"Years of Technical Experience in the Coffee Business (CVs and Company Profile):"),i(),e(30,`
                      `),d(31,Qr,5,2,"div",28),e(32,`
                    `),i(),e(33,`
                  `),i(),e(34,`
                  `),n(35,"div",4),e(36,`
                    `),n(37,"div",5),e(38,`
                      `),n(39,"label",30),e(40,"Growers represented and signed agreements (Renewal):"),i(),e(41,`
                      `),d(42,Xr,5,2,"div",28),e(43,`
                    `),i(),e(44,`
                  `),i(),e(45,`
                  `),n(46,"div",4),e(47,`
                    `),n(48,"div",5),e(49,`
                      `),n(50,"label",31),e(51,"Indemnity Against Professional Misconduct:"),i(),e(52,`
                      `),d(53,Zr,5,2,"div",28),e(54,`
                    `),i(),e(55,`
                  `),i(),e(56,`
                  `),n(57,"div",4),e(58,`
                    `),n(59,"div",5),e(60,`
                      `),n(61,"label",32),e(62,"Liquorer/Cupping Facility Engaged (Where Applicable):"),i(),e(63,`
                      `),d(64,ea,2,1,"div",7),e(65,`
                    `),i(),e(66,`
                  `),i(),e(67,`
                  `),n(68,"div",4),e(69,`
                    `),n(70,"div",5),e(71,`
                      `),n(72,"label",33),e(73,"Self-declaration (Form M):"),i(),e(74,`
                      `),d(75,ta,5,2,"div",28),e(76,`
                    `),i(),e(77,`
                  `),i(),e(78,`
                `),i()),r&2){let t=c();l(9),m("ngIf",t.item.paid_share_capital),l(11),m("ngIf",t.item.directors_details),l(11),m("ngIf",t.item.years_of_technical_experience),l(11),m("ngIf",t.item.growers_represented_and_signed_agreements),l(11),m("ngIf",t.item.indemnity_against_professional_misconduct),l(11),m("ngIf",t.item.liquorer_cupping_facility_engaged),l(11),m("ngIf",t.item.self_declaration_form)}}function na(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.license_purpose)}}function ra(r,a){if(r&1&&(n(0,"div",3),e(1,`
                  `),n(2,"div",12),e(3,`
                    `),n(4,"div",5),e(5,`
                      `),n(6,"label",36),e(7,"License Purpose (choose (i)or(ii)): "),g(8,"br"),e(9,"(i) Buy clean coffee at the exchange for (a)export,(b)local sale, (c)local value addition, OR "),g(10,"br"),e(11,"(ii) Import clean coffee for secondary processing in Kenya"),i(),e(12,`
                      `),d(13,na,2,1,"div",7),e(14,`
                    `),i(),e(15,`
                  `),i(),e(16,`
                `),i()),r&2){let t=c();l(13),m("ngIf",t.item.license_purpose)}}function aa(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.directors_name_address_and_occupations)}}function oa(r,a){if(r&1&&(n(0,"div",3),e(1,`
                  `),n(2,"div",12),e(3,`
                    `),n(4,"div",5),e(5,`
                      `),n(6,"label",36),e(7,"Full Names, Address and Occupations of the Directors:"),i(),e(8,`
                      `),d(9,aa,2,1,"div",7),e(10,`
                    `),i(),e(11,`
                  `),i(),e(12,`
                `),i()),r&2){let t=c();l(9),m("ngIf",t.item.directors_name_address_and_occupations)}}function la(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.year_of_certification)}}function ma(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.current_occupation)}}function da(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.coffee_tasting_expert_certificate_url),G)}}function sa(r,a){if(r&1&&(n(0,"div",3),e(1,`
                  `),n(2,"div",4),e(3,`
                    `),n(4,"div",5),e(5,`
                      `),n(6,"label",37),e(7,"Year of Certification (By Coffee Board of Kenya):"),i(),e(8,`
                      `),d(9,la,2,1,"div",7),e(10,`
                    `),i(),e(11,`
                  `),i(),e(12,`
                  `),n(13,"div",4),e(14,`
                    `),n(15,"div",5),e(16,`
                      `),n(17,"label",38),e(18,"Current Occupation:"),i(),e(19,`
                      `),d(20,ma,2,1,"div",7),e(21,`
                    `),i(),e(22,`
                  `),i(),e(23,`
                  `),n(24,"div",4),e(25,`
                    `),n(26,"div",5),e(27,`
                      `),n(28,"label",39),e(29,"Coffee Tasting Expert Certificate:"),i(),e(30,`
                      `),d(31,da,5,2,"div",28),e(32,`
                    `),i(),e(33,`
                  `),i(),e(34,`
                `),i()),r&2){let t=c();l(9),m("ngIf",t.item.year_of_certification),l(11),m("ngIf",t.item.current_occupation),l(11),m("ngIf",t.item.coffee_tasting_expert_certificate)}}function ca(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.milling_capacity)}}function pa(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.comprehensive_insurance_policy_url),G)}}function _a(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.mill_certification_url),G)}}function ua(r,a){if(r&1&&(n(0,"div",3),e(1,`
                  `),n(2,"div",4),e(3,`
                    `),n(4,"div",5),e(5,`
                      `),n(6,"label",40),e(7,"Milling Capacity for Parchment and	Buni (Tonnes per hour):"),i(),e(8,`
                      `),d(9,ca,2,1,"div",7),e(10,`
                    `),i(),e(11,`
                  `),i(),e(12,`
                  `),n(13,"div",4),e(14,`
                    `),n(15,"div",5),e(16,`
                      `),n(17,"label",41),e(18,"Comprehensive Insurance Policy:"),i(),e(19,`
                      `),d(20,pa,5,2,"div",28),e(21,`
                    `),i(),e(22,`
                  `),i(),e(23,`
                  `),n(24,"div",4),e(25,`
                    `),n(26,"div",5),e(27,`
                      `),n(28,"label",41),e(29,"Mill Certification (If Any):"),i(),e(30,`
                      `),d(31,_a,5,2,"div",28),e(32,`
                    `),i(),e(33,`
                  `),i(),e(34,`
                `),i()),r&2){let t=c();l(9),m("ngIf",t.item.milling_capacity),l(11),m("ngIf",t.item.comprehensive_insurance_policy),l(11),m("ngIf",t.item.mill_certification)}}function fa(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.company_officials_url),G)}}function ga(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.licensed_liquorers_engaged)}}function xa(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.laboratory_facilities)}}function va(r,a){if(r&1&&(n(0,"div",23),e(1),i()),r&2){let t=c(2);l(),f(t.item.services_to_be_offered)}}function ya(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.statutory_compliance_url),G)}}function Ca(r,a){if(r&1&&(n(0,"div",34),e(1,`
                        `),n(2,"a",35),e(3,"File"),i(),e(4,`
                      `),i()),r&2){let t=c(2);l(2),m("href",S(t.item.self_declaration_form_url),G)}}function ha(r,a){if(r&1&&(n(0,"div",3),e(1,`
                  `),n(2,"div",4),e(3,`
                    `),n(4,"div",5),e(5,`
                      `),n(6,"label",42),e(7,"Company Officials (Names and ID/Passport No):"),i(),e(8,`
                      `),d(9,fa,5,2,"div",28),e(10,`
                    `),i(),e(11,`
                  `),i(),e(12,`
                  `),n(13,"div",4),e(14,`
                    `),n(15,"div",5),e(16,`
                      `),n(17,"label",43),e(18,"Licensed Liquorers Engaged (Names and Practising Licence No):"),i(),e(19,`
                      `),d(20,ga,2,1,"div",7),e(21,`
                    `),i(),e(22,`
                  `),i(),e(23,`
                  `),n(24,"div",4),e(25,`
                    `),n(26,"div",5),e(27,`
                      `),n(28,"label",44),e(29,"Laboratory Facilities (Roasting, grinding, cupping, moisture analysis and other equipment):"),i(),e(30,`
                      `),d(31,xa,2,1,"div",7),e(32,`
                    `),i(),e(33,`
                  `),i(),e(34,`
                  `),n(35,"div",4),e(36,`
                    `),n(37,"div",5),e(38,`
                      `),n(39,"label",45),e(40,"Services to be Offered (Liquoring and quality analysis, Training on coffee quality, Other-specify):"),i(),e(41,`
                      `),d(42,va,2,1,"div",7),e(43,`
                    `),i(),e(44,`
                  `),i(),e(45,`
                  `),n(46,"div",4),e(47,`
                    `),n(48,"div",5),e(49,`
                      `),n(50,"label",46),e(51,"Statutory Compliance (Combine NEMA certificate, OHSA certificate, Public health certificate,Tax compliance certificate):"),i(),e(52,`
                      `),d(53,ya,5,2,"div",28),e(54,`
                    `),i(),e(55,`
                  `),i(),e(56,`
                  `),n(57,"div",4),e(58,`
                    `),n(59,"div",5),e(60,`
                      `),n(61,"label",33),e(62,"Self-declaration (Form M):"),i(),e(63,`
                      `),d(64,Ca,5,2,"div",28),e(65,`
                    `),i(),e(66,`
                  `),i(),e(67,`
                `),i()),r&2){let t=c();l(9),m("ngIf",t.item.company_officials),l(11),m("ngIf",t.item.licensed_liquorers_engaged),l(11),m("ngIf",t.item.laboratory_facilities),l(11),m("ngIf",t.item.services_to_be_offered),l(11),m("ngIf",t.item.statutory_compliance),l(11),m("ngIf",t.item.self_declaration_form)}}function Sa(r,a){if(r&1&&(n(0,"div",23),e(1,`
                  `),n(2,"span",25),e(3),i(),e(4,`
                `),i()),r&2){let t=c();l(2),m("ngClass",(t.item.payment==null?null:t.item.payment.status_id)===1?"bg-danger":"bg-success"),l(),f(t.item.payment==null?null:t.item.payment.status.name)}}function ba(r,a){if(r&1&&(n(0,"div",23),e(1),ue(2,"date"),i()),r&2){let t=c();l(),f(fe(2,1,t.item.effective_date))}}function Ea(r,a){if(r&1&&(n(0,"div",23),e(1),ue(2,"date"),i()),r&2){let t=c();l(),f(fe(2,1,t.item.date_of_gazettement_intent))}}var $e=class r{constructor(a,t,o,s){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=o;this.route=s;this.mProgress=h(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||r)(x(L),x(D),x(N),x(z))}}static{this.\u0275cmp=M({type:r,selectors:[["app-show"]],standalone:!1,decls:176,vars:23,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","application_number"],["class","text-muted",4,"ngIf"],["for","type_id"],["for","financial_year",1,"col-form-label","required1"],["for","issuing_body_id",1,"col-form-label","required1"],["for","expiry_date"],[1,"col-md-12"],[1,"border","p-4","mb-4"],[1,"float-none","w-auto"],[1,"text-bold1"],["class","row",4,"ngIf"],["for","payment"],["for","coffee_species_id"],["for","coffee_form_id"],[1,"mt-3","text-end"],["routerLink","/licenses",1,"btn","btn-light"],[1,"btn","btn-warning",3,"routerLink"],[1,"text-muted"],[1,"fw-bold",3,"routerLink"],[1,"badge","rounded-pill",3,"ngClass"],["for","paid_share_capital"],["for","directors_details"],["class","text-muted1",4,"ngIf"],["for","years_of_technical_experience"],["for","growers_represented_and_signed_agreements"],["for","indemnity_against_professional_misconduct"],["for","liquorer_cupping_facility_engaged"],["for","self_declaration_form"],[1,"text-muted1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","license_purpose"],["for","year_of_certification"],["for","current_occupation"],["for","coffee_tasting_expert_certificate"],["for","milling_capacity"],["for","comprehensive_insurance_policy"],["for","company_officials"],["for","licensed_liquorers_engaged"],["for","laboratory_facilities"],["for","services_to_be_offered"],["for","statutory_compliance"]],template:function(t,o){t&1&&(d(0,Rr,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div"),e(10,`
          `),n(11,"div",3),e(12,`
            `),n(13,"div",4),e(14,`
              `),n(15,"div",5),e(16,`
                `),n(17,"label",6),e(18,"Application Number:"),i(),e(19,`
                `),d(20,Wr,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),n(24,"div",4),e(25,`
              `),n(26,"div",5),e(27,`
                `),n(28,"label",6),e(29,"Applicant:"),i(),e(30,`
                `),d(31,jr,5,3,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),n(35,"div",4),e(36,`
              `),n(37,"div",5),e(38,`
                `),n(39,"label",6),e(40,"Status:"),i(),e(41,`
                `),d(42,Gr,5,10,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),n(46,"div",4),e(47,`
              `),n(48,"div",5),e(49,`
                `),n(50,"label",8),e(51,"License Category:"),i(),e(52,`
                `),d(53,Yr,2,1,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),n(57,"div",4),e(58,`
              `),n(59,"div",5),e(60,`
                `),n(61,"label",9),e(62,"Year/Period:"),i(),e(63,`
                `),d(64,Ur,2,1,"div",7),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),n(68,"div",4),e(69,`
              `),n(70,"div",5),e(71,`
                `),n(72,"label",10),e(73,"Issuing Body:"),i(),e(74,`
                `),d(75,Hr,2,1,"div",7),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),n(79,"div",4),e(80,`
              `),n(81,"div",5),e(82,`
                `),n(83,"label",11),e(84,"Expiry Date:"),i(),e(85,`
                `),d(86,zr,3,3,"div",7),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),n(90,"div",4),e(91,`
              `),n(92,"div",5),e(93,`
                `),n(94,"label",8),e(95,"License Type:"),i(),e(96,`
                `),d(97,Kr,2,1,"div",7),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`

            `),n(101,"div",12),e(102,`
              `),n(103,"fieldset",13),e(104,`
                `),n(105,"legend",14)(106,"h6",15),e(107),i()(),e(108,`
                `),e(109,`
                `),d(110,ia,79,7,"div",16),e(111,`
                `),e(112,`
                `),d(113,ra,17,1,"div",16),e(114,`
                `),e(115,`
                `),d(116,oa,13,1,"div",16),e(117,`
                `),e(118,`
                `),d(119,sa,35,3,"div",16),e(120,`
                `),e(121,`
                `),d(122,ua,35,3,"div",16),e(123,`
                `),e(124,`
                `),d(125,ha,68,6,"div",16),e(126,`
              `),i(),e(127,`
            `),i(),e(128,`

            `),n(129,"div",4),e(130,`
              `),n(131,"div",5),e(132,`
                `),n(133,"label",17),e(134,"Payment:"),i(),e(135,`
                `),d(136,Sa,5,2,"div",7),e(137,`
              `),i(),e(138,`
            `),i(),e(139,`
            `),n(140,"div",4),e(141,`
              `),n(142,"div",5),e(143,`
                `),n(144,"label",18),e(145,"Effective Date:"),i(),e(146,`
                `),d(147,ba,3,3,"div",7),e(148,`
              `),i(),e(149,`
            `),i(),e(150,`
            `),n(151,"div",4),e(152,`
              `),n(153,"div",5),e(154,`
                `),n(155,"label",19),e(156,"Date of Gazettement Intent:"),i(),e(157,`
                `),d(158,Ea,3,3,"div",7),e(159,`
              `),i(),e(160,`
            `),i(),e(161,`
          `),i(),e(162,`
          `),n(163,"div",20),e(164,`
            `),n(165,"button",21),e(166,"Cancel"),i(),e(167,`
            `),n(168,"button",22),e(169,"Process"),i(),e(170,`
          `),i(),e(171,`
        `),i(),e(172,`

      `),i(),e(173,`
    `),i(),e(174,`
  `),i(),e(175,`
`),i()),t&2&&(m("ngIf",o.mProgress()),l(20),m("ngIf",o.item.application_number),l(11),m("ngIf",o.item.user),l(11),m("ngIf",o.item.status_id),l(11),m("ngIf",o.item.category),l(11),m("ngIf",o.item.financial_year),l(11),m("ngIf",o.item.issuing_body_id),l(11),m("ngIf",o.item.expiry_date),l(11),m("ngIf",o.item.type),l(10),f(o.item.type==null?null:o.item.type.name),l(3),m("ngIf",o.item.type_id==1),l(3),m("ngIf",o.item.type_id==2),l(3),m("ngIf",o.item.type_id==3),l(3),m("ngIf",o.item.type_id==4),l(3),m("ngIf",o.item.type_id==5),l(3),m("ngIf",o.item.type_id==6),l(11),m("ngIf",o.item.payment),l(11),m("ngIf",o.item.effective_date),l(11),m("ngIf",o.item.date_of_gazettement_intent),l(10),m("routerLink",o.mAppContextService.hasTypes(Y(20,kr))?_(21,Or,o.item.id):null))},dependencies:[U,A,V,k,K,$,J,Q,Ve],encapsulation:2})}};var Fa=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Ye,data:{title:"Licenses"}},{path:"create",component:We,data:{title:"Licenses / Create"}},{path:"edit/:id",component:Ge,data:{title:"Licenses / Edit"}},{path:"show/:id",component:$e,data:{title:"Licenses / Show"}},{path:"process/:id",component:Ke,data:{title:"Licenses / Process"}}],Je=class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=Le({type:r})}static{this.\u0275inj=Ne({imports:[De,Xe.forChild(Fa),Xe]})}};var Ft=class r{static{this.\u0275fac=function(t){return new(t||r)}}static{this.\u0275mod=Le({type:r})}static{this.\u0275inj=Ne({imports:[De,Je,yt,st,pt,_t,ut,ft,vt,St,dt]})}};export{Ft as LicenseModule};
