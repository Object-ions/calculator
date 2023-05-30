function saySomething(whatToSay) {
    window.alert(whatToSay);
}
// adding function
function add(number1, number2) {
    return number1 + number2;
}

// subtructing fuction
function sub(number1, number2) {
    return number1 - number2;
}

// subtructing fuction
function multiply(number1, number2) {
    return number1 * number2;
}

// subtructing fuction
function divide(number1, number2) {
    return number1 / number2;
}

  // user interface logic 
let number1 = parseInt(prompt(" to add, subtruct, multiply and divide; Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));

window.alert(add(number1, number2));
window.alert(sub(number1, number2));
window.alert(multiply(number1, number2));
window.alert(divide(number1, number2));