import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  redirects: async () => [
    {
      source: '/',
      destination: '/links',
      permanent: true,
    },
  ],
};

export default nextConfig;
