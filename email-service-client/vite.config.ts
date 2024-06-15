import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 8081,
    strictPort: true,
    host: true,
    origin: 'http://0.0.0.0:8081',
  },
  preview: {
    port: 8082,
    strictPort: true,
  },
})