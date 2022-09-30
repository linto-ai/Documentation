"use strict";(self.webpackChunknewdoc=self.webpackChunknewdoc||[]).push([[3115],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>g});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),g=r,c=u["".concat(s,".").concat(g)]||u[g]||m[g]||i;return n?a.createElement(c,l(l({ref:e},d),{},{components:n})):a.createElement(c,l({ref:e},d))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3490:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4},l="LinTO Agents on Webpages",o={unversionedId:"developpers/agent/clients/web/web",id:"developpers/agent/clients/web/web",title:"LinTO Agents on Webpages",description:"A full figured LinTO client designed for building custom voice interactions on a webpage.",source:"@site/docs/developpers/agent/clients/web/web.md",sourceDirName:"developpers/agent/clients/web",slug:"/developpers/agent/clients/web/",permalink:"/docs/developpers/agent/clients/web/",draft:!1,editUrl:"https://github.com/linto-ai/documentation-website/tree/source/docs/developpers/agent/clients/web/web.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"devSidebar",previous:{title:"Custom Wake-Up Word",permalink:"/docs/developpers/agent/clients/custom_hotwords/"},next:{title:"LinTO Web UI - User documentation",permalink:"/docs/developpers/agent/clients/web/widget"}},s={},p=[{value:"<strong>Usage</strong>",id:"usage",level:2},{value:"I<strong>nstanciante</strong>",id:"instanciante",level:2},{value:"<strong>Handling errors</strong>",id:"handling-errors",level:3},{value:"<strong>Instance user methods</strong>",id:"instance-user-methods",level:2},{value:"<strong>Instance events</strong>",id:"instance-events",level:2},{value:"<strong>Building sources</strong>",id:"building-sources",level:2},{value:"<strong>Using library</strong>",id:"using-library",level:2},{value:"<strong>Parameters</strong>",id:"parameters",level:2},{value:"<strong>Testing</strong>",id:"testing",level:2},{value:"<strong>Custom handlers</strong>",id:"custom-handlers",level:2},{value:"Work with your own wakeup-word model",id:"work-with-your-own-wakeup-word-model",level:2},{value:"Cloning repositories",id:"cloning-repositories",level:3},{value:"Update package.json",id:"update-packagejson",level:3}],d={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"linto-agents-on-webpages"},"LinTO Agents on Webpages"),(0,r.kt)("h1",{id:"linto-web-client"},(0,r.kt)("strong",{parentName:"h1"},"linto-web-client")),(0,r.kt)("p",null,"A full figured LinTO client designed for building custom voice interactions on a webpage."),(0,r.kt)("p",null,"See demo here : ",(0,r.kt)("a",{parentName:"p",href:"https://linto.ai"},"linto.ai")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," : LinTO Web client relies on WebVoiceSDK for handling everything related to audio input, hotword triggers, recordings... See ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@linto-ai/webvoicesdk"},"LinTO WebVoiceSDK on NPM")," for more informations"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," : Any LinTO web client needs to have a token registered towards a LinTO server. See more information in LinTO's ",(0,r.kt)("a",{parentName:"p",href:"https://doc.linto.ai"},"official documentation"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note")," : This library might cause issues (crashes) on your webpage as some browser's implementation of WebAssembly runtimes is still experimental"),(0,r.kt)("h2",{id:"usage"},(0,r.kt)("strong",{parentName:"h2"},"Usage")),(0,r.kt)("p",null,"With bundler :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @linto.ai/linto-web-client\n")),(0,r.kt)("p",null,"Static script from CDN :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://cdn.jsdelivr.net/gh/linto-ai/linto-web-client@master/dist/linto.min.js"><\/script>\n')),(0,r.kt)("p",null,"Test right away :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Tweak content in tests/index.js (your token, LinTO server endpoint etc)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test\n")),(0,r.kt)("h2",{id:"instanciante"},"I",(0,r.kt)("strong",{parentName:"h2"},"nstanciante")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"try {\n    window.linto = await new Linto(\n        `${My_linto_stack_domain}/overwatch/local/web/login`,\n        `${my_app_token}`,\n        `${ms_timeout_delay_for_commands}`\n    );\n} catch (lintoError) {\n    // handle the error\n}\n")),(0,r.kt)("h3",{id:"handling-errors"},(0,r.kt)("strong",{parentName:"h3"},"Handling errors")),(0,r.kt)("p",null,"This command might throw an error if something bad occurs"),(0,r.kt)("h2",{id:"instance-user-methods"},(0,r.kt)("strong",{parentName:"h2"},"Instance user methods")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'- startAudioAcquisition(true, "linto", 0.99) // Uses hotword built in WebVoiceSDK by name / model / threshold\n- startCommandPipeline() // Start to listen to hotwords and binds a publisher for acquired audio when speaking stop\n- stopCommandPipeline()\n- startStreamingPipeline() // Start to listen to hotwords and binds streaming start/stop event when audio acquired\n- stopStreamingPipeline()\n- triggerHotword(dummyHotwordName = "dummy") // Manualy activate a hotword detection, use it when commandPipeline is active.\n- pauseAudioAcquisition()\n- resumeAudioAcquisition()\n- stopAudioAcquisition()\n- startStreaming(metadata = 1) // Tries to initiate a streaming transcription session with your LinTO server. The LinTO server needs a streaming skill and a streaming STT service\n- addEventNlp() // Bind the event nlp to handle only linto answer\n- removeEventNlp()\n- stopStreaming()\n- login() // Main startup command to initiate connexion towards your LinTO server\n- loggout()\n- startHotword()\n- stopHotword()\n- sendCommandText("blahblah") // Use chatbot pipeline\n- sendWidgetText("blahblah") // Publish text to linto (bypass transcribe)\n- triggerAction(payload, skillName, eventName) // Publish payload to the desired skill/event\n- say("blahblah") // Use browser text to speech\n- ask("blahblah ?") // Uses browser text to speech and immediatly triggers hotword when audiosynthesis is complete\n- stopSpeech() // Stop linto current speech\n')),(0,r.kt)("h2",{id:"instance-events"},(0,r.kt)("strong",{parentName:"h2"},"Instance events")),(0,r.kt)("p",null,"Use events with :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'linto.addEventListener("event_name", customHandlingFunction);\n')),(0,r.kt)("p",null,"Available events :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'"mqtt_connect"'),(0,r.kt)("li",{parentName:"ul"},'"mqtt_connect_fail"'),(0,r.kt)("li",{parentName:"ul"},'"mqtt_error"'),(0,r.kt)("li",{parentName:"ul"},'"mqtt_disconnect"'),(0,r.kt)("li",{parentName:"ul"},'"speaking_on"'),(0,r.kt)("li",{parentName:"ul"},'"speaking_off"'),(0,r.kt)("li",{parentName:"ul"},'"command_acquired"'),(0,r.kt)("li",{parentName:"ul"},'"command_published"'),(0,r.kt)("li",{parentName:"ul"},'"command_timeout"'),(0,r.kt)("li",{parentName:"ul"},'"hotword_on"'),(0,r.kt)("li",{parentName:"ul"},'"say_feedback_from_skill"'),(0,r.kt)("li",{parentName:"ul"},'"ask_feedback_from_skill"'),(0,r.kt)("li",{parentName:"ul"},'"streaming_start"'),(0,r.kt)("li",{parentName:"ul"},'"streaming_stop"'),(0,r.kt)("li",{parentName:"ul"},'"streaming_chunk"'),(0,r.kt)("li",{parentName:"ul"},'"streaming_final"'),(0,r.kt)("li",{parentName:"ul"},'"streaming_fail"'),(0,r.kt)("li",{parentName:"ul"},'"action_acquired"'),(0,r.kt)("li",{parentName:"ul"},'"action_published"'),(0,r.kt)("li",{parentName:"ul"},'"action_feedback"'),(0,r.kt)("li",{parentName:"ul"},'"action_error"'),(0,r.kt)("li",{parentName:"ul"},'"text_acquired"'),(0,r.kt)("li",{parentName:"ul"},'"text_published"'),(0,r.kt)("li",{parentName:"ul"},'"chatbot_acquired"'),(0,r.kt)("li",{parentName:"ul"},'"chatbot_published"'),(0,r.kt)("li",{parentName:"ul"},'"chatbot_feedback"'),(0,r.kt)("li",{parentName:"ul"},'"chatbot_error"'),(0,r.kt)("li",{parentName:"ul"},'"custom_action_from_skill"')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NOTE")," : See proposed implementation in ./tests/index.js"),(0,r.kt)("h1",{id:"linto-web-client-widget-ui"},(0,r.kt)("strong",{parentName:"h1"},"linto-web-client Widget (UI)")),(0,r.kt)("h2",{id:"building-sources"},(0,r.kt)("strong",{parentName:"h2"},"Building sources")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\nnpm run build-widget\n")),(0,r.kt)("p",null,"Those commands will build ",(0,r.kt)("strong",{parentName:"p"},"linto.widget.min.js")," file in the ",(0,r.kt)("em",{parentName:"p"},"/dist")," folder"),(0,r.kt)("h2",{id:"using-library"},(0,r.kt)("strong",{parentName:"h2"},"Using library")),(0,r.kt)("p",null,"Import ",(0,r.kt)("strong",{parentName:"p"},"linto.widget.min.js")," file to your web page. Once it's done, you can create a ",(0,r.kt)("strong",{parentName:"p"},"new LintoUI()")," object and set custom parameters."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-html"},'<script type="text/javascript" src="YOUR_PATH/linto.widget.min.js"><\/script>\n<script type="text/javascript">\n    window.LintoUI = new LintoUI({\n        debug: false,\n        containerId: CONTAINER_BLOCK_HTML_ID,\n        lintoWebToken: LINTO_APPLICATION_TOKEN,\n        lintoWebHost: LINTO_APPLICATION_HOST,\n        widgetMode: WIDGET_MODE,\n    })\n<\/script>\n')),(0,r.kt)("h2",{id:"parameters"},(0,r.kt)("strong",{parentName:"h2"},"Parameters")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"type"),(0,r.kt)("th",{parentName:"tr",align:null},"values"),(0,r.kt)("th",{parentName:"tr",align:null},"description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"debug"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true / false"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or disable console informations when events are triggered")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"containerId"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"div-wrapper-id"'),(0,r.kt)("td",{parentName:"tr",align:null},"ID of the block that will contain the widget")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lintoWebHost"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"',(0,r.kt)("a",{parentName:"td",href:"https://my-host.com%22"},'https://my-host.com"')),(0,r.kt)("td",{parentName:"tr",align:null},"Url of the host where the application is deployed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lintoWebToken"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"yourToken"'),(0,r.kt)("td",{parentName:"tr",align:null},"Authorization token to connect the application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetMode"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"multi-modal" (default) / "minimal-streaming"'),(0,r.kt)("td",{parentName:"tr",align:null},"Set the widget mode")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotwordEnabled"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"true" / "false"'),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or disable hotword detection")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hotwordValue"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"linto"'),(0,r.kt)("td",{parentName:"tr",align:null},'Value of the hotword. Change it if you use an other hotword model than "linto"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"audioResponse"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"true" / "false"'),(0,r.kt)("td",{parentName:"tr",align:null},"Enable or disable linto widget audio response")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"streamingStopWord"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"stop"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set stop-word for streaming "infinite" mode')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lintoCustomEvents"),(0,r.kt)("td",{parentName:"tr",align:null},"array of objects"),(0,r.kt)("td",{parentName:"tr",align:null},'{"flag": "event_name": \u201cfunc\u201d: function(){} }'),(0,r.kt)("td",{parentName:"tr",align:null},"Bind custom functions to events")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetMicAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set a custom animation file for "widget microphone animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetThinkAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set a custom animation file for "widget thinking animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetSleepAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json"'),(0,r.kt)("td",{parentName:"tr",align:null},'et a custom animation file for "widget sleeping animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetTalkAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set a custom animation file for "widget talking animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetAwakeAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json\u201d'),(0,r.kt)("td",{parentName:"tr",align:null},'Set a custom animation file for "widget awaken animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetErrorAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json"'),(0,r.kt)("td",{parentName:"tr",align:null},'Set a custom animation file for "widget error animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetValidateAnimation"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"/path/to/animationfile.json\u201d'),(0,r.kt)("td",{parentName:"tr",align:null},'Set a custom animation file for "widget validation animation"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"widgetTitle"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"LinTO Widget"'),(0,r.kt)("td",{parentName:"tr",align:null},"Widget Title value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cssPrimarycolor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"#59bbeb"'),(0,r.kt)("td",{parentName:"tr",align:null},'Value of the widget primary color (default = "#59bbeb")')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cssSecondaryColor"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"#055e89"'),(0,r.kt)("td",{parentName:"tr",align:null},'Value of the widget secondary color (default = "#055e89")')))),(0,r.kt)("h2",{id:"testing"},(0,r.kt)("strong",{parentName:"h2"},"Testing")),(0,r.kt)("p",null,"You can try the library localy by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run test-widget\n")),(0,r.kt)("p",null,"You can change widget parameteres for your tests by updating parameters in the following file: ",(0,r.kt)("strong",{parentName:"p"},"/tests/widget/index.js")),(0,r.kt)("h2",{id:"custom-handlers"},(0,r.kt)("strong",{parentName:"h2"},"Custom handlers")),(0,r.kt)("p",null,"To set custom handlers on events, you can write your own functions and attach it to the widget events. Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"const myCustomFunction = (event) => {\n    console.log('Here is the code')\n}\nwindow.LintoUI = new LintoUI({\n    ...,\n    lintoCustomEvents: [{\n        flag: 'my_custom_event',\n        func: (event) => {\n            myCustomFunction(event)\n        }\n    }]\n})\n")),(0,r.kt)("h2",{id:"work-with-your-own-wakeup-word-model"},"Work with your own wakeup-word model"),(0,r.kt)("p",null,"As mentionned before, \u201c",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/linto-ai/linto-web-client"},"linto-web-client")),"\u201d bundler works with \u201c",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://github.com/linto-ai/WebVoiceSDK"},"webVoiceSdk")),"\u201d.\nIf you want to use your own wakeup-word model, you\u2019ll have to clone both repositories and update \u201c",(0,r.kt)("em",{parentName:"p"},"linto-web-client"),"\u201d package.json as following: "),(0,r.kt)("h3",{id:"cloning-repositories"},"Cloning repositories"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"#Cloning repositories\ncd /your/local/repo\ngit clone git@github.com:linto-ai/WebVoiceSDK.git\ngit clone git@github.com:linto-ai/linto-web-client.git\n")),(0,r.kt)("h3",{id:"update-packagejson"},"Update package.json"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /linto-web-client\nnano package.json\n")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Change \u201c@linto-ai/webvoicesdk\u201d devDependencie path")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'#package.json\n{\n    ...,\n    "devDependencies": {\n        "@linto-ai/webvoicesdk": "../WebVoiceSDK",\n        ...\n    }\n}\n')))}m.isMDXComponent=!0}}]);