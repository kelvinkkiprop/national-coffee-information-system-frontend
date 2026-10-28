import{G as x,Ja as S,b as I,ha as M,j as p,ja as g,ka as E,la as b,v as h}from"./chunk-MFTTHQQC.js";import{Kb as e,Lb as n,Mb as C,Za as s,Zb as y,_ as a,hb as f,mb as v,nb as m,oc as t,pc as u}from"./chunk-HB5POUDB.js";var c=class i{constructor(r,o){this.route=r;this.location=o}ngOnInit(){this.mParam1=this.route.snapshot.paramMap.get("param1"),this.mParam2=this.route.snapshot.paramMap.get("param2")}onGoBack(){this.location.back()}static{this.\u0275fac=function(o){return new(o||i)(f(h),f(I))}}static{this.\u0275cmp=v({type:i,selectors:[["app-index"]],standalone:!1,decls:28,vars:2,consts:[[1,"container"],[1,"row","justify-content-center"],[1,"col-md-12"],[1,"text-center","text-body","my-5"],[1,"display-1"],[1,"btn","btn-warning",3,"click"],[1,"fa-solid","fa-arrow-circle-left","me-1"]],template:function(o,l){o&1&&(e(0,"div"),t(1,`
	`),e(2,"div",0),t(3,`
		`),e(4,"div",1),t(5,`
			`),e(6,"div",2),t(7,`

        `),e(8,"div",3),t(9,`
          `),e(10,"div",4),t(11),n(),t(12,`
          `),e(13,"h1"),t(14,"Oops!"),n(),t(15,`
          `),e(16,"p"),t(17),n(),t(18,`
          `),e(19,"button",5),y("click",function(){return l.onGoBack()}),t(20,`
            `),C(21,"i",6),t(22,`Go Back
          `),n(),t(23,`
        `),n(),t(24,`

			`),n(),t(25,`
		`),n(),t(26,`
	`),n(),t(27,`
 `),n()),o&2&&(s(11),u(l.mParam1),s(6),u(l.mParam2))},encapsulation:2})}};var j=[{path:"",redirectTo:":param1/:param2",pathMatch:"full"},{path:":param1/:param2",component:c,data:{title:"Index"}}],d=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=m({type:i})}static{this.\u0275inj=a({imports:[p,x.forChild(j),x]})}};var R=class i{static{this.\u0275fac=function(o){return new(o||i)}}static{this.\u0275mod=m({type:i})}static{this.\u0275inj=a({imports:[p,d,S,E,g,b,M]})}};export{R as ErrorModule};
