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

</style>