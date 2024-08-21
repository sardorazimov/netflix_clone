/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {protocol: "https", hostname: "assets.nflxext.com"},
            {protocol: "http", hostname: "*"}
        ]
    }
};

export default nextConfig;
