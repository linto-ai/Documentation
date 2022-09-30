"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[2682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),m=p(n),u=o,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?i.createElement(k,r(r({ref:t},d),{},{components:n})):i.createElement(k,r({ref:t},d))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,r=new Array(l);r[0]=m;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,r[1]=a;for(var p=2;p<l;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>a,toc:()=>p});var i=n(7462),o=(n(7294),n(3905));const l={},r="Published skills and other Node-RED nodes",a={unversionedId:"developpers/agent/skills/list",id:"developpers/agent/skills/list",title:"Published skills and other Node-RED nodes",description:"LinTO Framework for Node-Red",source:"@site/docs/developpers/agent/skills/list.md",sourceDirName:"developpers/agent/skills",slug:"/developpers/agent/skills/list",permalink:"/fr/docs/developpers/agent/skills/list",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/agent/skills/list.md",tags:[],version:"current",frontMatter:{},sidebar:"devSidebar",previous:{title:"Node-RED LinTO Framework",permalink:"/fr/docs/developpers/agent/skills/components"},next:{title:"LinTO for meetings",permalink:"/fr/docs/developpers/meeting/"}},s={},p=[{value:"LinTO Framework for Node-Red",id:"linto-framework-for-node-red",level:2},{value:"Cores functionalities Nodes",id:"cores-functionalities-nodes",level:2},{value:"Demonstration Skills Nodes",id:"demonstration-skills-nodes",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"published-skills-and-other-node-red-nodes"},"Published skills and other Node-RED nodes"),(0,o.kt)("h2",{id:"linto-framework-for-node-red"},"LinTO Framework for Node-Red"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skills-components"},"linto-skills-components - On our Github")," The framework code for building LinTO skills. It enables its users to develop ",(0,o.kt)("strong",{parentName:"li"},"LinTO compatible skills"),", leveraging a set of base Node JS ",(0,o.kt)("strong",{parentName:"li"},"classes")," inside their own code.")),(0,o.kt)("h2",{id:"cores-functionalities-nodes"},"Cores functionalities Nodes"),(0,o.kt)("p",null,'All "LinTO core Nodes for Node-Red" built on top of ',(0,o.kt)("strong",{parentName:"p"},"linto-skills-components")," are found in this repo : ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/linto-ai/linto-skills-core"},"linto-skills-core")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"linto-application-in : MQTT-connector listening authenticating clients (they share same application)"),(0,o.kt)("li",{parentName:"ul"},"linto-chatbot : Relays non intent entries to built-in Tock chatbot to get an answer"),(0,o.kt)("li",{parentName:"ul"},"linto-config : Autoconfigured by LinTO-Admin when managing an application"),(0,o.kt)("li",{parentName:"ul"},"linto-dictionary : Wires to a skill to declare a list of ",(0,o.kt)("strong",{parentName:"li"},"named entitites")," (#cities -> ","[New York, Berlin, Marseille...]",")"),(0,o.kt)("li",{parentName:"ul"},"linto-evaluate : Infers Tock NLU API for intent detection (with text from direct input or transcribed commands, see ",(0,o.kt)("strong",{parentName:"li"},"linto-pipeline-router"),")"),(0,o.kt)("li",{parentName:"ul"},"linto-external-application : ",(0,o.kt)("em",{parentName:"li"},"Not yet developed - WIP")),(0,o.kt)("li",{parentName:"ul"},"linto-model-dataset : Automaticaly trains Tock Natural language understanding and / or specific Automatic Speech Recognition models based on the skills currently deployed into an application"),(0,o.kt)("li",{parentName:"ul"},"linto-pipeline-router : Drives incoming data towards NLU, chatbot requests, transcription... based on the type of client's input (Text, Streaming audio, Audio files or specific commands). Enables a skill to get called directly"),(0,o.kt)("li",{parentName:"ul"},"linto-on-connect : Triggers once a LinTO client connects"),(0,o.kt)("li",{parentName:"ul"},"linto-out : Sends back MQTT packets to requesting LinTO client"),(0,o.kt)("li",{parentName:"ul"},"linto-red-event-emitter : Emit an event to the specified skill based on the NLU result"),(0,o.kt)("li",{parentName:"ul"},"linto-terminal-in : MQTT-connector listening one LinTO (device, Raspberry or Android)"),(0,o.kt)("li",{parentName:"ul"},"linto-transcribe : Sends a file to a LinTO-Platform transcription service"),(0,o.kt)("li",{parentName:"ul"},"linto-transcribe-streaming : Streams incoming audio to transcription service, returns text through linto-out"),(0,o.kt)("li",{parentName:"ul"},"linto-tts : Text to speech"),(0,o.kt)("li",{parentName:"ul"},"linto-ui : Enable a view output for LinTO on the RED-Dashboard")),(0,o.kt)("h2",{id:"demonstration-skills-nodes"},"Demonstration Skills Nodes"),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Those skills are published mainly for demonstration purpose on how to write your own developpments, we hope you will publish something good very soon and make it available on the public ",(0,o.kt)("a",{parentName:"p",href:"https://flows.nodered.org/"},"Node-Red Library")," !")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skills-transcriber"},"node-red-linto-skill-transcriber")," : A LinTO client sends an audio file, this skill sends back the transcribed text without triggering NLU / Chatbot nor skills"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-calendar"},"node-red-linto-skill-calendar")," : Get the coming event from OpenPaas"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-datetime"},"node-red-linto-skill-datetime")," : Get the current date / time"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-definition"},"node-red-linto-skill-definition")," : Get a definition of requested word"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-meeting"},"node-red-linto-skill-meeting")," : Start / stop linto meetings mode"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-memo"},"node-red-linto-skill-memo")," : Manage reminder note"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-news"},"node-red-linto-skill-news")," : Fetch the news around the world"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-pollution"},"node-red-linto-skill-pollution")," : Get the pollution rate from city"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-weather"},"node-red-linto-skill-weather")," : Get the weather from city"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/linto-ai/linto-skill-welcome"},"node-red-linto-skill-welcome")," : A basic welcome skill")))}c.isMDXComponent=!0}}]);