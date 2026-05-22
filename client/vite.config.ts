import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import taliwindcss from '@tailwindcss/vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
})
