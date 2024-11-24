/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "qhnfezkyhefpiufiuqqu.supabase.co",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
