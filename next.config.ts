import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // Rewrite any app route (except Next internals and static files) to the dark folder.
      {
        // only match non-empty paths (avoid rewriting the root '/')
        source: '/:path((?!_next|api|static|assets|favicon.ico).+)',
        destination: '/dark/:path',
      },
    ];
  },
};

export default nextConfig;
