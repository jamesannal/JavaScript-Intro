// Section 1

// What types are these?

/* 1.1 */ 1; //number
/* 1.2 */ "cat"; //string
/* 1.3 */ true; //boolean
/* 1.4 */ []; //object
/* 1.5 */ {}; //object
/* 1.6 */ 1.1; //number
/* 1.7 */ var myVariable; //object


// Section 2

// What is the truthiness/falsiness values of the following values?

/* 2.1 */ 1; //truthy
/* 2.2 */ "cat"; //truthy
/* 2.3 */ true; //truthy
/* 2.4 */ NaN;// falsy
/* 2.5 */ []; //truthy
/* 2.6 */ {}; //truthy
/* 2.7 */ undefined; //falsy
/* 2.8 */ ""; //falsy
/* 2.9 */ 0;//falsy


// Section 3

// Using examples that are different from above...

// 3.1 Assign a variable that is a number
var myNumber = 21;
// 3.2 Assign a variable that is a string
var myString = "James";
// 3.3 Assign a variable that is a boolean
var myBoolean = true;
// 3.4 Assign a variable that is an object
var myObject = {objectification: "yes"};

// Section 4

// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false

console.log( true ? "hello" : "bye")

// Section 5

var animals = ["raccoon","hedgehog","mouse","gerbil"];

// 5.1. Assign the first element to a variable
var firstAnimal = animals.shift();
console.log(firstAnimal);
// 5.2. Assign the last element to a variable
var secondAnimal = animals.pop();
console.log(secondAnimal);
// 5.3. Assign the length of an array to a variable
var arrayLength = animals.length;
console.log(arrayLength);
// 5.4. Add an item to the end of the array
var arrayAddEnd = animals.push("hamster");
console.log(animals);
// 5.5. Add an item to the start of the array
var arrayAddStart = animals.unshift("dog")
console.log(animals);
// 5.6. Assign the index of hedgehog to a variable
var arrayGetHedgehog = animals[1];
console.log(arrayGetHedgehog);


// Section 6

// 6.1 Create an array of 5 vegetables
var vegetables = ["potato", "leek", "carrot", "mushroom", "corn"];
// 6.2 Loop over the array and write to the console using a "while"
var counter = 0;

while (counter < vegetables.length) {
  console.log(vegetables[counter]);
  counter += 1
}
// 6.3 Loop again using a "for" with a counter

for (var i = 0; i < vegetables.length; i++){
  console.log(vegetables[i]);
}
// 6.4 Loop again using a "for of"
for (var vegetable of vegetables){
  console.log(vegetable);
}

// Section 7

var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];

// Write functions for the following tasks!
// 7.1 Calculate the total cash in accounts

var sumAmounts = 0;
for (var account of accounts){
  sumAmounts += account.amount;
}
console.log(sumAmounts);

// 7.2 Find the amount of money in the account with the largest balance
var tempArray = [];

for (var account of accounts){
  tempArray.push(account.amount);
}

var highestTotal = Math.max.apply(Math, tempArray);
console.log(highestTotal)
// 7.3 Find the name of the account with the smallest balance
var smallestTotal = Math.min.apply(Math, tempArray);
console.log(smallestTotal);
// 7.4 Calculate the average bank account value
var average = sumAmounts / accounts.length;
console.log(average);
// 7.5 Find the value of marcs bank account
var findMarcsAccount = accounts[2].amount;
console.log(findMarcsAccount);
// 7.6 Find the holder of the largest bank account
for (var account of accounts){
  if (account.amount === highestTotal){
    console.log(account.name);
  }
}
// 7.7 Calculate the total cash in business accounts
var totalBusinessAccounts = 0;
for (var account of accounts){
  if (account.type === "business"){
    totalBusinessAccounts += account.amount;
  }
}

console.log(totalBusinessAccounts);


// 7.8 Find the largest personal account owner
var personalAccount = [];
for (var account of accounts){
  if(account.type === "personal"){
    personalAccount.push(account.amount);
  }
}

var largestPersonalAccount = Math.max.apply(Math, personalAccount);

for (var account of accounts){
  if (account.amount === largestPersonalAccount){
    console.log(account.name);
  }
}




// Section 8

// Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method


var myPerson = {
  name: "James",
  height: 183,
  favouriteFood: "Chicken Saltimbocca",
  eat: function() {
    return this.favouriteFood + " is ba-chompa-chomped!";
  }
}

console.log(myPerson.eat());