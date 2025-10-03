//replace
console.log("Tech Innovators Inc.")
let company="Tech Innovators Inc.";
console.log(company.replace("Tech Innovators Inc.", "The Tech Hub"))

let randomNumber = Math.random();
console.log(randomNumber);

console.log( randomNumber * 6 );
console.log(Math.ceil(randomNumber * 6));




//Arrays
let fruits = ["Apple", "Banana", "pineapple", "orange"];
let items= ["fish", "orangutan", 25, "red","reed"];
 console.log(fruits);
 console.log(items);
 console.log(items + " These are the items needed for school ma'am");
 console.log(fruits.length);
 console.log(items[2]);

 //.push() 
fruits.push("kiwi");
console.log(fruits);
items.pop();
console.log(items);



let alphabets = ["a", "b", "c", "d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
console.log(alphabets);
let randomnumber = Math.random();

console.log(alphabets[Math.floor(randomnumber * alphabets.length)]);


Math.floor
// math.ceil

//conditional staements if (condition) {}

if (30 < 10) {
    console.log("Yes, 30 is greater than 10");
}
else{
    console.log("No, 30 is not greater than 10");
}

//if else if else
let adesPosition = 'first';
if (adesPosition === 'first') {
  console.log('You get a PS5!');
} else if (adesPosition === 'second') {
    console.log('You get a bicycle!');
}
else if (adesPosition === 'third') {
    console.log('You get a ball');
    }

// comparison symbols only returns a boolean value.
 //==, ===, !=, !==, >, <, >=, <=


 //logical operators AND GATE $$ (returns boolean)
 // must be 18 years old
 // must have an entry card
 // must put on Suit

let is18 = true;
let hasEntryCard = true;
let wearingSuit = true;
console.log(is18 && hasEntryCard && wearingSuit);

// OR GATE || (returns boolean, at least one condition must be true)
// 
 is18 = true;
  hasEntryCard = false;
 wearingSuit = false;
console.log(is18 || hasEntryCard || wearingSuit);



//in an AND GATE, if one of the output is false, the whole output will automatically turn false.
//While in an OR GATE, if one of the conditions is true, therefore, the output will be true.

let TASK_1 = false
let TASK_2 = false
let TASK_3 = false
let TASK_4 = false

if (TASK_1 & TASK_2 & TASK_3 & TASK_4) {
    console.log("You get a PS5!");
}

else if (TASK_1 & TASK_2 & TASK_3 & !TASK_4){
    console.log('you get an iphone');
}

else if ((TASK_1 & TASK_2) || (TASK_3 & TASK_4)){
    console.log('You get a bicycle')
}

else if((!TASK_1) & (!TASK_2) & (!TASK_3) & (!TASK_4)){
    console.log('Nothing for you eje')
}









 









