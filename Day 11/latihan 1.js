var arr = [[],[],[]]

for(a = 1; a <= 5; a++)
  arr[0].push(a)
  for(b = 6; b <= 10; b++)
    arr[1].push(b)
    for(c = 11; c <= 15; c++)
      arr[2].push(c)

console.log(arr)


var arr = [[],[],[]]

for(a = 1; a <= 5; a++) {
  arr[0].push(a)
  arr[1].push(a)
  arr[2].push(a)
}
  
console.log(arr)