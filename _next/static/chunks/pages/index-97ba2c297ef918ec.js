(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(8015)}])},8015:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return G}});var a=t(5893),r=t(1057),i=t(7431),l=t(5861);var o=function(e){return(0,a.jsxs)(r.Z,{style:e.style,variant:"contained",color:"primary",onClick:function(){return window.open(e.href)},children:[(0,a.jsx)(l.Z,{children:e.text}),(0,a.jsx)(i.Z,{fontSize:"small"})]})},s=t(7294),c=t(6242),u=t(7357),d={width:"100vw",height:"100vh",padding:"2vmin",backgroundColor:"#D6ECFF",justifyContent:"center",boxSizing:"border-box",margin:"auto",display:"table-cell",verticalAlign:"middle"};var v=function(e){return(0,a.jsx)(u.Z,{sx:d,children:(0,a.jsx)(c.Z,{raised:!0,sx:{maxWidth:e.maxWidth,margin:"auto"},children:e.children})})},h=t(6886),f=t(5113),b=t(3841),x=t(7925),m=t(5819),j=t(6666);var g=function(e){var n="dropdown-inputlabel-".concat(e.name);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(b.Z,{id:n,children:e.name}),(0,a.jsx)(j.Z,{labelId:n,id:"".concat(n,"-select"),value:e.selected,label:e.name,style:{width:"100%"},onChange:function(n){return e.onSelect(n.target.value)},children:e.elements.map((function(e){return(0,a.jsx)(m.Z,{value:e,children:e.toString()},e)}))})]})},p=["Shuriken 400","Panda 500","Shuriken TT 250","Panda 900","Banzai 7.11","Banzai 600 N","Banzai 750 N","Shuriken 1000 N","Banzai 7.11 N","Diablo 1000 N","Panda 600","Banzai 600","Banzai 750","Shuriken 1000","Diablo 1000","Wild Thing 2000"],w={all:function(){return p},atIndex:function(e){return p[e]},atValue:function(e){return p.indexOf(e)}};var L=function(e){return(0,a.jsx)(g,{elements:w.all(),selected:w.atIndex(e.value),name:"Bike",onSelect:function(n){return e.onChange(w.atValue(n))}})},k=[1,2,3,4,5],A={all:function(){return k},atIndex:function(e){return k[e]},atValue:function(e){return k.indexOf(e)}};var C=function(e){return(0,a.jsx)(g,{elements:A.all(),selected:e.value,name:"Level",onSelect:function(n){return e.onChange(n)}})};var Z,y,P=function(e){return(0,a.jsx)(x.Z,{style:{width:"100%"},type:"number",id:"standard-basic",prefix:"$",value:e.value.toString(),variant:"outlined",onChange:function(n){return e.onChange(parseInt(n.target.value))}})},S=t(6420),z=t(7036),O=t(3343);function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}!function(e){e[e.Alaska=1]="Alaska",e[e.Arizona=2]="Arizona",e[e.Tennessee=3]="Tennessee",e[e.Vermont=4]="Vermont",e[e.Hawaii=5]="Hawaii"}(Z||(Z={}));var T=(V(y={},Z.Alaska,"Alaska"),V(y,Z.Arizona,"Arizona"),V(y,Z.Tennessee,"Tennessee"),V(y,Z.Vermont,"Vermont"),V(y,Z.Hawaii,"Hawaii"),y);var I=function(e){return(0,a.jsxs)(S.Z,{size:"small",onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!e.selected)},value:e.qualifier,sx:{width:"100%",textOverflow:"clip",whiteSpace:"nowrap",overflow:"hidden",textAlign:"left"},selected:e.selected,children:[(0,a.jsx)("span",{children:T[e.qualifier]}),e.selected?(0,a.jsx)(z.Z,{}):(0,a.jsx)(O.Z,{})]})};function H(e){return e<10?String.fromCharCode("0".charCodeAt(0)+e):String.fromCharCode("A".charCodeAt(0)+e-10)}var _={result:{level:0,cash:0,bike:0,beatenLevelAlaska:!1,beatenLevelHawaii:!1,beatenLevelTennessee:!1,beatenLevelArizona:!1,beatenLevelVermont:!1},error:"Invalid passcode. too short",isValid:!1},E={result:{level:0,cash:0,bike:0,beatenLevelAlaska:!1,beatenLevelHawaii:!1,beatenLevelTennessee:!1,beatenLevelArizona:!1,beatenLevelVermont:!1},error:"Invalid passcode. too long",isValid:!1};var B={encode:function(e){var n=[],t=e.cash/10,a=t+(t>>4)+(t>>8)+(t>>12)+e.bike&15,r=(61440&t)>>12&15,i=(3840&t)>>8&15,l=(240&t)>>4&15,o=(15&t)>>0&15;return n[0]=r<<1,n[1]=i<<1|a>>0&1,n[2]=l<<1|a>>1&1,n[3]=o<<1|a>>2&1,n[4]=e.level,n[5]=e.bike<<1|a>>3&1,n[6]=(e.beatenLevelAlaska?1:0)|(e.beatenLevelHawaii?2:0)|(e.beatenLevelTennessee?4:0)|(e.beatenLevelArizona?8:0)|(e.beatenLevelVermont?16:0)|0,n[7]=31&(n[0]+n[1]+n[2]+n[3]+n[4]+n[5]^n[6]),n.slice(0,4).map((function(e){return H(e)})).join("")+" "+n.slice(4).map((function(e){return H(e)})).join("")},decode:function(e){if(e.length<9)return _;if(e.length>9)return E;var n=[];e.split("").forEach((function(e){var t;" "!==e&&n.push((t=e)<"A"?t.charCodeAt(0)-"0".charCodeAt(0):t.charCodeAt(0)-"A".charCodeAt(0)+10)}));var t=n[0]+n[1]+n[2]+n[3]+n[4]+n[5]^n[6],a=n[7],r=(31&a)==(31&t)&&a>0;return{result:{level:7&n[4],cash:10*(n[0]<<11&61440|n[1]<<7&3840|n[2]<<3&240|n[3]>>1&15),bike:n[5]>>1&15,beatenLevelAlaska:!!(1&n[6]),beatenLevelHawaii:!!(2&n[6]),beatenLevelTennessee:!!(4&n[6]),beatenLevelArizona:!!(8&n[6]),beatenLevelVermont:!!(16&n[6])},error:r?"":"Invalid passcode. Checksum mismatch: expected,actual ".concat(a,",").concat(t),isValid:r}},firstBootState:function(){return{level:1,bike:0,cash:1e3,beatenLevelAlaska:!1,beatenLevelArizona:!1,beatenLevelHawaii:!1,beatenLevelTennessee:!1,beatenLevelVermont:!1}}};function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function q(e,n,t){return Math.min(Math.max(e,n),t)}var D=function(e){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){N(e,n,t[n])}))}return e}({},e);return n.cash=q(n.cash,0,327670),n.bike=q(n.bike,0,15),n.level=q(n.level,1,5),n};var R=function(e){var n=[];return e.cash>327670&&n.push("Cash value exceeds maximum. Will be capped at $327,670"),e.bike>15&&n.push("Invalid Bike, cannot exceed 15"),e.level>6&&n.push("Invalid level, cannot exceed 6"),e.beatenLevelAlaska&&e.beatenLevelArizona&&e.beatenLevelTennessee&&e.beatenLevelVermont&&e.beatenLevelHawaii&&n.push("Cannot set all stages. It will not be accepted by game. Please untick 1 stage"),{isValid:0==n.length,info:n.join(", ")}};function W(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var F=function(){var e=(0,s.useState)(B.firstBootState()),n=e[0],t=e[1],r=(0,s.useState)(B.encode(n)),i=r[0],o=r[1],c=(0,s.useState)(""),d=c[0],v=c[1];(0,s.useEffect)((function(){o(B.encode(D(n))),v(R(n).info)}),[n]);var m=function(e){t((function(n){return function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){W(e,n,t[n])}))}return e}({},n,e)}))};return(0,a.jsxs)(h.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:3,sm:5},sx:{padding:"10px",margin:"auto"},children:[(0,a.jsx)(h.ZP,{item:!0,xs:3,children:(0,a.jsx)(u.Z,{padding:2,children:(0,a.jsx)(l.Z,{variant:"h6",children:"Road Rash II Passcode Generator"})})}),(0,a.jsx)(h.ZP,{item:!0,xs:3,sm:3,children:(0,a.jsx)(f.Z,{style:{boxShadow:"none"},children:(0,a.jsx)(L,{value:n.bike,onChange:function(e){return m({bike:e})}})})}),(0,a.jsx)(h.ZP,{item:!0,xs:3,sm:2,children:(0,a.jsx)(f.Z,{sx:{boxShadow:"none"},children:(0,a.jsx)(C,{value:n.level,onChange:function(e){return m({level:e})}})})}),(0,a.jsx)(h.ZP,{item:!0,xs:3,sm:5,children:(0,a.jsxs)(f.Z,{sx:{boxShadow:"none"},children:[(0,a.jsx)(b.Z,{children:"Cash"}),(0,a.jsx)(P,{value:n.cash,onChange:function(e){return m({cash:e})}})]})}),(0,a.jsx)(h.ZP,{item:!0,xs:1,sm:1,children:(0,a.jsx)(I,{qualifier:Z.Alaska,selected:n.beatenLevelAlaska,onChange:function(e){return m({beatenLevelAlaska:e})}})}),(0,a.jsx)(h.ZP,{item:!0,xs:1,sm:1,children:(0,a.jsx)(I,{qualifier:Z.Arizona,selected:n.beatenLevelArizona,onChange:function(e){return m({beatenLevelArizona:e})}})}),(0,a.jsx)(h.ZP,{item:!0,xs:1,sm:1,children:(0,a.jsx)(I,{qualifier:Z.Hawaii,selected:n.beatenLevelHawaii,onChange:function(e){return m({beatenLevelHawaii:e})}})}),(0,a.jsx)(h.ZP,{item:!0,xs:2,sm:1,children:(0,a.jsx)(I,{qualifier:Z.Tennessee,selected:n.beatenLevelTennessee,onChange:function(e){return m({beatenLevelTennessee:e})}})}),(0,a.jsx)(h.ZP,{item:!0,xs:1,sm:1,children:(0,a.jsx)(I,{qualifier:Z.Vermont,selected:n.beatenLevelVermont,onChange:function(e){return m({beatenLevelVermont:e})}})}),(0,a.jsx)(h.ZP,{item:!0,xs:12,children:(0,a.jsx)(x.Z,{error:d.length>0,helperText:d,label:"Passcode",value:i,variant:"filled",sx:{pointerEvents:"none",width:"100%"}})})]})};var G=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(o,{text:"About",href:"https://github.com/Ryandev/RoadRash2-PasscodeGenerator",style:{position:"fixed",bottom:"10px",right:"10px",zIndex:1}}),(0,a.jsx)(v,{maxWidth:"580px",children:(0,a.jsx)(F,{})})]})}}},function(e){e.O(0,[774,957,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);