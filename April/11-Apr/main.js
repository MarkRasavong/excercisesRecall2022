// 8kyu Abbreviate a Two Word Name
// MY SOLUTION
const abbrevName = name => {
  const nameArray = name.split(' ');
  return nameArray.map(name => name.charAt(0).toUpperCase()).join('.');
};

//8kyu Convert boolean values to strings 'Yes' or 'No'
//MY Solution

function boolToWord(bool) {
  return bool === true ? "Yes" : "No"
};

//8 kyu Even or Odd

function even_or_odd(number) {
  return number % 2 ? "Odd" : "Even"
}

// 8kyu Return Negative
function makeNegative(num) {
  return num > 0 ? num * -1 : num
}

//8kyu Reverse List Order

function reverseList(list) {
  return list.reverse();
};

//8kyu Convert number to reversed array of digits
//
function digitize(n) {
  const convertToStrArr = n.toString().split('').reverse();
  return convertToStrArr.map(num => parseInt(num));
};

function digitize1(n) {
  return Array.from(String(n), Number).reverse();
};

function digitize2(n) {
  return String(n).split('').map(Number).reverse()
}