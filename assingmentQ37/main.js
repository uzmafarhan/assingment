//Q37
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "i love Typescript"; }
    console.log("the size of shirt is ".concat(size, " and the message on the shirt is ").concat(message));
}
make_shirt();
make_shirt("medium");
make_shirt("small", "pakistan");
