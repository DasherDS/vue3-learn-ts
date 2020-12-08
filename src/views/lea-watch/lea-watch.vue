<template>
  <div>
    <h1>watch 监听</h1>
    <hr />
    <ul class="contant">
      <li>
        <span> {{ num }} </span>
        <button
          plain
          hairline
          type="primary"
          size="small"
          @click="handlePlusNum"
          >增加 1</button
        >
        <span>
          监听的值的变化：新值 {{ warNums.newval }} 旧值 {{ warNums.oldval }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUpdated, reactive, ref, watch } from "vue";

export default defineComponent({
  name: "Watch",
  setup() {
    const num = ref<number>(1);
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface INums {
      newval: number;
      oldval: number;
    }
    const watnum: INums = {
      newval: 0,
      oldval: 0,
    };
    const warNums = reactive<INums>(watnum);
    const handlePlusNum = (): void => {
      num.value++;
    };
    watch(num, (newval, oldval): void => {
      console.log(newval, oldval);
      warNums.newval = newval;
      warNums.oldval = oldval;
    });
    onUpdated((): void => {
        console.log("页面更新了");
        console.log("监听驱动数据的更新");
    });
    return { num, handlePlusNum, warNums };
  },
});
</script>

<style lang="scss" scoped>
.contant {
  li {
    span {
      margin: 0 10px;
    }
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
