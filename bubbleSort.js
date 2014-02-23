var bubbleSort = function(arr) {
  var sorted = false;

  while (!sorted) {
    sorted = true;

    for (var i = 1; i < arr.length; i++) {
      if (arr[i-1] > arr[i]) {
        sorted = false;
        var temp = arr[i-1];
        arr[i-1] = arr[i];
        arr[i] = temp;
      }
    }
  }

  return arr;
}