import{a as vt}from"./chunk-6RQ26A7U.js";import{a as we,b as V,c as x,d as $,e as G,f as st,g as dt,h as Y,j as W,k as H,l as X,m as Z,n as ee,o as te,p as pt}from"./chunk-AA7FODAT.js";import{a as k,b as Pe,c as C,e as w}from"./chunk-7N3P666Q.js";import{a as P}from"./chunk-3ZTHBSDX.js";import{Bb as A,Bc as q,Ca as l,Cb as D,Cc as O,D as Ce,Da as r,Db as I,Ea as n,Ec as et,Fa as g,Fb as Fe,Fc as tt,Ib as Ie,K as Ge,L as be,Mb as Ke,N as je,Nb as Qe,Oa as K,Oc as it,Q as z,Qa as h,Qc as B,R as J,Rc as j,Sa as c,Tc as nt,Ub as R,Wb as Q,Xb as T,Z as _,Za as He,Zc as rt,a as ye,b as Se,bb as e,cb as f,db as Ue,dc as Ve,e as gt,ea as Ye,fa as We,fb as oe,gb as ae,gd as ot,hb as me,hd as at,ia as m,ib as F,id as mt,jb as ie,lb as M,mb as v,nb as ze,nd as lt,ob as Ee,pa as u,pb as le,qa as E,qb as se,qc as Xe,ra as he,tb as Je,ua as d,uc as Te,vc as Ze}from"./chunk-XFT25JYO.js";var b=class o{constructor(a,t){this.mAppContextService=a;this.http=t}allItems(){let a=`${k.base_url}/licenses`;return this.http.get(a,this.mAppContextService.getHttpOptions())}createItem(a){let t=`${k.base_url}/licenses`;return this.http.post(t,a)}getOneItem(a){let t=`${k.base_url}/licenses/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}updateItem(a,t){let i=`${k.base_url}/licenses/${a}`;return this.http.post(i,t)}deleteItem(a){let t=`${k.base_url}/licenses/${a.id}`;return this.http.delete(t,this.mAppContextService.getHttpOptions())}paginateItems(a){return this.http.get(a,this.mAppContextService.getHttpOptions())}searchItems(a){let t=`${k.base_url}/search-licenses`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}unpaginatedItems(){let a=`${k.base_url}/unpaginated-items-licenses`;return this.http.get(a,this.mAppContextService.getHttpOptions())}nextPreviousStatusItem(a){let t=`${k.base_url}/next-previous-status-process-licenses/${a}`;return this.http.get(t,this.mAppContextService.getHttpOptions())}reviewApplicationItem(a){let t=`${k.base_url}/review-process-licenses/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}approvalApplicationItem(a){let t=`${k.base_url}/approve-process-licenses/${a.id}`;return this.http.post(t,a,this.mAppContextService.getHttpOptions())}onDownloadPermit(a){let t=new Ke;t=t.set("Accept","application/pdf");let i=`${k.base_url}/licenses-pdf/${a.id}`;return this.http.get(i,{headers:t,responseType:"blob"})}static{this.\u0275fac=function(t){return new(t||o)(je(C),je(Qe))}}static{this.\u0275prov=Ge({token:o,factory:o.\u0275fac,providedIn:"root"})}};var ve=o=>({"is-invalid":o});function xt(o,a){o&1&&g(0,"app-progress")}function yt(o,a){if(o&1&&(r(0,"option",26),e(1),n()),o&2){let t=a.$implicit;l("value",F(t.id)),m(),f(t.name)}}function St(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ct(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,St,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("category_id"))==null||t.errors==null?null:t.errors.required)}}function bt(o,a){if(o&1&&(r(0,"option",26),e(1),n()),o&2){let t=a.$implicit;l("value",F(t)),m(),f(t)}}function ht(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Et(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,ht,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("financial_year"))==null||t.errors==null?null:t.errors.required)}}function Ft(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function It(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,Ft,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("expiry_date").errors)==null?null:t.required)}}function Tt(o,a){if(o&1&&(r(0,"option",26),e(1),n()),o&2){let t=a.$implicit;l("value",F(t.id)),m(),f(t.name)}}function Pt(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function wt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,Pt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}function Lt(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Nt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,Lt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c(2);m(2),l("ngIf",(t=i.itemForm.get("coffee_tasting_expert_certificate").errors)==null?null:t.required)}}function At(o,a){if(o&1){let t=K();r(0,"div",5),e(1,`
              `),r(2,"div",6),e(3,`
                `),r(4,"label",28),e(5,"Coffee Tasting Expert Certificate:"),n(),e(6,`
                `),r(7,"input",29),h("change",function(s){z(t);let p=c();return J(p.onCoffeeTastingExpertCertificateChange(s))}),n(),e(8,`
                `),d(9,Nt,4,1,"div",11),e(10,`
              `),n(),e(11,`
            `),n()}if(o&2){let t=c();m(7),l("ngClass",v(2,ve,t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))),m(2),l("ngIf",t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))}}function kt(o,a){o&1&&(r(0,"div"),e(1,"You must accept to proceed."),n())}function Mt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                `),d(2,kt,2,0,"div",0),e(3,`
              `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("commitment_declaration").errors)==null?null:t.requiredTrue)}}var Le=class o{constructor(a,t,i,s,p){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=i;this.router=s;this.fb=p;this.mProgress=_(!1);this.mFinancialYears=[];this.itemForm=this.fb.group({category_id:["",x.required],financial_year:["",x.required],expiry_date:["",x.required],type_id:["",x.required],coffee_tasting_expert_certificate:["",x.nullValidator],commitment_declaration:[!1,x.requiredTrue]})}ngOnInit(){this.loadUnpaginatedItems(),this.loadFinancialYearsItems()}onSubmit(a){let t=new FormData;t.append("category_id",a.category_id),t.append("financial_year",a.financial_year),t.append("expiry_date",a.expiry_date),t.append("type_id",a.type_id),this.coffee_tasting_expert_certificate_file?t.append("coffee_tasting_expert_certificate",this.coffee_tasting_expert_certificate_file,this.coffee_tasting_expert_certificate_file.name):t.append("coffee_tasting_expert_certificate",""),t.append("commitment_declaration",a.commitment_declaration),t.append("_method","POST"),this.mProgress.set(!0),this.mLicenseService.createItem(t).subscribe({next:i=>{if(i){this.mToastrService.success(i.message);let s=i.data.payment.id;this.router.navigateByUrl("/payments/show/"+s),this.mProgress.set(!1)}},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mLicenseService.unpaginatedItems().subscribe({next:a=>{a&&(this.mLicenseCategories=a.data.license_categories,this.mLicenseTypes=a.data.license_types,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}loadFinancialYearsItems(){let a=new Date,t=a.getFullYear(),i=a.getMonth()>=6?t:t-1;for(let s=0;s<5;s++){let p=i-s;this.mFinancialYears.push(`${p}/${p+1}`)}this.itemForm.get("financial_year")?.valueChanges.pipe(Ce(this.itemForm.get("financial_year")?.value)).subscribe(s=>{if(s){let p=s.split("/")[1];this.itemForm.patchValue({expiry_date:`${p}-06-30`},{emitEvent:!1})}})}onCoffeeTastingExpertCertificateChange(a){if(a.target.value){let t=a.target.files[0];this.coffee_tasting_expert_certificate_file=t}}static{this.\u0275fac=function(t){return new(t||o)(u(b),u(P),u(C),u(Q),u(te))}}static{this.\u0275cmp=E({type:o,selectors:[["app-create"]],standalone:!1,decls:112,vars:24,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","category_id",1,"col-form-label","required"],["formControlName","category_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","financial_year",1,"col-form-label","required"],["formControlName","financial_year","type","text",1,"form-control",3,"ngClass"],["for","expiry_date",1,"col-form-label","required"],["formControlName","expiry_date","type","date","readonly","",1,"form-control",3,"ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["class","col-md-12",4,"ngIf"],[1,"form-check"],["type","checkbox","formControlName","commitment_declaration",1,"form-check-input"],["for","commitment_declaration",1,"form-check-label"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","coffee_tasting_expert_certificate",1,"col-form-label","required"],["formControlName","coffee_tasting_expert_certificate","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,i){if(t&1&&(d(0,xt,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"form",3),h("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"div",6),e(16,`
                `),r(17,"label",7),e(18,"Application Category:"),n(),e(19,`
                `),r(20,"select",8),e(21,`
                  `),r(22,"option",9),e(23,"--- Select category ---"),n(),e(24,`
                  `),d(25,yt,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,Ct,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),r(32,"div",12),e(33,`
              `),r(34,"div",6),e(35,`
                `),r(36,"label",13),e(37,"Year/Period:"),n(),e(38,`
                `),r(39,"select",14),e(40,`
                  `),r(41,"option",9),e(42,"--- Select year ---"),n(),e(43,`
                  `),d(44,bt,2,3,"option",10),e(45,`
                `),n(),e(46,`
                `),d(47,Et,4,1,"div",11),e(48,`
              `),n(),e(49,`
            `),n(),e(50,`
            `),r(51,"div",12),e(52,`
              `),r(53,"div",6),e(54,`
                `),r(55,"label",15),e(56,"Expiry Date:"),n(),e(57,`
                `),g(58,"input",16),e(59,`
                `),d(60,It,4,1,"div",11),e(61,`
              `),n(),e(62,`
            `),n(),e(63,`
            `),r(64,"div",5),e(65,`
              `),r(66,"div",6),e(67,`
                `),r(68,"label",17),e(69,"License Type:"),n(),e(70,`
                `),r(71,"select",18),e(72,`
                  `),r(73,"option",9),e(74,"--- Select type ---"),n(),e(75,`
                  `),d(76,Tt,2,3,"option",10),e(77,`
                `),n(),e(78,`
                `),d(79,wt,4,1,"div",11),e(80,`
              `),n(),e(81,`
            `),n(),e(82,`
             `),d(83,At,12,4,"div",19),e(84,`
            `),r(85,"div",5),e(86,`
              `),r(87,"div",20),e(88,`
                `),g(89,"input",21),e(90,`
                `),r(91,"label",22),e(92,`
                  By checking this, the applicant certifies that the information provided is accurate and agrees to comply with all applicable licence terms and conditions.
                `),n(),e(93,`
              `),n(),e(94,`
              `),d(95,Mt,4,1,"div",11),e(96,`
            `),n(),e(97,`
          `),n(),e(98,`
          `),r(99,"div",23),e(100,`
            `),r(101,"button",24),e(102,"Cancel"),n(),e(103,`
            `),r(104,"button",25),e(105,"Submit"),n(),e(106,`
          `),n(),e(107,`
        `),n(),e(108,`

      `),n(),e(109,`
    `),n(),e(110,`
  `),n(),e(111,`
