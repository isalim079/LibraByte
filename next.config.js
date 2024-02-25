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

       webpack: (config) => {
           config.resolve.alias.canvas = false;
        
           return config;
         },
}

module.exports = nextConfig
