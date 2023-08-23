const withTwin = require('./withTwin');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
	reactStrictMode: true,
	transpilePackages: ['react-daisyui'],
	output: 'standalone',
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
});

module.exports = nextConfig;
