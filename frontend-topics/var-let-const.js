

console.log(x);  // Output?
var x = 5;
 
if(true) {
    console.log(x);  // Output?
		var x = 10;
    console.log(x);  // Output?
}
 
console.log(x);  // Output?
 
 
 console.log(x);  // Output?
var x = 5;
 
function test() {
    console.log(x);  // Output?
var x = 10;
    console.log(x);  // Output?
}
 
test();
console.log(x);  // Output?