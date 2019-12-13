<template>
  <div class="popular">
    <Header :title="title" />
    <main class="main">
    <img src="../assets/img/popular-content.png" width="100%">
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: "popularComponent",
  components: {
    Header
  },
  props: {},
  data(){
    return{
      title: '熱門話題'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
