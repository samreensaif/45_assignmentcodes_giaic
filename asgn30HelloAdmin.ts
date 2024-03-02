//* Hello Admin: Make a array of five or more usernames, including the name 'admin'.



// list of usernames in an array

let userNames: string[]=["samreen","firzah","admin","naureen","musaab"];

//Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:

for (let i: number=0; userNames[i]; i++)

{
    if (userNames.includes("samreen",i))  //print a greeting,Hello Samreen,thank you for logging in again.
{
    console.log("\nHello Samreen! Thankyou for logging in again.");
}
else if(userNames.includes("firzah",i))
{
    console.log("\nHello Firzah! Thankyou for logging in again.");
}

//If the username is 'admin', print a special greeting, such as Hello admin,
// would you like to see a status report?

else if(userNames.includes("admin",i))
{
    console.log("\nHello admin, would you like to see a status report?");
}
else if(userNames.includes("naureen",i))
{
    console.log("\nHello Naureen! Thankyou for logging in again.");
}

else if(userNames.includes("musaab",i))
{
    console.log("\nHello Musaab! Thankyou for logging in again.");

}

}
