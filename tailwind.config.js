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
			backgroundImage: {
				main_visual_image: "url('/images/mainVis.png')",
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light'],
	},
};
