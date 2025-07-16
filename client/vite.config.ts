import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression';
import { visualizer } from 'rollup-plugin-visualizer';
export default defineConfig({
  plugins: [react(), tailwindcss(), compression(), visualizer()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'redux',
            'react-redux',
            'framer-motion',
            'react-icons',
            'react-spinners'
          ]
        }
      }
    }
  },
  server: {
    host: '0.0.0.0',       // Allow connections from LAN
    port: 5173,            // You can change if needed
  },
})
