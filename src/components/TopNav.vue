<template>
  <div class="topNav">
    <div class="toggleIcon">
      <svg class="icon humberg " aria-hidden="true" @click="toggle">
        <use xlink:href="#icon-Humberg"></use>
      </svg>
    </div>
    <div class="logo">
      <router-link to="/" class="logoText">
        <svg class="icon dna">
          <use xlink:href="#icon-dna"></use>
        </svg>
        DNA UI
      </router-link>
    </div>
    <ul class="menu">
      <li><router-link to="/doc/intro">文档</router-link></li>
    </ul>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const menuVisible = inject<Ref<Boolean>>('menuVisible');
    const toggle = () => {
      menuVisible.value = !menuVisible.value;
    };
    return {toggle, menuVisible};
  }
};
</script>
<style lang="scss" scoped>
.topNav {
  height: 58px;
  background: #ffffff;
  display: flex;
  color: #213547;
  border-bottom: 1px solid #e7e7e8;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    display: flex;
    align-items: center;

    .logoText {
      padding: 16px;
      white-space: nowrap;
      display: flex;
      align-items: center;
      .dna {
        margin-right: 10px;
      }
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

  .toggleIcon {
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;

    &:active {
      color: #476582;
    }
  }

  @media (max-width: 720px) {
    .menu {
      display: none
    }
    .logo {
      margin: 0 auto
    }
    .icon {
      display: inline-block
    }
  }
}

.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.humberg{
  display:none;
}
</style>