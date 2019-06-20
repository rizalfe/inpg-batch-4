var arr = []

for(a = 1; a <= 30; a++) {
  if(a % 15 == 0) {
      arr.push('KASKUS')
    } else {
      if(a % 6 == 0) {
        arr.push('KUS')
      } else {
        if(a % 3 == 0) {
          arr.push('KAS')
        } else {
          arr.push(a)
        }
      }
    }
  }
  
console.log(arr)