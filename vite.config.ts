import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tanstackRouter from '@tanstack/router-plugin/vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/windows-app/',
  plugins: [
    tanstackRouter({
    target: 'react',
    autoCodeSplitting: true
    }),
    viteReact()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
