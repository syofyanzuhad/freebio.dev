/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: [
			"secure.gravatar.com",
			"github.com",
		],
	},
};

module.exports = nextConfig;
