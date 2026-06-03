import{a as R}from"./chunk-MUCQIIN6.js";import{a as Le}from"./chunk-CLTJMYFA.js";import{c as V,d as j,e as G,f as L,g as Pe,h as Te,i as O,l as q,m as H,q as we,s as Re}from"./chunk-XXBTCVPJ.js";import{a as w,b as Ie}from"./chunk-EIN47PNU.js";import{c as P,e as T}from"./chunk-IVFY5T4S.js";import{Ba as s,Ca as t,Cb as k,Da as i,Db as de,Ea as f,Eb as _,Fc as b,Gb as ce,Gc as y,Hc as ge,Ib as A,Ic as Se,M,Na as X,Pa as g,R as Q,Ra as d,Rc as _e,S as U,T as F,Tc as E,U as J,Ub as pe,Uc as I,Wb as xe,Wc as he,Xb as h,Ya as ie,_ as S,ab as e,bb as p,cb as ne,dc as Z,dd as Ce,e as Ge,fa as te,ha as m,ib as re,kb as oe,lb as D,mb as ae,nd as be,oa as x,od as ye,pa as v,pc as fe,pd as Ee,qa as B,qc as ue,rb as me,sb as se,ta as l,ub as le,wc as C,xc as ve}from"./chunk-RGFIQOVY.js";var Ve=Ge(Le());var qe=r=>({"is-invalid":r}),He=()=>[1],ze=(r,o)=>({active:r,disabled:o});function $e(r,o){r&1&&f(0,"app-progress")}function We(r,o){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function Ye(r,o){if(r&1&&(t(0,"div",16),e(1,`
                  `),l(2,We,2,0,"div",1),e(3,`
                `),i()),r&2){let n=d();m(2),s("ngIf",n.search_term.errors==null?null:n.search_term.errors.required)}}function Ke(r,o){if(r&1){let n=X();t(0,"button",26),g("click",function(){Q(n);let c=d().$implicit,u=d(2);return U(u.onDelete(c))}),F(),f(1,"svg",27),i()}}function Qe(r,o){if(r&1&&(t(0,"tr"),e(1,`
                `),t(2,"td"),e(3),i(),e(4,`
                `),t(5,"td"),e(6),i(),e(7,`
                `),t(8,"td"),e(9),i(),e(10,`
                `),t(11,"td"),e(12),i(),e(13,`
                `),t(14,"td"),e(15),i(),e(16,`
                `),t(17,"td"),e(18),i(),e(19,`
                `),t(20,"td"),e(21),me(22,"date"),i(),e(23,`
                `),t(24,"td"),e(25,`
                  `),t(26,"div",22),e(27,`
                    `),t(28,"a",23),F(),f(29,"svg",24),i(),e(30,`
                    `),e(31,`
                    `),l(32,Ke,2,0,"button",25),e(33,`
                  `),i(),e(34,`
                `),i(),e(35,`
              `),i()),r&2){let n=o.$implicit,a=o.index,c=d(2);m(3),ne("",c.mPageFrom+a,"."),m(3),p(n.consultant_name),m(3),p(n.professional_body.name),m(3),p(n.membership_number),m(3),p(n.nationality),m(3),p(n.status),m(3),p(se(22,10,n.created_at)),m(7),s("routerLink",re("/registered-professionals/show/",n.id)),m(4),s("ngIf",c.mAppContextService.hasRoles(oe(12,He)))}}function Ue(r,o){if(r&1&&(t(0,"div",17),e(1,`
          `),t(2,"table",18),e(3,`
            `),t(4,"thead",19),e(5,`
              `),t(6,"tr"),e(7,`
                `),t(8,"th",20),e(9,"#"),i(),e(10,`
                `),t(11,"th",20),e(12,"Name"),i(),e(13,`
                `),t(14,"th",20),e(15,"Professional Body"),i(),e(16,`
                `),t(17,"th",20),e(18,"Membership Number"),i(),e(19,`
                `),t(20,"th",20),e(21,"Nationality"),i(),e(22,`
                `),t(23,"th",20),e(24,"Status"),i(),e(25,`
                `),t(26,"th",20),e(27,"Created"),i(),e(28,`
                `),t(29,"th",20),e(30,"Action"),i(),e(31,`
              `),i(),e(32,`
            `),i(),e(33,`
            `),t(34,"tbody"),e(35,`
              `),l(36,Qe,36,13,"tr",21),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i()),r&2){let n=d();m(36),s("ngForOf",n.mRegisteredProfessionals)}}function Je(r,o){if(r&1){let n=X();t(0,"li",30),e(1,`
              `),t(2,"a",31),g("click",function(){let c=Q(n).$implicit,u=d(2);return U(u.onChangePage(c.url))}),i(),e(3,`
            `),i()}if(r&2){let n=o.$implicit;s("ngClass",ae(2,ze,n.active,!n.url)),m(2),s("innerHTML",n.label,te)}}function Xe(r,o){if(r&1&&(t(0,"div"),e(1,`
          `),t(2,"ul",28),e(3,`
            `),l(4,Je,4,5,"li",29),e(5,`
          `),i(),e(6,`
        `),i()),r&2){let n=d();m(4),s("ngForOf",n.links)}}function Ze(r,o){r&1&&(e(0,`
          `),t(1,"p",32),e(2,"No items"),i(),e(3,`
        `))}var z=class r{constructor(o,n,a){this.mRegisteredProfessionalService=o;this.mToastrService=n;this.mAppContextService=a;this.mRegisteredProfessionals={};this.links=[];this.mProgress=S(!1)}ngOnInit(){this.index(),this.search_term=new Te("",j.required),this.itemForm=new Pe({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mRegisteredProfessionalService.allItems().subscribe({next:o=>{o&&(this.mPageFrom=o.from,this.mRegisteredProfessionals=o.data,this.links=o.links),this.mProgress.set(!1)},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress.set(!1)}})}onChangePage(o){this.mProgress.set(!0),this.mRegisteredProfessionalService.paginateItems(o).subscribe({next:n=>{n&&(this.mPageFrom=n.from,this.mRegisteredProfessionals=n.data,this.links=n.links,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}onDelete(o){Ve.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+o.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(a=>{a.isConfirmed&&(this.mProgress.set(!0),this.mRegisteredProfessionalService.deleteItem(o).subscribe({next:c=>{c&&(this.mRegisteredProfessionals=this.mRegisteredProfessionals.filter(u=>u.id!==o.id),this.mToastrService.error(c.message),this.mProgress.set(!1))},error:c=>{c.error.message&&this.mToastrService.error(c.error.message),this.mProgress.set(!1)}}))})}onSubmit(o){this.mProgress.set(!0),this.mRegisteredProfessionalService.searchItems(o).subscribe({next:n=>{n&&(this.mRegisteredProfessionals=n.salutations,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}onSearch(o){this.mProgress.set(!0),this.mRegisteredProfessionalService.searchItems(o).subscribe({next:n=>{n&&(this.mRegisteredProfessionals=n.data,this.mToastrService.success(n.message),this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||r)(x(R),x(T),x(P))}}static{this.\u0275cmp=v({type:r,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/registered-professionals/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(n,a){if(n&1&&(l(0,$e,1,0,"app-progress",1),t(1,"c-row"),e(2,`
  `),t(3,"c-col",2),e(4,`
    `),t(5,"c-card",3),e(6,`
      `),t(7,"c-card-header"),e(8,`
        `),t(9,"div",4),e(10,`
          `),t(11,"div",5),e(12,`
            `),t(13,"a",6),e(14,`
              `),F(),f(15,"svg",7),e(16,` Add
            `),i(),e(17,`
          `),i(),e(18,`
          `),J(),t(19,"div"),e(20,`
            `),t(21,"form",8),g("ngSubmit",function(){return a.onSearch(a.itemForm.value)}),e(22,`
              `),t(23,"div",9),e(24,`
                `),f(25,"input",10),e(26,`
                `),t(27,"div",11),e(28,`
                  `),t(29,"button",12),e(30,`
                    `),F(),f(31,"svg",13),e(32,`
                  `),i(),e(33,`
                `),i(),e(34,`
                `),l(35,Ye,4,1,"div",14),e(36,`
              `),i(),e(37,`
            `),i(),e(38,`
          `),i(),e(39,`
        `),i(),e(40,`
      `),i(),e(41,`
      `),J(),t(42,"c-card-body"),e(43,`

        `),l(44,Ue,40,1,"div",15),e(45,`

        `),l(46,Xe,7,1,"div",1),e(47,`

        `),l(48,Ze,4,0,"ng-template",null,0,le),e(50,`

      `),i(),e(51,`
    `),i(),e(52,`
  `),i(),e(53,`
`),i()),n&2){let c=ie(49);s("ngIf",a.mProgress()),m(21),s("formGroup",a.itemForm),m(4),s("ngClass",D(7,qe,a.search_term.invalid&&(a.search_term.dirty||a.search_term.touched))),m(10),s("ngIf",a.search_term.invalid&&(a.search_term.dirty||a.search_term.touched)),m(9),s("ngIf",a.mRegisteredProfessionals.length>0)("ngIfElse",c),m(2),s("ngIf",a.links)}},dependencies:[k,de,_,h,w,C,b,y,ge,E,I,ye,be,O,V,G,L,H,q,fe,ce],encapsulation:2})}};var et=r=>({"is-invalid":r});function tt(r,o){r&1&&f(0,"app-progress")}function it(r,o){r&1&&(t(0,"div"),e(1,"This field is required."),i())}function nt(r,o){if(r&1&&(t(0,"div",14),e(1,`
                  `),l(2,it,2,0,"div",0),e(3,`
                `),i()),r&2){let n,a=d();m(2),s("ngIf",(n=a.itemForm.get("attachment").errors)==null?null:n.required)}}var $=class r{constructor(o,n,a,c,u){this.mRegisteredProfessionalService=o;this.mToastrService=n;this.mAppContextService=a;this.router=c;this.fb=u;this.mProgress=S(!1);this.itemForm=this.fb.group({attachment:["",j.required]})}ngOnInit(){}onSubmit(o){let n=new FormData;n.append("attachment",this.attachment_file,this.attachment_file.name),n.append("_method","POST"),this.mProgress.set(!0),this.mRegisteredProfessionalService.importRegisteredProfessionalsItems(n).subscribe({next:a=>{a&&(this.mToastrService.success(a.message),this.router.navigateByUrl("/registered-professionals"),this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onAttachmentChange(o){if(o.target.value){let n=o.target.files[0];this.attachment_file=n}}static{this.\u0275fac=function(n){return new(n||r)(x(R),x(T),x(P),x(xe),x(we))}}static{this.\u0275cmp=v({type:r,selectors:[["app-create"]],standalone:!1,decls:42,vars:7,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","attachment",1,"col-form-label","required"],["href","assets/files/Registered Kenyan Planners - Template.xlsx",1,"btn","btn-link","btn-sm"],["formControlName","attachment","type","file",1,"form-control",3,"change","ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/registered-professionals","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(n,a){n&1&&(l(0,tt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"form",3),g("ngSubmit",function(){return a.onSubmit(a.itemForm.value)}),e(10,`

          `),t(11,"div",4),e(12,`
            `),t(13,"div",5),e(14,`
              `),t(15,"div",6),e(16,`
                `),t(17,"label",7),e(18,"File: "),t(19,"a",8),e(20,"Download Template"),i()(),e(21,`
                `),t(22,"input",9),g("change",function(u){return a.onAttachmentChange(u)}),i(),e(23,`
                `),l(24,nt,4,1,"div",10),e(25,`
              `),i(),e(26,`
            `),i(),e(27,`
          `),i(),e(28,`

          `),t(29,"div",11),e(30,`
            `),t(31,"button",12),e(32,"Cancel"),i(),e(33,`
            `),t(34,"button",13),e(35,"Submit"),i(),e(36,`
          `),i(),e(37,`

        `),i(),e(38,`

      `),i(),e(39,`
    `),i(),e(40,`
  `),i(),e(41,`
`),i()),n&2&&(s("ngIf",a.mProgress()),m(9),s("formGroup",a.itemForm),m(13),s("ngClass",D(5,et,a.itemForm.get("attachment").invalid&&(a.itemForm.get("attachment").dirty||a.itemForm.get("attachment").touched))),m(2),s("ngIf",a.itemForm.get("attachment").invalid&&(a.itemForm.get("attachment").dirty||a.itemForm.get("attachment").touched)),m(10),s("disabled",a.itemForm.invalid))},dependencies:[k,_,h,w,C,b,y,E,I,O,V,G,L,H,q],encapsulation:2})}};var W=class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275cmp=v({type:r,selectors:[["app-edit"]],standalone:!1,decls:2,vars:0,template:function(n,a){n&1&&(t(0,"p"),e(1,"edit works!"),i())},encapsulation:2})}};function rt(r,o){r&1&&f(0,"app-progress")}function ot(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.consultant_name)}}function at(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.professional_body==null?null:n.item.professional_body.name)}}function mt(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.membership_number)}}function st(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.email)}}function lt(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.status)}}function dt(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.postal_address)}}function ct(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.qualification)}}function pt(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.business_name)}}function xt(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.nationality)}}function ft(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.subscription_year)}}function ut(r,o){if(r&1&&(t(0,"div",10),e(1),i()),r&2){let n=d();m(),p(n.item.good_standing)}}var Y=class r{constructor(o,n,a,c){this.mRegisteredProfessionalService=o;this.mToastrService=n;this.mAppContextService=a;this.route=c;this.mProgress=S(!1);this.item={}}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mRegisteredProfessionalService.getOneItem(this.id).subscribe({next:o=>{o&&(this.item=o,this.mProgress.set(!1))},error:o=>{o.error.message&&this.mToastrService.error(o.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(n){return new(n||r)(x(R),x(T),x(P),x(pe))}}static{this.\u0275cmp=v({type:r,selectors:[["app-show"]],standalone:!1,decls:145,vars:12,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"mt-3","text-right"],["routerLink","/registered-professionals","cButton","","color","danger"],[1,"text-muted"]],template:function(n,a){n&1&&(l(0,rt,1,0,"app-progress",0),t(1,"c-row"),e(2,`
  `),t(3,"c-col",1),e(4,`
    `),t(5,"c-card",2),e(6,`
      `),t(7,"c-card-body"),e(8,`

        `),t(9,"div"),e(10,`

          `),t(11,"div",3),e(12,`
            `),t(13,"div",4),e(14,`
              `),t(15,"div",2),e(16,`
                `),t(17,"label",5),e(18,"Name:"),i(),e(19,`
                `),l(20,ot,2,1,"div",6),e(21,`
              `),i(),e(22,`
            `),i(),e(23,`
            `),t(24,"div",4),e(25,`
              `),t(26,"div",2),e(27,`
                `),t(28,"label",5),e(29,"Professional Body:"),i(),e(30,`
                `),l(31,at,2,1,"div",6),e(32,`
              `),i(),e(33,`
            `),i(),e(34,`
            `),t(35,"div",4),e(36,`
              `),t(37,"div",2),e(38,`
                `),t(39,"label",5),e(40,"Membership Number:"),i(),e(41,`
                `),l(42,mt,2,1,"div",6),e(43,`
              `),i(),e(44,`
            `),i(),e(45,`
            `),t(46,"div",4),e(47,`
              `),t(48,"div",2),e(49,`
                `),t(50,"label",5),e(51,"Email:"),i(),e(52,`
                `),l(53,st,2,1,"div",6),e(54,`
              `),i(),e(55,`
            `),i(),e(56,`
            `),t(57,"div",4),e(58,`
              `),t(59,"div",2),e(60,`
                `),t(61,"label",5),e(62,"Status:"),i(),e(63,`
                `),l(64,lt,2,1,"div",6),e(65,`
              `),i(),e(66,`
            `),i(),e(67,`
            `),t(68,"div",4),e(69,`
              `),t(70,"div",2),e(71,`
                `),t(72,"label",5),e(73,"Postal Address:"),i(),e(74,`
                `),l(75,dt,2,1,"div",6),e(76,`
              `),i(),e(77,`
            `),i(),e(78,`
            `),t(79,"div",4),e(80,`
              `),t(81,"div",2),e(82,`
                `),t(83,"label",5),e(84,"Qualification:"),i(),e(85,`
                `),l(86,ct,2,1,"div",6),e(87,`
              `),i(),e(88,`
            `),i(),e(89,`
            `),t(90,"div",4),e(91,`
              `),t(92,"div",2),e(93,`
                `),t(94,"label",5),e(95,"Business Name:"),i(),e(96,`
                `),l(97,pt,2,1,"div",6),e(98,`
              `),i(),e(99,`
            `),i(),e(100,`
            `),t(101,"div",4),e(102,`
              `),t(103,"div",2),e(104,`
                `),t(105,"label",5),e(106,"Nationality:"),i(),e(107,`
                `),l(108,xt,2,1,"div",6),e(109,`
              `),i(),e(110,`
            `),i(),e(111,`
            `),t(112,"div",4),e(113,`
              `),t(114,"div",2),e(115,`
                `),t(116,"label",5),e(117,"Subscription Year:"),i(),e(118,`
                `),l(119,ft,2,1,"div",6),e(120,`
              `),i(),e(121,`
            `),i(),e(122,`
            `),t(123,"div",7),e(124,`
              `),t(125,"div",2),e(126,`
                `),t(127,"label",5),e(128,"Good Standing:"),i(),e(129,`
                `),l(130,ut,2,1,"div",6),e(131,`
              `),i(),e(132,`
            `),i(),e(133,`
          `),i(),e(134,`

          `),t(135,"div",8),e(136,`
            `),t(137,"button",9),e(138,"Cancel"),i(),e(139,`
          `),i(),e(140,`

        `),i(),e(141,`

      `),i(),e(142,`
    `),i(),e(143,`
  `),i(),e(144,`
`),i()),n&2&&(s("ngIf",a.mProgress()),m(20),s("ngIf",a.item.consultant_name),m(11),s("ngIf",a.item.professional_body),m(11),s("ngIf",a.item.membership_number),m(11),s("ngIf",a.item.email),m(11),s("ngIf",a.item.status),m(11),s("ngIf",a.item.postal_address),m(11),s("ngIf",a.item.qualification),m(11),s("ngIf",a.item.business_name),m(11),s("ngIf",a.item.nationality),m(11),s("ngIf",a.item.subscription_year),m(11),s("ngIf",a.item.good_standing))},dependencies:[_,h,w,C,b,y,E,I],encapsulation:2})}};var vt=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:z,data:{title:"Registered Professionals"}},{path:"create",component:$,data:{title:"Registered Professionals / Create"}},{path:"edit/:id",component:W,data:{title:"Registered Professionals / Edit"}},{path:"show/:id",component:Y,data:{title:"Registered Professionals / Show"}}],K=class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=B({type:r})}static{this.\u0275inj=M({imports:[A,Z.forChild(vt),Z]})}};var je=class r{static{this.\u0275fac=function(n){return new(n||r)}}static{this.\u0275mod=B({type:r})}static{this.\u0275inj=M({imports:[A,K,Ie,ve,Se,_e,he,Ce,Ee,Re,ue]})}};export{je as RegisteredProfessionalModule};
