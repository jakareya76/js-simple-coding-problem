const friends = ["arif", "suvas", "ajit", "dipu"];
const numbers = [5, 9, 3, 7, 6, 4, 8];

const firstArray = [5, 6, 8, 9, 3, 4];
const secondArray = [12, 36, 58, 89];

const checkEven = (arr) => {
  const newFriends = [];

  for (const name of arr) {
    const length = name.length;

    if (length % 2 === 0) {
      newFriends.push(name);
    }
  }

  return newFriends;
};

console.log(checkEven(friends));

const findSquareAvg = (arr) => {
  const squareNumbers = [];
  let sum = 0;

  for (const num of arr) {
    const square = num * num;
    squareNumbers.push(square);
  }

  for (numb of squareNumbers) {
    sum = sum + numb;
  }

  const avg = sum / squareNumbers.length;

  return avg;
};

console.log(findSquareAvg(numbers));

const findTheMax = (arr1, arr2) => {
  const newArray = [];

  for (num of arr1) {
    newArray.push(num);
  }

  for (num of arr2) {
    newArray.push(num);
  }

  let max = newArray[0];

  for (let i = 0; i < newArray.length; i++) {
    if (newArray[i] > max) {
      max = newArray[i];
    }
  }

  return max;
};

console.log(findTheMax(firstArray, secondArray));
