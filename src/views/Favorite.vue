<template>
  <div class="favorite">
    <Header :title="title" />
    <main class="main">
    還沒好
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: "favoriteComponent",
  components: {
    Header
  },
  props: {},
  data(){
    return{
      title: '我的收藏'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
