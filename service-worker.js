/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404/index.html","5b7b34af6237bf32c3d39fd3bcb05d5e"],["/Chrome常用配置/index.html","186e2782cdd7f414514c664bdf087868"],["/Eclipse常用配置/index.html","9ae5159e357030c11e02e485bc21d236"],["/GitHub-JsDelivr搭建图床/index.html","cb8c8b6713da2f89777e3d20bd7dbc64"],["/GitHub常用命令/index.html","5e9b2ab5231c01583643aa5477f63f9f"],["/IDEA-Crack/index.html","5f38dbf358cdd528ee3a6a440463c482"],["/IDEA常用配置/index.html","08af5de26f3812e46b9918c7f2674544"],["/about/index.html","c955fe333b120b19e358bde68380fc30"],["/archives/2018/01/index.html","65b7d8e3cf7b6ceff1a7d5395d2cf12d"],["/archives/2018/index.html","eff6dbef769b7c2a62858beb74d69e7f"],["/archives/2019/08/index.html","37e442a38bb8c96b755f246920550446"],["/archives/2019/09/index.html","c385b84fa04603a2bee885702daddd22"],["/archives/2019/10/index.html","a39619d1428960bef5b036e93aa2b3b4"],["/archives/2019/11/index.html","c90f686956e4dbe997522da0057e267d"],["/archives/2019/12/index.html","db9c7297a869ab68b3aebcbce8739877"],["/archives/2019/12/page/2/index.html","e41ca311a98a178e834e5ead28e19d2a"],["/archives/2019/12/page/3/index.html","9b652d86a418904b6b44f45c164e13ae"],["/archives/2019/index.html","806fcca0853bad962c0e987a28a67ab2"],["/archives/2019/page/2/index.html","b4e55323c4d48dced6b48b4245d57495"],["/archives/2019/page/3/index.html","575dda6366f704bcd014994969a9f024"],["/archives/2019/page/4/index.html","b980e73a4b8f52839165da6469432add"],["/archives/2020/01/index.html","ba9067dc5d9eba27f58cd76032c11014"],["/archives/2020/02/index.html","7f2826e35d5e70e21647c94bb85401ef"],["/archives/2020/03/index.html","177fbac43c012ae9e29c06b52b9b0e66"],["/archives/2020/index.html","f04222486e87dff38a0a0a726ed63ff8"],["/archives/2020/page/2/index.html","011b85483d62ef2efcd4c8248787f398"],["/archives/index.html","a80199283c8d058e632818f20aa02a46"],["/archives/page/2/index.html","a80199283c8d058e632818f20aa02a46"],["/archives/page/3/index.html","a80199283c8d058e632818f20aa02a46"],["/archives/page/4/index.html","a80199283c8d058e632818f20aa02a46"],["/archives/page/5/index.html","a80199283c8d058e632818f20aa02a46"],["/archives/page/6/index.html","a80199283c8d058e632818f20aa02a46"],["/categories/Soft/Chrome/index.html","350c59958799486b326c223d9ffd9a50"],["/categories/Soft/GitHub/index.html","a1ef0f07cf9ee38ddd3daa49f594fafb"],["/categories/Soft/IDE/Eclipse/index.html","43fbaec1dbc7309dc5453fefb8b9425a"],["/categories/Soft/IDE/IDEA/index.html","2112a65c611b25b1daf9ac245240bbe6"],["/categories/Soft/IDE/index.html","9f199d9cb434b586c877a58b86525112"],["/categories/Soft/index.html","16221fb22a73c0facb457194661130b1"],["/categories/Tools/Download/index.html","db46c5b45f474bd70d03dfcd9fbcfc15"],["/categories/Tools/av/index.html","1a07861aa8b5e9becc1ceaec122a2e06"],["/categories/Tools/develop/index.html","1b4646915e2a224bdeb5a663b634c6f0"],["/categories/Tools/develop/page/2/index.html","c0fe566ff4f5361bdc501ec9f8ee48a8"],["/categories/Tools/effcient/index.html","04f7911ae91606dbc8d2a4dceb911099"],["/categories/Tools/index.html","c5e69735302ccb02db13fcd7461cc60c"],["/categories/Tools/office/index.html","dd3e60f90eb967dc2032f85bca712b67"],["/categories/Tools/page/2/index.html","e38162a1f5b88b8eb8d389bf7e63970c"],["/categories/Tools/page/3/index.html","74ca346ffccb50f992adb9f219bd7795"],["/categories/Tools/page/4/index.html","ad3040f760ed283ce01822921b213617"],["/categories/Tools/page/5/index.html","13605690b6a87de2f41bbb176e6ef1f1"],["/categories/Tools/system/index.html","f71f435c2eff4ee8dd1657c26b7539d6"],["/categories/index.html","adb36060e2c44213917e26a751711166"],["/css/style.css","6c66854a22b86345bb373d144add8fe4"],["/css/tools.css","bc852200b17716a405eb4c65bca1edb0"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","f82737d016569e7db929ca495b7bee0a"],["/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","7c8a26ec7cae6908a71f64055978c562"],["/js/app.js","a5d659af4b9d17196436c302e39ec916"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["/links/index.html","1ae5220db1f44049501ec12bd468855f"],["/page/2/index.html","14c8e3792a5aabf7bc4a0653b720dfa8"],["/page/3/index.html","8a3d23da22b9267d384fa8ecefbe79d0"],["/page/4/index.html","632908f454f1ff1127cb755af0b5543f"],["/page/5/index.html","4d13b9b9094bfe48723a4df32f0ab21a"],["/page/6/index.html","b489c4ff53f7f29789a76abbff934bdc"],["/tags/Adobe/index.html","499f65324c069d9ed802b46e6d07fb60"],["/tags/Browser/index.html","1c9dea581225a49beb5ec7c5cdbf20e1"],["/tags/CMD/index.html","cf0aab9f859cab62c20bbdf42648d750"],["/tags/Chrome/index.html","a52de90b66ce9c3e9e322d34be2700bb"],["/tags/Command/index.html","4a99055e311cf068c20deeaca534ef5d"],["/tags/Compress/index.html","8fcd8f61103b1d474af495a1f364581b"],["/tags/Crack/index.html","23d6ea144528e9c7bc55a182f8a5e0b4"],["/tags/Download/index.html","74ea308ec1f68dd6a4798c01b589fc2a"],["/tags/Eclipse/index.html","13c14d4a7a427aec1c752421bb3ec0a9"],["/tags/FTP/index.html","d126a5b5bda83602c55e9c3831c36d74"],["/tags/Git/index.html","ce7266493f07ed867473df445b56010d"],["/tags/GitHub/index.html","8555eb5907d997038de26d412a43a045"],["/tags/IDE/index.html","5deae0c6b1052641c0d5243d6bf2caee"],["/tags/IDEA/index.html","7827b58f978fb7e68618c99995582953"],["/tags/Java/index.html","9173d27487dc2a6815a9697f3add9e2d"],["/tags/JsDelivr/index.html","cce3bc593eac842100ff531c00a418dd"],["/tags/Office/index.html","8ef1435103391075abea009ac88be635"],["/tags/PDF/index.html","87ec0a611f256535b103118e03930a26"],["/tags/Snipaste/index.html","e8dc443be406eca728647875bbf2364c"],["/tags/Soft/index.html","54f4488178a173487533c674b186415f"],["/tags/Soft/page/2/index.html","e51a4835a87520fba9ded4715f430760"],["/tags/Soft/page/3/index.html","e68a29cf704a87d25b58e9fdfd4745dd"],["/tags/Soft/page/4/index.html","877c26a1c1e1b2315bff6dc94219d705"],["/tags/Soft/page/5/index.html","d0b2384095dcaa0275caf89358d4d08b"],["/tags/Sync/index.html","a510786dcdcdd684a5a5d49558bd6b4f"],["/tags/TC/index.html","87e5844c0e1f24d75473f0a35157a29b"],["/tags/Teleport/index.html","fa12643208731dfd69ca46478bf70e52"],["/tags/Translate/index.html","938cfd4af4ac321f19894559ce5b747f"],["/tags/VSCode/index.html","ad70b17d21e35547d203f2fbc67afe54"],["/tags/Windows/index.html","0f90ee57451c47fdd87d8e0513e457de"],["/tags/av/index.html","92ff68ff185b55bc5913c93e50a2135c"],["/tags/config/index.html","654806b037039856c5dfd7179d7ec6ff"],["/tags/debug/index.html","6425fdb94e9264d419916a97a8a69925"],["/tags/desktop/index.html","58f749371b4b861841e85711f5939a37"],["/tags/develop/index.html","c915da157825cf8fde6cab23076fdb1d"],["/tags/develop/page/2/index.html","f0b1e449dc3a22c22a3b86bf63a365e6"],["/tags/effcient/index.html","d2295e88bc1d113c90173d634ae1faae"],["/tags/gestures/index.html","50c56bb0b39f7331bc8bdba705082fef"],["/tags/index.html","2571b653471e526cd1685aabbdc4eef9"],["/tags/monitor/index.html","ad2d0f2d15d71c8569d3c293a12a89e6"],["/tags/mouse/index.html","b7ba53bd4084390500191fc87b17dd6e"],["/tags/music/index.html","648eef82105e3d9a83675b3ef0d9c53c"],["/tags/optimizer/index.html","2e5003bcde71cec715042bccf0776ece"],["/tags/password/index.html","aefb84b609c88bea939c7b856a602267"],["/tags/search/index.html","69ee10eee82e0e22b13964024a4f55ff"],["/tags/shell/index.html","10e99e220d29caf88d9e8d1053f57a80"],["/tags/ssh/index.html","b951f2005e0c7ffb7ca5d91ccec8931b"],["/tags/system/index.html","8ad999dcbee6802eaa0bd6f3a40cdc22"],["/tags/taskbar/index.html","22d7adb4101c6e03025bb04b0afd8975"],["/tags/前端/index.html","90fff607876a28e155119869edfbd83a"],["/tags/图床/index.html","f47508173f246052dffa3949fa5edb6d"],["/tags/注册码/index.html","b02a9104085c2196754b60908a5ebd14"],["/tags/破解/index.html","8e59b473b46579b355114fc53f956447"],["/tags/资源管理器/index.html","1b83ab680161472c3cf87f2f4bf6b7d2"],["/tools/av/Adobe/index.html","1197e0480dfdbbb1929e60395a88d406"],["/tools/av/Balabolka/index.html","7a0b5c83b6710ed99a6dfdde6bc4ebc4"],["/tools/av/Foobar2000/index.html","b85b5d7da0b7cdde62c98ed209eb3a9e"],["/tools/av/MKVToolNix/index.html","969fe281831a4cea090e615d1e01fef8"],["/tools/av/Paint-net/index.html","25eef1414746f496b619043dcc16f75b"],["/tools/av/ScreenToGif/index.html","97617a8cba3c695157c819514aa341c7"],["/tools/av/Snipaste/index.html","3b83c7af4d9a729dcae1c5f35b0b2c2b"],["/tools/develop/BeyondCompare/index.html","4e673773258c3ead73bc2c7334036fd5"],["/tools/develop/CMDebug/index.html","c9fac0524aecb4283eb411f8223adb0c"],["/tools/develop/Eclipse/index.html","65d3ca31988fb0ad9a3a9cb62a67c548"],["/tools/develop/GoodSync/index.html","0a2f7e3388cbed53eab9d17f75052029"],["/tools/develop/IDEA/index.html","20f348686965654e3b69d3714e8c6631"],["/tools/develop/NotePad++/index.html","399a41d5586fa75f7db2dc06f643327e"],["/tools/develop/Postman/index.html","f072ca75d3e53f4fb2310b4e638d3919"],["/tools/develop/SourceTree/index.html","6d7becbf24117d6c09b3030c246c52a8"],["/tools/develop/TeleportUltra/index.html","a404b661513f0cc39df0a999f461d30b"],["/tools/develop/UltraEdit/index.html","710eb5a1f6429e8a33bc3a3e30a89cb7"],["/tools/develop/VisualStudio/index.html","841063e92fdfe6b9828505f3421941a7"],["/tools/develop/VisualStudioCode/index.html","2231fabf7b40a0b3903c41cc0c600926"],["/tools/develop/WinSCP/index.html","128033b805c421b1cd63511741ed0fea"],["/tools/develop/XShell/index.html","f1413dcc1a83174749b87f74c3947926"],["/tools/efficient/Cmder/index.html","29a5d624415b5e1c903944d086a256fc"],["/tools/efficient/Everything/index.html","305e65e60e475aced8ac768f7c8e559b"],["/tools/efficient/Fences/index.html","f44d8009178f39ca216f80336ac77193"],["/tools/efficient/Listary/index.html","1569a1da7fa241b8ae0202288d68a625"],["/tools/efficient/Quicker/index.html","6752a860eb27d7bcce4bba8e442494b4"],["/tools/efficient/TotalCommander/index.html","3424e313726559142b3d12cdf57fc3ae"],["/tools/efficient/WGestures/index.html","58b10303cb3cbc4180f8937e57edf8b6"],["/tools/efficient/Wox/index.html","5a369629be6334127d662839d1717eea"],["/tools/index.html","49bebd79f5a0f34b899f8fd2ce53148f"],["/tools/office/PDFPasswordRemover/index.html","d770b231b8d8b36c222348d8f83f5323"],["/tools/office/QTranslate/index.html","d83efbc7b3cb842ed9fd5306692e699d"],["/tools/office/browser/Chrome/index.html","138802e3e93c53a1b4de68b7f4a2e758"],["/tools/office/browser/Edge/index.html","a6e89dccc49db0e3f8bfded81e825e1f"],["/tools/office/browser/Firefox/index.html","7939b2c1dc7579b9286d7aecd78b1419"],["/tools/office/compress/7z/index.html","031be1fe5841a626ff6e8453b1400f4c"],["/tools/office/compress/WinRAR/index.html","4b91872b41736bc64f40c767bbedb003"],["/tools/office/download/IDM/index.html","6bde4754e43ba7f42b070fb0159a448d"],["/tools/office/download/PanDownload/index.html","6c31adb5f3ded2075df09d5d9aa5ff20"],["/tools/office/download/WindowsISODownloader/index.html","d82489f24b6df88a7f70a50c527af385"],["/tools/office/download/XDown/index.html","8231fd3e96358797ec29db3b12b70061"],["/tools/system/Win10/index.html","eebc57ac48ad9865f947ed91fcfbe7d7"],["/tools/system/monitor/ProcessHacker/index.html","de2b7e9ab270109094b440016ac80345"],["/tools/system/monitor/TrafficMonitor/index.html","ec5c4f19aac01bc8aabdbe72531ebefa"],["/tools/system/monitor/TranslucentTB/index.html","288d0c74d6c9cdcd0ad9401d9ee703b2"],["/tools/system/monitor/XMeters/index.html","35eefd1e231adc41fafc47c851311132"],["/tools/system/optimizer/DismPlusPlus/index.html","3c0dcc43d9d60e01a9feeecced534d95"],["/tools/system/optimizer/LockHunter/index.html","69248b037e5c072bdde9c7dde0fe8f64"],["/tools/system/optimizer/Unlocker/index.html","47e1ba69c810c5dcf11683334e267081"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});




