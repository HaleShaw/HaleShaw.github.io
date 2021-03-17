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

var precacheConfig = [["/404/index.html","46c21495cf8f298f05c09877eec51826"],["/Chrome常用配置/index.html","e20e13aeee09038a2c859a8ba1bd58e1"],["/Eclipse常用配置/index.html","ead3dd26f02f737f8483571428366b9d"],["/GitHub-JsDelivr搭建图床/index.html","097720d0d87745adea250b25381b9c22"],["/GitHub常用命令/index.html","9c1021086527d1f8276adc8396a67767"],["/IDEA常用配置/index.html","22370b2b5134c61c419585589e7e8283"],["/Jetbrains-Crack/index.html","f6b0f65258bf902ce9546fbd2f25cac5"],["/about/index.html","cafc8a1bfcd7c773bdfcb41a44fc4440"],["/archives/2018/01/index.html","396a4fa3ac0671f656fb71fc932ad8e8"],["/archives/2018/index.html","027d3748467831de5ecb4111538f5ec8"],["/archives/2019/09/index.html","2180da2c40f4d73c626e5ed92bfd5eae"],["/archives/2019/10/index.html","93151737f3f4ec19a1035fcee2d07c80"],["/archives/2019/11/index.html","91141114990a19ed5e1f7e22f991fb40"],["/archives/2019/12/index.html","1e463a7c3946095af7aea88a02484eac"],["/archives/2019/12/page/2/index.html","bb2452a551b19a1c796e348399ca4cf6"],["/archives/2019/12/page/3/index.html","5afaa20be9c8ebce6d47a6d34c037321"],["/archives/2019/index.html","12b604381e126e714243b304d07a2103"],["/archives/2019/page/2/index.html","ed8e4e75e3ca54311b118a811436cef5"],["/archives/2019/page/3/index.html","2e0086649c8780f55aafd788c645e336"],["/archives/2019/page/4/index.html","220947bc2260714ede5287a526f82d91"],["/archives/2020/01/index.html","c04023c79763aed5778ca0c301d13cef"],["/archives/2020/02/index.html","637d00e3345912c5d487419e7feb8c8f"],["/archives/2020/03/index.html","63c392f49db720349329f142a31092fb"],["/archives/2020/04/index.html","6fdda5ca6f09cc3a759f19e378ab9e74"],["/archives/2020/05/index.html","72af6abcd5dcbc9793a9fbe95701f4eb"],["/archives/2020/index.html","f74737a522725ec1080863a8586522fe"],["/archives/2020/page/2/index.html","de5304153315fc60293ba9ff666d8a4f"],["/archives/2021/01/index.html","9c0209dfe0e36c4b5b6bcfdf1884035f"],["/archives/2021/03/index.html","356e06dc334bfe6fb499dc2c5b19ad9b"],["/archives/2021/index.html","2d1844c7c5eb34a388cc493375bd9dbe"],["/archives/index.html","0a035d178fb29daf36285f380f506708"],["/archives/page/2/index.html","0a035d178fb29daf36285f380f506708"],["/archives/page/3/index.html","0a035d178fb29daf36285f380f506708"],["/archives/page/4/index.html","0a035d178fb29daf36285f380f506708"],["/archives/page/5/index.html","0a035d178fb29daf36285f380f506708"],["/archives/page/6/index.html","0a035d178fb29daf36285f380f506708"],["/archives/page/7/index.html","0a035d178fb29daf36285f380f506708"],["/categories/Soft/Chrome/index.html","95de66b07df2cb24dd81eb1fcd3278a3"],["/categories/Soft/GitHub/index.html","95cbdb1f9276de2e5c9e9a6463012c02"],["/categories/Soft/IDE/Eclipse/index.html","da64e58c718591857e3554799d2d7a60"],["/categories/Soft/IDE/IDEA/index.html","0c1d5121e6ce521ed45df190f660f237"],["/categories/Soft/IDE/index.html","7185e9ab89bdb1cbb062a4b9ca670e4d"],["/categories/Soft/index.html","27400a4dcaa47d755456f3107323c759"],["/categories/Tools/Download/index.html","d8c8859042facd059a843be65a823565"],["/categories/Tools/av/index.html","8f2566e43cd20167483855d6e704fa21"],["/categories/Tools/develop/index.html","156b0b678877611853dc266aa3154167"],["/categories/Tools/develop/page/2/index.html","67dc95591063b2e5242c1d81a11e58ce"],["/categories/Tools/effcient/index.html","eec42b008c0019ac17eb09cf5840702d"],["/categories/Tools/index.html","a4590f0e9546887f5c06935a94ee305a"],["/categories/Tools/office/index.html","d80a4ab4dc8d8ed5a62441ff9a6427d2"],["/categories/Tools/page/2/index.html","81ddf3b765be8a762f6cd7d0820b31e3"],["/categories/Tools/page/3/index.html","bbec89a3ea649834344b0eca64540bdd"],["/categories/Tools/page/4/index.html","ff1ec086365404ce117b63f8e3f51539"],["/categories/Tools/page/5/index.html","f9ff13b834d57a6a5228e8a77d3eef60"],["/categories/Tools/page/6/index.html","b4dd40b493d20cf7a39a59bde72b9b50"],["/categories/Tools/system/index.html","d513786f97c7f7e1e25c8833c9100f7a"],["/categories/Tools/system/page/2/index.html","2bd0ed43b44277eb3c2d81e29d7ca6f9"],["/categories/index.html","de284816137c543545cb615809d8028e"],["/css/style.css","42ab33b7971c01ae47a04b7610d57aab"],["/css/tools.css","38a2cd500e32b797bee7b12b7e71a4c8"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","c9513f5050eafb807bf79fd8491df8bb"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","7ebcc8ae69dc9958470367d367476208"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","61a8de57c1882f868cb7653ffdab4018"],["/page/2/index.html","51227b91f24fb74e3a292c73936538fa"],["/page/3/index.html","57beb1acf80e963b66e216e35f72d72f"],["/page/4/index.html","f3431e7009895e8c65d5fc4bfc0b0993"],["/page/5/index.html","fbc75387e64f8e3d87cceee463aa6ac5"],["/page/6/index.html","a9fd129a6165cc58e1780b4c28bd2808"],["/page/7/index.html","f112b55281e5816175ed27331d768d92"],["/tags/Adobe/index.html","e32a3b301d4b82a3e1248861cb19a549"],["/tags/Battery/index.html","6efab92da3d8958d223906b8d0b7e452"],["/tags/Browser/index.html","4e0daaf1a22e2c218b117f996ca8a9a8"],["/tags/CMD/index.html","61348a597185c524a92709d123f4d979"],["/tags/Calendar/index.html","151a2110221b78bf28bf902d8b2f55c7"],["/tags/Chrome/index.html","306ccac66e64651335d4f8a6c6f9a787"],["/tags/Command/index.html","cfae6254adabe648809a2b151658ce39"],["/tags/Compress/index.html","de29c7e614b929d4e3561e2389e38bfd"],["/tags/Crack/index.html","dcf34fa9cc12d15291f5103c065fcac3"],["/tags/Download/index.html","6b40f167c679e6f9e2ff2be64ee5e2fd"],["/tags/Eclipse/index.html","d471d0803821d3dc890bff93a13cbe8f"],["/tags/FTP/index.html","9e9e0d88e739c176617be5c53fd420f0"],["/tags/Git/index.html","2e6d7f91ab9c1127ced2d3deb2515f30"],["/tags/GitHub/index.html","f85137ea7d665e340eb95a7d085ab06c"],["/tags/IDE/index.html","1c1410cd549285754cbec19d72615540"],["/tags/IDEA/index.html","4a21e053b772c78112ea00160936e22f"],["/tags/Java/index.html","754b4ca0a4f03eb80e54a133b6773cfb"],["/tags/Jetbrains/index.html","291f2289d3963b51d71c04763dc0ad1d"],["/tags/JsDelivr/index.html","b749fe0f8476ce70af1bb3c6a6909365"],["/tags/Memory/index.html","8fd03dd500e43c0d341bffcf1eb74312"],["/tags/Office/index.html","638bf2b3d00e1567d6d82e45cdbe912b"],["/tags/PDF/index.html","54e0471a6e7d62d9b41706a55121f13d"],["/tags/Screensaver/index.html","4e772fc419685295d8ce7ffbaa1edb38"],["/tags/Snipaste/index.html","35ae8c6fca44027d7d9a74ee2aff0231"],["/tags/Soft/index.html","b79a0166cab89bdf3df507d407a67005"],["/tags/Soft/page/2/index.html","cdc7f9c19181d1be942e5dc62bb034b8"],["/tags/Soft/page/3/index.html","2ff959e46f9a3fc52117c4008b267148"],["/tags/Soft/page/4/index.html","0d7ceff5516100a519051e71de6b5f0f"],["/tags/Soft/page/5/index.html","899c27b1c2a6bdfc88b51b79da1dd8be"],["/tags/Soft/page/6/index.html","217f653a00b9468b3f2e61659ff1e85f"],["/tags/Sync/index.html","ced1c6f982877233a197f41288ba49c4"],["/tags/TC/index.html","ae6a8be31bd94be41fb806c265f91ffe"],["/tags/Taskbar/index.html","b27ca8343a72d2f17f46aee42479d9eb"],["/tags/Teleport/index.html","0a2713c91fdca11e3028254491de3d22"],["/tags/Time/index.html","606e73a25c7e03dab6a4daf7f205a98e"],["/tags/VSCode/index.html","bc7492948088c822d5bcdee5dc91d3d1"],["/tags/Windows/index.html","0cd7e369c5456c657f8666cbaa5cf4c7"],["/tags/av/index.html","65681742484faa23cf4c125ff13d38ed"],["/tags/config/index.html","b117064bf2800107e49f124f0a2a5f8d"],["/tags/debug/index.html","367134bd27af652909f304f3096b8e34"],["/tags/desktop/index.html","db3130f03663a0d5fa13070ce495b52c"],["/tags/develop/index.html","8a6d82fcd9f6b9880b1c7ddb91a42477"],["/tags/develop/page/2/index.html","d2eccef2a6b29dc4cb071faedfde5553"],["/tags/effcient/index.html","337a4610856d10bde37b644e23e2937f"],["/tags/gestures/index.html","e16c679e5ff34a103eb8b522fd35a69d"],["/tags/index.html","38f9921d1d7aad855e9bfb99908fb9e3"],["/tags/monitor/index.html","9695feed5903cdf4683b06db210bdf5d"],["/tags/mouse/index.html","5284f31f2c8b35881408d66d32e22102"],["/tags/music/index.html","edd1a0277e628445346164b0543a6989"],["/tags/optimizer/index.html","be702df46a70be4dea18dca6f27f53cb"],["/tags/password/index.html","e6100c456e1f7a5ee049c71b366d5c86"],["/tags/picture/index.html","6014d6bf39316e51270ca75c1c52bfc2"],["/tags/search/index.html","7841d0cd4d87d16bb5d7e8911cb24be7"],["/tags/shell/index.html","0f6277bf93a959ba81fba616d87a5cd1"],["/tags/ssh/index.html","49d99c63298bc6d64de1f7c70132f4b2"],["/tags/system/index.html","32bca34ce83140e3943021b055370031"],["/tags/translate/index.html","6168501a347b6ea1bbb71633bb132631"],["/tags/view/index.html","ecd8937ecaad789d98d96b652cdd7601"],["/tags/前端/index.html","fc3ef6c50a799491d2f2b53d88a66e40"],["/tags/图床/index.html","f5885f6fdf07008c2687a9f07472acaf"],["/tags/注册码/index.html","a21a4dd63e9be91215cc24cd98ef97ab"],["/tags/破解/index.html","2b2f889e8019ff2538e65d6ecd8bca53"],["/tags/资源管理器/index.html","c855c21fadb5f43282fbf411de345b55"],["/tools/av/Adobe/index.html","30c646fd049be726d473f689f37174a7"],["/tools/av/Balabolka/index.html","7ccdabd2462f010631f544fabedb6f9b"],["/tools/av/Foobar2000/index.html","a87470f3dc9b4d5b48669bb58f3395a1"],["/tools/av/MKVToolNix/index.html","fb86f61b2e987442028d017d85322519"],["/tools/av/Paint-net/index.html","8cfbe65d4b861a67da796c388a944b92"],["/tools/av/PictureCleaner/index.html","aa6c2f4359db8aab8720b654a738d34d"],["/tools/av/ScreenToGif/index.html","10237bad07ddbc1fb4f0457bdc32f5dc"],["/tools/av/Snipaste/index.html","bb7beb10046de539b1872ef511f786ab"],["/tools/develop/BeyondCompare/index.html","e55b2fd459742bc637fd8d52cf5d5eef"],["/tools/develop/CMDebug/index.html","e73fcec136380f2093b930fd11654a17"],["/tools/develop/Eclipse/index.html","dad7891b41c135d25ab777ce02f59b13"],["/tools/develop/GoodSync/index.html","3c234f3c1325821bb7f910b45dbdb9e4"],["/tools/develop/IDEA/index.html","9378072c75d41bf95c36a7b8d127b937"],["/tools/develop/NotePad++/index.html","e528c83f33db3d5a2de3ef983c97af56"],["/tools/develop/Postman/index.html","336d1acfd90768e953073073ef10c10f"],["/tools/develop/SourceTree/index.html","430f103f512ba67b637aefb2c73330c1"],["/tools/develop/TeleportUltra/index.html","5d6913f24649e3ef765272af3f0401b0"],["/tools/develop/UltraEdit/index.html","d9faeef11b0ecc56f9ca3b365d311bf7"],["/tools/develop/VisualStudio/index.html","898ee8b2ba10b96217911e0088aaafec"],["/tools/develop/VisualStudioCode/index.html","9f3a8d7efe5f0da80d37c4f993847d48"],["/tools/develop/WinSCP/index.html","ff96486480199548f4711abf5d358386"],["/tools/develop/XShell/index.html","486f1e222d43565e88801d5dd617b0b5"],["/tools/efficient/Cmder/index.html","7bdcc76f034d1e94ac8e4b4880ce77bf"],["/tools/efficient/Everything/index.html","10e59f793acdab9e73425bd5929f724f"],["/tools/efficient/Fences/index.html","5d1e3fec9de9686b9882374e57e9b292"],["/tools/efficient/Listary/index.html","b941368859c41f82cdaba03be3dde1b4"],["/tools/efficient/QuickLook/index.html","fd8d7605d5fafb7eaa5277b140af9563"],["/tools/efficient/Quicker/index.html","899069219768ba361096d68928d0c291"],["/tools/efficient/TotalCommander/index.html","e59ccbf008ffec2358bf6cfcb48a8e6e"],["/tools/efficient/WGestures/index.html","4c23864cfcac677b7cd9a0c3d01f9787"],["/tools/efficient/WindowsTerminal/index.html","858b80862920a452505275df4ac52cb5"],["/tools/efficient/Wox/index.html","e011acd2426262607d8c63b7d5522552"],["/tools/index.html","433c76a8a2ea77fbf056907df856d2c2"],["/tools/office/PDFPasswordRemover/index.html","34c5c785751570edb61f915fc049644b"],["/tools/office/QTranslate/index.html","d947720a4d234ae14e35f7f183cbcbfa"],["/tools/office/browser/Chrome/index.html","b0c02c4ca0eaafdd39017aeba827d2ab"],["/tools/office/browser/Edge/index.html","edbf2ab645afb164dd45deb15598e5ee"],["/tools/office/browser/Firefox/index.html","293ae13fa3e21904b1dfd57e62c64078"],["/tools/office/compress/7z/index.html","558837c6d2b437ba4625f67ee9a55bda"],["/tools/office/compress/WinRAR/index.html","8195605d8d7bfc6498ded2f50e355a3e"],["/tools/office/download/IDM/index.html","c4b16958b8fcdee05a8e3c5f5aba12d0"],["/tools/office/download/PanDownload/index.html","7a603165d3b42919ea8ed237e7039077"],["/tools/office/download/WindowsISODownloader/index.html","1e40ad2378a37836a2a812c2079e0547"],["/tools/office/download/XDown/index.html","0cfcfe56a3e10317d2fa09a11e3582f3"],["/tools/system/Win10/index.html","b44ff22f611bf3baada45964054cbca2"],["/tools/system/monitor/Fliqlo/index.html","d690c91f712c4926d57e17542283af38"],["/tools/system/monitor/MemReduct/index.html","512eb2d1073d34e1f1365563d637cb0e"],["/tools/system/monitor/Percentage/index.html","2d53b2c419798b6be7cc53dec287bb7b"],["/tools/system/monitor/ProcessHacker/index.html","31bbc15b83d2a6eca4a688568a9dda73"],["/tools/system/monitor/TrafficMonitor/index.html","2bfd7141e0b81a4bd5514d074f3e4950"],["/tools/system/monitor/TranslucentTB/index.html","83d3a3f59122bee0edd90f0900477cfa"],["/tools/system/monitor/XMeters/index.html","c43f8b34910996cfa44f20195c6c136c"],["/tools/system/monitor/YXCalendar/index.html","42b9b1aa9cfba3a87654d2f34a81f8ba"],["/tools/system/optimizer/DismPlusPlus/index.html","ff89a41d47cef6c6c5023cee303ed9d6"],["/tools/system/optimizer/LockHunter/index.html","8c7f1a7b78e1d5a7d42900f586f27431"],["/tools/system/optimizer/Unlocker/index.html","8e1b0fe6dac4ae6acd500072ab1839a7"]];
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




