"use strict";
/*42. Great Magicians: Start with a copy of your program from Exercise 41.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified*/
//function show_magician to print the original array 
let magicians_name = ["David Blaine", "Doug Henning", "Criss Angel"];
function show_magicians(magician) {
    for (let i of magician) {
        console.log(`${i}`);
    }
}
console.log(`\n original array`);
show_magicians(magicians_name);
// Makes another function make_great to modify the original array by using map() function then print
function make_great(abc) {
    let modified_array = abc.map((abc) => `The Great, ${abc}`);
    return modified_array;
}
let f = make_great(magicians_name);
console.log(`\n modified array`);
show_magicians(f);
