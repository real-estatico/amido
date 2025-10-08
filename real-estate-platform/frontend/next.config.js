/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === 'development'

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  // Only use basePath for production (GitHub Pages)
  ...(isDev ? {} : {
    basePath: '/amido',
    assetPrefix: '/amido',
  }),
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig
