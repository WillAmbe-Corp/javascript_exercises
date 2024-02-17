/*------------------------------------CHAPTER 1 WORK------------------------------------*/

//Ex 1.2

console.log("Time to achieve big things...");

// Ex 1.4

let a = 10; //a value of 10 was assigned to the variable a

console.log(a);

/*
This chapter introducs us to the 
use of the JavaScript console as well
as comments and how to 
connect the JavaScript file to html
*/

//Chapter Project

let name = console.log("Will Ambe");

/*This is a multiple line
comment which explains what the code line above does
The code simply logs Will Ambe to the console of the browser*/

/*-------------------------------------------END OF CHAPTER-----------------------------*/


/*------------------------------------CHAPTER 2 WORK------------------------------------*/

//Ex 2.1

let str1 = typeof 'Laurence';
let str2 = typeof 'Svekis';
let val1 = typeof undefined;
let val2 = typeof null;
let myNum = typeof 1000;

console.log(`str1 = ${str1} , str2 = ${str2} , val1 = ${val1} , val2 = ${val2} , myNum = ${myNum}`);

//Ex 2.2

let adjacent = prompt("Enter the adjacent of your right-angled triangle");
let opposite = prompt("Enter the opposite of your right-angled triangle");
let hypothenus = (adjacent**2 + opposite**2)**(0.5);

console.log(`The hypothenus of your right-angled triangle is = ${hypothenus}`);

//Ex 2.3

let x = 21;
let y = 6;
let z = 3;

y += x;
x /= z;
z %= y;

console.log(`x = ${x}, y = ${y}, z = ${z}`);

//Chapter Project1: Miles-Kilometers converter

let distanceInMiles = 130;
let unitMile = 1.60934;
let distanceInKilometers = distanceInMiles * unitMile;
console.log(`The distance of ${distanceInMiles} miles is equal to ${distanceInKilometers} kilometers`)

//Chapter Project2 : BMI Calculator

let heightInInch = 75;
let weightInPounds = 135;
let unitInch = 2.54;
let unitKg = 2.2046;
let heightInCentimeters = heightInInch * unitInch;
let weightInKgs = weightInPounds / unitKg;
let BMI = weightInKgs / ((heightInCentimeters)**2);

console.log(`height in centimeters: ${heightInCentimeters}, weight in kilometers: ${weightInKgs}`);
console.log(`your BMI is ${BMI}`);


/*-------------------------------------------END OF CHAPTER-----------------------------*/

/*------------------------------------CHAPTER 3 WORK------------------------------------*/

//Ex 3.1

let shoppingList = ['Milk', 'Bread', 'Apples'];
console.log("the shopping list has " , shoppingList.length ," items");
shoppingList[1] = 'Banana';
console.log("the shopping list items are " ,shoppingList);

//Ex 3.2
let shoppingList2 = [];
shoppingList2.push('Milk', 'Bread', 'Apples');
shoppingList2.splice(1,1, 'Banana', 'Eggs');
shoppingList2.pop();
shoppingList2.sort();
console.log("Milk is index", shoppingList2.indexOf("Milk"));
shoppingList2.splice(1,0, "Carrots", 'Lettuce');
let newShoopingList = ['Juice', 'Pop'];
let finalList = shoppingList2.concat(newShoopingList.concat(newShoopingList));
console.log("the last index of Pop is ",finalList.lastIndexOf('Pop'));
console.log("the shoppingList2 items are " , finalList);

//Ex 3.3
let arrOfValues = [1, 2, 3];
let newArr = [arrOfValues, arrOfValues, arrOfValues];
console.log(newArr[0][1], newArr[1][1], newArr[2][1]);


//Ex 3.4    
let myCar = {
    make : 'Toyota',
    model : 'Carina',
    year : 'Blue',
    forSale : false
};
let str = "color";
myCar.str = 'red';
str = 'forSale';
myCar[str] = true;
console.log(myCar.make, myCar.model);
console.log(myCar.forSale);

//Ex 3.5
let people = {
    friends:[]
}
let friend1 = {
    firstName: 'Will',
    lastName: 'Ambe',
    Id : 1
}
let friend2 = {
    firstName: 'John',
    lestName: "Doe",
    Id : 2
}
let friend3 = {
    firstName: 'Blanshal',
    lastName: 'Che',
    Id : 3
}
people.friends.push(friend1, friend2, friend3);

console.log("my friends are",people);

//Chapter Project1 

let thisArray = ['Laurence', 'Svekis', true, 35, null, undefined, {teest : true}];
thisArray.shift();
thisArray.pop();
thisArray.unshift('FIRST');
thisArray[4] = 'hello wolrd';
thisArray[3] = 'MIDDLE';
thisArray.push('LAST');
console.log(thisArray);

