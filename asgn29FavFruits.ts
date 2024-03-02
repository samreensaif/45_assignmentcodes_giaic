//Favorite Fruit: Make a array of your favorite fruits, and then write a 
//series of independent if statements that check for certain fruits in your array.

let favoFruits: string[]= ["apple","banana","pineapple","watermelon"];//array of favourite fruits


//Five IF statements

if (favoFruits.includes("banana"))
{
    console.log("\nYes I really like bananas!!");
}
else if(favoFruits.includes("watermelon"))
{
    console.log("\nthe fruit is not in the list");
}
else if(favoFruits.includes("pineapple"))
{
    console.log("\n i like pineapple");
}
else if(favoFruits.includes("apple"))
{
    console.log("\ni like apples too");
}
else if(favoFruits.includes("mango"))
{console.log("mango is not in the list");
}

