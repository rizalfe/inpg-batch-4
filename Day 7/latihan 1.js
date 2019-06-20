var name = prompt("nama anda");
var age = prompt("umur anda");
age = Number(age);
var money = prompt("uang yang anda miliki")
money = Number(money);
var juice = 50000;
var beer = 300000;

  if (name=="") {
    console.log(name)
  }

  if (name=="" && age=="" && money=="") {
    alert("anda tidak bisa masuk")
  }
  
  if (age < 17) {
    console.log("juice")
    console.log(money - juice)
  } else {
    if (age >= 17) {
      console.log("beer")
      console.log(money - beer)
    } else {
      if (money < juice && money < beer) {
        alert("uang anda tidak cukup")
      }
    }
  }
