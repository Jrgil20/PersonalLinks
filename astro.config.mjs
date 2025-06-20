// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración de sitio para SEO
  site: 'https://jesusgil.dev', // Cambiar por tu dominio real
  
  // Optimizaciones de build
  build: {
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  
  // Configuración de imágenes
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    },
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        port: '',
        pathname: '/**'
      }
    ]
  },
  
  // Configuración de Vite para desarrollo
  vite: {
    css: {
      devSourcemap: true
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'social-icons': ['./src/components/icons.ts']
          }
        }
      }
    }
  },
  
  // Configuración de servidor de desarrollo
  server: {
    port: 4321,
    host: true
  },
  
  // Configuración de integraciones (futuras)
  integrations: []
});
