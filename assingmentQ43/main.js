//Q43
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
var magicians_names = ["ali ", "usama", "asif"];
var copy_magicians_names = magicians_names.slice();
var copy_great_magician = make_great(copy_magicians_names);
console.log("original Array\n");
show_magicians(magicians_names);
console.log("copide Array");
show_magicians(copy_great_magician);
