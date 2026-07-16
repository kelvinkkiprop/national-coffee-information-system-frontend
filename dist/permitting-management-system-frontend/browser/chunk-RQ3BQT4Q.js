import{a as ee,b as te}from"./chunk-SJG5BJVG.js";import{a as h,c as Y,e as Z}from"./chunk-FHELIIU2.js";import{Ba as c,Ca as t,Da as n,Db as $,Ea as x,Eb as G,Fc as U,Gc as q,Hc as z,Ib as w,Ic as J,L as N,M as f,Na as E,Nb as P,O as F,Pa as b,R as v,Ra as p,S as u,T as _,Tc as K,U as S,Uc as Q,Wb as H,Wc as W,Ya as O,_ as j,ab as e,bb as I,dc as V,ha as d,oa as g,pa as R,pc as A,pd as X,qa as C,qc as B,sc as L,ta as a,ub as y}from"./chunk-RYSGXS5Z.js";var D=class i{constructor(m,o){this.mAppContextService=m;this.http=o}allItems(){let m=`${h.base_url}/downloads`;return this.http.get(m,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(o){return new(o||i)(F(Y),F(P))}}static{this.\u0275prov=N({token:i,factory:i.\u0275fac,providedIn:"root"})}};function oe(i,m){i&1&&x(0,"app-progress")}function me(i,m){if(i&1){let o=E();t(0,"div",9),e(1,`
                `),t(2,"div",10),e(3,`
                  `),t(4,"div",11),e(5,`
                    `),t(6,"div",12),_(),x(7,"svg",13),n(),e(8,`
                    `),S(),t(9,"div",14),e(10),n(),e(11,`
                    `),t(12,"div"),e(13,`
                      `),t(14,"button",15),b("click",function(){let r=v(o).$implicit,s=p(2);return u(s.onDownload(r.type_id,r.filename))}),e(15,"View"),n(),e(16,`
                    `),n(),e(17,`
                  `),n(),e(18,`
                `),n(),e(19,`
              `),n()}if(i&2){let o=m.$implicit;d(10),I(o.name)}}function re(i,m){if(i&1&&(t(0,"div"),e(1,`
            `),t(2,"div",7),e(3,`
              `),a(4,me,20,1,"div",8),e(5,`
            `),n(),e(6,`
          `),n()),i&2){let o=p();d(4),c("ngForOf",o.mDevelopmentCodes)}}function ae(i,m){i&1&&(e(0,`
              `),t(1,"p",16),e(2,"No items"),n(),e(3,`
          `))}function le(i,m){if(i&1){let o=E();t(0,"div",9),e(1,`
                `),t(2,"div",10),e(3,`
                  `),t(4,"div",11),e(5,`
                    `),t(6,"div",12),_(),x(7,"svg",17),n(),e(8,`
                    `),S(),t(9,"div",14),e(10),n(),e(11,`
                    `),t(12,"div"),e(13,`
                      `),t(14,"button",18),b("click",function(){let r=v(o).$implicit,s=p(2);return u(s.onDownload(r.type_id,r.filename))}),e(15,"Show"),n(),e(16,`
                    `),n(),e(17,`
                  `),n(),e(18,`
                `),n(),e(19,`
              `),n()}if(i&2){let o=m.$implicit;d(10),I(o.name)}}function de(i,m){if(i&1&&(t(0,"div"),e(1,`
            `),t(2,"div",7),e(3,`
              `),a(4,le,20,1,"div",8),e(5,`
            `),n(),e(6,`
          `),n()),i&2){let o=p();d(4),c("ngForOf",o.mDevelopmentGuidelines)}}function ce(i,m){i&1&&(e(0,`
              `),t(1,"p",16),e(2,"No items"),n(),e(3,`
          `))}function pe(i,m){if(i&1){let o=E();t(0,"div",9),e(1,`
                `),t(2,"div",10),e(3,`
                  `),t(4,"div",11),e(5,`
                    `),t(6,"div",12),_(),x(7,"svg",19),n(),e(8,`
                    `),S(),t(9,"div",14),e(10),n(),e(11,`
                    `),t(12,"div"),e(13,`
                      `),t(14,"button",20),b("click",function(){let r=v(o).$implicit,s=p(2);return u(s.onDownload(r.type_id,r.filename))}),e(15,"Download"),n(),e(16,`
                    `),n(),e(17,`
                  `),n(),e(18,`
                `),n(),e(19,`
              `),n()}if(i&2){let o=m.$implicit;d(10),I(o.name)}}function se(i,m){if(i&1&&(t(0,"div"),e(1,`
            `),t(2,"div",7),e(3,`
              `),a(4,pe,20,1,"div",8),e(5,`
            `),n(),e(6,`
          `),n()),i&2){let o=p();d(4),c("ngForOf",o.mForms)}}function xe(i,m){i&1&&(e(0,`
              `),t(1,"p",16),e(2,"No items"),n(),e(3,`
          `))}var T=class i{constructor(m,o,l){this.mDownloadService=m;this.mToastrService=o;this.router=l;this.mDevelopmentCodes={};this.mDevelopmentGuidelines={};this.mForms={};this.mProgress=j(!1)}ngOnInit(){this.index()}index(){this.mProgress.set(!0),this.mDownloadService.allItems().subscribe({next:m=>{m&&(this.mDevelopmentCodes=m.data.development_codes,this.mDevelopmentGuidelines=m.data.development_guidelines,this.mForms=m.data.forms),this.mProgress.set(!1)},error:m=>{m.error.message&&this.mToastrService.error(m.error.message),this.mProgress.set(!1)}})}onDownload(m,o){let l=`${h.base_url}/downloads/${m}/${o}`;window.open(l,"_blank")}static{this.\u0275fac=function(o){return new(o||i)(g(D),g(Z),g(H))}}static{this.\u0275cmp=R({type:i,selectors:[["app-index"]],standalone:!1,decls:75,vars:7,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"card-title","text-muted"],[1,"mb-3"],[4,"ngIf","ngIfElse"],[1,"row"],["class","col-md-3 mb-3",4,"ngFor","ngForOf"],[1,"col-md-3","mb-3"],[1,"card","shadow","h-100"],[1,"card-body","text-center"],[1,"text-danger"],["cIcon","","name","cilFolder",1,"btn-icon","text-success"],[1,"text-bold"],["cButton","",1,"btn","btn-danger","btn-sm",3,"click"],[1,"p-5","text-center","text-muted"],["cIcon","","name","cilFolderOpen",1,"btn-icon","text-danger"],["cButton","",1,"btn","btn-success","btn-sm",3,"click"],["cIcon","","name","cilFile",1,"btn-icon","text-warning"],["cButton","",1,"btn","btn-link","btn-sm",3,"click"]],template:function(o,l){if(o&1&&(a(0,oe,1,0,"app-progress",1),t(1,"c-row"),e(2,`

  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4)(10,"strong"),e(11,"Development Codes"),n()(),e(12,`
      `),n(),e(13,`
      `),t(14,"c-card-body"),e(15,`
        `),t(16,"div",5),e(17,`
          `),a(18,re,7,1,"div",6),e(19,`
          `),a(20,ae,4,0,"ng-template",null,0,y),e(22,`
        `),n(),e(23,`
      `),n(),e(24,`
    `),n(),e(25,`
  `),n(),e(26,`

  `),t(27,"c-col",2),e(28,`
    `),t(29,"c-card",3),e(30,`
      `),t(31,"c-card-header"),e(32,`
        `),t(33,"div",4)(34,"strong"),e(35,"Development Guidelines"),n()(),e(36,`
      `),n(),e(37,`
      `),t(38,"c-card-body"),e(39,`
        `),t(40,"div",5),e(41,`
          `),a(42,de,7,1,"div",6),e(43,`
          `),a(44,ce,4,0,"ng-template",null,0,y),e(46,`
        `),n(),e(47,`
      `),n(),e(48,`
    `),n(),e(49,`
  `),n(),e(50,`

  `),t(51,"c-col",2),e(52,`
    `),t(53,"c-card",3),e(54,`
      `),t(55,"c-card-header"),e(56,`
        `),t(57,"div",4)(58,"strong"),e(59,"Forms"),n()(),e(60,`
      `),n(),e(61,`
      `),t(62,"c-card-body"),e(63,`
        `),t(64,"div",5),e(65,`
          `),a(66,se,7,1,"div",6),e(67,`
          `),a(68,xe,4,0,"ng-template",null,0,y),e(70,`
        `),n(),e(71,`
      `),n(),e(72,`
    `),n(),e(73,`
  `),n(),e(74,`


`),n()),o&2){let r=O(21);c("ngIf",l.mProgress()),d(18),c("ngIf",l.mDevelopmentCodes.length>0)("ngIfElse",r),d(24),c("ngIf",l.mDevelopmentGuidelines.length>0)("ngIfElse",r),d(24),c("ngIf",l.mForms.length>0)("ngIfElse",r)}},dependencies:[$,G,ee,U,q,z,K,Q,A],encapsulation:2})}};var fe=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:T,data:{title:"Downloads"}}],M=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=C({type:i})}static{this.\u0275inj=f({imports:[w,V.forChild(fe),V]})}};var ne=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=C({type:i})}static{this.\u0275inj=f({imports:[w,M,te,J,W,L,X,B]})}};export{ne as DownloadModule};
