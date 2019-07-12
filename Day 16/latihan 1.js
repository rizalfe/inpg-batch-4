function grouping (scores) {
    // Your code here
    var result = {
      pass : [],
      fail: [],
    }
    
    for (i = 0; i < scores.length; i++) {
            if (scores[i] > 75) {
                result.pass.push(scores[i])
            } else {
                result.fail.push(scores[i])
            }
        }
        return result;
    }
  
  console.log(grouping([80, 45, 90, 65, 74, 100, 85, 30]));
  // { pass: [ 80, 90, 100, 85 ], fail: [ 45, 65, 74, 30 ] }
  
  console.log(grouping([]));
  // { pass: [], fail: [] }