/*
 * @Description: 
 * @Author: lcp
 * @Date: 2022-08-22 13:55:29
 * @LastEditTime: 2022-09-23 16:09:59
 * @LastEditors: lcp
 * @Reference: 
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "App",
      filename: "remoteEntry.js",
      remotes: {
        home:'http://localhost:5174/dist/assets/remoteEntry.js'
      },
      shared: ["vue"]
    })
  ],

})
