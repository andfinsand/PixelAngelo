/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  images: {
    domains: ['127.0.0.1'], // Add the hostname used in the src prop
  },
};
