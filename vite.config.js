import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "mfe_vue_tasks",
      filename: "remoteEntry.js",
      exposes: {
        "./TaskWidget": "./src/TaskWidget.vue",
      },
      shared: ["vue"],
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
    outDir: "dist",
  },
  base: "https://hoizard.github.io/mfe-vue-tasks/dist/",
});
