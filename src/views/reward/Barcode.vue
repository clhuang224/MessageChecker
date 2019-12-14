<template>
  <div class="reward-barcode">
    <h3 class="title">兌換條碼</h3>
    <div class="tips">請將此條碼給商店店員進行掃描，若有任何問題請善用聯絡我們及詢問商店店員。</div>
    <div class="barcode-group">
      <img src="../../assets/img/barcode.png" alt class="img" />
      <div class="information">
        <img src="../../assets/img/reward_seven.png" alt="" class="logo">
        <div class="prompt">
          請於
          <span class="red">2019/12/11日24:00</span>
前於全台各大連鎖7-11兌換完畢，超時則不得兌換，兌換完成後請至兌換紀錄查詢。
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "barcodeComponent",
  props: [],
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reward-barcode {
  padding-top: 30px;
}
.title {
  color: #474747;
  letter-spacing: 0.3em;
  font-size: 20px;
  margin-left: 20px;
}
.tips {
  margin: 15px 20px;
}
.barcode-group{
  background-color: rgba(239,204,61,0.7);
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 30px 15px;
}
.barcode-group .information{
  display: flex;
  align-items: center;
  font-size: 12px;
  margin-top: 20px;
  text-align:justify;
}
.barcode-group .information .logo{
  max-width: 66px;
  padding: 10px;
}
.barcode-group .information .red{
  color: #CA2523;
}
</style>
