const myObj = {
    carName :"volvo",
    carNumber: 12344,
    color: "red",
    year: 2024,
    owner: "pinky",
    carName : 'Fiat',
    carWeight: '850kg'
}

const car = {type:"Fiat", model:"500", color:"white"};


// Create an Object
const person = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

// Create an Object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};

// Create an Object
const person = new Object();

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";


const NewObj = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  myfunction : function(){
   return this.firstName +" " +this.lastName
  }   
}
//  this refers to the person object:

person.nationality = "English";
delete person.age;
delete person["age"];


//Nested Objects

myObj = {
  name:"John",
  age:30,
  myCars: {
    car1:"Ford",
    car2:"BMW",
    car3:"Fiat"
  }
}

myObj.myCars.car2;

//Using JavaScript Methods

person.name = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

// How to Display JavaScript Objects?

const obj= {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
}

document.getElementById('demo').innerHTML = obj;

// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Display Properties
document.getElementById("demo").innerHTML =
person.name + "," + person.age + "," + person.city;


const person ={
    name:"pinky",
    lname:"mehta",
    age:29,
    DOB:13/10/1995
}
let text ="";
 for(let i in person){
    text+= p[i]+" ";
 }
 document.getElementById('HELLO').innerHTML= text;

 //Using Object.entries()
const fruits = {Bananas:300, Oranges:200, Apples:500};

let text1 = "";
for(let [j,k] in Object.entries(fruits)){
    return j+":"+k +'<br/>';
}
document.getElementById('demo').innerHTML = text1;


// Create an Object
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Stringify Object
let myString = JSON.stringify(person);

// Display String
document.getElementById("demo").innerHTML = myString;


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.fullName = function() {
    return this.firstName + " " + this.lastName;
  };
}

// Built-in JavaScript Constructors

new Object()   // A new Object object
new Array()    // A new Array object
new Map()      // A new Map object
new Set()      // A new Set object
new Date()     // A new Date object
new RegExp()   // A new RegExp object
new Function() // A new Function object