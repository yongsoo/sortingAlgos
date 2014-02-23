var selectionSort = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var smallest = arr[i];

    for (var j = i; j < arr.length; j++) {
      if (smallest > arr[j]) {
        smallest = arr[j];
        var index = j;
      }
    }

    if (smallest !== arr[i]) {
      var temp = arr[i];
      arr[i] = smallest;
      arr[index] = temp;
    }
  }

  return arr;
}