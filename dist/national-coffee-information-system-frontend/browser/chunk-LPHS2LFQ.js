import{a as P}from"./chunk-5UJVTR3G.js";import{a as te,b as j,c as ie,d as ne,g as re,i as oe,j as ae,n as me,o as le}from"./chunk-RB2TDSF7.js";import{c as y,d as $,f as ee}from"./chunk-2JWXX3AJ.js";import{Aa as i,Ba as d,Ec as k,J as h,Jc as W,Ma as C,Oa as N,Pc as X,Vb as A,X as q,Ya as D,Za as e,_a as S,_c as Y,dd as Z,ea as a,gc as H,ib as U,ic as J,jc as O,kb as B,la as p,lb as G,lc as z,ma as v,na as b,qa as x,qc as K,ta as T,tb as L,ub as _,vc as Q,wb as R,ya as l,yb as V,za as t,zb as E}from"./chunk-NKO5GFD6.js";var se=o=>({"is-invalid":o});function ve(o,m){o&1&&d(0,"app-progress")}function xe(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function Se(o,m){if(o&1&&(t(0,"div",20),e(1,`
                      `),x(2,xe,2,0,"div",0),e(3,`
                    `),i()),o&2){let r,n=N();a(2),l("ngIf",(r=n.itemForm.get("password"))==null||r.errors==null?null:r.errors.required)}}function ge(o,m){o&1&&(t(0,"div"),e(1,"This field is required."),i())}function we(o,m){if(o&1&&(t(0,"div",20),e(1,`
                      `),x(2,ge,2,0,"div",0),e(3,`
                    `),i()),o&2){let r,n=N();a(2),l("ngIf",(r=n.itemForm.get("password_confirmation"))==null||r.errors==null?null:r.errors.required)}}var g=class o{constructor(m,r,n,s){this.mProfileService=m;this.mToastrService=r;this.location=n;this.fb=s;this.mProgress=q(!1);this.mShowPassword=!1;this.mShowPasswordConfirmation=!1;this.itemForm=this.fb.group({password:["",j.required],password_confirmation:["",j.required]})}onSubmit(m){this.mProgress.set(!0),this.mProfileService.changePassword(m).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.item=r.data,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.warning(r.error.message),this.mProgress.set(!1)}})}goBack(){this.location.back()}static{this.\u0275fac=function(r){return new(r||o)(p(y),p($),p(L),p(me))}}static{this.\u0275cmp=v({type:o,selectors:[["app-edit"]],standalone:!1,decls:76,vars:19,consts:[[4,"ngIf"],[1,"row"],[1,"col-md-12"],["appAnimations","animate-fade-in-left",1,"card","mb-4","shadow-sm","border-0"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[3,"ngSubmit","formGroup"],[1,"mb-3"],[1,"form-group","mb-3"],["for","password",1,"col-form-label","required"],[1,"input-group"],["formControlName","password",1,"form-control",3,"ngClass","type"],["role","button",1,"input-group-text",2,"cursor","pointer",3,"click"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","password_confirmation",1,"col-form-label","required"],["formControlName","password_confirmation",1,"form-control",3,"ngClass","type"],[1,"mt-3","text-end"],["type","button",1,"btn","btn-light","me-2",3,"click"],["type","submit",1,"btn","btn-warning",3,"disabled"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(x(0,ve,1,0,"app-progress",0),t(1,"div",1),e(2,`
  `),t(3,"div",2),e(4,`
    `),t(5,"div",3),e(6,`

      `),t(7,"div",4),e(8,`
        `),t(9,"div",5),e(10,"Update Profile"),i(),e(11,`
      `),i(),e(12,`

      `),t(13,"div",6),e(14,`
        `),t(15,"form",7),C("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(16,`
          `),t(17,"div",8),e(18,`
            `),t(19,"div",1),e(20,`
              `),t(21,"div",2),e(22,`
                `),t(23,"div",9),e(24,`
                  `),t(25,"label",10),e(26,"Password:"),i(),e(27,`
                  `),t(28,"div",11),e(29,`
                    `),d(30,"input",12),e(31,`
                    `),t(32,"span",13),C("click",function(){return n.mShowPassword=!n.mShowPassword}),e(33," "),d(34,"i"),i(),e(35,`
                    `),x(36,Se,4,1,"div",14),e(37,`
                  `),i(),e(38,`
                `),i(),e(39,`
              `),i(),e(40,`
              `),t(41,"div",2),e(42,`
                `),t(43,"div",9),e(44,`
                  `),t(45,"label",15),e(46,"Confirm Password:"),i(),e(47,`
                  `),t(48,"div",11),e(49,`
                    `),d(50,"input",16),e(51,`
                    `),t(52,"span",13),C("click",function(){return n.mShowPasswordConfirmation=!n.mShowPasswordConfirmation}),e(53," "),d(54,"i"),i(),e(55,`
                    `),x(56,we,4,1,"div",14),e(57,`
                  `),i(),e(58,`
                `),i(),e(59,`
              `),i(),e(60,`
            `),i(),e(61,`
            `),t(62,"div",17),e(63,`
              `),t(64,"button",18),C("click",function(){return n.goBack()}),e(65,"Cancel"),i(),e(66,`
              `),t(67,"button",19),e(68,"Submit"),i(),e(69,`
            `),i(),e(70,`
          `),i(),e(71,`
        `),i(),e(72,`
      `),i(),e(73,`

    `),i(),e(74,`
  `),i(),e(75,`
`),i()),r&2){let s,u,c,f;l("ngIf",n.mProgress()),a(15),l("formGroup",n.itemForm),a(15),l("ngClass",U(15,se,((s=n.itemForm.get("password"))==null?null:s.invalid)&&(((s=n.itemForm.get("password"))==null?null:s.dirty)||((s=n.itemForm.get("password"))==null?null:s.touched))))("type",n.mShowPassword?"text":"password"),a(2),T("aria-label",n.mShowPassword?"Hide password":"Show password"),a(2),D(n.mShowPassword?"fa-solid fa-eye-slash":"fa-solid fa-eye"),a(2),l("ngIf",((u=n.itemForm.get("password"))==null?null:u.invalid)&&(((u=n.itemForm.get("password"))==null?null:u.dirty)||((u=n.itemForm.get("password"))==null?null:u.touched))),a(14),l("ngClass",U(17,se,((c=n.itemForm.get("password_confirmation"))==null?null:c.invalid)&&(((c=n.itemForm.get("password_confirmation"))==null?null:c.dirty)||((c=n.itemForm.get("password_confirmation"))==null?null:c.touched))))("type",n.mShowPasswordConfirmation?"text":"password"),a(2),T("aria-label",n.mShowPasswordConfirmation?"Hide password_confirmation":"Show password_confirmation"),a(2),D(n.mShowPasswordConfirmation?"fa-solid fa-eye-slash":"fa-solid fa-eye"),a(2),l("ngIf",((f=n.itemForm.get("password_confirmation"))==null?null:f.invalid)&&(((f=n.itemForm.get("password_confirmation"))==null?null:f.dirty)||((f=n.itemForm.get("password_confirmation"))==null?null:f.touched))),a(11),l("disabled",n.itemForm.invalid)}},dependencies:[_,R,ee,P,re,te,ie,ne,ae,oe],encapsulation:2})}};var w=class o{constructor(m){this.mAuthService=m}ngOnInit(){this.mCurrentUser=this.mAuthService.currentUser}static{this.\u0275fac=function(r){return new(r||o)(p(y))}}static{this.\u0275cmp=v({type:o,selectors:[["app-show"]],standalone:!1,decls:53,vars:8,consts:[["appAnimations","animate-fade-in-right",1,"card","mb-4","shadow-sm","border-0"],[1,"card-body"],[1,"text-center","mb-3"],[1,"rounded-circle","bg-warning","text-light","d-inline-flex","align-items-center","justify-content-center",2,"width","86px","height","86px"],["aria-hidden","true",1,"fa","fa-user","fa-3x"],[1,"text-center"],[1,"text-muted","text-center"],[1,"list-group","list-group-unbordered","mb-3"],[1,"list-group-item","d-flex","justify-content-between","align-items-center"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-end"],[1,"float-right"]],template:function(r,n){r&1&&(t(0,"div"),e(1,`

  `),t(2,"div",0),e(3,`

    `),t(4,"div",1),e(5,`
      `),t(6,"div",2),e(7,`
        `),t(8,"span",3),e(9,`
          `),d(10,"i",4),e(11,`
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
          `),t(43,"b"),e(44,"Joined:"),i(),t(45,"span",11),e(46),B(47,"date"),i(),e(48,`
        `),i(),e(49,`
      `),i(),e(50,`
    `),i(),e(51,`

  `),i(),e(52,`

`),i()),r&2&&(a(17),S(n.mCurrentUser==null?null:n.mCurrentUser.name),a(3),S((n.mCurrentUser==null||n.mCurrentUser.role==null?null:n.mCurrentUser.role.name)||""),a(9),l("ngClass",(n.mCurrentUser==null?null:n.mCurrentUser.status_id)===1?"bg-success":"bg-warning"),a(),S((n.mCurrentUser==null||n.mCurrentUser.status==null?null:n.mCurrentUser.status.name)||"-"),a(8),S(n.mCurrentUser==null?null:n.mCurrentUser.email),a(8),S(G(47,6,n.mCurrentUser==null?null:n.mCurrentUser.created_at)))},dependencies:[_,P,V],encapsulation:2})}};var I=class o{constructor(){}static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275cmp=v({type:o,selectors:[["app-index"]],standalone:!1,decls:15,vars:0,consts:[[1,"row"],[1,"col-md-4"],[1,"col-md-8"]],template:function(r,n){r&1&&(t(0,"div"),e(1,`
  `),t(2,"div",0),e(3,`
    `),t(4,"div",1),e(5,`
      `),d(6,"app-show"),e(7,`
    `),i(),e(8,`
    `),t(9,"div",2),e(10,`
      `),d(11,"app-edit"),e(12,`
    `),i(),e(13,`
  `),i(),e(14,`
`),i())},dependencies:[g,w],encapsulation:2})}};var be=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:I,data:{title:"Profile"}},{path:"edit/:id",component:g,data:{title:"Profile / Edit"}},{path:"show/:id",component:w,data:{title:"Profile / Show"}}],M=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=b({type:o})}static{this.\u0275inj=h({imports:[E,A.forChild(be),A]})}};var pe=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=b({type:o})}static{this.\u0275inj=h({imports:[E,M,Z,z,Q,k,W,X,J,Y,k,le,O,K,H]})}};export{pe as ProfileModule};
