/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  // experimental: {
  //   appDir: true,
  // },
  reactStrictMode: false,
  compiler: {
    styledComponents: {
      displayName: false,
      ssr: false,
    },
  },
  eslint: {
    dirs: ['app', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'content.tahacankurt.com.test/storage',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
