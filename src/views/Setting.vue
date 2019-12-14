<template>
  <div class="setting">
    <Header :title="title" />
    <main class="main" :style="{height: clientHeight + 'px'}">
      <ul class="list">
        <li class="item">
          <div class="text">音效</div>
          <input
            type="checkbox"
            class="checkbox"
            :value="state.sound"
            :class="{on: state.sound===true}"
            @click="state.sound=!state.sound"
          />
        </li>
        <li class="item">
          <div class="text">語言</div>
          <input
            type="checkbox"
            class="checkbox"
            :value="state.language"
            :class="{on: state.language===true}"
            @click="state.language=!state.language"
          />
        </li>
        <li class="item">
          <div class="text">通知</div>
          <input
            type="checkbox"
            class="checkbox"
            :value="state.notice"
            :class="{on: state.notice===true}"
            @click="state.notice=!state.notice"
          />
        </li>
        <li class="item">
          <div class="text">字體大小</div>
          <div class="checkboxes">
          <input
            id="small-font"
            type="checkbox"
            class="checkbox"
            :value="state.fontSize"
            :class="{on: state.fontSize==='小'}"
            @click="state.fontSize = '小'"
          />
          <label for="small-font">小</label>
          <input
            id="middle-font"
            type="checkbox"
            class="checkbox"
            :value="state.fontSize"
            :class="{on: state.fontSize==='中'}"
            @click="state.fontSize = '中'"
          />
          <label for="middle-font">中</label>
          <input
            id="large-font"
            type="checkbox"
            class="checkbox"
            :value="state.fontSize"
            :class="{on: state.fontSize==='大'}"
            @click="state.fontSize = '大'"
          />
          <label for="large-font">大</label>
          </div>
        </li>
        <li class="item">
          <div class="text">帳號連結</div>
          <div class="account">{{state.account}}</div>
        </li>
      </ul>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "settingComponent",
  components: {
    Header
  },
  props: {},
  data() {
    return {
      title: "設定",
      clientHeight: document.body.clientHeight - 65,
      state: {
        sound: true,
        language: true,
        notice: true,
        fontSize: "中",
        account: "Line"
      }
    };
  },
  created() {
    if (window.innerHeight > this.clientHeight) {
      this.clientHeight = window.innerHeight - 65;
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: relative;
  padding: 40px 25px 0 25px;
}
.main:after {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.1;
  z-index: -1;
  background-image: url("../assets/img/background_coin.png");
  background-size: 100%;
  background-repeat: no-repeat;
}

.list {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 15px;
}

.list .item {
  width: 90%;
  background-color: #efcc3d;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 8px 0;
  padding: 5px;
}

.list .item .text {
  letter-spacing: 0.3em;
  padding: 0.8em;
  line-height: 18px;
}

.list .item input[type="checkbox"] {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  outline: none;
}

.list .item .checkbox {
  width: 28px;
  height: 26px;
  background-image: url("../assets/img/checkbox_false.png");
  background-repeat: no-repeat;
  background-position: left bottom;
}

.list .item .checkbox.on {
  background-image: url("../assets/img/checkbox_true.png");
}

.list .item .checkboxes{
  display: flex;
  align-items: center;
  color: #EC6620;
}

.list .item .checkboxes label{
  margin-right: 7px;
}

.list .item .account{
  color: #EC6620;
  padding: 5px;
}
</style>
