var penumpang = 0
var rpm = 20
var penumpang =prompt("jumlah penumpang")
penumpang =Number(penumpang)

if (penumpang < 2) {
  console.log( rpm - 5 );
} else {
  if (penumpang === 4) {
    console.log( rpm - 7 );
  } else {
    if (penumpang <= 4 ) {
      console.log( rpm - 2 )
    }
  }
}
