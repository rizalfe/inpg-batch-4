var arr = [1, 2, 3, 4, 5]
var result = []

for(var a = 0; a < arr.length; a++) {
  var total = 1
   for(var b = 0; b < arr.length; b++) {
    if(arr[a] == arr[0]) {
      total = arr[1] * arr[2] * arr[3] * arr[4]
    } else {
      if(arr[a] == arr[1]) {
        total = arr[0] * arr[2] * arr[3] * arr[4]
      } else {
        if(arr[a] == arr[2]) {
          total = arr[0] * arr[1] * arr[3] * arr[4]
        } else {
          if(arr[a] == arr[3]) {
            total = arr[0] * arr[1] * arr[2] * arr[4]
          } else {
            if(arr[a] == arr[4]) {
              total = arr[0] * arr[1] * arr[2] * arr[3]
            }
          }
        }
      }
    }
  }
  result.push(total)
}
console.log(result)