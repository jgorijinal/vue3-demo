<demo>
支持 disabled
</demo>
<template>
  <div>
    <div class="box">
      <Button >Default</Button>
      <Button disabled>Default(disabled)</Button>
    </div>
    <div class="box">
      <Button theme="primary">Primary</Button>
      <Button theme="primary" disabled>Primary(disabled)</Button>
    </div>
    <div class="box">
      <Button theme="dashed">Dashed</Button>
      <Button theme="dashed" disabled>Dashed(disabled)</Button>
    </div>
    <div class="box">
      <Button theme="link">Link</Button>
      <Button theme="link" disabled>Link(disabled)</Button>
    </div>
    <div class="box" >
      <Button theme="text">Text</Button>
      <Button theme="text" disabled>Text(disabled)</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button
  }
}
</script>
<style lang="scss" scoped>
.box {
  margin: 10px 0;
}
</style>