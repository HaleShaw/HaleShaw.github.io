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

var precacheConfig = [["/404/index.html","7ef745bc2fc2a0d73bf21e31f34f0267"],["/Chrome常用配置/index.html","6b4b794d7a438af4d914cdcf2323ee75"],["/Eclipse常用配置/index.html","f5b97aa795d9472cde7463d3554cc56f"],["/GitHub-JsDelivr搭建图床/index.html","c51a04c4a0064b07d0c3f14e0e4f87de"],["/GitHub常用命令/index.html","153703366a229abcdb5ed269a618d9c5"],["/IDEA-Crack/index.html","f31bd9c7cda10369c2cfa582455ba725"],["/IDEA常用配置/index.html","9d10d9420e2c95dc464f04261d2a53ee"],["/about/index.html","4ddba2a0eb74d14369beb630cf5f0155"],["/archives/2018/01/index.html","8c6578953baf181cfc853be8d9cfac0b"],["/archives/2018/index.html","78dc4c915bdfd981026571b3889e945d"],["/archives/2019/08/index.html","b807419c7c358eab23eef5134afed09a"],["/archives/2019/09/index.html","7d8fd03a8874702c811dbaeee3bd5486"],["/archives/2019/10/index.html","f61f76a1bcdf4b02f043fb2701dd78a0"],["/archives/2019/11/index.html","53288b3b4a99372f3146430c87dbbba7"],["/archives/2019/12/index.html","9ffe4151b9697bd5e5b3e1665a166cfd"],["/archives/2019/12/page/2/index.html","d4fed14d871dbd08774ec5502bffe991"],["/archives/2019/12/page/3/index.html","e7321ce38400b40e6bc788b8e9d629ac"],["/archives/2019/index.html","9b2164f8c81c075fd4f83b4cf42bdf17"],["/archives/2019/page/2/index.html","6011ebb4a0d2141836b611b9ddf5d962"],["/archives/2019/page/3/index.html","fa01396bb83de5701eca4fe570870519"],["/archives/2019/page/4/index.html","4734147f20ef5d3d4ca9ffaf6ab6773f"],["/archives/2020/01/index.html","0d9d80db97d129eda20f2620402d0867"],["/archives/2020/02/index.html","fe41cae90235e2cc6d3568fce7910822"],["/archives/2020/03/index.html","635fec625446018ba754162320c1270c"],["/archives/2020/04/index.html","5548c045786e84922ed6a7633e85d63d"],["/archives/2020/index.html","3a8d95fed40d979ce6c1915ebd23a1f8"],["/archives/2020/page/2/index.html","8911b3288aa35ef30be104fd864a82f6"],["/archives/index.html","a1a9bcc64c54c2a4a87a0130bb212938"],["/archives/page/2/index.html","a1a9bcc64c54c2a4a87a0130bb212938"],["/archives/page/3/index.html","a1a9bcc64c54c2a4a87a0130bb212938"],["/archives/page/4/index.html","a1a9bcc64c54c2a4a87a0130bb212938"],["/archives/page/5/index.html","a1a9bcc64c54c2a4a87a0130bb212938"],["/archives/page/6/index.html","a1a9bcc64c54c2a4a87a0130bb212938"],["/categories/Soft/Chrome/index.html","dcf2b1a3fe9786f3bc38e535c010a425"],["/categories/Soft/GitHub/index.html","766a085ecc6241873fba6c5973b75cc5"],["/categories/Soft/IDE/Eclipse/index.html","d682b33feada4c5d4c0f6b70d9987b67"],["/categories/Soft/IDE/IDEA/index.html","a764f74c4cbdf386befc8fb2dc2afd11"],["/categories/Soft/IDE/index.html","5afb1455a803accaa7b9dc9a73f38c66"],["/categories/Soft/index.html","6ec69ef021dd363cac32bd1e62b8e8e4"],["/categories/Tools/Download/index.html","7d7a6ccb5b758069f6848fcc519a0868"],["/categories/Tools/av/index.html","cf0663136056f1112cd8f2a5ac333743"],["/categories/Tools/develop/index.html","dc54a9a51d40f33bb357bcd55de1ba67"],["/categories/Tools/develop/page/2/index.html","a72c6603ac9f91696aec2f19d9875ecb"],["/categories/Tools/effcient/index.html","9f87e0be175e4608ef718ec61132b788"],["/categories/Tools/index.html","2ef78002bf61cfdf8149e0345ec730c2"],["/categories/Tools/office/index.html","4b4b8b39efb684f6729c4c1705544e78"],["/categories/Tools/page/2/index.html","45b641eef72c5ee5e1250f73361162c4"],["/categories/Tools/page/3/index.html","b4d43233754e06575f70a3cead71e24c"],["/categories/Tools/page/4/index.html","ac41e059e59374382ca484d932a94082"],["/categories/Tools/page/5/index.html","cf01c5ccd1aa77de65de00dc460abe00"],["/categories/Tools/system/index.html","e4413f7847f4a14625e9f89cec8d0cf5"],["/categories/index.html","92812ed8094fba60614f8fdfd615e62b"],["/css/style.css","aeb8f75e6d77c3cdfc40e5f9359d891f"],["/css/tools.css","9785b76bd04d93e98078a4f3e301e35f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","f2a65ed3df79ebafe3972940bb44db5a"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/index.html","8831845733226bd258773738a9616340"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","a2d5ecdb8234d2c5f61aac757ebf73fb"],["/links/index.html","c8ccf4b387d4d00e2dbcb2361d254f62"],["/page/2/index.html","d7f73fce4c106fc069b9def9afda8972"],["/page/3/index.html","b3e00664ef5855c0677149af7519a8b3"],["/page/4/index.html","979533e0e8ca71c1abe5311f19b10a6a"],["/page/5/index.html","94e159513da70b2a1c6ebed8f8f1e3d5"],["/page/6/index.html","4a34b8f68f4348c426e806b935150005"],["/tags/Adobe/index.html","2030f0648d46d7c6044d34b6675bf846"],["/tags/Battery/index.html","994dce5f2f43c5d4ae5d7eb2396c3bc5"],["/tags/Browser/index.html","6be32cf14af508f33de8413e4cf5a766"],["/tags/CMD/index.html","5017f6bd4b6900b9012995c8f9c980c1"],["/tags/Chrome/index.html","dbcd2d02c81c8d2fc0bf31cde84aa55e"],["/tags/Command/index.html","e00cba9f52e93cbe9cfc3ba15c207069"],["/tags/Compress/index.html","2c97ecf61a686210ace5345f5bf04b5a"],["/tags/Crack/index.html","f5eef7708b5536c387c675d560c5266b"],["/tags/Download/index.html","232056c63a3e82e087f3abd30af6b68f"],["/tags/Eclipse/index.html","c2b202bacbeeac4b38425296395df5d9"],["/tags/FTP/index.html","ae0484589915bfe3394ac91da4747700"],["/tags/Git/index.html","9dd6b07e868eb2f4c69b9f1c78133e41"],["/tags/GitHub/index.html","3839723307f23ea05f67a5790e608796"],["/tags/IDE/index.html","40c5dee3928d5cbf50a1f6a151d67447"],["/tags/IDEA/index.html","29135eb2c97387954e9f3602a82cf7ba"],["/tags/Java/index.html","fc16e6de90c97968fb73e722b3477dd2"],["/tags/JsDelivr/index.html","ad7d5391e6b7ac5cc28f926f9a20f2e7"],["/tags/Office/index.html","04ee3fd663feb974787db77980a4d6de"],["/tags/PDF/index.html","5adda2b369b76458374f9c89d5c7ece0"],["/tags/Snipaste/index.html","ba637235911220be46cadccacb019a74"],["/tags/Soft/index.html","a096983cd0765580daf4d45dbcfb31e9"],["/tags/Soft/page/2/index.html","03eec01b67c49c9ed27b8709d82d7ba7"],["/tags/Soft/page/3/index.html","4d21823525d79b44dd82e9698df23e3e"],["/tags/Soft/page/4/index.html","fa5278438434ce873a3af64c75f60b0d"],["/tags/Soft/page/5/index.html","82fe0d25ae4cec383f6d957edc2475ef"],["/tags/Soft/page/6/index.html","ebc091d1141d31dfbf01dc17ba0f0f48"],["/tags/Sync/index.html","27325eac2007fc2b0fb398a403f3d773"],["/tags/TC/index.html","880a8fd92dbcf5629f2295941a2c5d18"],["/tags/Teleport/index.html","8caf34db0c7c67514a14727a280ed10d"],["/tags/VSCode/index.html","7922af8c99dea1d0e5604e2ea1c65330"],["/tags/Windows/index.html","a244dbd1a36958cfab3bb8bea713296a"],["/tags/av/index.html","fd88485ae0ef90f87ac44efc69ab6ee4"],["/tags/config/index.html","7d73cb0a5e832ff6c9c10ff72f581f6e"],["/tags/debug/index.html","4692ab45ec8ca220c8c32a14f1689c11"],["/tags/desktop/index.html","3668e4b414cdb0a69f093ebd1e175e99"],["/tags/develop/index.html","359f372bff23780b8a0a86c2124a44ee"],["/tags/develop/page/2/index.html","7c8687da8b0c7197bbad47fdae8deaa0"],["/tags/effcient/index.html","2bcff9c0773d3c62216e6dd853dd17b8"],["/tags/gestures/index.html","33b0e9274a3ac53793f8d9c483a1afb1"],["/tags/index.html","699615b4ca457d4b58d8e2e078414d52"],["/tags/monitor/index.html","7c750d28a2ae3de33af2064d90fe2553"],["/tags/mouse/index.html","48bbb27bc117c0f82468afa4aa9457a1"],["/tags/music/index.html","fc6810e176795fd05a5d0ab5258731bb"],["/tags/optimizer/index.html","7eea953f79e69c149b8a68a7183aa7cf"],["/tags/password/index.html","abeb4643557e5ec0e0b83d1304afd60e"],["/tags/search/index.html","648884b84b5e8cd4f8499b3e91d12f11"],["/tags/shell/index.html","167f219fb5616925276d422b16c9a05e"],["/tags/ssh/index.html","dce38cf65ce3a0655812ee7cb84af5d8"],["/tags/system/index.html","ddc5d7d682e7fe6672f361a6947e2949"],["/tags/taskbar/index.html","f6b13dc32490985331c0e1cec2cbf813"],["/tags/translate/index.html","4f1daa376c5634362cc7f229f1fcd0fb"],["/tags/view/index.html","e388a6a430d3d0faddd93e5a7bf3c8a8"],["/tags/前端/index.html","9033b411d8bb326c893e9f304baefd4f"],["/tags/图床/index.html","a13eef9ac6d97f58612ed974144eee65"],["/tags/注册码/index.html","7f54eaa5282799df7026da6d82ed99cc"],["/tags/破解/index.html","468213fe8ddc22728e8bd857c28a140c"],["/tags/资源管理器/index.html","e2509a9d768702d93018ae67508c8774"],["/tools/av/Adobe/index.html","bfcd322334461b705782ed7dd3ecf09a"],["/tools/av/Balabolka/index.html","acb53fa7ccae123a13072e698c4cf145"],["/tools/av/Foobar2000/index.html","5fffca5ea2c65c89ceaf24c456c6357a"],["/tools/av/MKVToolNix/index.html","e2abec758419b2efd38603565287289a"],["/tools/av/Paint-net/index.html","d78c8f83916cebf71d306bbb31e5ae4f"],["/tools/av/ScreenToGif/index.html","7a4d30450e62b0e8a8fbd3c3d9ae2f47"],["/tools/av/Snipaste/index.html","bbf730acb405f85bbced7a3628537abd"],["/tools/develop/BeyondCompare/index.html","317001735928b1961c2a32880eeb8851"],["/tools/develop/CMDebug/index.html","919ac729d38d71f9706c7c3a655dd115"],["/tools/develop/Eclipse/index.html","46376553f4904564b500c07f2d59c9b4"],["/tools/develop/GoodSync/index.html","b234120faa37c4c4c05c3aa7296ecd09"],["/tools/develop/IDEA/index.html","117d307ec5702a02f2677ef02db809f3"],["/tools/develop/NotePad++/index.html","f0324b632b2e46cfce08c657e88890a8"],["/tools/develop/Postman/index.html","974585426fe3c03b5d7312e57b23ab45"],["/tools/develop/SourceTree/index.html","6b48fc1d89d5c83e71dc27307a85a3ff"],["/tools/develop/TeleportUltra/index.html","e6ff5bd264e8a86b3a1a2f2813daa5ff"],["/tools/develop/UltraEdit/index.html","c7fe9a6783a4b2483788aca78f39e09b"],["/tools/develop/VisualStudio/index.html","89c0416ad0b3ba9a258fa90f9592b9e1"],["/tools/develop/VisualStudioCode/index.html","b65ec067691374a108b854e8ddf7f2df"],["/tools/develop/WinSCP/index.html","644883712ddfbe5a1060169aa178123a"],["/tools/develop/XShell/index.html","e5cdd8b7b7a038cffe1c4086c959d6ad"],["/tools/efficient/Cmder/index.html","fcf80cb0aa340bceceb383d9fe830cd3"],["/tools/efficient/Everything/index.html","5e09ba7516f55917ffd7220d77bf1cbe"],["/tools/efficient/Fences/index.html","d7c3f6d93996d9a6e36ec1349157b7b7"],["/tools/efficient/Listary/index.html","ebd1a67398b003d519bca50a678a3b89"],["/tools/efficient/QuickLook/index.html","41709bade98b32e8e34e85f4ee24b928"],["/tools/efficient/Quicker/index.html","4d2102a07858a480c0863a09c4ef5054"],["/tools/efficient/TotalCommander/index.html","ba92b3396b4573f66551c801c4d90d74"],["/tools/efficient/WGestures/index.html","65d55329f96deffe81f53c4b177de2a4"],["/tools/efficient/Wox/index.html","535b99eb85457f78526bde97511b9b5a"],["/tools/index.html","0fb64476d8373e6917a1d3a87d113680"],["/tools/office/PDFPasswordRemover/index.html","03b0e4baa8cf3175d23ff060bcaf376d"],["/tools/office/QTranslate/index.html","848db364087a42bd240e0e65073cf940"],["/tools/office/browser/Chrome/index.html","ca52deb28c02db650c085cf9fdda1d36"],["/tools/office/browser/Edge/index.html","c1674bb89588d668fac520fed09b4977"],["/tools/office/browser/Firefox/index.html","0300c4a40c790a21ee89db2ccaebe43d"],["/tools/office/compress/7z/index.html","95fe72028be8fd85fd3e4258c497c7c8"],["/tools/office/compress/WinRAR/index.html","b0d54ebe5d82213229699286391a0e25"],["/tools/office/download/IDM/index.html","073e1aca30946f45c8fcdb647c0f39a9"],["/tools/office/download/PanDownload/index.html","31d66a5f416cfa3f10457f78269dd2f0"],["/tools/office/download/WindowsISODownloader/index.html","bca86c6ab854eb3f9d4fbeeafd99c323"],["/tools/office/download/XDown/index.html","ba62f70cb470bed43a87a082f7a0142f"],["/tools/system/Win10/index.html","5a59dc2a7ec4abcb236b2ab90d9ec6e9"],["/tools/system/monitor/Percentage/index.html","8fdaca8f9de5619fbdefafdd4690a618"],["/tools/system/monitor/ProcessHacker/index.html","753b9c61a35aa039f7724d5236bfcfb7"],["/tools/system/monitor/TrafficMonitor/index.html","c96360f228bf311b8de167657f2729c5"],["/tools/system/monitor/TranslucentTB/index.html","2e4136224caceb694cd08ba0317fe75c"],["/tools/system/monitor/XMeters/index.html","ff0471a3cddb2a1c52c527a4cb40752b"],["/tools/system/optimizer/DismPlusPlus/index.html","b06050a924bff3cf416aa1afab26323c"],["/tools/system/optimizer/LockHunter/index.html","834d11e26dbc6c0eade01a85c7e5bc8f"],["/tools/system/optimizer/Unlocker/index.html","ba20b39d02dbbed7d0f59cc73195fdd0"]];
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




