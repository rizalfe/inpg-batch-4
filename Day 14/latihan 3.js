function sortByCharacter (text) {
    var t = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var result = []
    
    for(a = text.length; a >= 0; a--) {
      result.push(text[a])
      result.sort(text[t])
    }
    return result.join('')
  }
  
  console.log(sortByCharacter('hello')); 
  console.log(sortByCharacter('truncate')); 
  console.log(sortByCharacter('developer')); 
  console.log(sortByCharacter('software')); 
  console.log(sortByCharacter('aegis')); 