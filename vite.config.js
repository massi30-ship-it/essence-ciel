import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' keeps asset URLs relative so the built dist/ deploys in any folder
// (GitHub Pages project subpath, Vercel root, etc.).
export default defineConfig({
  base: './',
  plugins: [react()],
  build: { outDir: 'dist' },
})
