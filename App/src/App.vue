<!--
 * @Description: 
 * @Author: lcp
 * @Date: 2022-08-22 13:55:29
 * @LastEditTime: 2022-09-23 16:38:16
 * @LastEditors: lcp
 * @Reference: 
-->
<script lang="ts">
import { defineAsyncComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// const goodslist = defineAsyncComponent(() => import('home/Goodslist'))

export default {
  components: {
    HelloWorld,
    // goodslist,
  },
  data() {
    return {}
  },
}
</script>

<template>
  <!-- <goodslist /> -->
  <HelloWorld></HelloWorld>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
