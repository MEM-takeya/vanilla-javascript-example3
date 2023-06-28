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
//promptでユーザーとやり取りできる。文字列を受け取れる
//null:開発者が指定する「何もない」
//undefined：システム的に「何もない」

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

//let age = prompt("おいくつですか");
//age = parseInt(age);
//if (isNaN(age)) {
//  console.log("数字ではありません");
//} else if (age >= 30) {
//  console.log("30よりおおきいです");
//} else {
//  console.log("30よりちいさいです");
//}

//console.logは指定したものをそのまま表示してくれる
//console.dirは属性を表示してくれる

//以下でhtmlのタイトルを取得し、BU4-13にすることができる。
//「＝」代入演算子。すべて代入演算子で代入できるわけではない。NDMで都度確認するべし
//document.title = ("BU4-13");

//=================================
//5/9　値の変更
//=================================
//document.getElementById("idname"); //id名を持ってくる
//document.getElementsByClassName("classname")[0]; //配列でクラス名をもってくる.これは配列０の中のものを出力してくれる
//document.querySelector(".classA")//同じものがあれば一番上のクラス名を取ってきてくれる
//document.querySelector("#idA")
//document.querySelectorAll(".classA")全部持ってきてくれる

//const classA = document.querySelector(".classA");
//classA.innerText = "Hello";

//=================================
//5/10　イベントについて
//=================================
//documentはjsからhtmlに接続するためのもの
//イベントを要素に登録するためにはaddEventListenerを使うといい
//addEventListener("タイプ", リスナー);
//classA.addEventListener("click", handleClick);

//const classA = document.querySelector(".classA");
//console.log(classA);

//const handleClick = () => {
//  console.log("クリックされた！");
//};

//=================================
//5/16　宿題
//=================================
//「^」は何と読む？
//キャレット

//3つ目の「classA」を取得するためにはどうしたらよい？
//×　document.querySelectorAll(".classA:last-child")
//×

//=================================
//5/17
//=================================
//functionは関数

//function handleClick(){
//  console.log("クリックされました")
//}

//=================================
//5/19
//=================================

//↓↓↓↓マウス乗せたときオレンジ、話したときブルーにする↓↓↓↓
//const mouseEnter = document.querySelector(".mouseEnter");
//const mouseLeave = document.querySelector(".mouseLeave");

//function handlemouseEnter() {
//  mouseEnter.innerText = "マウスが入りました";
//  mouseEnter.style.color = "orange";
//}

//function handlmouseLeave() {
//  mouseEnter.innerText = "マウスが離れたよ";
//  mouseEnter.style.color = "blue";
//}

//mouseEnter.addEventListener("mouseenter", handlemouseEnter);
//mouseEnter.addEventListener("mouseleave", handlmouseLeave);
//→addができるからremoveEventListenerもできる。

//↓↓↓↓ウィンドウをリサイズしたら背景の色を白色にする↓↓↓↓
//function handoleresize() {
//  document.body.style.backgroundColor = "white";
//}

//window.addEventListener("resize", handoleresize);

//ほかにもいろいろ
//window.addEventListener("copy", handolcopy); //copyをしたとき
//window.addEventListener("offline", handolcopy); //オフラインになったとき

//=================================
//5/22
//=================================
//https://ja.javascript.info/function-basics?afsdads
//[課題]デフォルト値まで読む！

//=================================
//6/7
//=================================
//const h1 = document.querySelector("h1");
//const button = document.querySelector("button");

//const currentColor = h1.style.color;
/*
function handlClick() {
  let currentColor = h1.style.color;
  if (currentColor === "orange") {
    h1.style.color = "teal";
  } else {
    h1.style.color = "orange";
  }
}
*/

//removeをいれないと、オレンジと青どちらも入ってしまっているので、不必要なクラスを一度削除してあげる必要がある
/*
function handlClick{
  if(h1.classList.contains("colorToOrange")){
    h1.classList.add("colorToTeal");
    h1.classList.remove("colorToOrange");
  }else{
    h1.classList.add("colorToOrange");
    h1.classList.remove("colorToTeal");
  }
}
*/
//トグルを使えば、1行で済ませられる！
//function handlClick() {
//  h1.classList.toggle("colorToOrange");
//}

//button.addEventListener("click", handlClick);

//=================================
//6/9
//=================================
//Formを利用してデータ転送が可能。
//GETとPOSTがある

/*↓↓↓↓ログインボタンを押しても更新がかからないような処理↓↓↓↓*/
//const loginForm = document.querySelector("#login-form");

//const onLoginBtnClick = (event) => {
//  event.preventDefault();
//  console.log("HELLO");
//};

//loginForm.addEventListener("submit", onLoginBtnClick);

//=================================
//6/21　復習
//=================================

//const h1 = document.querySelector("h1");
//const button = document.querySelector("button");

//const handlClick = () => {
//  if (h1.classList.contains("teal")) {
//    h1.classList.remove("teal");
//    h1.classList.add("orange");
//  } else {
//    h1.classList.remove("orange");
//    h1.classList.add("teal");
//  }
//};

button.addEventListener("click", handlClick);

//=================================
//6/26
//=================================
const formInput = document.querySelector("#loginForm input");
const formBtn = document.querySelector("#loginForm button");

const handlClick = () => {
  if (dormInput.value === "") {
    alert("値がありません");
  } else if (formInput.value <= 20) {
    alert("未成年です");
  }
};
