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

function foo(bar){
  bar();
}

foo(function() {
  console.log('bar');
})

function named(){
  console.log('bar')
}

foo(named);