const CACHE='booktrack-v1';
const ASSETS=['./','./index.html','./manifest.json','./icons/icon-192.png','./icons/icon-512.png','https://unpkg.com/html5-qrcode@2.3.8/html5-qrcode.min.js'];

self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS).catch(()=>{})));
  self.skipWaiting();
});

self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch',e=>{
  // Skip non-GET requests and Open Library API calls (need fresh data)
  if(e.request.method!=='GET'||e.request.url.includes('openlibrary.org'))return;
  e.respondWith(
    caches.match(e.request).then(cached=>{
      const fetchPromise=fetch(e.request).then(response=>{
        if(response&&response.status===200){
          const clone=response.clone();
          caches.open(CACHE).then(c=>c.put(e.request,clone)).catch(()=>{});
        }
        return response;
      }).catch(()=>cached);
      return cached||fetchPromise;
    })
  );
});
