<template>
  <div>
      {{msg}}
      <button @click="changMsg">更改父组件</button>
  </div>
</template>

<script>
export default {
name:'MyDiv',
props:{
    msg:{
        default:'默认'
    }
},
data(){
    return{
        i:''
    }
},
methods:{
    changMsg(){
        this.$emit('update:msg',456)
    }
}
}
</script>

<style>

</style>