import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: "@use './src/assets/styles.scss' as *;"
        // additionalData: "@use './src/assets/_variables.scss' as *;"
      },
    }
  }
})
