//41. Magicians: Make a array of magician’s names. Pass the array to a function 
//called show_magicians(), which prints the name of each magician in the array.

let magicians_name: string[] = ["David Blaine","Doug Henning", "Criss Angel"]

function show_magicians(abc :string[] ) 
{
for (let i =0; i<magicians_name.length;i++ )

{
console.log(magicians_name[i])

}
}
show_magicians(magicians_name);