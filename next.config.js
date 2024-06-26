// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTwin = require('./withTwin');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
	reactStrictMode: true,
	transpilePackages: ['react-daisyui'],
	output: 'standalone',
	compiler: {
		removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
	},
	swcMinify: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ['@svgr/webpack'],
		});
		return config;
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'static.pliper.kr',
			},
		],
	},
});

module.exports = nextConfig;
