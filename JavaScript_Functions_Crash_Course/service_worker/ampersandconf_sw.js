/* serviceworker.js derived from https://2018.ampersandconf.com/serviceworker.js
   per https://adactio.com/journal/13540
   Tantek Çelik, 2019-293 
*/
const version = '2021-315 05:21';
const cacheName = 'files';
const offlinePage = '/offline.html';

addEventListener('install', installEvent => {
  skipWaiting();
  installEvent.waitUntil(
    caches.open(cacheName)
    .then( cache => {
      cache.addAll([
        '/',
        '/2021/undohtml.css',
        '/2021/elementica.css',
        '/2021/simple.css',
        '/logo.jpg',
        '/photo.jpg',
        '/2013-11-13-npsf-128.jpg',
        '/contact',
        '/pay',
        '/tip',
        '/tip/1',
        '/addtohome.css',
        '/contact-style.css',
        '/platform.js',
        '/addtohome.min.js',
        '/2014/067/b2/mockups-people-focused-mobile-communication',
        '/cassis.js'
      ]);
      cache.addAll([
        'https://aaronparecki.com/pay/venmo.png',
        'https://aaronparecki.com/pay/paypal.png',
        'https://aaronparecki.com/pay/squarecash.svg',
        'https://indieweb.org/images/1/18/ios7-people-icons-screenshot.jpg',
        'https://indieweb.org/images/5/5b/mobile-personal-home-icons-folders-ios7.jpg',
        'https://indieweb.org/images/6/66/mobile-personal-home-contact-ios7.jpg',
        'https://indieweb.org/images/c/c6/2013-346-tantek-home-posts.jpg'
      ]);
      return cache.addAll([offlinePage,
        '/icon/twitterdm.png',
        '/icon/ios-messages.png',
        '/icon/ios-skype-chat.png',
        '/icon/ios-slack-2018.png',
        '/icon/ios-facetime.png',
        '/icon/ios-skype.jpg'
      ]);
    })
  );
});

addEventListener('activate', activateEvent => {
  clients.claim();
  caches.open(cacheName)
    .then( cache => {cache.add(offlinePage);}); /* until offline page is debugged */
});

addEventListener('fetch',  fetchEvent => {
  const request = fetchEvent.request;
  if (request.method !== 'GET') {
    return;
  }
  fetchEvent.respondWith(async function() {
    const responseFromFetch = fetch(request);
    fetchEvent.waitUntil(async function() {
      const responseCopy = (await responseFromFetch).clone();
      const myCache = await caches.open(cacheName);
      await myCache.put(request, responseCopy);
    }());
    if (request.headers.get('Accept').includes('text/html')) {
      try {
        return await responseFromFetch;
      }
      catch(error) {
        const responseFromCache = await caches.match(request);
        return responseFromCache || caches.match(offlinePage);
      }
    } else {
      const responseFromCache = await caches.match(request);
      return responseFromCache || responseFromFetch;
    }
  }());
});
