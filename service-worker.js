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

var precacheConfig = [["/404/index.html","46c21495cf8f298f05c09877eec51826"],["/Chrome常用配置/index.html","588aeaeff5d0c567ce2e0555c90af243"],["/Eclipse常用配置/index.html","3c9860cc20bd1225f40d6c3291eb48b3"],["/GitHub-JsDelivr搭建图床/index.html","53b4fb8900a6288cd266e0da46c355e6"],["/GitHub常用命令/index.html","460c6a1d0457a6c51e71b75d4d53b79d"],["/IDEA常用配置/index.html","233a361626929ce6321294e202331030"],["/Jetbrains-Crack/index.html","9e53a50d17baf6bb369e78c817487f42"],["/about/index.html","0a1e48a1929541c742ee53649d1c88d8"],["/archives/2018/01/index.html","47afe285e62aa30e61bdd9edc5f7466a"],["/archives/2018/index.html","7ad519de6cb14c9a55a4583ec8a4697b"],["/archives/2019/08/index.html","3b65fdada731b760fa574dd3d147c1b3"],["/archives/2019/09/index.html","a8350a861311f163fa416852a14f62b4"],["/archives/2019/10/index.html","ddfe8c48fcc0dac5240bf4e023ab9b49"],["/archives/2019/11/index.html","3532d8290773c21f6acee5124259d5ab"],["/archives/2019/12/index.html","505eb42d40358c517cb1a801a5976d86"],["/archives/2019/12/page/2/index.html","a9e569ba511bb8c0a204e37855ba726b"],["/archives/2019/12/page/3/index.html","faf4d6b536e34b8fe9ad2f5ea9f1ec6a"],["/archives/2019/index.html","3e2036ab22b223c6cc96a2b2ec9b69a0"],["/archives/2019/page/2/index.html","927e262acf5c6e1283ad312c1eaaea34"],["/archives/2019/page/3/index.html","d3f1a737843c75ebc3627cc940bfa407"],["/archives/2019/page/4/index.html","ff93d17239aa3ce01c6e8ac82faf487b"],["/archives/2020/01/index.html","ce4c812fbd873817d6d51e490a7c71cf"],["/archives/2020/02/index.html","a416783c3f86d19d048010a79915a8fe"],["/archives/2020/03/index.html","43a14b1692f9246114226943ca7e9156"],["/archives/2020/04/index.html","e989cc700e44a42e425f202a68964912"],["/archives/2020/05/index.html","43e83679d77d2d5a7c09e18e37a01ac9"],["/archives/2020/index.html","49b86d6875cd2e12d6e5f6c083526af4"],["/archives/2020/page/2/index.html","3fcb832466cc595a6b12383b33844929"],["/archives/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/2/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/3/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/4/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/5/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/archives/page/6/index.html","20ad489d3312dcdcc4e721ce11b5ea33"],["/categories/Soft/Chrome/index.html","a3275d644182dcebc8dea98f52cd5a98"],["/categories/Soft/GitHub/index.html","77fe145e6d010c682ac80e83b09bb92b"],["/categories/Soft/IDE/Eclipse/index.html","ec63ad4c7d9c81347166281ab0f36d03"],["/categories/Soft/IDE/IDEA/index.html","264f5c1af7802a2a6a21f7f42e5a9b68"],["/categories/Soft/IDE/index.html","02c22eeaf66877e564f6c2e91c8f3d08"],["/categories/Soft/index.html","e084aa5f44aaa43b6bce04f41a2736a1"],["/categories/Tools/Download/index.html","57218d0bb797b3a6de767da70aba5b5d"],["/categories/Tools/av/index.html","a6bb271798d0cc528184b611d1951d75"],["/categories/Tools/develop/index.html","40c4be24550c191813b710d6b8213fcf"],["/categories/Tools/develop/page/2/index.html","a4586ad60a9f251e567be0472205c47e"],["/categories/Tools/effcient/index.html","84443926d10ec4bb158bcdec25691865"],["/categories/Tools/index.html","5d6182e51e692ffd8694111092791c33"],["/categories/Tools/office/index.html","d677a18067f51e43096531e383ea1467"],["/categories/Tools/page/2/index.html","1911a9327e53b7d28b2f3b7b428c325e"],["/categories/Tools/page/3/index.html","42868a3a31d825ebd00959c3ee297d6e"],["/categories/Tools/page/4/index.html","2ab8fc2ed2dc51bbd50c56411750e4dc"],["/categories/Tools/page/5/index.html","d070064887c4af4ddef1823cebc29061"],["/categories/Tools/page/6/index.html","6a4b0e78d310584b7e90a707f84a76e0"],["/categories/Tools/system/index.html","7aff9b89d787fa7c5da37e8f199af468"],["/categories/index.html","bca6dca7d63d7387b673eb157e82d624"],["/css/style.css","42ab33b7971c01ae47a04b7610d57aab"],["/css/tools.css","38a2cd500e32b797bee7b12b7e71a4c8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","161837b6082489e93f1f858dd9021662"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","a662f748ec52990434a23efcca8318ed"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","408e401dafc29597cf6ae9f8a1b36ee7"],["/page/2/index.html","2fdf86d4a2dc906756d698f26423d3fe"],["/page/3/index.html","01fd9f92690232184f5dd23588d1129f"],["/page/4/index.html","84e0cb1f0651b3c0c616a90b935e80c2"],["/page/5/index.html","817025b2a75105c3ed73aa8de9ce9a21"],["/page/6/index.html","c949e720a995919450897675343d87fc"],["/tags/Adobe/index.html","4828b0ff52a5b2d9c7e2a4b48ae1bc8e"],["/tags/Battery/index.html","8ee9d2160682749c482be54d021ba25a"],["/tags/Browser/index.html","a333cea2e3d9ddf3b0dc0de27e1294e7"],["/tags/Calendar/index.html","647e536111cf7baceb0dea826c6702c9"],["/tags/Chrome/index.html","6ccd2f3ffbf8ead017176d290ce8b164"],["/tags/Command/index.html","0ba8eba7e0d68415382cecd7617cfbdf"],["/tags/Compress/index.html","a82180662e525db4c0e9abc4e768574d"],["/tags/Crack/index.html","106e4f7e73194e532b1b857568c92650"],["/tags/Download/index.html","e6a69e5090d82f58057b221af2e3d4b7"],["/tags/Eclipse/index.html","ce2517c14af458a0f8a650301e773408"],["/tags/FTP/index.html","a38b52bdb1c510ffdb41ccb0929e33d0"],["/tags/Git/index.html","535ea00f5e344b812a467634b5219a73"],["/tags/GitHub/index.html","f3552ef99174b60e0759c8f2cad9a383"],["/tags/IDE/index.html","fd7008e6c869da7fa8376cecb244abbc"],["/tags/IDEA/index.html","2fd4f02ed50ec4590a0ab3fe1af5059b"],["/tags/Java/index.html","05c0a69f595107cf4c21bd119751c1e4"],["/tags/Jetbrains/index.html","27f54615ec7d781773f6a4a55ae2d9d4"],["/tags/JsDelivr/index.html","bf52064263f625104a0e68f39bc01eb4"],["/tags/Office/index.html","7edc2d6b501cd7837296c1d2a1f770cd"],["/tags/PDF/index.html","abbd23ab264e7c47c521a40d87455d2d"],["/tags/Snipaste/index.html","65752d15f9653039befeea2690feb2f6"],["/tags/Soft/index.html","04ffde025a2f65b59f1b87cacb9908bd"],["/tags/Soft/page/2/index.html","dd84df55efd7df21f1636cd391df64ed"],["/tags/Soft/page/3/index.html","069526a47c14923679da7c887bd8a9a3"],["/tags/Soft/page/4/index.html","9aa9cddc5b7db3918892e433cca4b2f1"],["/tags/Soft/page/5/index.html","2df22aa98cdf6f1b7bad5ccacbe33fab"],["/tags/Soft/page/6/index.html","e0dd14c223f7fea04e49b02ecc3c4648"],["/tags/Sync/index.html","949cc10c0704a3601b34b372c8f71da4"],["/tags/TC/index.html","808be64ef6998b553e0070f66960bb31"],["/tags/Teleport/index.html","63c2d42128719127eb2330f7cd0e32e1"],["/tags/Time/index.html","13574dd829e3155b908c5bf5742c96a0"],["/tags/Translate/index.html","9c6de45d9012880c242949299736a6c0"],["/tags/VSCode/index.html","167098abb72a052271d32c922bede14c"],["/tags/Windows/index.html","722860abf5f94a86c6a053c289059666"],["/tags/av/index.html","1b100656604214012cf505b81c2fa171"],["/tags/cmd/index.html","78714f9f5c403e7dfa5c7317e668ccfd"],["/tags/config/index.html","c5467301ad66df7052a4eadb7b051cca"],["/tags/debug/index.html","590686a5c99c17a53a973b8aa8964f2c"],["/tags/desktop/index.html","2fbf981cd6f718849bc240541cdaba83"],["/tags/develop/index.html","183c963ae718e7ccdd20e7b5ad3392af"],["/tags/develop/page/2/index.html","2a51a9d255c29b21f2c8a393c6135879"],["/tags/effcient/index.html","d03502620e11b89ba256514e784a59e9"],["/tags/gestures/index.html","445433d10d34d290d2fd8fcea96f1501"],["/tags/index.html","c5014e21f1abd3a78ca40a7270783865"],["/tags/monitor/index.html","fa56074efcc75ea36006bb537a29ef20"],["/tags/mouse/index.html","ea1960598c098fe7c65bf9e6439063e5"],["/tags/music/index.html","b97efd135e29f0d4542260119f8006d5"],["/tags/optimizer/index.html","d8ac82a841029d43bffe396e52e7e74b"],["/tags/password/index.html","8f3d754b80d921ce08023803843e3466"],["/tags/search/index.html","5d4a2fcea83c8ad48609dd9827eac334"],["/tags/shell/index.html","e48b3638214bc69eb253dc54c5ad0d05"],["/tags/ssh/index.html","3dae55f2689ffd441dd57ee7e33a5a56"],["/tags/system/index.html","193a7ee2df1e5cc109c2dafabbe46c86"],["/tags/taskbar/index.html","ebe56897dabb05164b8e55a48e21c26b"],["/tags/view/index.html","cb0b1a1e8e224c60ade0ce27f4c063a2"],["/tags/前端/index.html","ae2ab0d17f4b285bfe338a3b30ed8cb6"],["/tags/图床/index.html","6fd8803fa7afb42f7198c374ea0dd483"],["/tags/注册码/index.html","0a59097c0897189dfccb1f8bbaf46158"],["/tags/破解/index.html","7bcc46a348a3ba8fda1a3dd10ed8428f"],["/tags/资源管理器/index.html","f3f636c5ee48bb444322852fda6f1110"],["/tools/av/Adobe/index.html","42e615d316c010b87d416789ea4ed83b"],["/tools/av/Balabolka/index.html","ec0565c2765359dc593ab5d4f684227e"],["/tools/av/Foobar2000/index.html","61533f231e74dbeddb24b3a52c2f5a7a"],["/tools/av/MKVToolNix/index.html","690c28426ed669a0fc4bf3411c1bb138"],["/tools/av/Paint-net/index.html","9f11b59f191385c0a72c376c65ee9e32"],["/tools/av/ScreenToGif/index.html","f3e97899df20c21aa983844adab32a84"],["/tools/av/Snipaste/index.html","00d477233999d7e299c916f964914086"],["/tools/develop/BeyondCompare/index.html","683fc5fe05bff9ba9b65203a408406ab"],["/tools/develop/CMDebug/index.html","4be602aa4ae8c2d92defd7d69b7cc6c0"],["/tools/develop/Eclipse/index.html","f53485eb62a645dd96e019edaa1a2872"],["/tools/develop/GoodSync/index.html","0bc36a5e618c3ebdc1c0313649b575cb"],["/tools/develop/IDEA/index.html","443e69b0f914fcf71e56b17b6f587681"],["/tools/develop/NotePad++/index.html","e74b4f19c84497529c1aac193ff32a9c"],["/tools/develop/Postman/index.html","3e735f0eee2a3881ae0f498c989c45af"],["/tools/develop/SourceTree/index.html","de2f8186252df9ec73d52a65f48027cd"],["/tools/develop/TeleportUltra/index.html","4c075c74caa48a4bf036c30ee9434590"],["/tools/develop/UltraEdit/index.html","7f2564d408ceb1bc1f4717e5e08ec732"],["/tools/develop/VisualStudio/index.html","ea89875710af8f01c29cb1a16fee5e8b"],["/tools/develop/VisualStudioCode/index.html","dd1d3d771802e695634ccd19b0086fd3"],["/tools/develop/WinSCP/index.html","db7d4b8480a45191ab29b2a40f6dc542"],["/tools/develop/XShell/index.html","500be105cd3ff7614a3ee3d880fd8a35"],["/tools/efficient/Cmder/index.html","b2b1cccf70fdd98a328398b1a84205d7"],["/tools/efficient/Everything/index.html","9d00dea379654260d096d5173b2d7d36"],["/tools/efficient/Fences/index.html","27ccd58ef7cb1a3a02329348f9bb0acf"],["/tools/efficient/Listary/index.html","632850063f6d674ff55c8dd873099fdc"],["/tools/efficient/QuickLook/index.html","7382c4ca31637e55d26759d5ce3627f5"],["/tools/efficient/Quicker/index.html","c0126a03a8653012df7d2953ebd8fb65"],["/tools/efficient/TotalCommander/index.html","f9f5e01da455d688e558c18777e1168a"],["/tools/efficient/WGestures/index.html","862f5bace66d7456c219b95ded52688a"],["/tools/efficient/WindowsTerminal/index.html","537b99edee8612e037faa6c2f194c352"],["/tools/efficient/Wox/index.html","bb2fbdb6c1191e3be0c22581db15942a"],["/tools/index.html","a12fb8bb1b1112db76f02ca003011dc6"],["/tools/office/PDFPasswordRemover/index.html","f286d70992c67c6bcb146e7539e6e415"],["/tools/office/QTranslate/index.html","fcc96719b39edf24ef5bed45a10d24ee"],["/tools/office/browser/Chrome/index.html","60482a5b3f24a81728d5f617bdd50e15"],["/tools/office/browser/Edge/index.html","cffbcc820b7dc768d5e998fd5f513b39"],["/tools/office/browser/Firefox/index.html","603b5765a077a7dea66125ab13ce0d29"],["/tools/office/compress/7z/index.html","1a3870cb6fde3f18176d98c87dd2d11b"],["/tools/office/compress/WinRAR/index.html","c7b246529384371fc3e3b612aa93d438"],["/tools/office/download/IDM/index.html","fc3b59ac3c358e91ea479b4650e611a5"],["/tools/office/download/PanDownload/index.html","cf4fbfe3aa1d100923c9872a537f034e"],["/tools/office/download/WindowsISODownloader/index.html","153e91c005c19421bcceb772123963d9"],["/tools/office/download/XDown/index.html","3335da1dfcefe347c3e0451c5600b235"],["/tools/system/Win10/index.html","ec348b9597eccf6d1706abe17c3212dd"],["/tools/system/monitor/Percentage/index.html","9f5e746e0afbc86dd3ad1d2cd6a284b2"],["/tools/system/monitor/ProcessHacker/index.html","844f5239e42961bb8375cf8438c1be18"],["/tools/system/monitor/TrafficMonitor/index.html","36ac0f2bae3ef629856c8c8a8d3707df"],["/tools/system/monitor/TranslucentTB/index.html","f67b8626c21a0e4d6e0b1da073d807d9"],["/tools/system/monitor/XMeters/index.html","fa9c44cb33df5d4e22913e7d53fec67c"],["/tools/system/monitor/YXCalendar/index.html","64d1eae9402e8aadc71d0f453f7cb6fd"],["/tools/system/optimizer/DismPlusPlus/index.html","a324ec4be061167fdfbdb11857b8b0f5"],["/tools/system/optimizer/LockHunter/index.html","54aee6a12dcebbc32e4316164891eabb"],["/tools/system/optimizer/Unlocker/index.html","4e9d69f3e0f564a61529d95ca9b0d21f"]];
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




