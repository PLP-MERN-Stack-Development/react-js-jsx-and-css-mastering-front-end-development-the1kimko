import { defineConfig } from 'vite'
import tailwindCSS from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindCSS(),
  ],
  resolve: {
  alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
