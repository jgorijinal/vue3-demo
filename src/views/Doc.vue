<template>
  <TopNav/>
  <div class="content">
    <Transition name="slide">
      <aside v-if="menuVisible">
        <h1>文档</h1>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
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
    <main class="main">
      <router-view/>
    </main>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {TopNav},
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible');
    const toggle = () => {
      menuVisible.value = !menuVisible.value;
    };
    let canUse = true
      window.addEventListener('resize', () => {
        if (canUse) {
          const width = document.documentElement.clientWidth;
          console.log(width)
          if (width >= 720) {
            menuVisible.value = true;
          } else {
            menuVisible.value = false;
          }
        }
        canUse = false
        setTimeout(()=>{
          canUse = true
        } , 400)
      });


    return {toggle, menuVisible};
  },
};
</script>
<style lang="scss">
.content {
  display: flex;
  flex-grow: 1;
  height: 100vh;
  > aside {
    flex-shrink: 0;
  }
  > .main {
    margin-top: 58px;
    flex-grow: 1;
    padding: 16px;
    background: white;
    overflow: auto;
  }
}

aside {
  background: white;
  width: 200px;
  height:  100%;
  border-right: 1px solid #e7e7e8;
  position: fixed;
  top: 0;
  left: 0;
  padding: 68px 16px 16px 16px;
  z-index: 1;
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
          color: #1b2f41;
        }
        &.router-link-active{
          font-weight:bold ;
          color:  #42b883;
        }
      }
    }
  }
}
@media (min-width: 737px) {
  .main { margin-left: 200px}
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}

.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>