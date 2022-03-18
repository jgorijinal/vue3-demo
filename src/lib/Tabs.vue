<template>
  <div class="gulu-tabs">
    <div class="gulu-tabs-nav">
      <div  @click="select(t)" class="gulu-tabs-nav-item" :class="{'selected':t === selected}"
            v-for="(t,index) in titles" :key="index"
            :ref= "el =>{ if(t === selected) selectedItem = el }"
      >{{t}}</div>
      <div ref="indicator" class="gulu-tabs-nav-indicator"></div>
    </div>
    <div class="gulu-tabs-content">
      <component class="gulu-tabs-content-item" :class="{'selected' : c.props.title === selected}" v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>
<script lang="ts">
import Tab from './Tab.vue'
import {computed, onMounted, onUpdated, ref, watchEffect} from 'vue';
export default  {
  props:{
    selected:{
      type:String,
      required:true
    }
  },
  setup(props , context){
    const defaults = context.slots.default()
    defaults.forEach(tab => {
      if(tab.type !== Tab) {
        throw new Error ('Tabs的子标签必须是Tab')
      }
    })
   const titles = defaults.map (tag => {
     return tag.props.title
   })
    const select = (title:string)=>{
      context.emit('update:selected' , title)
    }
    const indicator = ref(null)
    const selectedItem = ref<HTMLDivElement>(null)
    // const x = ()=>{
    //   const {width} =  selectedItem.value.getBoundingClientRect()
    //   indicator.value.style.width = width + 'px'
    //   const left = selectedItem.value.offsetLeft
    //   indicator.value.style.left = left + 'px'
    // }
    // onMounted(()=> {              // ref onMounted之后生效 , 数据绑定都放在 mount后面
    //   x()
    // })
    // onUpdated(() => {
    //  x()
    // })
    //
    onMounted( ()=>{
      watchEffect(()=>{
        const {width} =  selectedItem.value.getBoundingClientRect()
        indicator.value.style.width = width + 'px'
        const left = selectedItem.value.offsetLeft
        indicator.value.style.left = left + 'px'
      })
    })
    return {defaults , titles , select ,selectedItem, indicator}
  }
}
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.gulu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 8px;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 0.25s ease;
    }

  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>