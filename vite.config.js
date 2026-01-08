import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      '/laser': {
        target: 'http://localhost:5003',
        changeOrigin: true,
      },
      '/timetagger': {
        target: 'http://localhost:5003',
        changeOrigin: true,
      },
      '/ws': {
        target: 'http://localhost:5003',
        changeOrigin: true,
        ws: true,
      },
    },
  },
  build: {
    outDir: '../static/dist',
    emptyOutDir: true,
  },
})
