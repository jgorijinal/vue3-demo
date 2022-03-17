<template>
  <Button theme="primary" @click="toggle"> 打开Dialog</Button>
  <Dialog  v-model:visible="visible"  :ok="f1" :cancel="f2"/>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue'
import Button from '../lib/Button.vue'
import {ref} from 'vue';
export default {
  components:{Dialog , Button},
  setup(){
    const visible = ref(false)
    const toggle = ()=>{
      visible.value  = !visible.value
    }
    const f1 = ()=>{
      console.log(1)   //return false 可以不关闭
    }
    const f2 = ()=>{
      console.log(2)
    }
    return {toggle , visible , f1 ,f2}
  }
}
</script>
<style>

</style>