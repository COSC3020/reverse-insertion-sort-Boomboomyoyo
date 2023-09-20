function insertionSortReverse(array) {
    // Start at the last element in the array, continue until i no longer references an element in the
    // array, and decrement i after each loop
    // First loop at array.length-1 would always be correctly sorted (1 element), so can skip that loop
    for(var i = array.length-2; i >= 0; i--) {
        // Store the value of the index so it can be used later
        var val = array[i];
        var j;
        // Seek the position in the array where val belongs
        // I found half on accident that I can omit half the termination condition here due to how the
        // loop is set up. 
        //for (j = i; j < array.length && array[j+1] < val; j++) {
        for (j = i; array[j+1] < val; j++) {
            // Swap values backwards if necessary
            array[j] = array[j+1];
        }
        array[j] = val;
    }
    return array;
}

// Code for reference. I think I mostly need to change the for loop setup to get the same result but reversed
/*function insertionSort(arr) {
    for(var i = 1; i < arr.length; i++) {
      var val = arr[i];
      var j;
      for(j = i; j > 0 && arr[j-1] > val; j--) {
        arr[j] = arr[j-1];
      }
      arr[j] = val;
    }
    return arr;
  }*/