var str = 'abcdefg'
var regex = /...de/g

console.log(regex.test(str))


function threeStepsAB (text) {
  
  var regex = /a...b/g
  var threeStepsAB = regex.test(text)
  
  return threeStepsAB;
 
}

console.log(threeStepsAB('lane borrowed')); 
console.log(threeStepsAB('i am sick')); 
console.log(threeStepsAB('you are boring')); 
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));



function threeStepsAB (text) {
  
  for (var i = 0; i < text.length; i++) {
    if (text[i] === 'a') {
    for (var g = i; g < text.length; g++) {
      if (text[g] === 'b') {
        return i <= g ? true: false;
        }
      }
    }    
  }
    return false; 
}
   

console.log(threeStepsAB('lane borrowed')); 
console.log(threeStepsAB('i am sick')); 
console.log(threeStepsAB('you are boring')); 
console.log(threeStepsAB('barbarian'));
console.log(threeStepsAB('bacon and meat'));