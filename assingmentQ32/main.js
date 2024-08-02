var currentUsers = ["admin", "ahmad", "ali", "hammad", "nasir"];
var newUsers = ["naveed", "furqan", "ali", "hammad", "nasir"];
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var new_users = newUsers_1[_i];
    var lowercase_new_users = new_users.toLocaleLowerCase();
    if (currentUsers.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_users)) {
        console.log("the username $ {new_users} is not available");
    }
    else {
        console.log("the username $ {new_users}is available");
    }
}
