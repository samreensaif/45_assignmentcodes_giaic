//44. Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//array of items a person wants on a sandwich.

//let item : string[] =  ["chicken","cucumber","onion","mayonese","ketchup"];

//Write a function that accepts a array of items a person wants on a sandwich.

function accept_item( ...items : string[])
{
if ( items.length === 0 )
{
    console.log(`enter the items for the sandwitches`);
}

else 
{ 
    console.log( `your sandwitches has `, items.join())
}

}
console.log(`\n`);
 accept_item("chicken","tomato","onion");
 accept_item("beef","tomato","onion");
 accept_item("egg","chicken","tomato","onion");
 accept_item("egg");
 accept_item();