// 8kyu Total amount of points
// https://www.codewars.com/kata/5bb904724c47249b10000131/solutions/javascript
const seasonPoints = (matchResultsArr) => {
  let total = 0;

  const eachMatch = matchResultsArr.map(match => {
    return match.split(":")
  });

  eachMatch.map(match => {
    const home = parseInt(match[0]);
    const away = parseInt(match[1]);

    if (home > away) {
      total += 3
    } else if (home === away) {
      total += 1
    } else {
      return
    }
  })

  return total;
}

//v2
const points = games => games.reduce((acc, current) => {
  return acc += current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0;
}, 0);

//Number.isFinite === includes zero as well. before it was considered a falsy value.
const filter_list = (l) => l.filter(Number.isFinite);

//7kyu highAndLow
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

const highAndLow = (numbers) => {
  const sortedNums = numbers.split(" ").sort((a, b) => a - b)
  return `${sortedNums.slice(-1)} ${sortedNums[0]}`;
};

//v2
function highAndLow1(numbers) {
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
}

//https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/solutions
// 7kyu sume of odd numbers
function rowSumOddNumbers(n) {
  return Math.pow(n, 3);
};

