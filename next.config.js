/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sawadeesign.vn",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
