<demo>
支持 theme
</demo>

<template>
  <div>
    <Button @click="onClick" @mouseover="onClick" @focus="onClick">Default</Button>
    <Button theme="link">Link</Button>
    <Button theme="text">Text</Button>
    <Button theme="danger">Danger</Button>
    <Button theme="dashed">Dashed</Button>
    <Button theme="primary">Primary</Button>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components:{Button},
  setup(){
    const onClick = ()=>{
      console.log('hello')
    }
    return { onClick }
  }
}
</script>