<template>
  <div class="home">
    <Header :title="title" />
    <main class="main">
      <div class="information">
        <div class="circle">
          <img class="img" :src="imgSrc" alt />
        </div>
        <span class="rank">{{rank}}</span>
        <span class="level">Lv.{{level}}</span>
      </div>
      <ul class="link-list">
        <li class="link-item">
          <router-link to="/reward/coin">我的<br>金幣</router-link>
        </li>
        <li class="link-item">
          <router-link to="/record">查詢<br>紀錄</router-link>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "homeComponent",
  components: {
    Header
  },
  props: {},
  data() {
    return {
      title: "名偵探貓頭鷹",
      imgSrc: require("../assets/img/owl_level1.png"),
      rank: "初級生",
      level: 1
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.main .information {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.main .circle {
  margin-top: 123.5px;
  width: 200px;
  height: 185px;
  border-radius: 50%;
  background-color: rgba(239, 204, 61, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.main .circle .img {
  width: 190px;
  height: 250px;
  margin-top: -40px;
}

.information .rank {
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
}

.information .level {
  margin-top: 8px;
  font-size: 17px;
}

.link-list{
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
}

.link-list .link-item{
  width: 122px;
  height: 120px;
  background-color: #EFCC3D;
  margin: 0 35px;
  border-radius: 25px;
  color: #FFF;
  font-size: 24px;
  font-weight: bold;
  line-height: 32px;
  letter-spacing: 8px;
  padding: 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-left: 8px;
}
</style>
