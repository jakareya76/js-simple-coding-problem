function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 !== 0) {
      odds.push(number);
    }
  }

  let sum = 0;

  for (const odd of odds) {
    sum = sum + odd;
  }

  const count = odds.length;
  const avg = sum / count;

  return avg;
}

const numbers = [15, 47, 56, 52, 36, 89, 99, 101];
const oddAvg = oddAverage(numbers);
console.log(oddAvg);
