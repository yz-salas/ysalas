import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
	plugins: [react()],
	base: '/', // Nombre de tu repositorio
	build: {
		outDir: 'dist', // Asegurar que la carpeta de salida es 'dist'
	},
});
