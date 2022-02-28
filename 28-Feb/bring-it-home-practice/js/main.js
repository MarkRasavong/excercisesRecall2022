// *Variables*
// Create a variable and console log the value

let strdNum;
console.log(strdNum);

// Create a variable, add 10 to it, and alert the value
strdNum = 0;
strdNum = strdNum + 10;
strdNum += 10;
alert(strdNum);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference

//FUNCTION
function minus4(num1, num2, num3, num4) {
  alert(num1 - num2 - num3 - num4);
};

//FN CALL
minus4(10, 2, 2, 2);

// Create a function that divides one number by another and returns the remainder

//FUNCTION
function remainder(num1, num2) {
  console.log(num1 % num2);
};

//FN CALL
remainder(5, 3);

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanjiCheck(num1, num2) {
  let sum = num1 + num2;
  if (sum > 50) {
    alert("Jumanji!")
  } else {
    alert("Meh!")
  }
};

jumanjiCheck(1, 48);

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA

function dividir3(num1, num2, num3) {
  let result = num1 * num2 * num3;
  if (result % 3 === 0) {
    alert('ZEDBRA')
  } else {
    alert('Sorry, but remainders are a buncha unicorns.... and those are real')
  }
};

dividir3(3, 6, 9);