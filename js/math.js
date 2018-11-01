// declare program variables
let num1,
    num2,
    message;
// announce the program
alert("Let's do some math!");

// collect numeric input
num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

// build an HTML message
message = "<h1>Math with the numbers " + num1 + " and " + num2 + "</h1>";
message += num1 + " + " + num2 + " = " + (num1 + num2);
message += "<br>";
message += num1 + " * " + num2 + " = " + (num1 * num2);
message += "<br>";
message += num1 + " / " + num2 + " = " + (num1 / num2);
message += "<br>";
message += num1 + " - " + num2 + " = " + (num1 - num2);
  
// write message to web page
document.write(message);

