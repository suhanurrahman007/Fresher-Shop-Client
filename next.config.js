// // next.config.js

// module.exports = {
//   images: {
//     domains: [
//       "i.ibb.co",
//       "lh3.googleusercontent.com",
//       "source.unsplash.com",
//     ],
//   },
// };


/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;