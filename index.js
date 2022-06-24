var num1 = prompt("Enter your first number: ");
var num2 = prompt("Enter your second number: ");
var opr = prompt("what operation would you like to execute? : + - / *");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

var add = num1 + num2;
var subtract = num1 - num2;
var divide = num1 / num2;
var multiply = num1*num2;

if (opr == "+")
{
    document.write(add);
}
else if(opr == "-")
{
    document.write(subtract);
}
else if(opr == "/")
{
    document.write(divide);
}
else if(opr == "*")
{
    document.write(multiply);
}
else{
    alert("invalid input");
}



