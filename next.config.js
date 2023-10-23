/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { appDir: true, serverComponentsExternalPackages: ["mongoose"] , typedRoutes: true},
  webpack(config) {
      config.experiments = { ...config.experiments, topLevelAwait: true };
      return config;
  },
  images: {
    domains: ['images.pexels.com','172.17.84.65'],
  },
}

module.exports = nextConfig
