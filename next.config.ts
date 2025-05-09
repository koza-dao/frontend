import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['api.dicebear.com', 'picsum.photos', 'randomuser.me'],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
