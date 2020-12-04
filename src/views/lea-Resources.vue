<template>
  <div class="main">
    <div>
      <h1>Resources(资源)</h1>
    </div>
    <div class="content">
      <h3>自学</h3>
      <ul>
        <li>
          <a href="https://vue3js.cn/" target="_blank" rel="noopener"
            >vue3 中文</a
          >
        </li>
        <li>
          <a href="https://vue3js.cn/start/" target="_blank" rel="noopener"
            >vue3 源码分析</a
          >
        </li>
      </ul>
      <hr />
      <h3>UI</h3>
      <ul>
        <li>
          <a
            href="https://2x.antdv.com/components/tooltip-cn/"
            target="_blank"
            rel="noopener"
            >AntDesign-vue2.x</a
          >
        </li>
        <li>
          <a
            href="https://element-plus.org/#/zh-CN/component/installation"
            target="_blank"
            rel="noopener"
            >element-plus</a
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>

.content{
    ul{
        display: flex;
        justify-content: space-around;
    }
}
</style>
