import{$a as v,Aa as n,Dc as c,Fc as E,Gc as l,Hc as s,J as r,Lb as b,Ma as h,Vb as y,Za as t,_a as I,dd as R,ea as x,la as C,ma as g,na as m,tb as M,za as e,zb as p}from"./chunk-NKO5GFD6.js";var d=class i{constructor(a,o){this.route=a;this.location=o}ngOnInit(){this.mParam1=this.route.snapshot.paramMap.get("param1"),this.mParam2=this.route.snapshot.paramMap.get("param2")}onGoBack(){this.location.back()}static{this.\u0275fac=function(o){return new(o||i)(C(b),C(M))}}static{this.\u0275cmp=g({type:i,selectors:[["app-index"]],standalone:!1,decls:26,vars:2,consts:[[1,"justify-content-center"],["md","6"],[1,"clearfix"],[1,"float-start","display-3","me-4"],[1,"pt-3"],[1,"text-body-secondary","float-start"],[1,"input-prepend","text-center"],[1,"btn","btn-warning","text-light",3,"click"]],template:function(o,f){o&1&&(e(0,"div"),t(1,`

  `),e(2,"c-row",0),t(3,`
    `),e(4,"c-col",1),t(5,`
      `),e(6,"span",2),t(7,`
        `),e(8,"h1",3),t(9),n(),t(10,`
        `),e(11,"h4",4),t(12),n(),t(13,`
        `),e(14,"p",5),t(15,`
          The page you are looking for might be temporarily unavailable.
        `),n(),t(16,`
      `),n(),t(17,`
      `),e(18,"c-input-group",6),t(19,`
         `),e(20,"button",7),h("click",function(){return f.onGoBack()}),t(21,"Go Back"),n(),t(22,`
      `),n(),t(23,`
    `),n(),t(24,`
  `),n(),t(25,`

`),n()),o&2&&(x(9),I(f.mParam1),x(3),v("Oops! ",f.mParam2,"!"))},dependencies:[l,s,c],encapsulation:2})}};var P=[{path:"",redirectTo:":param1/:param2",pathMatch:"full"},{path:":param1/:param2",component:d,data:{title:"Index"}}],u=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=m({type:i})}static{this.\u0275inj=r({imports:[p,y.forChild(P),y]})}};var k=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=m({type:i})}static{this.\u0275inj=r({imports:[p,u,R,l,E,s,c]})}};export{k as ErrorModule};
