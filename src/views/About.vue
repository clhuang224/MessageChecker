<template>
  <div class="about">
    <Header :title="title" />
    <main class="main">
      <ul class="list">
        <li class="item">公司名稱: 防假集團有限公司</li>
        <li class="item">電話: 0800200988</li>
        <li class="item">Mail: mail.com.tw</li>
        <li class="item">版本v. 1.0</li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "aboutComponent",
  components: {
    Header
  },
  props: {},
  data() {
    return {
      title: "關於我們"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  padding: 0 25px;
}
.list {
  margin-top: 20px;
  background-color: rgba(239, 204, 61, 0.4);
  display: flex;
  justify-content: center;
  flex-direction: column;
  color: #474747;
  padding: 10px 20px;
  font-size: 20px;
}
.list .item {
  padding: 10px 0;
}
</style>
