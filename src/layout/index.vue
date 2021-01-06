<template>
  <el-container>
      <MyAside/>
    <el-container>
      <MyHeader/>
      <MyMain/>
    </el-container>
  </el-container>
</template>

<script>
import {MyAside,MyHeader,MyMain} from './components'
export default {
    components:{
        MyAside,
        MyHeader,
        MyMain
    }
};
</script>

<style lang='scss' >
.el-container{
    height: 100%;
    &>.el-container{
        flex-direction: column;
    }
}
.el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-header {
    border-bottom: 1px solid #eee;
   
  }
  
  .el-aside {
    // background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    // background-color: #E9EEF3;
    color: #333;
    text-align: center;
    // line-height: 160px;
  }
  

  
  
</style>
