/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			container: {
				center: true, // Centra el contenedor automáticamente
				padding: '2rem', // Espaciado interno para todos los lados
			},
			fontFamily: {
				exo2: ['"Exo 2"', 'serif'],
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
		function ({ addComponents }) {
			addComponents({
				'.exo-2': {
					fontFamily: '"Exo 2", serif',
					fontOpticalSizing: 'auto',
					fontStyle: 'normal',
				},
				// Clases personalizadas para los pesos de la fuente
				'.exo-2-100': {
					fontWeight: '100',
				},
				'.exo-2-200': {
					fontWeight: '200',
				},
				'.exo-2-300': {
					fontWeight: '300',
				},
				'.exo-2-400': {
					fontWeight: '400',
				},
				'.exo-2-500': {
					fontWeight: '500',
				},
				'.exo-2-600': {
					fontWeight: '600',
				},
				'.exo-2-700': {
					fontWeight: '700',
				},
				'.exo-2-800': {
					fontWeight: '800',
				},
				'.exo-2-900': {
					fontWeight: '900',
				},
			});
		},
	],
};
