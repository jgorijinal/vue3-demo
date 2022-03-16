<template>
  <div class="topNav">
    <div class="logo"><router-link to="/" class="logoText">DNA UI</router-link></div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.topNav {
  background: #ffffff;
  display: flex;
  color: #213547;
  border-bottom: 1px solid #e7e7e8;
  position: relative;
  z-index:10;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;
    .logoText {
      padding: 16px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      padding: 16px 0;
    }
  }
}
</style>