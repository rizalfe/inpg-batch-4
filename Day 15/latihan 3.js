function isPrime (number) {
    for(var i = 2; i < number; i++)
      if(number % i === 0) {
        return false;
      }
    return number > 1;
  }
  
  // TEST CASES
  console.log(isPrime(3)); // true
  console.log(isPrime(7)); // true
  console.log(isPrime(6)); // false
  console.log(isPrime(23)); // true
  console.log(isPrime(33)); // false
  