<template>
  <div class="record">
    <Header :title="title" />
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "recordComponent",
  components: {
    Header
  },
  props: {},
  data() {
    return {
      title: "查詢紀錄",
      list: [
        { name: "已查證", link: "/checked" },
        { name: "未查證", link: "/checking" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list {
  color: #474747;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
}
.list .item {
  margin-top: 20px;
}
.list .item button {
  background-color: rgba(239, 204, 61, 0.4);
  width: 320.82px;
  height: 56.427px;
  display: flex;
  align-items: center;
  letter-spacing: 0.3em;
  padding: 0 20px;
  font-size: 20px;
}
</style>
