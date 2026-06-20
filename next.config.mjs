/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/Projects", destination: "/projects", permanent: true },
      { source: "/Projects/adino", destination: "/projects/adino", permanent: true },
      { source: "/Projects/chevron", destination: "/projects/chevron", permanent: true },
      { source: "/Projects/robs-place", destination: "/projects/robs-place", permanent: true },
      { source: "/Projects/rob", destination: "/projects/robs-place", permanent: true },
      { source: "/Projects/sunplanet", destination: "/projects/sunplanet", permanent: true },
      { source: "/Projects/thebrook", destination: "/projects/thebrook", permanent: true },
      { source: "/Projects/ogadentist", destination: "/projects/ogadentist", permanent: true },
    ];
  },
};

export default nextConfig;
