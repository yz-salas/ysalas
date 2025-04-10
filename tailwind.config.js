/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: {
					DEFAULT: '1rem', // Ajuste base para móviles
					sm: '1rem',
					md: '2rem',
					lg: '4rem',
					xl: '6rem', // Se mantiene para pantallas grandes
				},
			},
			fontFamily: {
				ubuntu: ['"Ubuntu"', 'serif'],
				Erode: ['"Erode"', 'sans-serif'],
				Outfit: ['"Outfit"', 'sans-serif'],
			},
			fontWeight: {
				100: 100,
				200: 200,
				300: 300,
				400: 400,
				500: 500,
				600: 600,
				700: 700,
				800: 800,
				900: 900,
			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
				'.outline-text-white-2': {
					'-webkit-text-stroke': '2px white',
					color: 'transparent',
				},
				'.outline-text-white-1': {
					'-webkit-text-stroke': '1px white',
					color: 'transparent',
				},
				'.outline-text-black-2': {
					'-webkit-text-stroke': '2px black',
					color: 'transparent',
				},
				'.outline-text-black-1': {
					'-webkit-text-stroke': '1px black',
					color: 'transparent',
				},
				'.outline-text-purple-600-1': {
					'-webkit-text-stroke': '1px #9333ea', // Corrected to hex code for purple-600
					color: 'transparent',
				},
				'.outline-text-purple-600-2': {
					'-webkit-text-stroke': '2px #9333ea', // Corrected to hex code for purple-600
					color: 'transparent',
				},
				'.outline-text-teal-300-2': {
					'-webkit-text-stroke': '1px #38b2ac', // Cambiado al código correcto para teal-300
					color: 'transparent',
				},
			});
		},
	],
};
