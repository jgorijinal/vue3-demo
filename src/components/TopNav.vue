<template>
  <div class="topNav">
    <div class="logo">DNA UI</div>
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