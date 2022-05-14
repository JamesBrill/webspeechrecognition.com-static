(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[217],{232:function(n,e,t){"use strict";t.r(e),t.d(e,{__N_SSG:function(){return h},default:function(){return b}});var r=t(4942),s=t(7294),i=t(1664),c=t(2515),o=t(6131),u=t.n(o),a=t(5893);var p=function(n){var e=n.transcript,t=n.resetTranscript,r=n.browserSupportsSpeechRecognition,s=n.listenContinuously,c=n.listenOnce,o=n.stopListening,p=n.message;return r?(0,a.jsxs)("div",{className:u().Transcriber,children:[(0,a.jsx)("p",{children:'When the microphone is turned on, try saying one of the commands "stop listening" or "reset transcript"'}),(0,a.jsx)("button",{className:u().Transcriber__button,onClick:s,children:"Listen continuously"}),(0,a.jsx)("button",{className:u().Transcriber__button,onClick:c,children:"Listen once"}),(0,a.jsx)("button",{className:u().Transcriber__button,onClick:o,children:"Stop listening"}),(0,a.jsx)("button",{className:u().Transcriber__button,onClick:t,children:"Reset transcript"}),(0,a.jsx)("p",{children:p}),e&&(0,a.jsxs)("p",{children:["Transcript: ",e]})]}):(0,a.jsxs)("div",{className:u().Transcriber,children:[(0,a.jsx)("p",{children:"This browser does not support the Web Speech API."}),(0,a.jsx)(i.default,{href:"/react-speech-recognition#supported-browsers",children:(0,a.jsx)("a",{children:"Switch to one of these supported browsers"})})]})};function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function f(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){(0,r.Z)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var h=!0;function b(){var n=(0,s.useState)(!1),e=n[0],t=n[1],r=(0,s.useState)("Microphone is turned off"),o=r[0],u=r[1],l=function(){u("Microphone is turned off"),c.ZP.stopListening()},h=[{command:"reset transcript",callback:function(n){return(0,n.resetTranscript)()},matchInterim:!0},{command:"stop listening",callback:function(){return l()},matchInterim:!0}],b=(0,c.x6)({commands:h}),d=b.transcript,_=b.resetTranscript,g=b.listening,m=b.browserSupportsSpeechRecognition,j={transcript:d,resetTranscript:_,message:o,browserSupportsSpeechRecognition:m,listenContinuously:function(){u("Listening until stopListening called"),c.ZP.startListening({continuous:!0})},listenOnce:function(){u("Listening until user stops speaking"),c.ZP.startListening({continuous:!1})},stopListening:l};return(0,s.useEffect)((function(){g||u("Microphone is turned off")}),[g]),(0,s.useEffect)((function(){t(!0)})),(0,s.useEffect)((function(){return function(){m&&l()}}),[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h1",{children:"React Speech Recognition Demo"}),(0,a.jsxs)("div",{style:{width:"100%",maxWidth:"640px"},children:[(0,a.jsx)(i.default,{href:"/",children:(0,a.jsx)("a",{children:"Back to home"})}),e&&(0,a.jsx)(p,f({},j))]})]})}},4912:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/react-speech-recognition-demo",function(){return t(232)}])},6131:function(n){n.exports={Transcriber:"Transcriber_Transcriber__17sBu",Transcriber__button:"Transcriber_Transcriber__button__1bZfm"}}},function(n){n.O(0,[431,774,888,179],(function(){return e=4912,n(n.s=e);var e}));var e=n.O();_N_E=e}]);