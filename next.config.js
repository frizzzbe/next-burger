/* eslint-env node */
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
      },
      {
        protocol: "https",
        hostname: "reqres.in",
        port: "",
      },
    ],
  },
  env: {
    API_URL: "http://localhost:3000",
    USERS_URL: "https://reqres.in/api/users",
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "ru",
  },
}

module.exports = nextConfig
