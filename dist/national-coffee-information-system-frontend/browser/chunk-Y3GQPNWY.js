import{a as $,b as h,d as q,f as z}from"./chunk-YJ3MTBCO.js";import{$c as C,Bb as F,Dc as L,Ec as g,Fc as S,Gc as O,I as D,J as d,L as w,Ma as j,Oc as U,Tb as E,X as P,Xa as e,Zc as k,_c as y,ad as B,bb as c,bd as G,da as m,eb as u,fc as N,ja as x,ka as M,la as f,nc as R,oa as l,pc as W,qc as H,tb as A,wa as a,wb as v,xa as n,ya as o,za as s}from"./chunk-YECXK5AA.js";var I=class t{constructor(i,r){this.mAppContextService=i;this.http=r}allItems(){let i=`${$.base_url}/dashboard`;return this.http.get(i,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(r){return new(r||t)(w(h),w(F))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}};var J=()=>({gx:3,gy:3}),X=()=>[2];function Y(t,i){t&1&&s(0,"app-progress")}function Z(t,i){t&1&&(e(0,`
            `),s(1,"i",15),e(2,`
          `))}function ee(t,i){t&1&&(e(0,`
            `),s(1,"i",16),e(2,`
          `))}function te(t,i){t&1&&(e(0,`
            `),s(1,"i",8),e(2,`
          `))}function ie(t,i){t&1&&(e(0,`
            `),s(1,"i",17),e(2,`
          `))}function ne(t,i){if(t&1&&(n(0,"c-row"),e(1,`
      `),n(2,"c-col",3),e(3,`
        `),n(4,"h6",4),e(5,"System Admin"),o(),e(6,`
      `),o(),e(7,`
      `),n(8,"c-col",9),e(9,`
        `),n(10,"c-widget-stat-c",10),e(11,`
          `),l(12,Z,3,0,"ng-template",11),e(13,`
        `),o(),e(14,`
      `),o(),e(15,`
      `),n(16,"c-col",9),e(17,`
        `),n(18,"c-widget-stat-c",12),e(19,`
          `),l(20,ee,3,0,"ng-template",11),e(21,`
        `),o(),e(22,`
      `),o(),e(23,`
      `),n(24,"c-col",9),e(25,`
        `),n(26,"c-widget-stat-c",13),e(27,`
          `),l(28,te,3,0,"ng-template",11),e(29,`
        `),o(),e(30,`
      `),o(),e(31,`
      `),n(32,"c-col",9),e(33,`
        `),n(34,"c-widget-stat-c",14),e(35,`
          `),l(36,ie,3,0,"ng-template",11),e(37,`
        `),o(),e(38,`
      `),o(),e(39,`
    `),o()),t&2){let r=j();m(10),a("value",c(r.mUsers||0))("title","Users"),m(8),a("value",c(r.mInstitutions||0))("title","Institutions"),m(8),a("value",c(r.mSelections||0))("title","Selections"),m(8),a("value",c(r.mPlacements||0))("title","Placements")}}var _=class t{constructor(i,r,p){this.mDownloadService=i;this.mToastrService=r;this.mAppContextService=p;this.mProgress=P(!1)}ngOnInit(){this.index()}index(){this.mProgress.set(!0),this.mDownloadService.allItems().subscribe({next:i=>{i&&(this.mUsers=i.data.users,this.mInstitutions=i.data.institutions,this.mSelections=i.data.selections,this.mPlacements=i.data.placements,this.myLearners=i.data.my_learners,this.mySelections=i.data.my_selections),this.mProgress.set(!1)},error:i=>{i.error.message&&this.mToastrService.error(i.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||t)(x(I),x(q),x(h))}}static{this.\u0275cmp=M({type:t,selectors:[["app-index"]],standalone:!1,decls:42,vars:13,consts:[[4,"ngIf"],[1,"mb-3"],[3,"gutter"],["xs","12"],[1,"mt-2","text-muted"],["xs","12","lg","6"],[1,"mb-4",3,"title","value"],["aria-hidden","true",1,"fa-solid","fa-user-group","fs-1"],["aria-hidden","true",1,"fa-solid","fa-check-to-slot","fs-1"],["md","3","xl","3"],["color","info","inverse","",1,"mb-4",3,"title","value"],["cTemplateId","widgetIconTemplate"],["color","warning","inverse","",1,"mb-4",3,"title","value"],["color","success","inverse","",1,"mb-4",3,"title","value"],["color","danger","inverse","",1,"mb-4",3,"title","value"],["aria-hidden","true",1,"fa-solid","fa-users","fs-1"],["aria-hidden","true",1,"fa-solid","fa-institution","fs-1"],["aria-hidden","true",1,"fa-solid","fa-graduation-cap","fs-1"]],template:function(r,p){r&1&&(l(0,Y,1,0,"app-progress",0),n(1,"div"),e(2,`

  `),n(3,"div",1),e(4,`
    `),n(5,"c-row",2),e(6,`
      `),n(7,"c-col",3),e(8,`
        `),n(9,"h5",4),e(10,"System Insights"),o(),e(11,`
      `),o(),e(12,`
    `),o(),e(13,`

    `),l(14,ne,40,12,"c-row",0),e(15,`

    `),n(16,"c-row",2),e(17,`
      `),n(18,"c-col",3),e(19,`
        `),n(20,"h6",4),e(21,"Institutions"),o(),e(22,`
      `),o(),e(23,`
      `),n(24,"c-col",5),e(25,`
        `),n(26,"c-widget-stat-e",6),e(27,`
          `),s(28,"i",7),e(29,`
        `),o(),e(30,`
      `),o(),e(31,`
      `),n(32,"c-col",5),e(33,`
        `),n(34,"c-widget-stat-e",6),e(35,`
          `),s(36,"i",8),e(37,`
        `),o(),e(38,`
      `),o(),e(39,`
    `),o(),e(40,`

  `),o(),e(41,`

`),o()),r&2&&(a("ngIf",p.mProgress()),m(5),a("gutter",u(10,J)),m(9),a("ngIf",!p.mAppContextService.hasRoles(u(11,X))),m(2),a("gutter",u(12,J)),m(10),a("value",c(p.myLearners))("title","Learners"),m(8),a("value",c(p.mySelections))("title","Selections"))},dependencies:[A,z,g,O,S,y,N,C],encapsulation:2})}};var oe=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:_,data:{title:"Home"}}],b=class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=d({imports:[v,E.forChild(oe),E]})}};var K=class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=d({imports:[v,b,G,g,L,S,W,H,R,U,k,y,B,C]})}};export{K as DashboardModule};
