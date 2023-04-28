const age = prompt("おいくつですか")
console.log(parseInt(age));

if(typeof age === "number"){
console.log("Ageは数字です")
}

if(typeof age ===NaN){
console.log("数字じゃないです")
}

if(isNaN(age)){
  console.log("数字じゃないです")
}


//promptでユーザーとやり取りできる
//自分でないことのせんげんをするとき、PCからの返答
//null 
//undefined


//まずはconst
//一回割り当てたら絶対に中身が変わらない
//constでやってエラーが出たらletを使えばいい

//NaN　＝　not a numbers

