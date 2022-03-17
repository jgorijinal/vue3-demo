<template>
 <h1>实例</h1>
  <Button @click="onClick" @mouseover="onClick" @focus="onClick" >Default</Button>
 <Button theme="link">Link</Button>
  <Button theme="text">Text</Button>
  <Button theme="danger">Danger</Button>
  <Button theme="dashed">Dashed</Button>
  <Button theme="primary">Primary</Button>
  <h1>实例</h1>
  <Button size="small">Default</Button>
  <Button>Default</Button>
  <Button size="big">Default</Button>
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