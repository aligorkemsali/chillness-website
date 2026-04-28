/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "chillness.esnturkey.org",
      },
    ],
  },
};

module.exports = nextConfig;
