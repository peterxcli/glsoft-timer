(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(1993)}])},1993:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return S}});var o=e(5893),r=e(9008),c=e.n(r),i=e(7294),s=e(4529);let l=n=>({time:0,idle:!0,countDown:!1,timeUnit:20,setTime:t=>n({time:t}),incrementTime:t=>n(n=>({time:Math.max(n.time+t,0)})),toggleCountDown:()=>n(n=>({countDown:!n.countDown})),toggleIdle:()=>n(n=>({idle:!n.idle})),setCountDown:t=>n({countDown:t}),reset:()=>n({time:0,idle:!0,countDown:!1})}),a=(0,s.Ue)()(function(){for(var n=arguments.length,t=Array(n),e=0;e<n;e++)t[e]=arguments[e];return{...l(...t)}});var u=e(983),_=e.n(u),d=e(3020);let m=()=>{let{time:n,idle:t,countDown:e,incrementTime:r,setTime:c,setCountDown:s,toggleCountDown:l,toggleIdle:u,timeUnit:m}=a(),f=(0,d.useDrag)(t=>{let{down:e,last:o,movement:[c,i],memo:l}=t;if(o&&0===i){u();return}console.log(e,o,i,l),l=null!=l?l:i;let a=i-l;return console.log(a),r(1e3*Math.ceil(-a)/m),0==n&&s(!1),i});return(0,i.useEffect)(()=>{let n=setInterval(()=>{t||r(e?-m:m)},m);return()=>{clearInterval(n)}},[t,e,r,m]),(0,o.jsx)("div",{className:_().timer,...f(),children:(n=>{let t;t=n/1e3<60?new Date(n).toISOString().substring(17,19):n/1e3<3600?new Date(n).toISOString().substring(14,19):new Date(n).toISOString().substring(11,19);let e=t.split(":"),o=[];return e.forEach((n,t)=>{o.push(0==t?parseInt(n).toString():n)}),t=o.join(":")})(n)})};var f=e(7281),g=e.n(f),w=e(5583),x=e.n(w),p=e(5675),h=e.n(p);let k=()=>{let{time:n,idle:t,countDown:e,incrementTime:r,setTime:c,setCountDown:i,toggleCountDown:s,toggleIdle:l}=a(),u=t=>{if(t.stopPropagation(),0==n){i(!1);return}s()};return(0,o.jsx)("div",{className:"".concat(x().arrow),children:(0,o.jsx)(h(),{className:"arrow-icon ".concat(e?x().down:x().up),onClick:u,src:"/glsoft-timer/arrow-icon.png",alt:"arrow",fill:!0})})};var j=e(6928),v=e.n(j);let N=()=>{let{reset:n}=a(),t=t=>{t.stopPropagation(),n()};return(0,o.jsx)("div",{className:"".concat(v().cross),children:(0,o.jsx)(h(),{className:"".concat(v()["cross-icon"]),onClick:t,src:"/glsoft-timer/cross-icon.png",alt:"arrow",fill:!0})})};var I=e(6949),D=e.n(I);let E=()=>{let{countDown:n,reset:t,idle:e,time:r}=a();return(0,o.jsx)("div",{className:"".concat(D().clock),children:(0,o.jsx)("div",{style:{transform:"rotate(".concat(r/5,"deg)"),transition:"transform 0s ease-out, background-color 0s linear"},className:"".concat(D()["clock-icon"]),children:(0,o.jsx)("div",{className:"".concat(D()["clock-icon-hour"]," ")})})})};function S(){return(0,o.jsxs)("div",{className:g().index,children:[(0,o.jsxs)(c(),{children:[(0,o.jsx)("title",{children:"Timer"}),(0,o.jsx)("meta",{name:"description",content:"Timer"}),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,o.jsx)("link",{rel:"icon",href:"/glsoft-timer/favicon.ico"})]}),(0,o.jsx)(m,{}),(0,o.jsx)(E,{}),(0,o.jsx)(N,{}),(0,o.jsx)(k,{})]})}},6949:function(n){n.exports={clock:"clock_clock__f3Jk_","clock-icon":"clock_clock-icon__mRNTX","clock-icon-hour":"clock_clock-icon-hour__AuTLp",rotate:"clock_rotate__kP7cc"}},6928:function(n){n.exports={cross:"reset_cross__qxnAn","cross-icon":"reset_cross-icon__fpqp_"}},983:function(n){n.exports={timer:"timer_timer__5eSsC"}},5583:function(n){n.exports={arrow:"trigger_arrow__I3y9I","arrow-icon":"trigger_arrow-icon__duBIN",up:"trigger_up__UR_GE",down:"trigger_down__vXjUW"}},7281:function(n){n.exports={index:"index_index__5hyIO"}}},function(n){n.O(0,[863,774,888,179],function(){return n(n.s=8312)}),_N_E=n.O()}]);