import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
	plugins: [react()],
	base: '/templete-v1/', // Reemplaza 'templete-v1' con el nombre de tu repositorio
	build: {
		outDir: 'dist', // O usa 'dist' si prefieres
	},
});
