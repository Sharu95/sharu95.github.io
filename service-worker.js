"use strict";var precacheConfig=[["/index.html","3264b5c5faeafb5fe4ce8b7db976346f"],["/static/css/main.551ed374.css","a09589fd30d1e06aa7e626d9afeb78e7"],["/static/js/main.0fa74fd3.js","078611edcef23e7a87b6cf36b7cf3cb9"],["/static/media/Raleway-Black-Italic.0f629c96.ttf","0f629c963866f90e4ffa05550def8af3"],["/static/media/Raleway-Black.d641109f.ttf","d641109f46a9231b7a92d6a114302a2b"],["/static/media/Raleway-Bold-Italic.02d3658b.ttf","02d3658bf349556ce8c3486c55bb703b"],["/static/media/Raleway-Bold.f5c9c1aa.ttf","f5c9c1aa2ac56e1f75b17c63c0a594bc"],["/static/media/Raleway-ExtraBold-Italic.8832d30f.ttf","8832d30f890da4120277ce31511440f3"],["/static/media/Raleway-ExtraBold.299ddfe9.ttf","299ddfe9ee671626b0fe97cd94cfbb3b"],["/static/media/Raleway-ExtraLight-Italic.91fc8a22.ttf","91fc8a226846c0aafdf32f1158585bee"],["/static/media/Raleway-ExtraLight.ebd5c800.ttf","ebd5c800e24e108dd3aeacb28e16c595"],["/static/media/Raleway-Light-Italic.fa415a9d.ttf","fa415a9d96fefcef9dcd7c0f8938bdcb"],["/static/media/Raleway-Light.6b562d7c.ttf","6b562d7ca359ccb3259f570bcceb4f70"],["/static/media/Raleway-Medium-Italic.c966b862.ttf","c966b8622dc3df06f4dcb637212cd92f"],["/static/media/Raleway-Medium.2e763f88.ttf","2e763f88811273e662c149e71ba9e984"],["/static/media/Raleway-Regular-Italic.b1f58e1b.ttf","b1f58e1bdc559a465620e1e48d08f460"],["/static/media/Raleway-Regular.2d4cd872.ttf","2d4cd8722065da2ac700199273325752"],["/static/media/Raleway-SemiBold-Italic.4bd987de.ttf","4bd987dee3441560d67deaf159d2feda"],["/static/media/Raleway-SemiBold.e18d3880.ttf","e18d3880935810355cd07b95337c381d"],["/static/media/Raleway-Thin-Italic.f8708e6a.ttf","f8708e6ab83f9e2e11c2bd0c0ecf93a6"],["/static/media/Raleway-Thin.ebd07bb4.ttf","ebd07bb4e01077b3736004a5305ce741"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(c){return setOfCachedUrls(c).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return c.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),c="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,c),e=urlsToCacheKeys.has(a));var n="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});