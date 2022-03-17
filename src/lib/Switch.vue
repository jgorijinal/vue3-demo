<template>
  <button class="gulu-switch" @click="toggle" :class="{'gulu-checked' : value}">
    <span v-if="value === true" class="checkedChildren">{{checkedChildren}}</span>
    <span class="gulu-circle"></span>
    <span v-if="value === false" class="unCheckedChildren">{{unCheckedChildren}}</span>
  </button>
</template>
<script lang="ts">
 export  default {
   props:{
     value: {
       type:Boolean,
       required:true,
     },
     checkedChildren:{
       type:String
     },
     unCheckedChildren:{
       type:String
     }
   },
   setup(props , context){
     const toggle = ()=>{
      context.emit('update:value' , !props.value)
     }
     return {toggle}
   }
 }
</script>
<style lang="scss" >
$h: 22px;
$h2: $h - 4px;
.gulu-switch{
  height: $h;
  width: $h*2;
  border: none;
  background:#bfbfbf;
  border-radius: $h/2;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  &:active {
    .gulu-circle {
      width: $h2 + 4px;
    }
    &.gulu-checked > .gulu-circle {
      left: calc(100% - #{$h2} - 2px);
      margin-left:-4px;
    }
  }
  span {
    transition: all 0.25s
  }
  .checkedChildren {
    color: white;
   display: flex;
    align-items: center;
    margin-left:8px ;
  }
  .unCheckedChildren{
    color: white;
    display: flex;
    align-items: center;
    margin-left: 24px;
  }
}
.gulu-circle{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: $h2 / 2;
  transition: all 0.2s;
}
.gulu-switch.gulu-checked{
    background: #1890ff;
  }
.gulu-switch.gulu-checked > .gulu-circle {
    left: calc(100% - #{$h2} - 2px);
  }
.gulu-switch:focus{
  outline: none;
}
</style>