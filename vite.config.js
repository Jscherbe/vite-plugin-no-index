import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vitePluginNoIndex from "./index.js";

export default defineConfig({
  plugins: [
    vue(),
    vitePluginNoIndex({ enabled: true })
  ]
});