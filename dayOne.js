// Exercise 1: Variable Declarations
// Task:
// Create a program that declares a variable using var, let, and const. Assign values to these variables and print them to the console. Then try to reassign a value to each variable and observe the results.
// Instructions:
// Declare a variable using var, let, and const.
// Print the initial values to the console.
// Reassign values to the variables.
// Observe the behavior of each variable.

var variable ="Hello";

let lets="Hi";
const constantist= "Holla";
console.log(variable);
console.log(lets);
console.log(constantist);

variable = "Test";
lets="nono";
//constantist="HiHi";// Reassignment Not Possable TypeError: Assignment to constant variable.

console.log(variable);
console.log(lets);
console.log(constantist);

var variable =1;

//let lets=2;//Redeclaration Is Not Possable SyntaxError: Identifier 'lets' has already been declared
//const constantist= 3;// Redeclaration Is Not Possable SyntaxError: Identifier 'constantist' has already been declared

console.log(variable);
console.log(lets);
console.log(constantist);

// Exercise 2: Function Declaration and Expression
// Task:
// Write a function to calculate the area of a rectangle. You should write both a function declaration and a function expression for the same functionality.
// Instructions:
// Create a function called calculateArea using a function declaration that calculates the area of a rectangle (length × width).
// Create the same function using a function expression.
// Call both functions with different values of length and width, and print the results.

function normalRectrangle(length,breadth){
return length*breadth;
}

let expressionRectrangle = function (length,breadth){
    return length*breadth;
} 

console.log(normalRectrangle(10,20));
console.log(expressionRectrangle(30,40));


// Exercise 3: Arrow Function
// Task:
// Write a function using an arrow function syntax that checks if a number is even or odd.
// Instructions:
// Write an arrow function called isEven that takes a number as an argument and returns true if the number is even, and false if it is odd.
// Call the function with different numbers and print the result.

let checkEvenOdd = (providedNumber)=>{
    if(typeof providedNumber === "number" && Number.isInteger(providedNumber)){
        if(providedNumber%2 === 0){
            return console.log(`${providedNumber} is a Even Number`);
        }else{
            return console.log(`${providedNumber} is a Odd Number`);
        }
    }else{
        return console.log(`${providedNumber} is a not a Number`);
    }
    
}

checkEvenOdd(7);
checkEvenOdd(8);
checkEvenOdd(48);
checkEvenOdd(99);
checkEvenOdd("XX");
checkEvenOdd("99");
checkEvenOdd(24.54);


// Exercise 4: Function with Default Parameters
// Task:
// Create a function called greetUser that takes two arguments: name and age. Make age a default parameter with a default value of 25.
// Instructions:
// Create a function that greets the user and prints their name and age to the console.
// If no age is provided, the function should default to 25.
// Test the function with and without the age argument.

function greetUser(name,age=25){
    return console.log(`Hi ${name}, how are you .Is your age is ${age} `);
}

greetUser("Prodipto",49);
greetUser("Sudipto");
greetUser();

let newGreetUser = (name,age=10)=>console.log(`Hello ${name}, is your age ${age}`)

newGreetUser("rama",29);
newGreetUser("piyali");
newGreetUser();

// Exercise 5: IIFE (Immediately Invoked Function Expression)
// Task:
// Write an IIFE (Immediately Invoked Function Expression) that prints "Hello, World!" to the console.
// Instructions:
// Create an anonymous function inside parentheses.
// Immediately invoke the function by adding () at the end.

(function add(){
    console.log("Hello World");
})();

(function (){
    console.log("Hello World");
})();

(()=>{
    console.log("Hello World")
})();


// Exercise 6: Function that Returns Another Function
// Task:
// Create a function outerFunction that returns another function innerFunction. When innerFunction is called, it should print a message that includes a variable defined in outerFunction.
// Instructions:
// Define a function outerFunction that returns another function innerFunction.
// The inner function should access a variable declared in the outer function and print a message.
// Call the outer function and then the inner function.


function outerFunction (){
    var outerValue = 10;
    let outerValueNew = 20;

    return function innerFunction(){
        
        console.log(`thgis are outer value${outerValue} and ${outerValueNew}`)
    }

}

