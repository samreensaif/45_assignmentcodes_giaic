//instead of zeenat,waseem is coming
var guest_list = ["Saif", "Naureen", "Ayaz", "Zeenat"];
//let inivitation = "I would like to invite you at Dinner on Monday 8:00 P.M. sharp.";
//guest_list.forEach( abc => console.log(`Hello, ${abc}`, inivitation));
var dontCome = guest_list[3];
// type the person name  who is not coming on dinner
console.log(dontCome, "is not coming at dinner");
//remove zeenat add waseem
guest_list.splice(3, 3, "waseem ");
guest_list.splice(3, 1, "waseem ");
guest_list.forEach(function (guest) { return console.log(" ".concat(guest, ", is coming now")); });
// remove ayaz add sani
dontCome = guest_list[2];
console.log(" \n", dontCome, " is not coming now");
guest_list.splice(2, 1, "sani");
guest_list.forEach(function (abc) { return console.log("salaam, ".concat(abc, ", is coming")); });
//let guest_list = ["Saif","Naureen","Zeenat","Ayaz","Firzah","Musaab","Kanza","Omar"];
// informin guest that i got bigger space for party
//let newguest_list = ["Saif","Naureen","Zeenat","Ayaz;"];
var inivitation = "good new!its bigger table now";
//add new guest at first 
guest_list.unshift("Omar");
//add new guest at last
guest_list.push("Kanza");
guest_list.forEach(function (abc) { return console.log(abc, inivitation); });
guest_list.forEach(function (abc) { return console.log(abc); });
//add guest in middle
var middle_Index = Math.floor(guest_list.length / 2);
guest_list.splice(middle_Index, 0, "Musaab");
guest_list.forEach(function (abc) { return console.log("\n\t", abc, inivitation); });
//informing guest about shrinking guest list as new dinner table wont arrive on time
var shrinkingGuest = "Bad News! Only 2 guest allowed. ";
guest_list.forEach(function (abc) { return console.log(abc, shrinkingGuest); });
//removing guest from guest list
var sorryMsg = "I am very sorry, you can't come as the new dinner table is cancelled.";
//removes Kanza
var deleted_guest = guest_list.pop();
console.log("\n\t ".concat(deleted_guest, ",").concat(shrinkingGuest).concat(sorryMsg));
//removes waseem
var deleted_guest1 = guest_list.pop();
console.log("\n\t ".concat(deleted_guest1, ",").concat(shrinkingGuest).concat(sorryMsg));
//removes sani
var deleted_guest2 = guest_list.pop();
console.log("\n\t ".concat(deleted_guest2, ",").concat(shrinkingGuest).concat(sorryMsg));
//removes musaab
var deleted_guest3 = guest_list.pop();
console.log("\n\t ".concat(deleted_guest3, ",").concat(shrinkingGuest).concat(sorryMsg));
//removes naureen
var deleted_guest4 = guest_list.pop();
console.log("\n\t ".concat(deleted_guest4, ",").concat(shrinkingGuest).concat(sorryMsg));
//new guest list
guest_list.forEach(function (abc) { return console.log("\nDear", abc, "you are still invited\n"); });
//removes the last 2 guest from the guest list
var deleted_guest5 = guest_list.pop();
var deleted_guest6 = guest_list.pop();
console.log("\nguest_list is empty now ".concat(guest_list), "\n\n none of you are coming now");
