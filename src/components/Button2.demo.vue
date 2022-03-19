<demo>
支持 size
</demo>
<template>
  <div>
    <div class="box">
      <Button size="small">小小小</Button>
      <Button>普普通</Button>
      <Button size="big">大大大</Button>
    </div>
    <div class="box">
      <Button size="small" theme="primary">小小小</Button>
      <Button theme="primary">普普通</Button>
      <Button theme="primary" size="big">大大大</Button>
    </div>
    <div class="box">
      <Button size="small" theme="danger">小小小</Button>
      <Button theme="danger">普普通</Button>
      <Button size="big" theme="danger">大大大</Button>
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