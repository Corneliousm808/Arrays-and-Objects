/*

Cornelious Mooring
Arrays and Objects
Dec. , 5, 2016

*/

// var
// arrays
var numbers = [1,2,3,4,5,6,7,8,9,10];
var names = ["Senior Tan", "Zakattak", "Yolo Baggins", "Ohai", "Basic Jeff"];
var colors = ["black", "ron burgundy", "highlighter"];
var adj = ["smart", "special case", "yummy", "tiny whiny", "ferocious"]
var slang = ["scrap", "kobe beef", "da kine", "li 'dat", "pau hana"]


// objects

var donut = {
  toppings : ["sprinkles", "chocolate frosting", "o'hare air"],
  fillings : "jelly",
  shape : "square",
  count : 12
}

function addition(parameter) {
  console.log(parameter[1] + parameter[6])
}

addition(numbers)



function stuff (toppings) {
  for (var i = 0;i < toppings.length ; i++) {
  console.log("This has " + i + " , yay!");
  }
}

stuff(numbers);

