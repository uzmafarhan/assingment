//Q42
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the Great ".concat(name); });
}
var magicians_names = ["ali ", "usama", "asif"];
var great_magicians = make_great(magicians_names);
show_magicians(great_magicians);
