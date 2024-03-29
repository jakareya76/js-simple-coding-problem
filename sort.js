function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
}

const unsortedArray = [64, 25, 12, 22, 11];
const sortedArray = quickSort(unsortedArray.slice());

console.log("Unsorted Array:", unsortedArray);
console.log("Sorted Array:", sortedArray);
