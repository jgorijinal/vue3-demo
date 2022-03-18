<template>
  <TopNav/>
  <div class="banner">
    <h1 class="title">DNA UI</h1>
    <h1 class="description">一个Vue3 UI库</h1>
    <p class="actions">
      <a href="">Github</a>
      <router-link to="/doc">开始</router-link>
    </p>
  </div>
  <div class="features">
    <ul>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-Vue"></use>
        </svg>
        <div class="wrapper">
          <h2>
            基于 Vue 3
          </h2>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </div>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-ts"></use>
        </svg>
        <div class="wrapper">
          <h2>基于 TypeScript </h2>
          <p>源代码采用TypeScript书写（非严格检查）</p>
        </div>
      </li>
      <li>
        <svg class="icon">
          <use xlink:href="#icon-light"></use>
        </svg>
        <div class="wrapper">
          <h2>代码易读</h2>
          <p>每个组件的源代码都读起来极其简洁</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>
<style lang="scss" scoped>
.banner {
  padding:140px 0 0 0 ;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #ffffff;
  h1 {
    line-height: 1.25;
    font-weight: 900;
    font-size: 80px;
  }
  .title {
    color: #4eb5b8;
    margin-bottom:20px ;
    background: -webkit-linear-gradient(315deg, #4ed398 25%,#647eff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .description {
    color: #213547;
  }
  @media (min-width: 768px) and  (max-width: 960px){
    h1 {
      font-size: 68px;
    }
  }
  @media (min-width: 370px) and  (max-width: 768px){
    h1 {
      font-size: 50px;
    }
  }
  @media (max-width: 370px){
    h1 {
      font-size: 36px;
    }
  }
  > .actions {
    margin-top:20px;
    padding-top: 20px;

    a {
      transition: all 0.3s;
      margin: 0 16px;
      background: #f1f1f1;
      display: inline-block;
      border-radius: 4px;
      line-height: 1.4;
      padding: 8px 18px;
      font-size: 16px;
      color: #476582;
      &:hover {
        background: #e5e5e5;
      }
    }
  }
}
.features {
  ul {
    width: 375px;
    margin: 64px auto;
    @media(min-width: 800px) {
      width: 800px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    @media (min-width:1200px){
      width: 1200px;
      display: flex;
      justify-content: space-around;

    }

    li {
      display: flex;
      align-items: center;
      margin: 30px 0;
      width: 375px;
     color:#213547;
      .wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
    }

    svg {
      width: 64px;
      height: 64px;
      margin-right: 10px;
    }
  }
}
</style>