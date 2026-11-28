/* ==========================================================================
   Service Worker (sw.js) — Stale-While-Revalidate App Shell & Offline Cache
   ========================================================================== */
const CACHE_NAME = 'ajrass-portfolio-v3';
const PRECACHE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './default/SVG/pwa-icon.svg',
  './default/SVG/Illustration-header.svg',
  './default/SVG/Illustration.svg',
  './default/SVG/Frame.svg',
  './default/SVG/Frame2.svg',
  './default/SVG/IconMenu.svg',
  './default/SVG/Enabled.svg',
  './default/SVG/Cancel.svg',
  './default/SVG/mail.svg',
  './default/SVG/liveIcon.svg',
  './default/SVG/githubIcon.svg',
  './default/SVG/IconGitHub.svg',
  './default/SVG/Icon Linkedin.svg',
  './default/SVG/IconAngelist.svg',
  './default/SVG/IconTwitter.svg',
  './default/SVG/IconMedium.svg',
  './default/SVG/Disabled1.svg',
  './default/SVG/Disabled2.svg',
  './default/SVG/Disabled3.svg',
  './default/SVG/Disabled4.svg',
  './default/SVG/Disabled5.svg',
  './default/SVG/Rectangle55.svg',
  './default/SVG/Rectangle56.svg',
  './default/SVG/Rectangle57.svg',
  './default/SVG/projects/project-ecommerce.svg',
  './default/SVG/projects/project-analytics.svg',
  './default/SVG/projects/project-workflow.svg',
  './default/SVG/projects/project-apihub.svg',
  './default/SVG/projects/project-fintech.svg',
  './default/SVG/projects/project-collab.svg',
  './default/SVG/projects/project-cloudops.svg',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(PRECACHE_ASSETS))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys.map((key) => {
            if (key !== CACHE_NAME) {
              return caches.delete(key);
            }
            return null;
          }),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // Network-First for GitHub REST API calls
  if (url.hostname === 'api.github.com') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
          return response;
        })
        .catch(() => caches.match(request)),
    );
    return;
  }

  // Stale-While-Revalidate for same-origin static assets
  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(request).then((cachedResponse) => {
        const networkFetch = fetch(request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              const clone = networkResponse.clone();
              caches.open(CACHE_NAME).then((cache) => cache.put(request, clone));
            }
            return networkResponse;
          })
          .catch(() => cachedResponse);

        return cachedResponse || networkFetch;
      }),
    );
  }
});
