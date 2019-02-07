function findWaldo(arr, found) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === "Waldo") {
        found(i);   
      }
    }
  }
  
  function actionWhenFound(arr) {
    console.log("Found him!: " + arr);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);