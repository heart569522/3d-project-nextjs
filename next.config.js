/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three', '@mui/x-charts'],
    reactStrictMode: false,
    env: {
        EBOX_API_URL: process.env.EBOX_URL,
        BPS_API_URL: process.env.BPS_URL
    }
}

module.exports = nextConfig
