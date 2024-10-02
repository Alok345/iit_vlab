const CACHE_NAME = "chemical-supplies-cache-v1";
const urlsToCache = [
  "/index.html",
  "/manifest.json",
  "/style.css", // Add your CSS file paths here if external
  "/script.js", // Add your JS file paths here if external
  "/icons/icon-192x192.png", // Ensure your icon paths are correct
  "/icons/icon-512x512.png",
  // Add any other assets you want to cache
];

// Install the service worker and cache all necessary files
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Intercept fetch requests and serve cached files when offline
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// Update the service worker and remove old caches
self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
