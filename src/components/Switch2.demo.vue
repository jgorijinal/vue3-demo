<demo>
支持 text
</demo>

<template>
  <div class="box">
    <Switch v-model:value="bool1" checkedChildren="开" unCheckedChildren="关"/>
    <Switch v-model:value="bool2" checkedChildren="1" unCheckedChildren="0"/>
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
    const bool2 = ref(true)
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