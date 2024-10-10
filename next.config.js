/* eslint-env node */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["mokky.dev"],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "reqres.in",
      },
      {
        protocol: "https",
        hostname: "mokky.dev",
      },
    ],
  },
  env: {
    API_URL: "http://localhost:3000",
    USERS_URL: "https://reqres.in/api/users",
    MOKKY_URL: "https://3290828d2c360809.mokky.dev",
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
}

module.exports = nextConfig
