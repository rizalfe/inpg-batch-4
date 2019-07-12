function csvToObject (text) {
  
    var result = {
      name: [],
      email: [],
      gender: [],
    }
    
    var a = text;
    var splitText = a.split(',');
    
    for (var i = 0; i < splitText.length; i++) {
    }
    result.name.push(splitText[0])
    result.email.push(splitText[1])
    result.gender.push(splitText[2])
    
    return result;
  }
  
  // TEST CASES
  console.log(csvToObject('Dimitri,dimitri@mail.com,male'));
  // { name: 'Dimitri', email: 'dimitri@mail.com', gender: 'male' }
  
  console.log(csvToObject('Icha,icha@mail.com,female'));
  // { name: 'Icha', email: 'icha@mail.com', gender: 'female' }
  
  console.log(csvToObject('Dhani,dhani@mail.com,male'));
  // { name: 'Dhani', email: 'dhani@mail.com', gender: 'male' }