/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "it"],
    defaultLocale: "en",
  },
  images: {
    domains: ["github.com"],
  },
};

module.exports = nextConfig
