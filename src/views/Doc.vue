<template>
   <TopNav />
  <div class="content">
    <aside>
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

<script>
import TopNav from '../components/TopNav.vue'
export default {
  components:{TopNav}
}
</script>
<style lang="scss">
aside {
  background: white;
  width: 150px;
  padding: 70px 16px 16px 16px;
  position: fixed;
  top: 0;
  left: 0;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
      color: #8a8989;
      &:hover {
        color: #213547;
      }
    }
  }
}
</style>