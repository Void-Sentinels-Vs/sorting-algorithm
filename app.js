function selectionSort(arr) {
  let min;
  let i, j;
  for (i = 0; i < arr.length - 1; i++) {
    min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
    }
    if (min != i) {
      function swap(arr, num1, num2) {
        [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
      }
      swap(arr, min, i);
    }
  }
}