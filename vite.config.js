import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/ysalas/', // Debe coincidir con el nombre del repositorio
});
