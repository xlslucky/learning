// 参考链接： http://blog.csdn.net/u013063153/article/details/52667542
// 冒泡排序
var arr = [10, 9, 8, 7, 7, 6, 5, 11, 3];
// bubblingSort(arr);
function bubblingSort(arr) {
  // 用于缩小范围
  for (var i = arr.length - 1; i >= 0; i--) {
    // 在范围内进行冒泡，在此范围内最大的一个将冒到最后面
    for (var j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  console.log(arr)
}

// 选择排序
selectionSort(arr)
function selectionSort(arr) {
  var len = arr.length,
      minIndex,
      temp;
  for (var i = 0; i < len; i++) {
    minIndex = i;
    for (var j = i+1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  console.log(arr)
}
