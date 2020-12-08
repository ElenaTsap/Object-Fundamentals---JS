console.log('Hello new brave world :)');


/*
Syntax: { key : value, newKey : newValue, ... }

key + value = property

HEADS-UP: Value can be anything even any object

HEADS-UP: We can type "name" as we wish

HEADS-UP: All variable creating rules are valid in objects

HEADS-UP: We can use names which are reserved by JS in object keys
but not in variable names

HEADS-UP: We have to create key and value (both) for any property

*/



console.log({name: 'Burhanovic', age: '24'});

let myFirstObj = {name: `Burhanovic`, age: 24};

console.log(myFirstObj);


//HEADS-UP: We can use variables as value since 
//variables are containing data (variables have values)
let name = prompt('What is your name?');

let age = prompt('How old are you?');

let attendeeA = {name: name, age: age};

console.log(attendeeA);


//SHORT-CUT: If "value" of property ıs a variable we can skip "key"
//So, variable name would be "key", variable value would be "value" of the property

let attendeeB = {name, age, calss: 'the404s'};
console.log(attendeeB);

let color = 'black';
let material = 'metal';

let toy = {color, material}

//HEADS-UP: Even the value of the variable is an object this rule works!
////HEADS-UP2: Objects are data types so objects can contain objects as value but not as key
console.log(toy);

let toyBox = {toy};

console.log(toyBox);

let students = {student1:{name:'Bulent', age:35}, student2:{name:'Nicklaus', age:31}}

console.log(students); // Totally there're 3 objects //students, student1,student2
console.log({students}); // Totally there're 4 objects // untitled, students, student1,student2


//Next 2 lines creates empty objects and there's no difference between two
let test1 = new Object();
let test2 = {};

console.log(test1);
console.log(test2);


let car = {brand: 'BMW', model:'X6', color: 'white', year: 2021};

console.log(car); // this does not show {brand: 'BMW', model:'X6', color: 'white', year: 2021}
//OUTPUT: {<Value of prompt>: "yes", airbag: "yes",brand: "BMW",color: "red",laser: "yes",model: "x5", myKey: "no", year: 2021}

car['model'] = 'x5'; //updating the property

car['laser'] = 'yes'; //creating a new property
car.airbag = 'yes';

car.color = 'black'; //updating the property
car['color'] = 'red'; //updating the property
//HEADS_UP: Last update will be winner 

//INFO: Square brackets give a chance to create a dynamic name for the key
let myKey = prompt('Give me a key');
car[myKey] = 'yes';
car.myKey = 'no';

//HEADS_UP: If you use . you can not create a dynamic name for the key
console.log(car.color);
console.log(car['color']);

console.log(car);


let testMe = 'Hey';

console.log(testMe);

testMe = 123;

console.log(testMe);


/*
1) Ask for how many properties will have the object

2) Create a loop to get key and values of properties

3) Create properties into the object

4) Log on console the final Object

5) alert the  final Object
*/

let userObj = {};
console.log(userObj);
let propCount = parseInt(prompt('How many properties would you create?'));

for (let i = 1; i <= propCount; i++) {
    let key = prompt(`Please set the key for the ${i}. property`);
    let val = prompt(`Please set the value for the ${i}. property`);

    userObj[key] = val;
}

console.log(userObj);

//userObj = JSON.stringify(userObj);
alert(JSON.stringify(userObj));
alert(userObj);



let sUserObj = JSON.stringify(userObj);

alert(sUserObj);

//userObj = Object
//sUserObj = String


console.log(sUserObj);


sUserObj['new'] = 'Some Text'; //Does not work
console.log(sUserObj);

userObj['new'] = 'Some Text'; //Works
console.log(userObj); 