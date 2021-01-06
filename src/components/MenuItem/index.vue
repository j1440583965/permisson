<template>
    <el-submenu :index="MenuItem.path" v-if="MenuItem.children">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{MenuItem.meta.title}}</span>
      </template>
      <!-- <MenuItem :MenuItem='MenuItem.children'/> -->
    <MenuItem v-for='item in MenuItem.children' :key="item.path" :MenuItem='item'/>

    </el-submenu>
     <el-menu-item :index="MenuItem.path" v-else>
        <i class="el-icon-menu"></i>
        <span slot="title">{{MenuItem.meta&&MenuItem.meta.title}}</span>
      </el-menu-item>
</template>

<script>
export default {
  name: "MenuItem",
  props: ["MenuItem"],
};
</script>

<style></style>
