# 名偵探貓頭鷹

此專案為「說服科技與互動設計工作坊」課程的作品。

## 原型網址

網頁：https://clhuang224.github.io/MessageChecker

Line Bot：https://lin.ee/zxzW7ej

## 機器人設定
* 加入好友會有歡迎訊息
* 自動回覆（句子要一模一樣）
 * 「如何使用」→回傳五張說明圖片。
 * 「紅白蘿蔔同煮是錯誤的。」、「太常吃蘋果，會得肝癌死掉！！」→錯誤資訊
 * 「貓咪不能吃魚骨，狗狗不能吃骨頭。」→正確資訊
 * 其他任何訊息→尚待查證
* 可以加機器人進群組。

## 網站功能：
* 可以兌換獎勵，金幣會變少
* 可以收藏文章，會進到「我的收藏」
* 「尚未查證」中「已查證」的文章看過以後會進到「已查證」
* 可以分享文章到 Line
* 連到 https://clhuang224.github.io/MessageChecker/#/reset 所有資料會重置，包含文章跟金幣。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
