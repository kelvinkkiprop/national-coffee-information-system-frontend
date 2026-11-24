import{a as Q}from"./chunk-BUWHFUAV.js";import{p as L}from"./chunk-WUV7VT53.js";import{a as z,c as J,e as K}from"./chunk-D2DXKTVY.js";import{$,Ea as U,G as w,Ja as q,M as N,R as O,X as P,Y as j,_ as V,d as R,e as D,ia as k,j as u,ka as A,la as B,na as G,ta as H}from"./chunk-M56LXQJ4.js";import{Cb as s,Db as t,Eb as n,Fb as C,Gc as I,Ob as b,Sa as d,Sb as h,T as x,Ub as c,aa as g,ab as p,ba as E,cc as F,fb as T,gb as f,hc as e,ic as y,lb as l,ma as M}from"./chunk-4BW25U23.js";import"./chunk-2WH2EVR6.js";function Y(i,r){if(i&1){let o=b();t(0,"div",12),e(1,`
                        `),t(2,"div",13),e(3,`
                          `),t(4,"div",14),e(5,`
                            `),t(6,"div",15),e(7,`
                              `),C(8,"i",16),e(9,`
                            `),n(),e(10,`
                            `),t(11,"div",17),e(12),n(),e(13,`
                            `),t(14,"div"),e(15,`
                              `),t(16,"button",18),h("click",function(){let m=g(o).$implicit,S=c(2);return E(S.onDownload(m.type_id,m.filename))}),e(17,"View"),n(),e(18,`
                            `),n(),e(19,`
                          `),n(),e(20,`
                        `),n(),e(21,`
                      `),n()}if(i&2){let o=r.$implicit;d(12),y(o.name)}}function Z(i,r){if(i&1&&(t(0,"div"),e(1,`
                    `),t(2,"div",3),e(3,`
                      `),l(4,Y,22,1,"div",11),e(5,`
                    `),n(),e(6,`
                  `),n()),i&2){let o=c();d(4),s("ngForOf",o.mForms)}}function ee(i,r){i&1&&(e(0,`
                    `),t(1,"p",19),e(2,"No items"),n(),e(3,`
                  `))}function te(i,r){if(i&1){let o=b();t(0,"div",12),e(1,`
                        `),t(2,"div",13),e(3,`
                          `),t(4,"div",14),e(5,`
                            `),t(6,"div",15),e(7,`
                              `),C(8,"i",20),e(9,`
                            `),n(),e(10,`
                            `),t(11,"div",17),e(12),n(),e(13,`
                            `),t(14,"div"),e(15,`
                              `),t(16,"button",18),h("click",function(){let m=g(o).$implicit,S=c(2);return E(S.onDownload(m.type_id,m.filename))}),e(17,"Show"),n(),e(18,`
                            `),n(),e(19,`
                          `),n(),e(20,`
                        `),n(),e(21,`
                      `),n()}if(i&2){let o=r.$implicit;d(12),y(o.name)}}function ne(i,r){if(i&1&&(t(0,"div"),e(1,`
                    `),t(2,"div",3),e(3,`
                      `),l(4,te,22,1,"div",11),e(5,`
                    `),n(),e(6,`
                  `),n()),i&2){let o=c();d(4),s("ngForOf",o.mOtherResources)}}function ie(i,r){i&1&&(e(0,`
                    `),t(1,"p",19),e(2,"No items"),n(),e(3,`
                  `))}var v=class i{constructor(r,o,a){this.mDashboardService=r;this.mToastrService=o;this.mAppContextService=a;this.mProgress=M(!1);this.mForms={};this.mOtherResources={}}ngOnInit(){this.index()}index(){this.mProgress.set(!0),this.mDashboardService.formsAndResourceItems().subscribe({next:r=>{r&&(this.mForms=r.data.forms,this.mOtherResources=r.data.other_resources),this.mProgress.set(!1)},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}onDownload(r,o){let a=`${z.base_url}/forms-and-resources/${r}/${o}`;window.open(a,"_blank")}static{this.\u0275fac=function(o){return new(o||i)(p(Q),p(K),p(J))}}static{this.\u0275cmp=T({type:i,selectors:[["app-index"]],standalone:!1,decls:65,vars:4,consts:[["noItemsTemplate",""],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-md-12"],[1,"card","mb-4"],[1,"card-header"],[1,"card-title","text-muted"],[1,"card-body"],[1,"mb-3"],[4,"ngIf","ngIfElse"],["class","col-md-4 mb-3",4,"ngFor","ngForOf"],[1,"col-md-4","mb-3"],[1,"card","shadow-sm","h-100"],[1,"card-body","text-center"],[1,"text-warning","fa-2x"],["aria-hidden","true",1,"fa-solid","fa-folder"],[1,"text-bold"],[1,"btn","btn-light","btn-sm",3,"click"],[1,"p-5","text-center","text-muted"],["aria-hidden","true",1,"fa-solid","fa-folder-open"]],template:function(o,a){if(o&1&&(t(0,"c-row"),e(1,`
  `),t(2,"c-col",1),e(3,`
    `),t(4,"c-card",2),e(5,`
      `),t(6,"c-card-header"),e(7,`
      `),n(),e(8,`
      `),t(9,"c-card-body"),e(10,`

        `),t(11,"div",3),e(12,`
          `),t(13,"div",4),e(14,`
            `),t(15,"div",5),e(16,`
              `),t(17,"div",6),e(18,`
                `),t(19,"div",7)(20,"strong"),e(21,"Forms"),n()(),e(22,`
              `),n(),e(23,`
              `),t(24,"div",8),e(25,`
                `),t(26,"div",9),e(27,`
                  `),l(28,Z,7,1,"div",10),e(29,`
                  `),l(30,ee,4,0,"ng-template",null,0,I),e(32,`
                `),n(),e(33,`
              `),n(),e(34,`
            `),n(),e(35,`
          `),n(),e(36,`
          `),t(37,"div",4),e(38,`
            `),t(39,"div",5),e(40,`
              `),t(41,"div",6),e(42,`
                `),t(43,"div",7)(44,"strong"),e(45,"Other Resources"),n()(),e(46,`
              `),n(),e(47,`
              `),t(48,"div",8),e(49,`
                `),t(50,"div",9),e(51,`
                  `),l(52,ne,7,1,"div",10),e(53,`
                  `),l(54,ie,4,0,"ng-template",null,0,I),e(56,`
                `),n(),e(57,`
              `),n(),e(58,`
            `),n(),e(59,`
          `),n(),e(60,`
        `),n(),e(61,`

      `),n(),e(62,`
    `),n(),e(63,`
  `),n(),e(64,`
`),n()),o&2){let m=F(31);d(28),s("ngIf",a.mForms.length>0)("ngIfElse",m),d(24),s("ngIf",a.mOtherResources.length>0)("ngIfElse",m)}},dependencies:[R,D,P,j,V,A,B],encapsulation:2})}};var oe=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:v,data:{title:"Forms & Resources"}}],_=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=f({type:i})}static{this.\u0275inj=x({imports:[u,w.forChild(oe),w]})}};var X=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=f({type:i})}static{this.\u0275inj=x({imports:[u,_,q,O,$,k,G,H,U,L,N]})}};export{X as FormsAndResourcesModule};
