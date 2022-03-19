<demo>
  一键打开 Dialog
</demo>

<template>
    <Button @click="onClick"> 一句话打开Dialog</Button>
</template>
<script>
import {openDialog} from "../lib/openDialog";
import Button from "../lib/Button.vue";
export default {
  components:{Button},
  setup() {
    const onClick = () => {
      openDialog({
        title: '标题',
        content: '内容',
        ok: () => {
          console.log('ok')
        },
        cancel: () => {
          console.log('cancel')
        },
      })
    }
    return {onClick}
  }
}
</script>
