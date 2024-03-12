const assets = ['styles.css', 'app.js', 'sw-register.js']

self.addEventListener("install", event => {
  caches.open('assets').then(cache => {
    cache.addAll([assets])
  })
})