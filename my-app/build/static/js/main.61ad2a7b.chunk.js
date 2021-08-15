(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{111:function(e,t,c){"use strict";c.r(t);var n=c(136),a=c(0),r=c(39),i=c.n(r),s=c(29),l=c.n(s),o=c(43),d=c(11),j=c(3),u=c(138),b=c(78),h=c(130),f=c(140),O=c(123),p=c(126),x=c(125),m=c(134),v=c(135),y=c(124),S=c(2);var C=function(e){return Object(S.jsx)(O.a,{onClick:e.onClick,bgColor:e.active?"#f1f2f0":"white",my:4,cursor:"pointer",children:Object(S.jsxs)(O.a,{p:4,children:[Object(S.jsx)(y.a,{fontSize:"xl",children:e.data.brand}),Object(S.jsx)(x.a,{fontSize:"xl",color:"teal",children:e.data.model}),Object(S.jsx)(x.a,{fontSize:"md",color:"gray.400",children:e.data.year})]})})};var g=function(e){return Object(S.jsx)(O.a,{flex:"1",className:"vehicles-list",children:Object(S.jsxs)(O.a,{my:8,children:[Object(S.jsx)(y.a,{fontSize:"md",color:"gray.600",children:"Lista de ve\xedculos"}),e.data.map((function(t){var c;return Object(S.jsx)(C,{onClick:function(){return e.onSelected(t)},active:t.id===(null===(c=e.selectedItem)||void 0===c?void 0:c.id),data:t},t.id)}))]})})},E=c(82),V=c(128);var w=function(e){var t,c,n,a;return Object(S.jsxs)(O.a,{visibility:e.data?"visible":"hidden",flex:"1",pl:4,className:"vehicle-details",children:[Object(S.jsx)(O.a,{mt:8,mb:4,children:Object(S.jsx)(y.a,{fontSize:"md",color:"gray.600",children:"Detalhes"})}),Object(S.jsxs)(O.a,{p:4,bgColor:"#f1f2f0",children:[Object(S.jsx)(x.a,{color:"teal",fontSize:"2xl",children:null===(t=e.data)||void 0===t?void 0:t.model}),Object(S.jsxs)(p.a,{mt:8,children:[Object(S.jsxs)(O.a,{flex:"1",children:[Object(S.jsx)(y.a,{fontSize:"xl",children:"Marca"}),Object(S.jsx)(x.a,{color:"gray.400",fontSize:"md",children:null===(c=e.data)||void 0===c?void 0:c.brand})]}),Object(S.jsxs)(O.a,{flex:"1",children:[Object(S.jsx)(y.a,{fontSize:"xl",children:"Ano"}),Object(S.jsx)(x.a,{color:"gray.400",fontSize:"md",children:null===(n=e.data)||void 0===n?void 0:n.year})]})]}),Object(S.jsx)(O.a,{my:8,children:Object(S.jsx)(x.a,{children:null===(a=e.data)||void 0===a?void 0:a.description})}),Object(S.jsx)(O.a,{children:Object(S.jsx)(E.a,{onClick:e.onClickEdit,leftIcon:Object(S.jsx)(V.a,{}),colorScheme:"teal",children:"Editar"})})]})]})},k=c(75),I=c.n(k);var z=function(e){var t=Object(a.useState)(""),c=Object(j.a)(t,2),n=c[0],r=c[1],i=function(e,t){var c=Object(a.useState)(e),n=Object(j.a)(c,2),r=n[0],i=n[1];return Object(a.useEffect)((function(){var c=setTimeout((function(){return i(e)}),t);return function(){return clearInterval(c)}}),[e,t]),r}(n,600);return Object(a.useEffect)((function(){e.onSubmitSearch(i)}),[i]),Object(S.jsxs)(p.a,{w:"100%",bgColor:"#364147",children:[Object(S.jsx)(p.a,{flex:"1",alignItems:"center",pl:16,children:Object(S.jsx)(y.a,{fontSize:"3xl",color:"white",children:"Fullstack"})}),Object(S.jsx)(p.a,{flex:"1",p:3,bgColor:"blackAlpha.400",children:Object(S.jsx)("input",{value:n,onChange:function(e){return r(e.target.value)},placeholder:"DIGITE seu ve\xedculo",className:I.a.input})})]})},L={vehicles:[],filteredVehicles:[]};function T(e,t){switch(t.type){case"CAR_SELECTED":return Object(d.a)(Object(d.a)({},e),{},{selectedItem:t.payload});case"SET_FILTERED_VEHICLES":return Object(d.a)(Object(d.a)({},e),{},{filteredVehicles:t.payload});case"SET_VEHICLES":return Object(d.a)(Object(d.a)({},e),{},{vehicles:t.payload,filteredVehicles:t.payload});default:return e}}var F="http://localhost:8300",_=c(6),A=c(137),D=c(131),N=c(42),R=c(139),H=c(132),J=c(133);var P=function(e){var t,c=function(t){e.setFormValues(Object(d.a)(Object(d.a)({},e.formValues),{},Object(_.a)({},t.target.id,t.target.value)))};return Object(S.jsxs)(A.a,{isOpen:e.isOpen,onClose:e.onClose,children:[Object(S.jsx)(A.f,{}),Object(S.jsxs)(A.c,{children:[Object(S.jsx)(A.e,{children:e.title}),Object(S.jsxs)(A.b,{children:[Object(S.jsxs)(h.a,{gap:"16px",templateColumns:"repeat(2, 1fr)",children:[Object(S.jsxs)(h.b,{children:[Object(S.jsx)(x.a,{fontSize:"sm",children:"Veiculo"}),Object(S.jsx)(D.a,{id:"model",onChange:c,value:e.formValues.model,variant:"filled"})]}),Object(S.jsxs)(h.b,{children:[Object(S.jsx)(x.a,{fontSize:"sm",children:"Marca"}),Object(S.jsx)(D.a,{id:"brand",onChange:c,value:e.formValues.brand,variant:"filled"})]}),Object(S.jsxs)(h.b,{children:[Object(S.jsx)(x.a,{fontSize:"sm",children:"Ano"}),Object(S.jsx)(D.a,{id:"year",type:"number",onChange:c,value:e.formValues.year,variant:"filled"})]}),Object(S.jsx)(h.b,{children:Object(S.jsxs)(N.a,{display:"flex",h:"100%",alignItems:"center",children:[Object(S.jsx)(R.a,{id:"sold",isChecked:null!==(t=e.formValues.sold)&&void 0!==t&&t,onChange:function(t){e.setFormValues(Object(d.a)(Object(d.a)({},e.formValues),{},Object(_.a)({},t.target.id,t.target.checked)))}}),Object(S.jsx)(H.a,{htmlFor:"sold",ml:"16px",children:"Vendido"})]})})]}),Object(S.jsxs)(O.a,{children:[Object(S.jsx)(x.a,{my:"8px",fontSize:"sm",children:"Descri\xe7\xe3o"}),Object(S.jsx)(J.a,{id:"description",onChange:c,value:e.formValues.description,variant:"filled"})]})]}),Object(S.jsxs)(A.d,{children:[Object(S.jsx)(E.a,{onClick:function(){var t=Object(d.a)(Object(d.a)({},e.formValues),{},{year:Number.parseInt(e.formValues.year)});e.formValues.id?e.updateVehicle(t):e.addVehicle(t)},size:"sm",mr:5,colorScheme:"teal",children:e.confirmLabel}),Object(S.jsx)(E.a,{onClick:e.onClose,size:"sm",colorScheme:"red",children:"Fechar"})]})]})]})},B={model:"",brand:"",year:0,sold:!1,description:""},M=function(){var e=Object(a.useReducer)(T,L),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(a.useState)(B),i=Object(j.a)(r,2),s=i[0],y=i[1],C=Object(a.useState)({isOpen:!1,title:"Novo ve\xedculo",confirmLabel:"Add"}),E=Object(j.a)(C,2),V=E[0],k=E[1];function I(){return _.apply(this,arguments)}function _(){return(_=Object(o.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(F,"/vehicles"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n({type:"SET_VEHICLES",payload:c});case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(){return(A=Object(o.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.selectedItem){e.next=2;break}return e.abrupt("return");case 2:y(c.selectedItem),k({confirmLabel:"Editar",isOpen:!0,title:"Editar ve\xedculo"});case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(){return(D=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(F,"/vehicles/").concat(t.id),{body:JSON.stringify(t),method:"PUT",headers:{"Content-Type":"Application/json"}});case 3:k((function(e){return Object(d.a)(Object(d.a)({},e),{},{isOpen:!1})})),y(B),n({type:"CAR_SELECTED",payload:t}),I(),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),alert(e.t0.message);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function N(){return(N=Object(o.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(F,"/vehicles"),{body:JSON.stringify(t),method:"POST",headers:{"Content-Type":"Application/json"}});case 3:k((function(e){return Object(d.a)(Object(d.a)({},e),{},{isOpen:!1})})),y(B),I(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){I()}),[]),Object(S.jsx)(u.a,{theme:b.theme,children:Object(S.jsxs)(h.a,{minH:"100vh",w:"100%",overflow:"hidden",bgColor:"#e2e4e1",children:[Object(S.jsxs)(f.a,{children:[Object(S.jsx)(z,{onSubmitSearch:function(e){var t=c.vehicles.filter((function(t){return t.model.includes(e)}));n({type:"SET_FILTERED_VEHICLES",payload:t})}}),Object(S.jsxs)(O.a,{w:"100%",p:16,children:[Object(S.jsxs)(p.a,{justifyContent:"space-between",children:[Object(S.jsx)(x.a,{fontSize:"3xl",children:"Ve\xedculo"}),Object(S.jsx)(m.a,{onClick:function(){return k((function(e){return Object(d.a)(Object(d.a)({},e),{},{isOpen:!0})}))},"aria-label":"new vehicle",colorScheme:"teal",size:"md",icon:Object(S.jsx)(v.a,{})})]}),Object(S.jsxs)(p.a,{children:[Object(S.jsx)(g,{onSelected:function(e){n({type:"CAR_SELECTED",payload:e})},selectedItem:c.selectedItem,data:c.filteredVehicles}),Object(S.jsx)(w,{onClickEdit:function(){return A.apply(this,arguments)},data:c.selectedItem})]})]})]}),Object(S.jsx)(P,{title:V.title,onClose:function(){y(B),k((function(e){return Object(d.a)(Object(d.a)({},e),{},{isOpen:!e.isOpen})}))},formValues:s,setFormValues:y,addVehicle:function(e){return N.apply(this,arguments)},updateVehicle:function(e){return D.apply(this,arguments)},confirmLabel:V.confirmLabel,isOpen:V.isOpen})]})})},W=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,141)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(Object(S.jsxs)(a.StrictMode,{children:[Object(S.jsx)(n.a,{}),Object(S.jsx)(M,{})]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),W()},75:function(e,t,c){e.exports={input:"header_input__2cfQn"}}},[[111,1,2]]]);
//# sourceMappingURL=main.61ad2a7b.chunk.js.map