/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'httpsplacehold.co',
      },
    ],
  },
};

export default nextConfig;
