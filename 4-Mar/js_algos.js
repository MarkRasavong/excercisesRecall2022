// #1
// [[18,20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// > 55, > 7;
// ["Open", "Open", "Senior", "Open", "Open", "Senior"];

//CATEGORIZING NEW MEMBER => RAQUEt club
const openOrSenior = data => {
  data.map((info) => {
    if (info[0] >= 55 && info[1] > 7) {
      return "Senior"
    } else {
      return "Open"
    }
  })
};

//or
const openOrSenior1 = data => {
  //Array Distructuring
  return data.map(([age, handicap]) => (age > 54 && handicap > 7) ? "Senior" : "Open")
};

//6KYU DUBSTEP 
// WE ARE THE CHAMPIONS MY FRIEND, WUBWUB

const songDecoder = song => {
  //replace all WUB in a global scale, a+ => one or more of a type
  //trim removes white space
  return song.replace(/(WUB)a/g, ' ').trim();
};

//7KYU Sum of two lowest postive intergers
const sumTwoSmallestNumers = (numbers) => {
  //ascendingOrder => destructored grabing the first two indexes
  const [first, second] = numbers.sort((a, b) => a - b);
  return first + second;
  //descendingOrder
  //number.sort((a, b) => b - a);
  console.log(numbers);
};

//6KYU REPLACE WITH ALPHABET POSITION
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

const alphabetPosition = (text) => {
  //The sunset sets at twelve o' clock.
  alphabet.indexOf()
  return text
    .toLowerCase()
    .replace(/[^a-zA-Z]]/g, '')
    .split('')
    .map((letter) => alphabetPosition.indexOf(letter + 1))
    .join(' ');
};

const alphabetPosition2 = text => {
  return text
    .toUpperCase()
    .replace(/[^A-Z]/g, '')
    .split('')
    .map(ch => ch.charCodeAt(0) - 64)
    .join(' ');
}
alphabetPosition("The sunset sets at twelve o'clock.");

// VOWEL COUNT
function getCount(str) {
  let vowelCount = 0;

  for (const letter of str) {
    if (letter.match(/[aeiou]/g)) {
      ++vowelCount;
    }
  }

  return vowelCount;
}

const getCountV2 = str => {
  return str.split('').reduce((acc, ltr) => ltr.match(/[aeiou]/g) ? ++acc : acc, 0);
};

const getCountV3 = str => str.match(/[aeiou]/gi || []).length;