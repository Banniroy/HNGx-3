/** @type {import('tailwindcss').Config} */
export default {
	content: [
	  "./index.html",
	  "./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
	  extend: {
		 keyframes: {
			'bounce': {
				'0%': {transform: 'translateY(0)'},
				'50%': {transform: 'translateY(-2rem)'},
				'100%': {transform: 'translateY(0)'}
			}
		 },
		 animation: {
			'bounce': 'bounce 900ms ease-in-out infinite'
		 },
	  },
	},
	plugins: [],
 }
