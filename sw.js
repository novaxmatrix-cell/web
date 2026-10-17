/* Retired service worker. The site is now a redirect to dataxmatrix.com.
   Browsers that installed the old offline worker fetch this file on their next visit;
   it clears the old caches and unregisters itself, so their next page load comes from the network
   and follows the redirect. It deliberately does not reload open tabs: a tab still showing the old
   page (e.g. from the HTTP cache) would re-register this worker and loop. */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys()
      .then(function (keys) { return Promise.all(keys.map(function (key) { return caches.delete(key); })); })
      .then(function () { return self.registration.unregister(); })
  );
});
