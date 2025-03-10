// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "example.com",
                port: "",
                pathname: "/account123/**",
            },
        ],
    },
    reactStrictMode: true,
};

export default nextConfig;
