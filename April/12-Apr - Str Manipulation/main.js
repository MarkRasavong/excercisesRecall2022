const guessList = "Our guests are: emma, jacob, isabella, ethan";

//get length
console.log(guessList.length);

//uppercar the entire string;
const uppercasedGuestList = guessList.toUpperCase();
console.log(uppercasedGuestList);

//Check if eithan is in the list and return a boolean 
console.log(uppercasedGuestList.includes("ETHAN"))

//sub string that only conatins the following: names
console.log(uppercasedGuestList.indexOf("EMMA"));
console.log(uppercasedGuestList.lastIndexOf("ETHAN"));

const substringGuest = uppercasedGuestList.slice(16, 44);
console.log(substringGuest);

//create an araay of name of people in that list
const guests = substringGuest.split(", ");
console.log(guests);