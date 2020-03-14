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

var precacheConfig = [["/404/index.html","e7c127d6cf92ef46dce234ec79075c14"],["/Chrome常用配置/index.html","8c98dd069cfc0da83f3484e639749908"],["/Eclipse常用配置/index.html","216638e7e65e188edf0e3c5d69e06b8c"],["/GitHub-JsDelivr搭建图床/index.html","2d6c928ea82ef18947b7312a8f591cfc"],["/GitHub常用命令/index.html","b063f9db65553103db9b8e6de19defd3"],["/IDEA-Crack/index.html","a70168d7cbbc8268b53fb85b441f7a90"],["/IDEA常用配置/index.html","97743bf2212bd3606c9be6bfde04a3f1"],["/about/index.html","3233a06bd903911461a677dfab16718c"],["/archives/2018/01/index.html","f3f14c5494ecec059d24a51643d885f0"],["/archives/2018/index.html","44cadf2d3277385be7752a0b62059f58"],["/archives/2019/08/index.html","e136bdd00d77d1530e05b4e405c6aa50"],["/archives/2019/09/index.html","21cdb27f62fc0481ef5c85e396ab05ba"],["/archives/2019/10/index.html","99c3ad679727c644d30ffafbb688e1cc"],["/archives/2019/11/index.html","e62ccd8498212626c1927efaa08c043f"],["/archives/2019/12/index.html","be64197dcfbf9d08e1df76b6b9823e1e"],["/archives/2019/12/page/2/index.html","59dd4e2ee68a2925cd5acef70da6f326"],["/archives/2019/12/page/3/index.html","3f3ab8f873c495580f1135c5985f75d0"],["/archives/2019/index.html","8b09c4ae3f53379342a9c4bf61c00f75"],["/archives/2019/page/2/index.html","289f2f5a8309e28a6bdcd8a2a93ae470"],["/archives/2019/page/3/index.html","fafa1ea97ed7f7b100c524b3bb26d096"],["/archives/2019/page/4/index.html","592b7e5b073381ab1cac2d9990ad3546"],["/archives/2020/01/index.html","5afb0f792fe197dc187f0ec1b1687755"],["/archives/2020/02/index.html","d9143d7e8a72d97a473bc39653baa0d3"],["/archives/2020/03/index.html","800a188baf64622b63e42cdcc10224dc"],["/archives/2020/index.html","7590ad4f5728c33cf1febc4a61813fd5"],["/archives/2020/page/2/index.html","2eed2a6863d1ddca78cd3e6d3c2e14fb"],["/archives/index.html","ef59c57055674caba792cd2874e57cdf"],["/archives/page/2/index.html","ef59c57055674caba792cd2874e57cdf"],["/archives/page/3/index.html","ef59c57055674caba792cd2874e57cdf"],["/archives/page/4/index.html","ef59c57055674caba792cd2874e57cdf"],["/archives/page/5/index.html","ef59c57055674caba792cd2874e57cdf"],["/archives/page/6/index.html","ef59c57055674caba792cd2874e57cdf"],["/categories/index.html","2b80a5b8cce78b941fc3aeae2ae889d2"],["/categories/soft/chrome/index.html","1dd9f18a9ee2380cfba6c8aa39582865"],["/categories/soft/github/index.html","90be5f63bb2ae07b09674db3cee266ac"],["/categories/soft/ide/eclipse/index.html","f45b7e79b77ffd693e945fa4aeca58b0"],["/categories/soft/ide/idea/index.html","6e6505937fa88401adb32e6eacd15b09"],["/categories/soft/ide/index.html","c2283aace7d7afc3dec9c697fce57bc0"],["/categories/soft/index.html","74300ff0d18960af3f42eca3e035b6f4"],["/categories/tools/av/index.html","d35536d389d7a8ad857f6323095c2dca"],["/categories/tools/develop/index.html","e0269b216958cf813afdf838d8e22500"],["/categories/tools/develop/page/2/index.html","23b18ef0ba5479a5de616578ac931b33"],["/categories/tools/download/index.html","e96d0ca65fd33a09d01d8fbcf7cad106"],["/categories/tools/effcient/index.html","e462036d539befc86c6897153628b429"],["/categories/tools/index.html","3534c1e847f590601b7126ae4bc40ae1"],["/categories/tools/office/index.html","844acee3f9a01ed9838e697452e000b9"],["/categories/tools/page/2/index.html","6bba8993b8ff0100b9117889abfb2a31"],["/categories/tools/page/3/index.html","c83ce24b3db384c70ec07462ed7a9268"],["/categories/tools/page/4/index.html","ef9304d88ef628be186db140367a38a1"],["/categories/tools/page/5/index.html","cc02bef0c457e43ae4a67fed543ce2e9"],["/categories/tools/system/index.html","d04b9f467e12e1722e6f7c279ab01651"],["/css/style.css","03a333223ec0c2793370d4d16f7fa6cf"],["/css/tools.css","bc852200b17716a405eb4c65bca1edb0"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","a8994a42bbf1ac472a8f1ac1b4911c6c"],["/img/algolia.svg","f36be37cfbfc4be962c64f77a88f4b9c"],["/img/azure.svg","a7577e663c1e0fb788fed78d7457ff35"],["/img/baidu.svg","124ce00f2785724d84e32ab6403386a6"],["/index.html","86f1c5d10235b598660e3e5fcd86addd"],["/js/app.js","5619acc77c6b2e7d78023d382978cd50"],["/js/search.js","63c61e56f228d83b544e21b4a7ed899c"],["/js/valine.js","3c2fbf0d8e8c9ce1bbf88f0bf797b9ee"],["/links/index.html","bbe69e85a4c092eee9ba2ddb7f36e3d8"],["/page/2/index.html","cd3066cce653226ef820d4a50354a94f"],["/page/3/index.html","e286c4bb700d65624c5793904a506072"],["/page/4/index.html","e4de3b3700c1cfbea9509cb6118d70b0"],["/page/5/index.html","30189e58e6ac165748e576d84e8bb863"],["/page/6/index.html","6142134b2fcc7c2746c5e118f40bd0bc"],["/tags/adobe/index.html","aa9e1209c604af214fc20640d396b55b"],["/tags/av/index.html","4bb3211460f3fd8c9fca48af006ac06b"],["/tags/browser/index.html","7823281835fdf80d657c9e04b07a8064"],["/tags/chrome/index.html","1942a4ebb0e9d098928f2a929a59e45e"],["/tags/cmd/index.html","077c5bc656843a6aff5768d2adff540e"],["/tags/command/index.html","eb19554fad26e7156135838ec35f0fae"],["/tags/compress/index.html","88723286c94a073cb70c7c698187c24a"],["/tags/config/index.html","1df38b611f8a11dd5987a0346a7368bc"],["/tags/crack/index.html","d78b85ac72fb97f9068f0416c3023db8"],["/tags/debug/index.html","8138bede5d80acbe7171be2813e83311"],["/tags/desktop/index.html","a71d306793c43b87ea1235b52e619e0b"],["/tags/develop/index.html","baad2ee8f4c519b91f9aa8c83b84f2a2"],["/tags/develop/page/2/index.html","7746e24769ca37bf1aa5ec602f42d68a"],["/tags/download/index.html","b93573da50f8d0a53b919433f42cf404"],["/tags/eclipse/index.html","2d56ab66a12eab74eb8840b24fbd1029"],["/tags/effcient/index.html","c7740dd3323b93d643710681ed626391"],["/tags/ftp/index.html","3737f96687a218bf924d9866f2f37f6c"],["/tags/gestures/index.html","8abd7b5e257f7a81a07b67ed66ca26ae"],["/tags/git/index.html","a9c7660638bd707f8585164166589d12"],["/tags/github/index.html","7de0e1df2c8f995a02432cb5978b5d9a"],["/tags/ide/index.html","fbbbe7f6b39376c98efaf09a3782e927"],["/tags/idea/index.html","d914c66b12c51113e0de3daecc6b40dc"],["/tags/index.html","bf963dbb3a3ca23c3a5cabd5f64a67b2"],["/tags/java/index.html","5fcec81f77d98ce6cdf8f3e5a9b58a31"],["/tags/jsdelivr/index.html","82c5e2dd6dbf010bb9401f518748abbd"],["/tags/monitor/index.html","00195f63ccebfb6d38ce3f78f2dbcc94"],["/tags/mouse/index.html","12764e64cbc7ef0aaecc756fd7704907"],["/tags/music/index.html","d78feaaa76fac88cd0af31a60f4d7ba2"],["/tags/office/index.html","a24cd718b1a656875d11abb0144ac49e"],["/tags/optimizer/index.html","ad9c6a9cc3948f4d46456c48dd9a50e4"],["/tags/password/index.html","80013cdae052111a198a3659b06681aa"],["/tags/pdf/index.html","1b41e7c60fba33198120da337dae9b03"],["/tags/search/index.html","11caf4f10d3b2657a2c7b9a29ce639dd"],["/tags/shell/index.html","7a4279e049baf9ad4ca118858f73b227"],["/tags/snipaste/index.html","1b9e5d5dabebce60309893aed731c6df"],["/tags/soft/index.html","94b91f91d92dcdd7366af183f829ba24"],["/tags/soft/page/2/index.html","77a8acb26f6c767d00be1c853fa7c08b"],["/tags/soft/page/3/index.html","8d774b1d11bb72038c8335c649a8ece8"],["/tags/soft/page/4/index.html","43154c3db0f6b3972e454f738d048610"],["/tags/soft/page/5/index.html","e694857bd1f7b55560b4cc52ebc77ed0"],["/tags/ssh/index.html","d3a16f71afa6abae68e266bed83996c8"],["/tags/sync/index.html","d8f9aec8a888d0c4717fa93372a0bc5c"],["/tags/system/index.html","bc4620de54304b88ec9b924c916d92a3"],["/tags/taskbar/index.html","968ada59acd6881652ab452ac9857f77"],["/tags/tc/index.html","4ea462db06611d5e2227c52efd3437be"],["/tags/teleport/index.html","183698ac10c457a9ef469e5e6dfc8be8"],["/tags/translate/index.html","f731acc95e01c92a0dacc30d67075c81"],["/tags/vscode/index.html","336e33d2a438c4148645d1fc2b4bd360"],["/tags/windows/index.html","e2f669953aca1cd2a953520d37d3a390"],["/tags/前端/index.html","f05aed57d402324dea5edea1a80df107"],["/tags/图床/index.html","6baea4ded936b228e1112174fa31eb75"],["/tags/注册码/index.html","e35e013475aea3124d5893ab6b951e60"],["/tags/破解/index.html","b416afabb0e4c917bcb220e0b237238f"],["/tags/资源管理器/index.html","e5fe21c4be539801b01f60c01acfe890"],["/tools/av/Adobe/index.html","380787e73d22e2efb2b38467d578dcbb"],["/tools/av/Balabolka/index.html","d87d88c338e0746277c025cdba5d102e"],["/tools/av/Foobar2000/index.html","944725d89abf395fa93ab92672585f16"],["/tools/av/MKVToolNix/index.html","bf4cbf7c3dcb6cefb387a9cd7beb34c7"],["/tools/av/Paint-net/index.html","9f8fc3a810e4e38eed5417750be4c86c"],["/tools/av/ScreenToGif/index.html","6d69ea03b1d3b201e993d602622e91f6"],["/tools/av/Snipaste/index.html","f0c93c5fbd4b86ac2d82e6aee3ea147e"],["/tools/develop/BeyondCompare/index.html","b64a161bf3cf5739966d7fe504549f56"],["/tools/develop/CMDebug/index.html","9a5b660c9263048a93a38fe7a6ed1002"],["/tools/develop/Eclipse/index.html","7942d3d2429012678081cdd0458cf4dc"],["/tools/develop/GoodSync/index.html","c89448b4e6505914f2abec6fe6441b36"],["/tools/develop/IDEA/index.html","1829bd1f7bf05bd44568f13275f41b48"],["/tools/develop/NotePad++/index.html","a113fba24955add5b77b91d5dcbc2fe4"],["/tools/develop/Postman/index.html","d350c73cebd7a25097211e4c71870c8f"],["/tools/develop/SourceTree/index.html","dc222395280bb0d82727595010132ffc"],["/tools/develop/TeleportUltra/index.html","08f565003a4f480a5c1dd2dbd558ca39"],["/tools/develop/UltraEdit/index.html","2d40dd637446e9a4540a37ba72f754e0"],["/tools/develop/VisualStudio/index.html","5b9a802a3c1e969f4138ecf91ff1ba92"],["/tools/develop/VisualStudioCode/index.html","4d0f310eff9142da08dadd54c5fbc7e4"],["/tools/develop/WinSCP/index.html","62d34556c705d687f7e9e076d4348bda"],["/tools/develop/XShell/index.html","85aa4eccc4d87c28345f35c1a9be8d04"],["/tools/efficient/Cmder/index.html","0fae6f402a4d4f64c68a983e06dc6204"],["/tools/efficient/Everything/index.html","fd5f5e32b09661f0ed38e2e14dab4319"],["/tools/efficient/Fences/index.html","c161b8c41cb28f6cb2c675ceff5aed46"],["/tools/efficient/Listary/index.html","fa178386fded9424d57ac9eb136df479"],["/tools/efficient/Quicker/index.html","f19d3028731d98b02f51f402cb9c99ae"],["/tools/efficient/TotalCommander/index.html","9ca683a5e27ceb54c7680f492991bb09"],["/tools/efficient/WGestures/index.html","e489d341bb3abeb4a55a5662398b4e23"],["/tools/efficient/Wox/index.html","3a3402ac8da64a96e2afa378a696d4d8"],["/tools/index.html","081058165364ab8f15d291d149906baa"],["/tools/office/PDFPasswordRemover/index.html","74d8ad39375fc6fef6a9bd96189e9f9d"],["/tools/office/QTranslate/index.html","f12c1c1b0c845fd9a7e24a4243cc88cd"],["/tools/office/browser/Chrome/index.html","42867f01592b531f6ae410b7b46aef13"],["/tools/office/browser/Edge/index.html","7133d8031f2343b186f3785abd046b37"],["/tools/office/browser/Firefox/index.html","7407aa9be595b80f179b74af19fd8a56"],["/tools/office/compress/7z/index.html","0d9f1033542d748f3dd05530ab069b9c"],["/tools/office/compress/WinRAR/index.html","b69f7f1214c4ef027e49f11af39f7454"],["/tools/office/download/IDM/index.html","2daa03d0f63a0ec4e1f2c82e09ccf187"],["/tools/office/download/PanDownload/index.html","be4b5e3aac86beee7c4d915bab9c6cdd"],["/tools/office/download/WindowsISODownloader/index.html","2493d04a3b050b2b8241857ee30cddd1"],["/tools/office/download/XDown/index.html","8683df8a0243603ee770ed2f1bac6c10"],["/tools/system/Win10/index.html","5b4b1c47623d6ce7f27797264bb0a1b6"],["/tools/system/monitor/ProcessHacker/index.html","e619d4993f5b50a05bac647de716051d"],["/tools/system/monitor/TrafficMonitor/index.html","e55d0ab4cfacc54cdf5f573cffa73cf1"],["/tools/system/monitor/TranslucentTB/index.html","0817f437970e32a2bf6a6cf0a9a6e7d6"],["/tools/system/monitor/XMeters/index.html","d63d325d1fdbe2c8b622629c33b2c825"],["/tools/system/optimizer/DismPlusPlus/index.html","9e1d87e965e18e25d213f0b3e566c0be"],["/tools/system/optimizer/LockHunter/index.html","627581dd268f9e1be6768ed7f5e3e140"],["/tools/system/optimizer/Unlocker/index.html","d475e21373fd4108a2b526ae24ff45fd"]];
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




