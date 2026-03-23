import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'mfe_vue_tasks',
      filename: 'remoteEntry.js',
      exposes: {
        './TaskWidget': './src/TaskWidget.vue',
      },
      shared: ['vue'],
    }),
  ],
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  },
  // Change 'erickcguz' to your actual GitHub username
  base: 'https://erickcguz.github.io/mfe-vue-tasks/dist/',
})
