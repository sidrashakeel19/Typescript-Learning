// Greets the world.
//console.log("Hello!");
//to run file tsc hello.ts and then run node.js
//// This is an industrial-grade general-purpose greeter function:
// function greet(person, date) {
//     console.log(`Hello ${person}, today is ${date}!`);
// }
// greet("Brendan");
//To ensure js file doesnt get updated tsc --noEmitOnError hello.ts
// //Explicit types
// function greet(person: string, date: Date) {
//     console.log(`${person}, today is ${date.toDateString()}!`);
// }
// greet("Sidra", new Date());
//Erased types
"use strict";
function greet(person, date) {
    console.log("Hello " + person + "! Today is " + date.toDateString() + ".");
}
greet("Sidra", new Date);
