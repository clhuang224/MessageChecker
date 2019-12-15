<template>
  <div class="favorite">
    <Header :title="title" />
    <main class="main">
    <ul class="list">
      <li
        class="item"
        v-for="(item,index) of list"
        :key="index"
      >
        <router-link :to="item.link">
          <span class="text">{{item.name}}</span>
          <button class="button">查看</button>
        </router-link>
      </li>
    </ul>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "favoriteComponent",
  components: {
    Header,
  },
  props: {},
  data() {
    return {
      title: "我的收藏",
      list: [
        { name: "吃蘋果傷身體", link: "/article/1" },
        { name: "寵物不能吃骨頭", link: "/article/2" }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title {
  margin-top: 30px;
  margin-left: 0.4em;
  letter-spacing: 0.4em;
  font-size: 20px;
  color: #040000;
  font-weight: bold;
}
.list {
  color: #474747;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
  background-color: rgba(236,204,61,0.4);
  margin: 25px;
}
.list .item {
  margin-bottom: 20px;
  width: 100%;
  padding: 0 18px;
}
.list .item a {
  height: 56.427px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.3em;
  font-size: 20px;
}

.list .item a .text {
  position: relative;
  margin-left: 20px;
}

.list .item a .text:before {
  position: absolute;
  content: "";
  width: 12px;
  height: 8px;
  background-color: #e6c642;
  border-radius: 2px;
  top: 5px;
  left: -20px;
}

.list .item a .button {
  padding: 0.4em;
  background-color: #e6c642;
  border-radius: 0.6em;
  letter-spacing: 0.2em;
  padding-left: 0.6em;
  color: #fff;
  font-size: 13.72px;
}

.list .item.emphasized {
  background-color: #ea8c47;
}

.list .item.emphasized .button,
.list .item.emphasized .text:before {
  background-color: #ec6620;
}
</style>
