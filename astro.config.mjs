// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro'; 

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://pbpetrus-site.vercel.app', // <-- 1. Definimos tu dominio oficial
  output: 'server', // <-- 2. Habilitamos el procesamiento del lado del servidor (SSR)
  
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [
    react(),
    keystatic() 
  ],

  adapter: vercel()
});