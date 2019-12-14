<template>
  <div class="reward-record">
    <h3 class="title">兌換紀錄</h3>
    <ul class="list">
    <span class="empty">無資料</span>
    </ul>
  </div>
</template>

<script>
export default {
  name: "recordComponent",
  props: [],
  data() {
    return {
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reward-record {
  padding-top: 30px;
}
.title {
  color: #474747;
  letter-spacing: 0.3em;
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 10px 20px;
}
.list{
  background-color: rgba(239,204,61,0.4);
  height: 137px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list .empty{
  color: #474747;
  letter-spacing: 0.3em;
  border-bottom: 1px solid #474747;
  padding-bottom: 3px;
  margin-top: -50px;
}
</style>
