<template>
  <div>
    <h1>ref</h1>
    <span> msg:{{ msg }} </span>
    <br />
    <button @click="handleChange">点击改变字体</button>
    <input type="text" v-model="msg">
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "learef",
  setup() {
    const msg = ref<string>("");
    const handleChange = (): void => {
      msg.value = "这是点击过后的值";
    };
    return { msg, handleChange };
  },
});
</script>

<style lang="scss" scoped></style>
