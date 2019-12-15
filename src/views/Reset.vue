<template>
  <div class="reset"></div>
</template>

<script>
export default {
  name: "resetComponent",
  components: {
  },
  created() {
    localStorage.clear();
        let articles = JSON.parse(localStorage.getItem("articles")) || [
      {
        id: 0,
        title: "吃蘋果傷身體",
        content: `你知道嗎？蘋果裡面其實含有大量的不良胺基酸，長期吃蘋果會使身體累積毒素，導致頭痛、胃痛、肌肉痠痛，得到肝癌的機率也超高！！一位高雄36歲的陳女士，非常熱愛運動，也愛吃水果，結果卻肝癌末期，36歲就要住加護病房，一家人苦不堪言！！！<br>
	  花蓮縣立保祿醫院肝膽腸胃科醫師方家榮表示，陳女士就是太常吃蘋果，加上運動擴散毒素，導致肝癌迅速惡化！！！<br>
	  快點轉傳親朋好友，告訴他們不要再吃蘋果了！！！！`,
        answer: `沒有所謂好的或壞的胺基酸，毒素也並非科學證實的說法。並無有效科學證據證實長期吃蘋果會導致頭痛、胃痛或肌肉痠痛；與肝癌的關係也未獲得科學證實。此外並無「花蓮縣立保祿醫院」，在衛生福利部 醫事查詢系統中，亦無「方家榮」醫師。<br>
	  經過調查，某某大學某某系的學生已坦承偽造並散布此訊息。`,
        state: "false",
        read: true,
        favorite: true,
		record: true,
        reference: [
          {
            title: "【聯合新聞網】其實有些人不適合吃蘋果 你不可不知",
            link: "https://udn.com/news/story/7016/3678743"
          }
        ]
      },
      {
        id: 1,
        title: "紅白蘿蔔不能一起吃",
        content: `白蘿蔔能通氣，紅蘿蔔富含紅蘿蔔素，蘿蔔的營養價值是很高的。有幾句老話說的好：多吃蘿蔔少吃藥，秋後蘿蔔賽人參，冬吃蘿蔔夏吃薑，可見蘿蔔在老百姓心目中的地位有多高！<br>
			  白蘿蔔不能與紅蘿蔔混吃，會影響營養成分的吸收，因為白蘿蔔中的維生素C含量極高，但紅蘿蔔中卻含有一種對抗壞血酸的分解酵素，可以破壞白蘿蔔中的維生素C。不只是白蘿蔔，在與含維生素C的蔬菜配合烹調時，紅蘿蔔都充當了破壞者。所以，紅蘿蔔只有單獨和肉類一起烹煮，才能獲得充分營養。`,
        answer: `該則網路傳言指出，「白蘿蔔不能與紅蘿蔔混吃，會影響營養成分的吸收，因為白蘿蔔中的維生素C含量極高，但紅蘿蔔中卻含有一種對抗壞血酸的分解酵素，可以破壞白蘿蔔中的維生素C」，但營養師表示，並無此事，目前也無相關的實證研究，這類傳言聽一聽就好。<br>
			 該則網路傳言也指出，「不只是白蘿蔔，在與含維生素C的蔬菜配合烹調時，紅蘿蔔都充當了破壞者。所以，紅蘿蔔只有單獨和肉類一起烹煮，才能獲得充分營養。」不過衛福部國健署曾經澄清，並無文獻報告證實相關內容，台北榮總營養部主任楊雀戀也說，若是白蘿蔔富含維生素C，經烹煮遇熱也已被破壞了，且紅蘿蔔真的內含分解酵素的話，由於大部分的酵素均屬於蛋白質，遇到高溫也會被破壞活性，因此紅白蘿蔔混吃會影響營養成分的說法，不要輕信。`,
        state: "false",
        favorite: false,
        read: false,
		record: true,
        reference: [
          {
            title:
              "【衛生福利部食品藥物管理署 食品藥物消費者專區】紅白蘿蔔混吃是錯誤的煮食方式?",
            link:
              "https://consumer.fda.gov.tw/Pages/Detail.aspx?nodeID=221&id=2805"
          }
        ]
      },
      {
        id: 2,
        title: "寵物不吃骨頭",
        content: `美國的狗狗們若知道這個消息，很可能會「咆哮」連署，一路從東岸到哀號到西岸以示抗議。因為當地的食品與藥物管理局，在21日警告及呼籲所有飼主，不要餵自家狗兒們啃骨頭，原因是為避免骨頭碎片造成口腔受傷，引起腸胃不適、感染或發炎；甚至有可能致命。<br>
			 美國食品與藥物管理局（Food and Drug Administration ），簡稱「FDA」在21日呼籲，警告所有飼主「不要再拿骨頭餵狗了，快把它們丟掉！」`,
        answer: `或許是受到卡通影響，我們常會誤以為狗狗的主食就是骨頭，但各位千萬不要讓家裡的寵物啃骨頭啊！許多貓咪狗狗就醫的原因就是喉嚨卡了骨頭受傷，或是胃裡有許多骨頭銳利的碎片讓牠們身體不舒服，甚至有因此死亡的例子。`,
        state: "true",
        favorite: true,
        read: true,
		record: true,
        reference: []
      },
      {
        id: 3,
        title: "明年2月所得稅增加30%",
        content: `因應景氣，2021年2月所得稅會增加30%。戶中有65歲以上長者，會增加到40%。政府單位認為所得多的長輩應該要多付一些稅金，幫助年輕人。`,
        answer: ``,
        state: "checking",
        favorite: false,
        read: true,
		record: true,
        reference: []
      }
    ];
    let fontSize = JSON.parse(localStorage.getItem("fontSize")) || "中";
    let coinAmount = JSON.parse(localStorage.getItem("coinAmount")) || [
      100,
      10,
      100
    ];
    localStorage.setItem("fontSize", JSON.stringify(fontSize));
    localStorage.setItem("articles", JSON.stringify(articles));
    localStorage.setItem("coinAmount", JSON.stringify(coinAmount));
    alert('已重設資料')
    this.$router.push({ path: "/" });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
