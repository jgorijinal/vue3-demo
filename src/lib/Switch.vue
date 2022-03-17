<template>
  <button @click="toggle" :class="{checked : value}">
    <span v-if="value === true" class="checkedChildren">{{checkedChildren}}</span>
    <span class="circle"></span>
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
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
  height: $h;
  width: $h*2;
  border: none;
  background:#bfbfbf;
  border-radius: $h/2;
  position: relative;
  transition: all 0.2s;
  cursor: pointer;
  &:active {
    .circle {
      width: $h2 + 4px;
    }
    &.checked > .circle {
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
.circle{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:white;
  border-radius: $h2 / 2;
  transition: all 0.2s;
}
  button.checked{
    background: #1890ff;
  }
  button.checked > .circle {
    left: calc(100% - #{$h2} - 2px);
  }
button:focus{
  outline: none;
}
</style>