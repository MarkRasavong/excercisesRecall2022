/* STACKS */

//fns covered: push, pop, peek, length; 

//PALINDROME LOGIC
let letters = []; // this is our stack
const word = 'mark';
let rword = '';

//PUSH LETTERS OF WORD INTO STACK
//Loop: start @ idx 0, and go to the last idx of the word string, 
for (var i = 0; i < word.length; i++) {
  // word[i] => take each letter from the word
  letters.push(word[i]);
};

//POP OFF THE STACK IN REVERSE ORDER
//.pop() => removes the last element from an array and returns that element
for (let i = 0; i < word.length; i++) {
  //pop off in reverse order
  rword += letters.pop();
};

if (rword === word) {
  console.log(`${word} is a palindrome.`)
} else {
  console.log(`${word} is not a palindrome`)
};

const setA = new Set();
const setB = new Set();

setA.add('a');
setB.add('b');
setA.add('c');
setB.add('a');
setB.add('d');
setB.add('d');
console.log(setB.values());