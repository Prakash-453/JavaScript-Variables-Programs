// 1) What is the output of the following code:
var a = 10;
console.log(b);         // Output : ReferenceError: b is not defined


// 2. What is the output of the following code:
let a = 10;
console.log(a + b);
var b = 20;           // Output : NaN


// 3. What is the output of the following code:
const a = 10;
a = 20;
console.log(a);     // Output : TypeError: Assignment to constant variable.


// 4. What is the output of the following code:
console.log(typeof NaN);          // Output :  number
console.log(typeof undefined);    // Output :  undefined