`),n()),t&2){let s,p,y,S,L,N,ge;l("ngIf",i.mProgress()),m(9),l("formGroup",i.itemForm),m(11),l("ngClass",v(16,ve,((s=i.itemForm.get("category_id"))==null?null:s.invalid)&&(((s=i.itemForm.get("category_id"))==null?null:s.dirty)||((s=i.itemForm.get("category_id"))==null?null:s.touched)))),m(5),l("ngForOf",i.mLicenseCategories),m(3),l("ngIf",((p=i.itemForm.get("category_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("category_id"))==null?null:p.dirty)||((p=i.itemForm.get("category_id"))==null?null:p.touched))),m(11),l("ngClass",v(18,ve,((y=i.itemForm.get("financial_year"))==null?null:y.invalid)&&(((y=i.itemForm.get("financial_year"))==null?null:y.dirty)||((y=i.itemForm.get("financial_year"))==null?null:y.touched)))),m(5),l("ngForOf",i.mFinancialYears),m(3),l("ngIf",((S=i.itemForm.get("financial_year"))==null?null:S.invalid)&&(((S=i.itemForm.get("financial_year"))==null?null:S.dirty)||((S=i.itemForm.get("financial_year"))==null?null:S.touched))),m(11),l("ngClass",v(20,ve,i.itemForm.get("expiry_date").invalid&&(i.itemForm.get("expiry_date").dirty||i.itemForm.get("expiry_date").touched))),m(2),l("ngIf",i.itemForm.get("expiry_date").invalid&&(i.itemForm.get("expiry_date").dirty||i.itemForm.get("expiry_date").touched)),m(11),l("ngClass",v(22,ve,((L=i.itemForm.get("type_id"))==null?null:L.invalid)&&(((L=i.itemForm.get("type_id"))==null?null:L.dirty)||((L=i.itemForm.get("type_id"))==null?null:L.touched)))),m(5),l("ngForOf",i.mLicenseTypes),m(3),l("ngIf",((N=i.itemForm.get("type_id"))==null?null:N.invalid)&&(((N=i.itemForm.get("type_id"))==null?null:N.dirty)||((N=i.itemForm.get("type_id"))==null?null:N.touched))),m(4),l("ngIf",((ge=i.itemForm.get("type_id"))==null?null:ge.value)==5),m(12),l("ngIf",i.itemForm.get("commitment_declaration").invalid&&(i.itemForm.get("commitment_declaration").dirty||i.itemForm.get("commitment_declaration").touched)),m(9),l("disabled",i.itemForm.invalid)}},dependencies:[A,D,I,T,w,q,O,B,j,Y,Z,ee,V,we,X,$,G,H,W],encapsulation:2})}};var xe=o=>({"is-invalid":o});function Dt(o,a){o&1&&g(0,"app-progress")}function Rt(o,a){if(o&1&&(r(0,"option",26),e(1),n()),o&2){let t=a.$implicit;l("value",F(t.id)),m(),f(t.name)}}function qt(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ot(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,qt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("category_id"))==null||t.errors==null?null:t.errors.required)}}function Bt(o,a){if(o&1&&(r(0,"option",26),e(1),n()),o&2){let t=a.$implicit;l("value",F(t)),m(),f(t)}}function jt(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Vt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,jt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("financial_year"))==null||t.errors==null?null:t.errors.required)}}function $t(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Gt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,$t,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("expiry_date").errors)==null?null:t.required)}}function Yt(o,a){if(o&1&&(r(0,"option",26),e(1),n()),o&2){let t=a.$implicit;l("value",F(t.id)),m(),f(t.name)}}function Wt(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ht(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,Wt,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("type_id"))==null||t.errors==null?null:t.errors.required)}}function Ut(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function zt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                  `),d(2,Ut,2,0,"div",0),e(3,`
                `),n()),o&2){let t,i=c(2);m(2),l("ngIf",(t=i.itemForm.get("coffee_tasting_expert_certificate").errors)==null?null:t.required)}}function Jt(o,a){if(o&1){let t=K();r(0,"div",5),e(1,`
              `),r(2,"div",6),e(3,`
                `),r(4,"label",28),e(5,"Coffee Tasting Expert Certificate:"),n(),e(6,`
                `),r(7,"input",29),h("change",function(s){z(t);let p=c();return J(p.onCoffeeTastingExpertCertificateChange(s))}),n(),e(8,`
                `),d(9,zt,4,1,"div",11),e(10,`
              `),n(),e(11,`
            `),n()}if(o&2){let t=c();m(7),l("ngClass",v(2,xe,t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))),m(2),l("ngIf",t.itemForm.get("coffee_tasting_expert_certificate").invalid&&(t.itemForm.get("coffee_tasting_expert_certificate").dirty||t.itemForm.get("coffee_tasting_expert_certificate").touched))}}function Kt(o,a){o&1&&(r(0,"div"),e(1,"You must accept to proceed."),n())}function Qt(o,a){if(o&1&&(r(0,"div",27),e(1,`
                `),d(2,Kt,2,0,"div",0),e(3,`
              `),n()),o&2){let t,i=c();m(2),l("ngIf",(t=i.itemForm.get("commitment_declaration").errors)==null?null:t.requiredTrue)}}var Ae=class o{constructor(a,t,i,s,p,y){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=i;this.router=s;this.fb=p;this.route=y;this.mProgress=_(!1);this.item={};this.mFinancialYears=[];this.itemForm=this.fb.group({category_id:["",x.required],financial_year:["",x.required],expiry_date:["",x.required],type_id:["",x.required],coffee_tasting_expert_certificate:["",x.nullValidator],commitment_declaration:[!1,x.requiredTrue]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem(),this.loadFinancialYearsItems()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let t=new FormData;t.append("category_id",a.category_id),t.append("financial_year",a.financial_year),t.append("expiry_date",a.expiry_date),t.append("type_id",a.type_id),this.coffee_tasting_expert_certificate_file?t.append("coffee_tasting_expert_certificate",this.coffee_tasting_expert_certificate_file,this.coffee_tasting_expert_certificate_file.name):t.append("coffee_tasting_expert_certificate",""),t.append("commitment_declaration",a.commitment_declaration),t.append("_method","PUT"),this.mProgress.set(!0),this.mLicenseService.updateItem(this.id,t).subscribe({next:i=>{if(i){this.mToastrService.success(i.message);let s=i.data.payment.id;this.router.navigateByUrl("/payments/show/"+s),this.mProgress.set(!1)}},error:i=>{i.error.message&&this.mToastrService.warning(i.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mLicenseService.unpaginatedItems().subscribe({next:a=>{a&&(this.mLicenseCategories=a.data.license_categories,this.mLicenseTypes=a.data.license_types,this.mProgress.set(!1))},error:a=>{this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}loadFinancialYearsItems(){let a=new Date,t=a.getFullYear(),i=a.getMonth()>=6?t:t-1;for(let s=0;s<5;s++){let p=i-s;this.mFinancialYears.push(`${p}/${p+1}`)}this.itemForm.get("financial_year")?.valueChanges.pipe(Ce(this.itemForm.get("financial_year")?.value)).subscribe(s=>{if(s){let p=s.split("/")[1];this.itemForm.patchValue({expiry_date:`${p}-06-30`},{emitEvent:!1})}})}onCoffeeTastingExpertCertificateChange(a){if(a.target.value){let t=a.target.files[0];this.coffee_tasting_expert_certificate_file=t}}static{this.\u0275fac=function(t){return new(t||o)(u(b),u(P),u(C),u(Q),u(te),u(R))}}static{this.\u0275cmp=E({type:o,selectors:[["app-edit"]],standalone:!1,decls:112,vars:29,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","category_id",1,"col-form-label","required"],["formControlName","category_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"col-md-6"],["for","financial_year",1,"col-form-label","required"],["formControlName","financial_year","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","expiry_date",1,"col-form-label","required"],["formControlName","expiry_date","type","date","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["class","col-md-12",4,"ngIf"],[1,"form-check"],["type","checkbox","formControlName","commitment_declaration",1,"form-check-input",3,"ngModelChange","ngModel"],["for","commitment_declaration",1,"form-check-label"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button",1,"btn","btn-light"],["type","submit",1,"btn","btn-warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],["for","coffee_tasting_expert_certificate",1,"col-form-label","required"],["formControlName","coffee_tasting_expert_certificate","type","file",1,"form-control",3,"change","ngClass"]],template:function(t,i){if(t&1&&(d(0,Dt,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"form",3),h("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"div",6),e(16,`
                `),r(17,"label",7),e(18,"Application Category:"),n(),e(19,`
                `),r(20,"select",8),me("ngModelChange",function(p){return ae(i.item.category_id,p)||(i.item.category_id=p),p}),e(21,`
                  `),r(22,"option",9),e(23,"--- Select category ---"),n(),e(24,`
                  `),d(25,Rt,2,3,"option",10),e(26,`
                `),n(),e(27,`
                `),d(28,Ot,4,1,"div",11),e(29,`
              `),n(),e(30,`
            `),n(),e(31,`
            `),r(32,"div",12),e(33,`
              `),r(34,"div",6),e(35,`
                `),r(36,"label",13),e(37,"Year/Period:"),n(),e(38,`
                `),r(39,"select",14),me("ngModelChange",function(p){return ae(i.item.financial_year,p)||(i.item.financial_year=p),p}),e(40,`
                  `),r(41,"option",9),e(42,"--- Select year ---"),n(),e(43,`
                  `),d(44,Bt,2,3,"option",10),e(45,`
                `),n(),e(46,`
                `),d(47,Vt,4,1,"div",11),e(48,`
              `),n(),e(49,`
            `),n(),e(50,`
            `),r(51,"div",12),e(52,`
              `),r(53,"div",6),e(54,`
                `),r(55,"label",15),e(56,"Expiry Date:"),n(),e(57,`
                `),r(58,"input",16),me("ngModelChange",function(p){return ae(i.item.expiry_date,p)||(i.item.expiry_date=p),p}),n(),e(59,`
                `),d(60,Gt,4,1,"div",11),e(61,`
              `),n(),e(62,`
            `),n(),e(63,`
            `),r(64,"div",5),e(65,`
              `),r(66,"div",6),e(67,`
                `),r(68,"label",17),e(69,"License Type:"),n(),e(70,`
                `),r(71,"select",18),me("ngModelChange",function(p){return ae(i.item.type_id,p)||(i.item.type_id=p),p}),e(72,`
                  `),r(73,"option",9),e(74,"--- Select type ---"),n(),e(75,`
                  `),d(76,Yt,2,3,"option",10),e(77,`
                `),n(),e(78,`
                `),d(79,Ht,4,1,"div",11),e(80,`
              `),n(),e(81,`
            `),n(),e(82,`
             `),d(83,Jt,12,4,"div",19),e(84,`
            `),r(85,"div",5),e(86,`
              `),r(87,"div",20),e(88,`
                `),r(89,"input",21),me("ngModelChange",function(p){return ae(i.item.commitment_declaration,p)||(i.item.commitment_declaration=p),p}),n(),e(90,`
                `),r(91,"label",22),e(92,`
                  By checking this, the applicant certifies that the information provided is accurate and agrees to comply with all applicable licence terms and conditions.
                `),n(),e(93,`
              `),n(),e(94,`
              `),d(95,Qt,4,1,"div",11),e(96,`
            `),n(),e(97,`
          `),n(),e(98,`
          `),r(99,"div",23),e(100,`
            `),r(101,"button",24),e(102,"Cancel"),n(),e(103,`
            `),r(104,"button",25),e(105,"Submit"),n(),e(106,`
          `),n(),e(107,`
        `),n(),e(108,`

      `),n(),e(109,`
    `),n(),e(110,`
  `),n(),e(111,`
`),n()),t&2){let s,p,y,S,L,N,ge;l("ngIf",i.mProgress()),m(9),l("formGroup",i.itemForm),m(11),oe("ngModel",i.item.category_id),l("ngClass",v(21,xe,((s=i.itemForm.get("category_id"))==null?null:s.invalid)&&(((s=i.itemForm.get("category_id"))==null?null:s.dirty)||((s=i.itemForm.get("category_id"))==null?null:s.touched)))),m(5),l("ngForOf",i.mLicenseCategories),m(3),l("ngIf",((p=i.itemForm.get("category_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("category_id"))==null?null:p.dirty)||((p=i.itemForm.get("category_id"))==null?null:p.touched))),m(11),oe("ngModel",i.item.financial_year),l("ngClass",v(23,xe,((y=i.itemForm.get("financial_year"))==null?null:y.invalid)&&(((y=i.itemForm.get("financial_year"))==null?null:y.dirty)||((y=i.itemForm.get("financial_year"))==null?null:y.touched)))),m(5),l("ngForOf",i.mFinancialYears),m(3),l("ngIf",((S=i.itemForm.get("financial_year"))==null?null:S.invalid)&&(((S=i.itemForm.get("financial_year"))==null?null:S.dirty)||((S=i.itemForm.get("financial_year"))==null?null:S.touched))),m(11),oe("ngModel",i.item.expiry_date),l("ngClass",v(25,xe,i.itemForm.get("expiry_date").invalid&&(i.itemForm.get("expiry_date").dirty||i.itemForm.get("expiry_date").touched))),m(2),l("ngIf",i.itemForm.get("expiry_date").invalid&&(i.itemForm.get("expiry_date").dirty||i.itemForm.get("expiry_date").touched)),m(11),oe("ngModel",i.item.type_id),l("ngClass",v(27,xe,((L=i.itemForm.get("type_id"))==null?null:L.invalid)&&(((L=i.itemForm.get("type_id"))==null?null:L.dirty)||((L=i.itemForm.get("type_id"))==null?null:L.touched)))),m(5),l("ngForOf",i.mLicenseTypes),m(3),l("ngIf",((N=i.itemForm.get("type_id"))==null?null:N.invalid)&&(((N=i.itemForm.get("type_id"))==null?null:N.dirty)||((N=i.itemForm.get("type_id"))==null?null:N.touched))),m(4),l("ngIf",((ge=i.itemForm.get("type_id"))==null?null:ge.value)==5),m(6),oe("ngModel",i.item.commitment_declaration),m(6),l("ngIf",i.itemForm.get("commitment_declaration").invalid&&(i.itemForm.get("commitment_declaration").dirty||i.itemForm.get("commitment_declaration").touched)),m(9),l("disabled",i.itemForm.invalid)}},dependencies:[A,D,I,T,w,q,O,B,j,Y,Z,ee,V,we,X,$,G,H,W],encapsulation:2})}};var ct=gt(vt());var Xt=o=>({"is-invalid":o}),$e=()=>[1],Zt=o=>["/licenses/process",o],ei=(o,a,t,i,s,p,y)=>({"bg-secondary":o,"bg-warning":a,"bg-dark":t,"bg-info":i,"bg-success":s,"bg-primary":p,"bg-danger":y}),ti=(o,a)=>({active:o,disabled:a});function ii(o,a){o&1&&g(0,"app-progress")}function ni(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function ri(o,a){if(o&1&&(r(0,"div",16),e(1,`
                  `),d(2,ni,2,0,"div",1),e(3,`
                `),n()),o&2){let t=c();m(2),l("ngIf",t.search_term.errors==null?null:t.search_term.errors.required)}}function oi(o,a){if(o&1){let t=K();r(0,"span"),e(1,`
                    `),r(2,"button",31),h("click",function(){z(t);let s=c().$implicit,p=c(2);return J(p.onDownloadPermit(s))}),e(3,"Download"),n(),e(4,`
                  `),n()}}function ai(o,a){if(o&1&&(r(0,"button",32),e(1," "),g(2,"i",33),n()),o&2){let t=c().$implicit;l("routerLink",ie("/licenses/edit/",t.id))}}function mi(o,a){if(o&1){let t=K();r(0,"button",34),h("click",function(){z(t);let s=c().$implicit,p=c(2);return J(p.onDelete(s))}),g(1,"i",35),n()}}function li(o,a){if(o&1&&(r(0,"tr"),e(1,`
                `),r(2,"td"),e(3),n(),e(4,`
                `),r(5,"td")(6,"a",22),e(7),n()(),e(8,`
                `),r(9,"td"),e(10),n(),e(11,`
                `),r(12,"td")(13,"span",23),e(14),n()(),e(15,`
                `),r(16,"td"),e(17),n(),e(18,`
                `),r(19,"td")(20,"span",24),e(21),n()(),e(22,`
                `),r(23,"td")(24,"span",25),e(25),n()(),e(26,`
                `),r(27,"td"),e(28,`
                  `),d(29,oi,5,0,"span",1),e(30,`
                `),n(),e(31,`
                `),r(32,"td"),e(33),le(34,"date"),n(),e(35,`
                `),r(36,"td"),e(37,`
                  `),r(38,"div",26),e(39,`
                    `),r(40,"button",27),g(41,"i",28),n(),e(42,`
                    `),d(43,ai,3,2,"button",29),e(44,`
                    `),d(45,mi,2,0,"button",30),e(46,`
                  `),n(),e(47,`
                `),n(),e(48,`
              `),n()),o&2){let t=a.$implicit,i=a.index,s=c(2);m(3),Ue("",s.mPageFrom+i,"."),m(3),l("routerLink",ie("/licenses/show/",t.id)),m(),f(t.application_number),m(3),f(t.user==null?null:t.user.name),m(3),l("ngClass",t.category_id===1?"bg-success":"bg-warning"),m(),f(t.category==null?null:t.category.name),m(3),f(t.type==null?null:t.type.name),m(3),l("routerLink",s.mAppContextService.hasTypes(M(23,$e))?v(24,Zt,t.id):null)("ngClass",Ee(26,ei,t.status_id==1,t.status_id==2,t.status_id==3,t.status_id==4,t.status_id==5,t.status_id==6,t.status_id==7)),m(),f(t==null||t.status==null?null:t.status.name),m(3),l("routerLink",ie("/payments/show/",t.payment_id))("ngClass",(t.payment==null?null:t.payment.status_id)===1?"chip-danger":"chip-success"),m(),f(t.payment==null?null:t.payment.status.name),m(4),l("ngIf",t.status_id==5||t.status_id===7),m(4),f(se(34,21,t.created_at)),m(7),l("routerLink",ie("/licenses/show/",t.id)),m(3),l("ngIf",s.mAppContextService.hasRoles(M(34,$e))||t.status_id==1||t.status_id==2),m(2),l("ngIf",s.mAppContextService.hasRoles(M(35,$e)))}}function si(o,a){if(o&1&&(r(0,"div",17),e(1,`
          `),r(2,"table",18),e(3,`
            `),r(4,"thead",19),e(5,`
              `),r(6,"tr"),e(7,`
                `),r(8,"th",20),e(9,"#"),n(),e(10,`
                `),r(11,"th",20),e(12,"Number"),n(),e(13,`
                `),r(14,"th",20),e(15,"Applicant"),n(),e(16,`
                `),r(17,"th",20),e(18,"Category"),n(),e(19,`
                `),r(20,"th",20),e(21,"Type"),n(),e(22,`
                `),r(23,"th",20),e(24,"Status"),n(),e(25,`
                `),r(26,"th",20),e(27,"Payment"),n(),e(28,`
                `),r(29,"th",20),e(30,"License"),n(),e(31,`
                `),r(32,"th",20),e(33,"Created"),n(),e(34,`
                `),r(35,"th",20),e(36,"Action"),n(),e(37,`
              `),n(),e(38,`
            `),n(),e(39,`
            `),r(40,"tbody"),e(41,`
              `),d(42,li,49,36,"tr",21),e(43,`
            `),n(),e(44,`
          `),n(),e(45,`
        `),n()),o&2){let t=c();m(42),l("ngForOf",t.mLicenses)}}function di(o,a){if(o&1){let t=K();r(0,"li",38),e(1,`
              `),r(2,"a",39),h("click",function(){let s=z(t).$implicit,p=c(2);return J(p.onChangePage(s.url))}),n(),e(3,`
            `),n()}if(o&2){let t=a.$implicit;l("ngClass",ze(2,ti,t.active,!t.url)),m(2),l("innerHTML",t.label,Ye)}}function pi(o,a){if(o&1&&(r(0,"div"),e(1,`
          `),r(2,"ul",36),e(3,`
            `),d(4,di,4,5,"li",37),e(5,`
          `),n(),e(6,`
        `),n()),o&2){let t=c();m(4),l("ngForOf",t.links)}}function ci(o,a){o&1&&(e(0,`
          `),r(1,"p",40),e(2,"No items"),n(),e(3,`
        `))}var ke=class o{constructor(a,t,i){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=i;this.mLicenses={};this.links=[];this.mProgress=_(!1)}ngOnInit(){this.index(),this.search_term=new dt("",x.required),this.itemForm=new st({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mLicenseService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mLicenses=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mLicenseService.paginateItems(a).subscribe({next:t=>{t&&(this.mPageFrom=t.from,this.mLicenses=t.data,this.links=t.links,this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDelete(a){ct.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.application_number+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(i=>{i.isConfirmed&&(this.mProgress.set(!0),this.mLicenseService.deleteItem(a).subscribe({next:s=>{s&&(this.mLicenses=this.mLicenses.filter(p=>p.id!==a.id),this.mToastrService.warning(s.message),this.mProgress.set(!1))},error:s=>{s.error.message&&this.mToastrService.warning(s.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mLicenseService.searchItems(a).subscribe({next:t=>{t&&(this.mLicenses=t.salutations,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mLicenseService.searchItems(a).subscribe({next:t=>{t&&(this.mLicenses=t.data,this.mToastrService.success(t.message),this.mProgress.set(!1))},error:t=>{t.error.message&&this.mToastrService.warning(t.error.message),this.mProgress.set(!1)}})}onDownloadPermit(a){this.mProgress.set(!0),this.mLicenseService.onDownloadPermit(a).subscribe({next:t=>{if(t){this.mToastrService.success(t.message);let s=t;var i=URL.createObjectURL(s);window.open(i,"_blank"),this.mProgress.set(!1)}},error:t=>{t.error.message&&this.mToastrService.error(t.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(b),u(P),u(C))}}static{this.\u0275cmp=E({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/licenses/create",1,"btn","btn-warning","btn-sm","text-light1"],["aria-hidden","true",1,"fa-solid","fa-plus-circle"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit",1,"btn","btn-success","btn-sm"],["aria-hidden","true",1,"fa-solid","fa-search"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"small","fw-bold",3,"routerLink"],[1,"badge",3,"ngClass"],[1,"badge","rounded-pill",3,"routerLink","ngClass"],[1,"chip","chip-clickable",3,"routerLink","ngClass"],[1,"text-nowrap"],[1,"btn","btn-outline-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-eye"],["class","btn btn-dark btn-sm me-1",3,"routerLink",4,"ngIf"],["class","btn btn-danger btn-sm",3,"click",4,"ngIf"],[1,"btn","btn-link","btn-sm",3,"click"],[1,"btn","btn-dark","btn-sm","me-1",3,"routerLink"],["aria-hidden","true",1,"fa-solid","fa-pencil-alt"],[1,"btn","btn-danger","btn-sm",3,"click"],["aria-hidden","true",1,"fa-solid","fa-trash"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(t,i){if(t&1&&(d(0,ii,1,0,"app-progress",1),r(1,"c-row"),e(2,`
  `),r(3,"c-col",2),e(4,`
    `),r(5,"c-card",3),e(6,`
      `),r(7,"c-card-header"),e(8,`
        `),r(9,"div",4),e(10,`
          `),r(11,"div",5),e(12,`
            `),r(13,"a",6),e(14,`
              `),g(15,"i",7),e(16,` Add
            `),n(),e(17,`
          `),n(),e(18,`
          `),r(19,"div"),e(20,`
            `),r(21,"form",8),h("ngSubmit",function(){return i.onSearch(i.itemForm.value)}),e(22,`
              `),r(23,"div",9),e(24,`
                `),g(25,"input",10),e(26,`
                `),r(27,"div",11),e(28,`
                  `),r(29,"button",12),e(30,`
                    `),g(31,"i",13),e(32,`
                  `),n(),e(33,`
                `),n(),e(34,`
                `),d(35,ri,4,1,"div",14),e(36,`
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
      `),r(42,"c-card-body"),e(43,`

        `),d(44,si,46,1,"div",15),e(45,`

        `),d(46,pi,7,1,"div",1),e(47,`

        `),d(48,ci,4,0,"ng-template",null,0,Je),e(50,`

      `),n(),e(51,`
    `),n(),e(52,`
  `),n(),e(53,`
`),n()),t&2){let s=He(49);l("ngIf",i.mProgress()),m(21),l("formGroup",i.itemForm),m(4),l("ngClass",v(7,Xt,i.search_term.invalid&&(i.search_term.dirty||i.search_term.touched))),m(10),l("ngIf",i.search_term.invalid&&(i.search_term.dirty||i.search_term.touched)),m(9),l("ngIf",i.mLicenses.length>0)("ngIfElse",s),m(2),l("ngIf",i.links)}},dependencies:[A,D,I,T,w,q,O,et,B,j,at,ot,Y,V,$,G,H,W,Fe],encapsulation:2})}};var ut=o=>({"is-invalid":o});function ui(o,a){o&1&&g(0,"app-progress")}function fi(o,a){if(o&1&&(r(0,"option",15),e(1),n()),o&2){let t=a.$implicit;l("value",F(t.id)),m(),f(t.alias)}}function _i(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function gi(o,a){if(o&1&&(r(0,"div",16),d(1,_i,2,0,"div",0),n()),o&2){let t,i=c();m(),l("ngIf",(t=i.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function vi(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function xi(o,a){if(o&1&&(r(0,"div",16),d(1,vi,2,0,"div",0),n()),o&2){let t,i=c();m(),l("ngIf",(t=i.itemForm.get("remarks").errors)==null?null:t.required)}}var Me=class o{constructor(a,t,i,s,p,y){this.mToastrService=a;this.mLicenseService=t;this.mAppContextService=i;this.router=s;this.fb=p;this.route=y;this.mProgress=_(!1);this.item={};this.mEditor=Pe;this.itemForm=this.fb.group({status_id:["",x.required],remarks:["",x.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t=Se(ye({},a),{id:this.id});this.mProgress=_(!0),this.mLicenseService.reviewApplicationItem(t).subscribe({next:i=>{i.status==="success"&&(this.mToastrService.success(i.message),this.router.navigateByUrl("/licenses"),this.mProgress=_(!1))},error:i=>{i.error.message&&this.mToastrService.error(i.error.message),this.mProgress=_(!1)}})}getNextPreviousStatus(){this.mProgress=_(!0),this.mLicenseService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(P),u(b),u(C),u(Q),u(te),u(R))}}static{this.\u0275cmp=E({type:o,selectors:[["app-review"]],standalone:!1,decls:24,vars:12,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(t,i){if(t&1&&(d(0,ui,1,0,"app-progress",0),r(1,"div")(2,"form",1),h("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),r(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),n(),r(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),n(),d(11,fi,2,3,"option",8),n(),d(12,gi,2,1,"div",9),n()(),r(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),n(),g(17,"textarea",11),d(18,xi,2,1,"div",9),n()()(),r(19,"div",12)(20,"button",13),e(21,"Cancel"),n(),r(22,"button",14),e(23,"Submit"),n()()()()),t&2){let s,p;l("ngIf",i.mProgress()),m(2),l("formGroup",i.itemForm),m(6),l("ngClass",v(8,ut,((s=i.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=i.itemForm.get("status_id"))==null?null:s.dirty)||((s=i.itemForm.get("status_id"))==null?null:s.touched)))),m(3),l("ngForOf",i.mNextPreviousStatuses),m(),l("ngIf",((p=i.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("status_id"))==null?null:p.dirty)||((p=i.itemForm.get("status_id"))==null?null:p.touched))),m(5),l("ngClass",v(10,ut,i.itemForm.get("remarks").invalid&&(i.itemForm.get("remarks").dirty||i.itemForm.get("remarks").touched))),m(),l("ngIf",i.itemForm.get("remarks").invalid&&(i.itemForm.get("remarks").dirty||i.itemForm.get("remarks").touched)),m(4),l("disabled",i.itemForm.invalid)}},dependencies:[A,D,I,T,w,Te,Y,Z,ee,V,X,$,G,H,W],encapsulation:2})}};var De=o=>({"is-invalid":o});function Si(o,a){o&1&&g(0,"app-progress")}function Ci(o,a){if(o&1&&(r(0,"option",16),e(1),n()),o&2){let t=a.$implicit;l("value",F(t.id)),m(),f(t.alias)}}function bi(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function hi(o,a){if(o&1&&(r(0,"div",17),d(1,bi,2,0,"div",0),n()),o&2){let t,i=c();m(),l("ngIf",(t=i.itemForm.get("status_id"))==null||t.errors==null?null:t.errors.required)}}function Ei(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Fi(o,a){if(o&1&&(r(0,"div",17),d(1,Ei,2,0,"div",0),n()),o&2){let t,i=c();m(),l("ngIf",(t=i.itemForm.get("remarks").errors)==null?null:t.required)}}function Ii(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Ti(o,a){if(o&1&&(r(0,"div",17),d(1,Ii,2,0,"div",0),n()),o&2){let t,i=c(2);m(),l("ngIf",(t=i.itemForm.get("date_of_issue"))==null||t.errors==null?null:t.errors.required)}}function Pi(o,a){if(o&1&&(r(0,"div",18)(1,"div",4)(2,"label",19),e(3,"Date of Issue:"),n(),g(4,"input",20),d(5,Ti,2,1,"div",9),n()()),o&2){let t,i,s=c();m(4),l("ngClass",v(2,De,((t=s.itemForm.get("date_of_issue"))==null?null:t.invalid)&&(((t=s.itemForm.get("date_of_issue"))==null?null:t.dirty)||((t=s.itemForm.get("date_of_issue"))==null?null:t.touched)))),m(),l("ngIf",((i=s.itemForm.get("date_of_issue"))==null?null:i.invalid)&&(((i=s.itemForm.get("date_of_issue"))==null?null:i.dirty)||((i=s.itemForm.get("date_of_issue"))==null?null:i.touched)))}}function wi(o,a){o&1&&(r(0,"div"),e(1,"This field is required."),n())}function Li(o,a){if(o&1&&(r(0,"div",17),d(1,wi,2,0,"div",0),n()),o&2){let t,i=c(2);m(),l("ngIf",(t=i.itemForm.get("effective_date"))==null||t.errors==null?null:t.errors.required)}}function Ni(o,a){if(o&1&&(r(0,"div",18)(1,"div",4)(2,"label",21),e(3,"Effective Date:"),n(),g(4,"input",22),d(5,Li,2,1,"div",9),n()()),o&2){let t,i,s=c();m(4),l("ngClass",v(2,De,((t=s.itemForm.get("effective_date"))==null?null:t.invalid)&&(((t=s.itemForm.get("effective_date"))==null?null:t.dirty)||((t=s.itemForm.get("effective_date"))==null?null:t.touched)))),m(),l("ngIf",((i=s.itemForm.get("effective_date"))==null?null:i.invalid)&&(((i=s.itemForm.get("effective_date"))==null?null:i.dirty)||((i=s.itemForm.get("effective_date"))==null?null:i.touched)))}}var Re=class o{constructor(a,t,i,s,p,y){this.mToastrService=a;this.mLicenseService=t;this.mAppContextService=i;this.router=s;this.fb=p;this.route=y;this.mProgress=_(!1);this.item={};this.mEditor=Pe;this.itemForm=this.fb.group({status_id:["",x.required],date_of_issue:["",x.nullValidator],effective_date:["",x.nullValidator],remarks:["",x.nullValidator]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=_(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}onSubmit(a){let t=Se(ye({},a),{id:this.id});this.mProgress=_(!0),this.mLicenseService.approvalApplicationItem(t).subscribe({next:i=>{i.status==="success"&&(this.mToastrService.success(i.message),this.router.navigateByUrl("/licenses"),this.mProgress=_(!1))},error:i=>{i.error.message&&this.mToastrService.error(i.error.message),this.mProgress=_(!1)}})}getNextPreviousStatus(){this.mProgress=_(!0),this.mLicenseService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=_(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=_(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(P),u(b),u(C),u(Q),u(te),u(R))}}static{this.\u0275cmp=E({type:o,selectors:[["app-approve"]],standalone:!1,decls:26,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control",3,"ngClass"],["class","col-md-6",4,"ngIf"],[1,"mt-3","text-end"],["routerLink","/licenses","type","button","cButton","","color","light",1,"me-2"],["type","submit","cButton","","color","warning",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"col-md-6"],["for","date_of_issue",1,"col-form-label","required"],["formControlName","date_of_issue","type","date",1,"form-control",3,"ngClass"],["for","effective_date",1,"col-form-label","required"],["formControlName","effective_date","type","date",1,"form-control",3,"ngClass"]],template:function(t,i){if(t&1&&(d(0,Si,1,0,"app-progress",0),r(1,"div")(2,"form",1),h("ngSubmit",function(){return i.onSubmit(i.itemForm.value)}),r(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),n(),r(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),n(),d(11,Ci,2,3,"option",8),n(),d(12,hi,2,1,"div",9),n()(),r(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),n(),g(17,"textarea",11),d(18,Fi,2,1,"div",9),n()(),d(19,Pi,6,4,"div",12)(20,Ni,6,4,"div",12),n(),r(21,"div",13)(22,"button",14),e(23,"Cancel"),n(),r(24,"button",15),e(25,"Submit"),n()()()()),t&2){let s,p,y,S;l("ngIf",i.mProgress()),m(2),l("formGroup",i.itemForm),m(6),l("ngClass",v(10,De,((s=i.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=i.itemForm.get("status_id"))==null?null:s.dirty)||((s=i.itemForm.get("status_id"))==null?null:s.touched)))),m(3),l("ngForOf",i.mNextPreviousStatuses),m(),l("ngIf",((p=i.itemForm.get("status_id"))==null?null:p.invalid)&&(((p=i.itemForm.get("status_id"))==null?null:p.dirty)||((p=i.itemForm.get("status_id"))==null?null:p.touched))),m(5),l("ngClass",v(12,De,i.itemForm.get("remarks").invalid&&(i.itemForm.get("remarks").dirty||i.itemForm.get("remarks").touched))),m(),l("ngIf",i.itemForm.get("remarks").invalid&&(i.itemForm.get("remarks").dirty||i.itemForm.get("remarks").touched)),m(),l("ngIf",((y=i.itemForm.get("status_id"))==null?null:y.value)==5),m(),l("ngIf",((S=i.itemForm.get("status_id"))==null?null:S.value)==5),m(4),l("disabled",i.itemForm.invalid)}},dependencies:[A,D,I,T,w,Te,Y,Z,ee,V,X,$,G,H,W],encapsulation:2})}};var ft=()=>[1],ki=()=>[2],Mi=()=>[5,7];function Di(o,a){o&1&&g(0,"app-progress")}function Ri(o,a){if(o&1&&(r(0,"div",12),e(1,`
                `),r(2,"a",13),e(3),n(),e(4,`
              `),n()),o&2){let t=c();m(2),l("routerLink",ie("/licenses/show/",t.item.id)),m(),f(t.item.application_number)}}function qi(o,a){if(o&1&&(r(0,"div",12),e(1),n()),o&2){let t=c();m(),f(t.item.user==null?null:t.item.user.name)}}function Oi(o,a){o&1&&(r(0,"div"),e(1,`
                  `),g(2,"app-review"),e(3,`
                `),n())}function Bi(o,a){o&1&&(r(0,"div"),e(1,`
                  `),g(2,"app-approve"),e(3,`
                `),n())}var qe=class o{constructor(a,t,i,s){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=i;this.route=s;this.mProgress=_(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(b),u(P),u(C),u(R))}}static{this.\u0275cmp=E({type:o,selectors:[["app-process"]],standalone:!1,decls:56,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"mb-3"],["for","name"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"fw-bold","text-muted"],[1,"text-muted"],[1,"text-sm",3,"routerLink"]],template:function(t,i){t&1&&(d(0,Di,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"div",3),e(10,`
          `),r(11,"div",4),e(12,`
            `),r(13,"div",5),e(14,`
              `),r(15,"label",6),e(16,"Number:"),n(),e(17,`
              `),d(18,Ri,5,3,"div",7),e(19,`
            `),n(),e(20,`
          `),n(),e(21,`
          `),r(22,"div",4),e(23,`
            `),r(24,"div",5),e(25,`
              `),r(26,"label",6),e(27,"Applicant:"),n(),e(28,`
              `),d(29,qi,2,1,"div",7),e(30,`
            `),n(),e(31,`
          `),n(),e(32,`
          `),r(33,"div",8),e(34,`
            `),r(35,"div",5),e(36,`

              `),r(37,"fieldset",9),e(38,`
                `),r(39,"legend",10)(40,"h6",11),e(41,"Process"),n()(),e(42,`
                `),e(43,`
                `),d(44,Oi,4,0,"div",0),e(45,`
                `),e(46,`
                `),d(47,Bi,4,0,"div",0),e(48,`
              `),n(),e(49,`

            `),n(),e(50,`
          `),n(),e(51,`
        `),n(),e(52,`

      `),n(),e(53,`
    `),n(),e(54,`
  `),n(),e(55,`
`),n()),t&2&&(l("ngIf",i.mProgress()),m(18),l("ngIf",i.item.application_number),m(11),l("ngIf",i.item.user),m(15),l("ngIf",(i.item==null?null:i.item.status_id)===3&&(i.mAppContextService.hasRoles(M(5,ft))||i.mAppContextService.hasRoles(M(6,ki)))),m(3),l("ngIf",(i.item==null?null:i.item.status_id)===4&&(i.mAppContextService.hasRoles(M(7,ft))||i.mAppContextService.hasRoles(M(8,Mi)))))},dependencies:[I,T,w,q,O,B,j,Me,Re],encapsulation:2})}};var ji=()=>[1],Vi=o=>["/licenses/process",o],$i=(o,a,t,i,s,p,y)=>({"bg-secondary":o,"bg-warning":a,"bg-dark":t,"bg-info":i,"bg-success":s,"bg-primary":p,"bg-danger":y});function Gi(o,a){o&1&&g(0,"app-progress")}function Yi(o,a){if(o&1&&(r(0,"div",20),e(1),n()),o&2){let t=c();m(),f(t.item.application_number)}}function Wi(o,a){if(o&1&&(r(0,"div",20),e(1,`
                  `),r(2,"span",21),e(3),n(),e(4,`
                `),n()),o&2){let t=c();m(2),l("ngClass",Ee(2,$i,t.item.status_id==1,t.item.status_id==2,t.item.status_id==3,t.item.status_id==4,t.item.status_id==5,t.item.status_id==6,t.item.status_id==7)),m(),f(t.item==null||t.item.status==null?null:t.item.status.name)}}function Hi(o,a){if(o&1&&(r(0,"div",20),e(1),n()),o&2){let t=c();m(),f(t.item.category==null?null:t.item.category.name)}}function Ui(o,a){if(o&1&&(r(0,"div",20),e(1),n()),o&2){let t=c();m(),f(t.item.financial_year)}}function zi(o,a){if(o&1&&(r(0,"div",20),e(1),le(2,"date"),n()),o&2){let t=c();m(),f(se(2,1,t.item.expiry_date))}}function Ji(o,a){if(o&1&&(r(0,"div",20),e(1),n()),o&2){let t=c();m(),f(t.item.type==null?null:t.item.type.name)}}function Ki(o,a){if(o&1&&(r(0,"div",22),e(1,`
                  `),r(2,"a",23),e(3,"File"),n(),e(4,`
                `),n()),o&2){let t=c();m(2),l("href",F(t.item.coffee_tasting_expert_certificate_url),We)}}function Qi(o,a){if(o&1&&(r(0,"div",20),e(1),le(2,"date"),n()),o&2){let t=c();m(),f(se(2,1,t.item.effective_date))}}function Xi(o,a){if(o&1&&(r(0,"div",20),e(1),le(2,"date"),n()),o&2){let t=c();m(),f(se(2,1,t.item.date_of_gazettement_intent))}}function Zi(o,a){if(o&1&&(r(0,"div",20),e(1,`
                  `),r(2,"span",21),e(3),n(),e(4,`
                `),n()),o&2){let t=c();m(2),l("ngClass",(t.item.payment==null?null:t.item.payment.status_id)===1?"bg-danger":"bg-success"),m(),f(t.item.payment==null?null:t.item.payment.status.name)}}var Oe=class o{constructor(a,t,i,s){this.mLicenseService=a;this.mToastrService=t;this.mAppContextService=i;this.route=s;this.mProgress=_(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mLicenseService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.warning(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(t){return new(t||o)(u(b),u(P),u(C),u(R))}}static{this.\u0275cmp=E({type:o,selectors:[["app-show"]],standalone:!1,decls:137,vars:15,consts:[[4,"ngIf"],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-6"],[1,"form-group","mb-3"],["for","application_number"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],["for","type_id"],["for","financial_year",1,"col-form-label","required1"],["for","expiry_date"],["for","warehouse_receipt_number"],["class","text-muted1",4,"ngIf"],["for","coffee_species_id"],["for","coffee_form_id"],["for","payment"],[1,"mt-3","text-end"],["routerLink","/licenses",1,"btn","btn-light"],[1,"btn","btn-warning",3,"routerLink"],[1,"text-muted"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-muted1"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(t,i){t&1&&(d(0,Gi,1,0,"app-progress",0),r(1,"c-row"),e(2,`
  `),r(3,"c-col",1),e(4,`
    `),r(5,"c-card",2),e(6,`
      `),r(7,"c-card-body"),e(8,`

        `),r(9,"div"),e(10,`
          `),r(11,"div",3),e(12,`
            `),r(13,"div",4),e(14,`
              `),r(15,"div",5),e(16,`
                `),r(17,"label",6),e(18,"Application Number:"),n(),e(19,`
                `),d(20,Yi,2,1,"div",7),e(21,`
              `),n(),e(22,`
            `),n(),e(23,`
            `),r(24,"div",4),e(25,`
              `),r(26,"div",5),e(27,`
                `),r(28,"label",6),e(29,"Status:"),n(),e(30,`
                `),d(31,Wi,5,10,"div",7),e(32,`
              `),n(),e(33,`
            `),n(),e(34,`
            `),r(35,"div",8),e(36,`
              `),r(37,"div",5),e(38,`
                `),r(39,"label",9),e(40,"License Category:"),n(),e(41,`
                `),d(42,Hi,2,1,"div",7),e(43,`
              `),n(),e(44,`
            `),n(),e(45,`
            `),r(46,"div",4),e(47,`
              `),r(48,"div",5),e(49,`
                `),r(50,"label",10),e(51,"Year/Period:"),n(),e(52,`
                `),d(53,Ui,2,1,"div",7),e(54,`
              `),n(),e(55,`
            `),n(),e(56,`
            `),r(57,"div",4),e(58,`
              `),r(59,"div",5),e(60,`
                `),r(61,"label",11),e(62,"Expiry Date:"),n(),e(63,`
                `),d(64,zi,3,3,"div",7),e(65,`
              `),n(),e(66,`
            `),n(),e(67,`
            `),r(68,"div",4),e(69,`
              `),r(70,"div",5),e(71,`
                `),r(72,"label",9),e(73,"License Type:"),n(),e(74,`
                `),d(75,Ji,2,1,"div",7),e(76,`
              `),n(),e(77,`
            `),n(),e(78,`
            `),r(79,"div",4),e(80,`
              `),r(81,"div",5),e(82,`
                `),r(83,"label",12),e(84,"Coffee Tasting Expert Certificate:"),n(),e(85,`
                `),d(86,Ki,5,2,"div",13),e(87,`
              `),n(),e(88,`
            `),n(),e(89,`
            `),r(90,"div",4),e(91,`
              `),r(92,"div",5),e(93,`
                `),r(94,"label",14),e(95,"Effective Date:"),n(),e(96,`
                `),d(97,Qi,3,3,"div",7),e(98,`
              `),n(),e(99,`
            `),n(),e(100,`
            `),r(101,"div",4),e(102,`
              `),r(103,"div",5),e(104,`
                `),r(105,"label",15),e(106,"Date of Gazettement Intent:"),n(),e(107,`
                `),d(108,Xi,3,3,"div",7),e(109,`
              `),n(),e(110,`
            `),n(),e(111,`
            `),r(112,"div",4),e(113,`
              `),r(114,"div",5),e(115,`
                `),r(116,"label",16),e(117,"Payment:"),n(),e(118,`
                `),d(119,Zi,5,2,"div",7),e(120,`
              `),n(),e(121,`
            `),n(),e(122,`
          `),n(),e(123,`
          `),r(124,"div",17),e(125,`
            `),r(126,"button",18),e(127,"Cancel"),n(),e(128,`
            `),r(129,"button",19),e(130,"Process"),n(),e(131,`
          `),n(),e(132,`
        `),n(),e(133,`

      `),n(),e(134,`
    `),n(),e(135,`
  `),n(),e(136,`
`),n()),t&2&&(l("ngIf",i.mProgress()),m(20),l("ngIf",i.item.application_number),m(11),l("ngIf",i.item.application_number),m(11),l("ngIf",i.item.category),m(11),l("ngIf",i.item.financial_year),m(11),l("ngIf",i.item.expiry_date),m(11),l("ngIf",i.item.type),m(11),l("ngIf",i.item.coffee_tasting_expert_certificate),m(11),l("ngIf",i.item.effective_date),m(11),l("ngIf",i.item.date_of_gazettement_intent),m(11),l("ngIf",i.item.payment),m(10),l("routerLink",i.mAppContextService.hasTypes(M(12,ji))?v(13,Vi,i.item.id):null))},dependencies:[A,I,T,w,q,O,B,j,Fe],encapsulation:2})}};var en=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:ke,data:{title:"Licenses"}},{path:"create",component:Le,data:{title:"Licenses / Create"}},{path:"edit/:id",component:Ae,data:{title:"Licenses / Edit"}},{path:"show/:id",component:Oe,data:{title:"Licenses / Show"}},{path:"process/:id",component:qe,data:{title:"Licenses / Process"}}],Be=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=he({type:o})}static{this.\u0275inj=be({imports:[Ie,Ve.forChild(en),Ve]})}};var _t=class o{static{this.\u0275fac=function(t){return new(t||o)}}static{this.\u0275mod=he({type:o})}static{this.\u0275inj=be({imports:[Ie,Be,lt,Ze,tt,it,nt,rt,mt,pt,Xe]})}};export{_t as LicenseModule};
