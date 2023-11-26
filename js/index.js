'use strict';

document.addEventListener('DOMContentLoaded', () => {
  // new演算子を利用してオブジェクトを生成します。
  let xhr = new XMLHttpRequest();
  // open()メソッドを利用して、メソッド、URL、非同期処理の有無を引数に渡します。第3引数をfalseにすると、同期処理になります。
  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
  // responseTypeでjsonを指定します。
  xhr.responseType = 'json';
  // send()メソッドでAPIを呼び出して通信を開始します。nullは送るものがないことを意味します。open( )のメソッドがPOSTの場合、send()に処理したいデータを格納できます。
  xhr.send(null);
  // リクエストに対して返ってきたレスポンスの処理をxhr.onload=function(e){}に格納します。
  xhr.onload = function (e) {
    // readyStateは現在の通信状況を示しています。4は通信完了という意味になります。
    if (xhr.readyState == 4) {
      // statusで200は正常に通信出来ていることを示しています。もしファイルが存在しなかったりすると404が返ってきます。
      if (xhr.status == 200) {
        let btn = document.getElementById('btn');
        let list = document.getElementById('list');
        let users = xhr.response;

        btn.addEventListener('click', () => {
          users.forEach((user) => {
            let li = document.createElement('li');
            li.innerText = user.name;
            list.appendChild(li);
          });
        });
      }
    }
  }
});
