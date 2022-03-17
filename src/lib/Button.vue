<template>
    <button class="gulu-button" :class="`gulu-theme-${theme}`">
      <slot/>
    </button>
</template>
<script>
export default {
props:{
  theme : {
    type:String,
    default:'button',
    validator(value){
      return ['link' , 'primary' , 'danger', 'dashed','button'].indexOf(value) >= 0
    }
  }
}

}
</script>
<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.gulu-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
 transition: all 0.25s ;
  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:active {
  color: #096dd9;
    border-color: #096dd9;
}
  &:focus {
    outline: none;
  }
  &::-moz-focus-inner {
    border: 0;
  }
}
</style>