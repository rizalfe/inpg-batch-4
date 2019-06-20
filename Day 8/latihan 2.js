/**
* @param {Number} penumpang
* @param {Number} kecepatan
*/

function kecepatanBecak(penumpang) {
  var kecepatan = 20;
  var penumpang;
  
  if (penumpang > 2 && penumpang < 4) {
    kecepatan = kecepatan - 5
  } else if (penumpang === 4) {
    kecepatan = kecepatan - 7
  } else if (penumpang <= 2) {
    kecepatan = kecepatan - 2
  }
  return kecepatan
}

console.log(kecepatanBecak(2))