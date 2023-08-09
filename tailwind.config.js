/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		'./src/**/*.{html,js,ts,jsx,tsx,mdx}',
		'./stories/**/*.{js,ts,jsx,tsx}',
		'node_modules/daisyui/**/*.{js,ts,jsx,tsx}',
		'node_modules/react-daisyui/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				teal: {
					50: '#D7f3f4',
					100: '#98e0e0',
					200: '#39cccc',
					300: '#00B6B5',
					400: '#00a4a2',
					500: '#00938d',
					600: '#008680',
					700: '#00776e',
					800: '#00675e',
					900: '#004a40',
				},
				navy: {
					50: '#E6ebf0',
					100: '#Beccdc',
					200: '#95abc5',
					300: '#6c8bad',
					400: '#4a729d',
					500: '#1f5a90',
					600: '#165387',
					700: '#08497c',
					800: '#013f6f',
					900: '#002e57',
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
};
