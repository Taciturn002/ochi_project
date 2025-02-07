import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
      domains: [
        "ochi.design", 
       ] // Replace with actual image domain
        
    },
};

export default nextConfig;

