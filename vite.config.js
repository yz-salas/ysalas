import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ysalas/', // Nombre del repositorio
  build: {
    outDir: 'docs', // Guardar el build en la carpeta 'docs'
  },
});
