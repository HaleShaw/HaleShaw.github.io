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

var precacheConfig = [["/404/index.html","d7abfd5b42297ee1d8cc9b11a735bd8a"],["/Chrome常用配置/index.html","5e8c553a58fa7f5d7d1786a4365cfebf"],["/Eclipse常用配置/index.html","8c6c808a5b4eb4dad342d36d77624996"],["/GitHub-JsDelivr搭建图床/index.html","fb44ad68f2702ee449bac9b554d66316"],["/GitHub常用命令/index.html","cd9ee81178b614f3c1d37219cb2fc6d3"],["/IDEA常用配置/index.html","73e8729b7075683e1c9ee12d3de9af89"],["/Jetbrains-Crack/index.html","87b9dd967d2ae174bd4dca5540f470c1"],["/about/index.html","502e2661d2bc2c9c5cfe94c711210a14"],["/archives/2018/01/index.html","0ed747fa49d2a7fdaffeb2000878d8b2"],["/archives/2018/index.html","f09ffd8be3e313a38a8103a861730171"],["/archives/2019/09/index.html","f1d823cc2b820dbce7845129721b5aec"],["/archives/2019/10/index.html","fabd29b4b4080867ec29f0122e914bc5"],["/archives/2019/11/index.html","20ac24b2bcdf5cf9adf6be4596b731f0"],["/archives/2019/12/index.html","9397b8d7a78fe88ed390e6f3aa1199e3"],["/archives/2019/12/page/2/index.html","3c752e1bed9062b91cfedf432d8399c3"],["/archives/2019/12/page/3/index.html","bb038e5a9d69b2be8712f8d0e3844aef"],["/archives/2019/index.html","b357be8cba164c83a686afdfd9066d03"],["/archives/2019/page/2/index.html","869e0b7dc70c3ece1c96c3df7a7123ae"],["/archives/2019/page/3/index.html","39e6e9d9a9f20cabc3cbc366d7ceffe4"],["/archives/2019/page/4/index.html","1ac075fbf7a2a40df0b9f9b160fc3c53"],["/archives/2020/01/index.html","481e5100eeccd810e95c682aa5a1090b"],["/archives/2020/02/index.html","580d47238237985ec95bd0f737343c64"],["/archives/2020/03/index.html","fd204646e04203f6937efe671f5b9239"],["/archives/2020/04/index.html","15d51d278fb095b0fc2799f27d287819"],["/archives/2020/05/index.html","166504c12e034036c0d3cb64e2ecbc1a"],["/archives/2020/index.html","258d8d6e4e61502bc1dfd36ea5796bfa"],["/archives/2020/page/2/index.html","dd3d630b3e8b4108c4cb2d9dea785c30"],["/archives/2021/03/index.html","9ca6384596d861c9e2e68914165467bd"],["/archives/2021/12/index.html","200aba092f2464b284ca4d9dc14fa258"],["/archives/2021/index.html","72ab37398136208d8dd6f704a04ff53b"],["/archives/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/archives/page/2/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/archives/page/3/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/archives/page/4/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/archives/page/5/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/archives/page/6/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/archives/page/7/index.html","160146ab8d4bcd8f2db0e309d2ab384c"],["/categories/Soft/Chrome/index.html","086cd676b4d4edecc8e374e3482f5b60"],["/categories/Soft/GitHub/index.html","8d99092c0fa8daed300b793074fa3835"],["/categories/Soft/IDE/Eclipse/index.html","87bbca1d5b3100a2a79d51d63a0f785c"],["/categories/Soft/IDE/IDEA/index.html","b3106397c0b9ceabcd6c2181cffba0f3"],["/categories/Soft/IDE/index.html","707a3fc405f91c4d421f375777b8dfb4"],["/categories/Soft/index.html","36627961d052b7966418404e173e234c"],["/categories/Tools/Download/index.html","e6827e993acf64b0515026746dcafc4c"],["/categories/Tools/av/index.html","63f971c527c09cf63418af7513526781"],["/categories/Tools/develop/index.html","6a027fc5ae760978b316d23a0c7357fc"],["/categories/Tools/develop/page/2/index.html","80f5d847990f06f92cf2ae0508acb076"],["/categories/Tools/effcient/index.html","56d663c278f9363b55e377a0b5e559bd"],["/categories/Tools/index.html","e89346ae0ae4def28f645cdc6cdd4e98"],["/categories/Tools/office/index.html","eed248abfeaaeb512e9fd0a05f191c96"],["/categories/Tools/page/2/index.html","bd768acc959f61003c7a99a76c207001"],["/categories/Tools/page/3/index.html","accf6957c15168b7b71345bf7a0d3f1c"],["/categories/Tools/page/4/index.html","1223672a18641a3d740256aef3d612db"],["/categories/Tools/page/5/index.html","413aed909594662dff2ee6aaf04aaaab"],["/categories/Tools/page/6/index.html","784185440bcde823c4e090dde29f49ae"],["/categories/Tools/system/index.html","96e59f01364820eb400ebcc635b78b7c"],["/categories/Tools/system/page/2/index.html","c0ccf3c07a7d72385b5d28b6b2cabbfc"],["/categories/index.html","250f8f3babe2c5ed5237fb4c2011b9c4"],["/css/style.css","60f4faa76ae17e21e3866f36072a6bb2"],["/css/tools.css","bfdee466c4a5e55728f7210896587546"],["/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["/hello-world/index.html","c23739043dc435d5f3c88325a04a72c7"],["/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["/index.html","32e48187b4fdfd44244872ec0fe713ec"],["/js/app.js","ea306851b6276a0ffeec351d138589e5"],["/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["/js/valine.js","c5c9473e2af6ab5fe16ffbb0bd09c6a7"],["/links/index.html","d8cc3312e18d54d1d5ba6db5a3918dcb"],["/page/2/index.html","b17793188b8f16a333a029e7f09d3759"],["/page/3/index.html","aff3d4c251faa7632a1b096852cb0c25"],["/page/4/index.html","51879716db6020c25c82f6eb26e28ae7"],["/page/5/index.html","badc972e1d5a34011f2507b91160b71c"],["/page/6/index.html","4f400255d050b04e750c6292b8acfc39"],["/page/7/index.html","278b10e0a464e73e1dbcb6302d1ad809"],["/tags/Adobe/index.html","ad2bd0c6fa2601760329d707b331ed8d"],["/tags/Battery/index.html","809185e14ded64c15fe7895939cec857"],["/tags/Browser/index.html","ca660a0b676e73d8d1f0294ad340c3ee"],["/tags/CMD/index.html","89cfa762007a91d49f45928f0a4d047a"],["/tags/Calendar/index.html","60733821c422241b53bc85fdfe40ede8"],["/tags/Chrome/index.html","c6eba09c0655cbf843c5b15ab0c7c514"],["/tags/Command/index.html","e3d85ca3304db0e78037b1b8adfd12fe"],["/tags/Compress/index.html","0e90d71a60581da3ba8f5e74cea20c18"],["/tags/Crack/index.html","eab5dffbdffbfac2cfbfbb3e23b488cd"],["/tags/Download/index.html","745284247459fb1dd801af3870fe087b"],["/tags/Eclipse/index.html","0e03f5061b53f24b41aea8ae2161c579"],["/tags/FTP/index.html","34bdd8c407477fe934fb2d54dfb60c9d"],["/tags/Git/index.html","98ff660ad51dd2482a0cabc5b2406967"],["/tags/GitHub/index.html","c05dad5183513cff41e80d644a900a44"],["/tags/IDE/index.html","cd4a68301674acc02b8626264c4188af"],["/tags/IDEA/index.html","114974ef41413ccaa36a8998a6675eba"],["/tags/Java/index.html","d8e8df5cddaca3e0583756cdb2c2cf17"],["/tags/Jetbrains/index.html","663520ce376c9428fa1827f4b8eda0a5"],["/tags/JsDelivr/index.html","fae1dc13bffcc6cb0481277aee74f244"],["/tags/Memory/index.html","4f48224c476aa5c9a5c73b2217c5efd2"],["/tags/Office/index.html","7a7ec0b10bcb060bede0d6072ee38a0b"],["/tags/PDF/index.html","b6ee91382d6f8d8e43b272e6ae4e0b0d"],["/tags/Screensaver/index.html","11213626fc8ca4a506d7bd2f7bcd6195"],["/tags/Snipaste/index.html","02b6e605ded9106ad106c0295af2c40c"],["/tags/Soft/index.html","ad3de9a9b5ff39a27c6347d6e5b3a862"],["/tags/Soft/page/2/index.html","e1e9333f8b09438eafdec08d20d8712a"],["/tags/Soft/page/3/index.html","c1013e316abf27867d117ec93562bda7"],["/tags/Soft/page/4/index.html","689b3b62e7a3f68ab05e208d6850eef9"],["/tags/Soft/page/5/index.html","801cabefd40d3abe2e2d4fd897124373"],["/tags/Soft/page/6/index.html","22a3706db5a0ac712c36868626878439"],["/tags/Sync/index.html","1226364cce67166b2901e7e38c7c1145"],["/tags/TC/index.html","4d3cedf9150e2df7204ad273f4e2b6b6"],["/tags/Taskbar/index.html","d19e501c56721a55798aa31c9d92b476"],["/tags/Teleport/index.html","b816824a65eb8cd4c93a0ba438c6ccb6"],["/tags/Time/index.html","18251bc3865b72846534b42d93294d38"],["/tags/Translate/index.html","d9d81ff66380f60d1b18a549f1d43b34"],["/tags/VSCode/index.html","b7f0ccfaf5afc21ce471531a20ec1095"],["/tags/Windows/index.html","e62f89b170b8aa5d8582fbb7b57afe58"],["/tags/av/index.html","46688148a0f37e081945ae43cfc78782"],["/tags/config/index.html","c096a87e72d65dfad64f92240238cca1"],["/tags/debug/index.html","1b23b28b1df03060b208af3c8d4fac32"],["/tags/desktop/index.html","3de703e8a143ab12dc0728e175ff7257"],["/tags/develop/index.html","aaf5b9c2bc6e362bb1be3d3582e0a649"],["/tags/develop/page/2/index.html","fde2186a44a0066183f9c62be172c10c"],["/tags/effcient/index.html","063322a9cb0e4e17c5320c14632d6b0c"],["/tags/gestures/index.html","07153270b3d8771d1d98dd9c09149e3d"],["/tags/index.html","5bd50158cd07c6e62271cb60276e74d6"],["/tags/monitor/index.html","b1326a4a8135cba4cdb5eadf98b39fe3"],["/tags/mouse/index.html","2ad4d28b94c3956abbb3fc384b462448"],["/tags/music/index.html","42e8a8720dab98752e7b736bc15b33a2"],["/tags/optimizer/index.html","5e15346461e04c88a8f4336f21e28ed1"],["/tags/password/index.html","80b3c556b0ad10f66c675e060c2ef938"],["/tags/picture/index.html","bbd5d1275446ef1a0d80808b05de7ea2"],["/tags/search/index.html","cd5c9ff8d6eadb1e6e60ca31a313a9bb"],["/tags/shell/index.html","f5850ef30129cf48b9674d44e182388c"],["/tags/ssh/index.html","8ba19d165936e0a7bc0df04685df72a9"],["/tags/system/index.html","e8974e74c35f7784df1385c0789bc616"],["/tags/view/index.html","da861be069b0d123e9ef3d9870759526"],["/tags/前端/index.html","d4a36cff0c5efd48d45329b03f8b50df"],["/tags/图床/index.html","b31e07626f47aabf82d3c074d940f12f"],["/tags/注册码/index.html","6ded312393a21b120952249ea98784af"],["/tags/破解/index.html","0a820b8d6ab4bb0644fc31fb826af825"],["/tags/资源管理器/index.html","ec5a0d40bb25e576a2c2f721e009387f"],["/tools/av/Adobe/index.html","367be726b4e006ae3453d52efea859c4"],["/tools/av/Balabolka/index.html","9a881f760ef04f2343eed8e9185b1519"],["/tools/av/Foobar2000/index.html","8bdd7c9cec4403da969efc500f521001"],["/tools/av/MKVToolNix/index.html","e1b99a76a733202d0805cef1c693393d"],["/tools/av/Paint-net/index.html","437c9de61c3e6d798ef87dafe17e99cc"],["/tools/av/PictureCleaner/index.html","3e1feb1070457f6bdd27e8641e4127ec"],["/tools/av/ScreenToGif/index.html","9dac16077451fd1f14a31961c002191f"],["/tools/av/Snipaste/index.html","e02960d8733a34182839663b744c454d"],["/tools/develop/BeyondCompare/index.html","7774cba824c628f5a6dd45a62a8611ee"],["/tools/develop/CMDebug/index.html","41f4cc593bb8ded62231cbefa1ead577"],["/tools/develop/Eclipse/index.html","f47f690d67e7c63b332eaa80a71d44c7"],["/tools/develop/GoodSync/index.html","4f2eb65112ece67801c0b2f8fc154462"],["/tools/develop/IDEA/index.html","fa7fcfa395d3b866564632b12643ccf4"],["/tools/develop/NotePad++/index.html","921a7283c964415c81022ae22fac4365"],["/tools/develop/Postman/index.html","fb9a1fc8253907730d661b7e2e834874"],["/tools/develop/SourceTree/index.html","30a1c32ce3a58cdd09ced4089e8d290e"],["/tools/develop/TeleportUltra/index.html","533410306a6b7a56c8dcdf97f069b73e"],["/tools/develop/UltraEdit/index.html","ed245ef4d7975a70557e44fa0d08ffa8"],["/tools/develop/VisualStudio/index.html","42dea639f29ab4d698df5c16c027f9ec"],["/tools/develop/VisualStudioCode/index.html","d766bc62cad713cb2d7ef8626c183452"],["/tools/develop/WinSCP/index.html","a4e9e1f589233cc72c6fcc9be959546d"],["/tools/develop/XShell/index.html","39c7648498e036835ed54e665dae51b7"],["/tools/efficient/Cmder/index.html","569237d87ed7bc7ed9413848354c22bd"],["/tools/efficient/Everything/index.html","3f6e6eeb4e786260d436c8bf4e914b0e"],["/tools/efficient/Fences/index.html","aac3c912f6b2343c2c0ea9eac905002a"],["/tools/efficient/Listary/index.html","3745082d5e9eccbf14d0b0ccb4c7e3e5"],["/tools/efficient/QuickLook/index.html","8f728d96e012646eae98940f55d28b8a"],["/tools/efficient/Quicker/index.html","caf9ea357989d2c9aab9812239f6a3a5"],["/tools/efficient/TotalCommander/index.html","0237f68544bbf2c7308d126a355ead60"],["/tools/efficient/WGestures/index.html","80405d72a266358f355989c84a59710c"],["/tools/efficient/WindowsTerminal/index.html","30d7873591d3f76f5d63d3211b840c9a"],["/tools/efficient/Wox/index.html","75f2391c1b517d42da2e4143918762bb"],["/tools/index.html","9566b4ec472675d7e7b35e44a88fda05"],["/tools/office/PDFPasswordRemover/index.html","8278e2fd8e6ccee2c3e9c304fe1426be"],["/tools/office/QTranslate/index.html","b782154bf823444daa5997d6f7201158"],["/tools/office/browser/Chrome/index.html","77b24f76b8ca7672596c94d3a7bcd9e9"],["/tools/office/browser/Edge/index.html","88bd4d960d2e8c316d1b1caf42716a07"],["/tools/office/browser/Firefox/index.html","98b5fde44f0a1148245656f19a0d7b35"],["/tools/office/compress/7z/index.html","754e00dc5a80c335b4ef056ec9f1b3f0"],["/tools/office/compress/WinRAR/index.html","454ad86391dcbc3911671f1a58df016a"],["/tools/office/download/IDM/index.html","dcc5cf1848d17c4edac76d3c24642814"],["/tools/office/download/PanDownload/index.html","d8532459dad97bf0156911fa9833fa5c"],["/tools/office/download/WindowsISODownloader/index.html","e9e3518057b417f142b6c21bae8e7415"],["/tools/office/download/XDown/index.html","fc5a655299d102f7d5c66b622f7dce04"],["/tools/system/Win10/index.html","61523f4234308765a9b8438460c56b4a"],["/tools/system/monitor/Fliqlo/index.html","8bba5a9064dbdc93df83ccb047f9695e"],["/tools/system/monitor/MemReduct/index.html","49d8bfd2de78c6f4bb051991716e6f42"],["/tools/system/monitor/Percentage/index.html","aef8b83391534e9837482605ca4dbbdc"],["/tools/system/monitor/ProcessHacker/index.html","8fa95cae283ffc55494051b2b6aaba7b"],["/tools/system/monitor/TrafficMonitor/index.html","bdc7f1e6baa28c6ca373dd784fa168cb"],["/tools/system/monitor/TranslucentTB/index.html","0a2bbac7adeaacc0ca842d4ebcecbe80"],["/tools/system/monitor/XMeters/index.html","a84f3129d400b0bd09bb0c6f75679046"],["/tools/system/monitor/YXCalendar/index.html","e399820f0839936faeddd6131a6c4f7b"],["/tools/system/optimizer/DismPlusPlus/index.html","54eddd91b3c04d2ff31e87f7eaddadd7"],["/tools/system/optimizer/LockHunter/index.html","9f2fdc19911380975d9fd8492a6369b0"],["/tools/system/optimizer/Unlocker/index.html","2c6866db4a82765ba0630e7cd05d77dd"]];
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




