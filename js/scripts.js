console.log("test")

// user interface logic 
let number1 = parseInt(prompt(" to add, subtruct, multiply and divide; Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));

// }
// adding function
function add(number1, number2) {
    let twoNum = number1 + number2;
    console.log("The addition of your numbers equals " + twoNum + ".");
} 

// subtructing fuction
function sub(number1, number2) {
    twoNum = number1 - number2;
    console.log("The subtraction of your numbers equals " + twoNum + ".");
}

// subtructing fuction
function multiply(number1, number2) {
    twoNum = number1 * number2;
    console.log("The multiply of your numbers equals " + twoNum + ".");
}

// subtructing fuction
function divide(number1, number2) {
    twoNum = number1 / number2;
    console.log("The division of your numbers equals " + twoNum + ".");
}

add(number1, number2);
sub(number1, number2);
multiply(number1, number2);
divide(number1, number2);