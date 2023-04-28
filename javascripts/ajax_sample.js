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
  // TODO2: ボタンにclickイベントリスナを設定する 
  // TODO3: titleAreaやcontentAreaにデータを設定する

  // ボタンがクリックされた際の処理を記述
  /* data.btn.click(function(){
  // ajax.jsonからデータを取得していない場合のみ、getDataの処理を呼び出す
  const findData = data.findIndex(data => );
  if(findData == -1){
  const videoData = getData(); //--2
      number == 2 ? number = 0 : number++;
    };
  }
  );*/
}

window.onload = changeVideo;