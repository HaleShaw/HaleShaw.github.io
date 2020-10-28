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

var precacheConfig = [["/404/index.html","fbc6afea4233cffb313ad9676e096b70"],["/Chrome常用配置/index.html","f9ca32c72c5304f7de6fb07b19994418"],["/Eclipse常用配置/index.html","0c027d424820820ff599a8603723f0db"],["/GitHub-JsDelivr搭建图床/index.html","44d9f913ccd33ecbe65b7172953c6842"],["/GitHub常用命令/index.html","10dcd465ad33c316d565621f9ffdc6ea"],["/IDEA常用配置/index.html","ace9c4cd43945d944fc9b1edbe03bbe7"],["/Jetbrains-Crack/index.html","2865087cf9cb86a144daf5f78b0c4031"],["/about/index.html","0a1e48a1929541c742ee53649d1c88d8"],["/archives/2018/01/index.html","07ea8ce21898bf90ca37c256ed1e3246"],["/archives/2018/index.html","bf2a0deba5a69903be3d97541db605b0"],["/archives/2019/08/index.html","8d01c659866903a0eb19228408c0312a"],["/archives/2019/09/index.html","997556e393f18395466d27af4c440693"],["/archives/2019/10/index.html","57d678bd4341bf80d6c535d169713a5a"],["/archives/2019/11/index.html","63442c353642b25f40650fd63dbe4457"],["/archives/2019/12/index.html","83bd7872b590d05912d8bc162a6d12e2"],["/archives/2019/12/page/2/index.html","6d700d8d1343827057641bd84e4cd66d"],["/archives/2019/12/page/3/index.html","a42a9f0eebe3f13d0e6750705257870d"],["/archives/2019/index.html","a32c6c26fb4277554b8f9e4a2f2250a0"],["/archives/2019/page/2/index.html","f450d59c4be07e99fccd12ed9ed58ecb"],["/archives/2019/page/3/index.html","177572d6ba6dcd936b1a59bcb5000f44"],["/archives/2019/page/4/index.html","36fb4637d1c012ca5c048080a9c49f2d"],["/archives/2020/01/index.html","604a4070b279d9b75493f6ac3dcdd89b"],["/archives/2020/02/index.html","49f13d49530467ca6a75c8646f1854dc"],["/archives/2020/03/index.html","7b8f33fd44266d248154158109e43503"],["/archives/2020/04/index.html","f21eb002b51fdc68b7cde183f14bd79e"],["/archives/2020/05/index.html","43e83679d77d2d5a7c09e18e37a01ac9"],["/archives/2020/index.html","dc2ed29cad54f26b039c8d228ef476cd"],["/archives/2020/page/2/index.html","e74172f81b00262d41578d68ce0f49c6"],["/archives/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/2/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/3/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/4/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/5/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/6/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/categories/Soft/Chrome/index.html","cc814f6a8a64ab183b3b5dcd223643f6"],["/categories/Soft/GitHub/index.html","78c5cd7a0523cebf52be0f8ee48e602a"],["/categories/Soft/IDE/Eclipse/index.html","ec63ad4c7d9c81347166281ab0f36d03"],["/categories/Soft/IDE/IDEA/index.html","3ced151504cd58b61df3067e373759a3"],["/categories/Soft/IDE/index.html","0247fb685235e034cac8277bddf8b625"],["/categories/Soft/index.html","ab5a37a3522611737a0a40de91ba5a04"],["/categories/Tools/Download/index.html","ba92c413726f6564f3f05dc1a85e8ae7"],["/categories/Tools/av/index.html","6e2def739aed46e262cd48cfbc59ee01"],["/categories/Tools/develop/index.html","e0d2e94e2f2409f2c6c5f10fb5f7c686"],["/categories/Tools/develop/page/2/index.html","1fc0d05a0021c19c7329c1ca28770afc"],["/categories/Tools/effcient/index.html","dc2a8d0c0c7320e21fda508a87e234a2"],["/categories/Tools/index.html","c1927396113265436a9d9c6225911d38"],["/categories/Tools/office/index.html","1c8a58342ffc51fb5ff68e6ec6c6dcd1"],["/categories/Tools/page/2/index.html","8471182a9e31d4893dded531bd4f9a9d"],["/categories/Tools/page/3/index.html","1c8538da8e0ecabb79ec9e60e023d919"],["/categories/Tools/page/4/index.html","8688d76dfea33f6a28ac2b9f37198f04"],["/categories/Tools/page/5/index.html","8695153ec98caa9290e19fe7db3f7830"],["/categories/Tools/page/6/index.html","3c12cc85f34a5f86236299262483c1b2"],["/categories/Tools/system/index.html","55e65357467d3da6f2111975938bb25d"],["/categories/index.html","bca6dca7d63d7387b673eb157e82d624"],["/css/style.css","42ab33b7971c01ae47a04b7610d57aab"],["/css/tools.css","38a2cd500e32b797bee7b12b7e71a4c8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","86c30bcaca03ae1ac5a6fa1ce407887d"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","33781be3fdce69b020fa0c3610311819"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","1e38769013551f70e680934e7b41a63a"],["/page/2/index.html","305f8692061f941e12f0080af7d038a4"],["/page/3/index.html","d54efa0aa70e0a29dbfd65f162fb8892"],["/page/4/index.html","39d92af5837d4bb5583b4c0489972a07"],["/page/5/index.html","5a61141d105b3e5306bc3e340ed0f61a"],["/page/6/index.html","a6dc2f5f5a2945b7cdbbeb30fac82ad8"],["/tags/Adobe/index.html","df2acf126e1becab81de82b992a2bebb"],["/tags/Battery/index.html","fb73ffcdc60443d229ea797e9cad07bf"],["/tags/Browser/index.html","a9e1695846b15445f9a40ef7784ef0b8"],["/tags/Calendar/index.html","e688a1874bc909337d0e61f58737d644"],["/tags/Chrome/index.html","199246141a5a77c7b3303e730a0c5ef9"],["/tags/Command/index.html","9723f0abda4c4be8ee1952478c7b3837"],["/tags/Compress/index.html","7168a0e70135c20bddf2e0b0be38cdea"],["/tags/Crack/index.html","0f4e639c43ac3b9fb18a970af457beb9"],["/tags/Download/index.html","ae44fc2822876d2b53524701458b5820"],["/tags/Eclipse/index.html","ce2517c14af458a0f8a650301e773408"],["/tags/FTP/index.html","e199589ca1c35c73e26b78e6ce982245"],["/tags/Git/index.html","4dae9bd598d919ce5ec1c4c9b2e215de"],["/tags/GitHub/index.html","9d9a8e265ad1cf02704410ccd4d0e00e"],["/tags/IDE/index.html","5553d304b660a9954f8427cd83e21c2e"],["/tags/IDEA/index.html","e33c558b0e79c4e27a00b4e569e30dc1"],["/tags/Java/index.html","0bb37eb15ff62644f557eb46b20e35d0"],["/tags/Jetbrains/index.html","5aa131e6fb45e8887a22e009aeecabfe"],["/tags/JsDelivr/index.html","3e99ebcee31ef9edfef5497fb54fea59"],["/tags/Office/index.html","614504a3eaae1fc66d89bcb4b5feadf0"],["/tags/PDF/index.html","f9b52cf87e136e207a76ba48241f1c3f"],["/tags/Snipaste/index.html","2555110468c329e234bc26ed6d9a4c54"],["/tags/Soft/index.html","8bbff71c1c202c8809be315e339e0053"],["/tags/Soft/page/2/index.html","aa571b1d6d438bb159fe68213a197405"],["/tags/Soft/page/3/index.html","1ddc7a287da0d121d09355297e305802"],["/tags/Soft/page/4/index.html","1b7b308c7ac7c420939b247e8653e57d"],["/tags/Soft/page/5/index.html","35b97f18eb6793eadcf1c7dee50d0d9b"],["/tags/Soft/page/6/index.html","a0920351c7acb904da756191e80e11d7"],["/tags/Sync/index.html","8012a89d7a53f41585d1bfee8208967f"],["/tags/TC/index.html","bdeb5e3d07c2a267c5944f5994151138"],["/tags/Teleport/index.html","bdcfba72daba805026b025e71b886a66"],["/tags/Time/index.html","45fe5074bed33ccdc46d79b9ad5a1d2b"],["/tags/VSCode/index.html","c8742d959f3b34ddbfd92b21b515a2db"],["/tags/Windows/index.html","a8f0e0d4284de6da10619d5473849e9d"],["/tags/av/index.html","0ce03f220aeba1ea6e3b62550cd94d8d"],["/tags/cmd/index.html","98adcbdadbd29252670146713a2b4afe"],["/tags/config/index.html","211dd64f43ea48f0956980e2d3ca7c25"],["/tags/debug/index.html","b19363e37fabb4a7c8c5f3832615e243"],["/tags/desktop/index.html","7e7ffff4f7c94b110d5b671e0cca7775"],["/tags/develop/index.html","9acf8b3d3ee635007197d24dc47c00b1"],["/tags/develop/page/2/index.html","c52180a62a0b7a62de47999e0203f7b6"],["/tags/effcient/index.html","e478d09af39e174914c6c19d799a3221"],["/tags/gestures/index.html","cdef51183a28243585d39f8f9a69101e"],["/tags/index.html","c5014e21f1abd3a78ca40a7270783865"],["/tags/monitor/index.html","2ed2e749306955817d766ce8a214bb1a"],["/tags/mouse/index.html","6cd993a69d923030a221d432e7ac2215"],["/tags/music/index.html","1f93e7415cae454305ba66e00953c102"],["/tags/optimizer/index.html","bb6a881be1be7c197322c03f7dbe1a29"],["/tags/password/index.html","a4bc5c76c1ca2786e45ec7b3f57b8367"],["/tags/search/index.html","989aa77d0b0e1e02b6a1561a6cfcc1d6"],["/tags/shell/index.html","2e98a79b58c4f0660f9dc2773f1130d8"],["/tags/ssh/index.html","5e8acc19c970fde9f506637c43c14a82"],["/tags/system/index.html","193a7ee2df1e5cc109c2dafabbe46c86"],["/tags/taskbar/index.html","f7b8d338c6d7fd5a79efeefaf05d1ba4"],["/tags/translate/index.html","f85aa6e2699e03351ab8f9b4ef663902"],["/tags/view/index.html","5bff7e02bd06cab629a377daa6840cf6"],["/tags/前端/index.html","64eb221d8d7d3b7a21a59ff4a3e1520f"],["/tags/图床/index.html","099c1bcec66c9b575d6339d4159f4d88"],["/tags/注册码/index.html","194efe999d30770523831ce508202626"],["/tags/破解/index.html","a62c2b54838ae7b42906dfcdc89c5050"],["/tags/资源管理器/index.html","02254050b0ad7def163c7785f4f88300"],["/tools/av/Adobe/index.html","3e43bc869fc32be98588df90d4039856"],["/tools/av/Balabolka/index.html","3cd577be5ffca616404efb9d55cd6b6c"],["/tools/av/Foobar2000/index.html","96b939f3cc81f4485ae9b13762798cec"],["/tools/av/MKVToolNix/index.html","0ccdb0eca533a93b5b2666a0e3e45528"],["/tools/av/Paint-net/index.html","920eeca286f578c9b08f5f6cacd440fd"],["/tools/av/ScreenToGif/index.html","d759870f41c7c3a885b749080385ffc5"],["/tools/av/Snipaste/index.html","76e8f2a4bea3f6b08990840dcc806369"],["/tools/develop/BeyondCompare/index.html","9057daa5c415ca3703a84f86419c3deb"],["/tools/develop/CMDebug/index.html","b7480de275484b6147754191eeab970c"],["/tools/develop/Eclipse/index.html","c96556a232ea6068fafd62b5e6d25e3c"],["/tools/develop/GoodSync/index.html","67036cd2646081a069945ecb9bd2f6ee"],["/tools/develop/IDEA/index.html","f1611ec6799cd6dc87374a239e25e7d8"],["/tools/develop/NotePad++/index.html","73e0a9015cb61e31e5df10b9b83c6cb4"],["/tools/develop/Postman/index.html","585b70b1ea6c02275f2d809038db30ae"],["/tools/develop/SourceTree/index.html","8f0eb78bd78ec6dce56778812fa3d7d9"],["/tools/develop/TeleportUltra/index.html","1119cc4480f8f908d195c9774136b850"],["/tools/develop/UltraEdit/index.html","b22a77e27850c3e159632bb6dccd45e4"],["/tools/develop/VisualStudio/index.html","a22dcb764e7ff770e72387bb8c473a6c"],["/tools/develop/VisualStudioCode/index.html","fc1f07aa2dbae73b01b96b8e256e3530"],["/tools/develop/WinSCP/index.html","374d0f682823e1d9c3fd492919e01a9d"],["/tools/develop/XShell/index.html","b68e925861d3979cc20b91e535621695"],["/tools/efficient/Cmder/index.html","bc5968c02767dd39ed7d92c334883834"],["/tools/efficient/Everything/index.html","cedb19f5bdc1201f44bb275c03d141be"],["/tools/efficient/Fences/index.html","486f5aee413335b1edd946a91fb3ea95"],["/tools/efficient/Listary/index.html","a495de70a6db385f6b86782d8503bcd7"],["/tools/efficient/QuickLook/index.html","b76f80ae8887bbbde5265e35501c2d84"],["/tools/efficient/Quicker/index.html","411c9c6350153bb9531eeed9b949f2ae"],["/tools/efficient/TotalCommander/index.html","191d026798963a16baa183a8ae9b5b55"],["/tools/efficient/WGestures/index.html","b1e8a74bcabde5f589fc282859f2ac59"],["/tools/efficient/WindowsTerminal/index.html","e43f9a091ebaf9cb3298765c31263e17"],["/tools/efficient/Wox/index.html","b71b71b3a0c014e03e20ab6f0b4bbb5a"],["/tools/index.html","0c971757999a2e49f0aa08b739edfbee"],["/tools/office/PDFPasswordRemover/index.html","9bba3b7ccbf4d82c82a55901533d5f94"],["/tools/office/QTranslate/index.html","5efd6fa0ffa7752e9ebaa296ddfcaf00"],["/tools/office/browser/Chrome/index.html","23c401b3a74881bbbe307ce21f4f95ef"],["/tools/office/browser/Edge/index.html","1ef33cad71bb4d52617dd3f0f1e36e70"],["/tools/office/browser/Firefox/index.html","73dcecb4dec0aa336364942730e77139"],["/tools/office/compress/7z/index.html","8488be327877097943c186f41897c1e5"],["/tools/office/compress/WinRAR/index.html","8e0b8568e073827e91a89f6a2a726eab"],["/tools/office/download/IDM/index.html","ac706026816b1cf296d8b32a87c3684c"],["/tools/office/download/PanDownload/index.html","09156d0dc89f893727f57e7f6b099b29"],["/tools/office/download/WindowsISODownloader/index.html","49545a90840275af0207c11cc1b1c9ee"],["/tools/office/download/XDown/index.html","db84f1113d10d68c503b8fc5717ae6eb"],["/tools/system/Win10/index.html","78e51c4153df33382f0a0f349768f34d"],["/tools/system/monitor/Percentage/index.html","8f579d13423ce85ec2ab70c3adb6d1a5"],["/tools/system/monitor/ProcessHacker/index.html","db7049f9d1a344fd9bab5365ee797629"],["/tools/system/monitor/TrafficMonitor/index.html","d41dd1af1df9a8cb647b0de2627efc91"],["/tools/system/monitor/TranslucentTB/index.html","767fdcd18b2f1dfdad40f4cf5fd5b219"],["/tools/system/monitor/XMeters/index.html","af568158d02efe6a7523f67df03c76de"],["/tools/system/monitor/YXCalendar/index.html","f7476cb0dedda8fc1f8b77f8f0de54ea"],["/tools/system/optimizer/DismPlusPlus/index.html","4dee1efee4ec3018256b0559c16acbdc"],["/tools/system/optimizer/LockHunter/index.html","d9e0ab4f182681082865715ccab71616"],["/tools/system/optimizer/Unlocker/index.html","7d2304b75835797f0498189339e8f8ee"]];
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