outerFunction()();
let callOuter = outerFunction();
callOuter();



// Exercise 7: Ternary Operator
// Task:
// Write a program that uses the ternary operator to check if a number is positive, negative, or zero.
// Instructions:
// Use a ternary operator to evaluate the number.
// Print "Positive", "Negative", or "Zero" based on the number.

let CheckNumber = (number)=>{
    if(typeof number ==="number" && Number.isInteger(number)){
        if(number>0){
            console.log(`Number ${number} is postive`)
        }else if(number<0){
            console.log(`Number ${number} is negetive`)
        }else{
            console.log(`Number ${number} is Zero`)
        }
    }else{
        console.log(`${number} is not Even a Number`)
    }
    
}
CheckNumber(10);
CheckNumber(-10);
CheckNumber(0);
CheckNumber("10");
CheckNumber(-8);
CheckNumber();

// Exercise 8: Recursion
// Task:
// Write a recursive function to calculate the factorial of a number.
// Instructions:
// The factorial of a number n is the product of all positive integers less than or equal to n. (e.g., 5! = 5 × 4 × 3 × 2 × 1)
// Write the function factorial(n) that calculates the factorial using recursion.

function recursiveFunc(number,sum=1){
    if(number===1){
        console.log(sum);
        return sum;
    }else{
        console.log(`Number ${number} Sum ${sum}`)
        
        return recursiveFunc(number-1,sum*number);
    }
}


recursiveFunc(5);

function recursiveNew (n){
    if(n===1){
        return 1;
    }else{
        return n*recursiveNew(n-1);
    }
}

console.log(recursiveNew(5));

let arrowFactorial = (n)=>( n===1 ? 1 : n* arrowFactorial(n-1));

console.log(arrowFactorial(5));



// Exercise 9: Map and Filter
// Task:
// Write a program that uses the map() and filter() methods to:
// Double each number in an array.
// Filter out the numbers greater than 10.
// Instructions:
// Create an array of numbers.
// Use map() to double each number.
// Use filter() to keep numbers that are less than or equal to 10.
// Print the final array.

function arrayShorter(NewArray){

    let CreatedArray = NewArray.map((individualElement)=>(individualElement*2));
    let test=CreatedArray.filter((element)=>(element < 10 ? element : ''));
    console.log(CreatedArray);
    console.log(test);
}
arrayShorter([1,2,3,4,5,6,7,8,9]);


let shortArray = (number)=>{
    return newShortedArray= number.map(eachnumber=>eachnumber*2).filter(n=>n>=10);
}
console.log(shortArray([4,5,6,7,8,1,2,9,8,1,2]))


// Exercise 10: FizzBuzz
// Task:
// Write a program that prints numbers from 1 to 100. But for multiples of 3, print "Fizz" instead of the number, and for multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
// Instructions:
// Use a for loop to print the numbers.
// Implement conditional checks to replace numbers with "Fizz", "Buzz", or "FizzBuzz".

function FuzBuz (number,string=""){
    if(number === 0){
        return string.split(" ").reverse().join(" ");
    }else{
        if(number%3 === 0 &&  number%5 === 0) {
            return FuzBuz(number-1,string+" FuzzBuZZ ");
            
        }else if(number%3 === 0){
            return FuzBuz(number-1,string+" Fuzz ");
            
        }else if(number%5 === 0){
            return FuzBuz(number-1,string+" Buzz ");
            
        }else{
            return FuzBuz(number-1,string+number+" ");
        }
        
    }
    
}
console.log(FuzBuz(10));
console.log(FuzBuz(20));

function FuzBuzx(number, result = []) {
    if (number === 0) {
        return result.reverse().join(" ");  // Reverse to maintain the correct order
    } else {
        if (number % 3 === 0 && number % 5 === 0) {
            console.log(number,"FB");
            result.push("FuzzBuzz");
        } else if (number % 3 === 0) {
            console.log(number,"F");
            result.push("Fuzz");
        } else if (number % 5 === 0) {
            console.log(number,"B");
            result.push("Buzz");
        } else {
            console.log(number,"N");
            result.push(number);
        }
        return FuzBuz(number - 1, result);  // Continue recursion
    }
}

console.log(FuzBuzx(10));