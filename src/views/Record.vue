<template>
  <div class="record">
    <Header :title="title" />
    <main class="main">
      還沒好
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: "recordComponent",
  components: {
    Header
  },
  props: {},
  data(){
    return{
      title: '查詢紀錄'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
