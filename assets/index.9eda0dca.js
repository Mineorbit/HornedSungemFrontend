var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,l=Object.prototype.propertyIsEnumerable,a=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,r=(e,r)=>{for(var o in r||(r={}))t.call(r,o)&&a(e,o,r[o]);if(n)for(var o of n(r))l.call(r,o)&&a(e,o,r[o]);return e},o=(e,a)=>{var r={};for(var o in e)t.call(e,o)&&a.indexOf(o)<0&&(r[o]=e[o]);if(null!=e&&n)for(var o of n(e))a.indexOf(o)<0&&l.call(e,o)&&(r[o]=e[o]);return r};import{r as c,B as m,T as s,u,I as i,a as d,b as E,F as p,c as h,d as g,H as b,L as f,e as v,f as w,A as y,g as C,R as k,h as L,i as j,N as _,j as S,S as O,k as x,l as M,m as N,n as F,G as R,M as T,o as z,p as P,q as A,s as H,t as U}from"./vendor.a79c7438.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const l=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,r)=>{const o=new URL(e,l);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const c=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),m=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(c),onerror(){r(new Error(`Failed to import: ${e}`)),a(m)},onload(){n(self[t].moduleMap[o]),a(m)}});document.head.appendChild(m)})),self[t].moduleMap={}}}("assets/");const V=c.createContext(null),Z=e=>c.createElement(m,{width:"medium"},c.createElement(c.Fragment,null,null!==e.chosenModule?c.createElement(c.Fragment,null,c.createElement("h2",null,e.chosenModule.name),c.createElement("p",null,e.chosenModule.self_study)):c.createElement("div",null))),B=({children:e,module:t})=>c.createElement(m,{pad:"small",round:"small",background:"#F2F2F2",direction:"row",gap:"none",justify:"between"},c.createElement(m,{width:"medium",justify:"center"},c.createElement(s,{color:"brand",weight:"bold"},t.name)),c.createElement(m,null,e)),$=({children:e,label:t})=>c.createElement(m,{round:!0,align:"center",direction:"column",pad:"xsmall",alignSelf:"start"},c.createElement(s,{weight:"bold",color:"brand",size:"large"},e),c.createElement(s,{color:"brand",size:"small"},t)),q=({children:e})=>c.createElement($,{label:"CP"},e),D=({children:e})=>c.createElement($,{label:"Semester"},e),I=({module:e})=>c.createElement(m,{direction:"row",justify:"center",gap:"small",height:{min:"auto"},wrap:!0},c.createElement(D,null,e.cycle),c.createElement(q,null,e.cp)),G=e=>{let t=u();return c.createElement(m,{width:"large",overflow:"auto"},c.createElement(i,{items:Object.values(e.modules),step:10},(n=>c.createElement(m,{flex:!1,onMouseOver:()=>e.setChosenModule(n),height:"xsmall",className:"list__item",justify:"center",border:"bottom",onClick:()=>t.push("/module/"+n.id.replace("/","_"))},c.createElement(B,{module:n},c.createElement(I,{module:n}))))))},J=()=>c.createElement(m,{height:{min:"auto"}},"CP ",c.createElement(d,null),"Name ",c.createElement(d,null)),Q=()=>{const[e,t]=c.useState(null),n=c.useContext(V);return c.createElement(m,{direction:"row",border:"between",gap:"small",margin:"small"},c.createElement(m,null,c.createElement(J,null),c.createElement(G,{modules:n,setChosenModule:t})),c.createElement(Z,{chosenModule:e}))},W=()=>c.createElement("svg",{width:"180",height:"180",viewBox:"0 0 180 180",fill:"none",xmlns:"http://www.w3.org/2000/svg"},c.createElement("path",{d:"M60 60H120V120L60 60Z",fill:"#FF0048"}),c.createElement("path",{d:"M180 120L120 120L120 60L180 120Z",fill:"#642CA9"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M120 60H60V30L120 0L120 24.0078C119.901 24.0026 119.801 24 119.7 24C116.552 24 114 26.552 114 29.7C114 32.848 116.552 35.4 119.7 35.4C119.801 35.4 119.901 35.3974 120 35.3922L120 60Z",fill:"#642CA9"}),c.createElement("path",{d:"M120 120L180 120L180 180L120 120Z",fill:"#FF0048"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M60 30L0 60L60 60V30Z",fill:"#333333"}),c.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M120 35.3922V60L180 0L120 3.8147e-06V24.0078C123.009 24.1638 125.4 26.6526 125.4 29.7C125.4 32.7474 123.009 35.2362 120 35.3922Z",fill:"#FF0048"}));const Y=e=>{var{variant:t,outline:n}=e,l=o(e,["variant","outline"]);return c.createElement("button",r({type:"button",className:["button",`button--${t}`,n?"button--outline":null].join(" ")},l),l.children)};const K={url:"https://sungem.herokuapp.com/"};Object.freeze(K);const X=({setError:e,setLayerOpen:t,onRegister:n})=>{const[l,a]=c.useState(!1),[r,o]=E(["user"]);return c.createElement(p,{onChange:()=>{a(!1)},onSubmit:n=>{fetch(K.url+"api/login/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:n.value.username,password:n.value.password})}).then((e=>e.json())).then((l=>{"token"in l?(o("user",{username:n.value.username,token:l.token},{maxAge:604800,secure:!0}),t(!1)):(e(!0),a(!0),setTimeout((()=>e(!1)),350))}))}},c.createElement(h,{name:"username",required:!0},c.createElement(d,{id:"name-input-field",name:"username",placeholder:"Username"})),c.createElement(h,{name:"password",error:l&&"Wrong username or password",required:!0},c.createElement(d,{type:"password",id:"pw-input-field",name:"password",placeholder:"Password"})),c.createElement(m,{direction:"row",gap:"medium",justify:"center"},c.createElement(g,{type:"submit",primary:!0,label:"Login"}),c.createElement(g,{type:"button",label:"Register",onClick:n})))},ee=()=>c.createElement("div",null,"test"),te=({setLayerOpen:e})=>{const[t,n]=c.useState(!1),[l,a]=c.useState(!1);return c.createElement(m,{width:"medium",gap:"small",animation:t?{type:"jiggle",duration:200}:{type:"pulse",duration:-1},className:"login-modal"},c.createElement(m,{background:"brand",pad:{horizontal:"medium",top:"medium"}},c.createElement(b,{background:"brand"},"Login")),c.createElement(m,{pad:"medium"},l?c.createElement(ee,null):c.createElement(X,{setError:n,setLayerOpen:e,onRegister:()=>a(!0)})))},ne=()=>{const[e,t]=c.useState(!1);return c.createElement(m,null,c.createElement(g,{className:"navbar__item",activeClassName:"navbar__item--active",onClick:()=>{t(!0)}},c.createElement(f,null)),c.createElement(m,{background:"light-1"},e&&c.createElement(v,{onEsc:()=>t(!1),onClickOutside:()=>t(!1),position:"center",modal:!0,className:"login-modal-parent"},c.createElement(te,{setLayerOpen:t}))))},le=()=>{const[e,t]=c.useState(!1),[n]=E(["user"]);return c.createElement("div",{className:"page-index"},c.createElement("div",{className:"content"},c.createElement(W,null),c.createElement("h1",{className:"text--center"},"Sungem"),c.createElement("p",{className:"text--center text--no-margin"},"Hello wir sind 3 (maybe bald mehr) keks die so Modulstuff haben. Den Text darf wer anders schreiben.",c.createElement("br",null),"Hier beschreiben wir so was wir gemacht haben, was es bringt und wieso man sich nen Account machen sollte.",c.createElement("br",null),"By the way, das Logo ist temporär und das hab ich mir vom Materials Google Design stibitzt.",c.createElement("br",null),"Und eventuell par links zu den pages auf der Sidebar."),c.createElement(w,{to:"user"in n&&"/recommender/"},c.createElement(Y,{variant:"primary",onClick:()=>t(!0)},"Empfohlene Module ansehen")),c.createElement(w,{to:"/modules/"},c.createElement(Y,{variant:"primary",outline:!0},"Module durchsuchen ")),c.createElement(m,{background:"light-1"},e&&c.createElement(v,{onEsc:()=>t(!1),onClickOutside:()=>t(!1),position:"center",modal:!0,className:"login-modal-parent"},c.createElement(te,{setLayerOpen:t})))))};const ae=({module:e})=>c.createElement(m,null,c.createElement(y,{multiple:!0},c.createElement(re,{label:"Lerninhalt",content:e.content}),c.createElement(re,{label:"Qualifikationsziele / Lernergebnisse",content:e.results}),c.createElement(re,{label:"Voraussetzungen für die Teilnahme",content:e.requirements}),c.createElement(re,{label:"Prüfungsform",content:e.exam_form}))),re=({label:e,content:t})=>c.createElement(C,{label:e},c.createElement(m,{style:{whiteSpace:"pre-wrap"}},t||c.createElement(m,{style:{color:"#555"}},c.createElement("i",null,"this value is not set.")))),oe=({top:e,value:t,bottom:n})=>c.createElement(m,{direction:"column",justify:"start",alignContent:"center"},c.createElement(m,{align:"center"},e),c.createElement(m,{align:"center"},null!==t?t:"-"),c.createElement(m,{align:"center"},n)),ce=({module:e})=>c.createElement(m,{direction:"row",border:"between",gap:"small",height:{min:"auto"},justify:"center"},c.createElement(oe,{top:"Arbeitsaufwand",value:e.workload,bottom:"Stunden"}),c.createElement(oe,{top:"Selbststudium",value:e.self_study,bottom:"Stunden"}),c.createElement(oe,{top:"Moduldauer",value:e.duration,bottom:"Semester"}),c.createElement(oe,{top:"Sprache",value:e.language})),me=({module:e})=>c.createElement(c.Fragment,null,null!==e?c.createElement(m,{direction:"column",border:"between",gap:"small",pad:"small",basis:"1/2",height:{min:"auto"}},c.createElement(I,{module:e}),c.createElement(ce,{module:e}),c.createElement(ae,{module:e})):c.createElement(c.Fragment,null)),se=({module:e})=>{const t=u();return c.createElement(m,{direction:"column",background:"light-3",round:!0,align:"center",gap:"xsmall",height:{min:"5em"},width:"medium",justify:"center",pad:"small",onClick:()=>t.push("/module/"+e.id.replace("/","_")),elevation:"small",style:{minHeight:"auto"}},c.createElement(m,null,c.createElement("div",{style:{textAlign:"center"}},e.name)),c.createElement(I,{module:e}))},ue=({module_id:e})=>{const[t]=E(["user"]),[n,l]=c.useState(null);var a;return c.useEffect((()=>{"user"in t&&(console.log(t.user),fetch(K.url+"api/votes/",{credentials:"include",headers:new Headers({Authorization:"Token "+t.user.token,"Content-Type":"application/json"})}).then((e=>e.json())).then((t=>t.filter((t=>t[0].id==e.replace("_","/"))))).then((t=>{t.length>0?l(t[0][1]):l(0),console.log(e)})))}),[t,e]),c.useEffect((()=>{if("user"in t)return a=setTimeout((()=>{fetch(K.url+"api/vote/",{method:"POST",credentials:"include",headers:new Headers({Authorization:"Token "+t.user.token,"Content-Type":"application/json"}),body:JSON.stringify({score:n,module:e})})}),500),()=>{clearTimeout(a)}}),[n,t]),c.createElement(c.Fragment,null,null!=t&&null!=n&&c.createElement(k,{min:-5,max:5,value:n,onChange:e=>l(e.target.value)}))},ie=({module_id:e})=>{const[t,n]=c.useState([]),l=c.useContext(V),[a]=E(["user"]);return c.useEffect((()=>{n([]),fetch(K.url+"api/similar/"+e+"/").then((e=>e.json())).then((e=>n(e)))}),[e]),c.createElement(c.Fragment,null,l.length>0&&c.createElement(m,{direction:"column",border:"between",gap:"small"},null!=a.user&&c.createElement(ue,{module_id:e}),c.createElement(m,{gap:"small"},t.filter((t=>l[t].id.replace("/","_")!==e)).map(((e,t)=>c.createElement(se,{key:t,module:l[e]})))))," ")},de=()=>{let{module_id:e}=L();const[t,n]=c.useState(null);return c.useEffect((()=>{fetch(K.url+"api/module/"+e+"/").then((e=>e.json())).then((e=>n(e)))}),[e]),c.createElement(m,{direction:"column",basis:"full"},c.createElement(j,{background:"brand"},null!==t?c.createElement("h3",null,t.name," - ",t.id):c.createElement("h3",null,"Loading")),c.createElement(m,{direction:"row",border:"between",gap:"small",basis:"full"},c.createElement(me,{module:t}),c.createElement(ie,{module_id:e})))};const Ee=e=>{var{to:t,children:n}=e,l=o(e,["to","children"]);return c.createElement(_,r({exact:!0,to:t,className:"navbar__item",activeClassName:"navbar__item--active"},l),n)},pe=({setLayerOpen:e})=>{const[t,n,l]=E(["user"]);return c.createElement(m,{width:"medium",gap:"small",className:"login-modal"},c.createElement(m,{background:"brand",pad:{horizontal:"medium",top:"medium"}},c.createElement(b,{background:"brand"},"Logout?")),c.createElement(m,{pad:"medium"},c.createElement(m,{direction:"row",gap:"medium",justify:"center"},c.createElement(g,{type:"submit",primary:!0,label:"Confirm",onClick:()=>{l("user"),e(!1)}}),c.createElement(g,{type:"button",label:"Cancel",onClick:()=>e(!1)}))))},he=()=>{const[e,t]=c.useState(!1);return c.createElement(m,null,c.createElement(g,{className:"navbar__item",activeClassName:"navbar__item--active",onClick:()=>{t(!0)}},c.createElement(S,null)),c.createElement(m,{background:"light-1"},e&&c.createElement(v,{onEsc:()=>t(!1),onClickOutside:()=>t(!1),position:"center",modal:!0,className:"login-modal-parent"},c.createElement(pe,{setLayerOpen:t}))))},ge=()=>{const[e]=E(["user"]);return c.createElement(O,{className:"navbar",background:"accent-1",footer:"user"in e?c.createElement(he,null):c.createElement(ne,null)},c.createElement(x,{gap:"small"},c.createElement(Ee,{to:"/"},c.createElement(M,null)),c.createElement(Ee,{to:"/modules/"},c.createElement(N,null)),"user"in e&&c.createElement(Ee,{to:"/recommender/"},c.createElement(F,null))))},be=()=>{const[e]=E(["user"]),[t,n]=c.useState([]);return c.useEffect((()=>{"user"in e&&fetch(K.url+"api/recommend/",{credentials:"include",headers:new Headers({Authorization:"Token "+e.user.token,"Content-Type":"application/json"})}).then((e=>e.json())).then(n)}),[e]),console.log("cookies",e),c.createElement(c.Fragment,null,"user"in e?c.createElement(m,{direction:"column",basis:"full"},c.createElement(m,{background:"brand",pad:"small"},c.createElement(b,null,"Recommended modules for ",c.createElement("i",null,e.user.username))),c.createElement(m,{direction:"row"},c.createElement(m,{width:"large"},c.createElement(R,{gap:"small",columns:"small"},t.map(((e,t)=>c.createElement(se,{module:e,key:t}))))),c.createElement(m,null,"Hier so Details later"))):c.createElement(m,{justify:"center",width:"full",align:"center"},"You need to log in to access this resource."))};function fe(){const[e,t]=c.useState([]);return c.useEffect((()=>{fetch(K.url+"api/modules/").then((e=>e.json())).then((e=>t(e)))}),[]),c.createElement(T,null,c.createElement(V.Provider,{value:e},c.createElement(m,{direction:"row",basis:"full"},c.createElement(z,null,c.createElement(ge,null),c.createElement(P,null,c.createElement(A,{component:Q,path:"/modules/"}),c.createElement(A,{component:de,path:"/module/:module_id"}),c.createElement(A,{component:be,path:"/recommender/"}),c.createElement(A,{component:le,path:"/"}))))))}var ve={name:"horned-sungem",rounding:8,spacing:16,defaultMode:"light",global:{colors:{brand:{dark:"#642ca9",light:"#642ca9"},"accent-1":{dark:"#ff0048",light:"#ff0048"},control:"brand","active-background":"background-contrast","active-text":"text-strong","selected-background":"brand","selected-text":"text-strong","status-critical":"#ff0000","status-warning":"#f56600","status-ok":"#009934","status-unknown":"#CCCCCC","status-disabled":"#CCCCCC","graph-0":"brand","graph-1":"status-warning",focus:"brand"},focus:{shadow:{size:"1px"}}},font:{family:"Lato"}};H.render(c.createElement(c.StrictMode,null,c.createElement(U,{full:!0,theme:ve},c.createElement(fe,null))),document.getElementById("root"));
