<demo>
常规使用
</demo>

<template>
  <Button theme="primary" @click="toggle"> 打开Dialog </Button>
  <Dialog  v-model:visible="visible"  :ok="f1" :cancel="f2">
    <template v-slot:title>这里是标题</template>
    <template v-slot:content>这里是内容</template>
  </Dialog>
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
      console.log('ok')
    }
    const f2 = ()=>{
      console.log('cancel')
    }
    return {toggle , visible , f1 ,f2 }
  }
}
</script>