(this.webpackJsonphearth_rate=this.webpackJsonphearth_rate||[]).push([[0],{136:function(e,t,a){e.exports=a(325)},141:function(e,t,a){},303:function(e,t,a){},324:function(e,t,a){},325:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),s=(a(141),a(74),a(36)),l=a.n(s),i=a(43),u=(a(250),a(16)),m=a.n(u),d=a(24),p=a(20),f=a(61),h=a.n(f),E=a(62),b=a.n(E),v=a(63),g=a.n(v),N=a(125),x=a(126),O=a(1),y=a.n(O);function k(){var e=Object(N.a)(["\n    color: #FFF;\n    position: relative;\n    font-size: 16px;\n    padding: 10px;\n    min-width: 120px;\n    border-radius: 5px;\n    background-color: #594a95;\n    transition: background-color 0.3s ease, box-shadow 0.7s ease;\n    &:active {\n        top: 2px;\n    }\n    &:enabled:hover {\n        background-color: #FFF;\n        color: #594a95;\n        cursor: pointer;\n        box-shadow: 0px 0px 6px 2px rgba(79,156,239,0.3);\n    }\n    &:focus {\n        outline: none;\n    } \n"]);return k=function(){return e},e}var j=x.a.button(k());j.propTypes={disabled:y.a.bool};var C=j,w=a(22),F=a(129),S=a.n(F).a.create({baseURL:"https://frequenciacardiaca.herokuapp.com/"}),P=Object(i.makeStyles)((function(e){return{mainContainer:{backgroundColor:"#594a95",minWidth:"100%",alignItems:"center",padding:"10px",height:"100%"},mainForm:{margin:"auto",backgroundColor:"#FFF",maxWidth:"200px",alignItems:"center",padding:"10px",height:"100%"},formControl:{margin:"10px",backgroundColor:"#FFF"},inputControl:{height:"80px"}}}));var R=function(){var e=r.a.useState(0),t=Object(p.a)(e,2),a=t[0],n=t[1],c=r.a.useState(""),o=Object(p.a)(c,2),s=o[0],l=o[1],i=r.a.useState(""),u=Object(p.a)(i,2),f=u[0],E=u[1],v=r.a.useRef(null),N=P();function x(e){Object(w.b)(e,{className:"Error-Toast"})}function O(){return(O=Object(d.a)(m.a.mark((function e(){var t,a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={rates:[s,f]},console.log(JSON.stringify(t)),e.next=4,S.post("/rates/",t);case 4:return a=e.sent,e.next=7,a;case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.useEffect((function(){n(v.current.offsetWidth)}),[]),r.a.createElement("div",{id:"formAdd",className:N.mainForm},r.a.createElement(h.a,{className:N.formControl,variant:"outlined"},r.a.createElement(b.a,{ref:v,htmlFor:"component-outlined"},"Press\xe3o Sist\xf3lica"),r.a.createElement(g.a,{className:N.inputControl,id:"component-outlined",value:s,onChange:function(e){l(e.target.value)},labelWidth:a,type:"number"})),r.a.createElement(h.a,{className:N.formControl,variant:"outlined"},r.a.createElement(b.a,{ref:v,htmlFor:"component-outlined"},"Press\xe3o Diast\xf3lica"),r.a.createElement(g.a,{className:N.inputControl,id:"component-outlined",value:f,onChange:function(e){E(e.target.value)},labelWidth:a})),r.a.createElement(w.a,null),r.a.createElement(C,{onClick:function(e){(function(){return O.apply(this,arguments)})().then((function(e){var t;200===e.status?(t="Salvo com sucesso!!!",Object(w.b)(t)):(x("ERRO!"),console.log(e))})).catch((function(e){x("ERRO!"),console.log(e)}))}},"Salvar"))},B=(a(303),a(130)),I=a(131);var W=function(){var e=Object(n.useState)([]),t=Object(p.a)(e,2),a=t[0],c=t[1];function o(){return s.apply(this,arguments)}function s(){return(s=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.get("/rates");case 2:t=e.sent,c(t.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function l(e){Object(w.b)(e)}function i(e){Object(w.b)(e,{className:"Error-Toast"})}function u(){return(u=Object(d.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,S.delete("/rates/".concat(t._id)).then((function(e){200===e.status?(l("Deletado com sucesso!!!"),o()):(i("ERRO!"),console.log(e))})).catch((function(e){i("ERRO!"),console.log(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(n.useEffect)((function(){o()}),[]);var f=r.a.createElement("table",{className:"ui celled table"},r.a.createElement("thead",{className:""},r.a.createElement("tr",{className:""},r.a.createElement("th",{className:""},"Press\xe3o Sist\xf3lica"),r.a.createElement("th",{className:""},"Press\xe3o Diaist\xf3lica"),r.a.createElement("th",{className:""},"Data"),r.a.createElement("th",{className:"columnButton"}," "))),a.map((function(e){return r.a.createElement("tbody",{className:"",key:e._id},r.a.createElement("tr",{key:e._id,className:e.rates[0]>13||e.rates[1]>9?"highPressure":""},r.a.createElement("td",{className:""},e.rates[0]),r.a.createElement("td",{className:""},e.rates[1]),r.a.createElement("td",{className:""},function(e){var t=e.replace("T"," ");return t=t.replace("Z"," ")}(e.date)),r.a.createElement("td",{className:"columnButton",onClick:function(){return function(e){return u.apply(this,arguments)}(e)}},r.a.createElement(B.a,{icon:I.a}))))})));return r.a.createElement("div",{id:"formList"},f,r.a.createElement(w.a,null))},_=a(132),D=(a(323),function(e){return console.log(e),r.a.createElement(r.a.Fragment,null,r.a.createElement(_.Player,{playsInline:!0,poster:"/assets/poster.png",src:e.url}))});a(324);function T(){var e=Object(n.useState)(),t=Object(p.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(p.a)(o,2),l=s[0],i=s[1];function u(){return(u=Object(d.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,S.get("/videos");case 3:t=e.sent,i(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){u.apply(this,arguments)}()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,l.map((function(e){return r.a.createElement("li",{key:e.name,onClick:function(){return function(e){c(e)}(e.url)}},e.name)}))),r.a.createElement(D,{url:a}))}var J=r.a.createElement("link",{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"}),A=[{menuItem:"Cadastrar Press\xe3o",className:"NavBarStyle",render:function(){return r.a.createElement(l.a.Pane,{attached:!1},r.a.createElement(R,null))}},{menuItem:"Hist\xf3rico",className:"NavBarStyle",render:function(){return r.a.createElement(l.a.Pane,{attached:!1},r.a.createElement(W,null))}},{menuItem:"V\xeddeos",className:"NavBarStyle",render:function(){return r.a.createElement(l.a.Pane,{attached:!1},r.a.createElement(T,null))}}],L=function(){return r.a.createElement(l.a,{menu:{attached:!1},className:"NavBarStyle",panes:A})},q=Object(i.makeStyles)((function(e){return{mainContainer:{backgroundColor:"#594a95",minWidth:"100%",alignItems:"center",padding:"10px",height:"100%",overflowY:"scroll"}}}));var z=function(){var e=q();return r.a.createElement("div",{className:"App"},r.a.createElement("div",{id:"mainContainer",className:e.mainContainer},r.a.createElement("div",{id:"mainContainer"},J,r.a.createElement(L,{className:e.mainContainer}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){}},[[136,1,2]]]);
//# sourceMappingURL=main.583b5149.chunk.js.map