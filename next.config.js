/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    // Set to false if you're using dynamic routes
    trailingSlash: true,
    // Disable image optimization since S3 static hosting doesn't support it
    images: {
        unoptimized: true
    }
}

module.exports = nextConfig
