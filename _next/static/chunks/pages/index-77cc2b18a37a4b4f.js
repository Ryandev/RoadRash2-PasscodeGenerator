(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1570:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var a=t(1057),r=t(6242),i=t(7357),l=t(4942),s=t(7294),o=t(6886),c=t(5113),u=t(3841),d=t(7925),v=t(5819),h=t(6666),f=t(5893);var b=function(e){var n="dropdown-inputlabel-".concat(e.name);return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(u.Z,{id:n,children:e.name}),(0,f.jsx)(h.Z,{labelId:n,id:"".concat(n,"-select"),value:e.selected,label:e.name,style:{width:"100%"},onChange:function(n){return e.onSelect(n.target.value)},children:e.elements.map((function(e){return(0,f.jsx)(v.Z,{value:e,children:e.toString()},e)}))})]})},x=["Shuriken 400","Panda 500","Shuriken TT 250","Panda 900","Banzai 7.11","Banzai 600 N","Banzai 750 N","Shuriken 1000 N","Banzai 7.11 N","Diablo 1000 N","Panda 600","Banzai 600","Banzai 750","Shuriken 1000","Diablo 1000","Wild Thing 2000"],m={all:function(){return x},atIndex:function(e){return x[e]},atValue:function(e){return x.indexOf(e)}};var p=function(e){return(0,f.jsx)(b,{elements:m.all(),selected:m.atIndex(e.value),name:"Bike",onSelect:function(n){return e.onChange(m.atValue(n))}})},j=[1,2,3,4,5],g={all:function(){return j},atIndex:function(e){return j[e]},atValue:function(e){return j.indexOf(e)}};var w=function(e){return(0,f.jsx)(b,{elements:g.all(),selected:e.value,name:"Level",onSelect:function(n){return e.onChange(n)}})};var k,O,L=function(e){return(0,f.jsx)(d.Z,{style:{width:"100%"},type:"number",id:"standard-basic",prefix:"$",value:e.value.toString(),variant:"outlined",onChange:function(n){return e.onChange(parseInt(n.target.value))}})},P=t(6420),Z=t(7036);!function(e){e[e.Alaska=1]="Alaska",e[e.Arizona=2]="Arizona",e[e.Tennessee=3]="Tennessee",e[e.Vermont=4]="Vermont",e[e.Hawaii=5]="Hawaii"}(O||(O={}));var y=(k={},(0,l.Z)(k,O.Alaska,"Alaska"),(0,l.Z)(k,O.Arizona,"Arizona"),(0,l.Z)(k,O.Tennessee,"Tennessee"),(0,l.Z)(k,O.Vermont,"Vermont"),(0,l.Z)(k,O.Hawaii,"Hawaii"),k);function A(e){return(0,f.jsxs)(P.Z,{size:"small",onChange:function(n){var t;return null===(t=e.onChange)||void 0===t?void 0:t.call(e,!0)},value:e.qualifier,selected:e.selected,children:[y[e.qualifier],(0,f.jsx)(Z.Z,{})]})}function C(e){return e<10?String.fromCharCode("0".charCodeAt(0)+e):String.fromCharCode("A".charCodeAt(0)+e-10)}var z={result:{level:0,cash:0,bike:0,beatenLevelAlaska:!1,beatenLevelHawaii:!1,beatenLevelTennessee:!1,beatenLevelArizona:!1,beatenLevelVermont:!1},error:"Invalid passcode. too short",isValid:!1},S={result:{level:0,cash:0,bike:0,beatenLevelAlaska:!1,beatenLevelHawaii:!1,beatenLevelTennessee:!1,beatenLevelArizona:!1,beatenLevelVermont:!1},error:"Invalid passcode. too long",isValid:!1};var V={encode:function(e){var n=[],t=e.cash/10,a=t+(t>>4)+(t>>8)+(t>>12)+e.bike&15,r=(61440&t)>>12&15,i=(3840&t)>>8&15,l=(240&t)>>4&15,s=(15&t)>>0&15;return n[0]=r<<1,n[1]=i<<1|a>>0&1,n[2]=l<<1|a>>1&1,n[3]=s<<1|a>>2&1,n[4]=e.level,n[5]=e.bike<<1|a>>3&1,n[6]=(e.beatenLevelAlaska?1:0)|(e.beatenLevelHawaii?2:0)|(e.beatenLevelTennessee?4:0)|(e.beatenLevelArizona?8:0)|(e.beatenLevelVermont?16:0)|0,n[7]=31&(n[0]+n[1]+n[2]+n[3]+n[4]+n[5]^n[6]),n.slice(0,4).map((function(e){return C(e)})).join("")+" "+n.slice(4).map((function(e){return C(e)})).join("")},decode:function(e){if(e.length<9)return z;if(e.length>9)return S;var n=[];e.split("").forEach((function(e){var t;" "!==e&&n.push((t=e)<"A"?t.charCodeAt(0)-"0".charCodeAt(0):t.charCodeAt(0)-"A".charCodeAt(0)+10)}));var t=n[0]+n[1]+n[2]+n[3]+n[4]+n[5]^n[6],a=n[7],r=(31&a)==(31&t)&&a>0;return{result:{level:7&n[4],cash:10*(n[0]<<11&61440|n[1]<<7&3840|n[2]<<3&240|n[3]>>1&15),bike:n[5]>>1&15,beatenLevelAlaska:!!(1&n[6]),beatenLevelHawaii:!!(2&n[6]),beatenLevelTennessee:!!(4&n[6]),beatenLevelArizona:!!(8&n[6]),beatenLevelVermont:!!(16&n[6])},error:r?"":"Invalid passcode. Checksum mismatch: expected,actual ".concat(a,",").concat(t),isValid:r}},firstBootState:function(){return{level:1,bike:0,cash:1e3,beatenLevelAlaska:!1,beatenLevelArizona:!1,beatenLevelHawaii:!1,beatenLevelTennessee:!1,beatenLevelVermont:!1}}};function T(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function I(e,n,t){return Math.min(Math.max(e,n),t)}var E=function(e){var n=function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?T(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e);return n.cash=I(n.cash,0,327670),n.bike=I(n.cash,0,15),n.level=I(n.level,1,5),n};var H=function(e){var n=[];return e.cash>327670&&n.push("Cash value exceeds maximum. Will be capped at $327,670"),e.bike>15&&n.push("Invalid Bike, cannot exceed 15"),e.level>6&&n.push("Invalid level, cannot exceed 6"),e.beatenLevelAlaska&&e.beatenLevelArizona&&e.beatenLevelTennessee&&e.beatenLevelVermont&&e.beatenLevelHawaii&&n.push("Cannot set all stages. It will not be accepted by game. Please untick 1 stage"),{isValid:0==n.length,info:n.join(", ")}};function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function D(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){(0,l.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var B=function(){var e=(0,s.useState)(V.firstBootState()),n=e[0],t=e[1],a=(0,s.useState)(V.encode(n)),r=a[0],i=a[1],l=(0,s.useState)(""),v=l[0],h=l[1];(0,s.useEffect)((function(){i(V.encode(E(n))),h(H(n).info)}),[n]);var b=function(e){t((function(n){return D(D({},n),e)}))};return(0,f.jsxs)(o.ZP,{container:!0,spacing:{xs:2,md:3},columns:{xs:3,sm:5},style:{padding:"10px"},children:[(0,f.jsx)(o.ZP,{item:!0,xs:3,sm:3,children:(0,f.jsx)(c.Z,{children:(0,f.jsx)(p,{value:n.bike,onChange:function(e){return b({bike:e})}})})}),(0,f.jsx)(o.ZP,{item:!0,xs:3,sm:2,children:(0,f.jsx)(c.Z,{children:(0,f.jsx)(w,{value:n.level,onChange:function(e){return b({level:e})}})})}),(0,f.jsx)(o.ZP,{item:!0,xs:3,sm:5,children:(0,f.jsxs)(c.Z,{children:[(0,f.jsx)(u.Z,{id:"idLabel1",children:"Cash"}),(0,f.jsx)(L,{value:n.cash,onChange:function(e){return b({cash:e})}})]})}),(0,f.jsx)(o.ZP,{item:!0,xs:1,sm:1,px:4,children:(0,f.jsx)(A,{qualifier:O.Alaska,selected:n.beatenLevelAlaska})}),(0,f.jsx)(o.ZP,{item:!0,xs:1,sm:1,children:(0,f.jsx)(A,{qualifier:O.Arizona,selected:n.beatenLevelArizona})}),(0,f.jsx)(o.ZP,{item:!0,xs:1,sm:1,children:(0,f.jsx)(A,{qualifier:O.Hawaii,selected:n.beatenLevelHawaii})}),(0,f.jsx)(o.ZP,{item:!0,xs:1,sm:1,children:(0,f.jsx)(A,{qualifier:O.Tennessee,selected:n.beatenLevelTennessee})}),(0,f.jsx)(o.ZP,{item:!0,xs:1,sm:1,children:(0,f.jsx)(A,{qualifier:O.Vermont,selected:n.beatenLevelVermont})}),(0,f.jsx)(o.ZP,{item:!0,xs:12,children:(0,f.jsx)(d.Z,{error:v.length>0,helperText:v,id:"standard-basic1",label:"Passcode",value:r,variant:"filled",style:{pointerEvents:"none",width:"100%"}})})]})},N=t(7431),q=t(5861);function R(){return(0,f.jsxs)(a.Z,{style:{position:"fixed",bottom:"10px",right:"10px",zIndex:1},variant:"contained",color:"primary",onClick:function(){return window.open("https://github.com/Ryandev/RoadRash2-PasscodeGenerator")},children:[(0,f.jsx)(q.Z,{children:"About"}),(0,f.jsx)(N.Z,{fontSize:"small"})]})}var F=function(){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(R,{}),(0,f.jsx)(i.Z,{style:{margin:"0px",width:"100vw",height:"100vh",padding:"2vmin",backgroundColor:"#D6ECFF",justifyContent:"center"},children:(0,f.jsxs)(r.Z,{raised:!0,style:{maxWidth:"580px"},children:[(0,f.jsx)(i.Z,{padding:2,children:(0,f.jsx)(q.Z,{variant:"h6",children:"Road Rash II Passcode Generator"})}),(0,f.jsx)(B,{})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1570)}])}},function(e){e.O(0,[774,344,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);