<template>
  <div class="dot-list">
    <h3 class="title">{{title}}</h3>
    <ul class="list">
      <li
        class="item"
        v-for="(item,index) of list"
        :key="index"
        :class="{emphasized:item.read===false}"
      >
        <router-link :to="item.link">
          <span class="text">{{item.name | nameFormat}}</span>
          <button class="button" v-if="item.read===false" @click="readChecked(item)">已查證</button>
          <button class="button" v-else>查看</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dotListComponent",
  data() {
    return {
      title: "",
      list: []
    };
  },
  filters: {
    nameFormat: function(value) {
      if (value.length > 8) {
        value = value.slice(0, 7) + "..";
      }
      return value;
    }
  },
  props: ["mode"],
  created() {
    let articles = JSON.parse(localStorage.getItem("articles"));
    switch (this.mode) {
      case "checked":
        this.title = "已查證";
        for (let article of articles) {
          if (article.record === true && article.state !== 'checking' && article.read === true) {
            this.list.push({
              id: article.id,
              name: article.title,
              link: `/article/${article.id}`
            });
          }
        }
        break;
      case "checking":
        this.title = "尚未查證";
        for (let article of articles) {
          if (article.record === true && article.state === 'checking'||
            article.state !== 'checking' && article.read === false) {
            this.list.push({
              id: article.id,
              name: article.title,
              link: `/article/${article.id}`,
              read: article.read,
            });
          }
        }
        break;
    }
  },
  methods:{
    readChecked:function(item){
      let articles = JSON.parse(localStorage.getItem("articles"));
      for (let i=0;i<articles.length;i++)
      {
        if(articles[i].id === item.id)
        {
          articles[i].read = true;
          break;
        }
      }
      localStorage.setItem("articles",JSON.stringify(articles));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dot-list {
  padding: 0 25px;
}
.title {
  margin-top: 30px;
  margin-left: 0.4em;
  letter-spacing: 0.4em;
  font-size: 20px;
  color: #040000;
  font-weight: bold;
}
.list {
  color: #474747;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 5px;
}
.list .item {
  margin-top: 20px;
  width: 100%;
  padding: 0 18px;
}
.list .item a {
  height: 56.427px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  letter-spacing: 0.3em;
  font-size: 20px;
}

.list .item a .text {
  position: relative;
  margin-left: 20px;
}

.list .item a .text:before {
  position: absolute;
  content: "";
  width: 12px;
  height: 8px;
  background-color: #e6c642;
  border-radius: 2px;
  top: 5px;
  left: -20px;
}

.list .item a .button {
  padding: 0.4em;
  background-color: #e6c642;
  border-radius: 0.6em;
  letter-spacing: 0.2em;
  padding-left: 0.6em;
  color: #fff;
  font-size: 13.72px;
}

.list .item.emphasized {
  background-color: #ea8c47;
}

.list .item.emphasized .button,
.list .item.emphasized .text:before {
  background-color: #ec6620;
}
</style>
