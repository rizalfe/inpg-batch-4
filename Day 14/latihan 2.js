function reverseString (text) {
    var arr = []
    for(a = text.length; a >= 0; a--) {
      arr.push(text[a])
    }
    return arr.join('')
  }
  
  console.log(reverseString('Hello World and Coders'));
  console.log(reverseString('John Doe'));
  console.log(reverseString('I am a bookworm'));
  console.log(reverseString('Coding is my hobby'));
  console.log(reverseString('Super'));