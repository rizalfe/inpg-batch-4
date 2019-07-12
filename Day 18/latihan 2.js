function countLetters (word, letter) {
  var a = 0
  var b = word.slice(1)
  
  if (word.length === 0) {
      return a;
    } else {
      if (word[0] === letter) {
        a++;
      }
        return a + countLetters(b, letter);
    }
}

// TEST CASES
console.log(countLetters('12104123', '1'));  // 3
console.log(countLetters('the quick brown fox', 'o')); // 2
console.log(countLetters('lorem ipsum', 'a')); // 0
console.log(countLetters('hahaha', 'h')); // 3