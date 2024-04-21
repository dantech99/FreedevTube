/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  images: {
    remotePattens: [
      {
        protocol: 'https',
        hostname: 'yt3.googleusercontent.com',
        port: '',
        pathname: '/account123/**',
      },
    ],
  },
};

export default nextConfig;
