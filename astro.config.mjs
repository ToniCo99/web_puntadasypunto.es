// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://puntadasypunto.es',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      customPages: [
        'https://puntadasypunto.es/',
        'https://puntadasypunto.es/servicios/',
        'https://puntadasypunto.es/servicios/clases-de-costura/',
        'https://puntadasypunto.es/servicios/confeccion-a-medida/',
        'https://puntadasypunto.es/servicios/vestuario-teatro/',
        'https://puntadasypunto.es/contacto/',
        'https://puntadasypunto.es/galeria/'
      ]
    }),
    tailwind()
  ],
  image: {
    domains: ['puntadasypunto.es'],
    formats: ['avif', 'webp', 'jpg'],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  }
});