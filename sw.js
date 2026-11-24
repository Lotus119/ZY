/* 传讯 PWA service worker：仅用于满足“可安装”条件，不做激进缓存 */
self.addEventListener('install', function (e) { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('notificationclick', function (e) {
  e.notification.close();
  var target = (e.notification.data && e.notification.data.url) || './';
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function (list) {
    for (var i = 0; i < list.length; i++) {
      if (list[i].url.indexOf('ZY') !== -1 && 'focus' in list[i]) return list[i].focus();
    }
    for (var j = 0; j < list.length; j++) { if ('focus' in list[j]) return list[j].focus(); }
    if (self.clients.openWindow) return self.clients.openWindow(target);
  }));
});

self.addEventListener('fetch', function (e) {
  /* 交给浏览器默认网络请求处理，避免旧缓存导致页面不更新 */
});
