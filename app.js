/* Kept my name in a variable*/
let myName = 'Safkat';

/* Kept USA's states number in a constant variable */
const USA_states = 50;

/* Kept the result of (5+4) in a variable */
let adding = 5 + 4;

/* A function named sayHello */
function sayHello () {
      alert('Hello World!');
}
sayHello();

/* A function to check age */
function checkAge (name, age) {
      if (age < 21) {
            alert(`Sorry ${name} you are not old enough to view this page!`);
      }
}

checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);

/* Array of my fav vegetables */
let myFavVeg = ['Cucumber', 'Carrot', 'Onion', 'Broccoli'];

let count = 0;
while (count < myFavVeg.length) {
      console.log(myFavVeg[count]);
      count++;
}

/* making a object for my pets */
let pet = {
      name: 'Muku',
      breed: 'German Shepherd'
}

/* Array of names and ages which are object properties */
let bestProgrammers = [
      {
            name: 'Arya Stark',
            age: 21
      },
      {
            name: 'Branden Stark',
            age: 18
      },
      {
            name: 'Tony Stark',
            age: 17
      },
      {
            name: 'Jhon Snow',
            age: 25
      },
      {
            name: 'Safkat Jaman',
            age: 21
      }
];

/* Calling the checkAge function with for..in loop */
for (i in bestProgrammers) {
      checkAge(bestProgrammers[i].name, bestProgrammers[i].age);
}

/* A function to get length of word */
function getLength (word) {
      return word.length;
}

let wordLength = getLength('Hello World!');

if (wordLength % 2 == 0) {
      console.log('The word is nice and even');
} else {
      console.log('The word is an odd place!')
}