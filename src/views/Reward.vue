<template>
  <div class="reward">
    <Header :title="title" />
    <main class="main" :style="{height: clientHeight + 'px'}">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "rewardComponent",
  components: {
    Header
  },
  props: ['list'],
  data() {
    return {
      title: "獎勵兌換",
      clientHeight: document.body.clientHeight - 65
    };
  },
  created() {
    if (window.innerHeight > this.clientHeight) {
      this.clientHeight = window.innerHeight - 65;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: relative;
  padding: 0 25px;
}
.main:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
  background-image: url("../assets/img/background_coin.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
