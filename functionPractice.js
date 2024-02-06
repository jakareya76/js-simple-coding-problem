// Make Average of number
function make_avg(arr) {
  if (arr.length === 0) {
    return "please provide a valid array";
  }

  let sum = 0;

  for (num of arr) {
    sum = sum + num;
  }

  const avg = sum / arr.length;

  return `Avrage of array is: ${avg}`;
}

const numbers = [58, 45, 23, 78, 65, 78, 56, 89];
const avg = make_avg(numbers);
console.log(avg);

// Count Zero in a string
function count_zero(str) {
  let zero = 0;

  for (let i = 0; i <= str.length; i++) {
    if (str[i] === "0") {
      zero++;
    }
  }

  return zero;
}

const binary = "01101000";
const zero = count_zero(binary);
console.log("0 in string is:", zero);

// Find Odd Even
function odd_even(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

const oddEven = odd_even(6);
console.log("the number is:", oddEven);
