<template>
 <h1>实例 theme</h1>
  <Button @click="onClick" @mouseover="onClick" @focus="onClick" >Default</Button>
 <Button theme="link">Link</Button>
  <Button theme="text">Text</Button>
  <Button theme="danger">Danger</Button>
  <Button theme="dashed">Dashed</Button>
  <Button theme="primary">Primary</Button>
  <h1>实例 size</h1>
  <Button size="small">Default</Button>
  <Button>Default</Button>
  <Button size="big">Default</Button>
  <h1>实例 disabled</h1>
  <Button >Default</Button>
  <Button disabled>Default(disabled)</Button>
  <hr>
  <Button theme="primary">Primary</Button>
  <Button theme="primary" disabled>Primary(disabled)</Button>
  <hr>
  <Button theme="dashed">Dashed</Button>
  <Button theme="dashed" disabled>Dashed(disabled)</Button>
  <hr>
  <Button theme="link">Link</Button>
  <Button theme="link" disabled>Link(disabled)</Button>
  <hr>
  <Button theme="text">Text</Button>
  <Button theme="text" disabled>Text(disabled)</Button>
  <h1>实例 loading</h1>

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