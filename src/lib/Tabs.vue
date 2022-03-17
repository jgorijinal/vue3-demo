<template>
  <component :is="defaults[0]"></component>
  <component :is="defaults[1]"></component>
</template>
<script lang="ts">
import Tab from './Tab.vue'
export default  {
  setup(props , context){
    const defaults = context.slots.default()
    defaults.forEach(tab => {
      if(tab.type !== Tab) {
        throw new Error ('Tabs的子标签必须是Tab')
      }
    })
    return {defaults}
  }
}
</script>
<style lang="scss">

</style>