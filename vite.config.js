import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  base: "/ad/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./public/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@header": path.resolve(__dirname, "./src/sections/Header"),
      "@sidemenu": path.resolve(__dirname, "./src/sections/SideMenu"),
      "@supportmenu": path.resolve(__dirname, "./src/sections/SupportMenu"),
      "@callrequestmenu": path.resolve(
        __dirname,
        "./src/sections/CallRequestMenu"
      ),
      "@main": path.resolve(__dirname, "./src/sections/Main"),
      "@footer": path.resolve(__dirname, "./src/sections/Footer"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/mixins" as *;
          @use "@/styles/variables" as *;
        `,
      },
    },
  },
});
