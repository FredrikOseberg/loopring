"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/loopring/index.html","df6a44ae899370f971e248cc4fa639ee"],["/loopring/static/css/main.665e0080.css","ae9db0b13384eb458a5695855d65fb38"],["/loopring/static/js/main.3da1b90a.js","467891b146a58d80e8f0455760e237d7"],["/loopring/static/media/concrete_seamless.fa6a95e7.png","fa6a95e71d181ae6ac1f7586f0d8515a"],["/loopring/static/media/congruent_pentagon.c0864a9f.png","c0864a9fc47915c685e86df172c37b55"],["/loopring/static/media/cryptocoins.042c90e1.woff","042c90e13c7f3d449dbcc23f7d25ebaf"],["/loopring/static/media/cryptocoins.575bf7f4.woff2","575bf7f44a6fc665f63b255e72e7cb78"],["/loopring/static/media/cryptocoins.e45d8975.ttf","e45d8975e01ac4fffb5dd6743073c324"],["/loopring/static/media/dan-wang.e50d640e.jpg","e50d640eb781426b00bf851564f77b8a"],["/loopring/static/media/hongfei.d2241b0c.jpg","d2241b0c9d218dacb354f205f5917b7e"],["/loopring/static/media/jay-zhou.efd3a512.jpg","efd3a51296cbec5cbfc225b1ddb60b80"],["/loopring/static/media/jing.11eae0a3.png","11eae0a380e17992d669c7b0df869fac"],["/loopring/static/media/logo.770a4008.png","770a40083f2e37962afe455e2e338e02"],["/loopring/static/media/qtum_en.f21e2c60.png","f21e2c6000145531403025b6c6c4c264"],["/loopring/static/media/repeatingsquares.9a30e6c6.png","9a30e6c6c75344e5bd217bbe9720ef3e"],["/loopring/static/media/wework.9a2d0626.jpg","9a2d0626a93a15ce1259364e0f3b96fc"],["/loopring/static/media/xiaoliang-chen.886e0cdb.jpg","886e0cdbc2d0fa3cef7d022d272e36d7"],["/loopring/static/media/xuefeng-li.78134115.jpg","7813411500d401a9009a6f35eabb2be8"],["/loopring/static/media/xuyiji.73a3ef58.jpg","73a3ef58edb90df6722b79f52ca2dc07"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL("/loopring/index.html",self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});