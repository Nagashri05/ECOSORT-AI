const CACHE_NAME = 'ecosort-v2';

const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/style.css',
  '/script.js',
  '/manifest.json',

  // Icons & Fonts
  'https://unpkg.com/@phosphor-icons/web',
  'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;800&display=swap',

  // AI Models (IMPORTANT)
  'https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@latest',
  'https://cdn.jsdelivr.net/npm/@tensorflow-models/mobilenet@latest'
];

// INSTALL
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS_TO_CACHE))
  );
});

// ACTIVATE (delete old cache)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
});

// FETCH
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then(res => res || fetch(event.request))
      .catch(() => caches.match('/index.html'))
  );
});