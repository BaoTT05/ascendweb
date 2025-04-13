/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    // Remove webpack config as it's not needed for static files in public directory
}

module.exports = nextConfig
