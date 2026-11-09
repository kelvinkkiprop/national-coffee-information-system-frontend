import{a as oe}from"./chunk-4MT6PD6W.js";import{a as me,c as b,d as re,e as le}from"./chunk-PNAX2R2V.js";import{Fa as te,G as A,Ga as E,Ha as ne,Ia as ie,Ja as ae,N as J,V as q,X as z,Y as Q,c as k,d as B,e as W,g as H,i as G,j as g,ja as V,ka as X,la as Y,ma as Z,o as $,ua as ee,y as K}from"./chunk-JHTOCNXX.js";import{Ac as O,Bc as f,Cb as o,Cc as P,Db as t,Eb as n,Ec as R,Fb as x,Fc as D,S as M,Sa as r,T as S,Ub as c,W as w,ab as v,cc as T,fb as L,gb as y,hc as e,ic as s,jc as _,lb as d,ma as N,rc as u,vc as p}from"./chunk-MHSS2KTR.js";import"./chunk-2WH2EVR6.js";var C=class a{constructor(m,i){this.mAppContextService=m;this.http=i}allItems(){let m=`${me.base_url}/dashboard`;return this.http.get(m,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(i){return new(i||a)(w(b),w($))}}static{this.\u0275prov=M({token:a,factory:a.\u0275fac,providedIn:"root"})}};var ve=()=>({gx:3,gy:3}),ue=()=>[1,2,3,4,5,6,7],U=()=>[1],fe=()=>[2],Se=(a,m,i,l,j,se,xe)=>({"bg-secondary":a,"bg-warning":m,"bg-dark":i,"bg-info":l,"bg-success":j,"bg-primary":se,"bg-danger":xe});function ye(a,m){a&1&&x(0,"app-progress")}function _e(a,m){a&1&&(e(0,`
              `),x(1,"i",29),e(2,`
            `))}function ge(a,m){a&1&&(e(0,`
              `),x(1,"i",30),e(2,`
            `))}function Ee(a,m){a&1&&(e(0,`
              `),x(1,"i",31),e(2,`
            `))}function be(a,m){a&1&&(e(0,`
              `),x(1,"i",32),e(2,`
            `))}function Ce(a,m){if(a&1&&(t(0,"div",15),e(1,`
        `),t(2,"div",4),e(3,`
          `),t(4,"h6",22),e(5,"Internal"),n(),e(6,`
        `),n(),e(7,`
        `),t(8,"div",23),e(9,`
          `),t(10,"c-widget-stat-c",24),e(11,`
            `),d(12,_e,3,0,"ng-template",25),e(13,`
          `),n(),e(14,`
        `),n(),e(15,`
        `),t(16,"div",23),e(17,`
          `),t(18,"c-widget-stat-c",26),e(19,`
            `),d(20,ge,3,0,"ng-template",25),e(21,`
          `),n(),e(22,`
        `),n(),e(23,`
        `),t(24,"div",23),e(25,`
          `),t(26,"c-widget-stat-c",27),e(27,`
            `),d(28,Ee,3,0,"ng-template",25),e(29,`
          `),n(),e(30,`
        `),n(),e(31,`
        `),t(32,"div",23),e(33,`
          `),t(34,"c-widget-stat-c",28),f(35,"currency"),e(36,`
            `),d(37,be,3,0,"ng-template",25),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n()),a&2){let i=c(2);r(10),o("value",u(i.mUsers||0))("title","Users"),r(8),o("value",u(i.mLicenses||0))("title","Licenses"),r(8),o("value",u(i.mPermits||0))("title","Permits"),r(8),o("value",u(R(35,12,i.mRevenues||0,"KES ","symbol","1.2-2")))("title","Revenues")}}function he(a,m){if(a&1&&(t(0,"tr"),e(1,`
                      `),t(2,"td"),e(3),n(),e(4,`
                      `),t(5,"td"),e(6),n(),e(7,`
                      `),t(8,"td"),e(9),n(),e(10,`
                      `),t(11,"td")(12,"span",36),e(13),n()(),e(14,`
                      `),t(15,"td"),e(16),f(17,"date"),n(),e(18,`
                    `),n()),a&2){let i=m.$implicit,l=m.index;r(3),_("",l+1,"."),r(3),s(i.name),r(3),s(i.role==null?null:i.role.name),r(3),o("ngClass",(i==null?null:i.status_id)===1?"bg-success":"bg-warning"),r(),s(i==null||i.status==null?null:i.status.name),r(3),s(P(17,6,i.created_at))}}function Ie(a,m){if(a&1&&(t(0,"div",33),e(1,`
                `),t(2,"table",34),e(3,`
                  `),t(4,"thead"),e(5,`
                    `),t(6,"tr"),e(7,`
                      `),t(8,"th"),e(9,"#"),n(),e(10,`
                      `),t(11,"th"),e(12,"Name"),n(),e(13,`
                      `),t(14,"th"),e(15,"Role"),n(),e(16,`
                      `),t(17,"th"),e(18,"Status"),n(),e(19,`
                      `),t(20,"th"),e(21,"Joined"),n(),e(22,`
                    `),n(),e(23,`
                  `),n(),e(24,`
                  `),t(25,"tbody"),e(26,`
                    `),d(27,he,19,8,"tr",35),e(28,`
                  `),n(),e(29,`
                `),n(),e(30,`
              `),n()),a&2){let i=c(2);r(27),o("ngForOf",i.mRecentUsers)}}function we(a,m){a&1&&(e(0,`
                `),t(1,"p",37),e(2,"No items"),n(),e(3,`
              `))}function Te(a,m){if(a&1&&(t(0,"div"),e(1,`
      `),d(2,Ce,41,17,"div",14),e(3,`
      `),t(4,"div",15),e(5,`
        `),t(6,"div",16),e(7,`
          `),t(8,"div",17),e(9,`
            `),t(10,"div",18),e(11,`
              `),t(12,"h5",19),e(13,"Recent Users"),n(),e(14,`
            `),n(),e(15,`
            `),t(16,"div",20),e(17,`
              `),d(18,Ie,31,1,"div",21),e(19,`
              `),d(20,we,4,0,"ng-template",null,0,D),e(22,`
            `),n(),e(23,`
          `),n(),e(24,`
        `),n(),e(25,`
      `),n(),e(26,`
    `),n()),a&2){let i=T(21),l=c();r(2),o("ngIf",l.mAppContextService.hasRoles(p(3,U))),r(16),o("ngIf",l.mRecentUsers&&l.mRecentUsers.length>0)("ngIfElse",i)}}function Pe(a,m){a&1&&(t(0,"div",4),e(1,`
          `),t(2,"h6",22),e(3,"External"),n(),e(4,`
        `),n())}function Re(a,m){if(a&1&&(t(0,"tr"),e(1,`
                      `),t(2,"td"),e(3),n(),e(4,`
                      `),t(5,"td"),e(6),n(),e(7,`
                      `),t(8,"td")(9,"span",36),e(10),n()(),e(11,`
                      `),t(12,"td"),e(13),f(14,"date"),n(),e(15,`
                    `),n()),a&2){let i=m.$implicit,l=m.index;r(3),_("",l+1,"."),r(3),s(i.application_number),r(3),o("ngClass",O(7,Se,i.status_id==1,i.status_id==2,i.status_id==3,i.status_id==4,i.status_id==5,i.status_id==6,i.status_id==7)),r(),s(i==null||i.status==null?null:i.status.name),r(3),s(P(14,5,i.created_at))}}function De(a,m){if(a&1&&(t(0,"div",33),e(1,`
                `),t(2,"table",34),e(3,`
                  `),t(4,"thead"),e(5,`
                    `),t(6,"tr"),e(7,`
                      `),t(8,"th"),e(9,"#"),n(),e(10,`
                      `),t(11,"th"),e(12,"Number"),n(),e(13,`
                      `),t(14,"th"),e(15,"Status"),n(),e(16,`
                      `),t(17,"th"),e(18,"Created"),n(),e(19,`
                    `),n(),e(20,`
                  `),n(),e(21,`
                  `),t(22,"tbody"),e(23,`
                    `),d(24,Re,16,15,"tr",35),e(25,`
                  `),n(),e(26,`
                `),n(),e(27,`
              `),n()),a&2){let i=c(2);r(24),o("ngForOf",i.myRecentPermits)}}function Ae(a,m){a&1&&(e(0,`
                `),t(1,"p",37),e(2,"No items"),n(),e(3,`
              `))}function Fe(a,m){if(a&1&&(t(0,"div"),e(1,`
      `),t(2,"div",15),e(3,`
        `),d(4,Pe,5,0,"div",38),e(5,`
        `),t(6,"div",39),e(7,`
          `),t(8,"div",40),e(9,`
            `),t(10,"div",41),e(11,`
              `),t(12,"span",42),e(13,`
                `),x(14,"i",30),e(15,`
              `),n(),e(16,`
            `),n(),e(17,`
            `),t(18,"div",43),e(19,`
              `),t(20,"div",44),e(21,`
                `),t(22,"div",45),e(23),n(),e(24,`
                `),t(25,"div",46),e(26,"Permits"),n(),e(27,`
              `),n(),e(28,`
              `),x(29,"div",47),e(30,`
              `),t(31,"div",44),e(32,`
                `),t(33,"div",45),e(34),n(),e(35,`
                `),t(36,"div",46),e(37,"Licenses"),n(),e(38,`
              `),n(),e(39,`
            `),n(),e(40,`
          `),n(),e(41,`
        `),n(),e(42,`
        `),t(43,"div",39),e(44,`
          `),t(45,"div",48),e(46,`
            `),t(47,"div",41),e(48,`
              `),t(49,"span",42),e(50,`
                `),x(51,"i",49),e(52,`
              `),n(),e(53,`
            `),n(),e(54,`
            `),t(55,"div",43),e(56,`
              `),t(57,"div",44),e(58,`
                `),t(59,"div",45),e(60),f(61,"currency"),n(),e(62,`
                `),t(63,"div",46),e(64,"Payments"),n(),e(65,`
              `),n(),e(66,`
              `),x(67,"div",47),e(68,`
              `),t(69,"div",44),e(70,`
                `),t(71,"div",45),e(72),n(),e(73,`
                `),t(74,"div",46),e(75,"Exams"),n(),e(76,`
              `),n(),e(77,`
            `),n(),e(78,`
          `),n(),e(79,`
        `),n(),e(80,`
      `),n(),e(81,`
      `),t(82,"div",15),e(83,`
        `),t(84,"div",16),e(85,`
          `),t(86,"div",17),e(87,`
            `),t(88,"div",18),e(89,`
              `),t(90,"h5",19),e(91,"My Recent Permits"),n(),e(92,`
            `),n(),e(93,`
            `),t(94,"div",20),e(95,`
              `),d(96,De,28,1,"div",21),e(97,`
              `),d(98,Ae,4,0,"ng-template",null,0,D),e(100,`
            `),n(),e(101,`
          `),n(),e(102,`
        `),n(),e(103,`
      `),n(),e(104,`
    `),n()),a&2){let i=T(99),l=c();r(4),o("ngIf",l.mAppContextService.hasRoles(p(12,U))),r(19),s(l.myPermits),r(11),s(l.myLicenses),r(26),s(R(61,7,l.myPayments||0,"KES ","symbol","1.2-2")),r(12),s(l.myExams),r(24),o("ngIf",l.myRecentPermits&&l.myRecentPermits.length>0)("ngIfElse",i)}}var h=class a{constructor(m,i,l,j){this.mDownloadService=m;this.mAuthService=i;this.mToastrService=l;this.mAppContextService=j;this.mRecentUsers=[];this.myRecentPermits=[];this.mProgress=N(!1)}ngOnInit(){this.index(),this.mCurrentUser=this.mAuthService?.currentUser}index(){this.mProgress.set(!0),this.mDownloadService.allItems().subscribe({next:m=>{m&&(this.mUsers=m.data.users,this.mLicenses=m.data.licenses,this.mPermits=m.data.permits,this.mRevenues=m.data.revenues,this.mRecentUsers=m.data.recent_users,this.myLicenses=m.data.my_licenses,this.myPermits=m.data.my_permits,this.myPayments=m.data.my_payments,this.myExams=m.data.my_exams,this.myRecentPermits=m.data.my_recent_permits),this.mProgress.set(!1)},error:m=>{m.error.message&&this.mToastrService.warning(m.error.message),this.mProgress.set(!1)}})}getDate(){let m=new Date,i={weekday:"long",year:"numeric",month:"long",day:"numeric"};return m.toLocaleDateString("en-US",i)}static{this.\u0275fac=function(i){return new(i||a)(v(C),v(re),v(le),v(b))}}static{this.\u0275cmp=L({type:a,selectors:[["app-index"]],standalone:!1,decls:48,vars:10,consts:[["noItemsTemplate",""],[4,"ngIf"],[1,"mb-3"],[1,"row",3,"gutter"],[1,"col-md-12"],[1,"mt-2","text-muted1"],[1,"row","mb-4"],[1,"alert","alert-warning","border-0","rounded-0","border-start","border-warning","border-3"],[1,"d-flex","align-items-center","justify-content-between"],[1,"fw-bold"],[1,"text-muted"],[1,"ms-3"],["routerLink","/dashboard",1,"btn","btn-warning","btn-sm"],[1,"fa","fa-arrow-circle-right"],["class","row",4,"ngIf"],[1,"row"],[1,"col-md-12","mb-4"],[1,"card","mb-4","h-100"],[1,"card-header","border-01"],[1,"card-title","text-muted1"],[1,"card-body"],["class","table-responsive",4,"ngIf","ngIfElse"],[1,"mt-2","text-muted"],[1,"col-sm-6","col-md-3"],["color","info","inverse","",1,"mb-4",3,"title","value"],["cTemplateId","widgetIconTemplate"],["color","warning","inverse","",1,"mb-4",3,"title","value"],["color","success","inverse","",1,"mb-4",3,"title","value"],["color","danger","inverse","",1,"mb-4",3,"title","value"],["aria-hidden","true",1,"fa-solid","fa-users","fs-1"],["aria-hidden","true",1,"fa-solid","fa-id-card","fs-1"],["aria-hidden","true",1,"fa-solid","fa-stamp","fs-1"],["aria-hidden","true",1,"fa-solid","fa-coins","fs-1"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-center","text-muted","p-5"],["class","col-md-12",4,"ngIf"],[1,"col-sm-6","col-lg-6","mb-3"],[1,"card",2,"--cui-card-cap-bg","#2C1E15"],[1,"card-header","position-relative","d-flex","justify-content-center","align-items-center"],[1,"text-white","my-4"],[1,"card-body","row","text-center"],[1,"col"],[1,"fs-5","fw-semibold"],[1,"text-uppercase","text-body-secondary","small"],[1,"vr"],[1,"card",2,"--cui-card-cap-bg","#224326"],["aria-hidden","true",1,"fa-solid","fa-wallet","fs-1"]],template:function(i,l){i&1&&(d(0,ye,1,0,"app-progress",1),t(1,"div"),e(2,`

  `),t(3,"div",2),e(4,`
    `),t(5,"div",3),e(6,`
      `),t(7,"div",4),e(8,`
        `),t(9,"h5",5),e(10,"System Insights"),n(),e(11,`
      `),n(),e(12,`
    `),n(),e(13,`
    `),t(14,"div",6),e(15,`
      `),t(16,"div",4),e(17,`
        `),t(18,"div",7),e(19,`
          `),t(20,"div",8),e(21,`
            `),t(22,"div"),e(23,`
              `),t(24,"div",9),e(25),n(),e(26,`
              `),t(27,"span",10),e(28),n(),e(29,`
            `),n(),e(30,`
            `),t(31,"div",11),e(32,`
              `),t(33,"a",12),e(34,`
                `),x(35,"i",13),e(36,` User Guide
              `),n(),e(37,`
            `),n(),e(38,`
          `),n(),e(39,`
        `),n(),e(40,`
      `),n(),e(41,`
    `),n(),e(42,`

    `),d(43,Te,27,4,"div",1),e(44,`

    `),d(45,Fe,105,13,"div",1),e(46,`

  `),n(),e(47,`

`),n()),i&2&&(o("ngIf",l.mProgress()),r(5),o("gutter",p(6,ve)),r(20),_("Welcome back, ",l.mCurrentUser.name),r(3),s(l.getDate()),r(15),o("ngIf",l.mAppContextService.hasRoles(p(7,ue))),r(2),o("ngIf",l.mAppContextService.hasRoles(p(8,U))||l.mAppContextService.hasTypes(p(9,fe))))},dependencies:[k,B,W,K,oe,Z,E,J,G,H],encapsulation:2})}};var Ue=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:h,data:{title:"Home"}}],I=class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275mod=y({type:a})}static{this.\u0275inj=S({imports:[g,A.forChild(Ue),A]})}};var de=class a{static{this.\u0275fac=function(i){return new(i||a)}}static{this.\u0275mod=y({type:a})}static{this.\u0275inj=S({imports:[g,I,ae,X,V,Y,z,Q,q,ee,te,E,ie,ne]})}};export{de as DashboardModule};