//Chapter 3 Project2

let inventory = [];
let item1 = {
    name : 'watch',
    model : 'rolex',
    cost : 200,
    quantity : 5
}
let item2 = {
    name : 'iPhone',
    model : 'iPhone 12 pro max',
    cost : 500,
    quantity : 10
}
let item3 = {
    name : 'laptop',
    model : 'Lenovo ThinkPad',
    quantity : 2
}

inventory.push(item1, item2, item3);

console.log(inventory[2].quantity);
console.log(inventory[1].model);
console.log(inventory[0].cost);

/*-------------------------------------------END OF CHAPTER-----------------------------*/


/*------------------------------------CHAPTER 4 WORK------------------------------------*/

// Ex 4.1
let bool = false;
console.log(bool);
if(bool){
    console.log("You are really lazy dude, got to start working now so as to start earning ASAP");
}
if (!bool){
    console.log("That's good keep up with the spirit consistency is the key");
}

//Ex 4.2

let usrAge = prompt("Please enter your age");
 usrAge = Number(usrAge);
 let msgVariable;
 if (usrAge => 21){
    msgVariable = "Welcome to our palace, feel free to command any wine of your choice.";
 }
 else if (usrAge => 19){
    msgVariable = "Welcome to our palace, you are free to command any non alcoholic drink of your choice.";
 }
 else {
    msgVariable = "Sorry we can't permit you into our palace since you are below 19 years which is the minimum age for any individual entering here.";
 }
 console.log(msgVariable);

 //Ex 4.3

 let ID = true;
  !ID? console.log("Welcome sir how can we help you today") : console.log("Sorry but we can\'t let you in due to authentication failure.");

//4.4

let rndmNumber = Math.floor(Math.random() * 6);
let question = prompt("Ask any question...");
let answer;

switch (rndmNumber) {
    case 0: answer ="Seek first the kingdom of God and it's righteousness and any other thing shall be granted to you.";
           break;
    case 1: answer ="That isn't important for the moment, ";
    break;
    case 2: answer ="Don't even dream about that.";
     break;
    case 3: answer ="LOL you think you can ever, hahahaha";
     break;
    case 4: answer ="You way wowo so want do wety witam?";
     break;
    case 5: answer ="Keep on dreaming";
     break;
    }

    console.log("You asked", question, "Your answer is", answer);

    //Chapter Project 1

let userNumber = Number(prompt("Enter a number"));    
let myNumber = 5;
if (userNumber < myNumber){
    console.log(userNumber + " is smaller than " + myNumber);
}
else if (userNumber > myNumber){
    console.log(userNumber + " is greater than " + myNumber);
}
else{
    console.log(userNumber + " is equal to " + myNumber);
}

// Chapter Project 2

let usrName = prompt("Who do you think my friend is?");
// let myFriends = ['Smith', 'Liza', 'Grace', 'Jospen', 'Jerry', 'Pride'];
    switch (usrName){
        case 'Smith': console.log("A good all friend of mine"); 
        break;
        case 'Liza': console.log("A sweet and lovely friend of mine"); 
        break;
        case 'Grace': console.log("The latest Bob Marley in town"); 
        break;
        case 'Jospen': console.log("My gee"); 
        break;
        case 'Jerry': console.log("My knonji friend"); 
        break;
        case 'Pride': console.log("A friend and a brother"); 
        break;
        default: console.log("Either I didn't mention that person or the person isn't my friend"); 
    }

    //Chapter Project 3
    let game = ["Rock", 'Paper', 'Scissors'];
    let playerSelection = Math.floor(Math.random()*3);
    let computerSelection = Math.floor(Math.random()*3);
    let gameResults;
   if (playerSelection === computerSelection) {
    gameResults = "It's a tie";
   }
   else if (playerSelection < computerSelection) {
    if ((playerSelection === 0 && computerSelection === 2)){
        gameResults = "You win!";
    }
    else{
        gameResults = "You lose!";
    }
   }
   else{
    if (playerSelection === 2 && computerSelection == 0){
        gameResults = "You lose!";
    }
    else{
        gameResults = "You win!";
    }
   }
    
    console.log("The player choosed "+game[playerSelection], "and the computer choosed "+game[computerSelection], "hence "+gameResults);


/*------------------------------------CHAPTER 6 WORK------------------------------------*/

// //Ex 6.1

// function addTwoNumbers(x,y){
//     return x + y;
// }

// let i = 12;
// let j = 5;
//  console.log(addTwoNumbers(i, j));
//  console.log(addTwoNumbers(25, 75));

//  //Ex 6.2

//  let describeNames = ['brave', 'wise', 'romantic', 'shy'];


