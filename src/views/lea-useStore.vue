<template>
  <div>
    <h1>useStore</h1>
    <div>
      <p><span class="txt">vuex的count值:</span> {{ state.count }}</p>
      <button @click="handleAdd">点击增加</button>
    </div>
    <div>
      <StoreVuex />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "vuex";
import StoreVuex from "../components/storevuex.vue";
export default defineComponent({
  name: "leauseStore",
  setup() {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const store = useStore<any>();
    const state = store.getters.getTestNum;
    const datas = store.state;
    const handleAdd = (): void => {
      console.log(state); //proxy
      console.log(datas); //proxy

      state.count++;
    };
    return { state, handleAdd };
  },
  components: {
    StoreVuex,
  },
});
</script>

<style lang="scss" scoped>
.txt {
  color: #c9483c;
}
</style>
