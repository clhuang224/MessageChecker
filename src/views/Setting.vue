<template>
  <div class="setting">
    <Header :title="title" />
    <main class="main">
      還沒好
    </main>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  name: "settingComponent",
  components: {
    Header
  },
  props: {},
  data(){
    return{
      title: '設定'
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
