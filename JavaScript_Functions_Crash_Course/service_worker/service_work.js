self.addEventListener('install', event => {
    console.log('service work install');
});

self.addEventListener('fetch', event => {
    console.log('Service worker intercepting network request');

    event.respondwith(request);
});

self.addEventListener('install', event => {
    console.log('Service worker installed');
  
    // Open a cache and add the app's resources to it.
    const cache = new Cache();
    cache.addAll([
      '/',
      '/index.html',
      '/style.css',
      '/script.js',
      '/data.json'
    ]);
  });
  
  self.addEventListener('fetch', event => {
    console.log('Service worker intercepting network request');
  
    // Check the cache for the requested resource.
   // const response = await caches.match(event.request);
  
    // If the resource is in the cache, return it.
    if (response) {
      return response;
    }
  
    // Otherwise, let the browser handle the request as usual.
    return event.respondWith(request);
  });

