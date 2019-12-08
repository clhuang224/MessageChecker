<template>
  <div class="home">
    <header class="header">
      <Menu />
      <h2 class="title">防假小精靈</h2>
    </header>
    <main class="main">
    <img src="../assets/img/home-content.png" width="100%">
    </main>
  </div>
</template>

<script>
import Menu from "./Menu.vue";
export default {
  name: "headerComponent",
  components: {
    Menu
  },
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.header{
    display: flex;
    align-items: center;
    background-color: #F4C026;
    height: 60px;
}

.header .title{
    margin-left: 10px;
}
</style>
