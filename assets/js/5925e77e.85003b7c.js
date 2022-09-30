"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[4577],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,v=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?r.createElement(v,i(i({ref:t},c),{},{components:n})):r.createElement(v,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<s;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const s={},i="Streaming Transcription service usage",o={unversionedId:"developpers/agent/server/post_install/service-manager/streaming_service_usage",id:"developpers/agent/server/post_install/service-manager/streaming_service_usage",title:"Streaming Transcription service usage",description:"Streaming speech to text standalone worker. Processes audio streams on an WS endpoint",source:"@site/docs/developpers/agent/server/post_install/service-manager/streaming_service_usage.md",sourceDirName:"developpers/agent/server/post_install/service-manager",slug:"/developpers/agent/server/post_install/service-manager/streaming_service_usage",permalink:"/docs/developpers/agent/server/post_install/service-manager/streaming_service_usage",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/agent/server/post_install/service-manager/streaming_service_usage.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Deploy a Large Vocabulary Streaming Transcription service",permalink:"/docs/developpers/agent/server/post_install/service-manager/streaming_service_create"},next:{title:"Platform Service manager",permalink:"/docs/developpers/agent/server/post_install/service-manager/stt_manager_how2use"}},l={},p=[{value:"WS to server",id:"ws-to-server",level:2},{value:"Establish connection",id:"establish-connection",level:3},{value:"Sending audio",id:"sending-audio",level:3},{value:"Ending session",id:"ending-session",level:3},{value:"Server to WS",id:"server-to-ws",level:2},{value:"Response to an audio stream",id:"response-to-an-audio-stream",level:3},{value:"Response to an audio stream after a silence duration (~0.5s)",id:"response-to-an-audio-stream-after-a-silence-duration-05s",level:3},{value:"Response after ending session",id:"response-after-ending-session",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"streaming-transcription-service-usage"},"Streaming Transcription service usage"),(0,a.kt)("p",null,"Streaming speech to text standalone worker. Processes audio streams on an WS endpoint "),(0,a.kt)("h2",{id:"ws-to-server"},"WS to server"),(0,a.kt)("h3",{id:"establish-connection"},"Establish connection"),(0,a.kt)("p",null,"Initiate the server connection by sending a json message.\n",(0,a.kt)("inlineCode",{parentName:"p"},'{"config": {"sample_rate":16000, "metadata":1 }}')),(0,a.kt)("p",null,"Option : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sample_rate"),(0,a.kt)("li",{parentName:"ul"},"metadata : ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"1")," : application/json"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"0")," : text/plain")))),(0,a.kt)("h3",{id:"sending-audio"},"Sending audio"),(0,a.kt)("p",null,"After the connection is established, you can send an audio stream to the server."),(0,a.kt)("p",null,"Tested audio format : "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"format : 16-bit binary string"),(0,a.kt)("li",{parentName:"ul"},"channels : 1"),(0,a.kt)("li",{parentName:"ul"},"rate : 16000 (make sure the rate is the same as the one used initially)"),(0,a.kt)("li",{parentName:"ul"},"buffer_size : 1024 (can be any integer)")),(0,a.kt)("p",null,"Python example ",(0,a.kt)("inlineCode",{parentName:"p"},"audio.open(format=pyaudio.paInt16, channels=1, rate=16000, input=True, frames_per_buffer=1024)")),(0,a.kt)("h3",{id:"ending-session"},"Ending session"),(0,a.kt)("p",null,"Send a ",(0,a.kt)("inlineCode",{parentName:"p"},'{"eof" : 1}')," message to end the session."),(0,a.kt)("h2",{id:"server-to-ws"},"Server to WS"),(0,a.kt)("h3",{id:"response-to-an-audio-stream"},"Response to an audio stream"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{"partial": "one"}\n{"partial": "one sentence"}\n{"partial": "one sentence of"}\n{"partial": "one sentence of user"}\n')),(0,a.kt)("h3",{id:"response-to-an-audio-stream-after-a-silence-duration-05s"},"Response to an audio stream after a silence duration (~0.5s)"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'{"text": "one sentence of user"}')),(0,a.kt)("h3",{id:"response-after-ending-session"},"Response after ending session"),(0,a.kt)("p",null,"The server will send after an ",(0,a.kt)("inlineCode",{parentName:"p"},'{"eof" : 1}')," (depending of the initial metadata)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"metadata 0 : text/plain"),(0,a.kt)("li",{parentName:"ul"},"metadata 1 : ",(0,a.kt)("inlineCode",{parentName:"li"},'{"speakers": [], "text": "", "words": []}'))),(0,a.kt)("p",null,"Finally, the server will close the connection"))}u.isMDXComponent=!0}}]);