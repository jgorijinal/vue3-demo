<template>
  <div class="gulu-tab-title">{{title}}</div>
  <div class="gulu-tab-content">
    <slot></slot>
  </div>

</template>
<script lang="ts">
export default  {
props:{
  title:{
    type:String,
    required:true
  }
}
}
</script>
<style lang="scss">

</style>