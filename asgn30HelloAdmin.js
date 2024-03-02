//* Hello Admin: Make a array of five or more usernames, including the name 'admin'.
// list of usernames in an array
var userNames = ["samreen", "firzah", "admin", "naureen", "musaab"];
//Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:
for (var i = 0; userNames[i]; i++) {
    if (userNames.includes("samreen", i)) {
        console.log("Hello Samreen! Thankyou for logging in again.");
    }
    else if (userNames.includes("firzah", i)) {
        console.log("Hello Firzah! Thankyou for logging in again.");
    }
    else if (userNames.includes("admin", i)) {
        console.log("Hello admin, would you like to see a status report?");
    }
    else if (userNames.includes("naureen", i)) {
        console.log("Hello Naureen! Thankyou for logging in again.");
    }
    else if (userNames.includes("musaab", i)) {
        console.log("Hello Musaab! Thankyou for logging in again.");
    }
}
