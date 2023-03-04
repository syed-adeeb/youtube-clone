/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			screens: {
				"3xl": "1828px",
			},
		},
	},
	plugins: [
		require("tailwind-scrollbar"),
		require("tailwind-scrollbar-hide"),
		// ...
	],
};
