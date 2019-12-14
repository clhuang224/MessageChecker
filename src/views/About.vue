<template>
  <div class="about">
    <Header :title="title" />
    <main class="main">
    還沒好
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: "aboutComponent",
  components: {
    Header
  },
  props: {},
  data(){
    return{
      title: '關於我們'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
