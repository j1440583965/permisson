<template>
  <el-aside width="200px">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :style="{height:'100%'}"
      router
      exact
    >
    <MenuItem v-for='item in MenuList' :key="item.path" :MenuItem='item'/>
     
    </el-menu>
  </el-aside>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "my-aside",
  data() {
    return {
      MenuList: [
       
      ],
    };
  },
  computed:{
    ...mapState('userInfo',['routerList'])
  },
  mounted(){
    console.log(this.routerList)
    this.MenuList =this.routerList[0].children.filter(item=>item.name!=='404')
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style></style>
