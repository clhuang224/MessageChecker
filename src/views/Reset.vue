<template>
  <div class="reset"></div>
</template>

<script>
export default {
  name: "resetComponent",
  components: {
  },
  created() {
    localStorage.clear();
    this.$router.push({ path: "/" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
