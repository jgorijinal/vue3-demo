<template>
  <Switch v-model:value="bool" checkedChildren="开" unCheckedChildren="关"/>
</template>
<script>
import Switch from "../lib/Switch.vue";
import {ref} from "vue";
export default  {
  components:{Switch},
  setup(){
    const bool = ref(false)
    return {bool}
  }
}
</script>
<style>

</style>