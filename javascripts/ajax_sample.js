let number = 0;
let data = []; // ajax.jsonから取得したデータを格納するための変数を追加
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  // ajax.jsonからデータを取得する処理を記述
  $.ajax({	
		url:"ajax.json", // 通信先のURL
		type:"GET",		// 使用するHTTPメソッド 
		timespan:1000, 		// 通信のタイムアウトの設定(ミリ秒)
		// async: false, 同期にする場合はasync:falseを追加する
		// 2. doneは、通信に成功した時に実行される
		//  引数のdata1は、通信で取得したデータ
		//  引数のtextStatusは、通信結果のステータス
		//  引数のjqXHRは、XMLHttpRequestオブジェクト
		}).done(function(data1,textStatus,jqXHR) {
      console.log("done");
      console.log(data1);
      console.log(textStatus);
      console.log(jqXHR);
      // TODO: 取得したデータをdataに格納する
      data = data1;
     
		// 6. failは、通信に失敗した時に実行される
		}).fail(function(jqXHR, textStatus, errorThrown ) {
			console.log("fail");
		// 7. alwaysは、成功/失敗に関わらず実行される
		}).always(function(){
      console.log("always");
  	});
}

function changeVideo() {
  // TOOD1: データなければgetDataを呼ぶ
  if(data.length === 0){
    getData();
  }
  // TODO2: ボタンにclickイベントリスナを設定する 
  button.addEventListener('click', e => { //--4
    console.log(data);
    console.log(number);
    // data は配列 data[0], data[1], 
    // TODO3: titleAreaやcontentAreaにデータを設定する
    // Example: titleArea.innerHTML = data[number]["title"];
    titleArea.innerHTML = data[number].title; //--5
    contentArea.innerHTML = data[number].content; //--5
    videoArea.setAttribute("src", data[number].url); 
  
    // 何個目のデータを表示するかという情報を管理している
    number == 2 ? number = 0 : number++;

    // Example:
    // (number == 2) ? (number = 0) : (number++);
    // (条件式) ? (Trueの場合) : (Falseの場合)
    // let hoge = (number  == 2) ? 1 : 0;
    // number = (number == 2) ? 0 : number + 1;
  })
}


window.onload = changeVideo;