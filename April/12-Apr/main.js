// 8kyu Sum without highest and lowest number
// MY SOLUTION
function sumArray(array) {
  if (array == null || array.length <= 2) {
    return 0
  }

  const maxNum = Math.max(...array);
  const minNum = Math.min(...array);

  return array.reduce((acc, val) => (
    acc + val
  )) - maxNum - minNum;
};

function sumArray1(array) {
  if (array == null) {
    return 0;
  } else if (array.length < 2) {
    return 0;
  } else {
    array = array.sort(function (a, b) { return a - b; });
    var total = 0;
    for (var i = 1; i < array.length - 1; i++) {
      total += array[i];
    }
    return total;
  }
};

//8kyu Count of positives / sum of negatives
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return []
  }

  const intergerCount = input.filter(num => num > 0).length;
  const totalNegatives = input.filter(num => num <= 0).reduce((acc, val) => acc + val, 0);

  return [intergerCount, totalNegatives];
}

//8kyu Simple Fun #1: Seats in Theater
//https://www.codewars.com/kata/588417e576933b0ec9000045/train/javascript
function seatsInTheater(nCols, nRows, col, row) {
  return (nCols - col + 1) * (nRows - row);
}