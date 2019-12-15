<template>
  <div class="reward-coin">
    <h3 class="title">我的金幣</h3>
    <ul class="list">
      <li class="item">
        <img src="../../assets/img/coin1.png" alt class="img" />
        <span class="multiply">x</span>
        <span class="amount">{{coinAmount[0]}}</span>
      </li>
      <li class="item">
        <img src="../../assets/img/coin2.png" alt class="img" />
        <span class="multiply">x</span>
        <span class="amount">{{coinAmount[1]}}</span>
      </li>
      <li class="item">
        <img src="../../assets/img/coin3.png" alt class="img" />
        <span class="multiply">x</span>
        <span class="amount">{{coinAmount[2]}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "coinComponent",
  props: [],
  data() {
    return {
      coinAmount: JSON.parse(localStorage.getItem('coinAmount')),
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reward-coin {
  padding-top: 30px;
}
.title {
  color: #474747;
  letter-spacing: 0.3em;
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 10px 20px;
}
.list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 5px;
  background-color: rgba(239, 204, 61, 0.4);
  padding: 15px 30px;
}

.list .item {
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 21px;
}
.list .item .img {
  width: 40px;
}
.list .item .multiply{
  display: flex;
  align-items: center;
  margin: 0 0.6em;
}
.list .item .amount {
  display: flex;
  align-items: center;
}
</style>
