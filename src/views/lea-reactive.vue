<template>
  <div>
    <h1>reactive</h1>
    <ul>
      <li>姓名：{{ state.name }}</li>
      <li>年龄：{{ state.age }}</li>
      <li>说点什么：{{ state.msg }}</li>
    </ul>
    <span>姓名</span> <input type="text" v-model="state.name" /><br />
    <span>年龄</span><input type="number" v-model="state.age" /><br />
    <span>说点什么</span><input type="text" v-model="state.msg" /><br />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "leareactive",
  setup() {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IPeople {
      name: string;
      age: number;
      msg: string;
    }
    const obj: IPeople = {
      name: "张三",
      age: 18,
      msg: "我叫张三",
    };
    const state = reactive<IPeople>(obj);
    return { state };
  },
});
</script>

<style lang="scss" scoped></style>
