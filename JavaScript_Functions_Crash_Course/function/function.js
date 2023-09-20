function printMe() {
  console.log("Hello Lunar *) ");
}

/**
 * sum(10, 20) // Arguments
 *    30       // Output
 */

const sum = function (a, b) {
  // Parameters
  return a + b;
};

function calc(a, b) {
  return 2 * (a + b);
}

// Default Parameters for JS Function

function calcUsingDefaultParm(a, b = 0) {
  return 2 * (a + b);
}

// Rest Parameters for JS Function

/**
 * REST Parameters ex : function restParm(paramOne, ...paramTwo){} this for syntax,
 *
 * role 1 : rest_param 'args' contains the last param of the function 'args' only.
 * role 2 : One function should be only one rest param.
 *
 * rest_param 'args' return = arrays of value.
 */

function collectionThings(x, ...y) {
  console.log("x", x);
  console.log("y", y);
}

// Arrow Function JS

/**
    const add = function(x,y){ // normal function
        return x + y;
    }

 */

const add = (x, y) => {
  return x + y;
};

const sumTwoValue = (x, y) => x + y;

// Nested Function

function outer() {
  console.log("Outer...");

  function inner() {
    console.log("Inner...");
  }

  inner();
}

// Scope

function doSomething() {
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x, y, z);

  function inner() {
    console.log("inner... ", x, y, z);
  }

  inner();
}

function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}

const outerReturn = outer(10);

outerReturn(2);

// CallBack Function.

function foo(bar) {
  bar();
}

foo(function () {
  console.log("bar");
});

function named() {
  console.log("bar");
}

foo(named);

// Higher Order Function`s (HOF)

/**
 * 1.) It`s takes one are more functions as arguments
 * 2.) It`s may return a function
 */

function returnFn() {
  return function () {
    console.log("returing");
  };
}

const fn = returnFn();

// [1,2,2,3,4,5,6,7].filter(function(element){return element > 5 ? 'hi' : 'hello'});

// Pure function

function sayGreeting(name) {
  return `Hello ${name}`;
}

let greeting = "Welcome come to ";

function helloMoon(moon) {
  return `${greeting} ${moon}`;
}

// IIFE ('Immediately Invoked Function Expression')

// code inside the function

function x() {}

/**
 * function (){
 *  // error
 *  // Function stmt require a function name
 * }
 */

(function () {})(); // exe

// Recursion

/*
Recursion base codition.

function recurse(){
  
  if(base_condition){
    // do something
    return
  }

  recurse();
}

*/

function foo() {
  console.log("foo");
  foo(); // Maximum call stack is exceeded
}

const recursionFoo = function buz() {
  recursionFoo();
};

function fetchURL(count) {
  if (count === 0) {
    console.log("No more left!");
    return;
  }

  console.log("fetching...");
  fetchURL(count - 1);
}
