var words = ["ground", "control", "to", "major", "tom"];

function myMap(arr, cb) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        results = cb(arr[i]);
        result.push(results);
    }
    console.log(result);
}


myMap(words, function(word) {
    return word.length;
  });

  myMap(words, function(word) {
    return word.toUpperCase();
  });

  myMap(words, function(word) {
    return word.split('').reverse().join('');
  });