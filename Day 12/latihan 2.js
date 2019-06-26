var text = 'dimitri:dimitri@mail.com:male,icha:icha@mail.com:female,windi:windi@mail.com:female';

var textSplit = text.split(',')
var result = []

for(a = 0; a < textSplit.length; a++) {
  var x = textSplit[a].split(':')

console.log(x)
}