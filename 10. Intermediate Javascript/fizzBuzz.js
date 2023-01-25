// push numbers from 1 in the empty array "output" and
// print "fizz" when the number in the array is divisible by 3,
// "Buzz" if it is divisible by 5 and
// "fizzBuzz" if the number is divisible by 3 & 5 both.

var output = [];
var count = 1;

while (count <= 100) {
  function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0) {
      output.push('FizzBuzz');
    } else if (count % 3 === 0) {
      output.push('Fizz');
    } else if (count % 5 === 0) {
      output.push('Buzz');
    } else {
      output.push(count);
    }
    count++;
  }
  fizzBuzz();
}
console.log(output);
