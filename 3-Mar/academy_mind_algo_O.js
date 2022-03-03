/*
You got a list of items, where every item has a value and weight. You got a bag that holds a a max weight of X.

Write a program that macs the value of the items you put into the bag whilst ensuring that you don't exceeed the max weight;
*/

//KNAPSACK PROBLEM
const items = [
  { id: 'a', value: 10, wt: 3 },
  { id: 'b', value: 6, wt: 8 },
  { id: 'c', value: 3, wt: 3 }
]
const maxWeight = 8;

function weightCheck(itemsArr) {
  let bag = [];

  itemsArr.forEach(item => {
    if (item.wt < maxWeight) {
      bag.push(item);
    }
  });

  console.log(bag);

  //RETURNS: Value: 13, wt: 6 (<8)
};

//weightCheck(items);

//instead of looping
function sumUp(n) {
  return (n / 2) * (1 + n)
};

function sumOfNumbers(n) {
  //loops has a better linear time complexity
  console.log(n.reduce((current, prev) => current + prev)) //4 T = time + n::: T = n => 0(n) => LinearTimeComplexity
};

sumOfNumbers([1, 3, 10, 50]) // yield 14