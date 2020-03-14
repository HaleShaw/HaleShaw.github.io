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

var precacheConfig = [["/404/index.html","b59e365d4bf50b0583e38e0322bf756a"],["/Chrome常用配置/index.html","adfbb791c7de3c5247535afe9f6e92fd"],["/Eclipse常用配置/index.html","649be073da0e2b1349dee555f537b355"],["/GitHub-JsDelivr搭建图床/index.html","9c47ffbf074bb4236d3c7ee9c33359f1"],["/GitHub常用命令/index.html","7d4ef0925ce5476144fdafde4581e5fb"],["/IDEA-Crack/index.html","83339aec47bdc7235001150d027ed5eb"],["/IDEA常用配置/index.html","b1a10ff35c384116f7bcf8c40f44d6e3"],["/about/index.html","c955fe333b120b19e358bde68380fc30"],["/archives/2018/01/index.html","575bffaf7007284062c1da0140f47606"],["/archives/2018/index.html","1c30d3f17ea482c9d8cc37672fb54e67"],["/archives/2019/08/index.html","a5b8db3b8fbdfe3ce57ab92819970b54"],["/archives/2019/09/index.html","efe1c190b5f4e1db0bacaebe2132e6aa"],["/archives/2019/10/index.html","40df0416de9186c9525e3013d3d1eccf"],["/archives/2019/11/index.html","c81c8244ec5548bb16cfc70e6976c481"],["/archives/2019/12/index.html","809680ca7b2e40be3ea47d43ade81423"],["/archives/2019/12/page/2/index.html","6dba82eee8e1f850f272c455a70d3f63"],["/archives/2019/12/page/3/index.html","19c356570a95b16f2877f01384954481"],["/archives/2019/index.html","7fbad56797c40c49f47b92a67b14e903"],["/archives/2019/page/2/index.html","57ac6ab2742ca86867d19ab83a8ef6ec"],["/archives/2019/page/3/index.html","b484eecec2fc681a34199e9fdb867856"],["/archives/2019/page/4/index.html","599b616b2952de0ccdf871f35a87beed"],["/archives/2020/01/index.html","a851926121da1fd0db1995aab98382b7"],["/archives/2020/02/index.html","f6e46e1ee013a29ff44eec642c7a4b78"],["/archives/2020/03/index.html","5fd08879cbedc02e96021f8f2d09c0b2"],["/archives/2020/index.html","c5cb110bc26a9a5125dc0318d2f0bb37"],["/archives/2020/page/2/index.html","492b5951e595b3ca309a591918bf6d2c"],["/archives/index.html","43a3a7cd7fc133036c4fe2f9b2cc904c"],["/archives/page/2/index.html","43a3a7cd7fc133036c4fe2f9b2cc904c"],["/archives/page/3/index.html","43a3a7cd7fc133036c4fe2f9b2cc904c"],["/archives/page/4/index.html","43a3a7cd7fc133036c4fe2f9b2cc904c"],["/archives/page/5/index.html","43a3a7cd7fc133036c4fe2f9b2cc904c"],["/archives/page/6/index.html","43a3a7cd7fc133036c4fe2f9b2cc904c"],["/categories/index.html","af97d28d189d89d7520806bf8fc0a2df"],["/categories/soft/chrome/index.html","746810c66468959e90b1f308f697d6da"],["/categories/soft/github/index.html","4245df51260ae4feeea5378e7913aee4"],["/categories/soft/ide/eclipse/index.html","cb45289504326bc29916e9b635e94d00"],["/categories/soft/ide/idea/index.html","b12dfabdf907c1ab18184dfe02b24744"],["/categories/soft/ide/index.html","f2b12a4149e40ffecf659d36ee0564a4"],["/categories/soft/index.html","ca5ca5ec7d0072e3cdb3d222eb389499"],["/categories/tools/av/index.html","de7881de1a89b3aeb94bb66cccb5d90d"],["/categories/tools/develop/index.html","80fe9b2e2e9f6d3a78b56ae44503b2db"],["/categories/tools/develop/page/2/index.html","e16ab78da59c2bae90d10d7d64ca6398"],["/categories/tools/download/index.html","80d2cb4dfda9b94cf02e632efecb06fb"],["/categories/tools/effcient/index.html","1572052ed5356ea43402e827f17e2c61"],["/categories/tools/index.html","639629ff3bed071a425097ee9e63a9c8"],["/categories/tools/office/index.html","d5c0df4be4e35078ccfa70eaabfda1f9"],["/categories/tools/page/2/index.html","cf29fad7732b4228017699b8a1900d66"],["/categories/tools/page/3/index.html","652b73518202eba2a355aa6f1f64b28a"],["/categories/tools/page/4/index.html","bc436cdc62392cb1c60d0793f0fa846e"],["/categories/tools/page/5/index.html","19c971bd3efb04702708423220492c83"],["/categories/tools/system/index.html","7385f7a26b7d7172f9c808e3b538ea9b"],["/css/style.css","41360a4e3281f48e402e302c99370de7"],["/css/tools.css","bc852200b17716a405eb4c65bca1edb0"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","bc638b711a1fd777c737d778535348a5"],["/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","ceedb0c07096c2e31c833680f3cf7f5d"],["/js/app.js","a5d659af4b9d17196436c302e39ec916"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["/links/index.html","21ac8be967dca7441eb01adca4e49a7d"],["/page/2/index.html","b250bc84493d0fdaf5394b298f437cea"],["/page/3/index.html","330ea599f90834292ce34feaf968ec64"],["/page/4/index.html","f7464ef8f1f3761dd4534f90feeb6aab"],["/page/5/index.html","734c33db7ddfb4d48c25c2fa6a198237"],["/page/6/index.html","17da3b4d859623c8a529e96e361609d4"],["/tags/adobe/index.html","e167be6ca0bc04022507611bb2982986"],["/tags/av/index.html","66210cad30eaaa0a86c99b9dbda06c93"],["/tags/browser/index.html","2d4673d7b315975c8f4f6a426d3fe40c"],["/tags/chrome/index.html","d4b62757da016c3743e59c239e2af0a1"],["/tags/cmd/index.html","86411f8c900223825b9b71105ca87ebc"],["/tags/command/index.html","a3326bd3c4d131df74cbc1edb89517ef"],["/tags/compress/index.html","c138dff5b32f92152b0026032da8b455"],["/tags/config/index.html","af8f50283626428d18914cd62b942d41"],["/tags/crack/index.html","c10e0ba5c408caab2c735fbec8e4876e"],["/tags/debug/index.html","3ebec2575ccbaf0d1e25920003cb84b9"],["/tags/desktop/index.html","03aea262bebfdda7d42d6c5cf6955672"],["/tags/develop/index.html","300a8faa50495f104df900912f9068c7"],["/tags/develop/page/2/index.html","d96d687dc87e9440f81aae9689fbef94"],["/tags/download/index.html","45c015f7bec8393c596e4c212ea9c855"],["/tags/eclipse/index.html","2e55c8a47ca0d0306c4299d5b9a6373b"],["/tags/effcient/index.html","f3747a98c699d0e439637deb654435bf"],["/tags/ftp/index.html","275c75ceb9d44c35378d60b414800126"],["/tags/gestures/index.html","63bbf2de0969b1954d2c42edb479e677"],["/tags/git/index.html","98682c5bcd4921614d7893ac46917301"],["/tags/github/index.html","bcf5c2fa5f60d8cb35093d39cf9493a5"],["/tags/ide/index.html","0c8350287a7ba2a2247fdbc5fa415439"],["/tags/idea/index.html","dd4002cb2233cc0847e97d1d6a83f3f3"],["/tags/index.html","d1ed7512df35e75110392333c228f1f1"],["/tags/java/index.html","94a5ea441b2d138cd6b146e766dcbe58"],["/tags/jsdelivr/index.html","f145a99931f07a480c062fc044944fc0"],["/tags/monitor/index.html","f9040aefc490e904773a825008abd591"],["/tags/mouse/index.html","3e3a00af36ab3d3d7d847ec7f48b96f9"],["/tags/music/index.html","401f23533032330264eb7a521fa2e929"],["/tags/office/index.html","6ce581cd3954f5e17ff6641fcc815d16"],["/tags/optimizer/index.html","26bc4eb2f5dc2deaf7cde6e6776c9c8c"],["/tags/password/index.html","757badfe9eace134a088b63d971cd865"],["/tags/pdf/index.html","0b7cbe7d7914d3c71cf7e9112cef1a50"],["/tags/search/index.html","61ad5d461957a0fe275ba0c993766406"],["/tags/shell/index.html","04acd98ef9686be6c53056d0b8bf78ff"],["/tags/snipaste/index.html","a25745049861b986ef16b49e398216e1"],["/tags/soft/index.html","081b1096a9f05fb54333793b149540ec"],["/tags/soft/page/2/index.html","b0abf57d1dd14db69ca9ec720cc84bd4"],["/tags/soft/page/3/index.html","9476a9455d91d0ef3ddb19b9bfcf13b0"],["/tags/soft/page/4/index.html","97bdd9113e6522649066669ab313d7a0"],["/tags/soft/page/5/index.html","af9f3010ca5ba165d1e9ff9dc1952b6e"],["/tags/ssh/index.html","32e0625222c28cc826bb39e3ec2cb2c7"],["/tags/sync/index.html","d83370e7e6fd9c94710e2a92414091d0"],["/tags/system/index.html","5f5d2ed77e2970951d2690ca529ba691"],["/tags/taskbar/index.html","8960888c95a85602a395a38d3de134f0"],["/tags/tc/index.html","d17575603ba4624c49d1d1f192b372c4"],["/tags/teleport/index.html","2060196589c91df43e2843bd359dee79"],["/tags/translate/index.html","ff3d8d39370d3c607be574680a039762"],["/tags/vscode/index.html","1d7b4cd8a1bab1f12465328e5de62610"],["/tags/windows/index.html","39b859b34ce865bd877320a258ef6369"],["/tags/前端/index.html","0d0f0b9b730ee4d36f7ef74a990386eb"],["/tags/图床/index.html","de4a35a658d055d9b786117e2904d9a2"],["/tags/注册码/index.html","e22d220cb9c6592443c0cf4cc2403dc4"],["/tags/破解/index.html","30b85fe55f9b926bf47c030fcc3ae9d7"],["/tags/资源管理器/index.html","46fe86a79a1208917625f50a3766cd0e"],["/tools/av/Adobe/index.html","f34a29b155e376c33b94b7c527a3ab1a"],["/tools/av/Balabolka/index.html","f0d2fad1aa18c8ac5dec2ee1e2a60a41"],["/tools/av/Foobar2000/index.html","5f7ae665146e14443a8f7c108beb0b8b"],["/tools/av/MKVToolNix/index.html","f01bd1801abe17c9d4fa1f2cbbe07887"],["/tools/av/Paint-net/index.html","4d37146f6fba2a2b9c326153878a1df6"],["/tools/av/ScreenToGif/index.html","fbd79f28b3966534601b1cb3c7550e76"],["/tools/av/Snipaste/index.html","fd578cd79dcaab983c1c191c65854b24"],["/tools/develop/BeyondCompare/index.html","ae9915fab0bd2c6761f4673887afad5e"],["/tools/develop/CMDebug/index.html","d74c6a291dfe509ee33e74d043854cf6"],["/tools/develop/Eclipse/index.html","07ebc9dca2e61e661bdbf51494ff1e01"],["/tools/develop/GoodSync/index.html","b4df4c5a156e31fa61c824cf36973178"],["/tools/develop/IDEA/index.html","2bb36d8e379ced39a5edecc075e93068"],["/tools/develop/NotePad++/index.html","206c32beb4fad38d605904ea20c4d0f8"],["/tools/develop/Postman/index.html","c43841f6db1c5cc952b95564257f7383"],["/tools/develop/SourceTree/index.html","dfe467e4537759e2eabae3ae66ef0268"],["/tools/develop/TeleportUltra/index.html","5a2906bc901bd20851a085ea2303f1d3"],["/tools/develop/UltraEdit/index.html","d1d91ac2a435cc5b23150b15847857f9"],["/tools/develop/VisualStudio/index.html","fc698c8796e45017e6b09614468c2ca6"],["/tools/develop/VisualStudioCode/index.html","a2a57ea0b75738a74fd5fefa70f04343"],["/tools/develop/WinSCP/index.html","1c8d5bfb622d62112be913dbdd02519f"],["/tools/develop/XShell/index.html","6ad2eb6717a6683a849d70ec03430a24"],["/tools/efficient/Cmder/index.html","6747ba950640c2afc002da88749e69fb"],["/tools/efficient/Everything/index.html","7072fb1021fcd565f3de42bceee7cdfc"],["/tools/efficient/Fences/index.html","e98d8f7edf08f9dcebe706a247fa71ff"],["/tools/efficient/Listary/index.html","c5d61e58ba539a13f33a729b22ab798d"],["/tools/efficient/Quicker/index.html","e7e1287718ad356094d747915ed66c2e"],["/tools/efficient/TotalCommander/index.html","6774c67108dcbe74c69f8cf94d30e7c5"],["/tools/efficient/WGestures/index.html","fcd01df9be0d4fb2a90c6974706a43c0"],["/tools/efficient/Wox/index.html","69c57c0ba87d6f3c801e9cbd4bef8f92"],["/tools/index.html","fbf6a3c0e82019589917b56cda912bff"],["/tools/office/PDFPasswordRemover/index.html","3c3accf6c6ccd29f0fa5aaa4bd514e6a"],["/tools/office/QTranslate/index.html","fd0b14f6bd7a88f03cdebc8a75dd7cc5"],["/tools/office/browser/Chrome/index.html","0ca29c5af1f1182cf7002fd926097edb"],["/tools/office/browser/Edge/index.html","615d4d9b8ecf42fd63b312cfcccb123c"],["/tools/office/browser/Firefox/index.html","cfb9c0404a621b5c4a2d8c5a6f8baae8"],["/tools/office/compress/7z/index.html","08a049d7fbc4b69282336682da27f0c9"],["/tools/office/compress/WinRAR/index.html","4b22f00e65fe8403d21508e5bd52aa45"],["/tools/office/download/IDM/index.html","bc0ba0f75566d9bd69682de0e821feac"],["/tools/office/download/PanDownload/index.html","08334ee2e45a30a079207008b29f43ee"],["/tools/office/download/WindowsISODownloader/index.html","08e4d01991308ad6eb74076f41fc6f1f"],["/tools/office/download/XDown/index.html","4cf3d2ca8cafebf5d675497cf2e7754a"],["/tools/system/Win10/index.html","078f385cf2eb7bc3d4f6080f9647742e"],["/tools/system/monitor/ProcessHacker/index.html","90f62b3ec1b2b3fe7a6ac6a20a226006"],["/tools/system/monitor/TrafficMonitor/index.html","7583a62b0502061e7fde5096794d6564"],["/tools/system/monitor/TranslucentTB/index.html","1125cd5c239921cb362e8a27de08ad6c"],["/tools/system/monitor/XMeters/index.html","8106bb5d01ffd3e17fe3a94e3734f237"],["/tools/system/optimizer/DismPlusPlus/index.html","ea37e2ecb7046e19819e52aca9de39da"],["/tools/system/optimizer/LockHunter/index.html","9de51bb4e81cf649efe01ca9281efc93"],["/tools/system/optimizer/Unlocker/index.html","66f553cb2ebde976d0fb91f85f4cf2bd"]];
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




