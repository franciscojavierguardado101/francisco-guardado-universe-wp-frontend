import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'francisco-guardado-universewp.ddev.site',
        port: '33000',
        pathname: '/wp-content/uploads/**',
      },
    ],
  },
};

export default nextConfig;
