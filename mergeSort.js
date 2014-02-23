var mergeSort = function(array) {

  var merge = function(left, right) {
    var j = 0;
    var k = 0;
    var arr = [];

    while (left.length > j && right.length > k) {
      if (left[j] > right[k]) {
        arr.push(right[k]);
        k++;
      } else {
          arr.push(left[j]);
          j++;
      }
    }

    while (left.length > j) {
      arr.push(left[j]);
      j++;
    }

    while (right.length > k) {
      arr.push(right[k]);
      k++;
    }

    return arr;
  }

  var sort = function(array) {

    if (array.length < 2) {
      return array;
    }

    var left = [];
    var right = [];

    var midIndex = Math.floor(array.length/2);

    for (var i = 0; i < midIndex; i++) {
      left.push(array[i]);
    }

    for (var i = midIndex; i < array.length; i++) {
      right.push(array[i]);
    }

    return merge(sort(left), sort(right)); 

  }

  return sort(array);
}