const height = [58, 69, 87, 78, 99, 85, 45, 74, 65, 125];

function getMax(numbers) {
  let max = numbers[0];

  for (num of numbers) {
    if (num > max) {
      max = num;
    }
  }

  return max;
}

const maxHeight = getMax(height);
console.log("max height is: ", maxHeight);

function getMin(numbers) {
  let min = numbers[0];

  for (num of numbers) {
    if (num < min) {
      min = num;
    }
  }

  return min;
}

const minHeight = getMin(height);
console.log("min height is: ", minHeight);
