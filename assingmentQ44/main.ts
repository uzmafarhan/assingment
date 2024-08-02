//Q44 
function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the followingitems: \n ");
    items.forEach(singleItems =>
        console.log(singleItems)
    )
    console.log("Now Enoy Sandwich");

}

makeSandwich("bread", "butter");
makeSandwich("chiken", "cheese","Egg")
makeSandwich("bread","butter","cheese","chiken","Tomato","Egg","Mayo")