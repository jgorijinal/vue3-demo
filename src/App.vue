<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from 'vue';
import {router} from './router';

export default {
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width >= 720)
    provide('menuVisible' , menuVisible)
    router.afterEach(() => {
      if(width < 720) {
        menuVisible.value = false
      }
    })
  }
}
</script>
