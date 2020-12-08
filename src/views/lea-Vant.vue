<template>
  <div>
    <h1>Vant</h1>
    <hr />
    <!-- <van-button
      color="linear-gradient(to right, #ff6034, #ee0a24)"
      @click="handlePopup"
    >
      渐变色按钮
    </van-button>

    <van-popup v-model:show="show" >
        <div class="popups">
            哈哈哈哈
        </div>
    </van-popup> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "Vantui",
  setup() {
    const show = ref<boolean>(false);
    const handlePopup = (): void => {
      show.value = true;
    };
    return { show, handlePopup };
  },
});
</script>

<style lang="scss" scoped>
.popups {
  width: 500px;
  height: 500px;
}
</style>
