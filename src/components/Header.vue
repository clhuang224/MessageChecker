<template>
  <div class="header">
    <button class="menu-button" @click="menuOn = !menuOn">
      <div class="line"></div>
      <div class="line"></div>
      <div class="line"></div>
    </button>
    <h2 class="title">{{ title }}</h2>
    <div class="cover" :class="{open: menuOn === true}" :style="{height:clientHeight + 'px'}"></div>
    <aside
      class="menu-aside"
      :class="{open: menuOn === true}"
      :style="{height:clientHeight + 'px'}"
    >
      <div class="menu-title">
        <button class="menu-button" @click="menuOn = !menuOn">
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </button>
        <h2>Menu</h2>
      </div>
      <ul class="menu-list">
        <li class="menu-item">
          <router-link to="/">首頁</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/popular">熱門話題</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/reward">獎勵兌換</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/record">查詢紀錄</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/favorite">我的收藏</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/setting">設定</router-link>
        </li>
        <li class="menu-item">
          <router-link to="/about">關於我們</router-link>
        </li>
      </ul>
    </aside>
  </div>
</template>

<script>
export default {
  name: "headerComponent",
  props: ["title"],
  data() {
    return {
      menuOn: false,
      clientHeight: document.body.clientHeight
    };
  },
  created() {
    if (window.innerHeight > this.clientHeight) {
      this.clientHeight = window.innerHeight;
    }
  },
  mounted() {
    let that = this;
    document
      .querySelector(".menu-list")
      .addEventListener("click", function(event) {
        if (event.target.nodeName == "A") {
          that.menuOn = false;
        }
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  background-color: #f4c026;
  height: 65px;
}

.header .title {
  font-size: 21px;
  letter-spacing: 0.5em;
}

.cover {
  display: none;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  width: 100%;
  min-width: 375px;
  max-width: 468px;
  position: absolute;
  z-index: 1;
}

.cover.open {
  display: block;
}

.menu {
  position: relative;
}

.menu-button {
  width: 49px;
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background-color: #ec6620;
  margin: 0 15px 0 20px;
}

.menu-button .line {
  width: 31px;
  height: 2px;
  background-color: #fff;
  margin: 2.5px 0;
}

.menu-aside {
  display: none;
  position: absolute;
  z-index: 2;
  background-color: rgba(236, 102, 32, 0.8);
  width: 280px;
  top: 0;
}
.menu-aside.open {
  display: block;
}
.menu-title {
  height: 65px;
  background-color: rgba(236, 102, 32, 0.8);
  color: #fff;
  display: flex;
  align-items: center;
  font-size: 20px;
}

.menu-title h2 {
  letter-spacing: 0.5em;
}

.menu-list {
  position: relative;
  color: #fff;
  letter-spacing: 0.3em;
  font-size: 21px;
  padding: 30px;
}

.menu-list .menu-item {
  position: relative;
  margin-left: 35px;
  margin-bottom: 18px;
}

.menu-list .menu-item::before {
  position: absolute;
  content: "";
  width: 12px;
  height: 8px;
  background-color: #e6c642;
  border-radius: 2px;
  z-index: 2;
  top: 6px;
  left: -25px;
}
</style>
