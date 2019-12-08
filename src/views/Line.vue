<template>
  <div class="line">
    <img src="../assets/img/line-temp.png" alt />
    <router-link to="/">
      <button class="home-button"></button>
    </router-link>
    <router-link to="/popular">
      <button class="popular-button"></button>
    </router-link>
    <router-link to="/reward">
      <button class="reward-button"></button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "lineComponent"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.line > img {
  width: 100%;
}

.home-button{
    width: 170px;
    height: 130px;
    position: absolute;
    top: 400px;
    left: 0;
}
.reward-button{
    width: 200px;
    height: 130px;
    position: absolute;
    top: 400px;
    left: 175px;
}
.popular-button{
    width: 125px;
    height: 130px;
    position: absolute;
    top: 530px;
    left: 125px;
}
</style>
