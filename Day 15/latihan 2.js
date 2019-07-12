function gcd (firstNumber, secondNumber) {

  while(secondNumber) {
  var a = secondNumber;
    secondNumber = firstNumber % secondNumber;
    firstNumber = a;
  }
  return a;
}


console.log(gcd(12, 16)); 
console.log(gcd(50, 40)); 
console.log(gcd(22, 99)); 
console.log(gcd(24, 36)); 
console.log(gcd(17, 23)); 
