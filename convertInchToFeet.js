// 12 inch = 1 feet

function inchToFeet(inch) {
  const feetFraction = inch / 12;
  const feetNumber = parseInt(feetFraction);
  const inchRemaining = inch % 12;
  const result = feetNumber + " ft " + inchRemaining + " inch. ";
  return result;
}

const myHeight = inchToFeet(66);
console.log(myHeight);
