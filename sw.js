const CACHE_NAME = 'simulado-cache-v1';
const urlsToCache = [ './', './index.html', './manifest.json' ];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {

  // Adicione esta linha para ignorar requisições POST e deixar o Google Script trabalhar em paz
  if (event.request.method !== 'GET') return;

  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});