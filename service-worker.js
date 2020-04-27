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

var precacheConfig = [["/404/index.html","fbc6afea4233cffb313ad9676e096b70"],["/Chrome常用配置/index.html","f020085394c7596b681711879319379c"],["/Eclipse常用配置/index.html","b423de1df7018651ce3667949986dbc3"],["/GitHub-JsDelivr搭建图床/index.html","56679057559102137339248634623cdc"],["/GitHub常用命令/index.html","e6d6c29d23c74345fc9c3fc3a07a60a0"],["/IDEA常用配置/index.html","2d86d0798ee6b6d72d42f5a88900ff35"],["/Jetbrains-Crack/index.html","3008fea1fe44c72b7764298d45046464"],["/about/index.html","0a1e48a1929541c742ee53649d1c88d8"],["/archives/2018/01/index.html","4508954beadc22f665d7909c597a4b41"],["/archives/2018/index.html","4be28e3cf30d6137fcd15f7d91d5d50e"],["/archives/2019/08/index.html","9611bbfd3de3fd3cad014b22e031fcbf"],["/archives/2019/09/index.html","fcdf83394c09c49e0de0a8e0e0d11d25"],["/archives/2019/10/index.html","35c8b75fad9d6e3180acfb81ea7a98a4"],["/archives/2019/11/index.html","64be9cd2123309d599846ecc5ae03636"],["/archives/2019/12/index.html","35c9cdaa5575ce3288b0bf99db0995e5"],["/archives/2019/12/page/2/index.html","5a087104477263a862f10c8d640e0f29"],["/archives/2019/12/page/3/index.html","548aad38b737dd6c6a3f724bdd262470"],["/archives/2019/index.html","8631c77e21f97fc9b7e06db39950b011"],["/archives/2019/page/2/index.html","762a8e17aa1a93bc25ac2f6d406345d8"],["/archives/2019/page/3/index.html","b50128be41e9d73868f91a7299517020"],["/archives/2019/page/4/index.html","a10b1b8463e0b1b664c93cc8ebeb098c"],["/archives/2020/01/index.html","07b769b2143cbf6f23a23693cc6af63a"],["/archives/2020/02/index.html","2917841a907dab44a5d263f853b3528c"],["/archives/2020/03/index.html","d0150974269e5d9b257248dd48e910a6"],["/archives/2020/04/index.html","7294debea455f832e50deb6f885e23d8"],["/archives/2020/index.html","e16d637161697ab5754b2636223e9d1a"],["/archives/2020/page/2/index.html","7ebe0f7205d371e39e62dfab185d70a4"],["/archives/index.html","217d29ec7e76176093b271aac8fb1731"],["/archives/page/2/index.html","217d29ec7e76176093b271aac8fb1731"],["/archives/page/3/index.html","217d29ec7e76176093b271aac8fb1731"],["/archives/page/4/index.html","217d29ec7e76176093b271aac8fb1731"],["/archives/page/5/index.html","217d29ec7e76176093b271aac8fb1731"],["/archives/page/6/index.html","217d29ec7e76176093b271aac8fb1731"],["/categories/Soft/Chrome/index.html","74ac98ac99ffdcb11085c97968a35e12"],["/categories/Soft/GitHub/index.html","d34a29f91c30691e562f1ce8822ec990"],["/categories/Soft/IDE/Eclipse/index.html","685d64cd25cb199a6c1708fa74889324"],["/categories/Soft/IDE/IDEA/index.html","1130ae641d74d0470dcfd3d2228dec3f"],["/categories/Soft/IDE/index.html","3deb51869f088973bb13b0847573315f"],["/categories/Soft/index.html","32f0e17644c3f8ed4cdbfbdf9f917726"],["/categories/Tools/Download/index.html","74b526fdc9e7356c7bff8f2421af860a"],["/categories/Tools/av/index.html","fccd215c047079a145cf642db67994ee"],["/categories/Tools/develop/index.html","b074a34dd7fcccaeb7bd91846ec89b9c"],["/categories/Tools/develop/page/2/index.html","526475e6335504ea90d867eae5056f78"],["/categories/Tools/effcient/index.html","5cc63810682a02a3ddf65248656b1e66"],["/categories/Tools/index.html","c93241c51d5fbbcabbb0bacdb91c4526"],["/categories/Tools/office/index.html","fe161267f1fd1261827798fc657a8fdd"],["/categories/Tools/page/2/index.html","74f165509515820048813a0d83b6d63c"],["/categories/Tools/page/3/index.html","afbe7e5d372f045346f2ddeb5b0225ae"],["/categories/Tools/page/4/index.html","2bab9ba71311b86832e132b39d13a91b"],["/categories/Tools/page/5/index.html","777e72a4e09c046f3af7d2b27a85f3cd"],["/categories/Tools/page/6/index.html","a8cfa9a03fa6cecb3804d5312bd6fd24"],["/categories/Tools/system/index.html","94292fe71e25f7affdbbfaf65121bf8d"],["/categories/index.html","566141f06748439286f1d33611c3f7de"],["/css/style.css","42ab33b7971c01ae47a04b7610d57aab"],["/css/tools.css","9785b76bd04d93e98078a4f3e301e35f"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","c4138f82174f8501eca733ca9c4a715e"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","ecbad93ec04502a27333f6cf52509eb4"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","2f386524b75cc6c127d69c1fd0340943"],["/page/2/index.html","8f3a21dcd2ffd910431385760f416839"],["/page/3/index.html","7a0a3a47d99a3e4f60686f3abdf5b75f"],["/page/4/index.html","c47cc786b932c92336aa90308bac92d9"],["/page/5/index.html","33f66547e6d5995187d7c53d5b155add"],["/page/6/index.html","3819f715bce024e97b8b504e0aec295e"],["/tags/Adobe/index.html","ee30033bd87061039eee3555ca3293bb"],["/tags/Battery/index.html","0b0e5c53cd587a21dfbe724b516f0464"],["/tags/Browser/index.html","190fe4313f45eea6c452a43cdf2148c5"],["/tags/CMD/index.html","408facb0ae9667f40089e67832a1675b"],["/tags/Calendar/index.html","51c5e236be11ca7d8d361c652803f23a"],["/tags/Chrome/index.html","56bd89043abb0f5eb37b9846b1a9305a"],["/tags/Command/index.html","996953c1fd77879c08baab3d0730dd37"],["/tags/Compress/index.html","72f674da06a798b6638cbd68d2f41549"],["/tags/Crack/index.html","d0b76bd2b42b9fd139d63c30cb81d0bc"],["/tags/Download/index.html","b7e393d132dd3b0bd3095ff424b1c902"],["/tags/Eclipse/index.html","2c72fb4fd78c6364eb40a2641a63c7ee"],["/tags/FTP/index.html","def79d4a97f8bbc3b29cc9f9a278f044"],["/tags/Git/index.html","19c744044a248f06e76b1f2906fa37f1"],["/tags/GitHub/index.html","52ce15ab1b5fcf34c1e2e74587255fa1"],["/tags/IDE/index.html","86dfc24f27ded652a4e4db689095e3e8"],["/tags/IDEA/index.html","5ba430c448a9be5c84391ddba3035190"],["/tags/Java/index.html","3ce3f6a3b3dccc2c9b919282a7222af0"],["/tags/Jetbrains/index.html","73d3a63b942a74653be160f33bfab140"],["/tags/JsDelivr/index.html","3914502c74d4c902898205f1a3556402"],["/tags/Office/index.html","352cfaebbcad1230e48dcd596925dc80"],["/tags/PDF/index.html","4ae25fe5626e31fce323e201818634b9"],["/tags/Snipaste/index.html","07ede5aa79775a4c997d5239f984e0d8"],["/tags/Soft/index.html","ab9c71bdaf0b8df6a93d99d59dd75486"],["/tags/Soft/page/2/index.html","36512749f52ee285aa6e6467561c3e1c"],["/tags/Soft/page/3/index.html","6a53138b1f0608fd12cfbf1f06af8229"],["/tags/Soft/page/4/index.html","beedafada0d4f1ef495753bd213ad345"],["/tags/Soft/page/5/index.html","64143738605c68fbdcc84839c5ecb1b2"],["/tags/Soft/page/6/index.html","274a0c8224bc66133544ac272221276f"],["/tags/Sync/index.html","e9813eaee34911e05c802fa8b4b5b45d"],["/tags/TC/index.html","df178b5091b3eac25900905f47aa44ef"],["/tags/Teleport/index.html","1cb6a962170db8c2d24739b6bfe4fa03"],["/tags/Time/index.html","1c37316cba45530f8b95cbaea1725c99"],["/tags/VSCode/index.html","2a1a6ca4f2e619c4e4edcdd2630f2974"],["/tags/Windows/index.html","81fb77e68028722b7fb26c9ab35db42e"],["/tags/av/index.html","69752f79f90e84281e3502de39213b1c"],["/tags/config/index.html","18221deb7e48974294dee867d775a82e"],["/tags/debug/index.html","0eacd3b8799b75fd65e419b36ddde863"],["/tags/desktop/index.html","d2535cd2e7d5de0dbe1c45f40e267854"],["/tags/develop/index.html","8e5a6177c431a447e0b566c532214782"],["/tags/develop/page/2/index.html","133e6c97ec3f7e0e67ef28f5987caf40"],["/tags/effcient/index.html","819b0bc4591e415e67eb54cd5bcc2f01"],["/tags/gestures/index.html","6a18a6055d12df752aeafd64e68fdf20"],["/tags/index.html","239292ad9d783c1a156779ebc91797b9"],["/tags/monitor/index.html","e6bcafb878337476891dbf3221314749"],["/tags/mouse/index.html","3e44512ac7af0d26ffa8584a7a39a086"],["/tags/music/index.html","fc81d5b2b123c55d7edab767b5b657e9"],["/tags/optimizer/index.html","e36debf20a0f22d42df979ae2db11581"],["/tags/password/index.html","bc343743f3711559a5a6edd84d96f39d"],["/tags/search/index.html","355b437f90676291e83d3bb5c613cc7f"],["/tags/shell/index.html","54c73f6734876aaf81ed5130352486cb"],["/tags/ssh/index.html","88fa13b841a2b85d9dd6235fd9e5ffaf"],["/tags/system/index.html","96ab92475b617738c29142017b97d3f7"],["/tags/taskbar/index.html","367d97eecf06e377d551b3b23770b15d"],["/tags/translate/index.html","f874ad2c4da147cdbb3154784698e067"],["/tags/view/index.html","42af1c9b220dc904d67e25d540f4aac3"],["/tags/前端/index.html","dabc14dfc19081619b2eb899ffc982c5"],["/tags/图床/index.html","1cb19c8bf73302b802af0ab444673faa"],["/tags/注册码/index.html","fbd2413188e638ab095eb6b3a71a1cd5"],["/tags/破解/index.html","4733266e6898e4f295a5a07c4c21ccb2"],["/tags/资源管理器/index.html","b327df1cd316850de8684540779747e1"],["/tools/av/Adobe/index.html","6bfa760655012dcdf8522461ec984237"],["/tools/av/Balabolka/index.html","82ffde98c4a6357953f1119d24616ff8"],["/tools/av/Foobar2000/index.html","06cf81fa0c370f3a56a3beb0df337c17"],["/tools/av/MKVToolNix/index.html","23401ee1fce0cdc607ac33a6d135ec4c"],["/tools/av/Paint-net/index.html","71be8d4bbadfcda5d29fa250ace2f025"],["/tools/av/ScreenToGif/index.html","bfdbd78d4954701c7bc58ee26464ce3c"],["/tools/av/Snipaste/index.html","a871e3e827504873a92b0dd53fd373c0"],["/tools/develop/BeyondCompare/index.html","c7f188eced28601e9df3ef733c229cdd"],["/tools/develop/CMDebug/index.html","05482396568977c3bd24348ef98f648f"],["/tools/develop/Eclipse/index.html","fc1c603d01109c763adc37a669009ea9"],["/tools/develop/GoodSync/index.html","34f68dc7bf08157abd45a748e0725a8b"],["/tools/develop/IDEA/index.html","158ca9009ad2db8c1c06ea2ae654c696"],["/tools/develop/NotePad++/index.html","acc3fa41eb4f137c995cf4c097f51975"],["/tools/develop/Postman/index.html","cb5574f92554620c8187eb3c17adb112"],["/tools/develop/SourceTree/index.html","6c990be2c1854ad61dfdacc296ccbdfa"],["/tools/develop/TeleportUltra/index.html","82eff0454cd8dea55e1fccd802e940d5"],["/tools/develop/UltraEdit/index.html","de8bb7279502c1e782bc7d3cab3f0dda"],["/tools/develop/VisualStudio/index.html","9089ca5b743ece8996247c35ded3c412"],["/tools/develop/VisualStudioCode/index.html","323fbd6abaf38c67c317529be0c549af"],["/tools/develop/WinSCP/index.html","35cbd4c0150eaee7d472fc562f167482"],["/tools/develop/XShell/index.html","2e50b7903521269d37728ef36adee04a"],["/tools/efficient/Cmder/index.html","13ef2444975010209d6d805619fe0072"],["/tools/efficient/Everything/index.html","05f5dbeea35064c5917d465ac887b920"],["/tools/efficient/Fences/index.html","5cf05f3c372394201cac9b700a88d530"],["/tools/efficient/Listary/index.html","3525de87851105d3abaaadc369221c61"],["/tools/efficient/QuickLook/index.html","042aa406f12a0e1f6ef59042249464ba"],["/tools/efficient/Quicker/index.html","073223a4427842b8cb170551e15b063e"],["/tools/efficient/TotalCommander/index.html","2bdd37fb9a97c0bd616d2bcb63cacf9e"],["/tools/efficient/WGestures/index.html","ef363404d27648ede8f49f7085d17428"],["/tools/efficient/Wox/index.html","a8c09edc1dcd606cf752d815a7ed5868"],["/tools/index.html","e483418f3bda8323bca7055aa22a0281"],["/tools/office/PDFPasswordRemover/index.html","d69b9cc1fe34f2668e5c5814b9c58d09"],["/tools/office/QTranslate/index.html","163ba49647083dbe2ad759fb80392023"],["/tools/office/browser/Chrome/index.html","0b666221b4bae7c846a9b4881ec6fb8c"],["/tools/office/browser/Edge/index.html","70ce750bb86d718c66422fbb76666568"],["/tools/office/browser/Firefox/index.html","5a586289cdd37b19077f860fa5dbedf6"],["/tools/office/compress/7z/index.html","fd2f32c96ea50273f546ec1bddd1db1e"],["/tools/office/compress/WinRAR/index.html","9bdd69d126cdf381149d8eb363d91a3a"],["/tools/office/download/IDM/index.html","6b3d56edf7b293e6a788c6cc66912a9d"],["/tools/office/download/PanDownload/index.html","8bda0709ce79965850e0f8b5e4da9530"],["/tools/office/download/WindowsISODownloader/index.html","858df85ad54b6ff642697260fe7e51db"],["/tools/office/download/XDown/index.html","2eaa9894cf68f71715636ba3dc164aef"],["/tools/system/Win10/index.html","ad4a32c133afee32b593b84b66b75ffb"],["/tools/system/monitor/Percentage/index.html","5051b433baea637149def25e4399be1b"],["/tools/system/monitor/ProcessHacker/index.html","a4f15dcf39e23a756b1aa4b4eb9cd0ff"],["/tools/system/monitor/TrafficMonitor/index.html","88d7e6bfbab70f22b99234012ec8e7b0"],["/tools/system/monitor/TranslucentTB/index.html","02b25bf12e147bed4363dc252b977dd1"],["/tools/system/monitor/XMeters/index.html","00b8bec3a00979bbeb39fc1c403b8f29"],["/tools/system/monitor/YXCalendar/index.html","ae29de25a433dd1c140784d3d91bd77e"],["/tools/system/optimizer/DismPlusPlus/index.html","d1420f6d5a8bb003108ecd0a16594358"],["/tools/system/optimizer/LockHunter/index.html","adbcbcbbce4d586511508324408de578"],["/tools/system/optimizer/Unlocker/index.html","c7b4bf9546b7bd33dd74a36d23cf4841"]];
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




