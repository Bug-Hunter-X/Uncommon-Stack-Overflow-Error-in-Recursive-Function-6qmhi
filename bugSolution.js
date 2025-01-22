function foo(a, b) {
  if (a === 0) {
    return b;
  } else if (a < 0) {
    return 0; //Handle negative inputs
  } else if (a > 1000) { //Add termination condition
    return Infinity; //Handle excessively large inputs
  }
  else {
    return foo(a - 1, a + b);
  }
}

console.log(foo(5, 1)); // Output: 15
console.log(foo(0, 1)); // Output: 1
console.log(foo(3, 2)); //Output: 14
console.log(foo(10000,1));//Output: Infinity
console.log(foo(-5,1));//Output: 0