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
        <button
          class="exchange-button"
          @click="exchange(item)"
          v-if="coinAmount[item.coinType]>=item.coinAmount"
        >
          <router-link to="/reward/barcode">可兌換</router-link>
        </button>
        <div class="exchange-button" v-else>再加油</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "exchangeComponent",
  props: [],
  data() {
    return {
      coinAmount: JSON.parse(localStorage.getItem("coinAmount")),
      productList: [
        {
          id: 0,
          imgUrl: require("../../assets/img/reward_coffee.png"),
          name: "咖啡",
          coinType: 0,
          coinAmount: 30
        },
        {
          id: 1,
          imgUrl: require("../../assets/img/reward_coke.png"),
          name: "可樂",
          coinType: 1,
          coinAmount: 30
        },
        {
          id: 2,
          imgUrl: require("../../assets/img/reward_seven.png"),
          name: "7-11禮券",
          coinType: 0,
          coinAmount: 100
        }
      ]
    };
  },
  methods: {
    exchange(item) {
      this.coinAmount[item.coinType] -= item.coinAmount;
      let message = `兌換成功！已以${item.coinAmount}`;
      switch (item.coinType) {
        case 0:
          message += "金幣";
          break;
        case 1:
          message += "銀幣";
          break;
        case 2:
          message += "銅幣";
          break;
      }
      message += `兌換${item.name} x 1。`;
      localStorage.setItem('coinAmount',JSON.stringify(this.coinAmount));
      alert(message);
    }
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
  width: 100%;
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

.list .item .left .amount-group {
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
  width: 63px;
  height: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #878787;
  color: #fff;
  font-size: 13px;
  border-radius: 10px;
  margin-right: 15px;
  letter-spacing: 0.3em;
  font-weight: normal;
  padding-left: 0.3em;
}
.list .item.available {
  background-color: rgba(239, 204, 61, 0.4);
}

.list .item.available .exchange-button {
  background-color: #e6c642;
}
</style>
