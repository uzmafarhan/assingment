//Q44 
function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the followingitems: \n ");
    items.forEach(function (singleItems) {
        return console.log(singleItems);
    });
    console.log("Now Enoy Sandwich");
}
makeSandwich("bread", "butter");
makeSandwich("chiken", "cheese", "egg");
makeSandwich("bread", "butter", "cheese", "chiken", "tomato", "egg", "mayo");
