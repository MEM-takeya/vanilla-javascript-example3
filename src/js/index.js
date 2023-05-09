//const age = prompt("おいくつですか")
//console.log(parseInt(age));

//if(typeof age === "number"){
//console.log("Ageは数字です")
//}

//if(typeof age ===NaN){
//console.log("数字じゃないです")
//}

//if(isNaN(age)){
//  console.log("数字じゃないです")
//}

//=================================
//4月
//=================================
//promptでユーザーとやり取りできる
//自分でないことのせんげんをするとき、PCからの返答
//null
//undefined

//まずはconst
//一回割り当てたら絶対に中身が変わらない
//constでやってエラーが出たらletを使えばいい

//NaN　＝　not a numbers

//=================================
//5/9　ifとdocument
//=================================
//

//JSではデータを決める型がある
//String
//Number
//Object
//Array
//Boolean

let age = prompt("おいくつですか");
age = parseInt(age);
if (isNaN(age)) {
  console.log("数字ではありません");
} else if (age >= 30) {
  console.log("30よりおおきいです");
} else {
  console.log("30よりちいさいです");
}

//console.logは指定したものをそのまま表示してくれる
//console.dirは属性を表示してくれる

//以下でhtmlのタイトルを取得し、BU4-13にすることができる。
//「＝」代入演算子。すべて代入演算子で代入できるわけではない。NDMで都度確認するべし
//document.title = ("BU4-13");

//=================================
//5/9　値の変更
//=================================
//document.getElementByIdz("idname"); //id名を持ってくる
//document.getElementsByClassName("classname")[0]; //配列でクラス名をもってくる.これは配列０の中のものを出力してくれる
//document.querySelector(".classA")//同じものがあれば一番上のクラス名を取ってきてくれる
//document.querySelector("#idA")
//document.querySelectorAll(".classA")全部持ってきてくれる

const classA = document.querySelector(".classA");
classA.innerText = "Hello";
