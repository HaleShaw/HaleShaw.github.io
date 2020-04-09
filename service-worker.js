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

var precacheConfig = [["/404/index.html","d527ac03a8291ed2dd0280d864af1b15"],["/Chrome常用配置/index.html","86daea264b9de189c03c4fecc530c1b3"],["/Eclipse常用配置/index.html","3611736bb88ecdb14bf58572c4334954"],["/GitHub-JsDelivr搭建图床/index.html","31725a776ac0355c8535348950e71139"],["/GitHub常用命令/index.html","c3adfb4564e2bbf82fe1c92e4b13928d"],["/IDEA常用配置/index.html","dde5ea9a8344e54ba6aff30f76b12d56"],["/Jetbrains-Crack/index.html","9f8c9f3dd5415ab1815dbd82f6e4e90c"],["/about/index.html","1f09e30156ae86094123c58e8d6c6258"],["/archives/2018/01/index.html","6f0c5d77b9d832e179189a5c19c10b3b"],["/archives/2018/index.html","28b160a2cab3b1ece49c2c2a4f845c7b"],["/archives/2019/08/index.html","4044db021c8d0cadb78e144c43b5ee69"],["/archives/2019/09/index.html","27d416f80eb7baef9fcd80ce81d4876f"],["/archives/2019/10/index.html","92672126d6973d4159ca4fffcf4b0c2c"],["/archives/2019/11/index.html","fe73d7d20e14c7f3aaf1b7b5fc3b842d"],["/archives/2019/12/index.html","ce22d804b6e2e8ad33bcf13b9145583f"],["/archives/2019/12/page/2/index.html","c2f0c1d3e09a97cc01ed00d5899fa9bd"],["/archives/2019/12/page/3/index.html","736ab4200e3bed6ee6ffbcef8d621b05"],["/archives/2019/index.html","67d622ff0b9b9b261f26a9da06c669b3"],["/archives/2019/page/2/index.html","6903d87f5e2b856b8a256fbc48e721e9"],["/archives/2019/page/3/index.html","5b125686a77426f9ab4916f29f2f5ae5"],["/archives/2019/page/4/index.html","d03d46542fc58f22726bc6e95df499c2"],["/archives/2020/01/index.html","aa65e8e490b6c0c666003e0c32922d01"],["/archives/2020/02/index.html","81cadf67a32dde701e26000d214ed91e"],["/archives/2020/03/index.html","614cd44f0cc1b9e7bec6e8ab53e7aed9"],["/archives/2020/04/index.html","0bcc1010899205ba0517b55177cdcc7f"],["/archives/2020/index.html","49943951cb52ef004a5414082038311f"],["/archives/2020/page/2/index.html","d2e9ee719893a467224177b08f53c1fa"],["/archives/index.html","18c1209ec4b38ec149dd7c7340a449f1"],["/archives/page/2/index.html","18c1209ec4b38ec149dd7c7340a449f1"],["/archives/page/3/index.html","18c1209ec4b38ec149dd7c7340a449f1"],["/archives/page/4/index.html","18c1209ec4b38ec149dd7c7340a449f1"],["/archives/page/5/index.html","18c1209ec4b38ec149dd7c7340a449f1"],["/archives/page/6/index.html","18c1209ec4b38ec149dd7c7340a449f1"],["/categories/Soft/Chrome/index.html","c188bd0c10232ad9bcad566039b381cc"],["/categories/Soft/GitHub/index.html","46d5928e90ee136987ce234bed80c24b"],["/categories/Soft/IDE/Eclipse/index.html","a1b557ae144563c049a374ad8883583a"],["/categories/Soft/IDE/IDEA/index.html","4db0f3c565b9cfbbdfd4a90a4d889b81"],["/categories/Soft/IDE/index.html","0f4cf7d1d714d2cde116f1ce2847fd74"],["/categories/Soft/index.html","6e4c052b9736d3c3d61b2b006dac1397"],["/categories/Tools/Download/index.html","c59817ece3de6af8f5267acdcf2fd86c"],["/categories/Tools/av/index.html","36afd15b7d4dea0762466a50bbf4e441"],["/categories/Tools/develop/index.html","bda1d7b4ee557ed403095495f0c43f61"],["/categories/Tools/develop/page/2/index.html","27be3f82b3fee4fa815fa0547ba9c1ba"],["/categories/Tools/effcient/index.html","c08237b904543a729965caa844c6c2fd"],["/categories/Tools/index.html","40e21c0ac8f98d8d9e103c6ed757e4ed"],["/categories/Tools/office/index.html","dc169d2e7ae615155527b0c16558268e"],["/categories/Tools/page/2/index.html","26ff9c0cc4f89c3958e3e6590edf3cf6"],["/categories/Tools/page/3/index.html","0df0d1c9c8cf69d6755e2dd77760d410"],["/categories/Tools/page/4/index.html","aa6fa6be0fb8f47cea944ba2df22740f"],["/categories/Tools/page/5/index.html","3d7a24432d11ef686479b2c4f35203f3"],["/categories/Tools/system/index.html","23cbaf6c8622c47658522338c686cc9b"],["/categories/index.html","22e45b1f55413d9d6177425956cbae11"],["/css/style.css","aeb8f75e6d77c3cdfc40e5f9359d891f"],["/css/tools.css","9785b76bd04d93e98078a4f3e301e35f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","b0b2d5691b69d047e2d12afd7fadbcba"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/index.html","8022c2d1cfc0864d32cea060b89bba5d"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","a2d5ecdb8234d2c5f61aac757ebf73fb"],["/links/index.html","20443eeb221acfa30252117142da3c81"],["/page/2/index.html","5138d4aa7a1a55053d71ea3011f7fa7e"],["/page/3/index.html","13f6885dd218178b921d541ae7734102"],["/page/4/index.html","60c4fefbdeb059f4cd1a6c98ab85bb70"],["/page/5/index.html","8f317d5ed883bbb919c00615cc9577f6"],["/page/6/index.html","2b1ee78a516ab99489e528c8b40864f8"],["/tags/Adobe/index.html","2f65e70c6e47cf037f2660f724ffb10d"],["/tags/Battery/index.html","3a9523e1e71fc7757a3350c04086aec1"],["/tags/Browser/index.html","f509b421e37cc4eb627ad74b99eb2c87"],["/tags/Chrome/index.html","bc531f71bfc4d43a318140c263674e2a"],["/tags/Command/index.html","282a93fbd7307592e23f56452e92f896"],["/tags/Compress/index.html","5af66c0453784bc1c995548644da292a"],["/tags/Crack/index.html","dcc4b521d692581ef79f017b676b39ba"],["/tags/Download/index.html","94daeb4007d557c1980dfeb00a311abc"],["/tags/Eclipse/index.html","991980105e457e9bc01de0a0006ac189"],["/tags/FTP/index.html","30599143b8080b48702091e5e89dfd74"],["/tags/Git/index.html","77be079a43c12c5f50f300fcae70791f"],["/tags/GitHub/index.html","c782d5d82820d7d87c71a715e2e30f7c"],["/tags/IDE/index.html","48a2bc0e878c69d4c86059910467ec4d"],["/tags/IDEA/index.html","850a9ee83f9761f02764357742da85a8"],["/tags/Java/index.html","e66b00993f8ec38eeaff158c0c39b3b8"],["/tags/Jetbrains/index.html","e242743664776b3e06ffdda4ec45ef3f"],["/tags/JsDelivr/index.html","913a645421d4ff966533c75b71a1a0b7"],["/tags/Office/index.html","9e70ce3368065882c00a0c7f054e6fbf"],["/tags/PDF/index.html","bca8770c978a3f56b447974cfebdfecb"],["/tags/Snipaste/index.html","77e78ef478a617251fb098e54b35c831"],["/tags/Soft/index.html","a2f7a81e77d6174292de654a7ba1954d"],["/tags/Soft/page/2/index.html","66973b2d448030efd1de220f99fdb7dd"],["/tags/Soft/page/3/index.html","cccc06a4f34bdde4342a1f5738976673"],["/tags/Soft/page/4/index.html","30cfd559c5f1999a54682c3b3ef7ab00"],["/tags/Soft/page/5/index.html","37e9e012523f66861a80cd1a49439eda"],["/tags/Soft/page/6/index.html","de7f5872fc2ad818d6b48376b3c2e381"],["/tags/Sync/index.html","8bf86ad33c5f2b8c85b604b5c4e6f849"],["/tags/TC/index.html","64d4dbc65db82f43e50c357e0452bf9f"],["/tags/Teleport/index.html","aad29302e8929bf45e37cff8a4919671"],["/tags/VSCode/index.html","3cee68ddac49b9a9066fee0df546371f"],["/tags/Windows/index.html","0f218d4141c0e38c08f3158ac44bc56b"],["/tags/av/index.html","aa6f997e86c9f47c144c8c39ab8376ff"],["/tags/cmd/index.html","b61065fd7f6613eaa70ad7ea0a0726f0"],["/tags/config/index.html","d7fbe9c85a7501e370d4094b996b15b0"],["/tags/debug/index.html","e5985caeda0183db32937f74831c9c21"],["/tags/desktop/index.html","2087ac3ca0ba7f2cf8594126a4ff7a3d"],["/tags/develop/index.html","6d214511494f3758d4fbaf8afb962a1a"],["/tags/develop/page/2/index.html","206f41674e6484bee7217fc4d6913d8b"],["/tags/effcient/index.html","fe5c998c32e2fd90ff7cdca5abd625ee"],["/tags/gestures/index.html","b3c48e160c68e726bb409e5c6fa57a9b"],["/tags/index.html","3f8281c2ae9fee99c6de6f3cfb9e9e4a"],["/tags/monitor/index.html","a9ba41447b016f20f6634b55e81c8d71"],["/tags/mouse/index.html","fa450ce7bd2ce1878d0a5605ce20aa3f"],["/tags/music/index.html","98a1fac4e9ab26f7a434964cc57a9f61"],["/tags/optimizer/index.html","2e67841fa117bee23be9e70f47fdcf93"],["/tags/password/index.html","e4586cd47c1a9db7bfc9b466afc7942c"],["/tags/search/index.html","78aa2d83d118df74f77c177a50129cb2"],["/tags/shell/index.html","1b2daa2981e548fe270abc2ce68e4940"],["/tags/ssh/index.html","b16c389eceb1a80ae2d2c0107e200534"],["/tags/system/index.html","13321d6dc631a097add52259784c506b"],["/tags/taskbar/index.html","c41d2d55b1806980bcdfefb4b6d7e6c3"],["/tags/translate/index.html","311e39fe3fe355243d2c03822005725f"],["/tags/view/index.html","0330052f4db5bff9d3aad2a209514554"],["/tags/前端/index.html","0dbcd701dea35289056d67a764f03efd"],["/tags/图床/index.html","23cd6930ca21950dcb471bd6ab1217ac"],["/tags/注册码/index.html","1744fcf78455dc901e20377396c8ebd1"],["/tags/破解/index.html","ed0363a50a7b001a97e4eca79caf9b2f"],["/tags/资源管理器/index.html","dc63002550dec458e3af7b632e41c404"],["/tools/av/Adobe/index.html","d34ecaeb8825eb3eaf14f430db01093c"],["/tools/av/Balabolka/index.html","332ec1b5bc054d8712b4a3790e1c6db9"],["/tools/av/Foobar2000/index.html","386a77d9d465a76243a3544f12609994"],["/tools/av/MKVToolNix/index.html","86b3f4d7eb7576cdf42391d79aae1175"],["/tools/av/Paint-net/index.html","a0657e2d4ac75c5935319f72e03ab7cd"],["/tools/av/ScreenToGif/index.html","3bc93af643bd798e6f0bd5343742aca9"],["/tools/av/Snipaste/index.html","582ac8a8a0347241e36a1c79923f87d0"],["/tools/develop/BeyondCompare/index.html","fd78dae3b40ec65df138fa5574f61aeb"],["/tools/develop/CMDebug/index.html","3aba41a75a0543ca8c28729f42534a3a"],["/tools/develop/Eclipse/index.html","8176047bfa01e6a9c8a6e4606f1170b4"],["/tools/develop/GoodSync/index.html","0b5a2d06a905bf8b53a3f7642ee536ec"],["/tools/develop/IDEA/index.html","f257e533ee4eb8840b25cdda8110ff60"],["/tools/develop/NotePad++/index.html","f212cd2ef1cc34fbb428f02dfe369ef6"],["/tools/develop/Postman/index.html","84664bbd442dc7d83360a2aa205fcc30"],["/tools/develop/SourceTree/index.html","e4319ffc7c67f81755b728b7070239b7"],["/tools/develop/TeleportUltra/index.html","354963d75e264b84d537f15903834573"],["/tools/develop/UltraEdit/index.html","f49114697e1aaa31231382f21d810815"],["/tools/develop/VisualStudio/index.html","367d1c43a8a9f05c1925b2ac2433e0c6"],["/tools/develop/VisualStudioCode/index.html","d6deabe0ad18210a5ce4ce1741b9fce8"],["/tools/develop/WinSCP/index.html","34d422b2544a91a6b8432397a94b304e"],["/tools/develop/XShell/index.html","c181aed9c4d20dbf52797b6da5625e5c"],["/tools/efficient/Cmder/index.html","7e1bafa554b37a1a7d130504bf8f00de"],["/tools/efficient/Everything/index.html","039545609ff679941968304d85b14c0a"],["/tools/efficient/Fences/index.html","90d1468b5bcb7ea7dc15693b4471af32"],["/tools/efficient/Listary/index.html","07cca930e95930d833aa870b42632e69"],["/tools/efficient/QuickLook/index.html","32a8edebcac384682b6d1c224b94ef58"],["/tools/efficient/Quicker/index.html","403dd813be05b4e440f6472a3eba579e"],["/tools/efficient/TotalCommander/index.html","b7a15ad480442b93971fb687f392f478"],["/tools/efficient/WGestures/index.html","9a7ad1df4154fc4dd2783f5662fb7e0e"],["/tools/efficient/Wox/index.html","4d385704d42922d0ace7405a4ef4e22e"],["/tools/index.html","db5ee5921323e718e93ea038207db1ad"],["/tools/office/PDFPasswordRemover/index.html","024d1ed7c5a3a4c909297d7723b753ca"],["/tools/office/QTranslate/index.html","107cb2e04b31faf0184a61102d31ce70"],["/tools/office/browser/Chrome/index.html","de99ddd84b5279821f95599d7758a068"],["/tools/office/browser/Edge/index.html","a3cfaf7f53dbc7ebb7f2cd26d164b7f5"],["/tools/office/browser/Firefox/index.html","2dd0a6f0e00b41ae256bb65e4fad1262"],["/tools/office/compress/7z/index.html","cb2aa203c5af81c35dbe7d27e6083daf"],["/tools/office/compress/WinRAR/index.html","2528dc2294bdc34ac47311b7aa0d3cfe"],["/tools/office/download/IDM/index.html","d55e0660b92172b035e7a4c7fc63ff27"],["/tools/office/download/PanDownload/index.html","e3e3c1c6c7ad8cea557895f8dd02e75b"],["/tools/office/download/WindowsISODownloader/index.html","58a7312ceec91163b9214733c74f0bbc"],["/tools/office/download/XDown/index.html","364963628cf6735c122e5eed0f096f7f"],["/tools/system/Win10/index.html","afa80b401bf4f8d80956c9206083c7e1"],["/tools/system/monitor/Percentage/index.html","751f38358267e0112167fdb485d5a077"],["/tools/system/monitor/ProcessHacker/index.html","8fb716157507ecf773599b42ce083274"],["/tools/system/monitor/TrafficMonitor/index.html","3d4e6566ef44db94e11349e29ff97ae4"],["/tools/system/monitor/TranslucentTB/index.html","3f2198d3a899ddccc44ace734c543749"],["/tools/system/monitor/XMeters/index.html","1c75106e1867dcafc32195a425240208"],["/tools/system/optimizer/DismPlusPlus/index.html","cf6a6c62bf825b0ac86116da9fc448f2"],["/tools/system/optimizer/LockHunter/index.html","98c1e8f40e78c146b52cf500c77832e8"],["/tools/system/optimizer/Unlocker/index.html","845ae811b097add836b87d8120722b64"]];
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




