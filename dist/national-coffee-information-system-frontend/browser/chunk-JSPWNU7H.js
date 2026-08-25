import{a as Z,b as D,c as $,d as ee,g as te,i as ie,j as ne,k as re,l as oe}from"./chunk-YIGY46ZF.js";import{c as _,d as X,f as Y}from"./chunk-YJ3MTBCO.js";import{Cc as U,Hc as H,J as b,Ka as M,Ma as P,Nc as K,Tb as T,X as j,Xa as e,Ya as g,Yc as Q,bd as W,da as l,ec as L,fb as N,gc as R,hb as A,hc as V,ib as k,ja as p,jc as J,ka as x,la as h,oa as v,oc as O,qb as q,rb as E,tb as B,tc as z,vb as G,wa as a,wb as y,xa as t,ya as i,za as s}from"./chunk-YECXK5AA.js";var me=o=>({"is-invalid":o});function pe(o,m){o&1&&s(0,"app-progress")}function ue(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function ce(o,m){if(o&1&&(t(0,"div",18),e(1,`
                    `),v(2,ue,2,0,"div",0),e(3,`
                  `),i()),o&2){let r,n=P();l(2),a("ngIf",(r=n.itemForm.get("password"))==null||r.errors==null?null:r.errors.required)}}function fe(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function xe(o,m){if(o&1&&(t(0,"div",18),e(1,`
                    `),v(2,fe,2,0,"div",0),e(3,`
                  `),i()),o&2){let r,n=P();l(2),a("ngIf",(r=n.itemForm.get("password_confirmation"))==null||r.errors==null?null:r.errors.required)}}var S=class o{constructor(m,r,n,d){this.mProfileService=m;this.mToastrService=r;this.location=n;this.fb=d;this.mProgress=j(!1);this.itemForm=this.fb.group({password:["",D.required],password_confirmation:["",D.required]})}onSubmit(m){this.mProgress.set(!0),this.mProfileService.changePassword(m).subscribe({next:r=>{r&&(this.mToastrService.info(r.message),this.item=r.data,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}goBack(){this.location.back()}static{this.\u0275fac=function(r){return new(r||o)(p(_),p(X),p(q),p(re))}}static{this.\u0275cmp=x({type:o,selectors:[["app-edit"]],standalone:!1,decls:62,vars:11,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12"],[1,"card","mb-4","shadow-sm","border-0"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"form-group","mb-3"],["for","password",1,"col-form-label","required"],["formControlName","password","type","password",1,"form-control",3,"ngClass"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","password_confirmation",1,"col-form-label","required"],["formControlName","password_confirmation","type","password",1,"form-control",3,"ngClass"],[1,"mt-3","text-end"],["type","button",1,"btn","btn-danger","me-2",3,"click"],["type","submit",1,"btn","btn-info",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(v(0,pe,1,0,"app-progress",0),t(1,"div",1),e(2,`
  `),t(3,"div",2),e(4,`
    `),t(5,"div",3),e(6,`

      `),t(7,"div",4),e(8,`
        `),t(9,"div",5),e(10,"Update Profile"),i(),e(11,`
      `),i(),e(12,`

      `),t(13,"div",6),e(14,`
        `),t(15,"form",7),M("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(16,`
          `),t(17,"div",8),e(18,`
            `),t(19,"div",1),e(20,`
              `),t(21,"div",2),e(22,`
                `),t(23,"div",9),e(24,`
                  `),t(25,"label",10),e(26,"Password:"),i(),e(27,`
                  `),s(28,"input",11),e(29,`
                  `),v(30,ce,4,1,"div",12),e(31,`
                `),i(),e(32,`
              `),i(),e(33,`
              `),t(34,"div",2),e(35,`
                `),t(36,"div",9),e(37,`
                  `),t(38,"label",13),e(39,"Confirm Password:"),i(),e(40,`
                  `),s(41,"input",14),e(42,`
                  `),v(43,xe,4,1,"div",12),e(44,`
                `),i(),e(45,`
              `),i(),e(46,`
            `),i(),e(47,`
            `),t(48,"div",15),e(49,`
              `),t(50,"button",16),M("click",function(){return n.goBack()}),e(51,"Cancel"),i(),e(52,`
              `),t(53,"button",17),e(54,"Submit"),i(),e(55,`
            `),i(),e(56,`
          `),i(),e(57,`
        `),i(),e(58,`
      `),i(),e(59,`

    `),i(),e(60,`
  `),i(),e(61,`
`),i()),r&2){let d,u,c,f;a("ngIf",n.mProgress()),l(15),a("formGroup",n.itemForm),l(13),a("ngClass",N(7,me,((d=n.itemForm.get("password"))==null?null:d.invalid)&&(((d=n.itemForm.get("password"))==null?null:d.dirty)||((d=n.itemForm.get("password"))==null?null:d.touched)))),l(2),a("ngIf",((u=n.itemForm.get("password"))==null?null:u.invalid)&&(((u=n.itemForm.get("password"))==null?null:u.dirty)||((u=n.itemForm.get("password"))==null?null:u.touched))),l(11),a("ngClass",N(9,me,((c=n.itemForm.get("password_confirmation"))==null?null:c.invalid)&&(((c=n.itemForm.get("password_confirmation"))==null?null:c.dirty)||((c=n.itemForm.get("password_confirmation"))==null?null:c.touched)))),l(2),a("ngIf",((f=n.itemForm.get("password_confirmation"))==null?null:f.invalid)&&(((f=n.itemForm.get("password_confirmation"))==null?null:f.dirty)||((f=n.itemForm.get("password_confirmation"))==null?null:f.touched))),l(10),a("disabled",n.itemForm.invalid)}},dependencies:[E,B,Y,te,Z,$,ee,ne,ie],encapsulation:2})}};var C=class o{constructor(m){this.mAuthService=m}ngOnInit(){this.mCurrentUser=this.mAuthService.currentUser}static{this.\u0275fac=function(r){return new(r||o)(p(_))}}static{this.\u0275cmp=x({type:o,selectors:[["app-show"]],standalone:!1,decls:53,vars:8,consts:[[1,"card","mb-4","shadow-sm","border-0"],[1,"card-body"],[1,"text-center","mb-3"],[1,"rounded-circle","bg-danger","text-light","d-inline-flex","align-items-center","justify-content-center",2,"width","86px","height","86px"],["aria-hidden","true",1,"fa","fa-user","fa-3x"],[1,"text-center"],[1,"text-muted","text-center"],[1,"list-group","list-group-unbordered","mb-3"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-end"],[1,"float-right"]],template:function(r,n){r&1&&(t(0,"div"),e(1,`

  `),t(2,"div",0),e(3,`

    `),t(4,"div",1),e(5,`
      `),t(6,"div",2),e(7,`
        `),t(8,"span",3),e(9,`
          `),s(10,"i",4),e(11,`
        `),i(),e(12,`
      `),i(),e(13,`
      `),t(14,"div"),e(15,`
        `),t(16,"h4",5),e(17),i(),e(18,`
        `),t(19,"p",6),e(20),i(),e(21,`
      `),i(),e(22,`
      `),t(23,"ul",7),e(24,`
        `),t(25,"li",8),e(26,`
          `),t(27,"b"),e(28,"Status:"),i(),t(29,"span",9),e(30),i(),e(31,`
        `),i(),e(32,`
        `),t(33,"li",8),e(34,`
          `),t(35,"b"),e(36,"Email:"),i(),t(37,"span",10),e(38),i(),e(39,`
        `),i(),e(40,`
        `),t(41,"li",8),e(42,`
          `),t(43,"b"),e(44,"Joined:"),i(),t(45,"span",11),e(46),A(47,"date"),i(),e(48,`
        `),i(),e(49,`
      `),i(),e(50,`
    `),i(),e(51,`

  `),i(),e(52,`

`),i()),r&2&&(l(17),g(n.mCurrentUser==null?null:n.mCurrentUser.name),l(3),g((n.mCurrentUser==null||n.mCurrentUser.role==null?null:n.mCurrentUser.role.name)||""),l(9),a("ngClass",(n.mCurrentUser==null?null:n.mCurrentUser.status_id)===1?"bg-info":"bg-danger"),l(),g((n.mCurrentUser==null||n.mCurrentUser.status==null?null:n.mCurrentUser.status.name)||"-"),l(8),g(n.mCurrentUser==null?null:n.mCurrentUser.email),l(8),g(k(47,6,n.mCurrentUser==null?null:n.mCurrentUser.created_at)))},dependencies:[E,G],encapsulation:2})}};var F=class o{constructor(){}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=x({type:o,selectors:[["app-index"]],standalone:!1,decls:15,vars:0,consts:[[1,"row"],[1,"col-md-4"],[1,"col-md-8"]],template:function(r,n){r&1&&(t(0,"div"),e(1,`
  `),t(2,"div",0),e(3,`
    `),t(4,"div",1),e(5,`
      `),s(6,"app-show"),e(7,`
    `),i(),e(8,`
    `),t(9,"div",2),e(10,`
      `),s(11,"app-edit"),e(12,`
    `),i(),e(13,`
  `),i(),e(14,`
`),i())},dependencies:[S,C],encapsulation:2})}};var Se=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:F,data:{title:"Profile"}},{path:"edit/:id",component:S,data:{title:"Profile / Edit"}},{path:"show/:id",component:C,data:{title:"Profile / Show"}}],I=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=h({type:o})}static{this.\u0275inj=b({imports:[y,T.forChild(Se),T]})}};var ae=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=h({type:o})}static{this.\u0275inj=b({imports:[y,I,W,J,z,U,H,K,R,Q,U,oe,V,O,L]})}};export{ae as ProfileModule};
