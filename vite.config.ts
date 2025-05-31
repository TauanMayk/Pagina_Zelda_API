// vite.config.ts
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Pagina_Zelda_API/', 
  plugins: [
    tailwindcss(),
    react()
  ],
  build: {
    outDir: 'dist'
  },
})
