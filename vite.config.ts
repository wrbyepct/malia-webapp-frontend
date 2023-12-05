import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/malia-webapp-frontend/',
  plugins: [react()],
  build: {
    outDir: 'build', // Add this line to specify the output directory
  },
})
