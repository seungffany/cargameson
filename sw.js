const CACHE = "car-quiz-v2";
const FILES = ["./", "index.html", "manifest.webmanifest", "icon-192.png", "icon-512.png", "apple-touch-icon.png", "img/avante-n.webp", "img/avante.webp", "img/bongo.webp", "img/carnival.webp", "img/casper-ev.webp", "img/casper.webp", "img/county.webp", "img/ev2.webp", "img/ev3.webp", "img/ev4.webp", "img/ev5.webp", "img/ev6.webp", "img/ev9.webp", "img/grandeur.webp", "img/ioniq3.webp", "img/ioniq5-n.webp", "img/ioniq5.webp", "img/ioniq6-n.webp", "img/ioniq6.webp", "img/ioniq9.webp", "img/k5.webp", "img/k8.webp", "img/k9.webp", "img/kona.webp", "img/mighty.webp", "img/morning.webp", "img/nexo.webp", "img/niro.webp", "img/palisade.webp", "img/pavise.webp", "img/porter.webp", "img/pv5.webp", "img/pv7.webp", "img/ray.webp", "img/santafe.webp", "img/seltos.webp", "img/solati.webp", "img/sonata.webp", "img/sorento.webp", "img/sportage.webp", "img/st1.webp", "img/staria.webp", "img/tasman.webp", "img/tucson.webp", "img/venue.webp"];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())); });
self.addEventListener("activate", e => { e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
    if (res.ok || res.type === "opaque") { const copy = res.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); }
    return res;
  })));
});
