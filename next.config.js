module.exports = {
  devIndicators: {
    autoPrerender: false,
  },
  experimental: {
    modern: true,
    polyfillsOptimization: true,
  },
  env: {
    JWT_TOKEN_READ: process.env.JWT_TOKEN_READ,
    MOVIESOM_API_URL: process.env.MOVIESOM_API_URL,
  },
};
