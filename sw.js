const cacheName = 'cache1'
const resourceToPrecache = [
    '/',
    'index.html',
    '1.jpg',
    '2.jpg',
    '3.jpg',
]

self.addEventListener('fetch', event =>{
    console.log("fetching")
    event.respondWith(caches.match(event.request)
        .then(cachedResponse=> {
            return cachedResponse || fetch(event.request)
        })
    )
})
