import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  build:{
    lib:{
      entry:resolve(__dirname,'packages/index.ts'),
      // 入口文件
      name:'easyComponents',
      fileName:'easy-components'
    },
    rollupOptions:{
      external:['vue'],
      // 不用打包的依赖
      output:{
        // 无需打包的依赖的代替
        globals:{
          vue:'Vue',
        }
      }
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~': fileURLToPath(new URL('./packages', import.meta.url))
    }
  }
})
