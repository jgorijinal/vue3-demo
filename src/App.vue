<template>
  <router-view></router-view>
</template>

<script lang="ts">
import {provide, ref} from 'vue';

export default {
  setup(){
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width >= 720)
    provide('menuVisible' , menuVisible)
  }
}
</script>
