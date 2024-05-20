// Install event - the browser triggers this event when the service worker is installed
self.addEventListener('install', (event) => {
    console.log('Service Worker: Installed');
});

// Activate event - called when the service worker is activated
self.addEventListener('activate', (event) => {
    console.log('Service Worker: Activated');
    // Clean up old caches
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cache => {
                    // Assuming 'v1' is the name of the previous cache version
                    if (cache !== 'v1') {
                        console.log('Service Worker: Clearing Old Cache');
                        return caches.delete(cache);
                    }
                })
            );
        })
    );
});

// Fetch event - here you can define how you want to respond to 'fetch' events
self.addEventListener('fetch', (event) => {
    console.log('Service Worker: Fetching');
    event.respondWith(
        fetch(event.request).catch(() => caches.match(event.request))
    );
});