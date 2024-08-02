//Q18
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//.store the location in a array. Make sure the array is 
// not in alphabetical order.
var places = ["Islamabad", "Peshawar", "Multan", "Karachi", "Lahor"];
//• Print your array in its original order.
console.log("orijinal order :", places);
//• Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order:", __spreadArray([], places, true).sort());
//• Show that your array is still in its original order by printing it.
console.log("orijinal order :", places);
//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Alphabetical order:", __spreadArray([], places, true).sort().reverse());
//• Show that your array is still in its original order by printing it again
console.log("orijinal order :", places);
//• Reverse the order of your list. Print the array to show that its order has changed.
console.log("Reverse order :", places.reverse());
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("orijinal order :", places.reverse());
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log("Alphabetical order:", places.sort());
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log("Reverse Alphabetical order:", places.sort().reverse());
//Q19
var guestlist = ["hammad ali", "shehbaz", "sami"];
var absentguest = "hammad ali";
var newGuest = "ahmad ali";
guestlist[0] = newGuest;
guestlist.unshift("naveed ahmad");
guestlist.splice(2, 0, "feroz");
guestlist.push("hammad ali");
console.log("sorry we can't arrang a bigger dinerr table so only two guest are invited");
while (guestlist.length < 2) {
    var removeGUEST = guestlist.pop();
    console.log(removeGUEST, "sorry you are not invited to dinner");
}
// for (let i= 0; i < guestlist.length;i ++)  {
// console.log("dear Mr \n" ,guestlist[i] ,"\nyou are still invited to dinner\n thank you");
//}
// remove guests from tha array
guestlist.splice(0, 2);
console.log(guestlist);
console.log("the number of people you are inviting to dinner", guestlist.length);
//Q20
var array = ["english", "urdu", "sindhi", "panjabi", "seraiki"];
array.forEach(function (array) {
    console.log(array);
});
var personaleData = {
    name: "hammad ali",
    age: 21,
    education: "intermediate"
};
console.log(personaleData);
//Q22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var num1 = ["1", "2", "3", "4"];
//      0 ,1,2,3
console.log(num1[5]);
console.log(num1[2]);
//Q23
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== 'subaru');
console.log("Is car == 'ford'? I predict True.");
console.log(car == 'ford');
console.log("Is car !== 'ford'? I predict True.");
console.log(car !== 'ford');
console.log("Is car == 'honda'? I predict True.");
console.log(car == 'honda');
console.log("Is car !== 'honda'? I predict True.");
console.log(car !== 'honda');
console.log("Is car == 'suzuki'? I predict True.");
console.log(car == 'suzuki');
console.log("Is car !== 'suzuki'? I predict True.");
console.log(car !== 'suzuki');
console.log("Is car == 'bmw'? I predict True.");
console.log(car == 'bmw');
console.log("Is car !== 'bmw'? I predict True.");
console.log(car !== 'bmw');
