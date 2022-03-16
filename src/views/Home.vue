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
</template>

<script lang="ts">
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>
<style lang="scss" scoped>
.banner {
  padding: 100px 0;
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
    padding: 8px 0;

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

</style>