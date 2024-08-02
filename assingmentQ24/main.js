"use strict";
// • Tests for equality and inequality with strings
console.log("Enquality test :", "Hmmad ali" === "Hmmad ali");
console.log("Inquality test :", "Hmmad ali" === "Imran khan");
// • Tests using the lower case function
console.log("lowerCase test:", "HMMAD ALI".toLowerCase() === "hmmad ali");
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// than , greater than or equal to, and less than or equal to
console.log("Enquality test :", 1000 === 1000); //Equality
console.log("Inquality test", 10 !== 9); //Inquality
console.log("greater than test", 1000 > 100); //greater than
console.log("less than test", 1000 < 100); //less than
//• Tests using "and" and "or" operators
console.log("And oprator test", true && true);
console.log("Or oprator test ", true || false);
//• Test whether an item is in a array
const car = [1, 2, 3];
console.log("test number", car.includes(1));
//• Test whether an item is not in a array
const car1 = [1, 2, 3];
console.log("test nmber", !car.includes(6));
