<template>
  <div class="article">
    <Header />
    <main class="main" :style="{height: clientHeight + 'px'}">
      <h3 class="title">{{article.title}}</h3>
      <div class="to-right">
        <div class="state cross" v-if="article.state ==='false'">
          <img src="../assets/img/cross.png" alt class="img" />
          <div class="text">假的!</div>
        </div>
        <div class="state circle" v-else-if="article.state==='true'">
          <img src="../assets/img/circle.png" alt class="img" />
          <div class="text">真的!</div>
        </div>
        <div class="state question" v-else-if="article.state==='checking'">
          <img src="../assets/img/question.png" alt class="img" />
          <div class="text">查證中</div>
        </div>
      </div>
      <section class="content">
        <h4 class="section-title">原文內容</h4>
        <div class="section-content">
          <p v-html="article.content"></p>
        </div>
      </section>
      <section class="answer" v-if="article.state!=='checking'">
        <h4 class="section-title">查證事實</h4>
        <div class="section-content">
          <p v-html="article.answer"></p>
        </div>
      </section>
      <section class="reference" v-if="article.reference.length > 0 && article.state!=='checking'">
        <h4 class="section-title">相關文章</h4>
        <ul class="section-content" v-for="(item,index) of article.reference" :key="index">
          <li class="list">
            <a :href="item.link" target="_blank">{{item.title}}</a>
          </li>
        </ul>
      </section>
      <div class="buttons">
        <a :href="shareLink"><button class="share-button">分享</button></a>
        <button class="favorite-button" v-if="article.favorite === false" @click="addFavorite()">收藏</button>
        <button class="return-button" @click="historyBack()">返回</button>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "checkedComponent",
  components: {
    Header
  },
  props: [],
  data() {
    return {
      article: JSON.parse(localStorage.getItem("articles"))[
        this.$route.params.id
      ],
      clientHeight: document.body.clientHeight +30,
      shareLink: ``,
    };
  },
  created() {
    if (this.clientHeight < window.innerHeight+30) {
      this.clientHeight = window.innerHeight+30;
    }
    this.shareLink = `http://line.me/R/msg/text/?【名偵探貓頭鷹：辨識訊息真偽的好夥伴！】%0D%0A`
    switch(this.article.state)
    {
      case'true':
        this.shareLink +='正確資訊：'
        break;
      case'false':
        this.shareLink +='錯誤資訊：'
        break;
      case'checking':
        this.shareLink +='尚待查證：'
        break;
    }
    this.shareLink+=this.article.title;
    if(this.article.answer.length>50)
    {
      this.shareLink += ('%0D%0A'+this.article.answer.slice(0,50)+'...');
    }
    else if(this.article.answer.length!=0){
      this.shareLink += '%0D%0A'+this.article.answer;
    }
    this.shareLink += `%0D%0A${window.location.href}`;
  },
  methods:{
    historyBack: function(){
      history.go(-1);
    },
    addFavorite: function(){
      this.article.favorite = true;
      let articles = JSON.parse(localStorage.getItem("articles"));
      for (let i=0;i<articles.length;i++)
      {
        if(articles[i].id === this.article.id)
        {
          articles[i].favorite = true;
          break;
        }
      }
      localStorage.setItem("articles",JSON.stringify(articles));
      alert(`已將「${this.article.title}」加入收藏。`)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: transparent;
}
.main:before {
  width: 100%;
  height: 100%;
  content: "";
  background-image: url("../assets/img/background_leaf.png");
  position: absolute;
  opacity: 0.2;
  z-index: -1;
  top: 0;
}
.main .title {
  width: auto;
  background-color: #f4c026;
  padding: 10px;
  border-radius: 10px;
  font-size: 24px;
  letter-spacing: 0.3em;
}
.to-right {
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: flex-end;
}
.state {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f4c026;
  padding: 8px;
  border-radius: 8px;
}
.state .img {
 height: 28px;
}
.state .text {
  font-size: 22px;
  margin-left: 6px;
}

.cross .text {
  color: #bd2c22;
}
.circle .text {
  color: #18d0dc;
}
.question .text {
  color: #fff;
}

section {
  margin-top: -20px;
  margin-bottom: 40px;
}

.section-title {
  font-weight: normal;
  font-size: 20px;
  padding: 5px;
}

.section-content {
  font-size: 14px;
  text-align: justify;
}

.section-content a {
  color: #ec6620;
}

.buttons{
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.buttons button{
  background-color:#f4c026;
  color: #fff;
  border-radius: 3px;
  padding: 5px 25px;
  font-weight: normal;
  font-size: 16px;
}
</style>
