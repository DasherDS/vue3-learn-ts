<template>
  <div>
    <h1>element3</h1>
    <hr />
    <div class="table">
      <el-table :data="datas" border style="width:100%">
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="age" label="年龄"></el-table-column>
        <el-table-column prop="sex" label="性别"></el-table-column>
        <el-table-column prop="msg" label="信息"></el-table-column>
        <el-table-column v-slot="scope" label="操作">
          <el-button type="text" @click="handleClick(scope.row)" size="small"
            >查看</el-button
          >
        </el-table-column>
      </el-table>
    </div>

    <el-dialog
      title="信息展示"
      :visible.sync="dialogVisible"
      v-model:visible="dialogVisible"
      width="30%"
      center
    >
      <template v-slot:default>
        <el-tag type="success"> {{ rowDialogInfo.name }} </el-tag>
        <el-tag type="info">{{ rowDialogInfo.age }}</el-tag>
        <el-tag type="warning">{{ rowDialogInfo.sex }}</el-tag>
        <el-tag type="danger">{{ rowDialogInfo.msg }}</el-tag>
      </template>
      <template v-slot:footer>
        <span class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"
            >取消</el-button
          >
          <el-button type="success" @click="handleConfirm">确认</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
export default defineComponent({
  name: "Vantui",
  setup() {
    const dialogVisible = ref<boolean>(false);
    let rowDialogInfo!: IPeople;
    // eslint-disable-next-line @typescript-eslint/interface-name-prefix
    interface IPeople {
      name: string;
      age: number;
      sex: number | string;
      msg: string;
    }
    const tabData = [
      {
        name: "张三",
        age: 22,
        sex: 1,
        msg: "asda啥都想吃as",
      },
      {
        name: "李四",
        age: 42,
        sex: 0,
        msg: "as小商务大厦das",
      },
      {
        name: "王五",
        age: 62,
        sex: 0,
        msg: "asd不是的撒as",
      },
      {
        name: "赵六",
        age: 18,
        sex: 1,
        msg: "asdGV额VCD是as",
      },
    ];
    const handleClick = (row: IPeople): void => {
      rowDialogInfo = row;
      console.log(rowDialogInfo,456446);
      
      dialogVisible.value = true;

      console.log(row);
    };
    const datas = computed(() => {
      const list = JSON.parse(JSON.stringify(tabData));
      list.forEach((item: IPeople) => {
        if (item.sex == 1) {
          item.sex = "男";
        }
        if (item.sex == 0) {
          item.sex = "女";
        }
      });
      return list;
    });
    const handleConfirm = (): void => {
      console.log("yes");
      dialogVisible.value = false;
    };
    return { datas, handleClick, dialogVisible, handleConfirm, rowDialogInfo };
  },
});
</script>

<style lang="scss" scoped>
.table {
  width: 800px;
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(230, 228, 228, 0.075);
}
</style>
