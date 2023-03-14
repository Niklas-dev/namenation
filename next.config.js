/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
        pathname: "/w160/**",
      },
    ],
  },
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig;
