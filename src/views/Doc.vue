<template>
   <TopNav />
  <div class="content">
    <Transition name="slide">
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
    </Transition>
    <main>
      主内容
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue'
import {inject, Ref} from 'vue';

export default {
  components:{TopNav},
  setup(){
    const menuVisible = inject<Ref<Boolean>>('menuVisible')
    const toggle = ()=>{
      menuVisible.value =  !menuVisible.value
    }
    window.addEventListener("resize", () => {
      const width = document.documentElement.clientWidth
      if(width > 720) {
        menuVisible.value = true
      }else {
        menuVisible.value = false
      }

    });
    return {toggle,menuVisible}
  },
}
</script>
<style lang="scss">
.content {
  display: flex;
}
aside {
  background: white;
  width: 200px;
  height: 100vh;
  border-right: 1px solid #e7e7e8;
  padding: 10px 16px 16px 16px;
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
@media (max-width: 720px) {
  aside {
    position: fixed;
    top: 0;
    left: 0;
    padding: 68px 16px 16px 16px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}
.slide-enter-from{
  transform: translateX(-100%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>