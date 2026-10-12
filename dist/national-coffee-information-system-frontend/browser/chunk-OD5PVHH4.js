import{a as $,b as h,d as q,f as z}from"./chunk-2JWXX3AJ.js";import{$c as k,Aa as o,Ba as s,Eb as F,Fc as L,Gc as g,Hc as S,I as D,Ic as O,J as d,L as w,Oa as j,Qc as U,Vb as E,X as P,Za as e,ad as y,bd as C,cd as B,dd as G,ea as m,eb as c,hb as u,hc as N,la as x,ma as M,na as f,pc as R,qa as l,rc as W,sc as H,wb as A,ya as a,za as i,zb as v}from"./chunk-NKO5GFD6.js";var I=class t{constructor(n,r){this.mAppContextService=n;this.http=r}allItems(){let n=`${$.base_url}/dashboard`;return this.http.get(n,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(r){return new(r||t)(w(h),w(F))}}static{this.\u0275prov=D({token:t,factory:t.\u0275fac,providedIn:"root"})}};var J=()=>({gx:3,gy:3}),X=()=>[2];function Y(t,n){t&1&&s(0,"app-progress")}function Z(t,n){t&1&&(e(0,`
            `),s(1,"i",14),e(2,`
          `))}function ee(t,n){t&1&&(e(0,`
            `),s(1,"i",15),e(2,`
          `))}function te(t,n){t&1&&(e(0,`
            `),s(1,"i",9),e(2,`
          `))}function ne(t,n){t&1&&(e(0,`
            `),s(1,"i",16),e(2,`
          `))}function ie(t,n){if(t&1&&(i(0,"c-row"),e(1,`
      `),i(2,"c-col",3),e(3,`
        `),i(4,"h6",4),e(5,"Internal"),o(),e(6,`
      `),o(),e(7,`
      `),i(8,"c-col",10),e(9,`
        `),i(10,"c-widget-stat-c",11),e(11,`
          `),l(12,Z,3,0,"ng-template",12),e(13,`
        `),o(),e(14,`
      `),o(),e(15,`
      `),i(16,"c-col",10),e(17,`
        `),i(18,"c-widget-stat-c",8),e(19,`
          `),l(20,ee,3,0,"ng-template",12),e(21,`
        `),o(),e(22,`
      `),o(),e(23,`
      `),i(24,"c-col",10),e(25,`
        `),i(26,"c-widget-stat-c",6),e(27,`
          `),l(28,te,3,0,"ng-template",12),e(29,`
        `),o(),e(30,`
      `),o(),e(31,`
      `),i(32,"c-col",10),e(33,`
        `),i(34,"c-widget-stat-c",13),e(35,`
          `),l(36,ne,3,0,"ng-template",12),e(37,`
        `),o(),e(38,`
      `),o(),e(39,`
    `),o()),t&2){let r=j();m(10),a("value",c(r.mUsers||0))("title","Users"),m(8),a("value",c(r.mInstitutions||0))("title","Institutions"),m(8),a("value",c(r.mSelections||0))("title","Selections"),m(8),a("value",c(r.mPlacements||0))("title","Placements")}}var _=class t{constructor(n,r,p){this.mDownloadService=n;this.mToastrService=r;this.mAppContextService=p;this.mProgress=P(!1)}ngOnInit(){this.index()}index(){this.mProgress.set(!0),this.mDownloadService.allItems().subscribe({next:n=>{n&&(this.mUsers=n.data.users,this.mInstitutions=n.data.institutions,this.mSelections=n.data.selections,this.mPlacements=n.data.placements,this.myLearners=n.data.my_learners,this.mySelections=n.data.my_selections),this.mProgress.set(!1)},error:n=>{n.error.message&&this.mToastrService.warning(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||t)(x(I),x(q),x(h))}}static{this.\u0275cmp=M({type:t,selectors:[["app-index"]],standalone:!1,decls:42,vars:13,consts:[[4,"ngIf"],[1,"mb-3"],[3,"gutter"],["xs","12"],[1,"mt-2","text-muted"],["xs","12","lg","6"],["color","success","inverse","",1,"mb-4",3,"title","value"],["aria-hidden","true",1,"fa-solid","fa-user-group","fs-1"],["color","warning","inverse","",1,"mb-4",3,"title","value"],["aria-hidden","true",1,"fa-solid","fa-check-to-slot","fs-1"],["md","3","xl","3"],["color","info","inverse","",1,"mb-4",3,"title","value"],["cTemplateId","widgetIconTemplate"],["color","danger","inverse","",1,"mb-4",3,"title","value"],["aria-hidden","true",1,"fa-solid","fa-users","fs-1"],["aria-hidden","true",1,"fa-solid","fa-institution","fs-1"],["aria-hidden","true",1,"fa-solid","fa-graduation-cap","fs-1"]],template:function(r,p){r&1&&(l(0,Y,1,0,"app-progress",0),i(1,"div"),e(2,`

  `),i(3,"div",1),e(4,`
    `),i(5,"c-row",2),e(6,`
      `),i(7,"c-col",3),e(8,`
        `),i(9,"h5",4),e(10,"System Insights"),o(),e(11,`
      `),o(),e(12,`
    `),o(),e(13,`

    `),l(14,ie,40,12,"c-row",0),e(15,`

    `),i(16,"c-row",2),e(17,`
      `),i(18,"c-col",3),e(19,`
        `),i(20,"h6",4),e(21,"External"),o(),e(22,`
      `),o(),e(23,`
      `),i(24,"c-col",5),e(25,`
        `),i(26,"c-widget-stat-e",6),e(27,`
          `),s(28,"i",7),e(29,`
        `),o(),e(30,`
      `),o(),e(31,`
      `),i(32,"c-col",5),e(33,`
        `),i(34,"c-widget-stat-e",8),e(35,`
          `),s(36,"i",9),e(37,`
        `),o(),e(38,`
      `),o(),e(39,`
    `),o(),e(40,`

  `),o(),e(41,`

`),o()),r&2&&(a("ngIf",p.mProgress()),m(5),a("gutter",u(10,J)),m(9),a("ngIf",!p.mAppContextService.hasRoles(u(11,X))),m(2),a("gutter",u(12,J)),m(10),a("value",c(p.myLearners))("title","Learners"),m(8),a("value",c(p.mySelections))("title","Selections"))},dependencies:[A,z,g,O,S,y,N,C],encapsulation:2})}};var oe=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:_,data:{title:"Home"}}],b=class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=d({imports:[v,E.forChild(oe),E]})}};var K=class t{static{this.\u0275fac=function(r){return new(r||t)}}static{this.\u0275mod=f({type:t})}static{this.\u0275inj=d({imports:[v,b,G,g,L,S,W,H,R,U,k,y,B,C]})}};export{K as DashboardModule};
