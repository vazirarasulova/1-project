
var moneyQuantity = Number(prompt("Pul miqdorini so'mda kiriting"));



var usd = 750;
var euro = 120;

var convertDollor = usd * 10864.96;
var convertEuro = euro * 12359.65;
var amountMoney = convertDollor + convertEuro;



if (moneyQuantity >= amountMoney) {
console.log("Oq yo'l, Alisher!");


}else {
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}


