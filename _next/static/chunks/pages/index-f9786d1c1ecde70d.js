(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5355)}])},5355:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return W}});var i=n(5893),o=n(9008),r=n.n(o),s=n(7294),l=n(4529),c=n(782);let a=t=>({time:0,idle:!0,countDown:!1,timeUnit:20,setTime:e=>t({time:e}),incrementTime:e=>t(t=>({time:Math.max(t.time+e,0)})),toggleCountDown:()=>t(t=>({countDown:!t.countDown})),toggleIdle:()=>t(t=>({idle:!t.idle})),setCountDown:e=>t({countDown:e}),resetTimer:()=>t({time:0,idle:!0,countDown:!1})});var u={tracks:[{title:"The World",url:"/glsoft-timer/audio/dio-brando-stand.mp3"},{title:"Funny Valentine",url:"/glsoft-timer/audio/funny_valentine.mp3"},{title:"Made In Heaven",url:"/glsoft-timer/audio/made-in-heaven-sfx.mp3"},{title:"Muda Muda Muda",url:"/glsoft-timer/audio/mudamudamuda.mp3"},{title:"Rero Rero Rero",url:"/glsoft-timer/audio/rerorerorero.mp3"},{title:"Star Platinum",url:"/glsoft-timer/audio/star-platinum.mp3"},{title:"Tusk Chimimi",url:"/glsoft-timer/audio/tusk-chimimi.mp3"},{title:"Yes Yes Yes",url:"/glsoft-timer/audio/yesyesyes.mp3"}]};let d=t=>({audioIndex:0,audios:u.tracks,isOpen:!1,setAudioIndex:e=>{t({audioIndex:e})},initAudios:e=>{t({audios:e})},resetSetting:()=>{t({audioIndex:0,audios:[]})},toggleIsOpen:()=>{t(t=>({isOpen:!t.isOpen}))}}),_=(0,l.Ue)()((0,c.mW)(function(){for(var t=arguments.length,e=Array(t),n=0;n<t;n++)e[n]=arguments[n];return{...a(...e),...d(...e)}}));var m=n(983),g=n.n(m),p=n(3020);let f=()=>{let{time:t,idle:e,countDown:n,incrementTime:o,setTime:r,setCountDown:l,toggleCountDown:c,toggleIdle:a,timeUnit:u}=_(),d=(0,p.useDrag)(e=>{let{down:n,last:i,movement:[r,s],memo:c}=e;if(i&&0===s){a();return}console.log(n,i,s,c),c=null!=c?c:s;let u=s-c;return o(1e3*Math.ceil(-u)),0==t&&l(u<0),s});return(0,s.useEffect)(()=>{if(0==t||e)return;let i=setInterval(()=>{o(n?-u:u),0==t&&l(!1)},u);return()=>{clearInterval(i)}},[t,e,n,o,u]),(0,i.jsx)("div",{className:g().timer,...d(),children:(t=>{let e;e=t/1e3<60?new Date(t).toISOString().substring(17,19):t/1e3<3600?new Date(t).toISOString().substring(14,19):new Date(t).toISOString().substring(11,19);let n=e.split(":"),i=[];return n.forEach((t,e)=>{i.push(0==e?parseInt(t).toString():t)}),e=i.join(":")})(t)})};var x=n(7281),h=n.n(x),v=n(5583),j=n.n(v),w=n(5675),k=n.n(w);let N=()=>{let{time:t,idle:e,countDown:n,incrementTime:o,setTime:r,setCountDown:s,toggleCountDown:l,toggleIdle:c}=_(),a=e=>{if(e.stopPropagation(),0==t){s(!1);return}l()};return(0,i.jsx)("div",{className:"".concat(j().arrow),children:(0,i.jsx)(k(),{className:"arrow-icon ".concat(n?j().down:j().up),onClick:a,src:"/glsoft-timer/arrow-icon.png",alt:"arrow",fill:!0,priority:!0,placeholder:"blur",blurDataURL:"/glsoft-timer/arrow-icon.png"})})};var S=n(6928),I=n.n(S);let y=()=>{let{resetTimer:t}=_(),e=e=>{e.stopPropagation(),t()};return(0,i.jsx)("div",{className:"".concat(I().cross),onClick:e,children:(0,i.jsx)(k(),{className:"".concat(I()["cross-icon"]),src:"/glsoft-timer/cross-icon.png",alt:"arrow",fill:!0,priority:!0,placeholder:"blur",blurDataURL:"/glsoft-timer/cross-icon.png"})})};var M=n(6949),b=n.n(M);let D=()=>{let{countDown:t,idle:e,time:n}=_();return(0,i.jsx)("div",{className:"".concat(b().clock),children:(0,i.jsx)("div",{style:{transform:"rotate(".concat(n/5,"deg)"),transition:"transform 0s ease-out, background-color 0s linear"},className:"".concat(b()["clock-icon"]),children:(0,i.jsx)("div",{className:"".concat(b()["clock-icon-hour"]," ")})})})},C=()=>{let t=new AudioContext,e=null,n=[],i=[],o=i=>{console.log("play track",i),l();let o=t.createBufferSource();console.log("allBuffers",n[i]),o.buffer=n[i],o.connect(t.destination),o.start(0),e=o},r=()=>{e&&(e.stop(),e=null)},s=()=>{e&&e.start(0)},l=()=>{e&&(e.stop(),e=null)},c=async e=>{i=e;let o=await Promise.all(i.map(async e=>{let n=await fetch(e.url),i=await n.arrayBuffer(),o=await t.decodeAudioData(i);return o}));console.log(o),n=o};return{playTrack:o,pause:r,resume:s,stop:l,setTracks:c}},T=()=>{let{countDown:t,idle:e,time:n,initAudios:o,audios:r,audioIndex:l}=_(),c=(0,s.useRef)(null);(0,s.useEffect)(()=>{c.current=C(),c.current.setTracks(r)},[o,r]);let a=(0,s.useRef)(0);return(0,s.useEffect)(()=>{if(!e&&a.current!=n&&t&&0==n){var i;console.log("play audio",l),null===(i=c.current)||void 0===i||i.playTrack(l)}a.current=n},[n,l,r,t,e,a]),(0,i.jsx)("div",{className:"audio"})};var E=n(5761),R=n.n(E),O=n(8833),P=n.n(O);let U=()=>{let{countDown:t,idle:e,time:n,isOpen:o,toggleIsOpen:r,audios:s,setAudioIndex:l}=_(),c=t=>{t.stopPropagation(),r()},a=t=>{l(t)};return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:"".concat(P().popup),style:{display:o?"flex":"none"},children:(0,i.jsxs)("div",{className:"".concat(P().content),children:[(0,i.jsxs)("div",{className:"".concat(P().header),children:[(0,i.jsx)("h2",{className:"".concat(P().title),children:"Setting"}),(0,i.jsx)("button",{className:"".concat(P()["close-button"]),onClick:c,children:"Done"})]}),(0,i.jsxs)("div",{className:P().main,children:[(0,i.jsx)("div",{className:P()["list-title"],children:"TIMER SOUNDS"}),(0,i.jsx)("div",{className:P().list,children:s.map((t,e)=>(0,i.jsx)("div",{className:"".concat(P()["list-item"]," ").concat(e==s.length-1?P().last:""),onClick:()=>a(e),children:t.title},e))})]})]})})})},A=()=>{let{countDown:t,idle:e,time:n,toggleIsOpen:o}=_(),r=t=>{t.stopPropagation(),o()};return(0,i.jsx)("div",{className:"".concat(R().setting),onClick:r,children:(0,i.jsxs)("div",{className:"".concat(R()["setting-icon"]),children:[(0,i.jsx)("div",{className:"".concat(R()["setting-icon-point"]," ")}),(0,i.jsx)("div",{className:"".concat(R()["setting-icon-pillar"]," ")}),(0,i.jsx)(U,{})]})})};function W(){return(0,i.jsxs)("div",{className:h().index,children:[(0,i.jsxs)(r(),{children:[(0,i.jsx)("title",{children:"Timer"}),(0,i.jsx)("meta",{name:"description",content:"Timer"}),(0,i.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,i.jsx)("link",{rel:"icon",href:"/glsoft-timer/favicon.ico"})]}),(0,i.jsx)(f,{}),(0,i.jsx)(D,{}),(0,i.jsx)(y,{}),(0,i.jsx)(N,{}),(0,i.jsx)(A,{}),(0,i.jsx)(T,{})]})}},6949:function(t){t.exports={clock:"clock_clock__f3Jk_","clock-icon":"clock_clock-icon__mRNTX","clock-icon-hour":"clock_clock-icon-hour__AuTLp",rotate:"clock_rotate__kP7cc"}},6928:function(t){t.exports={cross:"reset_cross__qxnAn","cross-icon":"reset_cross-icon__fpqp_"}},8833:function(t){t.exports={popup:"SettingModal_popup__olCYt",content:"SettingModal_content__clW21",header:"SettingModal_header__xYhox","close-button":"SettingModal_close-button__U1S27",title:"SettingModal_title__vt860",main:"SettingModal_main__ZQvCI","list-title":"SettingModal_list-title__5wrWo",list:"SettingModal_list__UmgJV","list-item":"SettingModal_list-item__ZBIxM",last:"SettingModal_last__LdEUm"}},5761:function(t){t.exports={setting:"setting_setting__wH5Vl","setting-icon":"setting_setting-icon__EW_NR","setting-icon-pillar":"setting_setting-icon-pillar__P693t","setting-icon-point":"setting_setting-icon-point__6lQRm"}},983:function(t){t.exports={timer:"timer_timer__5eSsC"}},5583:function(t){t.exports={arrow:"trigger_arrow__I3y9I","arrow-icon":"trigger_arrow-icon__duBIN",up:"trigger_up__UR_GE",down:"trigger_down__vXjUW"}},7281:function(t){t.exports={index:"index_index__5hyIO"}}},function(t){t.O(0,[217,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);