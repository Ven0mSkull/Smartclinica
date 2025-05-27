import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})

service.hmr.overlay = false; // Desabilita o overlay de erros do Vite