(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8226],{23926:function(e,t,n){"use strict";var r=n(67294),o=n(30067),i=n(73633),c=n(57094),a=n(85893);function s(e){return e.substring(2).toLowerCase()}t.Z=function(e){const{children:t,disableReactTree:n=!1,mouseEvent:u="onClick",onClickAway:l,touchEvent:d="onTouchEnd"}=e,f=r.useRef(!1),p=r.useRef(null),h=r.useRef(!1),m=r.useRef(!1);r.useEffect((()=>(setTimeout((()=>{h.current=!0}),0),()=>{h.current=!1})),[]);const x=(0,o.Z)(t.ref,p),v=(0,i.Z)((e=>{const t=m.current;m.current=!1;const r=(0,c.Z)(p.current);if(!h.current||!p.current||"clientX"in e&&function(e,t){return t.documentElement.clientWidth<e.clientX||t.documentElement.clientHeight<e.clientY}(e,r))return;if(f.current)return void(f.current=!1);let o;o=e.composedPath?e.composedPath().indexOf(p.current)>-1:!r.documentElement.contains(e.target)||p.current.contains(e.target),o||!n&&t||l(e)})),b=e=>n=>{m.current=!0;const r=t.props[e];r&&r(n)},y={ref:x};return!1!==d&&(y[d]=b(d)),r.useEffect((()=>{if(!1!==d){const e=s(d),t=(0,c.Z)(p.current),n=()=>{f.current=!0};return t.addEventListener(e,v),t.addEventListener("touchmove",n),()=>{t.removeEventListener(e,v),t.removeEventListener("touchmove",n)}}}),[v,d]),!1!==u&&(y[u]=b(u)),r.useEffect((()=>{if(!1!==u){const e=s(u),t=(0,c.Z)(p.current);return t.addEventListener(e,v),()=>{t.removeEventListener(e,v)}}}),[v,u]),(0,a.jsx)(r.Fragment,{children:r.cloneElement(t,y)})}},67070:function(e,t,n){"use strict";n(67294);var r=n(88169),o=n(85893);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},56686:function(e,t,n){"use strict";n(67294);var r=n(88169),o=n(85893);t.Z=(0,r.Z)((0,o.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},5835:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/sms/viewSMS",function(){return n(64114)}])},38554:function(e,t){"use strict";t.Z={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",width:"80px",height:{xs:"40px",sm:"48px"}},container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},tabsContainer:{marginTop:function(e){return e.spacing(8)},border:function(e){return"1px solid ".concat(e.palette.bacap.border)},minHeight:"800px",borderRadius:"8px",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px"},customizedButtonLink:{cursor:"pointer",color:"#8BC24A",textDecoration:"underline",fontWeight:600}}},37634:function(e,t,n){"use strict";n.d(t,{Z:function(){return u}});var r=n(85893),o=n(25675),i=n(87357),c=n(15861),a=n(26660),s={container:{textAlign:"center",minHeight:"200px",width:"100%",border:"4px solid rgba(0, 0, 0, 0.11)",borderRadius:function(e){return e.spacing(2)},color:function(e){return e.palette.text.secondary},borderStyle:"dashed",padding:function(e){return e.spacing(2)},marginTop:function(e){return e.spacing(4)}}};var u=function(e){var t=e.message,n=void 0===t?"Failed to load data":t,u=e.style,l=void 0===u?{}:u;return(0,r.jsxs)(i.Z,{sx:s.container,style:l,children:[(0,r.jsx)(o.default,{unoptimized:!0,src:(0,a.assetPrefixer)("images/icons/empty-state-light.svg"),height:120,width:120,loader:a.imageLoader,alt:"Empty data"}),(0,r.jsx)(c.Z,{variant:"subtitle1",children:n})]})}},16759:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var r=n(85893),o=n(87357),i=n(67720),c=n(88078),a={container:{padding:"24px",width:"100%",position:"relative",minWidth:"0px",overflowWrap:"break-word",background:"#FFFFFF",boxShadow:"rgb(0 0 0 / 2%) 0px 3.5px 5.5px",borderRadius:"16px",margin:"auto",borderColor:"#E2E8F0"},divider:{marginTop:"32px",marginBottom:"32px"},text:{marginTop:"16px",marginBottom:"16px"}};var s=function(){return(0,r.jsxs)(o.Z,{sx:a.container,children:[(0,r.jsx)(o.Z,{sx:{width:"300px"},children:[1,2,3,4,5,6,7,8].map((function(e){return(0,r.jsx)(c.Z,{variant:"text"},"up-".concat(e))}))}),(0,r.jsx)(i.Z,{sx:a.divider}),(0,r.jsx)(o.Z,{children:[1,2,3,4,5,6,7,8].map((function(e){return(0,r.jsx)(c.Z,{variant:"rectangular",sx:a.text},"down-".concat(e))}))})]})}},19227:function(e,t,n){"use strict";n.d(t,{Z:function(){return j}});var r=n(85893),o=n(67294),i=n(45697),c=n.n(i),a=n(11057),s=n(19536),u=n(98456),l=n(64666),d=n(31425),f=n(37645),p=n(6514),h=n(93946),m={button:{color:"#FFFFFF",textTransform:"capitalize",fontSize:"14px",fontStyle:"normal",fontWeight:"normal",height:{xs:"40px",sm:"48px"},"& .text":{display:{xs:"block",sm:"none"}},"& .shortText":{display:{xs:"inline-block",sm:"none"},fontSize:"24px"}},icon:{display:{xs:"block",sm:"none"}},dialogContent:{"& .error":{fontSize:"12px",color:"red"}},dialogActions:{"& button":{minWidth:"100px"}},closeButton:{position:"absolute",right:"8px",top:"8px",color:function(e){return e.palette.grey[500]}}};function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){v(e,t,n[t])}))}return e}function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],c=!0,a=!1;try{for(n=n.call(e);!(c=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);c=!0);}catch(s){a=!0,o=s}finally{try{c||null==n.return||n.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return x(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return x(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e){var t=y(o.useState({open:null}),2),n=t[0],i=t[1],c=e.loading,x=void 0!==c&&c,v=e.isOpen,g=void 0!==v&&v,j=e.showButtons,w=void 0===j||j,O=e.maxWidth,S=void 0===O?"sm":O,C=e.IconSVG,T=void 0===C?null:C,E=e.modalButtonStyles,k=void 0===E?{}:E,Z=e.modalExtraHandlerCB,P=void 0===Z?null:Z,R=e.modalCancelHandlerCB,_=void 0===R?null:R,B=e.modalConfirmHandlerCB,A=void 0===B?null:B,F=e.modalOpenHandlerCB,N=void 0===F?null:F,L=e.isDisabled,D=void 0!==L&&L,W=e.openButtonText,z=void 0===W?"Click":W,M=e.title,I=void 0===M?"Window Title":M,H=e.extraBtnText,q=void 0===H?"":H,G=e.cancelBtnText,K=void 0===G?"Cancel":G,X=e.confirmBtnText,U=void 0===X?"Ok":X,Y=e.contentText,V=void 0===Y?"":Y,Q=e.error,$=void 0===Q?"":Q,J=e.colorTheme,ee=void 0===J?"primary":J;(0,o.useEffect)((function(){i((function(e){return b({},e,{open:g})}))}),[g]);var te=function(){i(b({},n,{open:!1})),_&&_()};return(0,r.jsxs)("div",{children:[z&&(0,r.jsxs)(a.Z,{disabled:D,disableElevation:!0,variant:"contained",color:ee,onClick:function(){i(b({},n,{open:!0})),N&&N()},sx:b({},m.button,k),children:[T&&(0,r.jsx)(T,{sx:m.icon}),z]}),(0,r.jsxs)(l.Z,{maxWidth:S,fullWidth:!0,open:n.open||!1,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",children:[(0,r.jsxs)(f.Z,{children:[(0,r.jsx)("span",{children:I}),(0,r.jsx)(h.Z,{"aria-label":"close",sx:m.closeButton,onClick:te,disabled:x,children:(0,r.jsx)(s.Z,{})})]}),(0,r.jsxs)(p.Z,{sx:m.dialogContent,children:[""!==V&&(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{children:V}),(0,r.jsx)("div",{className:"error",children:$})]}),e.children]}),w&&(0,r.jsxs)(d.Z,{sx:m.dialogActions,children:[""!==q&&(0,r.jsx)(a.Z,{onClick:P||te,disabled:x,children:q}),(0,r.jsx)(a.Z,{onClick:_||te,disabled:x,children:K}),(0,r.jsxs)(a.Z,{variant:"contained",disabled:x,onClick:A||te,children:[(0,r.jsx)("span",{style:{display:x?"none":"block"},children:U}),(0,r.jsx)(u.Z,{size:24,color:"secondary",sx:{display:x?"block":"none"}})]})]})]})]})}g.propTypes={loading:c().bool,isOpen:c().bool,showButtons:c().bool,maxWidth:c().string,IconSVG:c().elementType,modalButtonStyles:c().object,modalCancelHandlerCB:c().func,modalConfirmHandlerCB:c().func,modalOpenHandlerCB:c().func,modalExtraHandlerCB:c().func,openButtonText:c().string,cancelBtnText:c().string,confirmBtnText:c().string,extraBtnText:c().string,title:c().string,contentText:c().string,children:c().node,error:c().string,isDisabled:c().bool,colorTheme:c().string};var j=g},64114:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return ae}});var r=n(34051),o=n.n(r),i=n(85893),c=n(67294),a=n(11163),s=n(95243),u=n(87006),l=n(40558),d=n(66383),f=n(47426),p=n(77715),h=n(87357),m=n(15861),x=n(56863),v=n(11057),b=n(67720),y=n(86886),g=n(27948),j=n(61903),w=n(3539),O=n(98396),S=n(9669),C=n.n(S),T=n(99431);function E(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}function k(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Z(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){P(e,t,n[t])}))}return e}function B(e,t){return!t||"object"!==F(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function A(e,t){return A=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},A(e,t)}var F=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=R(e);if(t){var o=R(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return B(this,n)}}var L={BASE_API_URL:"https://amia-cis-y26e.onrender.com/api",SEND_SMS_RECOMMENDATIONS:"".concat("https://amia-cis-y26e.onrender.com/api","/send")},D=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&A(e,t)}(c,e);var t,n,r,i=N(c);function c(){return k(this,c),i.apply(this,arguments)}return t=c,n=[{key:"sendSMS",value:function(e){var t,n=this;return(t=o().mark((function t(){var r,i;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.createRequestObject({body:e});case 2:return r=t.sent,t.next=5,C()(_({},r,{url:L.SEND_SMS_RECOMMENDATIONS,method:"POST"}));case 5:return i=t.sent,t.abrupt("return",i.data);case 7:case"end":return t.stop()}}),t)})),function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function c(e){E(i,r,o,c,a,"next",e)}function a(e){E(i,r,o,c,a,"throw",e)}c(void 0)}))})()}}],n&&Z(t.prototype,n),r&&Z(t,r),c}(T.Z),W=new D,z=W.sendSMS.bind(W),M=n(16759),I=n(37634),H=n(19227),q=n(27392),G=n(38554),K=n(96486),X=n.n(K),U=n(15799),Y=n(71927);function V(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}function Q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function $(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){Q(e,t,n[t])}))}return e}var J=(0,U.Z)();J.typography.h5=Q({fontSize:"1.2rem","@media (min-width:600px)":{fontSize:"1.5rem"}},J.breakpoints.up("md"),{fontSize:"2rem"});var ee=[{field:"name",headerName:"Name",width:150},{field:"cellnumber",headerName:"Cell Number",width:130}];var te=function(e){var t=e.contacts,n=e.contactsState,r=e.onBackBtnClick,s=e.report,u=e.setReport,l=e.loading,d=(0,c.useState)(t),p=d[0],S=d[1],C=(0,c.useState)([]),T=C[0],E=C[1],k=(0,a.useRouter)();(0,c.useEffect)((function(){0===p.length&&S(t)}),[t,p.length]);var Z=(0,O.Z)(J.breakpoints.between("xs","md")),P=function(){var e,n=(e=o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==s.info){e.next=17;break}return u($({},s,{sending:!0})),n=[],r=[],T.map((function(e){var o=t.find((function(t){return t.id===e}));o&&(n.push(o.cellnumber),r.push(""===o.name?o.cellnumber:o.name))})),e.prev=5,e.next=8,z({docId:s.id,recipientsNumber:n.toString(),message:s.smsRecommendations,currentSmsLogs:(null===s||void 0===s?void 0:s.logs)?s.logs:[],recipientsWithName:r.toString()});case 8:u((function(e){return $({},e,{sending:!1,info:"Crop Recommendation sent."})})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),k.push({pathname:"/admin/sms/",query:{isSent:!1}},"/admin/sms/"),console.error(e.t0.message);case 15:e.next=18;break;case 17:k.push({pathname:"/admin/sms/"});case 18:case"end":return e.stop()}}),e,null,[[5,11]])})),function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){V(i,r,o,c,a,"next",e)}function a(e){V(i,r,o,c,a,"throw",e)}c(void 0)}))});return function(){return n.apply(this,arguments)}}(),R=function(){k.push({pathname:"/admin/sms/",query:{toAddContact:!0}},"/admin/sms/")};return(0,i.jsx)("div",{children:l||s.loading?(0,i.jsx)(M.Z,{}):void 0!==s.stages?(0,i.jsxs)(h.Z,{container:!0,sx:G.Z.container,children:[(0,i.jsxs)(h.Z,{sx:{marginBottom:"32px",display:"flex",justifyContent:"space-between"},children:[(0,i.jsx)(Y.Z,{theme:J,children:(0,i.jsxs)(h.Z,{children:[(0,i.jsx)(m.Z,{variant:"h5",children:"Send Text-Form Crop Recommendation"}),(0,i.jsx)(m.Z,{variant:"h6",children:q.eT[s.type]})]})}),(0,i.jsxs)(x.Z,{orientation:Z?"vertical":"horizontal",children:[(0,i.jsx)(v.Z,{disableElevation:!0,variant:"outlined",color:"primary",sx:$({},G.Z.button,{color:function(e){return e.palette.primary.main},borderTopRightRadius:0,borderBottomRightRadius:0}),onClick:r,children:"Back"}),(0,i.jsx)(H.Z,{isDisabled:0===T.length||void 0===(null===s||void 0===s?void 0:s.smsRecommendations),isOpen:!1,maxWidth:"sm",openButtonText:"Send",title:"Send Crop Recommendation",contentText:""!==s.info?s.info:"Sending this allows your contacts to receive the Text-Form Crop Recommendation on their cellphone numbers as text.",confirmBtnText:""!==s.info?"Ok":"Send",modalConfirmHandlerCB:P,loading:s.sending,modalButtonStyles:{borderTopLeftRadius:0,borderBottomLeftRadius:0,width:"80px"}})]})]}),(0,i.jsxs)(h.Z,{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Province:"})," ",s.province]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Municipality:"})," ",s.municipality]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Crop:"})," ",s.crop]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Report type:"})," ",s.type||"-"]}),s.type===q.Ry.TEN_DAY&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Weather data validity:"})," ",s.date_range]}),s.type===q.Ry.SEASONAL&&(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Month:"})," \xa0",Object.values(f.re).find((function(e){return e.code===s.month})).format]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Weather Condition:"})," \xa0",s.condition&&Object.values(f.MW).find((function(e){return e.label===s.condition})).sync||"-",s.type===q.Ry.TEN_DAY&&(0,i.jsxs)("span",{children:[" (",s.rainfall,")"]})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Crop Stage(s):"})," ",s.stages.toString().split(",").join(", ")]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Activities:"})," ",s.activities.toString().split(",").join(", ")]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Created by:"})," ",s.updated_by]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("strong",{children:"Date created:"})," ",s.date_created]}),(0,i.jsxs)(m.Z,{variant:"caption",children:[(0,i.jsx)("strong",{children:"ID:"})," ",s.id]}),(0,i.jsx)(b.Z,{sx:{marginTop:"32px"}})]}),(0,i.jsxs)(y.ZP,{container:!0,style:{paddingTop:"10px"},children:[(0,i.jsxs)(y.ZP,{item:!0,xs:12,md:5,children:[(0,i.jsx)(m.Z,{variant:"h6",children:"Text-Form Crop Recommendation"}),(0,i.jsx)(g.Z,{children:(null===s||void 0===s?void 0:s.smsRecommendations)||(0,i.jsx)("span",{style:{color:"#ff1744"},children:"No SMS Recommendations available."})})]}),(0,i.jsxs)(y.ZP,{item:!0,xs:12,md:7,children:[(0,i.jsx)(m.Z,{variant:"h6",children:"List of Contacts"}),n.loading?(0,i.jsx)("div",{children:"Loading phonebook..."}):""!==n.error?(0,i.jsx)("div",{children:n.error}):t.length>0?(0,i.jsxs)("div",{children:[(0,i.jsx)(h.Z,{children:(0,i.jsxs)(m.Z,{variant:"body2",children:["These are your contacts that you can send the recommendation thru SMS.",(0,i.jsx)("br",{}),"Need to change some of your contacts? Click"," ",(0,i.jsx)("span",{onClick:R,style:G.Z.customizedButtonLink,children:"here"}),"."]})}),(0,i.jsxs)("div",{style:{height:"400px",width:"100%",paddingTop:"10px"},children:[(0,i.jsx)(h.Z,{sx:{marginBottom:"10px"},children:(0,i.jsx)(j.Z,{id:"outlined-basic",label:"Search...",variant:"outlined",size:"small",onChange:function(e){var n,r,o=e.target.value;if(""===e.target.value)S(t);else{var i=(n=t,r=o,X().filter(n,X().flow(X().identity,X().values,X().join,X().toLower,X().partialRight(X().includes,r))));S(i)}},style:{width:"100%"}})}),(0,i.jsx)(w._,{style:{maxHeight:"350px"},rows:p,columns:ee,pageSize:5,rowsPerPageOptions:[5],checkboxSelection:!0,onSelectionModelChange:function(e){return E(e)}})]})]}):(0,i.jsx)("div",{children:(0,i.jsxs)(m.Z,{variant:"subtitle1",children:["No contacts yet. Please add contacts first in your Phonebook\xa0",(0,i.jsx)("span",{onClick:R,style:G.Z.customizedButtonLink,children:"here"}),"."]})})]})]})]}):(0,i.jsx)(I.Z,{})})};function ne(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}function re(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){ne(i,r,o,c,a,"next",e)}function a(e){ne(i,r,o,c,a,"throw",e)}c(void 0)}))}}function oe(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ie(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){oe(e,t,n[t])}))}return e}var ce={loading:!0,error:"",info:"",sending:!1};var ae=(0,s.Z)((function(e){var t=(0,c.useState)(ce),n=t[0],r=t[1],s=(0,c.useState)(ce),h=s[0],m=s[1],x=(0,c.useState)([]),v=x[0],b=x[1],y=(0,a.useRouter)();return(0,c.useEffect)((function(){if(n.loading&&Object.keys(y.query).length>0&&null!==e.user){var t=function(){var e=re(o().mark((function e(){var t,n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,u.QL)(y.query.docId);case 3:t=e.sent,n=t.date_created.toDate(),t.date_created="".concat(n.toDateString()," ").concat(n.toLocaleTimeString("it-IT",p.W6)),r((function(e){return ie({},e,{loading:!1},t)})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),r(ie({},ce,{loading:!1,error:e.t0.message}));case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=re(o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(ie({},ce,{loading:!0})),e.next=4,(0,l.K2)();case 4:t=e.sent,b((function(e){return t})),m((function(e){return ie({},e,{loading:!1})})),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),r((function(t){return ie({},ce,{loading:!1,error:e.t0.message})})),m((function(t){return ie({},ce,{loading:!1,error:e.t0.message})}));case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}();t(),i()}}),[y,n.loading,e.user]),(0,i.jsx)(d.Z,{loading:e.loading,user:e.user,onBtnLogoutClick:e.onBtnLogoutClick,accLevel:f.DW.ADMIN,children:(0,i.jsx)(te,{setReport:r,report:n,loading:e.loading,contacts:v,contactsState:h,onBackBtnClick:function(){y.push("/admin/sms/")}})})}))},40558:function(e,t,n){"use strict";n.d(t,{rE:function(){return w},GK:function(){return O},mP:function(){return S},K2:function(){return C}});var r=n(34051),o=n.n(r),i=n(9669),c=n.n(i),a=n(99431);function s(e,t,n,r,o,i,c){try{var a=e[i](c),s=a.value}catch(u){return void n(u)}a.done?t(s):Promise.resolve(s).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function c(e){s(i,r,o,c,a,"next",e)}function a(e){s(i,r,o,c,a,"throw",e)}c(void 0)}))}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){f(e,t,n[t])}))}return e}function m(e,t){return!t||"object"!==v(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e,t){return x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},x(e,t)}var v=function(e){return e&&"undefined"!==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=p(e);if(t){var o=p(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return m(this,n)}}var y={BASE_API_URL:"https://amia-cis-y26e.onrender.com/api",CREATE_CONTACT:"".concat("https://amia-cis-y26e.onrender.com/api","/contact"),DELETE_CONTACT:"".concat("https://amia-cis-y26e.onrender.com/api","/contact"),EDIT_CONTACT:"".concat("https://amia-cis-y26e.onrender.com/api","/contact"),GET_CONTACTS:"".concat("https://amia-cis-y26e.onrender.com/api","/contacts"),PHONEBOOK:"phonebook"},g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(a,e);var t,n,r,i=b(a);function a(){return l(this,a),i.apply(this,arguments)}return t=a,(n=[{key:"createContact",value:function(e){var t=this;return u(o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,c()(h({},r,{url:y.CREATE_CONTACT,method:"POST"}));case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))()}},{key:"deleteContact",value:function(e){var t=this;return u(o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,c()(h({},r,{url:y.DELETE_CONTACT,method:"DELETE"}));case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))()}},{key:"editContact",value:function(e){var t=this;return u(o().mark((function n(){var r,i;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.createRequestObject({body:e});case 2:return r=n.sent,n.next=5,c()(h({},r,{url:y.EDIT_CONTACT,method:"PATCH"}));case 5:return i=n.sent,n.abrupt("return",i.data);case 7:case"end":return n.stop()}}),n)})))()}},{key:"getContacts",value:function(){var e=this;return u(o().mark((function t(){var n,r;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.createRequestObject({});case 2:return n=t.sent,t.next=5,c()(h({},n,{url:y.GET_CONTACTS,method:"GET"}));case 5:return r=t.sent,t.abrupt("return",r.data.contacts);case 7:case"end":return t.stop()}}),t)})))()}}])&&d(t.prototype,n),r&&d(t,r),a}(a.Z),j=new g,w=j.createContact.bind(j),O=j.deleteContact.bind(j),S=j.editContact.bind(j),C=j.getContacts.bind(j)}},function(e){e.O(0,[3662,6284,2866,9964,9522,1903,6279,6295,4039,2882,3539,6215,1050,9774,2888,179],(function(){return t=5835,e(e.s=t);var t}));var t=e.O();_N_E=t}]);