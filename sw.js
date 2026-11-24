/* 传讯 PWA service worker：仅用于满足“可安装”条件，不做激进缓存 */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) {
  /* 交给浏览器默认网络请求处理，避免旧缓存导致页面不更新 */
});
