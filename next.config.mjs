/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/yellow_jacket_toys_ph', // Added basePath for GitHub Pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
