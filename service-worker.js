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

var precacheConfig = [["/404.html","db6b6813cb40b9df9de8f5300cb4918e"],["/404/index.html","878308891da031f9891d40e40f09c175"],["/Chrome常用配置/index.html","449a4118933f242a01f1ea221cee0e59"],["/Eclipse常用配置/index.html","3245d6c95fad429119f1465048c6c0d6"],["/GitHub-JsDelivr搭建图床/index.html","d183184a7dfbda8a42db1be0038d4d5d"],["/GitHub常用命令/index.html","70febaae5971aebd7803a0a0ecac24d3"],["/IDEA-Crack/index.html","745ab15349e93a7f8b4f81912d69dcf9"],["/IDEA常用配置/index.html","eb46cb0bc13bc45475251c801b78a8b0"],["/about/index.html","d60da3496ea744c2b1094f9b5d08998b"],["/archives/2018/01/index.html","694cdf16e85277d5c4a47c2553f40ad4"],["/archives/2018/index.html","1c69568d0dec8064bf72d5628c67e47f"],["/archives/2019/08/index.html","2d09fd721f307eeb9d6dfa2177b0d5bd"],["/archives/2019/09/index.html","570ed4a3cc164e8b744726916208d612"],["/archives/2019/10/index.html","141f9ae2ced55c4c5fcd808013492067"],["/archives/2019/11/index.html","8aea7562b0c7d6e60ba18355fddad649"],["/archives/2019/12/index.html","af57dbb13766864e721a42dd528d5a74"],["/archives/2019/12/page/2/index.html","bf7ef40da5e241591f3de88d8bd8e533"],["/archives/2019/12/page/3/index.html","c98631fd802575a0bdcef8b31c581288"],["/archives/2019/index.html","daa1b3bd778cd413beef3fb1f770f0ef"],["/archives/2019/page/2/index.html","7934fd1b11af276b4a8e1d36a552c0a3"],["/archives/2019/page/3/index.html","3e11a75bb50fb89ce49ab85c475348f4"],["/archives/2019/page/4/index.html","754fe26504ca23f30536be0243bcfdd6"],["/archives/2020/01/index.html","66a0fc5f9cdb5d21cbbff944b6fc134c"],["/archives/2020/02/index.html","be943e81ec9e4ec6fecfb7f9db406011"],["/archives/2020/03/index.html","764c6becbe3571d413e6927a459fe2c7"],["/archives/2020/index.html","3c31ff020d6a4ce624500f172f2e69ed"],["/archives/2020/page/2/index.html","9315244b2b9184aaaf655cc88da0c80e"],["/archives/index.html","c9340141e5a46976a1966c09a3f7aa50"],["/archives/page/2/index.html","c9340141e5a46976a1966c09a3f7aa50"],["/archives/page/3/index.html","c9340141e5a46976a1966c09a3f7aa50"],["/archives/page/4/index.html","c9340141e5a46976a1966c09a3f7aa50"],["/archives/page/5/index.html","c9340141e5a46976a1966c09a3f7aa50"],["/archives/page/6/index.html","c9340141e5a46976a1966c09a3f7aa50"],["/categories/Soft/Chrome/index.html","d5020fe94ae3eacf56273e9faa94c78d"],["/categories/Soft/GitHub/index.html","037f2b1881f990ede65ad083cbb92d49"],["/categories/Soft/IDE/Eclipse/index.html","e006f80a86eb9150153b581919566f4f"],["/categories/Soft/IDE/IDEA/index.html","a003aa3d5ae91017fa654fbb3034b3eb"],["/categories/Soft/IDE/index.html","449799a66f8f21b11a73075a7e6d3769"],["/categories/Soft/index.html","ed6a95eb19cf0e9aaa9cb21ff25435c7"],["/categories/Tools/Download/index.html","570f693a40e526267c6d79cb3998fb6f"],["/categories/Tools/av/index.html","66ff73f68e2fc3a28748cd16aedbff4f"],["/categories/Tools/develop/index.html","328e5d35add645137300d8edbbebd30e"],["/categories/Tools/develop/page/2/index.html","36bc3ff2f3b9ed394cf860996d72a081"],["/categories/Tools/effcient/index.html","9b0f99d52c8171c35fb39f6b3f48a397"],["/categories/Tools/index.html","5f1ce0f17ccf53e2e7bcc4d1995a4f81"],["/categories/Tools/office/index.html","ed1bb6b861acbd0e8e2f6b4363e9ff53"],["/categories/Tools/page/2/index.html","a0287b648a29be49b78a0a448947149a"],["/categories/Tools/page/3/index.html","8443d34c7bc9cb873497c7356c705211"],["/categories/Tools/page/4/index.html","555511268f700a49693660f457dbcf28"],["/categories/Tools/page/5/index.html","94134d7205aefcf46c03be7a1b8e1ca2"],["/categories/Tools/system/index.html","9bf465ef424765c75530f84b72c21e25"],["/categories/index.html","ca784b4ac86b291b048fa007c8475820"],["/css/style.css","26e5ed7ffb821fd9071221678109156a"],["/css/tools.css","a31bebd507988bea0ccd63c7ba0909db"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","045c38dacf3b75c534064aa722353faf"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/index.html","f302cc4056a238bdbcd4e077cd79333f"],["/js/app.js","3efe9ec73cf447af4342722b18e3f90c"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/links/index.html","08bfb640442e36366ffa5ca1fbbae6a5"],["/page/2/index.html","ab4824be4eb942d326f4d83f3d453419"],["/page/3/index.html","1a9ffb41b400f646b22970ac189e1157"],["/page/4/index.html","c83843e24449bf35867b420f92f9c5f4"],["/page/5/index.html","5855f71083d3f610b24cf61da0de9700"],["/page/6/index.html","23b8bdc3cea786882071bf24f589f4bf"],["/tags/Adobe/index.html","8f59b0c60245e359c4ffaa7ca5d65e32"],["/tags/Battery/index.html","03935ce93190c63849db63a8d19d9233"],["/tags/Browser/index.html","533ab21b2714b256fb0cf904e25cb9f8"],["/tags/CMD/index.html","ea0d3bc2d897eb9d7bced647a7d88cf3"],["/tags/Chrome/index.html","3dc3880f3fb26efbbd08e5463bc7c2ba"],["/tags/Command/index.html","8fb13d8b5a2bbe849c09d56522e8baf7"],["/tags/Compress/index.html","55569d767029b89c672ca295c9017760"],["/tags/Crack/index.html","a9e743e171b7f4add2f10127f2aeb70a"],["/tags/Download/index.html","a15bab10390afe9a5e67ff11ede6a576"],["/tags/Eclipse/index.html","94fa61fa67fde7ca2bc73628797dd8a5"],["/tags/FTP/index.html","ddcbeb41a81b5d54dd23ff8c3cea4522"],["/tags/Git/index.html","5d66d552fd936cac79f9998d466b058c"],["/tags/GitHub/index.html","f776aa2840c1c485a534b7b261108778"],["/tags/IDE/index.html","2f3ceda0d27691ef71d880745b861422"],["/tags/IDEA/index.html","be980991069a66c77723238d13dd5fa6"],["/tags/Java/index.html","c096a263e1c795faa961096a84320bc8"],["/tags/JsDelivr/index.html","6e22326361eff2c5506a286e8bc609a5"],["/tags/Office/index.html","623190e260da127aeb27571106a4e712"],["/tags/PDF/index.html","bf21d46d12bb7f3b6c645c10dd749a11"],["/tags/Snipaste/index.html","d1558353c64aef8c8adb35424ecc1a7c"],["/tags/Soft/index.html","b46a783c7b858e9b0c57bedb733e8e30"],["/tags/Soft/page/2/index.html","fa9527682aca51bb533088e69387b985"],["/tags/Soft/page/3/index.html","b36caf5e1e1c7d08f3abc8cfdb02431d"],["/tags/Soft/page/4/index.html","7bcb976b3b0eeffaae1806740c5c5df8"],["/tags/Soft/page/5/index.html","e1b3c0c1ce4d13125940db231d20090b"],["/tags/Sync/index.html","53723b1ace6813b65dfedb0d087dc735"],["/tags/TC/index.html","08c6f9817367c89beabb87fc15a9db69"],["/tags/Teleport/index.html","a37f5be6d099a094d1684d370d08ddc7"],["/tags/VSCode/index.html","842301464c23b2110bae396b5eabfbef"],["/tags/Windows/index.html","fde9f65176ba88fc0c4b6656a470085e"],["/tags/av/index.html","c956845a1ae36df621397df69f481d68"],["/tags/config/index.html","68e4e9a3448e59916aad8fbe30c920fb"],["/tags/debug/index.html","995fb3d6e811e7942bb022f6648b7582"],["/tags/desktop/index.html","3ac64394c5a9a2cf0fea8f9ef08a6671"],["/tags/develop/index.html","77f28c21f788e52795e1b20e6db59029"],["/tags/develop/page/2/index.html","b33527ca5426c9a13ebb7a18760e9b6c"],["/tags/effcient/index.html","8a29e647788737cf22b5afe84f0ebd08"],["/tags/gestures/index.html","c397ca6dfe4193f86793248aa8677a32"],["/tags/index.html","b2c0d0408d91fa2c8b53529ad0ef85f5"],["/tags/monitor/index.html","d6fb0ea1dbeab6545f2f89e383e6a987"],["/tags/mouse/index.html","1081a202633d2e79ce3fa2810df79200"],["/tags/music/index.html","c50a9d8f3eeb54da24984d5c2bbe6e44"],["/tags/optimizer/index.html","8296c09d984f7190c8706956ec2384e0"],["/tags/password/index.html","2e320b7169df80bad582ad150644014c"],["/tags/search/index.html","ab70e1f0e426ea67fd7c9ba615824152"],["/tags/shell/index.html","ce949b19b6e60b66a36b9d4722bd537d"],["/tags/ssh/index.html","d63a336ef597da9acc7c19ea1e1cfe2e"],["/tags/system/index.html","b289742244c5c019e4293975067c9263"],["/tags/taskbar/index.html","a539607ffacc9228ccc599ce52460ca6"],["/tags/translate/index.html","b14296f6b81dad0061f402b5b1e24a66"],["/tags/前端/index.html","494f7d7750c32b0003e0aebaf7714532"],["/tags/图床/index.html","4c40f32b62676a7b163be836033cb2f0"],["/tags/注册码/index.html","6d8437c183ab12d2e595600596b2b83b"],["/tags/破解/index.html","e19b96657bd453683f297b2c613a818e"],["/tags/资源管理器/index.html","3be1fc889cc712df73eea622bf5621fe"],["/tools/av/Adobe/index.html","3eabfb9bbba67ad6d3bdcb8233503d7e"],["/tools/av/Balabolka/index.html","9430ca805fb3d357ccc7bdfd748498bf"],["/tools/av/Foobar2000/index.html","51e6957fae9f603eae85c222c8bb1ede"],["/tools/av/MKVToolNix/index.html","15d670881ce30e71d6255253185ae46d"],["/tools/av/Paint-net/index.html","6c251caf67cf8a057ea1c69ff78c9916"],["/tools/av/ScreenToGif/index.html","d26958cd5bab03c0ac8ac4b2aedf0946"],["/tools/av/Snipaste/index.html","06871716d38e46e2ff3f63440230a618"],["/tools/develop/BeyondCompare/index.html","3780c174debd5d3a6fea20b10481f253"],["/tools/develop/CMDebug/index.html","7fd2a509ff6afc0a02206a6659dafbec"],["/tools/develop/Eclipse/index.html","7089f6d98aaaeeebfbd8979109466e94"],["/tools/develop/GoodSync/index.html","e0e5091bd05a0b19bc770ea386ddcc30"],["/tools/develop/IDEA/index.html","a5925a94d4835e606f2533db077d2333"],["/tools/develop/NotePad++/index.html","253e137395461cec3511315a435ee383"],["/tools/develop/Postman/index.html","7d469b5a138eeb4a9a3392cbd2ff20a2"],["/tools/develop/SourceTree/index.html","49350d87f5af0b0966a04341241505b8"],["/tools/develop/TeleportUltra/index.html","5947a895a7920158e07cd2719bdde54b"],["/tools/develop/UltraEdit/index.html","ff8b7283a4cedf5cc0349213df00ab0b"],["/tools/develop/VisualStudio/index.html","e35ec565cde13f47a34ac1b990c263d3"],["/tools/develop/VisualStudioCode/index.html","602e564945154098b14574b150bbf65d"],["/tools/develop/WinSCP/index.html","e768c500d55ba3838cc73d6dc7bdf802"],["/tools/develop/XShell/index.html","cf20a570782cce1121232e4805c0995d"],["/tools/efficient/Cmder/index.html","6d6c4044c8c316d35e37c0732b91b213"],["/tools/efficient/Everything/index.html","0fda51fb7ecda1a6a6d2526f98c6e12f"],["/tools/efficient/Fences/index.html","353ed7c86ccbb2fad607a6fa527fa39a"],["/tools/efficient/Listary/index.html","80a688cd0c340e42902e06ee782a4bf0"],["/tools/efficient/Quicker/index.html","76561522a0ff5557e4f0fd8884ab3fba"],["/tools/efficient/TotalCommander/index.html","24b2f96b99cfe0c9e91631d27718899d"],["/tools/efficient/WGestures/index.html","2c12e19953c9da0cbf5da3a0871b2263"],["/tools/efficient/Wox/index.html","5e36b99868dff9bd890ef25ef076b3c4"],["/tools/index.html","245fdc87173b84d357e956b068f2ab12"],["/tools/office/PDFPasswordRemover/index.html","f88a252e076b888e5137880d317d4615"],["/tools/office/QTranslate/index.html","900fada0d11f912a9eb00a0edcf9faf8"],["/tools/office/browser/Chrome/index.html","2ea7228f796fb53ee97256871f13846c"],["/tools/office/browser/Edge/index.html","92ad54e7c57ca889ecd7f4cf8be79c4b"],["/tools/office/browser/Firefox/index.html","562007aeee7548f409f5a91ea4f40179"],["/tools/office/compress/7z/index.html","a8184641c200186ba14ebfb0c04962be"],["/tools/office/compress/WinRAR/index.html","be0d270af9b288bdc64c715b7992d8ad"],["/tools/office/download/IDM/index.html","38d834ce8965b2ec6a0b7add5e968311"],["/tools/office/download/PanDownload/index.html","736df850d672c59f2acf69e72628dfa5"],["/tools/office/download/WindowsISODownloader/index.html","ad00c1d3cbd215db676142e31452ff37"],["/tools/office/download/XDown/index.html","ce63f4e30d0912eb12fa7ba26ec484cb"],["/tools/system/Win10/index.html","05619de28b64342789d6508bc1e8fbf2"],["/tools/system/monitor/Percentage/index.html","df0124ca673c94c941fe13ee73695e9e"],["/tools/system/monitor/ProcessHacker/index.html","5ebe64da6b9f37653e091c4cc8b61ae7"],["/tools/system/monitor/TrafficMonitor/index.html","4be3889b26dd222b58c852ffde2c950b"],["/tools/system/monitor/TranslucentTB/index.html","06dd77c601a5a58ca9f551aa3fcd3db5"],["/tools/system/monitor/XMeters/index.html","890e1a8dcbd76562272ed5c114b274bc"],["/tools/system/optimizer/DismPlusPlus/index.html","1bcceef4d6f8a48b87b77d64ec1fca4c"],["/tools/system/optimizer/LockHunter/index.html","2bb64740effed0761d95a282028d0555"],["/tools/system/optimizer/Unlocker/index.html","e3db69e78f89dc9a87fe6f3326f3df41"]];
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




