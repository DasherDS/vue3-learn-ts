<template>
  <div class="main">
    <h1>vue3.0+typescript</h1>
    <div class="content">
      <div class="list">
        <ul>
          <li><router-link to="./homeindex"> 资源 </router-link></li>
          <li><router-link to="./ref"> ref </router-link></li>
          <li><router-link to="./reactive"> reactive </router-link></li>
          <li><router-link to="./useStore"> useStore </router-link></li>
          <li><router-link to="./lifecycle"> 生命周期 </router-link></li>
        </ul>
      </div>
      <div class="info"><router-view></router-view></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>
<style lang="scss" scoped>
.main {
  .content {
    .list {
      height: 100%;
      width: 200px;
      ul {
          width: 200px;
        li {
          line-height: 40px;
        }
      }
      border-right: 1px solid rgb(31, 30, 30);
    }
    display: flex;
    .info {
      margin-left: 30px;
    }
  }
}
</style>
