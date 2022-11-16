const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: false,
  swcMinify: false,
  redirects: require("./next-redirects"),
  images: {
    domains: ["images.unsplash.com", "pbs.twimg.com"],
  },
});
