import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: './src/renderer',
  base: './',
  plugins: [react()],
  css: {
    postcss: path.resolve(__dirname, './postcss.config.js'),
  },
  build: {
    outDir: path.resolve(__dirname, 'dist/renderer'),
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src/renderer'),
    }
  },
  optimizeDeps: {
    include: ['@fontsource/inter']
  }
});
