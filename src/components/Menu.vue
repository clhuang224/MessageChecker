<template>
  <div class="menu">
    <button class="menu-button" @click="menuOn = !menuOn">選單按鈕</button>
    <aside class="menu-aside" v-if="menuOn === true">
      <div class="menu-title">
        <button class="menu-button" @click="menuOn = !menuOn">選單按鈕</button>
        <h2>Menu</h2>
      </div>
      <div>選單內容</div>
    </aside>
  </div>
</template>

<script>
export default {
  name: "menuComponent",
  props: {},
  data() {
    return {
      menuOn: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.menu {
  position: relative;
}
.menu-aside {
  position: fixed;
  background-color: #ea7041;
  width: 280px;
  top: 0;
  bottom: 0;
}
.menu-title{
  height: 60px;
  background-color: #E64E13;
  color: #FFF;
  display: flex;
  align-items: center;
}

.menu-title h2{
  margin-left: 10px;
}
</style>
