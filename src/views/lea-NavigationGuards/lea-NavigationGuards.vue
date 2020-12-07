<template>
  <div>
    <h1>路由守卫</h1>
    <hr />
    <button @click="handleSet">点击来存跳转判断的值</button><span>&nbsp;</span>
    <button @click="handleRemove">点击来删除跳转判断的值</button>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {onBeforeRouteLeave } from "vue-router";
import storage from "../../utils/storage";
export default defineComponent({
  name: "NavigationGuards",
  setup() {
    const key = "routerTest";
    onBeforeRouteLeave(()=>{
        console.log('456');
        
    })
    const handleSet = (): void => {
      storage.set(key, "路由守卫测试标识");
    };
    const handleRemove = (): void => {
      storage.remove(key);
    };
    return { handleSet, handleRemove };
  },
});
</script>

<style lang="scss" scoped></style>
