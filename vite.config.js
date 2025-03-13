import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),  // check this line if issue is there ./src cn be thesre
    },
  },
})
