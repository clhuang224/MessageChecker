<template>
  <div class="reward-exchange">
    <h3 class="title">兌換獎品</h3>
    <ul class="list" v-for="(item,index) of productList" :key="index">
      <li class="item" :class="{available: coinAmount[item.coinType]>=item.coinAmount}">
        <div class="left">
          <div class="image-group">
            <img :src="item.imgUrl" alt class="img" />
            <span class="text">{{item.name}}</span>
          </div>
          <div class="amount-group">
            <img :src="require(`../../assets/img/coin${item.coinType+1}.png`)" alt class="img" />
            <span class="multiply">x</span>
            <span class="amount">{{item.coinAmount}}</span>
          </div>
        </div>
        <button class="exchange-button">
          <span v-if="coinAmount[item.coinType]>=item.coinAmount">可兌換</span>
          <span v-if="coinAmount[item.coinType]<item.coinAmount">再加油</span>
        </button>
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
      coinAmount: [30, 0, 0],
      productList: [
        {
          imgUrl: require("../../assets/img/reward_coffee.png"),
          name: "咖啡",
          coinType: 0,
          coinAmount: 30
        },
        {
          imgUrl: require("../../assets/img/reward_coke.png"),
          name: "可樂",
          coinType: 1,
          coinAmount: 30
        },
        {
          imgUrl: require("../../assets/img/reward_seven.png"),
          name: "7-11禮券",
          coinType: 0,
          coinAmount: 100
        },
        {
          imgUrl: require("../../assets/img/reward_seven.png"),
          name: "7-11禮券",
          coinType: 0,
          coinAmount: 100
        },
        {
          imgUrl: require("../../assets/img/reward_seven.png"),
          name: "7-11禮券",
          coinType: 0,
          coinAmount: 100
        },
        {
          imgUrl: require("../../assets/img/reward_seven.png"),
          name: "7-11禮券",
          coinType: 0,
          coinAmount: 100
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reward-exchange {
  padding-top: 30px;
}
.title {
  color: #474747;
  letter-spacing: 0.3em;
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 10px 20px;
}

.list .item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 320px;
  background-color: rgba(186, 186, 186, 0.5);
}

.list .item .left {
  display: flex;
  margin-left: 15px;
  align-items: center;
}

.list .item .left .image-group {
  width: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  font-size: 12px;
  height: 75px;
  letter-spacing: 0.2em;
}

.list .item .left .image-group .img {
  width: auto;
  height: 55px;
}

.list .item .left .amount-group{
  margin-left: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.list .item .left .amount-group .img {
  width: 30px;
}
.list .item .left .amount-group .multiply {
  display: flex;
  align-items: center;
  margin: 0 0.5em;
}
.list .item .left .amount-group .amount {
  display: flex;
  align-items: center;
}
.list .item .exchange-button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #878787;
  color: #fff;
  font-size: 13px;
  border-radius: 10px;
  margin-right: 15px;
}
.list .item .exchange-button span {
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3em;
  padding: 5px 4px;
  font-weight: normal;
  margin-left: 0.3em;
}

.list .item.available{
  background-color: rgba(239,204,61,0.4);
}

.list .item.available .exchange-button{
  background-color: #E6C642;
}
</style>