//  let askName = function(){
//     let name = prompt('Which name do you want to describe? ');
//     let randomName = Math.floor(Math.random()*(describeNames.length));
//     console.log(name,": ", describeNames[randomName]); 
// };
// // describeNames.forEach(askName);

//  askName();

//  //Ex 6.3 

//  let val1 = 30;
//  let val2 = 12;
//  let operator = '-';
//  let calculate = () => operator === '-'? console.log(val1 - val2) : console.log(val1 + val2);
//  calculate(val1, val2, operator);

//  //Ex 6.4

//  let sumOfElements = [];
//  let myFunction = (newValue1, newValue2) => (newValue1 + newValue2);

// for (let i = 0; i < 10; i++) {
//     let newValue1 = i * 5;
//     let newValue2 = i * i;
//     let results = myFunction(newValue1, newValue2);
//     sumOfElements.push(results);
// }

// console.log(sumOfElements);

// //Ex 6.5

// let strValue = '1000';
// (function () {
//     let strValue = "10";
//     console.log(strValue);
// })();
// let result = (function () {
//     let strValue = '500';
//     return strValue;
// })();
// console.log(result, strValue);

// (function (strValue) {
//     console.log(`My name is ${strValue}`);
// })('Will');

// //Ex 6.6

// function factorial(value){
//     console.log(value)
//     if (value === 0){
//         return 1;
//     }
//     else{
//         return value * factorial(value - 1);
//     }
//     // console.log(value);
// }
// console.log(factorial(5));

// //Ex 6.7
// console.log("");
// let startVal = 10;
// function countDown(countDownValue) {
//     console.log("this is",countDownValue);
//     if(countDownValue < 1){
//         return;
//     }
//         return countDown(countDownValue - 1);
//         // countDownValue = countDownValue - 1;
// }
// countDown(startVal);
// function countDown2(countDownValue) {
//     console.log(countDownValue);
//     if (countDownValue > 0 ) {
//         countDownValue --;
//         return countDown2(countDownValue);
//     }
//         return ;
// }
// countDown2(startVal);
// // console.log(countDown2(startVal));

// //Ex 6.8

// let anonymousFunction = function (anonymous){
//     console.log('Inside anonymous function1');
// }
// // anonymousFunction();

// function anonymousFunction1(anonymous){
//     console.log("Inside anonymous function2");
//     console.log(anonymous);
// }
// anonymousFunction1(anonymousFunction);

// //Chapter Project 1

// count = 0
// function recursiveFunction(value){
//     console.log(value);
//     if (value < 10){
//             return recursiveFunction(value + 1);
//         }
//         // return ;
// }
// recursiveFunction(count);

// //Chapter Project 2

// let countOne = () => console.log('One');
// let countTwo = () => console.log('Two');
// let countThree = (one, two) => {
//     console.log('Three');
//     // countThree(countOne, countTwo);
//     countOne();
//     countTwo();
// }
// // countThree(countOne, countTwo);
// let countFour = () => {
//     console.log('Four');
//     countThree();
//     setTimeout(countOne, 0);
// }
// countFour();

//  /*-------------------------------------------END OF CHAPTER-----------------------------*/


//   /*------------------------------------CHAPTER 7 WORK------------------------------------*/

//   //Ex 7.1

//   class Person{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//   }

//   let friend = new Person('Charle', "Smith");
//   let newFriend = new Person('Ngulefac', "Jerry");

//   console.log(`Hello ${friend.firstname} ${friend.lastname} and ${newFriend.firstname} ${newFriend.lastname}`)

//   //Ex 7.2

//   class Person1{
//     constructor(firstname, lastname){
//         this.firstname = firstname;
//         this.lastname = lastname;
//     }
//     fullname(firstName, lastName){
//         return  this.firstname +" "+ this.lastname;
//     }
//   }
//   let friend1 = new Person1('Charle', "Smith");
//   let newFriend1 = new Person1('Ngulefac', "Jerry");
//   console.log("Hello "+ friend1.fullname()+ " and ", newFriend1.fullname());

//   //Ex 7.3

//   class Animal{
//     constructor(type, name, sound, color, age, weight){
//         this.type = type;
//         this.name = name;
//         this.sound = sound;
//         this.color = color;
//         this.age = age;
//         this.weight = weight;
//     }
//     aSound(){
//         console.log(this.type+ " can "  +this.sound);
//     }
//   }

// //   class Dog extends Animal{
// //     constructor(race, gender,){
// //         super(type,name,sound,color,age,weight);
// //         this.race = race;
// //         this.gender = gender;
// //     }
// //   }
// //   class Cat extends Animal{
// //     constructor(){
// //         super(type,name,sound,color,age,weight);
// //     }
// //   }
//   Animal.prototype.live = function(){
//     console.log(this.type + " Lives with humans");
//   }
//   let Dog = new Animal('Dog', "Rex", 'barks', 'black', '5 years', '25 Kgs', 'german shepherd', 'femamle');
//   console.log(Dog.type, Dog.name, Dog.aSound, Dog.color, Dog.age, Dog.weight, Dog.race, Dog.gender);

