import{a as J,b as U}from"./chunk-SJG5BJVG.js";import{a as K,c as Q,e as $}from"./chunk-YQ2YU4T6.js";import{Ba as r,Ca as t,Da as n,Dc as g,Ea as l,Eb as G,Fc as v,Gc as E,Ib as f,L as k,M as u,Nb as N,O as M,Sc as V,T as s,Tc as C,U as L,Uc as y,Vc as W,Xb as z,_ as j,ab as e,dc as A,fd as B,ha as m,hb as d,kb as x,oa as D,pa as F,pc as R,qa as S,qd as O,rc as H,rd as b,sd as h,ta as p,td as q}from"./chunk-RYSGXS5Z.js";var I=class o{constructor(i,a){this.mAppContextService=i;this.http=a}allItems(){let i=`${K.base_url}/dashboard`;return this.http.get(i,this.mAppContextService.getHttpOptions())}static{this.\u0275fac=function(a){return new(a||o)(M(Q),M(N))}}static{this.\u0275prov=k({token:o,factory:o.\u0275fac,providedIn:"root"})}};var P=()=>({gx:3,gy:3});function Z(o,i){o&1&&l(0,"app-progress")}function ee(o,i){o&1&&(e(0,`
            `),s(),l(1,"svg",27),e(2,`
          `))}function te(o,i){o&1&&(e(0,`
            `),s(),l(1,"svg",28),e(2,`
          `))}function ne(o,i){o&1&&(e(0,`
            `),s(),l(1,"svg",29),e(2,`
          `))}function ie(o,i){o&1&&(e(0,`
            `),s(),l(1,"svg",30),e(2,`
          `))}var w=class o{constructor(i,a){this.mDownloadService=i;this.mToastrService=a;this.mProgress=j(!1)}ngOnInit(){this.index()}index(){this.mProgress.set(!0),this.mDownloadService.allItems().subscribe({next:i=>{i&&(this.mMasterplanSubmissions=i.data.masterplan_submissions,this.mPlanSubmissions=i.data.plan_submissions,this.mAllocatedParcels=i.data.allocated_parcels,this.mConsultants=i.data.consultants,this.myConstructionPermits=i.data.my_construction_permits,this.myComplianceAndEnforcements=i.data.my_compliance_and_enforcements),this.mProgress.set(!1)},error:i=>{i.error.message&&this.mToastrService.error(i.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(a){return new(a||o)(D(I),D($))}}static{this.\u0275cmp=F({type:o,selectors:[["app-index"]],standalone:!1,decls:219,vars:27,consts:[[4,"ngIf"],[1,"mb-3"],[3,"gutter"],["xs","12"],["color","danger",1,"d-flex","align-items-center","justify-content-between"],["routerLink","/downloads",1,"btn","btn-success","btn-sm","ms-3"],[1,"mt-2","text-muted"],["xs","6","md","4"],["routerLink","/construction-permits",1,"text-decoration-none"],[1,"h-100","shadow-sm","hover-shadow"],[1,"card-title"],[1,"card-text","text-medium-emphasis"],["routerLink","/parcel-allocation-worksheet",1,"text-decoration-none"],["routerLink","/downloads",1,"text-decoration-none"],["routerLink","/advertising-application",1,"text-decoration-none"],["routerLink","/construction-site-board",1,"text-decoration-none"],["routerLink","/compliance-and-enforcement",1,"text-decoration-none"],["md","3","xl","3"],["color","info","inverse1","",1,"mb-4",3,"title","value"],["cTemplateId","widgetIconTemplate"],["color","warning","inverse1","",1,"mb-4",3,"title","value"],["color","success","inverse1","",1,"mb-4",3,"title","value"],["color","danger","inverse1","",1,"mb-4",3,"title","value"],["xs","12","lg","6"],[1,"mb-4",3,"title","value"],["cIcon","","name","cilPuzzle","size","xl"],["cIcon","","name","cilList","size","xl"],["cIcon","","height","36","name","cilPuzzle"],["cIcon","","height","36","name","cilCursor"],["cIcon","","height","36","name","cilDescription"],["cIcon","","height","36","name","cilList"]],template:function(a,c){a&1&&(p(0,Z,1,0,"app-progress",0),t(1,"div"),e(2,`

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

    `),t(152,"c-row"),e(153,`
      `),t(154,"c-col",3),e(155,`
        `),t(156,"h6",6),e(157,"Internal"),n(),e(158,`
      `),n(),e(159,`
      `),t(160,"c-col",17),e(161,`
        `),t(162,"c-widget-stat-c",18),e(163,`
          `),p(164,ee,3,0,"ng-template",19),e(165,`
        `),n(),e(166,`
      `),n(),e(167,`
      `),t(168,"c-col",17),e(169,`
        `),t(170,"c-widget-stat-c",20),e(171,`
          `),p(172,te,3,0,"ng-template",19),e(173,`
        `),n(),e(174,`
      `),n(),e(175,`
      `),t(176,"c-col",17),e(177,`
        `),t(178,"c-widget-stat-c",21),e(179,`
          `),p(180,ne,3,0,"ng-template",19),e(181,`
        `),n(),e(182,`
      `),n(),e(183,`
      `),t(184,"c-col",17),e(185,`
        `),t(186,"c-widget-stat-c",22),e(187,`
          `),p(188,ie,3,0,"ng-template",19),e(189,`
        `),n(),e(190,`
      `),n(),e(191,`
    `),n(),e(192,`

    `),t(193,"c-row",2),e(194,`
      `),t(195,"c-col",3),e(196,`
        `),t(197,"h6",6),e(198,"External"),n(),e(199,`
      `),n(),e(200,`
      `),t(201,"c-col",23),e(202,`
        `),t(203,"c-widget-stat-e",24),e(204,`
          `),s(),l(205,"svg",25),e(206,`
        `),n(),e(207,`
      `),n(),e(208,`
      `),L(),t(209,"c-col",23),e(210,`
        `),t(211,"c-widget-stat-e",24),e(212,`
          `),s(),l(213,"svg",26),e(214,`
        `),n(),e(215,`
      `),n(),e(216,`
    `),n(),e(217,`

  `),n(),e(218,`

`),n()),a&2&&(r("ngIf",c.mProgress()),m(5),r("gutter",x(23,P)),m(18),r("gutter",x(24,P)),m(120),r("gutter",x(25,P)),m(19),r("value",d(c.mMasterplanSubmissions||0))("title","Masterplan Submissions"),m(8),r("value",d(c.mPlanSubmissions||0))("title","Plan Submissions"),m(8),r("value",d(c.mAllocatedParcels||0))("title","Parcels Parameters"),m(8),r("value",d(c.mConsultants||0))("title","Consultants"),m(7),r("gutter",x(26,P)),m(10),r("value",d(c.myConstructionPermits))("title","Construction Permits"),m(8),r("value",d(c.myComplianceAndEnforcements))("title","Compliance & Enforcements"))},dependencies:[G,z,J,C,W,y,v,E,g,b,H,R,h],encapsulation:2})}};var oe=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:w,data:{title:"Home"}}],_=class o{static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275mod=S({type:o})}static{this.\u0275inj=u({imports:[f,A.forChild(oe),A]})}};var X=class o{static{this.\u0275fac=function(a){return new(a||o)}}static{this.\u0275mod=S({type:o})}static{this.\u0275inj=u({imports:[f,_,U,C,V,y,v,E,g,B,O,b,q,h]})}};export{X as DashboardModule};
