import { withPayload } from "@payloadcms/next/withPayload";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
      {
        protocol: "https",
        hostname: "picsum.photos", // Tambahkan ini untuk Picsum Photos
      },
      {
        protocol: "https",
        hostname: "utfs.io",
      }
    ],
  },
};

export default withPayload(nextConfig);