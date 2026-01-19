import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,  // <--- THIS IS THE KEY FIX. It tells Vite to listen on 0.0.0.0
    port: 5173,  // Ensures the port stays 5173
  },
})