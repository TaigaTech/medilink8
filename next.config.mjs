/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.Clerk.com"
            },
        ],
    },
};

export default nextConfig;
