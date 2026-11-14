/** @type {import('next').NextConfig} */

// Vercel already holds the previous site's variables under their Vite names.
// Mapping them here means nothing has to be re-entered in the dashboard:
// VITE_CAL_LINK and VITE_CLARITY_ID are public values, inlined at build time.
const env = {
  NEXT_PUBLIC_CAL_LINK: process.env.NEXT_PUBLIC_CAL_LINK || process.env.VITE_CAL_LINK || '',
  NEXT_PUBLIC_CLARITY_ID: process.env.NEXT_PUBLIC_CLARITY_ID || process.env.VITE_CLARITY_ID || '',
};

const nextConfig = {
  reactStrictMode: true,
  env,
  async redirects() {
    return [
      // Routes this redesign briefly used. The live URLs are the canonical ones.
      { source: '/prism', destination: '/products', permanent: true },
      { source: '/legal/:slug', destination: '/:slug', permanent: true },
      // Carried over from the previous vercel.json
      { source: '/technology', destination: '/services#technology-and-engineering', permanent: true },
      { source: '/systems', destination: '/products', permanent: true },
    ];
  },
};
export default nextConfig;
