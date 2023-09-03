function printMe(){
    console.log('Hello Lunar *) ');
}

/**
 * sum(10, 20) // Arguments
 *    30       // Output
 */

const sum = function(a, b){  // Parameters
    return a + b;
}

function calc(a, b){
    return (2 * (a + b));
}

// Default Parameters for JS Function

function calcUsingDefaultParm(a, b=0){
    return (2 * (a + b));
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

function collectionThings(x, ...y){
    console.log('x', x);
    console.log('y', y);
}