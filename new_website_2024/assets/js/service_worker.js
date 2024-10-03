// service_worker.js

const CACHE_NAME = 'ggs-cache-v1';
const CACHE_ASSETS = [
    '/',
    '/index.html',
    '/assets/vendor/bootstrap/css/bootstrap.min.css',
    '/assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '/assets/vendor/aos/aos.css',
    '/assets/vendor/glightbox/css/glightbox.min.css',
    '/assets/vendor/swiper/swiper-bundle.min.css',
    '/assets/css/main.css',
    '/assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    '/assets/vendor/php-email-form/validate.js',
    '/assets/vendor/aos/aos.js',
    '/assets/vendor/typed.js/typed.umd.js',
    '/assets/vendor/purecounter/purecounter_vanilla.js',
    '/assets/vendor/waypoints/noframework.waypoints.js',
    '/assets/vendor/glightbox/js/glightbox.min.js',
    '/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js',
    '/assets/vendor/isotope-layout/isotope.pkgd.min.js',
    '/assets/vendor/swiper/swiper-bundle.min.js',
    '/assets/js/main.js',
    '/offline.html' // Fallback page for offline usage
];

// Install event: Cache the specified assets
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            console.log('Service Worker: Caching Files');
            return cache.addAll(CACHE_ASSETS);
        })
    );
});

// Activate event: Clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    if (cache !== CACHE_NAME) {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event: Serve cached files or fallback to network
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request).catch(() => {
                return caches.match('/offline.html'); // Serve offline page if network fails
            });
        })
    );
});
