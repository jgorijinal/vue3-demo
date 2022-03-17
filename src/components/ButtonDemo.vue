<template>
 <h1>实例</h1>
  <Button @click="onClick" @mouseover="onClick" @focus="onClick" >我是按钮</Button>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
 export default {
   components:{Button},
   setup(){
     const onClick = ()=>{
       console.log('hi')
     }
     return { onClick }
   }
 }
</script>
<style>

</style>