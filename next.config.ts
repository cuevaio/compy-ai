import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async headers() {
		return [
			{
				// Apply these headers to all routes
				source: "/api/:path*",
				headers: [
					{
						key: "Access-Control-Allow-Origin",
						value: process.env.NODE_ENV === "development"
							? "http://localhost:5173"
							: "https://compy.cueva.io",
					},
					{
						key: "Access-Control-Allow-Methods",
						value: "GET, POST, PUT, DELETE, OPTIONS",
					},
					{
						key: "Access-Control-Allow-Headers",
						value: "Content-Type, Authorization",
					},
				],
			},
		];
	},
};

export default nextConfig;
