//instead of zeenat,waseem is coming

let guest_list = ["Saif","Naureen","Ayaz", "Zeenat"];

//let inivitation = "I would like to invite you at Dinner on Monday 8:00 P.M. sharp.";

//guest_list.forEach( abc => console.log(`Hello, ${abc}`, inivitation));

let dontCome = guest_list[3];
// type the person name  who is not coming on dinner
console.log ( dontCome, "is not coming at dinner");
//remove zeenat add waseem
guest_list.splice( 3, 3,  "waseem ");

guest_list.splice( 3, 1,  "waseem ");

guest_list.forEach(guest => console.log(` ${guest}, is coming now`));
// remove ayaz add sani


dontCome = guest_list[2];
console.log(` \n`, dontCome, ` is not coming now`);
guest_list.splice(2, 1, "sani");

guest_list.forEach(abc => console.log(`salaam, ${abc}, is coming`));
