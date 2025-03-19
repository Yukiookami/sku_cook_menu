import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  base: "", // Capacitor必须将base设置为空字符串，确保资源路径正确
});
