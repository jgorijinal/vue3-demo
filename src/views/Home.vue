<template>
<div class="topNav">
  <div class="logo">LOGO</div>
  <ul class="menu">
    <li>菜单1</li>
    <li>菜单2</li>
  </ul>
</div>
  <div class="banner">
    <h1>DNA UI</h1>
    <h1>一个基于Vue3的UI库</h1>
    <p class="actions">
      <a href="">Github</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.topNav {
  background: pink;
  display: flex;
  padding: 16px;
  color: #213547;
  border-bottom: 1px solid #e7e7e8;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
}
</style>