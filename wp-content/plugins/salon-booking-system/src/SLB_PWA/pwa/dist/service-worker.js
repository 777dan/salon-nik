if(!self.define){let e,s={};const c=(c,i)=>(c=new URL(c+".js",i).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(i,r)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let o={};const f=e=>c(e,n),t={module:{uri:n},exports:o,require:f};s[n]=Promise.all(i.map((e=>t[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"salon-booking-plugin-pwa"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/{SLN_PWA_DIST_PATH}/OneSignalSDKWorker.js",revision:"ebb63ca15bba16b550232b0b0f66c726"},{url:"/{SLN_PWA_DIST_PATH}/css/app.css",revision:"a9f8f726cbae6de9860f988f13c5cc2e"},{url:"/{SLN_PWA_DIST_PATH}/css/chunk-vendors.css",revision:"23095101bbd18376c15b4ecf6cdc6b49"},{url:"/{SLN_PWA_DIST_PATH}/img/logo.png",revision:"15c07bdddf699bc8c4f0ef9ee4c3effe"},{url:"/{SLN_PWA_DIST_PATH}/index.html",revision:"6adc6d1ca52f600968d0144745f31645"},{url:"/{SLN_PWA_DIST_PATH}/js/app.js",revision:"70d541b13e302863d64f07c4c9090dc4"},{url:"/{SLN_PWA_DIST_PATH}/js/chunk-vendors.js",revision:"7e9911684a5a786b331bbfcbc57c295e"},{url:"/{SLN_PWA_DIST_PATH}/manifest.json",revision:"eedff49ee19ef376eea27fbb0a6eba43"},{url:"/{SLN_PWA_DIST_PATH}/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map