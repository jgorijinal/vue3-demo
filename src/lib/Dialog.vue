<template>
  <Transition>
    <div v-if="visible">
      <Teleport to="body">
      <div class="gulu-dialog-overlay" @click="onClickOverlay"></div>
      <div class="gulu-dialog-wrapper">
        <div class="gulu-dialog">
          <header><slot name="title"></slot> <span class="gulu-dialog-close" @click="close"></span></header>
          <main>
            <slot name="content"></slot>
          </main>
          <footer>
            <Button theme="primary" @click="onOk">确定</Button>
            <Button @click="onCancel">取消</Button>
          </footer>
        </div>
      </div>
      </Teleport>
    </div>
  </Transition>
</template>
<script lang="ts">
import Button from './Button.vue';

export default {
  components: {Button},
  props: {
    visible: {
      type: Boolean,
    },
    closeOnClickOverlay:{
      type:Boolean,
      default:true
    },
    ok:{
      type:Function,
    },
    cancel:{
      type:Function,
    }
  },
  setup(props,context){
    const close = ()=>{
      context.emit('update:visible' , false)
    }
    const onClickOverlay = ()=>{
      if(props.closeOnClickOverlay){
          close()
      }
    }
    const onOk = ()=>{
      if(props.ok && props.ok() !== false) {
        close()
      }
    }
    const onCancel = ()=>{
      if( props.cancel && props.cancel() !== false) {
        close()
      }
    }
    return {close , onClickOverlay , onOk , onCancel}
  }
};
</script>
<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;

.gulu-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 20em;
  max-width: 90%;

  &-overlay {
    position: fixed;
    top: 58px;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }

  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }

  > header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }

  > main {
    padding: 12px 16px;
  }

  > footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }

  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }

    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }

    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>