var countdownGenerator = function (x) {
   var i = 4;
return function(x) {
i -= 1;
if (i < 0) {
    console.log('Rockets already gone')
} else if (i === 0) {
    console.log('Blast off!')
} else {
    console.log('T-minus' + i);
}
}    
  };
  
  var countdown = countdownGenerator(3);
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown(); 
  countdown();