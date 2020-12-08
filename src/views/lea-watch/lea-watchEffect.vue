<template>
  <div>
    <h1>WatchEffect 监听</h1>
    <hr />
    <ul>
      <li>
        <span>姓名</span> <input type="text" v-model="peopleState.name" />
      </li>
      <li>
        <span>年龄</span> <input type="number" v-model="peopleState.age" />
      </li>
      <li><span>信息</span> <input type="text" v-model="peopleState.msg" /></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from "vue";

export default defineComponent({
  name: "WatchEffect",
  setup() {
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IPeople {
      name: string;
      age: number;
      msg: string;
    }
    const peopleObj: IPeople = {
      name: "张珊",
      age: 20,
      msg: "hello word",
    };
    const peopleState = reactive<IPeople>(peopleObj);
    watchEffect((): void => {
      console.log(peopleState.name);
      console.log(peopleState.age);
      console.log(peopleState.msg);
    });
    return { peopleState };
  },
});
</script>

<style lang="scss" scoped></style>
