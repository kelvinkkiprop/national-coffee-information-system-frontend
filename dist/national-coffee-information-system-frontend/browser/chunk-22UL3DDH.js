import{a as pt}from"./chunk-D5MIKHAE.js";import{b as H,c as v,d as $,e as G,f as rt,g as at,h as z,j as W,k as Q,l as X,m as Z,n as ee,o as te,p as ot}from"./chunk-JSR5FKFU.js";import{a as N}from"./chunk-4MT6PD6W.js";import{a as R,b as nt,c as T,e as q}from"./chunk-CPWY5AIC.js";import{$ as Ke,Ca as Ze,Da as et,Ea as tt,G as Pe,Ja as it,M as Ge,Q as ze,R as We,X as O,Y as V,_ as Qe,c as A,d as L,e as P,g as he,ia as Ye,j as ye,ka as M,la as j,n as He,na as Je,o as $e,ta as Xe,v as U,x as J,y as k}from"./chunk-JHTOCNXX.js";import{Bc as ae,Cb as s,Cc as oe,Db as r,Eb as n,Fb as x,Fc as Ue,Na as Ve,Oa as I,Ob as E,S as Oe,Sa as m,Sb as g,T as _e,Ub as c,W as De,aa as C,ab as _,ba as S,cc as Me,fb as D,gb as ue,hc as e,ic as h,jc as je,lb as d,lc as fe,ma as b,mc as ge,nc as ve,rc as y,sc as Y,tc as Be,vc as f,wc as u,xc as Le,zc as xe}from"./chunk-MHSS2KTR.js";import{a as Ne,b as Ae,e as ct}from"./chunk-2WH2EVR6.js";var w=class a{constructor(o,t){this.mAppContextService=o;this.http=t}allItems(){let o=`${R.base_url}/dealer-registrations`;return this.http.get(o,this.mAppContextService.getHttpOptions())}createItem(o){let t=`${R.base_url}/dealer-registrations`;return this.http.post(t,o)}getOneItem(o){let t=`${R.base_url}/dealer-registrations/${o}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(o,t){let i=`${R.base_url}/dealer-registrations/${o}`;return this.http.post(i,t)}deleteItem(o){let t=`${R.base_url}/dealer-registrations/${o.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(o){return this.http.get(o,this.mAppContextService.getHttpOptions())}searchItems(o){let t=`${R.base_url}/search-dealer-registrations`;return this.http.post(t,o,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let o=`${R.base_url}/unpaginated-items-dealer-registrations`;return this.http.get(o,this.mAppContextService.getHttpOptions())}filterLicenseTypes(o){let t=`${R.base_url}/filter-license-types/${o}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusItem(o){let t=`${R.base_url}/next-previous-status-process-dealer-registrations/${o}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}reviewApplicationItem(o){let t=`${R.base_url}/review-process-dealer-registrations/${o.id}`;return this.http.post(t,o,this.mAppContextService.getHttpOptions())}onDownloadCertificate(o){let t=new He;t=t.set("Accept","application/pdf");let i=`${R.base_url}/certificate-pdf/${o.id}`;return this.http.get(i,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||a)(De(T),De($e))}}static{this.\u0275prov=Oe({token:a,factory:a.\u0275fac,providedIn:"root"})}};var F=a=>({"is-invalid":a}),_t=()=>[2],lt=()=>[13,20,21,22],ut=()=>[13,20,21],B=()=>[20],ft=()=>[20,21],ke=()=>[22],gt=()=>[20,21,22];function vt(a,o){a&1&&x(0,"app-progress")}function xt(a,o){if(a&1&&(r(0,"option",22),e(1),n()),a&2){let t=o.$implicit;s("value",y(t.id)),m(),h(t.name)}}function ht(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function yt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                  `),d(2,ht,2,0,"div",0),e(3,`
                `),n()),a&2){let t,i=c();m(2),s("ngIf",(t=i.itemForm.get("user_id"))==null||t.errors==null?null:t.errors.required)}}function Ct(a,o){if(a&1){let t=E();r(0,"div",24),e(1,`
                    `),r(2,"input",25),g("change",function(l){let p=C(t).$implicit,re=c();return S(re.onCategoryChange(+p.id,l))}),n(),e(3,`
                    `),r(4,"label",26),e(5),n(),e(6,`
                  `),n()}if(a&2){let t=o.$implicit,i=c();m(2),s("id","category_"+t.id)("checked",i.mSelectedCategories.includes(+t.id)),m(2),s("for","category_"+t.id),m(),h(t.name)}}function St(a,o){if(a&1&&(r(0,"option",22),e(1),n()),a&2){let t=o.$implicit;s("value",y(t.id)),m(),h(t.name)}}function bt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Et(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,bt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("cooperative_society_id"))==null||t.errors==null?null:t.errors.required)}}function Ft(a,o){if(a&1&&(r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",28),e(5,"Cooperative Society:"),n(),e(6,`
                  `),r(7,"select",29),e(8,`
                    `),r(9,"option",9),e(10,"--- Select cooperative society ---"),n(),e(11,`
                    `),d(12,St,2,3,"option",10),e(13,`
                  `),n(),e(14,`
                  `),d(15,Et,4,1,"div",11),e(16,`
                `),n(),e(17,`
              `),n()),a&2){let t,i,l=c();m(7),s("ngClass",u(3,F,((t=l.itemForm.get("cooperative_society_id"))==null?null:t.invalid)&&(((t=l.itemForm.get("cooperative_society_id"))==null?null:t.dirty)||((t=l.itemForm.get("cooperative_society_id"))==null?null:t.touched)))),m(5),s("ngForOf",l.mCooperativeSocieties),m(3),s("ngIf",((i=l.itemForm.get("cooperative_society_id"))==null?null:i.invalid)&&(((i=l.itemForm.get("cooperative_society_id"))==null?null:i.dirty)||((i=l.itemForm.get("cooperative_society_id"))==null?null:i.touched)))}}function It(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Tt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,It,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("certificate_of_incorporation_or_registration"))==null||t.errors==null?null:t.errors.required)}}function wt(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",30),e(5,"Certificate of Incorporation or Registration:"),n(),e(6,`
                  `),r(7,"input",31),g("change",function(l){C(t);let p=c();return S(p.onCertificateOfIncorporationOrRegistrationChange(l))}),n(),e(8,`
                  `),d(9,Tt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("certificate_of_incorporation_or_registration"))==null?null:t.invalid)&&(((t=l.itemForm.get("certificate_of_incorporation_or_registration"))==null?null:t.dirty)||((t=l.itemForm.get("certificate_of_incorporation_or_registration"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("certificate_of_incorporation_or_registration"))==null?null:i.invalid)&&(((i=l.itemForm.get("certificate_of_incorporation_or_registration"))==null?null:i.dirty)||((i=l.itemForm.get("certificate_of_incorporation_or_registration"))==null?null:i.touched)))}}function Dt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Pt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Dt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("directors_details_id_passport_and_kra_pins"))==null||t.errors==null?null:t.errors.required)}}function kt(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",32),e(5,"Names, National ID/Passport and PIN Numbers of Directors, Officials or Proprietors:"),n(),e(6,`
                  `),r(7,"input",33),g("change",function(l){C(t);let p=c();return S(p.onDirectorsDetailsIdPassportAndKraPinsChange(l))}),n(),e(8,`
                  `),d(9,Pt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("directors_details_id_passport_and_kra_pins"))==null?null:t.invalid)&&(((t=l.itemForm.get("directors_details_id_passport_and_kra_pins"))==null?null:t.dirty)||((t=l.itemForm.get("directors_details_id_passport_and_kra_pins"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("directors_details_id_passport_and_kra_pins"))==null?null:i.invalid)&&(((i=l.itemForm.get("directors_details_id_passport_and_kra_pins"))==null?null:i.dirty)||((i=l.itemForm.get("directors_details_id_passport_and_kra_pins"))==null?null:i.touched)))}}function Rt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function qt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Rt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("tax_compliance_certificate"))==null||t.errors==null?null:t.errors.required)}}function Nt(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",34),e(5,"KRA Tax Compliance Certificate:"),n(),e(6,`
                  `),r(7,"input",35),g("change",function(l){C(t);let p=c();return S(p.onTaxComplianceCertificateChange(l))}),n(),e(8,`
                  `),d(9,qt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("tax_compliance_certificate"))==null?null:t.invalid)&&(((t=l.itemForm.get("tax_compliance_certificate"))==null?null:t.dirty)||((t=l.itemForm.get("tax_compliance_certificate"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("tax_compliance_certificate"))==null?null:i.invalid)&&(((i=l.itemForm.get("tax_compliance_certificate"))==null?null:i.dirty)||((i=l.itemForm.get("tax_compliance_certificate"))==null?null:i.touched)))}}function At(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ot(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,At,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("premises_ownership_or_lease_document"))==null||t.errors==null?null:t.errors.required)}}function Vt(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",36),e(5,"Proof of Ownership or Lease of the Training Premises:"),n(),e(6,`
                  `),r(7,"input",37),g("change",function(l){C(t);let p=c();return S(p.onPremisesOwnershipOrLeaseDocumentChange(l))}),n(),e(8,`
                  `),d(9,Ot,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("premises_ownership_or_lease_document"))==null?null:t.invalid)&&(((t=l.itemForm.get("premises_ownership_or_lease_document"))==null?null:t.dirty)||((t=l.itemForm.get("premises_ownership_or_lease_document"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("premises_ownership_or_lease_document"))==null?null:i.invalid)&&(((i=l.itemForm.get("premises_ownership_or_lease_document"))==null?null:i.dirty)||((i=l.itemForm.get("premises_ownership_or_lease_document"))==null?null:i.touched)))}}function Mt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function jt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Mt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("training_equipment_inventory"))==null||t.errors==null?null:t.errors.required)}}function Bt(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",38),e(5,"Cupping, Roasting and Brewing Equipment Appropriate to Courses Offered:"),n(),e(6,`
                  `),r(7,"input",39),g("change",function(l){C(t);let p=c();return S(p.onTrainingEquipmentInventoryChange(l))}),n(),e(8,`
                  `),d(9,jt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("training_equipment_inventory"))==null?null:t.invalid)&&(((t=l.itemForm.get("training_equipment_inventory"))==null?null:t.dirty)||((t=l.itemForm.get("training_equipment_inventory"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("training_equipment_inventory"))==null?null:i.invalid)&&(((i=l.itemForm.get("training_equipment_inventory"))==null?null:i.dirty)||((i=l.itemForm.get("training_equipment_inventory"))==null?null:i.touched)))}}function Lt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ut(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Lt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("course_outline_and_training_curriculum"))==null||t.errors==null?null:t.errors.required)}}function Ht(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",40),e(5,"Course Outline and Training Curriculum (Developed by the Board under Regulation 6B(2)):"),n(),e(6,`
                  `),r(7,"input",41),g("change",function(l){C(t);let p=c();return S(p.onCourseOutlineAndTrainingCurriculumChange(l))}),n(),e(8,`
                  `),d(9,Ut,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("course_outline_and_training_curriculum"))==null?null:t.invalid)&&(((t=l.itemForm.get("course_outline_and_training_curriculum"))==null?null:t.dirty)||((t=l.itemForm.get("course_outline_and_training_curriculum"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("course_outline_and_training_curriculum"))==null?null:i.invalid)&&(((i=l.itemForm.get("course_outline_and_training_curriculum"))==null?null:i.dirty)||((i=l.itemForm.get("course_outline_and_training_curriculum"))==null?null:i.touched)))}}function $t(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Gt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,$t,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("company_profile"))==null||t.errors==null?null:t.errors.required)}}function zt(a,o){if(a&1&&(r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",42),e(5,"Names, Qualifications and Certificates of Trainers (Including at least One Liquorer Licensed by the Board for Cupping Courses):"),n(),e(6,`
                  `),x(7,"input",43),e(8,`
                  `),d(9,Gt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()),a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("company_profile"))==null?null:t.invalid)&&(((t=l.itemForm.get("company_profile"))==null?null:t.dirty)||((t=l.itemForm.get("company_profile"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("company_profile"))==null?null:i.invalid)&&(((i=l.itemForm.get("company_profile"))==null?null:i.dirty)||((i=l.itemForm.get("company_profile"))==null?null:i.touched)))}}function Wt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Qt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Wt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("public_health_certificate"))==null||t.errors==null?null:t.errors.required)}}function Kt(a,o){if(a&1&&(r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",44),e(5,"Names, Qualifications and Certificates of Trainers (Including at least One Liquorer Licensed by the Board for Cupping Courses):"),n(),e(6,`
                  `),x(7,"input",45),e(8,`
                  `),d(9,Qt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()),a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("public_health_certificate"))==null?null:t.invalid)&&(((t=l.itemForm.get("public_health_certificate"))==null?null:t.dirty)||((t=l.itemForm.get("public_health_certificate"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("public_health_certificate"))==null?null:i.invalid)&&(((i=l.itemForm.get("public_health_certificate"))==null?null:i.dirty)||((i=l.itemForm.get("public_health_certificate"))==null?null:i.touched)))}}function Yt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Jt(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Yt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("public_health_certificate"))==null||t.errors==null?null:t.errors.required)}}function Xt(a,o){if(a&1&&(r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",44),e(5,"Registration or Accreditation by the Relevant Education or Training Accreditation Body (Where Applicable):"),n(),e(6,`
                  `),x(7,"input",45),e(8,`
                  `),d(9,Jt,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()),a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("public_health_certificate"))==null?null:t.invalid)&&(((t=l.itemForm.get("public_health_certificate"))==null?null:t.dirty)||((t=l.itemForm.get("public_health_certificate"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("public_health_certificate"))==null?null:i.invalid)&&(((i=l.itemForm.get("public_health_certificate"))==null?null:i.dirty)||((i=l.itemForm.get("public_health_certificate"))==null?null:i.touched)))}}function Zt(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function ei(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,Zt,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("public_health_certificate"))==null||t.errors==null?null:t.errors.required)}}function ti(a,o){if(a&1&&(r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",44),e(5,"Public Health Certificate (For the Premises):"),n(),e(6,`
                  `),x(7,"input",45),e(8,`
                  `),d(9,ei,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()),a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("public_health_certificate"))==null?null:t.invalid)&&(((t=l.itemForm.get("public_health_certificate"))==null?null:t.dirty)||((t=l.itemForm.get("public_health_certificate"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("public_health_certificate"))==null?null:i.invalid)&&(((i=l.itemForm.get("public_health_certificate"))==null?null:i.dirty)||((i=l.itemForm.get("public_health_certificate"))==null?null:i.touched)))}}function ii(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function ni(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,ii,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("company_profile"))==null||t.errors==null?null:t.errors.required)}}function ri(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",42),e(5,"Company Profile (Showing Experience in Organising Exhibitions, Festivals, Competitions or Trade Fairs):"),n(),e(6,`
                  `),r(7,"input",46),g("change",function(l){C(t);let p=c();return S(p.onCompanyProfileChange(l))}),n(),e(8,`
                  `),d(9,ni,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("company_profile"))==null?null:t.invalid)&&(((t=l.itemForm.get("company_profile"))==null?null:t.dirty)||((t=l.itemForm.get("company_profile"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("company_profile"))==null?null:i.invalid)&&(((i=l.itemForm.get("company_profile"))==null?null:i.dirty)||((i=l.itemForm.get("company_profile"))==null?null:i.touched)))}}function ai(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function oi(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,ai,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("project_document"))==null||t.errors==null?null:t.errors.required)}}function li(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",47),e(5,"Project Document (Stating  Objectives, Counties and Areas of Operation, Target Beneficiaries, Budget, Sources of Funding/Furation):"),n(),e(6,`
                  `),r(7,"input",48),g("change",function(l){C(t);let p=c();return S(p.onProjectDocumentChange(l))}),n(),e(8,`
                  `),d(9,oi,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("project_document"))==null?null:t.invalid)&&(((t=l.itemForm.get("project_document"))==null?null:t.dirty)||((t=l.itemForm.get("project_document"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("project_document"))==null?null:i.invalid)&&(((i=l.itemForm.get("project_document"))==null?null:i.dirty)||((i=l.itemForm.get("project_document"))==null?null:i.touched)))}}function mi(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function si(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,mi,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("county_government_support_letters_and_mou"))==null||t.errors==null?null:t.errors.required)}}function di(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",49),e(5,"Letters of Support or/and MoUs with Respective County Governments:"),n(),e(6,`
                  `),r(7,"input",50),g("change",function(l){C(t);let p=c();return S(p.onCountyGovernmentSupportLettersAndMouChange(l))}),n(),e(8,`
                  `),d(9,si,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("county_government_support_letters_and_mou"))==null?null:t.invalid)&&(((t=l.itemForm.get("county_government_support_letters_and_mou"))==null?null:t.dirty)||((t=l.itemForm.get("county_government_support_letters_and_mou"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("county_government_support_letters_and_mou"))==null?null:i.invalid)&&(((i=l.itemForm.get("county_government_support_letters_and_mou"))==null?null:i.dirty)||((i=l.itemForm.get("county_government_support_letters_and_mou"))==null?null:i.touched)))}}function ci(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function pi(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,ci,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null||t.errors==null?null:t.errors.required)}}function _i(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",51),e(5,"Implementation Plan and Monitoring & Evaluation Framework:"),n(),e(6,`
                  `),r(7,"input",52),g("change",function(l){C(t);let p=c();return S(p.onImplementationPlanMonitoringAndEvaluationFrameworkChange(l))}),n(),e(8,`
                  `),d(9,pi,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null?null:t.invalid)&&(((t=l.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null?null:t.dirty)||((t=l.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null?null:i.invalid)&&(((i=l.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null?null:i.dirty)||((i=l.itemForm.get("implementation_plan_monitoring_and_evaluation_framework"))==null?null:i.touched)))}}function ui(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function fi(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,ui,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null||t.errors==null?null:t.errors.required)}}function gi(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",53),e(5,"Names, Qualifications and Certificates of the Trainers (Including at least One Liquorer Licensed by the Board for Cupping Courses):"),n(),e(6,`
                  `),r(7,"input",54),g("change",function(l){C(t);let p=c();return S(p.onNamesQualificationsAndCertificatesOfTrainersChange(l))}),n(),e(8,`
                  `),d(9,fi,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null?null:t.invalid)&&(((t=l.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null?null:t.dirty)||((t=l.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null?null:i.invalid)&&(((i=l.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null?null:i.dirty)||((i=l.itemForm.get("names_qualifications_and_certificates_of_trainers"))==null?null:i.touched)))}}function vi(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function xi(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,vi,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("education_or_training_accreditation_certificate"))==null||t.errors==null?null:t.errors.required)}}function hi(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",55),e(5,"Registration or Accreditation by Relevant Education or Training Accreditation Body:"),n(),e(6,`
                  `),r(7,"input",56),g("change",function(l){C(t);let p=c();return S(p.onEducationOrTrainingAccreditationCertificateChange(l))}),n(),e(8,`
                  `),d(9,xi,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("education_or_training_accreditation_certificate"))==null?null:t.invalid)&&(((t=l.itemForm.get("education_or_training_accreditation_certificate"))==null?null:t.dirty)||((t=l.itemForm.get("education_or_training_accreditation_certificate"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("education_or_training_accreditation_certificate"))==null?null:i.invalid)&&(((i=l.itemForm.get("education_or_training_accreditation_certificate"))==null?null:i.dirty)||((i=l.itemForm.get("education_or_training_accreditation_certificate"))==null?null:i.touched)))}}function yi(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ci(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,yi,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("public_health_certificate"))==null||t.errors==null?null:t.errors.required)}}function Si(a,o){if(a&1){let t=E();r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",57),e(5,"Public Health Certificate for the Premises:"),n(),e(6,`
                  `),r(7,"input",58),g("change",function(l){C(t);let p=c();return S(p.onpublicHealthCertificateChange(l))}),n(),e(8,`
                  `),d(9,Ci,4,1,"div",11),e(10,`
                `),n(),e(11,`
              `),n()}if(a&2){let t,i,l=c();m(7),s("ngClass",u(2,F,((t=l.itemForm.get("public_health_certificate"))==null?null:t.invalid)&&(((t=l.itemForm.get("public_health_certificate"))==null?null:t.dirty)||((t=l.itemForm.get("public_health_certificate"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("public_health_certificate"))==null?null:i.invalid)&&(((i=l.itemForm.get("public_health_certificate"))==null?null:i.dirty)||((i=l.itemForm.get("public_health_certificate"))==null?null:i.touched)))}}function bi(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ei(a,o){if(a&1&&(r(0,"div",23),e(1,`
                    `),d(2,bi,2,0,"div",0),e(3,`
                  `),n()),a&2){let t,i=c(2);m(2),s("ngIf",(t=i.itemForm.get("self_declaration_form"))==null||t.errors==null?null:t.errors.required)}}function Fi(a,o){if(a&1&&(r(0,"div",27),e(1,`
                `),r(2,"div",6),e(3,`
                  `),r(4,"label",59),e(5,"Self-declaration of any Indebtedness, Conflicts and Litigations within the Coffee Industry (In Form M): "),r(6,"a",60),e(7,"Download Here"),n()(),e(8,`
                  `),x(9,"input",61),e(10,`
                  `),d(11,Ei,4,1,"div",11),e(12,`
                `),n(),e(13,`
              `),n()),a&2){let t,i,l=c();m(9),s("ngClass",u(2,F,((t=l.itemForm.get("self_declaration_form"))==null?null:t.invalid)&&(((t=l.itemForm.get("self_declaration_form"))==null?null:t.dirty)||((t=l.itemForm.get("self_declaration_form"))==null?null:t.touched)))),m(2),s("ngIf",((i=l.itemForm.get("self_declaration_form"))==null?null:i.invalid)&&(((i=l.itemForm.get("self_declaration_form"))==null?null:i.dirty)||((i=l.itemForm.get("self_declaration_form"))==null?null:i.touched)))}}var Ce=class a{constructor(o,t,i,l,p){this.mDealerRegistrationService=o;this.mToastrService=t;this.mAppContextService=i;this.router=l;this.fb=p;this.mProgress=b(!1);this.mSelectedCategories=[];this.itemForm=this.fb.group({user_id:["",v.required],category_id:[[]],cooperative_society_id:["",v.nullValidator],certificate_of_incorporation_or_registration:["",v.nullValidator],directors_details_id_passport_and_kra_pins:["",v.nullValidator],tax_compliance_certificate:["",v.nullValidator],premises_ownership_or_lease_document:["",v.nullValidator],training_equipment_inventory:["",v.nullValidator],course_outline_and_training_curriculum:["",v.nullValidator],names_qualifications_and_certificates_of_trainers:["",v.nullValidator],education_or_training_accreditation_certificate:["",v.nullValidator],public_health_certificate:["",v.nullValidator],company_profile:["",v.nullValidator],project_document:["",v.nullValidator],county_government_support_letters_and_mou:["",v.nullValidator],implementation_plan_monitoring_and_evaluation_framework:["",v.nullValidator],self_declaration_form:["",v.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(o){let t=new FormData;t.append("user_id",o.user_id),t.append("category_id",this.mSelectedCategories),t.append("certificate_of_incorporation_or_registration",this.certificate_of_incorporation_or_registration_file?t.append("certificate_of_incorporation_or_registration",this.certificate_of_incorporation_or_registration_file,this.certificate_of_incorporation_or_registration_file.name):t.append("certificate_of_incorporation_or_registration","")),t.append("directors_details_id_passport_and_kra_pins",this.directors_details_id_passport_and_kra_pins_file?t.append("directors_details_id_passport_and_kra_pins",this.directors_details_id_passport_and_kra_pins_file,this.directors_details_id_passport_and_kra_pins_file.name):t.append("directors_details_id_passport_and_kra_pins","")),t.append("tax_compliance_certificate",this.tax_compliance_certificate_file?t.append("tax_compliance_certificate",this.tax_compliance_certificate_file,this.tax_compliance_certificate_file.name):t.append("tax_compliance_certificate","")),t.append("premises_ownership_or_lease_document",this.premises_ownership_or_lease_document_file?t.append("premises_ownership_or_lease_document",this.premises_ownership_or_lease_document_file,this.premises_ownership_or_lease_document_file.name):t.append("premises_ownership_or_lease_document","")),t.append("training_equipment_inventory",this.training_equipment_inventory_file?t.append("training_equipment_inventory",this.training_equipment_inventory_file,this.training_equipment_inventory_file.name):t.append("training_equipment_inventory","")),t.append("course_outline_and_training_curriculum",this.course_outline_and_training_curriculum_file?t.append("course_outline_and_training_curriculum",this.course_outline_and_training_curriculum_file,this.course_outline_and_training_curriculum_file.name):t.append("course_outline_and_training_curriculum","")),t.append("names_qualifications_and_certificates_of_trainers",this.names_qualifications_and_certificates_of_trainers_file?t.append("names_qualifications_and_certificates_of_trainers",this.names_qualifications_and_certificates_of_trainers_file,this.names_qualifications_and_certificates_of_trainers_file.name):t.append("names_qualifications_and_certificates_of_trainers","")),t.append("education_or_training_accreditation_certificate",this.education_or_training_accreditation_certificate_file?t.append("education_or_training_accreditation_certificate",this.education_or_training_accreditation_certificate_file,this.education_or_training_accreditation_certificate_file.name):t.append("education_or_training_accreditation_certificate","")),t.append("public_health_certificate",this.public_health_certificate_file?t.append("public_health_certificate",this.public_health_certificate_file,this.public_health_certificate_file.name):t.append("public_health_certificate","")),t.append("company_profile",this.company_profile_file?t.append("company_profile",this.company_profile_file,this.company_profile_file.name):t.append("company_profile","")),t.append("project_document",this.project_document_file?t.append("project_document",this.project_document_file,this.project_document_file.name):t.append("project_document","")),t.append("county_government_support_letters_and_mou",this.county_government_support_letters_and_mou_file?t.append("county_government_support_letters_and_mou",this.county_government_support_letters_and_mou_file,this.county_government_support_letters_and_mou_file.name):t.append("county_government_support_letters_and_mou","")),t.append("implementation_plan_monitoring_and_evaluation_framework",this.implementation_plan_monitoring_and_evaluation_framework_file?t.append("implementation_plan_monitoring_and_evaluation_framework",this.implementation_plan_monitoring_and_evaluation_framework_file,this.implementation_plan_monitoring_and_evaluation_framework_file.name):t.append("implementation_plan_monitoring_and_evaluation_framework","")),t.append("cooperative_society_id",o.cooperative_society_id),t.append("_method","POST"),this.mProgress.set(!0),this.mDealerRegistrationService.createItem(t).subscribe({next:i=>{i&&(this.mToastrService.success(i.message),this.router.navigateByUrl("/dealer-registrations"),this.mProgress.set(!1))},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDealerRegistrationService.unpaginatedItems().subscribe({next:o=>{o&&(this.mDealershipCategories=o.data.dealership_categories,this.mCooperativeSocieties=o.data.cooperative_societies,this.mUsers=o.data.users,this.mProgress.set(!1))},error:o=>{this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onCategoryChange(o,t){t.target.checked?this.mSelectedCategories.includes(o)||this.mSelectedCategories.push(o):this.mSelectedCategories=this.mSelectedCategories.filter(l=>l!==o),this.itemForm.patchValue({category_id:this.mSelectedCategories}),console.log(this.mSelectedCategories)}hasID(o){return o.some(t=>this.mSelectedCategories.includes(t))}onCertificateOfIncorporationOrRegistrationChange(o){if(o.target.value){let t=o.target.files[0];this.certificate_of_incorporation_or_registration_file=t}}onDirectorsDetailsIdPassportAndKraPinsChange(o){if(o.target.value){let t=o.target.files[0];this.directors_details_id_passport_and_kra_pins_file=t}}onTaxComplianceCertificateChange(o){if(o.target.value){let t=o.target.files[0];this.tax_compliance_certificate_file=t}}onProjectDocumentChange(o){if(o.target.value){let t=o.target.files[0];this.project_document_file=t}}onCountyGovernmentSupportLettersAndMouChange(o){if(o.target.value){let t=o.target.files[0];this.county_government_support_letters_and_mou_file=t}}onImplementationPlanMonitoringAndEvaluationFrameworkChange(o){if(o.target.value){let t=o.target.files[0];this.implementation_plan_monitoring_and_evaluation_framework_file=t}}onCompanyProfileChange(o){if(o.target.value){let t=o.target.files[0];this.company_profile_file=t}}onPremisesOwnershipOrLeaseDocumentChange(o){if(o.target.value){let t=o.target.files[0];this.premises_ownership_or_lease_document_file=t}}onTrainingEquipmentInventoryChange(o){if(o.target.value){let t=o.target.files[0];this.training_equipment_inventory_file=t}}onCourseOutlineAndTrainingCurriculumChange(o){if(o.target.value){let t=o.target.files[0];this.course_outline_and_training_curriculum_file=t}}onNamesQualificationsAndCertificatesOfTrainersChange(o){if(o.target.value){let t=o.target.files[0];this.names_qualifications_and_certificates_of_trainers_file=t}}onEducationOrTrainingAccreditationCertificateChange(o){if(o.target.value){let t=o.target.files[0];this.education_or_training_accreditation_certificate_file=t}}onpublicHealthCertificateChange(o){if(o.target.value){let t=o.target.files[0];this.public_health_certificate_file=t}}static{this.\u0275fac=function(t){return new(t||a)(_(w),_(q),_(T),_(J),_(te))}}static{this.\u0275cmp=D({type:a,selectors:[["app-create"]],standalone:!1,decls:113,vars:47,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","user_id",1,"col-form-label","required"],["formControlName","user_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-form-label","required"],[1,"row","container"],["class","col-md-4 form-check",4,"ngFor","ngForOf"],[1,"border","p-4","mb-4"],[1,"float-none","w-auto"],[1,"text-bold1"],["class","col-md-6",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-4","form-check"],["type","checkbox",1,"form-check-input",3,"change","id","checked"],[1,"form-check-label",3,"for"],[1,"col-md-6"],["for","cooperative_society_id",1,"col-form-label","required1"],["formControlName","cooperative_society_id","type","text",1,"form-control",3,"ngClass"],["for","certificate_of_incorporation_or_registration",1,"col-form-label","required"],["formControlName","certificate_of_incorporation_or_registration","type","file",1,"form-control",3,"change","ngClass"],["for","directors_details_id_passport_and_kra_pins",1,"col-form-label","required"],["formControlName","directors_details_id_passport_and_kra_pins","type","file",1,"form-control",3,"change","ngClass"],["for","tax_compliance_certificate",1,"col-form-label","required"],["formControlName","tax_compliance_certificate","type","file",1,"form-control",3,"change","ngClass"],["for","premises_ownership_or_lease_document",1,"col-form-label","required"],["formControlName","premises_ownership_or_lease_document","type","file",1,"form-control",3,"change","ngClass"],["for","training_equipment_inventory",1,"col-form-label","required"],["formControlName","training_equipment_inventory","type","file",1,"form-control",3,"change","ngClass"],["for","course_outline_and_training_curriculum",1,"col-form-label","required"],["formControlName","course_outline_and_training_curriculum","type","file",1,"form-control",3,"change","ngClass"],["for","company_profile",1,"col-form-label","required"],["formControlName","company_profile","type","file",1,"form-control",3,"ngClass"],["for","public_health_certificate",1,"col-form-label","required"],["formControlName","public_health_certificate","type","file",1,"form-control",3,"ngClass"],["formControlName","company_profile","type","file",1,"form-control",3,"change","ngClass"],["for","project_document",1,"col-form-label","required1"],["formControlName","project_document","type","file",1,"form-control",3,"change","ngClass"],["for","county_government_support_letters_and_mou",1,"col-form-label","required1"],["formControlName","county_government_support_letters_and_mou","type","file",1,"form-control",3,"change","ngClass"],["for","implementation_plan_monitoring_and_evaluation_framework",1,"col-form-label","required"],["formControlName","implementation_plan_monitoring_and_evaluation_framework","type","file",1,"form-control",3,"change","ngClass"],["for","names_qualifications_and_certificates_of_trainers",1,"col-form-label","required"],["formControlName","names_qualifications_and_certificates_of_trainers","type","file",1,"form-control",3,"change","ngClass"],["for","education_or_training_accreditation_certificate",1,"col-form-label","required1"],["formControlName","education_or_training_accreditation_certificate","type","file",1,"form-control",3,"change","ngClass"],["for","public_health_certificate",1,"col-form-label","required1"],["formControlName","public_health_certificate","type","file",1,"form-control",3,"change","ngClass"],["for","self_declaration_form",1,"col-form-label","required"],["routerLink","/forms-and-resources","target","_blank"],["formControlName","self_declaration_form","type","file",1,"form-control",3,"ngClass"]],template:function(t,i){if(t&1&&(d(0,vt,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"form",3),g("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"div",6),e(16,`
                `),r(17,"label",7),e(18,"User:"),n(),e(19,`
                `),r(20,"select",8),e(21,`
                  `),r(22,"option",9),e(23,"--- Select user ---"),n(),e(24,`
                  `),d(25,xt,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,yt,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),r(32,"div",5),e(33,`
              `),r(34,"div",6),e(35,`
                `),r(36,"label",12),e(37,`
                  Dealership/Service Types:
                `),n(),e(38,`
                `),r(39,"div",13),e(40,`
                  `),d(41,Ct,7,4,"div",14),e(42,`
                `),n(),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
          `),n(),e(46,`

          `),r(47,"fieldset",15),e(48,`
            `),r(49,"legend",16)(50,"h6",17),e(51,"Attachments & Other"),n()(),e(52,`
            `),r(53,"div",4),e(54,`
              `),e(55,`
              `),d(56,Ft,18,5,"div",18),e(57,`
              `),e(58,`
              `),d(59,wt,12,4,"div",18),e(60,`
              `),d(61,kt,12,4,"div",18),e(62,`
              `),d(63,Nt,12,4,"div",18),e(64,`
              `),d(65,Vt,12,4,"div",18),e(66,`
              `),d(67,Bt,12,4,"div",18),e(68,`
              `),d(69,Ht,12,4,"div",18),e(70,`
              `),d(71,zt,12,4,"div",18),e(72,`
              `),d(73,Kt,12,4,"div",18),e(74,`
              `),d(75,Xt,12,4,"div",18),e(76,`
              `),d(77,ti,12,4,"div",18),e(78,`
              `),e(79,`
              `),d(80,ri,12,4,"div",18),e(81,`
               `),e(82,`
              `),d(83,li,12,4,"div",18),e(84,`
              `),d(85,di,12,4,"div",18),e(86,`
              `),d(87,_i,12,4,"div",18),e(88,`
              `),d(89,gi,12,4,"div",18),e(90,`
              `),d(91,hi,12,4,"div",18),e(92,`
              `),d(93,Si,12,4,"div",18),e(94,`
              `),e(95,`
              `),d(96,Fi,14,4,"div",18),e(97,`
            `),n(),e(98,`
          `),n(),e(99,`

          `),r(100,"div",19),e(101,`
            `),r(102,"button",20),e(103,"Cancel"),n(),e(104,`
            `),r(105,"button",21),e(106,"Submit"),n(),e(107,`
          `),n(),e(108,`
        `),n(),e(109,`

      `),n(),e(110,`
    `),n(),e(111,`
  `),n(),e(112,`
`),n()),t&2){let l,p;s("ngIf",i.mProgress()),m(9),s("formGroup",i.itemForm),m(11),s("ngClass",u(26,F,((l=i.itemForm.get("user_id"))==null?null:l.invalid)&&(((l=i.itemForm.get("user_id"))==null?null:l.dirty)||((l=i.itemForm.get("user_id"))==null?null:l.touched)))),m(5),s("ngForOf",i.mUsers),m(3),s("ngIf",((p=i.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("user_id"))==null?null:p.dirty)||((p=i.itemForm.get("user_id"))==null?null:p.touched))),m(13),s("ngForOf",i.mDealershipCategories),m(15),s("ngIf",i.hasID(f(28,_t))),m(3),s("ngIf",i.hasID(f(29,lt))),m(2),s("ngIf",i.hasID(f(30,lt))),m(2),s("ngIf",i.hasID(f(31,ut))),m(2),s("ngIf",i.hasID(f(32,B))),m(2),s("ngIf",i.hasID(f(33,B))),m(2),s("ngIf",i.hasID(f(34,B))),m(2),s("ngIf",i.hasID(f(35,B))),m(2),s("ngIf",i.hasID(f(36,B))),m(2),s("ngIf",i.hasID(f(37,B))),m(2),s("ngIf",i.hasID(f(38,B))),m(3),s("ngIf",i.hasID(f(39,ft))),m(3),s("ngIf",i.hasID(f(40,ke))),m(2),s("ngIf",i.hasID(f(41,ke))),m(2),s("ngIf",i.hasID(f(42,ke))),m(2),s("ngIf",i.hasID(f(43,B))),m(2),s("ngIf",i.hasID(f(44,B))),m(2),s("ngIf",i.hasID(f(45,B))),m(3),s("ngIf",i.hasID(f(46,gt))),m(9),s("disabled",i.itemForm.invalid)}},dependencies:[A,L,P,k,N,O,V,M,j,z,Z,ee,H,X,$,G,Q,W],encapsulation:2})}};var Se=a=>({"is-invalid":a});function Ii(a,o){a&1&&x(0,"app-progress")}function Ti(a,o){if(a&1&&(r(0,"option",24),e(1),n()),a&2){let t=o.$implicit;s("value",y(t.id)),m(),h(t.name)}}function wi(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Di(a,o){if(a&1&&(r(0,"div",25),e(1,`
                  `),d(2,wi,2,0,"div",0),e(3,`
                `),n()),a&2){let t,i=c();m(2),s("ngIf",(t=i.itemForm.get("user_id"))==null||t.errors==null?null:t.errors.required)}}function Pi(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function ki(a,o){if(a&1&&(r(0,"div",25),e(1,`
                  `),d(2,Pi,2,0,"div",0),e(3,`
                `),n()),a&2){let t,i=c();m(2),s("ngIf",(t=i.itemForm.get("brief_company_profile").errors)==null?null:t.required)}}function Ri(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function qi(a,o){if(a&1&&(r(0,"div",25),e(1,`
                  `),d(2,Ri,2,0,"div",0),e(3,`
                `),n()),a&2){let t,i=c();m(2),s("ngIf",(t=i.itemForm.get("directors_of_dealership").errors)==null?null:t.required)}}function Ni(a,o){if(a&1){let t=E();r(0,"div",26),e(1,`
                    `),r(2,"input",27),g("change",function(l){let p=C(t).$implicit,re=c();return S(re.onCategoryChange(+p.id,l))}),n(),e(3,`
                    `),r(4,"label",28),e(5),n(),e(6,`
                  `),n()}if(a&2){let t=o.$implicit,i=c();m(2),s("id","category_"+t.id)("checked",i.mSelectedCategories.includes(+t.id)),m(2),s("for","category_"+t.id),m(),h(t.name)}}function Ai(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Oi(a,o){if(a&1&&(r(0,"div",25),e(1,`
                  `),d(2,Ai,2,0,"div",0),e(3,`
                `),n()),a&2){let t,i=c();m(2),s("ngIf",(t=i.itemForm.get("engaged_persons_professional_skills").errors)==null?null:t.required)}}var be=class a{constructor(o,t,i,l,p,re){this.mDealerRegistrationService=o;this.mToastrService=t;this.mAppContextService=i;this.router=l;this.fb=p;this.route=re;this.mProgress=b(!1);this.mSelectedCategories=[];this.itemForm=this.fb.group({user_id:["",v.required],brief_company_profile:["",v.required],directors_of_dealership:["",v.required],category_id:[[]],engaged_persons_professional_skills:["",v.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:o=>{o&&(this.item=o,this.mSelectedCategories=this.item.dealership_services?.map(t=>Number(t.category_id))??[],this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onSubmit(o){let t=new FormData;t.append("user_id",o.user_id),t.append("brief_company_profile",o.brief_company_profile),t.append("directors_of_dealership",o.directors_of_dealership),t.append("category_id",this.mSelectedCategories),this.engaged_persons_professional_skills_file?t.append("engaged_persons_professional_skills",this.engaged_persons_professional_skills_file,this.engaged_persons_professional_skills_file.name):t.append("engaged_persons_professional_skills",""),t.append("_method","PUT"),this.mProgress.set(!0),this.mDealerRegistrationService.updateItem(this.id,t).subscribe({next:i=>{i&&(this.mToastrService.success(i.message),this.router.navigateByUrl("/dealer-registrations"),this.mProgress.set(!1))},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDealerRegistrationService.unpaginatedItems().subscribe({next:o=>{o&&(this.mDealershipCategories=o.data.dealership_categories,this.mUsers=o.data.users,this.mProgress.set(!1))},error:o=>{this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onCategoryChange(o,t){t.target.checked?this.mSelectedCategories.includes(o)||this.mSelectedCategories.push(o):this.mSelectedCategories=this.mSelectedCategories.filter(l=>l!==o),this.itemForm.patchValue({category_id:this.mSelectedCategories})}onEngagedPersonsProfessionalSkillsChange(o){if(o.target.value){let t=o.target.files[0];this.engaged_persons_professional_skills_file=t}}static{this.\u0275fac=function(t){return new(t||a)(_(w),_(q),_(T),_(J),_(te),_(U))}}static{this.\u0275cmp=D({type:a,selectors:[["app-edit"]],standalone:!1,decls:99,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","user_id",1,"col-form-label","required"],["formControlName","user_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","brief_company_profile",1,"col-form-label","required"],["formControlName","brief_company_profile","type","date",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","directors_of_dealership",1,"col-form-label","required"],["formControlName","directors_of_dealership","type","date",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-form-label","required"],[1,"row","container"],["class","col-md-4 form-check",4,"ngFor","ngForOf"],["for","engaged_persons_professional_skills",1,"col-form-label","required"],["formControlName","engaged_persons_professional_skills","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-4","form-check"],["type","checkbox",1,"form-check-input",3,"change","id","checked"],[1,"form-check-label",3,"for"]],template:function(t,i){if(t&1&&(d(0,Ii,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"form",3),g("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"div",6),e(16,`
                `),r(17,"label",7),e(18,"User:"),n(),e(19,`
                `),r(20,"select",8),ve("ngModelChange",function(p){return ge(i.item.id,p)||(i.item.id=p),p}),e(21,`
                  `),r(22,"option",9),e(23,"--- Select user ---"),n(),e(24,`
                  `),d(25,Ti,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,Di,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),r(32,"div",5),e(33,`
              `),r(34,"div",6),e(35,`
                `),r(36,"label",12),e(37,"Brief Company Profile:"),n(),e(38,`
                `),r(39,"textarea",13),ve("ngModelChange",function(p){return ge(i.item.profile.brief_company_profile,p)||(i.item.profile.brief_company_profile=p),p}),n(),e(40,`
                `),d(41,ki,4,1,"div",11),e(42,`
              `),n(),e(43,`
            `),n(),e(44,`
            `),r(45,"div",5),e(46,`
              `),r(47,"div",6),e(48,`
                `),r(49,"label",14),e(50,"Directors of Dealership (Names and ID/Passport Numbers):"),n(),e(51,`
                `),r(52,"textarea",15),ve("ngModelChange",function(p){return ge(i.item.profile.directors_of_dealership,p)||(i.item.profile.directors_of_dealership=p),p}),n(),e(53,`
                `),d(54,qi,4,1,"div",11),e(55,`
              `),n(),e(56,`
            `),n(),e(57,`
            `),r(58,"div",5),e(59,`
              `),r(60,"div",6),e(61,`
                `),r(62,"label",16),e(63,`
                  Dealership/Service Types:
                `),n(),e(64,`
                `),r(65,"div",17),e(66,`
                  `),d(67,Ni,7,4,"div",18),e(68,`
                `),n(),e(69,`
              `),n(),e(70,`
            `),n(),e(71,`
            `),r(72,"div",5),e(73,`
              `),r(74,"div",6),e(75,`
                `),r(76,"label",19),e(77,"Engaged Persons Professional Skills (Attach profiles of warehouseman, liquorer, agronomist, engineer, if other professional specify):"),n(),e(78,`
                `),r(79,"input",20),g("change",function(p){return i.onEngagedPersonsProfessionalSkillsChange(p)}),n(),e(80,`
                `),d(81,Oi,4,1,"div",11),e(82,`
              `),n(),e(83,`
            `),n(),e(84,`
          `),n(),e(85,`
          `),r(86,"div",21),e(87,`
            `),r(88,"button",22),e(89,"Cancel"),n(),e(90,`
            `),r(91,"button",23),e(92,"Submit"),n(),e(93,`
          `),n(),e(94,`
        `),n(),e(95,`

      `),n(),e(96,`
    `),n(),e(97,`
  `),n(),e(98,`
`),n()),t&2){let l,p;s("ngIf",i.mProgress()),m(9),s("formGroup",i.itemForm),m(11),fe("ngModel",i.item.id),s("ngClass",u(16,Se,((l=i.itemForm.get("user_id"))==null?null:l.invalid)&&(((l=i.itemForm.get("user_id"))==null?null:l.dirty)||((l=i.itemForm.get("user_id"))==null?null:l.touched)))),m(5),s("ngForOf",i.mUsers),m(3),s("ngIf",((p=i.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("user_id"))==null?null:p.dirty)||((p=i.itemForm.get("user_id"))==null?null:p.touched))),m(11),fe("ngModel",i.item.profile.brief_company_profile),s("ngClass",u(18,Se,i.itemForm.get("brief_company_profile").invalid&&(i.itemForm.get("brief_company_profile").dirty||i.itemForm.get("brief_company_profile").touched))),m(2),s("ngIf",i.itemForm.get("brief_company_profile").invalid&&(i.itemForm.get("brief_company_profile").dirty||i.itemForm.get("brief_company_profile").touched)),m(11),fe("ngModel",i.item.profile.directors_of_dealership),s("ngClass",u(20,Se,i.itemForm.get("directors_of_dealership").invalid&&(i.itemForm.get("directors_of_dealership").dirty||i.itemForm.get("directors_of_dealership").touched))),m(2),s("ngIf",i.itemForm.get("directors_of_dealership").invalid&&(i.itemForm.get("directors_of_dealership").dirty||i.itemForm.get("directors_of_dealership").touched)),m(13),s("ngForOf",i.mDealershipCategories),m(12),s("ngClass",u(22,Se,i.itemForm.get("engaged_persons_professional_skills").invalid&&(i.itemForm.get("engaged_persons_professional_skills").dirty||i.itemForm.get("engaged_persons_professional_skills").touched))),m(2),s("ngIf",i.itemForm.get("engaged_persons_professional_skills").invalid&&(i.itemForm.get("engaged_persons_professional_skills").dirty||i.itemForm.get("engaged_persons_professional_skills").touched)),m(10),s("disabled",i.itemForm.invalid)}},dependencies:[A,L,P,k,N,O,V,M,j,z,Z,ee,H,X,$,G,Q,W],encapsulation:2})}};var mt=ct(pt());var Vi=a=>({"is-invalid":a}),qe=()=>[1],Mi=a=>["/dealer-registrations/process",a],ji=(a,o,t,i,l,p)=>({"bg-secondary":a,"bg-warning":o,"bg-dark":t,"bg-success":i,"bg-danger":l,"bg-info":p}),Bi=(a,o)=>({active:a,disabled:o});function Li(a,o){a&1&&x(0,"app-progress")}function Ui(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function Hi(a,o){if(a&1&&(r(0,"div",16),e(1,`
                  `),d(2,Ui,2,0,"div",1),e(3,`
                `),n()),a&2){let t=c();m(2),s("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function $i(a,o){if(a&1){let t=E();r(0,"span"),e(1,`
                    `),r(2,"button",29),g("click",function(){C(t);let l=c().$implicit,p=c(2);return S(p.onDownloadCertificate(l))}),e(3,"Download"),n(),e(4,`
                  `),n()}}function Gi(a,o){if(a&1&&(r(0,"button",30),x(1,"i",31),n()),a&2){let t=c().$implicit;s("routerLink",Y("/dealer-registrations/edit/",t.id))}}function zi(a,o){if(a&1){let t=E();r(0,"button",32),g("click",function(){C(t);let l=c().$implicit,p=c(2);return S(p.onDelete(l))}),x(1,"i",33),n()}}function Wi(a,o){if(a&1&&(r(0,"tr"),e(1,`
                `),r(2,"td"),e(3),n(),e(4,`
                `),r(5,"td")(6,"a",22),e(7),n()(),e(8,`
                `),r(9,"td"),e(10),n(),e(11,`
                `),r(12,"td"),e(13),n(),e(14,`
                `),r(15,"td")(16,"span",23),e(17),n()(),e(18,`
                `),r(19,"td"),e(20,`
                  `),d(21,$i,5,0,"span",1),e(22,`
                `),n(),e(23,`
                `),r(24,"td"),e(25),ae(26,"date"),n(),e(27,`
                `),r(28,"td"),e(29,`
                  `),r(30,"div",24),e(31,`
                    `),r(32,"button",25),x(33,"i",26),n(),e(34,`
                    `),d(35,Gi,2,2,"button",27),e(36,`
                    `),d(37,zi,2,0,"button",28),e(38,`
                  `),n(),e(39,`
                `),n(),e(40,`
              `),n()),a&2){let t=o.$implicit,i=o.index,l=c(2);m(3),je("",l.mPageFrom+i,"."),m(3),s("routerLink",Y("/dealer-registrations/show/",t.id)),m(),h(t.application_number),m(3),h(t.user==null?null:t.user.name),m(3),h(t.dealership_services.length),m(3),s("routerLink",l.mAppContextService.hasTypes(f(17,qe))?u(18,Mi,t.id):null)("ngClass",xe(20,ji,t.status_id==1,t.status_id==2,t.status_id==3,t.status_id==4,t.status_id==5,t.status_id==6)),m(),h(t==null||t.status==null?null:t.status.name),m(4),s("ngIf",t.status_id==4),m(4),h(oe(26,15,t.created_at)),m(7),s("routerLink",Y("/dealer-registrations/show/",t.id)),m(3),s("ngIf",l.mAppContextService.hasRoles(f(27,qe))||t.status_id==1||t.status_id==2),m(2),s("ngIf",l.mAppContextService.hasRoles(f(28,qe))||t.status_id==1||t.status_id==2)}}function Qi(a,o){if(a&1&&(r(0,"div",17),e(1,`
          `),r(2,"table",18),e(3,`
            `),r(4,"thead",19),e(5,`
              `),r(6,"tr"),e(7,`
                `),r(8,"th",20),e(9,"#"),n(),e(10,`
                `),r(11,"th",20),e(12,"Number"),n(),e(13,`
                `),r(14,"th",20),e(15,"Applicant"),n(),e(16,`
                `),r(17,"th",20),e(18,"Categories"),n(),e(19,`
                `),r(20,"th",20),e(21,"Status"),n(),e(22,`
                `),r(23,"th",20),e(24,"Certificate"),n(),e(25,`
                `),r(26,"th",20),e(27,"Created"),n(),e(28,`
                `),r(29,"th",20),e(30,"Action"),n(),e(31,`
              `),n(),e(32,`
            `),n(),e(33,`
            `),r(34,"tbody"),e(35,`
              `),d(36,Wi,41,29,"tr",21),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n()),a&2){let t=c();m(36),s("ngForOf",t.mUsers)}}function Ki(a,o){if(a&1){let t=E();r(0,"li",36),e(1,`
              `),r(2,"a",37),g("click",function(){let l=C(t).$implicit,p=c(2);return S(p.onChangePage(l.url))}),n(),e(3,`
            `),n()}if(a&2){let t=o.$implicit;s("ngClass",Le(2,Bi,t.active,!t.url)),m(2),s("innerHTML",t.label,Ve)}}function Yi(a,o){if(a&1&&(r(0,"div"),e(1,`
          `),r(2,"ul",34),e(3,`
            `),d(4,Ki,4,5,"li",35),e(5,`
          `),n(),e(6,`
        `),n()),a&2){let t=c();m(4),s("ngForOf",t.links)}}function Ji(a,o){a&1&&(e(0,`
          `),r(1,"p",38),e(2,"No items"),n(),e(3,`
        `))}var Ee=class a{constructor(o,t,i){this.mDealerRegistrationService=o;this.mToastrService=t;this.mAppContextService=i;this.mUsers={};this.links=[];this.mProgress=b(!1)}ngOnInit(){this.index(),this.search_term=new at("",v.required),this.itemForm=new rt({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mDealerRegistrationService.allItems().subscribe({next:o=>{o&&(this.mPageFrom=o.from,this.mUsers=o.data,this.links=o.links),this.mProgress.set(!1)},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}onChangePage(o){this.mProgress.set(!0),this.mDealerRegistrationService.paginateItems(o).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mUsers=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(o){mt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+o.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(i=>{i.isConfirmed&&(this.mProgress.set(!0),this.mDealerRegistrationService.deleteItem(o).subscribe({next:l=>{l&&(this.mUsers=this.mUsers.filter(p=>p.id!==o.id),this.mToastrService.warning(l.message),this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}}))})}onSubmit(o){this.mProgress.set(!0),this.mDealerRegistrationService.searchItems(o).subscribe({next:t=>{t&&(this.mUsers=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(o){this.mProgress.set(!0),this.mDealerRegistrationService.searchItems(o).subscribe({next:t=>{t&&(this.mUsers=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDownloadCertificate(o){this.mProgress.set(!0),this.mDealerRegistrationService.onDownloadCertificate(o).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let l=t;var i=URL.createObjectURL(l);window.open(i,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(_(w),_(q),_(T))}}static{this.\u0275cmp=D({type:a,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/dealer-registrations/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"badge","rounded-pill",3,"routerLink","ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],["class","btn btn-dark btn-sm me-1",3,"routerLink",4,"ngIf"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-link","btn-sm",3,"click"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,i){if(t&1&&(d(0,Li,1,0,"app-progress",1),r(1,"c-row"),e(2,`
  `),r(3,"c-col",2),e(4,`
    `),r(5,"c-card",3),e(6,`
      `),r(7,"c-card-header"),e(8,`
        `),r(9,"div",4),e(10,`
          `),r(11,"div",5),e(12,`
            `),r(13,"a",6),e(14,`
              `),x(15,"i",7),e(16,` Add
            `),n(),e(17,`
          `),n(),e(18,`
          `),r(19,"div"),e(20,`
            `),r(21,"form",8),g("ngSubmit",function(){return i.onSearch(i.itemForm.value)}),e(22,`
              `),r(23,"div",9),e(24,`
                `),x(25,"input",10),e(26,`
                `),r(27,"div",11),e(28,`
                  `),r(29,"button",12),e(30,`
                    `),x(31,"i",13),e(32,`
                  `),n(),e(33,`
                `),n(),e(34,`
                `),d(35,Hi,4,1,"div",14),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
      `),r(42,"c-card-body"),e(43,`

        `),d(44,Qi,40,1,"div",15),e(45,`

        `),d(46,Yi,7,1,"div",1),e(47,`

        `),d(48,Ji,4,0,"ng-template",null,0,Ue),e(50,`

      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),t&2){let l=Me(49);s("ngIf",i.mProgress()),m(21),s("formGroup",i.itemForm),m(4),s("ngClass",u(7,Vi,i.search_term.invalid&&(i.search_term.dirty||i.search_term.touched))),m(10),s("ngIf",i.search_term.invalid&&(i.search_term.dirty||i.search_term.touched)),m(9),s("ngIf",i.mUsers.length>0)("ngIfElse",l),m(2),s("ngIf",i.links)}},dependencies:[A,L,P,k,N,O,V,Qe,M,j,et,Ze,z,H,$,G,Q,W,he],encapsulation:2})}};var st=a=>({"is-invalid":a});function Xi(a,o){a&1&&x(0,"app-progress")}function Zi(a,o){if(a&1&&(r(0,"option",15),e(1),n()),a&2){let t=o.$implicit;s("value",y(t.id)),m(),h(t.alias)}}function en(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function tn(a,o){if(a&1&&(r(0,"div",16),d(1,en,2,0,"div",0),n()),a&2){let t,i=c();m(),s("ngIf",(t=i.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function nn(a,o){a&1&&(r(0,"div"),e(1,"This field is required."),n())}function rn(a,o){if(a&1&&(r(0,"div",16),d(1,nn,2,0,"div",0),n()),a&2){let t,i=c();m(),s("ngIf",(t=i.itemForm.get("remarks").errors)==null?null:t.required)}}var Fe=class a{constructor(o,t,i,l,p,re){this.mToastrService=o;this.mDealerRegistrationService=t;this.mAppContextService=i;this.router=l;this.fb=p;this.route=re;this.mProgress=b(!1);this.item={};this.mEditor=nt;this.itemForm=this.fb.group({status_id:["",v.required],remarks:["",v.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=b(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:o=>{o&&(this.item=o,this.getNextPreviousStatus(),this.mProgress=b(!1))},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress=b(!1)}})}onSubmit(o){let t=Ae(Ne({},o),{id:this.id});this.mProgress=b(!0),this.mDealerRegistrationService.reviewApplicationItem(t).subscribe({next:i=>{i.status==="success"&&(this.mToastrService.success(i.message),this.router.navigateByUrl("/dealer-registrations"),this.mProgress=b(!1))},error:i=>{i.error.message&&this.mToastrService.error(i.error.message),this.mProgress=b(!1)}})}getNextPreviousStatus(){this.mProgress=b(!0),this.mDealerRegistrationService.nextPreviousStatusItem(this.item.status_id).subscribe({next:o=>{o&&(this.mNextPreviousStatuses=o,this.mProgress=b(!1))},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress=b(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(_(q),_(w),_(T),_(J),_(te),_(U))}}static{this.\u0275cmp=D({type:a,selectors:[["app-review"]],standalone:!1,decls:24,vars:12,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,i){if(t&1&&(d(0,Xi,1,0,"app-progress",0),r(1,"div")(2,"form",1),g("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),r(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),n(),r(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),n(),d(11,Zi,2,3,"option",8),n(),d(12,tn,2,1,"div",9),n()(),r(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),n(),x(17,"textarea",11),d(18,rn,2,1,"div",9),n()()(),r(19,"div",12)(20,"button",13),e(21,"Cancel"),n(),r(22,"button",14),e(23,"Submit"),n()()()()),t&2){let l,p;s("ngIf",i.mProgress()),m(2),s("formGroup",i.itemForm),m(6),s("ngClass",u(8,st,((l=i.itemForm.get("status_id"))==null?null:l.invalid)&&(((l=i.itemForm.get("status_id"))==null?null:l.dirty)||((l=i.itemForm.get("status_id"))==null?null:l.touched)))),m(3),s("ngForOf",i.mNextPreviousStatuses),m(),s("ngIf",((p=i.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("status_id"))==null?null:p.dirty)||((p=i.itemForm.get("status_id"))==null?null:p.touched))),m(5),s("ngClass",u(10,st,i.itemForm.get("remarks").invalid&&(i.itemForm.get("remarks").dirty||i.itemForm.get("remarks").touched))),m(),s("ngIf",i.itemForm.get("remarks").invalid&&(i.itemForm.get("remarks").dirty||i.itemForm.get("remarks").touched)),m(4),s("disabled",i.itemForm.invalid)}},dependencies:[A,L,P,k,N,ze,z,Z,ee,H,X,$,G,Q,W],encapsulation:2})}};var on=()=>[1],ln=()=>[2];function mn(a,o){a&1&&x(0,"app-progress")}function sn(a,o){if(a&1&&(r(0,"div",12),e(1),n()),a&2){let t=c();m(),h(t.item.application_number)}}function dn(a,o){if(a&1&&(r(0,"div",12),e(1,`
                `),r(2,"a",13),e(3),n(),e(4,`
              `),n()),a&2){let t=c();m(2),s("routerLink",Y("/users/show/",t.item.user_id)),m(),h(t.item.user==null?null:t.item.user.name)}}function cn(a,o){a&1&&(r(0,"div"),e(1,`
                  `),x(2,"app-review"),e(3,`
                `),n())}var Ie=class a{constructor(o,t,i,l){this.mDealerRegistrationService=o;this.mToastrService=t;this.mAppContextService=i;this.route=l;this.mProgress=b(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:o=>{o&&(this.item=o,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(_(w),_(q),_(T),_(U))}}static{this.\u0275cmp=D({type:a,selectors:[["app-process"]],standalone:!1,decls:53,vars:6,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"fw-bold","text-muted"],[1,"text-muted"],[1,"text-sm",3,"routerLink"]],template:function(t,i){t&1&&(d(0,mn,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"div",3),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"label",6),e(16,"Number:"),n(),e(17,`
              `),d(18,sn,2,1,"div",7),e(19,`
            `),n(),e(20,`
          `),n(),e(21,`
          `),r(22,"div",4),e(23,`
            `),r(24,"div",5),e(25,`
              `),r(26,"label",6),e(27,"Applicant:"),n(),e(28,`
              `),d(29,dn,5,3,"div",7),e(30,`
            `),n(),e(31,`
          `),n(),e(32,`
          `),r(33,"div",8),e(34,`
            `),r(35,"div",5),e(36,`

              `),r(37,"fieldset",9),e(38,`
                `),r(39,"legend",10)(40,"h6",11),e(41,"Process"),n()(),e(42,`
                `),e(43,`
                `),d(44,cn,4,0,"div",0),e(45,`
              `),n(),e(46,`

            `),n(),e(47,`
          `),n(),e(48,`
        `),n(),e(49,`

      `),n(),e(50,`
    `),n(),e(51,`
  `),n(),e(52,`
`),n()),t&2&&(s("ngIf",i.mProgress()),m(18),s("ngIf",i.item.application_number),m(11),s("ngIf",i.item.id),m(15),s("ngIf",(i.item==null?null:i.item.status_id)===3&&(i.mAppContextService.hasRoles(f(4,on))||i.mAppContextService.hasRoles(f(5,ln)))))},dependencies:[P,k,N,O,V,M,j,Fe],encapsulation:2})}};var pn=()=>[1],_n=a=>["/dealer-registrations/process",a],un=(a,o,t,i,l,p)=>({"bg-secondary":a,"bg-warning":o,"bg-dark":t,"bg-success":i,"bg-danger":l,"bg-info":p}),fn=(a,o)=>t=>t.name;function gn(a,o){a&1&&x(0,"app-progress")}function vn(a,o){if(a&1&&(r(0,"div",19),e(1),n()),a&2){let t=c();m(),h(t.item.user==null?null:t.item.user.name)}}function xn(a,o){if(a&1&&(r(0,"div",19),e(1,`
                  `),r(2,"span",20),e(3),n(),e(4,`
                `),n()),a&2){let t=c();m(2),s("ngClass",xe(2,un,t.item.status_id==1,t.item.status_id==2,t.item.status_id==3,t.item.status_id==4,t.item.status_id==5,t.item.status_id==6)),m(),h(t.item.status==null?null:t.item.status.name)}}function hn(a,o){if(a&1&&(r(0,"span"),e(1),n()),a&2){let t=c(2);m(),h(t.item.dealership_services.map(Be(1,fn,o)).join(", "))}}function yn(a,o){if(a&1&&(r(0,"div",19),e(1,`
                  `),d(2,hn,2,2,"span",0),e(3,`
                `),n()),a&2){let t=c();m(2),s("ngIf",t.item.dealership_services==null?null:t.item.dealership_services.length)}}function Cn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",21),e(5,"Certificate of Incorporation or Registration:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.certificate_of_incorporation_or_registration_url),I)}}function Sn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",24),e(5,"Names, National ID/Passport and PIN Numbers of Directors, Officials or Proprietors:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.directors_details_id_passport_and_kra_pins_url),I)}}function bn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",24),e(5,"Names, National ID/Passport and PIN Numbers of Directors, Officials or Proprietors:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.tax_compliance_certificate_url),I)}}function En(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",25),e(5,"Proof of Ownership or Lease of the Training Premises:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.premises_ownership_or_lease_document_url),I)}}function Fn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",26),e(5,"Cupping, Roasting and Brewing Equipment Appropriate to Courses Offered:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.training_equipment_inventory_url),I)}}function In(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",27),e(5,"Course Outline and Training Curriculum (Developed by the Board under Regulation 6B(2)):"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.course_outline_and_training_curriculum_url),I)}}function Tn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",28),e(5,"Names, Qualifications and Certificates of Trainers (Including at least One Liquorer Licensed by the Board for Cupping Courses):"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.company_profile_url),I)}}function wn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",29),e(5,"Public Health Certificate for the Premises:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.public_health_certificate_url),I)}}function Dn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",28),e(5,"Company Profile (Showing Experience in Organising Exhibitions, Festivals, Competitions or Trade Fairs):"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.company_profile_url),I)}}function Pn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",30),e(5,"Project Document (Stating  Objectives, Counties and Areas of Operation, Target Beneficiaries, Budget, Sources of Funding/Furation):"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.project_document_url),I)}}function kn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",31),e(5,"Implementation Plan and Monitoring & Evaluation Framework:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.implementation_plan_monitoring_and_evaluation_framework_url),I)}}function Rn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",32),e(5,"Names, Qualifications and Certificates of the Trainers (Including at least One Liquorer Licensed by the Board for Cupping Courses):"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.names_qualifications_and_certificates_of_trainers_url),I)}}function qn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",33),e(5,"Registration or Accreditation by Relevant Education or Training Accreditation Body:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.education_or_training_accreditation_certificate_url),I)}}function Nn(a,o){if(a&1&&(r(0,"div",4),e(1,`
                    `),r(2,"div",5),e(3,`
                      `),r(4,"label",29),e(5,"Public Health Certificate for the Premises.:"),n(),e(6,`
                      `),r(7,"div",22),e(8,`
                        `),r(9,"a",23),e(10,"File"),n(),e(11,`
                      `),n(),e(12,`
                    `),n(),e(13,`
                  `),n()),a&2){let t=c();m(9),s("href",y(t.item.public_health_certificate_url),I)}}function An(a,o){if(a&1&&(r(0,"div",19),e(1),ae(2,"date"),n()),a&2){let t=c();m(),h(oe(2,1,t.item.effective_date))}}function On(a,o){if(a&1&&(r(0,"div",19),e(1),ae(2,"date"),n()),a&2){let t=c();m(),h(oe(2,1,t.item.date_of_expiry))}}var Te=class a{constructor(o,t,i,l){this.mDealerRegistrationService=o;this.mToastrService=t;this.mAppContextService=i;this.route=l;this.mProgress=b(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:o=>{o&&(this.item=o,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(_(w),_(q),_(T),_(U))}}static{this.\u0275cmp=D({type:a,selectors:[["app-show"]],standalone:!1,decls:127,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","application_number"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],["for","dealership_services"],[1,"border","p-4","mb-4"],[1,"float-none","w-auto"],[1,"text-bold1"],["class","col-md-6",4,"ngIf"],["for","coffee_species_id"],["for","coffee_form_id"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations",1,"btn","btn-light"],[1,"btn","btn-warning",3,"routerLink"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"],["for","certificate_of_incorporation_or_registration",1,"col-form-label"],[1,"text-muted1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","directors_details_id_passport_and_kra_pins",1,"col-form-label"],["for","premises_ownership_or_lease_document",1,"col-form-label"],["for","training_equipment_inventory",1,"col-form-label"],["for","course_outline_and_training_curriculum",1,"col-form-label"],["for","company_profile",1,"col-form-label"],["for","public_health_certificate",1,"col-form-label"],["for","project_document",1,"col-form-label"],["for","implementation_plan_monitoring_and_evaluation_framework",1,"col-form-label"],["for","names_qualifications_and_certificates_of_trainers",1,"col-form-label"],["for","education_or_training_accreditation_certificate",1,"col-form-label"]],template:function(t,i){t&1&&(d(0,gn,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"div"),e(10,`
          `),r(11,"div",3),e(12,`
            `),r(13,"div",4),e(14,`
              `),r(15,"div",5),e(16,`
                `),r(17,"label",6),e(18,"Applicant:"),n(),e(19,`
                `),d(20,vn,2,1,"div",7),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),r(24,"div",4),e(25,`
              `),r(26,"div",5),e(27,`
                `),r(28,"label",6),e(29,"Status:"),n(),e(30,`
                `),d(31,xn,5,9,"div",7),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),r(35,"div",8),e(36,`
              `),r(37,"div",5),e(38,`
                `),r(39,"label",9),e(40,"Dealership/Service Types:"),n(),e(41,`
                `),d(42,yn,4,1,"div",7),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),r(46,"div",8),e(47,`
              `),r(48,"fieldset",10),e(49,`
                `),r(50,"legend",11)(51,"h6",12),e(52,"Attachments & Others"),n()(),e(53,`
                `),r(54,"div",3),e(55,`
                  `),e(56,`
                  `),d(57,Cn,14,2,"div",13),e(58,`
                  `),d(59,Sn,14,2,"div",13),e(60,`
                  `),d(61,bn,14,2,"div",13),e(62,`
                  `),e(63,`
                  `),d(64,En,14,2,"div",13),e(65,`
                  `),d(66,Fn,14,2,"div",13),e(67,`
                  `),d(68,In,14,2,"div",13),e(69,`
                  `),d(70,Tn,14,2,"div",13),e(71,`
                  `),d(72,wn,14,2,"div",13),e(73,`
                  `),e(74,`
                  `),d(75,Dn,14,2,"div",13),e(76,`
                  `),e(77,`
                  `),d(78,Pn,14,2,"div",13),e(79,`
                  `),d(80,kn,14,2,"div",13),e(81,`
                  `),d(82,Rn,14,2,"div",13),e(83,`
                  `),d(84,qn,14,2,"div",13),e(85,`
                  `),d(86,Nn,14,2,"div",13),e(87,`


                `),n(),e(88,`
              `),n(),e(89,`
            `),n(),e(90,`
            `),r(91,"div",4),e(92,`
              `),r(93,"div",5),e(94,`
                `),r(95,"label",14),e(96,"Effective Date:"),n(),e(97,`
                `),d(98,An,3,3,"div",7),e(99,`
              `),n(),e(100,`
            `),n(),e(101,`
            `),r(102,"div",4),e(103,`
              `),r(104,"div",5),e(105,`
                `),r(106,"label",15),e(107,"Expiry Date:"),n(),e(108,`
                `),d(109,On,3,3,"div",7),e(110,`
              `),n(),e(111,`
            `),n(),e(112,`
          `),n(),e(113,`
          `),r(114,"div",16),e(115,`
            `),r(116,"button",17),e(117,"Cancel"),n(),e(118,`
            `),r(119,"button",18),e(120,"Process"),n(),e(121,`
          `),n(),e(122,`
        `),n(),e(123,`

      `),n(),e(124,`
    `),n(),e(125,`
  `),n(),e(126,`
`),n()),t&2&&(s("ngIf",i.mProgress()),m(20),s("ngIf",i.item.user),m(11),s("ngIf",i.item.status_id),m(11),s("ngIf",i.item.dealership_services),m(15),s("ngIf",i.item.certificate_of_incorporation_or_registration),m(2),s("ngIf",i.item.directors_details_id_passport_and_kra_pins),m(2),s("ngIf",i.item.tax_compliance_certificate),m(3),s("ngIf",i.item.premises_ownership_or_lease_document),m(2),s("ngIf",i.item.training_equipment_inventory),m(2),s("ngIf",i.item.course_outline_and_training_curriculum),m(2),s("ngIf",i.item.company_profile),m(2),s("ngIf",i.item.public_health_certificate),m(3),s("ngIf",i.item.company_profile),m(3),s("ngIf",i.item.project_document),m(2),s("ngIf",i.item.implementation_plan_monitoring_and_evaluation_framework),m(2),s("ngIf",i.item.names_qualifications_and_certificates_of_trainers),m(2),s("ngIf",i.item.education_or_training_accreditation_certificate),m(2),s("ngIf",i.item.public_health_certificate),m(12),s("ngIf",i.item.effective_date),m(11),s("ngIf",i.item.date_of_expiry),m(10),s("routerLink",i.mAppContextService.hasTypes(f(21,pn))?u(22,_n,i.item.id):null))},dependencies:[A,P,k,N,O,V,M,j,he],encapsulation:2})}};var Vn=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:Ee,data:{title:"Dealer Registrations"}},{path:"create",component:Ce,data:{title:"Dealer Registrations / Create"}},{path:"edit/:id",component:be,data:{title:"Dealer Registrations / Edit"}},{path:"show/:id",component:Te,data:{title:"Dealer Registrations / Show"}},{path:"process/:id",component:Ie,data:{title:"Dealer Registrations / Process"}}],we=class a{static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275mod=ue({type:a})}static{this.\u0275inj=_e({imports:[ye,Pe.forChild(Vn),Pe]})}};var dt=class a{static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275mod=ue({type:a})}static{this.\u0275inj=_e({imports:[ye,we,it,We,Ke,Ye,Je,Xe,tt,ot,Ge]})}};export{dt as DealerRegistrationModule};
