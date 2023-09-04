/*
 * @Description: 
 * @Author: lcp
 * @Date: 2022-08-22 13:54:30
 * @LastEditTime: 2022-09-23 16:09:22
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
      name: "home",
      filename: "remoteEntry.js",
      remotes: {
        //  '远端模块名称':'远端模块入口文件地址'
        // ....

      },
      exposes: {
        //....  暴露组件
        "./Goodslist":"./src/components/goodsList.vue"
      },
      shared: ["vue"] //
    })
  ],
  build: {
    target: ['edge90', 'chrome90', 'firefox90', 'safari15'], // 非行内样式，需要构建规格为es2020，否则存在样式不生效/报错
  }
  
})
