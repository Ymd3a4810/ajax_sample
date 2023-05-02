## 5/2
### 配列の長さを確認する
https://www.javadrive.jp/javascript/array/index6.html

### 三項演算子
https://www.sejuku.net/blog/23627

### Chromeスーパーリロード (※めちゃくちゃ重要)
[shift + cmd + R] または [shift + cmd + リロードボタン]

https://itreat.co.jp/blog/cash#:~:text=Google%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%83%98%E3%83%AB%E3%83%97-,Mac%E7%89%88,%2B%20R%5D%E3%81%AB%E3%81%AA%E3%82%8A%E3%81%BE%E3%81%99%E3%80%82


### ブラウザでJSが読み直されない場合の裏技
ダンダムなクエリ文字列を付与する
http://localhost:8080/?t=sdfsaf2

## 4/28
### sudoについて
- インストール
`sudo npm install -g http-server`
- 起動
`http-server`

### ローカルホストのIPアドレス
http://127.0.0.1/ => PCからしかアクセスできない
http://192.168.11.5/ => 同じローカルネットワークならアクセスできる


※ sudo でルートユーザー実行するコマンド


### 教材の元のコード
```
let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // ajax.jsonからデータを取得する処理を記述
}

function changeVideo() {
  // ボタンがクリックされた際の処理を記述
  // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
}

window.onload = changeVideo;
```

### jqueryを使ってデータを取得するサンプル
https://itsakura.com/jquery-ajax

### HTTPの説明
https://qiita.com/morikuma709/items/956d7c58908cb481d7e8

### htmlのonlickでメソッドを呼び出す
https://www.w3schools.com/jsref/event_onclick.asp

### ブラウザのキャッシュクリア
Control + F5 (スーパーリロード)
シークレットウィンドウ
https://chrome.google.com/webstore/detail/clear-cache/cppjkneekbjaeellbfkmgnhonkkjfpdn?hl=en

### 宿題はコードに記載