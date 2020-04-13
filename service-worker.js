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

var precacheConfig = [["/404/index.html","d527ac03a8291ed2dd0280d864af1b15"],["/Chrome常用配置/index.html","81d19ec4b850a9ef4db1d5bf07f318bf"],["/Eclipse常用配置/index.html","b7dc41282e58bd3a1a8e07bac0c75411"],["/GitHub-JsDelivr搭建图床/index.html","5e61252f7895d66cbbe562f4e1459608"],["/GitHub常用命令/index.html","e8218249ded068f184965eca79f8580e"],["/IDEA常用配置/index.html","47af4a9f4078f67b8f5a93bdb27ff243"],["/Jetbrains-Crack/index.html","a34264aa8284787dcfb2181caf9fb95d"],["/about/index.html","1f09e30156ae86094123c58e8d6c6258"],["/archives/2018/01/index.html","73818d6a2e441c594b5fd1587f635066"],["/archives/2018/index.html","7d9f1f8c39c1c3f116ad563fe798e610"],["/archives/2019/08/index.html","53227af035cf7db4e8f4cb2b6621367b"],["/archives/2019/09/index.html","a3ffea0c265ce73a1a24a1e66e138e3c"],["/archives/2019/10/index.html","6e5821bfad648952808573c89038c3ce"],["/archives/2019/11/index.html","71136b90f9439580cfacf6606a13e2f9"],["/archives/2019/12/index.html","cd7cc379f314d4543c9a3ef8227ad113"],["/archives/2019/12/page/2/index.html","69bfc18de5ae68ae7f8aca92eb312dad"],["/archives/2019/12/page/3/index.html","93a509d7c4088ba583f9f6a325fd871a"],["/archives/2019/index.html","a9953591491be905df3de27213ed6ea0"],["/archives/2019/page/2/index.html","31e305901b85326cc195d72e2365f67e"],["/archives/2019/page/3/index.html","050391ba9362d52b94bde53d44e5d007"],["/archives/2019/page/4/index.html","139f0c42e036b05ce1c3d67f4d57dcbf"],["/archives/2020/01/index.html","baaa0d6061676c604fa21c5d85bfa740"],["/archives/2020/02/index.html","76ab4dba3e8689d3c5ed0e7102c9c0db"],["/archives/2020/03/index.html","8cae29044c54876ab926faaa905e2828"],["/archives/2020/04/index.html","4bc64ff96fdf0cbc350c77ea8ef37b53"],["/archives/2020/index.html","7d10262cf89e16fa2cb928530ba2fb83"],["/archives/2020/page/2/index.html","7b257206ea0ba58c6ec768a0e64fd1dc"],["/archives/index.html","590bc2c07eae944e735ae62928da7fa7"],["/archives/page/2/index.html","590bc2c07eae944e735ae62928da7fa7"],["/archives/page/3/index.html","590bc2c07eae944e735ae62928da7fa7"],["/archives/page/4/index.html","590bc2c07eae944e735ae62928da7fa7"],["/archives/page/5/index.html","590bc2c07eae944e735ae62928da7fa7"],["/archives/page/6/index.html","590bc2c07eae944e735ae62928da7fa7"],["/categories/Soft/Chrome/index.html","4601e6defaa3b2f676e6a18b2ecdb51f"],["/categories/Soft/GitHub/index.html","b1d120867d71e1bd13da67c3746f00bc"],["/categories/Soft/IDE/Eclipse/index.html","83ea14e5fd537b55892969068951d466"],["/categories/Soft/IDE/IDEA/index.html","d7281d16f26349a7413a15b9c9dcc0ed"],["/categories/Soft/IDE/index.html","841807361064fe007c276324678c3ca0"],["/categories/Soft/index.html","c6696b0d16417889fa0302f03b3fc66c"],["/categories/Tools/Download/index.html","9e0970fd54de4c3d3fc11b3bf15d9263"],["/categories/Tools/av/index.html","daa9c62d59a876f8bf8d44f8b930a2c9"],["/categories/Tools/develop/index.html","7609616f2270a3246729c18d2ffe766f"],["/categories/Tools/develop/page/2/index.html","d58f726527d9f5a063a41cc8f6df619d"],["/categories/Tools/effcient/index.html","5afea3f78d4f9193293febbd0bfcaea5"],["/categories/Tools/index.html","fc8bd9d32b330ed22dc2b38bb87f3489"],["/categories/Tools/office/index.html","07406ae4714d121b41fee7e399fc3a7d"],["/categories/Tools/page/2/index.html","ddccefaf405077120911b64e326a5063"],["/categories/Tools/page/3/index.html","4892783082364b10ed25f6fd4545acb6"],["/categories/Tools/page/4/index.html","cba27dfbc22ff9a242405480a739fd50"],["/categories/Tools/page/5/index.html","260aebb52fa085b6f1da609947faa2ba"],["/categories/Tools/page/6/index.html","273655c373c1ee35d19cc419a662decb"],["/categories/Tools/system/index.html","87444856f9cb86e8265fa01a779f8b03"],["/categories/index.html","4056838057e1ebbf77f1e509e46d9b50"],["/css/style.css","aeb8f75e6d77c3cdfc40e5f9359d891f"],["/css/tools.css","9785b76bd04d93e98078a4f3e301e35f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","ca3848f1a00a990ecb49968e99285517"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/azure.svg","2da58a6d0c799e5a1292d52ac5e9cb0a"],["/img/baidu.svg","33b56d2242d2765d09fcf8c83b0c28f5"],["/index.html","bdf279270ba6b70e28c9c2faded2c1ae"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","a2d5ecdb8234d2c5f61aac757ebf73fb"],["/links/index.html","f6e55c94fa59ce71251d32634da5f525"],["/page/2/index.html","5ca863d7f812749be840b0ad94016f72"],["/page/3/index.html","e7a5b171e3e364edf550aa13f7a9aa4e"],["/page/4/index.html","6e1c72f567bceece644ba0509c17403f"],["/page/5/index.html","1763763beae00561a839963389c0413a"],["/page/6/index.html","271bae21bffbe11843b28f99a5c5519b"],["/tags/Adobe/index.html","3c0b1a4a4d9fc80b1e7d840422c1d601"],["/tags/Battery/index.html","e74f41ad4e70a1ecb26f57ca734fc662"],["/tags/Browser/index.html","f30b1fffb2e157cc67c92f8a74f84b52"],["/tags/CMD/index.html","32c6df5a833c324e828a39a816a0306b"],["/tags/Calendar/index.html","f8abd32bccdceab10679f6d1a69e948c"],["/tags/Chrome/index.html","bf03578ec2e66890222edd4de7d4d247"],["/tags/Command/index.html","0d38479fdbe912b754d47a89aa1d7da2"],["/tags/Compress/index.html","3fea58fe27ea99018d3afe9ab4d9d6d6"],["/tags/Crack/index.html","510f8c9f85b51c92049b0dffd54c8bb3"],["/tags/Download/index.html","980d8a73da240e0be5a51a19ea6f7de9"],["/tags/Eclipse/index.html","a51f8cc0be5db70b773173c1c8ee5c90"],["/tags/FTP/index.html","30036e74990f860599ae58d3cfa3ebf0"],["/tags/Git/index.html","6a618096f50962dbe102939347f7088d"],["/tags/GitHub/index.html","1eef81aa277d66021c9d57566842ca02"],["/tags/IDE/index.html","94e5085a7e9b7f90078bd7b42febb08c"],["/tags/IDEA/index.html","4181d1c5583e1467002967d5e2b262e2"],["/tags/Java/index.html","dfffaf67f42e26ab7bb7931fa75e9139"],["/tags/Jetbrains/index.html","12f3731b53cc31d9c30cbad7b473c465"],["/tags/JsDelivr/index.html","7b385cd84faa72c3b79b0231cc23db2c"],["/tags/Office/index.html","eec27a875a78f9b028112f03a4d4f40e"],["/tags/PDF/index.html","bbd417a39486126bcdaa8ddc22daa476"],["/tags/Snipaste/index.html","1dd0602bb070de03b1b0b267cb795114"],["/tags/Soft/index.html","7eef26aa205479337859e65da6c60a93"],["/tags/Soft/page/2/index.html","ed985d23326263dcae51ac7ad5986519"],["/tags/Soft/page/3/index.html","b1b4596b53169d0773c976cb3fc2c4b0"],["/tags/Soft/page/4/index.html","c50b2111a00beb15cd6cdbe8463b6c9c"],["/tags/Soft/page/5/index.html","b76b229471bc94bbc8ac32afe72b32d1"],["/tags/Soft/page/6/index.html","9c1620646f98c0571cb031ad29f5e158"],["/tags/Sync/index.html","3391d7ed489b59a1f45c3051ae775cc4"],["/tags/TC/index.html","62c7af870ae5b4f08204bf94bc293520"],["/tags/Teleport/index.html","2ab519a47bc9d2af6698fd0bcf0d1af1"],["/tags/Time/index.html","dd05f8c42df04e2f81cfbb3d2b73edae"],["/tags/Translate/index.html","4042c4dee7e8ee089bf6859bc6fb05dd"],["/tags/VSCode/index.html","278eabd530bf93a0146a81b06a64e7dc"],["/tags/Windows/index.html","15a757948225583be616a45101aa36e3"],["/tags/av/index.html","f123e3af45796b76458037a6bce2998a"],["/tags/config/index.html","f891f64ddefb158f565992fe16074158"],["/tags/debug/index.html","0f97a6bf19fa4faf8e5fdc7d1619943f"],["/tags/desktop/index.html","87558c2c48fb671e7173075765820b38"],["/tags/develop/index.html","f3c5b38de995320531b3583ae7c68663"],["/tags/develop/page/2/index.html","709bebe16a144583dda4b6243eb800d4"],["/tags/effcient/index.html","83dc65aec3b413d6438237e9bf9d5037"],["/tags/gestures/index.html","364eff5b795a88ce3b2e3713b6e9cf22"],["/tags/index.html","75fd3439c288368dfc0a50e26e418a3b"],["/tags/monitor/index.html","06766f1aef69cee44207c10c602b2be1"],["/tags/mouse/index.html","911b5687a172664a205b11ec41ee2cd4"],["/tags/music/index.html","576c920743a6d3d8d48ee26f2db0388d"],["/tags/optimizer/index.html","7f437ac60d9a37ba7063a713e4c12197"],["/tags/password/index.html","344cf081eecb0605757d9f67138235d3"],["/tags/search/index.html","8923ffc89c139eea39cf30b18cdd5d39"],["/tags/shell/index.html","181751945c6e6c4978954b8c34332cfc"],["/tags/ssh/index.html","198590424569ab4b05e39360c6c1b58f"],["/tags/system/index.html","7c9ed7aa531a920d85cf09e6fa448db7"],["/tags/taskbar/index.html","ad90538100a675c5a8a513f546cafaff"],["/tags/view/index.html","85c06603bff730ee805382c745050477"],["/tags/前端/index.html","88001e2bfc9dc951d1f112150a08c541"],["/tags/图床/index.html","b47adf2eb0c8b579fa21798ddd155155"],["/tags/注册码/index.html","aacc7297147d17e7de2fdb62dcca29af"],["/tags/破解/index.html","5a28ebf3b8c244ff50a7d1af32cce947"],["/tags/资源管理器/index.html","654553047f8665aeed9e73cbe9d2d0ea"],["/tools/av/Adobe/index.html","94221891d75d6085ab0b8de1f36cfe92"],["/tools/av/Balabolka/index.html","0a63bba8968cdca3b2c45720b93758cf"],["/tools/av/Foobar2000/index.html","229ed65510ae87e648203bf148391b66"],["/tools/av/MKVToolNix/index.html","19a15b4f5fbb89d2522d67223eb43f9c"],["/tools/av/Paint-net/index.html","d60b569a0e30fa8ab02083258f7126d5"],["/tools/av/ScreenToGif/index.html","78b1b6c5e68b600cde39aafdfcbd4309"],["/tools/av/Snipaste/index.html","caadd7887f05f74b4bed3e2f436b1136"],["/tools/develop/BeyondCompare/index.html","4de0cfb4c67070dc26c97c3fea0901e3"],["/tools/develop/CMDebug/index.html","ba24b3307258077dde5da2b099aebfb6"],["/tools/develop/Eclipse/index.html","aac5c6d2b30e02c4c6de3a09f5955265"],["/tools/develop/GoodSync/index.html","aaa39de7e97b711d8143f2cd53af1cd7"],["/tools/develop/IDEA/index.html","2e3d600fc2e699ef8878cffabfb8697b"],["/tools/develop/NotePad++/index.html","a1325fc2cb7a9401aeec669264070b17"],["/tools/develop/Postman/index.html","969ed90cba43ee32c46befd8af699f24"],["/tools/develop/SourceTree/index.html","c348fc6a90094c374028f8473781659e"],["/tools/develop/TeleportUltra/index.html","450f69c64311be78963479200dee9466"],["/tools/develop/UltraEdit/index.html","edbdbe5fb685c1b02442b57622afd069"],["/tools/develop/VisualStudio/index.html","ed6ef4f1f3419ab8d72985b08c0f7585"],["/tools/develop/VisualStudioCode/index.html","34d4fb8d7505e4ac0aa5d299bab88f5b"],["/tools/develop/WinSCP/index.html","4e43465d26d3678e91b86f3f139b41a2"],["/tools/develop/XShell/index.html","5d33716b19531e7fe70a7661ad7d1876"],["/tools/efficient/Cmder/index.html","d64e6418f96dfcb05de41390f4fa5f50"],["/tools/efficient/Everything/index.html","e6463bb115df4eced32e0be4cefbb2ed"],["/tools/efficient/Fences/index.html","68796aa16bc3282538353c0ac26d36f7"],["/tools/efficient/Listary/index.html","d217e052e2261f5da61d303a1ce97aba"],["/tools/efficient/QuickLook/index.html","747265d01c65a599fee62ef22acd7a15"],["/tools/efficient/Quicker/index.html","dab12c42774dfc5cf473133208b6dc63"],["/tools/efficient/TotalCommander/index.html","2a604527a9131fdbd60bb3510c31deee"],["/tools/efficient/WGestures/index.html","329e2991448a646edbd0d4d9920eab68"],["/tools/efficient/Wox/index.html","8707abc52b6e4a1c3f3a6bb9863ac866"],["/tools/index.html","2f03fd9fd11a161cc0e5f0f45bf05a13"],["/tools/office/PDFPasswordRemover/index.html","42faaabe60002bd8ec70716a620c3097"],["/tools/office/QTranslate/index.html","4c0db41ae1006dd67778fded0ac5b643"],["/tools/office/browser/Chrome/index.html","7302cb95944fa4c3f09da70ee2ee0373"],["/tools/office/browser/Edge/index.html","3a2746e2e74a42e69b6fb6d617f283ca"],["/tools/office/browser/Firefox/index.html","a580b443fcf3619c6d76bc172cd5ecf2"],["/tools/office/compress/7z/index.html","23034523c532cc0c74ea7edf33eec671"],["/tools/office/compress/WinRAR/index.html","1763d153f8a8672ce126f3b54404e428"],["/tools/office/download/IDM/index.html","054f376580da113fd86c46f8707affb8"],["/tools/office/download/PanDownload/index.html","4f4b12096f589a71eaa607e33c889815"],["/tools/office/download/WindowsISODownloader/index.html","00a6929709954773f7a5e481c3a88219"],["/tools/office/download/XDown/index.html","96d0ed416cc32600f680cb6903800d4d"],["/tools/system/Win10/index.html","f75de389009faa3f5acbb02956d27cd9"],["/tools/system/monitor/Percentage/index.html","d8eb4651532f7940a245c025ca69f89a"],["/tools/system/monitor/ProcessHacker/index.html","2d12574be817fbae7f7679fbe77794ae"],["/tools/system/monitor/TrafficMonitor/index.html","84baefdc591482a042dead9661615909"],["/tools/system/monitor/TranslucentTB/index.html","87ab919ba74393fbb5434c8b88d7dc9e"],["/tools/system/monitor/XMeters/index.html","0767388c562f59c664c26bad05b55b3a"],["/tools/system/monitor/YXCalendar/index.html","f80c3053540cfbb476aa7beda545cbfa"],["/tools/system/optimizer/DismPlusPlus/index.html","120781f635420a49116d6926232ef2b5"],["/tools/system/optimizer/LockHunter/index.html","74140172453bdb3f1f0a3315bab47338"],["/tools/system/optimizer/Unlocker/index.html","221aedfa795017e9c68002847fb48301"]];
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




