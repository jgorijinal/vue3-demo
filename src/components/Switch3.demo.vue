<demo>
支持 disabled
</demo>

<template>
  <div class="box">
    <Switch v-model:value="bool1" disabled/>
    <Switch v-model:value="bool2" disabled/>
  </div>
</template>

<script>
import Switch from "../lib/Switch.vue";
import {ref} from "vue";
export default {
  components: {
    Switch
  },
  setup() {
    const bool1 = ref(true)
    const bool2 = ref(false)
    return {bool1, bool2}
  }
}
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  .gulu-switch {
    margin-right: 10px;
  }
}
</style>