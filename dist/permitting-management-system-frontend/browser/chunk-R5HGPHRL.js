import{a as ot}from"./chunk-KI35FAHT.js";import{a as B,b as he,c as Yt}from"./chunk-ZV5R7RUV.js";import{a as ni}from"./chunk-2SJHK2EW.js";import{b as nt,c as Ee,d as f,e as fe,f as Y,g as Wt,h as Ht,i as J,j as rt,k as Ye,l as xe,m as K,n as Fe,o as Ie,p as Te,q as ge,s as zt}from"./chunk-Q6GQIRJS.js";import{a as L,b as Gt}from"./chunk-LKYWHRMH.js";import{b as Se,c as V,e as D}from"./chunk-BRAGQGPK.js";import{$a as e,Aa as m,Ba as i,Bc as tt,Ca as t,Cb as de,Da as c,Db as G,Eb as R,Fc as pe,Gb as It,Gc as z,Hb as $e,Hc as Mt,Ib as et,Ic as Nt,M as Xe,Ma as me,Mc as kt,Nc as jt,Oa as y,Oc as it,Pc as At,Qa as p,R as O,Rc as Rt,S as U,T as j,Tc as ue,U as ve,Ub as se,Uc as ce,Wb as _e,Wc as Vt,Xa as yt,Xb as W,_ as C,ab as g,bb as q,cb as b,cd as Dt,db as I,dc as xt,dd as Lt,e as ii,eb as T,fa as vt,fb as P,ga as ye,gb as E,ha as l,hb as Pe,jb as be,kb as x,lb as bt,mb as St,na as v,nb as ht,nd as Bt,oa as A,ob as Ct,od as Ot,pa as Qe,pc as ze,pd as Ut,qb as Ke,qc as Tt,rb as Et,sa as d,sb as Ze,sc as Pt,tb as Ft,wc as H,xc as qt,yc as wt}from"./chunk-AJQSUAPJ.js";var Xt=ii(ni());var ri=o=>({"is-invalid":o}),oi=(o,a,r,n,_,s,F)=>({"chip-primary":o,"chip-secondary":a,"chip-success":r,"bg-danger":n,"chip-warning text-dark":_,"chip-info":s,"chip-dark":F}),ai=(o,a,r,n,_)=>({"bg-secondary text-dark":o,"bg-danger":a,"bg-dark":r,"bg-warning text-dark":n,"bg-success":_}),Jt=()=>[1],gt=()=>[2],li=(o,a,r)=>({"bg-warning":o,"bg-success":a,"bg-danger":r}),mi=(o,a)=>({active:o,disabled:a});function di(o,a){o&1&&c(0,"app-progress")}function si(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _i(o,a){if(o&1&&(i(0,"div",16),e(1,`
                  `),d(2,si,2,0,"div",1),e(3,`
                `),t()),o&2){let r=p();l(2),m("ngIf",r.search_term.errors==null?null:r.search_term.errors.required)}}function pi(o,a){if(o&1&&(i(0,"c-badge",34),e(1,`
                      `),i(2,"small"),e(3),t(),e(4,`
                    `),t()),o&2){let r=p().$implicit;m("ngClass",St(2,li,r.variation_status_id==1,r.variation_status_id==2,r.variation_status_id==3)),l(3),g(r.variation_status==null?null:r.variation_status.name)}}function ui(o,a){if(o&1&&(i(0,"li")(1,"a",35),j(),c(2,"svg",36),e(3," Edit"),t()()),o&2){let r=p().$implicit;l(),m("routerLink",Pe("/construction-permits/edit/",r.id))}}function ci(o,a){if(o&1&&(i(0,"li")(1,"a",35),j(),c(2,"svg",37),e(3," Process"),t()()),o&2){let r=p().$implicit;l(),m("routerLink",Pe("/construction-permits/process/",r.id))}}function fi(o,a){if(o&1&&(i(0,"li")(1,"a",35),j(),c(2,"svg",38),e(3," Variations"),t()()),o&2){let r=p().$implicit;l(),m("routerLink",Pe("/construction-permits/variations/",r.id))}}function xi(o,a){if(o&1){let r=me();i(0,"button",39),y("click",function(){O(r);let _=p().$implicit,s=p(2);return U(s.onDelete(_))}),j(),c(1,"svg",40),t()}}function gi(o,a){if(o&1&&(i(0,"tr"),e(1,`
                `),i(2,"td"),e(3),t(),e(4,`
                `),i(5,"td"),e(6),t(),e(7,`
                `),i(8,"td"),e(9),t(),e(10,`
                `),i(11,"td"),e(12,`
                  `),i(13,"small",22),e(14),t(),e(15,`
                `),t(),e(16,`
                `),i(17,"td"),e(18),t(),e(19,`
                `),i(20,"td"),e(21),Ke(22,"currency"),t(),e(23,`
                `),i(24,"td"),e(25,`
                  `),i(26,"button",23),e(27),d(28,pi,5,6,"c-badge",24),e(29,`
                  `),t(),e(30,`
                `),t(),e(31,`
                `),i(32,"td"),e(33),t(),e(34,`
                `),i(35,"td"),e(36,`
                  `),i(37,"span",25),e(38),t(),e(39,`
                `),t(),e(40,`
                `),i(41,"td"),e(42),Ke(43,"date"),t(),e(44,`
                `),i(45,"td"),e(46,`
                  `),i(47,"div",26),e(48,`
                    `),i(49,"a",27),j(),c(50,"svg",28),t(),e(51,`
                    `),e(52,`
                    `),ve(),i(53,"c-dropdown",29),e(54,`
                      `),i(55,"button",30),e(56,`
                        `),j(),c(57,"svg",31),e(58,`
                      `),t(),e(59,`
                      `),ve(),i(60,"ul",32),e(61,`
                        `),e(62,`
                        `),d(63,ui,4,2,"li",1),e(64,`
                        `),d(65,ci,4,2,"li",1),e(66,`
                        `),d(67,fi,4,2,"li",1),e(68,`
                      `),t(),e(69,`
                    `),t(),e(70,`
                    `),d(71,xi,2,0,"button",33),e(72,`
                  `),t(),e(73,`
                `),t(),e(74,`
              `),t()),o&2){let r=a.$implicit,n=a.index,_=p(2);l(3),q("",_.mPageFrom+n,"."),l(3),g(r.project_brief),l(3),g(r.investor.name),l(4),m("ngClass",Ct(26,oi,r.type_id==1,r.type_id==2,r.type_id==3,r.type_id==4,r.type_id==5,r.type_id==6,r.type_id==7)),l(),q(`
                    `,r.type==null?null:r.type.name,`
                  `),l(4),g(r.estimated_project_duration),l(3),g(Ze(22,19,r.estimated_project_construction_cost,"USD","symbol","1.2-2")),l(6),q(`
                    `,r.has_variations,`
                    `),l(),m("ngIf",r.variation_status),l(5),g(r.consultant.name),l(4),m("ngClass",ht(34,ai,r.status_id==1,r.status_id==2,r.status_id==3,r.status_id==4,r.status_id==5)),l(),q(`
                    `,r.status==null?null:r.status.name,`
                  `),l(4),g(Et(43,24,r.created_at)),l(7),m("routerLink",Pe("/construction-permits/show/",r.id)),l(14),m("ngIf",_.mAppContextService.hasRoles(be(40,Jt))||_.mAppContextService.hasRoles(be(41,gt))&&(r.status_id==1||r.status_id==2)),l(2),m("ngIf",!_.mAppContextService.hasRoles(be(42,gt))),l(2),m("ngIf",!_.mAppContextService.hasRoles(be(43,gt))&&r.has_variations=="yes"),l(4),m("ngIf",_.mAppContextService.hasRoles(be(44,Jt)))}}function vi(o,a){if(o&1&&(i(0,"div",17),e(1,`
          `),i(2,"table",18),e(3,`
            `),i(4,"thead",19),e(5,`
              `),i(6,"tr"),e(7,`
                `),i(8,"th",20),e(9,"#"),t(),e(10,`
                `),i(11,"th",20),e(12,"Project"),t(),e(13,`
                `),i(14,"th",20),e(15,"Investor"),t(),e(16,`
                `),i(17,"th",20),e(18,"Type"),t(),e(19,`
                `),i(20,"th",20),e(21,"Duration (Months)"),t(),e(22,`
                `),i(23,"th",20),e(24,"Estimated Cost"),t(),e(25,`
                `),i(26,"th",20),e(27,"Has Variations"),t(),e(28,`
                `),i(29,"th",20),e(30,"Consultant"),t(),e(31,`
                `),i(32,"th",20),e(33,"Status"),t(),e(34,`
                `),i(35,"th",20),e(36,"Created"),t(),e(37,`
                `),i(38,"th",20),e(39,"Action"),t(),e(40,`
              `),t(),e(41,`
            `),t(),e(42,`
            `),i(43,"tbody"),e(44,`
              `),d(45,gi,75,45,"tr",21),e(46,`
            `),t(),e(47,`
          `),t(),e(48,`
        `),t()),o&2){let r=p();l(45),m("ngForOf",r.mConstructionPermits)}}function yi(o,a){if(o&1){let r=me();i(0,"li",43),e(1,`
              `),i(2,"a",44),y("click",function(){let _=O(r).$implicit,s=p(2);return U(s.onChangePage(_.url))}),t(),e(3,`
            `),t()}if(o&2){let r=a.$implicit;m("ngClass",bt(2,mi,r.active,!r.url)),l(2),m("innerHTML",r.label,vt)}}function bi(o,a){if(o&1&&(i(0,"div"),e(1,`
          `),i(2,"ul",41),e(3,`
            `),d(4,yi,4,5,"li",42),e(5,`
          `),t(),e(6,`
        `),t()),o&2){let r=p();l(4),m("ngForOf",r.links)}}function Si(o,a){o&1&&(e(0,`
          `),i(1,"p",45),e(2,"No items"),t(),e(3,`
        `))}var at=class o{constructor(a,r,n){this.mConstructionPermitService=a;this.mToastrService=r;this.mAppContextService=n;this.mConstructionPermits={};this.links=[];this.mProgress=C(!1)}ngOnInit(){this.index(),this.search_term=new Ht("",f.required),this.itemForm=new Wt({search_term:this.search_term})}index(){this.mProgress.set(!0),this.mConstructionPermitService.allItems().subscribe({next:a=>{a&&(this.mPageFrom=a.from,this.mConstructionPermits=a.data,this.links=a.links),this.mProgress.set(!1)},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onChangePage(a){this.mProgress.set(!0),this.mConstructionPermitService.paginateItems(a).subscribe({next:r=>{r&&(this.mPageFrom=r.from,this.mConstructionPermits=r.data,this.links=r.links,this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onDelete(a){Xt.default.mixin({customClass:{cancelButton:"btn btn-dark",confirmButton:"btn btn-danger ms-2"},buttonsStyling:!1}).fire({title:'Remove "'+a.name+'"?',text:"You won't be able to revert this!",icon:"error",showCancelButton:!0,reverseButtons:!0,cancelButtonText:"Cancel",confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&(this.mProgress.set(!0),this.mConstructionPermitService.deleteItem(a).subscribe({next:_=>{_&&(this.mConstructionPermits=this.mConstructionPermits.filter(s=>s.id!==a.id),this.mToastrService.error(_.message),this.mProgress.set(!1))},error:_=>{_.error.message&&this.mToastrService.error(_.error.message),this.mProgress.set(!1)}}))})}onSubmit(a){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(a).subscribe({next:r=>{r&&(this.mConstructionPermits=r.salutations,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}onSearch(a){this.mProgress.set(!0),this.mConstructionPermitService.searchItems(a).subscribe({next:r=>{r&&(this.mConstructionPermits=r.data,this.mToastrService.success(r.message),this.mProgress.set(!1))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(v(B),v(D),v(V))}}static{this.\u0275cmp=A({type:o,selectors:[["app-index"]],standalone:!1,decls:54,vars:9,consts:[["noItemsTemplate",""],[4,"ngIf"],["xs","12"],[1,"mb-4"],[1,"d-flex","justify-content-between","align-items-center"],[1,"card-title"],["routerLink","/construction-permits/create",1,"btn","btn-danger","btn-sm","text-light1"],["cIcon","","name","cilPlus",1,"btn-icon"],[3,"ngSubmit","formGroup"],[1,"input-group","input-group-sm",2,"width","150px"],["type","text","formControlName","search_term","placeholder","Search",1,"form-control","float-right",3,"ngClass"],[1,"input-group-append"],["type","submit","cButton","","size","sm","color","success"],["cIcon","","name","cilSearch",1,"btn-icon","text-light1"],["class","invalid-feedback","type","chip",4,"ngIf"],["class","table-responsive",4,"ngIf","ngIfElse"],["type","chip",1,"invalid-feedback"],[1,"table-responsive"],["cTable","","striped",""],["cTableColor","light1"],["scope","col"],[4,"ngFor","ngForOf"],[1,"chip","chip-sm",3,"ngClass"],["type","button",1,"btn","btn-sm","btn-outline-link","position-relative"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass",4,"ngIf"],[1,"badge","rounded-pill",3,"ngClass"],[1,"text-nowrap"],["cButton","","color","dark","variant","outline","size","sm",3,"routerLink"],["cIcon","","name","cilLowVision",1,"btn-icon"],[2,"display","inline"],["cButton","","cDropdownToggle","","color","dark","size","sm"],["cIcon","","name","cilPencil",1,"btn-icon"],["cDropdownMenu",""],["type","button","cButton","","color","danger","size","sm",3,"click",4,"ngIf"],["position","top-0 start-100 translate-middle","shape","rounded-pill",3,"ngClass"],["cDropdownItem","",3,"routerLink"],["cIcon","","name","cilPen",1,"btn-icon"],["cIcon","","name","cilList",1,"btn-icon"],["cIcon","","name","cilApplicationsSettings",1,"btn-icon"],["type","button","cButton","","color","danger","size","sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],[1,"pagination"],["class","page-item",3,"ngClass",4,"ngFor","ngForOf"],[1,"page-item",3,"ngClass"],[1,"page-link",3,"click","innerHTML"],[1,"p-5","text-center","text-muted"]],template:function(r,n){if(r&1&&(d(0,di,1,0,"app-progress",1),i(1,"c-row"),e(2,`
  `),i(3,"c-col",2),e(4,`
    `),i(5,"c-card",3),e(6,`
      `),i(7,"c-card-header"),e(8,`
        `),i(9,"div",4),e(10,`
          `),i(11,"div",5),e(12,`
            `),i(13,"a",6),e(14,`
              `),j(),c(15,"svg",7),e(16,` Add
            `),t(),e(17,`
          `),t(),e(18,`
          `),ve(),i(19,"div"),e(20,`
            `),i(21,"form",8),y("ngSubmit",function(){return n.onSearch(n.itemForm.value)}),e(22,`
              `),i(23,"div",9),e(24,`
                `),c(25,"input",10),e(26,`
                `),i(27,"div",11),e(28,`
                  `),i(29,"button",12),e(30,`
                    `),j(),c(31,"svg",13),e(32,`
                  `),t(),e(33,`
                `),t(),e(34,`
                `),d(35,_i,4,1,"div",14),e(36,`
              `),t(),e(37,`
            `),t(),e(38,`
          `),t(),e(39,`
        `),t(),e(40,`
      `),t(),e(41,`
      `),ve(),i(42,"c-card-body"),e(43,`

        `),d(44,vi,49,1,"div",15),e(45,`

        `),d(46,bi,7,1,"div",1),e(47,`

        `),d(48,Si,4,0,"ng-template",null,0,Ft),e(50,`

      `),t(),e(51,`
    `),t(),e(52,`
  `),t(),e(53,`
`),t()),r&2){let _=yt(49);m("ngIf",n.mProgress()),l(21),m("formGroup",n.itemForm),l(4),m("ngClass",x(7,ri,n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched))),l(10),m("ngIf",n.search_term.invalid&&(n.search_term.dirty||n.search_term.touched)),l(9),m("ngIf",n.mConstructionPermits.length>0)("ngIfElse",_),l(2),m("ngIf",n.links)}},dependencies:[de,G,R,W,L,H,pe,z,Mt,ue,ce,Ot,Bt,J,Ee,fe,Y,K,xe,ze,it,At,kt,jt,tt,$e,It],encapsulation:2})}};var h=o=>({"is-invalid":o});function Ci(o,a){o&1&&c(0,"app-progress")}function Ei(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.user.id)),l(),g(r.user.name)}}function Fi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ii(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Fi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("investor_id"))==null||r.errors==null?null:r.errors.required)}}function Ti(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Pi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qi(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Pi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("type_id"))==null||r.errors==null?null:r.errors.required)}}function wi(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Mi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ni(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Mi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("professional_body_id"))==null||r.errors==null?null:r.errors.required)}}function ki(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ji(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,ki,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("membership_number"))==null||r.errors==null?null:r.errors.required)}}function Ai(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ri(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Ai,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("consultant_name"))==null||r.errors==null?null:r.errors.required)}}function Vi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Di(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Vi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("address"))==null||r.errors==null?null:r.errors.required)}}function Li(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Bi(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Li,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("email"))==null||r.errors==null?null:r.errors.required)}}function Oi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ui(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Oi,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("nationality"))==null||r.errors==null?null:r.errors.required)}}function Gi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Wi(o,a){if(o&1&&(i(0,"div",124),e(1,`
                      `),d(2,Gi,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_brief"))==null||r.errors==null?null:r.errors.required)}}function Hi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zi(o,a){if(o&1&&(i(0,"div",124),e(1,`
                      `),d(2,Hi,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_purpose"))==null||r.errors==null?null:r.errors.required)}}function Yi(o,a){if(o&1&&(i(0,"div",129),e(1,`
                      `),i(2,"div",130),e(3,`
                        `),i(4,"div",131),e(5,`
                          `),i(6,"div",132)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",133),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),c(15,"br"),e(16),c(17,"br"),e(18),c(19,"br"),e(20),c(21,"br"),e(22),c(23,"br"),e(24),c(25,"br"),e(26),c(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let r=a.$implicit;l(8),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(6),q(`
                              Acres: `,r.allocation_worksheet==null?null:r.allocation_worksheet.acres," "),l(2),b(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),b(`
                              Min/Max FAR: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_far,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_far),l(2),b(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),b(`
                              Min/Max Floor Area: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floor_area,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floor_area),l(2),q(`
                              Plot Coverage: `,r.allocation_worksheet==null?null:r.allocation_worksheet.plot_coverage,"% "),l(2),q(`
                              Use: `,r.allocation_worksheet==null?null:r.allocation_worksheet.description," ")}}function Ji(o,a){if(o&1&&(i(0,"div",125),e(1,`
                  `),i(2,"div",126),e(3,`
                    `),i(4,"small",127),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Yi,33,12,"div",128),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let r=p();l(10),m("ngForOf",r.mInvestorParcels)}}function Ki(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.allocation_worksheet==null?null:r.allocation_worksheet.number)),l(),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number)}}function Xi(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qi(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,Xi,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("parcel_number").errors)==null?null:r.required)}}function Zi(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function $i(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function en(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,$i,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("planned_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function tn(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function nn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function rn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,nn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("primary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function on(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function an(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ln(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,an,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("secondary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function mn(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function dn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function sn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,dn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("preferred_ground_floor_use_id"))==null||r.errors==null?null:r.errors.required)}}function _n(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function pn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,_n,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:r.required)}}function un(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function cn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,un,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:r.required)}}function fn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function xn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,fn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:r.required)}}function gn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function vn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,gn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_number_of_floors").errors)==null?null:r.required)}}function yn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function bn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,yn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_number_of_floors").errors)==null?null:r.required)}}function Sn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function hn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,Sn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_floor_to_floor_height").errors)==null?null:r.required)}}function Cn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function En(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,Cn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_floor_to_floor_height").errors)==null?null:r.required)}}function Fn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function In(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,Fn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_floor_area").errors)==null?null:r.required)}}function Tn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Pn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,Tn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_floor_area").errors)==null?null:r.required)}}function qn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,qn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("min_far").errors)==null?null:r.required)}}function Mn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Nn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,Mn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("max_far").errors)==null?null:r.required)}}function kn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function jn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                            `),d(2,kn,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.mItemForm.get("minimum_setback").errors)==null?null:r.required)}}function An(o,a){if(o&1){let r=me();i(0,"tr"),e(1,`
                                  `),i(2,"td"),e(3),t(),e(4,`
                                  `),i(5,"td"),e(6),t(),e(7,`
                                  `),e(8,`
                                  `),i(9,"td"),e(10),t(),e(11,`
                                  `),i(12,"td"),e(13),t(),e(14,`
                                  `),i(15,"td"),e(16),t(),e(17,`
                                  `),i(18,"td"),e(19),t(),e(20,`
                                  `),i(21,"td"),e(22),t(),e(23,`
                                  `),i(24,"td"),e(25),t(),e(26,`
                                  `),i(27,"td",134),e(28,`
                                    `),i(29,"button",135),y("click",function(){let _=O(r).$implicit,s=p();return U(s.removeItem(_))}),j(),c(30,"svg",136),e(31,"Remove"),t(),e(32,`
                                  `),t(),e(33,`
                                `),t()}if(o&2){let r=a.$implicit,n=a.index;l(3),q("",n+1,"."),l(3),g(r.parcel_number),l(4),b("",r.min_floor_area,"/",r.max_floor_area),l(3),g(r.minimum_setback),l(3),b("",r.min_floor_to_floor_height,"/",r.max_floor_to_floor_height),l(3),b("",r.min_number_of_floors,"/",r.max_number_of_floors),l(3),b("",r.percentage_of_site_covered_by_existing_building,"/",r.percentage_of_site_covered_by_proposed_building),l(3),g(r.number_of_units_to_be_developed)}}function Rn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Rn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("has_variations").errors)==null?null:r.required)}}function Dn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ln(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Dn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("site_plan_and_analysis").errors)==null?null:r.required)}}function Bn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function On(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Bn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("context_analysis").errors)==null?null:r.required)}}function Un(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Un,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("concept_plan").errors)==null?null:r.required)}}function Wn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Hn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Wn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("geotechnical_report").errors)==null?null:r.required)}}function zn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,zn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey").errors)==null?null:r.required)}}function Jn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Kn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Jn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("parking_strategy").errors)==null?null:r.required)}}function Xn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qn(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Xn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("traffic_management_plan").errors)==null?null:r.required)}}function Zn(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $n(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,Zn,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:r.required)}}function er(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function tr(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,er,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_sustainability_brief").errors)==null?null:r.required)}}function ir(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function nr(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,ir,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("sustainability_report").errors)==null?null:r.required)}}function rr(o,a){if(o&1&&(i(0,"option",123),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function or(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ar(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,or,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("green_certification_id").errors)==null?null:r.required)}}function lr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function mr(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,lr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("other_green_certification").errors)==null?null:r.required)}}function dr(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",137),e(5,"Specify Other:"),t(),e(6,`
                  `),c(7,"input",138),e(8,`
                  `),d(9,mr,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()),o&2){let r=p();l(7),m("ngClass",x(2,h,r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))),l(2),m("ngIf",r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))}}function sr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _r(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,sr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_duration").errors)==null?null:r.required)}}function pr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ur(o,a){if(o&1&&(i(0,"div",124),e(1,`
                    `),d(2,pr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_construction_cost").errors)==null?null:r.required)}}function cr(o,a){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function fr(o,a){if(o&1&&(i(0,"div",124),e(1,`
                  `),d(2,cr,2,0,"div",0),e(3,`
                `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:r.requiredTrue)}}var lt=class o{constructor(a,r,n,_,s,F){this.mConstructionPermitService=a;this.mProfileService=r;this.router=n;this.mToastrService=_;this.mAppContextService=s;this.fb=F;this.mInvestorParcels={};this.mProfile={};this.mProgress=C(!1);this.mParcelInfo={};this.mEditor=Se;this.mLandUsePlans=[];this.mHasVariation="no";this.itemForm=this.fb.group({investor_id:["",f.required],type_id:["",f.required],professional_body_id:["",f.nullValidator],membership_number:["",f.nullValidator],consultant_name:["",f.nullValidator],address:["",f.nullValidator],email:["",f.nullValidator],nationality:["",f.nullValidator],project_brief:["",f.required],project_purpose:["",f.required],has_variations:["no",f.required],site_plan_and_analysis:["",f.nullValidator],context_analysis:["",f.nullValidator],concept_plan:["",f.nullValidator],geotechnical_report:["",f.nullValidator],topographical_survey:["",f.nullValidator],parking_strategy:["",f.nullValidator],traffic_management_plan:["",f.nullValidator],estimated_utility_demand_requirements:["",f.nullValidator],project_sustainability_brief:["",f.required],green_certification_id:["",f.required],other_green_certification:["",f.nullValidator],sustainability_report:["",f.nullValidator],estimated_project_duration:["",f.required],estimated_project_construction_cost:["",f.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,f.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",f.required],planned_land_use_id:["",f.required],primary_land_use_id:["",f.required],secondary_land_use_id:["",f.nullValidator],preferred_ground_floor_use_id:["",f.nullValidator],number_of_units_to_be_developed:["",f.required],percentage_of_site_covered_by_existing_building:["",f.required],percentage_of_site_covered_by_proposed_building:["",f.nullValidator],min_number_of_floors:["",f.required],max_number_of_floors:["",f.required],min_floor_to_floor_height:["",f.nullValidator],max_floor_to_floor_height:["",f.nullValidator],min_floor_area:["",f.nullValidator],max_floor_area:["",f.nullValidator],min_far:["",f.nullValidator],max_far:["",f.nullValidator],minimum_setback:["",f.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPermitTypes=a.data.permit_types,this.mParcelLandUseGroups=a.data.parcel_land_use_groups,this.mGreenCertifications=a.data.green_certifications,this.mProfile=a.data.profile,console.log(this.mProfile),this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=JSON.stringify(Object.assign({},this.mLandUsePlans)),n=new FormData;n.append("investor_id",a.investor_id),n.append("type_id",a.type_id),n.append("professional_body_id",a.professional_body_id),n.append("membership_number",a.membership_number),n.append("consultant_name",a.consultant_name),n.append("address",a.address),n.append("email",a.email),n.append("nationality",a.nationality),n.append("project_brief",a.project_brief),n.append("project_purpose",a.project_purpose),n.append("has_variations",this.mHasVariation),n.append("land_use_plans",r),n.append("project_sustainability_brief",a.project_sustainability_brief),n.append("green_certification_id",a.green_certification_id),n.append("other_green_certification",a.other_green_certification),n.append("estimated_project_duration",a.estimated_project_duration),n.append("estimated_project_construction_cost",a.estimated_project_construction_cost),n.append("commitment_to_comply_with_development_codes_and_guidelines",a.commitment_to_comply_with_development_codes_and_guidelines),n.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),n.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),n.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),n.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),n.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),n.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),n.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),n.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),n.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),n.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.createItem(n).subscribe({next:_=>{_&&(this.mToastrService.success(_.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:_=>{_.error.message&&this.mToastrService.error(_.error.message),this.mProgress.set(!1)}})}onContextAnalysisChange(a){if(a.target.value){let r=a.target.files[0];this.context_analysis_file=r}}onSitePlanAndAnlysisChange(a){if(a.target.value){let r=a.target.files[0];this.site_plan_and_analysis_file=r}}onConceptPlanChange(a){if(a.target.value){let r=a.target.files[0];this.concept_plan_file=r}}onGeotechnicalReportChange(a){if(a.target.value){let r=a.target.files[0];this.geotechnical_report_file=r}}onTopographicalSurveyChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_file=r}}onParkingStrategyChange(a){if(a.target.value){let r=a.target.files[0];this.parking_strategy_file=r}}onTrafficManagementPlanChange(a){if(a.target.value){let r=a.target.files[0];this.traffic_management_plan_file=r}}onEstimatedUtilityDemandRequirementsChange(a){if(a.target.value){let r=a.target.files[0];this.estimated_utility_demand_requirements_file=r}}onSustainabilityReportChange(a){if(a.target.value){let r=a.target.files[0];this.sustainability_report_file=r}}onInvestorChange(a){if(a.target.value){let r=a.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(r).subscribe({next:n=>{n&&(this.mInvestorParcels=n,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}}onCheckVariations(a){this.mInvestorParcels.some(n=>{let _=n.allocation_worksheet.number,s=Number(n.allocation_worksheet.min_floors),F=Number(n.allocation_worksheet.max_floors);return console.log(this.mHasVariation),a.parcel_number===_&&(a.min_number_of_floors<s||a.max_number_of_floors>F)})==!0&&this.mHasVariation=="no"&&(this.mHasVariation="yes"),this.itemForm.get("has_variations")?.setValue(this.mHasVariation),console.log(this.mHasVariation)}addItem(){let a=this.mItemForm.value;this.mLandUsePlans.some(n=>n.parcel_number===a.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(a),this.onCheckVariations(a),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(a){this.mLandUsePlans.forEach((r,n)=>{r===a&&this.mLandUsePlans.splice(n,1)})}static{this.\u0275fac=function(r){return new(r||o)(v(B),v(ot),v(_e),v(D),v(V),v(ge))}}static{this.\u0275cmp=A({type:o,selectors:[["app-create"]],standalone:!1,decls:833,vars:191,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"change","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngClass"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-md-6"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control1",3,"editor","config","ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"editor","config","ngClass"],["class","alert alert-success",4,"ngIf"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","min_number_of_floors",1,"col-form-label","required"],["formControlName","min_number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","max_number_of_floors",1,"col-form-label","required"],["formControlName","max_number_of_floors","type","number",1,"form-control",3,"ngClass"],["for","min_floor_to_floor_height",1,"col-form-label","required"],["formControlName","min_floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","max_floor_to_floor_height",1,"col-form-label","required"],["formControlName","max_floor_to_floor_height","type","number",1,"form-control",3,"ngClass"],["for","min_floor_area",1,"col-form-label","required"],["formControlName","min_floor_area","type","number",1,"form-control",3,"ngClass"],["for","max_floor_area",1,"col-form-label","required"],["formControlName","max_floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","min_far","type","number",1,"form-control",3,"ngClass"],["for","max_far",1,"col-form-label","required"],["formControlName","max_far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no","readonly","",1,"form-check-input"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes","readonly","",1,"form-check-input"],["for","variation_yes",1,"form-check-label"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"editor","config","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngClass"],["class","col-md-12",4,"ngIf"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngClass"]],template:function(r,n){if(r&1&&(d(0,Ci,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`


        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",9),e(22,`
                  `),i(23,"label",10),e(24,"Company:"),t(),e(25,`
                  `),i(26,"select",11),y("change",function(s){return n.onInvestorChange(s)}),e(27,`
                    `),i(28,"option",12),e(29,"--- Select investor ---"),t(),e(30,`
                    `),d(31,Ei,2,3,"option",13),e(32,`
                  `),t(),e(33,`
                  `),d(34,Ii,4,1,"div",14),e(35,`
                `),t(),e(36,`
              `),t(),e(37,`
              `),i(38,"div",8),e(39,`
                `),i(40,"div",9),e(41,`
                  `),i(42,"label",15),e(43,"Nature of Application:"),t(),e(44,`
                  `),i(45,"select",16),e(46,`
                    `),i(47,"option",12),e(48,"--- Select plan submission type ---"),t(),e(49,`
                    `),d(50,Ti,2,3,"option",13),e(51,`
                  `),t(),e(52,`
                  `),d(53,qi,4,1,"div",14),e(54,`
                `),t(),e(55,`
              `),t(),e(56,`
            `),t(),e(57,`
          `),t(),e(58,`
          `),i(59,"fieldset",4),e(60,`
            `),i(61,"legend",5)(62,"h6",6),e(63,"CONSULTANT INFORMATION"),t()(),e(64,`
            `),i(65,"div",7),e(66,`
              `),i(67,"div",8),e(68,`
                `),i(69,"div",9),e(70,`
                  `),i(71,"label",17),e(72,"Professional Body:"),t(),e(73,`
                  `),i(74,"select",18),P("ngModelChange",function(s){return T(n.mProfile.professional_body_id,s)||(n.mProfile.professional_body_id=s),s}),e(75,`
                    `),i(76,"option",12),e(77,"--- Select professional body ---"),t(),e(78,`
                    `),d(79,wi,2,3,"option",13),e(80,`
                  `),t(),e(81,`
                  `),d(82,Ni,4,1,"div",14),e(83,`
                `),t(),e(84,`
              `),t(),e(85,`
              `),i(86,"div",8),e(87,`
                `),i(88,"div",9),e(89,`
                  `),i(90,"label",19),e(91,"Membership Number:"),t(),e(92,`
                  `),i(93,"input",20),P("ngModelChange",function(s){return T(n.mProfile.membership_number,s)||(n.mProfile.membership_number=s),s}),t(),e(94,`
                  `),d(95,ji,4,1,"div",14),e(96,`
                `),t(),e(97,`
              `),t(),e(98,`
              `),i(99,"div",21),e(100,`
                `),i(101,"div",9),e(102,`
                  `),i(103,"label",22),e(104,"Consultant Name:"),t(),e(105,`
                  `),i(106,"input",23),P("ngModelChange",function(s){return T(n.mProfile.member_name,s)||(n.mProfile.member_name=s),s}),t(),e(107,`
                  `),d(108,Ri,4,1,"div",14),e(109,`
                `),t(),e(110,`
              `),t(),e(111,`
              `),i(112,"div",21),e(113,`
                `),i(114,"div",9),e(115,`
                  `),i(116,"label",24),e(117,"Address:"),t(),e(118,`
                  `),i(119,"input",25),P("ngModelChange",function(s){return T(n.mProfile.address,s)||(n.mProfile.address=s),s}),t(),e(120,`
                  `),d(121,Di,4,1,"div",14),e(122,`
                `),t(),e(123,`
              `),t(),e(124,`
              `),i(125,"div",21),e(126,`
                `),i(127,"div",9),e(128,`
                  `),i(129,"label",26),e(130,"Email:"),t(),e(131,`
                  `),i(132,"input",27),P("ngModelChange",function(s){return T(n.mProfile.email,s)||(n.mProfile.email=s),s}),t(),e(133,`
                  `),d(134,Bi,4,1,"div",14),e(135,`
                `),t(),e(136,`
              `),t(),e(137,`
              `),i(138,"div",21),e(139,`
                `),i(140,"div",9),e(141,`
                  `),i(142,"label",28),e(143,"Nationality:"),t(),e(144,`
                  `),i(145,"input",29),P("ngModelChange",function(s){return T(n.mProfile.member_name,s)||(n.mProfile.member_name=s),s}),t(),e(146,`
                  `),d(147,Ui,4,1,"div",14),e(148,`
                `),t(),e(149,`
              `),t(),e(150,`
            `),t(),e(151,`
          `),t(),e(152,`
          `),i(153,"fieldset",4),e(154,`
            `),i(155,"legend",5)(156,"h6",6),e(157,"PROJECT BRIEF AND PURPOSE"),t()(),e(158,`
              `),i(159,"div",7),e(160,`
                `),i(161,"div",8),e(162,`
                  `),i(163,"div",9),e(164,`
                    `),i(165,"label",30),e(166,"Project Brief (Description of the overall project concept and how it fits in the Konza Technopolis Vision):"),t(),e(167,`
                    `),e(168,`
                    `),c(169,"ckeditor",31),e(170,`
                    `),d(171,Wi,4,1,"div",14),e(172,`
                  `),t(),e(173,`
                `),t(),e(174,`
                `),i(175,"div",8),e(176,`
                  `),i(177,"div",9),e(178,`
                    `),i(179,"label",32),e(180,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(181,`
                    `),c(182,"ckeditor",33),e(183,`
                    `),d(184,zi,4,1,"div",14),e(185,`
                  `),t(),e(186,`
                `),t(),e(187,`
              `),t(),e(188,`
          `),t(),e(189,`
          `),i(190,"fieldset",4),e(191,`
            `),i(192,"legend",5)(193,"h6",6),e(194,"PARCEL & CONTEXT ANALYSIS"),t()(),e(195,`
            `),i(196,"div",7),e(197,`
              `),i(198,"div",8),e(199,`
                `),d(200,Ji,13,1,"div",34),e(201,`
              `),t(),e(202,`
              `),i(203,"div",8),e(204,`
                `),i(205,"fieldset",35),e(206,`
                  `),i(207,"legend",5)(208,"h6",36),e(209,"Land Use Planning"),t()(),e(210,`
                  `),i(211,"div",37),e(212,`
                    `),i(213,"div",38),e(214,`
                      `),i(215,"div",8),e(216,`
                        `),i(217,"div",9),e(218,`
                          `),i(219,"label",39),e(220,"Parcel Number:"),t(),e(221,`
                          `),i(222,"select",40),e(223,`
                            `),i(224,"option",12),e(225,"--- Select Parcel ---"),t(),e(226,`
                            `),d(227,Ki,2,3,"option",13),e(228,`
                          `),t(),e(229,`
                          `),d(230,Qi,4,1,"div",14),e(231,`
                        `),t(),e(232,`
                      `),t(),e(233,`
                      `),e(234,`
                      `),i(235,"div",8),e(236,`
                        `),i(237,"div",9),e(238,`
                          `),i(239,"label",41),e(240,"Planned Land Use:"),t(),e(241,`
                          `),i(242,"select",42),e(243,`
                            `),i(244,"option",12),e(245,"--- Select planned land use ---"),t(),e(246,`
                            `),d(247,Zi,2,3,"option",13),e(248,`
                          `),t(),e(249,`
                          `),d(250,en,4,1,"div",14),e(251,`
                        `),t(),e(252,`
                      `),t(),e(253,`
                      `),i(254,"div",43),e(255,`
                        `),i(256,"div",9),e(257,`
                          `),i(258,"label",44),e(259,"Primary Land Use:"),t(),e(260,`
                          `),i(261,"select",45),e(262,`
                            `),i(263,"option",12),e(264,"--- Select primary land use ---"),t(),e(265,`
                            `),d(266,tn,2,3,"option",13),e(267,`
                          `),t(),e(268,`
                          `),d(269,rn,4,1,"div",14),e(270,`
                        `),t(),e(271,`
                      `),t(),e(272,`
                      `),i(273,"div",43),e(274,`
                        `),i(275,"div",9),e(276,`
                          `),i(277,"label",46),e(278,"Secondary Land Use:"),t(),e(279,`
                          `),i(280,"select",47),e(281,`
                            `),i(282,"option",12),e(283,"--- Select secondary land use ---"),t(),e(284,`
                            `),d(285,on,2,3,"option",13),e(286,`
                          `),t(),e(287,`
                          `),d(288,ln,4,1,"div",14),e(289,`
                        `),t(),e(290,`
                      `),t(),e(291,`
                      `),i(292,"div",43),e(293,`
                        `),i(294,"div",9),e(295,`
                          `),i(296,"label",48),e(297,"Preferred Ground Floor Use:"),t(),e(298,`
                          `),i(299,"select",49),e(300,`
                            `),i(301,"option",12),e(302,"--- Select ground floor use ---"),t(),e(303,`
                            `),d(304,mn,2,3,"option",13),e(305,`
                          `),t(),e(306,`
                          `),d(307,sn,4,1,"div",14),e(308,`
                        `),t(),e(309,`
                      `),t(),e(310,`
                      `),i(311,"div",8),e(312,`
                        `),i(313,"div",9),e(314,`
                          `),i(315,"label",50),e(316,"Number of Units to be Developed:"),t(),e(317,`
                          `),c(318,"input",51),e(319,`
                          `),d(320,pn,4,1,"div",14),e(321,`
                        `),t(),e(322,`
                      `),t(),e(323,`
                      `),i(324,"div",21),e(325,`
                        `),i(326,"div",9),e(327,`
                          `),i(328,"label",52),e(329,"Percentage of site covered by existing building(s):"),t(),e(330,`
                          `),c(331,"input",53),e(332,`
                          `),d(333,cn,4,1,"div",14),e(334,`
                        `),t(),e(335,`
                      `),t(),e(336,`
                      `),i(337,"div",21),e(338,`
                        `),i(339,"div",9),e(340,`
                          `),i(341,"label",54),e(342,"Percentage of site covered by proposed building(s):"),t(),e(343,`
                          `),c(344,"input",55),e(345,`
                          `),d(346,xn,4,1,"div",14),e(347,`
                        `),t(),e(348,`
                      `),t(),e(349,`
                      `),i(350,"div",21),e(351,`
                        `),i(352,"div",9),e(353,`
                          `),i(354,"label",56),e(355,"Min No. of Floors:"),t(),e(356,`
                          `),c(357,"input",57),e(358,`
                          `),d(359,vn,4,1,"div",14),e(360,`
                        `),t(),e(361,`
                      `),t(),e(362,`
                      `),i(363,"div",21),e(364,`
                        `),i(365,"div",9),e(366,`
                          `),i(367,"label",58),e(368,"Max No. of Floors:"),t(),e(369,`
                          `),c(370,"input",59),e(371,`
                          `),d(372,bn,4,1,"div",14),e(373,`
                        `),t(),e(374,`
                      `),t(),e(375,`
                      `),i(376,"div",21),e(377,`
                        `),i(378,"div",9),e(379,`
                          `),i(380,"label",60),e(381,"Min Floor-to-Floor Height:"),t(),e(382,`
                          `),c(383,"input",61),e(384,`
                          `),d(385,hn,4,1,"div",14),e(386,`
                        `),t(),e(387,`
                      `),t(),e(388,`
                      `),i(389,"div",21),e(390,`
                        `),i(391,"div",9),e(392,`
                          `),i(393,"label",62),e(394,"Max Floor-to-Floor Height:"),t(),e(395,`
                          `),c(396,"input",63),e(397,`
                          `),d(398,En,4,1,"div",14),e(399,`
                        `),t(),e(400,`
                      `),t(),e(401,`
                      `),i(402,"div",21),e(403,`
                        `),i(404,"div",9),e(405,`
                          `),i(406,"label",64),e(407,"Min Floor Area:"),t(),e(408,`
                          `),c(409,"input",65),e(410,`
                          `),d(411,In,4,1,"div",14),e(412,`
                        `),t(),e(413,`
                      `),t(),e(414,`
                      `),i(415,"div",21),e(416,`
                        `),i(417,"div",9),e(418,`
                          `),i(419,"label",66),e(420,"Max Floor Area:"),t(),e(421,`
                          `),c(422,"input",67),e(423,`
                          `),d(424,Pn,4,1,"div",14),e(425,`
                        `),t(),e(426,`
                      `),t(),e(427,`
                      `),i(428,"div",21),e(429,`
                        `),i(430,"div",9),e(431,`
                          `),i(432,"label",68),e(433,"Min Floor Area Ratio (FAR):"),t(),e(434,`
                          `),c(435,"input",69),e(436,`
                          `),d(437,wn,4,1,"div",14),e(438,`
                        `),t(),e(439,`
                      `),t(),e(440,`
                      `),i(441,"div",21),e(442,`
                        `),i(443,"div",9),e(444,`
                          `),i(445,"label",70),e(446,"Max Floor Area Ratio (FAR):"),t(),e(447,`
                          `),c(448,"input",71),e(449,`
                          `),d(450,Nn,4,1,"div",14),e(451,`
                        `),t(),e(452,`
                      `),t(),e(453,`
                      `),i(454,"div",8),e(455,`
                        `),i(456,"div",9),e(457,`
                          `),i(458,"label",72),e(459,"Minimum Setback:"),t(),e(460,`
                          `),c(461,"input",73),e(462,`
                          `),d(463,jn,4,1,"div",14),e(464,`
                        `),t(),e(465,`
                      `),t(),e(466,`
                    `),t(),e(467,`
                  `),t(),e(468,`
                  `),i(469,"div"),e(470,`
                    `),i(471,"div",74),e(472,`
                      `),i(473,"button",75),y("click",function(){return n.resetItemsForm()}),j(),c(474,"svg",76),e(475,"Reset"),t(),e(476,`
                      `),ve(),i(477,"button",77),y("click",function(){return n.addItem()}),j(),c(478,"svg",78),e(479,"Add"),t(),e(480,`
                    `),t(),e(481,`
                    `),ve(),i(482,"div",79),e(483,`
                      `),i(484,"div",80),e(485,`
                          `),i(486,"table",81),e(487,`
                              `),i(488,"thead"),e(489,`
                                `),i(490,"tr"),e(491,`
                                  `),i(492,"th"),e(493,"#"),t(),e(494,`
                                  `),i(495,"th"),e(496,"Parcel"),t(),e(497,`
                                  `),e(498,`
                                  `),i(499,"th"),e(500,"Min/Max "),c(501,"br"),e(502," Floor Area"),t(),e(503,`
                                  `),i(504,"th"),e(505,"Minimum "),c(506,"br"),e(507," Setback"),t(),e(508,`
                                  `),i(509,"th"),e(510,"Min/Max Floor "),c(511,"br"),e(512," to Floor Height"),t(),e(513,`
                                  `),i(514,"th"),e(515,"Min/Max "),c(516,"br"),e(517," No of Floors"),t(),e(518,`
                                  `),i(519,"th"),e(520,"Plot Coverage "),c(521,"br"),e(522," (Existing/Proposed)"),t(),e(523,`
                                  `),i(524,"th"),e(525,"No. of Units to "),c(526,"br"),e(527," be Developed"),t(),e(528,`
                                  `),i(529,"th"),e(530,"Action"),t(),e(531,`
                                `),t(),e(532,`
                              `),t(),e(533,`
                              `),i(534,"tbody"),e(535,`
                                `),d(536,An,34,12,"tr",82),e(537,`
                              `),t(),e(538,`
                          `),t(),e(539,`
                      `),t(),e(540,`
                    `),t(),e(541,`
                  `),t(),e(542,`
              `),t(),e(543,`
              `),t(),e(544,`
              `),i(545,"div",8),e(546,`
                `),i(547,"div",9),e(548,`
                  `),i(549,"label",83),e(550,"Variations (Does Your Project Require any Variation?):"),t(),e(551,`
                  `),i(552,"div",84),e(553,`
                    `),c(554,"input",85),e(555,`
                    `),i(556,"label",86),e(557," No"),t(),e(558,`
                  `),t(),e(559,`
                  `),i(560,"div",84),e(561,`
                    `),c(562,"input",87),e(563,`
                    `),i(564,"label",88),e(565," Yes"),t(),e(566,`
                  `),t(),e(567,`
                  `),d(568,Vn,4,1,"div",14),e(569,`
                `),t(),e(570,`
              `),t(),e(571,`
              `),i(572,"div",8),e(573,`
                `),i(574,"div",9),e(575,`
                  `),i(576,"label",89),e(577,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(578,`
                  `),i(579,"input",90),y("change",function(s){return n.onSitePlanAndAnlysisChange(s)}),t(),e(580,`
                  `),d(581,Ln,4,1,"div",14),e(582,`
                `),t(),e(583,`
              `),t(),e(584,`
              `),i(585,"div",8),e(586,`
                `),i(587,"div",9),e(588,`
                  `),i(589,"label",91),e(590,"Context Analysis (500m radius context analysis):"),t(),e(591,`
                  `),i(592,"input",92),y("change",function(s){return n.onContextAnalysisChange(s)}),t(),e(593,`
                  `),d(594,On,4,1,"div",14),e(595,`
                `),t(),e(596,`
              `),t(),e(597,`
            `),t(),e(598,`
          `),t(),e(599,`
          `),i(600,"fieldset",4),e(601,`
            `),i(602,"legend",5)(603,"h6",6),e(604,"DEVELOPMENT DATA"),t()(),e(605,`
            `),i(606,"div",7),e(607,`
              `),i(608,"div",21),e(609,`
                `),i(610,"div",9),e(611,`
                  `),i(612,"label",93),e(613,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(614,`
                  `),i(615,"input",94),y("change",function(s){return n.onConceptPlanChange(s)}),t(),e(616,`
                  `),d(617,Gn,4,1,"div",14),e(618,`
                `),t(),e(619,`
              `),t(),e(620,`
              `),i(621,"div",21),e(622,`
                `),i(623,"div",9),e(624,`
                  `),i(625,"label",95),e(626,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(627,`
                  `),i(628,"input",96),y("change",function(s){return n.onGeotechnicalReportChange(s)}),t(),e(629,`
                  `),d(630,Hn,4,1,"div",14),e(631,`
                `),t(),e(632,`
              `),t(),e(633,`
              `),i(634,"div",8),e(635,`
                `),i(636,"div",9),e(637,`
                  `),i(638,"label",97),e(639,"Topographical Survey:"),t(),e(640,`
                  `),i(641,"input",98),y("change",function(s){return n.onTopographicalSurveyChange(s)}),t(),e(642,`
                  `),d(643,Yn,4,1,"div",14),e(644,`
                `),t(),e(645,`
              `),t(),e(646,`
            `),t(),e(647,`
          `),t(),e(648,`
          `),i(649,"fieldset",4),e(650,`
            `),i(651,"legend",5)(652,"h6",6),e(653,"ACCESS ANALYSIS PLAN"),t()(),e(654,`
            `),i(655,"div",7),e(656,`
              `),i(657,"div",8),e(658,`
                `),i(659,"div",9),e(660,`
                  `),i(661,"label",99),e(662,"Parking Strategy (Using "),i(663,"a",100),e(664,"Reference Materials"),t(),e(665," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6), :"),t(),e(666,`
                  `),i(667,"input",101),y("change",function(s){return n.onParkingStrategyChange(s)}),t(),e(668,`
                  `),d(669,Kn,4,1,"div",14),e(670,`
                `),t(),e(671,`
              `),t(),e(672,`
              `),i(673,"div",8),e(674,`
                `),i(675,"div",9),e(676,`
                  `),i(677,"label",102),e(678,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(679,`
                  `),i(680,"input",103),y("change",function(s){return n.onTrafficManagementPlanChange(s)}),t(),e(681,`
                  `),d(682,Qn,4,1,"div",14),e(683,`
                `),t(),e(684,`
              `),t(),e(685,`
            `),t(),e(686,`
          `),t(),e(687,`
          `),i(688,"fieldset",4),e(689,`
            `),i(690,"legend",5)(691,"h6",6),e(692,"ESTIMATED UTILITY DEMAND"),t()(),e(693,`
            `),i(694,"div",7),e(695,`
              `),i(696,"div",8),e(697,`
                `),i(698,"div",9),e(699,`
                  `),i(700,"label",104),e(701,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(702,`
                  `),i(703,"input",105),y("change",function(s){return n.onEstimatedUtilityDemandRequirementsChange(s)}),t(),e(704,`
                  `),d(705,$n,4,1,"div",14),e(706,`
                `),t(),e(707,`
              `),t(),e(708,`
            `),t(),e(709,`
          `),t(),e(710,`
          `),i(711,"fieldset",4),e(712,`
            `),i(713,"legend",5)(714,"h6",6),e(715,"PROJECT SUSTAINABILITY"),t()(),e(716,`
            `),i(717,"div",7),e(718,`
              `),i(719,"div",8),e(720,`
                `),i(721,"div",9),e(722,`
                  `),i(723,"label",106),e(724,"Project Sustainability Brief (What sustainability rating tool and level do you plan to use):"),t(),e(725,`
                  `),c(726,"ckeditor",107),e(727,`
                  `),d(728,tr,4,1,"div",14),e(729,`
                `),t(),e(730,`
              `),t(),e(731,`
              `),i(732,"div",8),e(733,`
                `),i(734,"div",9),e(735,`
                  `),i(736,"label",108),e(737,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(738,`
                  `),i(739,"input",109),y("change",function(s){return n.onSustainabilityReportChange(s)}),t(),e(740,`
                  `),d(741,nr,4,1,"div",14),e(742,`
                `),t(),e(743,`
              `),t(),e(744,`
              `),i(745,"div",8),e(746,`
                `),i(747,"div",9),e(748,`
                  `),i(749,"label",110),e(750,"Green Certifications:"),t(),e(751,`
                  `),i(752,"select",111),e(753,`
                    `),i(754,"option",12),e(755,"--- Select certification ---"),t(),e(756,`
                    `),d(757,rr,2,3,"option",13),e(758,`
                  `),t(),e(759,`
                  `),d(760,ar,4,1,"div",14),e(761,`
                `),t(),e(762,`
              `),t(),e(763,`
              `),d(764,dr,12,4,"div",112),e(765,`
            `),t(),e(766,`
          `),t(),e(767,`
          `),i(768,"fieldset",4),e(769,`
            `),i(770,"legend",5)(771,"h6",6),e(772,"CONCLUSIONS"),t()(),e(773,`
            `),i(774,"div",7),e(775,`
              `),i(776,"div",8),e(777,`
                `),i(778,"div",9),e(779,`
                  `),i(780,"label",113),e(781,"Estimated Project Duration (In months):"),t(),e(782,`
                  `),c(783,"input",114),e(784,`
                  `),d(785,_r,4,1,"div",14),e(786,`
                `),t(),e(787,`
              `),t(),e(788,`
              `),i(789,"div",8),e(790,`
                `),i(791,"div",9),e(792,`
                  `),i(793,"label",115),e(794,"Estimated Project Construction Cost (In USD):"),t(),e(795,`
                  `),c(796,"input",116),e(797,`
                  `),d(798,ur,4,1,"div",14),e(799,`
                `),t(),e(800,`
              `),t(),e(801,`
              `),i(802,"div",117),e(803,`
                `),i(804,"div",84),e(805,`
                  `),c(806,"input",118),e(807,`
                  `),i(808,"label",119),e(809,`
                    By checking this, confirms the investor's commitment to comply with the `),i(810,"a",100),e(811,"Konza Technopolis Development Codes and Guidelines"),t(),e(812,`
                  `),t(),e(813,`
                `),t(),e(814,`
                `),d(815,fr,4,1,"div",14),e(816,`
              `),t(),e(817,`
            `),t(),e(818,`
          `),t(),e(819,`

          `),i(820,"div",120),e(821,`
            `),i(822,"button",121),e(823,"Cancel"),t(),e(824,`
            `),i(825,"button",122),e(826,"Submit"),t(),e(827,`
          `),t(),e(828,`

        `),t(),e(829,`

      `),t(),e(830,`
    `),t(),e(831,`
  `),t(),e(832,`
`),t()),r&2){let _,s,F,w,M,N,k,u,X,Q,Z,$,ee,te,ie,ne,re,oe,ae,le,Ve,De,Le,Be,Oe,Ue,Ge,We,He;m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngClass",x(111,h,((_=n.itemForm.get("investor_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("investor_id"))==null?null:_.dirty)||((_=n.itemForm.get("investor_id"))==null?null:_.touched)))),l(5),m("ngForOf",n.mInvestors),l(3),m("ngIf",((s=n.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("investor_id"))==null?null:s.dirty)||((s=n.itemForm.get("investor_id"))==null?null:s.touched))),l(11),m("ngClass",x(113,h,((F=n.itemForm.get("type_id"))==null?null:F.invalid)&&(((F=n.itemForm.get("type_id"))==null?null:F.dirty)||((F=n.itemForm.get("type_id"))==null?null:F.touched)))),l(5),m("ngForOf",n.mPermitTypes),l(3),m("ngIf",((w=n.itemForm.get("type_id"))==null?null:w.invalid)&&(((w=n.itemForm.get("type_id"))==null?null:w.dirty)||((w=n.itemForm.get("type_id"))==null?null:w.touched))),l(21),I("ngModel",n.mProfile.professional_body_id),m("ngClass",x(115,h,((M=n.itemForm.get("professional_body_id"))==null?null:M.invalid)&&(((M=n.itemForm.get("professional_body_id"))==null?null:M.dirty)||((M=n.itemForm.get("professional_body_id"))==null?null:M.touched)))),l(5),m("ngForOf",n.mProfessionalBodies),l(3),m("ngIf",((N=n.itemForm.get("professional_body_id"))==null?null:N.invalid)&&(((N=n.itemForm.get("professional_body_id"))==null?null:N.dirty)||((N=n.itemForm.get("professional_body_id"))==null?null:N.touched))),l(11),I("ngModel",n.mProfile.membership_number),m("ngClass",x(117,h,((k=n.itemForm.get("membership_number"))==null?null:k.invalid)&&(((k=n.itemForm.get("membership_number"))==null?null:k.dirty)||((k=n.itemForm.get("membership_number"))==null?null:k.touched)))),l(2),m("ngIf",((u=n.itemForm.get("membership_number"))==null?null:u.invalid)&&(((u=n.itemForm.get("membership_number"))==null?null:u.dirty)||((u=n.itemForm.get("membership_number"))==null?null:u.touched))),l(11),I("ngModel",n.mProfile.member_name),m("ngClass",x(119,h,((X=n.itemForm.get("consultant_name"))==null?null:X.invalid)&&(((X=n.itemForm.get("consultant_name"))==null?null:X.dirty)||((X=n.itemForm.get("consultant_name"))==null?null:X.touched)))),l(2),m("ngIf",((Q=n.itemForm.get("consultant_name"))==null?null:Q.invalid)&&(((Q=n.itemForm.get("consultant_name"))==null?null:Q.dirty)||((Q=n.itemForm.get("consultant_name"))==null?null:Q.touched))),l(11),I("ngModel",n.mProfile.address),m("ngClass",x(121,h,((Z=n.itemForm.get("address"))==null?null:Z.invalid)&&(((Z=n.itemForm.get("address"))==null?null:Z.dirty)||((Z=n.itemForm.get("address"))==null?null:Z.touched)))),l(2),m("ngIf",(($=n.itemForm.get("address"))==null?null:$.invalid)&&((($=n.itemForm.get("address"))==null?null:$.dirty)||(($=n.itemForm.get("address"))==null?null:$.touched))),l(11),I("ngModel",n.mProfile.email),m("ngClass",x(123,h,((ee=n.itemForm.get("email"))==null?null:ee.invalid)&&(((ee=n.itemForm.get("email"))==null?null:ee.dirty)||((ee=n.itemForm.get("email"))==null?null:ee.touched)))),l(2),m("ngIf",((te=n.itemForm.get("email"))==null?null:te.invalid)&&(((te=n.itemForm.get("email"))==null?null:te.dirty)||((te=n.itemForm.get("email"))==null?null:te.touched))),l(11),I("ngModel",n.mProfile.member_name),m("ngClass",x(125,h,((ie=n.itemForm.get("nationality"))==null?null:ie.invalid)&&(((ie=n.itemForm.get("nationality"))==null?null:ie.dirty)||((ie=n.itemForm.get("nationality"))==null?null:ie.touched)))),l(2),m("ngIf",((ne=n.itemForm.get("nationality"))==null?null:ne.invalid)&&(((ne=n.itemForm.get("nationality"))==null?null:ne.dirty)||((ne=n.itemForm.get("nationality"))==null?null:ne.touched))),l(22),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(127,h,((re=n.itemForm.get("project_brief"))==null?null:re.invalid)&&(((re=n.itemForm.get("project_brief"))==null?null:re.dirty)||((re=n.itemForm.get("project_brief"))==null?null:re.touched)))),l(2),m("ngIf",((oe=n.itemForm.get("project_brief"))==null?null:oe.invalid)&&(((oe=n.itemForm.get("project_brief"))==null?null:oe.dirty)||((oe=n.itemForm.get("project_brief"))==null?null:oe.touched))),l(11),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(129,h,((ae=n.itemForm.get("project_purpose"))==null?null:ae.invalid)&&(((ae=n.itemForm.get("project_purpose"))==null?null:ae.dirty)||((ae=n.itemForm.get("project_purpose"))==null?null:ae.touched)))),l(2),m("ngIf",((le=n.itemForm.get("project_purpose"))==null?null:le.invalid)&&(((le=n.itemForm.get("project_purpose"))==null?null:le.dirty)||((le=n.itemForm.get("project_purpose"))==null?null:le.touched))),l(16),m("ngIf",n.mInvestorParcels.length>0),l(11),m("formGroup",n.mItemForm),l(11),m("ngClass",x(131,h,((Ve=n.mItemForm.get("parcel_number"))==null?null:Ve.invalid)&&(((Ve=n.mItemForm.get("parcel_number"))==null?null:Ve.dirty)||((Ve=n.mItemForm.get("parcel_number"))==null?null:Ve.touched)))),l(5),m("ngForOf",n.mInvestorParcels),l(3),m("ngIf",n.mItemForm.get("parcel_number").invalid&&(n.mItemForm.get("parcel_number").dirty||n.mItemForm.get("parcel_number").touched)),l(12),m("ngClass",x(133,h,((De=n.mItemForm.get("planned_land_use_id"))==null?null:De.invalid)&&(((De=n.mItemForm.get("planned_land_use_id"))==null?null:De.dirty)||((De=n.mItemForm.get("planned_land_use_id"))==null?null:De.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((Le=n.mItemForm.get("planned_land_use_id"))==null?null:Le.invalid)&&(((Le=n.mItemForm.get("planned_land_use_id"))==null?null:Le.dirty)||((Le=n.mItemForm.get("planned_land_use_id"))==null?null:Le.touched))),l(11),m("ngClass",x(135,h,((Be=n.mItemForm.get("primary_land_use_id"))==null?null:Be.invalid)&&(((Be=n.mItemForm.get("primary_land_use_id"))==null?null:Be.dirty)||((Be=n.mItemForm.get("primary_land_use_id"))==null?null:Be.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((Oe=n.mItemForm.get("primary_land_use_id"))==null?null:Oe.invalid)&&(((Oe=n.mItemForm.get("primary_land_use_id"))==null?null:Oe.dirty)||((Oe=n.mItemForm.get("primary_land_use_id"))==null?null:Oe.touched))),l(11),m("ngClass",x(137,h,((Ue=n.mItemForm.get("secondary_land_use_id"))==null?null:Ue.invalid)&&(((Ue=n.mItemForm.get("secondary_land_use_id"))==null?null:Ue.dirty)||((Ue=n.mItemForm.get("secondary_land_use_id"))==null?null:Ue.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((Ge=n.mItemForm.get("secondary_land_use_id"))==null?null:Ge.invalid)&&(((Ge=n.mItemForm.get("secondary_land_use_id"))==null?null:Ge.dirty)||((Ge=n.mItemForm.get("secondary_land_use_id"))==null?null:Ge.touched))),l(11),m("ngClass",x(139,h,((We=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:We.invalid)&&(((We=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:We.dirty)||((We=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:We.touched)))),l(5),m("ngForOf",n.mParcelLandUseGroups),l(3),m("ngIf",((He=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:He.invalid)&&(((He=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:He.dirty)||((He=n.mItemForm.get("preferred_ground_floor_use_id"))==null?null:He.touched))),l(11),m("ngClass",x(141,h,n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched))),l(2),m("ngIf",n.mItemForm.get("number_of_units_to_be_developed").invalid&&(n.mItemForm.get("number_of_units_to_be_developed").dirty||n.mItemForm.get("number_of_units_to_be_developed").touched)),l(11),m("ngClass",x(143,h,n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),l(11),m("ngClass",x(145,h,n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),l(2),m("ngIf",n.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(n.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||n.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),l(11),m("ngClass",x(147,h,n.mItemForm.get("min_number_of_floors").invalid&&(n.mItemForm.get("min_number_of_floors").dirty||n.mItemForm.get("min_number_of_floors").touched))),l(2),m("ngIf",n.mItemForm.get("min_number_of_floors").invalid&&(n.mItemForm.get("min_number_of_floors").dirty||n.mItemForm.get("min_number_of_floors").touched)),l(11),m("ngClass",x(149,h,n.mItemForm.get("max_number_of_floors").invalid&&(n.mItemForm.get("max_number_of_floors").dirty||n.mItemForm.get("max_number_of_floors").touched))),l(2),m("ngIf",n.mItemForm.get("max_number_of_floors").invalid&&(n.mItemForm.get("max_number_of_floors").dirty||n.mItemForm.get("max_number_of_floors").touched)),l(11),m("ngClass",x(151,h,n.mItemForm.get("min_floor_to_floor_height").invalid&&(n.mItemForm.get("min_floor_to_floor_height").dirty||n.mItemForm.get("min_floor_to_floor_height").touched))),l(2),m("ngIf",n.mItemForm.get("min_floor_to_floor_height").invalid&&(n.mItemForm.get("min_floor_to_floor_height").dirty||n.mItemForm.get("min_floor_to_floor_height").touched)),l(11),m("ngClass",x(153,h,n.mItemForm.get("max_floor_to_floor_height").invalid&&(n.mItemForm.get("max_floor_to_floor_height").dirty||n.mItemForm.get("max_floor_to_floor_height").touched))),l(2),m("ngIf",n.mItemForm.get("max_floor_to_floor_height").invalid&&(n.mItemForm.get("max_floor_to_floor_height").dirty||n.mItemForm.get("max_floor_to_floor_height").touched)),l(11),m("ngClass",x(155,h,n.mItemForm.get("min_floor_area").invalid&&(n.mItemForm.get("min_floor_area").dirty||n.mItemForm.get("min_floor_area").touched))),l(2),m("ngIf",n.mItemForm.get("min_floor_area").invalid&&(n.mItemForm.get("min_floor_area").dirty||n.mItemForm.get("min_floor_area").touched)),l(11),m("ngClass",x(157,h,n.mItemForm.get("max_floor_area").invalid&&(n.mItemForm.get("max_floor_area").dirty||n.mItemForm.get("max_floor_area").touched))),l(2),m("ngIf",n.mItemForm.get("max_floor_area").invalid&&(n.mItemForm.get("max_floor_area").dirty||n.mItemForm.get("max_floor_area").touched)),l(11),m("ngClass",x(159,h,n.mItemForm.get("min_far").invalid&&(n.mItemForm.get("min_far").dirty||n.mItemForm.get("min_far").touched))),l(2),m("ngIf",n.mItemForm.get("min_far").invalid&&(n.mItemForm.get("min_far").dirty||n.mItemForm.get("min_far").touched)),l(11),m("ngClass",x(161,h,n.mItemForm.get("max_far").invalid&&(n.mItemForm.get("max_far").dirty||n.mItemForm.get("max_far").touched))),l(2),m("ngIf",n.mItemForm.get("max_far").invalid&&(n.mItemForm.get("max_far").dirty||n.mItemForm.get("max_far").touched)),l(11),m("ngClass",x(163,h,n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched))),l(2),m("ngIf",n.mItemForm.get("minimum_setback").invalid&&(n.mItemForm.get("minimum_setback").dirty||n.mItemForm.get("minimum_setback").touched)),l(14),m("disabled",n.mItemForm.invalid),l(59),m("ngForOf",n.mLandUsePlans),l(32),m("ngIf",n.itemForm.get("has_variations").invalid&&(n.itemForm.get("has_variations").dirty||n.itemForm.get("has_variations").touched)),l(11),m("ngClass",x(165,h,n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched))),l(2),m("ngIf",n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched)),l(11),m("ngClass",x(167,h,n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched))),l(2),m("ngIf",n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched)),l(21),m("ngClass",x(169,h,n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched))),l(2),m("ngIf",n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched)),l(11),m("ngClass",x(171,h,n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched))),l(2),m("ngIf",n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched)),l(11),m("ngClass",x(173,h,n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched)),l(24),m("ngClass",x(175,h,n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched))),l(2),m("ngIf",n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched)),l(11),m("ngClass",x(177,h,n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched))),l(2),m("ngIf",n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched)),l(21),m("ngClass",x(179,h,n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched))),l(2),m("ngIf",n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched)),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(181,h,n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched))),l(2),m("ngIf",n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched)),l(11),m("ngClass",x(183,h,n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched))),l(2),m("ngIf",n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched)),l(11),m("ngClass",x(185,h,n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched))),l(5),m("ngForOf",n.mGreenCertifications),l(3),m("ngIf",n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched)),l(4),m("ngIf",n.itemForm.get("green_certification_id").value==="4"),l(19),m("ngClass",x(187,h,n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched)),l(11),m("ngClass",x(189,h,n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched)),l(17),m("ngIf",n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),l(10),m("disabled",n.itemForm.invalid)}},dependencies:[de,G,R,W,L,H,pe,z,ue,ce,J,Ie,Te,Ee,rt,nt,Fe,Ye,fe,Y,K,xe,ze,he],encapsulation:2})}};var S=o=>({"is-invalid":o});function xr(o,a){o&1&&c(0,"app-progress")}function gr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.user.id)),l(),g(r.user.name)}}function vr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function yr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,vr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("investor_id"))==null||r.errors==null?null:r.errors.required)}}function br(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Sr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function hr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Sr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("type_id"))==null||r.errors==null?null:r.errors.required)}}function Cr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Er(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Fr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Er,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("professional_body_id"))==null||r.errors==null?null:r.errors.required)}}function Ir(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Tr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ir,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("membership_number"))==null||r.errors==null?null:r.errors.required)}}function Pr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function qr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Pr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("consultant_name"))==null||r.errors==null?null:r.errors.required)}}function wr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Mr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,wr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("address"))==null||r.errors==null?null:r.errors.required)}}function Nr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function kr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Nr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("email"))==null||r.errors==null?null:r.errors.required)}}function jr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ar(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,jr,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("nationality"))==null||r.errors==null?null:r.errors.required)}}function Rr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                      `),d(2,Rr,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_brief"))==null||r.errors==null?null:r.errors.required)}}function Dr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Lr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                      `),d(2,Dr,2,0,"div",0),e(3,`
                    `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_purpose"))==null||r.errors==null?null:r.errors.required)}}function Br(o,a){if(o&1&&(i(0,"div",81),e(1,`
                      `),i(2,"div",82),e(3,`
                        `),i(4,"div",83),e(5,`
                          `),i(6,"div",84)(7,"strong"),e(8),t()(),e(9,`
                          `),i(10,"div",85),e(11,`
                            `),e(12,`
                            `),i(13,"small"),e(14),c(15,"br"),e(16),c(17,"br"),e(18),c(19,"br"),e(20),c(21,"br"),e(22),c(23,"br"),e(24),c(25,"br"),e(26),c(27,"br"),e(28,`
                            `),t(),e(29,`
                          `),t(),e(30,`
                        `),t(),e(31,`
                      `),t(),e(32,`
                    `),t()),o&2){let r=a.$implicit;l(8),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(6),q(`
                              Acres: `,r.allocation_worksheet==null?null:r.allocation_worksheet.acres," "),l(2),b(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),b(`
                              Min/Max FAR: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_far,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_far),l(2),b(`
                              Min/Max Floors: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floors,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floors),l(2),b(`
                              Min/Max Floor Area: `,r.allocation_worksheet==null?null:r.allocation_worksheet.min_floor_area,"-",r.allocation_worksheet==null?null:r.allocation_worksheet.max_floor_area),l(2),q(`
                              Plot Coverage: `,r.allocation_worksheet==null?null:r.allocation_worksheet.plot_coverage,"% "),l(2),q(`
                              Use: `,r.allocation_worksheet==null?null:r.allocation_worksheet.description," ")}}function Or(o,a){if(o&1&&(i(0,"div",77),e(1,`
                  `),i(2,"div",78),e(3,`
                    `),i(4,"small",79),e(5,"Investor Parcels"),t(),e(6,`
                  `),t(),e(7,`
                  `),i(8,"div",7),e(9,`
                    `),d(10,Br,33,12,"div",80),e(11,`
                  `),t(),e(12,`
                `),t()),o&2){let r=p();l(10),m("ngForOf",r.mInvestorParcels)}}function Ur(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Gr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ur,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("has_variations").errors)==null?null:r.required)}}function Wr(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.allocation_worksheet==null?null:r.allocation_worksheet.number)),l(),g(r.allocation_worksheet==null?null:r.allocation_worksheet.number)}}function Hr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function zr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Hr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("parcel_number").errors)==null?null:r.required)}}function Yr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Jr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Yr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_density").errors)==null?null:r.required)}}function Kr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Xr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Kr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_density").errors)==null?null:r.required)}}function Qr(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Zr(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Qr,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_floor_area").errors)==null?null:r.required)}}function $r(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function eo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,$r,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_floor_area").errors)==null?null:r.required)}}function to(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function io(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,to,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_far").errors)==null?null:r.required)}}function no(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ro(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,no,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_far").errors)==null?null:r.required)}}function oo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ao(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,oo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("minimum_setback").errors)==null?null:r.required)}}function lo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function mo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,lo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_floor_to_floor_height").errors)==null?null:r.required)}}function so(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _o(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,so,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_floor_to_floor_height").errors)==null?null:r.required)}}function po(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function uo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,po,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("min_number_of_floors").errors)==null?null:r.required)}}function co(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function fo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,co,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("max_number_of_floors").errors)==null?null:r.required)}}function xo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function go(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,xo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_existing_building").errors)==null?null:r.required)}}function vo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function yo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,vo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("percentage_of_site_covered_by_proposed_building").errors)==null?null:r.required)}}function bo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function So(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,bo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("number_of_units_to_be_developed").errors)==null?null:r.required)}}function ho(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Co(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Eo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Co,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("planned_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Fo(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function Io(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function To(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,Io,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("primary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Po(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function qo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function wo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,qo,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("secondary_land_use_id"))==null||r.errors==null?null:r.errors.required)}}function Mo(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function No(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ko(o,a){if(o&1&&(i(0,"div",76),e(1,`
                            `),d(2,No,2,0,"div",0),e(3,`
                          `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.mItemForm.get("preferred_ground_floor_use_id"))==null||r.errors==null?null:r.errors.required)}}function jo(o,a){if(o&1){let r=me();i(0,"tr"),e(1,`
                                  `),i(2,"td"),e(3),t(),e(4,`
                                  `),i(5,"td"),e(6),t(),e(7,`
                                  `),i(8,"td"),e(9),t(),e(10,`
                                  `),i(11,"td"),e(12),t(),e(13,`
                                  `),i(14,"td"),e(15),t(),e(16,`
                                  `),i(17,"td"),e(18),t(),e(19,`
                                  `),i(20,"td"),e(21),t(),e(22,`
                                  `),i(23,"td"),e(24),t(),e(25,`
                                  `),i(26,"td"),e(27),t(),e(28,`
                                  `),i(29,"td",140),e(30,`
                                    `),i(31,"button",141),y("click",function(){let _=O(r).$implicit,s=p(2);return U(s.removeItem(_))}),j(),c(32,"svg",142),e(33,"Remove"),t(),e(34,`
                                  `),t(),e(35,`
                                `),t()}if(o&2){let r=a.$implicit,n=a.index;l(3),q("",n+1,"."),l(3),g(r.parcel_number),l(3),b("",r.min_density,"/",r.max_density),l(3),b("",r.min_floor_area,"/",r.max_floor_area),l(3),g(r.minimum_setback),l(3),b("",r.min_floor_to_floor_height,"/",r.max_floor_to_floor_height),l(3),b("",r.min_number_of_floors,"/",r.max_number_of_floors),l(3),b("",r.percentage_of_site_covered_by_existing_building,"/",r.percentage_of_site_covered_by_proposed_building),l(3),g(r.number_of_units_to_be_developed)}}function Ao(o,a){if(o&1){let r=me();i(0,"div",8),e(1,`
                `),i(2,"fieldset",86),e(3,`
                  `),i(4,"legend",5)(5,"h6",87),e(6,"Land Use Planning"),t()(),e(7,`
                  `),i(8,"div",88),e(9,`
                    `),i(10,"div",89),e(11,`
                      `),i(12,"div",8),e(13,`
                        `),i(14,"div",9),e(15,`
                          `),i(16,"label",90),e(17,"Parcel Number:"),t(),e(18,`
                          `),i(19,"select",91),e(20,`
                            `),i(21,"option",12),e(22,"--- Select Parcel ---"),t(),e(23,`
                            `),d(24,Wr,2,3,"option",13),e(25,`
                          `),t(),e(26,`
                          `),d(27,zr,4,1,"div",14),e(28,`
                        `),t(),e(29,`
                      `),t(),e(30,`
                      `),i(31,"div",92),e(32,`
                        `),i(33,"div",93),e(34,`
                          `),i(35,"label",94),e(36,"Min density:"),t(),e(37,`
                          `),c(38,"input",95),e(39,`
                          `),d(40,Jr,4,1,"div",14),e(41,`
                        `),t(),e(42,`
                      `),t(),e(43,`
                      `),i(44,"div",92),e(45,`
                        `),i(46,"div",9),e(47,`
                          `),i(48,"label",96),e(49,"Max density:"),t(),e(50,`
                          `),c(51,"input",97),e(52,`
                          `),d(53,Xr,4,1,"div",14),e(54,`
                        `),t(),e(55,`
                      `),t(),e(56,`
                      `),i(57,"div",92),e(58,`
                        `),i(59,"div",9),e(60,`
                          `),i(61,"label",98),e(62,"Min Floor Area:"),t(),e(63,`
                          `),c(64,"input",99),e(65,`
                          `),d(66,Zr,4,1,"div",14),e(67,`
                        `),t(),e(68,`
                      `),t(),e(69,`
                      `),i(70,"div",92),e(71,`
                        `),i(72,"div",9),e(73,`
                          `),i(74,"label",100),e(75,"Max Floor Area:"),t(),e(76,`
                          `),c(77,"input",101),e(78,`
                          `),d(79,eo,4,1,"div",14),e(80,`
                        `),t(),e(81,`
                      `),t(),e(82,`
                      `),i(83,"div",21),e(84,`
                        `),i(85,"div",9),e(86,`
                          `),i(87,"label",102),e(88,"Min Floor Area Ratio (FAR):"),t(),e(89,`
                          `),c(90,"input",103),e(91,`
                          `),d(92,io,4,1,"div",14),e(93,`
                        `),t(),e(94,`
                      `),t(),e(95,`
                      `),i(96,"div",21),e(97,`
                        `),i(98,"div",9),e(99,`
                          `),i(100,"label",104),e(101,"Max Floor Area Ratio (FAR):"),t(),e(102,`
                          `),c(103,"input",105),e(104,`
                          `),d(105,ro,4,1,"div",14),e(106,`
                        `),t(),e(107,`
                      `),t(),e(108,`
                      `),i(109,"div",8),e(110,`
                        `),i(111,"div",9),e(112,`
                          `),i(113,"label",106),e(114,"Minimum Setback:"),t(),e(115,`
                          `),c(116,"input",107),e(117,`
                          `),d(118,ao,4,1,"div",14),e(119,`
                        `),t(),e(120,`
                      `),t(),e(121,`
                      `),i(122,"div",21),e(123,`
                        `),i(124,"div",9),e(125,`
                          `),i(126,"label",108),e(127,"Min Floor-to-Floor Height:"),t(),e(128,`
                          `),c(129,"input",109),e(130,`
                          `),d(131,mo,4,1,"div",14),e(132,`
                        `),t(),e(133,`
                      `),t(),e(134,`
                      `),i(135,"div",21),e(136,`
                        `),i(137,"div",9),e(138,`
                          `),i(139,"label",110),e(140,"Max Floor-to-Floor Height:"),t(),e(141,`
                          `),c(142,"input",111),e(143,`
                          `),d(144,_o,4,1,"div",14),e(145,`
                        `),t(),e(146,`
                      `),t(),e(147,`
                      `),i(148,"div",21),e(149,`
                        `),i(150,"div",9),e(151,`
                          `),i(152,"label",112),e(153,"Min No. of Floors:"),t(),e(154,`
                          `),c(155,"input",113),e(156,`
                          `),d(157,uo,4,1,"div",14),e(158,`
                        `),t(),e(159,`
                      `),t(),e(160,`
                      `),i(161,"div",21),e(162,`
                        `),i(163,"div",9),e(164,`
                          `),i(165,"label",114),e(166,"Max No. of Floors:"),t(),e(167,`
                          `),c(168,"input",115),e(169,`
                          `),d(170,fo,4,1,"div",14),e(171,`
                        `),t(),e(172,`
                      `),t(),e(173,`
                      `),i(174,"div",21),e(175,`
                        `),i(176,"div",9),e(177,`
                          `),i(178,"label",116),e(179,"Percentage of site covered by existing building(s):"),t(),e(180,`
                          `),c(181,"input",117),e(182,`
                          `),d(183,go,4,1,"div",14),e(184,`
                        `),t(),e(185,`
                      `),t(),e(186,`
                      `),i(187,"div",21),e(188,`
                        `),i(189,"div",9),e(190,`
                          `),i(191,"label",118),e(192,"Percentage of site covered by proposed building(s):"),t(),e(193,`
                          `),c(194,"input",119),e(195,`
                          `),d(196,yo,4,1,"div",14),e(197,`
                        `),t(),e(198,`
                      `),t(),e(199,`
                      `),i(200,"div",8),e(201,`
                        `),i(202,"div",9),e(203,`
                          `),i(204,"label",120),e(205,"Number of Units to be Developed:"),t(),e(206,`
                          `),c(207,"input",121),e(208,`
                          `),d(209,So,4,1,"div",14),e(210,`
                        `),t(),e(211,`
                      `),t(),e(212,`
                      `),i(213,"div",8),e(214,`
                        `),i(215,"div",9),e(216,`
                          `),i(217,"label",122),e(218,"Planned Land Use:"),t(),e(219,`
                          `),i(220,"select",123),e(221,`
                            `),i(222,"option",12),e(223,"--- Select planned land use ---"),t(),e(224,`
                            `),d(225,ho,2,3,"option",13),e(226,`
                          `),t(),e(227,`
                          `),d(228,Eo,4,1,"div",14),e(229,`
                        `),t(),e(230,`
                      `),t(),e(231,`
                      `),i(232,"div",124),e(233,`
                        `),i(234,"div",9),e(235,`
                          `),i(236,"label",125),e(237,"Primary Land Use:"),t(),e(238,`
                          `),i(239,"select",126),e(240,`
                            `),i(241,"option",12),e(242,"--- Select primary land use ---"),t(),e(243,`
                            `),d(244,Fo,2,3,"option",13),e(245,`
                          `),t(),e(246,`
                          `),d(247,To,4,1,"div",14),e(248,`
                        `),t(),e(249,`
                      `),t(),e(250,`
                      `),i(251,"div",124),e(252,`
                        `),i(253,"div",9),e(254,`
                          `),i(255,"label",127),e(256,"Secondary Land Use:"),t(),e(257,`
                          `),i(258,"select",128),e(259,`
                            `),i(260,"option",12),e(261,"--- Select secondary land use ---"),t(),e(262,`
                            `),d(263,Po,2,3,"option",13),e(264,`
                          `),t(),e(265,`
                          `),d(266,wo,4,1,"div",14),e(267,`
                        `),t(),e(268,`
                      `),t(),e(269,`
                      `),i(270,"div",124),e(271,`
                        `),i(272,"div",9),e(273,`
                          `),i(274,"label",129),e(275,"Preferred Ground Floor Use:"),t(),e(276,`
                          `),i(277,"select",130),e(278,`
                            `),i(279,"option",12),e(280,"--- Select ground floor use ---"),t(),e(281,`
                            `),d(282,Mo,2,3,"option",13),e(283,`
                          `),t(),e(284,`
                          `),d(285,ko,4,1,"div",14),e(286,`
                        `),t(),e(287,`
                      `),t(),e(288,`
                    `),t(),e(289,`
                  `),t(),e(290,`
                  `),i(291,"div"),e(292,`
                    `),i(293,"div",131),e(294,`
                      `),i(295,"button",132),y("click",function(){O(r);let _=p();return U(_.resetItemsForm())}),j(),c(296,"svg",133),e(297,"Reset"),t(),e(298,`
                      `),ve(),i(299,"button",134),y("click",function(){O(r);let _=p();return U(_.addItem())}),j(),c(300,"svg",135),e(301,"Add"),t(),e(302,`
                    `),t(),e(303,`
                    `),ve(),i(304,"div",136),e(305,`
                      `),i(306,"div",137),e(307,`
                          `),i(308,"table",138),e(309,`
                              `),i(310,"thead"),e(311,`
                                `),i(312,"tr"),e(313,`
                                  `),i(314,"th"),e(315,"#"),t(),e(316,`
                                  `),i(317,"th"),e(318,"Parcel"),t(),e(319,`
                                  `),i(320,"th"),e(321,"Min/Max "),c(322,"br"),e(323," Density"),t(),e(324,`
                                  `),i(325,"th"),e(326,"Min/Max "),c(327,"br"),e(328," Floor Area"),t(),e(329,`
                                  `),i(330,"th"),e(331,"Minimum "),c(332,"br"),e(333," Setback"),t(),e(334,`
                                  `),i(335,"th"),e(336,"Min/Max Floor "),c(337,"br"),e(338," to Floor Height"),t(),e(339,`
                                  `),i(340,"th"),e(341,"Min/Max "),c(342,"br"),e(343," No of Floors"),t(),e(344,`
                                  `),i(345,"th"),e(346,"Plot Coverage "),c(347,"br"),e(348," (Existing/Proposed)"),t(),e(349,`
                                  `),i(350,"th"),e(351,"No. of Units to "),c(352,"br"),e(353," be Developed"),t(),e(354,`
                                  `),i(355,"th"),e(356,"Action"),t(),e(357,`
                                `),t(),e(358,`
                              `),t(),e(359,`
                              `),i(360,"tbody"),e(361,`
                                `),d(362,jo,36,14,"tr",139),e(363,`
                              `),t(),e(364,`
                          `),t(),e(365,`
                      `),t(),e(366,`
                    `),t(),e(367,`
                  `),t(),e(368,`
              `),t(),e(369,`
              `),t()}if(o&2){let r,n,_,s,F,w,M,N,k,u=p();l(8),m("formGroup",u.mItemForm),l(11),m("ngClass",x(46,S,((r=u.mItemForm.get("parcel_number"))==null?null:r.invalid)&&(((r=u.mItemForm.get("parcel_number"))==null?null:r.dirty)||((r=u.mItemForm.get("parcel_number"))==null?null:r.touched)))),l(5),m("ngForOf",u.mInvestorParcels),l(3),m("ngIf",u.mItemForm.get("parcel_number").invalid&&(u.mItemForm.get("parcel_number").dirty||u.mItemForm.get("parcel_number").touched)),l(11),m("ngClass",x(48,S,u.mItemForm.get("min_density").invalid&&(u.mItemForm.get("min_density").dirty||u.mItemForm.get("min_density").touched))),l(2),m("ngIf",u.mItemForm.get("min_density").invalid&&(u.mItemForm.get("min_density").dirty||u.mItemForm.get("min_density").touched)),l(11),m("ngClass",x(50,S,u.mItemForm.get("max_density").invalid&&(u.mItemForm.get("max_density").dirty||u.mItemForm.get("max_density").touched))),l(2),m("ngIf",u.mItemForm.get("max_density").invalid&&(u.mItemForm.get("max_density").dirty||u.mItemForm.get("max_density").touched)),l(11),m("ngClass",x(52,S,u.mItemForm.get("min_floor_area").invalid&&(u.mItemForm.get("min_floor_area").dirty||u.mItemForm.get("min_floor_area").touched))),l(2),m("ngIf",u.mItemForm.get("min_floor_area").invalid&&(u.mItemForm.get("min_floor_area").dirty||u.mItemForm.get("min_floor_area").touched)),l(11),m("ngClass",x(54,S,u.mItemForm.get("max_floor_area").invalid&&(u.mItemForm.get("max_floor_area").dirty||u.mItemForm.get("max_floor_area").touched))),l(2),m("ngIf",u.mItemForm.get("max_floor_area").invalid&&(u.mItemForm.get("max_floor_area").dirty||u.mItemForm.get("max_floor_area").touched)),l(11),m("ngClass",x(56,S,u.mItemForm.get("min_far").invalid&&(u.mItemForm.get("min_far").dirty||u.mItemForm.get("min_far").touched))),l(2),m("ngIf",u.mItemForm.get("min_far").invalid&&(u.mItemForm.get("min_far").dirty||u.mItemForm.get("min_far").touched)),l(11),m("ngClass",x(58,S,u.mItemForm.get("max_far").invalid&&(u.mItemForm.get("max_far").dirty||u.mItemForm.get("max_far").touched))),l(2),m("ngIf",u.mItemForm.get("max_far").invalid&&(u.mItemForm.get("max_far").dirty||u.mItemForm.get("max_far").touched)),l(11),m("ngClass",x(60,S,u.mItemForm.get("minimum_setback").invalid&&(u.mItemForm.get("minimum_setback").dirty||u.mItemForm.get("minimum_setback").touched))),l(2),m("ngIf",u.mItemForm.get("minimum_setback").invalid&&(u.mItemForm.get("minimum_setback").dirty||u.mItemForm.get("minimum_setback").touched)),l(11),m("ngClass",x(62,S,u.mItemForm.get("min_floor_to_floor_height").invalid&&(u.mItemForm.get("min_floor_to_floor_height").dirty||u.mItemForm.get("min_floor_to_floor_height").touched))),l(2),m("ngIf",u.mItemForm.get("min_floor_to_floor_height").invalid&&(u.mItemForm.get("min_floor_to_floor_height").dirty||u.mItemForm.get("min_floor_to_floor_height").touched)),l(11),m("ngClass",x(64,S,u.mItemForm.get("max_floor_to_floor_height").invalid&&(u.mItemForm.get("max_floor_to_floor_height").dirty||u.mItemForm.get("max_floor_to_floor_height").touched))),l(2),m("ngIf",u.mItemForm.get("max_floor_to_floor_height").invalid&&(u.mItemForm.get("max_floor_to_floor_height").dirty||u.mItemForm.get("max_floor_to_floor_height").touched)),l(11),m("ngClass",x(66,S,u.mItemForm.get("min_number_of_floors").invalid&&(u.mItemForm.get("min_number_of_floors").dirty||u.mItemForm.get("min_number_of_floors").touched))),l(2),m("ngIf",u.mItemForm.get("min_number_of_floors").invalid&&(u.mItemForm.get("min_number_of_floors").dirty||u.mItemForm.get("min_number_of_floors").touched)),l(11),m("ngClass",x(68,S,u.mItemForm.get("max_number_of_floors").invalid&&(u.mItemForm.get("max_number_of_floors").dirty||u.mItemForm.get("max_number_of_floors").touched))),l(2),m("ngIf",u.mItemForm.get("max_number_of_floors").invalid&&(u.mItemForm.get("max_number_of_floors").dirty||u.mItemForm.get("max_number_of_floors").touched)),l(11),m("ngClass",x(70,S,u.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(u.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||u.mItemForm.get("percentage_of_site_covered_by_existing_building").touched))),l(2),m("ngIf",u.mItemForm.get("percentage_of_site_covered_by_existing_building").invalid&&(u.mItemForm.get("percentage_of_site_covered_by_existing_building").dirty||u.mItemForm.get("percentage_of_site_covered_by_existing_building").touched)),l(11),m("ngClass",x(72,S,u.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(u.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||u.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched))),l(2),m("ngIf",u.mItemForm.get("percentage_of_site_covered_by_proposed_building").invalid&&(u.mItemForm.get("percentage_of_site_covered_by_proposed_building").dirty||u.mItemForm.get("percentage_of_site_covered_by_proposed_building").touched)),l(11),m("ngClass",x(74,S,u.mItemForm.get("number_of_units_to_be_developed").invalid&&(u.mItemForm.get("number_of_units_to_be_developed").dirty||u.mItemForm.get("number_of_units_to_be_developed").touched))),l(2),m("ngIf",u.mItemForm.get("number_of_units_to_be_developed").invalid&&(u.mItemForm.get("number_of_units_to_be_developed").dirty||u.mItemForm.get("number_of_units_to_be_developed").touched)),l(11),m("ngClass",x(76,S,((n=u.mItemForm.get("planned_land_use_id"))==null?null:n.invalid)&&(((n=u.mItemForm.get("planned_land_use_id"))==null?null:n.dirty)||((n=u.mItemForm.get("planned_land_use_id"))==null?null:n.touched)))),l(5),m("ngForOf",u.mParcelLandUseGroups),l(3),m("ngIf",((_=u.mItemForm.get("planned_land_use_id"))==null?null:_.invalid)&&(((_=u.mItemForm.get("planned_land_use_id"))==null?null:_.dirty)||((_=u.mItemForm.get("planned_land_use_id"))==null?null:_.touched))),l(11),m("ngClass",x(78,S,((s=u.mItemForm.get("primary_land_use_id"))==null?null:s.invalid)&&(((s=u.mItemForm.get("primary_land_use_id"))==null?null:s.dirty)||((s=u.mItemForm.get("primary_land_use_id"))==null?null:s.touched)))),l(5),m("ngForOf",u.mParcelLandUseGroups),l(3),m("ngIf",((F=u.mItemForm.get("primary_land_use_id"))==null?null:F.invalid)&&(((F=u.mItemForm.get("primary_land_use_id"))==null?null:F.dirty)||((F=u.mItemForm.get("primary_land_use_id"))==null?null:F.touched))),l(11),m("ngClass",x(80,S,((w=u.mItemForm.get("secondary_land_use_id"))==null?null:w.invalid)&&(((w=u.mItemForm.get("secondary_land_use_id"))==null?null:w.dirty)||((w=u.mItemForm.get("secondary_land_use_id"))==null?null:w.touched)))),l(5),m("ngForOf",u.mParcelLandUseGroups),l(3),m("ngIf",((M=u.mItemForm.get("secondary_land_use_id"))==null?null:M.invalid)&&(((M=u.mItemForm.get("secondary_land_use_id"))==null?null:M.dirty)||((M=u.mItemForm.get("secondary_land_use_id"))==null?null:M.touched))),l(11),m("ngClass",x(82,S,((N=u.mItemForm.get("preferred_ground_floor_use_id"))==null?null:N.invalid)&&(((N=u.mItemForm.get("preferred_ground_floor_use_id"))==null?null:N.dirty)||((N=u.mItemForm.get("preferred_ground_floor_use_id"))==null?null:N.touched)))),l(5),m("ngForOf",u.mParcelLandUseGroups),l(3),m("ngIf",((k=u.mItemForm.get("preferred_ground_floor_use_id"))==null?null:k.invalid)&&(((k=u.mItemForm.get("preferred_ground_floor_use_id"))==null?null:k.dirty)||((k=u.mItemForm.get("preferred_ground_floor_use_id"))==null?null:k.touched))),l(14),m("disabled",u.mItemForm.invalid),l(63),m("ngForOf",u.mLandUsePlans)}}function Ro(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Vo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Ro,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("site_plan_and_analysis").errors)==null?null:r.required)}}function Do(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Lo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Do,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("context_analysis").errors)==null?null:r.required)}}function Bo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Oo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Bo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("concept_plan").errors)==null?null:r.required)}}function Uo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Go(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Uo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("geotechnical_report").errors)==null?null:r.required)}}function Wo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ho(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Wo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("topographical_survey").errors)==null?null:r.required)}}function zo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Yo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,zo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("parking_strategy").errors)==null?null:r.required)}}function Jo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ko(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Jo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("traffic_management_plan").errors)==null?null:r.required)}}function Xo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Qo(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Xo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_utility_demand_requirements").errors)==null?null:r.required)}}function Zo(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function $o(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,Zo,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("project_sustainability_brief").errors)==null?null:r.required)}}function ea(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ta(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ea,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("sustainability_report").errors)==null?null:r.required)}}function ia(o,a){if(o&1&&(i(0,"option",75),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.name)}}function na(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ra(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,na,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("green_certification_id").errors)==null?null:r.required)}}function oa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function aa(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,oa,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("other_green_certification").errors)==null?null:r.required)}}function la(o,a){if(o&1){let r=me();i(0,"div",8),e(1,`
                `),i(2,"div",9),e(3,`
                  `),i(4,"label",143),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"input",144),P("ngModelChange",function(_){O(r);let s=p();return T(s.item.other_green_certification,_)||(s.item.other_green_certification=_),U(_)}),t(),e(8,`
                  `),d(9,aa,4,1,"div",14),e(10,`
                `),t(),e(11,`
              `),t()}if(o&2){let r=p();l(7),I("ngModel",r.item.other_green_certification),m("ngClass",x(3,S,r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))),l(2),m("ngIf",r.itemForm.get("other_green_certification").invalid&&(r.itemForm.get("other_green_certification").dirty||r.itemForm.get("other_green_certification").touched))}}function ma(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function da(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,ma,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_duration").errors)==null?null:r.required)}}function sa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function _a(o,a){if(o&1&&(i(0,"div",76),e(1,`
                    `),d(2,sa,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("estimated_project_construction_cost").errors)==null?null:r.required)}}function pa(o,a){o&1&&(i(0,"div"),e(1,"You must accept to proceed."),t())}function ua(o,a){if(o&1&&(i(0,"div",76),e(1,`
                  `),d(2,pa,2,0,"div",0),e(3,`
                `),t()),o&2){let r,n=p();l(2),m("ngIf",(r=n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").errors)==null?null:r.requiredTrue)}}var dt=class o{constructor(a,r,n,_,s,F,w){this.mConstructionPermitService=a;this.mProfileService=r;this.router=n;this.mToastrService=_;this.mAppContextService=s;this.fb=F;this.route=w;this.mInvestorParcels={};this.mProgress=C(!1);this.mParcelInfo={};this.mEditor=Se;this.mLandUsePlans=[];this.itemForm=this.fb.group({investor_id:["",f.required],type_id:["",f.required],professional_body_id:["",f.nullValidator],membership_number:["",f.nullValidator],consultant_name:["",f.nullValidator],address:["",f.nullValidator],email:["",f.nullValidator],nationality:["",f.nullValidator],project_brief:["",f.required],project_purpose:["",f.required],site_plan_and_analysis:["",f.nullValidator],context_analysis:["",f.nullValidator],concept_plan:["",f.nullValidator],geotechnical_report:["",f.nullValidator],topographical_survey:["",f.nullValidator],parking_strategy:["",f.nullValidator],traffic_management_plan:["",f.nullValidator],estimated_utility_demand_requirements:["",f.nullValidator],project_sustainability_brief:["",f.required],green_certification_id:["",f.required],other_green_certification:["",f.nullValidator],sustainability_report:["",f.nullValidator],has_variations:["no",f.required],estimated_project_duration:["",f.required],estimated_project_construction_cost:["",f.required],commitment_to_comply_with_development_codes_and_guidelines:[!1,f.requiredTrue]}),this.mItemForm=this.fb.group({parcel_number:["",f.required],planned_land_use_id:["",f.required],primary_land_use_id:["",f.required],secondary_land_use_id:["",f.nullValidator],preferred_ground_floor_use_id:["",f.nullValidator],number_of_units_to_be_developed:["",f.required],percentage_of_site_covered_by_existing_building:["",f.required],percentage_of_site_covered_by_proposed_building:["",f.nullValidator],min_number_of_floors:["",f.required],max_number_of_floors:["",f.required],min_floor_to_floor_height:["",f.nullValidator],max_floor_to_floor_height:["",f.nullValidator],min_floor_area:["",f.nullValidator],max_floor_area:["",f.nullValidator],min_far:["",f.nullValidator],max_far:["",f.nullValidator],minimum_setback:["",f.nullValidator]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mLandUsePlans=this.item.variations,this.mInvestorParcels=this.item.investor.parcels,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPermitTypes=a.data.permit_types,this.mParcelLandUseGroups=a.data.parcel_land_use_groups,this.mGreenCertifications=a.data.green_certifications,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){let r=JSON.stringify(Object.assign({},this.mLandUsePlans)),n=new FormData;n.append("investor_id",a.investor_id),n.append("type_id",a.type_id),n.append("professional_body_id",a.professional_body_id),n.append("membership_number",a.membership_number),n.append("consultant_name",a.consultant_name),n.append("address",a.address),n.append("email",a.email),n.append("nationality",a.nationality),n.append("project_brief",a.project_brief),n.append("project_purpose",a.project_purpose),n.append("has_variations",a.has_variations),n.append("land_use_plans",r),n.append("project_sustainability_brief",a.project_sustainability_brief),n.append("green_certification_id",a.green_certification_id),n.append("other_green_certification",a.other_green_certification),n.append("estimated_project_duration",a.estimated_project_duration),n.append("estimated_project_construction_cost",a.estimated_project_construction_cost),n.append("commitment_to_comply_with_development_codes_and_guidelines",a.commitment_to_comply_with_development_codes_and_guidelines),n.append("site_plan_and_analysis",this.site_plan_and_analysis_file,this.site_plan_and_analysis_file.name),n.append("context_analysis",this.context_analysis_file,this.context_analysis_file.name),n.append("concept_plan",this.concept_plan_file,this.concept_plan_file.name),n.append("geotechnical_report",this.geotechnical_report_file,this.geotechnical_report_file.name),n.append("topographical_survey",this.topographical_survey_file,this.topographical_survey_file.name),n.append("parking_strategy",this.parking_strategy_file,this.parking_strategy_file.name),n.append("traffic_management_plan",this.traffic_management_plan_file,this.traffic_management_plan_file.name),n.append("estimated_utility_demand_requirements",this.estimated_utility_demand_requirements_file,this.estimated_utility_demand_requirements_file.name),n.append("sustainability_report",this.sustainability_report_file,this.sustainability_report_file.name),n.append("_method","PUT"),this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,n).subscribe({next:_=>{_&&(this.mToastrService.success(_.message),this.router.navigateByUrl("/construction-permits"),this.mProgress.set(!1))},error:_=>{_.error.message&&this.mToastrService.error(_.error.message),this.mProgress.set(!1)}})}verifyProfessional(){let a={professional_body_id:this.itemForm.get("professional_body_id")?.value,membership_number:this.itemForm.get("membership_number")?.value};!a.professional_body_id||!a.membership_number||(this.mProgress.set(!0),this.mProfileService.professionalSearch(a).subscribe({next:r=>{if(r){if(r.status==="failed")this.mToastrService.error(r.message);else{let n=r;if(this.itemForm.get("consultant_name")?.setValue(n.name),this.itemForm.get("address")?.setValue(n.address),this.itemForm.get("email")?.setValue(n.email),this.itemForm.get("nationality")?.setValue(n.nationality),n.status=="Inactive"){let _=r;this.mToastrService.error(_.good_standing+" "+_.balance_reason),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits")}}this.mProgress.set(!1)}},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}}))}onContextAnalysisChange(a){if(a.target.value){let r=a.target.files[0];this.context_analysis_file=r}}onSitePlanAndAnlysisChange(a){if(a.target.value){let r=a.target.files[0];this.site_plan_and_analysis_file=r}}onConceptPlanChange(a){if(a.target.value){let r=a.target.files[0];this.concept_plan_file=r}}onGeotechnicalReportChange(a){if(a.target.value){let r=a.target.files[0];this.geotechnical_report_file=r}}onTopographicalSurveyChange(a){if(a.target.value){let r=a.target.files[0];this.topographical_survey_file=r}}onParkingStrategyChange(a){if(a.target.value){let r=a.target.files[0];this.parking_strategy_file=r}}onTrafficManagementPlanChange(a){if(a.target.value){let r=a.target.files[0];this.traffic_management_plan_file=r}}onEstimatedUtilityDemandRequirementsChange(a){if(a.target.value){let r=a.target.files[0];this.estimated_utility_demand_requirements_file=r}}onSustainabilityReportChange(a){if(a.target.value){let r=a.target.files[0];this.sustainability_report_file=r}}onInvestorChange(a){if(a.target.value){let r=a.target.value;this.mProgress.set(!0),this.mConstructionPermitService.getInvestorParcelsItems(r).subscribe({next:n=>{n&&(this.mInvestorParcels=n,this.mProgress.set(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}}onCheckVariations(a){let r=this.itemForm.get("has_variations")?.value;console.log(r)}getInvalidFields(){return Object.keys(this.itemForm.controls).filter(a=>this.itemForm.get(a)?.invalid)}addItem(){let a=this.mItemForm.value;this.mLandUsePlans.some(n=>n.parcel_number===a.parcel_number)?this.mToastrService.error("Item already exists"):(this.mLandUsePlans.push(a),this.onCheckVariations(a),this.mItemForm.reset())}resetItemsForm(){this.mItemForm.reset()}removeItem(a){this.mLandUsePlans.forEach((r,n)=>{r===a&&this.mLandUsePlans.splice(n,1)})}static{this.\u0275fac=function(r){return new(r||o)(v(B),v(ot),v(_e),v(D),v(V),v(ge),v(se))}}static{this.\u0275cmp=A({type:o,selectors:[["app-edit"]],standalone:!1,decls:493,vars:127,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","investor_id",1,"col-form-label","required"],["formControlName","investor_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","type_id",1,"col-form-label","required"],["formControlName","type_id","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","professional_body_id?",1,"col-form-label","required"],["formControlName","professional_body_id","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],["for","membership_number",1,"col-form-label","required"],["formControlName","membership_number","type","text",1,"form-control",3,"ngModelChange","change","ngModel","ngClass"],[1,"col-md-6"],["for","consultant_name",1,"col-form-label","required"],["formControlName","consultant_name","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","address",1,"col-form-label","required"],["formControlName","address","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","email",1,"col-form-label","required"],["formControlName","email","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","nationality",1,"col-form-label","required"],["formControlName","nationality","type","text","readonly","",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","project_brief",1,"col-form-label","required"],["formControlName","project_brief","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","project_purpose",1,"col-form-label","required"],["formControlName","project_purpose","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["class","alert alert-success",4,"ngIf"],["for","has_variations",1,"col-form-label","required"],[1,"form-check"],["type","radio","formControlName","has_variations","id","variation_no","value","no",1,"form-check-input",3,"ngModelChange","ngModel"],["for","variation_no",1,"form-check-label"],["type","radio","formControlName","has_variations","id","variation_yes","value","yes",1,"form-check-input",3,"ngModelChange","ngModel"],["for","variation_yes",1,"form-check-label"],["class","col-md-12",4,"ngIf"],["for","site_plan_and_analysis",1,"col-form-label","required"],["formControlName","site_plan_and_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","context_analysis",1,"col-form-label","required"],["formControlName","context_analysis","type","file",1,"form-control",3,"change","ngClass"],["for","concept_plan",1,"col-form-label","required"],["formControlName","concept_plan","type","file",1,"form-control",3,"change","ngClass"],["for","geotechnical_report",1,"col-form-label","required"],["formControlName","geotechnical_report","type","file",1,"form-control",3,"change","ngClass"],["for","topographical_survey",1,"col-form-label","required"],["formControlName","topographical_survey","type","file",1,"form-control",3,"change","ngClass"],["for","parking_strategy",1,"col-form-label","required"],["routerLink","/downloads","target","_blank","rel","noopener noreferrer"],["formControlName","parking_strategy","type","file",1,"form-control",3,"change","ngClass"],["for","traffic_management_plan",1,"col-form-label","required"],["formControlName","traffic_management_plan","type","file",1,"form-control",3,"change","ngClass"],["for","estimated_utility_demand_requirements",1,"col-form-label","required"],["formControlName","estimated_utility_demand_requirements","type","file",1,"form-control",3,"change","ngClass"],["for","project_sustainability_brief",1,"col-form-label","required"],["formControlName","project_sustainability_brief","type","file",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["formControlName","sustainability_report","type","file",1,"form-control",3,"change","ngClass"],["for","green_certification_id",1,"col-form-label","required"],["formControlName","green_certification_id","id","itemForm.get('green_certification_id')","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_duration",1,"col-form-label","required"],["formControlName","estimated_project_duration","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],["for","estimated_project_construction_cost",1,"col-form-label","required"],["formControlName","estimated_project_construction_cost","type","number",1,"form-control",3,"ngModelChange","ngModel","ngClass"],[1,"col-12","mb-3"],["type","checkbox","formControlName","commitment_to_comply_with_development_codes_and_guidelines",1,"form-check-input",3,"ngModelChange","ngModel"],["for","investorCommitment",1,"form-check-label"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"],[1,"alert","alert-success"],[1,"mb-1"],[1,"fw-bold"],["class","col-md-4 mb-2",4,"ngFor","ngForOf"],[1,"col-md-4","mb-2"],[1,"card","shadow1","h-100"],[1,"card-body"],[1,"text-title"],[1,"card-text"],[1,"border","mb-3"],[1,"text-bold","text-muted"],[3,"formGroup"],[1,"row","mb-3","px-3"],["for","parcel_number",1,"col-form-label","required"],["formControlName","parcel_number","type","text",1,"form-control",3,"ngClass"],[1,"col-md-3"],[1,"form-group"],["for","min_density",1,"col-form-label","required"],["formControlName","min_density","type","number",1,"form-control",3,"ngClass"],["for","max_density",1,"col-form-label","required"],["formControlName","max_density","type","number",1,"form-control",3,"ngClass"],["for","min_floor_area",1,"col-form-label","required"],["formControlName","min_floor_area","type","number",1,"form-control",3,"ngClass"],["for","max_floor_area",1,"col-form-label","required"],["formControlName","max_floor_area","type","number",1,"form-control",3,"ngClass"],["for","min_FAR",1,"col-form-label","required"],["formControlName","min_far","type","number",1,"form-control",3,"ngClass"],["for","max_far",1,"col-form-label","required"],["formControlName","max_far","type","number",1,"form-control",3,"ngClass"],["for","minimum_setback",1,"col-form-label","required"],["formControlName","minimum_setback","type","number",1,"form-control",3,"ngClass"],["for","min_floor_to_floor_height",1,"col-form-label","required"],["formControlName","min_floor_to_floor_height","type","text",1,"form-control",3,"ngClass"],["for","max_floor_to_floor_height",1,"col-form-label","required"],["formControlName","max_floor_to_floor_height","type","text",1,"form-control",3,"ngClass"],["for","min_number_of_floors",1,"col-form-label","required"],["formControlName","min_number_of_floors","type","text",1,"form-control",3,"ngClass"],["for","max_number_of_floors",1,"col-form-label","required"],["formControlName","max_number_of_floors","type","text",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_existing_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_existing_building","type","number",1,"form-control",3,"ngClass"],["for","percentage_of_site_covered_by_proposed_building",1,"col-form-label","required"],["formControlName","percentage_of_site_covered_by_proposed_building","type","number",1,"form-control",3,"ngClass"],["for","number_of_units_to_be_developed",1,"col-form-label","required"],["formControlName","number_of_units_to_be_developed","type","number",1,"form-control",3,"ngClass"],["for","planned_land_use_id",1,"col-form-label","required"],["formControlName","planned_land_use_id","type","text",1,"form-control",3,"ngClass"],[1,"col-md-4"],["for","primary_land_use_id",1,"col-form-label","required"],["formControlName","primary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","secondary_land_use_id",1,"col-form-label","required"],["formControlName","secondary_land_use_id","type","text",1,"form-control",3,"ngClass"],["for","preferred_ground_floor_use_id",1,"col-form-label","required"],["formControlName","preferred_ground_floor_use_id","type","text",1,"form-control",3,"ngClass"],[1,"text-end","mb-3","mt-3"],["type","button",1,"btn","btn-outline-danger","btn-sm","me-1",3,"click"],["cIcon","","name","cilMinus",1,"btn-icon"],["type","button",1,"btn","btn-outline-success","btn-sm",3,"click","disabled"],["cIcon","","name","cilPlus",1,"btn-icon"],[1,"px-3","mb-3"],[1,"table-responsive"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"text-nowrap"],["type","button",1,"btn","btn-outline-dark","btn-sm",3,"click"],["cIcon","","name","cilTrash",1,"btn-icon"],["for","other_green_certification",1,"col-form-label","required"],["formControlName","other_green_certification","type","text",1,"form-control",3,"ngModelChange","ngModel","ngClass"]],template:function(r,n){if(r&1&&(d(0,xr,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),e(9,`

        `),i(10,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(11,`

          `),i(12,"fieldset",4),e(13,`
            `),i(14,"legend",5)(15,"h6",6),e(16,"GENERAL INFORMATION"),t()(),e(17,`
            `),i(18,"div",7),e(19,`
              `),i(20,"div",8),e(21,`
                `),i(22,"div",9),e(23,`
                  `),i(24,"label",10),e(25,"Company:"),t(),e(26,`
                  `),i(27,"select",11),P("ngModelChange",function(s){return T(n.item.investor_id,s)||(n.item.investor_id=s),s}),y("change",function(s){return n.onInvestorChange(s)}),e(28,`
                    `),i(29,"option",12),e(30,"--- Select investor ---"),t(),e(31,`
                    `),d(32,gr,2,3,"option",13),e(33,`
                  `),t(),e(34,`
                  `),d(35,yr,4,1,"div",14),e(36,`
                `),t(),e(37,`
              `),t(),e(38,`
              `),i(39,"div",8),e(40,`
                `),i(41,"div",9),e(42,`
                  `),i(43,"label",15),e(44,"Nature of Application:"),t(),e(45,`
                  `),i(46,"select",16),P("ngModelChange",function(s){return T(n.item.type_id,s)||(n.item.type_id=s),s}),e(47,`
                    `),i(48,"option",12),e(49,"--- Select plan submission type ---"),t(),e(50,`
                    `),d(51,br,2,3,"option",13),e(52,`
                  `),t(),e(53,`
                  `),d(54,hr,4,1,"div",14),e(55,`
                `),t(),e(56,`
              `),t(),e(57,`
            `),t(),e(58,`
          `),t(),e(59,`
          `),i(60,"fieldset",4),e(61,`
            `),i(62,"legend",5)(63,"h6",6),e(64,"CONSULTANT INFORMATION"),t()(),e(65,`
            `),i(66,"div",7),e(67,`
              `),i(68,"div",8),e(69,`
                `),i(70,"div",9),e(71,`
                  `),i(72,"label",17),e(73,"Professional Body:"),t(),e(74,`
                  `),i(75,"select",18),P("ngModelChange",function(s){return T(n.item.consultant_profile.professional_body_id,s)||(n.item.consultant_profile.professional_body_id=s),s}),y("change",function(){return n.verifyProfessional()}),e(76,`
                    `),i(77,"option",12),e(78,"--- Select professional body ---"),t(),e(79,`
                    `),d(80,Cr,2,3,"option",13),e(81,`
                  `),t(),e(82,`
                  `),d(83,Fr,4,1,"div",14),e(84,`
                `),t(),e(85,`
              `),t(),e(86,`
              `),i(87,"div",8),e(88,`
                `),i(89,"div",9),e(90,`
                  `),i(91,"label",19),e(92,"Membership Number:"),t(),e(93,`
                  `),i(94,"input",20),P("ngModelChange",function(s){return T(n.item.consultant_profile.membership_number,s)||(n.item.consultant_profile.membership_number=s),s}),y("change",function(){return n.verifyProfessional()}),t(),e(95,`
                  `),d(96,Tr,4,1,"div",14),e(97,`
                `),t(),e(98,`
              `),t(),e(99,`
              `),i(100,"div",21),e(101,`
                `),i(102,"div",9),e(103,`
                  `),i(104,"label",22),e(105,"Consultant Name:"),t(),e(106,`
                  `),i(107,"input",23),P("ngModelChange",function(s){return T(n.item.consultant.name,s)||(n.item.consultant.name=s),s}),t(),e(108,`
                  `),d(109,qr,4,1,"div",14),e(110,`
                `),t(),e(111,`
              `),t(),e(112,`
              `),i(113,"div",21),e(114,`
                `),i(115,"div",9),e(116,`
                  `),i(117,"label",24),e(118,"Address:"),t(),e(119,`
                  `),i(120,"input",25),P("ngModelChange",function(s){return T(n.item.consultant_profile.address,s)||(n.item.consultant_profile.address=s),s}),t(),e(121,`
                  `),d(122,Mr,4,1,"div",14),e(123,`
                `),t(),e(124,`
              `),t(),e(125,`
              `),i(126,"div",21),e(127,`
                `),i(128,"div",9),e(129,`
                  `),i(130,"label",26),e(131,"Email:"),t(),e(132,`
                  `),i(133,"input",27),P("ngModelChange",function(s){return T(n.item.consultant.email,s)||(n.item.consultant.email=s),s}),t(),e(134,`
                  `),d(135,kr,4,1,"div",14),e(136,`
                `),t(),e(137,`
              `),t(),e(138,`
              `),i(139,"div",21),e(140,`
                `),i(141,"div",9),e(142,`
                  `),i(143,"label",28),e(144,"Citizenship:"),t(),e(145,`
                  `),i(146,"input",29),P("ngModelChange",function(s){return T(n.item.consultant_profile.nationality,s)||(n.item.consultant_profile.nationality=s),s}),t(),e(147,`
                  `),d(148,Ar,4,1,"div",14),e(149,`
                `),t(),e(150,`
              `),t(),e(151,`
            `),t(),e(152,`
          `),t(),e(153,`
          `),i(154,"fieldset",4),e(155,`
            `),i(156,"legend",5)(157,"h6",6),e(158,"PROJECT BRIEF AND PURPOSE"),t()(),e(159,`
              `),i(160,"div",7),e(161,`
                `),i(162,"div",8),e(163,`
                  `),i(164,"div",9),e(165,`
                    `),i(166,"label",30),e(167,"Project Brief (Description of the overall project concept and how it fits in the Konza Technopolis Vision):"),t(),e(168,`
                    `),i(169,"ckeditor",31),P("ngModelChange",function(s){return T(n.item.project_brief,s)||(n.item.project_brief=s),s}),t(),e(170,`
                    `),d(171,Vr,4,1,"div",14),e(172,`
                  `),t(),e(173,`
                `),t(),e(174,`
                `),i(175,"div",8),e(176,`
                  `),i(177,"div",9),e(178,`
                    `),i(179,"label",32),e(180,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(181,`
                    `),i(182,"ckeditor",33),P("ngModelChange",function(s){return T(n.item.project_purpose,s)||(n.item.project_purpose=s),s}),t(),e(183,`
                    `),d(184,Lr,4,1,"div",14),e(185,`
                  `),t(),e(186,`
                `),t(),e(187,`
              `),t(),e(188,`
          `),t(),e(189,`
          `),i(190,"fieldset",4),e(191,`
            `),i(192,"legend",5)(193,"h6",6),e(194,"PARCEL & CONTEXT ANALYSIS"),t()(),e(195,`
            `),i(196,"div",7),e(197,`
              `),i(198,"div",8),e(199,`
                `),d(200,Or,13,1,"div",34),e(201,`
              `),t(),e(202,`
              `),i(203,"div",8),e(204,`
                `),i(205,"div",9),e(206,`
                  `),i(207,"label",35),e(208,"Variations (Does Your Project Require any Variation?):"),t(),e(209,`
                  `),i(210,"div",36),e(211,`
                    `),i(212,"input",37),P("ngModelChange",function(s){return T(n.item.has_variations,s)||(n.item.has_variations=s),s}),t(),e(213,`
                    `),i(214,"label",38),e(215," No"),t(),e(216,`
                  `),t(),e(217,`
                  `),i(218,"div",36),e(219,`
                    `),i(220,"input",39),P("ngModelChange",function(s){return T(n.item.has_variations,s)||(n.item.has_variations=s),s}),t(),e(221,`
                    `),i(222,"label",40),e(223," Yes"),t(),e(224,`
                  `),t(),e(225,`
                  `),d(226,Gr,4,1,"div",14),e(227,`
                `),t(),e(228,`
              `),t(),e(229,`
              `),d(230,Ao,370,84,"div",41),e(231,`
              `),i(232,"div",8),e(233,`
                `),i(234,"div",9),e(235,`
                  `),i(236,"label",42),e(237,"Site Plan and Analysis (Including Solar path and wind analysis, Roads for internal circulation in individual parcels, landscaped areas, building footprint, Easements and wayleaves, Separation distances (where applicable) (Where abutting land uses are divergent and there is a risk of pollution, separation distances should apply as per the NEMA provisions and buffers should be introduced where applicable)):"),t(),e(238,`
                  `),i(239,"input",43),y("change",function(s){return n.onSitePlanAndAnlysisChange(s)}),t(),e(240,`
                  `),d(241,Vo,4,1,"div",14),e(242,`
                `),t(),e(243,`
              `),t(),e(244,`
              `),i(245,"div",8),e(246,`
                `),i(247,"div",9),e(248,`
                  `),i(249,"label",44),e(250,"Context Analysis (500m radius context analysis):"),t(),e(251,`
                  `),i(252,"input",45),y("change",function(s){return n.onContextAnalysisChange(s)}),t(),e(253,`
                  `),d(254,Lo,4,1,"div",14),e(255,`
                `),t(),e(256,`
              `),t(),e(257,`
            `),t(),e(258,`
          `),t(),e(259,`
          `),i(260,"fieldset",4),e(261,`
            `),i(262,"legend",5)(263,"h6",6),e(264,"DEVELOPMENT DATA"),t()(),e(265,`
            `),i(266,"div",7),e(267,`
              `),i(268,"div",21),e(269,`
                `),i(270,"div",9),e(271,`
                  `),i(272,"label",46),e(273,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(274,`
                  `),i(275,"input",47),y("change",function(s){return n.onConceptPlanChange(s)}),t(),e(276,`
                  `),d(277,Oo,4,1,"div",14),e(278,`
                `),t(),e(279,`
              `),t(),e(280,`
              `),i(281,"div",21),e(282,`
                `),i(283,"div",9),e(284,`
                  `),i(285,"label",48),e(286,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(287,`
                  `),i(288,"input",49),y("change",function(s){return n.onGeotechnicalReportChange(s)}),t(),e(289,`
                  `),d(290,Go,4,1,"div",14),e(291,`
                `),t(),e(292,`
              `),t(),e(293,`
              `),i(294,"div",8),e(295,`
                `),i(296,"div",9),e(297,`
                  `),i(298,"label",50),e(299,"Topographical Survey:"),t(),e(300,`
                  `),i(301,"input",51),y("change",function(s){return n.onTopographicalSurveyChange(s)}),t(),e(302,`
                  `),d(303,Ho,4,1,"div",14),e(304,`
                `),t(),e(305,`
              `),t(),e(306,`
            `),t(),e(307,`
          `),t(),e(308,`
          `),i(309,"fieldset",4),e(310,`
            `),i(311,"legend",5)(312,"h6",6),e(313,"ACCESS ANALYSIS PLAN"),t()(),e(314,`
            `),i(315,"div",7),e(316,`
              `),i(317,"div",8),e(318,`
                `),i(319,"div",9),e(320,`
                  `),i(321,"label",52),e(322,"Parking Strategy (Using "),i(323,"a",53),e(324,"Reference Materials"),t(),e(325," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6), :"),t(),e(326,`
                  `),i(327,"input",54),y("change",function(s){return n.onParkingStrategyChange(s)}),t(),e(328,`
                  `),d(329,Yo,4,1,"div",14),e(330,`
                `),t(),e(331,`
              `),t(),e(332,`
              `),i(333,"div",8),e(334,`
                `),i(335,"div",9),e(336,`
                  `),i(337,"label",55),e(338,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(339,`
                  `),i(340,"input",56),y("change",function(s){return n.onTrafficManagementPlanChange(s)}),t(),e(341,`
                  `),d(342,Ko,4,1,"div",14),e(343,`
                `),t(),e(344,`
              `),t(),e(345,`
            `),t(),e(346,`
          `),t(),e(347,`
          `),i(348,"fieldset",4),e(349,`
            `),i(350,"legend",5)(351,"h6",6),e(352,"ESTIMATED UTILITY DEMAND"),t()(),e(353,`
            `),i(354,"div",7),e(355,`
              `),i(356,"div",8),e(357,`
                `),i(358,"div",9),e(359,`
                  `),i(360,"label",57),e(361,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(362,`
                  `),i(363,"input",58),y("change",function(s){return n.onEstimatedUtilityDemandRequirementsChange(s)}),t(),e(364,`
                  `),d(365,Qo,4,1,"div",14),e(366,`
                `),t(),e(367,`
              `),t(),e(368,`
            `),t(),e(369,`
          `),t(),e(370,`
          `),i(371,"fieldset",4),e(372,`
            `),i(373,"legend",5)(374,"h6",6),e(375,"PROJECT SUSTAINABILITY"),t()(),e(376,`
            `),i(377,"div",7),e(378,`
              `),i(379,"div",8),e(380,`
                `),i(381,"div",9),e(382,`
                  `),i(383,"label",59),e(384,"Project Sustainability Brief (What sustainability rating tool and level do you plan to use):"),t(),e(385,`
                  `),i(386,"ckeditor",60),P("ngModelChange",function(s){return T(n.item.project_sustainability_brief,s)||(n.item.project_sustainability_brief=s),s}),t(),e(387,`
                  `),d(388,$o,4,1,"div",14),e(389,`
                `),t(),e(390,`
              `),t(),e(391,`
              `),i(392,"div",8),e(393,`
                `),i(394,"div",9),e(395,`
                  `),i(396,"label",61),e(397,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(398,`
                  `),i(399,"input",62),y("change",function(s){return n.onSustainabilityReportChange(s)}),t(),e(400,`
                  `),d(401,ta,4,1,"div",14),e(402,`
                `),t(),e(403,`
              `),t(),e(404,`
              `),i(405,"div",8),e(406,`
                `),i(407,"div",9),e(408,`
                  `),i(409,"label",63),e(410,"Green Certifications:"),t(),e(411,`
                  `),i(412,"select",64),P("ngModelChange",function(s){return T(n.item.green_certification_id,s)||(n.item.green_certification_id=s),s}),e(413,`
                    `),i(414,"option",12),e(415,"--- Select certification ---"),t(),e(416,`
                    `),d(417,ia,2,3,"option",13),e(418,`
                  `),t(),e(419,`
                  `),d(420,ra,4,1,"div",14),e(421,`
                `),t(),e(422,`
              `),t(),e(423,`
              `),d(424,la,12,5,"div",41),e(425,`
            `),t(),e(426,`
          `),t(),e(427,`
          `),i(428,"fieldset",4),e(429,`
            `),i(430,"legend",5)(431,"h6",6),e(432,"CONCLUSIONS"),t()(),e(433,`
            `),i(434,"div",7),e(435,`
              `),i(436,"div",8),e(437,`
                `),i(438,"div",9),e(439,`
                  `),i(440,"label",65),e(441,"Estimated Project Duration (In months):"),t(),e(442,`
                  `),i(443,"input",66),P("ngModelChange",function(s){return T(n.item.estimated_project_duration,s)||(n.item.estimated_project_duration=s),s}),t(),e(444,`
                  `),d(445,da,4,1,"div",14),e(446,`
                `),t(),e(447,`
              `),t(),e(448,`
              `),i(449,"div",8),e(450,`
                `),i(451,"div",9),e(452,`
                  `),i(453,"label",67),e(454,"Estimated Project Construction Cost (In USD):"),t(),e(455,`
                  `),i(456,"input",68),P("ngModelChange",function(s){return T(n.item.estimated_project_construction_cost,s)||(n.item.estimated_project_construction_cost=s),s}),t(),e(457,`
                  `),d(458,_a,4,1,"div",14),e(459,`
                `),t(),e(460,`
              `),t(),e(461,`
              `),i(462,"div",69),e(463,`
                `),i(464,"div",36),e(465,`
                  `),i(466,"input",70),P("ngModelChange",function(s){return T(n.item.commitment_to_comply_with_development_codes_and_guidelines,s)||(n.item.commitment_to_comply_with_development_codes_and_guidelines=s),s}),t(),e(467,`
                  `),i(468,"label",71),e(469,`
                    By checking this, confirms the investor's commitment to comply with the `),i(470,"a",53),e(471,"Konza Technopolis Development Codes and Guidelines"),t(),e(472,`
                  `),t(),e(473,`
                `),t(),e(474,`
                `),d(475,ua,4,1,"div",14),e(476,`
              `),t(),e(477,`
            `),t(),e(478,`
          `),t(),e(479,`

          `),i(480,"div",72),e(481,`
            `),i(482,"button",73),e(483,"Cancel"),t(),e(484,`
            `),i(485,"button",74),e(486,"Submit"),t(),e(487,`
          `),t(),e(488,`

        `),t(),e(489,`

      `),t(),e(490,`
    `),t(),e(491,`
  `),t(),e(492,`
`),t()),r&2){let _,s,F,w,M,N,k,u,X,Q,Z,$,ee,te,ie,ne,re,oe,ae,le;m("ngIf",n.mProgress()),l(10),m("formGroup",n.itemForm),l(17),I("ngModel",n.item.investor_id),m("ngClass",x(81,S,((_=n.itemForm.get("investor_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("investor_id"))==null?null:_.dirty)||((_=n.itemForm.get("investor_id"))==null?null:_.touched)))),l(5),m("ngForOf",n.mInvestors),l(3),m("ngIf",((s=n.itemForm.get("investor_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("investor_id"))==null?null:s.dirty)||((s=n.itemForm.get("investor_id"))==null?null:s.touched))),l(11),I("ngModel",n.item.type_id),m("ngClass",x(83,S,((F=n.itemForm.get("type_id"))==null?null:F.invalid)&&(((F=n.itemForm.get("type_id"))==null?null:F.dirty)||((F=n.itemForm.get("type_id"))==null?null:F.touched)))),l(5),m("ngForOf",n.mPermitTypes),l(3),m("ngIf",((w=n.itemForm.get("type_id"))==null?null:w.invalid)&&(((w=n.itemForm.get("type_id"))==null?null:w.dirty)||((w=n.itemForm.get("type_id"))==null?null:w.touched))),l(21),I("ngModel",n.item.consultant_profile.professional_body_id),m("ngClass",x(85,S,((M=n.itemForm.get("professional_body_id"))==null?null:M.invalid)&&(((M=n.itemForm.get("professional_body_id"))==null?null:M.dirty)||((M=n.itemForm.get("professional_body_id"))==null?null:M.touched)))),l(5),m("ngForOf",n.mProfessionalBodies),l(3),m("ngIf",((N=n.itemForm.get("professional_body_id"))==null?null:N.invalid)&&(((N=n.itemForm.get("professional_body_id"))==null?null:N.dirty)||((N=n.itemForm.get("professional_body_id"))==null?null:N.touched))),l(11),I("ngModel",n.item.consultant_profile.membership_number),m("ngClass",x(87,S,((k=n.itemForm.get("membership_number"))==null?null:k.invalid)&&(((k=n.itemForm.get("membership_number"))==null?null:k.dirty)||((k=n.itemForm.get("membership_number"))==null?null:k.touched)))),l(2),m("ngIf",((u=n.itemForm.get("membership_number"))==null?null:u.invalid)&&(((u=n.itemForm.get("membership_number"))==null?null:u.dirty)||((u=n.itemForm.get("membership_number"))==null?null:u.touched))),l(11),I("ngModel",n.item.consultant.name),m("ngClass",x(89,S,((X=n.itemForm.get("consultant_name"))==null?null:X.invalid)&&(((X=n.itemForm.get("consultant_name"))==null?null:X.dirty)||((X=n.itemForm.get("consultant_name"))==null?null:X.touched)))),l(2),m("ngIf",((Q=n.itemForm.get("consultant_name"))==null?null:Q.invalid)&&(((Q=n.itemForm.get("consultant_name"))==null?null:Q.dirty)||((Q=n.itemForm.get("consultant_name"))==null?null:Q.touched))),l(11),I("ngModel",n.item.consultant_profile.address),m("ngClass",x(91,S,((Z=n.itemForm.get("address"))==null?null:Z.invalid)&&(((Z=n.itemForm.get("address"))==null?null:Z.dirty)||((Z=n.itemForm.get("address"))==null?null:Z.touched)))),l(2),m("ngIf",(($=n.itemForm.get("address"))==null?null:$.invalid)&&((($=n.itemForm.get("address"))==null?null:$.dirty)||(($=n.itemForm.get("address"))==null?null:$.touched))),l(11),I("ngModel",n.item.consultant.email),m("ngClass",x(93,S,((ee=n.itemForm.get("email"))==null?null:ee.invalid)&&(((ee=n.itemForm.get("email"))==null?null:ee.dirty)||((ee=n.itemForm.get("email"))==null?null:ee.touched)))),l(2),m("ngIf",((te=n.itemForm.get("email"))==null?null:te.invalid)&&(((te=n.itemForm.get("email"))==null?null:te.dirty)||((te=n.itemForm.get("email"))==null?null:te.touched))),l(11),I("ngModel",n.item.consultant_profile.nationality),m("ngClass",x(95,S,((ie=n.itemForm.get("nationality"))==null?null:ie.invalid)&&(((ie=n.itemForm.get("nationality"))==null?null:ie.dirty)||((ie=n.itemForm.get("nationality"))==null?null:ie.touched)))),l(2),m("ngIf",((ne=n.itemForm.get("nationality"))==null?null:ne.invalid)&&(((ne=n.itemForm.get("nationality"))==null?null:ne.dirty)||((ne=n.itemForm.get("nationality"))==null?null:ne.touched))),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),I("ngModel",n.item.project_brief),m("ngClass",x(97,S,((re=n.itemForm.get("project_brief"))==null?null:re.invalid)&&(((re=n.itemForm.get("project_brief"))==null?null:re.dirty)||((re=n.itemForm.get("project_brief"))==null?null:re.touched)))),l(2),m("ngIf",((oe=n.itemForm.get("project_brief"))==null?null:oe.invalid)&&(((oe=n.itemForm.get("project_brief"))==null?null:oe.dirty)||((oe=n.itemForm.get("project_brief"))==null?null:oe.touched))),l(11),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),I("ngModel",n.item.project_purpose),m("ngClass",x(99,S,((ae=n.itemForm.get("project_purpose"))==null?null:ae.invalid)&&(((ae=n.itemForm.get("project_purpose"))==null?null:ae.dirty)||((ae=n.itemForm.get("project_purpose"))==null?null:ae.touched)))),l(2),m("ngIf",((le=n.itemForm.get("project_purpose"))==null?null:le.invalid)&&(((le=n.itemForm.get("project_purpose"))==null?null:le.dirty)||((le=n.itemForm.get("project_purpose"))==null?null:le.touched))),l(16),m("ngIf",n.mInvestorParcels.length>0),l(12),I("ngModel",n.item.has_variations),l(8),I("ngModel",n.item.has_variations),l(6),m("ngIf",n.itemForm.get("has_variations").invalid&&(n.itemForm.get("has_variations").dirty||n.itemForm.get("has_variations").touched)),l(4),m("ngIf",n.itemForm.get("has_variations").value=="yes"),l(9),m("ngClass",x(101,S,n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched))),l(2),m("ngIf",n.itemForm.get("site_plan_and_analysis").invalid&&(n.itemForm.get("site_plan_and_analysis").dirty||n.itemForm.get("site_plan_and_analysis").touched)),l(11),m("ngClass",x(103,S,n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched))),l(2),m("ngIf",n.itemForm.get("context_analysis").invalid&&(n.itemForm.get("context_analysis").dirty||n.itemForm.get("context_analysis").touched)),l(21),m("ngClass",x(105,S,n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched))),l(2),m("ngIf",n.itemForm.get("concept_plan").invalid&&(n.itemForm.get("concept_plan").dirty||n.itemForm.get("concept_plan").touched)),l(11),m("ngClass",x(107,S,n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched))),l(2),m("ngIf",n.itemForm.get("geotechnical_report").invalid&&(n.itemForm.get("geotechnical_report").dirty||n.itemForm.get("geotechnical_report").touched)),l(11),m("ngClass",x(109,S,n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched))),l(2),m("ngIf",n.itemForm.get("topographical_survey").invalid&&(n.itemForm.get("topographical_survey").dirty||n.itemForm.get("topographical_survey").touched)),l(24),m("ngClass",x(111,S,n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched))),l(2),m("ngIf",n.itemForm.get("parking_strategy").invalid&&(n.itemForm.get("parking_strategy").dirty||n.itemForm.get("parking_strategy").touched)),l(11),m("ngClass",x(113,S,n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched))),l(2),m("ngIf",n.itemForm.get("traffic_management_plan").invalid&&(n.itemForm.get("traffic_management_plan").dirty||n.itemForm.get("traffic_management_plan").touched)),l(21),m("ngClass",x(115,S,n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched))),l(2),m("ngIf",n.itemForm.get("estimated_utility_demand_requirements").invalid&&(n.itemForm.get("estimated_utility_demand_requirements").dirty||n.itemForm.get("estimated_utility_demand_requirements").touched)),l(21),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig),I("ngModel",n.item.project_sustainability_brief),m("ngClass",x(117,S,n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched))),l(2),m("ngIf",n.itemForm.get("project_sustainability_brief").invalid&&(n.itemForm.get("project_sustainability_brief").dirty||n.itemForm.get("project_sustainability_brief").touched)),l(11),m("ngClass",x(119,S,n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched))),l(2),m("ngIf",n.itemForm.get("sustainability_report").invalid&&(n.itemForm.get("sustainability_report").dirty||n.itemForm.get("sustainability_report").touched)),l(11),I("ngModel",n.item.green_certification_id),m("ngClass",x(121,S,n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched))),l(5),m("ngForOf",n.mGreenCertifications),l(3),m("ngIf",n.itemForm.get("green_certification_id").invalid&&(n.itemForm.get("green_certification_id").dirty||n.itemForm.get("green_certification_id").touched)),l(4),m("ngIf",n.itemForm.get("green_certification_id").value==="4"),l(19),I("ngModel",n.item.estimated_project_duration),m("ngClass",x(123,S,n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_duration").invalid&&(n.itemForm.get("estimated_project_duration").dirty||n.itemForm.get("estimated_project_duration").touched)),l(11),I("ngModel",n.item.estimated_project_construction_cost),m("ngClass",x(125,S,n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched))),l(2),m("ngIf",n.itemForm.get("estimated_project_construction_cost").invalid&&(n.itemForm.get("estimated_project_construction_cost").dirty||n.itemForm.get("estimated_project_construction_cost").touched)),l(8),I("ngModel",n.item.commitment_to_comply_with_development_codes_and_guidelines),l(9),m("ngIf",n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").invalid&&(n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").dirty||n.itemForm.get("commitment_to_comply_with_development_codes_and_guidelines").touched)),l(10),m("disabled",n.itemForm.invalid)}},dependencies:[de,G,R,W,L,H,pe,z,ue,ce,J,Ie,Te,Ee,rt,nt,Fe,Ye,fe,Y,K,xe,ze,he],encapsulation:2})}};function ca(o,a){o&1&&c(0,"app-progress")}function fa(o,a){if(o&1&&(i(0,"div",11),e(1),t()),o&2){let r=p();l(),g(r.item.investor==null?null:r.item.investor.name)}}function xa(o,a){if(o&1&&(i(0,"div",11),e(1),t()),o&2){let r=p();l(),g(r.item.type==null?null:r.item.type.name)}}function ga(o,a){o&1&&(i(0,"span"),e(1,","),t())}function va(o,a){if(o&1&&(i(0,"span",11),e(1),d(2,ga,2,0,"span",0),t()),o&2){let r=a.$implicit,n=a.last;l(),q(" ",r.allocation_worksheet==null?null:r.allocation_worksheet.number),l(),m("ngIf",!n)}}function ya(o,a){if(o&1&&(i(0,"span"),e(1,`
                        `),d(2,va,3,2,"span",29),e(3,`
                      `),t()),o&2){let r=p(2);l(2),m("ngForOf",r.item.investor.parcels)}}function ba(o,a){if(o&1&&(i(0,"div",11),e(1,`
                    `),e(2,`
                      `),d(3,ya,4,1,"span",0),e(4,`
                  `),t()),o&2){let r=p();l(3),m("ngIf",r.item.investor.parcels)}}function Sa(o,a){if(o&1&&(i(0,"div",30),e(1,`
                    `),i(2,"div",31),e(3,`
                      `),i(4,"div",32),e(5,`
                        `),i(6,"h6",33),e(7),t(),e(8,`                      
                        `),i(9,"table",34),e(10,`
                          `),i(11,"thead"),e(12,`
                            `),i(13,"tr"),e(14,`
                              `),i(15,"th",35),e(16,"#"),t(),e(17,`
                              `),i(18,"th",35),e(19,"Planned"),t(),e(20,`
                              `),i(21,"th",35),e(22,"Proposed"),t(),e(23,`
                              `),i(24,"th",35),e(25,"Variance"),t(),e(26,`
                            `),t(),e(27,`
                          `),t(),e(28,`
                          `),i(29,"tbody"),e(30,`
                            `),i(31,"tr"),e(32,`
                              `),i(33,"th",36),e(34,"Planned Land Use:"),t(),e(35,`
                              `),i(36,"td"),e(37),t(),e(38,`
                              `),i(39,"td",37),e(40),t(),e(41,`
                              `),i(42,"td",38),e(43,"-"),t(),e(44,`
                            `),t(),e(45,`
                            `),i(46,"tr"),e(47,`
                              `),i(48,"th",36),e(49,"Primary Land Use:"),t(),e(50,`
                              `),i(51,"td"),e(52),t(),e(53,`
                              `),i(54,"td",37),e(55),t(),e(56,`
                              `),i(57,"td",37),e(58,"-"),t(),e(59,`
                            `),t(),e(60,`
                            `),i(61,"tr"),e(62,`
                              `),i(63,"th",36),e(64,"Secondary Land Use:"),t(),e(65,`
                              `),i(66,"td"),e(67),t(),e(68,`
                              `),i(69,"td",37),e(70),t(),e(71,`
                              `),i(72,"td",38),e(73,"-"),t(),e(74,`
                            `),t(),e(75,`
                            `),i(76,"tr"),e(77,`
                              `),i(78,"th",36),e(79,"Preferred Ground Land Use:"),t(),e(80,`
                              `),i(81,"td"),e(82),t(),e(83,`
                              `),i(84,"td",37),e(85),t(),e(86,`
                              `),i(87,"td",38),e(88,"-"),t(),e(89,`
                            `),t(),e(90,`
                            `),i(91,"tr"),e(92,`
                              `),i(93,"th",36),e(94,"Number of Units to be Developed:"),t(),e(95,`
                              `),i(96,"td"),e(97),t(),e(98,`
                              `),i(99,"td",37),e(100),t(),e(101,`
                              `),i(102,"td",38),e(103,"-"),t(),e(104,`
                            `),t(),e(105,`
                            `),i(106,"tr"),e(107,`
                              `),i(108,"th",36),e(109,"Plot Coverage % (Proposed/Existing):"),t(),e(110,`
                              `),i(111,"td"),e(112),t(),e(113,`
                              `),i(114,"td",37),e(115),t(),e(116,`
                              `),i(117,"td",38),e(118,"-"),t(),e(119,`
                            `),t(),e(120,`
                            `),i(121,"tr"),e(122,`
                              `),i(123,"th",36),e(124,"Min/Max Floors:"),t(),e(125,`
                              `),i(126,"td"),e(127),t(),e(128,`
                              `),i(129,"td",37),e(130),t(),e(131,`
                              `),i(132,"td",38),e(133),t(),e(134,`
                            `),t(),e(135,`
                            `),i(136,"tr"),e(137,`
                              `),i(138,"th",36),e(139,"Min/Max Floor Area:"),t(),e(140,`
                              `),i(141,"td"),e(142),t(),e(143,`
                              `),i(144,"td",37),e(145),t(),e(146,`
                              `),i(147,"td",38),e(148,"-"),t(),e(149,`
                            `),t(),e(150,`
                            `),i(151,"tr"),e(152,`
                              `),i(153,"th",36),e(154,"Min/Max Floor-to-Floor Height:"),t(),e(155,`
                              `),i(156,"td"),e(157),t(),e(158,`
                              `),i(159,"td",37),e(160),t(),e(161,`
                              `),i(162,"td",38),e(163,"-"),t(),e(164,`
                            `),t(),e(165,`
                            `),i(166,"tr"),e(167,`
                              `),i(168,"th",36),e(169,"Min/Max FAR:"),t(),e(170,`
                              `),i(171,"td"),e(172),t(),e(173,`
                              `),i(174,"td",37),e(175),t(),e(176,`
                              `),i(177,"td",38),e(178,"-"),t(),e(179,`
                            `),t(),e(180,`
                            `),i(181,"tr"),e(182,`
                              `),i(183,"th",36),e(184,"Minimum Setback:"),t(),e(185,`
                              `),i(186,"td"),e(187),t(),e(188,`
                              `),i(189,"td",37),e(190),t(),e(191,`
                              `),i(192,"td",38),e(193),t(),e(194,`
                            `),t(),e(195,`
                          `),t(),e(196,`
                        `),t(),e(197,`
                      `),t(),e(198,`
                    `),t(),e(199,`
                  `),t()),o&2){let r=a.$implicit,n=a.index;l(7),b("",n+1,". ",r.parcel_number),l(30),g(r.parcel==null?null:r.parcel.name),l(3),g(r.planned_land_use==null?null:r.planned_land_use.name),l(12),g(r.parcel==null?null:r.parcel.predominant_land),l(3),g(r.primary_land_use.name),l(12),g(r.parcel==null?null:r.parcel.secondary_use),l(3),g(r.secondary_land_use.name),l(12),g(r.parcel==null?null:r.parcel.preferred_ground_floor_use),l(3),g(r.preferred_ground_floor_use.name),l(12),g(r.parcel==null?null:r.parcel.number_of_units_to_be_developed),l(3),g(r.number_of_units_to_be_developed),l(12),b("",r.parcel==null?null:r.parcel.percentage_of_site_covered_by_proposed_building,"-",r.parcel==null?null:r.parcel.percentage_of_site_covered_by_existing_building),l(3),b("",r.percentage_of_site_covered_by_proposed_building,"-",r.percentage_of_site_covered_by_existing_building),l(12),b("",r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(3),b("",r.min_number_of_floors,"-",r.max_number_of_floors),l(3),b("",r.min_number_of_floors-(r.parcel==null?null:r.parcel.min_floors)," / ",r.max_number_of_floors-(r.parcel==null?null:r.parcel.max_floors)),l(9),b("",r.parcel==null?null:r.parcel.min_floor_area,"-",r.parcel==null?null:r.parcel.min_floor_area),l(3),b("",r.min_floor_area,"-",r.min_floor_area),l(12),b("",r.parcel==null?null:r.parcel.min_floor_to_floor_height,"-",r.parcel==null?null:r.parcel.max_floor_to_floor_height),l(3),b("",r.min_floor_to_floor_height,"-",r.max_floor_to_floor_height),l(12),b("",r.parcel==null?null:r.parcel.min_far,"-",r.parcel==null?null:r.parcel.max_far),l(3),b("",r.min_far,"-",r.max_far),l(12),g(r.parcel==null?null:r.parcel.minimum_setback),l(3),g(r.minimum_setback),l(3),g(r.minimum_setback-(r.parcel==null?null:r.parcel.minimum_setback))}}function ha(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.context_analysis_url),ye)}}function Ca(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.concept_plan_url),ye)}}function Ea(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.geotechnical_report_url),ye)}}function Fa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.topographical_survey_url),ye)}}function Ia(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.parking_strategy_url),ye)}}function Ta(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.traffic_management_plan_url),ye)}}function Pa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.estimated_utility_demand_requirements_url),ye)}}function qa(o,a){if(o&1&&(i(0,"div",8),e(1,`
                `),i(2,"div",23),e(3,`
                  `),i(4,"label",40),e(5,"Specify Other:"),t(),e(6,`
                  `),i(7,"div",11),e(8),t(),e(9,`
                `),t(),e(10,`
              `),t()),o&2){let r=p();l(8),g(r.item.other_green_certification)}}function wa(o,a){if(o&1&&(i(0,"div"),e(1,`
                    `),i(2,"a",39),e(3,"File"),t(),e(4,`
                  `),t()),o&2){let r=p();l(2),m("href",E(r.item.sustainability_report_url),ye)}}var st=class o{constructor(a,r,n,_,s,F){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=_;this.fb=s;this.route=F;this.mProgress=C(!1);this.item={};this.itemForm=this.fb.group({investor_id:["",f.required],plan_submission_type_id:["",f.required],project_brief:["",f.required],project_purpose:["",f.required]})}ngOnInit(){this.loadUnpaginatedItems(),this.getItem()}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.unpaginatedItems().subscribe({next:a=>{a&&(this.mInvestors=a.data.investors,this.mProfessionalBodies=a.data.professional_bodies,this.mPlanSubmissionTypes=a.data.plan_submission_types,this.mGreenCertifications=a.data.green_certifications,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onSubmit(a){this.mProgress.set(!0),this.mConstructionPermitService.updateItem(this.id,a).subscribe({next:r=>{r&&(this.mToastrService.success(r.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:r=>{r.error.message&&this.mToastrService.error(r.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(v(B),v(_e),v(D),v(V),v(ge),v(se))}}static{this.\u0275cmp=A({type:o,selectors:[["app-show"]],standalone:!1,decls:351,vars:31,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-12"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"text-muted"],["for","context_analysis"],[1,"border","mb-3","p-3"],[1,"text-bold","text-muted"],["class","row mb-2",4,"ngFor","ngForOf"],[1,"col-md-6"],["for","concept_plan"],["for","topographical_survey"],["for","parking_strategy"],["routerLink","/reference-materials","target","_blank","rel","noopener noreferrer"],["for","traffic_management_plan"],["class","col-md-12",4,"ngIf"],[1,"form-group","mb-3"],["for","sustainability_reportsustainability_report",1,"col-form-label","required"],["for","estimated_project_duration"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["cButton","","color","success",1,"text-dark",3,"routerLink"],["class","text-muted",4,"ngFor","ngForOf"],[1,"row","mb-2"],[1,"col-12"],[1,"callout","callout-danger"],[1,"fw-bolder"],[1,"table","table-bordered","table-danger1"],["scope","col"],["scope","row"],[1,"text-success"],[1,"text-danger"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"],["for","other_green_certification"]],template:function(r,n){r&1&&(d(0,ca,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,fa,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,xa,2,1,"div",10),e(38,`
                `),t(),e(39,`
              `),t(),e(40,`
            `),t(),e(41,`
          `),t(),e(42,`
          `),i(43,"fieldset",4),e(44,`
            `),i(45,"legend",5)(46,"h6",6),e(47,"PROJECT BRIEF AND PURPOSE"),t()(),e(48,`
            `),i(49,"div",7),e(50,`
              `),i(51,"div",8),e(52,`
                `),i(53,"div",2),e(54,`
                  `),i(55,"label",9),e(56,"Project Brief and Purpose (Description of the overall project concept and how it fits in the Konza Technopolis Vision):"),t(),e(57,`
                  `),i(58,"div",11),e(59),t(),e(60,`
                `),t(),e(61,`
              `),t(),e(62,`
              `),i(63,"div",8),e(64,`
                `),i(65,"div",2),e(66,`
                  `),i(67,"label",9),e(68,"Project Purpose (State the specific purpose of the proposed development e.g., Where the land use is education, the purpose may be the development of a primary school):"),t(),e(69,`
                  `),i(70,"div",11),e(71),t(),e(72,`
                `),t(),e(73,`
              `),t(),e(74,`
            `),t(),e(75,`
          `),t(),e(76,`
          `),i(77,"fieldset",4),e(78,`
            `),i(79,"legend",5)(80,"h6",6),e(81,"PARCEL & CONTEXT ANALYSIS"),t()(),e(82,`
            `),i(83,"div",7),e(84,`
              `),i(85,"div",8),e(86,`
                `),i(87,"div",2),e(88,`
                  `),i(89,"label",12),e(90,"Parcels:"),t(),e(91,`
                  `),d(92,ba,5,1,"div",10),e(93,`
                `),t(),e(94,`
              `),t(),e(95,`
              `),i(96,"div",8),e(97,`
                `),i(98,"fieldset",13),e(99,`
                  `),i(100,"legend",5)(101,"h6",14),e(102,"Land Use Plan"),t()(),e(103,`
                  `),d(104,Sa,200,37,"div",15),e(105,`
                `),t(),e(106,`
              `),t(),e(107,`
              `),i(108,"div",8),e(109,`
                `),i(110,"div",2),e(111,`
                  `),i(112,"label",12),e(113,"Require Variations:"),t(),e(114,`
                  `),i(115,"div",11),e(116),t(),e(117,`
                `),t(),e(118,`
              `),t(),e(119,`
              `),i(120,"div",8),e(121,`
                `),i(122,"div",2),e(123,`
                  `),i(124,"label",12),e(125,"Context Analysis (500m radius context analysis):"),t(),e(126,`
                  `),d(127,ha,5,2,"div",0),e(128,`
                `),t(),e(129,`
              `),t(),e(130,`
            `),t(),e(131,`
          `),t(),e(132,`
          `),i(133,"fieldset",4),e(134,`
            `),i(135,"legend",5)(136,"h6",6),e(137,"DEVELOPMENT DATA"),t()(),e(138,`
            `),i(139,"div",7),e(140,`
              `),i(141,"div",16),e(142,`
                `),i(143,"div",2),e(144,`
                  `),i(145,"label",17),e(146,"Concept Plan (Elevations, concept images and massing model and Building footprint anticipated for your site):"),t(),e(147,`
                  `),d(148,Ca,5,2,"div",0),e(149,`
                `),t(),e(150,`
              `),t(),e(151,`
              `),i(152,"div",16),e(153,`
                `),i(154,"div",2),e(155,`
                  `),i(156,"label",17),e(157,"Geotechnical Report (Signed and stamped by a geologist or civil structural engineer):"),t(),e(158,`
                  `),d(159,Ea,5,2,"div",0),e(160,`
                `),t(),e(161,`
              `),t(),e(162,`
              `),i(163,"div",8),e(164,`
                `),i(165,"div",2),e(166,`
                  `),i(167,"label",18),e(168,"Topographical Survey:"),t(),e(169,`
                  `),d(170,Fa,5,2,"div",0),e(171,`
                `),t(),e(172,`
              `),t(),e(173,`
            `),t(),e(174,`
          `),t(),e(175,`
          `),i(176,"fieldset",4),e(177,`
            `),i(178,"legend",5)(179,"h6",6),e(180,"ACCESS ANALYSIS PLAN"),t()(),e(181,`
            `),i(182,"div",7),e(183,`
              `),i(184,"div",8),e(185,`
                `),i(186,"div",2),e(187,`
                  `),i(188,"label",19),e(189,"Parking Strategy (Using "),i(190,"a",20),e(191,"Reference Materials"),t(),e(192," on parking e.g., Streetscape and Mobility Guidelines Chapter 3.6):"),t(),e(193,`
                  `),d(194,Ia,5,2,"div",0),e(195,`
                `),t(),e(196,`
              `),t(),e(197,`
              `),i(198,"div",8),e(199,`
                `),i(200,"div",2),e(201,`
                  `),i(202,"label",21),e(203,"Traffic Management Plan (Access to the site diagram, vehicle trip generation and traffic management strategy):"),t(),e(204,`
                  `),d(205,Ta,5,2,"div",0),e(206,`
                `),t(),e(207,`
              `),t(),e(208,`
            `),t(),e(209,`
          `),t(),e(210,`
          `),i(211,"fieldset",4),e(212,`
            `),i(213,"legend",5)(214,"h6",6),e(215,"INFRASTRUCTURE"),t()(),e(216,`
            `),i(217,"div",7),e(218,`
              `),i(219,"div",8),e(220,`
                `),i(221,"div",2),e(222,`
                  `),i(223,"label",17),e(224,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(225,`
                  `),d(226,Pa,5,2,"div",0),e(227,`
                `),t(),e(228,`
              `),t(),e(229,`
            `),t(),e(230,`
          `),t(),e(231,`
          `),i(232,"fieldset",4),e(233,`
            `),i(234,"legend",5)(235,"h6",6),e(236,"PROJECT SUSTAINABILITY"),t()(),e(237,`
            `),i(238,"div",7),e(239,`
              `),i(240,"div",8),e(241,`
                `),i(242,"div",2),e(243,`
                  `),i(244,"label",17),e(245,"Estimated utility demand requirements (i.e., For Water, Sewer, Electricity, Internet requirement, solid waste, storm water, Irrigation/recycled water, Industrial waste, Glass, E-waste, Medical and hazardous waste):"),t(),e(246,`
                  `),i(247,"div",11),e(248),t(),e(249,`
                `),t(),e(250,`
              `),t(),e(251,`
              `),i(252,"div",8),e(253,`
                  `),i(254,"div",2),e(255,`
                    `),i(256,"label",9),e(257,"Green Certification:"),t(),e(258,`
                    `),i(259,"div",11),e(260),t(),e(261,`
                  `),t(),e(262,`
              `),t(),e(263,`
              `),d(264,qa,11,1,"div",22),e(265,`
              `),i(266,"div",8),e(267,`
                `),i(268,"div",23),e(269,`
                  `),i(270,"label",24),e(271,"Sustainability Report (upload a report on design, materials and utility management, i.e., water and electricity):"),t(),e(272,`
                  `),d(273,wa,5,2,"div",0),e(274,`
                `),t(),e(275,`
              `),t(),e(276,`
            `),t(),e(277,`
          `),t(),e(278,`
          `),i(279,"fieldset",4),e(280,`
            `),i(281,"legend",5)(282,"h6",6),e(283,"CONCLUSIONS"),t()(),e(284,`
            `),i(285,"div",7),e(286,`
              `),i(287,"div",8),e(288,`
                `),i(289,"div",2),e(290,`
                  `),i(291,"label",9),e(292,"Variations (Does Your Project Require any Variation?):"),t(),e(293,`
                  `),i(294,"div",11),e(295),t(),e(296,`
                `),t(),e(297,`
              `),t(),e(298,`
              `),i(299,"div",8),e(300,`
                `),i(301,"div",2),e(302,`
                  `),i(303,"label",25),e(304,"Estimated Project Duration (In months):"),t(),e(305,`
                  `),i(306,"div",11),e(307),t(),e(308,`
                `),t(),e(309,`
              `),t(),e(310,`
              `),i(311,"div",8),e(312,`
                `),i(313,"div",2),e(314,`
                  `),i(315,"label",25),e(316,"Estimated Project Construction Cost (In USD):"),t(),e(317,`
                  `),i(318,"div",11),e(319),Ke(320,"currency"),t(),e(321,`
                `),t(),e(322,`
              `),t(),e(323,`
              `),i(324,"div",8),e(325,`
                `),i(326,"div",2),e(327,`
                  `),i(328,"label",25),e(329,"Commitment to comply with development codes and guidelines:"),t(),e(330,`
                  `),i(331,"div",11),e(332),t(),e(333,`
                `),t(),e(334,`
              `),t(),e(335,`
            `),t(),e(336,`
          `),t(),e(337,`

          `),i(338,"div",26),e(339,`
            `),i(340,"button",27),e(341,"Cancel"),t(),e(342,`
            `),i(343,"a",28),e(344,"Process"),t(),e(345,`
          `),t(),e(346,`

        `),t(),e(347,`

      `),t(),e(348,`
    `),t(),e(349,`
  `),t(),e(350,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngIf",n.item.investor),l(11),m("ngIf",n.item.type),l(22),g(n.item.project_brief),l(12),g(n.item.project_purpose),l(21),m("ngIf",n.item.investor),l(12),m("ngForOf",n.item.land_use_plans),l(12),g(n.item.has_variations),l(11),m("ngIf",n.item.context_analysis),l(21),m("ngIf",n.item.concept_plan),l(11),m("ngIf",n.item.geotechnical_report),l(11),m("ngIf",n.item.topographical_survey),l(24),m("ngIf",n.item.parking_strategy),l(11),m("ngIf",n.item.traffic_management_plan),l(21),m("ngIf",n.item.estimated_utility_demand_requirements),l(22),g(n.item.project_sustainability_brief),l(12),g(n.item.green_certification==null?null:n.item.green_certification.name),l(4),m("ngIf",n.item.green_certification_id===4),l(9),m("ngIf",n.item.sustainability_report),l(22),g(n.item.require_variations),l(12),g(n.item.estimated_project_duration),l(12),g(Ze(320,26,n.item.estimated_project_construction_cost,"USD","symbol","1.2-2")),l(13),g(n.item.commitment_to_comply_with_development_codes_and_guidelines),l(11),m("routerLink",Pe("/construction-permits/process/",n.item.id)))},dependencies:[G,R,W,L,H,pe,z,ue,ce,J,Y,K,$e],encapsulation:2})}};var Qt=o=>({"is-invalid":o});function Ma(o,a){o&1&&c(0,"app-progress")}function Na(o,a){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.alias)}}function ka(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ja(o,a){if(o&1&&(i(0,"div",16),d(1,ka,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function Aa(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ra(o,a){if(o&1&&(i(0,"div",16),d(1,Aa,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("remarks").errors)==null?null:r.required)}}var _t=class o{constructor(a,r,n,_,s,F){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=_;this.fb=s;this.route=F;this.mProgress=C(!1);this.item={};this.mEditor=Se;this.itemForm=this.fb.group({status_id:["",f.required],remarks:["",f.required]})}ngOnInit(){this.getItem()}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress=C(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=C(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=C(!1)}})}onSubmit(a){let r={id:this.id,status_id:a.status_id,remarks:a.remarks};this.mProgress=C(!0),this.mConstructionPermitService.processItemPlanner(r).subscribe({next:n=>{n.status==="success"?(this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=C(!1)):(this.mToastrService.error(n.message),this.router.navigateByUrl("/construction-permits/variations/"+this.id),this.mProgress=C(!1))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=C(!1)}})}getNextPreviousStatus(){this.mProgress=C(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=C(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=C(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(v(D),v(B),v(V),v(_e),v(ge),v(se))}}static{this.\u0275cmp=A({type:o,selectors:[["app-review"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(d(0,Ma,1,0,"app-progress",0),i(1,"div")(2,"form",1),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,Na,2,3,"option",8),t(),d(12,ja,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),t(),c(17,"ckeditor",11),d(18,Ra,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),r&2){let _,s;m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(6),m("ngClass",x(10,Qt,((_=n.itemForm.get("status_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("status_id"))==null?null:_.dirty)||((_=n.itemForm.get("status_id"))==null?null:_.touched)))),l(3),m("ngForOf",n.mNextPreviousStatuses),l(),m("ngIf",((s=n.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("status_id"))==null?null:s.dirty)||((s=n.itemForm.get("status_id"))==null?null:s.touched))),l(5),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(12,Qt,n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched))),l(),m("ngIf",n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched)),l(4),m("disabled",n.itemForm.invalid)}},dependencies:[de,G,R,W,L,H,J,Ie,Te,Fe,fe,Y,K,xe,he],encapsulation:2})}};var Zt=o=>({"is-invalid":o});function Da(o,a){o&1&&c(0,"app-progress")}function La(o,a){if(o&1&&(i(0,"option",15),e(1),t()),o&2){let r=a.$implicit;m("value",E(r.id)),l(),g(r.alias)}}function Ba(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Oa(o,a){if(o&1&&(i(0,"div",16),d(1,Ba,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("status_id"))==null||r.errors==null?null:r.errors.required)}}function Ua(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function Ga(o,a){if(o&1&&(i(0,"div",16),d(1,Ua,2,0,"div",0),t()),o&2){let r,n=p();l(),m("ngIf",(r=n.itemForm.get("remarks").errors)==null?null:r.required)}}var pt=class o{constructor(a,r,n,_,s,F){this.mToastrService=a;this.mConstructionPermitService=r;this.mAppContextService=n;this.router=_;this.fb=s;this.route=F;this.mProgress=C(!1);this.item={};this.mEditor=Se;this.itemForm=this.fb.group({status_id:["",f.required],remarks:["",f.required]})}ngOnInit(){this.id=this.route.snapshot.paramMap.get("id"),this.getItem()}getItem(){this.mProgress=C(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.getNextPreviousStatus(),this.mProgress=C(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=C(!1)}})}onSubmit(a){let r={id:this.id,status_id:a.status_id,remarks:a.remarks};this.mProgress=C(!0),this.mConstructionPermitService.cmItemPlanner(r).subscribe({next:n=>{this.mToastrService.success(n.message),this.router.navigateByUrl("/construction-permits"),this.mProgress=C(!1)},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress=C(!1)}})}getNextPreviousStatus(){this.mProgress=C(!0),this.mConstructionPermitService.nextPreviousStatusItem(this.item.status_id).subscribe({next:a=>{a&&(this.mNextPreviousStatuses=a,this.mProgress=C(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress=C(!1)}})}static{this.\u0275fac=function(r){return new(r||o)(v(D),v(B),v(V),v(_e),v(ge),v(se))}}static{this.\u0275cmp=A({type:o,selectors:[["app-cm-approval"]],standalone:!1,decls:24,vars:14,consts:[[4,"ngIf"],[3,"ngSubmit","formGroup"],[1,"row"],[1,"col-md-12"],[1,"form-group","mb-3"],["for","status_id",1,"col-form-label","required"],["formControlName","status_id","type","text",1,"form-control",3,"ngClass"],["value","","disabled","true","selected","true"],[3,"value",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["for","remarks",1,"col-form-label","required1"],["formControlName","remarks","type","text",1,"form-control1",3,"editor","config","ngClass"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger",1,"me-2"],["type","submit","cButton","","color","success",3,"disabled"],[3,"value"],["role","alert",1,"invalid-feedback"]],template:function(r,n){if(r&1&&(d(0,Da,1,0,"app-progress",0),i(1,"div")(2,"form",1),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),i(3,"div",2)(4,"div",3)(5,"div",4)(6,"label",5),e(7,"Status:"),t(),i(8,"select",6)(9,"option",7),e(10,"--- Select status ---"),t(),d(11,La,2,3,"option",8),t(),d(12,Oa,2,1,"div",9),t()(),i(13,"div",3)(14,"div",4)(15,"label",10),e(16,"Remarks:"),t(),c(17,"ckeditor",11),d(18,Ga,2,1,"div",9),t()()(),i(19,"div",12)(20,"button",13),e(21,"Cancel"),t(),i(22,"button",14),e(23,"Submit"),t()()()()),r&2){let _,s;m("ngIf",n.mProgress()),l(2),m("formGroup",n.itemForm),l(6),m("ngClass",x(10,Zt,((_=n.itemForm.get("status_id"))==null?null:_.invalid)&&(((_=n.itemForm.get("status_id"))==null?null:_.dirty)||((_=n.itemForm.get("status_id"))==null?null:_.touched)))),l(3),m("ngForOf",n.mNextPreviousStatuses),l(),m("ngIf",((s=n.itemForm.get("status_id"))==null?null:s.invalid)&&(((s=n.itemForm.get("status_id"))==null?null:s.dirty)||((s=n.itemForm.get("status_id"))==null?null:s.touched))),l(5),m("editor",n.mEditor)("config",n.mAppContextService.ckEditorConfig)("ngClass",x(12,Zt,n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched))),l(),m("ngIf",n.itemForm.get("remarks").invalid&&(n.itemForm.get("remarks").dirty||n.itemForm.get("remarks").touched)),l(4),m("disabled",n.itemForm.invalid)}},dependencies:[de,G,R,W,L,H,J,Ie,Te,Fe,fe,Y,K,xe,he],encapsulation:2})}};var $t=()=>[1],Ha=()=>[10],za=()=>[17];function Ya(o,a){o&1&&c(0,"app-progress")}function Ja(o,a){if(o&1&&(i(0,"div",6),e(1,`
              `),i(2,"label",9),e(3,"Company:"),t(),e(4,`
              `),i(5,"div",8),e(6),t(),e(7,`
            `),t()),o&2){let r=p();l(6),g(r.item.investor==null?null:r.item.investor.name)}}function Ka(o,a){o&1&&(i(0,"div"),e(1,`
              `),c(2,"app-review"),e(3,`
            `),t())}function Xa(o,a){o&1&&(i(0,"div"),e(1,`
              `),c(2,"app-cm-approval"),e(3,`
            `),t())}var ut=class o{constructor(a,r,n,_){this.mConstructionPermitService=a;this.mAppContextService=r;this.mToastrService=n;this.route=_;this.item={};this.mProgress=C(!1)}ngOnInit(){this.route.paramMap.subscribe(a=>{this.id=a.get("id"),this.getItem()})}getItem(){this.id&&(this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}}))}static{this.\u0275fac=function(r){return new(r||o)(v(B),v(V),v(D),v(se))}}static{this.\u0275cmp=A({type:o,selectors:[["app-process"]],standalone:!1,decls:44,vars:9,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[1,"row"],[1,"col-md-12"],["class","form-group mb-3",4,"ngIf"],[1,"form-group","mb-3"],["for","project_brief",1,"col-form-label","required"],[1,"text-muted"],["for","investor_id",1,"col-form-label","required"]],template:function(r,n){r&1&&(d(0,Ya,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"div",3),e(10,`
          `),i(11,"div",4),e(12,`
            `),d(13,Ja,8,1,"div",5),e(14,`
          `),t(),e(15,`
          `),i(16,"div",4),e(17,`
            `),i(18,"div",6),e(19,`
              `),i(20,"label",7),e(21,"Project Brief:"),t(),e(22,`
              `),i(23,"div",8),e(24),t(),e(25,`
            `),t(),e(26,`
          `),t(),e(27,`
        `),t(),e(28,`

        `),i(29,"div",3),e(30,`
          `),i(31,"div",4),e(32,`
            `),e(33,`
            `),d(34,Ka,4,0,"div",0),e(35,`
            `),e(36,`
            `),d(37,Xa,4,0,"div",0),e(38,`
          `),t(),e(39,`
        `),t(),e(40,`

      `),t(),e(41,`
    `),t(),e(42,`
  `),t(),e(43,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(13),m("ngIf",n.item.investor),l(11),g(n.item.project_brief),l(10),m("ngIf",(n.item==null?null:n.item.status_id)==3&&(n.mAppContextService.hasRoles(be(5,$t))||n.mAppContextService.hasRoles(be(6,Ha)))),l(3),m("ngIf",(n.item==null?null:n.item.status_id)==4&&(n.mAppContextService.hasRoles(be(7,$t))||n.mAppContextService.hasRoles(be(8,za)))))},dependencies:[R,L,pe,z,ue,ce,_t,pt],encapsulation:2})}};var ei=o=>({"is-invalid":o});function Qa(o,a){o&1&&c(0,"app-progress")}function Za(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p();l(),g(r.item.investor==null?null:r.item.investor.name)}}function $a(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p();l(),g(r.item.type==null?null:r.item.type.name)}}function el(o,a){if(o&1&&(i(0,"div",12),e(1),t()),o&2){let r=p(2);l(),g(r.item.variation_status==null?null:r.item.variation_status.name)}}function tl(o,a){if(o&1&&(i(0,"div",7),e(1,`
                `),i(2,"div",11),e(3,`
                  `),i(4,"h6",19),e(5),t(),e(6,`
                `),t(),e(7,`
                `),i(8,"div",20),e(9,`
                  `),i(10,"div",21),e(11,`
                      `),i(12,"h6",22),e(13,"Initial"),t(),e(14,`
                      `),e(15,`
                      `),i(16,"small"),e(17),c(18,"br"),e(19),c(20,"br"),e(21),c(22,"br"),e(23),c(24,"br"),e(25),c(26,"br"),e(27),c(28,"br"),e(29),c(30,"br"),e(31,`
                      `),t(),e(32,`
                  `),t(),e(33,`
                `),t(),e(34,`
                `),i(35,"div",20),e(36,`
                  `),i(37,"div",23),e(38,`
                      `),i(39,"h6",24),e(40,"Proposed"),t(),e(41,`
                      `),e(42,`
                      `),e(43,`
                      `),i(44,"small"),e(45),c(46,"br"),e(47),c(48,"br"),e(49),c(50,"br"),e(51),c(52,"br"),e(53),c(54,"br"),e(55),c(56,"br"),e(57),c(58,"br"),e(59),c(60,"br"),e(61,`
                      `),t(),e(62,`
                  `),t(),e(63,`
                `),t(),e(64,`
                `),i(65,"div",25),e(66,`
                  `),i(67,"div",2),e(68,`
                    `),i(69,"label",26),e(70,"Variations Status:"),t(),e(71,`
                    `),d(72,el,2,1,"div",10),e(73,`
                  `),t(),e(74,`
                `),t(),e(75,`
              `),t()),o&2){let r=a.$implicit,n=a.index,_=p();l(5),b("",n+1,". ",r.parcel==null?null:r.parcel.number),l(12),q(`
                        Acres: `,r.parcel==null?null:r.parcel.acres," "),l(2),b(`
                        Min/Max Floors: `,r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(2),b(`
                        Min/Max FAR: `,r.parcel==null?null:r.parcel.min_far,"-",r.parcel==null?null:r.parcel.max_far),l(2),b(`
                        Min/Max Floors: `,r.parcel==null?null:r.parcel.min_floors,"-",r.parcel==null?null:r.parcel.max_floors),l(2),b(`
                        Min/Max Floor Area: `,r.parcel==null?null:r.parcel.min_floor_area,"-",r.parcel==null?null:r.parcel.max_floor_area),l(2),q(`
                        Plot Coverage: `,r.parcel==null?null:r.parcel.plot_coverage,"% "),l(2),q(`
                        Use: `,r.parcel==null?null:r.parcel.description," "),l(16),q(`
                        Acres: `,r.acres," "),l(2),b(`
                        Min/Max Floors: `,r.min_floors,"-",r.max_floors),l(2),b(`
                        Min/Max FAR: `,r.min_far,"-",r.max_far),l(2),b(`
                        Min/Max Floors: `,r.min_number_of_floors,"-",r.max_number_of_floors),l(2),b(`
                        Min/Max Floor Area: `,r.min_floor_area,"-",r.max_floor_area),l(2),b(`
                        Plot Coverage (Proposed/Existing): `,r.percentage_of_site_covered_by_proposed_building,"-",r.percentage_of_site_covered_by_existing_building,"% "),l(2),q(`
                        Number of Units to be Developed: `,r.number_of_units_to_be_developed," "),l(2),q(`
                        Use: `,r.description," "),l(13),m("ngIf",_.item.variation_status)}}function il(o,a){if(o&1){let r=me();i(0,"div",34),e(1,`
                    `),i(2,"input",35),P("ngModelChange",function(_){O(r);let s=p(2);return T(s.item.variation_status.id,_)||(s.item.variation_status.id=_),U(_)}),t(),e(3,`
                    `),i(4,"label",36),e(5),t(),e(6,`
                  `),t()}if(o&2){let r=a.$implicit,n=p(2);l(2),m("value",r.id),I("ngModel",n.item.variation_status.id),l(3),q(" ",r.alias," ")}}function nl(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function rl(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,nl,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("variation_status_id").errors)==null?null:r.required)}}function ol(o,a){if(o&1&&(i(0,"span")(1,"a",40),e(2,"File"),t()()),o&2){let r=p(3);l(),m("href",E(r.item.variation_evidence_url),ye)}}function al(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function ll(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,al,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(3);l(2),m("ngIf",(r=n.itemForm.get("variation_evidence").errors)==null?null:r.required)}}function ml(o,a){if(o&1){let r=me();i(0,"div",11),e(1,`
                `),i(2,"div",27),e(3,`
                  `),i(4,"label",38),e(5,"Variation (Approval) Evidence:"),t(),e(6,`
                  `),d(7,ol,3,2,"span",0),e(8,`
                  `),i(9,"input",39),y("change",function(_){O(r);let s=p(2);return U(s.onVariationEvidenceChange(_))}),t(),e(10,`
                  `),d(11,ll,4,1,"div",30),e(12,`
                `),t(),e(13,`
              `),t()}if(o&2){let r=p(2);l(7),m("ngIf",r.item.variation_evidence),l(2),m("ngClass",x(3,ei,r.itemForm.get("variation_evidence").invalid&&(r.itemForm.get("variation_evidence").dirty||r.itemForm.get("variation_evidence").touched))),l(2),m("ngIf",r.itemForm.get("variation_evidence").invalid&&(r.itemForm.get("variation_evidence").dirty||r.itemForm.get("variation_evidence").touched))}}function dl(o,a){o&1&&(i(0,"div"),e(1,"This field is required."),t())}function sl(o,a){if(o&1&&(i(0,"div",37),e(1,`
                    `),d(2,dl,2,0,"div",0),e(3,`
                  `),t()),o&2){let r,n=p(2);l(2),m("ngIf",(r=n.itemForm.get("variation_comments").errors)==null?null:r.required)}}function _l(o,a){if(o&1){let r=me();i(0,"div",7),e(1,`
              `),i(2,"div",11),e(3,`
                `),i(4,"div",27),e(5,`
                  `),i(6,"label",28),e(7,"Variations status:"),t(),e(8,`
                  `),e(9,`
                  `),e(10,`
                  `),d(11,il,7,3,"div",29),e(12,`
                  `),d(13,rl,4,1,"div",30),e(14,`
                `),t(),e(15,`
              `),t(),e(16,`
              `),d(17,ml,14,5,"div",31),e(18,`
              `),i(19,"div",11),e(20,`
                `),i(21,"div",27),e(22,`
                  `),i(23,"label",32),e(24,"Variation Comments:"),t(),e(25,`
                  `),i(26,"ckeditor",33),P("ngModelChange",function(_){O(r);let s=p();return T(s.item.variation_comments,_)||(s.item.variation_comments=_),U(_)}),t(),e(27,`
                  `),d(28,sl,4,1,"div",30),e(29,`
                `),t(),e(30,`
              `),t(),e(31,`
            `),t()}if(o&2){let r=p();l(11),m("ngForOf",r.mConstructionPermitVariationStatuses),l(2),m("ngIf",r.itemForm.get("variation_status_id").invalid&&(r.itemForm.get("variation_status_id").dirty||r.itemForm.get("variation_status_id").touched)),l(4),m("ngIf",r.itemForm.get("variation_status_id").value==2),l(9),m("editor",r.mEditor)("config",r.mAppContextService.ckEditorConfig),I("ngModel",r.item.variation_comments),m("ngClass",x(8,ei,r.itemForm.get("variation_comments").invalid&&(r.itemForm.get("variation_comments").dirty||r.itemForm.get("variation_comments").touched))),l(2),m("ngIf",r.itemForm.get("variation_comments").invalid&&(r.itemForm.get("variation_comments").dirty||r.itemForm.get("variation_comments").touched))}}var ct=class o{constructor(a,r,n,_,s,F){this.mConstructionPermitService=a;this.router=r;this.mToastrService=n;this.mAppContextService=_;this.fb=s;this.route=F;this.mProgress=C(!1);this.mEditor=Se;this.item={};this.itemForm=this.fb.group({variation_status_id:["",f.required],variation_evidence:["",f.nullValidator],variation_comments:["",f.required]})}ngOnInit(){this.getItem(),this.loadUnpaginatedItems()}onSubmit(a){let r=new FormData;r.append("variation_status_id",a.variation_status_id),r.append("variation_comments",a.variation_comments),this.variation_evidence_file?r.append("variation_evidence",this.variation_evidence_file,this.variation_evidence_file.name):r.append("variation_evidence",""),r.append("_method","POST"),this.mProgress.set(!0),this.mConstructionPermitService.processItemVariations(this.id,r).subscribe({next:n=>{n&&(this.mToastrService.success(n.message),this.mProgress.set(!1),this.router.navigateByUrl("/construction-permits"))},error:n=>{n.error.message&&this.mToastrService.error(n.error.message),this.mProgress.set(!1)}})}getItem(){this.id=this.route.snapshot.paramMap.get("id"),this.mProgress.set(!0),this.mConstructionPermitService.getOneItem(this.id).subscribe({next:a=>{a&&(this.item=a,this.mProgress.set(!1))},error:a=>{a.error.message&&this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}loadUnpaginatedItems(){this.mProgress.set(!0),this.mConstructionPermitService.processUnpaginatedItems().subscribe({next:a=>{a&&(this.mConstructionPermitVariationStatuses=a.data.construction_permit_variation_statuses,this.mProgress.set(!1))},error:a=>{this.mToastrService.error(a.error.message),this.mProgress.set(!1)}})}onVariationEvidenceChange(a){if(a.target.value){let r=a.target.files[0];this.variation_evidence_file=r}}static{this.\u0275fac=function(r){return new(r||o)(v(B),v(_e),v(D),v(V),v(ge),v(se))}}static{this.\u0275cmp=A({type:o,selectors:[["app-variation"]],standalone:!1,decls:100,vars:7,consts:[[4,"ngIf"],["xs","12"],[1,"mb-3"],[3,"ngSubmit","formGroup"],[1,"border","p-2","mb-3"],[1,"float-none","w-auto"],[1,"text-bolder","text-muted"],[1,"row"],[1,"col-md-6"],["for","investor_id"],["class","text-muted",4,"ngIf"],[1,"col-md-12"],[1,"text-muted"],[1,"pb-2"],["class","row",4,"ngFor","ngForOf"],["class","row",4,"ngIf"],[1,"mt-3","text-right"],["routerLink","/construction-permits","cButton","","color","danger"],["type","submit","cButton","","color","success",1,"text-dark"],[1,"fw-bolder"],[1,"col-md-6","mb-3"],[1,"callout","callout-success","h-100"],[1,"text-success","fw-bold"],[1,"callout","callout-danger","h-100"],[1,"text-danger","fw-bold"],[1,"col-md-12","mt-2"],["for","context_analysis"],[1,"form-group","mb-3"],["for","variation_status_id",1,"col-form-label","required"],["class","form-check",4,"ngFor","ngForOf"],["class","invalid-feedback","role","alert",4,"ngIf"],["class","col-md-12",4,"ngIf"],["for","variation_comments",1,"col-form-label","required"],["formControlName","variation_comments","type","text",1,"form-control1",3,"ngModelChange","editor","config","ngModel","ngClass"],[1,"form-check"],["type","radio","formControlName","variation_status_id",1,"form-check-input",3,"ngModelChange","value","ngModel"],[1,"form-check-label"],["role","alert",1,"invalid-feedback"],["for","variation_evidence",1,"col-form-label","required"],["formControlName","variation_evidence","type","file",1,"form-control",3,"change","ngClass"],["target","_blank",1,"btn","btn-link","btn-sm",3,"href"]],template:function(r,n){r&1&&(d(0,Qa,1,0,"app-progress",0),i(1,"c-row"),e(2,`
  `),i(3,"c-col",1),e(4,`
    `),i(5,"c-card",2),e(6,`
      `),i(7,"c-card-body"),e(8,`

        `),i(9,"form",3),y("ngSubmit",function(){return n.onSubmit(n.itemForm.value)}),e(10,`

          `),i(11,"fieldset",4),e(12,`
            `),i(13,"legend",5)(14,"h6",6),e(15,"GENERAL INFORMATION"),t()(),e(16,`
            `),i(17,"div",7),e(18,`
              `),i(19,"div",8),e(20,`
                `),i(21,"div",2),e(22,`
                  `),i(23,"label",9),e(24,"Company:"),t(),e(25,`
                  `),d(26,Za,2,1,"div",10),e(27,`
                `),t(),e(28,`
              `),t(),e(29,`
              `),i(30,"div",8),e(31,`
                `),i(32,"div",2),e(33,`
                  `),i(34,"label",9),e(35,"Nature of Application:"),t(),e(36,`
                  `),d(37,$a,2,1,"div",10),e(38,`
                `),t(),e(39,`
              `),t(),e(40,`
            `),t(),e(41,`
          `),t(),e(42,`
          `),i(43,"fieldset",4),e(44,`
            `),i(45,"legend",5)(46,"h6",6),e(47,"PROJECT BRIEF AND PURPOSE"),t()(),e(48,`
            `),i(49,"div",7),e(50,`
              `),i(51,"div",11),e(52,`
                `),i(53,"div",2),e(54,`
                  `),i(55,"label",9),e(56,"Project Brief:"),t(),e(57,`
                  `),i(58,"div",12),e(59),t(),e(60,`
                `),t(),e(61,`
              `),t(),e(62,`
              `),e(63,`
            `),t(),e(64,`
          `),t(),e(65,`
          `),i(66,"fieldset",4),e(67,`
            `),i(68,"legend",5)(69,"h6",6),e(70,"PARCEL & LAND USE VARIATIONS"),t()(),e(71,`
            `),i(72,"div",13),e(73,`
              `),d(74,tl,76,27,"div",14),e(75,`
            `),t(),e(76,`
          `),t(),e(77,`

          `),i(78,"fieldset",4),e(79,`
            `),i(80,"legend",5)(81,"h6",6),e(82,"PROCESS"),t()(),e(83,`
            `),d(84,_l,32,10,"div",15),e(85,`
          `),t(),e(86,`

          `),i(87,"div",16),e(88,`
            `),i(89,"button",17),e(90,"Cancel"),t(),e(91,`
            `),i(92,"button",18),e(93,"Submit"),t(),e(94,`
          `),t(),e(95,`

        `),t(),e(96,`

      `),t(),e(97,`
    `),t(),e(98,`
  `),t(),e(99,`
`),t()),r&2&&(m("ngIf",n.mProgress()),l(9),m("formGroup",n.itemForm),l(17),m("ngIf",n.item.investor),l(11),m("ngIf",n.item.type),l(22),g(n.item.project_brief),l(15),m("ngForOf",n.item.variations),l(10),m("ngIf",n.mConstructionPermitVariationStatuses&&n.mConstructionPermitVariationStatuses.length>0))},dependencies:[de,G,R,W,L,H,pe,z,ue,ce,J,Ee,Ye,fe,Y,K,xe,he],encapsulation:2})}};var pl=[{path:"",redirectTo:"index",pathMatch:"full"},{path:"index",component:at,data:{title:"Construction Permits / Masterplan Submission"}},{path:"create",component:lt,data:{title:"Construction Permits / Masterplan Submission / Create"}},{path:"edit/:id",component:dt,data:{title:"Construction Permits / Masterplan Submission / Edit"}},{path:"show/:id",component:st,data:{title:"Construction Permits / Masterplan Submission / Show"}},{path:"process/:id",component:ut,data:{title:"Construction Permits / Process"}},{path:"variations/:id",component:ct,data:{title:"Construction Permits / Variations"}}],ft=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=Qe({type:o})}static{this.\u0275inj=Xe({imports:[et,xt.forChild(pl),xt]})}};var ti=class o{static{this.\u0275fac=function(r){return new(r||o)}}static{this.\u0275mod=Qe({type:o})}static{this.\u0275inj=Xe({imports:[et,ft,Gt,qt,Nt,z,Rt,Vt,Lt,Pt,Ut,Dt,zt,Tt,wt,it,tt,Yt]})}};export{ti as ConstructionPermitModule};
