<template>
  <Demo :component="Switch1Demo"></Demo>
  <Demo :component="Switch2Demo"></Demo>
  <Demo :component="Switch3Demo"></Demo>
</template>
<script>
import Demo from './Demo.vue'
import Switch1Demo from './Switch1.demo.vue'
import Switch2Demo from './Switch2.demo.vue'
import Switch3Demo from './Switch3.demo.vue'
export default  {
  components:{ Switch1Demo , Demo , Switch2Demo , Switch3Demo},
  setup(){
    return {Switch1Demo , Switch2Demo , Switch3Demo}
  }
}
</script>
<style>

</style>