//   //Chapter 7 Project 1

//   class Employee{
//     firstName;
//     lastName;
//     yearsOnService;
//     constructor(firstName, lastName, yearsOnService){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.yearsOnService = yearsOnService;
//     }
//   }
//   let person1 = new Employee('Will', 'Ambe', 5);
//   let person2 = new Employee('John', 'Doe', 10);

//   let employeeList = [person1, person2];

//   Employee.prototype.getEmployees = function(){
//     return this.firstName +" "+ this.lastName + " worked with us for " +
//      this.yearsOnService +" years";
//   }

//   employeeList.forEach ((person) =>{ console.log(person.getEmployees())});
// //   console.log(employeeList[0]);
// // let p1 = employeeList[1].firstName;
// // let p2 = employeeList[1].lastName;
// // let p3 = employeeList[1].yearsOnService;

// // console.log(p1 + " " + p2 + " has worked with us for " + p3 + " years");

// // let p01 = employeeList[0].firstName;
// // let p02 = employeeList[0].lastName;
// // let p03 = employeeList[0].yearsOnService;

// // console.log(p01 + " " + p02 + " has worked with us for " + p03 + " years");

// //Chapter 7 Project 2

// class Items{
//     #item1 = 24;
//     #item2 = 60;
//     constructor(price1, price2){
//         this.price1 = price1;
//         this.price2 = price2;
//     }
//     totalCost(){
//         return (this.price1 * this.#item1) + (this.price2 * this.#item2);
//     }
//     get cost(){
//         return this.totalCost();
//     }
// }

// let firstItem = new Items(25, 10);
// let secondItem = new Items(10, 15);
// console.log(firstItem.cost);
// console.log(secondItem.cost);

// console.log(typeof undefined);

//  /*-------------------------------------------END OF CHAPTER-----------------------------*/


//  /*------------------------------------CHAPTER 8 WORK------------------------------------*/

//  //Ex 8.1

//  let uri = 'How\'s it going?';
//  let encode_uri = encodeURIComponent(uri);
//  let decode_uri = decodeURIComponent(uri);
//  console.log(
//     'encode = ', encode_uri,
//     '\ndecode = ', decode_uri
//  );

//  let url = 'http://www.basescripts.com?=Hello World";';
//  let encodeUri= encodeURIComponent(url);
//  console.log(encodeUri);

// //  let arr = ["Will ",20,21, 'James ', true, false];
// //  let printOut = (element, index) => console.log(element, " is at index ", index);
// //  arr.forEach(printOut);
// //  console.log(typeof arr[1]);
// //  let sort = (element, index) => {
// //     // return typeof element == 'number';
// //     return typeof element == "boolean";
// //  }
// //  console.log(arr.filter(sort));
// //  console.log(arr.every(sort))
// //  newArr = arr.map(x => x + 0);
// //  console.log(arr);
// //  console.log(newArr);

// // Ex8.2

// let peopleNames = ['Elisabeth', "Blanshal", 'Will', 'Smith', 'Will', 'Megane', 'Blanshal', 'Ronda', 'Ronda', 'Ambe'];

// let pip = peopleNames.filter((value, index, array) => {
//     console.log(value, index, array, peopleNames.indexOf(value));//this will print the elements of the array, the index of each element, the entire array and the fisrt index at which each element appears in
//     return peopleNames.indexOf(value) === index;//since indexOf returns only the first index an element gets within a specific array, this line will check for the elements who repeat themselves in the array, compare their actual index to the index of when they firstly appear and discards the biggest index
// })
// console.log(pip);
// /*
// Other words, the above code will 
// print each element in the array with
// their respective index and index of first 
// occurence (for elements that may repeat 
// themselves) as well as the entire aaray beside each element
// It will then compare the index of each value to the index of
// first occurence of each value, compare the indexes and filter
// off the indexes with higher values*/

// // Ex8.3

// let numbers = [1,2,3,4,5,6,7,];
// let newNumbers = numbers.map(x => x * 2);
// let newNumbers2 = numbers.map(function(n){
//     return n * 2;
// })
// console.log(newNumbers);
// console.log(newNumbers2);



// let s1 = 'I\'m ';
// let s2 = 'getting ';
// let s3 = 'more comfortable ';
// let s4 =' with JavaScript';
// let s5 =( s1.concat(s2,s3,s4));

// let s6 = s2.split('');
// console.log(s6);
// let searchStr = "When I see my fellow, I say hello";
// let pos = searchStr.search("lo");
// console.log(pos)