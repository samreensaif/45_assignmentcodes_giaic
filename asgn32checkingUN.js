//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
//everyone has a unique username.
//Make a list of five or more usernames called current_users.
var current_Users = ["pakistan123", "SAMREENSAIF", "syedanaureen", "FirzahFatima", "syedmusaab", "helloworld"];
var current_Users1 = current_Users.map(function (abc) { return abc.toLowerCase(); }); // change array elements in lowercase
//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.
var new_Users = ["samreensaif", "syedanaureen", "syedomar", "HELLoWorld", "ayazanwar", "PAKISTAN123"];
var new_Users1 = new_Users.map(function (abc) { return abc.toLowerCase(); }); //change array elements in lowercase
//Loop through the new_users list to see if each new username has already been used. 
for (var i = 0; i < new_Users1.length; i++) {
    var element = new_Users1[i];
    if (current_Users1.includes(element)) {
        console.log("\nusername:", new_Users[i], "is not available so the person will need to enter a new username. ");
    }
    else //if(new_Users[i] != current_Users[i])
     {
        console.log("\nusername:", new_Users[i], "  is available. ");
    }
}
