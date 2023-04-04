/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    CONTENTFUL_SPACE_ID: "r04dzz22lqm6",
    CONTENTFUL_ACCESS_KEY: "dgsEogJM-kAA_QCqn47zc_mCypqrKJ34m0Ue_F_SG_4"
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
      },
    ],
  },
}

module.exports = nextConfig
