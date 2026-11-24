import{a as A}from"./chunk-YLIRXORT.js";import{p as B}from"./chunk-WUV7VT53.js";import{$ as R,Ea as P,G as b,Ja as k,M as D,R as I,X as N,Y as T,ia as L,j as u,ka as _,la as F,na as O,ta as j,y as E}from"./chunk-M56LXQJ4.js";import{Db as i,Eb as a,Fb as f,T as c,Yb as M,Zb as v,_b as S,fb as r,gb as d,hc as t}from"./chunk-4BW25U23.js";import{e as Q}from"./chunk-2WH2EVR6.js";var C=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=r({type:n,selectors:[["app-create"]],standalone:!1,decls:2,vars:0,template:function(e,s){e&1&&(i(0,"p"),t(1,"create works!"),a())},encapsulation:2})}};var h=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=r({type:n,selectors:[["app-edit"]],standalone:!1,decls:2,vars:0,template:function(e,s){e&1&&(i(0,"p"),t(1,"edit works!"),a())},encapsulation:2})}};var p=Q(A());var G=["mapContainer"],m=class n{ngAfterViewInit(){this.map=p.map(this.mapContainer.nativeElement,{preferCanvas:!0}),p.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:"&copy; OpenStreetMap contributors"}).addTo(this.map),fetch("assets/coffee_farms_datasets/kericho_county_greater_than_4ha_joined.geojson").then(o=>o.json()).then(o=>{let e=p.geoJSON(o,{style:{color:"#224326",weight:1,fillColor:"#62a66b",fillOpacity:.5}}).addTo(this.map);e.getBounds().isValid()&&this.map.fitBounds(e.getBounds())}).catch(o=>console.error("GeoJSON error:",o))}ngOnDestroy(){this.map?.remove()}static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=r({type:n,selectors:[["app-show"]],viewQuery:function(e,s){if(e&1&&M(G,5),e&2){let g;v(g=S())&&(s.mapContainer=g.first)}},standalone:!1,decls:29,vars:0,consts:[["mapContainer",""],["xs","12"],[1,"mb-4","shadow-sm","border-0"],[1,"row"],[1,"col-12"],["id","map"],[1,"mt-3","text-end"],["routerLink","/traceabilities","type","button",1,"btn","btn-light"]],template:function(e,s){e&1&&(i(0,"c-row"),t(1,`
  `),i(2,"c-col",1),t(3,`
    `),i(4,"c-card",2),t(5,`
      `),i(6,"c-card-body"),t(7,`

        `),i(8,"div"),t(9,`
          `),i(10,"div",3),t(11,`
            `),i(12,"div",4),t(13,`
              `),f(14,"div",5,0),t(16,`
            `),a(),t(17,`
          `),a(),t(18,`
          `),i(19,"div",6),t(20,`
            `),i(21,"button",7),t(22,"Cancel"),a(),t(23,`
          `),a(),t(24,`
        `),a(),t(25,`

      `),a(),t(26,`
    `),a(),t(27,`
  `),a(),t(28,`
`),a())},dependencies:[E,N,T,_,F],styles:["#map[_ngcontent-%COMP%]{width:100%;height:600px}"]})}};var y=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275cmp=r({type:n,selectors:[["app-index"]],standalone:!1,decls:3,vars:0,template:function(e,s){e&1&&(i(0,"p"),t(1,"index works!"),a(),f(2,"app-show"))},dependencies:[m],encapsulation:2})}};var q=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:y,data:{title:"Traceabilities"}},{path:"create",component:C,data:{title:"Traceabilities / Create"}},{path:"edit/:id",component:h,data:{title:"Traceabilities / Edit"}},{path:"show/:id",component:m,data:{title:"Traceabilities / Show"}}],x=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=d({type:n})}static{this.\u0275inj=c({imports:[u,b.forChild(q),b]})}};var V=class n{static{this.\u0275fac=function(e){return new(e||n)}}static{this.\u0275mod=d({type:n})}static{this.\u0275inj=c({imports:[u,x,k,I,R,L,O,j,P,B,D]})}};export{V as TraceabilityModule};
