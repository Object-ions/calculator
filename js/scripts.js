console.log("test")

// user interface logic 
let number1 = parseInt(prompt(" to add, subtruct, multiply and divide; Enter a number:"));
let number2 = parseInt(prompt("Enter another number:"));

function arithmetics(num1, num2) {
    // create varibales
    let add, sub, mul, div;
    //make arthimetics and store in vars
    add = number1 + number2;
    sub = number1 - number2;
    mul = number1 * number2;
    div = number1 / number2;
    //output to console
    console.log("The addition of your numbers equals " + add + "." +
                 "The subtraction of your numbers equals " + sub + "." +
                 "The multiply of your numbers equals " + mul + "." +
                 "The dividis of your numbers equals " + div + ".");
}

arithmetics(number1, number2)

// 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