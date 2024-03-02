//No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
// list of usernames in an array
var userNames = ["samreen", "firzah", "admin"];
if (userNames.length != 0) //make sure list of user is not empty
 {
    console.log("List Of Username is not Empty");
}
else // if list of username is empty
 {
    console.log("We need to find some users!");
}
// now print the message with empty array
userNames = [];
if (userNames.length != 0) //make sure list of user is not empty
 {
    console.log("\nList Of Username is not Empty");
}
else // if list of username is empty
 {
    console.log("\nWe need to find some users!");
}
