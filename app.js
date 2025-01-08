function selectionSort(arr) {
    //variable for smallest number
  let min;
    //variables for comparing the numbers
  let i, j;
    //as long as the index hasen't reached the length, the index will increase.
  for (i = 0; i < arr.length - 1; i++) {
    //at first, the smallest number is considered i
    min = i;
    for (j = i + 1; j < arr.length; j++) {
    //if the j is smaller than current min (which we considered to be i), the min now will become j
      if (arr[j] < arr[min]) min = j;
    }
    //if the current min is j and not i, the function will swap the numbers
    if (min != i) {
      function swap(arr, num1, num2) {
        [arr[num1], arr[num2]] = [arr[num2], arr[num1]];
      }
      swap(arr, min, i);
    }
  }
}