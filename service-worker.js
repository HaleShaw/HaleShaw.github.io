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

var precacheConfig = [["/404/index.html","fbc6afea4233cffb313ad9676e096b70"],["/Chrome常用配置/index.html","f40b1f09cbcca4b2184244087a8e7f1b"],["/Eclipse常用配置/index.html","66582808c3a27d374f447c9e255544b1"],["/GitHub-JsDelivr搭建图床/index.html","e099c8927bbd4b022995e121b7b2e5e4"],["/GitHub常用命令/index.html","d2874068ee7ba888e8650ec72058a78c"],["/IDEA常用配置/index.html","803e543a5c79c5af68767dd23f1d2f39"],["/Jetbrains-Crack/index.html","688cda606ae57a3c11cd4881beb0bfd2"],["/about/index.html","cafc8a1bfcd7c773bdfcb41a44fc4440"],["/archives/2018/01/index.html","187042266a3b1d7940e1160f634af6b6"],["/archives/2018/index.html","17258e2a9894e8c71603f471d0b3d20f"],["/archives/2019/09/index.html","f1e07b4fe16a0d0b158e81801b76f5fe"],["/archives/2019/10/index.html","6edbd3477e19ac53285988fa2ed310fd"],["/archives/2019/11/index.html","727900187063e571a77917d8019d90b9"],["/archives/2019/12/index.html","3fe953af26339f3f3f1d842f011c7eac"],["/archives/2019/12/page/2/index.html","125c2136b848852d0490bbdbb3805730"],["/archives/2019/12/page/3/index.html","a98440aef1baacb65a87e0278b5854c1"],["/archives/2019/index.html","3249d85afc3a8b8bd7e63244b8c4da56"],["/archives/2019/page/2/index.html","c5465d926e78daff1499b3e5b1e2b063"],["/archives/2019/page/3/index.html","10f7f5adf4574cd147ea04c9179d33ec"],["/archives/2019/page/4/index.html","e6ab4b1fe3b0ce32dd78ea0832ea5488"],["/archives/2020/01/index.html","996c48969fab9030125e5481e4d6a68e"],["/archives/2020/02/index.html","56a6ce1897ace6ab06d0914fbcbdc619"],["/archives/2020/03/index.html","05a4671742d10c2c0945f88634504238"],["/archives/2020/04/index.html","190a4903cc5efb1eecdb5f57dd118eea"],["/archives/2020/05/index.html","7d677822ae8f119e4542e7ed11321c45"],["/archives/2020/index.html","6fe50ef85b96d4ceacccf52ddfd8782b"],["/archives/2020/page/2/index.html","b2438ab8ce9f21b793a98407ea5e5e17"],["/archives/2021/01/index.html","cefcebc2afca4a468ff8873a8b6fa9b6"],["/archives/2021/03/index.html","6fd1ac33157a3180e911b66f2d12e750"],["/archives/2021/index.html","82ae5acfd613f47aa6365069604d0943"],["/archives/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/archives/page/2/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/archives/page/3/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/archives/page/4/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/archives/page/5/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/archives/page/6/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/archives/page/7/index.html","d7a9021bded1885d6cf56a3150fd7bf3"],["/categories/Soft/Chrome/index.html","cfe85d86b7e2984cbd2516d68988f71c"],["/categories/Soft/GitHub/index.html","596cfa9d342a898619eb4ceaa04dc625"],["/categories/Soft/IDE/Eclipse/index.html","eed78013e614c904d01a25770ef88142"],["/categories/Soft/IDE/IDEA/index.html","79cc2ca0bf0960b85cc3d5c0b7858dbb"],["/categories/Soft/IDE/index.html","a736ac5307241fecb7ad1133c606314d"],["/categories/Soft/index.html","da1adffae585f02a2947528134c9a144"],["/categories/Tools/Download/index.html","473c62ad29f4108fa96fd2faf3764ea6"],["/categories/Tools/av/index.html","f6f614c2b99fa041aaf3e87f9c5753bb"],["/categories/Tools/develop/index.html","cf5e6354c02a9a2f1566fe32512d1c44"],["/categories/Tools/develop/page/2/index.html","c964c2810ef346c0fb4e942f14b86fc5"],["/categories/Tools/effcient/index.html","28cd2cdf9fc9ff7a28b31b176d39f4a5"],["/categories/Tools/index.html","118814e03754e07831a861cc27b6e31b"],["/categories/Tools/office/index.html","b73457f1eaa332f88d1a350383b8d936"],["/categories/Tools/page/2/index.html","59f01ec016a1ffce42426f7117e66b0f"],["/categories/Tools/page/3/index.html","38aeaf0bbec4888464cb25a6a04eec7d"],["/categories/Tools/page/4/index.html","10158ac28dbdc22e5dd9cef56404192a"],["/categories/Tools/page/5/index.html","51531c669ec46dfd1f03773863f71b8d"],["/categories/Tools/page/6/index.html","ec3830b7d12b512e5d29826e3a90231a"],["/categories/Tools/system/index.html","9939a957edc62ce0041e35378c1bd97f"],["/categories/Tools/system/page/2/index.html","d07b28981fb532fd0faceaecec0478de"],["/categories/index.html","614c3dd0313b2ea5c6c1a5e05e2267c2"],["/css/style.css","42ab33b7971c01ae47a04b7610d57aab"],["/css/tools.css","38a2cd500e32b797bee7b12b7e71a4c8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","e95ccfcf51af5bdacce27b9b5ff67ff3"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","148dc6924f42d37dcfe1ac8b17a33539"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","5cbc9009f1ef19645851f6b602c88ddb"],["/page/2/index.html","22ef327e9648001d8f27442eb90a5c24"],["/page/3/index.html","c1ec0065dd301c90b2eef2e4a76eb9e6"],["/page/4/index.html","4184974d5c573318590e89df842dcb4e"],["/page/5/index.html","51ecdf8919ce7f8fc5505a40160f79bf"],["/page/6/index.html","f7cda35bbd3e408de1e4ff9087853e11"],["/page/7/index.html","7f87a59628e0e8a49c9a191d4f2d4441"],["/tags/Adobe/index.html","ab25bd4887818e0062eb190f47449510"],["/tags/Battery/index.html","830e54b0573dc29e89d15645acfb0e3f"],["/tags/Browser/index.html","10176126b16a3dff4fe4cce86bed1324"],["/tags/CMD/index.html","1b6e237939be42d6031d7e13a7a931cc"],["/tags/Calendar/index.html","799757411264c70fdec7a22891b883a8"],["/tags/Chrome/index.html","6b989550707770b04b8c3dacdb79a34d"],["/tags/Command/index.html","5a2bf908446a08657f919e93f6cda06e"],["/tags/Compress/index.html","45227131bdfd27b67efa6780886eef90"],["/tags/Crack/index.html","0ff2eab116c976dacefa35f211408a1b"],["/tags/Download/index.html","b34355be5f7bda773b02ab1990038c3f"],["/tags/Eclipse/index.html","0d12ec1d6fe3e3fab6831b1cc105d568"],["/tags/FTP/index.html","43cbcf7e0d76f7a8adf3e6f00ec9a296"],["/tags/Git/index.html","dfb34dbf6903fcfebd43e4a081137a5c"],["/tags/GitHub/index.html","632d44819c0bd4e63579009b5398599c"],["/tags/IDE/index.html","5a0f546df5e8ddc207df76d6db798f88"],["/tags/IDEA/index.html","ccb35c6f8aa7a87840a4636ff3df100c"],["/tags/Java/index.html","e5807e23a6e4a93c0d20e6e1d32aeda2"],["/tags/Jetbrains/index.html","370e8ac16758e7cec9c559f8c90d05b3"],["/tags/JsDelivr/index.html","58576d9991d7b8c4737a913a15d13d0a"],["/tags/Memory/index.html","c0fcb029d2bf51569e21aa17162376ef"],["/tags/Office/index.html","e1efae54614ab93c66540a1d050b63cf"],["/tags/PDF/index.html","458bb4b86824794d5eca178720a057f1"],["/tags/Screensaver/index.html","a799648a35c523af6e1a2ee5c3642ba8"],["/tags/Snipaste/index.html","ec4434f8a6a3b363b70986953e9a3189"],["/tags/Soft/index.html","a296ce6deda8346cd13f4e7fa0f397f3"],["/tags/Soft/page/2/index.html","696a8a77b9be7cec80e3cf238c049888"],["/tags/Soft/page/3/index.html","9429e2d419bd4ed25512cd33b335ab0d"],["/tags/Soft/page/4/index.html","b983e0117dd6e5737790009765e95594"],["/tags/Soft/page/5/index.html","7039e7a3fe497b2c819f86c268eacb13"],["/tags/Soft/page/6/index.html","02d6f6b34a35f3cce98650b46923c888"],["/tags/Sync/index.html","87639e96a547d6da2b91c18e0cd20fb2"],["/tags/TC/index.html","4ac1ee9c2c932416c1b0b4e265894586"],["/tags/Taskbar/index.html","aac624c4d444655a34ae7a4545a1b90c"],["/tags/Teleport/index.html","2160be269188e5b7c4b58a35af581fc0"],["/tags/Time/index.html","26afea8dcabdcd8cb4aed25de2cc199f"],["/tags/VSCode/index.html","d3f887a933b767670d3e4c965c6dab53"],["/tags/Windows/index.html","599ccd16caada5367ce7e6c21ac2dc78"],["/tags/av/index.html","003a9d2ec6dd37fdd43dd140f1f50325"],["/tags/config/index.html","c1e041ce34174bd72ba6279604931c13"],["/tags/debug/index.html","0aca8daf2e10b2d41a24b39696078d1f"],["/tags/desktop/index.html","5ded0807e1a2250e2f164a7b08a66290"],["/tags/develop/index.html","ce4577a10e4791f2340b83172b201cfe"],["/tags/develop/page/2/index.html","059d020040fcda9c6966a88a3bf3683e"],["/tags/effcient/index.html","a1208da9fb42e40e19263d74a534f0fb"],["/tags/gestures/index.html","9cf27d362f40c6469592de38a232e488"],["/tags/index.html","3048110ac808b3d752370e3c0747b8ad"],["/tags/monitor/index.html","7e8b642eab2c40fb75ad81d4d0d69a81"],["/tags/mouse/index.html","a2996aa71b8419d787cbcf4fbf01d64c"],["/tags/music/index.html","910adcfcf8ac097648a1aac666184a36"],["/tags/optimizer/index.html","ad709295f62848bee4c1ea355c2ad4c8"],["/tags/password/index.html","f61e9ab344139ed47c036b3269878314"],["/tags/picture/index.html","53af7f91f29720614aefb17c6d2b8934"],["/tags/remote/index.html","ee029dafa552551674d13628b1abc3bb"],["/tags/search/index.html","38ff0a2126bf6ad959ef4f868c63e1c7"],["/tags/shell/index.html","13a2d12839ee7dccc9e16fd5274ac86f"],["/tags/ssh/index.html","a6ddd16263aebbfad5fff183f7e99508"],["/tags/system/index.html","786bbdac3a5a639944f8cb890ef127bf"],["/tags/translate/index.html","b469b7f37e3da191df36147c3e0d7ae5"],["/tags/view/index.html","abf8d4fb14d33a83dc92040f123da4b0"],["/tags/前端/index.html","67928ec652c624447f7d70968b069061"],["/tags/图床/index.html","92ea8fd14f310444cf954fd17493b570"],["/tags/注册码/index.html","d9ca567d49f8ed673c12715aa08cfcf5"],["/tags/破解/index.html","031ef752c3880095dcf92ae35d773e15"],["/tags/资源管理器/index.html","5652771b2913f0e8e9f84b0ab5aae410"],["/tools/av/Adobe/index.html","845ed7ada92c6197d8c8b746a737563b"],["/tools/av/Balabolka/index.html","881d11427742cffee3e8dfde1166e37b"],["/tools/av/Foobar2000/index.html","0b56e07b5bbd2b1ca1a602d8460d596f"],["/tools/av/MKVToolNix/index.html","7d462ce5d750feb94c1e38419b9e18ff"],["/tools/av/Paint-net/index.html","5a7a8a2f9f5edc7e71d8dcbccc8a12e2"],["/tools/av/PictureCleaner/index.html","03dc020a5a1d5e661bb7f45a350051d2"],["/tools/av/ScreenToGif/index.html","5ee35d86b98dcff1af19f519df1cdabd"],["/tools/av/Snipaste/index.html","48e19f74c7b13fdaa1b4d19e11eae6c1"],["/tools/develop/BeyondCompare/index.html","0a794a1b4d2792e035bd99ca3212299a"],["/tools/develop/CMDebug/index.html","cb6346249baba725265a0f305afb2eb0"],["/tools/develop/Eclipse/index.html","1cb2b0876c599ffca203d3d746bc82cd"],["/tools/develop/GoodSync/index.html","0acad15e5f7e30151f56dbb12f2894d4"],["/tools/develop/IDEA/index.html","a7f308f805f67707da3564d4f83f5443"],["/tools/develop/NotePad++/index.html","aa8d6402e33b949e4a450ed43ec7ab47"],["/tools/develop/Postman/index.html","880238559a6361493653681d6cec05fa"],["/tools/develop/SourceTree/index.html","76ea6bd1be452aada1de5b96f30bf5d5"],["/tools/develop/TeleportUltra/index.html","c39407409409620e0a9efaf24f872e5f"],["/tools/develop/UltraEdit/index.html","632a2c0660b7f3b94ab8d94af7555d7a"],["/tools/develop/VisualStudio/index.html","5603845d6c7c48e906390e409a12e587"],["/tools/develop/VisualStudioCode/index.html","343d524064f5d908e95858d3a4ba330c"],["/tools/develop/WinSCP/index.html","a6d7eb7c67e3d1d64dbaafc7b6e261b2"],["/tools/develop/XShell/index.html","92935dc8ce9858aa556bbb96b64c691f"],["/tools/efficient/Cmder/index.html","a79764768c25a4c0168f5c43817fe723"],["/tools/efficient/Everything/index.html","c5931be550c37a45a95f3b31ecde5526"],["/tools/efficient/Fences/index.html","2e5b971f9c35bf27d152c97d9ebd0277"],["/tools/efficient/Listary/index.html","8ffcae144c0c450a9e38136f15824467"],["/tools/efficient/QuickLook/index.html","319c95772a72c2f698c7f975a2d9acfe"],["/tools/efficient/Quicker/index.html","fa581d5a67ff18bfcfcd97ba72782856"],["/tools/efficient/TotalCommander/index.html","fbdcfc3fed5fdc4994e43412fb3a6aa0"],["/tools/efficient/WGestures/index.html","3b8d6b6315c25be79caa7b1ed92a9284"],["/tools/efficient/WindowsTerminal/index.html","09c0cfb47cfd42048dea0d2631b9853c"],["/tools/efficient/Wox/index.html","0953b48839ec887d79388aa6e52b9093"],["/tools/index.html","75471ab3d115b5b2cc92c52df1cdbc8b"],["/tools/office/PDFPasswordRemover/index.html","1a9d36d1473c4cbef60513bd8c96b482"],["/tools/office/QTranslate/index.html","9dce75ffb444e88f8325c74f179e0461"],["/tools/office/browser/Chrome/index.html","c45e4b69148bc3ea8e8b459dd98af87b"],["/tools/office/browser/Edge/index.html","948710761a740b4a82df7e373f215fa8"],["/tools/office/browser/Firefox/index.html","28ffcf0b3839292e8469fc3169a20f8e"],["/tools/office/compress/7z/index.html","7eb405128e9a2d5b352a5e47035d55df"],["/tools/office/compress/WinRAR/index.html","a658f7e5ba6eee176e52dd8c6f6c76c5"],["/tools/office/download/IDM/index.html","8d9ab8c446a14fe0a91456936bdeec8d"],["/tools/office/download/PanDownload/index.html","041e8c2aa8e71162f9d64f6ce8c9b4cf"],["/tools/office/download/WindowsISODownloader/index.html","2cd535a3a270d16d691c09ec960636a0"],["/tools/office/download/XDown/index.html","aeb2b574d90e908003fea1251cc32929"],["/tools/system/Win10/index.html","878992ae088fd30f019f6d66e3f7f9e3"],["/tools/system/monitor/Fliqlo/index.html","2f3983cfd766b7388a0222d9170ea9e9"],["/tools/system/monitor/MemReduct/index.html","b06e3afee2aeb1a798e00609a09300e0"],["/tools/system/monitor/Percentage/index.html","d078077579c03d0058c0c09ac8bebb2b"],["/tools/system/monitor/ProcessHacker/index.html","c6a88b1a3642c1b7c6a6b408f812bdba"],["/tools/system/monitor/TrafficMonitor/index.html","38ea10672bd16a98c5566fb719edfda5"],["/tools/system/monitor/TranslucentTB/index.html","e6102b62e2c1f4b23e0ec51d3538f106"],["/tools/system/monitor/XMeters/index.html","42cc332e25b330b4a74c1e57ea14db7a"],["/tools/system/monitor/YXCalendar/index.html","a12cc43360b805e1a0bbfb5e67940b2c"],["/tools/system/optimizer/DismPlusPlus/index.html","bbe3fa23a6426440829555d531aa22b8"],["/tools/system/optimizer/LockHunter/index.html","5d56883e098aa14228ac27e3fba7c3bf"],["/tools/system/optimizer/PsTools/index.html","94a39387671a11f1e404def6960ec83e"],["/tools/system/optimizer/Unlocker/index.html","b8c43a03124d3726ebc67c0621062840"]];
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




