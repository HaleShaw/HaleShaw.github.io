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

var precacheConfig = [["/404/index.html","9920ebf12abbdc2a32f459e6ea38493f"],["/Chrome常用配置/index.html","f6e3953bcbd5046c30c2f1e479277306"],["/Eclipse常用配置/index.html","12ef65cab0e8b996c48b77a5a4f8e314"],["/GitHub-JsDelivr搭建图床/index.html","f3ccb26b569a5baea8a403d40f9c1894"],["/GitHub常用命令/index.html","cfd194ac5c0e17267ae9c24c9db77fa7"],["/IDEA常用配置/index.html","2c3deb33510036b9e6c79716c3b2b72b"],["/Jetbrains-Crack/index.html","939f137067192696723aa4fcc8a4d942"],["/about/index.html","edf160552a9c4fc5be6e970eb8fd4e08"],["/archives/2018/01/index.html","07ea8ce21898bf90ca37c256ed1e3246"],["/archives/2018/index.html","bf2a0deba5a69903be3d97541db605b0"],["/archives/2019/08/index.html","8d01c659866903a0eb19228408c0312a"],["/archives/2019/09/index.html","997556e393f18395466d27af4c440693"],["/archives/2019/10/index.html","57d678bd4341bf80d6c535d169713a5a"],["/archives/2019/11/index.html","63442c353642b25f40650fd63dbe4457"],["/archives/2019/12/index.html","81d923410c9b71c61b009a204149bb9d"],["/archives/2019/12/page/2/index.html","6d700d8d1343827057641bd84e4cd66d"],["/archives/2019/12/page/3/index.html","94991c0cd3c2fb72d5d60260f2e50265"],["/archives/2019/index.html","12781bb2e9b7df4c2d33de6eaf7be17f"],["/archives/2019/page/2/index.html","f450d59c4be07e99fccd12ed9ed58ecb"],["/archives/2019/page/3/index.html","efcef9445578f71d44f794e88afb9251"],["/archives/2019/page/4/index.html","36fb4637d1c012ca5c048080a9c49f2d"],["/archives/2020/01/index.html","604a4070b279d9b75493f6ac3dcdd89b"],["/archives/2020/02/index.html","49f13d49530467ca6a75c8646f1854dc"],["/archives/2020/03/index.html","7b8f33fd44266d248154158109e43503"],["/archives/2020/04/index.html","f21eb002b51fdc68b7cde183f14bd79e"],["/archives/2020/05/index.html","43e83679d77d2d5a7c09e18e37a01ac9"],["/archives/2020/index.html","dc2ed29cad54f26b039c8d228ef476cd"],["/archives/2020/page/2/index.html","e74172f81b00262d41578d68ce0f49c6"],["/archives/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/2/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/3/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/4/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/5/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/6/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/categories/Soft/Chrome/index.html","cc814f6a8a64ab183b3b5dcd223643f6"],["/categories/Soft/GitHub/index.html","78c5cd7a0523cebf52be0f8ee48e602a"],["/categories/Soft/IDE/Eclipse/index.html","ec63ad4c7d9c81347166281ab0f36d03"],["/categories/Soft/IDE/IDEA/index.html","3ced151504cd58b61df3067e373759a3"],["/categories/Soft/IDE/index.html","0247fb685235e034cac8277bddf8b625"],["/categories/Soft/index.html","ab5a37a3522611737a0a40de91ba5a04"],["/categories/Tools/Download/index.html","ba92c413726f6564f3f05dc1a85e8ae7"],["/categories/Tools/av/index.html","6e2def739aed46e262cd48cfbc59ee01"],["/categories/Tools/develop/index.html","deb8051cb136204a341b7310b893a54b"],["/categories/Tools/develop/page/2/index.html","0ea54c510138a4485d931de9cc1824fb"],["/categories/Tools/effcient/index.html","dc2a8d0c0c7320e21fda508a87e234a2"],["/categories/Tools/index.html","c1927396113265436a9d9c6225911d38"],["/categories/Tools/office/index.html","1c8a58342ffc51fb5ff68e6ec6c6dcd1"],["/categories/Tools/page/2/index.html","8471182a9e31d4893dded531bd4f9a9d"],["/categories/Tools/page/3/index.html","a305df0d1ac6b5b3b52010a300502a71"],["/categories/Tools/page/4/index.html","8688d76dfea33f6a28ac2b9f37198f04"],["/categories/Tools/page/5/index.html","2deaad4c56afc65009037700ffebfb39"],["/categories/Tools/page/6/index.html","3c12cc85f34a5f86236299262483c1b2"],["/categories/Tools/system/index.html","55e65357467d3da6f2111975938bb25d"],["/categories/index.html","bca6dca7d63d7387b673eb157e82d624"],["/css/style.css","42ab33b7971c01ae47a04b7610d57aab"],["/css/tools.css","38a2cd500e32b797bee7b12b7e71a4c8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","6b09df450735271a20e8377fb90014fe"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","b89f00500b4f7bde2278d41b42ed0abd"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","1e38769013551f70e680934e7b41a63a"],["/page/2/index.html","305f8692061f941e12f0080af7d038a4"],["/page/3/index.html","062d7f518784ea7c70f9951d8c2a0e10"],["/page/4/index.html","39d92af5837d4bb5583b4c0489972a07"],["/page/5/index.html","b9f6c14ec28e2773f6810db8e6fe6419"],["/page/6/index.html","a6dc2f5f5a2945b7cdbbeb30fac82ad8"],["/tags/Adobe/index.html","df2acf126e1becab81de82b992a2bebb"],["/tags/Battery/index.html","fb73ffcdc60443d229ea797e9cad07bf"],["/tags/Browser/index.html","a9e1695846b15445f9a40ef7784ef0b8"],["/tags/CMD/index.html","4ff6c0e060964943197e0261d2cf6025"],["/tags/Calendar/index.html","e688a1874bc909337d0e61f58737d644"],["/tags/Chrome/index.html","199246141a5a77c7b3303e730a0c5ef9"],["/tags/Command/index.html","9723f0abda4c4be8ee1952478c7b3837"],["/tags/Compress/index.html","7168a0e70135c20bddf2e0b0be38cdea"],["/tags/Crack/index.html","0f4e639c43ac3b9fb18a970af457beb9"],["/tags/Download/index.html","ae44fc2822876d2b53524701458b5820"],["/tags/Eclipse/index.html","ce2517c14af458a0f8a650301e773408"],["/tags/FTP/index.html","73f08d16678f19c4f4f15443ec1b3ac8"],["/tags/Git/index.html","4dae9bd598d919ce5ec1c4c9b2e215de"],["/tags/GitHub/index.html","9d9a8e265ad1cf02704410ccd4d0e00e"],["/tags/IDE/index.html","419789ee9c1c03fdffc5997b8337c6ca"],["/tags/IDEA/index.html","e33c558b0e79c4e27a00b4e569e30dc1"],["/tags/Java/index.html","0bb37eb15ff62644f557eb46b20e35d0"],["/tags/Jetbrains/index.html","5aa131e6fb45e8887a22e009aeecabfe"],["/tags/JsDelivr/index.html","3e99ebcee31ef9edfef5497fb54fea59"],["/tags/Office/index.html","614504a3eaae1fc66d89bcb4b5feadf0"],["/tags/PDF/index.html","f9b52cf87e136e207a76ba48241f1c3f"],["/tags/Snipaste/index.html","2555110468c329e234bc26ed6d9a4c54"],["/tags/Soft/index.html","8bbff71c1c202c8809be315e339e0053"],["/tags/Soft/page/2/index.html","aa571b1d6d438bb159fe68213a197405"],["/tags/Soft/page/3/index.html","c9be9169fc2f8a7e8d9e2a239aae1774"],["/tags/Soft/page/4/index.html","1b7b308c7ac7c420939b247e8653e57d"],["/tags/Soft/page/5/index.html","92523718db96aa9a46b2d9acc2123a63"],["/tags/Soft/page/6/index.html","a0920351c7acb904da756191e80e11d7"],["/tags/Sync/index.html","8012a89d7a53f41585d1bfee8208967f"],["/tags/TC/index.html","bdeb5e3d07c2a267c5944f5994151138"],["/tags/Teleport/index.html","bdcfba72daba805026b025e71b886a66"],["/tags/Time/index.html","45fe5074bed33ccdc46d79b9ad5a1d2b"],["/tags/Translate/index.html","1ca3fc4e17203d640aca387db2de0ece"],["/tags/VSCode/index.html","c8742d959f3b34ddbfd92b21b515a2db"],["/tags/Windows/index.html","a8f0e0d4284de6da10619d5473849e9d"],["/tags/av/index.html","0ce03f220aeba1ea6e3b62550cd94d8d"],["/tags/config/index.html","211dd64f43ea48f0956980e2d3ca7c25"],["/tags/debug/index.html","b19363e37fabb4a7c8c5f3832615e243"],["/tags/desktop/index.html","7e7ffff4f7c94b110d5b671e0cca7775"],["/tags/develop/index.html","fc312a1552f91e23d92ccfb7cdc0efa9"],["/tags/develop/page/2/index.html","49e16dbb33712574186f6a5ad87811a3"],["/tags/effcient/index.html","e478d09af39e174914c6c19d799a3221"],["/tags/gestures/index.html","cdef51183a28243585d39f8f9a69101e"],["/tags/index.html","c5014e21f1abd3a78ca40a7270783865"],["/tags/monitor/index.html","2ed2e749306955817d766ce8a214bb1a"],["/tags/mouse/index.html","6cd993a69d923030a221d432e7ac2215"],["/tags/music/index.html","1f93e7415cae454305ba66e00953c102"],["/tags/optimizer/index.html","bb6a881be1be7c197322c03f7dbe1a29"],["/tags/password/index.html","a4bc5c76c1ca2786e45ec7b3f57b8367"],["/tags/search/index.html","989aa77d0b0e1e02b6a1561a6cfcc1d6"],["/tags/shell/index.html","2e98a79b58c4f0660f9dc2773f1130d8"],["/tags/ssh/index.html","5e8acc19c970fde9f506637c43c14a82"],["/tags/system/index.html","193a7ee2df1e5cc109c2dafabbe46c86"],["/tags/taskbar/index.html","f7b8d338c6d7fd5a79efeefaf05d1ba4"],["/tags/view/index.html","5bff7e02bd06cab629a377daa6840cf6"],["/tags/前端/index.html","64eb221d8d7d3b7a21a59ff4a3e1520f"],["/tags/图床/index.html","099c1bcec66c9b575d6339d4159f4d88"],["/tags/注册码/index.html","194efe999d30770523831ce508202626"],["/tags/破解/index.html","a62c2b54838ae7b42906dfcdc89c5050"],["/tags/资源管理器/index.html","02254050b0ad7def163c7785f4f88300"],["/tools/av/Adobe/index.html","c60ed81f1a17717b2f5e55ac9ac572f9"],["/tools/av/Balabolka/index.html","545c34ed21fb3aa865bda7c1958fd84f"],["/tools/av/Foobar2000/index.html","22fcfdce726dd8611399a8b19b46ab95"],["/tools/av/MKVToolNix/index.html","4379ea43ed36b82fffb51d076089e517"],["/tools/av/Paint-net/index.html","2a04b65d4feffb3ad8e2e301cd8296d7"],["/tools/av/ScreenToGif/index.html","fc41e1494f5998ebd9538378f47e211e"],["/tools/av/Snipaste/index.html","d5291e41fb0ee9b52c1b1f67cb2468f9"],["/tools/develop/BeyondCompare/index.html","f0ce4f3376d52675cbddd778f7960a26"],["/tools/develop/CMDebug/index.html","f0401019fc85d19aa97ff8635030e82b"],["/tools/develop/Eclipse/index.html","4b7d58fa281c4bae4c3bf430fdca88d6"],["/tools/develop/GoodSync/index.html","a83fa5545e9dd465acba5487c906b95d"],["/tools/develop/IDEA/index.html","d349d537a38a7603d12fe704dcbb7237"],["/tools/develop/NotePad++/index.html","aef339914541dd645993018a127cb49c"],["/tools/develop/Postman/index.html","943e73e0436ef0c2f485939bfa0eac5d"],["/tools/develop/SourceTree/index.html","58a89e4b2a768abe9b6a946542aa0fd7"],["/tools/develop/TeleportUltra/index.html","c31fbf3567683116857a007415092e06"],["/tools/develop/UltraEdit/index.html","7a7984b2f98f0824f58ea28390c22e32"],["/tools/develop/VisualStudio/index.html","a9281b588c914376fc547615852af1f0"],["/tools/develop/VisualStudioCode/index.html","d040cf63f3b7eb99beae3ed5d27e9c21"],["/tools/develop/WinSCP/index.html","8f230cd4e638455269f12805eb9e1236"],["/tools/develop/XShell/index.html","31ee23ce156e146ad1d538d4908afbd4"],["/tools/efficient/Cmder/index.html","bc7319c1ac144fe83aa66d67b5de2961"],["/tools/efficient/Everything/index.html","a79b71edd02704c26ace567d9e6b860b"],["/tools/efficient/Fences/index.html","70db964443faa55ba1967bc16a6ace92"],["/tools/efficient/Listary/index.html","aadd889ff368e4c9250151322aec6231"],["/tools/efficient/QuickLook/index.html","26a9d55594da6b4f4f1d2092b30aef1e"],["/tools/efficient/Quicker/index.html","7372eae78c46087c979eb0a745641c7e"],["/tools/efficient/TotalCommander/index.html","8a845f4a9349bd4d05ae8804d561a5d6"],["/tools/efficient/WGestures/index.html","5ddfc0be1da1d8ba20aa216f790a33e6"],["/tools/efficient/WindowsTerminal/index.html","d8f3445308b4b959903e804065d85a95"],["/tools/efficient/Wox/index.html","a5d6747d6eb1936783a430e2d5021708"],["/tools/index.html","18668a490b49e0bbfea101f953e77256"],["/tools/office/PDFPasswordRemover/index.html","0402c15d796e9ee64f4a759ba219112a"],["/tools/office/QTranslate/index.html","9c6fe890d2123a836ec1e6f1a8f22d39"],["/tools/office/browser/Chrome/index.html","d7b16e9890eb6b8ee1dc1e81aa8d3a36"],["/tools/office/browser/Edge/index.html","3143ec0a50f140282481b16937e54a82"],["/tools/office/browser/Firefox/index.html","e44acd23111c609f20ec730840daf3a5"],["/tools/office/compress/7z/index.html","6ff912d746d51420af14bc9366ed4c4e"],["/tools/office/compress/WinRAR/index.html","7a0e2be5e0604f2b9887eeded08c7c2a"],["/tools/office/download/IDM/index.html","76277033f78ae2c5ab197733491abe1f"],["/tools/office/download/PanDownload/index.html","7f70fa2d15c307861e7762e929b138d5"],["/tools/office/download/WindowsISODownloader/index.html","62eaa900657d4fb8d901d2172101cc79"],["/tools/office/download/XDown/index.html","f98bc227d8466c31041cdf06db50baf0"],["/tools/system/Win10/index.html","4b50053546e07ef30a93f69204be4f70"],["/tools/system/monitor/Percentage/index.html","9363a1cad9b5ea0e48b067fcdd96ce7d"],["/tools/system/monitor/ProcessHacker/index.html","80c68959e983951dac57a497106adc26"],["/tools/system/monitor/TrafficMonitor/index.html","24d9b7713ba668152c68065864315919"],["/tools/system/monitor/TranslucentTB/index.html","edaabd2deee0e2168e8c5cfcddfad11c"],["/tools/system/monitor/XMeters/index.html","648c72f6219dc8045a910871248e51f4"],["/tools/system/monitor/YXCalendar/index.html","bcaf09d2cc8ebc81bb9861187534cb30"],["/tools/system/optimizer/DismPlusPlus/index.html","314f35a277879e92e8f9b6331f41dda9"],["/tools/system/optimizer/LockHunter/index.html","a1aadb729a6630e1f3e933b70ed58bac"],["/tools/system/optimizer/Unlocker/index.html","dfb599fe548a4a906eba3771f6ed8160"]];
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




