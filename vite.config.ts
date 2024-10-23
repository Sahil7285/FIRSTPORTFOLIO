import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MyPortfolio/',  // Adjust the base path according to your repo name
  build: {
    outDir: 'dist',  // Change this to 'dist'
  },
})