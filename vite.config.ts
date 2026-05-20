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
        description: 'The ultimate AI assistant for refrigerated container technicians',
        theme_color: '#0055A4',
        background_color: '#1a202c',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/images/REEFERGURU.PNG',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/images/REEFERGURU.PNG',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,json}']
      }
    })
  ]
});
