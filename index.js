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
