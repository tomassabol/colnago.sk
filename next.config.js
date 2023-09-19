/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    appDir: true,
    serverActions: true,
    serverComponentsExternalPackages: ['@trpc/server'],
  },
  webpack: (config) => {
    // This is only intended to pass CI and should be skiped in your app
    if (config.name === 'server')
      config.optimization.concatenateModules = false;

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname:  'www.colnago.cz',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.myshoptet.com',
        port: '',
      },
      {
        protocol: 'https',
        hostname: 's3.eu-west-1.amazonaws.com',
        port: '',
      }
    ],
  },
};

module.exports = nextConfig;
