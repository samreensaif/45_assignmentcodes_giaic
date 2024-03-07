//32. Checking Usernames: Do the following to create a program that simulates how websites ensure that
//everyone has a unique username.

//Make a list of five or more usernames called current_users.

let current_Users =["pakistan123","SAMREENSAIF","syedanaureen","FirzahFatima","syedmusaab","helloworld"];

let current_Users1: string[]= current_Users.map(abc => abc.toLowerCase());// change array elements in lowercase


//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are 
//also in the current_users list.

let new_Users: string[]=["samreensaif","syedanaureen","syedomar","HELLoWorld","ayazanwar","PAKISTAN123"]

let new_Users1: string[]= new_Users.map(abc => abc.toLowerCase());//change array elements in lowercase

//Loop through the new_users list to see if each new username has already been used. 

for(let i = 0; i< new_Users1.length;i++)
{
    let element: any = new_Users1[i]
    if( current_Users1.includes(element) )
    {
        console.log("\nusername:", new_Users[i], "is not available so the person will need to enter a new username. ")
    }

    else //if(new_Users[i] != current_Users[i])
    {
        console.log("\nusername:",new_Users[i],"  is available. ")
    }
    
}