var people = [
    [1, 'Dimitri', 'Hacktiv8'],
    [2, 'Dhani', 'Hacktiv8'],
    [3, 'Icha', 'Hacktiv8'],
    [4, 'Jono', 'Hacktiv8']
  ];

for(a = 0; a < people.length; a++) {
var id = people[a][0]
var name = people[a][1]
var company = people[a][2]

console.log(`ID: ${id} Name: ${name} Company: ${company}`)
}