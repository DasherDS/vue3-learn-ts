<template>
  <div>
    <p>
      <span>获取vuex的值</span>
      <br />
      <span> {{ refstr }} </span>
    </p>
    <button @click="handleClick">点击获取</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { mapGetters, useStore } from "vuex";

export default defineComponent({
  setup() {
    const str = "现在是字符串";
    const refstr = ref<string>(str);
    const maps = mapGetters(["getTestNum"]);
    console.log(maps);
    // const comp = computed(() => {
    //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
    //   const store = useStore<any>();
    //   const datas = store.getters.getTestNum;
    //   return datas;
    // });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store = useStore<any>();
    const datas = store.getters.getTestNum;
    const handleClick = (): void => {
      refstr.value = datas.count;
    };
    return { handleClick, refstr };
  },
});
</script>

<style lang="scss" scoped></style>
