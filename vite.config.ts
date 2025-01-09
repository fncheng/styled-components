import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import path from 'path'
import { visualizer } from 'rollup-plugin-visualizer'

// const resolve = (val: string) => path.resolve(__dirname, val)

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          antd: ['antd'],
          'lodash-es': ['lodash-es'],
          'pro-components': ['@ant-design/pro-components']
        }
      }
    },
    cssCodeSplit: true
  },
  optimizeDeps: {
    // include: [
    //   '@emotion/react',
    //   '@emotion/styled',
    // ],
    // exclude: ['lodash-es', 'react-window']
  },
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin']
      }
    }),
    visualizer({
      
    })
  ],
  resolve: {
    alias: {
      // 'lodash-es': resolve('./.cache/lodash-es.js'),
      // 'react-window': resolve('./.cache/react-window.js'),
    }
  },
  server: {
    port: 10002
  }
})
