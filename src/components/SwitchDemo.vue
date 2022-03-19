<template>
  <Switch v-model:value="bool1"/>
  <hr>
  <Switch v-model:value="bool2" checkedChildren="开" unCheckedChildren="关"/>
  <Switch v-model:value="bool3" checkedChildren="1" unCheckedChildren="0"/>
  <hr>
  <Switch v-model:value="bool4" disabled/>

</template>
<script>
import Switch from "../lib/Switch.vue";
import {ref} from "vue";
export default  {
  components:{Switch},
  setup(){
    const bool1 = ref(false)
    const bool2 = ref(false)
    const bool3 = ref(false)
    const bool4 = ref(false)
    return {bool1 , bool2 , bool3 , bool4}
  }
}
</script>
<style>

</style>