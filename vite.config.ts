import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Reefer Guru',
        short_name: 'ReeferGuru',
        description: '...',
        theme_color: '#0055A4',
        background_color: '#1a202c',
        display: 'standalone',
        icons: [ /* same as above */ ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ]
});
