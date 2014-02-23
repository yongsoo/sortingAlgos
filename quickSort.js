var quickSort = function(array) {

  if (array.length < 2) {
    return array;
  }

  var left = [];
  var right = [];
  var item;

  var midPos = Math.floor(array.length/2);
  var midVal = array[midPos];

  array = array.slice(0, midPos).concat(array.slice(midPos + 1));

  while (item = array.pop()) {
    if (item > midVal) {
      right.push(item);
    } else {
      left.push(item);
    }
  }

  return quickSort(left).concat([midVal], quickSort(right));

}