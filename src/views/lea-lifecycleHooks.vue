<template>
  <div>
    <h1>生命周期</h1>
    <hr>
    <div>
      <p> {{msg}} </p>
      <button @click="handleClick">点击弹出窗口</button>
      <div v-if="dialogVisivle" class="dialog">
        <button @click="handleShow"> 出现文字 </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onBeforeUpdate,
  onMounted,
  onUnmounted,
  onUpdated,
  ref,
} from "vue";

export default defineComponent({
  name: "lifecycle",
  setup() {
    const msg = ref<string>("");
    const dialogVisivle = ref<boolean>(false);
    const handleClick = (): void => {
      dialogVisivle.value = !dialogVisivle.value;
    };
    const handleShow = (): void => {
      msg.value = "dialog的按钮被点击了";
    };

    onBeforeMount((): void => {
      console.log("挂载前执行");
    });
    onMounted((): void => {
      console.log("挂载后");
    });
    onBeforeUpdate((): void => {
      console.log("更新前");
    });
    onUpdated((): void => {
      console.log("更新后");
    });
    onBeforeUnmount((): void => {
      console.log("销毁前");
    });
    onUnmounted((): void => {
      console.log("销毁后");
    });
    return { handleClick, dialogVisivle, msg,handleShow };
  },
});
</script>
<style lang="scss" scoped>
.dialog{
    width: 300px;
    height: 30px;
    margin: 30px auto;
    border: 1px solid #000;
}
</style>