<template>
  <div class="demo">
    <h2>{{component.__sourceCodeTitle}}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <Button v-if="!codeVisible" @click="toggle">查看代码</Button>
      <Button v-if="codeVisible" @click="toggle">隐藏代码</Button>
    </div>
    <div class="demo-code"  ref="wrapper">
      <pre ref="code" class="language-html" v-html="Prism.highlight(component.__sourceCode, Prism.languages.html, 'html')" />
    </div>
  </div>
</template>

<script lang="ts">
import Button from '../lib/Button.vue'
import 'prismjs';
import 'prismjs/themes/prism-tomorrow.css'

const Prism = (window as any).Prism
export default {
  components:{
    Button
  },
  props: {
    component: Object
  },
  setup() {
    return {
      Prism
    }
  },
  data(){
    return {
      codeVisible:false
    }
  },
  methods:{
    toggle(){
      this.codeVisible = !this.codeVisible
    }
  },
  watch:{
    codeVisible(){
      if (this.codeVisible) {
        this.$refs.wrapper.style.height = this.$refs.code.getBoundingClientRect().height + 'px'
      }else {
        this.$refs.wrapper.style.height = 0 + 'px'
      }
    }
  }

}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;
.demo {
  border: 1px solid $border-color;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  margin: 16px 0 32px;
  >h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }
  &-component {
    padding: 16px;
  }
  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }
  &-code {
    height: 0;
    overflow: hidden;
    transition: all 0.25s;
    >pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}

</style>