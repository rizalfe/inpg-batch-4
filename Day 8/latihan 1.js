/**
 * @param {Number} nilai
 * @param {String} grade
 */

function hasilUlangan(nilai) {
  var grade;

  if (nilai <= 100 && nilai >= 85) {
    grade = "A"
  } else if (nilai <= 84 && nilai >= 75) {
    grade = "B"
  } else if (nilai <= 74 && nilai >= 65) {
    grade = "C"
  } else if (nilai <= 64 && nilai >= 55) {
    grade = "D"
  } else {
    grade = "E"
  }
  return grade
}

console.log(hasilUlangan(20))