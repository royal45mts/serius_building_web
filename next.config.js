const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
    runtimeCaching: [
      {
        // Match any request that ends with .png, .jpg, .jpeg or .svg.
        urlPattern: "/",

        // Apply a cache-first strategy.
        handler: "CacheFirst",

        options: {
          // Use a custom cache name.
          cacheName: "test",

          // Only cache 10 images.
          expiration: {
            maxEntries: 10,
          },
        },
      },
    ],

    // sw: "service-worker.js",
  },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    customKey: ".env",
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
