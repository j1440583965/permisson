<template>
  <el-header>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumbList"
        :key="item.path"
        :to="{ path: item.path }"
        >{{ item.title }}</el-breadcrumb-item
      >
    </el-breadcrumb>
    <button @click="logout">退出登录</button>
  </el-header>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("userInfo", ["removeUserInfo"]),
    logout() {
      this.removeUserInfo();
      this.$router.push({path:'/login'});
     
      // setTimeout(()=>{
      //   window.location.reload();
      // },100)
      window.location.reload();
    },
  },
  data() {
    return {
      breadcrumbList: [],
    };
  },
  watch: {
    // $route(to) {
    //   let target = to.matched.filter((item) => item.path !== "/home");
    //   this.breadcrumbList = target.map((item) => {
    //     return {
    //       path: item.path ? item.path : "/home",
    //       title: item.meta.title ? item.meta.title : "首页",
    //     };
    //   });
    // },
    $route: {
      handler(to) {
        let target = to.matched.filter((item) => item.path !== "/home");
        this.breadcrumbList = target.map((item) => {
          return {
            path: item.path ? item.path : "/home",
            title: item.meta.title ? item.meta.title : "首页",
          };
        });
      },
      immediate:true
    },
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
