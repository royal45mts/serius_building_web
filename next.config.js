/** @type {import('next').NextConfig} */
const path = require("path");
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
module.exports = withPWA({
  optimizeFonts: false,

  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
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
    disable: true,
    // sw: "service-worker.js",
  },

  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  env: {
    URL: process.env.URL,
    PORT: process.env.PORT,
    HOSTNAME: process.env.HOSTNAME,
  },
  webpack: (config) => {
    config.resolve.modules.push(path.resolve("./"));
    return config;
  },
});
