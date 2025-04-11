// sw.js
const CACHE_NAME = 'lista-compras-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/main.js',
  '/assets/favicon/favicon.svg',
  '/assets/css/config.css',
  '/components/header/header.css',
  '/components/task/task.css',
  '/components/taskForm/taskForm.css',
  '/components/sectionDownload/download.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(res => res || fetch(e.request))
  );
});