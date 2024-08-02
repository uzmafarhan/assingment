//Q42


function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
);

}

function make_great(magicians: string[]){
    return magicians.map(name => `the Great ${name}`)
}

let magicians_names =["ali ","usama","asif"]
let great_magicians =make_great(magicians_names)

show_magicians(great_magicians)