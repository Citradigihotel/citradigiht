import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';
import ssr from 'vite-plugin-ssr/plugin';

export default defineConfig({
  plugins: [
    react(),
    ssr(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'Citra Digital Hotel',
          description: 'Solusi website profesional untuk penginapan Anda dengan harga terjangkau. Dilengkapi AI Customer Service 24/7 dan fitur booking WhatsApp.'
        }
      }
    })
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          icons: ['lucide-react', 'react-icons']
        }
      }
    }
  }
});