const cacheName = 'cache1'
const resourceToPrecache = [
    '/',
    'index.html',
    '1.jpg',
    '2.jpg',
]

self.addEventListener('install', event => {
    console.log('Installed')
    event.waitUntil(
        caches.open(cacheName)
            .then(cache=> cache.addAll(resourceToPrecache)
        )
    )
})

self.addEventListener('fetch', event =>{
    event.respondWith(caches.match(event.request)
        .then(cachedResponse=> {
            return cachedResponse || fetch(event.request)
        })
    )
})
