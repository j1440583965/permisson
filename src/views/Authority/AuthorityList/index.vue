<template>
  <div>
    <el-table
      :data="
        tableData.filter(
          (data) =>
            !search || data.account.toLowerCase().includes(search.toLowerCase())
        )
      "
      style="width: 100%"
    >
      <el-table-column label="账号" prop="account"> </el-table-column>
      <el-table-column label="创建者" prop="creator"> </el-table-column>
      <el-table-column label="密码" prop="password"> </el-table-column>
      <el-table-column label="创建时间" prop="reg_time"> </el-table-column>
      <el-table-column label="角色信息" prop="role_name"> </el-table-column>
      <el-table-column align="right">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >Edit</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >Delete</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { userList } from "@/server/api";
export default {
  data() {
    return {
      tableData: [
       
      ],
      search: "",
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      try {
        let {data} = await userList();
        console.log(data);
        this.tableData = data
      } catch (error) {}
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
  },
};
</script>

<style></style>
