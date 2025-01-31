1. JavaScript Basics and Functions
   a. ✅ Question 1: What are the differences between var, let, and const in JavaScript?
   🟰 Answer1: var is a functional Scoped but let and const is a block scoped.
   🟰 var,let and const all of them are hoisted but let and const will be in temporal DeadZone.
   🟰 var can be redeclared in the same scope but let and const cannot be redeclared.
   🟰 var and let value can be update/reassign in the same scope but for const we cannot update/reassign its value in same scope.

✅ Question 2: What is the hoisting mechanism in JavaScript?

{
Hoisting in JavaScript refers to the behavior where variable and function declarations are moved, or "hoisted," to the top of their containing scope during the compile phase, before the code execution begins. However, only the declarations are hoisted, not the initializations or assignments.

1.  Variables (using var)
    When you declare a variable with var, the declaration is hoisted to the top, but the assignment happens where it is written in the code.
    console.log(x); // undefined (not ReferenceError)
    var x = 5;
    console.log(x); // 5

                In the above example:

                The declaration var x; is hoisted to the top.
                The assignment x = 5; remains in its original position.
                So, the first console.log(x) prints undefined because the variable is hoisted but hasn't been assigned a value yet.

2.  Let and Const
    Unlike var, let and const are hoisted, but they do not initialize until the code execution reaches the line where they are declared. This creates a "temporal dead zone" (TDZ) from the start of the block scope until the declaration is encountered, which prevents access to the variables before the declaration.

            console.log(y); // ReferenceError: Cannot access 'y' before initialization
            let y = 10;
            In this example, y is hoisted, but accessing it before initialization causes a ReferenceError due to the TDZ.

3.  Functions
    Function declarations are fully hoisted, meaning both the declaration and the function body are moved to the top of the scope, allowing you to call the function before it is defined.

            greet(); // "Hello"
            function greet() {
            console.log("Hello");
            }

            However, function expressions (like anonymous functions assigned to variables) are not hoisted in the same way as function declarations:


            greet(); // TypeError: greet is not a function
            var greet = function() {
            console.log("Hello");
            };
            In this case, the variable greet is hoisted, but it is initialized as undefined before the function is assigned, leading to the error when trying to call it.

}

✅ Question 3: How do arrow functions differ from regular functions in JavaScript?
{

1. Syntax
   Arrow functions have a more concise syntax compared to regular functions.
   The function keyword is omitted.
   The parentheses around parameters are optional if there's only one parameter.
   The return statement is implicit for single-expression functions.
2. this Binding
   This is one of the most important differences. Arrow functions do not have their own this context. Instead, they inherit the this from the enclosing lexical scope (the scope in which the arrow function was created).
   Regular Function: In a regular function, this is determined by how the function is called.
   Arrow Function: In an arrow function, this is lexically bound to the context in which the function is defined, not the context from which it is called.
   In RegularFunction, the this inside setTimeout refers to the global object (in non-strict mode) or undefined (in strict mode).
   In ArrowFunction, this correctly refers to the instance of ArrowFunction, inheriting the this from the enclosing scope.
3. arguments Object
   Regular functions have access to the arguments object, which contains all the passed arguments.
   Arrow Function: Arrow functions do not have their own arguments object. They inherit it from the enclosing function scope.
4. Constructor
   Arrow functions cannot be used as constructors. You cannot create an instance of an object using new with an arrow function.
5. new Keyword
   Since arrow functions cannot be used as constructors, they don't have their own prototype property, so they can't be used with the new keyword.

}

✅ Question 4: Explain the difference between function declarations and function expressions.
{

1. Syntax
   Function Declaration: A function declaration is a named function defined using the function keyword. It is the most common way of defining functions.
   Function Expression: A function expression defines a function and assigns it to a variable, which can be anonymous or named. Function expressions can be assigned to variables, properties of objects, or elements of arrays.
2. Hoisting Behavior
   Function Declaration: Function declarations are hoisted to the top of their scope. This means you can call the function before it is defined in the code, and it will still work.
   In this case, the function is hoisted, and the function definition is available before it is written in the code
   Function Expression: Function expressions are not hoisted in the same way. The variable declaration (e.g., const greet) is hoisted, but the function assignment happens only at the point where the function expression appears. This means you cannot call the function before the expression is assigned to the variable.
3. Scope and Context
   Function Declaration: A function declared with the function keyword is available throughout its scope, regardless of where it appears in the code. It’s treated as if it's declared at the top of the scope.
   Function Expression: A function expression is only available after it is assigned to the variable. If you try to use the function before the assignment, it will result in an error.
4. Anonymous vs. Named Functions
   Function Declaration: A function declaration is always named. The name is given explicitly after the function keyword
   Function Expression: Function expressions can be anonymous or named. An anonymous function expression does not have a name, while a named function expression gives the function an identifier.
5. Usage in Assignments and Return Statements
   Function Declarations: A function declaration is typically used when defining a standalone function that can be called at any point in the code (due to hoisting).
   Function Expressions: A function expression is often used when you need to define a function dynamically or assign a function as a value to a variable, property, or array element. It can also be used in return statements.

}

