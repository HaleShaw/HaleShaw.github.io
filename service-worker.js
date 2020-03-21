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

var precacheConfig = [["/404.html","b888240178af17d3ad95a5e09c8aa90e"],["/404/index.html","609894f9e8a619e1d8307c22592647c0"],["/Chrome常用配置/index.html","49a55c9b5259fa6c04339e48240aa593"],["/Eclipse常用配置/index.html","53f42e53d64f8571029cf3cbcc17660d"],["/GitHub-JsDelivr搭建图床/index.html","8ded75c953c41c39c07e27caae3d2811"],["/GitHub常用命令/index.html","f7de4a185258e3bd32169972bdd13dfe"],["/IDEA-Crack/index.html","c2eaa1ac3415f2585dfe93d1c2b37afa"],["/IDEA常用配置/index.html","7c5c562f0bfef45dfbd24333e6966de0"],["/about/index.html","d60da3496ea744c2b1094f9b5d08998b"],["/archives/2018/01/index.html","904a1818bacd041970431a5f3ed6d89e"],["/archives/2018/index.html","c239d9b237d03ae31387f01b8ebb3bd4"],["/archives/2019/08/index.html","1dd844e14048097db44666e8a45d9151"],["/archives/2019/09/index.html","05c24fd31bd08efdf865ab406d8db08c"],["/archives/2019/10/index.html","8738aef2b38a9cc9ae1d10651e672db6"],["/archives/2019/11/index.html","9a7096886be7a00b8ba0fedb578fc2fd"],["/archives/2019/12/index.html","33551562aecd93dd0fb3610da6746b57"],["/archives/2019/12/page/2/index.html","439a1cd2002f83a21d6e2b360e96da0d"],["/archives/2019/12/page/3/index.html","412019a2bb6d9c8d2d9771b8826e903d"],["/archives/2019/index.html","eb902d909b0362219c779313e41cc51c"],["/archives/2019/page/2/index.html","b9508bbf50c72181bcc780cb91ef1611"],["/archives/2019/page/3/index.html","da6516ee26c0b1e8588eed5ed1500aa0"],["/archives/2019/page/4/index.html","ade88aa323b5734d3230fe9881a26e39"],["/archives/2020/01/index.html","face4a114dbdd3a6fbd0f09906b96178"],["/archives/2020/02/index.html","58a254238cc3b526008db624f0fb9367"],["/archives/2020/03/index.html","602c95f31411270ebfcdc894cc31c4f8"],["/archives/2020/index.html","1cbb495c2bfbc351433630f70559b0e0"],["/archives/2020/page/2/index.html","002c76aab0c724606e48f983723b014a"],["/archives/index.html","7759719e6e75c3bc854913fba0b7dd68"],["/archives/page/2/index.html","7759719e6e75c3bc854913fba0b7dd68"],["/archives/page/3/index.html","7759719e6e75c3bc854913fba0b7dd68"],["/archives/page/4/index.html","7759719e6e75c3bc854913fba0b7dd68"],["/archives/page/5/index.html","7759719e6e75c3bc854913fba0b7dd68"],["/archives/page/6/index.html","7759719e6e75c3bc854913fba0b7dd68"],["/categories/Soft/Chrome/index.html","a20479fc7387d03f5e131d3f4cafcae3"],["/categories/Soft/GitHub/index.html","31631a79b657f65d36043cdd24bcbbdb"],["/categories/Soft/IDE/Eclipse/index.html","8603476f678fa2741ab4c87c871eae69"],["/categories/Soft/IDE/IDEA/index.html","aa78b53692365ac33ae1a04f88a1fff8"],["/categories/Soft/IDE/index.html","9d7508f4a8304b84c0ccb56b9804bcde"],["/categories/Soft/index.html","d98b344843bc99c99ce804394004f82e"],["/categories/Tools/Download/index.html","de7ddc107fb4df9c525d3ab7eb1863b4"],["/categories/Tools/av/index.html","b2f21e2740d1d2dcd20c328d888c5503"],["/categories/Tools/develop/index.html","26e8506a9ef42fab38575fd91b325997"],["/categories/Tools/develop/page/2/index.html","265965834188d75ccca5497aa5541788"],["/categories/Tools/effcient/index.html","bfb512d6ee818b45cd2c1940aa1fb71e"],["/categories/Tools/index.html","359393e8bf5528df9c712cb33cbacbae"],["/categories/Tools/office/index.html","f08aabaf415982054d4d8ca225d4793b"],["/categories/Tools/page/2/index.html","e00ccb016b32122dc6ece67bc0b1007a"],["/categories/Tools/page/3/index.html","777ed6fec99193e39725b278d0f73da3"],["/categories/Tools/page/4/index.html","0e3b432cac23b43f35e9cbbead4a4cb2"],["/categories/Tools/page/5/index.html","122f5bfb736fcfa28ad2b751a53cc51a"],["/categories/Tools/system/index.html","bd63e55cf353d697cc1d5cb4f4b150bc"],["/categories/index.html","e635bf62fc5e4b67234c5d24c4e43c56"],["/css/style.css","26e5ed7ffb821fd9071221678109156a"],["/css/tools.css","a31bebd507988bea0ccd63c7ba0909db"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","2ee072d3a4055cd74b8b053f6b2b3a98"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/index.html","c3756a49d7bef7942416038c9ee3b52e"],["/js/app.js","3efe9ec73cf447af4342722b18e3f90c"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/links/index.html","3bae06a708c050be8bf14bdf689a3370"],["/page/2/index.html","ae814a70267ede57f5890670a7e8e7a7"],["/page/3/index.html","f7005e7f4067ab20ac83a506e8c7ce6a"],["/page/4/index.html","9bf3c1490381cb2f4c05101910466abb"],["/page/5/index.html","af057b40fda3a14894ff9cef5c7aa123"],["/page/6/index.html","792def2c42dd768f132bf4ccc1c118f5"],["/tags/Adobe/index.html","ac0179af1e0165321463d97b5f689b06"],["/tags/Browser/index.html","a996a6a3c2b16552b503b2b7bade7c93"],["/tags/CMD/index.html","300311893aa90f2d67eec4f783028294"],["/tags/Chrome/index.html","96aba404f7ddb8909532ecd4d55f52d6"],["/tags/Command/index.html","c28922d231b89c1aa61b802bf02b59f7"],["/tags/Compress/index.html","c3f13e3ddf296542c5645fb399c819f1"],["/tags/Crack/index.html","25350dcf75dc82df481754d22f19358a"],["/tags/Download/index.html","3305d3270249739ba7c9f2f2428dd964"],["/tags/Eclipse/index.html","c7cc9453f0a3f64e467cc54c1bc90b05"],["/tags/FTP/index.html","d70c5bb363d6fca85951860bb6be610f"],["/tags/Git/index.html","5b18f095a1e9f0291ed5a4880108d763"],["/tags/GitHub/index.html","d86e4cfb5e6062f6cb952bfb770f67d5"],["/tags/IDE/index.html","14cd768de23c22c4065a0ab51122aa9a"],["/tags/IDEA/index.html","2c3bce6cea6b6d72d89e5d10b3361ab9"],["/tags/Java/index.html","7e74122e59dac45816d1c48e1c3f013e"],["/tags/JsDelivr/index.html","0c8b660771cff7decf3d1a83e86512a4"],["/tags/Office/index.html","fa1d1b10623023df668e38e1f40c2da3"],["/tags/PDF/index.html","58fa3ab8073f7d254ce4d0bd810c2a79"],["/tags/Snipaste/index.html","a39f7803fc5cf936baaf5ba5c3f56715"],["/tags/Soft/index.html","96efac6a40b1b0661d5615df6560d02b"],["/tags/Soft/page/2/index.html","e1998d1a8984b497140b2b8d43f51397"],["/tags/Soft/page/3/index.html","e8062351e3b8d4c1ee2fbcc66f19d52f"],["/tags/Soft/page/4/index.html","bc8830ce32e75f36ac1fa8cdc800e7e5"],["/tags/Soft/page/5/index.html","c133bf647215ceacfe160af79037ef57"],["/tags/Sync/index.html","f63e5c5c6d4beff6ad77278907566ae4"],["/tags/TC/index.html","a752545fd3a5efc1a00bcad4dd80005a"],["/tags/Teleport/index.html","84c70ca5ae91d8b482a2fea17d561dc1"],["/tags/VSCode/index.html","d2cf3214eebde07f29768a6b4d5cfa1e"],["/tags/Windows/index.html","191f95bf91f3a02720e3bb2274ff912a"],["/tags/av/index.html","094c4636c9b54e73b9cbd79d723c3b6b"],["/tags/config/index.html","ef798ef3f0958e94d3a3a8e71597fd34"],["/tags/debug/index.html","a5baa7582453291b71c4c3bb6a9472eb"],["/tags/desktop/index.html","5cd688be5e40d7ebd46defcc0890f960"],["/tags/develop/index.html","9be9aa0c6a89f15aac2ea49caff278c2"],["/tags/develop/page/2/index.html","a9c59a22016329f29824725694ad16f1"],["/tags/effcient/index.html","c4a24ac7244921a0d7f9be818a2a0b1e"],["/tags/gestures/index.html","567aa91488f0912a042c9e02f4563994"],["/tags/index.html","440496bba2ceaccc66bee69e8d8a39d2"],["/tags/monitor/index.html","cd180afc1fe48e6f560d90fb5f80a8c7"],["/tags/mouse/index.html","315d37c6755d06c879f6e0baf84b11af"],["/tags/music/index.html","d8f85fa1efbe8a830d4be17ad5edfda7"],["/tags/optimizer/index.html","4ebb00185eb7fce4fddfb8c7bbe9f504"],["/tags/password/index.html","71f8ae26e7faccf146ef89ba9206afbc"],["/tags/search/index.html","2f342ce3f2f5ff4814619c926caa5cf0"],["/tags/shell/index.html","c087c2290688b6306de96a99493c2964"],["/tags/ssh/index.html","e022072db4f61e61a17ba67cd6810373"],["/tags/system/index.html","bbb9532ad5ebfb1ea6a02f1a843159da"],["/tags/taskbar/index.html","f825d0577b2cfbe673a8c31949a09907"],["/tags/translate/index.html","472c2df3ef6b4e0d2deb911504247d55"],["/tags/前端/index.html","f76e5d61e692f279584d8157c474606f"],["/tags/图床/index.html","d4819cf01c4130af0c566546c2decae1"],["/tags/注册码/index.html","408708a499c9ffb10934765c847608f6"],["/tags/破解/index.html","649515ecc2eb33c626ee0e0e9a5db067"],["/tags/资源管理器/index.html","320c9b903fb5a63575b750c1a784b96c"],["/tools/av/Adobe/index.html","478503c5fb2f57636e61078c236c370b"],["/tools/av/Balabolka/index.html","f66543d8483c8c3cb1d97d867e1e43e4"],["/tools/av/Foobar2000/index.html","71c7c33a8d950a67078dbf43a8650bdf"],["/tools/av/MKVToolNix/index.html","7bacf33052d2fc2420020dbeeede6f00"],["/tools/av/Paint-net/index.html","bfd58de0e4704c335077eef86eb8c718"],["/tools/av/ScreenToGif/index.html","e966fc1b0fb381c45f2c32b34d181b95"],["/tools/av/Snipaste/index.html","8d54c09dceea3083fdb989f067fdfad8"],["/tools/develop/BeyondCompare/index.html","07ff90728eae3be02ae2f33146c97375"],["/tools/develop/CMDebug/index.html","ed0920955ca0a85b0665afe5ac5e9c1a"],["/tools/develop/Eclipse/index.html","710036d2eb6dd608abdc85aff755ca20"],["/tools/develop/GoodSync/index.html","82f535b4faa5628955f81ca6c4ad3b2b"],["/tools/develop/IDEA/index.html","7567388c43b36a2052fba2c20d875853"],["/tools/develop/NotePad++/index.html","2a561c80f0d4bd5fbce4fcd610c65e57"],["/tools/develop/Postman/index.html","058245f2a881919278a4915a6aa2f2f6"],["/tools/develop/SourceTree/index.html","4b7cd37eda8c576cf852d194925e3e1b"],["/tools/develop/TeleportUltra/index.html","c132cc0a6b4062e5988bf00a4330bb39"],["/tools/develop/UltraEdit/index.html","38318910d6df23cccedb020137da7ebe"],["/tools/develop/VisualStudio/index.html","26bb7874937c930bb8e6585f2f6dd274"],["/tools/develop/VisualStudioCode/index.html","0c143d2e663f62563d874b1722b0faf7"],["/tools/develop/WinSCP/index.html","054e877f0cacf11e6bf0713691b619c3"],["/tools/develop/XShell/index.html","c510ddbf3daa673a4ce7f872d8566547"],["/tools/efficient/Cmder/index.html","3f52a1c5dce8bd7290292dcce6b65f47"],["/tools/efficient/Everything/index.html","5c4107b128d1084858456e2c5d2b258e"],["/tools/efficient/Fences/index.html","71b696077de9ecf954e869542c3a04ea"],["/tools/efficient/Listary/index.html","5659d2e6222f1e2380b5fba2a67a5d91"],["/tools/efficient/Quicker/index.html","1fc5e15debfa3cd8ba0b777f69762d4b"],["/tools/efficient/TotalCommander/index.html","d4ac6ba17c6a6b90b75263e1a5456950"],["/tools/efficient/WGestures/index.html","949828f6bdd2d99ddc0390e2e6610460"],["/tools/efficient/Wox/index.html","46d9cf77463f05dd4963729de00c7e93"],["/tools/index.html","fd0c3a38fa250af5190b105c4cc8f417"],["/tools/office/PDFPasswordRemover/index.html","1ad341bae9a292429c3908d3927757c3"],["/tools/office/QTranslate/index.html","cebcab5fea2a7ff93c28579136e3b036"],["/tools/office/browser/Chrome/index.html","c3a07f7f0082d3f0148e82cfd933e047"],["/tools/office/browser/Edge/index.html","3e1291ec3c9dcea76eab9afbbfd1e0f1"],["/tools/office/browser/Firefox/index.html","e9c1136870b0e4cc85c06201820c129f"],["/tools/office/compress/7z/index.html","1da1534a4ed845e6e549d30b70577be5"],["/tools/office/compress/WinRAR/index.html","bbd34a85f1c24cbf8ce3ce5b135b2162"],["/tools/office/download/IDM/index.html","4233007db530b918c8722aced5a3248c"],["/tools/office/download/PanDownload/index.html","e83f62cebfa02dea568aec6f6d6257d2"],["/tools/office/download/WindowsISODownloader/index.html","78a34689a386784cf9123a9f7fa59627"],["/tools/office/download/XDown/index.html","c8c24f8e53642e2648ce05ba73d6c9c0"],["/tools/system/Win10/index.html","7652d56cd5fae90b74990df477287c9b"],["/tools/system/monitor/ProcessHacker/index.html","d06d4eb173d058a7f6e89c52d57ed28c"],["/tools/system/monitor/TrafficMonitor/index.html","e8806a03146c93d10c2f782a6b473d6f"],["/tools/system/monitor/TranslucentTB/index.html","761561ada56a9f54606a989241c12bb7"],["/tools/system/monitor/XMeters/index.html","6ff881ebe17ff0917726596f5f62e104"],["/tools/system/optimizer/DismPlusPlus/index.html","90a08ce994914a5737e52bd929306c38"],["/tools/system/optimizer/LockHunter/index.html","68e0b3fef446833f050a0c8870d2284b"],["/tools/system/optimizer/Unlocker/index.html","92f91a1a09e0dcba3c50863591211687"]];
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




