import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:"https://danhcoding.github.io/fetch/",
  plugins: [react()],
})
