//Q43



function show_magicians(magicians: string[]){
    magicians.forEach(name => console.log(name)
);

}

function make_great(magicians: string[]){
    return magicians.map(name => `the Great ${name}`)
}

let magicians_names =["ali ","usama","asif"]

let copy_magicians_names = magicians_names.slice()

let copy_great_magician = make_great(copy_magicians_names)

console.log("original Array\n");
show_magicians(magicians_names)
console.log("copide Array");
show_magicians(copy_great_magician)






