<template>
  <div>
    <!-- {{(tableData[0]&&tableData[0].result)|filterState}} -->
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search ||
            data.loan_name.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="办理人" prop="approve"> </el-table-column>
      <el-table-column label="贷款人" prop="loan_name"> </el-table-column>
      <el-table-column label="身份证" prop="loan_card"> </el-table-column>
      <el-table-column label="贷款人" prop="loan_name"> </el-table-column>
      <el-table-column label="申请时间" prop="modified"> </el-table-column>
      <el-table-column label="状态">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.result|filterState }}</span>
        </template>
      </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="upload(scope.$index, scope.row)"
            >下载合同</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="create(scope.$index, scope.row)"
            >生成合同</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { firstList, upload, createFile } from "@/server/api";
export default {
  data() {
    return {
      pageNo: 1,
      pageSize: 10,
      tableData: [],
      search: "",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async upload(index, row) {
      console.log(index, row.id);
      try {
        let res = await upload({ id: row.id });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },
    async create(index, row) {
      console.log(index, row.id);
      try {
        let res = await createFile({ id: row.id });
        console.log(res);
      } catch (error) {
        console.log(error);
      }
    },

    async getList() {
      try {
        let { data } = await firstList({
          pageNo: this.pageNo,
          pageSize: this.pageSize,
          // name:''
        });
        this.tableData = data.data.data;
        console.log(data);
      } catch (error) {}
    },
  },
};
</script>

<style></style>
