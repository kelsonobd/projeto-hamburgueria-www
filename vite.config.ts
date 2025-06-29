import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: true, // 👈 permite acesso externo (necessário para Docker)
    port: 5173, // 👈 garante que vai rodar nessa porta
    strictPort: true, // 👈 evita que o Vite tente mudar a porta se já estiver ocupada
  },
})
