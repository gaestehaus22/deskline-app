const CACHE_NAME = 'deskline-wrapper-v1';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // Leitet alle Netzwerkanfragen normal weiter
  e.respondWith(fetch(e.request));
});
