
import inquirer from "inquirer";

console.log("\nSIMPLE CALCULATOR\n")
const result = await inquirer.prompt([
  { msg: "Enter 1st #:", type: "number", name: "fno" },
  { msg: "ENter 2nd #:", type: "number", name: "sno" },
  {
    msg: "Select Operators",
    type: "list",
    name: "operators",
    choices: [
      "Addition",
      "Subtraction",
      "Multiplication",
      "Division",
      "Modulus",
    ],
  },
  
]);
if (result.operators === "Addition") {
  console.log("Addition Result is:", result.fno + result.sno);
} else if (result.operators === "Subtraction") {
  console.log("Subtraction Result is:", result.fno - result.sno);
} else if (result.operators === "Multiplication") {
    console.log("Multiplication Result is:", result.fno * result.sno);
} else if (result.operators === "Division") {
  console.log("Division Result is:", result.fno / result.sno);
} else if (result.operators === "Modulus") {
  console.log("Modulus Result is:", result.fno % result.sno);
}