✅ Question 5: What is the this keyword, and how does its behavior differ in regular functions and arrow functions?
{

The this keyword in JavaScript refers to the execution context of a function—essentially, the object that the function is acting upon. Its behavior can vary depending on how and where the function is called.

1. Basic Concept of this:
   In general, this points to the object that is calling the function, or in other words, the object whose context the function is running in.
   The value of this can be explicitly set using methods like call(), apply(), or bind(), but it can also be implicitly determined by how a function is invoked.
2. Behavior of this in Regular Functions
   In regular functions, the value of this is determined by the call site, meaning it depends on how the function is called.
   Global Context (outside any object): When a regular function is called in the global context (not as a method of an object), this refers to the global object (window in browsers or global in Node.js).
   Behavior of this in Regular Functions
   In regular functions, the value of this is determined by the call site, meaning it depends on how the function is called.
   Global Context (outside any object): When a regular function is called in the global context (not as a method of an object), this refers to the global object (window in browsers or global in Node.js).

```
function regularFunction() {
  console.log(this);  // 'this' refers to the global object (window in browsers)
}
regularFunction();
```

Method Invocation: When a regular function is called as a method of an object, this refers to the object that calls the method.

```
const person = {
  name: 'Alice',
  greet: function() {
    console.log(this.name);  // 'this' refers to the 'person' object
  }
};

person.greet();  // Output: Alice
```

Constructor Functions: When a function is used as a constructor (called with the new keyword), this refers to the newly created object.

```
function Person(name) {
  this.name = name;  // 'this' refers to the new object
}

const alice = new Person('Alice');
console.log(alice.name);  // Output: Alice
```

Explicit Binding: this can also be explicitly set using call(), apply(), or bind().

```
function greet() {
  console.log(this.name);
}

const person = { name: 'Alice' };
greet.call(person);  // 'this' is explicitly set to 'person', Output: Alice
```

Behavior of this in Arrow Functions
Arrow functions behave differently in terms of this binding. The key difference is that arrow functions do not have their own this. Instead, they inherit this from the lexical context, i.e., the surrounding function or the scope in which they are defined. This is known as lexical scoping of this.

Global Context: In the global context, the behavior of this is the same in both regular and arrow functions. It will refer to the global object.

```
const regularFunction = function() {
  console.log(this);  // Refers to the global object
};

const arrowFunction = () => {
  console.log(this);  // Refers to the global object (same as regular function)
};

regularFunction();
arrowFunction();
```

Method Invocation: When used as a method of an object, an arrow function still inherits the this value from the outer scope, not the object that calls the method.

```
const person = {
  name: 'Alice',
  greet: () => {
    console.log(this.name);  // 'this' refers to the surrounding lexical scope, not 'person'
  }
};

person.greet();  // Output: undefined (because 'this' refers to the global object, not 'person')
```

In this case, this inside the arrow function refers to the global object (or undefined in strict mode) because it does not bind to the person object as a regular function would.

Lexical Scoping in Arrow Functions: Arrow functions inherit this from the enclosing context. This is useful in situations like callbacks or event handlers where you want to retain the this value from the outer scope.

```
function Outer() {
  this.name = 'Outer';
  setTimeout(() => {
    console.log(this.name);  // 'this' refers to the enclosing Outer function
  }, 1000);
}

const obj = new Outer();  // Output: Outer
```

In this case, the arrow function inside setTimeout inherits the this from the Outer function, which refers to the instance of Outer.

Constructor Functions: Arrow functions cannot be used as constructors because they do not have their own this. They inherit this from the surrounding scope and hence do not bind to a new object when used with new.

```
const Person = (name) => {
  this.name = name;  // Error: 'this' does not refer to a newly created object
};

const alice = new Person('Alice');  // TypeError: Person is not a constructor
```

} 2. Closures and Scopes
✅ Question 6: What is a closure in JavaScript, and why is it useful?
{
1. Function along with its lexical scope is known as its closer
2. Function give access to its outer function scope from its inner function

 Closures have several practical uses, particularly in scenarios where you want to encapsulate data, preserve state, or create private variables. Here are some key reasons why closures are useful:

1. Data Encapsulation / Privacy: Closures allow you to create private variables that are not accessible from outside the function. This concept is often used to simulate private methods or private data in JavaScript, helping with data protection.
    function counter() {
    let count = 0;  // Private variable
  
    return {
        increment: function() {
        count++;
        console.log(count);
        },
        decrement: function() {
        count--;
        console.log(count);
        },
        getCount: function() {
        return count;
        }
    };
    }
const myCounter = counter();
myCounter.increment();  // 1
myCounter.increment();  // 2
console.log(myCounter.getCount());  // 2
2. Maintaining State: Closures are useful for maintaining state between function calls without relying on global variables.
Example: Using closures to preserve statefunction makeAdder(x) {
  return function(y) {
    return x + y;
  };
}
const add5 = makeAdder(5);
console.log(add5(3));  // 8
console.log(add5(10)); // 15
3. Function Factories: Closures enable the creation of function factories, where you can generate functions dynamically based on certain inputs.
Example: Creating a function factory
function multiplier(factor) {
  return function(num) {
    return num * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(4));  // 8
console.log(triple(4));  // 12
4. Callbacks and Event Handlers: Closures are often used in callbacks, event handlers, and asynchronous code (like setTimeout or promises) to maintain access to the variables in the outer scope even after the function execution context has changed.
Example: Using closures in callbacks
function fetchData(url) {
  let data = 'Data from ' + url;
  setTimeout(function() {
    console.log(data);  // Closure captures and uses the 'data' variable from the outer function
  }, 1000);
}
fetchData('http://example.com');

}
✅ Question 7: How do closures work in setTimeout or setInterval?
✅ Question 8: What is the difference between lexical scope and dynamic scope?
✅ Question 9: Can you explain how closures are used in the module pattern in JavaScript?
✅ Question 10: What is a callback function, and how does it relate to closures?
