if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, i, n) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const t = { uri: location.origin + s.slice(1) };
        return Promise.all(
          i.map((s) => {
            switch (s) {
              case "exports":
                return r;
              case "module":
                return t;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = n(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define("./service-worker.js", ["./workbox-6fa478bd"], function (e) {
  "use strict";
  importScripts("fallback-rJL0UYz0RKVS-BI-l5FE7.js"),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute([], { ignoreURLParametersMatching: [] }),
    e.cleanupOutdatedCaches(),
    /* e.registerRoute(
               "/",
               new e.NetworkFirst({
                 cacheName: "start-url",
                 plugins: [
                   {
                     cacheWillUpdate: async ({
                       request: e,
                       response: s,
                       event: r,
                       state: i,
                     }) =>
                       s && "opaqueredirect" === s.type
                         ? new Response(s.body, {
                             status: 200,
                             statusText: "OK",
                             headers: s.headers,
                           })
                         : s,
                   },
                   { handlerDidError: async ({ request: e }) => self.fallback(e) },
                 ],
               }),
               "GET"
             ),
             e.registerRoute(
               /\/(landing)/g,
               new e.CacheFirst({
                 cacheName: "test",
                 plugins: [
                   { handlerDidError: async ({ request: e }) => self.fallback(e) },
                   new e.ExpirationPlugin({
                     maxEntries: 10,
                     purgeOnQuotaError: !0,
                   }),
                 ],
               }),
               "GET"
             );*/
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "test",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: r,
              state: i,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/(landing)/g,
      new e.CacheFirst({
        cacheName: "test",
        plugins: [
          { handlerDidError: async ({ request: e }) => self.fallback(e) },
          new e.ExpirationPlugin({
            maxEntries: 10,
            purgeOnQuotaError: !0,
          }),
        ],
      }),
      "GET"
    );
});
