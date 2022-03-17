<template>
    <button class="gulu-button" :class="classes" :disabled="disabled">
      <span v-if="loading" class="gulu-loadingIndicator"></span>
      <slot/>
    </button>
</template>
<script>
import {computed} from "vue";

export default {
props:{
  theme : {
    type:String,
    default:'button',
    validator(value){
      return ['link' , 'primary' , 'danger', 'dashed','button' , 'text'].indexOf(value) >= 0
    }
  },
  size : {
    type:String,
    default:'normal',
    validator(value){
      return ['small' , 'normal' , 'big' ].indexOf(value) >= 0
    }
  },
  disabled :{
    type:Boolean,
    default:false
  },
  loading: {
    type: Boolean,
    default: false
  }
},
  setup(props , context){
  const {theme , size } = props
    const classes = computed(()=>{
      return  {
          [`gulu-theme-${theme}`] : theme,
          [`gulu-size-${size}`] : size,
      }
    })
    return {classes}
  }

}
</script>
<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
$grey:#f5f5f5;
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
  &.gulu-theme-link{
    border-color: transparent;
    box-shadow: none;
    color: $blue;
    &:hover,&:focus{
      color: lighten($blue, 10%);
    }
  }
  &.gulu-theme-text{
    border-color: transparent;
    box-shadow: none;
    color: inherit;
    &:hover,&:focus{
      background: darken(white, 5%);;
    }
  }
  &.gulu-theme-danger {
  background: #ff4d4f;
    color:white ;
    border:1px solid  #ff4d4f;
    &:hover,&:focus{
      background: #ff7875;
    }
    &:active {
      background: #d9363e;
      border:1px solid   #d9363e;
    }
  }
  &.gulu-theme-dashed {
   border: 1px dashed #d9d9d9;
  }
  &.gulu-theme-primary{
    background: #1890ff;
    color:white;

    &:hover,&:focus{
  background: #40a9ff;
    }
    &:active {
      background: #096dd9;
    }
  }
    &.gulu-size-big {
      font-size: 24px;
      height: 48px;
      padding: 0 16px
    }
    &.gulu-size-small {
      font-size: 12px;
      height: 20px;
      padding: 0 4px;
    }
  &.gulu-theme-button ,&.gulu-theme-primary, &.gulu-theme-dashed  {
    &[disabled] {
      background:$grey ;
      cursor: not-allowed;
      color: #d9d9d9;
      border-color: #d9d9d9;
      &:hover {
        border-color: #d9d9d9;
      }
    }
  }
  &.gulu-theme-link, &.gulu-theme-text {
    &[disabled] {
      background: #ffffff;
      border-color: #ffffff;
      cursor: not-allowed;
      color: #d9d9d9;
    }
  }
  .gulu-loadingIndicator{
    width: 14px;
    height: 14px;
    display: inline-block;
    margin-right: 4px;
    border-radius: 8px;
    border-color: $blue $blue $blue transparent;
    border-style: solid;
    border-width: 2px;
    animation: gulu-spin 1s infinite linear;
  }
}
@keyframes gulu-spin {
  0%{transform: rotate(0deg)}
  100%{transform: rotate(360deg)}
}
</style>