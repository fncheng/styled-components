import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const resolve = (val: string) => path.resolve(__dirname, val)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          antd: ['antd'],
          'lodash-es': ['lodash-es']
        }
      }
    }
  },
  optimizeDeps: {
    include: [
    ],
    // exclude: ['lodash-es', 'react-window']
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    })
  ],
  resolve: {
    alias: {
      // 'lodash-es': resolve('./.cache/lodash-es.js'),
      // 'react-window': resolve('./.cache/react-window.js'),
    }
  },
  server: {
    port: 3001
  }
})
