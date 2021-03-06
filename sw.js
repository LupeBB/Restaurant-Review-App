const filesToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/data/restaurants.json',
    '/img/1.jpg',
    '/img/2.jpg',
    '/img/3.jpg',
    '/img/4.jpg',
    '/img/5.jpg',
    '/img/6.jpg',
    '/img/7.jpg',
    '/img/8.jpg',
    '/img/9.jpg',
    '/img/10.jpg',
    '/js/dbhelper.js',
	'/js/main.js',
    '/js/restaurant_info.js'
]
self.addEventListener('install', function(event) {
   console.log('Service worker installing...');
    event.waitUntil(
      caches.open('cache-1').then(cache => {
       return cache.addAll(filesToCache);
    })
  );
});
self.addEventListener('fetch', function(event) {
    event.respondWith(
      caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});