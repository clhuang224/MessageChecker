<template>
  <div class="bar-list">
    <ul class="list">
      <li class="item" v-for="(item,index) of list" :key="index">
        <router-link :to="item.link">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "listComponent",
  props: ["list"],
  data() {
    return {};
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
.list .item a {
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
