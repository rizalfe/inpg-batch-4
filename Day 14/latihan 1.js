function compareNumbers (firstNumber, secondNumber) {
    if(firstNumber < secondNumber) {
      var hasil = true
    } else {
      if(firstNumber > secondNumber) {
        hasil = false
      } else {
        if(firstNumber === secondNumber) {
          hasil = '-1'
        }
      }
    }
return hasil;
}

console.log(compareNumbers(5, 8));
console.log(compareNumbers(5, 3));
console.log(compareNumbers(4, 4));
console.log(compareNumbers(3, 3));
console.log(compareNumbers(17, 2));