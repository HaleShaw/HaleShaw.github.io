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

var precacheConfig = [["/404.html","056ef987c5793be3cb185bcdec18746e"],["/404/index.html","609894f9e8a619e1d8307c22592647c0"],["/Chrome常用配置/index.html","6a9f276fa5518901c042a701002d4462"],["/Eclipse常用配置/index.html","1566bfe0e38e90397a2751af935e90c9"],["/GitHub-JsDelivr搭建图床/index.html","07edeaf492654e994d00298675200dca"],["/GitHub常用命令/index.html","268660f1d3cda9e6348a733c6b9b3b3c"],["/IDEA-Crack/index.html","78c74404215f1f5ba82dd901ff896e49"],["/IDEA常用配置/index.html","c7def922bcb113d82ea1c92f7f2c4385"],["/about/index.html","26b69d3cbbbcb4490df2b296c24c7032"],["/archives/2018/01/index.html","8633752c284cee606202a075c032ee3a"],["/archives/2018/index.html","3851ceda95ab8da6e0d06207e6cfc729"],["/archives/2019/08/index.html","c4df7d0283a7337f975f14ea972f5247"],["/archives/2019/09/index.html","f48e1a3677853fd9c5babde56c6f9d16"],["/archives/2019/10/index.html","3c9ac9cf44b7f4351778353092fd95eb"],["/archives/2019/11/index.html","31c1e3249e097587def3438e9eaa3da4"],["/archives/2019/12/index.html","209cabb740f79fa2c284da05e8686d38"],["/archives/2019/12/page/2/index.html","d470ac32c4822549fe8ec3a32da05b23"],["/archives/2019/12/page/3/index.html","4657f5e8402a14fdebc606ba15533578"],["/archives/2019/index.html","dad6774d79c5b89a7b71a20e4b776a25"],["/archives/2019/page/2/index.html","eff65c62a25ef96c93ce189ad0ad554b"],["/archives/2019/page/3/index.html","a7a2d32ff3e8e0b8b1857b8dd391281a"],["/archives/2019/page/4/index.html","cbf867102866c35eff2b8533911443c3"],["/archives/2020/01/index.html","d14c1ebd883cc94580811a5792359d4e"],["/archives/2020/02/index.html","de68ef076cf9f53c84c49da23f2e1056"],["/archives/2020/03/index.html","947bae490cfc6b06e3cbf25a23a7ad45"],["/archives/2020/04/index.html","a6555a8dfefb07fff264053afe3abd8d"],["/archives/2020/index.html","d0ce18a227cf6da542f5a9252a30a61e"],["/archives/2020/page/2/index.html","8cdf3cb7723d65a4ccfced29388734ad"],["/archives/index.html","09f588a7849e2e2756884231fc2f3ceb"],["/archives/page/2/index.html","09f588a7849e2e2756884231fc2f3ceb"],["/archives/page/3/index.html","09f588a7849e2e2756884231fc2f3ceb"],["/archives/page/4/index.html","09f588a7849e2e2756884231fc2f3ceb"],["/archives/page/5/index.html","09f588a7849e2e2756884231fc2f3ceb"],["/archives/page/6/index.html","09f588a7849e2e2756884231fc2f3ceb"],["/categories/Soft/Chrome/index.html","84468235771b2b2bcae34ca8ae54d70d"],["/categories/Soft/GitHub/index.html","bd9b99ce848cbaa3432bd9805b7705bb"],["/categories/Soft/IDE/Eclipse/index.html","b78c6db7f4f20b8b19d0a7b0b54f8a77"],["/categories/Soft/IDE/IDEA/index.html","4de3861988477cc276ab33ce4617443a"],["/categories/Soft/IDE/index.html","79ed75af1ecbb1cda2f75482b5dce096"],["/categories/Soft/index.html","9edaaaec1464f1869c69a85738990679"],["/categories/Tools/Download/index.html","26b2cb82b5962b395cda3ca427ca2836"],["/categories/Tools/av/index.html","ae31e2edad6b6ddb827058dcab9c1676"],["/categories/Tools/develop/index.html","941ab3b41eabc2eed78f703f425e2bb0"],["/categories/Tools/develop/page/2/index.html","4c36d0e86d307ebaf856f156d4e80fae"],["/categories/Tools/effcient/index.html","e24fe13751d6fe49a11bd5b8435f1136"],["/categories/Tools/index.html","0d468134d01263280091cc6b0db67d58"],["/categories/Tools/office/index.html","59b65480e8b7137e5529e80cd2d8afd1"],["/categories/Tools/page/2/index.html","ebd5dc5c0877e651506e1ef8f8ae278d"],["/categories/Tools/page/3/index.html","bd12118685162c6e49ab5533ccbe841e"],["/categories/Tools/page/4/index.html","0a7b853c4e34619f35c89c72c60cefb9"],["/categories/Tools/page/5/index.html","da35c414887adafd5eef9bd87b3fa483"],["/categories/Tools/system/index.html","7e0cc60b4c633c76a5cd11de9a910a08"],["/categories/index.html","92cec9bef16fa6dd502a7a165a879129"],["/css/style.css","26e5ed7ffb821fd9071221678109156a"],["/css/tools.css","a31bebd507988bea0ccd63c7ba0909db"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","ed14244076e1f009cdcca3cd7b2ef981"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/index.html","5d19ee06449bd6cf53e99cb70c489d1c"],["/js/app.js","3efe9ec73cf447af4342722b18e3f90c"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","f70b377010100ac6af3382c85c59901f"],["/links/index.html","28e6c611e706bfcd118777400af74d3d"],["/page/2/index.html","b34de5f30e0aaa8de3846cba6cb00a2b"],["/page/3/index.html","427ec36d7807495cd8a30ceaca6a2872"],["/page/4/index.html","c56120e1361dd215cc9daebdc896e6bc"],["/page/5/index.html","eb85d797c2fc59a9ee06dcd97ac1999b"],["/page/6/index.html","85c12e6c8bfd5362a65b200d28811756"],["/tags/Adobe/index.html","be7be25336505f4058c67a54c0e01130"],["/tags/Battery/index.html","e72a1f1cc6715eaedfdfb217969437ee"],["/tags/Browser/index.html","a6e43714ab695d933e7d6c93f94c2822"],["/tags/Chrome/index.html","76e6835a234c2e4f5984ccc4e82379b4"],["/tags/Command/index.html","a2ae64802c08ab3c5d0d5f1ccca73bec"],["/tags/Compress/index.html","d776d5b2d47ac0899a6be5fe67e1ae64"],["/tags/Crack/index.html","8542469355a724ec5c58598ac9ff7c7a"],["/tags/Download/index.html","30012abc97cbce17f70ec43e0cb44268"],["/tags/Eclipse/index.html","3e04a23de2c502cfb6e4cba2eaa39798"],["/tags/FTP/index.html","832649e6a20b781777a44ec1e8e7e2e2"],["/tags/Git/index.html","2e7dad8426f0633529f6adad4db11db6"],["/tags/GitHub/index.html","ae603b99531c7ad55baa9b8e7ba51dce"],["/tags/IDE/index.html","dbc324ac1d8e4b3639a18c380e84cb0f"],["/tags/IDEA/index.html","467fd3c3a614002169061c9a49fbfc82"],["/tags/Java/index.html","aa355f90e0c2217b91e0caccc92e45d6"],["/tags/JsDelivr/index.html","23ae010a4c262b5343c172e83969424d"],["/tags/Office/index.html","f6772a29807ab4e5ded74f573b984ab7"],["/tags/PDF/index.html","f5e6bdb6e9f424cc5a850777727ec640"],["/tags/Snipaste/index.html","66cc9369b991634d5c6cf8193a5e1200"],["/tags/Soft/index.html","e26b2d4420d18cc4a876aa5ea41cb532"],["/tags/Soft/page/2/index.html","dc4799de4de2259d37e2eeb0cdbe5967"],["/tags/Soft/page/3/index.html","5ff33b70610249204a2c4a34b21a0706"],["/tags/Soft/page/4/index.html","a329f081f036c7c60dc97929702d7171"],["/tags/Soft/page/5/index.html","7001fbf6d916a3a374424d8279eca480"],["/tags/Soft/page/6/index.html","47b18dd256b1e72be12a7475cab49b25"],["/tags/Sync/index.html","f850e6ca97172e35de9ca905fd0e08c6"],["/tags/TC/index.html","2a792c5e356ddf4d55f21a6a73ee09fe"],["/tags/Teleport/index.html","e196120749378d4e079d2c059246f016"],["/tags/VSCode/index.html","46a7e4979a9ac321d53365dda715580e"],["/tags/Windows/index.html","0b8f67511e3042a2d4aac9577f05353a"],["/tags/av/index.html","e7fc840bcc658fcd17fa4749eaad2bf3"],["/tags/cmd/index.html","13d8cdcabb59ffabafc37dbf134c48ac"],["/tags/config/index.html","7d833ea38ee5cb40910a76461d170203"],["/tags/debug/index.html","5b810d8dfc74e9fc2261c45df32fff9a"],["/tags/desktop/index.html","53bd9ec2c86d93802d42ef994bb02dad"],["/tags/develop/index.html","72a2066fc616d097d83975043aa6f9eb"],["/tags/develop/page/2/index.html","397c3a0519ee65d57d16d90e93fb362a"],["/tags/effcient/index.html","bacdf1084ddf433af283e7d19b6b5c15"],["/tags/gestures/index.html","9f37009579ef98154dab27ad00ddcd26"],["/tags/index.html","1610be98339d2e9a093457fc2c73ae39"],["/tags/monitor/index.html","c9d477f229d4d89b389d35040dcb1132"],["/tags/mouse/index.html","fe7b86af16e2dfd205875009302b972d"],["/tags/music/index.html","c8e6cc82bd25401b64879eff45c94813"],["/tags/optimizer/index.html","b82d59b5dc79a27370a1a486e45d3901"],["/tags/password/index.html","c16bbfe0597470749fcb368baec5d346"],["/tags/search/index.html","41933ac4bc9c2df53b3172dbac64d240"],["/tags/shell/index.html","4f224d3925c86453501e9b46d68f6311"],["/tags/ssh/index.html","0d55d2f6f547351ec91f87292a723bf4"],["/tags/system/index.html","547d92f3020a4ec3a007357bc70f14f5"],["/tags/taskbar/index.html","459a3836a59a122e5bdb1fc01f391719"],["/tags/translate/index.html","b75e485e3c8ad716db7748705d817b66"],["/tags/view/index.html","4bc2be94123439ea7c174320df4c3318"],["/tags/前端/index.html","65d9fd34917faf0241d1129a43797628"],["/tags/图床/index.html","210d6f6b770b1ab7ca272933ce8a281f"],["/tags/注册码/index.html","e4df1fb5ea92f2bb732df43e796baf77"],["/tags/破解/index.html","5942d19b46d3c0dee2b4754cc8632d1b"],["/tags/资源管理器/index.html","351932b94f7a56f5dff0dc56703be505"],["/tools/av/Adobe/index.html","fee7b3aeb71342d02a8f2fadcda969e0"],["/tools/av/Balabolka/index.html","3c3346b990715114287eb1455657a14c"],["/tools/av/Foobar2000/index.html","abe4d112e1880b30a66f779bb88d73e7"],["/tools/av/MKVToolNix/index.html","89893aba01b878d50fd7de17b8ab65b5"],["/tools/av/Paint-net/index.html","b330d33858e09b415087aeffd3717d76"],["/tools/av/ScreenToGif/index.html","555d486b42633ff9da9a64f3a4e4fe41"],["/tools/av/Snipaste/index.html","69be56734c9a6798b0cfbf757a4bc931"],["/tools/develop/BeyondCompare/index.html","2f816b324afed29dbde61af9295e0b84"],["/tools/develop/CMDebug/index.html","5410b59d4a68bc6b714d46f5be0e8fed"],["/tools/develop/Eclipse/index.html","3c92c05299a04cbb0abbfc0e46b86074"],["/tools/develop/GoodSync/index.html","0a1bfe2e887dae06554db71d7920b191"],["/tools/develop/IDEA/index.html","8e914f807aa9ab9dd36346d4acb9882c"],["/tools/develop/NotePad++/index.html","5f99816f7f1a895480f2c2e0b86fb27c"],["/tools/develop/Postman/index.html","2770ce8f9a4e3a214049e81f39595182"],["/tools/develop/SourceTree/index.html","c4dffda17686f09ab4807e6d569bcf7d"],["/tools/develop/TeleportUltra/index.html","f0d0c267cdcec10380b47d1f9c5552a7"],["/tools/develop/UltraEdit/index.html","44a12ab48992ae00f00cc7609dc54edf"],["/tools/develop/VisualStudio/index.html","58b12a3d130e8ffd9af62987ed868ed4"],["/tools/develop/VisualStudioCode/index.html","7bfa99413e8308b4520643e7786dcc44"],["/tools/develop/WinSCP/index.html","6d58ce862530002518b9795cacc1adbb"],["/tools/develop/XShell/index.html","c53fbd0ff442c3c5389d6a9d6b972604"],["/tools/efficient/Cmder/index.html","6bc79d8de97bf58b26a895b0f82f76cb"],["/tools/efficient/Everything/index.html","0a5effd6954fbda08acba8a272a704fa"],["/tools/efficient/Fences/index.html","d261ec7baac97564c10237b5410ccfa7"],["/tools/efficient/Listary/index.html","9f4606edaa1af83dac6b4b215fb8d376"],["/tools/efficient/QuickLook/index.html","65f9ccc76d4ab029444adcb86f5d7178"],["/tools/efficient/Quicker/index.html","52fc335145b477b4a04fc6dec5c164d2"],["/tools/efficient/TotalCommander/index.html","d09f5b225ba42d92a67345d0ce0d23c2"],["/tools/efficient/WGestures/index.html","f7dc40e9737da6dfcaebc36efb339b1a"],["/tools/efficient/Wox/index.html","dc72f9e72aecf8cc3842b9dc505320e5"],["/tools/index.html","68c34355b2a48e44663f2cc168316ced"],["/tools/office/PDFPasswordRemover/index.html","dda46618c8e3a65327dc51d809457b60"],["/tools/office/QTranslate/index.html","8c75f54752bd82153bf4f312b324d737"],["/tools/office/browser/Chrome/index.html","c441fca8ad807ca6f2e5c51824b20f04"],["/tools/office/browser/Edge/index.html","a302c04194e5c13cf7dcad13ed919677"],["/tools/office/browser/Firefox/index.html","aa2bcb248edcc232a63cae577e8f95c2"],["/tools/office/compress/7z/index.html","5406fefb9ed1c458ceef168afe365cb9"],["/tools/office/compress/WinRAR/index.html","25ea9760825d9ac4d68d36aca63ee17a"],["/tools/office/download/IDM/index.html","46746ea35567c8d86d5f2e3383514252"],["/tools/office/download/PanDownload/index.html","526a946ef1d30017213f3e0566c6cfb0"],["/tools/office/download/WindowsISODownloader/index.html","b37251dcec1527d702232cae0af6a818"],["/tools/office/download/XDown/index.html","d76c26202d15302d2002ff167358e39f"],["/tools/system/Win10/index.html","db597c269b3808be171db1aa89791c07"],["/tools/system/monitor/Percentage/index.html","f28236aba74f7f8b7f1f457f1b8172ba"],["/tools/system/monitor/ProcessHacker/index.html","901083d8b3001a02c8d86de42afeeba1"],["/tools/system/monitor/TrafficMonitor/index.html","cd3a02d60e92172fc180792c6ea4a75f"],["/tools/system/monitor/TranslucentTB/index.html","cea91cdf0672245176d703bb1549fecd"],["/tools/system/monitor/XMeters/index.html","fc6bf336aab432de18253b9c411c4906"],["/tools/system/optimizer/DismPlusPlus/index.html","45ffe31090b5bfeba8c9c2998a612e78"],["/tools/system/optimizer/LockHunter/index.html","3d87242b1f1ba6e8619408b30484ae50"],["/tools/system/optimizer/Unlocker/index.html","e2b680b3ad6e48e0248b4d02527cbeca"]];
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




