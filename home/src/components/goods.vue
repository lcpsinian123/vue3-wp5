<!--
 * @Description: 
 * @Author: lcp
 * @Date: 2022-10-13 13:42:33
 * @LastEditTime: 2022-10-13 16:07:09
 * @LastEditors: lcp
 * @Reference: 
-->
<script setup lang="ts">
import { reactive } from 'Vue'
const prop = defineProps<{ goods: Object }>()
console.log(prop)
let obj = prop.goods
</script>

<template>
  <div class="item">
    <div class="img">1</div>
    <div class="info">
      <div class="title">{{ obj.name }}</div>
      <div class="desc">
        <div class="title">{{ obj.price }}</div>
        <div class="shape">{{ obj.shape }}</div>
      </div>
    </div>
    <div class="buttom">
      <el-button>+</el-button>
    </div>
  </div>
</template>
