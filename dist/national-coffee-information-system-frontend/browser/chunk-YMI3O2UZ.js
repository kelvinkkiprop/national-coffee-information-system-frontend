import{a as lt}from"./chunk-D5MIKHAE.js";import{b as L,c as h,d as V,e as U,f as it,g as nt,h as $,j as H,k as G,l as Y,m as J,n as K,o as Q,p as rt}from"./chunk-JSR5FKFU.js";import{a as T}from"./chunk-4MT6PD6W.js";import{a as I,b as tt,c as S,e as F}from"./chunk-PNAX2R2V.js";import{$ as ze,Ca as Qe,Da as Xe,Ea as Ze,G as De,Ja as et,M as $e,Q as He,R as Ge,X as w,Y as P,_ as We,c as D,d as B,e as C,g as _e,ia as Ye,j as ve,ka as k,la as R,n as Ve,na as Je,o as Ue,ta as Ke,v as j,x as z,y as E}from"./chunk-JHTOCNXX.js";import{Bc as ie,Cb as m,Cc as ne,Db as n,Eb as i,Fb as f,Fc as Le,Na as Ae,Oa as Me,Ob as O,S as Ne,Sa as s,Sb as x,T as de,Ub as c,W as Te,aa as A,ab as u,ba as M,cc as Oe,fb as y,gb as pe,hc as e,ic as g,jc as qe,lb as d,lc as ce,ma as _,mc as ue,nc as ge,rc as q,sc as te,tc as Be,vc as N,wc as v,xc as je,zc as fe}from"./chunk-MHSS2KTR.js";import{a as ke,b as Re,e as mt}from"./chunk-2WH2EVR6.js";var b=class a{constructor(r,t){this.mAppContextService=r;this.http=t}allItems(){let r=`${I.base_url}/dealer-registrations`;return this.http.get(r,this.mAppContextService.getHttpOptions())}createItem(r){let t=`${I.base_url}/dealer-registrations`;return this.http.post(t,r)}getOneItem(r){let t=`${I.base_url}/dealer-registrations/${r}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(r,t){let o=`${I.base_url}/dealer-registrations/${r}`;return this.http.post(o,t)}deleteItem(r){let t=`${I.base_url}/dealer-registrations/${r.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(r){return this.http.get(r,this.mAppContextService.getHttpOptions())}searchItems(r){let t=`${I.base_url}/search-dealer-registrations`;return this.http.post(t,r,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let r=`${I.base_url}/unpaginated-items-dealer-registrations`;return this.http.get(r,this.mAppContextService.getHttpOptions())}filterLicenseTypes(r){let t=`${I.base_url}/filter-license-types/${r}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}nextPreviousStatusItem(r){let t=`${I.base_url}/next-previous-status-process-dealer-registrations/${r}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}reviewApplicationItem(r){let t=`${I.base_url}/review-process-dealer-registrations/${r.id}`;return this.http.post(t,r,this.mAppContextService.getHttpOptions())}onDownloadCertificate(r){let t=new Ve;t=t.set("Accept","application/pdf");let o=`${I.base_url}/certificate-pdf/${r.id}`;return this.http.get(o,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||a)(Te(S),Te(Ue))}}static{this.\u0275prov=Ne({token:a,factory:a.\u0275fac,providedIn:"root"})}};var xe=a=>({"is-invalid":a});function dt(a,r){a&1&&f(0,"app-progress")}function pt(a,r){if(a&1&&(n(0,"option",24),e(1),i()),a&2){let t=r.$implicit;m("value",q(t.id)),s(),g(t.name)}}function ct(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function ut(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,ct,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("user_id"))==null||t.errors==null?null:t.errors.required)}}function gt(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function ft(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,gt,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("brief_company_profile").errors)==null?null:t.required)}}function _t(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function vt(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,_t,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("directors_of_dealership").errors)==null?null:t.required)}}function xt(a,r){if(a&1){let t=O();n(0,"div",26),e(1,`
                    `),n(2,"input",27),x("change",function(l){let p=A(t).$implicit,ee=c();return M(ee.onCategoryChange(+p.id,l))}),i(),e(3,`
                    `),n(4,"label",28),e(5),i(),e(6,`
                  `),i()}if(a&2){let t=r.$implicit,o=c();s(2),m("id","category_"+t.id)("checked",o.mSelectedCategories.includes(+t.id)),s(2),m("for","category_"+t.id),s(),g(t.name)}}function ht(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function St(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,ht,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("engaged_persons_professional_skills").errors)==null?null:t.required)}}var he=class a{constructor(r,t,o,l,p){this.mDealerRegistrationService=r;this.mToastrService=t;this.mAppContextService=o;this.router=l;this.fb=p;this.mProgress=_(!1);this.mSelectedCategories=[];this.itemForm=this.fb.group({user_id:["",h.required],brief_company_profile:["",h.required],directors_of_dealership:["",h.required],category_id:[[]],engaged_persons_professional_skills:["",h.required]})}ngOnInit(){this.loadUnpaginatedItems()}onSubmit(r){let t=new FormData;t.append("user_id",r.user_id),t.append("brief_company_profile",r.brief_company_profile),t.append("directors_of_dealership",r.directors_of_dealership),t.append("category_id",this.mSelectedCategories),this.engaged_persons_professional_skills_file?t.append("engaged_persons_professional_skills",this.engaged_persons_professional_skills_file,this.engaged_persons_professional_skills_file.name):t.append("engaged_persons_professional_skills",""),t.append("_method","POST"),this.mProgress.set(!0),this.mDealerRegistrationService.createItem(t).subscribe({next:o=>{o&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/dealer-registrations"),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDealerRegistrationService.unpaginatedItems().subscribe({next:r=>{r&&(this.mDealershipCategories=r.data.dealership_categories,this.mUsers=r.data.users,this.mProgress.set(!1))},error:r=>{this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onCategoryChange(r,t){t.target.checked?this.mSelectedCategories.includes(r)||this.mSelectedCategories.push(r):this.mSelectedCategories=this.mSelectedCategories.filter(l=>l!==r),this.itemForm.patchValue({category_id:this.mSelectedCategories})}onEngagedPersonsProfessionalSkillsChange(r){if(r.target.value){let t=r.target.files[0];this.engaged_persons_professional_skills_file=t}}static{this.\u0275fac=function(t){return new(t||a)(u(b),u(F),u(S),u(z),u(Q))}}static{this.\u0275cmp=y({type:a,selectors:[["app-create"]],standalone:!1,decls:99,vars:21,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","user_id",1,"col-form-label","required"],["formControlName","user_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","brief_company_profile",1,"col-form-label","required"],["formControlName","brief_company_profile","type","date",1,"form-control",3,"ngClass"],["for","directors_of_dealership",1,"col-form-label","required"],["formControlName","directors_of_dealership","type","date",1,"form-control",3,"ngClass"],[1,"col-form-label","required"],[1,"row","container"],["class","col-md-4 form-check",4,"ngFor","ngForOf"],["for","engaged_persons_professional_skills",1,"col-form-label","required"],["formControlName","engaged_persons_professional_skills","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-4","form-check"],["type","checkbox",1,"form-check-input",3,"change","id","checked"],[1,"form-check-label",3,"for"]],template:function(t,o){if(t&1&&(d(0,dt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"form",3),x("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`
          `),n(11,"div",4),e(12,`
            `),n(13,"div",5),e(14,`
              `),n(15,"div",6),e(16,`
                `),n(17,"label",7),e(18,"User:"),i(),e(19,`
                `),n(20,"select",8),e(21,`
                  `),n(22,"option",9),e(23,"--- Select user ---"),i(),e(24,`
                  `),d(25,pt,2,3,"option",10),e(26,`
                `),i(),e(27,`
                `),d(28,ut,4,1,"div",11),e(29,`
              `),i(),e(30,`
            `),i(),e(31,`
            `),n(32,"div",5),e(33,`
              `),n(34,"div",6),e(35,`
                `),n(36,"label",12),e(37,"Brief Company Profile:"),i(),e(38,`
                `),f(39,"textarea",13),e(40,`
                `),d(41,ft,4,1,"div",11),e(42,`
              `),i(),e(43,`
            `),i(),e(44,`
            `),n(45,"div",5),e(46,`
              `),n(47,"div",6),e(48,`
                `),n(49,"label",14),e(50,"Directors of Dealership (Names and ID/Passport Numbers):"),i(),e(51,`
                `),f(52,"textarea",15),e(53,`
                `),d(54,vt,4,1,"div",11),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),n(58,"div",5),e(59,`
              `),n(60,"div",6),e(61,`
                `),n(62,"label",16),e(63,`
                  Dealership/Service Types:
                `),i(),e(64,`
                `),n(65,"div",17),e(66,`
                  `),d(67,xt,7,4,"div",18),e(68,`
                `),i(),e(69,`
              `),i(),e(70,`
            `),i(),e(71,`
            `),n(72,"div",5),e(73,`
              `),n(74,"div",6),e(75,`
                `),n(76,"label",19),e(77,"Engaged Persons Professional Skills (Attach profiles of warehouseman, liquorer, agronomist, engineer, if other professional specify):"),i(),e(78,`
                `),n(79,"input",20),x("change",function(p){return o.onEngagedPersonsProfessionalSkillsChange(p)}),i(),e(80,`
                `),d(81,St,4,1,"div",11),e(82,`
              `),i(),e(83,`
            `),i(),e(84,`
          `),i(),e(85,`
          `),n(86,"div",21),e(87,`
            `),n(88,"button",22),e(89,"Cancel"),i(),e(90,`
            `),n(91,"button",23),e(92,"Submit"),i(),e(93,`
          `),i(),e(94,`
        `),i(),e(95,`

      `),i(),e(96,`
    `),i(),e(97,`
  `),i(),e(98,`
`),i()),t&2){let l,p;m("ngIf",o.mProgress()),s(9),m("formGroup",o.itemForm),s(11),m("ngClass",v(13,xe,((l=o.itemForm.get("user_id"))==null?null:l.invalid)&&(((l=o.itemForm.get("user_id"))==null?null:l.dirty)||((l=o.itemForm.get("user_id"))==null?null:l.touched)))),s(5),m("ngForOf",o.mUsers),s(3),m("ngIf",((p=o.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("user_id"))==null?null:p.dirty)||((p=o.itemForm.get("user_id"))==null?null:p.touched))),s(11),m("ngClass",v(15,xe,o.itemForm.get("brief_company_profile").invalid&&(o.itemForm.get("brief_company_profile").dirty||o.itemForm.get("brief_company_profile").touched))),s(2),m("ngIf",o.itemForm.get("brief_company_profile").invalid&&(o.itemForm.get("brief_company_profile").dirty||o.itemForm.get("brief_company_profile").touched)),s(11),m("ngClass",v(17,xe,o.itemForm.get("directors_of_dealership").invalid&&(o.itemForm.get("directors_of_dealership").dirty||o.itemForm.get("directors_of_dealership").touched))),s(2),m("ngIf",o.itemForm.get("directors_of_dealership").invalid&&(o.itemForm.get("directors_of_dealership").dirty||o.itemForm.get("directors_of_dealership").touched)),s(13),m("ngForOf",o.mDealershipCategories),s(12),m("ngClass",v(19,xe,o.itemForm.get("engaged_persons_professional_skills").invalid&&(o.itemForm.get("engaged_persons_professional_skills").dirty||o.itemForm.get("engaged_persons_professional_skills").touched))),s(2),m("ngIf",o.itemForm.get("engaged_persons_professional_skills").invalid&&(o.itemForm.get("engaged_persons_professional_skills").dirty||o.itemForm.get("engaged_persons_professional_skills").touched)),s(10),m("disabled",o.itemForm.invalid)}},dependencies:[D,B,C,E,T,w,P,k,R,$,J,K,L,Y,V,U,G,H],encapsulation:2})}};var Se=a=>({"is-invalid":a});function bt(a,r){a&1&&f(0,"app-progress")}function yt(a,r){if(a&1&&(n(0,"option",24),e(1),i()),a&2){let t=r.$implicit;m("value",q(t.id)),s(),g(t.name)}}function Ct(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function Et(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,Ct,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("user_id"))==null||t.errors==null?null:t.errors.required)}}function It(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function Ft(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,It,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("brief_company_profile").errors)==null?null:t.required)}}function Tt(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function Dt(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,Tt,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("directors_of_dealership").errors)==null?null:t.required)}}function wt(a,r){if(a&1){let t=O();n(0,"div",26),e(1,`
                    `),n(2,"input",27),x("change",function(l){let p=A(t).$implicit,ee=c();return M(ee.onCategoryChange(+p.id,l))}),i(),e(3,`
                    `),n(4,"label",28),e(5),i(),e(6,`
                  `),i()}if(a&2){let t=r.$implicit,o=c();s(2),m("id","category_"+t.id)("checked",o.mSelectedCategories.includes(+t.id)),s(2),m("for","category_"+t.id),s(),g(t.name)}}function Pt(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function kt(a,r){if(a&1&&(n(0,"div",25),e(1,`
                  `),d(2,Pt,2,0,"div",0),e(3,`
                `),i()),a&2){let t,o=c();s(2),m("ngIf",(t=o.itemForm.get("engaged_persons_professional_skills").errors)==null?null:t.required)}}var be=class a{constructor(r,t,o,l,p,ee){this.mDealerRegistrationService=r;this.mToastrService=t;this.mAppContextService=o;this.router=l;this.fb=p;this.route=ee;this.mProgress=_(!1);this.mSelectedCategories=[];this.itemForm=this.fb.group({user_id:["",h.required],brief_company_profile:["",h.required],directors_of_dealership:["",h.required],category_id:[[]],engaged_persons_professional_skills:["",h.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mSelectedCategories=this.item.dealership_services?.map(t=>Number(t.category_id))??[],this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onSubmit(r){let t=new FormData;t.append("user_id",r.user_id),t.append("brief_company_profile",r.brief_company_profile),t.append("directors_of_dealership",r.directors_of_dealership),t.append("category_id",this.mSelectedCategories),this.engaged_persons_professional_skills_file?t.append("engaged_persons_professional_skills",this.engaged_persons_professional_skills_file,this.engaged_persons_professional_skills_file.name):t.append("engaged_persons_professional_skills",""),t.append("_method","PUT"),this.mProgress.set(!0),this.mDealerRegistrationService.updateItem(this.id,t).subscribe({next:o=>{o&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/dealer-registrations"),this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.warning(o.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mDealerRegistrationService.unpaginatedItems().subscribe({next:r=>{r&&(this.mDealershipCategories=r.data.dealership_categories,this.mUsers=r.data.users,this.mProgress.set(!1))},error:r=>{this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onCategoryChange(r,t){t.target.checked?this.mSelectedCategories.includes(r)||this.mSelectedCategories.push(r):this.mSelectedCategories=this.mSelectedCategories.filter(l=>l!==r),this.itemForm.patchValue({category_id:this.mSelectedCategories})}onEngagedPersonsProfessionalSkillsChange(r){if(r.target.value){let t=r.target.files[0];this.engaged_persons_professional_skills_file=t}}static{this.\u0275fac=function(t){return new(t||a)(u(b),u(F),u(S),u(z),u(Q),u(j))}}static{this.\u0275cmp=y({type:a,selectors:[["app-edit"]],standalone:!1,decls:99,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","user_id",1,"col-form-label","required"],["formControlName","user_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","brief_company_profile",1,"col-form-label","required"],["formControlName","brief_company_profile","type","date",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","directors_of_dealership",1,"col-form-label","required"],["formControlName","directors_of_dealership","type","date",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-form-label","required"],[1,"row","container"],["class","col-md-4 form-check",4,"ngFor","ngForOf"],["for","engaged_persons_professional_skills",1,"col-form-label","required"],["formControlName","engaged_persons_professional_skills","type","file",1,"form-control",3,"change","ngClass"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-4","form-check"],["type","checkbox",1,"form-check-input",3,"change","id","checked"],[1,"form-check-label",3,"for"]],template:function(t,o){if(t&1&&(d(0,bt,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"form",3),x("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),e(10,`
          `),n(11,"div",4),e(12,`
            `),n(13,"div",5),e(14,`
              `),n(15,"div",6),e(16,`
                `),n(17,"label",7),e(18,"User:"),i(),e(19,`
                `),n(20,"select",8),ge("ngModelChange",function(p){return ue(o.item.id,p)||(o.item.id=p),p}),e(21,`
                  `),n(22,"option",9),e(23,"--- Select user ---"),i(),e(24,`
                  `),d(25,yt,2,3,"option",10),e(26,`
                `),i(),e(27,`
                `),d(28,Et,4,1,"div",11),e(29,`
              `),i(),e(30,`
            `),i(),e(31,`
            `),n(32,"div",5),e(33,`
              `),n(34,"div",6),e(35,`
                `),n(36,"label",12),e(37,"Brief Company Profile:"),i(),e(38,`
                `),n(39,"textarea",13),ge("ngModelChange",function(p){return ue(o.item.profile.brief_company_profile,p)||(o.item.profile.brief_company_profile=p),p}),i(),e(40,`
                `),d(41,Ft,4,1,"div",11),e(42,`
              `),i(),e(43,`
            `),i(),e(44,`
            `),n(45,"div",5),e(46,`
              `),n(47,"div",6),e(48,`
                `),n(49,"label",14),e(50,"Directors of Dealership (Names and ID/Passport Numbers):"),i(),e(51,`
                `),n(52,"textarea",15),ge("ngModelChange",function(p){return ue(o.item.profile.directors_of_dealership,p)||(o.item.profile.directors_of_dealership=p),p}),i(),e(53,`
                `),d(54,Dt,4,1,"div",11),e(55,`
              `),i(),e(56,`
            `),i(),e(57,`
            `),n(58,"div",5),e(59,`
              `),n(60,"div",6),e(61,`
                `),n(62,"label",16),e(63,`
                  Dealership/Service Types:
                `),i(),e(64,`
                `),n(65,"div",17),e(66,`
                  `),d(67,wt,7,4,"div",18),e(68,`
                `),i(),e(69,`
              `),i(),e(70,`
            `),i(),e(71,`
            `),n(72,"div",5),e(73,`
              `),n(74,"div",6),e(75,`
                `),n(76,"label",19),e(77,"Engaged Persons Professional Skills (Attach profiles of warehouseman, liquorer, agronomist, engineer, if other professional specify):"),i(),e(78,`
                `),n(79,"input",20),x("change",function(p){return o.onEngagedPersonsProfessionalSkillsChange(p)}),i(),e(80,`
                `),d(81,kt,4,1,"div",11),e(82,`
              `),i(),e(83,`
            `),i(),e(84,`
          `),i(),e(85,`
          `),n(86,"div",21),e(87,`
            `),n(88,"button",22),e(89,"Cancel"),i(),e(90,`
            `),n(91,"button",23),e(92,"Submit"),i(),e(93,`
          `),i(),e(94,`
        `),i(),e(95,`

      `),i(),e(96,`
    `),i(),e(97,`
  `),i(),e(98,`
`),i()),t&2){let l,p;m("ngIf",o.mProgress()),s(9),m("formGroup",o.itemForm),s(11),ce("ngModel",o.item.id),m("ngClass",v(16,Se,((l=o.itemForm.get("user_id"))==null?null:l.invalid)&&(((l=o.itemForm.get("user_id"))==null?null:l.dirty)||((l=o.itemForm.get("user_id"))==null?null:l.touched)))),s(5),m("ngForOf",o.mUsers),s(3),m("ngIf",((p=o.itemForm.get("user_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("user_id"))==null?null:p.dirty)||((p=o.itemForm.get("user_id"))==null?null:p.touched))),s(11),ce("ngModel",o.item.profile.brief_company_profile),m("ngClass",v(18,Se,o.itemForm.get("brief_company_profile").invalid&&(o.itemForm.get("brief_company_profile").dirty||o.itemForm.get("brief_company_profile").touched))),s(2),m("ngIf",o.itemForm.get("brief_company_profile").invalid&&(o.itemForm.get("brief_company_profile").dirty||o.itemForm.get("brief_company_profile").touched)),s(11),ce("ngModel",o.item.profile.directors_of_dealership),m("ngClass",v(20,Se,o.itemForm.get("directors_of_dealership").invalid&&(o.itemForm.get("directors_of_dealership").dirty||o.itemForm.get("directors_of_dealership").touched))),s(2),m("ngIf",o.itemForm.get("directors_of_dealership").invalid&&(o.itemForm.get("directors_of_dealership").dirty||o.itemForm.get("directors_of_dealership").touched)),s(13),m("ngForOf",o.mDealershipCategories),s(12),m("ngClass",v(22,Se,o.itemForm.get("engaged_persons_professional_skills").invalid&&(o.itemForm.get("engaged_persons_professional_skills").dirty||o.itemForm.get("engaged_persons_professional_skills").touched))),s(2),m("ngIf",o.itemForm.get("engaged_persons_professional_skills").invalid&&(o.itemForm.get("engaged_persons_professional_skills").dirty||o.itemForm.get("engaged_persons_professional_skills").touched)),s(10),m("disabled",o.itemForm.invalid)}},dependencies:[D,B,C,E,T,w,P,k,R,$,J,K,L,Y,V,U,G,H],encapsulation:2})}};var ot=mt(lt());var Rt=a=>({"is-invalid":a}),Pe=()=>[1],Nt=a=>["/dealer-registrations/process",a],At=(a,r,t,o,l,p)=>({"bg-secondary":a,"bg-warning":r,"bg-dark":t,"bg-success":o,"bg-danger":l,"bg-info":p}),Mt=(a,r)=>({active:a,disabled:r});function Ot(a,r){a&1&&f(0,"app-progress")}function qt(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function Bt(a,r){if(a&1&&(n(0,"div",16),e(1,`
                  `),d(2,qt,2,0,"div",1),e(3,`
                `),i()),a&2){let t=c();s(2),m("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function jt(a,r){if(a&1){let t=O();n(0,"span"),e(1,`
                    `),n(2,"button",28),x("click",function(){A(t);let l=c().$implicit,p=c(2);return M(p.onDownloadCertificate(l))}),e(3,"Download"),i(),e(4,`
                  `),i()}}function Lt(a,r){if(a&1&&(n(0,"button",29),f(1,"i",30),i()),a&2){let t=c().$implicit;m("routerLink",te("/dealer-registrations/edit/",t.id))}}function Vt(a,r){if(a&1){let t=O();n(0,"button",31),x("click",function(){A(t);let l=c().$implicit,p=c(2);return M(p.onDelete(l))}),f(1,"i",32),i()}}function Ut(a,r){if(a&1&&(n(0,"tr"),e(1,`
                `),n(2,"td"),e(3),i(),e(4,`
                `),n(5,"td"),e(6),i(),e(7,`
                `),n(8,"td"),e(9),i(),e(10,`
                `),n(11,"td")(12,"span",22),e(13),i()(),e(14,`
                `),n(15,"td"),e(16,`
                  `),d(17,jt,5,0,"span",1),e(18,`
                `),i(),e(19,`
                `),n(20,"td"),e(21),ie(22,"date"),i(),e(23,`
                `),n(24,"td"),e(25,`
                  `),n(26,"div",23),e(27,`
                    `),n(28,"button",24),f(29,"i",25),i(),e(30,`
                    `),d(31,Lt,2,2,"button",26),e(32,`
                    `),d(33,Vt,2,0,"button",27),e(34,`
                  `),i(),e(35,`
                `),i(),e(36,`
              `),i()),a&2){let t=r.$implicit,o=r.index,l=c(2);s(3),qe("",l.mPageFrom+o,"."),s(3),g(t.name),s(3),g(t.email),s(3),m("routerLink",l.mAppContextService.hasTypes(N(14,Pe))?v(15,Nt,t.id):null)("ngClass",fe(17,At,t.dealer_registration_status_id==1,t.dealer_registration_status_id==2,t.dealer_registration_status_id==3,t.dealer_registration_status_id==4,t.dealer_registration_status_id==5,t.dealer_registration_status_id==6)),s(),g(t==null||t.dealer_registration_status==null?null:t.dealer_registration_status.name),s(4),m("ngIf",t.dealer_registration_status_id==4),s(4),g(ne(22,12,t.created_at)),s(7),m("routerLink",te("/dealer-registrations/show/",t.id)),s(3),m("ngIf",l.mAppContextService.hasRoles(N(24,Pe))||t.dealer_registration_status_id==1||t.dealer_registration_status_id==2),s(2),m("ngIf",l.mAppContextService.hasRoles(N(25,Pe))||t.dealer_registration_status_id==1||t.dealer_registration_status_id==2)}}function $t(a,r){if(a&1&&(n(0,"div",17),e(1,`
          `),n(2,"table",18),e(3,`
            `),n(4,"thead",19),e(5,`
              `),n(6,"tr"),e(7,`
                `),n(8,"th",20),e(9,"#"),i(),e(10,`
                `),n(11,"th",20),e(12,"Applicant"),i(),e(13,`
                `),n(14,"th",20),e(15,"Email"),i(),e(16,`
                `),n(17,"th",20),e(18,"Status"),i(),e(19,`
                `),n(20,"th",20),e(21,"Certificate"),i(),e(22,`
                `),n(23,"th",20),e(24,"Created"),i(),e(25,`
                `),n(26,"th",20),e(27,"Action"),i(),e(28,`
              `),i(),e(29,`
            `),i(),e(30,`
            `),n(31,"tbody"),e(32,`
              `),d(33,Ut,37,26,"tr",21),e(34,`
            `),i(),e(35,`
          `),i(),e(36,`
        `),i()),a&2){let t=c();s(33),m("ngForOf",t.mUsers)}}function Ht(a,r){if(a&1){let t=O();n(0,"li",35),e(1,`
              `),n(2,"a",36),x("click",function(){let l=A(t).$implicit,p=c(2);return M(p.onChangePage(l.url))}),i(),e(3,`
            `),i()}if(a&2){let t=r.$implicit;m("ngClass",je(2,Mt,t.active,!t.url)),s(2),m("innerHTML",t.label,Ae)}}function Gt(a,r){if(a&1&&(n(0,"div"),e(1,`
          `),n(2,"ul",33),e(3,`
            `),d(4,Ht,4,5,"li",34),e(5,`
          `),i(),e(6,`
        `),i()),a&2){let t=c();s(4),m("ngForOf",t.links)}}function Wt(a,r){a&1&&(e(0,`
          `),n(1,"p",37),e(2,"No items"),i(),e(3,`
        `))}var ye=class a{constructor(r,t,o){this.mDealerRegistrationService=r;this.mToastrService=t;this.mAppContextService=o;this.mUsers={};this.links=[];this.mProgress=_(!1)}ngOnInit(){this.index(),this.search_term=new nt("",h.required),this.itemForm=new it({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mDealerRegistrationService.allItems().subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mUsers=r.data,this.links=r.links),this.mProgress.set(!1)},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onChangePage(r){this.mProgress.set(!0),this.mDealerRegistrationService.paginateItems(r).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mUsers=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(r){ot.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+r.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(o=>{o.isConfirmed&&(this.mProgress.set(!0),this.mDealerRegistrationService.deleteItem(r).subscribe({next:l=>{l&&(this.mUsers=this.mUsers.filter(p=>p.id!==r.id),this.mToastrService.warning(l.message),this.mProgress.set(!1))},error:l=>{l.error.message&&this.mToastrService.warning(l.error.message),this.mProgress.set(!1)}}))})}onSubmit(r){this.mProgress.set(!0),this.mDealerRegistrationService.searchItems(r).subscribe({next:t=>{t&&(this.mUsers=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(r){this.mProgress.set(!0),this.mDealerRegistrationService.searchItems(r).subscribe({next:t=>{t&&(this.mUsers=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDownloadCertificate(r){this.mProgress.set(!0),this.mDealerRegistrationService.onDownloadCertificate(r).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let l=t;var o=URL.createObjectURL(l);window.open(o,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(u(b),u(F),u(S))}}static{this.\u0275cmp=y({type:a,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/dealer-registrations/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"routerLink","ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],["class","btn btn-dark btn-sm me-1",3,"routerLink",4,"ngIf"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-link","btn-sm",3,"click"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,o){if(t&1&&(d(0,Ot,1,0,"app-progress",1),n(1,"c-row"),e(2,`
  `),n(3,"c-col",2),e(4,`
    `),n(5,"c-card",3),e(6,`
      `),n(7,"c-card-header"),e(8,`
        `),n(9,"div",4),e(10,`
          `),n(11,"div",5),e(12,`
            `),n(13,"a",6),e(14,`
              `),f(15,"i",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),n(19,"div"),e(20,`
            `),n(21,"form",8),x("ngSubmit",function(){return o.onSearch(o.itemForm.value)}),e(22,`
              `),n(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),n(27,"div",11),e(28,`
                  `),n(29,"button",12),e(30,`
                    `),f(31,"i",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),d(35,Bt,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),n(42,"c-card-body"),e(43,`

        `),d(44,$t,37,1,"div",15),e(45,`

        `),d(46,Gt,7,1,"div",1),e(47,`

        `),d(48,Wt,4,0,"ng-template",null,0,Le),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),t&2){let l=Oe(49);m("ngIf",o.mProgress()),s(21),m("formGroup",o.itemForm),s(4),m("ngClass",v(7,Rt,o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched))),s(10),m("ngIf",o.search_term.invalid&&(o.search_term.dirty||o.search_term.touched)),s(9),m("ngIf",o.mUsers.length>0)("ngIfElse",l),s(2),m("ngIf",o.links)}},dependencies:[D,B,C,E,T,w,P,We,k,R,Xe,Qe,$,L,V,U,G,H,_e],encapsulation:2})}};var at=a=>({"is-invalid":a});function zt(a,r){a&1&&f(0,"app-progress")}function Yt(a,r){if(a&1&&(n(0,"option",15),e(1),i()),a&2){let t=r.$implicit;m("value",q(t.id)),s(),g(t.alias)}}function Jt(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function Kt(a,r){if(a&1&&(n(0,"div",16),d(1,Jt,2,0,"div",0),i()),a&2){let t,o=c();s(),m("ngIf",(t=o.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function Qt(a,r){a&1&&(n(0,"div"),e(1,"This field is required."),i())}function Xt(a,r){if(a&1&&(n(0,"div",16),d(1,Qt,2,0,"div",0),i()),a&2){let t,o=c();s(),m("ngIf",(t=o.itemForm.get("remarks").errors)==null?null:t.required)}}var Ce=class a{constructor(r,t,o,l,p,ee){this.mToastrService=r;this.mDealerRegistrationService=t;this.mAppContextService=o;this.router=l;this.fb=p;this.route=ee;this.mProgress=_(!1);this.item={};this.mEditor=tt;this.itemForm=this.fb.group({status_id:["",h.required],remarks:["",h.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.getNextPreviousStatus(),this.mProgress=_(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}onSubmit(r){let t=Re(ke({},r),{id:this.id});this.mProgress=_(!0),this.mDealerRegistrationService.reviewApplicationItem(t).subscribe({next:o=>{o.status==="success"&&(this.mToastrService.success(o.message),this.router.navigateByUrl("/dealer-registrations"),this.mProgress=_(!1))},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress=_(!1)}})}getNextPreviousStatus(){this.mProgress=_(!0),this.mDealerRegistrationService.nextPreviousStatusItem(this.item.dealer_registration_status_id).subscribe({next:r=>{r&&(this.mNextPreviousStatuses=r,this.mProgress=_(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress=_(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(u(F),u(b),u(S),u(z),u(Q),u(j))}}static{this.\u0275cmp=y({type:a,selectors:[["app-review"]],standalone:!1,decls:24,vars:12,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,o){if(t&1&&(d(0,zt,1,0,"app-progress",0),n(1,"div")(2,"form",1),x("ngSubmit",function(){return o.onSubmit(o.itemForm.value)}),n(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),i(),n(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),i(),d(11,Yt,2,3,"option",8),i(),d(12,Kt,2,1,"div",9),i()(),n(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),i(),f(17,"textarea",11),d(18,Xt,2,1,"div",9),i()()(),n(19,"div",12)(20,"button",13),e(21,"Cancel"),i(),n(22,"button",14),e(23,"Submit"),i()()()()),t&2){let l,p;m("ngIf",o.mProgress()),s(2),m("formGroup",o.itemForm),s(6),m("ngClass",v(8,at,((l=o.itemForm.get("status_id"))==null?null:l.invalid)&&(((l=o.itemForm.get("status_id"))==null?null:l.dirty)||((l=o.itemForm.get("status_id"))==null?null:l.touched)))),s(3),m("ngForOf",o.mNextPreviousStatuses),s(),m("ngIf",((p=o.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=o.itemForm.get("status_id"))==null?null:p.dirty)||((p=o.itemForm.get("status_id"))==null?null:p.touched))),s(5),m("ngClass",v(10,at,o.itemForm.get("remarks").invalid&&(o.itemForm.get("remarks").dirty||o.itemForm.get("remarks").touched))),s(),m("ngIf",o.itemForm.get("remarks").invalid&&(o.itemForm.get("remarks").dirty||o.itemForm.get("remarks").touched)),s(4),m("disabled",o.itemForm.invalid)}},dependencies:[D,B,C,E,T,He,$,J,K,L,Y,V,U,G,H],encapsulation:2})}};var ei=()=>[1],ti=()=>[2];function ii(a,r){a&1&&f(0,"app-progress")}function ni(a,r){if(a&1&&(n(0,"div",12),e(1),i()),a&2){let t=c();s(),g(t.item.id)}}function ri(a,r){if(a&1&&(n(0,"div",12),e(1,`
                `),n(2,"a",13),e(3),i(),e(4,`
              `),i()),a&2){let t=c();s(2),m("routerLink",te("/users/show/",t.item.id)),s(),g(t.item.name)}}function oi(a,r){a&1&&(n(0,"div"),e(1,`
                  `),f(2,"app-review"),e(3,`
                `),i())}var Ee=class a{constructor(r,t,o,l){this.mDealerRegistrationService=r;this.mToastrService=t;this.mAppContextService=o;this.route=l;this.mProgress=_(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(u(b),u(F),u(S),u(j))}}static{this.\u0275cmp=y({type:a,selectors:[["app-process"]],standalone:!1,decls:53,vars:6,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"fw-bold","text-muted"],[1,"text-muted"],[1,"text-sm",3,"routerLink"]],template:function(t,o){t&1&&(d(0,ii,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div",3),e(10,`
          `),n(11,"div",4),e(12,`
            `),n(13,"div",5),e(14,`
              `),n(15,"label",6),e(16,"Number:"),i(),e(17,`
              `),d(18,ni,2,1,"div",7),e(19,`
            `),i(),e(20,`
          `),i(),e(21,`
          `),n(22,"div",4),e(23,`
            `),n(24,"div",5),e(25,`
              `),n(26,"label",6),e(27,"Applicant:"),i(),e(28,`
              `),d(29,ri,5,3,"div",7),e(30,`
            `),i(),e(31,`
          `),i(),e(32,`
          `),n(33,"div",8),e(34,`
            `),n(35,"div",5),e(36,`

              `),n(37,"fieldset",9),e(38,`
                `),n(39,"legend",10)(40,"h6",11),e(41,"Process"),i()(),e(42,`
                `),e(43,`
                `),d(44,oi,4,0,"div",0),e(45,`
              `),i(),e(46,`

            `),i(),e(47,`
          `),i(),e(48,`
        `),i(),e(49,`

      `),i(),e(50,`
    `),i(),e(51,`
  `),i(),e(52,`
`),i()),t&2&&(m("ngIf",o.mProgress()),s(18),m("ngIf",o.item.id),s(11),m("ngIf",o.item.id),s(15),m("ngIf",(o.item==null?null:o.item.dealer_registration_status_id)===3&&(o.mAppContextService.hasRoles(N(4,ei))||o.mAppContextService.hasRoles(N(5,ti)))))},dependencies:[C,E,T,w,P,k,R,Ce],encapsulation:2})}};var ai=()=>[1],si=a=>["/dealer-registrations/process",a],mi=(a,r,t,o,l,p)=>({"bg-secondary":a,"bg-warning":r,"bg-dark":t,"bg-success":o,"bg-danger":l,"bg-info":p}),li=(a,r)=>t=>t.name;function di(a,r){a&1&&f(0,"app-progress")}function pi(a,r){if(a&1&&(n(0,"div",19),e(1),i()),a&2){let t=c();s(),g(t.item.id)}}function ci(a,r){if(a&1&&(n(0,"div",19),e(1,`
                  `),n(2,"span",20),e(3),i(),e(4,`
                `),i()),a&2){let t=c();s(2),m("ngClass",fe(2,mi,t.item.dealer_registration_status_id==1,t.item.dealer_registration_status_id==2,t.item.dealer_registration_status_id==3,t.item.dealer_registration_status_id==4,t.item.dealer_registration_status_id==5,t.item.dealer_registration_status_id==6)),s(),g(t.item==null||t.item.dealer_registration_status==null?null:t.item.dealer_registration_status.name)}}function ui(a,r){if(a&1&&(n(0,"div",19),e(1),i()),a&2){let t=c();s(),g(t.item.profile==null?null:t.item.profile.brief_company_profile)}}function gi(a,r){if(a&1&&(n(0,"div",19),e(1),i()),a&2){let t=c();s(),g(t.item.profile==null?null:t.item.profile.directors_of_dealership)}}function fi(a,r){if(a&1&&(n(0,"span"),e(1),i()),a&2){let t=c(2);s(),g(t.item.dealership_services.map(Be(1,li,r)).join(", "))}}function _i(a,r){if(a&1&&(n(0,"div",19),e(1,`
                  `),d(2,fi,2,2,"span",0),e(3,`
                `),i()),a&2){let t=c();s(2),m("ngIf",t.item.dealership_services==null?null:t.item.dealership_services.length)}}function vi(a,r){if(a&1&&(n(0,"div",21),e(1,`
                  `),n(2,"a",22),e(3,"File"),i(),e(4,`
                `),i()),a&2){let t=c();s(2),m("href",q(t.item.profile==null?null:t.item.profile.engaged_persons_professional_skills_url),Me)}}function xi(a,r){if(a&1&&(n(0,"div",19),e(1),ie(2,"date"),i()),a&2){let t=c();s(),g(ne(2,1,t.item.effective_date))}}function hi(a,r){if(a&1&&(n(0,"div",19),e(1),ie(2,"date"),i()),a&2){let t=c();s(),g(ne(2,1,t.item.date_of_expiry))}}var Ie=class a{constructor(r,t,o,l){this.mDealerRegistrationService=r;this.mToastrService=t;this.mAppContextService=o;this.route=l;this.mProgress=_(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mDealerRegistrationService.getOneItem(this.id).subscribe({next:r=>{r&&(this.item=r,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||a)(u(b),u(F),u(S),u(j))}}static{this.\u0275cmp=y({type:a,selectors:[["app-show"]],standalone:!1,decls:115,vars:13,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","application_number"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],["for","type_id"],["for","directors_of_dealership",1,"col-form-label","required1"],["for","dealership_services"],["for","engaged_persons_professional_skills"],["class","text-muted1",4,"ngIf"],["for","coffee_species_id"],["for","coffee_form_id"],[1,"mt-3","text-end"],["routerLink","/dealer-registrations",1,"btn","btn-light"],[1,"btn","btn-warning",3,"routerLink"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-muted1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(t,o){t&1&&(d(0,di,1,0,"app-progress",0),n(1,"c-row"),e(2,`
  `),n(3,"c-col",1),e(4,`
    `),n(5,"c-card",2),e(6,`
      `),n(7,"c-card-body"),e(8,`

        `),n(9,"div"),e(10,`
          `),n(11,"div",3),e(12,`
            `),n(13,"div",4),e(14,`
              `),n(15,"div",5),e(16,`
                `),n(17,"label",6),e(18,"Application Number:"),i(),e(19,`
                `),d(20,pi,2,1,"div",7),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),n(24,"div",4),e(25,`
              `),n(26,"div",5),e(27,`
                `),n(28,"label",6),e(29,"Status:"),i(),e(30,`
                `),d(31,ci,5,9,"div",7),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),n(35,"div",8),e(36,`
              `),n(37,"div",5),e(38,`
                `),n(39,"label",9),e(40,"Brief Company Profile:"),i(),e(41,`
                `),d(42,ui,2,1,"div",7),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),n(46,"div",8),e(47,`
              `),n(48,"div",5),e(49,`
                `),n(50,"label",10),e(51,"Directors of Dealership (Names and ID/Passport Numbers)::"),i(),e(52,`
                `),d(53,gi,2,1,"div",7),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),n(57,"div",8),e(58,`
              `),n(59,"div",5),e(60,`
                `),n(61,"label",11),e(62,"Dealership/Service Types:"),i(),e(63,`
                `),d(64,_i,4,1,"div",7),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),n(68,"div",8),e(69,`
              `),n(70,"div",5),e(71,`
                `),n(72,"label",12),e(73,"Engaged Persons Professional Skills:"),i(),e(74,`
                `),d(75,vi,5,2,"div",13),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),n(79,"div",4),e(80,`
              `),n(81,"div",5),e(82,`
                `),n(83,"label",14),e(84,"Effective Date:"),i(),e(85,`
                `),d(86,xi,3,3,"div",7),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),n(90,"div",4),e(91,`
              `),n(92,"div",5),e(93,`
                `),n(94,"label",15),e(95,"Expiry Date:"),i(),e(96,`
                `),d(97,hi,3,3,"div",7),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`
          `),i(),e(101,`
          `),n(102,"div",16),e(103,`
            `),n(104,"button",17),e(105,"Cancel"),i(),e(106,`
            `),n(107,"button",18),e(108,"Process"),i(),e(109,`
          `),i(),e(110,`
        `),i(),e(111,`

      `),i(),e(112,`
    `),i(),e(113,`
  `),i(),e(114,`
`),i()),t&2&&(m("ngIf",o.mProgress()),s(20),m("ngIf",o.item.id),s(11),m("ngIf",o.item.dealer_registration_status_id),s(11),m("ngIf",o.item.profile==null?null:o.item.profile.brief_company_profile),s(11),m("ngIf",o.item.profile==null?null:o.item.profile.directors_of_dealership),s(11),m("ngIf",o.item.dealership_services),s(11),m("ngIf",o.item.profile==null?null:o.item.profile.engaged_persons_professional_skills),s(11),m("ngIf",o.item.effective_date),s(11),m("ngIf",o.item.date_of_expiry),s(10),m("routerLink",o.mAppContextService.hasTypes(N(10,ai))?v(11,si,o.item.id):null))},dependencies:[D,C,E,T,w,P,k,R,_e],encapsulation:2})}};var Si=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:ye,data:{title:"Dealer Registrations"}},{path:"create",component:he,data:{title:"Dealer Registrations / Create"}},{path:"edit/:id",component:be,data:{title:"Dealer Registrations / Edit"}},{path:"show/:id",component:Ie,data:{title:"Dealer Registrations / Show"}},{path:"process/:id",component:Ee,data:{title:"Dealer Registrations / Process"}}],Fe=class a{static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275mod=pe({type:a})}static{this.\u0275inj=de({imports:[ve,De.forChild(Si),De]})}};var st=class a{static{this.\u0275fac=function(t){return new(t||a)}}static{this.\u0275mod=pe({type:a})}static{this.\u0275inj=de({imports:[ve,Fe,et,Ge,ze,Ye,Je,Ke,Ze,rt,$e]})}};export{st as DealerRegistrationModule};
