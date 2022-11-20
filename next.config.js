const { withSentryConfig } = require("@sentry/nextjs");

const sentryWebpackPluginOptions = {
  silent: true,
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",

  sentry: {
    hideSourceMaps: true,
  },
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
