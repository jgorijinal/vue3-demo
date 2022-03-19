<template>
  <Switch v-model:value="bool1"/>
  <hr>
  <Switch v-model:value="bool2" checkedChildren="开" unCheckedChildren="关"/>
  <Switch v-model:value="bool3" checkedChildren="1" unCheckedChildren="0"/>
  <hr>
  <Switch v-model:value="bool4" disabled/>
  <Switch v-model:value="bool5" disabled/>

</template>
<script>
import Switch from "../lib/Switch.vue";
import {ref} from "vue";
export default  {
  components:{Switch},
  setup(){
    const bool1 = ref(true)
    const bool2 = ref(true)
    const bool3 = ref(true)
    const bool4 = ref(false)
    const bool5 = ref(true)
    return {bool1 , bool2 , bool3 , bool4 , bool5}
  }
}
</script>
<style>

</style>