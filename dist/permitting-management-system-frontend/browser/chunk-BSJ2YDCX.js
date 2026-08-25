import{a as U,b as X}from"./chunk-SJG5BJVG.js";import{a as $,c as I,e as J}from"./chunk-FHELIIU2.js";import{Ba as a,Ca as t,Da as n,Dc as v,Ea as l,Eb as R,Fc as C,Gc as E,Ib as g,L,M as u,Nb as z,O as M,Ra as N,Sc as B,T as c,Tc as y,U as j,Uc as b,Vc as O,Xb as H,_ as F,ab as e,dc as T,fd as q,ha as m,hb as d,kb as p,oa as S,pa as G,pc as V,qa as f,qd as K,rc as W,rd as h,sd as _,ta as s,td as Q}from"./chunk-RYSGXS5Z.js";var w=class i{constructor(o,r){this.mAppContextService=o;this.http=r}allItems(){let o=`${$.base_url}/dashboard`;return this.http.get(o,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(r){return new(r||i)(M(I),M(z))}}static{this.\u0275prov=L({token:i,factory:i.\u0275fac,providedIn:"root"})}};var D=()=>({gx:3,gy:3}),te=()=>[2];function ne(i,o){i&1&&l(0,"app-progress")}function ie(i,o){i&1&&(e(0,`
            `),c(),l(1,"svg",27),e(2,`
          `))}function oe(i,o){i&1&&(e(0,`
            `),c(),l(1,"svg",28),e(2,`
          `))}function re(i,o){i&1&&(e(0,`
            `),c(),l(1,"svg",29),e(2,`
          `))}function ae(i,o){i&1&&(e(0,`
            `),c(),l(1,"svg",30),e(2,`
          `))}function me(i,o){if(i&1&&(t(0,"c-row"),e(1," "),e(2,`
      `),t(3,"c-col",3),e(4,`
        `),t(5,"h6",6),e(6,"Internal"),n(),e(7,`
      `),n(),e(8,`
      `),t(9,"c-col",21),e(10,`
        `),t(11,"c-widget-stat-c",22),e(12,`
          `),s(13,ie,3,0,"ng-template",23),e(14,`
        `),n(),e(15,`
      `),n(),e(16,`
      `),t(17,"c-col",21),e(18,`
        `),t(19,"c-widget-stat-c",24),e(20,`
          `),s(21,oe,3,0,"ng-template",23),e(22,`
        `),n(),e(23,`
      `),n(),e(24,`
      `),t(25,"c-col",21),e(26,`
        `),t(27,"c-widget-stat-c",25),e(28,`
          `),s(29,re,3,0,"ng-template",23),e(30,`
        `),n(),e(31,`
      `),n(),e(32,`
      `),t(33,"c-col",21),e(34,`
        `),t(35,"c-widget-stat-c",26),e(36,`
          `),s(37,ae,3,0,"ng-template",23),e(38,`
        `),n(),e(39,`
      `),n(),e(40,`
    `),n()),i&2){let r=N();m(11),a("value",d(r.mMasterplanSubmissions||0))("title","Masterplan Submissions"),m(8),a("value",d(r.mDetailedDesignSubmissions||0))("title","Detailed Design Submissions"),m(8),a("value",d(r.mAllocatedParcels||0))("title","Parcels Parameters"),m(8),a("value",d(r.mConsultants||0))("title","Consultants")}}var P=class i{constructor(o,r,x){this.mDownloadService=o;this.mToastrService=r;this.mAppContextService=x;this.mProgress=F(!1)}ngOnInit(){this.index()}index(){this.mProgress.set(!0),this.mDownloadService.allItems().subscribe({next:o=>{o&&(this.mMasterplanSubmissions=o.data.masterplan_submissions,this.mDetailedDesignSubmissions=o.data.detailed_design_submissions,this.mAllocatedParcels=o.data.allocated_parcels,this.mConsultants=o.data.consultants,this.myConstructionPermits=o.data.my_construction_permits,this.myComplianceAndEnforcements=o.data.my_compliance_and_enforcements),this.mProgress.set(!1)},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||i)(S(w),S(J),S(I))}}static{this.\u0275cmp=G({type:i,selectors:[["app-index"]],standalone:!1,decls:180,vars:17,consts:[[4,"ngIf"],[1,"mb-3"],[3,"gutter"],["xs","12"],["color","danger",1,"d-flex","align-items-center","justify-content-between"],["routerLink","/downloads",1,"btn","btn-success","btn-sm","ms-3"],[1,"mt-2","text-muted"],["xs","6","md","4"],["routerLink","/construction-permits",1,"text-decoration-none"],[1,"h-100","shadow-sm","hover-shadow"],[1,"card-title"],[1,"card-text","text-medium-emphasis"],["routerLink","/parcel-allocation-worksheet",1,"text-decoration-none"],["routerLink","/downloads",1,"text-decoration-none"],["routerLink","/advertising-application",1,"text-decoration-none"],["routerLink","/construction-site-board",1,"text-decoration-none"],["routerLink","/compliance-and-enforcement",1,"text-decoration-none"],["xs","12","lg","6"],[1,"mb-4",3,"title","value"],["cIcon","","name","cilPuzzle","size","xl"],["cIcon","","name","cilList","size","xl"],["md","3","xl","3"],["color","primary","inverse1","",1,"mb-4",3,"title","value"],["cTemplateId","widgetIconTemplate"],["color","warning","inverse1","",1,"mb-4",3,"title","value"],["color","success","inverse1","",1,"mb-4",3,"title","value"],["color","danger","inverse1","",1,"mb-4",3,"title","value"],["cIcon","","height","36","name","cilPuzzle"],["cIcon","","height","36","name","cilCursor"],["cIcon","","height","36","name","cilDescription"],["cIcon","","height","36","name","cilList"]],template:function(r,x){r&1&&(s(0,ne,1,0,"app-progress",0),t(1,"div"),e(2,`

  `),t(3,"div",1),e(4,`
    `),t(5,"c-row",2),e(6,`
      `),t(7,"c-col",3),e(8,`
        `),t(9,"c-callout",4),e(10,`
          `),t(11,"span"),e(12,`
            Looking for guidelines or templates? Explore our resources to get started quickly and efficiently.
          `),n(),e(13,`
          `),t(14,"a",5),e(15,`
            Learn More
          `),n(),e(16,`
        `),n(),e(17,`
      `),n(),e(18,`
    `),n(),e(19,`
  `),n(),e(20,`

  `),t(21,"div",1),e(22,`
    `),t(23,"c-row",2),e(24,`
      `),t(25,"c-col",3),e(26,`
        `),t(27,"h5",6),e(28,"Quick Links"),n(),e(29,`
      `),n(),e(30,`
      `),t(31,"c-col",7),e(32,`
        `),t(33,"a",8),e(34,`
          `),t(35,"c-card",9),e(36,`
            `),t(37,"c-card-body"),e(38,`
              `),t(39,"h6",10),e(40,"Construction Permit"),n(),e(41,`
              `),t(42,"p",11),e(43,`
                Apply for approval to begin construction after meeting all requirements.
              `),n(),e(44,`
            `),n(),e(45,`
          `),n(),e(46,`
        `),n(),e(47,`
      `),n(),e(48,`
      `),t(49,"c-col",7),e(50,`
        `),t(51,"a",12),e(52,`
          `),t(53,"c-card",9),e(54,`
            `),t(55,"c-card-body"),e(56,`
              `),t(57,"h6",10),e(58,"Parcel Development Parameters"),n(),e(59,`
              `),t(60,"p",11),e(61,`
                Key planning and zoning standards for land use and development on a specific parcels.
              `),n(),e(62,`
            `),n(),e(63,`
          `),n(),e(64,`
        `),n(),e(65,`
      `),n(),e(66,`
      `),t(67,"c-col",7),e(68,`
        `),t(69,"a",13),e(70,`
          `),t(71,"c-card",9),e(72,`
            `),t(73,"c-card-body"),e(74,`
              `),t(75,"h6",10),e(76,"Guidelines, Codes & Forms"),n(),e(77,`
              `),t(78,"p",11),e(79,`
                Access planning guidelines, building codes, and application forms.
              `),n(),e(80,`
            `),n(),e(81,`
          `),n(),e(82,`
        `),n(),e(83,`
      `),n(),e(84,`
      `),t(85,"c-col",7),e(86,`
        `),t(87,"a",14),e(88,`
          `),t(89,"c-card",9),e(90,`
            `),t(91,"c-card-body"),e(92,`
              `),t(93,"h6",10),e(94,"Advertising Application"),n(),e(95,`
              `),t(96,"p",11),e(97,`
                Apply for billboard and signage approvals.
              `),n(),e(98,`
            `),n(),e(99,`
          `),n(),e(100,`
        `),n(),e(101,`
      `),n(),e(102,`
      `),t(103,"c-col",7),e(104,`
        `),t(105,"a",15),e(106,`
          `),t(107,"c-card",9),e(108,`
            `),t(109,"c-card-body"),e(110,`
              `),t(111,"h6",10),e(112,"Construction Site Board"),n(),e(113,`
              `),t(114,"p",11),e(115,`
                Apply and manage construction site board permits.
              `),n(),e(116,`
            `),n(),e(117,`
          `),n(),e(118,`
        `),n(),e(119,`
      `),n(),e(120,`
      `),t(121,"c-col",7),e(122,`
        `),t(123,"a",16),e(124,`
          `),t(125,"c-card",9),e(126,`
            `),t(127,"c-card-body"),e(128,`
              `),t(129,"h6",10),e(130,"Compliance and Enforcement"),n(),e(131,`
              `),t(132,"p",11),e(133,`
                Monitor compliance, conduct inspections, and enforce regulations on approved developments.
              `),n(),e(134,`
            `),n(),e(135,`
          `),n(),e(136,`
        `),n(),e(137,`
      `),n(),e(138,`
    `),n(),e(139,`
  `),n(),e(140,`

  `),t(141,"div",1),e(142,`
    `),t(143,"c-row",2),e(144,`
      `),t(145,"c-col",3),e(146,`
        `),t(147,"h5",6),e(148,"System Insights"),n(),e(149,`
      `),n(),e(150,`
    `),n(),e(151,`

    `),s(152,me,41,12,"c-row",0),e(153,`

    `),t(154,"c-row",2),e(155,`
      `),t(156,"c-col",3),e(157,`
        `),t(158,"h6",6),e(159,"External"),n(),e(160,`
      `),n(),e(161,`
      `),t(162,"c-col",17),e(163,`
        `),t(164,"c-widget-stat-e",18),e(165,`
          `),c(),l(166,"svg",19),e(167,`
        `),n(),e(168,`
      `),n(),e(169,`
      `),j(),t(170,"c-col",17),e(171,`
        `),t(172,"c-widget-stat-e",18),e(173,`
          `),c(),l(174,"svg",20),e(175,`
        `),n(),e(176,`
      `),n(),e(177,`
    `),n(),e(178,`

  `),n(),e(179,`

`),n()),r&2&&(a("ngIf",x.mProgress()),m(5),a("gutter",p(12,D)),m(18),a("gutter",p(13,D)),m(120),a("gutter",p(14,D)),m(9),a("ngIf",!x.mAppContextService.hasRoles(p(15,te))),m(2),a("gutter",p(16,D)),m(10),a("value",d(x.myConstructionPermits))("title","Construction Permits"),m(8),a("value",d(x.myComplianceAndEnforcements))("title","Compliance & Enforcements"))},dependencies:[R,H,U,y,O,b,C,E,v,h,W,V,_],encapsulation:2})}};var le=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:P,data:{title:"Home"}}],A=class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=f({type:i})}static{this.\u0275inj=u({imports:[g,T.forChild(le),T]})}};var Y=class i{static{this.\u0275fac=function(r){return new(r||i)}}static{this.\u0275mod=f({type:i})}static{this.\u0275inj=u({imports:[g,A,X,y,B,b,C,E,v,q,K,h,Q,_]})}};export{Y as DashboardModule};
