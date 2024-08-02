var userName = ["admin", "ahmad", "ali", "hammad", "nasir"];
userName.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello", username, "would you like to see a status report?");
    }
    else {
        console.log("Hello", username, " thank yiou for logging in again.");
    }
});
