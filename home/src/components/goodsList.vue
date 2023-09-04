<!--
 * @Description: 
 * @Author: lcp
 * @Date: 2022-09-02 13:13:01
 * @LastEditTime: 2022-10-13 15:46:12
 * @LastEditors: lcp
 * @Reference: 
-->
<script setup lang="ts">
import Goods from './goods.vue'
import { ref, reactive } from 'vue'
interface goodsInfo {
  name: String
  price: Number
  shape: Number
  desc: string
}
const title = ref('商品列表')
const goodsList: [goodsInfo] = reactive([
  {
    name: '西红柿',
    price: 9.9,
    shape: 10,
    desc: '只要9.9',
  },
  {
    name: '西红柿',
    price: 9.9,
    shape: 10,
    desc: '只要9.9',
  },
])
function selected(data: Object) {
  console.log(data)
}
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="goodslist">
      <Goods v-for="(item, index) in goodsList" :key="index" :goods="item" />
      <!-- <div
        class="item"
        v-for="(item, index) in goodsList"
        :key="index"
        @click="selected(item)"
      >
        <div class="img">1</div>
        <div class="info">
          <div class="title">{{ item.name }}</div>
          <div class="desc">
            <div class="title">{{ item.price }}</div>
            <div class="shape">{{ item.shape }}</div>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.goodslist {
  background: skyblue;
  width: 300px;
}
.item {
  display: flex;
  width: 100%;
  height: 60px;
}
.img {
  width: 60px;
  height: 60px;
  background: red;
}
.info {
  width: calc(100% - 60px);
}
.title {
  text-align: left;
}
.desc {
  display: flex;
  justify-content: space-around;
  width: calc(100% - 60px);
  align-items: center;
}
</style>
