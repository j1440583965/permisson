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
          <span style="margin-left: 10px">{{
            scope.row.result | filterState
          }}</span>
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
import { finalList, upload, createFile, uploadFile } from "@/server/api";
import axios from "axios";
import { mapState } from "vuex";
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
  computed: {
    ...mapState("userInfo", ["token"]),
  },
  methods: {
    async upload(index, row) {
      console.log(index, row.id);
      try {
        // row.id
        let { data } = await upload({ id: 170 });
        console.log(data);
        this.uploadFile(data.url);
      } catch (error) {
        console.log(error);
      }
    },
    async uploadFile(url) {
      try {
        let { data } = await axios({
          url: "http://139.196.42.209:5004" + url,
          headers: { token: this.token },
          responseType: "blob",
        });
        console.log(data);
         if (window.navigator && window.navigator.msSaveOrOpenBlob) {
            let blob = new Blob([data])
            window.navigator.msSaveOrOpenBlob(blob, '数据导出.docx')
          } else {
          /* 火狐谷歌的文件下载方式 */
            var blob = new Blob([data])
            var downloadElement = document.createElement('a')
            var href = window.URL.createObjectURL(blob)
            downloadElement.href = href
            downloadElement.download =url.substring(url.lastIndexOf('/')+1)
            document.body.appendChild(downloadElement)
            downloadElement.click()
            document.body.removeChild(downloadElement)
            window.URL.revokeObjectURL(href)
          }
       
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
        let { data } = await finalList({
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
