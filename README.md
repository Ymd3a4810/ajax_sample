
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