<template>
  <div class="phone">
    <img src="../assets/img/phone.png" alt="">
    <router-link to="/line"><button class="line-button"></button></router-link>
  </div>
</template>

<script>
export default {
  name: "phone"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.phone{
    position: relative;
}
.phone img{
    width: 100%;
    position: absolute;
}
.phone .line-button{
    position: absolute;
    margin-left: 25px;
    margin-top: 25px;
    width: 75px;
    height: 75px;
    z-index: 1;
}

</style>
