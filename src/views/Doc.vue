<template>
   <TopNav />
  <div class="content">
    <aside v-if="menuVisible">
      <h2>组件列表</h2>
       <ol>
         <li>
           <router-link to="/doc/switch">Switch</router-link>
         </li>
         <li>
           <router-link to="/doc/button">Button</router-link>
         </li>
         <li>
           <router-link to="/doc/dialog">Dialog</router-link>
         </li>
         <li>
           <router-link to="/doc/tabs">Tabs</router-link>
         </li>
       </ol>
    </aside>
    <main>
      主内容
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {inject, Ref} from "vue";

export default {
  components:{TopNav},
  setup(){
    const menuVisible = inject<Ref<Boolean>>('menuVisible')
    const toggle = ()=>{
      menuVisible.value =  !menuVisible.value
    }
    return {toggle,menuVisible}
  }
}
</script>
<style lang="scss">
aside {
  background: white;
  width: 200px;
  padding: 68px 16px 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      a {
        transition: all 0.25s;
        display: inline-block;
        padding: 4px 0;
        width: 100%;
        color: #858484;
        &:hover {
          color: #213547;
        }
      }
    }
  }
}
</style>